import { noto } from '@/lib/fonts';
import '@/styles/globals.css';

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <html lang='ja' className={`${noto.className}`}>
      <head />
      <body className='min-h-screen'>{children}</body>
    </html>
  );
}
