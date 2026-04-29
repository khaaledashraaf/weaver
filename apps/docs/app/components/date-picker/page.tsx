"use client";
import * as React from "react";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import { WeaverDatePicker, WeaverCalendar } from "weaver-ui-joyui";
import type { DatePickerValue } from "weaver-ui-joyui";
import { Section } from "../section";
import { DemoBox } from "../demo-box";

/* ── Figma variants ──
  WeaverCalendar: inline surface (256px wide), 12px radius, shadow.lg, 8px padding
  WeaverDatePicker: 40px input (260px wide by default) + popover with the calendar
  Modes: single (Date) or range ([Date, Date])
  Sizes: xs (32) / sm (36) / md (40) — matches Weaver Button/Input
  States: placeholder, hover, focused (or open), filled, disabled, filled+disabled
  Cells: 32×32, 8px radius, brand bg for selected, bg-brand-subtle for range middle
  Today: content-brand-default text + 4px blue dot below
*/

// ── Helpers ───────────────────────────────────────────────────────────

function daysFromNow(n: number) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d;
}

function monthsFromNow(n: number) {
  const d = new Date();
  d.setMonth(d.getMonth() + n);
  return d;
}

// ── Controlled demo factory ───────────────────────────────────────────

function SingleCtrl(props: Omit<React.ComponentProps<typeof WeaverDatePicker>, "value" | "onChange"> & { initial?: Date | null }) {
  const { initial = null, ...rest } = props;
  const [v, setV] = React.useState<DatePickerValue>(initial);
  return <WeaverDatePicker mode="single" value={v} onChange={setV} {...rest} />;
}

function RangeCtrl(props: Omit<React.ComponentProps<typeof WeaverDatePicker>, "value" | "onChange"> & { initial?: [Date | null, Date | null] }) {
  const { initial = [null, null], ...rest } = props;
  const [v, setV] = React.useState<DatePickerValue>(initial);
  return <WeaverDatePicker mode="range" value={v} onChange={setV} {...rest} />;
}

function InlineSingleCtrl(props: Omit<React.ComponentProps<typeof WeaverCalendar>, "value" | "onChange"> & { initial?: Date | null }) {
  const { initial = null, ...rest } = props;
  const [v, setV] = React.useState<DatePickerValue>(initial);
  return <WeaverCalendar mode="single" value={v} onChange={setV} {...rest} />;
}

function InlineRangeCtrl(props: Omit<React.ComponentProps<typeof WeaverCalendar>, "value" | "onChange"> & { initial?: [Date | null, Date | null] }) {
  const { initial = [null, null], ...rest } = props;
  const [v, setV] = React.useState<DatePickerValue>(initial);
  return <WeaverCalendar mode="range" value={v} onChange={setV} {...rest} />;
}

// ── Page ──────────────────────────────────────────────────────────────

