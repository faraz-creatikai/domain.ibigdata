(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$formatDateDMY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/formatDateDMY.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/customer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/mail/mail.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$emailTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/emailTemplate.ts [app-client] (ecmascript)"); // <-- Adjust this path
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$brandConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/brandConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* ─────────────────────────────────────────────────────────────
   Email Campaign Agent Workspace
   ───────────────────────────────────────────────────────────── */ const PAGE_SIZE = 20;
const RESULT_PAGE_SIZE = 8;
/* ── tiny icon components ── */ const LayersIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 19,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = LayersIcon;
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
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m21 21-4.35-4.35",
                strokeWidth: 2,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = SearchIcon;
const UserIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = UserIcon;
const SparkleIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 37,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = SparkleIcon;
const ClearIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M6 18L18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 42,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = ClearIcon;
const EyeIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c5 = EyeIcon;
const CloseIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 54,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c6 = CloseIcon;
const PhoneIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 59,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c7 = PhoneIcon;
const MailIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22,6 12,13 2,6",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c8 = MailIcon;
const MapPinIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "10",
                r: "3",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c9 = MapPinIcon;
const CalendarIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "2",
                x2: "16",
                y2: "6",
                strokeWidth: 2,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "2",
                x2: "8",
                y2: "6",
                strokeWidth: 2,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "10",
                x2: "21",
                y2: "10",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c10 = CalendarIcon;
const TagIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "7",
                y1: "7",
                x2: "7.01",
                y2: "7",
                strokeWidth: 2,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c11 = TagIcon;
const LinkIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c12 = LinkIcon;
const CheckIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 102,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c13 = CheckIcon;
const UsersIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 107,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c14 = UsersIcon;
const EnvelopeIcon = ({ className = 'w-3.5 h-3.5' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "4.5",
                width: "20",
                height: "15",
                rx: "2",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.5 6.5l9.5 7 9.5-7",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c15 = EnvelopeIcon;
const EditIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c16 = EditIcon;
const GlobeIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeWidth: 2,
                d: "M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c17 = GlobeIcon;
const AlertIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 9v4m0 4h.01M10.29 3.86L2.1 18a2 2 0 001.72 3h16.36a2 2 0 001.72-3L13.71 3.86a2 2 0 00-3.42 0z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 133,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c18 = AlertIcon;
const ChevronIcon = ({ open })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5 transition-transform duration-200 flex-shrink-0",
        style: {
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
        },
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 9l-7 7-7-7"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 141,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c19 = ChevronIcon;
const StampMark = ({ className = '', color = '#c7d2fe' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 64 64",
        fill: "none",
        style: {
            color
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "60",
                height: "60",
                rx: "9",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeDasharray: "3 3.4"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "17",
                y: "20",
                width: "30",
                height: "22",
                rx: "2.5",
                stroke: "currentColor",
                strokeWidth: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 22l15 11 15-11",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c20 = StampMark;
/* ─────────────────────────────────────────────────────────────
   Template picker — full-screen gallery with real, live thumbnails.
   Each card renders the actual template HTML inside a scaled-down
   iframe, so what you pick is exactly what gets sent — no fake
   screenshots to keep in sync.
   ───────────────────────────────────────────────────────────── */ const TEMPLATE_SRC_W = 640;
const TEMPLATE_SRC_H = 780;
const TemplateThumbnail = ({ html, size = 'card', label })=>{
    const box = size === 'chip' ? {
        w: 44,
        h: 36,
        scale: 0.075,
        radius: 7
    } : {
        w: '100%',
        h: 168,
        scale: 0.235,
        radius: 0
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden flex-shrink-0",
        style: {
            width: box.w,
            height: box.h,
            background: '#ffffff',
            borderRadius: box.radius
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: TEMPLATE_SRC_W,
                height: TEMPLATE_SRC_H,
                transform: `scale(${box.scale})`,
                transformOrigin: 'top left',
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                srcDoc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$brandConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBrandTokens"])(html),
                title: label || 'template preview',
                scrolling: "no",
                style: {
                    width: TEMPLATE_SRC_W,
                    height: TEMPLATE_SRC_H,
                    border: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 177,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 169,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 165,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c21 = TemplateThumbnail;
const SelectedTemplateChip = ({ template, onChange, onClear })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2.5 px-2.5 py-2 rounded-xl border",
        style: {
            borderColor: '#e7e2da',
            background: '#fbfaf8'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateThumbnail, {
                html: template.html,
                size: "chip",
                label: template.name
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10.5px] font-semibold truncate",
                        style: {
                            color: '#1c1917'
                        },
                        children: template.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9px]",
                        style: {
                            color: '#94a3b8'
                        },
                        children: template.category || 'Template'
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 188,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onChange,
                className: "text-[10px] cursor-pointer font-semibold px-2 py-1 rounded-lg flex-shrink-0",
                style: {
                    color: '#0d9488'
                },
                children: "Change"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            onClear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClear,
                className: "text-[10px] cursor-pointer font-semibold px-2 py-1 rounded-lg flex-shrink-0",
                style: {
                    color: '#94a3b8'
                },
                children: "Clear"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 192,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c22 = SelectedTemplateChip;
const ChooseTemplateButton = ({ label, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "w-full flex items-center gap-2 px-3 py-2.5 rounded-xl border border-dashed cursor-pointer transition-all hover:border-teal-300 hover:bg-teal-50/40",
        style: {
            borderColor: '#e7e2da',
            color: '#94a3b8'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-semibold",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 199,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c23 = ChooseTemplateButton;
const BlankTemplateCard = ({ selected, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex flex-col rounded-2xl border-2 border-dashed overflow-hidden text-left transition-all",
        style: {
            borderColor: selected ? '#0d9488' : '#e7e2da',
            background: selected ? 'rgba(13,148,136,0.05)' : '#fbfaf8'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                style: {
                    height: 168
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-9 h-9 rounded-xl flex items-center justify-center",
                            style: {
                                background: '#f1f5f9',
                                color: '#94a3b8'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditIcon, {}, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 211,
                                columnNumber: 138
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 211,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-semibold",
                            style: {
                                color: '#94a3b8'
                            },
                            children: "Start blank"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 212,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 210,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2.5 border-t",
                style: {
                    borderColor: selected ? '#99f6e4' : '#e7e2da'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-bold",
                        style: {
                            color: '#1c1917'
                        },
                        children: "No template"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9.5px] mt-0.5 leading-relaxed",
                        style: {
                            color: '#94a3b8'
                        },
                        children: "Write the HTML yourself, or let AI compose freely"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 217,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 215,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c24 = BlankTemplateCard;
const TemplateCard = ({ t, selected, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex flex-col rounded-2xl border overflow-hidden text-left transition-all",
        style: {
            borderColor: selected ? '#0d9488' : '#e7e2da',
            boxShadow: selected ? '0 0 0 3px rgba(13,148,136,0.12)' : '0 1px 3px rgba(0,0,0,0.03)',
            background: '#ffffff'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative border-b",
                style: {
                    borderColor: '#e7e2da'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateThumbnail, {
                        html: t.html,
                        size: "card",
                        label: t.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 229,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        style: {
                            background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.04) 100%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 230,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center",
                        style: {
                            background: '#0d9488',
                            boxShadow: '0 2px 6px rgba(13,148,136,0.4)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 233,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 232,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-bold truncate",
                                style: {
                                    color: '#1c1917'
                                },
                                children: t.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 239,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            t.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8.5px] font-semibold px-1.5 py-0.5 rounded-md flex-shrink-0",
                                style: {
                                    background: '#f0fdfa',
                                    color: '#0f766e'
                                },
                                children: t.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 241,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 238,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9.5px] mt-0.5 line-clamp-2 leading-relaxed",
                        style: {
                            color: '#94a3b8'
                        },
                        children: t.description || 'Standard email template'
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 244,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c25 = TemplateCard;
const TemplatePickerModal = ({ open, templates, selectedId, onSelect, onClose })=>{
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TemplatePickerModal.useEffect": ()=>{
            if (!open) return;
            const onKey = {
                "TemplatePickerModal.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["TemplatePickerModal.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "TemplatePickerModal.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["TemplatePickerModal.useEffect"];
        }
    }["TemplatePickerModal.useEffect"], [
        open,
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TemplatePickerModal.useEffect": ()=>{
            if (open) {
                setQuery('');
                setCategory('All');
            }
        }
    }["TemplatePickerModal.useEffect"], [
        open
    ]);
    if (!open) return null;
    const categories = [
        'All',
        ...Array.from(new Set(templates.map((t)=>t.category).filter(Boolean)))
    ];
    const filtered = templates.filter((t)=>{
        const matchesCategory = category === 'All' || t.category === category;
        const q = query.trim().toLowerCase();
        const matchesQuery = !q || t.name.toLowerCase().includes(q) || (t.description || '').toLowerCase().includes(q);
        return matchesCategory && matchesQuery;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-50 flex flex-col",
        style: {
            background: '#fbfaf8',
            animation: 'ec-modal-in 0.16s cubic-bezier(0.34,1.56,0.64,1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 px-6 py-4 border-b flex items-center gap-4",
                style: {
                    borderColor: '#e7e2da',
                    background: '#ffffff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
                        style: {
                            background: 'rgba(13,148,136,0.1)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StampMark, {
                            className: "w-5 h-5",
                            color: "#0d9488"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 284,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 283,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] font-bold",
                                style: {
                                    color: '#1c1917'
                                },
                                children: "Choose your stationery"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 287,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10.5px]",
                                style: {
                                    color: '#94a3b8'
                                },
                                children: "Pick a layout to start from — you can still edit it, or hand it to AI as a base"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 288,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 286,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "ml-auto cursor-pointer w-8 h-8 rounded-lg flex items-center justify-center transition-all flex-shrink-0",
                        style: {
                            background: '#f1f5f9',
                            color: '#64748b'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 291,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 290,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 282,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 px-6 py-3 border-b flex items-center gap-3 flex-wrap",
                style: {
                    borderColor: '#e7e2da',
                    background: '#ffffff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        style: {
                            width: 240
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-2.5 top-1/2 -translate-y-1/2",
                                style: {
                                    color: '#94a3b8'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 297,
                                    columnNumber: 110
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 297,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: query,
                                onChange: (e)=>setQuery(e.target.value),
                                placeholder: "Search templates…",
                                className: "w-full pl-8 pr-3 py-2 rounded-xl text-[11.5px] outline-none border bg-stone-50 border-slate-200 text-slate-700 focus:border-teal-300 focus:ring-2 focus:ring-teal-100 focus:bg-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 298,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 296,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 flex-wrap",
                        children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCategory(c),
                                className: "text-[10px] cursor-pointer font-semibold px-2.5 py-1 rounded-full transition-all",
                                style: category === c ? {
                                    background: '#0d9488',
                                    color: '#ffffff'
                                } : {
                                    background: '#f1f5f9',
                                    color: '#94a3b8'
                                },
                                children: c
                            }, c, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 305,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 303,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto text-[10.5px] font-medium",
                        style: {
                            color: '#94a3b8'
                        },
                        children: [
                            filtered.length,
                            " template",
                            filtered.length !== 1 ? 's' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 312,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 295,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-6 py-5",
                style: {
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#e7e2da transparent'
                },
                children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-16 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-9 h-9 rounded-xl flex items-center justify-center mb-2.5",
                            style: {
                                background: '#f1f5f9',
                                color: '#cbd5e1'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 318,
                                columnNumber: 153
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 318,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[12px] font-semibold",
                            style: {
                                color: '#334155'
                            },
                            children: [
                                'No templates match "',
                                query,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 319,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] mt-1",
                            style: {
                                color: '#94a3b8'
                            },
                            children: "Try a different search term or category"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 320,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 317,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4",
                    style: {
                        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlankTemplateCard, {
                            selected: !selectedId,
                            onClick: ()=>{
                                onSelect(null);
                                onClose();
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 324,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        filtered.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateCard, {
                                t: t,
                                selected: selectedId === t.id,
                                onClick: ()=>{
                                    onSelect(t.id);
                                    onClose();
                                }
                            }, t.id, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 326,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 323,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 315,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 281,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TemplatePickerModal, "9nZ4gtmc9ulfhFPHeI43LbcnZnA=");
_c26 = TemplatePickerModal;
const SavedTemplateCard = ({ t, selected, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex flex-col rounded-2xl border overflow-hidden text-left transition-all",
        style: {
            borderColor: selected ? '#0d9488' : '#e7e2da',
            boxShadow: selected ? '0 0 0 3px rgba(13,148,136,0.12)' : '0 1px 3px rgba(0,0,0,0.03)',
            background: '#ffffff'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative border-b",
                style: {
                    borderColor: '#e7e2da'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateThumbnail, {
                        html: t.body,
                        size: "card",
                        label: t.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 342,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        style: {
                            background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.04) 100%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 343,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center",
                        style: {
                            background: '#0d9488',
                            boxShadow: '0 2px 6px rgba(13,148,136,0.4)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 346,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 345,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 341,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-bold truncate",
                                style: {
                                    color: '#1c1917'
                                },
                                children: t.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 352,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            t.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8.5px] font-semibold px-1.5 py-0.5 rounded-md flex-shrink-0",
                                style: {
                                    background: '#f0fdfa',
                                    color: '#0f766e'
                                },
                                children: t.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 354,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 351,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9.5px] mt-0.5 truncate font-medium",
                        style: {
                            color: '#0d9488'
                        },
                        children: t.subject || 'No subject'
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 357,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9.5px] mt-0.5 line-clamp-2 leading-relaxed",
                        style: {
                            color: '#94a3b8'
                        },
                        children: t.description || 'Saved email template'
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 358,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 350,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 336,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c27 = SavedTemplateCard;
const SavedTemplatePickerModal = ({ open, templates, isLoading, selectedId, onSelect, onClose })=>{
    _s1();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SavedTemplatePickerModal.useEffect": ()=>{
            if (!open) return;
            const onKey = {
                "SavedTemplatePickerModal.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["SavedTemplatePickerModal.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "SavedTemplatePickerModal.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["SavedTemplatePickerModal.useEffect"];
        }
    }["SavedTemplatePickerModal.useEffect"], [
        open,
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SavedTemplatePickerModal.useEffect": ()=>{
            if (open) {
                setQuery('');
                setCategory('All');
            }
        }
    }["SavedTemplatePickerModal.useEffect"], [
        open
    ]);
    if (!open) return null;
    const categories = [
        'All',
        ...Array.from(new Set(templates.map((t)=>t.category).filter(Boolean)))
    ];
    const filtered = templates.filter((t)=>{
        const matchesCategory = category === 'All' || t.category === category;
        const q = query.trim().toLowerCase();
        const matchesQuery = !q || (t.name || '').toLowerCase().includes(q) || (t.subject || '').toLowerCase().includes(q) || (t.description || '').toLowerCase().includes(q);
        return matchesCategory && matchesQuery;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-50 flex flex-col",
        style: {
            background: '#fbfaf8',
            animation: 'ec-modal-in 0.16s cubic-bezier(0.34,1.56,0.64,1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 px-6 py-4 border-b flex items-center gap-4",
                style: {
                    borderColor: '#e7e2da',
                    background: '#ffffff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
                        style: {
                            background: 'rgba(13,148,136,0.1)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayersIcon, {}, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 402,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 401,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] font-bold",
                                style: {
                                    color: '#1c1917'
                                },
                                children: "Choose a saved template"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 405,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10.5px]",
                                style: {
                                    color: '#94a3b8'
                                },
                                children: "Sent exactly as saved — no AI writing, no per-customer cost"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 406,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 404,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "ml-auto cursor-pointer w-8 h-8 rounded-lg flex items-center justify-center transition-all flex-shrink-0",
                        style: {
                            background: '#f1f5f9',
                            color: '#64748b'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 409,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 408,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 400,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 px-6 py-3 border-b flex items-center gap-3 flex-wrap",
                style: {
                    borderColor: '#e7e2da',
                    background: '#ffffff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        style: {
                            width: 240
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-2.5 top-1/2 -translate-y-1/2",
                                style: {
                                    color: '#94a3b8'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 415,
                                    columnNumber: 110
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 415,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: query,
                                onChange: (e)=>setQuery(e.target.value),
                                placeholder: "Search saved templates…",
                                className: "w-full pl-8 pr-3 py-2 rounded-xl text-[11.5px] outline-none border bg-stone-50 border-slate-200 text-slate-700 focus:border-teal-300 focus:ring-2 focus:ring-teal-100 focus:bg-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 416,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 414,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    categories.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 flex-wrap",
                        children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCategory(c),
                                className: "text-[10px] cursor-pointer font-semibold px-2.5 py-1 rounded-full transition-all",
                                style: category === c ? {
                                    background: '#0d9488',
                                    color: '#ffffff'
                                } : {
                                    background: '#f1f5f9',
                                    color: '#94a3b8'
                                },
                                children: c
                            }, c, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 424,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 422,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto text-[10.5px] font-medium",
                        style: {
                            color: '#94a3b8'
                        },
                        children: [
                            filtered.length,
                            " template",
                            filtered.length !== 1 ? 's' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 432,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 413,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-6 py-5",
                style: {
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#e7e2da transparent'
                },
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4",
                    style: {
                        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))'
                    },
                    children: [
                        1,
                        2,
                        3
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-pulse rounded-2xl border overflow-hidden",
                            style: {
                                borderColor: '#e7e2da'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-200",
                                    style: {
                                        height: 168
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 440,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2.5 bg-gray-200 rounded w-2/3 mb-1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 441,
                                            columnNumber: 54
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2 bg-gray-100 rounded w-1/2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 441,
                                            columnNumber: 112
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 441,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 439,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 437,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-16 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-9 h-9 rounded-xl flex items-center justify-center mb-2.5",
                            style: {
                                background: '#f1f5f9',
                                color: '#cbd5e1'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 447,
                                columnNumber: 153
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 447,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[12px] font-semibold",
                            style: {
                                color: '#334155'
                            },
                            children: templates.length === 0 ? 'No saved email templates yet' : `No templates match "${query}"`
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 448,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] mt-1",
                            style: {
                                color: '#94a3b8'
                            },
                            children: templates.length === 0 ? 'Create one in Templates to reuse it here at zero AI cost.' : 'Try a different search term or category'
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 451,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 446,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4",
                    style: {
                        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))'
                    },
                    children: filtered.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SavedTemplateCard, {
                            t: t,
                            selected: selectedId === t._id,
                            onClick: ()=>{
                                onSelect(t._id);
                                onClose();
                            }
                        }, t._id, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 458,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 456,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 435,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 399,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(SavedTemplatePickerModal, "9nZ4gtmc9ulfhFPHeI43LbcnZnA=");
_c28 = SavedTemplatePickerModal;
const RESULT_STATUS_CONFIG = {
    sent: {
        label: 'Sent',
        bg: '#f0fdf4',
        color: '#166534',
        border: '#bbf7d0',
        dot: '#34d399'
    },
    failed: {
        label: 'Failed',
        bg: '#fef2f2',
        color: '#b91c1c',
        border: '#fecaca',
        dot: '#f87171'
    },
    skipped_no_email: {
        label: 'No email',
        bg: '#f8fafc',
        color: '#64748b',
        border: '#e2e8f0',
        dot: '#94a3b8'
    }
};
const getResultStatusCfg = (status)=>RESULT_STATUS_CONFIG[status] || {
        label: status?.replace(/_/g, ' ') || 'Unknown',
        bg: '#f8fafc',
        color: '#64748b',
        border: '#e2e8f0',
        dot: '#94a3b8'
    };
const LANGUAGE_OPTIONS = [
    {
        value: 'english',
        label: 'English'
    },
    {
        value: 'hindi',
        label: 'Hindi'
    },
    {
        value: 'hinglish',
        label: 'Hinglish'
    }
];
const CAMPAIGN_GOAL_CATEGORIES = [
    {
        id: 'intro',
        label: 'Introduce us',
        icon: SparkleIcon,
        accent: '#4338ca',
        accentBg: '#eef2ff',
        ideas: [
            {
                label: 'Website & AI services pitch',
                prompt: "Reach out about improving their website and online presence. Reference their current domain/website status if we know it, point out one specific gap or opportunity, and introduce how we can help — an AI chatbot to capture leads 24/7, SEO optimization to help them rank higher, AI agents to automate bookings and support, and a design refresh for better conversions. Invite them to a quick call to walk through it."
            },
            {
                label: 'Cold introduction',
                prompt: 'Introduce ourselves for the first time — briefly explain who we are and how we could help based on what we know about them, and invite a short call.'
            },
            {
                label: 'Free audit / review',
                prompt: 'Offer a free audit or quick review of their situation, point out one specific thing we noticed, and invite them to a call to walk through it.'
            },
            {
                label: 'Referral follow-up',
                prompt: 'Reach out mentioning we came across them / were connected to them, briefly explain what we do, and suggest a quick intro call.'
            }
        ]
    },
    {
        id: 'promo',
        label: 'Promote an offer',
        icon: TagIcon,
        accent: '#c2410c',
        accentBg: '#fff7ed',
        ideas: [
            {
                label: 'Limited-time discount',
                prompt: "Let them know about a limited-time discount or special pricing relevant to them, and invite them to lock it in before it expires."
            },
            {
                label: 'New plan or package',
                prompt: 'Introduce a new plan, package, or bundle that fits their profile, and invite them to learn more.'
            },
            {
                label: 'Seasonal promotion',
                prompt: 'Share a seasonal or festive promotion relevant to them, with a light sense of urgency.'
            }
        ]
    },
    {
        id: 're-engage',
        label: 'Re-engage',
        icon: UsersIcon,
        accent: '#059669',
        accentBg: '#f0fdf4',
        ideas: [
            {
                label: 'Long time no talk',
                prompt: "It's been a while since we last spoke — check in warmly, remind them why they were interested, and invite them to pick up where we left off."
            },
            {
                label: 'Still interested?',
                prompt: 'Ask if they are still interested in what we discussed before, and offer to answer any new questions.'
            },
            {
                label: 'Win-back',
                prompt: 'Win back a lapsed lead or customer — acknowledge the gap, share what has improved, and invite them back with no pressure.'
            }
        ]
    },
    {
        id: 'update',
        label: 'Share an update',
        icon: GlobeIcon,
        accent: '#0369a1',
        accentBg: '#f0f9ff',
        ideas: [
            {
                label: 'New feature or service',
                prompt: "Announce something new we now offer that's specifically relevant to their situation, and explain why it matters for them."
            },
            {
                label: 'Status update',
                prompt: 'Give them a friendly status update related to their inquiry or account, and let them know the next step.'
            },
            {
                label: 'Company news',
                prompt: 'Share noteworthy company news or a milestone in a way that builds trust and credibility.'
            }
        ]
    },
    {
        id: 'follow-up',
        label: 'Follow up',
        icon: MailIcon,
        accent: '#7c3aed',
        accentBg: '#faf5ff',
        ideas: [
            {
                label: 'After a call or meeting',
                prompt: 'Follow up after our last conversation, recap briefly, and suggest a clear next step.'
            },
            {
                label: "Haven't heard back",
                prompt: "Politely follow up since we haven't heard back, restate the value briefly, and make it easy to reply."
            },
            {
                label: 'Nudge toward a decision',
                prompt: 'Gently nudge them toward a decision, address a likely hesitation, and offer to help if they have questions.'
            }
        ]
    },
    {
        id: 'feedback',
        label: 'Ask for feedback',
        icon: EditIcon,
        accent: '#be185d',
        accentBg: '#fdf2f8',
        ideas: [
            {
                label: 'Request a review',
                prompt: 'Ask them for a quick review or testimonial about their experience with us.'
            },
            {
                label: 'Quick feedback',
                prompt: 'Ask for two minutes of feedback on their experience so far, framed as genuinely wanting to improve.'
            }
        ]
    },
    {
        id: 'reminder',
        label: 'Reminder',
        icon: CalendarIcon,
        accent: '#b91c1c',
        accentBg: '#fef2f2',
        ideas: [
            {
                label: 'Renewal or expiry',
                prompt: 'Remind them that something is coming up for renewal or expiring soon, and what to do next.'
            },
            {
                label: 'Upcoming appointment',
                prompt: 'Remind them of an upcoming appointment or event, with the key details and what to expect.'
            }
        ]
    },
    {
        id: 'thanks',
        label: 'Thank you',
        icon: CheckIcon,
        accent: '#0f766e',
        accentBg: '#f0fdfa',
        ideas: [
            {
                label: 'Post-purchase thanks',
                prompt: 'Thank them for choosing us, confirm what happens next, and let them know we are here if they need anything.'
            },
            {
                label: 'Welcome / onboarding',
                prompt: 'Welcome them warmly, set expectations for what comes next, and offer a point of contact.'
            }
        ]
    }
];
// 6 most common intents, derived from the categories above — one place to
// edit colors/icons/copy, used both in the always-visible quick grid and
// (via full category) in the "browse all" modal.
const QUICK_START_IDS = [
    'intro',
    'promo',
    're-engage',
    'follow-up',
    'update',
    'reminder'
];
const QUICK_START_GOALS = QUICK_START_IDS.map(_c29 = (id)=>{
    const cat = CAMPAIGN_GOAL_CATEGORIES.find((c)=>c.id === id);
    return {
        ...cat.ideas[0],
        icon: cat.icon,
        accent: cat.accent,
        accentBg: cat.accentBg
    };
});
_c30 = QUICK_START_GOALS;
// Fast path — 3 most common intents, always visible, one tap away
const QUICK_PROMPT_HINTS = [
    CAMPAIGN_GOAL_CATEGORIES[0].ideas[0],
    CAMPAIGN_GOAL_CATEGORIES[2].ideas[0],
    CAMPAIGN_GOAL_CATEGORIES[1].ideas[0]
];
const ArrowRightIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5 flex-shrink-0",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9 5l7 7-7 7"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 587,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 586,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c31 = ArrowRightIcon;
// Always-visible quick pick — colorful, icon-led, self-explanatory at a glance
const QuickGoalCard = ({ goal, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-start gap-2.5 text-left cursor-pointer px-3 py-2.5 rounded-xl border transition-all hover:shadow-sm hover:-translate-y-0.5",
        style: {
            borderColor: '#e2e8f0',
            background: '#ffffff'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0",
                style: {
                    background: goal.accentBg,
                    color: goal.accent
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(goal.icon, {}, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 599,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 598,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10.5px] font-bold",
                        style: {
                            color: '#1e293b'
                        },
                        children: goal.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 602,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9px] mt-0.5 line-clamp-2 leading-relaxed",
                        style: {
                            color: '#94a3b8'
                        },
                        children: goal.prompt
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 603,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 601,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 593,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c32 = QuickGoalCard;
// Big, hard-to-miss entry point into the full gallery — same visual weight
// as "Choose a template", not a corner link
const BrowseAllGoalsButton = ({ onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "w-full flex items-center gap-2.5 px-3.5 py-3 rounded-xl border cursor-pointer transition-all hover:border-indigo-300",
        style: {
            borderColor: '#c7d2fe',
            background: '#eef2ff'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0",
                style: {
                    background: '#4f46e5',
                    color: '#ffffff'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 617,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 616,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-bold",
                        style: {
                            color: '#4338ca'
                        },
                        children: "Browse all campaign goals"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 620,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9px] mt-0.5",
                        style: {
                            color: '#6366f1'
                        },
                        children: "20+ ready-made ideas across every use case"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 621,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 619,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 623,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 611,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c33 = BrowseAllGoalsButton;
const GoalCard = ({ idea, icon: Icon, accent, accentBg, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex flex-col rounded-2xl border text-left p-4 transition-all hover:shadow-md hover:-translate-y-0.5",
        style: {
            borderColor: '#e7e2da',
            background: '#ffffff'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded-xl flex items-center justify-center mb-2.5",
                style: {
                    background: accentBg,
                    color: accent
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 634,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 633,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11.5px] font-bold mb-1",
                style: {
                    color: '#1c1917'
                },
                children: idea.label
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 636,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] leading-relaxed line-clamp-3",
                style: {
                    color: '#94a3b8'
                },
                children: idea.prompt
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 637,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 628,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c34 = GoalCard;
const GoalPickerModal = ({ open, categories, onSelect, onClose })=>{
    _s2();
    const [activeCat, setActiveCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(categories[0].id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoalPickerModal.useEffect": ()=>{
            if (!open) return;
            const onKey = {
                "GoalPickerModal.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["GoalPickerModal.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "GoalPickerModal.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["GoalPickerModal.useEffect"];
        }
    }["GoalPickerModal.useEffect"], [
        open,
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoalPickerModal.useEffect": ()=>{
            if (open) setActiveCat(categories[0].id);
        }
    }["GoalPickerModal.useEffect"], [
        open
    ]);
    if (!open) return null;
    const category = categories.find((c)=>c.id === activeCat);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-50 flex flex-col",
        style: {
            background: '#fbfaf8',
            animation: 'ec-modal-in 0.16s cubic-bezier(0.34,1.56,0.64,1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 px-6 py-4 border-b flex items-center gap-4",
                style: {
                    borderColor: '#e7e2da',
                    background: '#ffffff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
                        style: {
                            background: 'rgba(79,70,229,0.1)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 667,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 666,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] font-bold",
                                style: {
                                    color: '#1c1917'
                                },
                                children: "What's this campaign about?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 670,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10.5px]",
                                style: {
                                    color: '#94a3b8'
                                },
                                children: "Pick the closest goal — you can still edit the message before sending"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 671,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 669,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "ml-auto cursor-pointer w-8 h-8 rounded-lg flex items-center justify-center transition-all flex-shrink-0",
                        style: {
                            background: '#f1f5f9',
                            color: '#64748b'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 674,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 673,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 665,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 px-6 py-3 border-b flex items-center gap-1.5 flex-wrap",
                style: {
                    borderColor: '#e7e2da',
                    background: '#ffffff'
                },
                children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCat(c.id),
                        className: "flex items-center cursor-pointer gap-1.5 text-[10.5px] font-semibold px-3 py-1.5 rounded-full transition-all",
                        style: activeCat === c.id ? {
                            background: c.accent,
                            color: '#ffffff'
                        } : {
                            background: '#f1f5f9',
                            color: '#64748b'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {}, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 685,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            c.label
                        ]
                    }, c.id, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 680,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 678,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-6 py-5",
                style: {
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#e7e2da transparent'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3.5",
                    style: {
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
                    },
                    children: category.ideas.map((idea)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoalCard, {
                            idea: idea,
                            icon: category.icon,
                            accent: category.accent,
                            accentBg: category.accentBg,
                            onClick: ()=>onSelect(idea.prompt)
                        }, idea.label, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 693,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 691,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 690,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 664,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(GoalPickerModal, "oQIREWAnjPp5D0GwWaKF2M45po0=");
_c35 = GoalPickerModal;
const TOKEN_HINTS = [
    '{{Name}}',
    '{{City}}',
    '{{Campaign}}',
    '{{ContactNumber}}',
    '{{Email}}'
];
const CampaignGoalPicker = ({ onPick })=>{
    _s3();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCat, setActiveCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CAMPAIGN_GOAL_CATEGORIES[0].id);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignGoalPicker.useEffect": ()=>{
            if (!open) return;
            const onDocClick = {
                "CampaignGoalPicker.useEffect.onDocClick": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
                }
            }["CampaignGoalPicker.useEffect.onDocClick"];
            const onKey = {
                "CampaignGoalPicker.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') setOpen(false);
                }
            }["CampaignGoalPicker.useEffect.onKey"];
            document.addEventListener('mousedown', onDocClick);
            window.addEventListener('keydown', onKey);
            return ({
                "CampaignGoalPicker.useEffect": ()=>{
                    document.removeEventListener('mousedown', onDocClick);
                    window.removeEventListener('keydown', onKey);
                }
            })["CampaignGoalPicker.useEffect"];
        }
    }["CampaignGoalPicker.useEffect"], [
        open
    ]);
    const category = CAMPAIGN_GOAL_CATEGORIES.find((c)=>c.id === activeCat);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((v)=>!v),
                className: "flex items-center cursor-pointer gap-1.5 text-[9.5px] font-semibold px-2.5 py-1 rounded-lg border transition-all",
                style: open ? {
                    background: '#eef2ff',
                    borderColor: '#c7d2fe',
                    color: '#4338ca'
                } : {
                    background: '#f8fafc',
                    borderColor: '#e2e8f0',
                    color: '#64748b'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 728,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Not sure? Browse goals ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronIcon, {
                        open: open
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 728,
                        columnNumber: 56
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 723,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-20 top-full left-0 mt-2 rounded-2xl border overflow-hidden",
                style: {
                    width: 360,
                    background: '#ffffff',
                    borderColor: '#e2e8f0',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.12)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 flex-wrap px-3 pt-3 pb-2 border-b",
                        style: {
                            borderColor: '#f1f5f9'
                        },
                        children: CAMPAIGN_GOAL_CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCat(c.id),
                                className: "flex items-center cursor-pointer gap-1 text-[9.5px] font-semibold px-2 py-1 rounded-full transition-all",
                                style: activeCat === c.id ? {
                                    background: '#4f46e5',
                                    color: '#ffffff'
                                } : {
                                    background: '#f1f5f9',
                                    color: '#64748b'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {}, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 743,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    c.label
                                ]
                            }, c.id, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 738,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 736,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5 p-3 max-h-[220px] overflow-y-auto",
                        style: {
                            scrollbarWidth: 'thin'
                        },
                        children: category.ideas.map((idea)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onPick(idea.prompt);
                                    setOpen(false);
                                },
                                className: "text-left cursor-pointer px-3 py-2 rounded-xl border transition-all hover:border-indigo-300 hover:bg-indigo-50/40",
                                style: {
                                    borderColor: '#e2e8f0',
                                    background: '#f8fafc'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10.5px] font-semibold",
                                        style: {
                                            color: '#1e293b'
                                        },
                                        children: idea.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 755,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9.5px] mt-0.5 line-clamp-2 leading-relaxed",
                                        style: {
                                            color: '#94a3b8'
                                        },
                                        children: idea.prompt
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 756,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, idea.label, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 749,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 747,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 732,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 722,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(CampaignGoalPicker, "OMxF6CP7AhOQFMWHHF3JhyUBMHc=");
_c36 = CampaignGoalPicker;
const Avatar = ({ name, size = 'md' })=>{
    const initials = (name || '?').split(' ').map((w)=>w[0]).slice(0, 2).join('').toUpperCase();
    const colors = [
        [
            '#e0e7ff',
            '#4338ca'
        ],
        [
            '#fce7f3',
            '#db2777'
        ],
        [
            '#d1fae5',
            '#059669'
        ],
        [
            '#fff7ed',
            '#c2410c'
        ],
        [
            '#fef3c7',
            '#d97706'
        ],
        [
            '#ede9fe',
            '#7c3aed'
        ]
    ];
    const idx = (name?.charCodeAt(0) ?? 0) % colors.length;
    const [bg, fg] = colors[idx];
    const cls = size === 'sm' ? 'w-6 h-6 rounded-lg text-[9px]' : size === 'lg' ? 'w-12 h-12 rounded-2xl text-[15px]' : 'w-8 h-8 rounded-xl text-[11px]';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${cls} flex items-center justify-center font-bold flex-shrink-0`,
        style: {
            background: bg,
            color: fg
        },
        children: initials
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 776,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c37 = Avatar;
const SelectCheckbox = ({ checked, onChange, indeterminate = false, disabled = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "button",
        tabIndex: disabled ? -1 : 0,
        onClick: (e)=>{
            e.stopPropagation();
            if (!disabled) onChange();
        },
        onKeyDown: (e)=>{
            if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                onChange();
            }
        },
        className: "flex-shrink-0 w-[18px] h-[18px] rounded-[5px] flex items-center justify-center transition-all duration-150 select-none",
        style: {
            background: checked ? '#4f46e5' : indeterminate ? '#c7d2fe' : 'transparent',
            border: checked ? '2px solid #4f46e5' : indeterminate ? '2px solid #4f46e5' : '2px solid #cbd5e1',
            boxShadow: checked ? '0 1px 4px rgba(79,70,229,0.3)' : 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1
        },
        children: [
            checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 796,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
            !checked && indeterminate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2 h-0.5 rounded-full",
                style: {
                    background: '#4f46e5'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 797,
                columnNumber: 39
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 783,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c38 = SelectCheckbox;
const ToggleSwitch = ({ checked, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        role: "switch",
        "aria-checked": checked,
        onClick: onChange,
        className: "relative cursor-pointer inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full transition-colors duration-200",
        style: {
            background: checked ? '#ea580c' : '#cbd5e1'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200",
            style: {
                transform: checked ? 'translateX(18px)' : 'translateX(3px)'
            }
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 807,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 802,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c39 = ToggleSwitch;
const DetailRow = ({ icon, label, value })=>{
    if (!value || value === '—') return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-2.5 py-2 border-b last:border-0",
        style: {
            borderColor: '#f1f5f9'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5",
                style: {
                    background: '#f1f5f9',
                    color: '#64748b'
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 816,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9.5px] font-semibold uppercase tracking-wider mb-0.5",
                        style: {
                            color: '#94a3b8'
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 820,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11.5px] font-medium break-words",
                        style: {
                            color: '#334155'
                        },
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 821,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 819,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 815,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c40 = DetailRow;
const CustomerDetailDrawer = ({ customer, onClose })=>{
    const colors = [
        [
            '#e0e7ff',
            '#4338ca'
        ],
        [
            '#fce7f3',
            '#db2777'
        ],
        [
            '#d1fae5',
            '#059669'
        ],
        [
            '#fff7ed',
            '#c2410c'
        ],
        [
            '#fef3c7',
            '#d97706'
        ],
        [
            '#ede9fe',
            '#7c3aed'
        ]
    ];
    const idx = (customer.Name?.charCodeAt(0) ?? 0) % colors.length;
    const [heroBg] = colors[idx];
    const tags = [
        {
            label: customer.Campaign,
            bg: '#eef2ff',
            color: '#4338ca',
            border: '#c7d2fe'
        },
        {
            label: customer.Type,
            bg: '#f0fdf4',
            color: '#166534',
            border: '#bbf7d0'
        },
        {
            label: customer.SubType,
            bg: '#faf5ff',
            color: '#7c3aed',
            border: '#e9d5ff'
        },
        {
            label: customer.City,
            bg: '#fff7ed',
            color: '#c2410c',
            border: '#fed7aa'
        }
    ].filter((t)=>t.label);
    const extraFields = customer.CustomerFields ? Object.entries(customer.CustomerFields).filter(([, v])=>v && String(v).trim()) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute cursor-pointer inset-0 z-20",
                style: {
                    background: 'rgba(15,23,42,0.25)',
                    backdropFilter: 'blur(2px)'
                },
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 846,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 bottom-0 z-30 flex flex-col overflow-hidden",
                style: {
                    width: '320px',
                    background: '#ffffff',
                    borderLeft: '1px solid #e2e8f0',
                    boxShadow: '-8px 0 32px rgba(0,0,0,0.08)',
                    animation: 'ec-drawer-in 0.22s cubic-bezier(0.4,0,0.2,1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 px-5 pt-5 pb-4 relative",
                        style: {
                            background: `linear-gradient(135deg, ${heroBg} 0%, #ffffff 100%)`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "absolute cursor-pointer top-4 right-4 w-7 h-7 rounded-lg flex items-center justify-center transition-all",
                                style: {
                                    background: 'rgba(0,0,0,0.06)',
                                    color: '#64748b'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 851,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 850,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                        name: customer.Name,
                                        size: "lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 854,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0 pr-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] font-bold leading-tight truncate",
                                                style: {
                                                    color: '#0f172a'
                                                },
                                                children: customer.Name || '—'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 856,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            customer.CustomerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-mono mt-0.5",
                                                style: {
                                                    color: '#94a3b8'
                                                },
                                                children: [
                                                    "ID: ",
                                                    customer.CustomerId
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 857,
                                                columnNumber: 53
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 855,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 853,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 flex-wrap",
                                children: tags.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9.5px] font-semibold px-2 py-0.5 rounded-lg border",
                                        style: {
                                            background: t.bg,
                                            color: t.color,
                                            borderColor: t.border
                                        },
                                        children: t.label
                                    }, i, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 863,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 861,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 849,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-px flex-shrink-0",
                        style: {
                            background: '#e2e8f0'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 870,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-5 py-4",
                        style: {
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#e2e8f0 transparent'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9.5px] font-bold uppercase tracking-widest mb-2",
                                style: {
                                    color: '#cbd5e1'
                                },
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 872,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 874,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Phone",
                                        value: customer.ContactNumber
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 874,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MailIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 875,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Email",
                                        value: customer.Email
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 875,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPinIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 876,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "City",
                                        value: customer.City
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 876,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPinIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 877,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Location",
                                        value: customer.Location
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 877,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPinIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 878,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Address",
                                        value: customer.Adderess
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 878,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPinIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 879,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Area",
                                        value: customer.Area
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 879,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPinIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 880,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Sub-Location",
                                        value: customer.SubLocation
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 880,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 873,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9.5px] font-bold uppercase tracking-widest mb-2",
                                style: {
                                    color: '#cbd5e1'
                                },
                                children: "Details"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 882,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 884,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Campaign",
                                        value: customer.Campaign
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 884,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 885,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Type",
                                        value: customer.Type
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 885,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 886,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Sub-Type",
                                        value: customer.SubType
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 886,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 887,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Date",
                                        value: customer.Date
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 887,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 888,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Year",
                                        value: customer.CustomerYear
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 888,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 889,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Price",
                                        value: customer.Price
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 889,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 890,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Facilities",
                                        value: customer.Facillities
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 890,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 891,
                                            columnNumber: 42
                                        }, void 0),
                                        label: "Reference ID",
                                        value: customer.ReferenceId
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 891,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 883,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            customer.Description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9.5px] font-bold uppercase tracking-widest mb-2",
                                        style: {
                                            color: '#cbd5e1'
                                        },
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 895,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 px-3 py-2.5 rounded-xl border",
                                        style: {
                                            background: '#f8fafc',
                                            borderColor: '#e2e8f0'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11.5px] leading-relaxed",
                                            style: {
                                                color: '#475569'
                                            },
                                            children: customer.Description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 897,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 896,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true),
                            (customer.URL || customer.GoogleMap || customer.Video) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9.5px] font-bold uppercase tracking-widest mb-2",
                                        style: {
                                            color: '#cbd5e1'
                                        },
                                        children: "Links"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 903,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 mb-4",
                                        children: [
                                            customer.URL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: customer.URL,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-medium",
                                                style: {
                                                    background: '#f8fafc',
                                                    borderColor: '#e2e8f0',
                                                    color: '#4f46e5'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 907,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Website"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 906,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            customer.GoogleMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: customer.GoogleMap,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-medium",
                                                style: {
                                                    background: '#f8fafc',
                                                    borderColor: '#e2e8f0',
                                                    color: '#059669'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPinIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 912,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Google Maps"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 911,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            customer.Video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: customer.Video,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-medium",
                                                style: {
                                                    background: '#f8fafc',
                                                    borderColor: '#e2e8f0',
                                                    color: '#dc2626'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 917,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Video"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 916,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 904,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true),
                            customer.AssignTo?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9.5px] font-bold uppercase tracking-widest mb-2",
                                        style: {
                                            color: '#cbd5e1'
                                        },
                                        children: "Assigned To"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 925,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5 mb-4",
                                        children: customer.AssignTo.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10.5px] font-medium px-2.5 py-1 rounded-lg border",
                                                style: {
                                                    background: '#f8fafc',
                                                    borderColor: '#e2e8f0',
                                                    color: '#475569'
                                                },
                                                children: typeof a === 'string' ? a : a.name || a.Name || JSON.stringify(a)
                                            }, i, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 928,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 926,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true),
                            extraFields.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9.5px] font-bold uppercase tracking-widest mb-2",
                                        style: {
                                            color: '#cbd5e1'
                                        },
                                        children: "Additional Fields"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 937,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border overflow-hidden mb-4",
                                        style: {
                                            borderColor: '#e2e8f0'
                                        },
                                        children: extraFields.map(([key, val], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2 px-3 py-2 border-b last:border-0",
                                                style: {
                                                    borderColor: '#f1f5f9',
                                                    background: i % 2 === 0 ? '#f8fafc' : '#ffffff'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-semibold flex-shrink-0 w-24 truncate capitalize",
                                                        style: {
                                                            color: '#64748b'
                                                        },
                                                        children: String(key).replace(/_/g, ' ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 941,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10.5px] flex-1 break-words",
                                                        style: {
                                                            color: '#334155'
                                                        },
                                                        children: String(val)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 942,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 940,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 938,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 871,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 847,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c41 = CustomerDetailDrawer;
const CustomerRow = ({ c, isSelected, onToggle, onView, disabled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: ()=>!disabled && onToggle(c._id),
        className: "w-full text-left px-4 py-3 transition-all duration-150 border-b group",
        style: {
            borderColor: '#f1f5f9',
            background: isSelected ? 'rgba(79,70,229,0.05)' : 'transparent',
            borderLeft: isSelected ? '2px solid #4f46e5' : '2px solid transparent',
            cursor: disabled ? 'default' : 'pointer',
            opacity: disabled ? 0.55 : 1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-2.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectCheckbox, {
                        checked: isSelected,
                        onChange: ()=>onToggle(c._id),
                        disabled: disabled
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 962,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 961,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                    name: c.Name
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 964,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] font-semibold truncate",
                                    style: {
                                        color: isSelected ? '#4338ca' : '#1e293b'
                                    },
                                    children: c.Name || '—'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 967,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                !c.Email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8.5px] font-bold px-1.5 py-0.5 rounded-md flex-shrink-0",
                                    style: {
                                        background: '#fef2f2',
                                        color: '#b91c1c'
                                    },
                                    children: "no email"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 969,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 966,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10.5px] truncate mt-0.5",
                            style: {
                                color: '#94a3b8'
                            },
                            children: c.Email || c.ContactNumber || '—'
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 972,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 mt-1.5 flex-wrap",
                            children: [
                                c.Campaign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-medium px-1.5 py-0.5 rounded-md",
                                    style: {
                                        background: '#eef2ff',
                                        color: '#4338ca'
                                    },
                                    children: c.Campaign
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 974,
                                    columnNumber: 36
                                }, ("TURBOPACK compile-time value", void 0)),
                                c.Type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-medium px-1.5 py-0.5 rounded-md",
                                    style: {
                                        background: '#fff7ed',
                                        color: '#c2410c'
                                    },
                                    children: c.Type
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 975,
                                    columnNumber: 32
                                }, ("TURBOPACK compile-time value", void 0)),
                                c.City && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-medium px-1.5 py-0.5 rounded-md",
                                    style: {
                                        background: '#f0fdf4',
                                        color: '#166534'
                                    },
                                    children: c.City
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 976,
                                    columnNumber: 32
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 973,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 965,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        onView(c);
                    },
                    className: "flex-shrink-0 cursor-pointer flex items-center justify-center w-6 h-6 rounded-lg border opacity-0 group-hover:opacity-100 transition-all duration-150",
                    style: {
                        background: '#ffffff',
                        borderColor: '#e2e8f0',
                        color: '#94a3b8'
                    },
                    title: "View details",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeIcon, {}, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 985,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 979,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 960,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 955,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c42 = CustomerRow;
const ResultRow = ({ r, customerLookup, onView })=>{
    const cfg = getResultStatusCfg(r.status);
    const full = customerLookup(r.id);
    const displayName = full?.Name || r.name || r.email || 'Unknown';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2.5 px-3 py-2 rounded-xl border",
        style: {
            background: '#f8fafc',
            borderColor: '#e2e8f0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                name: displayName,
                size: "sm"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 997,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-semibold truncate",
                        style: {
                            color: '#1e293b'
                        },
                        children: displayName
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 999,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9.5px] truncate",
                        style: {
                            color: '#94a3b8'
                        },
                        children: [
                            r.email || full?.Email || '—',
                            r.status === 'failed' && r.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#dc2626'
                                },
                                children: [
                                    " · ",
                                    r.error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1002,
                                columnNumber: 57
                            }, ("TURBOPACK compile-time value", void 0)) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 1000,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 998,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[8.5px] font-bold px-1.5 py-0.5 rounded-md border flex items-center gap-1 flex-shrink-0",
                style: {
                    background: cfg.bg,
                    color: cfg.color,
                    borderColor: cfg.border
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-1 h-1 rounded-full inline-block",
                        style: {
                            background: cfg.dot
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 1006,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    cfg.label
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 1005,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onView(full || {
                        Name: displayName,
                        Email: r.email,
                        CustomerId: r.id
                    }),
                className: "flex-shrink-0 cursor-pointer flex items-center justify-center w-6 h-6 rounded-lg border",
                style: {
                    background: '#ffffff',
                    borderColor: '#e2e8f0',
                    color: '#94a3b8'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeIcon, {}, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 1014,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 1009,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 996,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c43 = ResultRow;
const MODE_LABELS = {
    ai: 'AI-generated campaign',
    existing: 'Saved template campaign',
    manual: 'Manual template campaign'
};
const getRunLabel = (run)=>{
    if (run.mode === 'existing' && run.aiRefine) return 'AI-refined saved template campaign';
    return MODE_LABELS[run.mode] || 'Campaign';
};
const RunCard = ({ run, expanded, onToggleExpand, visibleCount, onLoadMore, customerLookup, onView })=>{
    const headerTone = run.sentCount > 0 ? {
        bg: '#f0fdf4',
        color: '#166534'
    } : {
        bg: '#fef2f2',
        color: '#b91c1c'
    };
    const results = run.results || [];
    const slice = results.slice(0, visibleCount);
    const hasMore = visibleCount < results.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border overflow-hidden",
        style: {
            borderColor: '#e2e8f0',
            background: '#ffffff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            animation: 'ec-run-in 0.2s ease'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pt-3.5 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0",
                                style: {
                                    background: headerTone.bg,
                                    color: headerTone.color
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnvelopeIcon, {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 1039,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1038,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11.5px] font-semibold",
                                                style: {
                                                    color: '#0f172a'
                                                },
                                                children: getRunLabel(run)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1043,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-semibold px-1.5 py-0.5 rounded-md",
                                                style: {
                                                    background: '#f1f5f9',
                                                    color: '#64748b'
                                                },
                                                children: run.language
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1044,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            run.templateName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-semibold px-1.5 py-0.5 rounded-md",
                                                style: {
                                                    background: '#f0fdfa',
                                                    color: '#0f766e'
                                                },
                                                children: run.templateName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1046,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9.5px]",
                                                style: {
                                                    color: '#cbd5e1'
                                                },
                                                children: run.timestamp?.toLocaleString?.(undefined, {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1048,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1042,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    run.promptEcho && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] italic mt-1 line-clamp-2",
                                        style: {
                                            color: '#64748b'
                                        },
                                        children: [
                                            '"',
                                            run.promptEcho,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1050,
                                        columnNumber: 44
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    (run.mode === 'ai' || run.mode === 'existing' && run.aiRefine) && run.workSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 rounded-lg border px-3 py-2.5",
                                        style: {
                                            background: '#f8fafc',
                                            borderColor: '#e2e8f0'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1",
                                                style: {
                                                    color: '#94a3b8'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1054,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " AI strategy used for this campaign"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1053,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10.5px] leading-relaxed whitespace-pre-line",
                                                style: {
                                                    color: '#475569'
                                                },
                                                children: run.workSummary
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1056,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            run.metadata?.tone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9.5px] mt-1.5",
                                                style: {
                                                    color: '#94a3b8'
                                                },
                                                children: [
                                                    "Tone: ",
                                                    run.metadata.tone,
                                                    run.metadata.category ? ` · ${run.metadata.category}` : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1058,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1052,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1041,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 1037,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 flex-wrap mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg border",
                                style: {
                                    background: '#f0fdf4',
                                    color: '#166534',
                                    borderColor: '#bbf7d0'
                                },
                                children: [
                                    run.sentCount,
                                    " sent"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1068,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            run.failedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg border",
                                style: {
                                    background: '#fef2f2',
                                    color: '#b91c1c',
                                    borderColor: '#fecaca'
                                },
                                children: [
                                    run.failedCount,
                                    " failed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1069,
                                columnNumber: 45
                            }, ("TURBOPACK compile-time value", void 0)),
                            run.skippedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg border",
                                style: {
                                    background: '#f8fafc',
                                    color: '#64748b',
                                    borderColor: '#e2e8f0'
                                },
                                children: [
                                    run.skippedCount,
                                    " skipped"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1070,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono px-2 py-0.5 rounded-lg",
                                style: {
                                    color: '#cbd5e1'
                                },
                                children: [
                                    "/ ",
                                    run.targetCount,
                                    " targeted"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1071,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggleExpand,
                                className: "ml-auto cursor-pointer flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-lg",
                                style: {
                                    color: '#4f46e5'
                                },
                                children: [
                                    expanded ? 'Hide details' : 'View details',
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronIcon, {
                                        open: expanded
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1074,
                                        columnNumber: 74
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1073,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 1067,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 1036,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            expanded && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pb-4 flex flex-col gap-1.5 border-t pt-3",
                style: {
                    borderColor: '#f1f5f9'
                },
                children: [
                    slice.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultRow, {
                            r: r,
                            customerLookup: customerLookup,
                            onView: onView
                        }, r.id || r.email || i, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 1081,
                            columnNumber: 55
                        }, ("TURBOPACK compile-time value", void 0))),
                    hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLoadMore,
                        className: "w-full py-2 cursor-pointer text-[11px] font-medium rounded-xl border border-dashed transition-colors",
                        style: {
                            borderColor: '#e2e8f0',
                            color: '#94a3b8',
                            background: 'transparent'
                        },
                        children: [
                            "Load ",
                            Math.min(RESULT_PAGE_SIZE, results.length - visibleCount),
                            " more ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#cbd5e1'
                                },
                                children: [
                                    " (",
                                    results.length - visibleCount,
                                    " remaining)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1084,
                                columnNumber: 99
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 1083,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 1080,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 1035,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c44 = RunCard;
const ConfirmSendModal = ({ open, targetCount, mode, language, promptEcho, subject, templateName, aiRefine, isSending, error, onCancel, onConfirm })=>{
    if (!open) return null;
    const isAiDriven = mode === 'ai' || mode === 'existing' && aiRefine;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-40 flex items-center justify-center px-6",
        style: {
            background: 'rgba(15,23,42,0.4)',
            backdropFilter: 'blur(2px)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[400px] rounded-2xl overflow-hidden relative",
            style: {
                background: '#ffffff',
                boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
                animation: 'ec-modal-in 0.18s cubic-bezier(0.34,1.56,0.64,1)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StampMark, {
                    className: "absolute -top-3 -right-3 w-20 h-20 opacity-[0.35] pointer-events-none",
                    color: "#fed7aa"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 1114,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-5 pt-5 pb-4 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-9 h-9 rounded-xl flex items-center justify-center mb-3",
                            style: {
                                background: '#fff7ed',
                                color: '#ea580c'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertIcon, {}, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1116,
                                columnNumber: 147
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 1116,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[14px] font-bold",
                            style: {
                                color: '#0f172a'
                            },
                            children: "Send this campaign?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 1117,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11.5px] mt-1.5 leading-relaxed",
                            style: {
                                color: '#64748b'
                            },
                            children: [
                                "This sends ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    style: {
                                        color: '#0f172a'
                                    },
                                    children: targetCount
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 1119,
                                    columnNumber: 36
                                }, ("TURBOPACK compile-time value", void 0)),
                                " email",
                                targetCount !== 1 ? 's' : '',
                                " right now — one to each targeted customer. This can't be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 1118,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 px-3 py-2.5 rounded-xl border",
                            style: {
                                background: '#f8fafc',
                                borderColor: '#e2e8f0'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[9.5px] font-semibold uppercase tracking-wider",
                                    style: {
                                        color: '#94a3b8'
                                    },
                                    children: isAiDriven ? `AI draft · ${language}` : mode === 'existing' ? templateName || 'Saved template' : 'Manual template'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 1123,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] mt-1 leading-relaxed line-clamp-3",
                                    style: {
                                        color: '#334155'
                                    },
                                    children: isAiDriven ? `"${promptEcho}"` : subject || '(no subject)'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 1126,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                isAiDriven && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] mt-1.5",
                                    style: {
                                        color: '#94a3b8'
                                    },
                                    children: "Written once for the whole batch, then personalized per customer — name, city, and other saved details are swapped in automatically."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 1130,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                mode === 'existing' && !aiRefine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] mt-1.5",
                                    style: {
                                        color: '#94a3b8'
                                    },
                                    children: "Sent exactly as saved — no AI involved, only tokens like name and city are personalized."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 1135,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                isAiDriven && templateName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] mt-1.5 flex items-center gap-1",
                                    style: {
                                        color: '#0f766e'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 1141,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        ' Using "',
                                        templateName,
                                        '" as the base layout'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 1140,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 1122,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] mt-3 px-3 py-2 rounded-lg",
                            style: {
                                background: '#fef2f2',
                                color: '#b91c1c'
                            },
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 1146,
                            columnNumber: 31
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 1115,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 px-5 py-3.5 border-t",
                    style: {
                        borderColor: '#f1f5f9',
                        background: '#f8fafc'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            disabled: isSending,
                            className: "flex-1 cursor-pointer py-2.5 rounded-xl text-[12px] font-semibold transition-all disabled:opacity-50",
                            style: {
                                background: '#ffffff',
                                color: '#64748b',
                                border: '1px solid #e2e8f0'
                            },
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 1149,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onConfirm,
                            disabled: isSending,
                            className: "flex-1 cursor-pointer py-2.5 rounded-xl text-[12px] font-bold transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-1.5",
                            style: {
                                background: '#ea580c',
                                color: '#ffffff',
                                boxShadow: '0 3px 10px rgba(234,88,12,0.35)'
                            },
                            children: [
                                isSending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent",
                                    style: {
                                        animation: 'ec-spin 0.8s linear infinite'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 1151,
                                    columnNumber: 38
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnvelopeIcon, {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 1151,
                                    columnNumber: 182
                                }, ("TURBOPACK compile-time value", void 0)),
                                isSending ? 'Sending…' : 'Confirm & Send'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                            lineNumber: 1150,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                    lineNumber: 1148,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
            lineNumber: 1113,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 1112,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c45 = ConfirmSendModal;
/* ─────────────────────────────────────────────── */ const EmailCampaignAgentWorkspace = ({ isOpen })=>{
    _s4();
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCustomersLoading, setIsCustomersLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchField, setSearchField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(PAGE_SIZE);
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [sendToAll, setSendToAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [composerTab, setComposerTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ai');
    const [userPrompt, setUserPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('english');
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Template selection — shared across both AI and Manual composer modes.
    const [selectedTemplateId, setSelectedTemplateId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPreviewMode, setIsPreviewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPickerOpen, setIsPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Saved DB templates (your real Template model) — used by the "Saved
    // Template" tab, sent via templateId, zero AI cost.
    const [dbTemplates, setDbTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDbTemplatesLoading, setIsDbTemplatesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dbTemplatesFetched, setDbTemplatesFetched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDbTemplateId, setSelectedDbTemplateId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSavedPickerOpen, setIsSavedPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sendError, setSendError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [runs, setRuns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [runExpandedMap, setRunExpandedMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [runVisibleMap, setRunVisibleMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [viewingCustomer, setViewingCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EmailCampaignAgentWorkspace.useMemo[selectedTemplate]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$emailTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEmailTemplateById"])(selectedTemplateId)
    }["EmailCampaignAgentWorkspace.useMemo[selectedTemplate]"], [
        selectedTemplateId
    ]);
    const [isGoalPickerOpen, setIsGoalPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiRefineExisting, setAiRefineExisting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mapCustomer = (item)=>{
        const date = new Date(item.createdAt);
        const formattedDate = date.getDate().toString().padStart(2, '0') + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getFullYear();
        return {
            _id: item._id,
            Campaign: item.Campaign,
            Type: item.CustomerType,
            SubType: item.CustomerSubType,
            Name: item.customerName,
            Description: item.Description,
            Email: item.Email,
            City: item.City,
            Location: item.Location,
            Adderess: item.Adderess,
            Area: item.Area,
            SubLocation: item.SubLocation,
            CustomerId: item.CustomerId,
            ClientId: item.ClientId,
            CustomerYear: item.CustomerYear,
            Facillities: item.Facillities,
            ContactNumber: item.ContactNumber?.slice(0, 10),
            ReferenceId: item.ReferenceId,
            AssignTo: item.AssignTo ?? [],
            Date: item.CustomerDate === 'N/A' ? 'N/A' : item.CustomerDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$formatDateDMY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateDMY"])(item.CustomerDate) : formattedDate,
            URL: item.URL || '',
            Video: item.Video || '',
            GoogleMap: item.GoogleMap || '',
            Price: item.Price || '',
            CustomerFields: item.CustomerFields || {}
        };
    };
    const fetchCustomers = async ()=>{
        setIsCustomersLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomer"])();
            if (res) setCustomers(res.map(mapCustomer));
        } catch (err) {
            console.error(err);
        } finally{
            setIsCustomersLoading(false);
        }
    };
    // This CRM Template list is shared with WhatsApp — filter to email-only.
    // NOTE: getMail() hits GET_ALL with no query params; if that route paginates
    // server-side with a default limit, you may only get the first page back —
    // worth checking the endpoint if templates seem to be missing here.
    const emailDbTemplates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EmailCampaignAgentWorkspace.useMemo[emailDbTemplates]": ()=>dbTemplates.filter({
                "EmailCampaignAgentWorkspace.useMemo[emailDbTemplates]": (t)=>String(t.type || '').toLowerCase() === 'email'
            }["EmailCampaignAgentWorkspace.useMemo[emailDbTemplates]"])
    }["EmailCampaignAgentWorkspace.useMemo[emailDbTemplates]"], [
        dbTemplates
    ]);
    const selectedDbTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EmailCampaignAgentWorkspace.useMemo[selectedDbTemplate]": ()=>emailDbTemplates.find({
                "EmailCampaignAgentWorkspace.useMemo[selectedDbTemplate]": (t)=>t._id === selectedDbTemplateId
            }["EmailCampaignAgentWorkspace.useMemo[selectedDbTemplate]"]) || null
    }["EmailCampaignAgentWorkspace.useMemo[selectedDbTemplate]"], [
        emailDbTemplates,
        selectedDbTemplateId
    ]);
    const savedTemplateHasAiSlot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EmailCampaignAgentWorkspace.useMemo[savedTemplateHasAiSlot]": ()=>selectedDbTemplate?.body?.includes('{{AI_CONTENT}}') ?? false
    }["EmailCampaignAgentWorkspace.useMemo[savedTemplateHasAiSlot]"], [
        selectedDbTemplate
    ]);
    const fetchDbTemplates = async ()=>{
        setIsDbTemplatesLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMail"])();
            if (res) setDbTemplates(res);
        } catch (err) {
            console.error(err);
        } finally{
            setIsDbTemplatesLoading(false);
            setDbTemplatesFetched(true);
        }
    };
    // Lazy-load: only fetch once the user actually opens the Saved Template tab.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailCampaignAgentWorkspace.useEffect": ()=>{
            if (composerTab === 'existing' && !dbTemplatesFetched) fetchDbTemplates();
        }
    }["EmailCampaignAgentWorkspace.useEffect"], [
        composerTab,
        dbTemplatesFetched
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailCampaignAgentWorkspace.useEffect": ()=>{
            if (!selectedDbTemplateId) setAiRefineExisting(false);
        }
    }["EmailCampaignAgentWorkspace.useEffect"], [
        selectedDbTemplateId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailCampaignAgentWorkspace.useEffect": ()=>{
            fetchCustomers();
        }
    }["EmailCampaignAgentWorkspace.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailCampaignAgentWorkspace.useEffect": ()=>{
            setVisibleCount(PAGE_SIZE);
        }
    }["EmailCampaignAgentWorkspace.useEffect"], [
        searchQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailCampaignAgentWorkspace.useEffect": ()=>{
            if (!toast) return;
            const t = setTimeout({
                "EmailCampaignAgentWorkspace.useEffect.t": ()=>setToast(null)
            }["EmailCampaignAgentWorkspace.useEffect.t"], 3500);
            return ({
                "EmailCampaignAgentWorkspace.useEffect": ()=>clearTimeout(t)
            })["EmailCampaignAgentWorkspace.useEffect"];
        }
    }["EmailCampaignAgentWorkspace.useEffect"], [
        toast
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailCampaignAgentWorkspace.useEffect": ()=>{
            const onKey = {
                "EmailCampaignAgentWorkspace.useEffect.onKey": (e)=>{
                    if (e.key !== 'Escape') return;
                    if (isPickerOpen) setIsPickerOpen(false);
                    else if (viewingCustomer) setViewingCustomer(null);
                    else if (showConfirm && !isSending) setShowConfirm(false);
                }
            }["EmailCampaignAgentWorkspace.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "EmailCampaignAgentWorkspace.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["EmailCampaignAgentWorkspace.useEffect"];
        }
    }["EmailCampaignAgentWorkspace.useEffect"], [
        viewingCustomer,
        showConfirm,
        isSending,
        isPickerOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailCampaignAgentWorkspace.useEffect": ()=>{
            const onKey = {
                "EmailCampaignAgentWorkspace.useEffect.onKey": (e)=>{
                    if (e.key !== 'Escape') return;
                    if (isPickerOpen) setIsPickerOpen(false);
                    else if (isGoalPickerOpen) setIsGoalPickerOpen(false);
                    else if (viewingCustomer) setViewingCustomer(null);
                    else if (showConfirm && !isSending) setShowConfirm(false);
                }
            }["EmailCampaignAgentWorkspace.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "EmailCampaignAgentWorkspace.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["EmailCampaignAgentWorkspace.useEffect"];
        }
    }["EmailCampaignAgentWorkspace.useEffect"], [
        viewingCustomer,
        showConfirm,
        isSending,
        isPickerOpen,
        isGoalPickerOpen
    ]);
    const SEARCH_FIELDS = [
        'All',
        'Name',
        'Email',
        'Campaign',
        'Type',
        'Phone'
    ];
    const filteredCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EmailCampaignAgentWorkspace.useMemo[filteredCustomers]": ()=>{
            if (!searchQuery.trim()) return customers;
            const q = searchQuery.toLowerCase();
            return customers.filter({
                "EmailCampaignAgentWorkspace.useMemo[filteredCustomers]": (c)=>{
                    if (searchField === 'All') {
                        return c.Name?.toLowerCase().includes(q) || c.Email?.toLowerCase().includes(q) || c.Campaign?.toLowerCase().includes(q) || c.Type?.toLowerCase().includes(q) || c.ContactNumber?.includes(q);
                    }
                    const fieldMap = {
                        Name: c.Name,
                        Email: c.Email,
                        Campaign: c.Campaign,
                        Type: c.Type,
                        Phone: c.ContactNumber
                    };
                    return fieldMap[searchField]?.toLowerCase().includes(q);
                }
            }["EmailCampaignAgentWorkspace.useMemo[filteredCustomers]"]);
        }
    }["EmailCampaignAgentWorkspace.useMemo[filteredCustomers]"], [
        customers,
        searchQuery,
        searchField
    ]);
    const visibleCustomers = filteredCustomers.slice(0, visibleCount);
    const hasMore = visibleCount < filteredCustomers.length;
    const remaining = filteredCustomers.length - visibleCount;
    const toggleSelect = (id)=>{
        setSelectedIds((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };
    const allFilteredSelected = filteredCustomers.length > 0 && filteredCustomers.every((c)=>selectedIds.has(c._id));
    const someFilteredSelected = filteredCustomers.some((c)=>selectedIds.has(c._id)) && !allFilteredSelected;
    const toggleSelectAllFiltered = ()=>{
        setSelectedIds((prev)=>{
            const next = new Set(prev);
            if (allFilteredSelected) filteredCustomers.forEach((c)=>next.delete(c._id));
            else filteredCustomers.forEach((c)=>next.add(c._id));
            return next;
        });
    };
    const customerLookup = (id)=>customers.find((c)=>c._id === id);
    const hasTargets = sendToAll || selectedIds.size > 0;
    const hasContent = composerTab === 'ai' ? userPrompt.trim().length > 0 : composerTab === 'manual' ? subject.trim().length > 0 && body.trim().length > 0 : aiRefineExisting ? !!selectedDbTemplateId && userPrompt.trim().length > 0 : !!selectedDbTemplateId;
    const canSend = hasTargets && hasContent && !isSending;
    const targetCount = sendToAll ? customers.length : selectedIds.size;
    const insertToken = (field, token)=>{
        if (field === 'subject') setSubject((s)=>(s ? s + ' ' : '') + token);
        else setBody((b)=>(b ? b + ' ' : '') + token);
    };
    // Selecting a template from the picker: always records the selection so
    // both composer tabs can reference it. Only the Manual tab's body/preview
    // gets auto-filled, since the AI tab keeps writing its own copy — it just
    // uses the template as a visual base.
    const handleSelectTemplate = (id)=>{
        setSelectedTemplateId(id);
        if (id && composerTab === 'manual') {
            const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$emailTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEmailTemplateById"])(id);
            if (t) {
                setBody(t.html);
                setIsPreviewMode(true);
            }
        }
    };
    const getPromptEcho = ()=>{
        switch(composerTab){
            case 'ai':
                return userPrompt.trim();
            case 'manual':
                return subject.trim();
            case 'existing':
                return aiRefineExisting ? userPrompt.trim() : selectedDbTemplate?.subject || '';
        }
    };
    const getTemplateName = ()=>{
        switch(composerTab){
            case 'existing':
                return selectedDbTemplate?.name || null;
            case 'ai':
                return selectedTemplate?.name || null;
            case 'manual':
                return null;
        }
    };
    const handleSend = async ()=>{
        if (isSending) return;
        setSendError(null);
        setIsSending(true);
        try {
            const payload = {
                customerIds: sendToAll ? [] : Array.from(selectedIds),
                sendToAll,
                mode: language
            };
            if (composerTab === 'ai') {
                payload.userPrompt = userPrompt.trim();
                if (selectedTemplate) payload.templateHtml = selectedTemplate.html;
            } else if (composerTab === 'manual') {
                payload.Subject = subject.trim();
                payload.Body = body.trim();
            } else {
                payload.templateId = selectedDbTemplateId;
                if (aiRefineExisting) {
                    payload.userPrompt = userPrompt.trim();
                }
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailCustomerViaAi"])(payload);
            if (!res || res.success === false) {
                setSendError('Something went wrong while sending the campaign. Please try again.');
                setIsSending(false);
                return;
            }
            const results = res.results || [];
            const sentCount = typeof res.sent === 'number' ? res.sent : results.filter((r)=>r.status === 'sent').length;
            const failedCount = results.filter((r)=>r.status === 'failed').length;
            const skippedCount = results.length - sentCount - failedCount;
            const runId = `run_${Date.now()}`;
            const run = {
                id: runId,
                mode: composerTab,
                language,
                aiRefine: composerTab === 'existing' ? aiRefineExisting : false,
                promptEcho: getPromptEcho(),
                templateName: getTemplateName(),
                targetCount,
                sentCount,
                failedCount,
                skippedCount: Math.max(0, skippedCount),
                results,
                metadata: res.metadata || null,
                workSummary: res.workSummary || null,
                timestamp: new Date()
            };
            setRuns((prev)=>[
                    run,
                    ...prev
                ]);
            setRunExpandedMap((prev)=>({
                    ...prev,
                    [runId]: results.length > 0 && results.length <= 5
                }));
            setRunVisibleMap((prev)=>({
                    ...prev,
                    [runId]: RESULT_PAGE_SIZE
                }));
            setToast({
                type: 'success',
                text: `Campaign sent — ${sentCount} delivered${failedCount ? `, ${failedCount} failed` : ''}.`
            });
            setUserPrompt('');
            setSubject('');
            setBody('');
            setSelectedTemplateId(null);
            setSelectedDbTemplateId(null);
            setAiRefineExisting(false);
            setShowConfirm(false);
        } catch (err) {
            console.error(err);
            setSendError('Something went wrong while sending the campaign. Please try again.');
        } finally{
            setIsSending(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full overflow-hidden rounded-xl relative",
        style: {
            background: '#f8fafc'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col border-r",
                style: {
                    width: '288px',
                    minWidth: '288px',
                    borderColor: '#e2e8f0',
                    background: '#ffffff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pt-4 pb-3 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 rounded-lg flex items-center justify-center",
                                        style: {
                                            background: 'rgba(79,70,229,0.1)',
                                            color: '#4f46e5'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 1450,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1449,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-semibold tracking-wide uppercase",
                                        style: {
                                            color: '#64748b'
                                        },
                                        children: "Customers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1452,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded-md",
                                        style: {
                                            background: '#f1f5f9',
                                            color: '#94a3b8'
                                        },
                                        children: filteredCustomers.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1453,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1448,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-2.5 top-1/2 -translate-y-1/2",
                                        style: {
                                            color: '#94a3b8'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 1458,
                                            columnNumber: 114
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1458,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search customers…",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full pl-8 pr-7 py-2 rounded-xl text-[11.5px] outline-none border transition-all duration-150 bg-stone-50 border-slate-200 text-slate-700 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 focus:bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1459,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSearchQuery(''),
                                        className: "absolute cursor-pointer right-2.5 top-1/2 -translate-y-1/2",
                                        style: {
                                            color: '#cbd5e1'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClearIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 1465,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1464,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1457,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 flex-wrap mb-3",
                                children: SEARCH_FIELDS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSearchField(f),
                                        className: "text-[9.5px] cursor-pointer font-semibold px-2 py-0.5 rounded-full transition-all duration-150",
                                        style: searchField === f ? {
                                            background: '#4f46e5',
                                            color: '#ffffff'
                                        } : {
                                            background: '#f1f5f9',
                                            color: '#94a3b8'
                                        },
                                        children: f
                                    }, f, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1471,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1469,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 py-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectCheckbox, {
                                        checked: allFilteredSelected,
                                        indeterminate: someFilteredSelected,
                                        onChange: toggleSelectAllFiltered,
                                        disabled: sendToAll || filteredCustomers.length === 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1480,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleSelectAllFiltered,
                                        disabled: sendToAll || filteredCustomers.length === 0,
                                        className: "text-[10.5px] cursor-pointer font-semibold",
                                        style: {
                                            color: sendToAll ? '#cbd5e1' : '#475569'
                                        },
                                        children: allFilteredSelected ? 'Deselect all' : 'Select all'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1481,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    selectedIds.size > 0 && !sendToAll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto text-[10px] font-bold font-mono px-1.5 py-0.5 rounded-md",
                                        style: {
                                            background: '#eef2ff',
                                            color: '#4338ca'
                                        },
                                        children: [
                                            selectedIds.size,
                                            " selected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1485,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1479,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 mt-1.5 px-3 py-2.5 rounded-xl border",
                                style: {
                                    background: sendToAll ? '#fff7ed' : '#f8fafc',
                                    borderColor: sendToAll ? '#fed7aa' : '#e2e8f0'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold",
                                                style: {
                                                    color: sendToAll ? '#c2410c' : '#334155'
                                                },
                                                children: "Send to everyone"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1493,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9.5px] mt-0.5",
                                                style: {
                                                    color: '#94a3b8'
                                                },
                                                children: [
                                                    "Ignores selection, targets all ",
                                                    customers.length,
                                                    " customers"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1494,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1492,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                                        checked: sendToAll,
                                        onChange: ()=>setSendToAll((v)=>!v)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1496,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1491,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 1447,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        style: {
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#e2e8f0 transparent'
                        },
                        children: [
                            isCustomersLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 px-4 py-4",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-pulse flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-xl bg-gray-200"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1505,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2.5 bg-gray-200 rounded w-2/3 mb-1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1507,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1508,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1506,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1504,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1502,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)) : filteredCustomers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center py-10 px-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-xl flex items-center justify-center mb-2",
                                        style: {
                                            background: '#f1f5f9',
                                            color: '#cbd5e1'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 1515,
                                            columnNumber: 155
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1515,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-medium",
                                        style: {
                                            color: '#94a3b8'
                                        },
                                        children: "No customers found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1516,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1514,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)) : visibleCustomers.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomerRow, {
                                    c: c,
                                    isSelected: selectedIds.has(c._id),
                                    onToggle: toggleSelect,
                                    onView: setViewingCustomer,
                                    disabled: sendToAll
                                }, c._id, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 1519,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))),
                            hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setVisibleCount((v)=>v + PAGE_SIZE),
                                className: "w-full py-3 cursor-pointer text-[11.5px] font-medium border-t transition-colors",
                                style: {
                                    borderColor: '#f1f5f9',
                                    color: '#94a3b8',
                                    background: 'transparent'
                                },
                                children: [
                                    "Load ",
                                    Math.min(PAGE_SIZE, remaining),
                                    " more ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#cbd5e1'
                                        },
                                        children: [
                                            " (",
                                            remaining,
                                            " remaining)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1524,
                                        columnNumber: 72
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1523,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 1500,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 1446,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-w-0 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 px-5 py-3 border-b flex items-center gap-3",
                        style: {
                            background: '#ffffff',
                            borderColor: '#e2e8f0'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-xl flex items-center justify-center",
                                style: {
                                    background: 'rgba(79,70,229,0.1)',
                                    color: '#4f46e5'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnvelopeIcon, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                    lineNumber: 1533,
                                    columnNumber: 154
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1533,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] font-semibold",
                                        style: {
                                            color: '#1e293b'
                                        },
                                        children: "Email Campaign Agent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1535,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10.5px]",
                                        style: {
                                            color: '#94a3b8'
                                        },
                                        children: "Writes one on-brief message and personalizes it — name, city, and more — for every targeted customer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1536,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1534,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            runs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-auto text-[10px] font-mono font-semibold px-2 py-1 rounded-lg flex-shrink-0",
                                style: {
                                    background: '#f1f5f9',
                                    color: '#64748b'
                                },
                                children: [
                                    runs.length,
                                    " campaign",
                                    runs.length !== 1 ? 's' : '',
                                    " sent"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1539,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 1532,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4",
                        style: {
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#e2e8f0 transparent'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 rounded-2xl border overflow-hidden relative",
                                style: {
                                    borderColor: '#e2e8f0',
                                    background: '#ffffff',
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StampMark, {
                                        className: "absolute -top-4 -right-4 w-24 h-24 opacity-[0.5] pointer-events-none",
                                        color: "#e0e7ff"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1549,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pt-3.5 pb-1 relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 p-0.5 rounded-xl w-fit",
                                            style: {
                                                background: '#f1f5f9'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setComposerTab('ai'),
                                                    className: "flex items-center cursor-pointer gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all",
                                                    style: composerTab === 'ai' ? {
                                                        background: '#4f46e5',
                                                        color: '#ffffff',
                                                        boxShadow: '0 2px 6px rgba(79,70,229,0.35)'
                                                    } : {
                                                        color: '#64748b'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                            lineNumber: 1556,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " AI Generate"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                    lineNumber: 1553,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setComposerTab('existing'),
                                                    className: "flex items-center cursor-pointer gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all",
                                                    style: composerTab === 'existing' ? {
                                                        background: '#4f46e5',
                                                        color: '#ffffff',
                                                        boxShadow: '0 2px 6px rgba(79,70,229,0.35)'
                                                    } : {
                                                        color: '#64748b'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayersIcon, {}, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                            lineNumber: 1561,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Saved Template"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                    lineNumber: 1558,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setComposerTab('manual'),
                                                    className: "flex items-center cursor-pointer gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all",
                                                    style: composerTab === 'manual' ? {
                                                        background: '#4f46e5',
                                                        color: '#ffffff',
                                                        boxShadow: '0 2px 6px rgba(79,70,229,0.35)'
                                                    } : {
                                                        color: '#64748b'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditIcon, {}, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                            lineNumber: 1566,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Manual"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                    lineNumber: 1563,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 1552,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1551,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    composerTab === 'ai' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pt-3 pb-4 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10.5px] font-semibold mb-1.5",
                                                style: {
                                                    color: '#334155'
                                                },
                                                children: "What's this campaign about?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1573,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: userPrompt,
                                                onChange: (e)=>setUserPrompt(e.target.value),
                                                disabled: isSending,
                                                rows: 4,
                                                placeholder: "e.g. Reach out about a limited-time price drop on properties they showed interest in…",
                                                className: "w-full resize-none rounded-xl px-3 py-2.5 text-[12px] leading-relaxed outline-none border transition-all duration-150 bg-stone-50 border-slate-200 text-slate-700 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 focus:bg-white disabled:opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1574,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10.5px] font-semibold mb-1.5 mt-3",
                                                style: {
                                                    color: '#334155'
                                                },
                                                children: "Not sure what to write? Start from a goal:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1579,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2 mb-2",
                                                children: QUICK_START_GOALS.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickGoalCard, {
                                                        goal: g,
                                                        onClick: ()=>setUserPrompt(g.prompt)
                                                    }, g.label, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1582,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1580,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrowseAllGoalsButton, {
                                                onClick: ()=>setIsGoalPickerOpen(true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1585,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10.5px] font-semibold mb-1.5 mt-3.5 flex items-center gap-1.5",
                                                style: {
                                                    color: '#334155'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobeIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1587,
                                                        columnNumber: 145
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Tone & language"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1587,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 flex-wrap",
                                                children: LANGUAGE_OPTIONS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setLanguage(l.value),
                                                        className: "text-[10.5px] cursor-pointer font-semibold px-2.5 py-1 rounded-lg border transition-all",
                                                        style: language === l.value ? {
                                                            background: '#eef2ff',
                                                            color: '#4338ca',
                                                            borderColor: '#c7d2fe'
                                                        } : {
                                                            background: '#ffffff',
                                                            color: '#94a3b8',
                                                            borderColor: '#e2e8f0'
                                                        },
                                                        children: l.label
                                                    }, l.value, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1590,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1588,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10.5px] font-semibold mb-1.5 mt-3.5 flex items-center gap-1.5",
                                                style: {
                                                    color: '#334155'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnvelopeIcon, {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1597,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Starting template",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-normal",
                                                        style: {
                                                            color: '#cbd5e1'
                                                        },
                                                        children: "(optional — the layout AI's message gets inserted into)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1598,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1596,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selectedTemplate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectedTemplateChip, {
                                                template: selectedTemplate,
                                                onChange: ()=>setIsPickerOpen(true),
                                                onClear: ()=>setSelectedTemplateId(null)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1601,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChooseTemplateButton, {
                                                label: "Choose a template as a base",
                                                onClick: ()=>setIsPickerOpen(true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1603,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1572,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)) : composerTab === 'existing' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pt-3 pb-4 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10.5px] font-semibold mb-1.5",
                                                style: {
                                                    color: '#334155'
                                                },
                                                children: "Saved template"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1609,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9.5px] mb-3 leading-relaxed",
                                                style: {
                                                    color: '#94a3b8'
                                                },
                                                children: aiRefineExisting ? "AI rewrites the message inside this template once, then personalizes it per customer — name, city, and other details are still swapped in automatically." : "Sent exactly as saved to every targeted customer — name, city, and other tokens are still swapped per customer. No AI writing, no extra cost."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1610,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selectedDbTemplate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5 px-2.5 py-2 rounded-xl border",
                                                        style: {
                                                            borderColor: '#e7e2da',
                                                            background: '#fbfaf8'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateThumbnail, {
                                                                html: selectedDbTemplate.body,
                                                                size: "chip",
                                                                label: selectedDbTemplate.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                lineNumber: 1619,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10.5px] font-semibold truncate",
                                                                        style: {
                                                                            color: '#1c1917'
                                                                        },
                                                                        children: selectedDbTemplate.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                        lineNumber: 1621,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[9px] truncate",
                                                                        style: {
                                                                            color: '#94a3b8'
                                                                        },
                                                                        children: selectedDbTemplate.subject || 'No subject'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                        lineNumber: 1622,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                lineNumber: 1620,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setIsSavedPickerOpen(true),
                                                                className: "text-[10px] cursor-pointer font-semibold px-2 py-1 rounded-lg flex-shrink-0",
                                                                style: {
                                                                    color: '#0d9488'
                                                                },
                                                                children: "Change"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                lineNumber: 1624,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setSelectedDbTemplateId(null),
                                                                className: "text-[10px] cursor-pointer font-semibold px-2 py-1 rounded-lg flex-shrink-0",
                                                                style: {
                                                                    color: '#94a3b8'
                                                                },
                                                                children: "Clear"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                lineNumber: 1625,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1618,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5 px-3 py-2.5 rounded-xl border",
                                                        style: {
                                                            background: aiRefineExisting ? '#eef2ff' : '#f8fafc',
                                                            borderColor: aiRefineExisting ? '#c7d2fe' : '#e2e8f0'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0",
                                                                style: {
                                                                    background: aiRefineExisting ? '#4f46e5' : '#f1f5f9',
                                                                    color: aiRefineExisting ? '#ffffff' : '#94a3b8'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                    lineNumber: 1630,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                lineNumber: 1629,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] font-semibold",
                                                                        style: {
                                                                            color: aiRefineExisting ? '#4338ca' : '#334155'
                                                                        },
                                                                        children: "Refine with AI"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                        lineNumber: 1633,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    aiRefineExisting && !savedTemplateHasAiSlot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-2 px-3 py-2.5 rounded-xl border",
                                                                        style: {
                                                                            background: '#fffbeb',
                                                                            borderColor: '#fde68a'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5",
                                                                                style: {
                                                                                    background: '#fef3c7',
                                                                                    color: '#b45309'
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertIcon, {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                                    lineNumber: 1637,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                                lineNumber: 1636,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10.5px] leading-relaxed",
                                                                                style: {
                                                                                    color: '#92400e'
                                                                                },
                                                                                children: [
                                                                                    "This template has no AI content slot, so your message will appear as a separate closing section below it, not woven into the layout. Add ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                        style: {
                                                                                            background: '#fef3c7',
                                                                                            padding: '1px 4px',
                                                                                            borderRadius: '4px'
                                                                                        },
                                                                                        children: '{{AI_CONTENT}}'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                                        lineNumber: 1640,
                                                                                        columnNumber: 198
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    " inside the template body (in Templates) to place it precisely instead."
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                                lineNumber: 1639,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                        lineNumber: 1635,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[9.5px] mt-0.5",
                                                                        style: {
                                                                            color: '#94a3b8'
                                                                        },
                                                                        children: "Let AI rewrite the message using your campaign goal — layout stays the same"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                        lineNumber: 1644,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                lineNumber: 1632,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                                                                checked: aiRefineExisting,
                                                                onChange: ()=>setAiRefineExisting((v)=>!v)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                lineNumber: 1646,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1628,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    aiRefineExisting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10.5px] font-semibold mb-1.5",
                                                                        style: {
                                                                            color: '#334155'
                                                                        },
                                                                        children: "What's this campaign about?"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                        lineNumber: 1652,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        value: userPrompt,
                                                                        onChange: (e)=>setUserPrompt(e.target.value),
                                                                        disabled: isSending,
                                                                        rows: 3,
                                                                        placeholder: "e.g. Highlight their missing SEO setup and invite them to a quick call…",
                                                                        className: "w-full resize-none rounded-xl px-3 py-2.5 text-[12px] leading-relaxed outline-none border transition-all duration-150 bg-stone-50 border-slate-200 text-slate-700 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 focus:bg-white disabled:opacity-50"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                        lineNumber: 1653,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                lineNumber: 1651,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10.5px] font-semibold mb-1.5 flex items-center gap-1.5",
                                                                        style: {
                                                                            color: '#334155'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobeIcon, {}, void 0, false, {
                                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                                lineNumber: 1660,
                                                                                columnNumber: 158
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            " Tone & language"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                        lineNumber: 1660,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5 flex-wrap",
                                                                        children: LANGUAGE_OPTIONS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setLanguage(l.value),
                                                                                className: "text-[10.5px] cursor-pointer font-semibold px-2.5 py-1 rounded-lg border transition-all",
                                                                                style: language === l.value ? {
                                                                                    background: '#eef2ff',
                                                                                    color: '#4338ca',
                                                                                    borderColor: '#c7d2fe'
                                                                                } : {
                                                                                    background: '#ffffff',
                                                                                    color: '#94a3b8',
                                                                                    borderColor: '#e2e8f0'
                                                                                },
                                                                                children: l.label
                                                                            }, l.value, false, {
                                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                                lineNumber: 1663,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                        lineNumber: 1661,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                lineNumber: 1659,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1650,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-[280px] rounded-xl border overflow-hidden bg-white shadow-inner",
                                                        style: {
                                                            borderColor: '#e2e8f0'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                            srcDoc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$brandConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBrandTokens"])(selectedDbTemplate.body),
                                                            className: "w-full h-full border-none",
                                                            title: "Saved template preview"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                            lineNumber: 1674,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1672,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    aiRefineExisting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9.5px]",
                                                        style: {
                                                            color: '#cbd5e1'
                                                        },
                                                        children: "Preview shows the saved layout — AI's rewritten message will be inserted into it once you send."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1677,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1617,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsSavedPickerOpen(true),
                                                className: "w-full flex flex-col items-center justify-center gap-2 px-3 py-8 rounded-xl border border-dashed cursor-pointer transition-all hover:border-teal-300 hover:bg-teal-50/40",
                                                style: {
                                                    borderColor: '#e7e2da',
                                                    color: '#94a3b8'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayersIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1688,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-semibold",
                                                        children: "Choose a saved template"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1689,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9.5px]",
                                                        children: isDbTemplatesLoading ? 'Loading…' : `${emailDbTemplates.length} available`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1690,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1683,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1608,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pt-3 pb-4 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10.5px] font-semibold mb-1.5",
                                                style: {
                                                    color: '#334155'
                                                },
                                                children: "Template"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1697,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-3",
                                                children: selectedTemplate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectedTemplateChip, {
                                                    template: selectedTemplate,
                                                    onChange: ()=>setIsPickerOpen(true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                    lineNumber: 1700,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChooseTemplateButton, {
                                                    label: "Choose a template",
                                                    onClick: ()=>setIsPickerOpen(true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                    lineNumber: 1702,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1698,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10.5px] font-semibold mb-1.5",
                                                style: {
                                                    color: '#334155'
                                                },
                                                children: "Subject"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1706,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: subject,
                                                onChange: (e)=>setSubject(e.target.value),
                                                disabled: isSending,
                                                placeholder: "Quick update on your shortlisted property",
                                                className: "w-full rounded-xl px-3 py-2 text-[12px] outline-none border transition-all duration-150 bg-stone-50 border-slate-200 text-slate-700 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 focus:bg-white disabled:opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1707,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 flex-wrap mt-1.5 mb-3",
                                                children: TOKEN_HINTS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>insertToken('subject', t),
                                                        className: "text-[9px] cursor-pointer font-mono font-medium px-1.5 py-0.5 rounded-md border",
                                                        style: {
                                                            background: '#f8fafc',
                                                            borderColor: '#e2e8f0',
                                                            color: '#94a3b8'
                                                        },
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1714,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1712,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10.5px] font-semibold",
                                                        style: {
                                                            color: '#334155'
                                                        },
                                                        children: "Body"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1721,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsPreviewMode(!isPreviewMode),
                                                        className: "flex items-center cursor-pointer gap-1.5 text-[9.5px] font-semibold px-2 py-1 rounded-lg transition-all",
                                                        style: {
                                                            background: isPreviewMode ? '#4f46e5' : '#f1f5f9',
                                                            color: isPreviewMode ? '#ffffff' : '#64748b'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                lineNumber: 1730,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            isPreviewMode ? 'Edit HTML' : 'Live Preview'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1722,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1720,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isPreviewMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-[340px] rounded-xl border overflow-hidden bg-white mb-2 shadow-inner",
                                                style: {
                                                    borderColor: '#e2e8f0'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                    srcDoc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$brandConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBrandTokens"])(body) || '<div style="font-family:sans-serif;padding:20px;color:#94a3b8;text-align:center;">Select a template or edit HTML to see preview</div>',
                                                    className: "w-full h-full border-none",
                                                    title: "Email Preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                    lineNumber: 1737,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1735,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: body,
                                                onChange: (e)=>{
                                                    setBody(e.target.value);
                                                    setSelectedTemplateId(null); // manual edits detach from the picked template
                                                },
                                                disabled: isSending,
                                                rows: 10,
                                                placeholder: "<p>Hi {{Name}},</p><p>Wanted to flag…</p>",
                                                className: "w-full resize-y rounded-xl px-3 py-2.5 text-[11.5px] font-mono leading-relaxed outline-none border transition-all duration-150 bg-stone-50 border-slate-200 text-slate-700 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 focus:bg-white disabled:opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1744,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !isPreviewMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 flex-wrap mt-1.5",
                                                        children: TOKEN_HINTS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>insertToken('body', t),
                                                                className: "text-[9px] cursor-pointer font-mono font-medium px-1.5 py-0.5 rounded-md border",
                                                                style: {
                                                                    background: '#f8fafc',
                                                                    borderColor: '#e2e8f0',
                                                                    color: '#94a3b8'
                                                                },
                                                                children: t
                                                            }, t, false, {
                                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                                lineNumber: 1760,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1758,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9.5px] mt-2",
                                                        style: {
                                                            color: '#cbd5e1'
                                                        },
                                                        children: "Supports full HTML (<table>, <b>, <a>…). Tokens are swapped for each customer's real details before sending."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1765,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1695,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    sendError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-4 mb-3 px-3 py-2 rounded-lg text-[11px]",
                                        style: {
                                            background: '#fef2f2',
                                            color: '#b91c1c'
                                        },
                                        children: sendError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1774,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3 px-4 py-3 border-t",
                                        style: {
                                            borderColor: '#f1f5f9',
                                            background: '#f8fafc'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-medium truncate",
                                                style: {
                                                    color: hasTargets ? '#334155' : '#94a3b8'
                                                },
                                                children: sendToAll ? `Targeting all ${customers.length} customers` : selectedIds.size > 0 ? `${selectedIds.size} customer${selectedIds.size !== 1 ? 's' : ''} selected` : 'Select customers from the list, or send to everyone'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1778,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>canSend && setShowConfirm(true),
                                                disabled: !canSend,
                                                className: "flex-shrink-0 cursor-pointer flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] font-bold transition-all duration-150 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed",
                                                style: {
                                                    background: '#ea580c',
                                                    color: '#ffffff',
                                                    boxShadow: canSend ? '0 3px 10px rgba(234,88,12,0.35)' : 'none'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnvelopeIcon, {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                        lineNumber: 1782,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Review & Send"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                                lineNumber: 1781,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1777,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1548,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            runs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9.5px] font-bold uppercase tracking-widest flex-shrink-0",
                                style: {
                                    color: '#cbd5e1'
                                },
                                children: "Campaign Activity"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1788,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)),
                            runs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col items-center justify-center py-10 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-2xl flex items-center justify-center mb-3",
                                        style: {
                                            background: 'rgba(79,70,229,0.08)',
                                            color: '#4f46e5'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UsersIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                            lineNumber: 1792,
                                            columnNumber: 171
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1792,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] font-semibold mb-1",
                                        style: {
                                            color: '#334155'
                                        },
                                        children: "No campaigns sent yet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1793,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] max-w-[260px]",
                                        style: {
                                            color: '#94a3b8'
                                        },
                                        children: "Pick your customers, write the brief above, and hit send — every campaign shows up here."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1794,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1791,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: runs.map((run)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RunCard, {
                                        run: run,
                                        expanded: !!runExpandedMap[run.id],
                                        onToggleExpand: ()=>setRunExpandedMap((prev)=>({
                                                    ...prev,
                                                    [run.id]: !prev[run.id]
                                                })),
                                        visibleCount: runVisibleMap[run.id] ?? RESULT_PAGE_SIZE,
                                        onLoadMore: ()=>setRunVisibleMap((prev)=>({
                                                    ...prev,
                                                    [run.id]: (prev[run.id] ?? RESULT_PAGE_SIZE) + RESULT_PAGE_SIZE
                                                })),
                                        customerLookup: customerLookup,
                                        onView: setViewingCustomer
                                    }, run.id, false, {
                                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                        lineNumber: 1799,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1797,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 1545,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-16 right-5 z-30 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-[11.5px] font-medium",
                        style: {
                            background: toast.type === 'success' ? '#f0fdf4' : '#fef2f2',
                            color: toast.type === 'success' ? '#166534' : '#b91c1c',
                            borderColor: toast.type === 'success' ? '#bbf7d0' : '#fecaca',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                            animation: 'ec-toast-in 0.2s ease'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnvelopeIcon, {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                                lineNumber: 1807,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            toast.text
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 1806,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfirmSendModal, {
                        open: showConfirm,
                        targetCount: targetCount,
                        mode: composerTab,
                        language: language,
                        promptEcho: getPromptEcho(),
                        subject: composerTab === 'existing' ? selectedDbTemplate?.subject || '' : subject.trim(),
                        templateName: getTemplateName(),
                        aiRefine: composerTab === 'existing' ? aiRefineExisting : false,
                        isSending: isSending,
                        error: sendError,
                        onCancel: ()=>!isSending && setShowConfirm(false),
                        onConfirm: handleSend
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                        lineNumber: 1811,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 1531,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            viewingCustomer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomerDetailDrawer, {
                customer: viewingCustomer,
                onClose: ()=>setViewingCustomer(null)
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 1821,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplatePickerModal, {
                open: isPickerOpen,
                templates: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$emailTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailTemplates"],
                selectedId: selectedTemplateId,
                onSelect: handleSelectTemplate,
                onClose: ()=>setIsPickerOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 1823,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SavedTemplatePickerModal, {
                open: isSavedPickerOpen,
                templates: emailDbTemplates,
                isLoading: isDbTemplatesLoading,
                selectedId: selectedDbTemplateId,
                onSelect: (id)=>setSelectedDbTemplateId(id),
                onClose: ()=>setIsSavedPickerOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 1830,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoalPickerModal, {
                open: isGoalPickerOpen,
                categories: CAMPAIGN_GOAL_CATEGORIES,
                onSelect: (prompt)=>{
                    setUserPrompt(prompt);
                    setIsGoalPickerOpen(false);
                },
                onClose: ()=>setIsGoalPickerOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 1838,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes ec-spin { to { transform: rotate(360deg); } }
        @keyframes ec-drawer-in { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes ec-modal-in { from { transform: scale(0.94); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes ec-toast-in { from { transform: translateY(-8px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes ec-run-in { from { transform: translateY(6px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
                lineNumber: 1845,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/EmailCampaignAgentWorkspace.tsx",
        lineNumber: 1443,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s4(EmailCampaignAgentWorkspace, "t6uEaYNh8rxYT8EtV887a2nLrYc=");
_c46 = EmailCampaignAgentWorkspace;
const __TURBOPACK__default__export__ = EmailCampaignAgentWorkspace;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45, _c46;
__turbopack_context__.k.register(_c, "LayersIcon");
__turbopack_context__.k.register(_c1, "SearchIcon");
__turbopack_context__.k.register(_c2, "UserIcon");
__turbopack_context__.k.register(_c3, "SparkleIcon");
__turbopack_context__.k.register(_c4, "ClearIcon");
__turbopack_context__.k.register(_c5, "EyeIcon");
__turbopack_context__.k.register(_c6, "CloseIcon");
__turbopack_context__.k.register(_c7, "PhoneIcon");
__turbopack_context__.k.register(_c8, "MailIcon");
__turbopack_context__.k.register(_c9, "MapPinIcon");
__turbopack_context__.k.register(_c10, "CalendarIcon");
__turbopack_context__.k.register(_c11, "TagIcon");
__turbopack_context__.k.register(_c12, "LinkIcon");
__turbopack_context__.k.register(_c13, "CheckIcon");
__turbopack_context__.k.register(_c14, "UsersIcon");
__turbopack_context__.k.register(_c15, "EnvelopeIcon");
__turbopack_context__.k.register(_c16, "EditIcon");
__turbopack_context__.k.register(_c17, "GlobeIcon");
__turbopack_context__.k.register(_c18, "AlertIcon");
__turbopack_context__.k.register(_c19, "ChevronIcon");
__turbopack_context__.k.register(_c20, "StampMark");
__turbopack_context__.k.register(_c21, "TemplateThumbnail");
__turbopack_context__.k.register(_c22, "SelectedTemplateChip");
__turbopack_context__.k.register(_c23, "ChooseTemplateButton");
__turbopack_context__.k.register(_c24, "BlankTemplateCard");
__turbopack_context__.k.register(_c25, "TemplateCard");
__turbopack_context__.k.register(_c26, "TemplatePickerModal");
__turbopack_context__.k.register(_c27, "SavedTemplateCard");
__turbopack_context__.k.register(_c28, "SavedTemplatePickerModal");
__turbopack_context__.k.register(_c29, "QUICK_START_GOALS$QUICK_START_IDS.map");
__turbopack_context__.k.register(_c30, "QUICK_START_GOALS");
__turbopack_context__.k.register(_c31, "ArrowRightIcon");
__turbopack_context__.k.register(_c32, "QuickGoalCard");
__turbopack_context__.k.register(_c33, "BrowseAllGoalsButton");
__turbopack_context__.k.register(_c34, "GoalCard");
__turbopack_context__.k.register(_c35, "GoalPickerModal");
__turbopack_context__.k.register(_c36, "CampaignGoalPicker");
__turbopack_context__.k.register(_c37, "Avatar");
__turbopack_context__.k.register(_c38, "SelectCheckbox");
__turbopack_context__.k.register(_c39, "ToggleSwitch");
__turbopack_context__.k.register(_c40, "DetailRow");
__turbopack_context__.k.register(_c41, "CustomerDetailDrawer");
__turbopack_context__.k.register(_c42, "CustomerRow");
__turbopack_context__.k.register(_c43, "ResultRow");
__turbopack_context__.k.register(_c44, "RunCard");
__turbopack_context__.k.register(_c45, "ConfirmSendModal");
__turbopack_context__.k.register(_c46, "EmailCampaignAgentWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_component_aiagents_EmailCampaignAgentWorkspace_tsx_3228839f._.js.map