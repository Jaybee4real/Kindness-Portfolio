export function MailIcon({ size = 26, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="3"
        stroke={color}
        strokeWidth="1.8"
      />
      <path
        d="M3.5 6.5 12 13l8.5-6.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon({ size = 26, color = '#384054' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.25h3.96V21H3V9.25ZM9.5 9.25h3.8v1.6h.05c.53-.95 1.82-1.95 3.75-1.95 4 0 4.75 2.5 4.75 5.75V21h-3.96v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.19 1.45-2.19 2.96V21H9.5V9.25Z" />
    </svg>
  );
}

export function BehanceIcon({ size = 26, color = '#384054' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden
    >
      <path d="M8.3 11.4c.86-.44 1.3-1.15 1.3-2.16 0-2-1.5-2.74-3.27-2.74H1v11.2h5.5c1.9 0 3.7-.92 3.7-3.06 0-1.33-.63-2.3-1.9-2.74-.05-.02 0-.5 0-.5ZM3.46 8.3h2.2c.85 0 1.6.24 1.6 1.22 0 .9-.6 1.27-1.43 1.27H3.46V8.3Zm2.4 6.85H3.46v-2.7h2.46c1.03 0 1.68.43 1.68 1.4 0 .96-.77 1.3-1.74 1.3ZM18.4 8.16h-4.3V6.9h4.3v1.26ZM23 13.1c0-2.46-1.44-4.5-4.04-4.5-2.53 0-4.25 1.9-4.25 4.4 0 2.58 1.63 4.35 4.25 4.35 1.98 0 3.27-.9 3.88-2.8h-2.1c-.22.7-1.1 1.07-1.78 1.07-1.3 0-1.98-.76-1.98-2.05H23v-.47Zm-6.01-1.07c.06-1.06.77-1.73 1.83-1.73 1.12 0 1.67.65 1.77 1.73h-3.6Z" />
    </svg>
  );
}

export function XIcon({ size = 24, color = '#384054' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden
    >
      <path d="M17.53 3h2.97l-6.49 7.41L21.75 21h-5.98l-4.68-6.12L5.7 21H2.72l6.94-7.93L2.25 3h6.13l4.23 5.6L17.53 3Zm-1.04 16.2h1.65L7.6 4.7H5.83l10.66 14.5Z" />
    </svg>
  );
}

export function ArrowUpRight({ size = 24, color = '#404a64' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
