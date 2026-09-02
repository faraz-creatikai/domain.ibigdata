

export interface EmailTemplateAiSlot {
  id: string
  label: string
  guidance: string
  format?: 'paragraph' | 'bullets' | 'short'
}

export interface EmailTemplate {
  id: string
  name: string
  description?: string
  category?: string
  html: string
  aiSlots?: EmailTemplateAiSlot[]   // present => AI writes full content for this design
}

/**
 * Bracket tokens like [Customer Name] and [URL] map to real Customer
 * schema columns automatically. Tokens with no matching column (the
 * website-audit fields below) are pulled from that customer's
 * CustomerFields JSON — populate matching keys there (case/spacing don't
 * matter) before sending this one, e.g.:
 *   { "OverallWebsiteScore": 62, "DesignScore": 55, "MobileScore": 70,
 *     "SEOScore": 48, "LeadGenerationScore": 60, "AIAutomationScore": 40,
 *     "LackingWebDevelopment": "a mobile-friendly layout",
 *     "LackingSEO": "local search optimization",
 *     "MonetizeArea": "online bookings", "ImprovementArea": "..." }
 * Any customer missing a given key just gets a blank there — this
 * template is meant to be sent via "Saved Template" (as-is), not the AI
 * tab, since it's a complete, specific letter rather than an AI-insertion
 * skeleton.
 */
export const emailTemplates: EmailTemplate[] = [
{
  id: 'website-audit-ai-fill',
  name: 'Website Audit (AI-written)',
  description: 'Same audit-style design — AI writes the full analysis using each batch\'s available CustomerFields',
  category: 'Outreach',
  aiSlots: [
    {
      id: 'greeting',
      label: 'Opening greeting',
      format: 'short',
      guidance: 'One short warm line greeting the recipient. Use {{Name}} if it is in availablePlaceholders (e.g. "Hello {{Name}} team,"), otherwise a generic greeting. No sign-off, no extra sentences.',
    },
    {
      id: 'intro',
      label: 'Analysis intro',
      format: 'paragraph',
      guidance: 'One to two sentences introducing why you are reaching out, based on userPrompt. Where natural, reference their site/business using an available token (e.g. {{URL}}, {{CustomerType}}, {{City}}) if present. Do not mention specific scores here.',
    },
    {
      id: 'snapshotLeadIn',
      label: 'Score section lead-in',
      format: 'short',
      guidance: 'One short sentence introducing the performance breakdown that follows. Do not list actual scores here.',
    },
    {
      id: 'scoreRows',
      label: 'Score breakdown rows',
      format: 'bullets',
      guidance: `Return ONLY <tr> rows — no <table> wrapper, no surrounding text — one row per item below, using exactly this pattern per row:
<tr><td style="padding:3px 0; font-size:14px;">•&nbsp; <b>LABEL:</b> TOKEN/100</td></tr>
Items, in this order — SKIP any item whose token is not present in availablePlaceholders (never fabricate a number):
1. Design -> {{CustomerFields.DesignScore}}
2. Mobile Experience -> {{CustomerFields.MobileScore}}
3. SEO -> {{CustomerFields.SEOScore}}
4. Lead Generation -> {{CustomerFields.LeadGenerationScore}}
5. AI & Automation -> {{CustomerFields.AIAutomationScore}}
6. Overall -> {{CustomerFields.OverallWebsiteScore}}
No commentary, no extra rows, no other HTML tags.`,
    },
    {
      id: 'opportunities',
      label: 'Opportunities / gaps',
      format: 'paragraph',
      guidance: 'One to two sentences naming specific weak areas, using {{CustomerFields.LackingWebDevelopment}} / {{CustomerFields.LackingSEO}} if available. If neither is available, speak generally about common gaps relevant to the campaign goal instead of inventing specifics.',
    },
    {
      id: 'servicesPitch',
      label: 'How we can help',
      format: 'paragraph',
      guidance: 'One to two sentences on how the agency can help close those specific gaps, tying back to userPrompt. Concrete, not generic boilerplate.',
    },
    {
      id: 'monetization',
      label: 'Additional opportunity',
      format: 'paragraph',
      guidance: 'One to two sentences on a further commercial opportunity, using {{CustomerFields.MonetizeArea}} or {{CustomerFields.ImprovementArea}} if available; otherwise reinforce the main value proposition instead.',
    },
    {
      id: 'closing',
      label: 'Closing + call to action',
      format: 'paragraph',
      guidance: 'One to two sentences offering a concrete next step and inviting a reply, ending with a light question. No sign-off line — that is added separately.',
    },
  ],
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
              </table>
            </td>
          </tr>
          <tr><td style="height:4px; background:{{BRAND.accentColor}}; line-height:4px; font-size:0;">&nbsp;</td></tr>

          <tr>
            <td class="ec-inner-pad" style="padding:32px 36px; color:#1e293b; font-size:14.5px; line-height:1.7;">

              <p style="margin:0 0 16px 0;">{{AI:greeting}}</p>

              <p style="margin:0 0 20px 0;">{{AI:intro}}</p>

              <p style="margin:0 0 10px 0; font-size:16px; font-weight:700; color:{{BRAND.primaryColor}};">Website Performance Snapshot</p>

              <p style="margin:0 0 10px 0;">{{AI:snapshotLeadIn}}</p>

              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 20px 0;">
                {{AI:scoreRows}}
              </table>

              <p style="margin:0 0 16px 0;">{{AI:opportunities}}</p>

              <p style="margin:0 0 16px 0;">{{AI:servicesPitch}}</p>

              <p style="margin:0 0 16px 0;">{{AI:monetization}}</p>

              <p style="margin:0 0 24px 0;">{{AI:closing}}</p>

              <p style="margin:0;">
                Best regards,<br/>
                <b>{{BRAND.signOffName}}</b><br/>
                {{BRAND.shortTagline}}<br/>
                <a href="{{BRAND.website}}" style="color:{{BRAND.accentColor}}; text-decoration:none;">{{BRAND.websiteDisplay}}</a>
              </p>

            </td>
          </tr>

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
</html>`,
},
]

export const getEmailTemplateById = (id: string | null | undefined) =>
  emailTemplates.find((t) => t.id === id)