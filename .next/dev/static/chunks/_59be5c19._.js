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
"[project]/src/store/masters/mail/mail.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMail",
    ()=>addMail,
    "deleteMail",
    ()=>deleteMail,
    "emailAllContact",
    ()=>emailAllContact,
    "emailAllCustomer",
    ()=>emailAllCustomer,
    "emailCustomerViaAi",
    ()=>emailCustomerViaAi,
    "getFilteredMail",
    ()=>getFilteredMail,
    "getMail",
    ()=>getMail,
    "getMailById",
    ()=>getMailById,
    "updateMail",
    ()=>updateMail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-client] (ecmascript)");
;
const getMail = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.GET_ALL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        // console.log("mail data ",data)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getMailById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.GET_BY_ID(id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFilteredMail = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.GET_BY_PARAMS(params), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const addMail = async (data)=>{
    try {
        const payload = {
            ...data,
            type: 'email'
        };
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.ADD, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const updateMail = async (id, data)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.UPDATE(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const deleteMail = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.DELETE(id), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const emailAllCustomer = async (data)=>{
    try {
        console.log("emailall customer data ", data);
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.MAILALL, {
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
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const emailAllContact = async (data)=>{
    try {
        console.log("emailall customer data ", data);
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.MAILALL, {
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
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const emailCustomerViaAi = async (data)=>{
    try {
        console.log("emailall customer data ", data);
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.SEND_EMAIL_VIA_AI, {
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
        console.log(" result is zoro", result);
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
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
"[project]/src/app/component/MasterProtectedRoutes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MasterProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MasterProtectedRoute({ children }) {
    _s();
    const { admin, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MasterProtectedRoute.useEffect": ()=>{
            // Only check redirect after auth finishes loading
            if (!isLoading) {
                if (!admin || admin.role !== "administrator") {
                    router.push("/dashboard"); // Redirect if not logged in or not admin
                }
            }
        }
    }["MasterProtectedRoute.useEffect"], [
        admin,
        isLoading,
        router
    ]);
    // Show loading screen while auth is checking
    if (isLoading || !admin) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid place-items-center min-h-[calc(100vh-0px)] w-full text-gray-600",
            children: "Loading page..."
        }, void 0, false, {
            fileName: "[project]/src/app/component/MasterProtectedRoutes.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    // Render children only if admin
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(MasterProtectedRoute, "CAthe5QIDxakCx0ZvX83G12Y43M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MasterProtectedRoute;
var _c;
__turbopack_context__.k.register(_c, "MasterProtectedRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/editors/Grapeseditorclient .tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GrapesEditorClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const defaultUploadUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL ? `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL}/api/uploads/image` : "/api/uploads/image";
function GrapesEditorClient({ value, onChange, uploadUrl = defaultUploadUrl, uploadCredentials, uploadHeaders, onUploadError, minHeight = "550px" }) {
    _s();
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastEmittedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value || "");
    const initialValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value || "");
    const onUploadErrorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onUploadError);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    onUploadErrorRef.current = onUploadError;
    const rawId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/[^a-zA-Z0-9]/g, "");
    const containerId = `gjs-editor-${rawId}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GrapesEditorClient.useEffect": ()=>{
            let cancelled = false;
            let debounceTimer;
            let editor = null;
            ({
                "GrapesEditorClient.useEffect": async ()=>{
                    const [{ default: grapesjs }, { default: newsletterPlugin }] = await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/grapesjs/dist/grapes.mjs [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/grapesjs-preset-newsletter/dist/index.js [app-client] (ecmascript, async loader)")
                    ]);
                    if (cancelled) return;
                    editor = grapesjs.init({
                        container: `#${containerId}`,
                        height: minHeight,
                        width: "auto",
                        fromElement: false,
                        storageManager: false,
                        plugins: [
                            newsletterPlugin
                        ],
                        pluginsOpts: {
                            [newsletterPlugin]: {
                                modalTitleImport: "Import template",
                                modalTitleExport: "Export HTML",
                                modalLabelImport: "Paste your HTML/table code below and click Import",
                                modalLabelExport: "Copy the code below and use it wherever you need"
                            }
                        },
                        assetManager: {
                            upload: uploadUrl,
                            uploadName: "file",
                            multiUpload: false,
                            autoAdd: true,
                            ...uploadCredentials ? {
                                credentials: uploadCredentials
                            } : {},
                            ...uploadHeaders ? {
                                headers: uploadHeaders
                            } : {}
                        }
                    });
                    // Surface upload failures instead of letting them fail silently -
                    // e.g. CORS errors, 404s from a wrong uploadUrl, or backend 500s.
                    editor.on("asset:upload:error", {
                        "GrapesEditorClient.useEffect": (err)=>{
                            console.error("GrapesJS asset upload failed:", err);
                            onUploadErrorRef.current?.(err);
                        }
                    }["GrapesEditorClient.useEffect"]);
                    if (initialValueRef.current) {
                        editor.setComponents(initialValueRef.current);
                    }
                    const emitChange = {
                        "GrapesEditorClient.useEffect.emitChange": ()=>{
                            clearTimeout(debounceTimer);
                            debounceTimer = setTimeout({
                                "GrapesEditorClient.useEffect.emitChange": ()=>{
                                    if (!editor) return;
                                    // Email clients (Outlook, Yahoo, many corporate filters) strip
                                    // <style> blocks unpredictably. gjs-get-inlined-html (from the
                                    // newsletter preset) runs juice under the hood and pushes every
                                    // style directly onto its element's `style` attribute instead,
                                    // which survives across virtually all email clients.
                                    let fullHtml;
                                    if (editor.Commands.has("gjs-get-inlined-html")) {
                                        fullHtml = editor.runCommand("gjs-get-inlined-html") || "";
                                    } else {
                                        // Fallback for older plugin versions where the command isn't
                                        // registered. Still wrapped in a valid <html>/<head> skeleton
                                        // (unlike a bare `<style>...</style><body>` fragment), but you
                                        // should inline styles server-side (e.g. with the `juice` npm
                                        // package) right before sending, since this fallback path does
                                        // NOT inline CSS onto elements.
                                        console.warn("gjs-get-inlined-html command not available - falling back to " + "un-inlined HTML. Consider inlining CSS server-side (e.g. with " + "the `juice` package) before sending this as an email.");
                                        const css = editor.getCss() || "";
                                        const html = editor.getHtml() || "";
                                        fullHtml = `<!DOCTYPE html><html><head><meta charset="utf-8">${css ? `<style>${css}</style>` : ""}</head><body>${html}</body></html>`;
                                    }
                                    lastEmittedRef.current = fullHtml;
                                    onChange(fullHtml);
                                }
                            }["GrapesEditorClient.useEffect.emitChange"], 300);
                        }
                    }["GrapesEditorClient.useEffect.emitChange"];
                    // "update" covers most structural/style changes, but text edits made
                    // via the rich text editor don't always trigger it reliably across
                    // versions - so we also hook component updates and RTE session end.
                    editor.on("update", emitChange);
                    editor.on("component:update", emitChange);
                    editor.on("rte:disable", emitChange);
                    editorRef.current = editor;
                    setReady(true);
                }
            })["GrapesEditorClient.useEffect"]();
            return ({
                "GrapesEditorClient.useEffect": ()=>{
                    cancelled = true;
                    clearTimeout(debounceTimer);
                    editor?.destroy();
                    editorRef.current = null;
                }
            })["GrapesEditorClient.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["GrapesEditorClient.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GrapesEditorClient.useEffect": ()=>{
            const editor = editorRef.current;
            if (!ready || !editor) return;
            if (value !== lastEmittedRef.current) {
                editor.setComponents(value || "");
                lastEmittedRef.current = value || "";
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["GrapesEditorClient.useEffect"], [
        value,
        ready
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-gray-300 rounded-md overflow-hidden relative",
        children: [
            !ready && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center text-sm text-gray-400 bg-white z-10",
                children: "Loading editor..."
            }, void 0, false, {
                fileName: "[project]/src/app/component/editors/Grapeseditorclient .tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: containerId,
                style: {
                    minHeight
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/editors/Grapeseditorclient .tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/editors/Grapeseditorclient .tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s(GrapesEditorClient, "PJY2TnM8U2SIe9FuC91zzfaPR4w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = GrapesEditorClient;
var _c;
__turbopack_context__.k.register(_c, "GrapesEditorClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/masters/mail-templates/edit/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MailEdit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/SingleSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/mail/mail.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$BackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/buttons/BackButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$SaveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/buttons/SaveButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$MasterProtectedRoutes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/MasterProtectedRoutes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$editors$2f$Grapeseditorclient__$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/editors/Grapeseditorclient .tsx [app-client] (ecmascript)");
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
// Point this at your backend's image upload endpoint (returns { data: [url] })
const IMAGE_UPLOAD_URL = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL}/uploads/image`;
function MailEdit() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mailData, setMailData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        subject: "",
        body: "",
        status: ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // 🟩 Fetch Mail by ID
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailEdit.useEffect": ()=>{
            const fetchMail = {
                "MailEdit.useEffect.fetchMail": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMailById"])(id);
                        if (data) {
                            setMailData(data);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Mail not found");
                        }
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Error fetching mail details");
                        console.error("Fetch Mail Error:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["MailEdit.useEffect.fetchMail"];
            if (id) fetchMail();
        }
    }["MailEdit.useEffect"], [
        id
    ]);
    // 🟩 Handle Input Change
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MailEdit.useCallback[handleInputChange]": (e)=>{
            const { name, value } = e.target;
            setMailData({
                "MailEdit.useCallback[handleInputChange]": (prev)=>({
                        ...prev,
                        [name]: value
                    })
            }["MailEdit.useCallback[handleInputChange]"]);
            setErrors({
                "MailEdit.useCallback[handleInputChange]": (prev)=>({
                        ...prev,
                        [name]: ""
                    })
            }["MailEdit.useCallback[handleInputChange]"]);
        }
    }["MailEdit.useCallback[handleInputChange]"], []);
    // 🟩 Handle Dropdown
    const handleSelectChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MailEdit.useCallback[handleSelectChange]": (label, selected)=>{
            setMailData({
                "MailEdit.useCallback[handleSelectChange]": (prev)=>({
                        ...prev,
                        [label]: selected
                    })
            }["MailEdit.useCallback[handleSelectChange]"]);
            setErrors({
                "MailEdit.useCallback[handleSelectChange]": (prev)=>({
                        ...prev,
                        [label]: ""
                    })
            }["MailEdit.useCallback[handleSelectChange]"]);
        }
    }["MailEdit.useCallback[handleSelectChange]"], []);
    // 🟩 Validate Form
    const validateForm = ()=>{
        const newErrors = {};
        if (!mailData.name.trim()) newErrors.name = "Mail name is required";
        if (!mailData.subject.trim()) newErrors.subject = "Subject is required";
        if (!mailData.body.trim()) newErrors.body = "Body is required";
        if (!mailData.status.trim()) newErrors.status = "Status is required";
        return newErrors;
    };
    // 🟩 Submit Update
    const handleSubmit = async ()=>{
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMail"])(id, mailData);
            if (result) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Mail updated successfully!");
                router.push("/masters/mail-templates");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to update mail");
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to update mail");
            console.error("Update Mail Error:", error);
        }
    };
    const statusOptions = [
        "Active",
        "Inactive"
    ];
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center min-h-screen text-gray-600",
        children: "Loading mail details..."
    }, void 0, false, {
        fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
        lineNumber: 111,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$MasterProtectedRoutes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " min-h-screen flex justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                    position: "top-right"
                }, void 0, false, {
                    fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                    lineNumber: 119,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$BackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                url: "/masters/mail-templates",
                                text: "Back",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                            lineNumber: 122,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/90 backdrop-blur-lg p-10 w-full rounded-3xl shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: (e)=>e.preventDefault(),
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8 text-left border-b pb-4 border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl font-extrabold text-[var(--color-secondary-darker)] leading-tight tracking-tight",
                                            children: [
                                                "Edit ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--color-primary)]",
                                                    children: "Mail"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 22
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-6 max-lg:grid-cols-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                        label: "Mail Name",
                                                        name: "name",
                                                        value: mailData.name,
                                                        onChange: handleInputChange,
                                                        error: errors.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                        label: "Subject",
                                                        name: "subject",
                                                        value: mailData.subject,
                                                        onChange: handleInputChange,
                                                        error: errors.subject
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        options: statusOptions,
                                                        label: "Status",
                                                        value: mailData.status,
                                                        onChange: (v)=>handleSelectChange("status", v)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-gray-700 mb-2 font-medium",
                                                                children: "Body"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$editors$2f$Grapeseditorclient__$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                value: mailData.body,
                                                                uploadUrl: IMAGE_UPLOAD_URL,
                                                                onChange: (html)=>{
                                                                    setMailData((prev)=>({
                                                                            ...prev,
                                                                            body: html
                                                                        }));
                                                                    setErrors((prev)=>({
                                                                            ...prev,
                                                                            body: ""
                                                                        }));
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 21
                                                            }, this),
                                                            errors.body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 text-sm mt-1",
                                                                children: errors.body
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end mt-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$SaveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    text: "Update",
                                                    onClick: handleSubmit
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                            lineNumber: 132,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                    lineNumber: 120,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
            lineNumber: 118,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(MailEdit, "YzGBKvQ72YRc369O8DI7e/iCjTg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MailEdit;
// 🟩 Reusable Input Field
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
                fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                lineNumber: 209,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `absolute left-2 bg-white px-1 text-gray-500 text-sm transition-all duration-300
      ${value || error ? "-top-2 text-xs text-blue-500" : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500"}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                lineNumber: 218,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500 text-sm mt-1 block",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
                lineNumber: 228,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/masters/mail-templates/edit/[id]/page.tsx",
        lineNumber: 208,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = InputField;
var _c, _c1;
__turbopack_context__.k.register(_c, "MailEdit");
__turbopack_context__.k.register(_c1, "InputField");
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
]);

//# sourceMappingURL=_59be5c19._.js.map