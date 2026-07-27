'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { getCustomer } from '@/store/customer';
import { getCampaign } from '@/store/masters/campaign/campaign';
import { getTypesByCampaign } from '@/store/masters/types/types';
import { getSubtypeByCampaignAndType } from '@/store/masters/subtype/subtype';
import { getCity } from '@/store/masters/city/city';
import { getLocationByCity } from '@/store/masters/location/location';
import { getsubLocationByCityLoc } from '@/store/masters/sublocation/sublocation';
import CustomDropdown, { DropdownOption } from '../CustomDropdown';
import { assignCustomer } from '@/store/customer';
import toast from 'react-hot-toast';
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE, isoToFlagEmoji } from '@/app/utils/countryCodes';

interface RecipientItem {
  _id: string;
  name: string;
  email?: string;
  role?: string; // "city_admin" | "user" | ...
  city?: string;
}

export interface AssignCustomersPopupProps {
  isOpen: boolean;
  onClose: () => void;

  // Recipients (Step 1) — owned by parent, same as your old fetchUsers/users flow
  users: RecipientItem[];
  isFetchingUsers: boolean;
  fetchUsers: () => void;

  // Optional: if the admin pre-selected rows in the customer table before
  // clicking "Assign", pre-check them in Step 2 (still fully editable there)
  initialSelectedCustomerIds?: string[];

  onAssigned?: () => void; // e.g. getCustomers()
}

const PAGE_SIZE = 100;

const SearchIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" strokeWidth={2} />
    <path d="m21 21-4.35-4.35" strokeWidth={2} strokeLinecap="round" />
  </svg>
);
const XIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const ChevronLeft = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const Spinner = ({ className = '' }: { className?: string }) => (
  <div className={`rounded-full border-2 border-current border-t-transparent animate-spin ${className}`} />
);
const CheckboxIcon = ({ checked, indeterminate }: { checked: boolean; indeterminate?: boolean }) => (
  <div
    className="w-4 h-4 rounded-[4px] flex items-center justify-center flex-shrink-0 transition-all duration-150"
    style={{
      background: checked ? 'var(--color-primary)' : indeterminate ? '#bae6fd' : '#fff',
      border: checked ? '2px solid var(--color-primary)' : indeterminate ? '2px solid var(--color-primary)' : '2px solid #cbd5e1',
    }}
  >
    {checked && (
      <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none">
        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
    {!checked && indeterminate && (
      <div className="w-2 h-0.5 rounded-full" style={{ background: 'var(--color-primary)' }} />
    )}
  </div>
);

const RoleBadge = ({ role }: { role?: string }) => {
  if (!role) return null;
  const isCityAdmin = role === 'city_admin';
  return (
    <span
      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md flex-shrink-0 ${isCityAdmin ? 'bg-indigo-50 text-indigo-700' : 'bg-teal-50 text-teal-700'
        }`}
    >
      {isCityAdmin ? 'City Admin' : 'User'}
    </span>
  );
};

const AssignCustomersPopup: React.FC<AssignCustomersPopupProps> = ({
  isOpen,
  onClose,
  users,
  isFetchingUsers,
  fetchUsers,
  initialSelectedCustomerIds = [],
  onAssigned,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [action, setAction] = useState<'assign' | 'remove'>('assign');

  // ── Step 1: recipients ──
  const [recipientSearch, setRecipientSearch] = useState('');
  const [selectedRecipients, setSelectedRecipients] = useState<Set<string>>(new Set());

  // ── Step 2: customers ──
  const [customersList, setCustomersList] = useState<any[]>([]);
  const [loadingCustomers, setLoadingCustomers] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const [campaigns, setCampaigns] = useState<DropdownOption[]>([]);
  const [types, setTypes] = useState<DropdownOption[]>([]);
  const [subtypes, setSubtypes] = useState<DropdownOption[]>([]);
  const [citys, setCitys] = useState<DropdownOption[]>([]);
  const [locations, setLocations] = useState<DropdownOption[]>([]);
  const [sublocations, setSublocations] = useState<DropdownOption[]>([]);

  const [loadingCampaigns, setLoadingCampaigns] = useState(false);
  const [loadingTypes, setLoadingTypes] = useState(false);
  const [loadingSubtypes, setLoadingSubtypes] = useState(false);
  const [loadingCity, setLoadingCity] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [loadingSubLocation, setLoadingSubLocation] = useState(false);

  const [filterCampaign, setFilterCampaign] = useState<DropdownOption | null>(null);
  const [filterType, setFilterType] = useState<DropdownOption | null>(null);
  const [filterSubType, setFilterSubType] = useState<DropdownOption | null>(null);
  const [filterCity, setFilterCity] = useState<DropdownOption | null>(null);
  const [filterLocation, setFilterLocation] = useState<DropdownOption | null>(null);
  const [filterSubLocation, setFilterSubLocation] = useState<DropdownOption | null>(null);

  const activeFilterCount =
    (filterCampaign ? 1 : 0) + (filterType ? 1 : 0) + (filterSubType ? 1 : 0) +
    (filterCity ? 1 : 0) + (filterLocation ? 1 : 0) + (filterSubLocation ? 1 : 0);

  const clearAllFilters = () => {
    setFilterCampaign(null); setFilterType(null); setFilterSubType(null);
    setFilterCity(null); setFilterLocation(null); setFilterSubLocation(null);
  };

  // ── Reset + bootstrap on open ──
  useEffect(() => {
    if (!isOpen) return;

    setStep(1);
    setAction('assign');
    setRecipientSearch('');
    setSelectedRecipients(new Set());
    setSearch('');
    setSelected(new Set(initialSelectedCustomerIds));
    setSuccessMsg('');
    setVisibleCount(PAGE_SIZE);
    clearAllFilters();
    setCustomersList([]);

    fetchUsers(); // reuse your existing fetch — same source as the old ListPopup

    const loadMasters = async () => {
      setLoadingCampaigns(true);
      setLoadingCity(true);
      try {
        const [campRes, cityRes] = await Promise.all([getCampaign(), getCity()]);
        if (campRes) setCampaigns(campRes.map((c: any) => ({ _id: c._id, Name: c.Name })));
        if (cityRes) setCitys(cityRes.map((c: any) => ({ _id: c._id, Name: c.Name })));
      } finally {
        setLoadingCampaigns(false);
        setLoadingCity(false);
      }
    };
    loadMasters();
  }, [isOpen]);

  // Load customers only once entering step 2 (avoid wasted call if user cancels on step 1)
  useEffect(() => {
    if (!isOpen || step !== 2 || customersList.length > 0) return;
    const load = async () => {
      setLoadingCustomers(true);
      try {
        const res: any = await getCustomer();
        if (res) setCustomersList(Array.isArray(res.data) ? res.data : (Array.isArray(res) ? res : []));
      } finally {
        setLoadingCustomers(false);
        setTimeout(() => searchRef.current?.focus(), 60);
      }
    };
    load();
  }, [isOpen, step]);

  useEffect(() => {
    setFilterType(null); setFilterSubType(null); setTypes([]); setSubtypes([]);
    if (!filterCampaign) return;
    const load = async () => {
      setLoadingTypes(true);
      try {
        const res = await getTypesByCampaign(filterCampaign._id);
        if (res) setTypes(res.map((t: any) => ({ _id: t._id, Name: t.Name })));
      } finally { setLoadingTypes(false); }
    };
    load();
  }, [filterCampaign]);

  useEffect(() => {
    setFilterSubType(null); setSubtypes([]);
    if (!filterCampaign || !filterType) return;
    const load = async () => {
      setLoadingSubtypes(true);
      try {
        const res = await getSubtypeByCampaignAndType(filterCampaign._id, filterType._id);
        if (res) setSubtypes(res.map((s: any) => ({ _id: s._id, Name: s.Name })));
      } finally { setLoadingSubtypes(false); }
    };
    load();
  }, [filterType, filterCampaign]);

  useEffect(() => {
    setFilterLocation(null); setFilterSubLocation(null); setLocations([]); setSublocations([]);
    if (!filterCity) return;
    const load = async () => {
      setLoadingLocation(true);
      try {
        const res = await getLocationByCity(filterCity._id);
        if (res) setLocations(res.map((t: any) => ({ _id: t._id, Name: t.Name })));
      } finally { setLoadingLocation(false); }
    };
    load();
  }, [filterCity]);

  useEffect(() => {
    setFilterSubLocation(null); setSublocations([]);
    if (!filterCity || !filterLocation) return;
    const load = async () => {
      setLoadingSubLocation(true);
      try {
        const res = await getsubLocationByCityLoc(filterCity._id, filterLocation._id);
        if (res) setSublocations(res.map((s: any) => ({ _id: s._id, Name: s.Name })));
      } finally { setLoadingSubLocation(false); }
    };
    load();
  }, [filterLocation, filterCity]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, filterCampaign, filterType, filterSubType, filterCity, filterLocation, filterSubLocation]);

  // ── Step 1 derived data ──
  const filteredRecipients = useMemo(() => {
    if (!recipientSearch.trim()) return users;
    const q = recipientSearch.toLowerCase();
    return users.filter(
      (u) =>
        u.name?.toLowerCase().includes(q) ||
        u.email?.toLowerCase().includes(q) ||
        u.city?.toLowerCase().includes(q) ||
        u.role?.toLowerCase().includes(q)
    );
  }, [users, recipientSearch]);

  const toggleRecipient = (id: string) => {
    setSelectedRecipients((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const recipientLabel = useMemo(() => {
    if (selectedRecipients.size === 0) return '';
    const names = users
      .filter((u) => selectedRecipients.has(u._id))
      .map((u) => u.name);
    if (names.length <= 2) return names.join(', ');
    return `${names[0]}, ${names[1]} +${names.length - 2} more`;
  }, [selectedRecipients, users]);

  // ── Step 2 derived data ──
  const filtered = useMemo(() => {
    let result = customersList;
    if (filterCampaign) result = result.filter((c) => c.Campaign === filterCampaign.Name);
    if (filterType) result = result.filter((c) => c.CustomerType === filterType.Name);
    if (filterSubType) result = result.filter((c) => c.CustomerSubType === filterSubType.Name);
    if (filterCity) result = result.filter((c) => c.City === filterCity.Name);
    if (filterLocation) result = result.filter((c) => c.Location === filterLocation.Name);
    if (filterSubLocation) result = result.filter((c) => c.SubLocation === filterSubLocation.Name);

    if (!search.trim()) return result;
    const q = search.toLowerCase();
    return result.filter(
      (c) =>
        c.customerName?.toLowerCase().includes(q) ||
        c.Campaign?.toLowerCase().includes(q) ||
        c.CustomerType?.toLowerCase().includes(q) ||
        c.Location?.toLowerCase().includes(q)
    );
  }, [customersList, search, filterCampaign, filterType, filterSubType, filterCity, filterLocation, filterSubLocation]);

  const visibleFiltered = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const remaining = filtered.length - visibleCount;

  const allSelected = filtered.length > 0 && filtered.every((c) => selected.has(c._id));
  const someSelected = filtered.some((c) => selected.has(c._id)) && !allSelected;

  const toggleOne = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allSelected) filtered.forEach((c) => next.delete(c._id));
      else filtered.forEach((c) => next.add(c._id));
      return next;
    });
  };

  const goToStep2 = () => {
    if (selectedRecipients.size === 0) {
      toast.error('Please select at least one recipient');
      return;
    }
    setStep(2);
  };

  const handleSubmit = async () => {
    if (selected.size === 0) {
      toast.error('Please select at least one customer');
      return;
    }
    if (submitting) return;
    setSubmitting(true);

    try {
      const payload = {
        assignToId: Array.from(selectedRecipients),
        action,
        customerIds: Array.from(selected),
      };

      const result = await assignCustomer(payload);

      if (result?.success) {
        setSuccessMsg(action === 'remove' ? 'Unassigned!' : 'Assigned!');
        toast.success(
          action === 'remove' ? 'Customers unassigned successfully' : 'Customers assigned successfully'
        );
        setTimeout(() => {
          setSuccessMsg('');
          onAssigned?.();
          onClose();
        }, 900);
      } else {
        toast.error(result?.message || 'Something went wrong');
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const title =
    step === 1
      ? action === 'remove' ? 'Remove From Whom?' : 'Assign To Whom?'
      : action === 'remove' ? 'Remove Which Customers?' : 'Assign Which Customers?';

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-0 sm:p-6"
      style={{ background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="w-full h-full sm:w-[90vw] sm:h-[92vh] bg-white flex flex-col overflow-hidden rounded-none sm:rounded-2xl"
        style={{
          maxWidth: '1400px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
          animation: 'modal-pop 0.2s cubic-bezier(0.34,1.56,0.64,1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header: title + step dots + assign/remove toggle + close, all in one row ── */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            {step === 2 && (
              <button
                onClick={() => setStep(1)}
                className="w-8 h-8 -ml-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer flex-shrink-0"
              >
                <ChevronLeft />
              </button>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <h3 className="text-[17px] font-bold text-gray-900 leading-tight tracking-tight truncate">
                  {title}
                </h3>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <span className={`h-1.5 w-5 rounded-full transition-colors ${step >= 1 ? 'bg-[var(--color-primary)]' : 'bg-gray-200'}`} />
                  <span className={`h-1.5 w-5 rounded-full transition-colors ${step >= 2 ? 'bg-[var(--color-primary)]' : 'bg-gray-200'}`} />
                </div>
              </div>
              {step === 2 && recipientLabel && (
                <p className="text-[12px] text-gray-400 mt-0.5 truncate">
                  {action === 'remove' ? 'Removing from' : 'Assigning to'}{' '}
                  <span className="font-semibold text-gray-600">{recipientLabel}</span>
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex gap-1 p-1 bg-gray-100 rounded-lg text-sm font-medium">
              <button
                onClick={() => setAction('assign')}
                className={`px-4 py-1.5 rounded-md cursor-pointer transition-all ${action === 'assign' ? 'bg-white text-[var(--color-primary)] shadow-sm' : 'text-gray-400 hover:text-gray-600'
                  }`}
              >
                Assign
              </button>
              <button
                onClick={() => setAction('remove')}
                className={`px-4 py-1.5 rounded-md cursor-pointer transition-all ${action === 'remove' ? 'bg-white text-red-500 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                  }`}
              >
                Remove
              </button>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <XIcon />
            </button>
          </div>
        </div>

        {/* ══════════════ STEP 1: RECIPIENTS ══════════════ */}
        {step === 1 && (
          <>
            <div className="px-6 pt-4 pb-3 flex-shrink-0 flex items-center gap-3">
              <div className="relative flex-1 max-w-md">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  value={recipientSearch}
                  onChange={(e) => setRecipientSearch(e.target.value)}
                  placeholder="Search by name, email, city, or role…"
                  className="w-full pl-9 pr-4 py-2.5 text-[13px] rounded-xl border outline-none transition-all bg-gray-50 border-gray-200 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 text-gray-800"
                />
              </div>
              {selectedRecipients.size > 0 && (
                <span className="text-[11px] font-semibold text-[var(--color-primary)] bg-[var(--color-primary-lighter)] px-2.5 py-1.5 rounded-full flex-shrink-0 whitespace-nowrap">
                  {selectedRecipients.size} selected
                </span>
              )}
              <span className="ml-auto text-[11px] font-medium text-gray-400 flex-shrink-0 whitespace-nowrap">
                {filteredRecipients.length} available
              </span>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-6" style={{ scrollbarWidth: 'thin', scrollbarColor: '#e2e8f0 transparent' }}>
              {isFetchingUsers ? (
                <div className="flex flex-col items-center justify-center h-full gap-3">
                  <Spinner className="w-7 h-7 text-[var(--color-primary-light)] border-t-[var(--color-primary)]" />
                  <p className="text-[13px] text-gray-400">Loading recipients…</p>
                </div>
              ) : filteredRecipients.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-2">
                  <p className="text-[13px] text-gray-400">No matching city admins or users found.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                  {filteredRecipients.map((u) => {
                    const isSelected = selectedRecipients.has(u._id);
                    return (
                      <div
                        key={u._id}
                        onClick={() => toggleRecipient(u._id)}
                        className="flex items-center cursor-pointer gap-3 p-3.5 rounded-xl border transition-colors hover:border-gray-300"
                        style={{
                          background: isSelected ? '#f0f9ff' : '#fff',
                          borderColor: isSelected ? 'var(--color-primary)' : '#e5e7eb',
                        }}
                      >
                        <CheckboxIcon checked={isSelected} />
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-lighter)] text-[var(--color-primary)] flex items-center justify-center font-bold text-[12px] flex-shrink-0">
                          {u.name?.charAt(0).toUpperCase() || '?'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-[13px] font-semibold text-gray-800 truncate">{u.name}</p>
                            <RoleBadge role={u.role} />
                          </div>
                          <p className="text-[11px] text-gray-400 truncate mt-0.5">
                            {[u.email, u.city].filter(Boolean).join(' · ')}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex-shrink-0 border-t border-gray-100 px-6 py-4 bg-[#fafafa]">
              <div className="flex items-center gap-3 max-w-md ml-auto">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl cursor-pointer text-[13px] font-semibold border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={goToStep2}
                  disabled={selectedRecipients.size === 0}
                  className="flex-[2] py-3 rounded-xl cursor-pointer text-[13px] font-bold text-white transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: 'var(--color-primary)' }}
                >
                  Next: Select Customers ({selectedRecipients.size})
                </button>
              </div>
            </div>
          </>
        )}

        {/* ══════════════ STEP 2: CUSTOMERS ══════════════ */}
        {step === 2 && (
          <>
            <div className="px-6 pt-4 pb-3 flex-shrink-0 flex flex-wrap items-center gap-2 border-b border-gray-100">
              <div className="relative w-full sm:w-64 flex-shrink-0">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <SearchIcon />
                </span>
                <input
                  ref={searchRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search customer, location, type…"
                  className="w-full pl-9 pr-4 py-2.5 text-[13px] rounded-xl border outline-none transition-all bg-gray-50 border-gray-200 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 text-gray-800"
                />
              </div>

              <div className="w-32"><CustomDropdown options={campaigns} value={filterCampaign?._id ?? null} onChange={(opt) => setFilterCampaign(opt)} placeholder="Campaign" loading={loadingCampaigns} /></div>
              <div className="w-32"><CustomDropdown options={types} value={filterType?._id ?? null} onChange={(opt) => setFilterType(opt)} placeholder="Type" loading={loadingTypes} disabled={!filterCampaign} /></div>
              <div className="w-32"><CustomDropdown options={subtypes} value={filterSubType?._id ?? null} onChange={(opt) => setFilterSubType(opt)} placeholder="Sub-type" loading={loadingSubtypes} disabled={!filterType} /></div>
              <div className="w-32"><CustomDropdown options={citys} value={filterCity?._id ?? null} onChange={(opt) => setFilterCity(opt)} placeholder="City" loading={loadingCity} /></div>
              <div className="w-32"><CustomDropdown options={locations} value={filterLocation?._id ?? null} onChange={(opt) => setFilterLocation(opt)} placeholder="Location" loading={loadingLocation} disabled={!filterCity} /></div>
              <div className="w-32"><CustomDropdown options={sublocations} value={filterSubLocation?._id ?? null} onChange={(opt) => setFilterSubLocation(opt)} placeholder="Sub-location" loading={loadingSubLocation} disabled={!filterLocation} /></div>

              <div className="ml-auto flex items-center gap-3 flex-shrink-0">
                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-md transition-colors cursor-pointer text-[var(--color-primary)] bg-[var(--color-primary-lighter)] hover:bg-[var(--color-primary-light)] whitespace-nowrap"
                  >
                    Clear All ({activeFilterCount})
                  </button>
                )}
                <span className="text-[11px] font-medium text-gray-400 whitespace-nowrap">
                  {filtered.length} customer{filtered.length === 1 ? '' : 's'}
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#e2e8f0 transparent' }}>
              {loadingCustomers ? (
                <div className="flex flex-col items-center justify-center h-full gap-3">
                  <Spinner className="w-7 h-7 text-[var(--color-primary-light)] border-t-[var(--color-primary)]" />
                  <p className="text-[13px] text-gray-400">Loading customers…</p>
                </div>
              ) : filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-2">
                  <p className="text-[13px] text-gray-400">No customers found.</p>
                  {activeFilterCount > 0 && (
                    <button onClick={clearAllFilters} className="text-[12px] font-semibold text-[var(--color-primary)] cursor-pointer">
                      Clear filters
                    </button>
                  )}
                </div>
              ) : (
                <table className="w-full border-collapse">
                  <thead className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm">
                    <tr className="border-b border-gray-100">
                      <th className="w-11 px-6 py-2.5 text-left">
                        <div onClick={toggleAll} className="inline-flex cursor-pointer">
                          <CheckboxIcon checked={allSelected} indeterminate={someSelected} />
                        </div>
                      </th>
                      <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400">Name</th>
                      <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400">Campaign</th>
                      <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400">Type</th>
                      <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400">Sub Type</th>
                      <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400">Contact No</th>
                      <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400">City</th>
                      <th className="px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400 pr-6">Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {visibleFiltered.map((c) => {
                      const isSelected = selected.has(c._id);
                      const locationLabel = [c.Location, c.City].filter(Boolean).join(', ');
                      return (
                        <tr
                          key={c._id}
                          onClick={() => toggleOne(c._id)}
                          className="cursor-pointer transition-colors hover:bg-gray-50"
                          style={{ background: isSelected ? '#f0f9ff' : 'transparent' }}
                        >
                          <td className="px-6 py-3"><CheckboxIcon checked={isSelected} /></td>
                          <td className="px-3 py-3">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-lighter)] text-[var(--color-primary)] flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                                {c.customerName?.charAt(0).toUpperCase() || 'C'}
                              </div>
                              <p className="text-[13px] font-semibold text-gray-800 truncate">{c.customerName || 'Unnamed Customer'}</p>
                            </div>
                          </td>
                          <td className="px-3 py-3">
                            {c.Campaign ? (
                              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 whitespace-nowrap">{c.Campaign}</span>
                            ) : (
                              <span className="text-[12px] text-gray-300">—</span>
                            )}
                          </td>
                          <td className="px-3 py-3">
                            {c.CustomerType ? (
                              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 whitespace-nowrap">{c.CustomerType}</span>
                            ) : (
                              <span className="text-[12px] text-gray-300">—</span>
                            )}
                          </td>
                          <td className="px-3 py-3">
                            {c.CustomerSubType ? (
                              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 whitespace-nowrap">{c.CustomerSubType}</span>
                            ) : (
                              <span className="text-[12px] text-gray-300">—</span>
                            )}
                          </td>
                          <td className="px-3 py-3">
                            {c.ContactNumber ? (
                              (() => {
                                const countryInfo =
                                  COUNTRY_CODES.find((e) => e.code === (c.CountryCode || DEFAULT_COUNTRY_CODE)) ||
                                  COUNTRY_CODES.find((e) => e.code === DEFAULT_COUNTRY_CODE)!;

                                return (
                                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 whitespace-nowrap">
                                    <span
                                      className=""
                                      style={{
                                        fontFamily:
                                          "'Noto Color Emoji', 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif",
                                      }}
                                    >
                                      {isoToFlagEmoji(countryInfo.iso2)}
                                    </span>

                                    <span className="text-gray-500 text-xs mr-1 ">
                                      +{countryInfo.code}
                                    </span>

                                    {c.ContactNumber}
                                  </span>
                                );
                              })()
                            ) : (
                              <span className="text-[12px] text-gray-300">—</span>
                            )}
                          </td>

                          <td className="px-3 py-3">
                            {c.City ? (
                              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 whitespace-nowrap">{c.City}</span>
                            ) : (
                              <span className="text-[12px] text-gray-300">—</span>
                            )}
                          </td>
                          <td className="px-3 py-3 pr-6 text-[12px] text-gray-500 truncate max-w-[240px]">
                            {locationLabel || '—'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}

              {hasMore && (
                <button
                  onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                  className="w-full cursor-pointer py-3 text-[12px] font-medium border-t border-gray-100 transition-colors text-gray-500 hover:text-[var(--color-primary)] hover:bg-gray-50"
                >
                  Load {Math.min(PAGE_SIZE, remaining)} more ({remaining} left)
                </button>
              )}
            </div>

            <div className="flex-shrink-0 border-t border-gray-100 px-6 py-4 bg-[#fafafa]">
              <div className="flex items-center gap-3 max-w-md ml-auto">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-xl cursor-pointer text-[13px] font-semibold border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={selected.size === 0 || submitting}
                  className="flex-[2] py-3 rounded-xl cursor-pointer text-[13px] font-bold text-white flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: action === 'remove' ? '#ef4444' : 'var(--color-primary)',
                    boxShadow: selected.size > 0 ? '0 4px 12px rgba(2,132,199,0.3)' : 'none',
                  }}
                >
                  {submitting ? (
                    <Spinner className="w-4 h-4 border-white border-t-transparent/30" />
                  ) : successMsg ? (
                    successMsg
                  ) : (
                    `${action === 'remove' ? 'Remove' : 'Assign'} ${selected.size} Customer${selected.size === 1 ? '' : 's'}`
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes modal-pop {
          from { transform: scale(0.97); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AssignCustomersPopup;