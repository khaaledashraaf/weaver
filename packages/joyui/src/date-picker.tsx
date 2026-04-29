import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { tokens, resolve } from "./tokens";
import { font } from "./typography";

// ── Date math (native, no deps) ───────────────────────────────────────
// Weeks start on Sunday to match the Figma (S M T W T F S).

function startOfDay(d: Date): Date {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function addMonths(d: Date, n: number): Date {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}

function addYears(d: Date, n: number): Date {
  return new Date(d.getFullYear() + n, d.getMonth(), 1);
}

function isSameDay(a: Date | null | undefined, b: Date | null | undefined): boolean {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

function compareDay(a: Date, b: Date): number {
  const da = startOfDay(a).getTime();
  const db = startOfDay(b).getTime();
  return da === db ? 0 : da < db ? -1 : 1;
}

function isBetween(d: Date, start: Date, end: Date): boolean {
  return compareDay(d, start) >= 0 && compareDay(d, end) <= 0;
}

// Build a 6×7 grid of Dates starting from the Sunday on or before the
// first of the given month. Always 42 cells so the calendar height is stable.
function buildMonthGrid(month: Date): Date[] {
  const first = startOfMonth(month);
  const offset = first.getDay(); // 0 = Sunday
  const gridStart = new Date(first);
  gridStart.setDate(first.getDate() - offset);
  const grid: Date[] = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    grid.push(d);
  }
  return grid;
}

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

const MONTH_FMT = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});
const SHORT_MONTH_FMT = new Intl.DateTimeFormat("en-US", { month: "short" });
const DISPLAY_FMT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
const SHORT_DISPLAY_FMT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

function formatMonthYear(d: Date): string {
  return MONTH_FMT.format(d);
}

function formatTriggerDate(d: Date): string {
  return DISPLAY_FMT.format(d);
}

function formatRangeDate(start: Date, end: Date): string {
  // If same year, drop year from the start; if cross-year, show both fully.
  if (start.getFullYear() === end.getFullYear()) {
    return `${SHORT_DISPLAY_FMT.format(start)} – ${DISPLAY_FMT.format(end)}`;
  }
  return `${DISPLAY_FMT.format(start)} – ${DISPLAY_FMT.format(end)}`;
}

// ── Icons (inline SVG, no external dep) ────────────────────────────────

const iconCommon = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "currentColor" } as const;

function ChevronLeft() {
  return (
    <svg {...iconCommon} aria-hidden="true">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg {...iconCommon} aria-hidden="true">
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
    </svg>
  );
}

function ChevronDown({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 15.375L6 9.375L7.4 7.975L12 12.575L16.6 7.975L18 9.375L12 15.375Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17 3h3a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h3V1h2v2h6V1h2v2zm2 7H5v9h14v-9zm-2-5H7v3H5V5h14v3h-2V5z" />
    </svg>
  );
}

// ── Types ──────────────────────────────────────────────────────────────

export type DatePickerMode = "single" | "range";
export type DatePickerSize = "xs" | "sm" | "md";
export type DatePickerCalendarPos =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";
export type SingleValue = Date | null;
export type RangeValue = [Date | null, Date | null];
export type DatePickerValue = SingleValue | RangeValue;

const SIZE_HEIGHTS: Record<DatePickerSize, number> = { xs: 32, sm: 36, md: 40 };

export interface WeaverCalendarProps {
  mode?: DatePickerMode;
  value?: DatePickerValue;
  onChange?: (value: DatePickerValue) => void;
  minDate?: Date;
  maxDate?: Date;
  /** Month initially displayed when uncontrolled. Defaults to today's month. */
  defaultMonth?: Date;
}

export interface WeaverDatePickerProps extends WeaverCalendarProps {
  placeholder?: string;
  disabled?: boolean;
  /** Width of the trigger input. Defaults to 260 to match Figma. */
  width?: number | string;
  /** Trigger height: xs=32, sm=36, md=40. Defaults to md. Matches Weaver Input/Button sizing. */
  size?: DatePickerSize;
  /** Placement of the calendar popover relative to the trigger. Side (top/bottom) controls vertical flip, align (left/center/right) controls horizontal alignment. Defaults to "bottom-center". */
  calendarPos?: DatePickerCalendarPos;
  /** When set, the trigger shows this label (e.g. "Today") instead of the formatted date when the selected value is today. Single mode only. */
  todayLabel?: string;
}

