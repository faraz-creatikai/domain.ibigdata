module.exports = [
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
"[project]/src/app/utils/countryCodes.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COUNTRY_CODES",
    ()=>COUNTRY_CODES,
    "DEFAULT_COUNTRY_CODE",
    ()=>DEFAULT_COUNTRY_CODE,
    "countryCodes",
    ()=>countryCodes,
    "getCountryLenRule",
    ()=>getCountryLenRule,
    "isoToFlagEmoji",
    ()=>isoToFlagEmoji
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const countryCodes = [
    "+91",
    "+1",
    "+7",
    "+20",
    "+27",
    "+30",
    "+31",
    "+32",
    "+33",
    "+34",
    "+36",
    "+39",
    "+40",
    "+41",
    "+43",
    "+44",
    "+45",
    "+46",
    "+47",
    "+48",
    "+49",
    "+51",
    "+52",
    "+53",
    "+54",
    "+55",
    "+56",
    "+57",
    "+58",
    "+60",
    "+61",
    "+62",
    "+63",
    "+64",
    "+65",
    "+66",
    "+81",
    "+82",
    "+84",
    "+86",
    "+90",
    "+92",
    "+93",
    "+94",
    "+95",
    "+98",
    "+211",
    "+212",
    "+213",
    "+216",
    "+218",
    "+220",
    "+221",
    "+222",
    "+223",
    "+224",
    "+225",
    "+226",
    "+227",
    "+228",
    "+229",
    "+230",
    "+231",
    "+232",
    "+233",
    "+234",
    "+235",
    "+236",
    "+237",
    "+238",
    "+239",
    "+240",
    "+241",
    "+242",
    "+243",
    "+244",
    "+245",
    "+246",
    "+247",
    "+248",
    "+249",
    "+250",
    "+251",
    "+252",
    "+253",
    "+254",
    "+255",
    "+256",
    "+257",
    "+258",
    "+260",
    "+261",
    "+262",
    "+263",
    "+264",
    "+265",
    "+266",
    "+267",
    "+268",
    "+269",
    "+290",
    "+291",
    "+297",
    "+298",
    "+299",
    "+350",
    "+351",
    "+352",
    "+353",
    "+354",
    "+355",
    "+356",
    "+357",
    "+358",
    "+359",
    "+370",
    "+371",
    "+372",
    "+373",
    "+374",
    "+375",
    "+376",
    "+377",
    "+378",
    "+379",
    "+380",
    "+381",
    "+382",
    "+383",
    "+385",
    "+386",
    "+387",
    "+389",
    "+420",
    "+421",
    "+423",
    "+500",
    "+501",
    "+502",
    "+503",
    "+504",
    "+505",
    "+506",
    "+507",
    "+508",
    "+509",
    "+590",
    "+591",
    "+592",
    "+593",
    "+594",
    "+595",
    "+596",
    "+597",
    "+598",
    "+599",
    "+670",
    "+672",
    "+673",
    "+674",
    "+675",
    "+676",
    "+677",
    "+678",
    "+679",
    "+680",
    "+681",
    "+682",
    "+683",
    "+685",
    "+686",
    "+687",
    "+688",
    "+689",
    "+690",
    "+691",
    "+692",
    "+850",
    "+852",
    "+853",
    "+855",
    "+856",
    "+880",
    "+886",
    "+960",
    "+961",
    "+962",
    "+963",
    "+964",
    "+965",
    "+966",
    "+967",
    "+968",
    "+970",
    "+971",
    "+972",
    "+973",
    "+974",
    "+975",
    "+976",
    "+977",
    "+992",
    "+993",
    "+994",
    "+995",
    "+996",
    "+998"
];
const COUNTRY_CODES = [
    {
        code: "91",
        iso2: "IN",
        name: "India",
        minLen: 10,
        maxLen: 10
    },
    {
        code: "971",
        iso2: "AE",
        name: "UAE",
        minLen: 9,
        maxLen: 9
    },
    {
        code: "966",
        iso2: "SA",
        name: "Saudi Arabia",
        minLen: 9,
        maxLen: 9
    },
    {
        code: "974",
        iso2: "QA",
        name: "Qatar",
        minLen: 8,
        maxLen: 8
    },
    {
        code: "973",
        iso2: "BH",
        name: "Bahrain",
        minLen: 8,
        maxLen: 8
    },
    {
        code: "968",
        iso2: "OM",
        name: "Oman",
        minLen: 8,
        maxLen: 8
    },
    {
        code: "965",
        iso2: "KW",
        name: "Kuwait",
        minLen: 7,
        maxLen: 8
    },
    {
        code: "977",
        iso2: "NP",
        name: "Nepal",
        minLen: 10,
        maxLen: 10
    },
    {
        code: "880",
        iso2: "BD",
        name: "Bangladesh",
        minLen: 10,
        maxLen: 10
    },
    {
        code: "92",
        iso2: "PK",
        name: "Pakistan",
        minLen: 10,
        maxLen: 10
    },
    {
        code: "94",
        iso2: "LK",
        name: "Sri Lanka",
        minLen: 9,
        maxLen: 9
    },
    {
        code: "65",
        iso2: "SG",
        name: "Singapore",
        minLen: 8,
        maxLen: 8
    },
    {
        code: "60",
        iso2: "MY",
        name: "Malaysia",
        minLen: 9,
        maxLen: 10
    },
    {
        code: "44",
        iso2: "GB",
        name: "United Kingdom",
        minLen: 10,
        maxLen: 10
    },
    {
        code: "1",
        iso2: "US",
        name: "US / Canada",
        minLen: 10,
        maxLen: 10
    },
    {
        code: "61",
        iso2: "AU",
        name: "Australia",
        minLen: 9,
        maxLen: 9
    }
];
const DEFAULT_COUNTRY_CODE = "91";
const getCountryLenRule = (code)=>COUNTRY_CODES.find((c)=>c.code === code) ?? {
        code,
        iso2: "",
        name: code,
        minLen: 6,
        maxLen: 11
    };
const isoToFlagEmoji = (iso2)=>{
    if (!iso2 || iso2.length !== 2) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: "🏳️"
    }, void 0, false, {
        fileName: "[project]/src/app/utils/countryCodes.tsx",
        lineNumber: 249,
        columnNumber: 42
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `fi fi-${iso2.toLowerCase()} rounded-[2px]`,
        style: {
            width: 20,
            height: 15,
            display: "inline-block"
        }
    }, void 0, false, {
        fileName: "[project]/src/app/utils/countryCodes.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
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
"[project]/src/app/utils/exportToExcel.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportToExcel",
    ()=>exportToExcel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
;
const exportToExcel = (data, fileName = "customers")=>{
    // Convert JSON → worksheet
    const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
    // Create workbook
    const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, "Customers");
    // Generate Excel file and trigger download
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](workbook, `${fileName}.xlsx`);
};
}),
"[project]/src/app/utils/formatDateDMY.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDateDMY",
    ()=>formatDateDMY
]);
const formatDateDMY = (value)=>{
    if (!value) return "";
    let d = null;
    // 1. ISO-like yyyy-mm-dd
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        d = new Date(value);
    } else if (/^\d{2}-\d{2}-\d{4}$/.test(value)) {
        const [day, month, year] = value.split("-").map(Number);
        d = new Date(year, month - 1, day);
    }
    if (!d || isNaN(d.getTime())) return "";
    // build dd-mm-yyyy
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
};
}),
"[project]/src/app/utils/trimCountryCodeHelper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trimCountryCodeHelper",
    ()=>trimCountryCodeHelper,
    "trimCountryCodeHelper2",
    ()=>trimCountryCodeHelper2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/countryCodes.tsx [app-ssr] (ecmascript)");
