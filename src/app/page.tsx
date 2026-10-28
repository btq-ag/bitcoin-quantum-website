import type { Metadata } from 'next';
import { homeFontClassName } from '@/components/home/fonts';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, socialMeta } from '@/lib/seo';
import HomePage from './HomePage';
import '@/components/home/home.css';

// Home uses the tagline as its absolute title (root layout's title
// template only fires when a page sets a string title; .absolute opts
// out of the template). `og:site_name` from layout.tsx still shows
// "Bitcoin Quantum" above this in link previews.
const HOME_DESC =
  'Bitcoin rebuilt on post-quantum cryptography. ' +
  'Same 21 million coins, same proof-of-work network.';

export const metadata: Metadata = {
  // Browser tab gets the brand explicitly (template doesn't apply to
  // .absolute titles). OG/Twitter titles below keep the clean tagline
  // since og:site_name carries "Bitcoin Quantum" in link previews.
  title: { absolute: 'Bitcoin, secured for the quantum era | Bitcoin Quantum' },
  description: HOME_DESC,
  alternates: { canonical: '/' },
  ...socialMeta({
    title: 'Bitcoin, secured for the quantum era.',
    description: HOME_DESC,
    path: '/',
  }),
};

/**
 * The headline network parameters, restated as machine-readable facts.
 * The page shows them in the Quick facts grid; this block restates them
 * for extractors that read structured data.
 */
const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': SITE_URL,
  url: SITE_URL,
  name: 'Bitcoin, secured for the quantum era',
  description: HOME_DESC,
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', '@id': SITE_URL },
  about: {
    '@type': 'Thing',
    name: 'Bitcoin Quantum',
    alternateName: 'BTQ',
    description:
      "Bitcoin Quantum (BTQ) is a quantum-resistant fork of Bitcoin. It keeps Bitcoin's " +
      'UTXO model, SHA-256 proof-of-work and 21 million coin supply cap, and replaces ECDSA ' +
      'transaction signatures with NIST-standardized CRYSTALS-Dilithium (ML-DSA, FIPS 204).',
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Bitcoin Quantum network parameters',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Maximum supply', description: '21 million BTQ' },
      { '@type': 'ListItem', position: 2, name: 'Target block time', description: '1 minute' },
      { '@type': 'ListItem', position: 3, name: 'Block size limit', description: '8 MB' },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Signature scheme',
        description: 'CRYSTALS-Dilithium (ML-DSA), NIST FIPS 204',
      },
    ],
  },
};

export default function Home() {
  return (
    <div className={homeFontClassName}>
      <JsonLd data={HOME_SCHEMA} />
      <HomePage />
    </div>
  );
}
