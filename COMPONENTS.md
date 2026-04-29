# Component Progress Tracker

Status legend: Done = Figma-matched override + docs page | Partial = override exists, needs refinement or lacks docs/spec | Todo = not yet implemented | Deferred = WIP in Figma

Notes columns are pulled from the actual override source (`packages/joyui/src/components/`), not from Figma — they reflect what the code currently does.

## Tier 1 — Core Interactive

| # | Component | Figma Page | Override | Docs | Status | Notes |
|---|-----------|-----------|----------|------|--------|-------|
| 1 | Button | Buttons | `button.ts:7` | `/buttons` | Done | 8px radius, 15px/500 weight, heights 32(xs)/36(sm)/40(md)/48(lg), pressed tokens per variant+color, disabled forces `opacity: 1` + `interactive-*-disabled` tokens |
| 2 | IconButton | Buttons | `button.ts:176` | shared `/buttons` | Done | Square 32/36/40/48, 8px radius, shares Button's disabled-token behavior |
| 3 | Input | Input (New) | `input.ts:3` | `/inputs` | Done | 8px radius, 15px font, heights 32(md)/36(lg), 8px paddingX, 4px blue focus ring (suppressed in danger mode), `interactive-input-disabled` bg on disabled |
| 4 | Select | Select Input (New) | `select.ts:3` | `/select` | Partial | 8px radius, heights 28(sm)/32(md)/36(lg), 2px focus outline. ⚠ Disabled uses `opacity: 0.5` — violates the disabled-no-opacity rule |
| 5 | Checkbox | Checkbox | `checkbox.ts:3` | `/checkbox-radio` | Done | 4px radius, 14/16/20px box (with 10/12/14px svg), 8px gap to label, explicit `bg/border/content-disabled` tokens |
| 6 | Radio | Radio Button | `radio.ts:3` | `/checkbox-radio` | Partial | 14/16/20px circle, 10px gap to label. ⚠ Disabled uses `opacity: 0.5` — violates the disabled-no-opacity rule |
| 7 | Switch / Toggle | Toggle | `switch.ts:3` | `/switch` | Done | sm 32×20 track / 14px thumb, md+lg 40×24 / 18px thumb, slate-400 track → slate-500 hover, green-500 when checked, white thumb |
| 8 | Textarea | Text Area | `input.ts:44` | `/inputs` | Done | 8px radius, shares Input's focus ring + disabled tokens |
| 9 | FormControl / FormLabel / FormHelperText | — (part of Input) | `input.ts:68-86` | shared `/inputs` | Partial | FormControl: 8px label margin-bottom. Label: 14px/500/content-default. HelperText: 13px/content-subtle, danger color on error. No dedicated Figma page or docs |

## Tier 2 — Feedback & Data Display

| # | Component | Figma Page | Override | Docs | Status | Notes |
|---|-----------|-----------|----------|------|--------|-------|
| 10 | Alert | Alert | `alert.ts:3` | `/alerts` | Done | 8px radius, 16px padding, 12px gap, 15px/500 weight. Variants + statuses come from Joy's built-in color/variant props |
| 11 | Tag / Chip | Tag/Chip | `chip.ts:3` | `/chips` | Done | NOT full-pill — 6px(sm) / 8px(md,lg) radius, minHeights 24/28/36, fontSizes 13/14/15, 500 weight |
| 12 | Badge | Badge | `badge.ts:3` | `/badges` | Done | Dot/count overlay: 11px/500 weight, full-pill radius, 2px ring |
| 13 | Tooltip | Tooltip | `tooltip.ts:3` | `/tooltips` | Done | 6px radius, 12px/500 weight, 6px/8px padding |
| 14 | Table | Table | `misc.ts:128` | `/tables` | Done | 8px outer radius, 44px header height, 14px/500 header (content-subtle), 8px cell padX, hover + selected rows use `interactive-ghost-hover` |
| 15 | Avatar | Avatar | `avatar.ts:3` | `/avatar` | Done | 32/40/48px at 600 weight; Figma has 9 sizes, 3 implemented. AvatarGroup uses negative 6px gap |
| 16 | Skeleton | — | `misc.ts:164` | — | Partial | Empty override (Joy defaults), no docs, no Figma spec |
| 17 | Snackbar | — | `misc.ts:170` | — | Partial | 8px radius + shadow.lg only, no docs, no Figma spec |

