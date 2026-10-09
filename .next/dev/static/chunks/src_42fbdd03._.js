(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/store/activity/activity.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getActivityFeed",
    ()=>getActivityFeed,
    "getActivitySummary",
    ()=>getActivitySummary,
    "getActivityTimeline",
    ()=>getActivityTimeline,
    "getActivityUsers",
    ()=>getActivityUsers,
    "getRecordDetail",
    ()=>getRecordDetail,
    "getTouchedCustomers",
    ()=>getTouchedCustomers,
    "getTouchedFollowups",
    ()=>getTouchedFollowups
]);
// src/store/activity/activity.ts
// Same file you already wrote — only change: each fn now accepts an optional
// query string (`params`) so the dashboard can filter / paginate.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-client] (ecmascript)");
;
const GET = async (url)=>{
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
_c = GET;
const withParams = (url, params)=>params ? `${url}?${params}` : url;
const getActivityFeed = async (params)=>GET(withParams(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].ACTIVITY.GETFEED, params));
const getActivitySummary = async (params)=>GET(withParams(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].ACTIVITY.GETSUMMARY, params));
const getActivityUsers = async ()=>GET(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].ACTIVITY.GETUSERS);
const getActivityTimeline = async (adminId, params)=>GET(withParams(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].ACTIVITY.GETTIMELINE(adminId), params));
const getTouchedCustomers = async (params)=>GET(withParams(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].ACTIVITY.GETCUSTOMERS, params));
const getTouchedFollowups = async (params)=>GET(withParams(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].ACTIVITY.GETFOLLOWUPS, params));
const getRecordDetail = async (entity, id)=>GET(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].ACTIVITY.GETRECORD(entity, id)); /*  add to constants/ApiRoute.ts :

    ACTIVITY: {
        ...
        GETCUSTOMERS: `${API_URL}/api/activity/customers`,
        GETFOLLOWUPS: `${API_URL}/api/activity/followups`,
        GETRECORD: (entity: string, id: string) => `${API_URL}/api/activity/record/${entity}/${id}`,
    }
*/ 
var _c;
__turbopack_context__.k.register(_c, "GET");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/app/component/DateSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DateSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$AdapterDayjs$2f$AdapterDayjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-date-pickers/esm/AdapterDayjs/AdapterDayjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-date-pickers/esm/LocalizationProvider/LocalizationProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-date-pickers/esm/DatePicker/DatePicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControl/FormControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$customParseFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/plugin/customParseFormat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$customParseFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
/* ---------- helper ---------- */ const parseDate = (str)=>{
    if (!str) return null;
    // ✅ Strict parsing ONLY in DD-MM-YYYY
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(str, "DD-MM-YYYY", true);
    return d.isValid() ? d : null;
};
function DateSelector({ label, value, onChange }) {
    _s();
    const [selectedDate, setSelectedDate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](value ? parseDate(value) : null);
    const { dark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeCustom"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DateSelector.useEffect": ()=>{
            setSelectedDate(value ? parseDate(value) : null);
        }
    }["DateSelector.useEffect"], [
        value
    ]);
    const handleChange = (newValue)=>{
        setSelectedDate(newValue);
        onChange?.(newValue ? newValue.format("DD-MM-YYYY") : "");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalizationProvider"], {
        dateAdapter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$AdapterDayjs$2f$AdapterDayjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdapterDayjs"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%"
                },
                minWidth: {
                    md: 200,
                    lg: 200
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePicker"], {
                label: label,
                value: selectedDate,
                onChange: handleChange,
                format: "DD-MM-YYYY",
                slots: {
                    textField: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                },
                slotProps: {
                    textField: {
                        fullWidth: true,
                        InputLabelProps: {
                            sx: (theme)=>({
                                    // Always applied positioning
                                    transform: "translate(1rem,0.8rem)",
                                    "&.MuiInputLabel-shrink": {
                                        transform: "translate(1rem,-0.5rem)",
                                        fontSize: "12px"
                                    },
                                    // Dark only on max-sm
                                    ...dark && {
                                        [theme.breakpoints.down("sm")]: {
                                            color: "#9CA3AF",
                                            "&.Mui-focused": {
                                                color: "#9CA3AF"
                                            }
                                        }
                                    }
                                })
                        },
                        sx: (theme)=>({
                                // Always applied
                                "& .MuiInputBase-root": {
                                    borderRadius: "8px",
                                    maxHeight: "3rem"
                                },
                                // Dark only on max-sm
                                ...dark && {
                                    [theme.breakpoints.down("sm")]: {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#374151"
                                        },
                                        "& .MuiInputBase-root": {
                                            color: "#D1D5DB"
                                        },
                                        "& .MuiSvgIcon-root": {
                                            color: "#9CA3AF"
                                        }
                                    }
                                }
                            })
                    }
                },
                enableAccessibleFieldDOMStructure: false
            }, void 0, false, {
                fileName: "[project]/src/app/component/DateSelector.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/component/DateSelector.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/component/DateSelector.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(DateSelector, "5PwMWx0D8DLJuBGj1HCE4NJ9+m4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeCustom"]
    ];
});
_c = DateSelector;
var _c;
__turbopack_context__.k.register(_c, "DateSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/reports/activity/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CRM_ROUTES",
    ()=>CRM_ROUTES,
    "default",
    ()=>UserActivityPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$activity$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/activity/activity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/socket/socket.ts [app-client] (ecmascript)"); // <-- your existing socket file
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/SingleSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$DateSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/DateSelector.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const CRM_ROUTES = {
    customer: (id)=>`/customer/${id}`,
    followup: (customerId, followupId)=>`/followups/customer`,
    user: (id)=>`/users/edit/${id}`
};
/** lets any nested row open the record preview drawer without prop drilling */ const ViewCtx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
// ─── Helpers ──────────────────────────────────────────────────────────────────
const pad = (n)=>String(n).padStart(2, "0");
function toInputDate(d) {
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function fmtDate(iso) {
    if (!iso) return "—";
    return new Date(iso).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}
function fmtTime(iso) {
    if (!iso) return "—";
    return new Date(iso).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}
function fmtDuration(sec = 0) {
    if (sec < 60) return `${sec}s`;
    const h = Math.floor(sec / 3600);
    const m = Math.floor(sec % 3600 / 60);
    if (h === 0) return `${m}m`;
    return `${h}h ${m}m`;
}
function timeAgo(iso) {
    const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return fmtDate(iso);
}
function initials(name = "?") {
    return name.trim().split(/\s+/).slice(0, 2).map((w)=>w[0]).join("").toUpperCase();
}
const isoToDDMMYYYY = (iso)=>{
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return `${d}-${m}-${y}`;
};
const ddmmyyyyToISO = (display)=>{
    if (!display) return "";
    const [d, m, y] = display.split("-");
    return `${y}-${m}-${d}`;
};
const ROLE_LABEL = {
    administrator: "Administrator",
    client_admin: "Client Admin",
    city_admin: "City Admin",
    user: "User",
    agent: "Agent"
};
const ACTION_STYLE = {
    create: {
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        dot: "bg-emerald-500",
        label: "Added",
        icon: "＋"
    },
    import: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        dot: "bg-blue-500",
        label: "Imported",
        icon: "📥"
    },
    update: {
        bg: "bg-amber-50",
        text: "text-amber-700",
        dot: "bg-amber-500",
        label: "Edited",
        icon: "✎"
    },
    delete: {
        bg: "bg-red-50",
        text: "text-red-600",
        dot: "bg-red-500",
        label: "Deleted",
        icon: "🗑"
    },
    assign: {
        bg: "bg-violet-50",
        text: "text-violet-700",
        dot: "bg-violet-500",
        label: "Assigned",
        icon: "→"
    },
    unassign: {
        bg: "bg-slate-100",
        text: "text-slate-600",
        dot: "bg-slate-400",
        label: "Unassigned",
        icon: "←"
    },
    login: {
        bg: "bg-sky-50",
        text: "text-sky-700",
        dot: "bg-sky-500",
        label: "Login",
        icon: "⏻"
    },
    logout: {
        bg: "bg-slate-100",
        text: "text-slate-500",
        dot: "bg-slate-400",
        label: "Logout",
        icon: "⏻"
    }
};
const ENTITY_LABEL = {
    customer: "Customer",
    followup: "Follow-up",
    property: "Property",
    contact: "Contact",
    admin: "User"
};
const ENTITY_OPTIONS = [
    "customer",
    "followup"
];
const ACTION_OPTIONS = [
    "create",
    "import",
    "update",
    "delete",
    "assign",
    "unassign"
];
/** turns an action's dot color into a matching border-color utility, so KPI cards / accents
 *  automatically stay in sync with the same taxonomy used across badges & the feed */ function accentBorder(action) {
    return (ACTION_STYLE[action] ?? ACTION_STYLE.update).dot.replace("bg-", "border-");
}
// ─── Icons (kept as hand-rolled inline SVGs to match the rest of the app) ─────
const Icon = {
    activity: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M3 3v18h18M18 17V9M13 17V5M8 17v-3"
    }, void 0, false, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 135,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    plusCircle: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8v8M8 12h8"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true),
    download: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3v11m0 0l-4-4m4 4l4-4"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 145,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 146,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true),
    pencil: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 20h9"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 152,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true),
    trash: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 6h18"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 158,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true),
    phone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 011.12 4.18 2 2 0 013.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"
    }, void 0, false, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 163,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    clock: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7v5l3 3"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 168,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true),
    search: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "7"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 173,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 21l-4.3-4.3"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true),
    calendar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "5",
                width: "18",
                height: "16",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 179,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 3v4M8 3v4M3 10h18"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 180,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true),
    filter: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M4 5h16M7 12h10M10 19h4"
    }, void 0, false, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 184,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    assign: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 188,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8.5",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 189,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 11l2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 190,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true)
};
function GlyphIcon({ path, className = "h-3.5 w-3.5" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: path
    }, void 0, false, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 197,
        columnNumber: 9
    }, this);
}
_c = GlyphIcon;
// ─── Small UI pieces ──────────────────────────────────────────────────────────
function Avatar({ name, online, size = 34 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex-shrink-0",
        style: {
            width: size,
            height: size
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full w-full items-center justify-center rounded-xl bg-[var(--color-primary-lighter)] text-[11px] font-bold text-[var(--color-primary)] ring-1 ring-inset ring-[var(--color-primary-light)]",
                children: initials(name)
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 208,
                columnNumber: 13
            }, this),
            online !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${online ? "bg-emerald-500" : "bg-slate-300"}`
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 214,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 207,
        columnNumber: 9
    }, this);
}
_c1 = Avatar;
function ActionBadge({ action }) {
    const s = ACTION_STYLE[action] ?? ACTION_STYLE.update;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${s.bg} ${s.text}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[9px] leading-none",
                children: s.icon
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 227,
                columnNumber: 13
            }, this),
            s.label
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 226,
        columnNumber: 9
    }, this);
}
_c2 = ActionBadge;
function CountPill({ value, action }) {
    const s = ACTION_STYLE[action] ?? ACTION_STYLE.update;
    if (!value) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-xs font-semibold text-slate-300",
        children: "—"
    }, void 0, false, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 235,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex min-w-[1.75rem] items-center justify-center rounded-full px-2 py-0.5 text-[11px] font-bold tabular-nums ${s.bg} ${s.text}`,
        children: value
    }, void 0, false, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 237,
        columnNumber: 9
    }, this);
}
_c3 = CountPill;
function StatCard({ label, value, sub, tone = "primary", icon }) {
    const tones = {
        primary: {
            text: "text-[var(--color-primary)]",
            bg: "bg-[var(--color-primary-lighter)]",
            bar: "bg-[var(--color-primary)]"
        },
        emerald: {
            text: "text-emerald-700",
            bg: "bg-emerald-50",
            bar: "bg-emerald-500"
        },
        blue: {
            text: "text-blue-700",
            bg: "bg-blue-50",
            bar: "bg-blue-500"
        },
        amber: {
            text: "text-amber-700",
            bg: "bg-amber-50",
            bar: "bg-amber-500"
        },
        red: {
            text: "text-red-600",
            bg: "bg-red-50",
            bar: "bg-red-500"
        },
        violet: {
            text: "text-violet-700",
            bg: "bg-violet-50",
            bar: "bg-violet-500"
        },
        slate: {
            text: "text-slate-600",
            bg: "bg-slate-50",
            bar: "bg-slate-400"
        }
    };
    const t = tones[tone] ?? tones.primary;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative overflow-hidden rounded-2xl border border-[var(--color-primary-light)] bg-white p-3 md:p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute inset-y-0 left-0 w-1 ${t.bar}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 269,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2 pl-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 271,
                        columnNumber: 17
                    }, this),
                    icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `flex h-6 w-6 md:h-7 md:w-7 flex-shrink-0 items-center justify-center rounded-lg ${t.bg} ${t.text}`,
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 273,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 270,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-end justify-between gap-2 pl-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl md:text-2xl font-bold leading-none tabular-nums text-slate-800",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 279,
                        columnNumber: 17
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `rounded-full px-2 py-0.5 text-[9px] md:text-[10px] font-bold ${t.bg} ${t.text}`,
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 280,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 278,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 268,
        columnNumber: 9
    }, this);
}
_c4 = StatCard;
function RowSkeleton({ cols = 4 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 md:gap-3 border-b border-[var(--color-primary-light)] px-3 py-2.5 md:px-4 md:py-3.5 animate-pulse",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 w-8 rounded-xl bg-[var(--color-primary-lighter)]"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 289,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-32 rounded bg-[var(--color-primary-lighter)]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 291,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2.5 w-20 rounded bg-[var(--color-primary-lighter)]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 292,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 290,
                columnNumber: 13
            }, this),
            Array.from({
                length: cols
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-3 w-8 rounded bg-[var(--color-primary-lighter)]"
                }, i, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 295,
                    columnNumber: 17
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 288,
        columnNumber: 9
    }, this);
}
_c5 = RowSkeleton;
function Empty({ text, hint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--color-primary-light)] py-10 md:py-14 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-lighter)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "22",
                    height: "22",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "var(--color-primary)",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "9"
                        }, void 0, false, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 306,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 8v4l3 2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 306,
                            columnNumber: 53
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 305,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 304,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-bold text-slate-600",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 309,
                columnNumber: 13
            }, this),
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 max-w-xs text-[11px] md:text-xs text-slate-400",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 310,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 303,
        columnNumber: 9
    }, this);
}
_c6 = Empty;
// ─── Activity row (used in feed + timeline) ───────────────────────────────────
function ActivityRow({ a, showUser = true, hideView = false }) {
    _s();
    const onView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ViewCtx);
    const s = ACTION_STYLE[a.action] ?? ACTION_STYLE.update;
    const viewableId = a.entity === "customer" ? a.customerId : a.followupId;
    const canView = !hideView && !!onView && !!viewableId && a.action !== "delete";
    const changed = a.meta?.changed ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group flex gap-2 md:gap-2 px-3 py-2.5  transition-colors hover:bg-[var(--color-primary-lighter)]/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `mt-1.5 h-2 w-2 md:h-2.5 md:w-2.5 flex-shrink-0 rounded-full ring-4 ring-white ${s.dot}`
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 326,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-1.5",
                        children: [
                            showUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] md:text-xs font-bold text-slate-700",
                                children: a.admin?.name ?? "Unknown"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 330,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBadge, {
                                action: a.action
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 332,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] md:text-xs text-slate-400",
                                children: ENTITY_LABEL[a.entity] ?? a.entity
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 333,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 328,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 truncate text-[11px] md:text-xs text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-700",
                                children: a.entityName || "—"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 337,
                                columnNumber: 21
                            }, this),
                            a.target && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400",
                                children: [
                                    " · to ",
                                    a.target.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 339,
                                columnNumber: 25
                            }, this),
                            a.meta?.StatusType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400",
                                children: [
                                    " · ",
                                    a.meta.StatusType
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 342,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 336,
                        columnNumber: 17
                    }, this),
                    changed.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1.5 flex flex-wrap gap-1",
                        children: [
                            changed.slice(0, 5).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-md border border-[var(--color-primary-light)] bg-white px-1.5 py-0.5 text-[9px] font-semibold text-slate-500",
                                    children: f
                                }, f, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 349,
                                    columnNumber: 29
                                }, this)),
                            changed.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-semibold text-slate-400",
                                children: [
                                    "+",
                                    changed.length - 5,
                                    " more"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 354,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 347,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 327,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-shrink-0 items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] md:text-[10px] font-semibold text-slate-400",
                                children: timeAgo(a.createdAt)
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 362,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] md:text-[10px] text-slate-300",
                                children: fmtTime(a.createdAt)
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 363,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 361,
                        columnNumber: 17
                    }, this),
                    !hideView && (canView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewButton, {
                        onClick: ()=>onView(a.entity, viewableId)
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 367,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewButton, {
                        disabled: true,
                        onClick: ()=>{}
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 369,
                        columnNumber: 25
                    }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 360,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 325,
        columnNumber: 9
    }, this);
}
_s(ActivityRow, "NutQh/e5FlYpD7nEs0vrNm21L28=");
_c7 = ActivityRow;
// ─── Timeline Drawer ──────────────────────────────────────────────────────────
function TimelineDrawer({ adminId, params, onlineIds, onClose }) {
    _s1();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [unlinked, setUnlinked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineDrawer.useEffect": ()=>{
            const handleKey = {
                "TimelineDrawer.useEffect.handleKey": (e)=>e.key === "Escape" && onClose()
            }["TimelineDrawer.useEffect.handleKey"];
            document.addEventListener("keydown", handleKey);
            return ({
                "TimelineDrawer.useEffect": ()=>document.removeEventListener("keydown", handleKey)
            })["TimelineDrawer.useEffect"];
        }
    }["TimelineDrawer.useEffect"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineDrawer.useEffect": ()=>{
            ({
                "TimelineDrawer.useEffect": async ()=>{
                    setLoading(true);
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$activity$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivityTimeline"])(adminId, params);
                    if (res?.success) {
                        setUser(res.user);
                        setSessions(res.timeline ?? []);
                        setUnlinked(res.unlinkedActivities ?? []);
                        setOpen(res.timeline?.[0]?.sessionId ?? null);
                    }
                    setLoading(false);
                }
            })["TimelineDrawer.useEffect"]();
        }
    }["TimelineDrawer.useEffect"], [
        adminId,
        params
    ]);
    const totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TimelineDrawer.useMemo[totals]": ()=>{
            const acts = sessions.reduce({
                "TimelineDrawer.useMemo[totals]": (n, s)=>n + s.totalActivities
            }["TimelineDrawer.useMemo[totals]"], 0) + unlinked.length;
            const secs = sessions.reduce({
                "TimelineDrawer.useMemo[totals].secs": (n, s)=>n + (s.durationSec || 0)
            }["TimelineDrawer.useMemo[totals].secs"], 0);
            return {
                acts,
                secs,
                sessions: sessions.length
            };
        }
    }["TimelineDrawer.useMemo[totals]"], [
        sessions,
        unlinked
    ]);
    const isOnline = user ? onlineIds.has(user.id) : false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed cursor-pointer inset-0 z-40 bg-slate-900/30 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 426,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-y-0 right-0 z-50 flex w-full max-w-xl max-sm:max-w-[100vw] flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-2 md:gap-3 border-b border-[var(--color-primary-light)] px-4 py-4 md:px-6 md:py-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 md:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                        name: user?.name ?? "…",
                                        online: isOnline,
                                        size: 44
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-sm md:text-base font-bold text-slate-800",
                                                children: user?.name ?? "Loading…"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 433,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 flex items-center gap-1.5 md:gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-[var(--color-primary-lighter)] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold text-[var(--color-primary)]",
                                                        children: ROLE_LABEL[user?.role ?? ""] ?? user?.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold ${isOnline ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `h-1.5 w-1.5 rounded-full ${isOnline ? "animate-pulse bg-emerald-500" : "bg-slate-400"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 37
                                                            }, this),
                                                            isOnline ? "Online now" : "Offline"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 434,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 432,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 430,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                "aria-label": "Close timeline",
                                className: "cursor-pointer flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-all hover:bg-slate-50 hover:text-slate-600",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 445,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 429,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-px border-b border-[var(--color-primary-light)] bg-[var(--color-primary-light)]",
                        children: [
                            {
                                l: "Sessions",
                                v: totals.sessions
                            },
                            {
                                l: "Online time",
                                v: fmtDuration(totals.secs)
                            },
                            {
                                l: "Activities",
                                v: totals.acts
                            }
                        ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white px-3 py-2 md:px-4 md:py-3 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-slate-400",
                                        children: x.l
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 md:mt-1 text-xs md:text-sm font-bold tabular-nums text-slate-800",
                                        children: x.v
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 457,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, x.l, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 455,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 449,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-4 py-4 md:px-6 md:py-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-3 md:mb-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]",
                                children: "Online / offline timeline"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 464,
                                columnNumber: 21
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: Array.from({
                                    length: 4
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowSkeleton, {
                                        cols: 2
                                    }, i, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 93
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 469,
                                columnNumber: 25
                            }, this) : sessions.length === 0 && unlinked.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
                                text: "No sessions in this range",
                                hint: "This user was not online during the selected dates."
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 471,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative space-y-3 pl-4 md:pl-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-primary-light)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 29
                                    }, this),
                                    sessions.map((s)=>{
                                        const isOpen = open === s.sessionId;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute -left-4 md:-left-5 top-4 h-2.5 w-2.5 md:h-3 md:w-3 rounded-full border-2 border-white ${s.isOnline ? "animate-pulse bg-emerald-500" : "bg-[var(--color-primary)]"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-hidden rounded-xl border border-[var(--color-primary-light)] bg-white transition-shadow hover:shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setOpen(isOpen ? null : s.sessionId),
                                                            className: "flex cursor-pointer w-full items-center justify-between gap-2 md:gap-3 px-3 py-2.5 md:px-4 md:py-3 text-left transition-colors hover:bg-[var(--color-primary-lighter)]/60",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[11px] md:text-xs font-bold text-slate-700",
                                                                            children: [
                                                                                fmtDate(s.loginAt),
                                                                                " · ",
                                                                                fmtTime(s.loginAt),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-slate-300",
                                                                                    children: " → "
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                                    lineNumber: 491,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                s.isOnline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-emerald-600",
                                                                                    children: "still online"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                                    lineNumber: 493,
                                                                                    columnNumber: 63
                                                                                }, this) : fmtTime(s.logoutAt)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 489,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-0.5 text-[9px] md:text-[10px] text-slate-400",
                                                                            children: [
                                                                                fmtDuration(s.durationSec),
                                                                                " online · ",
                                                                                s.totalActivities,
                                                                                " ",
                                                                                s.totalActivities === 1 ? "activity" : "activities",
                                                                                s.ip ? ` · ${s.ip}` : ""
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 496,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 488,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        s.totalActivities > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded-full bg-[var(--color-primary-lighter)] px-2 py-1 text-[9px] md:text-[10px] font-bold tabular-nums text-[var(--color-primary)]",
                                                                            children: s.totalActivities
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 503,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-slate-300 transition-transform ${isOpen ? "rotate-90" : ""}`,
                                                                            children: "›"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 507,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 501,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 45
                                                        }, this),
                                                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-t border-[var(--color-primary-light)] bg-slate-50/50",
                                                            children: [
                                                                Object.keys(s.counts).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-1.5 px-3 pt-2.5 md:px-4 md:pt-3",
                                                                    children: Object.entries(s.counts).map(([k, v])=>{
                                                                        const [entity, action] = k.split("_");
                                                                        const st = ACTION_STYLE[action] ?? ACTION_STYLE.update;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `rounded-full px-2 py-0.5 text-[9px] md:text-[10px] font-bold ${st.bg} ${st.text}`,
                                                                            children: [
                                                                                st.label,
                                                                                " ",
                                                                                ENTITY_LABEL[entity] ?? entity,
                                                                                " · ",
                                                                                v
                                                                            ]
                                                                        }, k, true, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 520,
                                                                            columnNumber: 69
                                                                        }, this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 515,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "divide-y divide-[var(--color-primary-light)]",
                                                                    children: s.activities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "px-3 py-3 md:px-4 md:py-4 text-center text-[11px] md:text-xs italic text-slate-300",
                                                                        children: "No activity in this session"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                        lineNumber: 529,
                                                                        columnNumber: 61
                                                                    }, this) : s.activities.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityRow, {
                                                                            a: a,
                                                                            showUser: false
                                                                        }, a.id, false, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 531,
                                                                            columnNumber: 85
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, s.sessionId, true, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 480,
                                            columnNumber: 37
                                        }, this);
                                    }),
                                    unlinked.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -left-4 md:-left-5 top-4 h-2.5 w-2.5 md:h-3 md:w-3 rounded-full border-2 border-white bg-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 543,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-hidden rounded-xl border border-dashed border-slate-300 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-3 py-2.5 md:px-4 md:py-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] md:text-xs font-bold text-slate-600",
                                                                children: "Outside a tracked session"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 546,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-0.5 text-[9px] md:text-[10px] text-slate-400",
                                                                children: [
                                                                    unlinked.length,
                                                                    " activities done while not connected (API / mobile / socket off)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "divide-y divide-[var(--color-primary-light)] border-t border-[var(--color-primary-light)] bg-slate-50/50",
                                                        children: unlinked.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityRow, {
                                                                a: a,
                                                                showUser: false
                                                            }, a.id, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 552,
                                                                columnNumber: 66
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 551,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 544,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 473,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 463,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-[var(--color-primary-light)] px-4 py-3 md:px-6 md:py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-full cursor-pointer rounded-xl border-2 border-[var(--color-primary-light)] py-2 md:py-2.5 text-xs md:text-sm font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)]",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 562,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 561,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 427,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s1(TimelineDrawer, "pT3N5f16+eoqQhGNkfrmItunb8E=");
_c8 = TimelineDrawer;
// ─── Record preview drawer (customer / follow-up) ─────────────────────────────
function RecordDrawer({ entity, id, onClose }) {
    _s2();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [res, setRes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecordDrawer.useEffect": ()=>{
            const handleKey = {
                "RecordDrawer.useEffect.handleKey": (e)=>e.key === "Escape" && onClose()
            }["RecordDrawer.useEffect.handleKey"];
            document.addEventListener("keydown", handleKey);
            return ({
                "RecordDrawer.useEffect": ()=>document.removeEventListener("keydown", handleKey)
            })["RecordDrawer.useEffect"];
        }
    }["RecordDrawer.useEffect"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecordDrawer.useEffect": ()=>{
            ({
                "RecordDrawer.useEffect": async ()=>{
                    setLoading(true);
                    const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$activity$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecordDetail"])(entity, id);
                    setRes(r?.success ? r : null);
                    setLoading(false);
                }
            })["RecordDrawer.useEffect"]();
        }
    }["RecordDrawer.useEffect"], [
        entity,
        id
    ]);
    const rec = res?.record;
    const deleted = res?.isDeleted;
    const fields = entity === "customer" ? [
        {
            label: "Contact",
            value: rec?.ContactNumber
        },
        {
            label: "CountryCode",
            value: rec?.CountryCode
        },
        {
            label: "Email",
            value: rec?.Email
        },
        {
            label: "City",
            value: rec?.City
        },
        {
            label: "Location",
            value: rec?.Location
        },
        {
            label: "Campaign",
            value: rec?.Campaign
        },
        {
            label: "Type",
            value: rec?.CustomerType
        },
        {
            label: "Lead Type",
            value: rec?.LeadType
        },
        {
            label: "Temperature",
            value: rec?.LeadTemperature
        },
        {
            label: "Price",
            value: rec?.Price
        },
        {
            label: "Follow-ups",
            value: rec?.followupCount
        },
        {
            label: "Created By",
            value: rec?.createdBy?.name
        },
        {
            label: "Created On",
            value: rec ? fmtDate(rec.createdAt) : null
        }
    ] : [
        {
            label: "Customer",
            value: rec?.customer?.customerName
        },
        {
            label: "Contact",
            value: rec?.customer?.ContactNumber
        },
        {
            label: "City",
            value: rec?.customer?.City
        },
        {
            label: "Status",
            value: rec?.StatusType
        },
        {
            label: "Start Date",
            value: rec?.StartDate
        },
        {
            label: "Next Follow-up",
            value: rec?.FollowupNextDate
        },
        {
            label: "Created By",
            value: rec?.createdBy?.name
        },
        {
            label: "Created On",
            value: rec ? fmtDate(rec.createdAt) : null
        }
    ];
    const openFullPage = ()=>{
        if (!rec) return;
        onClose();
        router.push(entity === "customer" ? CRM_ROUTES.customer(rec.id) : CRM_ROUTES.followup(rec.customerId, rec.id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed cursor-pointer inset-0 z-[60] bg-slate-900/30 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 644,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-y-0 right-0 z-[70] flex w-full max-w-lg max-sm:max-w-[100vw] flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-3 border-b border-[var(--color-primary-light)] px-4 py-4 md:px-6 md:py-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)]",
                                        children: [
                                            ENTITY_LABEL[entity],
                                            " details"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 649,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-0.5 md:mt-1 truncate text-sm md:text-base font-bold text-slate-800",
                                        children: loading ? "Loading…" : entity === "customer" ? rec?.customerName ?? "Deleted record" : rec?.customer?.customerName ?? "Deleted record"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 652,
                                        columnNumber: 25
                                    }, this),
                                    deleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1 md:mt-1.5 inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-[9px] md:text-[10px] font-bold text-red-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-1.5 w-1.5 rounded-full bg-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 661,
                                                columnNumber: 33
                                            }, this),
                                            " Deleted"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 660,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 648,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                "aria-label": "Close record preview",
                                className: "flex cursor-pointer h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-all hover:bg-slate-50 hover:text-slate-600",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 665,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 647,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 p-4 md:p-6",
                            children: Array.from({
                                length: 6
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowSkeleton, {
                                    cols: 1
                                }, i, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 671,
                                    columnNumber: 70
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 670,
                            columnNumber: 25
                        }, this) : !res ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 md:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
                                text: "Could not load this record",
                                hint: "It may be outside your access scope."
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 674,
                                columnNumber: 53
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 674,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                deleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-4 md:px-6 md:py-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-red-100 bg-red-50 px-3 py-2.5 md:px-4 md:py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] md:text-xs font-bold text-red-600",
                                                    children: "This record was deleted"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-0.5 text-[10px] md:text-[11px] text-red-400",
                                                    children: "It no longer exists in the database. Below is what was captured at delete time."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 679,
                                            columnNumber: 37
                                        }, this),
                                        res.snapshot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                            className: "mt-4 space-y-2",
                                            children: Object.entries(res.snapshot).filter(([k])=>![
                                                    "ip",
                                                    "changed"
                                                ].includes(k)).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-3 border-b border-[var(--color-primary-light)] py-2 last:border-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            className: "text-[10px] md:text-[11px] capitalize text-slate-400",
                                                            children: k
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 57
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            className: "truncate text-[11px] md:text-xs font-semibold text-slate-600",
                                                            children: String(v ?? "—")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 692,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, k, true, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 53
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 686,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 678,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-4 md:px-6 md:py-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-2 md:mb-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]",
                                            children: "Overview"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 700,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                            className: "grid grid-cols-2 gap-x-3 md:gap-x-4",
                                            children: fields.filter(({ label, value })=>label !== "CountryCode").map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-b border-[var(--color-primary-light)] py-2 md:py-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            className: "text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 704,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            className: "mt-0.5 truncate text-[11px] md:text-xs font-semibold text-slate-700",
                                                            children: value === null || value === undefined || value === "" ? "—" : label === "Contact" ? "+" + String(fields[1].value) + " " + String(value) : String(value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 705,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, label, true, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 703,
                                                    columnNumber: 45
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 701,
                                            columnNumber: 37
                                        }, this),
                                        entity === "customer" && rec?.assignedTo?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-1.5 md:mb-2 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                    children: "Assigned To"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 714,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1.5",
                                                    children: rec.assignedTo.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full bg-[var(--color-primary-lighter)] px-2.5 py-1 text-[9px] md:text-[10px] font-bold text-[var(--color-primary)]",
                                                            children: u.name
                                                        }, u.id, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 717,
                                                            columnNumber: 53
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 715,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 713,
                                            columnNumber: 41
                                        }, this),
                                        rec?.Description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-1.5 md:mb-2 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 727,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rounded-xl border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] p-2.5 md:p-3 text-[11px] md:text-xs leading-relaxed text-slate-600",
                                                    children: rec.Description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 728,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 726,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 699,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-[var(--color-primary-light)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "px-4 md:px-6 pb-1 pt-4 md:pt-5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]",
                                            children: [
                                                "History (",
                                                res.history.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 738,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "divide-y divide-[var(--color-primary-light)]",
                                            children: res.history.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityRow, {
                                                    a: a,
                                                    hideView: true
                                                }, a.id, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 742,
                                                    columnNumber: 61
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 741,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 737,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 668,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 md:gap-3 border-t border-[var(--color-primary-light)] px-4 py-3 md:px-6 md:py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "flex-1 cursor-pointer rounded-xl border-2 border-[var(--color-primary-light)] py-2 md:py-2.5 text-xs md:text-sm font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)]",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 750,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openFullPage,
                                disabled: !rec,
                                className: "flex-1 cursor-pointer rounded-xl bg-[var(--color-primary)] py-2 md:py-2.5 text-xs md:text-sm font-bold text-white transition-all hover:bg-[var(--color-primary-dark)] disabled:cursor-not-allowed disabled:opacity-40",
                                children: "Open full page →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 753,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 749,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 645,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s2(RecordDrawer, "IALsVPiLCwhIZ6Q4snnND4um1Z4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c9 = RecordDrawer;
// ─── Touched records panel (Customers / Follow-ups tabs) ──────────────────────
function ViewButton({ disabled, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: (e)=>{
            e.stopPropagation();
            if (!disabled) onClick();
        },
        disabled: disabled,
        title: disabled ? "Record was deleted" : "View details",
        className: `flex flex-shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition-all
        ${disabled ? "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-300" : "cursor-pointer border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "11",
            height: "11",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                }, void 0, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 780,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 780,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/reports/activity/page.tsx",
            lineNumber: 779,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 770,
        columnNumber: 9
    }, this);
}
_c10 = ViewButton;
function DeletedBadge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex flex-shrink-0 items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[8px] md:text-[9px] font-bold text-red-600",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-1 w-1 rounded-full bg-red-500"
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 790,
                columnNumber: 13
            }, this),
            " Deleted"
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 789,
        columnNumber: 9
    }, this);
}
_c11 = DeletedBadge;
function TouchedRecordsPanel({ params }) {
    _s3();
    const onView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ViewCtx);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("customer");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [followups, setFollowups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pg, setPg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        page: 1,
        limit: 20,
        total: 0,
        totalPages: 1
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TouchedRecordsPanel.useEffect": ()=>{
            setPage(1);
        }
    }["TouchedRecordsPanel.useEffect"], [
        params,
        tab
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TouchedRecordsPanel.useEffect": ()=>{
            ({
                "TouchedRecordsPanel.useEffect": async ()=>{
                    setLoading(true);
                    const p = new URLSearchParams(params);
                    p.set("page", String(page));
                    p.set("limit", "20");
                    const res = tab === "customer" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$activity$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTouchedCustomers"])(p.toString()) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$activity$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTouchedFollowups"])(p.toString());
                    if (res?.success) {
                        if (tab === "customer") setCustomers(res.data ?? []);
                        else setFollowups(res.data ?? []);
                        setPg(res.pagination ?? {
                            page: 1,
                            limit: 20,
                            total: 0,
                            totalPages: 1
                        });
                    }
                    setLoading(false);
                }
            })["TouchedRecordsPanel.useEffect"]();
        }
    }["TouchedRecordsPanel.useEffect"], [
        tab,
        params,
        page
    ]);
    const rows = tab === "customer" ? customers : followups;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-[var(--color-primary-light)] bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[var(--color-primary-light)] px-4 py-3 md:px-5 md:py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold text-slate-800",
                                children: "Records touched"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 831,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] md:text-[11px] text-slate-400",
                                children: "Every customer & follow-up affected in this date range"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 832,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 830,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between md:justify-end gap-2 w-full md:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex overflow-hidden rounded-full border-2 border-[var(--color-primary-light)] bg-white",
                                children: [
                                    "customer",
                                    "followup"
                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setTab(t),
                                        className: `px-3 py-1.5 md:px-4 md:py-2 cursor-pointer text-[11px] md:text-xs font-bold transition-all
                  ${tab === t ? "bg-[var(--color-primary)] text-white" : "text-slate-500 hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary)]"}`,
                                        children: t === "customer" ? "Customers" : "Follow-ups"
                                    }, t, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 837,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 835,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] px-2.5 py-1 md:px-3 text-[9px] md:text-[10px] font-bold tabular-nums text-[var(--color-primary)]",
                                children: [
                                    pg.total,
                                    " total"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 849,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 834,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 829,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divide-y divide-[var(--color-primary-light)]",
                children: loading ? Array.from({
                    length: 6
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowSkeleton, {
                        cols: 3
                    }, i, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 858,
                        columnNumber: 61
                    }, this)) : rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 md:p-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
                        text: tab === "customer" ? "No customers touched" : "No follow-ups touched",
                        hint: "Nothing was added, edited or deleted in this range."
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 861,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 860,
                    columnNumber: 21
                }, this) : tab === "customer" ? customers.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 md:gap-3 px-3 py-2.5 md:px-5 md:py-3 transition-colors hover:bg-[var(--color-primary-lighter)]/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 md:h-9 md:w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-lighter)] text-[10px] md:text-[11px] font-bold text-[var(--color-primary)] ring-1 ring-inset ring-[var(--color-primary-light)]",
                                children: initials(c.customerName)
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 869,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "truncate text-[11px] md:text-xs font-bold text-slate-700",
                                                children: c.customerName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 875,
                                                columnNumber: 37
                                            }, this),
                                            c.isDeleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeletedBadge, {}, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 876,
                                                columnNumber: 53
                                            }, this),
                                            c.dealClosed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] md:text-[9px] font-bold text-emerald-700",
                                                children: "Deal Closed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 878,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 874,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 truncate text-[10px] md:text-[11px] text-slate-400",
                                        children: [
                                            c.contact,
                                            c.city,
                                            c.campaign
                                        ].filter(Boolean).join(" · ") || "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 881,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 873,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden flex-shrink-0 items-center gap-1 sm:flex",
                                children: [
                                    "create",
                                    "import",
                                    "update",
                                    "delete",
                                    "assign"
                                ].map((a)=>c.counts?.[a] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `rounded-full px-2 py-0.5 text-[9px] md:text-[10px] font-bold ${ACTION_STYLE[a].bg} ${ACTION_STYLE[a].text}`,
                                        children: [
                                            ACTION_STYLE[a].label,
                                            " ",
                                            c.counts[a]
                                        ]
                                    }, a, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 890,
                                        columnNumber: 41
                                    }, this) : null)
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 887,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden w-28 flex-shrink-0 text-right md:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-[10px] md:text-[11px] font-semibold text-slate-600",
                                        children: c.lastBy?.name ?? "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 898,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] md:text-[10px] text-slate-400",
                                        children: timeAgo(c.lastActivityAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 899,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 897,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewButton, {
                                disabled: c.isDeleted,
                                onClick: ()=>onView?.("customer", c.customerId)
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 902,
                                columnNumber: 29
                            }, this)
                        ]
                    }, c.customerId, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 868,
                        columnNumber: 25
                    }, this)) : followups.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 md:gap-3 px-3 py-2.5 md:px-5 md:py-3 transition-colors hover:bg-[var(--color-primary-lighter)]/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 md:h-9 md:w-9 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 text-[10px] md:text-[11px] font-bold text-violet-600",
                                children: "☎"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 911,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "truncate text-[11px] md:text-xs font-bold text-slate-700",
                                                children: f.customerName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 917,
                                                columnNumber: 37
                                            }, this),
                                            f.isDeleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeletedBadge, {}, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 918,
                                                columnNumber: 53
                                            }, this),
                                            f.StatusType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-[var(--color-primary-lighter)] px-2 py-0.5 text-[8px] md:text-[9px] font-bold text-[var(--color-primary)]",
                                                children: f.StatusType
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 920,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 916,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 truncate text-[10px] md:text-[11px] text-slate-400",
                                        children: [
                                            [
                                                f.contact,
                                                f.city
                                            ].filter(Boolean).join(" · "),
                                            f.FollowupNextDate ? ` · next ${f.FollowupNextDate}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 925,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 915,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden flex-shrink-0 items-center gap-1 sm:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-slate-100 px-2 py-0.5 text-[9px] md:text-[10px] font-bold text-slate-500",
                                        children: [
                                            f.totalActivities,
                                            " ",
                                            f.totalActivities === 1 ? "action" : "actions"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 932,
                                        columnNumber: 33
                                    }, this),
                                    f.lastAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBadge, {
                                        action: f.lastAction
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 935,
                                        columnNumber: 50
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 931,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden w-28 flex-shrink-0 text-right md:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-[10px] md:text-[11px] font-semibold text-slate-600",
                                        children: f.lastBy?.name ?? "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 939,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] md:text-[10px] text-slate-400",
                                        children: timeAgo(f.lastActivityAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 940,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 938,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewButton, {
                                disabled: f.isDeleted,
                                onClick: ()=>onView?.("followup", f.followupId)
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 943,
                                columnNumber: 29
                            }, this)
                        ]
                    }, f.followupId, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 910,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 856,
                columnNumber: 13
            }, this),
            pg.totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2 border-t border-[var(--color-primary-light)] px-4 py-3 md:px-5 md:py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: page <= 1,
                        onClick: ()=>setPage((p)=>Math.max(1, p - 1)),
                        className: "rounded-lg cursor-pointer border-2 border-[var(--color-primary-light)] px-2.5 py-1.5 md:px-3 md:py-1.5 text-[10px] md:text-[11px] font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)] disabled:opacity-40",
                        children: "← Prev"
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 954,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] md:text-[11px] font-semibold text-slate-400",
                        children: [
                            (pg.page - 1) * pg.limit + 1,
                            "–",
                            Math.min(pg.page * pg.limit, pg.total),
                            " of ",
                            pg.total
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 958,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: page >= pg.totalPages,
                        onClick: ()=>setPage((p)=>p + 1),
                        className: "rounded-lg cursor-pointer border-2 border-[var(--color-primary-light)] px-2.5 py-1.5 md:px-3 md:py-1.5 text-[10px] md:text-[11px] font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)] disabled:opacity-40",
                        children: "Next →"
                    }, void 0, false, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 961,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 953,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 827,
        columnNumber: 9
    }, this);
}
_s3(TouchedRecordsPanel, "HaICJp48ZiA3JRIePJ2fnArXRRc=");
_c12 = TouchedRecordsPanel;
// ─── Main Page ────────────────────────────────────────────────────────────────
const DENIED_ROLES = [
    "user",
    "agent"
];
function UserActivityPage() {
    _s4();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // auth
    const [me, setMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authChecked, setAuthChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // data
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totals, setTotals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        users: 0,
        activities: 0,
        onlineSeconds: 0
    });
    const [feed, setFeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pagination, setPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        page: 1,
        limit: 25,
        total: 0,
        totalPages: 1
    });
    // ui
    const [loadingSummary, setLoadingSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingFeed, setLoadingFeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [drawerId, setDrawerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [record, setRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openRecord = (entity, id)=>setRecord({
            entity,
            id
        });
    const [onlineIds, setOnlineIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [flash, setFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // filters
    const monthAgo = new Date(Date.now() - 29 * 86400000);
    const today = new Date();
    const TODAY = toInputDate(today);
    const [from, setFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(TODAY);
    const [to, setTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(TODAY);
    const [adminId, setAdminId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [entity, setEntity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [debSearch, setDebSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const debRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onSearch = (v)=>{
        setSearch(v);
        if (debRef.current) clearTimeout(debRef.current);
        debRef.current = setTimeout(()=>{
            setDebSearch(v);
            setPage(1);
        }, 400);
    };
    // ── dropdown <-> state adapters for the reusable SingleSelect ──────────────
    const userOptionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserActivityPage.useMemo[userOptionList]": ()=>[
                "All Users",
                ...users.map({
                    "UserActivityPage.useMemo[userOptionList]": (u)=>`${u.name} — ${ROLE_LABEL[u.role] ?? u.role}`
                }["UserActivityPage.useMemo[userOptionList]"])
            ]
    }["UserActivityPage.useMemo[userOptionList]"], [
        users
    ]);
    const selectedUserLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserActivityPage.useMemo[selectedUserLabel]": ()=>{
            if (!adminId) return "All Users";
            const u = users.find({
                "UserActivityPage.useMemo[selectedUserLabel].u": (x)=>x.id === adminId
            }["UserActivityPage.useMemo[selectedUserLabel].u"]);
            return u ? `${u.name} — ${ROLE_LABEL[u.role] ?? u.role}` : "All Users";
        }
    }["UserActivityPage.useMemo[selectedUserLabel]"], [
        adminId,
        users
    ]);
    const handleUserChange = (label)=>{
        if (label === "All Users") {
            setAdminId("");
            setPage(1);
            return;
        }
        const match = users.find((u)=>`${u.name} — ${ROLE_LABEL[u.role] ?? u.role}` === label);
        setAdminId(match?.id ?? "");
        setPage(1);
    };
    const moduleOptionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserActivityPage.useMemo[moduleOptionList]": ()=>[
                "All Modules",
                ...ENTITY_OPTIONS.map({
                    "UserActivityPage.useMemo[moduleOptionList]": (e)=>ENTITY_LABEL[e]
                }["UserActivityPage.useMemo[moduleOptionList]"])
            ]
    }["UserActivityPage.useMemo[moduleOptionList]"], []);
    const selectedModuleLabel = entity ? ENTITY_LABEL[entity] ?? "All Modules" : "All Modules";
    const handleModuleChange = (label)=>{
        if (label === "All Modules") {
            setEntity("");
            setPage(1);
            return;
        }
        const key = ENTITY_OPTIONS.find((e)=>ENTITY_LABEL[e] === label) ?? "";
        setEntity(key);
        setPage(1);
    };
    const actionOptionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserActivityPage.useMemo[actionOptionList]": ()=>[
                "All Actions",
                ...ACTION_OPTIONS.map({
                    "UserActivityPage.useMemo[actionOptionList]": (a)=>ACTION_STYLE[a].label
                }["UserActivityPage.useMemo[actionOptionList]"])
            ]
    }["UserActivityPage.useMemo[actionOptionList]"], []);
    const selectedActionLabel = action ? ACTION_STYLE[action]?.label ?? "All Actions" : "All Actions";
    const handleActionChange = (label)=>{
        if (label === "All Actions") {
            setAction("");
            setPage(1);
            return;
        }
        const key = ACTION_OPTIONS.find((a)=>ACTION_STYLE[a].label === label) ?? "";
        setAction(key);
        setPage(1);
    };
    const rangeParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserActivityPage.useMemo[rangeParams]": ()=>{
            const p = new URLSearchParams();
            if (from) p.set("from", from);
            if (to) p.set("to", to);
            return p.toString();
        }
    }["UserActivityPage.useMemo[rangeParams]"], [
        from,
        to
    ]);
    const summaryParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserActivityPage.useMemo[summaryParams]": ()=>{
            const p = new URLSearchParams(rangeParams);
            if (adminId) p.set("adminId", adminId);
            return p.toString();
        }
    }["UserActivityPage.useMemo[summaryParams]"], [
        rangeParams,
        adminId
    ]);
    const feedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserActivityPage.useMemo[feedParams]": ()=>{
            const p = new URLSearchParams(summaryParams);
            if (entity) p.set("entity", entity);
            if (action) p.set("action", action);
            if (debSearch.trim()) p.set("search", debSearch.trim());
            p.set("page", String(page));
            p.set("limit", "25");
            return p.toString();
        }
    }["UserActivityPage.useMemo[feedParams]"], [
        summaryParams,
        entity,
        action,
        debSearch,
        page
    ]);
    /** range + user + action + search — no entity, no page (panel owns its paging) */ const recordParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserActivityPage.useMemo[recordParams]": ()=>{
            const p = new URLSearchParams(summaryParams);
            if (action) p.set("action", action);
            if (debSearch.trim()) p.set("search", debSearch.trim());
            return p.toString();
        }
    }["UserActivityPage.useMemo[recordParams]"], [
        summaryParams,
        action,
        debSearch
    ]);
    const activeFilterCount = (from !== TODAY || to !== TODAY ? 1 : 0) + (adminId ? 1 : 0) + (entity ? 1 : 0) + (action ? 1 : 0);
    // ── auth ──────────────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserActivityPage.useEffect": ()=>{
            ({
                "UserActivityPage.useEffect": async ()=>{
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkAuthAdmin"])();
                    const adm = res?.data ?? res?.admin ?? res?.user ?? null;
                    setMe(adm);
                    setAuthChecked(true);
                }
            })["UserActivityPage.useEffect"]();
        }
    }["UserActivityPage.useEffect"], []);
    const hasAccess = !!me && (me.isSuperAdmin || !DENIED_ROLES.includes(me.role));
    // ── socket : live online / offline ────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserActivityPage.useEffect": ()=>{
            if (!hasAccess || !me) return;
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSocket"])() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSocket"])(me.id ?? me._id);
            if (!socket) return;
            const onPresence = {
                "UserActivityPage.useEffect.onPresence": (p)=>{
                    setOnlineIds({
                        "UserActivityPage.useEffect.onPresence": (prev)=>{
                            const next = new Set(prev);
                            p.isOnline ? next.add(p.adminId) : next.delete(p.adminId);
                            return next;
                        }
                    }["UserActivityPage.useEffect.onPresence"]);
                    setSummary({
                        "UserActivityPage.useEffect.onPresence": (prev)=>prev.map({
                                "UserActivityPage.useEffect.onPresence": (r)=>r.user.id === p.adminId ? {
                                        ...r,
                                        isOnline: p.isOnline
                                    } : r
                            }["UserActivityPage.useEffect.onPresence"])
                    }["UserActivityPage.useEffect.onPresence"]);
                    setFlash(p);
                    setTimeout({
                        "UserActivityPage.useEffect.onPresence": ()=>setFlash({
                                "UserActivityPage.useEffect.onPresence": (f)=>f === p ? null : f
                            }["UserActivityPage.useEffect.onPresence"])
                    }["UserActivityPage.useEffect.onPresence"], 4000);
                }
            }["UserActivityPage.useEffect.onPresence"];
            socket.on("activity:presence", onPresence);
            return ({
                "UserActivityPage.useEffect": ()=>{
                    socket.off("activity:presence", onPresence);
                }
            })["UserActivityPage.useEffect"];
        }
    }["UserActivityPage.useEffect"], [
        hasAccess,
        me
    ]);
    // ── fetch users (once) ────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserActivityPage.useEffect": ()=>{
            if (!hasAccess) return;
            ({
                "UserActivityPage.useEffect": async ()=>{
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$activity$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivityUsers"])();
                    if (res?.success) {
                        setUsers(res.data);
                        setOnlineIds(new Set(res.data.filter({
                            "UserActivityPage.useEffect": (u)=>u.isOnline
                        }["UserActivityPage.useEffect"]).map({
                            "UserActivityPage.useEffect": (u)=>u.id
                        }["UserActivityPage.useEffect"])));
                    }
                }
            })["UserActivityPage.useEffect"]();
        }
    }["UserActivityPage.useEffect"], [
        hasAccess
    ]);
    // ── fetch summary ─────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserActivityPage.useEffect": ()=>{
            if (!hasAccess) return;
            ({
                "UserActivityPage.useEffect": async ()=>{
                    setLoadingSummary(true);
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$activity$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivitySummary"])(summaryParams);
                    if (res?.success) {
                        setSummary(res.data ?? []);
                        setTotals(res.totals ?? {
                            users: 0,
                            activities: 0,
                            onlineSeconds: 0
                        });
                        setError(null);
                    } else setError(res?.message ?? "Failed to load summary");
                    setLoadingSummary(false);
                }
            })["UserActivityPage.useEffect"]();
        }
    }["UserActivityPage.useEffect"], [
        hasAccess,
        summaryParams
    ]);
    // ── fetch feed ────────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserActivityPage.useEffect": ()=>{
            if (!hasAccess) return;
            ({
                "UserActivityPage.useEffect": async ()=>{
                    setLoadingFeed(true);
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$activity$2f$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivityFeed"])(feedParams);
                    if (res?.success) {
                        setFeed(res.data ?? []);
                        setPagination(res.pagination ?? {
                            page: 1,
                            limit: 25,
                            total: 0,
                            totalPages: 1
                        });
                    }
                    setLoadingFeed(false);
                }
            })["UserActivityPage.useEffect"]();
        }
    }["UserActivityPage.useEffect"], [
        hasAccess,
        feedParams
    ]);
    // ── derived KPI numbers ───────────────────────────────────────────────────
    const kpi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserActivityPage.useMemo[kpi]": ()=>{
            const acc = {
                added: 0,
                imported: 0,
                edited: 0,
                deleted: 0,
                followups: 0,
                assigned: 0
            };
            for (const r of summary){
                acc.added += r.counts?.customer?.create ?? 0;
                acc.imported += r.counts?.customer?.import ?? 0;
                acc.edited += r.counts?.customer?.update ?? 0;
                acc.deleted += r.counts?.customer?.delete ?? 0;
                acc.assigned += (r.counts?.customer?.assign ?? 0) + (r.counts?.customer?.unassign ?? 0);
                const f = r.counts?.followup ?? {};
                acc.followups += (f.create ?? 0) + (f.update ?? 0) + (f.delete ?? 0);
            }
            return acc;
        }
    }["UserActivityPage.useMemo[kpi]"], [
        summary
    ]);
    const onlineCount = onlineIds.size;
    const isFiltered = !!(adminId || entity || action || debSearch);
    const resetFilters = ()=>{
        setAdminId("");
        setEntity("");
        setAction("");
        setSearch("");
        setDebSearch("");
        setPage(1);
        setFrom(TODAY);
        setTo(TODAY);
    };
    // ── guards ────────────────────────────────────────────────────────────────
    if (!authChecked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-[60vh] items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "var(--color-primary)",
                strokeWidth: "2.5",
                className: "h-6 w-6 animate-spin",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 12a9 9 0 1 1-6.219-8.56"
                }, void 0, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 1194,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/reports/activity/page.tsx",
                lineNumber: 1193,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/reports/activity/page.tsx",
            lineNumber: 1192,
            columnNumber: 13
        }, this);
    }
    if (!hasAccess) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-[60vh] flex-col items-center justify-center rounded-md bg-gradient-to-br from-slate-50 to-white px-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "var(--color-destructive)",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "3",
                                y: "11",
                                width: "18",
                                height: "11",
                                rx: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 1205,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M7 11V7a5 5 0 0 1 10 0v4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 1205,
                                columnNumber: 76
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 1204,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 1203,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold text-slate-800",
                    children: "Access restricted"
                }, void 0, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 1208,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 max-w-sm text-sm text-slate-400",
                    children: "Activity reports are available to admins only. Contact your administrator if you need access."
                }, void 0, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 1209,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/reports/activity/page.tsx",
            lineNumber: 1202,
            columnNumber: 13
        }, this);
    }
    // ── render ────────────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewCtx.Provider, {
        value: openRecord,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen overflow-hidden rounded-md bg-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Instrument+Serif&display=swap');
    body { font-family: 'DM Sans', sans-serif; }
    .heading-font { font-family: 'Instrument Serif', serif; }
    .animate-in { animation-fill-mode: both; }
    @keyframes slide-in-from-right { from { transform: translateX(100%); } to { transform: translateX(0); } }
    @keyframes slide-in-from-top { from { transform: translateY(-12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    
    /* ADDED FOR MOBILE DRAWER */
    @keyframes slide-in-from-bottom { from { transform: translateY(100%); } to { transform: translateY(0); } }
    .slide-in-from-bottom { animation-name: slide-in-from-bottom; }
    .pb-safe { padding-bottom: env(safe-area-inset-bottom, 16px); }

    .slide-in-from-right { animation-name: slide-in-from-right; }
    .slide-in-from-top { animation-name: slide-in-from-top; }
    .duration-300 { animation-duration: 300ms; }
    @keyframes shimmer-skeleton { 0%{opacity:1} 50%{opacity:.5} 100%{opacity:1} }
    .animate-pulse { animation: shimmer-skeleton 1.5s ease-in-out infinite; }
`
                }, void 0, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 1220,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "sticky top-0   bg-white/85 backdrop-blur-md ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-3 py-3 md:px-6 md:py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 md:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-[var(--color-primary)] shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                            path: Icon.activity,
                                            className: "h-4 w-4 md:h-5 md:w-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1245,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1244,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] opacity-70",
                                                children: "Reports"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1248,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: " -mt-0.5 text-xl md:text-2xl leading-none text-slate-800",
                                                children: "User Activity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1249,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1247,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 1243,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5 md:gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1.5 md:px-3 md:py-2 text-[10px] md:text-xs font-bold text-emerald-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative flex h-1.5 w-1.5 md:h-2 md:w-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1256,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative inline-flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1257,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1255,
                                                columnNumber: 33
                                            }, this),
                                            onlineCount,
                                            " online"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1254,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setPage(1);
                                            setFrom(from);
                                            setTo(to);
                                            setDebSearch(debSearch + "");
                                        },
                                        className: "flex items-center cursor-pointer gap-1.5 md:gap-2 rounded-xl bg-[var(--color-primary)] px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold text-white transition-all hover:bg-[var(--color-primary-dark)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "11",
                                                height: "11",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "3",
                                                strokeLinecap: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M23 4v6h-6M1 20v-6h6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1266,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1266,
                                                        columnNumber: 70
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1265,
                                                columnNumber: 33
                                            }, this),
                                            "Refresh"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1261,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 1253,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 1242,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 1241,
                    columnNumber: 17
                }, this),
                flash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none fixed right-4 md:right-6 top-20 z-50 animate-in slide-in-from-top duration-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 rounded-xl border border-[var(--color-primary-light)] bg-white px-3 py-2 md:px-4 md:py-2.5 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-2 w-2 rounded-full ${flash.isOnline ? "bg-emerald-500" : "bg-slate-400"}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 1278,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] md:text-xs font-semibold text-slate-700",
                                children: [
                                    flash.name,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-normal text-slate-400",
                                        children: flash.isOnline ? "came online" : "went offline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1280,
                                        columnNumber: 46
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 1279,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reports/activity/page.tsx",
                        lineNumber: 1277,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 1276,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "mx-auto max-w-[1600px] px-3 py-5  ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4 md:mb-6 -mt-2 text-xs md:text-sm text-slate-400",
                            children: "Who did what, when they were online, and everything they touched — all in one place."
                        }, void 0, false, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 1288,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-5 flex items-center gap-2 md:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                            path: Icon.search,
                                            className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1297,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: search,
                                            onChange: (e)=>onSearch(e.target.value),
                                            placeholder: "Search records...",
                                            className: "w-full rounded-2xl border-none bg-white py-3 pl-10 pr-4 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1298,
                                            columnNumber: 29
                                        }, this),
                                        search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onSearch(""),
                                            className: "absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-slate-100 text-slate-400",
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1305,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1296,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMobileFilterOpen(true),
                                    className: "relative flex h-[42px] cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-white px-4 text-xs font-bold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 transition-all active:bg-slate-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                            path: Icon.filter,
                                            className: "h-4 w-4 text-[var(--color-primary)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1312,
                                            columnNumber: 29
                                        }, this),
                                        "Filters",
                                        activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[var(--color-primary)] text-[9px] font-bold text-white shadow-sm",
                                            children: activeFilterCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1315,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1308,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 1295,
                            columnNumber: 21
                        }, this),
                        isMobileFilterOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm transition-opacity",
                                    onClick: ()=>setIsMobileFilterOpen(false)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1326,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed inset-x-0 bottom-0 z-[110] flex max-h-[88vh] flex-col rounded-t-[2rem] bg-white shadow-2xl animate-in slide-in-from-bottom duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 top-3 h-1.5 w-12 -translate-x-1/2 rounded-full bg-slate-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1331,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex items-center justify-between border-b border-slate-100 px-6 pb-4 pt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-bold text-slate-800",
                                                            children: "Advanced Filters"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1336,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-400",
                                                            children: "Refine your activity results"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1337,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1335,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsMobileFilterOpen(false),
                                                    className: "flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500",
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1339,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1334,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 overflow-y-auto px-6 py-5 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400",
                                                            children: "Timeframe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1347,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: [
                                                                {
                                                                    l: "Today",
                                                                    d: 0
                                                                },
                                                                {
                                                                    l: "Last 7 Days",
                                                                    d: 6
                                                                },
                                                                {
                                                                    l: "Last 30 Days",
                                                                    d: 29
                                                                }
                                                            ].map(({ l, d })=>{
                                                                const start = toInputDate(new Date(Date.now() - d * 86400000));
                                                                const active = from === start && to === TODAY;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setFrom(start);
                                                                        setTo(TODAY);
                                                                    },
                                                                    className: `rounded-full px-4 py-2 text-[11px] font-bold transition-all ${active ? "bg-[var(--color-primary)] text-white shadow-md shadow-primary/20" : "bg-white ring-1 ring-inset ring-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                                                    children: l
                                                                }, l, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 1353,
                                                                    columnNumber: 53
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1348,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1346,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$DateSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                label: "Custom From",
                                                                value: isoToDDMMYYYY(from),
                                                                onChange: (v)=>{
                                                                    setFrom(ddmmyyyyToISO(v));
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 1368,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1367,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$DateSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                label: "Custom To",
                                                                value: isoToDDMMYYYY(to),
                                                                onChange: (v)=>{
                                                                    setTo(ddmmyyyyToISO(v));
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 1371,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1370,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1366,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "mb-2 mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-400",
                                                            children: "Activity Details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1377,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative z-30",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                label: "Target User",
                                                                options: userOptionList,
                                                                value: selectedUserLabel,
                                                                onChange: handleUserChange,
                                                                isSearchable: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 1379,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1378,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative z-20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                label: "Module Type",
                                                                options: moduleOptionList,
                                                                value: selectedModuleLabel,
                                                                onChange: handleModuleChange
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 1382,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1381,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative z-10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                label: "Action Performed",
                                                                options: actionOptionList,
                                                                value: selectedActionLabel,
                                                                onChange: handleActionChange
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 1385,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1384,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1376,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1388,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1343,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-slate-100 bg-white p-4 pb-safe mb-4 flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: resetFilters,
                                                    className: "flex-1 rounded-2xl bg-slate-100 py-3.5 text-xs font-bold text-slate-600 transition-active active:bg-slate-200",
                                                    children: "Clear All"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1393,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsMobileFilterOpen(false),
                                                    className: "flex-[2] rounded-2xl bg-[var(--color-primary)] py-3.5 text-xs font-bold text-white shadow-lg shadow-[var(--color-primary-light)] transition-active active:bg-[var(--color-primary-dark)]",
                                                    children: "Show Results"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1396,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1392,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1329,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 1324,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block mb-6 rounded-2xl  p-4 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                            path: Icon.filter,
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1408,
                                            columnNumber: 29
                                        }, this),
                                        "Filters"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1407,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-end gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-[160px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$DateSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                label: "From",
                                                value: isoToDDMMYYYY(from),
                                                onChange: (v)=>{
                                                    setFrom(ddmmyyyyToISO(v));
                                                    setPage(1);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1414,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1413,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-[160px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$DateSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                label: "To",
                                                value: isoToDDMMYYYY(to),
                                                onChange: (v)=>{
                                                    setTo(ddmmyyyyToISO(v));
                                                    setPage(1);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1417,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1416,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-w-[190px] flex-1 flex-col gap-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                label: "User",
                                                options: userOptionList,
                                                value: selectedUserLabel,
                                                onChange: handleUserChange,
                                                isSearchable: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1421,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1420,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-w-[160px] flex-col gap-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                label: "Module",
                                                options: moduleOptionList,
                                                value: selectedModuleLabel,
                                                onChange: handleModuleChange
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1425,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1424,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-w-[160px] flex-col gap-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                label: "Action",
                                                options: actionOptionList,
                                                value: selectedActionLabel,
                                                onChange: handleActionChange
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1429,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1428,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-[200px] flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mb-1 block text-[10px] font-bold uppercase tracking-widest text-slate-400",
                                                    children: "Search"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1433,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                                            path: Icon.search,
                                                            className: "pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1435,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: search,
                                                            onChange: (e)=>onSearch(e.target.value),
                                                            placeholder: "Customer or user name…",
                                                            className: "w-full rounded-xl border-2 border-[var(--color-primary-light)] placeholder:text-slate-400 bg-white py-2 pl-9 pr-8 text-xs text-slate-700 outline-none transition-all focus:border-[var(--color-primary)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1436,
                                                            columnNumber: 37
                                                        }, this),
                                                        search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>onSearch(""),
                                                            className: "absolute right-2.5 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full text-slate-300 hover:bg-slate-100 hover:text-slate-500",
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1439,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1434,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1432,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest text-slate-400",
                                                    children: "Quick"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1445,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex overflow-hidden rounded-full border-2 border-[var(--color-primary-light)] bg-white",
                                                    children: [
                                                        {
                                                            l: "Today",
                                                            d: 0
                                                        },
                                                        {
                                                            l: "7D",
                                                            d: 6
                                                        },
                                                        {
                                                            l: "30D",
                                                            d: 29
                                                        }
                                                    ].map(({ l, d })=>{
                                                        const start = toInputDate(new Date(Date.now() - d * 86400000));
                                                        const active = from === start && to === TODAY;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setFrom(start);
                                                                setTo(TODAY);
                                                                setPage(1);
                                                            },
                                                            className: `cursor-pointer px-3 py-2 text-xs font-bold transition-all ${active ? "bg-[var(--color-primary)] text-white" : "text-slate-500 hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary)]"}`,
                                                            children: l
                                                        }, l, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1455,
                                                            columnNumber: 45
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1446,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1444,
                                            columnNumber: 29
                                        }, this),
                                        isFiltered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: resetFilters,
                                            className: "rounded-xl cursor-pointer border-2 border-[var(--color-primary-light)] px-4 py-2 text-xs font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary-lighter)]",
                                            children: "Clear"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                            lineNumber: 1468,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1411,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 1406,
                            columnNumber: 21
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 md:mb-6 flex items-center gap-2 md:gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 md:px-6 md:py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base md:text-lg",
                                    children: "⚠️"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1477,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs md:text-sm font-medium text-red-600",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1478,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 1476,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 md:mb-6 grid grid-cols-2 gap-2 md:gap-3 sm:grid-cols-3 lg:grid-cols-4 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    label: "Total Activities",
                                    value: totals.activities,
                                    sub: "All",
                                    tone: "primary",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                        path: Icon.activity
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1484,
                                        columnNumber: 117
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1484,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    label: "Customers Added",
                                    value: kpi.added,
                                    sub: "New",
                                    tone: "emerald",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                        path: Icon.plusCircle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1485,
                                        columnNumber: 108
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1485,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    label: "Imported",
                                    value: kpi.imported,
                                    sub: "Bulk",
                                    tone: "blue",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                        path: Icon.download
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1486,
                                        columnNumber: 102
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1486,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    label: "Customers Edited",
                                    value: kpi.edited,
                                    sub: "Edit",
                                    tone: "amber",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                        path: Icon.pencil
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1487,
                                        columnNumber: 109
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1487,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    label: "Customers Deleted",
                                    value: kpi.deleted,
                                    sub: "Del",
                                    tone: "red",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                        path: Icon.trash
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1488,
                                        columnNumber: 108
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1488,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    label: "Customers Assigned",
                                    value: kpi.assigned,
                                    sub: "Edit",
                                    tone: "blue",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                        path: Icon.assign
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1489,
                                        columnNumber: 112
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1489,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    label: "Follow-ups",
                                    value: kpi.followups,
                                    sub: "All",
                                    tone: "violet",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                        path: Icon.phone
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1490,
                                        columnNumber: 106
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1490,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    label: "Total Online Time",
                                    value: fmtDuration(totals.onlineSeconds),
                                    sub: `${totals.users} users`,
                                    tone: "slate",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlyphIcon, {
                                        path: Icon.clock
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1491,
                                        columnNumber: 152
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1491,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 1483,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-2 xl:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "xl:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-hidden rounded-2xl border border-[var(--color-primary-light)] bg-white shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[var(--color-primary)] px-4 py-2.5 md:px-4 md:py-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-xs md:text-sm font-bold text-slate-100",
                                                                children: "Team performance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 1502,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] md:text-[11px] text-slate-200",
                                                                children: "Click a user to open their online timeline"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 1503,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1501,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-max rounded-full border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] px-2.5 py-0.5 text-[9px] md:text-[10px] font-bold tabular-nums text-[var(--color-primary)]",
                                                        children: [
                                                            summary.length,
                                                            " users"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1505,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1500,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-x-auto hide-scrollbar",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-[640px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid gap-1.5 border-b border-[var(--color-primary-light)] bg-[var(--color-primary)] px-3 py-2 lg:px-4 lg:py-2.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-100",
                                                            style: {
                                                                gridTemplateColumns: "2.2fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.9fr 1.3fr 0.9fr"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "whitespace-nowrap",
                                                                    children: "User"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 1518,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center whitespace-nowrap",
                                                                    children: "Added"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 1519,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center whitespace-nowrap",
                                                                    children: "Imp"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 1520,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center whitespace-nowrap",
                                                                    children: "Edited"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 1521,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center whitespace-nowrap",
                                                                    children: "Deleted"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 1522,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center whitespace-nowrap",
                                                                    children: "Assign"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 1523,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center whitespace-nowrap",
                                                                    children: "F/ups"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 1524,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center whitespace-nowrap",
                                                                    children: "Total"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 1525,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right whitespace-nowrap",
                                                                    children: "Online"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 1526,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right whitespace-nowrap",
                                                                    children: "Action"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                    lineNumber: 1527,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1514,
                                                            columnNumber: 41
                                                        }, this),
                                                        loadingSummary ? Array.from({
                                                            length: 6
                                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowSkeleton, {
                                                                cols: 5
                                                            }, i, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 1531,
                                                                columnNumber: 85
                                                            }, this)) : summary.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
                                                                text: "No activity yet",
                                                                hint: "Nothing was recorded for the selected date range."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 1533,
                                                                columnNumber: 66
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                            lineNumber: 1533,
                                                            columnNumber: 45
                                                        }, this) : summary.map((r)=>{
                                                            const c = r.counts ?? {};
                                                            const f = c.followup ?? {};
                                                            const followups = (f.create ?? 0) + (f.update ?? 0) + (f.delete ?? 0);
                                                            const online = onlineIds.has(r.user.id);
                                                            const openTimeline = ()=>setDrawerId(r.user.id);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                role: "button",
                                                                tabIndex: 0,
                                                                onClick: openTimeline,
                                                                onKeyDown: (e)=>{
                                                                    if (e.key === "Enter" || e.key === " ") {
                                                                        e.preventDefault();
                                                                        openTimeline();
                                                                    }
                                                                },
                                                                style: {
                                                                    gridTemplateColumns: "2.2fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.9fr 1.3fr 0.9fr"
                                                                },
                                                                className: "grid cursor-pointer w-full items-center gap-1.5 border-b border-[var(--color-primary-light)] px-3 py-2 lg:px-4 lg:py-2.5 text-left transition-colors last:border-0 hover:bg-[var(--color-primary-lighter)]/60",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex min-w-0 items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                                                                name: r.user.name,
                                                                                online: online
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                                lineNumber: 1552,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "min-w-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "truncate text-[11px] md:text-xs font-bold text-slate-700",
                                                                                        children: r.user.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                                        lineNumber: 1554,
                                                                                        columnNumber: 65
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "truncate text-[9px] md:text-[10px] text-slate-400",
                                                                                        children: [
                                                                                            ROLE_LABEL[r.user.role] ?? r.user.role,
                                                                                            r.user.city ? ` · ${r.user.city}` : ""
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                                        lineNumber: 1555,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                                lineNumber: 1553,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                        lineNumber: 1551,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountPill, {
                                                                            value: c.customer?.create ?? 0,
                                                                            action: "create"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 1560,
                                                                            columnNumber: 94
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                        lineNumber: 1560,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountPill, {
                                                                            value: c.customer?.import ?? 0,
                                                                            action: "import"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 1561,
                                                                            columnNumber: 94
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                        lineNumber: 1561,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountPill, {
                                                                            value: c.customer?.update ?? 0,
                                                                            action: "update"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 1562,
                                                                            columnNumber: 94
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                        lineNumber: 1562,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountPill, {
                                                                            value: c.customer?.delete ?? 0,
                                                                            action: "delete"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 1563,
                                                                            columnNumber: 94
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                        lineNumber: 1563,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountPill, {
                                                                            value: c.customer?.assign ?? 0,
                                                                            action: "assign"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 1564,
                                                                            columnNumber: 94
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                        lineNumber: 1564,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountPill, {
                                                                            value: followups,
                                                                            action: "assign"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 1565,
                                                                            columnNumber: 94
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                        lineNumber: 1565,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded-full bg-[var(--color-primary-lighter)] px-2 py-0.5 text-[10px] md:text-xs font-bold tabular-nums text-[var(--color-primary)]",
                                                                            children: r.totalActivities
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 1567,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                        lineNumber: 1566,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[11px] md:text-xs font-bold tabular-nums text-slate-700",
                                                                                children: fmtDuration(r.onlineSeconds)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                                lineNumber: 1572,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[9px] md:text-[10px] text-slate-400",
                                                                                children: [
                                                                                    r.sessionCount,
                                                                                    " sessions"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                                lineNumber: 1573,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                        lineNumber: 1571,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-end",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewButton, {
                                                                            onClick: ()=>router.push(CRM_ROUTES.user(r.user.id))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                            lineNumber: 1576,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                        lineNumber: 1575,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, r.user.id, true, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 1542,
                                                                columnNumber: 53
                                                            }, this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1512,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1511,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1499,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1498,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "xl:col-span-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-primary-light)] bg-white shadow-sm mt-3 xl:mt-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between border-b border-[var(--color-primary-light)] px-4 py-2.5 ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-xs md:text-sm font-bold text-slate-800",
                                                                children: "Activity feed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 1592,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] md:text-[11px] text-slate-400",
                                                                children: [
                                                                    pagination.total,
                                                                    " records"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                                lineNumber: 1593,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1591,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] px-2.5 py-1 text-[9px] md:text-[10px] font-bold text-[var(--color-primary)]",
                                                        children: [
                                                            "Page ",
                                                            pagination.page,
                                                            "/",
                                                            pagination.totalPages || 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1595,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1590,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-h-[500px] md:max-h-[620px] flex-1 divide-y divide-[var(--color-primary-light)] overflow-y-auto",
                                                children: loadingFeed ? Array.from({
                                                    length: 8
                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowSkeleton, {
                                                        cols: 1
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1602,
                                                        columnNumber: 81
                                                    }, this)) : feed.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Empty, {
                                                        text: "No activities found",
                                                        hint: "Try widening the date range or clearing filters."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1604,
                                                        columnNumber: 62
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                                    lineNumber: 1604,
                                                    columnNumber: 41
                                                }, this) : feed.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityRow, {
                                                        a: a
                                                    }, a.id, false, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1606,
                                                        columnNumber: 57
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1600,
                                                columnNumber: 33
                                            }, this),
                                            pagination.totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2 border-t border-[var(--color-primary-light)] px-4 py-2.5 md:px-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: page <= 1,
                                                        onClick: ()=>setPage((p)=>Math.max(1, p - 1)),
                                                        className: "rounded-lg cursor-pointer border-2 border-[var(--color-primary-light)] px-2.5 py-1.5 text-[10px] md:text-[11px] font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)] disabled:opacity-40",
                                                        children: "← Prev"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1612,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] md:text-[11px] font-semibold text-slate-400",
                                                        children: [
                                                            (pagination.page - 1) * pagination.limit + 1,
                                                            "–",
                                                            Math.min(pagination.page * pagination.limit, pagination.total),
                                                            " of ",
                                                            pagination.total
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1619,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: page >= pagination.totalPages,
                                                        onClick: ()=>setPage((p)=>p + 1),
                                                        className: "rounded-lg cursor-pointer border-2 border-[var(--color-primary-light)] px-2.5 py-1.5 text-[10px] md:text-[11px] font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)] disabled:opacity-40",
                                                        children: "Next →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                                        lineNumber: 1623,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                                lineNumber: 1611,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reports/activity/page.tsx",
                                        lineNumber: 1589,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reports/activity/page.tsx",
                                    lineNumber: 1588,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 1495,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 md:mt-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TouchedRecordsPanel, {
                                params: recordParams
                            }, void 0, false, {
                                fileName: "[project]/src/app/reports/activity/page.tsx",
                                lineNumber: 1638,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/reports/activity/page.tsx",
                            lineNumber: 1637,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 1287,
                    columnNumber: 17
                }, this),
                drawerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineDrawer, {
                    adminId: drawerId,
                    params: rangeParams,
                    onlineIds: onlineIds,
                    onClose: ()=>setDrawerId(null)
                }, void 0, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 1644,
                    columnNumber: 21
                }, this),
                record && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecordDrawer, {
                    entity: record.entity,
                    id: record.id,
                    onClose: ()=>setRecord(null)
                }, void 0, false, {
                    fileName: "[project]/src/app/reports/activity/page.tsx",
                    lineNumber: 1654,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/reports/activity/page.tsx",
            lineNumber: 1219,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/reports/activity/page.tsx",
        lineNumber: 1218,
        columnNumber: 9
    }, this);
}
_s4(UserActivityPage, "yUEIEtAMLthTJ5zqgCJBzCwT8yw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c13 = UserActivityPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "GlyphIcon");
__turbopack_context__.k.register(_c1, "Avatar");
__turbopack_context__.k.register(_c2, "ActionBadge");
__turbopack_context__.k.register(_c3, "CountPill");
__turbopack_context__.k.register(_c4, "StatCard");
__turbopack_context__.k.register(_c5, "RowSkeleton");
__turbopack_context__.k.register(_c6, "Empty");
__turbopack_context__.k.register(_c7, "ActivityRow");
__turbopack_context__.k.register(_c8, "TimelineDrawer");
__turbopack_context__.k.register(_c9, "RecordDrawer");
__turbopack_context__.k.register(_c10, "ViewButton");
__turbopack_context__.k.register(_c11, "DeletedBadge");
__turbopack_context__.k.register(_c12, "TouchedRecordsPanel");
__turbopack_context__.k.register(_c13, "UserActivityPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_42fbdd03._.js.map