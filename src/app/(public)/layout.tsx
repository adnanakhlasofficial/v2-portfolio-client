import Navbar from '@/components/public/Navbar';
import PageTransition from '@/components/shared/PageTransition';

interface IProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: IProps) {
  return (
    <div>
      <PageTransition>
        <Navbar />
        {children}
      </PageTransition>
    </div>
  );
}
