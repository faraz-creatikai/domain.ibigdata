export interface EmailTemplate {
  id: string
  name: string
  description?: string
  category?: string
  html: string
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
</html>`,
  },
]

export const getEmailTemplateById = (id: string | null | undefined) =>
  emailTemplates.find((t) => t.id === id)