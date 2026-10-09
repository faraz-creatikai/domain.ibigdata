(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/component/popups/AssignCustomerPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/customer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$campaign$2f$campaign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/campaign/campaign.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/types/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$subtype$2f$subtype$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/subtype/subtype.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$city$2f$city$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/city/city.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$location$2f$location$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/location/location.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$sublocation$2f$sublocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/sublocation/sublocation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/CustomDropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/countryCodes.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const PAGE_SIZE = 100;
const SearchIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "8",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m21 21-4.35-4.35",
                strokeWidth: 2,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = SearchIcon;
const XIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M6 18L18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
            lineNumber: 50,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = XIcon;
const ChevronLeft = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2.2,
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 19l-7-7 7-7"
        }, void 0, false, {
            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
            lineNumber: 55,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = ChevronLeft;
const Spinner = ({ className = '' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-full border-2 border-current border-t-transparent animate-spin ${className}`
    }, void 0, false, {
        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Spinner;
const CheckboxIcon = ({ checked, indeterminate })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-4 h-4 rounded-[4px] flex items-center justify-center flex-shrink-0 transition-all duration-150",
        style: {
            background: checked ? 'var(--color-primary)' : indeterminate ? '#bae6fd' : '#fff',
            border: checked ? '2px solid var(--color-primary)' : indeterminate ? '2px solid var(--color-primary)' : '2px solid #cbd5e1'
        },
        children: [
            checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-2.5 h-2.5",
                viewBox: "0 0 12 12",
                fill: "none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 6l3 3 5-5",
                    stroke: "white",
                    strokeWidth: 2.2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !checked && indeterminate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2 h-0.5 rounded-full",
                style: {
                    background: 'var(--color-primary)'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = CheckboxIcon;
const RoleBadge = ({ role })=>{
    if (!role) return null;
    const isCityAdmin = role === 'city_admin';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `text-[10px] font-semibold px-1.5 py-0.5 rounded-md flex-shrink-0 ${isCityAdmin ? 'bg-indigo-50 text-indigo-700' : 'bg-teal-50 text-teal-700'}`,
        children: isCityAdmin ? 'City Admin' : 'User'
    }, void 0, false, {
        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = RoleBadge;
const AssignCustomersPopup = ({ isOpen, onClose, users, isFetchingUsers, fetchUsers, initialSelectedCustomerIds = [], onAssigned })=>{
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('assign');
    // ── Step 1: recipients ──
    const [recipientSearch, setRecipientSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedRecipients, setSelectedRecipients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // ── Step 2: customers ──
    const [customersList, setCustomersList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingCustomers, setLoadingCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [successMsg, setSuccessMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(PAGE_SIZE);
    const [campaigns, setCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [types, setTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subtypes, setSubtypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [citys, setCitys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sublocations, setSublocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingCampaigns, setLoadingCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingTypes, setLoadingTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingSubtypes, setLoadingSubtypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingCity, setLoadingCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingLocation, setLoadingLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingSubLocation, setLoadingSubLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filterCampaign, setFilterCampaign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterSubType, setFilterSubType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterCity, setFilterCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterLocation, setFilterLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterSubLocation, setFilterSubLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeFilterCount = (filterCampaign ? 1 : 0) + (filterType ? 1 : 0) + (filterSubType ? 1 : 0) + (filterCity ? 1 : 0) + (filterLocation ? 1 : 0) + (filterSubLocation ? 1 : 0);
    const clearAllFilters = ()=>{
        setFilterCampaign(null);
        setFilterType(null);
        setFilterSubType(null);
        setFilterCity(null);
        setFilterLocation(null);
        setFilterSubLocation(null);
    };
    // ── Reset + bootstrap on open ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssignCustomersPopup.useEffect": ()=>{
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
            const loadMasters = {
                "AssignCustomersPopup.useEffect.loadMasters": async ()=>{
                    setLoadingCampaigns(true);
                    setLoadingCity(true);
                    try {
                        const [campRes, cityRes] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$campaign$2f$campaign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCampaign"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$city$2f$city$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCity"])()
                        ]);
                        if (campRes) setCampaigns(campRes.map({
                            "AssignCustomersPopup.useEffect.loadMasters": (c)=>({
                                    _id: c._id,
                                    Name: c.Name
                                })
                        }["AssignCustomersPopup.useEffect.loadMasters"]));
                        if (cityRes) setCitys(cityRes.map({
                            "AssignCustomersPopup.useEffect.loadMasters": (c)=>({
                                    _id: c._id,
                                    Name: c.Name
                                })
                        }["AssignCustomersPopup.useEffect.loadMasters"]));
                    } finally{
                        setLoadingCampaigns(false);
                        setLoadingCity(false);
                    }
                }
            }["AssignCustomersPopup.useEffect.loadMasters"];
            loadMasters();
        }
    }["AssignCustomersPopup.useEffect"], [
        isOpen
    ]);
    // Load customers only once entering step 2 (avoid wasted call if user cancels on step 1)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssignCustomersPopup.useEffect": ()=>{
            if (!isOpen || step !== 2 || customersList.length > 0) return;
            const load = {
                "AssignCustomersPopup.useEffect.load": async ()=>{
                    setLoadingCustomers(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomer"])();
                        if (res) setCustomersList(Array.isArray(res.data) ? res.data : Array.isArray(res) ? res : []);
                    } finally{
                        setLoadingCustomers(false);
                        setTimeout({
                            "AssignCustomersPopup.useEffect.load": ()=>searchRef.current?.focus()
                        }["AssignCustomersPopup.useEffect.load"], 60);
                    }
                }
            }["AssignCustomersPopup.useEffect.load"];
            load();
        }
    }["AssignCustomersPopup.useEffect"], [
        isOpen,
        step
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssignCustomersPopup.useEffect": ()=>{
            setFilterType(null);
            setFilterSubType(null);
            setTypes([]);
            setSubtypes([]);
            if (!filterCampaign) return;
            const load = {
                "AssignCustomersPopup.useEffect.load": async ()=>{
                    setLoadingTypes(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypesByCampaign"])(filterCampaign._id);
                        if (res) setTypes(res.map({
                            "AssignCustomersPopup.useEffect.load": (t)=>({
                                    _id: t._id,
                                    Name: t.Name
                                })
                        }["AssignCustomersPopup.useEffect.load"]));
                    } finally{
                        setLoadingTypes(false);
                    }
                }
            }["AssignCustomersPopup.useEffect.load"];
            load();
        }
    }["AssignCustomersPopup.useEffect"], [
        filterCampaign
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssignCustomersPopup.useEffect": ()=>{
            setFilterSubType(null);
            setSubtypes([]);
            if (!filterCampaign || !filterType) return;
            const load = {
                "AssignCustomersPopup.useEffect.load": async ()=>{
                    setLoadingSubtypes(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$subtype$2f$subtype$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubtypeByCampaignAndType"])(filterCampaign._id, filterType._id);
                        if (res) setSubtypes(res.map({
                            "AssignCustomersPopup.useEffect.load": (s)=>({
                                    _id: s._id,
                                    Name: s.Name
                                })
                        }["AssignCustomersPopup.useEffect.load"]));
                    } finally{
                        setLoadingSubtypes(false);
                    }
                }
            }["AssignCustomersPopup.useEffect.load"];
            load();
        }
    }["AssignCustomersPopup.useEffect"], [
        filterType,
        filterCampaign
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssignCustomersPopup.useEffect": ()=>{
            setFilterLocation(null);
            setFilterSubLocation(null);
            setLocations([]);
            setSublocations([]);
            if (!filterCity) return;
            const load = {
                "AssignCustomersPopup.useEffect.load": async ()=>{
                    setLoadingLocation(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$location$2f$location$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocationByCity"])(filterCity._id);
                        if (res) setLocations(res.map({
                            "AssignCustomersPopup.useEffect.load": (t)=>({
                                    _id: t._id,
                                    Name: t.Name
                                })
                        }["AssignCustomersPopup.useEffect.load"]));
                    } finally{
                        setLoadingLocation(false);
                    }
                }
            }["AssignCustomersPopup.useEffect.load"];
            load();
        }
    }["AssignCustomersPopup.useEffect"], [
        filterCity
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssignCustomersPopup.useEffect": ()=>{
            setFilterSubLocation(null);
            setSublocations([]);
            if (!filterCity || !filterLocation) return;
            const load = {
                "AssignCustomersPopup.useEffect.load": async ()=>{
                    setLoadingSubLocation(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$sublocation$2f$sublocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getsubLocationByCityLoc"])(filterCity._id, filterLocation._id);
                        if (res) setSublocations(res.map({
                            "AssignCustomersPopup.useEffect.load": (s)=>({
                                    _id: s._id,
                                    Name: s.Name
                                })
                        }["AssignCustomersPopup.useEffect.load"]));
                    } finally{
                        setLoadingSubLocation(false);
                    }
                }
            }["AssignCustomersPopup.useEffect.load"];
            load();
        }
    }["AssignCustomersPopup.useEffect"], [
        filterLocation,
        filterCity
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssignCustomersPopup.useEffect": ()=>{
            setVisibleCount(PAGE_SIZE);
        }
    }["AssignCustomersPopup.useEffect"], [
        search,
        filterCampaign,
        filterType,
        filterSubType,
        filterCity,
        filterLocation,
        filterSubLocation
    ]);
    // ── Step 1 derived data ──
    const filteredRecipients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssignCustomersPopup.useMemo[filteredRecipients]": ()=>{
            if (!recipientSearch.trim()) return users;
            const q = recipientSearch.toLowerCase();
            return users.filter({
                "AssignCustomersPopup.useMemo[filteredRecipients]": (u)=>u.name?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q) || u.city?.toLowerCase().includes(q) || u.role?.toLowerCase().includes(q)
            }["AssignCustomersPopup.useMemo[filteredRecipients]"]);
        }
    }["AssignCustomersPopup.useMemo[filteredRecipients]"], [
        users,
        recipientSearch
    ]);
    const toggleRecipient = (id)=>{
        setSelectedRecipients((prev)=>{
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };
    const recipientLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssignCustomersPopup.useMemo[recipientLabel]": ()=>{
            if (selectedRecipients.size === 0) return '';
            const names = users.filter({
                "AssignCustomersPopup.useMemo[recipientLabel].names": (u)=>selectedRecipients.has(u._id)
            }["AssignCustomersPopup.useMemo[recipientLabel].names"]).map({
                "AssignCustomersPopup.useMemo[recipientLabel].names": (u)=>u.name
            }["AssignCustomersPopup.useMemo[recipientLabel].names"]);
            if (names.length <= 2) return names.join(', ');
            return `${names[0]}, ${names[1]} +${names.length - 2} more`;
        }
    }["AssignCustomersPopup.useMemo[recipientLabel]"], [
        selectedRecipients,
        users
    ]);
    // ── Step 2 derived data ──
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssignCustomersPopup.useMemo[filtered]": ()=>{
            let result = customersList;
            if (filterCampaign) result = result.filter({
                "AssignCustomersPopup.useMemo[filtered]": (c)=>c.Campaign === filterCampaign.Name
            }["AssignCustomersPopup.useMemo[filtered]"]);
            if (filterType) result = result.filter({
                "AssignCustomersPopup.useMemo[filtered]": (c)=>c.CustomerType === filterType.Name
            }["AssignCustomersPopup.useMemo[filtered]"]);
            if (filterSubType) result = result.filter({
                "AssignCustomersPopup.useMemo[filtered]": (c)=>c.CustomerSubType === filterSubType.Name
            }["AssignCustomersPopup.useMemo[filtered]"]);
            if (filterCity) result = result.filter({
                "AssignCustomersPopup.useMemo[filtered]": (c)=>c.City === filterCity.Name
            }["AssignCustomersPopup.useMemo[filtered]"]);
            if (filterLocation) result = result.filter({
                "AssignCustomersPopup.useMemo[filtered]": (c)=>c.Location === filterLocation.Name
            }["AssignCustomersPopup.useMemo[filtered]"]);
            if (filterSubLocation) result = result.filter({
                "AssignCustomersPopup.useMemo[filtered]": (c)=>c.SubLocation === filterSubLocation.Name
            }["AssignCustomersPopup.useMemo[filtered]"]);
            if (!search.trim()) return result;
            const q = search.toLowerCase();
            return result.filter({
                "AssignCustomersPopup.useMemo[filtered]": (c)=>c.customerName?.toLowerCase().includes(q) || c.Campaign?.toLowerCase().includes(q) || c.CustomerType?.toLowerCase().includes(q) || c.Location?.toLowerCase().includes(q)
            }["AssignCustomersPopup.useMemo[filtered]"]);
        }
    }["AssignCustomersPopup.useMemo[filtered]"], [
        customersList,
        search,
        filterCampaign,
        filterType,
        filterSubType,
        filterCity,
        filterLocation,
        filterSubLocation
    ]);
    const visibleFiltered = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;
    const remaining = filtered.length - visibleCount;
    const allSelected = filtered.length > 0 && filtered.every((c)=>selected.has(c._id));
    const someSelected = filtered.some((c)=>selected.has(c._id)) && !allSelected;
    const toggleOne = (id)=>{
        setSelected((prev)=>{
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };
    const toggleAll = ()=>{
        setSelected((prev)=>{
            const next = new Set(prev);
            if (allSelected) filtered.forEach((c)=>next.delete(c._id));
            else filtered.forEach((c)=>next.add(c._id));
            return next;
        });
    };
    const goToStep2 = ()=>{
        if (selectedRecipients.size === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Please select at least one recipient');
            return;
        }
        setStep(2);
    };
    const handleSubmit = async ()=>{
        if (selected.size === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Please select at least one customer');
            return;
        }
        if (submitting) return;
        setSubmitting(true);
        try {
            const payload = {
                assignToId: Array.from(selectedRecipients),
                action,
                customerIds: Array.from(selected)
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignCustomer"])(payload);
            if (result?.success) {
                setSuccessMsg(action === 'remove' ? 'Unassigned!' : 'Assigned!');
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(action === 'remove' ? 'Customers unassigned successfully' : 'Customers assigned successfully');
                setTimeout(()=>{
                    setSuccessMsg('');
                    onAssigned?.();
                    onClose();
                }, 900);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result?.message || 'Something went wrong');
            }
        } finally{
            setSubmitting(false);
        }
    };
    if (!isOpen) return null;
    const title = step === 1 ? action === 'remove' ? 'Remove From Whom?' : 'Assign To Whom?' : action === 'remove' ? 'Remove Which Customers?' : 'Assign Which Customers?';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[80] flex items-center justify-center p-0 sm:p-6",
        style: {
            background: 'rgba(15,23,42,0.45)',
            backdropFilter: 'blur(4px)'
        },
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full sm:w-[90vw] sm:h-[92vh] bg-white flex flex-col overflow-hidden rounded-none sm:rounded-2xl",
                style: {
                    maxWidth: '1400px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
                    animation: 'modal-pop 0.2s cubic-bezier(0.34,1.56,0.64,1)'
                },
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4 px-6 py-4 border-b border-gray-100 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 min-w-0",
                                children: [
                                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStep(1),
                                        className: "w-8 h-8 -ml-1 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronLeft, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[17px] font-bold text-gray-900 leading-tight tracking-tight truncate",
                                                        children: title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 flex-shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `h-1.5 w-5 rounded-full transition-colors ${step >= 1 ? 'bg-[var(--color-primary)]' : 'bg-gray-200'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                lineNumber: 410,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `h-1.5 w-5 rounded-full transition-colors ${step >= 2 ? 'bg-[var(--color-primary)]' : 'bg-gray-200'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 405,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            step === 2 && recipientLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[12px] text-gray-400 mt-0.5 truncate",
                                                children: [
                                                    action === 'remove' ? 'Removing from' : 'Assigning to',
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-600",
                                                        children: recipientLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 415,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 p-1 bg-gray-100 rounded-lg text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setAction('assign'),
                                                className: `px-4 py-1.5 rounded-md cursor-pointer transition-all ${action === 'assign' ? 'bg-white text-[var(--color-primary)] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`,
                                                children: "Assign"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 425,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setAction('remove'),
                                                className: `px-4 py-1.5 rounded-md cursor-pointer transition-all ${action === 'remove' ? 'bg-white text-red-500 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`,
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 432,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 424,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 pt-4 pb-3 flex-shrink-0 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1 max-w-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 454,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: recipientSearch,
                                                onChange: (e)=>setRecipientSearch(e.target.value),
                                                placeholder: "Search by name, email, city, or role…",
                                                className: "w-full pl-9 pr-4 py-2.5 text-[13px] rounded-xl border outline-none transition-all bg-gray-50 border-gray-200 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 text-gray-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 457,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 453,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    selectedRecipients.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-semibold text-[var(--color-primary)] bg-[var(--color-primary-lighter)] px-2.5 py-1.5 rounded-full flex-shrink-0 whitespace-nowrap",
                                        children: [
                                            selectedRecipients.size,
                                            " selected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 466,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto text-[11px] font-medium text-gray-400 flex-shrink-0 whitespace-nowrap",
                                        children: [
                                            filteredRecipients.length,
                                            " available"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 470,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto px-6 pb-6",
                                style: {
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: '#e2e8f0 transparent'
                                },
                                children: isFetchingUsers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center h-full gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                            className: "w-7 h-7 text-[var(--color-primary-light)] border-t-[var(--color-primary)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 478,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] text-gray-400",
                                            children: "Loading recipients…"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 479,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                    lineNumber: 477,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : filteredRecipients.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center h-full gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] text-gray-400",
                                        children: "No matching city admins or users found."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 483,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                    lineNumber: 482,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3",
                                    children: filteredRecipients.map((u)=>{
                                        const isSelected = selectedRecipients.has(u._id);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>toggleRecipient(u._id),
                                            className: "flex items-center cursor-pointer gap-3 p-3.5 rounded-xl border transition-colors hover:border-gray-300",
                                            style: {
                                                background: isSelected ? '#f0f9ff' : '#fff',
                                                borderColor: isSelected ? 'var(--color-primary)' : '#e5e7eb'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxIcon, {
                                                    checked: isSelected
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-xl bg-[var(--color-primary-lighter)] text-[var(--color-primary)] flex items-center justify-center font-bold text-[12px] flex-shrink-0",
                                                    children: u.name?.charAt(0).toUpperCase() || '?'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[13px] font-semibold text-gray-800 truncate",
                                                                    children: u.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 505,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleBadge, {
                                                                    role: u.role
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-gray-400 truncate mt-0.5",
                                                            children: [
                                                                u.email,
                                                                u.city
                                                            ].filter(Boolean).join(' · ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, u._id, true, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 490,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                    lineNumber: 486,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                lineNumber: 475,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 border-t border-gray-100 px-6 py-4 bg-[#fafafa]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 max-w-md ml-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClose,
                                            className: "flex-1 py-3 rounded-xl cursor-pointer text-[13px] font-semibold border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 521,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: goToStep2,
                                            disabled: selectedRecipients.size === 0,
                                            className: "flex-[2] py-3 rounded-xl cursor-pointer text-[13px] font-bold text-white transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed",
                                            style: {
                                                background: 'var(--color-primary)'
                                            },
                                            children: [
                                                "Next: Select Customers (",
                                                selectedRecipients.size,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                lineNumber: 519,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 pt-4 pb-3 flex-shrink-0 flex flex-wrap items-center gap-2 border-b border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full sm:w-64 flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                    lineNumber: 546,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: searchRef,
                                                type: "text",
                                                value: search,
                                                onChange: (e)=>setSearch(e.target.value),
                                                placeholder: "Search customer, location, type…",
                                                className: "w-full pl-9 pr-4 py-2.5 text-[13px] rounded-xl border outline-none transition-all bg-gray-50 border-gray-200 focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 text-gray-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 548,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 544,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            options: campaigns,
                                            value: filterCampaign?._id ?? null,
                                            onChange: (opt)=>setFilterCampaign(opt),
                                            placeholder: "Campaign",
                                            loading: loadingCampaigns
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 558,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 558,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            options: types,
                                            value: filterType?._id ?? null,
                                            onChange: (opt)=>setFilterType(opt),
                                            placeholder: "Type",
                                            loading: loadingTypes,
                                            disabled: !filterCampaign
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 559,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 559,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            options: subtypes,
                                            value: filterSubType?._id ?? null,
                                            onChange: (opt)=>setFilterSubType(opt),
                                            placeholder: "Sub-type",
                                            loading: loadingSubtypes,
                                            disabled: !filterType
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 560,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 560,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            options: citys,
                                            value: filterCity?._id ?? null,
                                            onChange: (opt)=>setFilterCity(opt),
                                            placeholder: "City",
                                            loading: loadingCity
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 561,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 561,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            options: locations,
                                            value: filterLocation?._id ?? null,
                                            onChange: (opt)=>setFilterLocation(opt),
                                            placeholder: "Location",
                                            loading: loadingLocation,
                                            disabled: !filterCity
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 562,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 562,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            options: sublocations,
                                            value: filterSubLocation?._id ?? null,
                                            onChange: (opt)=>setFilterSubLocation(opt),
                                            placeholder: "Sub-location",
                                            loading: loadingSubLocation,
                                            disabled: !filterLocation
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 563,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 563,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-auto flex items-center gap-3 flex-shrink-0",
                                        children: [
                                            activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: clearAllFilters,
                                                className: "flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-md transition-colors cursor-pointer text-[var(--color-primary)] bg-[var(--color-primary-lighter)] hover:bg-[var(--color-primary-light)] whitespace-nowrap",
                                                children: [
                                                    "Clear All (",
                                                    activeFilterCount,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 567,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-medium text-gray-400 whitespace-nowrap",
                                                children: [
                                                    filtered.length,
                                                    " customer",
                                                    filtered.length === 1 ? '' : 's'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 575,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                lineNumber: 543,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto",
                                style: {
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: '#e2e8f0 transparent'
                                },
                                children: [
                                    loadingCustomers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center h-full gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                className: "w-7 h-7 text-[var(--color-primary-light)] border-t-[var(--color-primary)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 584,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] text-gray-400",
                                                children: "Loading customers…"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 585,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 583,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center h-full gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] text-gray-400",
                                                children: "No customers found."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 589,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: clearAllFilters,
                                                className: "text-[12px] font-semibold text-[var(--color-primary)] cursor-pointer",
                                                children: "Clear filters"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 591,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 588,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full border-collapse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "sticky top-0 z-10 bg-white/95 backdrop-blur-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "w-11 px-6 py-2.5 text-left",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: toggleAll,
                                                                className: "inline-flex cursor-pointer",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxIcon, {
                                                                    checked: allSelected,
                                                                    indeterminate: someSelected
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 602,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                lineNumber: 601,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400",
                                                            children: "Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                            lineNumber: 605,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400",
                                                            children: "Campaign"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                            lineNumber: 606,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400",
                                                            children: "Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                            lineNumber: 607,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400",
                                                            children: "Sub Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                            lineNumber: 608,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400",
                                                            children: "Contact No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                            lineNumber: 609,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400",
                                                            children: "City"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                            lineNumber: 610,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide text-gray-400 pr-6",
                                                            children: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                            lineNumber: 611,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 598,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-gray-50",
                                                children: visibleFiltered.map((c)=>{
                                                    const isSelected = selected.has(c._id);
                                                    const locationLabel = [
                                                        c.Location,
                                                        c.City
                                                    ].filter(Boolean).join(', ');
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        onClick: ()=>toggleOne(c._id),
                                                        className: "cursor-pointer transition-colors hover:bg-gray-50",
                                                        style: {
                                                            background: isSelected ? '#f0f9ff' : 'transparent'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxIcon, {
                                                                    checked: isSelected
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 625,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                lineNumber: 625,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2.5 min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-8 h-8 rounded-lg bg-[var(--color-primary-lighter)] text-[var(--color-primary)] flex items-center justify-center font-bold text-[11px] flex-shrink-0",
                                                                            children: c.customerName?.charAt(0).toUpperCase() || 'C'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                            lineNumber: 628,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[13px] font-semibold text-gray-800 truncate",
                                                                            children: c.customerName || 'Unnamed Customer'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                            lineNumber: 631,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 627,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                lineNumber: 626,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-3",
                                                                children: c.Campaign ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 whitespace-nowrap",
                                                                    children: c.Campaign
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 636,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[12px] text-gray-300",
                                                                    children: "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 638,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-3",
                                                                children: c.CustomerType ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 whitespace-nowrap",
                                                                    children: c.CustomerType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 643,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[12px] text-gray-300",
                                                                    children: "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 645,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                lineNumber: 641,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-3",
                                                                children: c.CustomerSubType ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 whitespace-nowrap",
                                                                    children: c.CustomerSubType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 650,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[12px] text-gray-300",
                                                                    children: "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 652,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                lineNumber: 648,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-3",
                                                                children: c.ContactNumber ? (()=>{
                                                                    const countryInfo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTRY_CODES"].find((e)=>e.code === (c.CountryCode || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COUNTRY_CODE"])) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTRY_CODES"].find((e)=>e.code === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COUNTRY_CODE"]);
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 whitespace-nowrap",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "",
                                                                                style: {
                                                                                    fontFamily: "'Noto Color Emoji', 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif"
                                                                                },
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoToFlagEmoji"])(countryInfo.iso2)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                                lineNumber: 664,
                                                                                columnNumber: 37
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-500 text-xs mr-1 ",
                                                                                children: [
                                                                                    "+",
                                                                                    countryInfo.code
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                                lineNumber: 674,
                                                                                columnNumber: 37
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            c.ContactNumber
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                        lineNumber: 663,
                                                                        columnNumber: 35
                                                                    }, ("TURBOPACK compile-time value", void 0));
                                                                })() : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[12px] text-gray-300",
                                                                    children: "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 683,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                lineNumber: 655,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-3",
                                                                children: c.City ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 whitespace-nowrap",
                                                                    children: c.City
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 689,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[12px] text-gray-300",
                                                                    children: "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                    lineNumber: 691,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                lineNumber: 687,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-3 pr-6 text-[12px] text-gray-500 truncate max-w-[240px]",
                                                                children: locationLabel || '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                                lineNumber: 694,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, c._id, true, {
                                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 614,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 597,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setVisibleCount((v)=>v + PAGE_SIZE),
                                        className: "w-full cursor-pointer py-3 text-[12px] font-medium border-t border-gray-100 transition-colors text-gray-500 hover:text-[var(--color-primary)] hover:bg-gray-50",
                                        children: [
                                            "Load ",
                                            Math.min(PAGE_SIZE, remaining),
                                            " more (",
                                            remaining,
                                            " left)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                        lineNumber: 705,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 border-t border-gray-100 px-6 py-4 bg-[#fafafa]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 max-w-md ml-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setStep(1),
                                            className: "flex-1 py-3 rounded-xl cursor-pointer text-[13px] font-semibold border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors",
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 716,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            disabled: selected.size === 0 || submitting,
                                            className: "flex-[2] py-3 rounded-xl cursor-pointer text-[13px] font-bold text-white flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed",
                                            style: {
                                                background: action === 'remove' ? '#ef4444' : 'var(--color-primary)',
                                                boxShadow: selected.size > 0 ? '0 4px 12px rgba(2,132,199,0.3)' : 'none'
                                            },
                                            children: submitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                                                className: "w-4 h-4 border-white border-t-transparent/30"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                                lineNumber: 732,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : successMsg ? successMsg : `${action === 'remove' ? 'Remove' : 'Assign'} ${selected.size} Customer${selected.size === 1 ? '' : 's'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                            lineNumber: 722,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                    lineNumber: 715,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                                lineNumber: 714,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes modal-pop {
          from { transform: scale(0.97); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
                lineNumber: 745,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/popups/AssignCustomerPopup.tsx",
        lineNumber: 379,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AssignCustomersPopup, "bWjofE3vtz8IJV+fOZ23xDXeCQw=");
_c6 = AssignCustomersPopup;
const __TURBOPACK__default__export__ = AssignCustomersPopup;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "SearchIcon");
__turbopack_context__.k.register(_c1, "XIcon");
__turbopack_context__.k.register(_c2, "ChevronLeft");
__turbopack_context__.k.register(_c3, "Spinner");
__turbopack_context__.k.register(_c4, "CheckboxIcon");
__turbopack_context__.k.register(_c5, "RoleBadge");
__turbopack_context__.k.register(_c6, "AssignCustomersPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_component_popups_AssignCustomerPopup_tsx_adc87b59._.js.map