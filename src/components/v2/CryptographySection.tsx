import {
  CRYPTO_CODE,
  CRYPTO_CODE_TITLE,
  CRYPTO_EYEBROW,
  CRYPTO_LEAD,
  CRYPTO_NOTE_LABEL,
  CRYPTO_POINTS,
  CRYPTO_TITLE,
  CryptoNoteBody,
  type CodeToken,
} from '@/content/cryptography';

/**
 * The "Under the hood / Cryptography" dark band on /protocol. The copy
 * lives in src/content/cryptography.tsx, shared with the home page.
 * Pass an `id` so the host page can keep its own anchor.
 */

// v2.css colour classes for each token kind.
const TOKEN_CLASS: Record<CodeToken, string | undefined> = {
  text: undefined,
  comment: 'cm',
  prompt: 'cm',
  command: 'hl',
  flag: 'kw',
  method: 'fn',
  string: 'st',
  value: 'nm',
};

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 12 5 5L20 6" />
    </svg>
  );
}

export default function CryptographySection({ id = 'under' }: { id?: string }) {
  return (
    <section className="under section" id={id}>
      <div className="wrap">
        <div className="under-grid">
          <div className="reveal">
            <span className="eyebrow">{CRYPTO_EYEBROW}</span>
            <h2 className="h2">{CRYPTO_TITLE}</h2>
            <p className="lead">{CRYPTO_LEAD}</p>
            <aside className="note" role="note">
              <span className="note-label">{CRYPTO_NOTE_LABEL}</span>
              <CryptoNoteBody />
            </aside>
            <ul>
              {CRYPTO_POINTS.map((point) => (
                <li key={point}><CheckIcon /> {point}</li>
              ))}
            </ul>
          </div>
          <div className="code reveal d1">
            <div className="code-bar">
              <span className="dot" /><span className="dot" /><span className="dot" />
              <span className="fname">{CRYPTO_CODE_TITLE}</span>
            </div>
            <div className="code-body">
              {CRYPTO_CODE.map((line, i) => (
                <span key={i} className="ln">
                  {line.length
                    ? line.map(([kind, text], j) => (
                        <span key={j} className={TOKEN_CLASS[kind]}>{text}</span>
                      ))
                    : ' '}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
