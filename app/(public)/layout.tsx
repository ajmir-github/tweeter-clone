export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Public layout</h1>
      <div>{children}</div>
    </div>
  );
}
