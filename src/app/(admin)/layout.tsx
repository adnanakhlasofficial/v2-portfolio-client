interface IProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: IProps) {
  return <div>{children}</div>;
}
