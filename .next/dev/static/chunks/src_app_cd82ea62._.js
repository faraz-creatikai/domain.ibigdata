(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/component/CustomDropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * CustomDropdown — a compact, reusable select built to match the
 * existing dialog design system (--color-primary, Tailwind utilities).
 *
 * Features
 * ─────────
 * • Portal-rendered panel  →  never clipped by overflow:hidden ancestors
 * • Auto-repositions on scroll / resize while open
 * • Cascading-safe: pass `disabled` when upstream selection is pending
 * • `loading` state with spinner
 * • Optional `clearable` × button
 * • Keyboard: closes on Escape, selects on Enter / Space (trigger focus)
 *
 * Usage
 * ─────
 * <CustomDropdown
 *   options={campaigns}            // DropdownOption[]
 *   value={filterCampaign?._id ?? null}
 *   onChange={opt => setFilterCampaign(opt)}
 *   placeholder="Campaign"
 *   loading={loadingCampaigns}
 * />
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
/* ─── Tiny icons (self-contained so no import overhead) ─────────────────── */ const ChevronIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2 3.5L5 6.5L8 3.5",
            stroke: "currentColor",
            strokeWidth: 1.6,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/component/CustomDropdown.tsx",
            lineNumber: 61,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/CustomDropdown.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = ChevronIcon;
const ClearIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "8",
        height: "8",
        viewBox: "0 0 8 8",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1.5 1.5l5 5M6.5 1.5l-5 5",
            stroke: "currentColor",
            strokeWidth: 1.7,
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/component/CustomDropdown.tsx",
            lineNumber: 73,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/CustomDropdown.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = ClearIcon;
const CheckIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1.5 5l3 3 4-4.5",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/component/CustomDropdown.tsx",
            lineNumber: 84,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/CustomDropdown.tsx",
        lineNumber: 83,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = CheckIcon;
/* ─── Component ─────────────────────────────────────────────────────────── */ const CustomDropdown = ({ options, value, onChange, placeholder = 'Select…', loading = false, disabled = false, className = '', clearable = true, noOptionsText = 'No options' })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [panelPos, setPanelPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0,
        width: 0
    });
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedOption = value ? options.find((o)=>o._id === value) ?? null : null;
    const isDisabled = disabled || loading;
    /* Calculate panel position from trigger's bounding rect ──────────────── */ const recalcPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomDropdown.useCallback[recalcPos]": ()=>{
            if (!triggerRef.current) return;
            const r = triggerRef.current.getBoundingClientRect();
            setPanelPos({
                top: r.bottom + 4,
                left: r.left,
                width: r.width
            });
        }
    }["CustomDropdown.useCallback[recalcPos]"], []);
    const openPanel = ()=>{
        recalcPos();
        setOpen(true);
    };
    const closePanel = ()=>setOpen(false);
    const togglePanel = ()=>{
        if (isDisabled) return;
        open ? closePanel() : openPanel();
    };
    /* Close on outside click ─────────────────────────────────────────────── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomDropdown.useEffect": ()=>{
            if (!open) return;
            const down = {
                "CustomDropdown.useEffect.down": (e)=>{
                    const t = e.target;
                    if (triggerRef.current?.contains(t) || panelRef.current?.contains(t)) return;
                    closePanel();
                }
            }["CustomDropdown.useEffect.down"];
            document.addEventListener('mousedown', down);
            return ({
                "CustomDropdown.useEffect": ()=>document.removeEventListener('mousedown', down)
            })["CustomDropdown.useEffect"];
        }
    }["CustomDropdown.useEffect"], [
        open
    ]);
    /* Reposition on scroll / resize while panel is open ─────────────────── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomDropdown.useEffect": ()=>{
            if (!open) return;
            const update = {
                "CustomDropdown.useEffect.update": ()=>recalcPos()
            }["CustomDropdown.useEffect.update"];
            window.addEventListener('scroll', update, true);
            window.addEventListener('resize', update);
            return ({
                "CustomDropdown.useEffect": ()=>{
                    window.removeEventListener('scroll', update, true);
                    window.removeEventListener('resize', update);
                }
            })["CustomDropdown.useEffect"];
        }
    }["CustomDropdown.useEffect"], [
        open,
        recalcPos
    ]);
    /* Close on Escape ────────────────────────────────────────────────────── */ const handleKeyDown = (e)=>{
        if (e.key === 'Escape') closePanel();
        if ((e.key === 'Enter' || e.key === ' ') && !open) {
            e.preventDefault();
            openPanel();
        }
    };
    const handleSelect = (opt)=>{
        onChange(opt);
        closePanel();
    };
    const handleClear = (e)=>{
        e.stopPropagation();
        onChange(null);
    };
    /* ─── Styles ──────────────────────────────────────────────────────────── */ const triggerStyle = {
        background: open ? '#fff' : selectedOption ? '#f0f9ff' : '#f8fafc',
        borderColor: open ? 'var(--color-primary)' : selectedOption ? 'rgba(2,132,199,0.25)' : '#e2e8f0',
        boxShadow: open ? '0 0 0 3px rgba(2,132,199,0.10)' : 'none',
        opacity: disabled ? 0.60 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'border-color 0.15s, box-shadow 0.15s, background 0.15s'
    };
    /* ─── Portal panel ────────────────────────────────────────────────────── */ const panel = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: panelRef,
        style: {
            position: 'fixed',
            top: panelPos.top,
            left: panelPos.left,
            width: panelPos.width,
            zIndex: 9999
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-100 overflow-hidden",
                style: {
                    boxShadow: '0 8px 28px rgba(0,0,0,0.12)',
                    animation: 'dd-in 0.14s cubic-bezier(0.16,1,0.3,1)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto",
                    style: {
                        maxHeight: 188,
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#e2e8f0 transparent'
                    },
                    children: options.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-gray-400 text-center py-4",
                        children: noOptionsText
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/CustomDropdown.tsx",
                        lineNumber: 228,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : options.map((opt)=>{
                        const active = opt._id === value;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onMouseDown: ()=>handleSelect(opt),
                            className: "w-full text-left cursor-pointer flex items-center gap-2 px-3 py-2 text-[11.5px] transition-colors",
                            style: {
                                background: active ? '#f0f9ff' : 'transparent',
                                color: active ? 'var(--color-primary)' : '#374151',
                                fontWeight: active ? 600 : 400
                            },
                            onMouseEnter: (e)=>{
                                if (!active) e.currentTarget.style.background = '#f8fafc';
                            },
                            onMouseLeave: (e)=>{
                                if (!active) e.currentTarget.style.background = 'transparent';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-3.5 h-3.5 flex items-center justify-center flex-shrink-0",
                                    children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                        fileName: "[project]/src/app/component/CustomDropdown.tsx",
                                        lineNumber: 257,
                                        columnNumber: 34
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/CustomDropdown.tsx",
                                    lineNumber: 256,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: opt.Name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/CustomDropdown.tsx",
                                    lineNumber: 259,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, opt._id, true, {
                            fileName: "[project]/src/app/component/CustomDropdown.tsx",
                            lineNumber: 235,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/component/CustomDropdown.tsx",
                    lineNumber: 219,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/CustomDropdown.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          @keyframes dd-in {
            from { opacity: 0; transform: translateY(-4px) scale(0.98); }
            to   { opacity: 1; transform: translateY(0)    scale(1); }
          }
        `
            }, void 0, false, {
                fileName: "[project]/src/app/component/CustomDropdown.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/CustomDropdown.tsx",
        lineNumber: 202,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0)), document.body);
    /* ─── Render ──────────────────────────────────────────────────────────── */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: triggerRef,
                type: "button",
                onClick: togglePanel,
                onKeyDown: handleKeyDown,
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                disabled: disabled,
                className: "w-full flex items-center cursor-pointer gap-1.5 px-2.5 py-[7px] rounded-lg border text-left select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/20",
                style: triggerStyle,
                children: [
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3 h-3 rounded-full border border-gray-200 flex-shrink-0",
                                style: {
                                    borderTopColor: 'var(--color-primary)',
                                    animation: 'spin 0.7s linear infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/CustomDropdown.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1 text-[11px] text-gray-400 truncate",
                                children: "Loading…"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/CustomDropdown.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1 text-[11px] truncate",
                        style: {
                            color: selectedOption ? '#1e293b' : '#94a3b8'
                        },
                        children: selectedOption ? selectedOption.Name : placeholder
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/CustomDropdown.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-0.5 flex-shrink-0 text-gray-400",
                        children: [
                            clearable && selectedOption && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-4 h-4 flex items-center justify-center rounded-full hover:bg-gray-100 hover:text-gray-600 transition-colors",
                                onMouseDown: handleClear,
                                "aria-label": "Clear",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClearIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/component/CustomDropdown.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/CustomDropdown.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: 'inline-flex',
                                    transition: 'transform 0.18s',
                                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/component/CustomDropdown.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/CustomDropdown.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/CustomDropdown.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/CustomDropdown.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            panel,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes spin { to { transform: rotate(360deg); } }`
            }, void 0, false, {
                fileName: "[project]/src/app/component/CustomDropdown.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/CustomDropdown.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CustomDropdown, "SnGnczmNYZa/nhuOAiEI+5PQ7dI=");
_c3 = CustomDropdown;
const __TURBOPACK__default__export__ = CustomDropdown;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ChevronIcon");
__turbopack_context__.k.register(_c1, "ClearIcon");
__turbopack_context__.k.register(_c2, "CheckIcon");
__turbopack_context__.k.register(_c3, "CustomDropdown");
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
"[project]/src/app/component/popups/PopupMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const PopupMenu = ({ children, onClose, isOpen = true })=>{
    _s();
    const handleBackdropClick = (e)=>{
        if (e.target === e.currentTarget) {
            onClose?.();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PopupMenu.useEffect": ()=>{
            const html = document.documentElement;
            const body = document.body;
            if (isOpen) {
                html.style.overflow = 'hidden';
                body.style.overflow = 'hidden';
            } else {
                html.style.overflow = '';
                body.style.overflow = '';
            }
            return ({
                "PopupMenu.useEffect": ()=>{
                    html.style.overflow = '';
                    body.style.overflow = '';
                }
            })["PopupMenu.useEffect"];
        }
    }["PopupMenu.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
_s(PopupMenu, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PopupMenu;
const __TURBOPACK__default__export__ = PopupMenu;
var _c;
__turbopack_context__.k.register(_c, "PopupMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/popups/DeleteDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$PopupMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/popups/PopupMenu.tsx [app-client] (ecmascript)");
'use client';
;
;
const DeleteDialog = ({ isOpen, title = 'Are you sure you want to delete this item?', description, data, onClose, onDelete, fieldLabels, confirmLabel = "Yes, delete" })=>{
    if (!isOpen || !data) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$PopupMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onClose: onClose,
        isOpen: isOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col border border-gray-300/30 bg-gray-100 text-[var(--color-secondary-darker)] rounded-xl shadow-lg p-6 max-w-[800px] gap-8 m-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-bold text-lg text-[var(--color-secondary-darker)]",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-sm",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
                    lineNumber: 40,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: Object.entries(data).filter(([key])=>key !== 'id').filter(([key])=>key !== "isFavourite").map(([key, value])=>{
                        const label = fieldLabels && fieldLabels[key] ? fieldLabels[key] : key.replace(/([A-Z])/g, ' $1').replace(/^./, (s)=>s.toUpperCase());
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-[#C62828] bg-[#FDECEA] hover:bg-[#F9D0C4] cursor-pointer rounded-md px-4 py-2",
                            onClick: ()=>onDelete(data),
                            children: confirmLabel
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/popups/DeleteDialog.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = DeleteDialog;
const __TURBOPACK__default__export__ = DeleteDialog;
var _c;
__turbopack_context__.k.register(_c, "DeleteDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/data/aiModels.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// config/aiModels.js
__turbopack_context__.s([
    "AI_PROVIDERS_CONFIG",
    ()=>AI_PROVIDERS_CONFIG
]);
const AI_PROVIDERS_CONFIG = [
    {
        providerId: "OPENAI",
        displayName: "OpenAI",
        icon: "/icons/openai.svg",
        models: [
            {
                id: "gpt-4o",
                name: "GPT-4o",
                description: "Flagship model for complex tasks."
            },
            {
                id: "gpt-4o-mini",
                name: "GPT-4o Mini",
                description: "Fast and affordable for simple routing."
            }
        ]
    },
    {
        providerId: "GEMINI",
        displayName: "Google Gemini",
        icon: "/icons/google.svg",
        models: [
            {
                id: "gemini-1.5-pro",
                name: "Gemini 1.5 Pro",
                description: "Advanced reasoning and massive context."
            },
            {
                id: "gemini-2.5-flash",
                name: "Gemini 2.5 Flash",
                description: "High-speed and lightweight."
            },
            {
                id: "gemini-2.5-flash-lite",
                name: "Gemini 2.5 Flash Lite",
                description: " High speed lite version"
            }
        ]
    },
    {
        providerId: "ANTHROPIC",
        displayName: "Anthropic Claude",
        icon: "/icons/anthropic.svg",
        models: [
            {
                id: "claude-3-5-sonnet-latest",
                name: "Claude 3.5 Sonnet",
                description: "Incredible speed and coding capability."
            },
            {
                id: "claude-3-opus-latest",
                name: "Claude 3 Opus",
                description: "Maximum intelligence for hard problems."
            }
        ]
    },
    {
        providerId: "GROQ",
        displayName: "Groq",
        icon: "/icons/groq.svg",
        models: [
            {
                id: "llama-3.3-70b-versatile",
                name: "Llama 3.3 70B",
                description: "Extremely fast and versatile open-source model."
            },
            {
                id: "mixtral-8x7b-32768",
                name: "Mixtral 8x7B",
                description: "High-speed mixture of experts model."
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/configuration/ai/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminAiKeyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/CustomDropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$MasterProtectedRoutes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/MasterProtectedRoutes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$DeleteDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/popups/DeleteDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$aiModels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/aiModels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/auth.ts [app-client] (ecmascript)");
/**
 * AdminAiKeyPage
 * ──────────────
 * System-wide AI provider configuration screen for master administrators.
 *
 * Rules encoded here:
 *  - A provider can only be configured once (no duplicate OPENAI rows, etc.)
 *    → the "add" panel only offers providers that aren't configured yet.
 *  - Only one configured provider can be ACTIVE at a time. Turning one on
 *    automatically turns the previously active one off.
 *  - Existing configs can be toggled ACTIVE/INACTIVE, have their model changed,
 *    or have their key rotated, and can be removed.
 *
 * Wires together:
 *  - CustomDropdown                                → provider / model selects
 *  - AI_PROVIDERS_CONFIG                           → static provider + model catalogue
 *  - SaveAdminAiKey    (POST   .../ai/api-key)     → create
 *  - getAllAiApiKeys   (GET    .../ai/...)         → list
 *  - UpdateAdminAiKey  (PATCH  .../ai/:id)         → update model / key / status
 *  - DeleteAdminAiKey  (POST   .../ai/:id)         → remove
 *
 * NOTE: adjust the import paths below (CustomDropdown, config, api functions)
 * to match where those files actually live in your project.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const PROVIDERS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$aiModels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AI_PROVIDERS_CONFIG"];
const ADMIN_AI_DELETE_FIELD_LABELS = {
    id: 'ID',
    provider: 'Provider',
    model: 'Model',
    status: 'Status'
};
/* ─── Helpers ─────────────────────────────────────────────────────────────── */ const getProviderInfo = (providerId)=>PROVIDERS.find((p)=>p.providerId === providerId) ?? null;
const getModelInfo = (provider, modelId)=>provider?.models.find((m)=>m.id === modelId) ?? null;
function formatRelativeTime(iso) {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "";
    const diffSec = Math.round((Date.now() - date.getTime()) / 1000);
    if (diffSec < 45) return "just now";
    const min = Math.round(diffSec / 60);
    if (min < 60) return `${min}m ago`;
    const hr = Math.round(min / 60);
    if (hr < 24) return `${hr}h ago`;
    const day = Math.round(hr / 24);
    if (day < 30) return `${day}d ago`;
    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}
/* ─── Icons ───────────────────────────────────────────────────────────────── */ const KeyIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15 7a4 4 0 1 1-4 4M9.5 13.5 3 20m0 0h4m-4 0v-4m9.5-2.5L6 20",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 116,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 115,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = KeyIcon;
const ShieldIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "13",
        height: "13",
        viewBox: "0 0 24 24",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 3l7 3v6c0 4.5-3 8.25-7 9-4-.75-7-4.5-7-9V6l7-3z",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 128,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 127,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = ShieldIcon;
const EyeIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z",
                stroke: "currentColor",
                strokeWidth: 1.7,
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 139,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                stroke: "currentColor",
                strokeWidth: 1.7
            }, void 0, false, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 145,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 138,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = EyeIcon;
const EyeOffIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 24 24",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 3l18 18M10.6 10.6a3 3 0 0 0 4.24 4.24M9.9 5.1A10.9 10.9 0 0 1 12 5c7 0 10.5 7 10.5 7a13.5 13.5 0 0 1-3.1 4.2M6.6 6.6C3.5 8.5 1.5 12 1.5 12s2.2 4.4 6.4 6.2c1.2.5 2.5.8 4.1.8.9 0 1.8-.1 2.6-.3",
            stroke: "currentColor",
            strokeWidth: 1.7,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 151,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 150,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = EyeOffIcon;
const CheckCircleIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                stroke: "currentColor",
                strokeWidth: 1.8
            }, void 0, false, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 163,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 12.5l2.5 2.5 5.5-6",
                stroke: "currentColor",
                strokeWidth: 1.8,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 164,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 162,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = CheckCircleIcon;
const AlertCircleIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                stroke: "currentColor",
                strokeWidth: 1.8
            }, void 0, false, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 176,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7.5v6M12 16.5h.01",
                stroke: "currentColor",
                strokeWidth: 1.8,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 177,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 175,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = AlertCircleIcon;
const SpinnerIcon = ({ light = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-block w-3.5 h-3.5 rounded-full border-2 flex-shrink-0",
        style: {
            borderColor: light ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.1)",
            borderTopColor: light ? "#fff" : "var(--color-primary)",
            animation: "spin 0.7s linear infinite"
        }
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 187,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = SpinnerIcon;
const PlusIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M5 12h14",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 199,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 198,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = PlusIcon;
const PencilIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
            stroke: "currentColor",
            strokeWidth: 1.7,
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 205,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 204,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = PencilIcon;
const TrashIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-8 0 1 13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-13",
            stroke: "currentColor",
            strokeWidth: 1.7,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 216,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 215,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = TrashIcon;
const XIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "13",
        height: "13",
        viewBox: "0 0 24 24",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 5l14 14M19 5L5 19",
            stroke: "currentColor",
            strokeWidth: 1.9,
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 228,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 227,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = XIcon;
const ChevronDownIcon = ({ open })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "13",
        height: "13",
        viewBox: "0 0 24 24",
        fill: "none",
        style: {
            transition: "transform 0.18s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 9l6 6 6-6",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 240,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 233,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = ChevronDownIcon;
/* ─── Small shared pieces ─────────────────────────────────────────────────── */ function ProviderAvatar({ provider, size = 36 }) {
    _s();
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dim = `${size}px`;
    if (!provider) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "rounded-xl bg-[var(--color-primary-lighter)] dark:bg-white/10 flex items-center justify-center text-[var(--color-primary)] dark:text-white/70 flex-shrink-0",
            style: {
                width: dim,
                height: dim
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyIcon, {}, void 0, false, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 262,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 258,
            columnNumber: 7
        }, this);
    }
    if (provider.icon && !imgError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0",
            style: {
                width: dim,
                height: dim
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: provider.icon,
                alt: "",
                className: "w-1/2 h-1/2 object-contain",
                onError: ()=>setImgError(true)
            }, void 0, false, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 274,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 269,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-xl bg-[var(--color-primary-lighter)] dark:bg-white/10 flex items-center justify-center text-[11px] font-semibold text-[var(--color-primary)] dark:text-white/80 flex-shrink-0",
        style: {
            width: dim,
            height: dim
        },
        children: provider.displayName.slice(0, 2).toUpperCase()
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
}
_s(ProviderAvatar, "0doYx/lFKmVVbvtO/eWR8SJrtgo=");
_c12 = ProviderAvatar;
function StatusToggle({ active, disabled, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        role: "switch",
        "aria-checked": active,
        "aria-label": active ? "Deactivate" : "Activate (will deactivate the current one)",
        disabled: disabled,
        onClick: onToggle,
        className: `relative inline-flex cursor-pointer h-5 w-9 items-center rounded-full transition-colors flex-shrink-0 ${active ? "bg-[var(--color-primary)]" : "bg-gray-300 dark:bg-white/15"} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform",
            style: {
                transform: active ? "translateX(18px)" : "translateX(3px)"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 314,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
_c13 = StatusToggle;
function ConfigRow({ config, isEditing, isBusy, isToggling, toggleLocked, errorMsg, onEdit, onCancelEdit, onSaveEdit, onToggleStatus, onRequestDelete }) {
    _s1();
    const provider = getProviderInfo(config.provider);
    const modelInfo = getModelInfo(provider, config.model);
    const isActive = config.status === "ACTIVE";
    const [editModelId, setEditModelId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(config.model);
    const [editApiKey, setEditApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editShowKey, setEditShowKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfigRow.useEffect": ()=>{
            if (isEditing) {
                setEditModelId(config.model);
                setEditApiKey("");
                setEditShowKey(false);
            }
        }
    }["ConfigRow.useEffect"], [
        isEditing,
        config.model
    ]);
    const modelOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConfigRow.useMemo[modelOptions]": ()=>provider?.models.map({
                "ConfigRow.useMemo[modelOptions]": (m)=>({
                        _id: m.id,
                        Name: m.name
                    })
            }["ConfigRow.useMemo[modelOptions]"]) ?? []
    }["ConfigRow.useMemo[modelOptions]"], [
        provider
    ]);
    const hasChanges = editModelId !== config.model || editApiKey.trim().length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-2xl border bg-white dark:bg-white/[0.03] shadow-sm hover:shadow-md transition-shadow overflow-hidden ${isActive ? "border-[var(--color-primary)]/40 ring-1 ring-[var(--color-primary)]/25" : "border-gray-200 dark:border-white/10"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 sm:p-4.5",
            children: [
                !isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderAvatar, {
                            provider: provider
                        }, void 0, false, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13.5px] font-semibold text-gray-900 dark:text-[var(--color-textlightdark)] truncate",
                                            children: provider?.displayName ?? config.provider
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10.5px] font-mono px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 truncate max-w-[140px]",
                                            children: modelInfo?.name ?? config.model
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this),
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded-md bg-[var(--color-primary-lighter)] dark:bg-[var(--color-primary)]/15 text-[var(--color-primary-darker)] dark:text-[var(--color-primary-light)] flex-shrink-0",
                                            children: "In use"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 396,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-0.5 text-[11.5px] text-[var(--color-gray)] dark:text-gray-500",
                                    children: [
                                        "Updated ",
                                        formatRelativeTime(config.updatedAt)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 387,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[11px] font-medium ${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-gray-400 dark:text-gray-500"}`,
                                            children: isActive ? "Active" : "Inactive"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 17
                                        }, this),
                                        isToggling ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusToggle, {
                                            active: isActive,
                                            disabled: isBusy || toggleLocked,
                                            onToggle: onToggleStatus
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 419,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-px h-4 bg-gray-200 dark:bg-white/10"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 427,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onEdit,
                                    disabled: isBusy,
                                    "aria-label": "Edit",
                                    className: "w-7 h-7 flex cursor-pointer items-center justify-center rounded-lg text-gray-500 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-lighter)] dark:hover:bg-white/10 transition-colors disabled:opacity-40",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PencilIcon, {}, void 0, false, {
                                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 429,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onRequestDelete,
                                    disabled: isBusy,
                                    "aria-label": "Delete",
                                    className: "w-7 h-7 flex items-center cursor-pointer justify-center rounded-lg text-gray-500 hover:text-[var(--color-destructive)] hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors disabled:opacity-40",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrashIcon, {}, void 0, false, {
                                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                                        lineNumber: 445,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 438,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 406,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                    lineNumber: 384,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3.5 animate-[dd-in_0.15s_ease-out]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderAvatar, {
                                    provider: provider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13.5px] font-semibold text-gray-900 dark:text-[var(--color-textlightdark)]",
                                    children: provider?.displayName ?? config.provider
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 451,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-[12px] font-medium text-gray-700 dark:text-gray-300 mb-1.5",
                                    children: "Model"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 459,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    options: modelOptions,
                                    value: editModelId,
                                    onChange: (opt)=>setEditModelId(opt?._id ?? config.model),
                                    placeholder: "Select a model",
                                    clearable: false
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 458,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-[12px] font-medium text-gray-700 dark:text-gray-300 mb-1.5",
                                    children: [
                                        "New API key ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 font-normal",
                                            children: "(optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: editShowKey ? "text" : "password",
                                            value: editApiKey,
                                            onChange: (e)=>setEditApiKey(e.target.value),
                                            placeholder: "Leave blank to keep the current key",
                                            autoComplete: "off",
                                            spellCheck: false,
                                            className: "w-full rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2 pr-10 text-[13px] font-mono tracking-tight text-gray-900 dark:text-[var(--color-textlightdark)] placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none transition-colors focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-white/[0.08] focus:ring-2 focus:ring-[var(--color-primary)]/15"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setEditShowKey((s)=>!s),
                                            "aria-label": editShowKey ? "Hide API key" : "Show API key",
                                            className: "absolute right-2.5 top-1/2 cursor-pointer -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors",
                                            children: editShowKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeOffIcon, {}, void 0, false, {
                                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                                lineNumber: 491,
                                                columnNumber: 34
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeIcon, {}, void 0, false, {
                                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                                lineNumber: 491,
                                                columnNumber: 51
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 485,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 471,
                            columnNumber: 13
                        }, this),
                        errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 rounded-lg bg-[var(--color-destructive)]/10 px-3 py-2 text-[12px] text-red-600 dark:text-[var(--color-destructive)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertCircleIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: errorMsg
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 499,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 497,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-2 pt-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onCancelEdit,
                                    disabled: isBusy,
                                    className: "text-[12.5px] font-medium cursor-pointer px-3 py-1.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 504,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onSaveEdit({
                                            model: editModelId !== config.model ? editModelId : undefined,
                                            apiKey: editApiKey.trim() ? editApiKey.trim() : undefined
                                        }),
                                    disabled: !hasChanges || isBusy,
                                    className: "flex items-center cursor-pointer gap-1.5 text-[12.5px] font-medium px-3.5 py-1.5 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white transition-colors disabled:opacity-45 disabled:cursor-not-allowed",
                                    children: [
                                        isBusy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                                            light: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 523,
                                            columnNumber: 28
                                        }, this),
                                        "Save changes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 512,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 503,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                    lineNumber: 450,
                    columnNumber: 11
                }, this),
                !isEditing && errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 flex items-center gap-2 rounded-lg bg-[var(--color-destructive)]/10 px-3 py-2 text-[12px] text-red-600 dark:text-[var(--color-destructive)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertCircleIcon, {}, void 0, false, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 532,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: errorMsg
                        }, void 0, false, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 533,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                    lineNumber: 531,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 382,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 376,
        columnNumber: 5
    }, this);
}
_s1(ConfigRow, "smMkpHODaq4jOWh48ukHxEyMAps=");
_c14 = ConfigRow;
/* ─── Add panel: create a config for a not-yet-configured provider ──────── */ function AddProviderPanel({ availableProviders, onSaved, onCancel }) {
    _s2();
    const [providerId, setProviderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modelId, setModelId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [apiKey, setApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showKey, setShowKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const providerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AddProviderPanel.useMemo[providerOptions]": ()=>availableProviders.map({
                "AddProviderPanel.useMemo[providerOptions]": (p)=>({
                        _id: p.providerId,
                        Name: p.displayName
                    })
            }["AddProviderPanel.useMemo[providerOptions]"])
    }["AddProviderPanel.useMemo[providerOptions]"], [
        availableProviders
    ]);
    const selectedProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AddProviderPanel.useMemo[selectedProvider]": ()=>availableProviders.find({
                "AddProviderPanel.useMemo[selectedProvider]": (p)=>p.providerId === providerId
            }["AddProviderPanel.useMemo[selectedProvider]"]) ?? null
    }["AddProviderPanel.useMemo[selectedProvider]"], [
        availableProviders,
        providerId
    ]);
    const modelOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AddProviderPanel.useMemo[modelOptions]": ()=>selectedProvider?.models.map({
                "AddProviderPanel.useMemo[modelOptions]": (m)=>({
                        _id: m.id,
                        Name: m.name
                    })
            }["AddProviderPanel.useMemo[modelOptions]"]) ?? []
    }["AddProviderPanel.useMemo[modelOptions]"], [
        selectedProvider
    ]);
    const selectedModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AddProviderPanel.useMemo[selectedModel]": ()=>selectedProvider?.models.find({
                "AddProviderPanel.useMemo[selectedModel]": (m)=>m.id === modelId
            }["AddProviderPanel.useMemo[selectedModel]"]) ?? null
    }["AddProviderPanel.useMemo[selectedModel]"], [
        selectedProvider,
        modelId
    ]);
    const canSave = Boolean(providerId && modelId && apiKey.trim()) && !saving;
    const handleSave = async ()=>{
        if (!providerId || !modelId || !apiKey.trim()) return;
        setSaving(true);
        setErrorMsg("");
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaveAdminAiKey"])({
            provider: providerId,
            apiKey: apiKey.trim(),
            model: modelId
        });
        setSaving(false);
        if (result) {
            onSaved();
        } else {
            setErrorMsg("Couldn't save the configuration. Confirm you have master administrator access and try again.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-dashed border-[var(--color-primary)]/40 bg-[var(--color-primary-lighter)]/40 dark:bg-white/[0.03] p-5 animate-[dd-in_0.16s_ease-out]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] font-semibold text-gray-900 dark:text-[var(--color-textlightdark)]",
                        children: "Add a provider"
                    }, void 0, false, {
                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                        lineNumber: 606,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        "aria-label": "Close",
                        className: "w-6 h-6 flex items-center cursor-pointer justify-center rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {}, void 0, false, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 615,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                        lineNumber: 609,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 605,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[12px] font-medium text-gray-700 dark:text-gray-300 mb-1.5",
                                children: "Provider"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 621,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderAvatar, {
                                        provider: selectedProvider,
                                        size: 32
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                                        lineNumber: 625,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            options: providerOptions,
                                            value: providerId,
                                            onChange: (opt)=>{
                                                setProviderId(opt?._id ?? null);
                                                setModelId(null);
                                                setErrorMsg("");
                                            },
                                            placeholder: "Select a provider",
                                            noOptionsText: "All providers are already configured"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 627,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                                        lineNumber: 626,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 624,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                        lineNumber: 620,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[12px] font-medium text-gray-700 dark:text-gray-300 mb-1.5",
                                children: "Model"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 643,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                options: modelOptions,
                                value: modelId,
                                onChange: (opt)=>{
                                    setModelId(opt?._id ?? null);
                                    setErrorMsg("");
                                },
                                placeholder: selectedProvider ? "Select a model" : "Select a provider first",
                                disabled: !selectedProvider,
                                noOptionsText: "No models available for this provider"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 646,
                                columnNumber: 11
                            }, this),
                            selectedModel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[11.5px] text-[var(--color-gray)] dark:text-gray-400",
                                children: selectedModel.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 658,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                        lineNumber: 642,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[12px] font-medium text-gray-700 dark:text-gray-300 mb-1.5",
                                children: "API key"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 665,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: showKey ? "text" : "password",
                                        value: apiKey,
                                        onChange: (e)=>{
                                            setApiKey(e.target.value);
                                            setErrorMsg("");
                                        },
                                        placeholder: "sk-••••••••••••••••",
                                        autoComplete: "off",
                                        spellCheck: false,
                                        className: "w-full rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2 pr-10 text-[13px] font-mono tracking-tight text-gray-900 dark:text-[var(--color-textlightdark)] placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none transition-colors focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                                        lineNumber: 669,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowKey((s)=>!s),
                                        "aria-label": showKey ? "Hide API key" : "Show API key",
                                        className: "absolute right-2.5 top-1/2 cursor-pointer -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors",
                                        children: showKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeOffIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 687,
                                            columnNumber: 26
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 687,
                                            columnNumber: 43
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                                        lineNumber: 681,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[11.5px] text-[var(--color-gray)] dark:text-gray-400",
                                children: "Encrypted before storage. You won't be able to view this key again after saving."
                            }, void 0, false, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 690,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                        lineNumber: 664,
                        columnNumber: 9
                    }, this),
                    errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 rounded-lg bg-[var(--color-destructive)]/10 px-3 py-2 text-[12.5px] text-red-600 dark:text-[var(--color-destructive)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertCircleIcon, {}, void 0, false, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 697,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: errorMsg
                            }, void 0, false, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 698,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                        lineNumber: 696,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-end gap-2 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onCancel,
                                className: "text-[12.5px] font-medium cursor-pointer px-3.5 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 transition-colors",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 703,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleSave,
                                disabled: !canSave,
                                className: "flex items-center cursor-pointer gap-1.5 text-[12.5px] font-medium px-4 py-2 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white transition-colors disabled:opacity-45 disabled:cursor-not-allowed",
                                children: [
                                    saving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                                        light: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                                        lineNumber: 716,
                                        columnNumber: 24
                                    }, this),
                                    saving ? "Saving…" : "Save provider"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 710,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                        lineNumber: 702,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 619,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 604,
        columnNumber: 5
    }, this);
}
_s2(AddProviderPanel, "UAQhIujWIqsuFHv2uY/L8dcS8+o=");
_c15 = AddProviderPanel;
/* ─── Skeleton + empty state ──────────────────────────────────────────────── */ function RowSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/10 animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 730,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-28 rounded bg-gray-100 dark:bg-white/10 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                        lineNumber: 732,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2.5 w-20 rounded bg-gray-100 dark:bg-white/10 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                        lineNumber: 733,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 731,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-9 h-5 rounded-full bg-gray-100 dark:bg-white/10 animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/app/configuration/ai/page.tsx",
                lineNumber: 735,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 729,
        columnNumber: 5
    }, this);
}
_c16 = RowSkeleton;
function AdminAiKeyPage() {
    _s3();
    const [configs, setConfigs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fetchError, setFetchError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAddOpen, setIsAddOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteTarget, setDeleteTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rowBusy, setRowBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [rowError, setRowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [togglingIds, setTogglingIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const availableProviders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminAiKeyPage.useMemo[availableProviders]": ()=>PROVIDERS.filter({
                "AdminAiKeyPage.useMemo[availableProviders]": (p)=>!configs.some({
                        "AdminAiKeyPage.useMemo[availableProviders]": (c)=>c.provider === p.providerId
                    }["AdminAiKeyPage.useMemo[availableProviders]"])
            }["AdminAiKeyPage.useMemo[availableProviders]"])
    }["AdminAiKeyPage.useMemo[availableProviders]"], [
        configs
    ]);
    const activeConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminAiKeyPage.useMemo[activeConfig]": ()=>configs.find({
                "AdminAiKeyPage.useMemo[activeConfig]": (c)=>c.status === "ACTIVE"
            }["AdminAiKeyPage.useMemo[activeConfig]"]) ?? null
    }["AdminAiKeyPage.useMemo[activeConfig]"], [
        configs
    ]);
    const activeProviderInfo = activeConfig ? getProviderInfo(activeConfig.provider) : null;
    const activeModelInfo = activeConfig ? getModelInfo(activeProviderInfo, activeConfig.model) : null;
    const anyToggling = Object.values(togglingIds).some(Boolean);
    async function handleDeleteConfirm(data) {
        setDeleteTarget(null); // close dialog immediately
        setRowBusy((b)=>({
                ...b,
                [data.id]: true
            }));
        setRowError((e)=>({
                ...e,
                [data.id]: ""
            }));
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteAdminAiKey"])(data.id, {
            id: data.id
        });
        if (result) {
            setConfigs((list)=>list.filter((c)=>c.id !== data.id));
        } else {
            setRowError((e)=>({
                    ...e,
                    [data.id]: "Couldn't delete this configuration. Try again."
                }));
        }
        setRowBusy((b)=>({
                ...b,
                [data.id]: false
            }));
    }
    const loadConfigs = async ()=>{
        setLoading(true);
        setFetchError("");
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllAiApiKeys"])();
        if (result?.success) {
            const data = result.data ?? [];
            setConfigs(data);
            if (data.length === 0) setIsAddOpen(true);
        } else {
            setFetchError(result?.message || "Couldn't load AI configurations.");
        }
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminAiKeyPage.useEffect": ()=>{
            loadConfigs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AdminAiKeyPage.useEffect"], []);
    const handleAdded = ()=>{
        setIsAddOpen(false);
        loadConfigs();
    };
    /**
   * Only one config can be ACTIVE at a time.
   * Turning a provider ON automatically turns the previously active one OFF
   * (two PATCH calls, since the backend has no bulk/exclusive-activate route).
   * Turning the currently active provider OFF simply leaves none active.
   */ const handleToggleStatus = async (config)=>{
        const turningOn = config.status !== "ACTIVE";
        const newStatus = turningOn ? "ACTIVE" : "INACTIVE";
        const otherActive = turningOn ? configs.find((c)=>c.id !== config.id && c.status === "ACTIVE") ?? null : null;
        const affectedIds = otherActive ? [
            config.id,
            otherActive.id
        ] : [
            config.id
        ];
        setTogglingIds((t)=>{
            const next = {
                ...t
            };
            affectedIds.forEach((id)=>next[id] = true);
            return next;
        });
        setRowError((e)=>{
            const next = {
                ...e
            };
            affectedIds.forEach((id)=>next[id] = "");
            return next;
        });
        // Optimistic update: new one flips, previous active one (if any) turns off.
        setConfigs((list)=>list.map((c)=>{
                if (c.id === config.id) return {
                    ...c,
                    status: newStatus
                };
                if (otherActive && c.id === otherActive.id) return {
                    ...c,
                    status: "INACTIVE"
                };
                return c;
            }));
        const primaryResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpdateAdminAiKey"])(config.id, {
            status: newStatus
        });
        let secondaryResult = true;
        if (primaryResult && otherActive) {
            secondaryResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpdateAdminAiKey"])(otherActive.id, {
                status: "INACTIVE"
            });
        }
        if (!primaryResult) {
            // Revert both rows.
            setConfigs((list)=>list.map((c)=>{
                    if (c.id === config.id) return {
                        ...c,
                        status: config.status
                    };
                    if (otherActive && c.id === otherActive.id) return {
                        ...c,
                        status: "ACTIVE"
                    };
                    return c;
                }));
            setRowError((e)=>({
                    ...e,
                    [config.id]: "Couldn't update the status. Try again."
                }));
        } else if (otherActive && !secondaryResult) {
            // New one activated fine, but the old one couldn't be turned off automatically.
            setConfigs((list)=>list.map((c)=>c.id === otherActive.id ? {
                        ...c,
                        status: "ACTIVE"
                    } : c));
            setRowError((e)=>({
                    ...e,
                    [otherActive.id]: "Activated the new provider, but couldn't deactivate this one automatically — turn it off manually."
                }));
        }
        setTogglingIds((t)=>{
            const next = {
                ...t
            };
            affectedIds.forEach((id)=>next[id] = false);
            return next;
        });
    };
    const handleSaveEdit = async (id, patch)=>{
        if (!patch.model && !patch.apiKey) {
            setEditingId(null);
            return;
        }
        setRowBusy((b)=>({
                ...b,
                [id]: true
            }));
        setRowError((e)=>({
                ...e,
                [id]: ""
            }));
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpdateAdminAiKey"])(id, patch);
        if (result) {
            setConfigs((list)=>list.map((c)=>c.id === id ? {
                        ...c,
                        model: patch.model ?? c.model,
                        updatedAt: new Date().toISOString()
                    } : c));
            setEditingId(null);
        } else {
            setRowError((e)=>({
                    ...e,
                    [id]: "Couldn't save changes. Try again."
                }));
        }
        setRowBusy((b)=>({
                ...b,
                [id]: false
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$MasterProtectedRoutes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-100px)] max-w-4xl mx-auto rounded-md bg-gray-50 dark:bg-[var(--color-bglightdark)] px-4 py-4 sm:px-8 sm:py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$DeleteDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: !!deleteTarget,
                    title: "Remove this provider?",
                    description: "This will delete the stored API key and configuration for this provider. This action cannot be undone.",
                    data: deleteTarget ? {
                        id: deleteTarget.id,
                        provider: getProviderInfo(deleteTarget.provider)?.displayName ?? deleteTarget.provider,
                        model: getModelInfo(getProviderInfo(deleteTarget.provider), deleteTarget.model)?.name ?? deleteTarget.model,
                        status: deleteTarget.status
                    } : null,
                    fieldLabels: ADMIN_AI_DELETE_FIELD_LABELS,
                    confirmLabel: "Yes, remove provider",
                    onClose: ()=>setDeleteTarget(null),
                    onDelete: handleDeleteConfirm
                }, void 0, false, {
                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                    lineNumber: 913,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-7 flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white flex-shrink-0 shadow-sm shadow-[var(--color-primary)]/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyIcon, {}, void 0, false, {
                                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                                        lineNumber: 936,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 935,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-[17px] font-semibold text-gray-900 dark:text-[var(--color-textlightdark)]",
                                            children: "AI provider configuration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 939,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 text-[13px] text-[var(--color-gray)] dark:text-gray-400",
                                            children: "Manage the system-wide providers and models used across the platform."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 942,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 938,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 934,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex items-center gap-2 rounded-lg bg-[var(--color-primary-lighter)] dark:bg-[var(--color-primary)]/10 px-3 py-2 text-[12px] text-[var(--color-primary-darker)] dark:text-[var(--color-primary-light)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShieldIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 950,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Only master administrators can view or change these configurations."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 951,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 949,
                            columnNumber: 9
                        }, this),
                        !loading && !fetchError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mb-6 flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] ${activeConfig ? "bg-[var(--color-primary-lighter)] dark:bg-[var(--color-primary)]/10 text-[var(--color-primary-darker)] dark:text-[var(--color-primary-light)]" : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400"}`,
                            children: [
                                activeConfig ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckCircleIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 962,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertCircleIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 962,
                                    columnNumber: 51
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: activeConfig ? `${activeProviderInfo?.displayName ?? activeConfig.provider} is the active provider (${activeModelInfo?.name ?? activeConfig.model}).` : "No provider is currently active — turn one on below to start routing requests."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 963,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 956,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[13px] font-semibold text-gray-700 dark:text-gray-300",
                                            children: "Configured providers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 975,
                                            columnNumber: 13
                                        }, this),
                                        !loading && configs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400",
                                            children: configs.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 979,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 974,
                                    columnNumber: 11
                                }, this),
                                !loading && !isAddOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: availableProviders.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsAddOpen(true),
                                        className: "flex items-center cursor-pointer gap-1.5 text-[12.5px] font-medium px-3 py-1.5 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {}, void 0, false, {
                                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                                lineNumber: 993,
                                                columnNumber: 19
                                            }, this),
                                            "Add provider"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                                        lineNumber: 988,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11.5px] text-gray-400 dark:text-gray-500",
                                        children: "All providers are configured"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                                        lineNumber: 997,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 973,
                            columnNumber: 9
                        }, this),
                        !loading && !fetchError && configs.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11.5px] text-gray-400 dark:text-gray-500 mb-3",
                            children: "Only one provider can be active at a time — turning one on turns the others off."
                        }, void 0, false, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 1006,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 mt-2",
                            children: [
                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowSkeleton, {}, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 1015,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowSkeleton, {}, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 1016,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true),
                                !loading && fetchError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5 flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-[12.5px] text-red-600 dark:text-[var(--color-destructive)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertCircleIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                                    lineNumber: 1023,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: fetchError
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                                    lineNumber: 1024,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 1022,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: loadConfigs,
                                            className: "text-[12px] font-medium cursor-pointer px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors flex-shrink-0",
                                            children: "Retry"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 1026,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 1021,
                                    columnNumber: 13
                                }, this),
                                !loading && !fetchError && configs.length === 0 && !isAddOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-dashed border-gray-200 dark:border-white/10 p-8 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-10 h-10 rounded-xl bg-[var(--color-primary-lighter)] dark:bg-white/10 text-[var(--color-primary)] dark:text-white/70 flex items-center justify-center mx-auto mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyIcon, {}, void 0, false, {
                                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                                lineNumber: 1039,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 1038,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] font-medium text-gray-700 dark:text-gray-300",
                                            children: "No providers configured yet"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 1041,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[12px] text-gray-400 dark:text-gray-500",
                                            children: "Add your first provider to start routing requests through it."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsAddOpen(true),
                                            className: "mt-4 inline-flex cursor-pointer items-center gap-1.5 text-[12.5px] font-medium px-3.5 py-1.5 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                                    lineNumber: 1052,
                                                    columnNumber: 17
                                                }, this),
                                                "Add provider"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                                            lineNumber: 1047,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                                    lineNumber: 1037,
                                    columnNumber: 13
                                }, this),
                                !loading && !fetchError && configs.map((config)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfigRow, {
                                        config: config,
                                        isEditing: editingId === config.id,
                                        isBusy: !!rowBusy[config.id],
                                        isToggling: !!togglingIds[config.id],
                                        toggleLocked: anyToggling && !togglingIds[config.id],
                                        errorMsg: rowError[config.id],
                                        onEdit: ()=>setEditingId(config.id),
                                        onCancelEdit: ()=>{
                                            setEditingId(null);
                                            setRowError((e)=>({
                                                    ...e,
                                                    [config.id]: ""
                                                }));
                                        },
                                        onSaveEdit: (patch)=>handleSaveEdit(config.id, patch),
                                        onToggleStatus: ()=>handleToggleStatus(config),
                                        onRequestDelete: ()=>setDeleteTarget(config)
                                    }, config.id, false, {
                                        fileName: "[project]/src/app/configuration/ai/page.tsx",
                                        lineNumber: 1059,
                                        columnNumber: 13
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 1012,
                            columnNumber: 9
                        }, this),
                        isAddOpen && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddProviderPanel, {
                                availableProviders: availableProviders,
                                onSaved: handleAdded,
                                onCancel: ()=>setIsAddOpen(false)
                            }, void 0, false, {
                                fileName: "[project]/src/app/configuration/ai/page.tsx",
                                lineNumber: 1082,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/configuration/ai/page.tsx",
                            lineNumber: 1081,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                    lineNumber: 932,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes dd-in {
          from { opacity: 0; transform: translateY(-4px) scale(0.99); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
      `
                }, void 0, false, {
                    fileName: "[project]/src/app/configuration/ai/page.tsx",
                    lineNumber: 1091,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/configuration/ai/page.tsx",
            lineNumber: 912,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/configuration/ai/page.tsx",
        lineNumber: 911,
        columnNumber: 5
    }, this);
}
_s3(AdminAiKeyPage, "ozocF9F099Q1qZoclWTlOUrb5HY=");
_c17 = AdminAiKeyPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
__turbopack_context__.k.register(_c, "KeyIcon");
__turbopack_context__.k.register(_c1, "ShieldIcon");
__turbopack_context__.k.register(_c2, "EyeIcon");
__turbopack_context__.k.register(_c3, "EyeOffIcon");
__turbopack_context__.k.register(_c4, "CheckCircleIcon");
__turbopack_context__.k.register(_c5, "AlertCircleIcon");
__turbopack_context__.k.register(_c6, "SpinnerIcon");
__turbopack_context__.k.register(_c7, "PlusIcon");
__turbopack_context__.k.register(_c8, "PencilIcon");
__turbopack_context__.k.register(_c9, "TrashIcon");
__turbopack_context__.k.register(_c10, "XIcon");
__turbopack_context__.k.register(_c11, "ChevronDownIcon");
__turbopack_context__.k.register(_c12, "ProviderAvatar");
__turbopack_context__.k.register(_c13, "StatusToggle");
__turbopack_context__.k.register(_c14, "ConfigRow");
__turbopack_context__.k.register(_c15, "AddProviderPanel");
__turbopack_context__.k.register(_c16, "RowSkeleton");
__turbopack_context__.k.register(_c17, "AdminAiKeyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_cd82ea62._.js.map