module.exports = [
"[project]/src/app/component/SingleSelect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SingleSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function SingleSelect({ className, options, label, value, onChange, error, isSearchable = false }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Normalize value for display
    const displayValue = Array.isArray(value) ? value.join(", ") : value;
    // Close dropdown on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    // Focus search input
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open && isSearchable) {
            setSearch("");
            setTimeout(()=>searchInputRef.current?.focus(), 0);
        }
    }, [
        open,
        isSearchable
    ]);
    const handleSelect = (option)=>{
        onChange?.(option);
        setOpen(false);
    };
    // Filter options
    const displayedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!isSearchable) return options;
        return options.filter((opt)=>opt.toLowerCase().includes(search.toLowerCase()));
    }, [
        options,
        search,
        isSearchable
    ]);
    const isLabelFloating = Boolean(displayValue) || open;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `relative w-full ${className}`,
        style: {
            minWidth: "170px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: `absolute left-3 transition-all duration-200 px-1 bg-white max-sm:dark:bg-[var(--color-childbgdark)] max-sm:dark:text-gray-400 pointer-events-none
        ${isLabelFloating ? "-top-2 text-xs text-[var(--color-primary)]" : "top-3 text-gray-500 text-sm"}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/component/SingleSelect.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setOpen(!open),
                className: `w-full border rounded-md px-3 py-2 cursor-pointer bg-white max-sm:dark:bg-[var(--color-childbgdark)] max-sm:dark:text-white flex justify-between items-center
        ${error ? "border-red-500" : "border-gray-400 max-sm:dark:border-gray-700"} transition-colors`,
                style: {
                    minHeight: "3rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${displayValue ? "text-gray-900 max-sm:dark:text-gray-300" : "text-gray-400"} truncate`,
                        children: displayValue || ""
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/SingleSelect.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-4 h-4 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: `absolute left-0 top-full w-full bg-white max-sm:dark:bg-[var(--color-childbgdark)] max-sm:dark:text-white shadow-lg border border-gray-300 max-sm:dark:border-gray-800 rounded-md max-h-56 overflow-auto mt-1
        transition-all duration-200 transform origin-top z-50
        ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`,
                children: [
                    isSearchable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "sticky top-0 bg-white max-sm:dark:bg-[var(--color-childbgdark)] p-2 border-b z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    displayedOptions.length > 0 ? displayedOptions.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>handleSelect(opt),
                            className: "px-3 py-2 hover:bg-gray-100 cursor-pointer truncate",
                            children: opt
                        }, idx, false, {
                            fileName: "[project]/src/app/component/SingleSelect.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/app/component/popups/PopupMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const PopupMenu = ({ children, onClose, isOpen = true })=>{
    const handleBackdropClick = (e)=>{
        if (e.target === e.currentTarget) {
            onClose?.();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const html = document.documentElement;
        const body = document.body;
        if (isOpen) {
            html.style.overflow = 'hidden';
            body.style.overflow = 'hidden';
        } else {
            html.style.overflow = '';
            body.style.overflow = '';
        }
        return ()=>{
            html.style.overflow = '';
            body.style.overflow = '';
        };
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            onClick: handleBackdropClick,
            className: "fixed z-50 top-0 left-0  backdrop-blur-[0.5px] w-screen grid place-items-center bg-gray-300/50",
            style: {
                height: '100dvh'
            },
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                onClick: handleBackdropClick,
                className: "w-full h-full overflow-auto flex justify-center items-center ",
                initial: {
                    y: -50,
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    y: 0,
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    y: 50,
                    opacity: 0,
                    scale: 0.9
                },
                transition: {
                    duration: .4
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/component/popups/PopupMenu.tsx",
                lineNumber: 49,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/component/popups/PopupMenu.tsx",
            lineNumber: 41,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/popups/PopupMenu.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PopupMenu;
}),
"[project]/src/app/component/popups/DeleteDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$PopupMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/popups/PopupMenu.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const DeleteDialog = ({ isOpen, title = 'Are you sure you want to delete this item?', description, data, onClose, onDelete, fieldLabels, confirmLabel = "Yes, delete" })=>{
    if (!isOpen || !data) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$PopupMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        onClose: onClose,
        isOpen: isOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col border border-gray-300/30 bg-gray-100 text-[var(--color-secondary-darker)] rounded-xl shadow-lg p-6 max-w-[800px] gap-8 m-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-bold text-lg text-[var(--color-secondary-darker)]",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-sm",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
                    lineNumber: 40,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: Object.entries(data).filter(([key])=>key !== 'id').filter(([key])=>key !== "isFavourite").map(([key, value])=>{
                        const label = fieldLabels && fieldLabels[key] ? fieldLabels[key] : key.replace(/([A-Z])/g, ' $1').replace(/^./, (s)=>s.toUpperCase());
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: [
                                        label,
                                        ":"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-700 text-sm",
                                    children: typeof value === 'object' ? JSON.stringify(value) : String(value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, key, true, {
                            fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
                            lineNumber: 50,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-[#C62828] bg-[#FDECEA] hover:bg-[#F9D0C4] cursor-pointer rounded-md px-4 py-2",
                            onClick: ()=>onDelete(data),
                            children: confirmLabel
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "cursor-pointer text-blue-800 hover:bg-gray-200 rounded-md px-4 py-2",
                            onClick: onClose,
                            children: "No"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DeleteDialog;
}),
"[project]/src/store/customerFollowups.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAiFollowup",
    ()=>addAiFollowup,
    "addCustomerFollowup",
    ()=>addCustomerFollowup,
    "deleteCustomerFollowup",
    ()=>deleteCustomerFollowup,
    "deleteFollowup",
    ()=>deleteFollowup,
    "getAllCustomerFollowups",
    ()=>getAllCustomerFollowups,
    "getFilteredFollowups",
    ()=>getFilteredFollowups,
    "getFollowupByCustomerId",
    ()=>getFollowupByCustomerId,
    "getFollowupByFollowupId",
    ()=>getFollowupByFollowupId,
    "updateCustomerFollowup",
    ()=>updateCustomerFollowup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-ssr] (ecmascript)");
;
const getAllCustomerFollowups = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].FOLLOWUPS.CUSTOMER.GET_ALL, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        //console.log(" follwoups ", data)
        return data.data;
    } catch (error) {
        console.log("SERVER ERROR (getAllCustomerFollowups):", error);
        return null;
    }
};
const getFollowupByCustomerId = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].FOLLOWUPS.CUSTOMER.GET_CUSTOMER_FOLLOWUP(id), {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        //console.log("naruto ",data)
        return data.data;
    } catch (error) {
        console.log("SERVER ERROR (getFollowupByCustomerId):", error);
        return null;
    }
};
const getFollowupByFollowupId = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].FOLLOWUPS.CUSTOMER.GET_FOLLOWUP_By_ID(id), {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log("naruto ", data.data);
        return data.data;
    } catch (error) {
        console.log("SERVER ERROR (getFollowupByCustomerId):", error);
        return null;
    }
};
const getFilteredFollowups = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].FOLLOWUPS.CUSTOMER.GET_BY_PARAMS(params), {
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
        console.log("SERVER ERROR (getFilteredFollowups):", error);
        return null;
    }
};
const addCustomerFollowup = async (id, data)=>{
    try {
        //console.log("customer followup data ",data)
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].FOLLOWUPS.CUSTOMER.ADD(id), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("SERVER ERROR (addCustomerFollowup):", error);
        return null;
    }
};
const updateCustomerFollowup = async (id, data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].FOLLOWUPS.CUSTOMER.UPDATE(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("SERVER ERROR (updateCustomerFollowup):", error);
        return null;
    }
};
const deleteCustomerFollowup = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].FOLLOWUPS.CUSTOMER.CUSTOMER_FOLLOWUP_DELETE(id), {
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
        console.log("SERVER ERROR (deleteCustomerFollowup):", error);
        return null;
    }
};
const deleteFollowup = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].FOLLOWUPS.CUSTOMER.FOLLOWUP_DELETE(id), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log("delete followup data ", data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR (deleteFollowup):", error);
        return null;
    }
};
const addAiFollowup = async (data)=>{
    try {
        //console.log("customer followup data ",data)
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].FOLLOWUPS.CUSTOMER.ADDAIFOLLOWUP, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("SERVER ERROR (addCustomerFollowup):", error);
        return null;
    }
};
}),
"[project]/src/app/utils/handleFieldOptions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /app/utils/handleFieldOptions.ts
__turbopack_context__.s([
    "handleFieldOptions",
    ()=>handleFieldOptions
]);
const handleFieldOptions = async (configs, setFieldOptions)=>{
    try {
        // Fetch all data concurrently for better performance
        const results = await Promise.all(configs.map(async (config)=>{
            try {
                let data = [];
                // 1️⃣ Fetch dynamic data
                if (config.fetchFn) {
                    const res = await config.fetchFn();
                    if (res.admins) {
                        console.log(" naruto is : ", res.admins);
                        data = (res.admins || []).filter((item)=>item?.role === "user").filter((item)=>item?.status === "active").map(config.mapFn || ((item)=>item?.name)).filter(Boolean);
                    } else {
                        data = (res || []).filter((item)=>item?.Status === "Active").map(config.mapFn || ((item)=>item?.Name)).filter(Boolean);
                    }
                }
                // 2️⃣ Handle static data
                if (config.staticData) {
                    data = config.staticData;
                }
                return {
                    key: config.key,
                    data
                };
            } catch (err) {
                console.error(`Error fetching ${config.key}:`, err);
                return {
                    key: config.key,
                    data: []
                };
            }
        }));
        // 3️⃣ Build final object structure
        const merged = {};
        for (const { key, data } of results){
            merged[key] = data;
        }
        // 4️⃣ Update state (merging with existing options)
        setFieldOptions((prev)=>({
                ...prev,
                ...merged
            }));
    } catch (error) {
        console.error("Error in handleFieldOptions:", error);
    }
};
}),
"[project]/src/store/masters/campaign/campaign.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCampaign",
    ()=>addCampaign,
    "deleteCampaign",
    ()=>deleteCampaign,
    "getCampaign",
    ()=>getCampaign,
    "getCampaignById",
    ()=>getCampaignById,
    "getFilteredCampaign",
    ()=>getFilteredCampaign,
    "updateCampaign",
    ()=>updateCampaign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-ssr] (ecmascript)");
