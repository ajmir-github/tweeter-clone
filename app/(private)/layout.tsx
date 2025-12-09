export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Private layout</h1>
      <div>{children}</div>
    </div>
  );
}