;
const trimCountryCodeHelper2 = (num)=>{
    if (!num) return "";
    let trimmedNum = num;
    for (const code of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countryCodes"]){
        if (trimmedNum.startsWith(code)) {
            trimmedNum = trimmedNum.slice(code.length);
            break; // stop after first match
        }
    }
    return trimmedNum;
};
const trimCountryCodeHelper = (num, countryCode)=>{
    if (!num) return "";
    let digits = num.trim().replace(/[^0-9]/g, "");
    // Remove international 00 prefix only when followed by the selected country code
    if (digits.startsWith(`00${countryCode}`)) {
        digits = digits.slice(2);
    }
    // Remove selected country code if present
    if (digits.startsWith(countryCode)) {
        const rest = digits.slice(countryCode.length);
        const { minLen, maxLen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCountryLenRule"])(countryCode);
        if (rest.length >= minLen && rest.length <= maxLen) {
            return rest;
        }
    }
    return digits;
};
}),
"[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomerTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gr/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$PopupMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/popups/PopupMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/go/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$slides$2f$CustomerImageSlider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/slides/CustomerImageSlider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/countryCodes.tsx [app-ssr] (ecmascript)");
"use client";
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
// Builds a dialable E.164-style number from stored CountryCode + ContactNumber
const FLAG_FONT_STACK = "'Noto Color Emoji', 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif";
const buildTelHref = (lead)=>{
    const code = lead?.CountryCode || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_COUNTRY_CODE"];
    const number = lead?.ContactNumber || lead?.ContactNo || "";
    if (!number) return "#";
    return `tel:+${code}${number}`;
};
// Small reusable bit: "🇮🇳 +91" prefix
const CountryPrefix = ({ lead })=>{
    const code = lead?.CountryCode || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_COUNTRY_CODE"];
    const country = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRY_CODES"].find((c)=>c.code === code);
    if (!country) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1 mr-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: FLAG_FONT_STACK
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isoToFlagEmoji"])(country.iso2)
            }, void 0, false, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-500",
                children: [
                    "+",
                    country.code
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
function CustomerTable({ leads, labelLeads, allLabelLeads, onAdd, onEdit, onWhatsappClick, onMailClick, onFavourite, onViewFollowup, loader, hasMoreCustomers, fetchMore, duplicateContacts, onViewDuplicate, onGoogleMapViewAddress, renderActions }) {
    const [toggleSearchDropdown, setToggleSearchDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsperpage = 10;
    const [viewAll, setViewAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewLeadData, setViewLeadData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const totalPages = Math.ceil(leads.length / itemsperpage);
    const startIndex = (currentPage - 1) * itemsperpage;
    const paginatedLeads = leads.slice(startIndex, startIndex + itemsperpage);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const nextPage = async ()=>{
        if (currentPage < totalPages) {
            setCurrentPage((prev)=>prev + 1);
            return;
        }
        if (hasMoreCustomers && fetchMore) {
            await fetchMore();
            const newTotalPages = Math.ceil((leads.length + itemsperpage) / itemsperpage);
            if (currentPage < newTotalPages) {
                setCurrentPage((prev)=>prev + 1);
            }
        }
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
    const followupRedirect = ()=>{
        router.push('/followups/customer');
    };
    if (loader) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-2 pb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col justify-center items-center gap-3 py-16 text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-3 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                        lineNumber: 134,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium",
                        children: "Loading Customers..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                        lineNumber: 135,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                lineNumber: 133,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
            lineNumber: 132,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            viewAll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$PopupMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>{
                    setViewAll(false);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-[var(--color-childbgdark)] relative w-full h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-3 left-3 cursor-pointer z-[2000] bg-gray-100/50 rounded-full p-1 self-end mb-1",
                            onClick: ()=>{
                                setViewAll(false);
                                setViewLeadData(null);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoArrowLeft"], {
                                size: 26
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                lineNumber: 150,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                            lineNumber: 146,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$slides$2f$CustomerImageSlider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            images: viewLeadData?.CustomerImage?.length ? viewLeadData.CustomerImage : [
                                "/siteplan2.png"
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                            lineNumber: 152,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[calc(80vh-240px)] absolute top-[380px] w-full bg-white dark:bg-[var(--color-childbgdark)] overflow-y-auto px-4 py-6 rounded-t-3xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-center mb-8 text-[var(--color-primary)]",
                                    children: "Customer Information"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 160,
                                    columnNumber: 29
                                }, this),
                                allLabelLeads?.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex ${viewLeadData?.[item.key]?.length > 30 && "flex-col gap-2"} my-1 justify-between p-3 bg-gray-50 dark:bg-[var(--color-secondary-darker)] rounded-lg`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-gray-700 dark:text-[var(--color-txtlight)] text-sm",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 168,
                                                columnNumber: 37
                                            }, this),
                                            item.label === "Contact No" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: buildTelHref(viewLeadData || {}),
                                                className: "text-[var(--color-primary)] font-medium hover:underline text-sm inline-flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CountryPrefix, {
                                                        lead: viewLeadData || {}
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 45
                                                    }, this),
                                                    viewLeadData?.[item.key] ?? ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 172,
                                                columnNumber: 41
                                            }, this) : item.label === "Address" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-primary)] cursor-pointer underline text-sm text-right max-w-[60%]",
                                                onClick: ()=>onGoogleMapViewAddress?.(viewLeadData?.[item.key]),
                                                children: viewLeadData?.[item.key] ?? ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 180,
                                                columnNumber: 41
                                            }, this) : item.label === "URL" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: viewLeadData?.[item.key] ?? "#",
                                                target: "_blank",
                                                className: "text-[var(--color-primary)] cursor-pointer underline text-sm text-right max-w-[60%]",
                                                children: viewLeadData?.[item.key] ?? ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 187,
                                                columnNumber: 41
                                            }, this) : item.label === "AssignTo" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-gray-700 dark:text-[var(--color-txtlight)] text-sm",
                                                children: Array.isArray(viewLeadData?.[item.key]) && viewLeadData[item.key].length > 0 ? viewLeadData[item.key].map((e)=>e.name).join(", ") : "N/A"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 196,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-gray-900 dark:text-[var(--color-txtlight)] font-medium text-right max-w-[60%] text-sm ${viewLeadData?.[item.key]?.length > 30 && "flex-col gap-2 max-w-full"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-left",
                                                    children: Array.isArray(viewLeadData?.[item.key]) ? viewLeadData[item.key].length > 0 ? viewLeadData[item.key].map((e)=>typeof e === "object" ? e.name || JSON.stringify(e) : e).join(", ") : "N/A" : typeof viewLeadData?.[item.key] === "object" && viewLeadData?.[item.key] !== null ? viewLeadData[item.key].name || JSON.stringify(viewLeadData[item.key]) : viewLeadData?.[item.key] ?? "N/A"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 202,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, j, true, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                        lineNumber: 164,
                                        columnNumber: 33
                                    }, this)),
                                viewLeadData?.CustomerFields && Object.keys(viewLeadData.CustomerFields).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 border-t border-gray-100 dark:border-white/10 pt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-left mb-6 px-2",
                                            children: "Additional Information"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                            lineNumber: 220,
                                            columnNumber: 37
                                        }, this),
                                        Object.entries(viewLeadData.CustomerFields).map(([key, value], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex ${String(value)?.length > 30 ? "flex-col gap-2" : ""} my-1 justify-between p-3 bg-gray-50 dark:bg-[var(--color-secondary-darker)] rounded-lg`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-700 dark:text-[var(--color-txtlight)] text-sm capitalize",
                                                        children: key.replace(/([A-Z])/g, ' $1').trim()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-gray-900 dark:text-[var(--color-txtlight)] font-medium text-sm ${String(value)?.length > 30 ? "text-left max-w-full" : "text-right max-w-[60%]"}`,
                                                        children: typeof value === "object" && value !== null ? JSON.stringify(value) : String(value || "N/A")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, `custom-field-${i}`, true, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 224,
                                                columnNumber: 41
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 219,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                            lineNumber: 159,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                    lineNumber: 145,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                lineNumber: 144,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 pb-4 flex flex-col gap-3",
                children: [
                    paginatedLeads.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col justify-center items-center gap-2 py-16 text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl",
                                children: "🙅"
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                lineNumber: 253,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "No customers available"
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                lineNumber: 254,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                        lineNumber: 252,
                        columnNumber: 21
                    }, this),
                    paginatedLeads.map((lead, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-white dark:bg-[var(--color-childbgdark)] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 w-full bg-[var(--color-primary)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 264,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: labelLeads.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-[max-content_8px_1fr] items-start gap-x-2 gap-y-0.5 mb-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold text-gray-500 dark:text-[var(--color-primary-light)] whitespace-nowrap leading-5",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 5
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-300 dark:text-white/20 leading-5",
                                                            children: "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 5
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-800 dark:text-[var(--color-primary-lighter)] font-medium leading-5 break-words line-clamp-2",
                                                            children: item.label === "Contact No" || item.key === "ContactNumber" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CountryPrefix, {
                                                                        lead: lead
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    lead[item.key] ?? "N/A"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 9
                                                            }, this) : Array.isArray(lead[item.key]) ? lead[item.key].length > 0 ? lead[item.key].map((e)=>typeof e === "object" ? e.name || JSON.stringify(e) : e).join(", ") : "N/A" : typeof lead[item.key] === "object" && lead[item.key] !== null ? JSON.stringify(lead[item.key]) : lead[item.key] ?? "N/A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 5
                                                        }, this)
                                                    ]
                                                }, j, true, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 3
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                            lineNumber: 270,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-2 shrink-0 w-[76px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[72px] h-[56px] rounded-xl overflow-hidden bg-gray-200 text-white dark:bg-[var(--color-secondary-darker)] border border-gray-200 dark:border-white/10 flex items-center justify-center cursor-pointer shrink-0",
                                                    onClick: ()=>{
                                                        setViewAll(true);
                                                        setViewLeadData(lead);
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        width: 72,
                                                        className: lead.SitePlan?.length > 0 ? "w-full h-full object-cover" : "w-8 h-8 opacity-100",
                                                        src: lead.SitePlan?.length > 0 ? lead.SitePlan : "/siteplan2.png"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-1.5 w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-8 h-8 rounded-full bg-[var(--color-primary-lighter)] dark:bg-[var(--color-primary)] flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer",
                                                            onClick: ()=>onViewFollowup?.(lead._id, lead.Name),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                                size: 15,
                                                                className: "text-[var(--color-primary)] dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-8 h-8 rounded-full bg-gray-100 dark:bg-[var(--color-primary)] flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer",
                                                            onClick: ()=>onFavourite?.(lead),
                                                            children: lead.isFavourite ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosHeart"], {
                                                                size: 16,
                                                                className: "text-[var(--color-primary)] dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 47
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineHeart"], {
                                                                size: 16,
                                                                className: "text-[var(--color-primary)] dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 47
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 37
                                                        }, this),
                                                        duplicateContacts?.[String(lead.ContactNumber)] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-8 h-8 rounded-full bg-amber-50 dark:bg-[var(--color-primary)] flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer",
                                                            onClick: ()=>onViewDuplicate?.(String(lead.ContactNumber)),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEye"], {
                                                                size: 14,
                                                                className: "text-amber-500 dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 41
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-8 h-8 rounded-full bg-gray-100 dark:bg-[var(--color-primary)] flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer",
                                                            onClick: ()=>onEdit?.(lead._id),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdEdit"], {
                                                                size: 16,
                                                                className: "text-[var(--color-primary)] dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 37
                                                        }, this),
                                                        renderActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-2 w-full",
                                                            children: renderActions(lead)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                            lineNumber: 296,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 267,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[var(--color-primary)] px-4 py-2.5 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onAdd?.(lead._id),
                                            className: "text-white border border-white/60 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide hover:bg-white/10 transition-colors cursor-pointer",
                                            children: "FOLLOW UP"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                            lineNumber: 364,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: buildTelHref(lead),
                                                    onClick: ()=>onAdd?.(lead._id),
                                                    className: "text-white/90 hover:text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdPhone"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onMailClick?.(lead),
                                                    className: "text-white/90 hover:text-white transition-colors cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdEmail"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onWhatsappClick?.(lead),
                                                    className: "text-white/90 hover:text-white transition-colors cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                            lineNumber: 371,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 363,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                            lineNumber: 259,
                            columnNumber: 21
                        }, this)),
                    paginatedLeads.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-1.5 bg-white dark:bg-[var(--color-childbgdark)] border border-gray-100 dark:border-white/10 rounded-2xl px-3 py-2 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentPage(1),
                                    className: "w-7 h-7 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[var(--color-primary)] hover:text-white transition-all cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineBackward"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                        lineNumber: 407,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 403,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: prevPage,
                                    disabled: currentPage === 1,
                                    className: "w-7 h-7 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[var(--color-primary)] hover:text-white transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrFormPrevious"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                        lineNumber: 415,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 410,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "popLayout",
                                    children: pages.map((num, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: ()=>setCurrentPage(num),
                                            initial: {
                                                scale: 0.8,
                                                opacity: 0
                                            },
                                            animate: {
                                                scale: 1,
                                                opacity: 1
                                            },
                                            exit: {
                                                scale: 0.8,
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.15
                                            },
                                            className: `rounded-full text-xs font-semibold flex items-center justify-center transition-all cursor-pointer
                                            ${num === currentPage ? "w-8 h-8 bg-[var(--color-primary)] text-white shadow-md" : "w-7 h-7 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-100"}`,
                                            children: num
                                        }, i, false, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                            lineNumber: 420,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 418,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: nextPage,
                                    disabled: !hasMoreCustomers && currentPage === totalPages,
                                    className: "w-7 h-7 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[var(--color-primary)] hover:text-white transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrFormNext"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                        lineNumber: 443,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 438,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentPage(totalPages),
                                    className: "w-7 h-7 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[var(--color-primary)] hover:text-white transition-all cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineForward"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                        lineNumber: 450,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 446,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                            lineNumber: 401,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                        lineNumber: 400,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                lineNumber: 249,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
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
"[project]/src/app/data/emailTemplate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emailTemplates",
    ()=>emailTemplates,
    "getEmailTemplateById",
    ()=>getEmailTemplateById
]);
const emailTemplates = [
    {
        id: 'website-audit-outreach',
        name: 'Website Audit Outreach',
        description: 'Full audit-style letter with performance scores — send as-is once CustomerFields has the score keys',
        category: 'Outreach',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{Campaign}}</title>
  {{RESPONSIVE_STYLES}}
</head>
<body style="margin:0; padding:0; background-color:#eef2f8; font-family:Arial, 'Segoe UI', sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="ec-outer" style="background-color:#eef2f8; padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 6px 18px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <tr>
            <td style="background:{{BRAND.primaryColor}};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:24px 30px 18px 30px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="middle" style="width:64px; padding-right:14px;">
                          <img src="{{BRAND.logoUrl}}" width="54" height="54" alt="{{BRAND.companyName}}" style="display:block; border-radius:8px;" />
                        </td>
                        <td valign="middle">
                          <p style="margin:0; font-size:24px; font-weight:800; letter-spacing:1px; color:#ffffff;">{{BRAND.displayName}}</p>
                          <p style="margin:4px 0 0 0; font-size:10.5px; font-weight:700; letter-spacing:1.4px; color:#bcd2f7; text-transform:uppercase;">{{BRAND.shortTagline}}</p>
                          <p style="margin:6px 0 0 0; font-size:11.5px; font-style:italic; color:#e6edfb;">{{BRAND.tagline}}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 20px 20px 20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" class="ec-service-cell" style="width:20%; color:#ffffff; font-size:10px; padding:6px;">
                          <div style="font-size:19px; line-height:1;">🖥️</div>
                          <div style="margin-top:4px; color:#dbe6fb;">Website<br/>Development</div>
                        </td>
                        <td align="center" class="ec-service-cell" style="width:20%; color:#ffffff; font-size:10px; padding:6px;">
                          <div style="font-size:19px; line-height:1;">🔍</div>
                          <div style="margin-top:4px; color:#dbe6fb;">SEO &amp; Local<br/>Visibility</div>
                        </td>
                        <td align="center" class="ec-service-cell" style="width:20%; color:#ffffff; font-size:10px; padding:6px;">
                          <div style="font-size:19px; line-height:1;">📣</div>
                          <div style="margin-top:4px; color:#dbe6fb;">Digital<br/>Marketing</div>
                        </td>
                        <td align="center" class="ec-service-cell" style="width:20%; color:#ffffff; font-size:10px; padding:6px;">
                          <div style="font-size:19px; line-height:1;">👥</div>
                          <div style="margin-top:4px; color:#dbe6fb;">Lead Generation<br/>Systems</div>
                        </td>
                        <td align="center" class="ec-service-cell" style="width:20%; color:#ffffff; font-size:10px; padding:6px;">
                          <div style="font-size:19px; line-height:1;">🤖</div>
                          <div style="margin-top:4px; color:#dbe6fb;">AI &amp; Automation<br/>Solutions</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr><td style="height:4px; background:{{BRAND.accentColor}}; line-height:4px; font-size:0;">&nbsp;</td></tr>

          <!-- BODY -->
          <tr>
            <td class="ec-inner-pad" style="padding:32px 36px; color:#1e293b; font-size:14.5px; line-height:1.7;">

              <p style="margin:0 0 16px 0;">Hello [Customer Name] Team,</p>
              <p style="margin:0 0 20px 0;">
              {{AI_CONTENT}}
              </p>

              <p style="margin:0 0 16px 0;">We reviewed [URL] to understand how effectively your current digital presence supports your [CustomerType] and customer acquisition.</p>

              <p style="margin:0 0 20px 0;">From the analysis, your website currently shows <b>[OverallWebsiteScore]/100</b>. We noticed several areas that could potentially strengthen your online presence and business-development journey.</p>

              <p style="margin:0 0 10px 0; font-size:16px; font-weight:700; color:{{BRAND.primaryColor}};">Website Performance Snapshot</p>

              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 20px 0;">
                <tr><td style="padding:3px 0; font-size:14px;">•&nbsp; <b>Design:</b> [DesignQuality]/100</td></tr>
                <tr><td style="padding:3px 0; font-size:14px;">•&nbsp; <b>Mobile Experience:</b> [MobileScore]/100</td></tr>
                <tr><td style="padding:3px 0; font-size:14px;">•&nbsp; <b>SEO:</b> [SEOScore]/100</td></tr>
                <tr><td style="padding:3px 0; font-size:14px;">•&nbsp; <b>Lead Generation:</b> [LeadGenerationScore]/100</td></tr>
                <tr><td style="padding:3px 0; font-size:14px;">•&nbsp; <b>AI &amp; Automation:</b> [AIAutomationScore]/100</td></tr>
                <tr><td style="padding:3px 0; font-size:14px;">•&nbsp; <b>Overall:</b> [OverallWebsiteScore]/100</td></tr>
              </table>
              

              <p style="margin:0 0 16px 0;">The main opportunities we identified are <b>[LackingWebDevelopment]</b> and <b>[LackingSEO]</b>. For a business operating in [CustomerType], improving these areas could help create a stronger journey from website visitors and strengthen local search visibility.</p>

              <p style="margin:0 0 16px 0;">At {{BRAND.companyName}}, we can help with website optimization, local SEO, conversion-focused service pages, lead-generation systems, WhatsApp automation, and AI-powered enquiry/lead-qualification agents.</p>

              <p style="margin:0 0 16px 0;">There may also be an opportunity to create additional commercial value through <b>[MonetizeArea]</b> — [improvementArea]. These improvements could help make the website a more effective channel for qualified enquiries, customer acquisition, and repeat business.</p>

              <p style="margin:0 0 16px 0;">We'd be happy to share a practical improvement plan for [Business Name] based on the opportunities identified in this analysis.</p>

              <p style="margin:0 0 24px 0;">Would you be open to a short discussion?</p>

              <p style="margin:0;">
                Best regards,<br/>
                <b>{{BRAND.signOffName}}</b><br/>
                {{BRAND.shortTagline}}<br/>
                <a href="{{BRAND.website}}" style="color:{{BRAND.accentColor}}; text-decoration:none;">{{BRAND.websiteDisplay}}</a>
              </p>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:{{BRAND.primaryColor}};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:20px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td class="ec-service-cell" style="width:25%; color:#ffffff; font-size:12px; padding:6px;">
                          📞 <b>{{BRAND.phoneDisplay}}</b><br/><span style="color:#bcd2f7; font-size:10px;">Let's Connect</span>
                        </td>
                        <td class="ec-service-cell" style="width:25%; color:#ffffff; font-size:12px; padding:6px;">
                          🌐 <b>{{BRAND.websiteDisplay}}</b><br/><span style="color:#bcd2f7; font-size:10px;">Visit Our Website</span>
                        </td>
                        <td class="ec-service-cell" style="width:25%; color:#ffffff; font-size:12px; padding:6px;">
                          ✉️ <b>{{BRAND.email}}</b><br/><span style="color:#bcd2f7; font-size:10px;">Drop Us an Email</span>
                        </td>
                        <td class="ec-service-cell" style="width:25%; color:#ffffff; font-size:11px; font-style:italic; padding:6px;">
                          {{BRAND.closingLine}}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    }
];
const getEmailTemplateById = (id)=>emailTemplates.find((t)=>t.id === id);
}),
];

//# sourceMappingURL=src_app_6947b79c._.js.map