;
const getCampaign = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CAMPAIGN.GET_ALL, {
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
const getCampaignById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CAMPAIGN.GET_BY_ID(id), {
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
const getFilteredCampaign = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CAMPAIGN.GET_BY_PARAMS(params), {
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
const addCampaign = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CAMPAIGN.ADD, {
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
const updateCampaign = async (id, data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CAMPAIGN.UPDATE(id), {
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
const deleteCampaign = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CAMPAIGN.DELETE(id), {
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
}),
"[project]/src/store/masters/city/city.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCity",
    ()=>addCity,
    "deleteCity",
    ()=>deleteCity,
    "getCity",
    ()=>getCity,
    "getCityById",
    ()=>getCityById,
    "getFilteredCity",
    ()=>getFilteredCity,
    "updateCity",
    ()=>updateCity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-ssr] (ecmascript)");
;
const getCity = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CITY.GET_ALL, {
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
        console.log("SERVER ERROR:", error);
        return null;
    }
};
const getCityById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CITY.GET_BY_ID(id), {
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
        console.log("SERVER ERROR:", error);
        return null;
    }
};
const getFilteredCity = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CITY.GET_BY_PARAMS(params), {
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
        console.log("SERVER ERROR:", error);
        return null;
    }
};
const addCity = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CITY.ADD, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log("SERVER ERROR:", error);
        return null;
    }
};
const updateCity = async (id, data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CITY.UPDATE(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log("SERVER ERROR:", error);
        return null;
    }
};
const deleteCity = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CITY.DELETE(id), {
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
        console.log("SERVER ERROR:", error);
        return null;
    }
};
}),
"[project]/src/store/masters/location/location.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLocation",
    ()=>addLocation,
    "deleteAllLocation",
    ()=>deleteAllLocation,
    "deleteLocation",
    ()=>deleteLocation,
    "getFilteredLocation",
    ()=>getFilteredLocation,
    "getLocation",
    ()=>getLocation,
    "getLocationByCity",
    ()=>getLocationByCity,
    "getLocationById",
    ()=>getLocationById,
    "updateLocation",
    ()=>updateLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-ssr] (ecmascript)");