// ── Shared style helpers ───────────────────────────────────────────────

function isDisabledDate(d: Date, minDate?: Date, maxDate?: Date): boolean {
  if (minDate && compareDay(d, minDate) < 0) return true;
  if (maxDate && compareDay(d, maxDate) > 0) return true;
  return false;
}

// ── WeaverCalendar ─────────────────────────────────────────────────────

const SURFACE_SX = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: tokens.spacing.md,
  p: tokens.spacing.md,
  width: 256,
  bgcolor: resolve("{alias.bg-raised}"),
  border: `1px solid ${resolve("{alias.border-subtle}")}`,
  borderRadius: tokens.radius["2xl"],
  boxShadow: tokens.shadow.lg,
};

const HEADER_BUTTON_SX = {
  minWidth: 32,
  minHeight: 32,
  width: 32,
  height: 32,
  borderRadius: tokens.radius["control-default"],
  bgcolor: resolve("{alias.interactive-soft-default}"),
  color: resolve("{alias.content-default}"),
  "&:hover": {
    bgcolor: resolve("{alias.interactive-soft-hover}"),
  },
  "&.Mui-disabled, &.Joy-disabled": {
    opacity: 1,
    bgcolor: resolve("{alias.interactive-ghost-disabled}"),
    color: resolve("{alias.content-disabled}"),
  },
} as const;

