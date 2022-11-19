import Footer from '@/components/ui/Footer';

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </>
  );
}