## Tier 3 — Layout & Navigation

| # | Component | Figma Page | Override | Docs | Status | Notes |
|---|-----------|-----------|----------|------|--------|-------|
| 18 | Modal | Modal | `surfaces.ts:34` | `/cards-modals` | Done | ModalDialog: 12px radius, 0 padding (sections own it), shadow.xl. ModalClose: 8px radius. Sizes come from Joy size prop |
| 19 | Dialog (Title / Content / Actions) | — (part of Modal) | `surfaces.ts:64-84` | shared `/cards-modals` | Partial | Title weight 600, Content empty, Actions 8px gap. Used inside Modal, no standalone Figma page or docs |
| 20 | Accordion | Accordion | `accordion.ts:3` | `/accordion` | Done | Group radius 10px (Boxed) / 0 (Default), 20px horizontal padding, 17px/600 title with 20px vertical padding, 15px content |
| 21 | Tabs | Tabs | `misc.ts:12` | `/tabs` | Done | 15px Tab font (400 default, 500 selected), 8px control radius, 2px gap. Three list styles: plain=underline, soft=segment pill, outlined=rounded |
| 22 | Card | Cards | `surfaces.ts:11` | `/cards-modals` | Done | 16px radius, 1px border-default, no shadow, 16px padding |
| 23 | Sheet | — | `surfaces.ts:3` | — | Partial | 6px radius only, no docs, no Figma spec |
| 24 | Breadcrumbs | Breadcrumbs | `misc.ts:218` | `/breadcrumbs` | Done | 15px/500 weight, 2px gap, subtle inactive → default weight 500 on last item, disabled via `aria-disabled`. Default + Raised styles via `variant` prop |
| 25 | Link | — | `misc.ts:3` | — | Partial | 500 weight + 4px underline offset only, no docs, no Figma spec |
| 26 | Divider | Divider / Content Divider | `divider.ts:1` | `/divider` | Done | Empty override — relies on Joy defaults + theme palette |
| 27 | List (+ ListItem / ItemButton / Divider / Subheader) | — | `misc.ts:179-216` | — | Partial | ListItemButton 8px radius + 8px gap; Subheader 12px/600 uppercase content-muted; rest empty. No docs, no Figma spec |

## Tier 4 — Supporting Components

| # | Component | Figma Page | Override | Docs | Status | Notes |
|---|-----------|-----------|----------|------|--------|-------|
| 28 | Slider | Slider | `slider.ts:3` | `/slider` | Done | 4px track, 24px thumb with full radius + shadow.sm |
| 29 | Progress | Progress | `progress.ts:3` | `/progress` | Partial | LinearProgress: full radius only. CircularProgress: empty override |
| 30 | Link Button | Buttons (Link Button) | `button.ts:61` (variant="link") | shared `/buttons` | Done | variant="link" — 3 colors (primary/neutral/danger) with content-link tokens, 3 sizes (sm=13 / md=15 / lg=17), no-opacity disabled |
| 31 | Menu | Menu | — | — | Todo | Spec exists (`menu.json`), no override, no docs |
| 32 | Pagination | Pagination | `pagination.tsx` | `/pagination` | Done | Custom WeaverPagination component — numeric/simple/summary variants, ghost/soft styles, 32×32 items at 15px/500 with 4px radius, chevron SVGs inline |
| 33 | Banner | Banner | — | — | Todo | Spec exists (`banner.json`), no override, no docs — brand/grey/black variants, full-width + floating |
| 34 | Social Buttons | Social buttons | — | — | Todo | No spec, no override, no docs |
| 35 | Button Group | Button Group | `button-group.ts:3` | `/button-group` | Done | 8px container radius + overflow hidden, `interactive-secondary-default` bg, ghost items at 15px/500, border-subtle 1px separators, 4 sizes (xs/sm/md/lg) |
| 36 | Slideout / Drawer | Slideout | `surfaces.ts:58` | — | Partial | Empty override, no docs |
| 36a | Date Picker / Calendar | Calendar / Date Picker | `date-picker.tsx` | `/date-picker` | Done | Custom `WeaverDatePicker` (input trigger + popover) and `WeaverCalendar` (inline). `mode="single"` or `"range"`, sizes xs(32)/sm(36)/md(40) matching Weaver Input/Button. Explicit states: placeholder, hover, focused (4px focus ring when open or keyboard-focused), filled, disabled. Native date math (no deps), month/year picker view, min/max bounds, today dot marker, range Left/Middle/Right cell styling with week-edge corner rounding |

