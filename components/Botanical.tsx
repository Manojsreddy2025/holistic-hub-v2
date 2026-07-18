type Variant = "sprig" | "divider" | "stem";

/**
 * Chamomile line-work — the practice's own botanical motif, drawn as
 * single-weight strokes so it reads as apothecary etching, not clip art.
 */
export default function Botanical({
  variant = "sprig",
  className,
  stroke = "currentColor",
}: {
  variant?: Variant;
  className?: string;
  stroke?: string;
}) {
  if (variant === "divider") {
    return (
      <svg
        className={className}
        viewBox="0 0 240 24"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M0 12h92" stroke={stroke} strokeWidth="1" opacity="0.45" />
        <path d="M148 12h92" stroke={stroke} strokeWidth="1" opacity="0.45" />
        <g stroke={stroke} strokeWidth="1.1" strokeLinecap="round">
          <circle cx="120" cy="12" r="2.6" />
          <path d="M120 6.4c1.6-2.4 1.6-3.6 0-4.4-1.6.8-1.6 2 0 4.4Z" />
          <path d="M120 17.6c1.6 2.4 1.6 3.6 0 4.4-1.6-.8-1.6-2 0-4.4Z" />
          <path d="M125.6 12c2.4-1.6 3.6-1.6 4.4 0-.8 1.6-2 1.6-4.4 0Z" />
          <path d="M114.4 12c-2.4-1.6-3.6-1.6-4.4 0 .8 1.6 2 1.6 4.4 0Z" />
          <path d="M124 8c2-2 3-2.2 4-1.2-.2 1.4-1.2 2-4 1.2Z" opacity="0.7" />
          <path d="M116 16c-2 2-3 2.2-4 1.2.2-1.4 1.2-2 4-1.2Z" opacity="0.7" />
          <path d="M124 16c2.8-.8 3.8-.2 4 1.2-1 1-2 .8-4-1.2Z" opacity="0.7" />
          <path d="M116 8c-2.8.8-3.8.2-4-1.2 1-1 2-.8 4 1.2Z" opacity="0.7" />
        </g>
      </svg>
    );
  }

  if (variant === "stem") {
    return (
      <svg
        className={className}
        viewBox="0 0 120 320"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g stroke={stroke} strokeWidth="1.4" strokeLinecap="round" fill="none">
          <path d="M60 318C58 250 54 180 62 118 68 72 74 44 78 22" />
          <path d="M63 130c-16-8-26-22-28-40 18 4 28 18 28 40Z" />
          <path d="M66 96c14-10 20-24 18-42-15 7-21 22-18 42Z" />
          <path d="M60 190c-18-4-30-14-36-32 19 0 31 11 36 32Z" />
          <path d="M61 236c15-2 27-10 34-26-17-2-29 7-34 26Z" />
          {/* flower head */}
          <circle cx="79" cy="16" r="5" />
          <path d="M79 5c2.4-3.4 2.4-5.2 0-6.4-2.4 1.2-2.4 3 0 6.4Z" />
          <path d="M87 9c4-1.4 5.2-2.8 4.4-5.2-2.6-.2-4.2 1.4-4.4 5.2Z" />
          <path d="M89 18c4.2.6 5.8 0 6.2-2.6-2.2-1.4-4.4-.6-6.2 2.6Z" />
          <path d="M71 9c-4-1.4-5.2-2.8-4.4-5.2 2.6-.2 4.2 1.4 4.4 5.2Z" />
          <path d="M69 18c-4.2.6-5.8 0-6.2-2.6 2.2-1.4 4.4-.6 6.2 2.6Z" />
          <path d="M85 25c3.2 2.8 3.8 4.4 2.2 6.4-2.4-.8-3.4-2.8-2.2-6.4Z" />
          <path d="M73 25c-3.2 2.8-3.8 4.4-2.2 6.4 2.4-.8 3.4-2.8 2.2-6.4Z" />
        </g>
      </svg>
    );
  }

  // sprig (default)
  return (
    <svg
      className={className}
      viewBox="0 0 96 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke={stroke} strokeWidth="1.3" strokeLinecap="round" fill="none">
        <path d="M6 58C28 52 48 40 62 26 70 18 76 12 80 8" />
        <path d="M34 46c-8-8-10-16-6-26 9 5 11 14 6 26Z" />
        <path d="M50 34c-2-11 1-19 10-25 4 10 0 19-10 25Z" />
        <circle cx="83" cy="7" r="3.4" />
        <path d="M83-0.4c1.8-2.4 1.8-3.8 0-4.6" opacity="0" />
        <path d="M88.6 3.4c3-1 4-2 3.4-4-2-.2-3.2 1-3.4 4Z" />
        <path d="M90 10c3.2.4 4.4-.2 4.6-2.2-1.6-1-3.2-.2-4.6 2.2Z" />
        <path d="M77.4 3.4c-3-1-4-2-3.4-4 2-.2 3.2 1 3.4 4Z" />
        <path d="M76 10c-3.2.4-4.4-.2-4.6-2.2 1.6-1 3.2-.2 4.6 2.2Z" />
        <path d="M86 13.6c2.4 2.2 2.8 3.4 1.6 5-1.8-.6-2.6-2.2-1.6-5Z" />
        <path d="M80 13.6c-2.4 2.2-2.8 3.4-1.6 5 1.8-.6 2.6-2.2 1.6-5Z" />
      </g>
    </svg>
  );
}
