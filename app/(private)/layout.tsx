import Sidebar from "@/components/Sidebar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grow flex flex-row gap-4 h-full w-full">
      <Sidebar />
      <div className="grow grid gap-4 overflow-y-auto hide-scrollbar overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
