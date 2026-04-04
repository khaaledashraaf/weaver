import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { tokens, resolve } from "../tokens";

export interface WeaverPaginationProps {
  /** Current active page (1-indexed). */
  page: number;
  /** Total number of pages. */
  totalPages: number;
  /** Display variant. */
  variant?: "numeric" | "simple" | "summary";
  /** Visual style of pagination items. */
  paginationStyle?: "ghost" | "soft";
  /** Total items count (used for summary text). */
  totalItems?: number;
  /** Items per page (used for summary text). */
  pageSize?: number;
  /** Callback fired when page changes. */
  onChange?: (page: number) => void;
  /** Whether the pagination is disabled. */
  disabled?: boolean;
}

/** Build the page range with ellipsis for numeric variant. */
function getPageRange(
  page: number,
  totalPages: number
): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages: (number | "ellipsis")[] = [1];
  if (page > 3) pages.push("ellipsis");
  const start = Math.max(2, page - 1);
  const end = Math.min(totalPages - 1, page + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (page < totalPages - 2) pages.push("ellipsis");
  pages.push(totalPages);
  return pages;
}

const chevronLeft = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

const chevronRight = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
  </svg>
);

export const WeaverPagination = React.forwardRef<
  HTMLDivElement,
  WeaverPaginationProps
>(function WeaverPagination(props, ref) {
  const {
    page,
    totalPages,
    variant = "numeric",
    paginationStyle = "ghost",
    totalItems,
    pageSize = 10,
    onChange,
    disabled = false,
  } = props;

  const isFirst = page <= 1;
  const isLast = page >= totalPages;

  const navButtonVariant = paginationStyle === "soft" ? "soft" : "plain";
  const navButtonColor =
    paginationStyle === "soft" ? ("primary" as const) : ("neutral" as const);

  const itemSx = {
    width: 32,
    height: 32,
    minWidth: 32,
    minHeight: 32,
    borderRadius: tokens.radius.sm,
    fontSize: "0.9375rem",
    fontWeight: 500,
    padding: 0,
  };

  const inactiveItemSx = {
    ...itemSx,
    backgroundColor: resolve("{alias.interactive-ghost-default}"),
    color: resolve("{alias.content-subtle}"),
    "&:hover": {
      backgroundColor: resolve("{alias.interactive-ghost-hover}"),
    },
  };

  const activeItemSx = {
    ...itemSx,
    backgroundColor: resolve("{alias.interactive-brand-default}"),
    color: resolve("{alias.content-on-brand}"),
    "&:hover": {
      backgroundColor: resolve("{alias.interactive-brand-hover}"),
    },
  };

  const handlePrev = () => {
    if (!isFirst && onChange) onChange(page - 1);
  };
  const handleNext = () => {
    if (!isLast && onChange) onChange(page + 1);
  };

  const summaryStart = (page - 1) * pageSize + 1;
  const summaryEnd = Math.min(page * pageSize, totalItems ?? totalPages * pageSize);
  const summaryTotal = totalItems ?? totalPages * pageSize;

  return (
    <Box
      ref={ref}
      role="navigation"
      aria-label="Pagination"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: tokens.spacing.xs,
      }}
    >
      {/* Summary text (left side for numeric/summary) */}
      {variant === "numeric" && totalItems != null && (
        <Typography
          level="body-sm"
          sx={{
            color: resolve("{alias.content-subtle}"),
            mr: 1,
            whiteSpace: "nowrap",
          }}
        >
          Showing {summaryStart} to {summaryEnd} of {summaryTotal} results
        </Typography>
      )}

      {variant === "summary" && (
        <Typography
          level="body-sm"
          sx={{
            color: resolve("{alias.content-subtle}"),
            mr: 1,
            whiteSpace: "nowrap",
          }}
        >
          Showing {summaryStart} to {summaryEnd} of {summaryTotal} results
        </Typography>
      )}

      {/* Prev button */}
      {variant === "simple" ? (
        <Button
          variant={navButtonVariant}
          color={navButtonColor}
          size="sm"
          disabled={disabled || isFirst}
          onClick={handlePrev}
          startDecorator={chevronLeft}
          sx={{ fontWeight: 500, fontSize: "0.9375rem" }}
        >
          Preview
        </Button>
      ) : (
        <IconButton
          variant={navButtonVariant}
          color={navButtonColor}
          size="sm"
          disabled={disabled || isFirst}
          onClick={handlePrev}
          aria-label="Previous page"
          sx={itemSx}
        >
          {chevronLeft}
        </IconButton>
      )}

      {/* Page numbers (numeric variant) */}
      {variant === "numeric" &&
        getPageRange(page, totalPages).map((item, idx) =>
          item === "ellipsis" ? (
            <Typography
              key={`ellipsis-${idx}`}
              level="body-sm"
              sx={{
                width: 32,
                textAlign: "center",
                color: resolve("{alias.content-subtle}"),
                userSelect: "none",
              }}
            >
              ...
            </Typography>
          ) : (
            <IconButton
              key={item}
              variant="plain"
              color="neutral"
              size="sm"
              disabled={disabled}
              onClick={() => onChange?.(item)}
              aria-label={`Page ${item}`}
              aria-current={item === page ? "page" : undefined}
              sx={item === page ? activeItemSx : inactiveItemSx}
            >
              {item}
            </IconButton>
          )
        )}

      {/* Summary page text */}
      {variant === "summary" && (
        <Typography
          level="body-sm"
          sx={{
            mx: 2,
            color: resolve("{alias.content-subtle}"),
            whiteSpace: "nowrap",
          }}
        >
          Page {page} of {totalPages}
        </Typography>
      )}

      {/* Next button */}
      {variant === "simple" ? (
        <Button
          variant={navButtonVariant}
          color={navButtonColor}
          size="sm"
          disabled={disabled || isLast}
          onClick={handleNext}
          endDecorator={chevronRight}
          sx={{ fontWeight: 500, fontSize: "0.9375rem" }}
        >
          Next
        </Button>
      ) : (
        <IconButton
          variant={navButtonVariant}
          color={navButtonColor}
          size="sm"
          disabled={disabled || isLast}
          onClick={handleNext}
          aria-label="Next page"
          sx={itemSx}
        >
          {chevronRight}
        </IconButton>
      )}
    </Box>
  );
});
