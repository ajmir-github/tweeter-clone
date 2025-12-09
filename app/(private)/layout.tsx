import Sidebar from "@/components/Sidebar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grow flex flex-row gap-4 min-h-full">
      <Sidebar />
      <div className="grow grid gap-4">{children}</div>
    </div>
  );
}
