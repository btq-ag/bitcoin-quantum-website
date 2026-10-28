import Image from 'next/image';
import Link from 'next/link';
import HomeNav, { Chevron } from '@/components/home/HomeNav';
import RevealMount from '@/components/v2/RevealMount';
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

/*
 * Home page, built from the Figma "Website / homepage" frame.
 * Dark-only; styles live in src/components/home/home.css under .bqhome.
 * Copy and links are unchanged from the earlier v2 home page.
 */

const DOCS = 'https://docs.bitcoinquantum.com';
const RELEASES = 'https://github.com/btq-ag/btq-core/releases';
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

const FACTS = [
  { num: '21M', label: 'Maximum supply' },
  { num: '1 min', label: 'Target block time' },
  { num: '8MB', label: 'Block size limit' },
  { num: 'FIPS 204', label: 'NIST-standardized signatures' },
];

const TECH = [
  {
    icon: '/home/tech-signatures.svg',
    title: 'Quantum-resistant signatures',
    body: "Lattice- and hash-based signature schemes replace ECDSA, so funds stay protected even against Shor's algorithm on a fault-tolerant quantum machine.",
  },
  {
    icon: '/home/tech-capacity.svg',
    title: 'Built for larger signatures',
    body: 'Post-quantum signatures are bigger. The protocol expands transaction capacity to absorb them — keeping fees low and blocks efficient as the network grows.',
  },
  {
    icon: '/home/tech-hidden.svg',
    title: 'Public keys stay hidden',
    body: 'Pay-to-Merkle-Root (BIP-360) puts only a Merkle root on-chain — no public key to attack while coins rest. Post-quantum signatures secure the spend window.',
  },
];

// home.css colour classes for each code token kind, from the design.
const TOKEN_CLASS: Record<CodeToken, string | undefined> = {
  text: undefined,
  comment: 'c',
  prompt: undefined,
  command: 'b',
  flag: 'f',
  method: 'k',
  string: 's',
  value: 'n',
};

const PHASES = [
  { tag: 'Phase 01', status: 'Complete', title: 'Specification', body: 'Protocol design built on NIST-standardized post-quantum signatures.', state: 'done' },
  { tag: 'Phase 02', status: '● Live now', title: 'Testnet', body: 'Public test network, reference wallets and third-party security audits.', state: 'live' },
  { tag: 'Phase 03', status: 'Upcoming', title: 'Mainnet', body: 'Genesis launch with full quantum-resistant signing across the network.', state: '' },
  { tag: 'Phase 04', status: 'Planned', title: 'Ecosystem', body: 'Exchange, custody and institutional integrations for the post-quantum era.', state: '' },
];

/** Dotted section rule with blue end caps. `light` is the black-stroke variant for the pale band. */
function Rule({ light = false }: { light?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={light ? '/home/rule-light.svg' : '/home/rule-dark.svg'}
      alt=""
      aria-hidden="true"
      width={1362}
      height={4}
      className="hrule"
    />
  );
}

