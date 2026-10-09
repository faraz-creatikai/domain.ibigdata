(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/component/SingleSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SingleSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function SingleSelect({ className, options, label, value, onChange, error, isSearchable = false }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Normalize value for display
    const displayValue = Array.isArray(value) ? value.join(", ") : value;
    // Close dropdown on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SingleSelect.useEffect": ()=>{
            const handleClickOutside = {
                "SingleSelect.useEffect.handleClickOutside": (event)=>{
                    if (containerRef.current && !containerRef.current.contains(event.target)) {
                        setOpen(false);
                    }
                }
            }["SingleSelect.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "SingleSelect.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["SingleSelect.useEffect"];
        }
    }["SingleSelect.useEffect"], []);
    // Focus search input
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SingleSelect.useEffect": ()=>{
            if (open && isSearchable) {
                setSearch("");
                setTimeout({
                    "SingleSelect.useEffect": ()=>searchInputRef.current?.focus()
                }["SingleSelect.useEffect"], 0);
            }
        }
    }["SingleSelect.useEffect"], [
        open,
        isSearchable
    ]);
    const handleSelect = (option)=>{
        onChange?.(option);
        setOpen(false);
    };
    // Filter options
    const displayedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SingleSelect.useMemo[displayedOptions]": ()=>{
            if (!isSearchable) return options;
            return options.filter({
                "SingleSelect.useMemo[displayedOptions]": (opt)=>opt.toLowerCase().includes(search.toLowerCase())
            }["SingleSelect.useMemo[displayedOptions]"]);
        }
    }["SingleSelect.useMemo[displayedOptions]"], [
        options,
        search,
        isSearchable
    ]);
    const isLabelFloating = Boolean(displayValue) || open;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `relative w-full ${className}`,
        style: {
            minWidth: "170px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: `absolute left-3 transition-all duration-200 px-1 bg-white max-sm:dark:bg-[var(--color-childbgdark)] max-sm:dark:text-gray-400 pointer-events-none
        ${isLabelFloating ? "-top-2 text-xs text-[var(--color-primary)]" : "top-3 text-gray-500 text-sm"}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/component/SingleSelect.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setOpen(!open),
                className: `w-full border rounded-md px-3 py-2 cursor-pointer bg-white max-sm:dark:bg-[var(--color-childbgdark)] max-sm:dark:text-white flex justify-between items-center
        ${error ? "border-red-500" : "border-gray-400 max-sm:dark:border-gray-700"} transition-colors`,
                style: {
                    minHeight: "3rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${displayValue ? "text-gray-900 max-sm:dark:text-gray-300" : "text-gray-400"} truncate`,
                        children: displayValue || ""
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/SingleSelect.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-4 h-4 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/SingleSelect.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/SingleSelect.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/SingleSelect.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: `absolute left-0 top-full w-full bg-white max-sm:dark:bg-[var(--color-childbgdark)] max-sm:dark:text-white shadow-lg border border-gray-300 max-sm:dark:border-gray-800 rounded-md max-h-56 overflow-auto mt-1
        transition-all duration-200 transform origin-top z-50
        ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`,
                children: [
                    isSearchable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "sticky top-0 bg-white max-sm:dark:bg-[var(--color-childbgdark)] p-2 border-b z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: searchInputRef,
                            type: "text",
                            placeholder: "Search...",
                            value: search,
                            onChange: (e)=>setSearch(e.target.value),
                            className: "w-full px-2 py-1 border rounded-md text-sm outline-none focus:border-[var(--color-primary)]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/SingleSelect.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/SingleSelect.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    displayedOptions.length > 0 ? displayedOptions.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>handleSelect(opt),
                            className: "px-3 py-2 hover:bg-gray-100 cursor-pointer truncate",
                            children: opt
                        }, idx, false, {
                            fileName: "[project]/src/app/component/SingleSelect.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "px-3 py-2 text-gray-500 text-sm",
                        children: isSearchable ? "No matching results" : "No options available"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/SingleSelect.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/SingleSelect.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm mt-1",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/component/SingleSelect.tsx",
                lineNumber: 170,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/SingleSelect.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(SingleSelect, "P4p6kotW2irfcUUEhGHD5Iic+JA=");
_c = SingleSelect;
var _c;
__turbopack_context__.k.register(_c, "SingleSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/customer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCustomer",
    ()=>addCustomer,
    "addToShortlist",
    ()=>addToShortlist,
    "archieveCustomer",
    ()=>archieveCustomer,
    "assignCustomer",
    ()=>assignCustomer,
    "closeCustomerDeal",
    ()=>closeCustomerDeal,
    "customerExcelHeaders",
    ()=>customerExcelHeaders,
    "dataMining",
    ()=>dataMining,
    "deleteAllCustomer",
    ()=>deleteAllCustomer,
    "deleteCallLog",
    ()=>deleteCallLog,
    "deleteCustomer",
    ()=>deleteCustomer,
    "getAllCustomer",
    ()=>getAllCustomer,
    "getArchivedCustomer",
    ()=>getArchivedCustomer,
    "getCallLogs",
    ()=>getCallLogs,
    "getCallReport",
    ()=>getCallReport,
    "getClosedDeals",
    ()=>getClosedDeals,
    "getCustomFieldValues",
    ()=>getCustomFieldValues,
    "getCustomer",
    ()=>getCustomer,
    "getCustomerById",
    ()=>getCustomerById,
    "getCustomerCount",
    ()=>getCustomerCount,
    "getCustomerLocationStats",
    ()=>getCustomerLocationStats,
    "getDashboardStatsCount",
    ()=>getDashboardStatsCount,
    "getDuplicateContacts",
    ()=>getDuplicateContacts,
    "getFavoutiteCustomer",
    ()=>getFavoutiteCustomer,
    "getFilteredArchievedCustomer",
    ()=>getFilteredArchievedCustomer,
    "getFilteredClosedDeals",
    ()=>getFilteredClosedDeals,
    "getFilteredCustomer",
    ()=>getFilteredCustomer,
    "getFollowupChartStats",
    ()=>getFollowupChartStats,
    "getLeadSourcesStats",
    ()=>getLeadSourcesStats,
    "getLeadTemperatureStats",
    ()=>getLeadTemperatureStats,
    "getQualification",
    ()=>getQualification,
    "getRadarChartStats",
    ()=>getRadarChartStats,
    "getRecommendedCustomers",
    ()=>getRecommendedCustomers,
    "getShortlist",
    ()=>getShortlist,
    "getTodayCustomer",
    ()=>getTodayCustomer,
    "getVisiterChartStats",
    ()=>getVisiterChartStats,
    "importCustomer",
    ()=>importCustomer,
    "removeShortlist",
    ()=>removeShortlist,
    "reopenDeal",
    ()=>reopenDeal,
    "startCallByAIAgent",
    ()=>startCallByAIAgent,
    "unArchieveCustomer",
    ()=>unArchieveCustomer,
    "updateCustomer",
    ()=>updateCustomer,
    "updateShortlist",
    ()=>updateShortlist
]);
// note do not use any
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
;
const getCustomer = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_ALL, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getDashboardStatsCount = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DASHBOARD_STATS_COUNT, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getLeadSourcesStats = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.LEADSOURCE_STATS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getLeadTemperatureStats = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.LEADTEMPERATURE_STATS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getVisiterChartStats = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.VISITER_CHART_STATS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFollowupChartStats = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.FOLLOWUP_CHART_STATS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCustomerLocationStats = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.LOCATION_STATS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getRadarChartStats = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.RADAR_CHART_STATS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCustomerCount = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_CUSTOMER_COUNT, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getAllCustomer = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_ALL_TOTAL, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCustomFieldValues = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_CUSTOMER_FIELDS_VALUES, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCustomerById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_BY_ID(id), {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getTodayCustomer = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_TODAY_ALL, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFavoutiteCustomer = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_FAVOURITES_CUSTOMER, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data.data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFilteredCustomer = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_BY_PARAMS(params), {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(" params : ", params, "\n", " Data:", data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getDuplicateContacts = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.CHECKDUPLICATES, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return response;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const addCustomer = async (formData)=>{
    try {
        for (let [key, value] of formData.entries()){
            console.log(`${key}:`, value);
        }
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.ADD, {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        const result = await response.json();
        if (!result.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.message ?? "Something went wrong");
            throw new Error(result.message ?? "Something went wrong");
        }
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const importCustomer = async (formData)=>{
    try {
        /* for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    } */ const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.CUSTOMERIMPORT, {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(" import customer result ", result);
        if (!result.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.message ?? "Something went wrong");
            throw new Error(result.message ?? "Something went wrong");
        }
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const customerExcelHeaders = async (formData)=>{
    try {
        /* for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    } */ const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.CUSTOMEREXCELHEADERS, {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const assignCustomer = async (data)=>{
    try {
        console.log("assign customer data ", data);
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.ASSIGNCUSTOMER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(" assign customer api , response ", result);
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const updateCustomer = async (id, formData)=>{
    try {
        //Don't manually set "Content-Type" — fetch will handle it for FormData
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.UPDATE(id), {
            method: "PUT",
            body: formData,
            credentials: "include"
        });
        const result = await response.json();
        if (!result.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.message ?? "Something went wrong");
            throw new Error(result.message ?? "Something went wrong");
        }
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const deleteCustomer = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DELETE(id), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const deleteAllCustomer = async (payload)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DELETEALL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getQualification = async (data)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.QUALIFYCUSTOMER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json(); // ✅ new variable
        return json;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getRecommendedCustomers = async (data)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.RECOMENDCUSTOMER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json(); // ✅ new variable
        return json;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const dataMining = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DATAMINING, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const startCallByAIAgent = async (data)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.AGENTCALLING, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json(); // ✅ new variable
        return json;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCallLogs = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETCALLLOGS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCallReport = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETCALLREPORT, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const deleteCallLog = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DELETECALLLOG(id), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getClosedDeals = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETCLOSEDDEAL, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFilteredClosedDeals = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_CLOSEDDEAL_BY_PARAMS(params), {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(" params : ", params, "\n", " Data:", data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const closeCustomerDeal = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.CLOSEDEAL(id), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const reopenDeal = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.REOPENDEAL(id), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getArchivedCustomer = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETARCHIEVEDCUSTOMER, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFilteredArchievedCustomer = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_ARCHIEVEDCUSTOMER_BY_PARAMS(params), {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(" params : ", params, "\n", " Data:", data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const archieveCustomer = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.ARCHIEVECUSTOMER(id), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const unArchieveCustomer = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.UNARCHIEVECUSTOMER(id), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const addToShortlist = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.ADDSHORTLIST, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getShortlist = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETSHORTLIST(id), {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const removeShortlist = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.REMOVESHORTLIST, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const updateShortlist = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.UPDATESHORTLIST, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/buttons/BackButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
function BackButton({ url, text, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: url,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex items-center float-right gap-2 cursor-pointer   bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-darker)] hover:from-[var(--color-primary-dark)]    hover:to-[var(--color-secondary-darker)] transition-all    text-white px-4 py-2 rounded-md font-semibold",
            children: [
                icon,
                text
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/buttons/BackButton.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/component/buttons/BackButton.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_c = BackButton;
var _c;
__turbopack_context__.k.register(_c, "BackButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/buttons/SaveButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SaveButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SaveButton({ text, icon, className, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `flex items-center float-right gap-2 bg-gradient-to-r cursor-pointer 
        from-[var(--color-primary-dark)] to-[var(--color-secondary)] 
        hover:from-[var(--color-primary-darker)] hover:to-[var(--color-secondary-dark)] 
        text-white px-4 py-2 rounded-md font-semibold max-sm:text-lg ${className}`,
        children: [
            icon,
            text
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/buttons/SaveButton.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = SaveButton;
var _c;
__turbopack_context__.k.register(_c, "SaveButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/LoaderCircle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"user client";
;
const LoaderCircle = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " relative border-[2px] border-transparent border-l-white  h-[15px] w-[15px] rounded-full animate-spin"
    }, void 0, false, {
        fileName: "[project]/src/app/component/LoaderCircle.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LoaderCircle;
const __TURBOPACK__default__export__ = LoaderCircle;
var _c;
__turbopack_context__.k.register(_c, "LoaderCircle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/masters/customerfields/customerfields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCustomerFields",
    ()=>addCustomerFields,
    "deleteCustomerFields",
    ()=>deleteCustomerFields,
    "getCustomerFields",
    ()=>getCustomerFields,
    "getCustomerFieldsById",
    ()=>getCustomerFieldsById,
    "getFilteredCustomerFields",
    ()=>getFilteredCustomerFields,
    "updateCustomerFields",
    ()=>updateCustomerFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-client] (ecmascript)");
;
const getCustomerFields = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CUSTOMERFIELDS.GET_ALL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCustomerFieldsById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CUSTOMERFIELDS.GET_BY_ID(id), {
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFilteredCustomerFields = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CUSTOMERFIELDS.GET_BY_PARAMS(params), {
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const addCustomerFields = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CUSTOMERFIELDS.ADD, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const updateCustomerFields = async (id, data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CUSTOMERFIELDS.UPDATE(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const deleteCustomerFields = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CUSTOMERFIELDS.DELETE(id), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/imports/customer/select-imports/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SelectImports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/SingleSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/customer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$BackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/buttons/BackButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$SaveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/buttons/SaveButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CustomerImportContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CustomerImportContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$LoaderCircle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/LoaderCircle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$customerfields$2f$customerfields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/customerfields/customerfields.ts [app-client] (ecmascript)");
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
function SelectImports() {
    _s();
    const [fieldMapping, setFieldMapping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [importLoader, setImportLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { excelHeaders, file } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CustomerImportContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomerImport"])();
    const [customerFieldMasters, setCustomerFieldMasters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // tracks whether the custom-field master list has finished loading (even if it comes back empty),
    // so the auto-mapping effect below knows it's safe to run instead of racing the fetch.
    const [customerFieldsReady, setCustomerFieldsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [categorizedHeaders, setCategorizedHeaders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const normalize = (value)=>String(value ?? "").trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectImports.useEffect": ()=>{
            if (excelHeaders.length === 0) {
                // user opened this page directly
                router.push("/imports/customer");
            }
        }
    }["SelectImports.useEffect"], [
        excelHeaders
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectImports.useEffect": ()=>{
            const loadCustomerFields = {
                "SelectImports.useEffect.loadCustomerFields": async ()=>{
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$customerfields$2f$customerfields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomerFields"])();
                        const activeFields = res.filter({
                            "SelectImports.useEffect.loadCustomerFields.activeFields": (e)=>e.Status === "Active"
                        }["SelectImports.useEffect.loadCustomerFields.activeFields"]);
                        setCustomerFieldMasters(activeFields.map({
                            "SelectImports.useEffect.loadCustomerFields": (f)=>f.Name
                        }["SelectImports.useEffect.loadCustomerFields"]));
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Error fetching custom fields");
                    } finally{
                        setCustomerFieldsReady(true);
                    }
                }
            }["SelectImports.useEffect.loadCustomerFields"];
            loadCustomerFields();
        }
    }["SelectImports.useEffect"], []);
    //Submit Form
    const handleSubmit = async ()=>{
        /*          const validationErrors = validateForm();
                 if (Object.keys(validationErrors).length > 0) {
                     setErrors(validationErrors);
                     return;
                 } */ setImportLoader(true);
        const formData = new FormData();
        formData.append("fieldMapping", JSON.stringify(fieldMapping));
        if (file) {
            formData.append("file", file);
        }
        //console.log(customerData)
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importCustomer"])(formData);
        if (result) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Customer imported successfully!");
            setImportLoader(false);
            router.push("/customer");
            return;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to import customer");
        }
        //  toast.error("Error importing customer");
        // console.error("Customer import Error:", error);
        router.push("/customer");
        setImportLoader(false);
    };
    const systemFields = [
        "Campaign",
        "CustomerType",
        "CustomerSubType",
        "customerName",
        "ContactNumber",
        "City",
        "Location",
        "SubLocation",
        "Area",
        "Adderess",
        "Email",
        "Facillities",
        "ReferenceId",
        "CustomerId",
        "CustomerDate",
        "CustomerYear",
        "Price",
        "URL",
        "Other",
        "Description",
        "Video",
        "GoogleMap",
        "Verified"
    ];
    const customerFields = [
        ...customerFieldMasters,
        ...systemFields
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectImports.useEffect": ()=>{
            // wait for both the excel headers AND the custom-field master list before categorizing,
            // otherwise custom fields would always fall back to unmapped because the masters
            // hadn't loaded yet on the first run.
            if (!excelHeaders.length || !customerFieldsReady) return;
            const validHeaders = excelHeaders.filter({
                "SelectImports.useEffect.validHeaders": (header)=>header !== null && header !== undefined && String(header).trim() !== ""
            }["SelectImports.useEffect.validHeaders"]);
            const categorized = validHeaders.map({
                "SelectImports.useEffect.categorized": (header)=>{
                    const headerStr = String(header).trim();
                    const systemMatch = systemFields.find({
                        "SelectImports.useEffect.categorized.systemMatch": (field)=>normalize(field) === normalize(headerStr)
                    }["SelectImports.useEffect.categorized.systemMatch"]);
                    if (systemMatch) {
                        return {
                            header: headerStr,
                            type: "system",
                            mappedTo: systemMatch
                        };
                    }
                    // same idea as the system-field match above, just checked against the
                    // dynamic custom-field master list instead of the fixed systemFields array.
                    const customMatch = customerFieldMasters.find({
                        "SelectImports.useEffect.categorized.customMatch": (field)=>normalize(field) === normalize(headerStr)
                    }["SelectImports.useEffect.categorized.customMatch"]);
                    if (customMatch) {
                        return {
                            header: headerStr,
                            type: "custom",
                            mappedTo: customMatch
                        };
                    }
                    return {
                        header: headerStr,
                        type: "custom",
                        mappedTo: ""
                    };
                }
            }["SelectImports.useEffect.categorized"]);
            setCategorizedHeaders(categorized);
            const initialMapping = {};
            categorized.forEach({
                "SelectImports.useEffect": (item)=>{
                    if (item.mappedTo) {
                        initialMapping[item.header] = item.mappedTo;
                    }
                }
            }["SelectImports.useEffect"]);
            setFieldMapping(initialMapping);
        }
    }["SelectImports.useEffect"], [
        excelHeaders,
        customerFieldsReady,
        customerFieldMasters
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " min-h-screen flex justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "top-right"
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                lineNumber: 212,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$BackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            url: "/customer",
                            text: "Back",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                lineNumber: 218,
                                columnNumber: 31
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                            lineNumber: 215,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                        lineNumber: 214,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white backdrop-blur-lg p-10 w-full rounded-3xl shadow-2xl h-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: (e)=>e.preventDefault(),
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 text-left border-b pb-4 border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-extrabold text-[var(--color-secondary-darker)] leading-tight tracking-tight",
                                        children: [
                                            "Customer ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-primary)]",
                                                children: "Selected Imports"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 42
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-700 mt-8",
                                    children: "Map System Fields"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 mt-4",
                                    children: categorizedHeaders.filter((item)=>item.type === "system").map(({ header })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium mb-2 block",
                                                    children: header
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    label: "Map to system field",
                                                    options: systemFields,
                                                    value: fieldMapping[header] || "",
                                                    onChange: (value)=>setFieldMapping((prev)=>({
                                                                ...prev,
                                                                [header]: value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, `system-${header}`, true, {
                                            fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-700 mt-10",
                                    children: "Map Custom Fields"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                    lineNumber: 257,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 mt-4",
                                    children: categorizedHeaders.filter((item)=>item.type === "custom").map(({ header })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium mb-2 block",
                                                    children: header
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    label: "Map to custom field",
                                                    options: customerFields,
                                                    value: fieldMapping[header] || "",
                                                    onChange: (value)=>setFieldMapping((prev)=>({
                                                                ...prev,
                                                                [header]: value
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, `custom-${header}`, true, {
                                            fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$SaveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        text: ` ${importLoader ? "Saving.." : "Save Import"}`,
                                        icon: importLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$LoaderCircle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 118
                                        }, void 0),
                                        onClick: handleSubmit
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                    lineNumber: 286,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                            lineNumber: 223,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                        lineNumber: 222,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                lineNumber: 213,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
        lineNumber: 211,
        columnNumber: 9
    }, this);
}
_s(SelectImports, "1MBHRwx5vlHIkGaZSeTNE6fid6I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CustomerImportContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomerImport"]
    ];
});
_c = SelectImports;
const InputField = ({ label, name, value, onChange, error })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "relative block w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: name,
                value: value,
                onChange: onChange,
                placeholder: " ",
                className: `peer w-full border rounded-sm bg-transparent py-3 px-4 outline-none 
        ${error ? "border-red-500 focus:border-red-500" : "border-gray-400 focus:border-blue-500"}`
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                lineNumber: 307,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `absolute left-2 bg-white px-1 text-gray-500 text-sm transition-all duration-300
      ${value || error ? "-top-2 text-xs text-blue-500" : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500"}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                lineNumber: 316,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500 text-sm mt-1 block",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                lineNumber: 320,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
        lineNumber: 306,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = InputField;
// Textarea field
const TextareaField = ({ label, name, value, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "relative block w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: name,
                value: value,
                onChange: onChange,
                placeholder: " ",
                className: "peer w-full border rounded-sm border-gray-400 bg-transparent py-3 px-4 outline-none focus:border-blue-500 min-h-[100px]"
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                lineNumber: 332,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `absolute left-2 bg-white px-1 text-gray-500 text-sm transition-all duration-300
      ${value ? "-top-2 text-xs text-blue-500" : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500"}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                lineNumber: 339,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = TextareaField;
// File upload with preview and remove
const FileUpload = ({ label, multiple, previews = [], onChange, onRemove })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-semibold text-gray-700 mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                lineNumber: 355,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                multiple: multiple,
                onChange: onChange,
                className: "border border-gray-300 rounded-md p-2"
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                lineNumber: 356,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            previews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3 mt-3",
                children: previews.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: src,
                                alt: `preview-${index}`,
                                className: "w-24 h-24 object-cover rounded-md border"
                            }, void 0, false, {
                                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                lineNumber: 366,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onRemove(index),
                                className: "absolute top-[-8px] right-[-8px] bg-red-600 text-white rounded-full p-1 hover:bg-red-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                                lineNumber: 372,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                        lineNumber: 365,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
                lineNumber: 363,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/imports/customer/select-imports/page.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = FileUpload;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SelectImports");
__turbopack_context__.k.register(_c1, "InputField");
__turbopack_context__.k.register(_c2, "TextareaField");
__turbopack_context__.k.register(_c3, "FileUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeft
]);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_1a37af57._.js.map