export const WeaverCalendar = React.forwardRef<HTMLDivElement, WeaverCalendarProps>(
  function WeaverCalendar(props, ref) {
    const {
      mode = "single",
      value,
      onChange,
      minDate,
      maxDate,
      defaultMonth,
    } = props;

    // Resolve the initial month from value → defaultMonth → today
    const initialMonth = React.useMemo(() => {
      if (mode === "single" && value instanceof Date) return startOfMonth(value);
      if (mode === "range" && Array.isArray(value) && value[0]) return startOfMonth(value[0]);
      if (defaultMonth) return startOfMonth(defaultMonth);
      return startOfMonth(new Date());
    }, []); // only on mount — further navigation is user-driven

    const [currentMonth, setCurrentMonth] = React.useState<Date>(initialMonth);
    const [view, setView] = React.useState<"days" | "monthYear">("days");

    const today = React.useMemo(() => startOfDay(new Date()), []);

    // Normalize value → {selectedStart, selectedEnd}
    const { rangeStart, rangeEnd } = React.useMemo(() => {
      if (mode === "single") {
        const d = value instanceof Date ? value : null;
        return { rangeStart: d, rangeEnd: d };
      }
      const arr = Array.isArray(value) ? value : [null, null];
      return { rangeStart: arr[0], rangeEnd: arr[1] };
    }, [mode, value]);

    const handleDayClick = (d: Date) => {
      if (isDisabledDate(d, minDate, maxDate)) return;

      if (mode === "single") {
        onChange?.(d);
        return;
      }

      // Range logic: if no start OR both set → start a new range
      if (!rangeStart || (rangeStart && rangeEnd)) {
        onChange?.([d, null]);
        return;
      }
      // Start is set, end is not → complete the range, clamping order
      if (compareDay(d, rangeStart) < 0) {
        onChange?.([d, rangeStart]);
      } else {
        onChange?.([rangeStart, d]);
      }
    };

    const goPrev = () => {
      setCurrentMonth((m) => addMonths(m, -1));
    };
    const goNext = () => {
      setCurrentMonth((m) => addMonths(m, 1));
    };

    const grid = React.useMemo(() => buildMonthGrid(currentMonth), [currentMonth]);

    // Split grid into 6 weeks for row-based range-corner logic.
    const weeks: Date[][] = [];
    for (let i = 0; i < 6; i++) weeks.push(grid.slice(i * 7, i * 7 + 7));

    return (
      <Box ref={ref} sx={SURFACE_SX}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", gap: tokens.spacing.md }}>
          <IconButton onClick={goPrev} aria-label="Previous month" size="sm" sx={HEADER_BUTTON_SX}>
            <ChevronLeft />
          </IconButton>
          <Box
            component="button"
            type="button"
            onClick={() => setView(view === "days" ? "monthYear" : "days")}
            aria-label="Toggle month/year view"
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: tokens.spacing.xs,
              minHeight: 32,
              px: tokens.spacing.md,
              py: tokens.spacing.sm,
              border: `1px solid ${resolve("{alias.border-subtle}")}`,
              borderRadius: tokens.radius.lg,
              bgcolor: "transparent",
              color: resolve("{alias.content-default}"),
              fontFamily: "Inter, sans-serif",
              fontSize: font["body-md"].fontSize,
              fontWeight: 500,
              lineHeight: font["body-md"].lineHeight,
              cursor: "pointer",
              "&:hover": { bgcolor: resolve("{alias.interactive-ghost-hover}") },
            }}
          >
            {formatMonthYear(currentMonth)}
            <ChevronDown />
          </Box>
          <IconButton onClick={goNext} aria-label="Next month" size="sm" sx={HEADER_BUTTON_SX}>
            <ChevronRight />
          </IconButton>
        </Box>

        {view === "days" ? (
          <>
            {/* Weekday row */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {WEEKDAY_LABELS.map((label, idx) => (
                <Box
                  key={idx}
                  sx={{
                    flex: 1,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: font["body-md"].fontSize,
                    lineHeight: font["body-md"].lineHeight,
                    color: resolve("{alias.content-subtle}"),
                  }}
                >
                  {label}
                </Box>
              ))}
            </Box>

            {/* Week rows */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {weeks.map((week, wi) => (
                <Box key={wi} sx={{ display: "flex", alignItems: "center" }}>
                  {week.map((d, di) => {
                    const inMonth = isSameMonth(d, currentMonth);
                    const disabled = isDisabledDate(d, minDate, maxDate);
                    const isToday = isSameDay(d, today);
                    const isStart = isSameDay(d, rangeStart);
                    const isEnd = isSameDay(d, rangeEnd);
                    const inRange =
                      mode === "range" &&
                      rangeStart &&
                      rangeEnd &&
                      isBetween(d, rangeStart, rangeEnd) &&
                      !isStart &&
                      !isEnd;

                    // Range corner rounding on week edges
                    const isWeekFirst = di === 0;
                    const isWeekLast = di === 6;

                    let bg: string | undefined;
                    let color: string | undefined = inMonth
                      ? resolve("{alias.content-default}")
                      : resolve("{alias.content-disabled}");
                    let borderRadius: string | number = tokens.radius["control-default"];
                    const fullRadius = tokens.radius.lg;

                    if (disabled) {
                      color = resolve("{alias.content-disabled}");
                    } else if (mode === "range" && rangeStart && rangeEnd && !isSameDay(rangeStart, rangeEnd)) {
                      if (isStart || isEnd) {
                        bg = resolve("{alias.bg-brand-default}");
                        color = resolve("{alias.content-inverse}");
                        // Round the outer corner of the range
                        borderRadius = isStart
                          ? `${fullRadius} 0 0 ${fullRadius}`
                          : `0 ${fullRadius} ${fullRadius} 0`;
                        // Single-day ends of week get full rounding on visible side
                        if (isStart && isWeekLast) borderRadius = fullRadius;
                        if (isEnd && isWeekFirst) borderRadius = fullRadius;
                      } else if (inRange) {
                        bg = resolve("{alias.bg-brand-subtle}");
                        color = resolve("{alias.content-brand-strong}");
                        borderRadius = isWeekFirst
                          ? `${fullRadius} 0 0 ${fullRadius}`
                          : isWeekLast
                          ? `0 ${fullRadius} ${fullRadius} 0`
                          : 0;
                      }
                    } else if (isStart || isEnd) {
                      // Single mode, or range with start===end
                      bg = resolve("{alias.bg-brand-default}");
                      color = resolve("{alias.content-inverse}");
                      borderRadius = fullRadius;
                    } else if (isToday && inMonth) {
                      color = resolve("{alias.content-brand-default}");
                    }

                    return (
                      <Box
                        key={di}
                        component="button"
                        type="button"
                        disabled={disabled}
                        onClick={() => handleDayClick(d)}
                        aria-label={formatTriggerDate(d)}
                        aria-pressed={isStart || isEnd}
                        aria-current={isToday ? "date" : undefined}
                        sx={{
                          flex: 1,
                          height: 32,
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: 0,
                          bgcolor: bg ?? "transparent",
                          color,
                          borderRadius,
                          fontFamily: "Inter, sans-serif",
                          fontSize: font["body-md"].fontSize,
                          lineHeight: font["body-md"].lineHeight,
                          cursor: disabled ? "not-allowed" : "pointer",
                          p: 0,
                          "&:hover": !disabled && !bg
                            ? { bgcolor: resolve("{alias.bg-brand-subtle}") }
                            : undefined,
                          "&:active": !disabled && !bg
                            ? {
                                bgcolor: resolve("{alias.bg-brand-default}"),
                                color: resolve("{alias.content-inverse}"),
                              }
                            : undefined,
                          "&.Mui-disabled, &:disabled": {
                            color: resolve("{alias.content-disabled}"),
                            cursor: "not-allowed",
                          },
                        }}
                      >
                        {d.getDate()}
                        {isToday && !isStart && !isEnd && inMonth && (
                          <Box
                            aria-hidden="true"
                            sx={{
                              position: "absolute",
                              left: "50%",
                              transform: "translateX(-50%)",
                              bottom: 2,
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              bgcolor: resolve("{alias.content-brand-default}"),
                            }}
                          />
                        )}
                      </Box>
                    );
                  })}
                </Box>
              ))}
            </Box>
          </>
        ) : (
          <MonthYearPicker
            currentMonth={currentMonth}
            onSelect={(m) => {
              setCurrentMonth(m);
              setView("days");
            }}
          />
        )}
      </Box>
    );
  }
);

