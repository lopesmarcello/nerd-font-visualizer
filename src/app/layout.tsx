import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-zinc-950 antialiased dark max-w-screen overflow-x-hidden
          animate-grid
          bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
          bg-size-[24px_24px] 
        "
      >

        {children}
      </body>
    </html>
  );
}