export default function DatePickerPage() {
  return (
    <>
      <Typography level="h2" sx={{ mb: 1, fontSize: "2rem" }}>
        Date Picker
      </Typography>
      <Typography level="body-md" sx={{ color: "text.secondary", mb: 4 }}>
        An input that opens a calendar popover. Supports single-date and
        date-range selection via the <code>mode</code> prop. For an always-visible
        calendar surface, use <code>WeaverCalendar</code> directly.
      </Typography>

      {/* ─────────────────────────────────────── Modes */}
      <Section
        title="Modes"
        description="Single-date selection via mode='single' (default), or date-range via mode='range'."
      >
        <Stack direction="row" gap={3} flexWrap="wrap">
          <DemoBox code={`<WeaverDatePicker mode="single" value={value} onChange={setValue} />`}>
            <SingleCtrl />
          </DemoBox>
          <DemoBox code={`<WeaverDatePicker mode="range" value={value} onChange={setValue} />`}>
            <RangeCtrl />
          </DemoBox>
        </Stack>
      </Section>

      {/* ─────────────────────────────────────── Sizes */}
      <Section
        title="Sizes"
        description="xs (32px), sm (36px), md (40px). Matches Weaver Input/Button sizing. Defaults to md."
      >
        <DemoBox
          code={`<WeaverDatePicker size="xs" mode="single" />
<WeaverDatePicker size="sm" mode="single" />
<WeaverDatePicker size="md" mode="single" />

<WeaverDatePicker size="xs" mode="range" />
<WeaverDatePicker size="sm" mode="range" />
<WeaverDatePicker size="md" mode="range" />`}
        >
          <Stack direction="row" gap={4} flexWrap="wrap">
            <Stack gap={2}>
              <Typography level="body-xs" sx={{ color: "text.tertiary" }}>
                single
              </Typography>
              <SingleCtrl size="xs" />
              <SingleCtrl size="sm" />
              <SingleCtrl size="md" />
            </Stack>
            <Stack gap={2}>
              <Typography level="body-xs" sx={{ color: "text.tertiary" }}>
                range
              </Typography>
              <RangeCtrl size="xs" />
              <RangeCtrl size="sm" />
              <RangeCtrl size="md" />
            </Stack>
          </Stack>
        </DemoBox>
      </Section>

      {/* ─────────────────────────────────────── Value states */}
      <Section
        title="Value states"
        description="Empty (placeholder text), filled single, filled range within the same month, filled range across months, and a partial range showing only the start."
      >
        <Stack direction="row" gap={3} flexWrap="wrap">
          <DemoBox code={`<WeaverDatePicker mode="single" />`}>
            <SingleCtrl />
          </DemoBox>
          <DemoBox code={`<WeaverDatePicker mode="single" value={new Date()} />`}>
            <SingleCtrl initial={new Date()} />
          </DemoBox>
          <DemoBox
            code={`<WeaverDatePicker
  mode="range"
  value={[today, today + 7 days]}
/>`}
          >
            <RangeCtrl initial={[new Date(), daysFromNow(7)]} />
          </DemoBox>
          <DemoBox
            code={`<WeaverDatePicker
  mode="range"
  value={[today, today + 45 days]}  // cross-month
/>`}
          >
            <RangeCtrl initial={[new Date(), daysFromNow(45)]} />
          </DemoBox>
          <DemoBox
            code={`<WeaverDatePicker
  mode="range"
  value={[today, null]}  // partial: start only
/>`}
          >
            <RangeCtrl initial={[new Date(), null]} />
          </DemoBox>
        </Stack>
      </Section>

      {/* ─────────────────────────────────────── Interaction states */}
      <Section
        title="Interaction states"
        description="Default, hover (border darkens), focused (4px blue ring — tab into the trigger to see it), popover-open (same focus ring while the calendar is open), disabled, and filled-and-disabled."
      >
        <Stack direction="row" gap={3} flexWrap="wrap">
          <DemoBox code={`<WeaverDatePicker mode="single" />`}>
            <Box>
              <Typography level="body-xs" sx={{ color: "text.tertiary", mb: 1 }}>
                default / hover / focused
              </Typography>
              <SingleCtrl />
            </Box>
          </DemoBox>
          <DemoBox code={`<WeaverDatePicker mode="single" disabled />`}>
            <Box>
              <Typography level="body-xs" sx={{ color: "text.tertiary", mb: 1 }}>
                disabled (empty)
              </Typography>
              <SingleCtrl disabled />
            </Box>
          </DemoBox>
          <DemoBox code={`<WeaverDatePicker mode="single" value={new Date()} disabled />`}>
            <Box>
              <Typography level="body-xs" sx={{ color: "text.tertiary", mb: 1 }}>
                disabled (filled)
              </Typography>
              <SingleCtrl initial={new Date()} disabled />
            </Box>
          </DemoBox>
        </Stack>
      </Section>

      {/* ─────────────────────────────────────── Constraints */}
      <Section
        title="Min and max dates"
        description="Days outside the provided bounds render in the disabled text color and aren't selectable. You can set minDate alone, maxDate alone, or both."
      >
        <Stack direction="row" gap={3} flexWrap="wrap">
          <DemoBox
            code={`<WeaverDatePicker
  mode="single"
  minDate={today}          // today and later
/>`}
          >
            <SingleCtrl minDate={new Date()} />
          </DemoBox>
          <DemoBox
            code={`<WeaverDatePicker
  mode="single"
  maxDate={today}          // today and earlier
/>`}
          >
            <SingleCtrl maxDate={new Date()} />
          </DemoBox>
          <DemoBox
            code={`<WeaverDatePicker
  mode="single"
  minDate={today - 7 days}
  maxDate={today + 14 days}
/>`}
          >
            <SingleCtrl
              minDate={daysFromNow(-7)}
              maxDate={daysFromNow(14)}
            />
          </DemoBox>
        </Stack>
      </Section>

      {/* ─────────────────────────────────────── Customization */}
      <Section
        title="Placeholder & width"
        description="Provide a custom placeholder via the placeholder prop, and override the default 260px trigger width."
      >
        <Stack direction="row" gap={3} flexWrap="wrap">
          <DemoBox code={`<WeaverDatePicker mode="single" placeholder="When does it start?" />`}>
            <SingleCtrl placeholder="When does it start?" />
          </DemoBox>
          <DemoBox code={`<WeaverDatePicker mode="range" placeholder="Pick a range…" />`}>
            <RangeCtrl placeholder="Pick a range…" />
          </DemoBox>
          <DemoBox code={`<WeaverDatePicker mode="single" width={180} />`}>
            <SingleCtrl width={180} />
          </DemoBox>
          <DemoBox code={`<WeaverDatePicker mode="range" width={360} />`}>
            <RangeCtrl width={360} />
          </DemoBox>
        </Stack>
      </Section>

      {/* ─────────────────────────────────────── Calendar position */}
      <Section
        title="Calendar position"
        description="Place the calendar popover relative to the trigger via calendarPos. Side (top | bottom) flips the calendar above the trigger when it's near the bottom of the viewport. Align (left | center | right) shifts the calendar horizontally when the trigger is near a side edge. Defaults to 'bottom-center'."
      >
        <Stack gap={4}>
          <Stack gap={2}>
            <Typography level="body-xs" sx={{ color: "text.tertiary" }}>
              bottom — opens below the trigger
            </Typography>
            <Stack direction="row" gap={3} flexWrap="wrap">
              <DemoBox code={`<WeaverDatePicker calendarPos="bottom-left" />`}>
                <SingleCtrl calendarPos="bottom-left" />
              </DemoBox>
              <DemoBox code={`<WeaverDatePicker calendarPos="bottom-center" />  // default`}>
                <SingleCtrl calendarPos="bottom-center" />
              </DemoBox>
              <DemoBox code={`<WeaverDatePicker calendarPos="bottom-right" />`}>
                <SingleCtrl calendarPos="bottom-right" />
              </DemoBox>
            </Stack>
          </Stack>
          <Stack gap={2}>
            <Typography level="body-xs" sx={{ color: "text.tertiary" }}>
              top — opens above the trigger
            </Typography>
            <Stack direction="row" gap={3} flexWrap="wrap">
              <DemoBox code={`<WeaverDatePicker calendarPos="top-left" />`}>
                <SingleCtrl calendarPos="top-left" />
              </DemoBox>
              <DemoBox code={`<WeaverDatePicker calendarPos="top-center" />`}>
                <SingleCtrl calendarPos="top-center" />
              </DemoBox>
              <DemoBox code={`<WeaverDatePicker calendarPos="top-right" />`}>
                <SingleCtrl calendarPos="top-right" />
              </DemoBox>
            </Stack>
          </Stack>
        </Stack>
      </Section>

      {/* ─────────────────────────────────────── Today label */}
      <Section
        title="Today label"
        description="Pass todayLabel to replace the formatted date with a short label (e.g. 'Today') when the selected value is today's date. Single-mode only; omit the prop for the default formatted-date behavior."
      >
        <Stack direction="row" gap={3} flexWrap="wrap">
          <DemoBox code={`<WeaverDatePicker mode="single" value={today} todayLabel="Today" />`}>
            <SingleCtrl initial={new Date()} todayLabel="Today" />
          </DemoBox>
          <DemoBox code={`<WeaverDatePicker mode="single" value={yesterday} todayLabel="Today" />`}>
            <SingleCtrl initial={daysFromNow(-1)} todayLabel="Today" />
          </DemoBox>
        </Stack>
      </Section>

      {/* ─────────────────────────────────────── Default month */}
      <Section
        title="Default month"
        description="When the picker opens with no value, it lands on today's month. Override with defaultMonth to open somewhere else — e.g. three months ahead for a booking flow."
      >
        <DemoBox code={`<WeaverDatePicker mode="single" defaultMonth={threeMonthsAhead} />`}>
          <SingleCtrl defaultMonth={monthsFromNow(3)} />
        </DemoBox>
      </Section>

      {/* ─────────────────────────────────────── Inline calendar */}
      <Section
        title="Inline calendar"
        description="WeaverCalendar is the visual calendar surface alone. Use it when the calendar should always be visible — scheduling views, admin UIs, etc. It accepts the same props as WeaverDatePicker (minus the trigger-specific ones)."
      >
        <Stack direction="row" gap={3} flexWrap="wrap">
          <DemoBox code={`<WeaverCalendar mode="single" value={value} onChange={setValue} />`}>
            <InlineSingleCtrl />
          </DemoBox>
          <DemoBox code={`<WeaverCalendar mode="range" value={value} onChange={setValue} />`}>
            <InlineRangeCtrl />
          </DemoBox>
        </Stack>
      </Section>

      <Section
        title="Inline with initial value"
        description="A pre-selected single date, and a pre-selected multi-week range — the range-middle cells get the soft brand fill with rounded week-edge corners."
      >
        <Stack direction="row" gap={3} flexWrap="wrap">
          <DemoBox code={`<WeaverCalendar mode="single" value={today} onChange={setValue} />`}>
            <InlineSingleCtrl initial={new Date()} />
          </DemoBox>
          <DemoBox
            code={`<WeaverCalendar
  mode="range"
  value={[today - 3, today + 10]}
  onChange={setValue}
/>`}
          >
            <InlineRangeCtrl initial={[daysFromNow(-3), daysFromNow(10)]} />
          </DemoBox>
        </Stack>
      </Section>

      <Section
        title="Inline with bounds"
        description="minDate/maxDate also apply to the inline calendar."
      >
        <DemoBox
          code={`<WeaverCalendar
  mode="single"
  minDate={today - 7 days}
  maxDate={today + 14 days}
/>`}
        >
          <InlineSingleCtrl
            minDate={daysFromNow(-7)}
            maxDate={daysFromNow(14)}
          />
        </DemoBox>
      </Section>

      {/* ─────────────────────────────────────── Usage */}
      <Section title="Usage">
        <Typography level="body-sm" sx={{ color: "text.secondary", mb: 1 }}>
          <strong>WeaverDatePicker</strong> is the full input+popover picker.{" "}
          <strong>WeaverCalendar</strong> is just the calendar surface — use it
          when you need the calendar always visible (e.g. a scheduling view).
        </Typography>
        <Typography level="body-sm" sx={{ color: "text.secondary", mb: 1 }}>
          The <code>value</code> shape depends on <code>mode</code>:{" "}
          <code>Date | null</code> for <code>single</code>, and{" "}
          <code>[Date | null, Date | null]</code> for <code>range</code>.
          The popover auto-closes when a single date is picked, or when both
          ends of a range are picked.
        </Typography>
        <Typography level="body-sm" sx={{ color: "text.secondary" }}>
          The month header button toggles a month-picker view to jump across
          years quickly. Today is marked with a small blue dot; out-of-month
          and out-of-range days render in the disabled text color. Press{" "}
          <code>Esc</code> or click outside the popover to close it.
        </Typography>
      </Section>
    </>
  );
}
