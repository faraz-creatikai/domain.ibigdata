// app/config/brandConfig.ts
//
// Mirrors backend config/brandConfig.js — kept in sync manually since the
// two run in separate processes. Used only to pre-resolve {{BRAND.*}}
// tokens in template PREVIEWS (iframes) so the picker never shows raw
// unresolved tokens for things that never change per customer. The actual
// send-time merge always happens on the backend via config/brandConfig.js.

export const BRAND = {
  companyName: "CreatikAi",
  displayName: "Creatik Ai",
  shortTagline: "AI • Web • Digital Growth • Automation",
  tagline: "Turning Digital Presence into Measurable Growth",
  website: "https://creatikai.com",
  websiteDisplay: "www.creatikai.com",
  phone: "+919649902000",
  phoneDisplay: "+91 9649902000",
  email: "contact@creatikai.com",
  logoUrl: "https://creatikai.com/creatikai-logo.png",
  primaryColor: "#0b2f6b",
  accentColor: "#1663d6",
  signOffName: "Creatikai Team",
  closingLine: "Let's Build. Automate. Grow Together.",
} as const

export function applyBrandTokens(html: string): string {
  if (!html) return html
  return html.replace(/\{\{\s*BRAND\.(\w+)\s*\}\}/g, (_match, key) => {
    const val = (BRAND as Record<string, string>)[key]
    return val !== undefined ? val : ''
  })
}