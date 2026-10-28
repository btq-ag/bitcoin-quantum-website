import { Hanken_Grotesk, Fragment_Mono } from 'next/font/google';

// The Figma design sets display and body type in Denim, a commercial
// face the site has no licence for. Hanken Grotesk is the stand-in;
// swap it here once a Denim webfont is available.
const sans = Hanken_Grotesk({
  variable: '--home-sans',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});
const mono = Fragment_Mono({
  variable: '--home-mono',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const homeFontClassName = [sans.variable, mono.variable].join(' ');
