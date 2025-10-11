import Navbar from '@/components/public/Navbar';

interface IProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: IProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
