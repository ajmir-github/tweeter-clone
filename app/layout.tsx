import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-200 flex justify-center h-dvh w-full overflow-hidden">
        <div className="grow max-w-6xl p-4 h-full">{children}</div>
      </body>
    </html>
  );
}
