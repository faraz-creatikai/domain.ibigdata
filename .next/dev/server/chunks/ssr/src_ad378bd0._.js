module.exports = [
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
"[project]/src/store/customer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
;
;
const getCustomer = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_ALL, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DASHBOARD_STATS_COUNT, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.LEADSOURCE_STATS, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.LEADTEMPERATURE_STATS, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.VISITER_CHART_STATS, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.FOLLOWUP_CHART_STATS, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.LOCATION_STATS, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.RADAR_CHART_STATS, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_CUSTOMER_COUNT, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_ALL_TOTAL, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_CUSTOMER_FIELDS_VALUES, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_BY_ID(id), {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_TODAY_ALL, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_FAVOURITES_CUSTOMER, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_BY_PARAMS(params), {
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
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.CHECKDUPLICATES, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.ADD, {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        const result = await response.json();
        if (!result.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(result.message ?? "Something went wrong");
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
    } */ const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.CUSTOMERIMPORT, {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(result.message ?? "Something went wrong");
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
    } */ const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.CUSTOMEREXCELHEADERS, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.ASSIGNCUSTOMER, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.UPDATE(id), {
            method: "PUT",
            body: formData,
            credentials: "include"
        });
        const result = await response.json();
        if (!result.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(result.message ?? "Something went wrong");
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DELETE(id), {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DELETEALL, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.QUALIFYCUSTOMER, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.RECOMENDCUSTOMER, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DATAMINING, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.AGENTCALLING, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETCALLLOGS, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETCALLREPORT, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DELETECALLLOG(id), {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETCLOSEDDEAL, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_CLOSEDDEAL_BY_PARAMS(params), {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.CLOSEDEAL(id), {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.REOPENDEAL(id), {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETARCHIEVEDCUSTOMER, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_ARCHIEVEDCUSTOMER_BY_PARAMS(params), {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.ARCHIEVECUSTOMER(id), {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.UNARCHIEVECUSTOMER(id), {
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
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.ADDSHORTLIST, {
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
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETSHORTLIST(id), {
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
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.REMOVESHORTLIST, {
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
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.UPDATESHORTLIST, {
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
}),
"[project]/src/store/masters/subtype/subtype.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addSubtype",
    ()=>addSubtype,
    "deleteAllSubtype",
    ()=>deleteAllSubtype,
    "deleteSubtype",
    ()=>deleteSubtype,
    "getFilteredSubtype",
    ()=>getFilteredSubtype,
    "getSubtype",
    ()=>getSubtype,
    "getSubtypeByCampaignAndType",
    ()=>getSubtypeByCampaignAndType,
    "getSubtypeById",
    ()=>getSubtypeById,
    "updateSubtype",
    ()=>updateSubtype
]);
// note do not use any
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-ssr] (ecmascript)");
;
const getSubtype = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBTYPE.GET_ALL, {
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
const getSubtypeById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBTYPE.GET_BY_ID(id), {
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
const getSubtypeByCampaignAndType = async (campaignId, subtypeId)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBTYPE.GET_ALL_BY_CAMPAIGN_AND_TYPE(campaignId, subtypeId), {
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
const getFilteredSubtype = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBTYPE.GET_BY_PARAMS(params), {
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
const addSubtype = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBTYPE.ADD, {
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
const updateSubtype = async (id, data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBTYPE.UPDATE(id), {
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
const deleteSubtype = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBTYPE.DELETE(id), {
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
const deleteAllSubtype = async (payload)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.SUBTYPE.DELETEALL, {
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
"[project]/src/app/component/buttons/BackButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
function BackButton({ url, text, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: url,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/app/component/buttons/SaveButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SaveButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SaveButton({ text, icon, className, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
"[project]/src/app/imports/customer/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomerImport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$campaign$2f$campaign$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/campaign/campaign.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/types/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/customer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$subtype$2f$subtype$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/subtype/subtype.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$BackButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/buttons/BackButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$SaveButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/buttons/SaveButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handleFieldOptionsObject$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/handleFieldOptionsObject.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CustomerImportContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CustomerImportContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
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
function CustomerImport() {
    const [importData, setImportData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        Campaign: {
            id: "",
            name: ""
        },
        CustomerType: {
            id: "",
            name: ""
        },
        CustomerSubType: {
            id: "",
            name: ""
        },
        file: null
    });
    const [fieldOptions, setFieldOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setExcelHeaders, setFile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CustomerImportContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCustomerImport"])();
    const objectFields = [
        {
            key: "Campaign",
            fetchFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$campaign$2f$campaign$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCampaign"]
        },
        {
            key: "CustomerType",
            staticData: []
        },
        {
            key: "CustomerSubtype",
            staticData: []
        } // dependent
    ];
    // Simple array fields (for normal Select)
    const arrayFields = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadFieldOptions = async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$handleFieldOptionsObject$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleFieldOptionsObject"])(objectFields, setFieldOptions);
        // await handleFieldOptions(arrayFields, setFieldOptions);
        };
        loadFieldOptions();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (importData.Campaign.id) {
            fetchCustomerType(importData.Campaign.id);
        } else {
            setFieldOptions((prev)=>({
                    ...prev,
                    CustomerType: []
                }));
        }
        if (importData.Campaign.id && importData.CustomerType.id) {
            fetchCustomerSubType(importData.Campaign.id, importData.CustomerType.id);
        } else {
            setFieldOptions((prev)=>({
                    ...prev,
                    CustomerSubtype: []
                }));
        }
    }, [
        importData.Campaign.id,
        importData.CustomerType.id
    ]);
    const fetchCustomerType = async (campaignId)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTypesByCampaign"])(campaignId);
            setFieldOptions((prev)=>({
                    ...prev,
                    CustomerType: res || []
                }));
        } catch (error) {
            console.error("Error fetching types:", error);
            setFieldOptions((prev)=>({
                    ...prev,
                    CustomerType: []
                }));
        }
    };
    const fetchCustomerSubType = async (campaignId, customertypeId)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$subtype$2f$subtype$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSubtypeByCampaignAndType"])(campaignId, customertypeId);
            setFieldOptions((prev)=>({
                    ...prev,
                    CustomerSubtype: res || []
                }));
        } catch (error) {
            console.error("Error fetching types:", error);
            setFieldOptions((prev)=>({
                    ...prev,
                    CustomerSubtype: []
                }));
        }
    };
    // Handle select changes
    const handleSelectChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((label, value)=>{
        setImportData((prev)=>({
                ...prev,
                [label]: value
            }));
        setErrors((prev)=>({
                ...prev,
                [label]: ""
            }));
    }, []);
    // Handle input change
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const { name, value } = e.target;
        setImportData((prev)=>({
                ...prev,
                [name]: value
            }));
        setErrors((prev)=>({
                ...prev,
                [name]: ""
            }));
    }, []);
    // 🔹 Handle file upload
    const handleFileChange = (e)=>{
        const file = e.target.files?.[0] || null;
        setImportData((prev)=>({
                ...prev,
                file: file
            }));
        setFile(file);
    };
    // Validate fields
    const validateForm = ()=>{
        const newErrors = {};
        if (!importData.file) newErrors.file = "Please choose an Excel file";
        return newErrors;
    };
    // Handle submit
    const handleSubmit = async ()=>{
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const formData = new FormData();
            /* formData.append("Campaign", importData.Campaign?.name);
      formData.append("CustomerType", importData.CustomerType?.name);
      formData.append("CustomerSubType", importData.CustomerSubType?.name); */ if (importData.file) formData.append("file", importData.file);
            console.log(importData);
            // customer import api call
            /*  const result = await importCustomer(formData); // mock success */ /* customer header select api call  */ const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customerExcelHeaders"])(formData);
            if (result?.headers) {
                console.log(" result ", result);
                // toast.success(`${result.importedCount} customers imported successfully. ${result.skippedCount} duplicates skipped.`);
                setExcelHeaders(result.headers);
                router.push("/imports/customer/select-imports/");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("Failed to import data");
            }
        } catch (error) {
            console.error("Import Error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("Error importing customers");
        }
    };
    // download demo file function
    const handleDownload = ()=>{
        const link = document.createElement("a");
        link.href = "/files/customer-import-file.xlsx";
        link.download = "customer-import-template.xlsx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex  mx-auto w-full justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " min-h-fix max-md:p-0 max-w-[700px] w-[100%] mt-12   flex justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                            position: "top-right"
                        }, void 0, false, {
                            fileName: "[project]/src/app/imports/customer/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$BackButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        url: "/customer",
                                        text: "Back",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/imports/customer/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 23
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/imports/customer/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/90 backdrop-blur-lg p-10 w-full rounded-3xl shadow-2xl h-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-extrabold text-[var(--color-secondary-darker)] mb-8 border-b pb-4",
                                            children: [
                                                "Import ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--color-primary)]   ",
                                                    children: "Customers"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/imports/customer/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 24
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/imports/customer/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: " w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FileUpload, {
                                                label: "Choose Excel File",
                                                onChange: handleFileChange,
                                                error: errors.file
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/imports/customer/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end mt-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$SaveButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                text: "Import",
                                                onClick: handleSubmit
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/imports/customer/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/imports/customer/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/imports/customer/page.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/imports/customer/page.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " w-[35%]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-neutral-400  p-6 rounded-lg   ml-6  hidden lg:block  relative top-11",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-orange-500",
                                        children: "🔥"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-[var(--color-secondary-darker)]",
                                        children: "Product Upload Tips"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3 text-sm text-gray-700 font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: " flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Phone numbers must contain digits only. ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 59
                                                    }, this),
                                                    "Do not use special symbols such as -, /, or spaces."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: " flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Only 10-digit phone numbers are allowed. ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 63
                                                    }, this),
                                                    "Do not include country codes like +91 or prefixes such as 91."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: " flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "For multiple phone numbers, separate each number with a comma and a space. ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 97
                                                    }, this),
                                                    "Example: 9876543210, 9123456789"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: " flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    " Supported file formats for upload are: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 71
                                                    }, this),
                                                    ".xlsx, .xlsm, .xlsb, .xls, .ods, .csv"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: " flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Unsupported file formats will not be accepted, including: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 80
                                                    }, this),
                                                    ".txt, .json, .pdf, .xml, and similar formats."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[var(--color-secondary-darker)] text-sm font-semibold text-center mt-5",
                                children: "Want Demo ?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: handleDownload,
                                className: " cursor-pointer bg-gradient-to-r mt-1 from-[var(--color-primary-dark)] to-[var(--color-secondary)]  hover:from-[var(--color-primary-darker)] hover:to-[var(--color-secondary-dark)]  w-fit px-3 py-2 flex flex-row gap-x-2 items-center text-white font-medium rounded-md text-xs  mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: " bg-transparent border-b-2 text-white border-white ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowDownLong"], {
                                            className: "animate-bounce"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/imports/customer/page.tsx",
                                            lineNumber: 239,
                                            columnNumber: 408
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/imports/customer/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 338
                                    }, this),
                                    "Download"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/imports/customer/page.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/imports/customer/page.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/imports/customer/page.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/imports/customer/page.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
// 🟦 Input Field
const InputField = ({ label, name, value, error, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "relative block w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: name,
                value: value,
                onChange: onChange,
                placeholder: " ",
                className: `peer w-full border rounded-sm bg-transparent py-3 px-4 outline-none 
        ${error ? "border-red-500 focus:border-red-500" : "border-gray-400 focus:border-blue-500"}`
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/page.tsx",
                lineNumber: 251,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `absolute left-2 bg-white px-1 text-gray-500 text-sm transition-all duration-300
      ${value || error ? "-top-2 text-xs text-blue-500" : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500"}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/page.tsx",
                lineNumber: 260,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500 text-sm mt-1 block",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/page.tsx",
                lineNumber: 264,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/imports/customer/page.tsx",
        lineNumber: 250,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// 🟦 File Upload
const FileUpload = ({ label, onChange, error })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-semibold text-gray-700 mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/page.tsx",
                lineNumber: 271,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                accept: ".xlsx, .xls",
                onChange: onChange,
                className: "border border-gray-300 cursor-pointer rounded-md p-2"
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/page.tsx",
                lineNumber: 272,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500 text-sm mt-2",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/imports/customer/page.tsx",
                lineNumber: 278,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/imports/customer/page.tsx",
        lineNumber: 270,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
];

//# sourceMappingURL=src_ad378bd0._.js.map