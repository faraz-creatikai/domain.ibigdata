"use client";

import { useEffect, useState } from "react";
import {
  X,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Link as LinkIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  PencilLine,
} from "lucide-react";
import toast from "react-hot-toast";

import { getCustomerById } from "@/store/customer";
import { useCustomerFieldLabel } from "@/context/customer/CustomerFieldLabelContext";
import PopupMenu from "./PopupMenu";

/* ============================================================
   TYPES
   getCustomerById returns the raw backend document (same shape
   you shared) - not the normalized customerAllDataInterface used
   by the edit form. We type that raw shape here.
   ============================================================ */

interface RefObj {
  _id?: string;
  Name?: string;
}

interface CustomerDetailData {
  _id: string;
  Campaign?: RefObj;
  CustomerType?: RefObj;
  CustomerSubType?: RefObj;
  LeadType?: string;
  customerName?: string;
  ContactNumber?: string;
  City?: RefObj;
  Location?: RefObj;
  SubLocation?: RefObj;
  Area?: string;
  Adderess?: string; // backend spelling, kept as-is
  Email?: string;
  Facillities?: string; // backend spelling, kept as-is
  ReferenceId?: string;
  CustomerId?: string;
  ClientId?: string;
  CustomerDate?: string | null;
  CustomerYear?: string;
  Other?: string;
  Description?: string;
  Video?: string;
  Verified?: string;
  GoogleMap?: string;
  URL?: string;
  Price?: string;
  PriceNumber?: number;
  CustomerFields?: Record<string, string>;
  CustomerImage?: string[];
  SitePlan?: string[];
  isFavourite?: boolean;
  LeadTemperature?: string;
  DealClosed?: boolean;
  createdAt?: string;
  updatedAt?: string;
  AssignTo?: { Name?: string } | { Name?: string }[] | null;
  CreatedBy?: { Name?: string } | null;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  customerId: string | null;
  /** optional - lets the parent open the edit dialog straight from here */
  onEdit?: (customerId: string) => void;
}

/* ============================================================
   HELPERS
   ============================================================ */

// "websiteExists" -> "Website Exists", "SEO-Optimised" -> "SEO Optimised"
const humanizeKey = (key: string) =>
  key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

const formatDate = (value?: string | null) => {
  if (!value) return "";
  const d = new Date(value);
  if (isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

const hasValue = (v: unknown) =>
  v !== undefined && v !== null && String(v).trim() !== "" && v !== "0";

// values longer than this read better on their own row than crammed into a grid column
const LONG_VALUE_THRESHOLD = 45;

/* ============================================================
   SMALL PRESENTATIONAL PIECES
   ============================================================ */

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)] mb-4">
    {children}
  </h3>
);

const DetailItem = ({
  label,
  value,
  fullWidth,
  icon,
  href,
}: {
  label: string;
  value: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  href?: string;
}) => (
  <div className={fullWidth ? "col-span-full" : ""}>
    <p className="text-xs font-medium text-gray-400 max-sm:dark:text-gray-500 uppercase tracking-wide mb-1">
      {label}
    </p>
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[15px] text-[var(--color-primary)] hover:underline break-words"
      >
        {icon}
        {value}
      </a>
    ) : (
      <p className="flex items-start gap-1.5 text-[15px] text-gray-800 max-sm:dark:text-gray-200 break-words leading-relaxed">
        {icon}
        <span>{value}</span>
      </p>
    )}
  </div>
);