// ── Month/Year picker view ─────────────────────────────────────────────

function MonthYearPicker({
  currentMonth,
  onSelect,
}: {
  currentMonth: Date;
  onSelect: (month: Date) => void;
}) {
  const baseYear = currentMonth.getFullYear();
  const monthsOfYear = React.useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => new Date(baseYear, i, 1));
  }, [baseYear]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: tokens.spacing.xs }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <IconButton
          aria-label="Previous year"
          onClick={() => onSelect(addYears(currentMonth, -1))}
          size="sm"
          sx={HEADER_BUTTON_SX}
        >
          <ChevronLeft />
        </IconButton>
        <Typography
          level="body-md"
          sx={{ fontWeight: 500, color: resolve("{alias.content-default}") }}
        >
          {baseYear}
        </Typography>
        <IconButton
          aria-label="Next year"
          onClick={() => onSelect(addYears(currentMonth, 1))}
          size="sm"
          sx={HEADER_BUTTON_SX}
        >
          <ChevronRight />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: tokens.spacing.xs,
        }}
      >
        {monthsOfYear.map((m) => {
          const isCurrent = isSameMonth(m, currentMonth);
          return (
            <Box
              key={m.getMonth()}
              component="button"
              type="button"
              onClick={() => onSelect(m)}
              sx={{
                py: tokens.spacing.md,
                border: 0,
                borderRadius: tokens.radius.md,
                bgcolor: isCurrent
                  ? resolve("{alias.interactive-ghost-hover}")
                  : "transparent",
                color: resolve("{alias.content-default}"),
                fontFamily: "Inter, sans-serif",
                fontSize: font["body-md"].fontSize,
                lineHeight: font["body-md"].lineHeight,
                cursor: "pointer",
                "&:hover": {
                  bgcolor: resolve("{alias.interactive-ghost-hover}"),
                },
              }}
            >
              {SHORT_MONTH_FMT.format(m)}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

// ── WeaverDatePicker (input + popover) ─────────────────────────────────

export const WeaverDatePicker = React.forwardRef<HTMLDivElement, WeaverDatePickerProps>(
  function WeaverDatePicker(props, ref) {
    const {
      mode = "single",
      value,
      onChange,
      minDate,
      maxDate,
      defaultMonth,
      placeholder,
      disabled = false,
      width = 260,
      size = "md",
      calendarPos = "bottom-center",
      todayLabel,
    } = props;

    const height = SIZE_HEIGHTS[size];

    const [open, setOpen] = React.useState(false);
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);

    // Merge forwarded ref with internal ref
    React.useImperativeHandle(ref, () => wrapperRef.current as HTMLDivElement);

    // Close on outside click
    React.useEffect(() => {
      if (!open) return;
      const onMouseDown = (e: MouseEvent) => {
        if (!wrapperRef.current) return;
        if (!wrapperRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("keydown", onKeyDown);
      return () => {
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("keydown", onKeyDown);
      };
    }, [open]);

    const defaultPlaceholder = mode === "single" ? "Select date" : "Select date range";

    // Format the trigger label from value
    const triggerLabel: string = React.useMemo(() => {
      if (mode === "single") {
        if (!(value instanceof Date)) return "";
        if (todayLabel && isSameDay(value, new Date())) return todayLabel;
        return formatTriggerDate(value);
      }
      const arr = Array.isArray(value) ? value : [null, null];
      if (arr[0] && arr[1]) return formatRangeDate(arr[0], arr[1]);
      if (arr[0]) return `${formatTriggerDate(arr[0])} – …`;
      return "";
    }, [mode, value, todayLabel]);

    const showPlaceholder = !triggerLabel;

    // Auto-close on single-mode selection; keep open on range until both picked
    const handleCalendarChange = (v: DatePickerValue) => {
      onChange?.(v);
      if (mode === "single") {
        setOpen(false);
      } else if (Array.isArray(v) && v[0] && v[1]) {
        setOpen(false);
      }
    };

    return (
      <Box ref={wrapperRef} sx={{ position: "relative", display: "inline-block", width }}>
        <Box
          component="button"
          type="button"
          onClick={() => !disabled && setOpen((o) => !o)}
          disabled={disabled}
          aria-haspopup="dialog"
          aria-expanded={open}
          data-filled={!showPlaceholder || undefined}
          data-open={open || undefined}
          sx={{
            // ── Default state (matches Weaver Input) ─────
            width: "100%",
            height,
            display: "flex",
            alignItems: "center",
            gap: tokens.spacing.md,
            pl: tokens.spacing.xl,
            pr: tokens.spacing.lg,
            border: `1px solid ${resolve("{alias.border-input}")}`,
            borderRadius: tokens.radius.lg,
            bgcolor: resolve("{alias.interactive-input-default}"),
            color: resolve("{alias.content-muted}"), // placeholder color by default
            textAlign: "left",
            cursor: disabled ? "not-allowed" : "pointer",
            fontFamily: "Inter, sans-serif",
            fontSize: font["body-md"].fontSize,
            lineHeight: font["body-md"].lineHeight,
            fontWeight: 400,
            boxShadow: tokens.shadow.xs,
            position: "relative",
            transition: "border-color 150ms, box-shadow 150ms, background-color 150ms",
            outline: "none",

            // ── Filled: value present → darker text ────
            "&[data-filled]": {
              color: resolve("{alias.content-default}"),
            },

            // ── Hover ───────────────────────────────────
            // Matches `<Button variant="secondary">` hover (`button.ts:67-69`):
            // bg shifts to interactive-outlined-hover, border darkens.
            "&:hover:not(:disabled)": {
              borderColor: resolve("{alias.border-default}"),
              bgcolor: resolve("{alias.interactive-outlined-hover}"),
            },

            // ── Active / Pressed ────────────────────────
            "&:active:not(:disabled)": {
              bgcolor: resolve("{alias.interactive-outlined-pressed}"),
            },

            // ── Focused (keyboard OR popover open) ─────
            "&:focus-visible, &[data-open]": {
              borderColor: resolve("{alias.border-focus}"),
              boxShadow: `0 0 0 4px rgba(50, 118, 255, 0.3)`,
            },

            // ── Disabled ────────────────────────────────
            "&:disabled, &.Mui-disabled": {
              bgcolor: resolve("{alias.interactive-input-disabled}"),
              borderColor: resolve("{alias.border-disabled}"),
              color: resolve("{alias.content-disabled}"),
              boxShadow: "none",
            },
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "inherit",
            }}
          >
            <CalendarIcon />
          </Box>
          <Box
            component="span"
            sx={{
              flex: 1,
              minWidth: 0,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "inherit",
              fontWeight: 400,
            }}
          >
            {showPlaceholder ? (placeholder ?? defaultPlaceholder) : triggerLabel}
          </Box>
        </Box>

        {open && (
          <Box
            sx={{
              position: "absolute",
              zIndex: 1300,
              ...(calendarPos.startsWith("top")
                ? { bottom: "calc(100% + 8px)" }
                : { top: "calc(100% + 8px)" }),
              ...(calendarPos.endsWith("-right")
                ? { right: 0 }
                : calendarPos.endsWith("-center")
                ? { left: "50%", transform: "translateX(-50%)" }
                : { left: 0 }),
            }}
          >
            <WeaverCalendar
              mode={mode}
              value={value}
              onChange={handleCalendarChange}
              minDate={minDate}
              maxDate={maxDate}
              defaultMonth={defaultMonth}
            />
          </Box>
        )}
      </Box>
    );
  }
);
