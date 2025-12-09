import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-200 p-4 flex justify-center min-h-screen w-full">
        <div className="grow max-w-6xl">{children}</div>
      </body>
    </html>
  );
}
