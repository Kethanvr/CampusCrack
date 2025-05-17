import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <header className="fixed w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl tracking-tight">
              Campus<span className="text-gradient">Crack</span>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/dashboard/upload"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Upload
            </Link>
            <Link
              href="/dashboard/chat"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Chat
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content with proper spacing from header */}
      <main className="flex-1 pt-16">{children}</main>
    </div>
  );
}
