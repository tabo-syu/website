import { Noto_Sans_JP, Zen_Dots } from '@next/font/google';

const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['japanese'],
});

const zen = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
});

export { noto, zen };