## Tier 5 — Complex / Deferred (WIP or custom patterns in Figma)

| # | Component | Figma Page | Status | Notes |
|---|-----------|-----------|--------|-------|
| 37 | Sidebar Navigation | Sidebar Navigation | Deferred | Marked 🟠 in Figma |
| 38 | TopBar Navigation | TopBar Navigation | Deferred | Marked ❌ don't do yet |
| 39 | Steps | Steps | Deferred | Custom multi-step pattern |
| 40 | Onboarding Steps | Onbording Steps | Deferred | Custom pattern |
| 41 | Timeline | Timeline | Deferred | Custom pattern |
| 42 | Activity Feed | Activity Feed | Deferred | Custom pattern |
| 43 | Charts | Charts | Deferred | Marked 🟠, Highcharts integration |
| 44 | Calendar / Date Picker | Calendar / Date Picker | Done (moved) | Now in Tier 4 — `WeaverDatePicker` / `WeaverCalendar` |
| 45 | File Upload | File upload | Deferred | Custom pattern |
| 46 | Command | Command | Deferred | Custom pattern (command palette) |
| 47 | Page Sections | Page Sections (WIP) | Deferred | Layout pattern, WIP |

## Open TODOs

| Component | Issue | Notes |
|-----------|-------|-------|
| Select | Disabled uses `opacity: 0.5` (`select.ts:25`) | Replace with explicit `interactive-input-disabled` + `content-disabled` tokens to match Input/Button |
| Radio | Disabled uses `opacity: 0.5` (`radio.ts:22`) | Replace with explicit `bg/border/content-disabled` tokens to match Checkbox |
| Checkbox | Support text renders inline instead of below label | Joy UI's label slot uses inline layout; needs custom wrapper or slot override |
| Radio | Same support text issue as Checkbox | Same root cause as above |
| Divider | Override is empty (`divider.ts:1`) | Confirm Figma requires nothing beyond Joy defaults, or add styles |
| CircularProgress | Override is empty (`progress.ts:11`) | Confirm Figma requires nothing beyond Joy defaults, or add styles |
| Docs | Orphan page `apps/docs/app/components/chips-badges/` | Not linked from the sidebar (canonical pages are `chips/` and `badges/`) — delete it |

## Summary

| Tier | Total | Done | Partial | Todo | Deferred |
|------|-------|------|---------|------|----------|
| 1 — Core Interactive | 9 | 6 | 3 | 0 | 0 |
| 2 — Feedback & Display | 8 | 6 | 2 | 0 | 0 |
| 3 — Layout & Navigation | 10 | 6 | 4 | 0 | 0 |
| 4 — Supporting | 10 | 5 | 2 | 3 | 0 |
| 5 — Complex / Deferred | 10 | 0 | 0 | 0 | 10 |
| **Total** | **47** | **23** | **11** | **3** | **10** |
