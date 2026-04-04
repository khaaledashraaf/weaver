# Component Progress Tracker

Status legend: Done = Figma-matched override + docs page | Partial = override exists, needs refinement | Todo = not yet implemented | Deferred = WIP in Figma

## Tier 1 — Core Interactive

| # | Component | Figma Page | Override | Docs | Status | Notes |
|---|-----------|-----------|----------|------|--------|-------|
| 1 | Button | Buttons | `button.ts` | `/buttons` | Done | 8px radius, 15px font, heights 36/40/48, 0.4 disabled opacity |
| 2 | Input | Input (New) | `input.ts` | `/inputs` | Done | 8px radius, 15px font, heights 32(md)/36(lg), 8px paddingX |
| 3 | Select | Select Input (New) | `select.ts` | `/select` | Done | Matches Input dimensions exactly |
| 4 | Checkbox | Checkbox | `checkbox.ts` | `/checkbox-radio` | Done | 16px box, 4px radius, 8px gap to label |
| 5 | Radio | Radio Button | `radio.ts` | `/checkbox-radio` | Done | 16px circle, 10px gap to label |
| 6 | Switch / Toggle | Toggle | `switch.ts` | `/switch` | Done | sm 32x20/14px thumb, md 40x24/18px thumb, green active |
| 7 | Textarea | Text Area | `input.ts` | `/inputs` | Done | 8px radius, shares Input tokens |

## Tier 2 — Feedback & Data Display

| # | Component | Figma Page | Override | Docs | Status | Notes |
|---|-----------|-----------|----------|------|--------|-------|
| 8 | Alert | Alert | `alert.ts` | `/alerts` | Done | 8px radius, 16px padding, 12px gap, 3 styles (Light/Outline/Solid) x 5 statuses |
| 9 | Tag / Chip | Tag/Chip | `chip.ts` | `/chips-badges` | Done | NOT full-pill — 6px(sm)/8px(md,lg) radius, heights 24/28/36 |
| 10 | Badge | Badge | `badge.ts` | `/chips-badges` | Done | Full-pill radius, 500 weight, sm 24px / lg 28px |
| 11 | Tooltip | Tooltip | `tooltip.ts` | `/tooltips` | Done | 6px radius, 12px font, 6px/8px padding |
| 12 | Table | Table | `misc.ts` | `/tables` | Done | 44px header, 14px/500 weight, 8px cell padding |
| 13 | Avatar | Avatar | `avatar.ts` | `/avatar` | Done | 32/40/48px, 600 weight initials, 9 sizes in Figma |

## Tier 3 — Layout & Navigation

| # | Component | Figma Page | Override | Docs | Status | Notes |
|---|-----------|-----------|----------|------|--------|-------|
| 14 | Modal | Modal | `surfaces.ts` | `/cards-modals` | Done | 12px radius, 0 padding (sections handle own), sizes S/M/L |
| 15 | Accordion | Accordion | `accordion.ts` | `/accordion` | Done | Default(0 radius) / Boxed(10px), 20px padding, 600/17px title |
| 16 | Tabs | Tabs | `misc.ts` | `/tabs` | Done | 15px/500 weight, 8px radius, 2px gap, Underline + Segment styles in Figma |
| 17 | Card | Cards | `surfaces.ts` | `/cards-modals` | Done | 16px radius, 1px border, no shadow |
| 18 | Breadcrumbs | Breadcrumbs | `misc.ts` | `/breadcrumbs` | Done | 15px/500 font, 4px gap, chevron 16px, icon 20px, default + raised styles |
| 19 | Divider | Divider / Content Divider | `divider.ts` | `/divider` | Done | Horizontal + vertical, placeholder override |

## Tier 4 — Supporting Components

| # | Component | Figma Page | Override | Docs | Status | Notes |
|---|-----------|-----------|----------|------|--------|-------|
| 20 | Slider | Slider | `slider.ts` | `/slider` | Done | 4px track, 24px thumb |
| 21 | Progress | Progress | `progress.ts` | `/progress` | Partial | Stub override, docs page created |
| 22 | Link Button | Buttons (Link Button) | `button.ts` | `/buttons` | Done | variant="link", 3 colors, 3 sizes, no-opacity disabled |
| 23 | Menu | Menu | — | — | Todo | Dropdown menu with item types |
| 24 | Pagination | Pagination | `pagination.tsx` | `/pagination` | Done | Custom WeaverPagination component, numeric/simple/summary, ghost/soft styles |
| 25 | Banner | Banner | — | — | Todo | brand/grey/black variants, full-width + floating |
| 26 | Social Buttons | Social buttons | — | — | Todo | Social login button variants |
| 27 | Button Group | Button Group | `button-group.ts` | `/button-group` | Done | Container with overflow hidden, ghost items, border-subtle separators, 3 sizes |
| 28 | Slideout / Drawer | Slideout | `surfaces.ts` | — | Partial | Placeholder override, no docs |

## Tier 5 — Complex / Deferred (WIP or custom patterns in Figma)

| # | Component | Figma Page | Status | Notes |
|---|-----------|-----------|--------|-------|
| 29 | Sidebar Navigation | Sidebar Navigation | Deferred | Marked 🟠 in Figma |
| 30 | TopBar Navigation | TopBar Navigation | Deferred | Marked ❌ don't do yet |
| 31 | Steps | Steps | Deferred | Custom multi-step pattern |
| 32 | Onboarding Steps | Onbording Steps | Deferred | Custom pattern |
| 33 | Timeline | Timeline | Deferred | Custom pattern |
| 34 | Activity Feed | Activity Feed | Deferred | Custom pattern |
| 35 | Charts | Charts | Deferred | Marked 🟠, Highcharts integration |
| 36 | Calendar / Date Picker | Calendar / Date Picker | Deferred | Complex, marked ✅ |
| 37 | File Upload | File upload | Deferred | Custom pattern |
| 38 | Command | Command | Deferred | Custom pattern (command palette) |
| 39 | Page Sections | Page Sections (WIP) | Deferred | Layout pattern, WIP |

## Open TODOs

| Component | Issue | Notes |
|-----------|-------|-------|
| Checkbox | Support text renders inline instead of below label | Joy UI's label slot uses inline layout; needs custom wrapper or slot override |
| Radio | Same support text issue as Checkbox | Same root cause |

## Summary

| Tier | Total | Done | Partial | Todo | Deferred |
|------|-------|------|---------|------|----------|
| 1 — Core Interactive | 7 | 7 | 0 | 0 | 0 |
| 2 — Feedback & Display | 6 | 6 | 0 | 0 | 0 |
| 3 — Layout & Navigation | 6 | 6 | 0 | 0 | 0 |
| 4 — Supporting | 7 | 5 | 1 | 1 | 0 |
| 5 — Complex / Deferred | 11 | 0 | 0 | 0 | 11 |
| **Total** | **37** | **24** | **1** | **1** | **11** |
