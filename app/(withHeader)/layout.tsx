import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <div className='sticky top-0'>
        <Header />
      </div>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </>
  );
}
