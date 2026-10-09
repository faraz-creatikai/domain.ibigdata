(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/settings/brand/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrandSettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$brand$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/brand/brand.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$themePlatte$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/themePlatte.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const IMAGE_FIELDS = [
    {
        label: "Favicon (.ico/.png)",
        key: "favicon",
        dbKey: "faviconUrl",
        helperText: "Browser tab icon (32x32 or 64x64)"
    },
    {
        label: "Logo (Without Text)",
        key: "logoSingle",
        dbKey: "logoIconUrl",
        helperText: "Square icon for collapsed navigation bar"
    },
    {
        label: "Logo (With Text)",
        key: "logoText",
        dbKey: "logoTextUrl",
        helperText: "Full primary brand logo with domain name"
    },
    {
        label: "Splash Screen Logo",
        key: "splashScreen",
        dbKey: "splashScreenUrl",
        helperText: "Centered logo displayed during app launch"
    },
    {
        label: "PWA Icon (192x192)",
        key: "icon192",
        dbKey: "icon192Url",
        helperText: "Home screen icon for mobile devices"
    },
    {
        label: "PWA Icon (512x512)",
        key: "icon512",
        dbKey: "icon512Url",
        helperText: "Splash icon for mobile devices"
    }
];
function BrandSettingsPage() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentSettings, setCurrentSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Form state
    const [appName, setAppName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("EstateAI Agent Platform");
    const [shortName, setShortName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("EstateAI");
    const [primaryColor, setPrimaryColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#0066cc"); // <-- NEW
    const [themeColor, setThemeColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#ffffff");
    const [backgroundColor, setBackgroundColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#ffffff");
    // Selected files & instant browser previews
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        favicon: null,
        logoSingle: null,
        logoText: null,
        splashScreen: null,
        icon192: null,
        icon512: null
    });
    const [previews, setPreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        favicon: "",
        logoSingle: "",
        logoText: "",
        splashScreen: "",
        icon192: "",
        icon512: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrandSettingsPage.useEffect": ()=>{
            loadSettings();
        }
    }["BrandSettingsPage.useEffect"], []);
    const loadSettings = async ()=>{
        setLoading(true);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$brand$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrandSettings"])();
        if (res?.success && res?.data) {
            const data = res.data;
            setCurrentSettings(data);
            setAppName(data.appName || "EstateAI Agent Platform");
            setShortName(data.shortName || "EstateAI");
            setPrimaryColor(data.primaryColor || "#0066cc");
            setThemeColor(data.themeColor || "#ffffff");
            setBackgroundColor(data.backgroundColor || "#ffffff");
            // Apply saved color theme to DOM
            if (data.primaryColor) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$themePlatte$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyCrmTheme"])(data.primaryColor);
            }
        }
        setLoading(false);
    };
    // Trigger instant live preview when color picker changes
    const handlePrimaryColorChange = (e)=>{
        const newColor = e.target.value;
        setPrimaryColor(newColor);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$themePlatte$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyCrmTheme"])(newColor); // Live updates --color-primary and all shades!
    };
    const handleFileChange = (key, e)=>{
        const file = e.target.files?.[0] || null;
        if (file) {
            setFiles((prev)=>({
                    ...prev,
                    [key]: file
                }));
            setPreviews((prev)=>({
                    ...prev,
                    [key]: URL.createObjectURL(file)
                }));
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData();
        formData.append("appName", appName);
        formData.append("shortName", shortName);
        formData.append("primaryColor", primaryColor); // <-- Add to FormData
        formData.append("themeColor", themeColor);
        formData.append("backgroundColor", backgroundColor);
        Object.keys(files).forEach((key)=>{
            if (files[key]) {
                formData.append(key, files[key]);
            }
        });
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$brand$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateBrandSettings"])(formData);
        if (result?.success) {
            alert("Brand settings updated successfully!");
            await loadSettings();
        } else {
            alert("Failed to update branding. Please check server logs.");
        }
        setSubmitting(false);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px] bg-[var(--color-bglight)] dark:bg-[var(--color-bgdark)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-semibold text-[var(--color-primary)]",
                children: "Loading brand settings..."
            }, void 0, false, {
                fileName: "[project]/src/app/settings/brand/page.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/brand/page.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-4 md:p-8 bg-[var(--color-bglight)] dark:bg-[var(--color-bgdark)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "max-w-6xl mx-auto p-6 md:p-8 bg-[var(--color-bglight)] dark:bg-[var(--color-bgdark)] border border-[var(--color-primary-light)] rounded-2xl shadow-lg space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-[var(--color-muted)] pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl md:text-3xl font-bold text-[var(--color-txtdark)] dark:text-[var(--color-txtlight)]",
                            children: "White-Label Brand & App Settings"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/brand/page.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[var(--color-gray)] mt-1",
                            children: "Update your CRM identity, theme colors, and cloud-hosted logos."
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/brand/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/brand/page.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-[var(--color-txtdark)] dark:text-[var(--color-txtlight)] mb-2",
                                    children: "Application Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: appName,
                                    onChange: (e)=>setAppName(e.target.value),
                                    placeholder: "e.g. EstateAI Agent Platform",
                                    className: "w-full px-4 py-2 border border-[var(--color-primary-light)] rounded-lg bg-[var(--color-childbglight)] dark:bg-[var(--color-childbgdark)] text-[var(--color-txtdark)] dark:text-[var(--color-txtlight)] focus:outline-none focus:border-[var(--color-primary)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/brand/page.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-[var(--color-txtdark)] dark:text-[var(--color-txtlight)] mb-2",
                                    children: "Short Name (for PWA App Icon)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: shortName,
                                    onChange: (e)=>setShortName(e.target.value),
                                    placeholder: "e.g. EstateAI",
                                    className: "w-full px-4 py-2 border border-[var(--color-primary-light)] rounded-lg bg-[var(--color-childbglight)] dark:bg-[var(--color-childbgdark)] text-[var(--color-txtdark)] dark:text-[var(--color-txtlight)] focus:outline-none focus:border-[var(--color-primary)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/brand/page.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-[var(--color-txtdark)] dark:text-[var(--color-txtlight)] mb-2",
                                    children: "CRM Primary Brand Color (UI Accent)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "color",
                                            value: primaryColor,
                                            onChange: handlePrimaryColorChange,
                                            className: "h-10 w-16 p-1 border border-[var(--color-primary-light)] rounded-lg bg-[var(--color-childbglight)] dark:bg-[var(--color-childbgdark)] cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/brand/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-mono text-[var(--color-gray)]",
                                            children: primaryColor
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/brand/page.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-[var(--color-primary)] font-semibold ml-2",
                                            children: "• Auto-generates shades & updates live"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/brand/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/brand/page.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-[var(--color-txtdark)] dark:text-[var(--color-txtlight)] mb-2",
                                    children: "PWA Top Bar Color"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "color",
                                            value: themeColor,
                                            onChange: (e)=>setThemeColor(e.target.value),
                                            className: "h-10 w-16 p-1 border border-[var(--color-primary-light)] rounded-lg bg-[var(--color-childbglight)] dark:bg-[var(--color-childbgdark)] cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/brand/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-mono text-[var(--color-gray)]",
                                            children: themeColor
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/brand/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/brand/page.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-[var(--color-txtdark)] dark:text-[var(--color-txtlight)] mb-2",
                                    children: "PWA Splash Background Color"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "color",
                                            value: backgroundColor,
                                            onChange: (e)=>setBackgroundColor(e.target.value),
                                            className: "h-10 w-16 p-1 border border-[var(--color-primary-light)] rounded-lg bg-[var(--color-childbglight)] dark:bg-[var(--color-childbgdark)] cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/brand/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-mono text-[var(--color-gray)]",
                                            children: backgroundColor
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/brand/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/brand/page.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/brand/page.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-[var(--color-txtdark)] dark:text-[var(--color-txtlight)]",
                            children: "Brand Logos & Manifest Icons"
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/brand/page.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: IMAGE_FIELDS.map((item)=>{
                                const existingUrl = currentSettings[item.dbKey];
                                const displayUrl = previews[item.key] || existingUrl;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border border-[var(--color-primary-light)] rounded-xl bg-[var(--color-childbglight)] dark:bg-[var(--color-childbgdark)] flex flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-bold text-[var(--color-txtdark)] dark:text-[var(--color-txtlight)] mb-1",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[var(--color-gray)] mb-4",
                                                    children: item.helperText
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-36 bg-white dark:bg-black/40 border border-dashed border-[var(--color-primary)] rounded-lg flex items-center justify-center p-2 mb-4 overflow-hidden",
                                                    children: displayUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: displayUrl,
                                                        alt: item.label,
                                                        className: "max-h-28 max-w-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/brand/page.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-[var(--color-gray)]",
                                                        children: "No asset uploaded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/settings/brand/page.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/brand/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "cursor-pointer text-center py-2 px-3 text-xs font-semibold rounded-lg bg-[var(--color-primary)] text-[var(--color-txtlight)] hover:bg-[var(--color-primary-dark)] transition",
                                            children: [
                                                "Choose New File",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/png, image/jpeg, image/x-icon, image/svg+xml, image/webp",
                                                    onChange: (e)=>handleFileChange(item.key, e),
                                                    className: "hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/brand/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.key, true, {
                                    fileName: "[project]/src/app/settings/brand/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/settings/brand/page.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/brand/page.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end pt-6 border-t border-[var(--color-muted)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: submitting,
                        className: "px-8 py-3 font-semibold rounded-xl bg-[var(--color-primary)] text-[var(--color-txtlight)] hover:bg-[var(--color-primary-dark)] disabled:opacity-50 transition shadow-md",
                        children: submitting ? "Uploading to Cloudinary..." : "Save Brand Settings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/settings/brand/page.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/brand/page.tsx",
                    lineNumber: 335,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/brand/page.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/settings/brand/page.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
_s(BrandSettingsPage, "NVGNlBkXj+kKwbJbXR6f463skTs=");
_c = BrandSettingsPage;
var _c;
__turbopack_context__.k.register(_c, "BrandSettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_settings_brand_page_tsx_fc6f2800._.js.map