;
const getLocation = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.LOCATION.GET_ALL, {
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
const getLocationById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.LOCATION.GET_BY_ID(id), {
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
const getLocationByCity = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.LOCATION.GET_ALL_BY_CITY(id), {
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
const getFilteredLocation = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.LOCATION.GET_BY_PARAMS(params), {
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
const addLocation = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.LOCATION.ADD, {
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
const updateLocation = async (id, data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.LOCATION.UPDATE(id), {
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
const deleteLocation = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.LOCATION.DELETE(id), {
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
const deleteAllLocation = async (payload)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.LOCATION.DELETEALL, {
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
}),
"[project]/src/app/component/labels/PageHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function PageHeader({ title, subtitles = [] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center mb-6 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl p-2 font-semibold text-[var(--color-secondary-darker)] tracking-wide",
            children: [
                title,
                " ",
                subtitles.map((sub, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--color-primary)] font-light  text-sm",
                        children: [
                            " / ",
                            sub
                        ]
                    }, sub + index, true, {
                        fileName: "[project]/src/app/component/labels/PageHeader.tsx",
                        lineNumber: 11,
                        columnNumber: 52
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/labels/PageHeader.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/component/labels/PageHeader.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/store/masters/types/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTypes",
    ()=>addTypes,
    "deleteAllTypes",
    ()=>deleteAllTypes,
    "deleteTypes",
    ()=>deleteTypes,
    "getFilteredTypes",
    ()=>getFilteredTypes,
    "getTypes",
    ()=>getTypes,
    "getTypesByCampaign",
    ()=>getTypesByCampaign,
    "getTypesById",
    ()=>getTypesById,
    "updateTypes",
    ()=>updateTypes
]);
// note do not use any
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-ssr] (ecmascript)");
;
const getTypes = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.TYPES.GET_ALL, {
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
const getTypesById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.TYPES.GET_BY_ID(id), {
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
const getTypesByCampaign = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.TYPES.GET_ALL_BY_CAMPAIGN(id), {
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
const getFilteredTypes = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.TYPES.GET_BY_PARAMS(params), {
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
const addTypes = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.TYPES.ADD, {
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
const updateTypes = async (id, data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.TYPES.UPDATE(id), {
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
const deleteTypes = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.TYPES.DELETE(id), {
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
const deleteAllTypes = async (payload)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.TYPES.DELETEALL, {
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
}),
"[project]/src/store/masters/statustype/statustype.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addStatusType",
    ()=>addStatusType,
    "deleteStatusType",
    ()=>deleteStatusType,
    "getFilteredStatusType",
    ()=>getFilteredStatusType,
    "getStatusType",
    ()=>getStatusType,
    "getStatusTypeById",
    ()=>getStatusTypeById,
    "updateStatusType",
    ()=>updateStatusType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-ssr] (ecmascript)");
;
const getStatusType = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.STATUSTYPE.GET_ALL, {
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
const getStatusTypeById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.STATUSTYPE.GET_BY_ID(id), {
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
const getFilteredStatusType = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.STATUSTYPE.GET_BY_PARAMS(params), {
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
const addStatusType = async (data)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.STATUSTYPE.ADD, {
            method: "POST",
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
const updateStatusType = async (id, data)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.STATUSTYPE.UPDATE(id), {
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
const deleteStatusType = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.STATUSTYPE.DELETE(id), {
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
}),
"[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FollowupTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gr/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function FollowupTable({ leads, labelLeads, onFollowup, onAdd, onEdit, onDelete }) {
    const [toggleSearchDropdown, setToggleSearchDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsperpage = 10;
    const totalPages = Math.ceil(leads.length / itemsperpage);
    const startIndex = (currentPage - 1) * itemsperpage;
    const paginatedLeads = leads.slice(startIndex, startIndex + itemsperpage);
    const nextPage = ()=>{
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = ()=>{
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    const getDisplayedPages = ()=>{
        if (totalPages <= 3) return Array.from({
            length: totalPages
        }, (_, i)=>i + 1);
        if (currentPage === 1) return [
            1,
            2,
            3
        ];
        if (currentPage === totalPages) return [
            totalPages - 2,
            totalPages - 1,
            totalPages
        ];
        return [
            currentPage - 1,
            currentPage,
            currentPage + 1
        ];
    };
    const pages = getDisplayedPages();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-0 pb-4",
            children: [
                paginatedLeads.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex justify-center items-center py-10 text-lg text-gray-500",
                    children: "No followup available"
                }, void 0, false, {
                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                    lineNumber: 69,
                    columnNumber: 21
                }, this),
                paginatedLeads.filter((item, index, arr)=>arr.findIndex((row)=>row.customerid === item.customerid) === index //keeps only first occurrence
                ).map((lead, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full  bg-white dark:bg-[var(--color-childbgdark)] dark:border-none shadow-md rounded-xl overflow-hidden border border-gray-200 mb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--color-primary)] h-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                lineNumber: 79,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: labelLeads.map((item, j, arr)=>{
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2 grid grid-cols-[1fr_auto_2fr] items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-black dark:text-[var(--color-primary-light)]",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500",
                                                        children: "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700 dark:text-[var(--color-primary-lighter)] break-words",
                                                        children: String(lead[item.key])
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, j, true, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                                lineNumber: 86,
                                                columnNumber: 44
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onAdd?.(lead.customerid),
                                        className: "p-2 bg-gray-100 dark:bg-[var(--color-primary)] dark:text-white rounded-full shadow text-[var(--color-primary)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdAdd"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                            lineNumber: 108,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                        lineNumber: 104,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                lineNumber: 81,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--color-primary)] p-3 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onFollowup?.(lead),
                                        className: "text-white border border-white px-3 text-sm rounded-full",
                                        children: "FOLLOW UP"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    backgroundColor: "var(--color-primary)",
                                                    color: "white",
                                                    minWidth: "32px",
                                                    height: "32px",
                                                    borderRadius: "8px"
                                                },
                                                onClick: ()=>onEdit?.(lead.customerid),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdEdit"], {
                                                    size: 25
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                                lineNumber: 130,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    backgroundColor: "var(--color-primary)",
                                                    color: "white",
                                                    minWidth: "32px",
                                                    height: "32px",
                                                    borderRadius: "8px"
                                                },
                                                onClick: ()=>onDelete?.(lead),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdDelete"], {
                                                    size: 25
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 34
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                                lineNumber: 144,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                        lineNumber: 121,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                lineNumber: 114,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                        lineNumber: 78,
                        columnNumber: 28
                    }, this);
                }),
                paginatedLeads.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 p-2  rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage(1),
                                className: " h-[30px] w-[30px] bg-white rounded-full text-sm grid place-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineBackward"], {}, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                        lineNumber: 166,
                                        columnNumber: 156
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                lineNumber: 166,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: prevPage,
                                disabled: currentPage === 1,
                                className: `h-[30px] w-[30px] bg-white rounded-full text-sm grid place-items-center ${currentPage === 1 ? "bg-gray-200 opacity-50 cursor-not-allowed" : "bg-white "}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrFormPrevious"], {}, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                    lineNumber: 169,
                                    columnNumber: 200
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                lineNumber: 167,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "popLayout",
                                children: pages.map((num, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>setCurrentPage(num),
                                        className: `h-[30px] w-[30px]  rounded-full text-sm grid place-items-center  ${num === currentPage ? " bg-[var(--color-primary)] text-white w-[35px] h-[35px]" : "bg-white text-black w-[30px] h-[30px]"}`,
                                        children: num
                                    }, i, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                        lineNumber: 172,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                lineNumber: 170,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: nextPage,
                                disabled: currentPage === totalPages,
                                className: `h-[30px] w-[30px] bg-white rounded-full text-sm grid place-items-center ${currentPage === totalPages ? "bg-gray-200 opacity-50 cursor-not-allowed" : "bg-white "}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrFormNext"], {}, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                        lineNumber: 185,
                                        columnNumber: 209
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                lineNumber: 182,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage(totalPages),
                                className: " h-[30px] w-[30px] bg-white rounded-full text-sm grid place-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineForward"], {}, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                        lineNumber: 186,
                                        columnNumber: 165
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                                lineNumber: 186,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                        lineNumber: 165,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
                    lineNumber: 164,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx",
            lineNumber: 67,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}),
"[project]/src/app/component/buttons/AddButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
function AddButton({ url, text, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: url,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex items-center float-right gap-2 bg-gradient-to-r cursor-pointer    from-[var(--color-primary-dark)] to-[var(--color-secondary)]    hover:from-[var(--color-primary-darker)] hover:to-[var(--color-secondary-dark)]    text-white px-4 py-2 rounded-md font-semibold",
            children: [
                icon,
                text
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/buttons/AddButton.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/component/buttons/AddButton.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$AddButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/buttons/AddButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-plus.js [app-ssr] (ecmascript) <export default as PlusSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const DynamicAdvance = ({ children, addUrl = "/customer/add" })=>{
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setOpen(!open),
                        className: "bg-[var(--color-primary)] px-3 py-1.5 w-fit rounded-2xl my-4 mb-2 ml-0 flex items-center gap-2 cursor-pointer select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-white text-xs font-semibold",
                                children: "ADVANCED SEARCH"
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "p-2 text-white hover:bg-gray-200 rounded-md",
                                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosArrowUp"], {}, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                                    lineNumber: 34,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosArrowDown"], {}, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                                    lineNumber: 34,
                                    columnNumber: 40
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$AddButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        url: addUrl,
                        text: "Add",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusSquare$3e$__["PlusSquare"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                            lineNumber: 40,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-center items-center gap-4 p-4 mb-4 bg-white dark:bg-[var(--color-childbgdark)] border rounded-xl shadow-md",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DynamicAdvance;
}),
"[project]/src/app/utils/handleFieldOptionsObject.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /app/utils/handleFieldOptionsObject.ts
__turbopack_context__.s([
    "handleFieldOptionsObject",
    ()=>handleFieldOptionsObject
]);
const handleFieldOptionsObject = async (configs, setFieldOptions)=>{
    try {
        const results = await Promise.all(configs.map(async (config)=>{
            try {
                let data = [];
                // 1️⃣ Fetch dynamic data
                if (config.fetchFn) {
                    const res = await config.fetchFn();
                    if (res.admins) {
                        // Admins type
                        data = (res.admins || []).filter((item)=>item?.role === "user" || item?.role === "city_admin").filter((item)=>item?.status === "active").map(config.mapFn || ((item)=>item)) // ✅ keep object
                        .filter(Boolean);
                    } else {
                        // Normal campaigns or other data
                        data = (res || []).filter((item)=>item?.Status === "Active").map(config.mapFn || ((item)=>item)) // ✅ keep object
                        .filter(Boolean);
                    }
                }
                // 2️⃣ Handle static data (if provided)
                if (config.staticData) {
                    data = config.staticData;
                }
                return {
                    key: config.key,
                    data
                };
            } catch (err) {
                console.error(`Error fetching ${config.key}:`, err);
                return {
                    key: config.key,
                    data: []
                };
            }
        }));
        // 3️⃣ Merge results
        const merged = {};
        for (const { key, data } of results){
            merged[key] = data;
        }
        // 4️⃣ Update state
        setFieldOptions((prev)=>({
                ...prev,
                ...merged
            }));
    } catch (error) {
        console.error("Error in handleFieldOptionsObject:", error);
    }
};
}),
"[project]/src/app/component/ObjectSelect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ObjectSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function ObjectSelect({ options, label, value, onChange, error, getLabel, getId, isSearchable = false }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close dropdown on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    // Focus search input when dropdown opens (only if searchable)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open && isSearchable) {
            setSearch("");
            setTimeout(()=>searchInputRef.current?.focus(), 0);
        }
    }, [
        open,
        isSearchable
    ]);
    const handleSelect = (id)=>{
        onChange?.(id);
        setOpen(false);
    };
    // Find selected item
    const selectedItem = options.find((item)=>getId(item) === value || getLabel(item) === value);
    const selectedLabel = selectedItem ? getLabel(selectedItem) : "";
    // Filter options only when searchable
    const displayedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!isSearchable) return options;
        return options.filter((item)=>getLabel(item).toLowerCase().includes(search.toLowerCase()));
    }, [
        options,
        search,
        isSearchable,
        getLabel
    ]);
    const isLabelFloating = Boolean(value) || open;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full",
        style: {
            minWidth: "170px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: `absolute left-3 transition-all duration-200 px-1 bg-white max-sm:dark:bg-[var(--color-childbgdark)] max-sm:dark:text-gray-400  pointer-events-none
          ${isLabelFloating ? "-top-2 text-xs text-[var(--color-primary)]" : "top-3 text-gray-500 text-sm"}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/component/ObjectSelect.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setOpen(!open),
                className: `w-full border rounded-md px-3 py-2 cursor-pointer bg-white max-sm:dark:bg-[var(--color-childbgdark)] flex justify-between items-center
          ${error ? "border-red-500" : "border-gray-400 max-sm:dark:border-gray-700"} transition-colors`,
                style: {
                    minHeight: "3rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${selectedLabel ? "text-gray-900 max-sm:dark:text-gray-300" : "text-gray-400"} truncate`,
                        children: selectedLabel || ""
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/ObjectSelect.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-4 h-4 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/ObjectSelect.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/ObjectSelect.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/ObjectSelect.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: `absolute left-0 top-full w-full bg-white max-sm:dark:bg-[var(--color-childbgdark)] max-sm:dark:text-white shadow-lg border border-gray-300 max-sm:dark:border-gray-800 rounded-md max-h-56 overflow-auto mt-1
          transition-all duration-200 transform origin-top z-50
          ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`,
                children: [
                    isSearchable && displayedOptions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "sticky top-0 bg-white max-sm:dark:bg-[var(--color-childbgdark)] p-2 border-b z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: searchInputRef,
                            type: "text",
                            placeholder: "Search...",
                            value: search,
                            onChange: (e)=>setSearch(e.target.value),
                            className: "w-full px-2 py-1 border rounded-md text-sm outline-none focus:border-[var(--color-primary)]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/ObjectSelect.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/ObjectSelect.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    displayedOptions.length > 0 ? displayedOptions.map((item, idx)=>{
                        const id = getId(item);
                        const labelText = getLabel(item);
                        const isSelected = id === value || labelText === value;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>handleSelect(id),
                            className: `px-3 py-2 hover:bg-gray-100 cursor-pointer truncate
                  ${isSelected ? "bg-gray-100 font-semibold" : ""}`,
                            children: labelText
                        }, id || idx, false, {
                            fileName: "[project]/src/app/component/ObjectSelect.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this);
                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "px-3 py-2 text-gray-500 text-sm",
                        children: isSearchable ? "No matching results" : "No options available"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/ObjectSelect.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/ObjectSelect.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm mt-1",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/component/ObjectSelect.tsx",
                lineNumber: 169,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/ObjectSelect.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/store/masters/sublocation/sublocation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addsubLocation",
    ()=>addsubLocation,
    "deleteallsubLocation",
    ()=>deleteallsubLocation,
    "deletesubLocation",
    ()=>deletesubLocation,
    "getFilteredsubLocation",
    ()=>getFilteredsubLocation,
    "getsubLocation",
    ()=>getsubLocation,
    "getsubLocationByCityLoc",
    ()=>getsubLocationByCityLoc,
    "getsubLocationById",
    ()=>getsubLocationById,
    "updatesubLocation",
    ()=>updatesubLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-ssr] (ecmascript)");
;
const getsubLocation = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBLOCATION.GET_ALL, {
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
const getsubLocationById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBLOCATION.GET_BY_ID(id), {
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
const getsubLocationByCityLoc = async (cityId, locationId)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBLOCATION.GET_ALL_BY_CITY_LOCATION(cityId, locationId), {
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
const getFilteredsubLocation = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBLOCATION.GET_BY_PARAMS(params), {
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
const addsubLocation = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBLOCATION.ADD, {
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
const updatesubLocation = async (id, data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBLOCATION.UPDATE(id), {
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
const deletesubLocation = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBLOCATION.DELETE(id), {
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
const deleteallsubLocation = async (payload)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBLOCATION.DELETEALL, {
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
}),
"[project]/src/app/followups/customer/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomerFollowups
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/SingleSelect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ProtectedRoutes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/ProtectedRoutes.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$PopupMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/popups/PopupMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$DeleteDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/popups/DeleteDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customerFollowups$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/customerFollowups.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handleFieldOptions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/handleFieldOptions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$campaign$2f$campaign$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/campaign/campaign.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$city$2f$city$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/city/city.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$location$2f$location$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/location/location.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$labels$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/labels/PageHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/types/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$statustype$2f$statustype$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/statustype/statustype.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$phonescreens$2f$DashboardScreens$2f$tables$2f$FollowupTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/phonescreens/DashboardScreens/tables/FollowupTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$phonescreens$2f$DashboardScreens$2f$DynamicAdvance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handleFieldOptionsObject$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/handleFieldOptionsObject.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ObjectSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/ObjectSelect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$sublocation$2f$sublocation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/sublocation/sublocation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-ssr] (ecmascript)");
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
;
;
;
;
function CustomerFollowups() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [toggleSearchDropdown, setToggleSearchDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTablePage, setCurrentTablePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [followupData, setFollowupData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [followupAdv, setFollowupAdv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteDialogData, setDeleteDialogData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isFollowupDeleteDialogOpen, setIsFollowupDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [followupdeleteDialogData, setFollowupDeleteDialogData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isfollowupDialogOpen, setIsFollowupDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [followupDialogData, setFollowupDialogData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fieldOptions, setFieldOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [rowsPerTablePage, setRowsPerTablePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        Campaign: [],
        PropertyType: [],
        StatusType: [],
        City: [],
        Location: [],
        SubLocation: [],
        User: [],
        Keyword: "",
        StartDate: "",
        EndDate: "",
        Limit: [
            "10"
        ]
    });
    const [dependent, setDependent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        Campaign: {
            id: "",
            name: ""
        },
        PropertyType: {
            id: "",
            name: ""
        },
        City: {
            id: "",
            name: ""
        },
        Location: {
            id: "",
            name: ""
        },
        SubLocation: {
            id: "",
            name: ""
        }
    });
    // 🔹 Fetch All Followups
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        getFollowups();
        fetchFields();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const status = searchParams.get("StatusType");
        if (status) {
            // Auto set filter
            setFilters((prev)=>({
                    ...prev,
                    StatusAssign: [
                        status
                    ]
                }));
            // Fetch filtered data
            handleSelectChange("StatusType", status);
        }
    }, [
        searchParams,
        followupData
    ]);
    const getFollowups = async ()=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customerFollowups$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllCustomerFollowups"])();
        console.log(" data of luffy , ", data, " length ", data?.length);
        if (data) {
            const filteredData = data.filter((item, index, arr)=>{
                if (!item.customer?._id) return false;
                return arr.findIndex((t)=>t.customer?._id === item.customer?._id) === index;
            });
            setFollowupData(filteredData.map((item)=>{
                const date = new Date(item.updatedAt);
                const formattedDate = date.getDate().toString().padStart(2, "0") + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getFullYear();
                return {
                    _id: item._id,
                    customerid: item.customer._id,
                    Name: item.customer.customerName,
                    ContactNumber: item.customer.ContactNumber,
                    User: item.customer.AssignTo?.name ?? "",
                    Date: formattedDate
                };
            }));
            setFollowupAdv(data.map((item)=>({
                    _id: [
                        item._id
                    ],
                    Campaign: item.Campaign || [],
                    PropertyType: item.CustomerType || [],
                    StatusType: item.StatusType || [],
                    City: item.City || [],
                    Location: item.Location || [],
                    User: item.User || [],
                    Keyword: "",
                    StartDate: "",
                    EndDate: "",
                    Limit: []
                })));
        }
    };
    // 🔹 Delete Followup
    const handleDelete = async (data)=>{
        if (!data) return;
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customerFollowups$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteCustomerFollowup"])(data.id);
        if (response && response.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success("Followup deleted successfully");
            setIsDeleteDialogOpen(false);
            setDeleteDialogData(null);
            getFollowups();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("Failed to delete followup");
        }
    };
    // 🔹 Edit + Add
    const editFollowup = (id)=>router.push(`/customer/edit/${id}`);
    const addFollowup = (id)=>router.push(`/followups/customer/add/${id}`);
    // 🔹 Pagination
    const totalTablePages = Math.ceil(followupData.length / rowsPerTablePage);
    const indexOfLastRow = currentTablePage * rowsPerTablePage;
    const indexOfFirstRow = indexOfLastRow - rowsPerTablePage;
    const currentRows = followupData?.slice(indexOfFirstRow, indexOfLastRow);
    const nexttablePage = ()=>{
        if (currentTablePage !== totalTablePages) setCurrentTablePage(currentTablePage + 1);
    };
    const prevtablePage = ()=>{
        if (currentTablePage !== 1) setCurrentTablePage(currentTablePage - 1);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const safeLimit = Number(filters.Limit?.[0]);
        setRowsPerTablePage(safeLimit);
        setCurrentTablePage(1);
    }, [
        filters.Limit
    ]);
    // 🔹 Filters
    const handleSelectChange = async (field, selected, filtersOverride)=>{
        const updatedFilters = filtersOverride || {
            ...filters,
            [field]: Array.isArray(selected) ? selected : selected ? [
                selected
            ] : []
        };
        setFilters(updatedFilters);
        const queryParams = new URLSearchParams();
        Object.entries(updatedFilters).forEach(([key, value])=>{
            if (key === "Limit") return;
            if (Array.isArray(value) && value.length > 0) value.forEach((v)=>queryParams.append(key, v));
            else if (typeof value === "string" && value) queryParams.append(key, value);
        });
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customerFollowups$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFilteredFollowups"])(queryParams.toString());
        console.log("filtered followups ", data);
        if (data) {
            const filteredData = data.filter((item, index, arr)=>{
                if (!item.customer?._id) return false;
                return arr.findIndex((t)=>t.customer?._id === item.customer?._id) === index;
            });
            setFollowupData(filteredData.map((item)=>{
                const date = new Date(item.updatedAt);
                const formattedDate = date.getDate().toString().padStart(2, "0") + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getFullYear();
                return {
                    _id: item._id,
                    customerid: item.customer._id,
                    Name: item.customer.customerName,
                    ContactNumber: item.customer.ContactNumber,
                    User: item.customer.AssignTo?.name ?? "",
                    Date: formattedDate
                };
            }));
        }
    };
    const clearFilter = async ()=>{
        setFilters({
            Campaign: [],
            PropertyType: [],
            StatusType: [],
            City: [],
            Location: [],
            SubLocation: [],
            User: [],
            Keyword: "",
            StartDate: "",
            EndDate: "",
            Limit: [
                "10"
            ]
        });
        setDependent({
            Campaign: {
                id: "",
                name: ""
            },
            PropertyType: {
                id: "",
                name: ""
            },
            City: {
                id: "",
                name: ""
            },
            Location: {
                id: "",
                name: ""
            },
            SubLocation: {
                id: "",
                name: ""
            }
        });
        await getFollowups();
    };
    const handleFollowups = async (id)=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customerFollowups$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFollowupByCustomerId"])(id);
        if (data) {
            console.log("Followups customer data", data);
            setFollowupDialogData(data.map((item)=>({
                    _id: item._id,
                    customer: item.customer._id,
                    StartDate: item.StartDate,
                    StatusType: item.StatusType,
                    FollowupNextDate: item.FollowupNextDate,
                    Description: item.Description
                })));
            return;
        }
    };
    const editThisFollowup = async (id)=>{
        router.push(`/followups/customer/edit/${id}`);
    };
    const deleteThisFollowup = async (data)=>{
        //alert(id)
        if (!data) return;
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customerFollowups$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteFollowup"])(data.id);
        if (response && response.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success("Followup deleted successfully");
            setIsFollowupDialogOpen(false);
            setIsFollowupDeleteDialogOpen(true);
            setFollowupDeleteDialogData(null);
            getFollowups();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("Failed to delete followup");
        }
    };
    const getCustomerName = (id)=>{
        const data = followupData.find((item)=>item.customerid === id);
        // console.log("Customer Name Data", data)
        return data ? data.Name : "";
    };
    const fetchFields = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handleFieldOptions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleFieldOptions"])([], setFieldOptions);
    };
    // Object-based fields (for ObjectSelect)
    const objectFields = [
        {
            key: "Campaign",
            fetchFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$campaign$2f$campaign$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCampaign"]
        },
        {
            key: "PropertyTypes",
            fetchFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTypes"]
        },
        {
            key: "City",
            fetchFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$city$2f$city$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCity"]
        },
        {
            key: "Location",
            staticData: []
        },
        {
            key: "SubLocation",
            staticData: []
        }
    ];
    // Simple array fields (for normal Select)
    const arrayFields = [
        {
            key: "StatusTypes",
            fetchFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$statustype$2f$statustype$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStatusType"]
        },
        {
            key: "StatusAssign",
            staticData: [
                "Assigned",
                "Unassigned"
            ]
        },
        {
            key: "User",
            fetchFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllAdmins"]
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadFieldOptions = async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handleFieldOptionsObject$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleFieldOptionsObject"])(objectFields, setFieldOptions);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handleFieldOptions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleFieldOptions"])(arrayFields, setFieldOptions);
        };
        loadFieldOptions();
    }, []);
    // Run this whenever parent filter changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const campaignId = dependent.Campaign.id;
        const cityId = dependent.City.id;
        const locationId = dependent.Location.id;
        if (campaignId) {
            fetchCustomerType(campaignId);
        } else {
            setFieldOptions((prev)=>({
                    ...prev,
                    PropertyType: []
                }));
            setFilters((prev)=>({
                    ...prev,
                    PropertyType: []
                }));
        }
        if (cityId) {
            fetchLocation(cityId);
        } else {
            setFieldOptions((prev)=>({
                    ...prev,
                    Location: []
                }));
            setFilters((prev)=>({
                    ...prev,
                    Location: []
                }));
        }
        if (cityId && locationId) {
            fetchSubLocation(cityId, locationId);
        } else {
            setFieldOptions((prev)=>({
                    ...prev,
                    SubLocation: []
                }));
            setFilters((prev)=>({
                    ...prev,
                    SubLocation: []
                }));
        }
    }, [
        dependent.Campaign.id,
        dependent.City.id,
        dependent.Location.id
    ]);
    const fetchCustomerType = async (campaignId)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTypesByCampaign"])(campaignId);
            setFieldOptions((prev)=>({
                    ...prev,
                    PropertyType: res || []
                }));
        } catch (error) {
            console.error("Error fetching types:", error);
            setFieldOptions((prev)=>({
                    ...prev,
                    PropertyType: []
                }));
        }
    };
    const fetchLocation = async (cityId)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$location$2f$location$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocationByCity"])(cityId);
            setFieldOptions((prev)=>({
                    ...prev,
                    Location: res || []
                }));
        } catch (error) {
            console.error("Error fetching location:", error);
            setFieldOptions((prev)=>({
                    ...prev,
                    Location: []
                }));
        }
    };
    const fetchSubLocation = async (cityId, locationId)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$sublocation$2f$sublocation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getsubLocationByCityLoc"])(cityId, locationId);
            setFieldOptions((prev)=>({
                    ...prev,
                    SubLocation: res || []
                }));
        } catch (error) {
            console.error("Error fetching sublocation:", error);
            setFieldOptions((prev)=>({
                    ...prev,
                    SubLocation: []
                }));
        }
    };
    const campaign = [
        'Buyer',
        'Seller',
        'Rent Out',
        'Rent In',
        'Hostel/PG',
        'Agents',
        'Services',
        'Others',
        'Guest House',
        'Happy Stay'
    ];
    const propertyTypes = [
        'Flat',
        'Villa',
        'Plot',
        'Commercial'
    ];
    const statusTypes = [
        'Open',
        'Closed',
        'Pending'
    ];
    const cities = [
        'Mumbai',
        'Delhi',
        'Bangalore'
    ];
    const locations = [
        'Andheri',
        'Borivali',
        'Powai'
    ];
    const users = [
        'Admin',
        'Agent1',
        'Agent2'
    ];
    const phonetableheader = [
        {
            key: "Name",
            label: "Name"
        },
        {
            key: "ContactNumber",
            label: "Contact No"
        },
        {
            key: "User",
            label: "User"
        },
        {
            key: "Date",
            label: "Date"
        }
    ];
    /*follow up filter : 
                                            .filter(
                                                (item, index, arr) =>
                                                    arr.findIndex((row) => row.customerid === item.customerid) === index //keeps only first occurrence
                                            )
                                            */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ProtectedRoutes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "top-right"
            }, void 0, false, {
                fileName: "[project]/src/app/followups/customer/page.tsx",
                lineNumber: 436,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$DeleteDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isDeleteDialogOpen,
                title: "Are you sure you want to delete this followup?",
                data: deleteDialogData,
                onClose: ()=>{
                    setIsDeleteDialogOpen(false);
                    setDeleteDialogData(null);
                },
                onDelete: handleDelete
            }, void 0, false, {
                fileName: "[project]/src/app/followups/customer/page.tsx",
                lineNumber: 439,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$DeleteDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isFollowupDeleteDialogOpen,
                title: `Are you sure you want delete the followup for customer ${getCustomerName(followupdeleteDialogData?.id || "")}?`,
                data: followupdeleteDialogData,
                onClose: ()=>{
                    setFollowupDeleteDialogData(null);
                    setIsFollowupDeleteDialogOpen(false);
                },
                onDelete: deleteThisFollowup
            }, void 0, false, {
                fileName: "[project]/src/app/followups/customer/page.tsx",
                lineNumber: 449,
                columnNumber: 13
            }, this),
            isfollowupDialogOpen && Array.isArray(followupDialogData) && followupDialogData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$PopupMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>{
                    setIsFollowupDialogOpen(false);
                    setFollowupDialogData([]);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col border border-white/20 overflow-hidden bg-white/80 max-sm:dark:bg-[var(--color-childbgdark)] backdrop-blur-xl text-[var(--color-secondary-darker)] rounded-2xl shadow-2xl p-0 max-w-[800px] gap-0 m-2 w-full max-h-[85vh] overflow-hidden ring-1 ring-black/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-between  p-6 py-5 bg-gradient-to-r from-[var(--color-secondary-darker)] to-[var(--color-secondary)] text-white sticky top-0 z-10 backdrop-blur-md bg-opacity-95",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl md:text-2xl font-bold flex items-center gap-2 tracking-tight",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex text-[var(--color-primary-light)] items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-white/20 p-2 rounded-lg backdrop-blur-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 50
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a1 1 0 100-2H6V7h5a1 1 0 011-1h5a1 1 0 011 1v5h2V7a3 3 0 00-3-3h-5a2 2 0 00-2 2H6z",
                                                                    clipRule: "evenodd"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 50
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 48
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 46
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Customer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 46
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: " font-black drop-shadow-sm",
                                                        children: "Followups"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 46
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                lineNumber: 467,
                                                columnNumber: 44
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 42
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "cursor-pointer hover:bg-white/20 p-2 rounded-full transition-all duration-300 ease-out hover:rotate-90 active:scale-95 group",
                                            onClick: ()=>{
                                                setFollowupDialogData(null);
                                                setIsFollowupDialogOpen(false);
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoMdClose"], {
                                                className: "w-6 h-6 group-hover:text-[var(--color-primary)] transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                lineNumber: 486,
                                                columnNumber: 44
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                            lineNumber: 479,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                    lineNumber: 465,
                                    columnNumber: 40
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " flex items-center gap-2 ml-[45px] mt-2 font-light  text-[var(--color-primary-light)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: " bg-[var(--color-primary-light)] p-1 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsPersonFill"], {
                                                className: " text-[var(--color-primary-dark)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                lineNumber: 490,
                                                columnNumber: 110
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                            lineNumber: 490,
                                            columnNumber: 42
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: followupDialogData[0].Name ?? ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                            lineNumber: 491,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                    lineNumber: 489,
                                    columnNumber: 40
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/followups/customer/page.tsx",
                            lineNumber: 464,
                            columnNumber: 38
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto max-h-[calc(85vh-80px)] p-2 md:p-6 space-y-4 scrollbar-thin scrollbar-thumb-[var(--color-primary)]/30 scrollbar-track-transparent hover:scrollbar-thumb-[var(--color-primary)]/50",
                            children: followupDialogData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group relative flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white max-sm:dark:bg-[var(--color-childbgdark)] max-sm:dark:border-gray-700 border border-gray-100 rounded-xl p-3 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/20 transition-all duration-300 ease-out hover:-translate-y-1 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                            lineNumber: 505,
                                            columnNumber: 46
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3 flex-1 w-full md:w-auto pl-0 md:pl-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20",
                                                            children: [
                                                                "Follow-up #",
                                                                index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 50
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold ${item.StatusType?.toLowerCase().includes('complete') || item.StatusType?.toLowerCase().includes('done') ? 'bg-green-100 text-green-700 border border-green-200' : item.StatusType?.toLowerCase().includes('pending') || item.StatusType?.toLowerCase().includes('wait') ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-blue-100 text-blue-700 border border-blue-200'}`,
                                                            children: item.StatusType
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 50
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 48
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "p-1.5 bg-gray-50 rounded-md text-[var(--color-secondary)]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                            lineNumber: 527,
                                                                            columnNumber: 56
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                        lineNumber: 526,
                                                                        columnNumber: 54
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 52
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs mb-1 text-gray-400 font-medium uppercase tracking-wider",
                                                                            children: "Follow-up Date"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                            lineNumber: 531,
                                                                            columnNumber: 54
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-[var(--color-secondary-darker)] max-sm:dark:text-[var(--color-secondary)]",
                                                                            children: item.StartDate
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                            lineNumber: 532,
                                                                            columnNumber: 54
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 52
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 50
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "p-1.5 bg-gray-50 rounded-md text-[var(--color-secondary)]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                            lineNumber: 539,
                                                                            columnNumber: 56
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                        lineNumber: 538,
                                                                        columnNumber: 54
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                    lineNumber: 537,
                                                                    columnNumber: 52
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs mb-1 text-gray-400 font-medium uppercase tracking-wider",
                                                                            children: "Next Follow-up"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                            lineNumber: 543,
                                                                            columnNumber: 54
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-[var(--color-secondary-darker)] max-sm:dark:text-[var(--color-secondary)]",
                                                                            children: item.FollowupNextDate
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                            lineNumber: 544,
                                                                            columnNumber: 54
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                    lineNumber: 542,
                                                                    columnNumber: 52
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 536,
                                                            columnNumber: 50
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 48
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 p-3 bg-gray-50/50 max-sm:dark:bg-[var(--color-primary-darker)]/50 rounded-lg border border-gray-100 max-sm:dark:border-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400 font-medium uppercase tracking-wider mb-1",
                                                            children: "Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 50
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-700 max-sm:dark:text-gray-300 leading-relaxed line-clamp-3",
                                                            children: item.Description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 50
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 549,
                                                    columnNumber: 48
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                            lineNumber: 508,
                                            columnNumber: 46
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row gap-3 justify-end items-center w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 max-sm:dark:border-gray-600 mt-2 md:mt-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    sx: {
                                                        backgroundColor: "#E8F5E9",
                                                        color: "var(--color-primary)",
                                                        minWidth: "40px",
                                                        height: "40px",
                                                        borderRadius: "8px"
                                                    },
                                                    onClick: ()=>editThisFollowup(item._id ?? ""),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdEdit"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 50
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 48
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    sx: {
                                                        backgroundColor: "#FDECEA",
                                                        color: "#C62828",
                                                        minWidth: "40px",
                                                        height: "40px",
                                                        borderRadius: "8px"
                                                    },
                                                    onClick: ()=>{
                                                        setIsFollowupDialogOpen(false);
                                                        setIsFollowupDeleteDialogOpen(true);
                                                        setFollowupDeleteDialogData({
                                                            id: item._id ?? "",
                                                            Name: item.Name ?? ""
                                                        });
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdDelete"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 50
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 48
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                            lineNumber: 556,
                                            columnNumber: 46
                                        }, this)
                                    ]
                                }, item._id ?? +index, true, {
                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 44
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/followups/customer/page.tsx",
                            lineNumber: 497,
                            columnNumber: 38
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/followups/customer/page.tsx",
                    lineNumber: 462,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/followups/customer/page.tsx",
                lineNumber: 461,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " sm:hidden min-h-[calc(100vh-56px)] overflow-auto max-sm:py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: " text-[var(--color-primary)] font-bold text-2xl px-0  ",
                        children: "Followups"
                    }, void 0, false, {
                        fileName: "[project]/src/app/followups/customer/page.tsx",
                        lineNumber: 600,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$phonescreens$2f$DashboardScreens$2f$DynamicAdvance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ObjectSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    options: Array.isArray(fieldOptions?.Campaign) ? fieldOptions.Campaign : [],
                                    label: "Campaign",
                                    value: dependent.Campaign.id,
                                    getLabel: (item)=>item?.Name || "",
                                    getId: (item)=>item?._id || "",
                                    onChange: (selectedId)=>{
                                        const selectedObj = fieldOptions.Campaign.find((i)=>i._id === selectedId);
                                        if (selectedObj) {
                                            const updatedFilters = {
                                                ...filters,
                                                Campaign: [
                                                    selectedObj.Name
                                                ],
                                                PropertyType: []
                                            };
                                            setFilters(updatedFilters);
                                            setDependent((prev)=>({
                                                    ...prev,
                                                    Campaign: {
                                                        id: selectedObj._id,
                                                        name: selectedObj.Name
                                                    },
                                                    PropertyType: {
                                                        id: "",
                                                        name: ""
                                                    }
                                                }));
                                            handleSelectChange("Campaign", selectedObj.Name, updatedFilters);
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                    lineNumber: 603,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ObjectSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    options: Array.isArray(fieldOptions?.PropertyType) ? fieldOptions.PropertyType : [],
                                    label: "Property Type",
                                    value: dependent.PropertyType.name,
                                    getLabel: (item)=>item?.Name || "",
                                    getId: (item)=>item?._id || "",
                                    onChange: (selectedId)=>{
                                        const selectedObj = fieldOptions.PropertyType.find((i)=>i._id === selectedId);
                                        if (selectedObj) {
                                            const updatedFilters = {
                                                ...filters,
                                                PropertyType: [
                                                    selectedObj.Name
                                                ]
                                            };
                                            setFilters(updatedFilters);
                                            setDependent((prev)=>({
                                                    ...prev,
                                                    PropertyType: {
                                                        id: selectedObj._id,
                                                        name: selectedObj.Name
                                                    }
                                                }));
                                            handleSelectChange("PropertyType", selectedObj.Name, updatedFilters);
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                    lineNumber: 630,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ObjectSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    options: Array.isArray(fieldOptions?.City) ? fieldOptions.City : [],
                                    label: "City",
                                    value: dependent.City.id,
                                    getLabel: (item)=>item?.Name || "",
                                    getId: (item)=>item?._id || "",
                                    onChange: (selectedId)=>{
                                        const selectedObj = fieldOptions.City.find((i)=>i._id === selectedId);
                                        if (selectedObj) {
                                            const updatedFilters = {
                                                ...filters,
                                                City: [
                                                    selectedObj.Name
                                                ],
                                                Location: []
                                            };
                                            setFilters(updatedFilters);
                                            setDependent((prev)=>({
                                                    ...prev,
                                                    City: {
                                                        id: selectedObj._id,
                                                        name: selectedObj.Name
                                                    },
                                                    Location: {
                                                        id: "",
                                                        name: ""
                                                    },
                                                    SubLocation: {
                                                        id: "",
                                                        name: ""
                                                    }
                                                }));
                                            handleSelectChange("City", selectedObj.Name, updatedFilters);
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                    lineNumber: 659,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ObjectSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    options: Array.isArray(fieldOptions?.Location) ? fieldOptions.Location : [],
                                    label: "Location",
                                    value: dependent.Location.id,
                                    getLabel: (item)=>item?.Name || "",
                                    getId: (item)=>item?._id || "",
                                    onChange: (selectedId)=>{
                                        const selectedObj = fieldOptions.Location.find((i)=>i._id === selectedId);
                                        if (selectedObj) {
                                            const updatedFilters = {
                                                ...filters,
                                                Location: [
                                                    selectedObj.Name
                                                ]
                                            };
                                            setFilters(updatedFilters);
                                            setDependent((prev)=>({
                                                    ...prev,
                                                    Location: {
                                                        id: selectedObj._id,
                                                        name: selectedObj.Name
                                                    },
                                                    SubLocation: {
                                                        id: "",
                                                        name: ""
                                                    }
                                                }));
                                            handleSelectChange("Location", selectedObj.Name, updatedFilters);
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                    lineNumber: 685,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    options: Array.isArray(fieldOptions?.StatusTypes) ? fieldOptions.StatusTypes : [],
                                    value: filters.StatusType[0],
                                    label: "Status Type",
                                    onChange: (val)=>handleSelectChange("StatusType", val)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                    lineNumber: 709,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " w-full flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "reset",
                                        onClick: clearFilter,
                                        className: "text-red-500 cursor-pointer hover:underline text-sm px-5 py-2 rounded-md",
                                        children: "Clear Search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                        lineNumber: 711,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                    lineNumber: 710,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/followups/customer/page.tsx",
                            lineNumber: 602,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/followups/customer/page.tsx",
                        lineNumber: 601,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$phonescreens$2f$DashboardScreens$2f$tables$2f$FollowupTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        leads: followupData,
                        labelLeads: phonetableheader,
                        onFollowup: (lead)=>{
                            setIsFollowupDialogOpen(true);
                            handleFollowups(lead.customerid);
                        },
                        onAdd: (id)=>addFollowup(id),
                        onEdit: (id)=>editFollowup(id),
                        onDelete: (lead)=>{
                            setIsDeleteDialogOpen(true);
                            setDeleteDialogData({
                                id: lead.customerid,
                                ContactNumber: lead.ContactNumber
                            });
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/followups/customer/page.tsx",
                        lineNumber: 717,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/followups/customer/page.tsx",
                lineNumber: 599,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[calc(100vh-56px)] max-sm:hidden overflow-auto max-md:py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-white rounded-md max-md:p-3 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$labels$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: "Dashboard",
                                subtitles: [
                                    "Followups",
                                    "Customer"
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                lineNumber: 746,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/followups/customer/page.tsx",
                            lineNumber: 745,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "flex flex-col mt-6 p-2 bg-white rounded-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "m-5 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center py-1 px-2 border border-gray-800 rounded-md cursor-pointer",
                                            onClick: ()=>setToggleSearchDropdown(!toggleSearchDropdown),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiSearch"], {}, void 0, false, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 758,
                                                            columnNumber: 73
                                                        }, this),
                                                        "Advance Search"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "p-2 hover:bg-gray-200 rounded-md cursor-pointer",
                                                    children: toggleSearchDropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosArrowUp"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 61
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosArrowDown"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 80
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 759,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                            lineNumber: 757,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `overflow-hidden ${toggleSearchDropdown ? ' overflow-visible max-h-[2000px]' : ' overflow-hidden max-h-0'} transition-all duration-500 ease-in-out px-5`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-5 my-5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-3 gap-5 max-md:grid-cols-1 max-lg:grid-cols-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ObjectSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                options: Array.isArray(fieldOptions?.Campaign) ? fieldOptions.Campaign : [],
                                                                label: "Campaign",
                                                                value: dependent.Campaign.id,
                                                                getLabel: (item)=>item?.Name || "",
                                                                getId: (item)=>item?._id || "",
                                                                onChange: (selectedId)=>{
                                                                    const selectedObj = fieldOptions.Campaign.find((i)=>i._id === selectedId);
                                                                    if (selectedObj) {
                                                                        const updatedFilters = {
                                                                            ...filters,
                                                                            Campaign: [
                                                                                selectedObj.Name
                                                                            ],
                                                                            PropertyType: []
                                                                        };
                                                                        setFilters(updatedFilters);
                                                                        setDependent((prev)=>({
                                                                                ...prev,
                                                                                Campaign: {
                                                                                    id: selectedObj._id,
                                                                                    name: selectedObj.Name
                                                                                },
                                                                                PropertyType: {
                                                                                    id: "",
                                                                                    name: ""
                                                                                }
                                                                            }));
                                                                        handleSelectChange("Campaign", selectedObj.Name, updatedFilters);
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 767,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ObjectSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                options: Array.isArray(fieldOptions?.PropertyType) ? fieldOptions.PropertyType : [],
                                                                label: "Property Type",
                                                                value: dependent.PropertyType.name,
                                                                getLabel: (item)=>item?.Name || "",
                                                                getId: (item)=>item?._id || "",
                                                                onChange: (selectedId)=>{
                                                                    const selectedObj = fieldOptions.PropertyType.find((i)=>i._id === selectedId);
                                                                    if (selectedObj) {
                                                                        const updatedFilters = {
                                                                            ...filters,
                                                                            PropertyType: [
                                                                                selectedObj.Name
                                                                            ]
                                                                        };
                                                                        setFilters(updatedFilters);
                                                                        setDependent((prev)=>({
                                                                                ...prev,
                                                                                PropertyType: {
                                                                                    id: selectedObj._id,
                                                                                    name: selectedObj.Name
                                                                                }
                                                                            }));
                                                                        handleSelectChange("PropertyType", selectedObj.Name, updatedFilters);
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 794,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ObjectSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                options: Array.isArray(fieldOptions?.City) ? fieldOptions.City : [],
                                                                label: "City",
                                                                value: dependent.City.id,
                                                                getLabel: (item)=>item?.Name || "",
                                                                getId: (item)=>item?._id || "",
                                                                onChange: (selectedId)=>{
                                                                    const selectedObj = fieldOptions.City.find((i)=>i._id === selectedId);
                                                                    if (selectedObj) {
                                                                        const updatedFilters = {
                                                                            ...filters,
                                                                            City: [
                                                                                selectedObj.Name
                                                                            ],
                                                                            Location: []
                                                                        };
                                                                        setFilters(updatedFilters);
                                                                        setDependent((prev)=>({
                                                                                ...prev,
                                                                                City: {
                                                                                    id: selectedObj._id,
                                                                                    name: selectedObj.Name
                                                                                },
                                                                                Location: {
                                                                                    id: "",
                                                                                    name: ""
                                                                                },
                                                                                SubLocation: {
                                                                                    id: "",
                                                                                    name: ""
                                                                                }
                                                                            }));
                                                                        handleSelectChange("City", selectedObj.Name, updatedFilters);
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 823,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ObjectSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                options: Array.isArray(fieldOptions?.Location) ? fieldOptions.Location : [],
                                                                label: "Location",
                                                                value: dependent.Location.id,
                                                                getLabel: (item)=>item?.Name || "",
                                                                getId: (item)=>item?._id || "",
                                                                onChange: (selectedId)=>{
                                                                    const selectedObj = fieldOptions.Location.find((i)=>i._id === selectedId);
                                                                    if (selectedObj) {
                                                                        const updatedFilters = {
                                                                            ...filters,
                                                                            Location: [
                                                                                selectedObj.Name
                                                                            ]
                                                                        };
                                                                        setFilters(updatedFilters);
                                                                        setDependent((prev)=>({
                                                                                ...prev,
                                                                                Location: {
                                                                                    id: selectedObj._id,
                                                                                    name: selectedObj.Name
                                                                                },
                                                                                SubLocation: {
                                                                                    id: "",
                                                                                    name: ""
                                                                                }
                                                                            }));
                                                                        handleSelectChange("Location", selectedObj.Name, updatedFilters);
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 849,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$ObjectSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                options: Array.isArray(fieldOptions?.SubLocation) ? fieldOptions.SubLocation : [],
                                                                label: "Sub Location",
                                                                value: dependent.SubLocation.id,
                                                                getLabel: (item)=>item?.Name || "",
                                                                getId: (item)=>item?._id || "",
                                                                onChange: (selectedId)=>{
                                                                    const selectedObj = fieldOptions.SubLocation.find((i)=>i._id === selectedId);
                                                                    if (selectedObj) {
                                                                        const updatedFilters = {
                                                                            ...filters,
                                                                            SubLocation: [
                                                                                selectedObj.Name
                                                                            ]
                                                                        };
                                                                        setFilters(updatedFilters);
                                                                        setDependent((prev)=>({
                                                                                ...prev,
                                                                                SubLocation: {
                                                                                    id: selectedObj._id,
                                                                                    name: selectedObj.Name
                                                                                }
                                                                            }));
                                                                        handleSelectChange("SubLocation", selectedObj.Name, updatedFilters);
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 873,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                options: Array.isArray(fieldOptions?.StatusTypes) ? fieldOptions.StatusTypes : [],
                                                                value: filters.StatusType[0],
                                                                label: "Status Type",
                                                                onChange: (val)=>handleSelectChange("StatusType", val)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 897,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$SingleSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                options: [
                                                                    "10",
                                                                    "25",
                                                                    "50",
                                                                    "100"
                                                                ],
                                                                value: filters.Limit[0],
                                                                label: "Limit",
                                                                onChange: (val)=>handleSelectChange("Limit", val)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 899,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                        lineNumber: 766,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 765,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    className: "flex flex-wrap max-md:flex-col justify-between items-center mb-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-[80%]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block mb-2 text-sm font-medium text-[var(--color-secondary-darker)]",
                                                                    children: "AI Genie"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                    lineNumber: 905,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "type text here..",
                                                                    className: "border border-gray-300 rounded-md px-3 py-2 outline-none w-full",
                                                                    value: filters.Keyword,
                                                                    onChange: (e)=>handleSelectChange("Keyword", e.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                    lineNumber: 906,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 904,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "submit",
                                                                    className: "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 cursor-pointer px-3 py-2 mt-6 rounded-md",
                                                                    children: "Explore"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                    lineNumber: 915,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "reset",
                                                                    onClick: clearFilter,
                                                                    className: "text-red-500 text-sm px-5 py-2 mt-6 hover:underline cursor-pointer rounded-md ml-3",
                                                                    children: "Clear Search"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                    lineNumber: 918,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 914,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 903,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                            lineNumber: 764,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                    lineNumber: 756,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " overflow-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "table-auto w-full border-collapse text-sm border border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-[var(--color-primary)] text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 border border-[var(--color-secondary-dark)]  text-left"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 931,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 border border-[var(--color-secondary-dark)]  text-left",
                                                            children: "S.No."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 932,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 border border-[var(--color-secondary-dark)]  text-left",
                                                            children: "Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 933,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 border border-[var(--color-secondary-dark)]  text-left",
                                                            children: "Contact No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 934,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 border border-[var(--color-secondary-dark)]  text-left",
                                                            children: "User"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 935,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 border border-[var(--color-secondary-dark)]  text-left",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 936,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 border border-[var(--color-secondary-dark)]  text-left",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                            lineNumber: 937,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 930,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                lineNumber: 929,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: currentRows.length > 0 ? currentRows.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-t hover:bg-[#f7f6f3] transition-all duration-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3  border border-gray-200 text-[var(--color-primary)] cursor-pointer hover:underline",
                                                                onClick: ()=>{
                                                                    setIsFollowupDialogOpen(true);
                                                                    handleFollowups(item.customerid);
                                                                },
                                                                children: "Follow UP"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 947,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3  border border-gray-200",
                                                                children: indexOfFirstRow + index + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 956,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3  border border-gray-200",
                                                                children: item.Name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 957,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3  border border-gray-200",
                                                                children: item.ContactNumber
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 958,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3  border border-gray-200",
                                                                children: item.User
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 959,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3  border border-gray-200",
                                                                children: item.Date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 960,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2  flex gap-2 items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        sx: {
                                                                            backgroundColor: "#E8F5E9",
                                                                            color: "var(--color-primary)",
                                                                            minWidth: "32px",
                                                                            height: "32px",
                                                                            borderRadius: "8px"
                                                                        },
                                                                        onClick: ()=>addFollowup(item.customerid),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdAdd"], {}, void 0, false, {
                                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                            lineNumber: 972,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                        lineNumber: 962,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        sx: {
                                                                            backgroundColor: "#E8F5E9",
                                                                            color: "var(--color-primary)",
                                                                            minWidth: "32px",
                                                                            height: "32px",
                                                                            borderRadius: "8px"
                                                                        },
                                                                        onClick: ()=>editFollowup(item.customerid),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdEdit"], {}, void 0, false, {
                                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                            lineNumber: 985,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                        lineNumber: 975,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        sx: {
                                                                            backgroundColor: "#FDECEA",
                                                                            color: "#C62828",
                                                                            minWidth: "32px",
                                                                            height: "32px",
                                                                            borderRadius: "8px"
                                                                        },
                                                                        onClick: ()=>{
                                                                            setIsDeleteDialogOpen(true);
                                                                            setDeleteDialogData({
                                                                                id: item.customerid,
                                                                                ContactNumber: item.ContactNumber
                                                                            });
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdDelete"], {}, void 0, false, {
                                                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                            lineNumber: 1004,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                        lineNumber: 988,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                                lineNumber: 961,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, item._id, true, {
                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                        lineNumber: 943,
                                                        columnNumber: 45
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 6,
                                                        className: "text-center py-4 text-gray-500",
                                                        children: "No followups available."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 1010,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/followups/customer/page.tsx",
                                                lineNumber: 940,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/followups/customer/page.tsx",
                                        lineNumber: 928,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                    lineNumber: 927,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mt-3 py-3 px-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: [
                                                "Page ",
                                                currentTablePage,
                                                " of ",
                                                totalTablePages
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                            lineNumber: 1024,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: prevtablePage,
                                                    disabled: currentTablePage === 1,
                                                    className: "px-3 py-1 bg-gray-200 border border-gray-300 rounded disabled:opacity-50",
                                                    children: "Prev"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 1026,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: nexttablePage,
                                                    disabled: currentTablePage === totalTablePages || currentRows.length <= 0,
                                                    className: "px-3 py-1 bg-gray-200 border border-gray-300 rounded disabled:opacity-50",
                                                    children: "Next"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                                    lineNumber: 1034,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/followups/customer/page.tsx",
                                            lineNumber: 1025,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/followups/customer/page.tsx",
                                    lineNumber: 1023,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/followups/customer/page.tsx",
                            lineNumber: 755,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/followups/customer/page.tsx",
                    lineNumber: 744,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/followups/customer/page.tsx",
                lineNumber: 736,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/followups/customer/page.tsx",
        lineNumber: 435,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_c7692f70._.js.map