/** The 15-column dot field; two cells carry the blue glow, as in the design. */
function DotField({ rows = 4 }: { rows?: number }) {
  return (
    <div className="hdots" aria-hidden="true" style={{ height: rows * 90 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/home/dot-glow.svg" alt="" width={90} height={90} style={{ left: 270, top: 0 }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/home/dot-glow.svg" alt="" width={90} height={90} style={{ left: 630, top: 180 }} />
    </div>
  );
}

function Titles({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="htitles reveal">
      <span className="heyebrow">{eyebrow}</span>
      <h2 className="hh2">{children}</h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bqhome">
      <RevealMount />

      <HomeNav />

      <main id="top">
        {/* Hero image runs behind the hero, the facts and the thesis. */}
        <div className="hsky">
          <div className="hsky-bg" aria-hidden="true">
            <Image src="/home/hero-bg.png" alt="" fill priority sizes="100vw" />
          </div>

          {/* ===================== HERO ===================== */}
          <header className="hhero">
            <div className="hhero-copy reveal">
              <span className="heyebrow">Post-quantum bitcoin</span>
              <h1 className="hh1">
                Bitcoin, <span className="hblue">secured</span>
                <br /> for the quantum era.
              </h1>
            </div>
            <div className="hhero-side reveal d1">
              <p className="hbody">
                The same 21&nbsp;million coins and the same network you trust — rebuilt on
                cryptography that quantum computers cannot break.
              </p>
              <div className="hcta">
                <Link href="/testnet#resources" className="hbtn hbtn-primary">
                  <Chevron dark /> Get started
                </Link>
                <span className="hbtn hbtn-plain" aria-disabled="true">Whitepaper · coming soon</span>
              </div>
            </div>
          </header>

          {/* ===================== FACTS + THESIS ===================== */}
          <section className="hfacts-wrap">
            <Rule />
            <div className="hfacts">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/home/facts-grid.svg" alt="" aria-hidden="true" className="hfacts-grid" />
              <h2 className="hh2 hfacts-title reveal">Quick facts</h2>
              <a
                href={`${DOCS}/btq-empirical-behavior-whitepaper.pdf`}
                {...ext}
                className="hbtn hfacts-link reveal"
              >
                <Chevron /> Mining difficulty and parameters
              </a>
              <dl className="hfacts-list">
                {FACTS.map((f) => (
                  <div key={f.label} className="hfact reveal">
                    <dt>{f.label}</dt>
                    <dd>{f.num}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Rule />
            <div className="hthesis">
              <div className="htitles reveal">
                <span className="heyebrow">Our thesis</span>
                <p className="hh2">
                  Bitcoin solved digital scarcity. Bitcoin&nbsp;Quantum keeps it{' '}
                  <span className="hblue">sound</span> for the next fifty years.
                </p>
              </div>
              <div className="hbody hthesis-body reveal d1">
                <p>
                  A sufficiently powerful quantum computer could one day break the elliptic-curve
                  signatures that protect ordinary Bitcoin wallets. Bitcoin Quantum closes that
                  door before it opens.
                </p>
                <p>
                  We preserve everything that makes Bitcoin sound money — its supply schedule,
                  proof-of-work consensus and peer-to-peer architecture — and swap the
                  cryptography underneath for primitives proven resistant to quantum attack.
                </p>
              </div>
            </div>
            <DotField />
          </section>
        </div>

        {/* ===================== LIGHT BAND ===================== */}
        <div className="hband">
          {/* ----- Technology ----- */}
          <section className="hsec htech" id="technology">
            <Rule light />
            <div className="hsplit">
              <div className="hsplit-left">
                <Titles eyebrow="The technology">
                  Three changes.
                  <br /> Everything else stays&nbsp;Bitcoin.
                </Titles>
                <Link href="/protocol" className="hbtn hbtn-primary reveal">
                  <Chevron dark /> Read the protocol
                </Link>
              </div>
              <div className="htech-list">
                {TECH.map((t, i) => (
                  <article key={t.title} className={`htech-item reveal d${i}`}>
                    <div>
                      <h3 className="hh4">{t.title}</h3>
                      <p>{t.body}</p>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.icon} alt="" aria-hidden="true" width={197} height={150} />
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ----- Under the hood ----- */}
          <section className="hsec hunder" id="under">
            <Rule light />
            <div className="hsplit">
              <Titles eyebrow={CRYPTO_EYEBROW}>{CRYPTO_TITLE}</Titles>
              <div className="hunder-body reveal d1">
                <p className="hlead">{CRYPTO_LEAD}</p>
                <aside className="hnote" role="note">
                  <span className="hnote-label">{CRYPTO_NOTE_LABEL}</span>
                  <CryptoNoteBody />
                </aside>
                <ul className="hsquares">
                  {CRYPTO_POINTS.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="hcode">
                  <div className="hcode-bar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/home/code-dots.svg" alt="" aria-hidden="true" width={38} height={8} />
                    <span>{CRYPTO_CODE_TITLE}</span>
                  </div>
                  <pre className="hcode-body">
                    {CRYPTO_CODE.map((line, i) =>
                      line.length ? (
                        <span key={i}>
                          {line.map(([kind, text], j) => (
                            <span key={j} className={TOKEN_CLASS[kind]}>{text}</span>
                          ))}
                          {'\n'}
                        </span>
                      ) : (
                        <span key={i} className="gap">{'\n'}</span>
                      )
                    )}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* ----- Testnet ----- */}
          <section className="hsec hdark htestnet" id="testnet">
            <Rule />
            <span className="heyebrow hlive reveal">Testnet live</span>
            <div className="hsplit">
              <div className="htestnet-pitch">
                <h2 className="hh2 reveal">Run a quantum-safe node.</h2>
                <div className="reveal d1">
                  <p className="hbody">
                    Spin up a testnet node in under fifteen minutes. Mine quantum-safe blocks,
                    validate transactions, and help stress-test the network before mainnet.
                  </p>
                  <div className="hcta">
                    <a href={RELEASES} {...ext} className="hbtn hbtn-primary">
                      <Chevron dark /> Download binaries
                    </a>
                    <a href={`${DOCS}/mining/guide`} {...ext} className="hbtn hbtn-plain">
                      Mining guide
                    </a>
                  </div>
                  <span className="hplatforms">
                    Available for Windows and Linux · build from source on macOS
                  </span>
                </div>
              </div>
              <ol className="hsteps reveal d1">
                <li>
                  <span className="hstep-idx">01</span>
                  <div>
                    <h3 className="hh4">Download the release</h3>
                    <p>
                      Grab the <a href={RELEASES} {...ext}>latest testnet release</a> for your
                      platform.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="hstep-idx">02</span>
                  <div>
                    <h3 className="hh4">Configure your node</h3>
                    <p>
                      Follow the <a href={`${DOCS}/mining/guide`} {...ext}>mining guide</a> —
                      extraction, daemon config, and pool connection in one place.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="hstep-idx">03</span>
                  <div>
                    <h3 className="hh4">Create a wallet &amp; mine</h3>
                    <p>
                      Generate a Dilithium key, connect to the pool, and start mining quantum-safe
                      blocks.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <DotField rows={3} />
          </section>
        </div>

        {/* ===================== GET INVOLVED ===================== */}
        <section className="hsec hdark hpaths" id="paths">
          <div className="hpaths-bg" aria-hidden="true">
            <Image src="/home/network-bg.png" alt="" fill sizes="100vw" />
          </div>
          <Rule />
          <Titles eyebrow="Get involved">Three ways to join the network.</Titles>
          <div className="hpaths-grid">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/home/paths-grid.svg" alt="" aria-hidden="true" className="hpaths-lines" />
            <article className="hpath reveal">
              <div className="hpath-head">
                <span className="heyebrow">01 · Miners</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/home/path-miners.svg" alt="" aria-hidden="true" width={45} height={45} />
              </div>
              <div>
                <h3 className="hh3">Run a node, mine quantum-safe blocks.</h3>
                <p className="hbody">
                  Help secure the network and earn testnet BTQ. Same SHA-256 proof-of-work Bitcoin
                  miners already know — with post-quantum signatures riding on top.
                </p>
                <a href={`${DOCS}/mining/guide`} {...ext} className="hbtn">
                  <Chevron /> Quick start
                </a>
              </div>
            </article>
            <article className="hpath reveal d1">
              <div className="hpath-head">
                <span className="heyebrow">02 · Developers</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/home/path-developers.svg" alt="" aria-hidden="true" width={45} height={37} />
              </div>
              <div>
                <h3 className="hh3">Build wallets, tools, integrations.</h3>
                <p className="hbody">
                  Bitcoin Core&apos;s UTXO model and scripting system, extended with a clean RPC API
                  for post-quantum signing. Familiar surface, new primitives.
                </p>
                <a href="https://github.com/btq-ag/btq-core" {...ext} className="hbtn">
                  <Chevron /> View on GitHub
                </a>
              </div>
            </article>
            <article className="hpath reveal d2">
              <div className="hpath-head">
                <span className="heyebrow">03 · Researchers</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/home/path-researchers.svg" alt="" aria-hidden="true" width={45} height={45} />
              </div>
              <div>
                <h3 className="hh3">Review the post-quantum security model.</h3>
                <p className="hbody">
                  Audit the ML-DSA integration and the protocol-level choices behind the larger
                  post-quantum signatures. Comments and issues welcome.
                </p>
                <span className="hbtn hbtn-off" aria-disabled="true">Coming soon</span>
              </div>
            </article>
          </div>
        </section>

        {/* ===================== ROADMAP ===================== */}
        <section className="hsec hdark hroad" id="roadmap">
          <Rule />
          <div className="hsplit">
            <Titles eyebrow="The network">The path to a quantum-safe store of value.</Titles>
            <div className="hphases">
              {PHASES.map((p, i) => (
                <div key={p.tag} className={`hphase ${p.state} reveal d${i}`}>
                  <div className="hphase-meta">
                    <span>{p.tag}</span>
                    <span className="hphase-status">{p.status}</span>
                  </div>
                  <h3 className="hh3">{p.title}</h3>
                  <p className="hbody">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <section className="hsec hdark hfinal" id="cta">
          <div className="hfinal-grid" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/home/cta-grid.svg" alt="" />
          </div>
          <Rule />
          <div className="hfinal-inner">
            <div className="hfinal-copy">
              <div className="htitles reveal">
                <span className="heyebrow">Get started</span>
                <h2 className="hh1">Be ready before quantum is.</h2>
              </div>
              <div className="reveal d1">
                <p className="hbody">
                  Spin up a quantum-safe wallet on testnet or talk to us about institutional
                  custody. The transition starts today.
                </p>
                <div className="hcta">
                  <a href={`${DOCS}/wallet/basics`} {...ext} className="hbtn hbtn-primary">
                    <Chevron dark /> Create a wallet
                  </a>
                  <span className="hbtn hbtn-plain" aria-disabled="true">Whitepaper · coming soon</span>
                </div>
              </div>
            </div>
            <Image
              src="/home/cta-illustration.png"
              alt=""
              width={576}
              height={543}
              sizes="(max-width: 900px) 80vw, 576px"
              className="hfinal-art reveal d1"
            />
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="hfooter">
        <div className="hfooter-top">
          <div className="hfooter-brand">
            <Link href="/" aria-label="Bitcoin Quantum home" className="hnav-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/home/mark.svg" alt="" width={26} height={20} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/home/wordmark.svg" alt="Bitcoin Quantum" width={158} height={22} />
            </Link>
            <p>
              Bitcoin for the post-quantum era. The same sound money, secured by cryptography
              built to outlast quantum computers.
            </p>
          </div>
          <div className="hfooter-cols">
            <div>
              <h4>Learn</h4>
              <ul>
                <li><span>Whitepaper · coming soon</span></li>
                <li><Link href="/transaction-types">Transaction types</Link></li>
                <li><Link href="/protocol">Protocol</Link></li>
                <li><Link href="/protocol#cryptography">Cryptography</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4>Network</h4>
              <ul>
                <li><Link href="/#roadmap">Roadmap</Link></li>
                <li><Link href="/testnet">Testnet</Link></li>
                <li><a href="https://explorer.bitcoinquantum.com" {...ext}>Block explorer</a></li>
                <li><a href={`${DOCS}/mining/guide`} {...ext}>Run a node</a></li>
              </ul>
            </div>
            <div>
              <h4>Community</h4>
              <ul>
                <li><a href="https://github.com/btq-ag/btq-core" {...ext}>GitHub</a></li>
                <li><a href="https://discord.com/invite/bBYD8rBtHm" {...ext}>Discord</a></li>
                <li><a href="https://t.me/+bE6I4gqX4Vo1ODJh" {...ext}>Telegram</a></li>
                <li><a href="https://x.com/btc_quantum" {...ext}>X / Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hfooter-legal">
          <span>© 2026 Bitcoin Quantum. Open-source under MIT.</span>
          <span>bitcoinquantum.com</span>
        </div>
      </footer>
    </div>
  );
}
