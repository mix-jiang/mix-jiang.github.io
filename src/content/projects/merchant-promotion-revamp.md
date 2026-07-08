---
title: Merchant Promotion System Revamp
date: "2024-06"
summary: Rebuilding WeChat Pay HK's merchant promotion system — from campaign-centric pages to a brand-centric platform, making promotions easier to launch for teams and easier to use for millions of users.
tags: [UX, Business, WeChat Pay HK]
draft: false
---

> 图片暂时热链自 Framer 托管(framerusercontent.com),待替换为仓库自托管。

WeChat Pay HK's main marketing strategy is launching joint promotions with merchants to drive transaction growth and wallet adoption. As joint promotions multiplied, the resources needed to prepare each one became strained. The promotion tools needed a redesign — to streamline everything from internal planning to user participation.

## 01 · Find Issues

**How is a merchant promotion campaign prepared?** Each launch involved WeChat Pay HK, the merchant, BD, operations, design, and dev: meetings for alignment, custom page design per campaign, repeated development, listing coupons across multiple pages, and full QA on every tool.

**For the team — low operational efficiency.** Complex preparation led to slow launches and reduced merchant willingness to cooperate.

**For users — campaigns were too complicated.** Claim rate and redemption rate both dropped ~5%. Typical feedback:

- "I don't know how to enter the event." / "Too many campaigns, difficult to choose."
- "Can't find the coupon after claiming." / "Coupon redemption failed."
- "One merchant seems to have a lot of campaign pages."

**Conclusion 1** — There seem to be many promotional campaigns, but the experience is so complicated that users never build the habit of using promotions.

## 02 · Issues in Process

### Entry points to claim coupons

A user looking for all of one brand's offers (e.g. McDonald's) had to visit **up to 5 different pages**: offers list, campaign page, e-stamp redemption, WeCoupons, and scan-offer — each with fragmented, inconsistent entry points.

- For team crews: launching one promotion meant configuring, designing and verifying up to 5 operational tools, with confusing relationships between coupons and pages.
- For users: too many pages, disordered linkage.

**Conclusion 2** — Activity pages and tools were confusing; users could not find a stable campaign page for a brand.

### Discount types

- **E-cash coupons** (35% of total): auto-redeemed at payment, usage rate over 40%.
- **Manual coupons** (65% of total): must be manually activated before payment — usage rate under 10%. A uniquely Hong Kong form of discount, crippled by complicated steps.

### Redemption experience

From trigger (banner/pop-up/notification) → campaign page → claim → "My Rewards" → manual use at checkout, the average time-to-use was 2.5 days, with users dropping off at every step.

**Conclusion 3** — Users didn't understand the complex discount types, and too many steps made coupons hard to use.

## 03 · Design Strategies

Two directions, returning from a campaign perspective to a **user perspective**:

1. **Claim** — integrate marketing tools, centralize by brand, revamp the user flow.
2. **Redeem** — raise awareness of benefits, add instructions, guide users based on context.

## 04 · Final Design

### Claim: brand centralization

All discounts of a brand brought together on a one-stop **merchant brand page** — from up to 5 campaign pages down to 1. Whichever traffic channel users come from, one page shows every offer of the brand.

![Brand page — before/after](https://framerusercontent.com/images/FWtDKhW16ZwXMqEj4jZtWfPQc.png?width=750)

On the back end, one merchant configuration manages all basic info, promotions and data — campaign configs, coupon configs, new/returning user offers, QR scan rewards, MGM invitations.

### Claim: marketing tools upgrade

Campaign pages upgraded to **modular components** reintegrated on brand pages: merchant info, offline QR rewards, new/returning user offers, ad banners, product coupons, loyalty rewards.

![Modular components](https://framerusercontent.com/images/U10Q2qkb0sGpjAjWHZ9KTHjeK24.png?scale-down-to=2048&width=750)

### Redeem: more instructions

Touch points around the claim flow teach users what each coupon is: distinct appearances per coupon type, step-by-step instructions, "find my coupons" guidance, and expiry notifications.

### Redeem: guidance based on context

Available coupons are recommended automatically by situation: claimed coupons surfaced on the brand page, reminders at checkout when showing the payment code, recommendations inside online services, and LBS-based nearby-merchant suggestions.

---

*Role: product designer · WeChat Pay HK · 2024*
