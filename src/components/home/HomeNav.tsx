'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/protocol', label: 'Protocol' },
  { href: '/testnet',  label: 'Testnet'  },
  { href: '/guides',   label: 'Guides'   },
  { href: '/faq',      label: 'FAQ'      },
] as const;

/**
 * Home-page nav from the Figma redesign. It sits over the hero image
 * rather than staying fixed, and is dark-only. Inner pages keep V2Nav.
 */
export default function HomeNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="hnav">
      <Link href="/" aria-label="Bitcoin Quantum home" className="hnav-brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/home/mark.svg" alt="" width={26} height={20} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/home/wordmark.svg" alt="Bitcoin Quantum" width={158} height={22} />
        <span className="hnav-divider" aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/home/btq-logo.svg" alt="BTQ" width={52} height={16.5} className="hnav-btq" />
      </Link>
      <ul className={`hnav-links${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
          </li>
        ))}
      </ul>
      <div className="hnav-right">
        <Link href="/testnet#resources" className="hbtn">
          <Chevron /> Get started
        </Link>
        <button
          className="hnav-toggle"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

/** The design's 13px chevron: black on the blue primary button, white elsewhere. */
export function Chevron({ dark = false }: { dark?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={dark ? '/home/chevron-dark.svg' : '/home/chevron-light.svg'}
      alt=""
      width={13}
      height={13}
      className="hbtn-chev"
    />
  );
}
