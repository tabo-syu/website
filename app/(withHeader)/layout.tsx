import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <div className='fixed w-full'>
        <Header />
      </div>
      <main className='pt-[65px] md:pt-[81px]'>{children}</main>
      <div>
        <Footer />
      </div>
    </>
  );
}
