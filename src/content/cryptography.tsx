/**
 * "Under the hood" cryptography content, shared by the home page
 * (src/app/HomePage.tsx) and /protocol (CryptographySection). Edit the
 * copy here so the two pages stay in step; each page renders it with
 * its own markup and styles.
 */

export const CRYPTO_EYEBROW = 'Under the hood';
export const CRYPTO_TITLE = 'Cryptography that outlasts the quantum threat.';
export const CRYPTO_LEAD =
  'Every address is generated and spent with NIST-standardized post-quantum primitives — verifiable today, secure against the computers of tomorrow.';

export const CRYPTO_NOTE_LABEL = 'Note · 20 August 2026';

export function CryptoNoteBody() {
  return (
    <>
      <p>
        Early testnet builds issued Dilithium addresses in two legacy formats — a Base58 type
        and a witness-v0 bech32 experiment that has since been switched off. Both predate
        P2MR; their outputs are still on testnet, and they are history rather than the
        default.
      </p>
      <p>
        The standard Dilithium receive address today is BIP-360 P2MR —{' '}
        <code>tbtq1z…</code> on testnet.
      </p>
    </>
  );
}

export const CRYPTO_POINTS = [
  'CRYSTALS-Dilithium (ML-DSA, NIST FIPS 204) signatures replace ECDSA',
  'BIP-360 P2MR receive addresses — the public key stays hidden until the output is spent',
  'Cryptographic agility — ready to adopt new NIST PQC standards',
];

export const CRYPTO_CODE_TITLE = 'shell · btq-cli testnet';

/**
 * Token kinds for the CLI transcript. Each page maps a kind to its own
 * colour class; `text` is unstyled.
 */
export type CodeToken =
  | 'text'
  | 'comment'
  | 'prompt'
  | 'command'
  | 'flag'
  | 'method'
  | 'string'
  | 'value';

/** One line is a list of [kind, text] tokens; an empty list is a blank line. */
export const CRYPTO_CODE: [CodeToken, string][][] = [
  [['comment', '# Generate a quantum-safe Dilithium address']],
  [['comment', '# and sign a testnet transaction.']],
  [],
  [['prompt', '$'], ['text', ' '], ['command', 'btq-cli'], ['text', ' '], ['flag', '-testnet'], ['text', ' '], ['method', 'createwallet'], ['text', ' '], ['string', '"main"']],
  [['text', '{ '], ['string', '"name"'], ['text', ': '], ['string', '"main"'], ['text', ' }']],
  [],
  [['prompt', '$'], ['text', ' '], ['command', 'btq-cli'], ['text', ' '], ['flag', '-testnet'], ['text', ' '], ['flag', '-rpcwallet=main'], ['text', ' \\']],
  [['text', '    '], ['method', 'getnewdilithiumaddress']],
  [['value', 'tbtq1z9u4k…'], ['text', '         '], ['comment', '# Dilithium P2MR']],
  [],
  [['prompt', '$'], ['text', ' '], ['command', 'btq-cli'], ['text', ' '], ['flag', '-testnet'], ['text', ' '], ['flag', '-rpcwallet=main'], ['text', ' \\']],
  [['text', '    '], ['method', 'sendtoaddress'], ['text', ' '], ['string', '"tbtq1z9u4k…"'], ['text', ' '], ['value', '0.50']],
  [['value', '8a7f…e2c1']],
  [],
  [['comment', '# Every spend signed with ML-DSA — quantum-safe.']],
];