const Badge = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "green" | "gray" | "red" | "amber" | "blue";
}) => {
  const colorMap: Record<string, string> = {
    green: "bg-green-100 text-green-700",
    gray: "bg-gray-100 text-gray-600",
    red: "bg-red-100 text-red-700",
    amber: "bg-amber-100 text-amber-700",
    blue: "bg-blue-100 text-blue-700",
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${colorMap[color]}`}>
      {children}
    </span>
  );
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function CustomerViewDialog({ isOpen, onClose, customerId, onEdit }: Props) {
  const { getLabel } = useCustomerFieldLabel();
  const [data, setData] = useState<CustomerDetailData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen || !customerId) return;

    const fetchCustomer = async () => {
      setLoading(true);
      try {
        const res = await getCustomerById(customerId);
        if (!res) {
          toast.error("Customer not found");
          onClose();
          return;
        }
        setData(res);
      } catch (error) {
        toast.error("Error fetching customer");
        onClose();
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [customerId, isOpen]);

  if (!isOpen) return null;

  const leadTempColor =
    data?.LeadTemperature === "hot" ? "red" : data?.LeadTemperature === "warm" ? "amber" : "blue";

  const assignedNames = Array.isArray(data?.AssignTo)
    ? data?.AssignTo.map((a) => a?.Name).filter(Boolean).join(", ")
    : data?.AssignTo?.Name;

  return (
    <PopupMenu onClose={onClose} isOpen={isOpen}>
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
        <div className="bg-white max-sm:dark:bg-[var(--color-childbgdark)] w-[900px] max-w-full rounded-2xl shadow-xl max-h-[90vh] flex flex-col">
          {/* HEADER (Fixed) */}
          <div className="flex justify-between items-start gap-4 border-b p-6">
            <div className="min-w-0">
              <h2 className="text-2xl font-bold max-sm:dark:text-[var(--color-primary)] truncate">
                {data?.customerName || "Customer Details"}
              </h2>
              {!loading && (
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {data?.isFavourite && (
                    <Badge color="amber">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="fill-current" /> Favourite
                      </span>
                    </Badge>
                  )}
                  {hasValue(data?.LeadTemperature) && (
                    <Badge color={leadTempColor as any}>
                      {(data!.LeadTemperature as string).toUpperCase()} LEAD
                    </Badge>
                  )}
                  {data?.DealClosed && <Badge color="green">Deal Closed</Badge>}
                  {hasValue(data?.Verified) && (
                    <Badge color={data?.Verified?.toLowerCase() === "yes" ? "green" : "gray"}>
                      {data?.Verified?.toLowerCase() === "yes" ? "Verified" : "Not Verified"}
                    </Badge>
                  )}
                  {data?.CustomerType?.Name && <Badge color="gray">{data.CustomerType.Name}</Badge>}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {onEdit && data && (
                <button
                  className="max-sm:dark:text-white hover:bg-[var(--color-primary)] hover:text-white p-2 rounded-md cursor-pointer flex items-center gap-1.5 text-sm font-medium"
                  onClick={() => onEdit(data._id)}
                >
                  <PencilLine size={18} /> <span className="max-sm:hidden">Edit</span>
                </button>
              )}
              <button
                className="max-sm:dark:text-white hover:bg-[var(--color-primary)] hover:text-white p-2 rounded-md cursor-pointer"
                onClick={onClose}
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* SCROLLABLE BODY */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="h-8 w-8 rounded-full border-2 border-gray-200 border-t-[var(--color-primary)] animate-spin" />
              </div>
            ) : data ? (
              <div className="space-y-8">
                {/* CONTACT & CLASSIFICATION */}
                <section>
                  <SectionTitle>Customer Information</SectionTitle>
                  <div className="grid grid-cols-3 gap-x-6 gap-y-5 max-xl:grid-cols-2 max-sm:grid-cols-1">
                    {hasValue(data.Campaign?.Name) && (
                      <DetailItem label={getLabel("Campaign", "Campaign")} value={data.Campaign!.Name!} />
                    )}
                    {hasValue(data.CustomerType?.Name) && (
                      <DetailItem
                        label={getLabel("CustomerType", "Customer Type")}
                        value={data.CustomerType!.Name!}
                      />
                    )}
                    {hasValue(data.CustomerSubType?.Name) && (
                      <DetailItem
                        label={getLabel("CustomerSubType", "Customer Subtype")}
                        value={data.CustomerSubType!.Name!}
                      />
                    )}
                    {hasValue(data.ContactNumber) && (
                      <DetailItem
                        label={getLabel("ContactNumber", "Contact No")}
                        value={data.ContactNumber!}
                        icon={<Phone size={14} className="mt-0.5 shrink-0" />}
                        href={`tel:${data.ContactNumber}`}
                      />
                    )}
                    {hasValue(data.Email) && (
                      <DetailItem
                        label={getLabel("Email", "Email")}
                        value={data.Email!}
                        icon={<Mail size={14} className="mt-0.5 shrink-0" />}
                        href={`mailto:${data.Email}`}
                      />
                    )}
                    {hasValue(data.City?.Name) && (
                      <DetailItem label={getLabel("City", "City")} value={data.City!.Name!} />
                    )}
                    {hasValue(data.Location?.Name) && (
                      <DetailItem label={getLabel("Location", "Location")} value={data.Location!.Name!} />
                    )}
                    {hasValue(data.SubLocation?.Name) && (
                      <DetailItem
                        label={getLabel("SubLocation", "Sub Location")}
                        value={data.SubLocation!.Name!}
                      />
                    )}
                    {hasValue(data.Area) && <DetailItem label={getLabel("Area", "Area")} value={data.Area!} />}
                    {hasValue(data.Adderess) && (
                      <DetailItem
                        label={getLabel("Address", "Address")}
                        value={data.Adderess!}
                        icon={<MapPin size={14} className="mt-0.5 shrink-0" />}
                        fullWidth={data.Adderess!.length > LONG_VALUE_THRESHOLD}
                      />
                    )}
                    {hasValue(data.GoogleMap) && (
                      <DetailItem
                        label={getLabel("GoogleMap", "Google Map")}
                        value="Open location"
                        icon={<MapPin size={14} className="mt-0.5 shrink-0" />}
                        href={data.GoogleMap}
                      />
                    )}
                  </div>
                </section>

                {/* BUSINESS / LEAD DETAILS */}
                {(hasValue(data.CustomerId) ||
                  hasValue(data.ClientId) ||
                  hasValue(data.ReferenceId) ||
                  hasValue(data.CustomerDate) ||
                  hasValue(data.CustomerYear) ||
                  hasValue(data.Price) ||
                  hasValue(data.LeadType) ||
                  hasValue(data.Facillities) ||
                  hasValue(data.URL) ||
                  hasValue(data.Video) ||
                  hasValue(data.Other) ||
                  assignedNames) && (
                  <section>
                    <SectionTitle>Lead &amp; Business Details</SectionTitle>
                    <div className="grid grid-cols-3 gap-x-6 gap-y-5 max-xl:grid-cols-2 max-sm:grid-cols-1">
                      {hasValue(data.CustomerId) && (
                        <DetailItem label={getLabel("CustomerId", "Customer ID")} value={data.CustomerId!} />
                      )}
                      {hasValue(data.ClientId) && (
                        <DetailItem label={getLabel("ClientId", "Client ID")} value={data.ClientId!} />
                      )}
                      {hasValue(data.ReferenceId) && (
                        <DetailItem label={getLabel("ReferenceId", "Reference Id")} value={data.ReferenceId!} />
                      )}
                      {hasValue(data.LeadType) && (
                        <DetailItem label={getLabel("LeadType", "Lead Type")} value={data.LeadType!} />
                      )}
                      {hasValue(data.Facillities) && (
                        <DetailItem label={getLabel("Facillities", "Facilities")} value={data.Facillities!} />
                      )}
                      {hasValue(data.Price) && (
                        <DetailItem label={getLabel("Price", "Price")} value={data.Price!} />
                      )}
                      {hasValue(data.CustomerDate) && (
                        <DetailItem
                          label={getLabel("CustomerDate", "Customer Date")}
                          value={formatDate(data.CustomerDate)}
                          icon={<Calendar size={14} className="mt-0.5 shrink-0" />}
                        />
                      )}
                      {hasValue(data.CustomerYear) && (
                        <DetailItem label={getLabel("CustomerYear", "Customer Year")} value={data.CustomerYear!} />
                      )}
                      {assignedNames && <DetailItem label="Assigned To" value={assignedNames} />}
                      {hasValue(data.URL) && (
                        <DetailItem
                          label={getLabel("URL", "URL")}
                          value={data.URL!}
                          icon={<LinkIcon size={14} className="mt-0.5 shrink-0" />}
                          href={data.URL}
                        />
                      )}
                      {hasValue(data.Video) && (
                        <DetailItem
                          label={getLabel("Video", "Video")}
                          value={data.Video!}
                          icon={<VideoIcon size={14} className="mt-0.5 shrink-0" />}
                          href={data.Video}
                        />
                      )}
                      {hasValue(data.Other) && (
                        <DetailItem
                          label={getLabel("Other", "Others")}
                          value={data.Other!}
                          fullWidth={data.Other!.length > LONG_VALUE_THRESHOLD}
                        />
                      )}
                    </div>
                  </section>
                )}

                {/* DESCRIPTION - long free text gets its own readable block */}
                {hasValue(data.Description) && (
                  <section>
                    <SectionTitle>{getLabel("Description", "Description")}</SectionTitle>
                    <p className="text-[15px] leading-relaxed text-gray-700 max-sm:dark:text-gray-300 bg-gray-50 max-sm:dark:bg-white/5 rounded-lg p-4 whitespace-pre-wrap">
                      {data.Description}
                    </p>
                  </section>
                )}

                {/* MEDIA */}
                {((data.CustomerImage && data.CustomerImage.length > 0) ||
                  (data.SitePlan && data.SitePlan.length > 0)) && (
                  <section>
                    <SectionTitle>Media</SectionTitle>
                    <div className="space-y-5">
                      {data.CustomerImage && data.CustomerImage.length > 0 && (
                        <div>
                          <p className="text-xs font-medium text-gray-400 max-sm:dark:text-gray-500 uppercase tracking-wide mb-2">
                            {getLabel("CustomerImage", "Customer Images")}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {data.CustomerImage.map((src, i) => (
                              <a key={i} href={src} target="_blank" rel="noopener noreferrer">
                                <img
                                  src={src}
                                  alt={`customer-${i}`}
                                  className="w-24 h-24 object-cover rounded-md border hover:opacity-80 transition"
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                      {data.SitePlan && data.SitePlan.length > 0 && (
                        <div>
                          <p className="text-xs font-medium text-gray-400 max-sm:dark:text-gray-500 uppercase tracking-wide mb-2">
                            {getLabel("SitePlan", "Site Plan")}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {data.SitePlan.map((src, i) => (
                              <a key={i} href={src} target="_blank" rel="noopener noreferrer">
                                <img
                                  src={src}
                                  alt={`site-plan-${i}`}
                                  className="w-24 h-24 object-cover rounded-md border hover:opacity-80 transition"
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {/* ADDITIONAL INFORMATION - dynamic custom fields */}
                {data.CustomerFields && Object.keys(data.CustomerFields).length > 0 && (
                  <section>
                    <SectionTitle>Additional Information</SectionTitle>
                    <div className="grid grid-cols-3 gap-x-6 gap-y-5 max-xl:grid-cols-2 max-sm:grid-cols-1">
                      {Object.entries(data.CustomerFields)
                        .filter(([, value]) => hasValue(value))
                        .map(([key, value]) => (
                          <DetailItem
                            key={key}
                            label={getLabel(key, humanizeKey(key))}
                            value={value}
                            fullWidth={value.length > LONG_VALUE_THRESHOLD}
                          />
                        ))}
                    </div>
                  </section>
                )}

                {/* META */}
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-400 max-sm:dark:text-gray-500 pt-2 border-t">
                  {data.createdAt && <span>Created {formatDate(data.createdAt)}</span>}
                  {data.updatedAt && <span>Last updated {formatDate(data.updatedAt)}</span>}
                  {data.CreatedBy?.Name && <span>By {data.CreatedBy.Name}</span>}
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-400 py-20">No data available.</p>
            )}
          </div>

          {/* FOOTER (Fixed) */}
          <div className="border-t p-6 flex justify-end gap-3">
            {onEdit && data && (
              <button
                className="px-5 py-2.5 rounded-md text-sm font-medium border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition cursor-pointer"
                onClick={() => onEdit(data._id)}
              >
                Edit Customer
              </button>
            )}
            <button
              className="px-5 py-2.5 rounded-md text-sm font-medium bg-[var(--color-primary)] text-white hover:opacity-90 transition cursor-pointer"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </PopupMenu>
  );
}