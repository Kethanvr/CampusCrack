import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/90">
      {/* Navigation */}
      <header className="fixed w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight">
              Campus<span className="text-gradient">Crack</span>
            </span>
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

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-8">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
          <span className="block">VTU Exam Preparation</span>
          <span className="text-gradient">Made Simple</span>
        </h1>
        <p className="max-w-[600px] text-muted-foreground mb-8">
          Upload your notes, past papers, and syllabus. Ask questions and get
          accurate, syllabus-aligned answers instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/dashboard/upload"
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium shadow-sm hover:bg-primary/90 transition-colors"
          >
            Upload Documents
          </Link>
          <Link
            href="/dashboard/chat"
            className="px-6 py-3 rounded-md bg-accent text-accent-foreground font-medium shadow-sm hover:bg-accent/90 transition-colors"
          >
            Ask Questions
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="container py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col p-6 bg-card rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Syllabus Coverage</h3>
            <p className="text-muted-foreground">
              Track which parts of the syllabus your notes cover to identify
              gaps in your preparation.
            </p>
          </div>
          <div className="flex flex-col p-6 bg-card rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Personalized Quizzes</h3>
            <p className="text-muted-foreground">
              Generate custom quizzes from your uploaded materials to test your
              knowledge.
            </p>
          </div>
          <div className="flex flex-col p-6 bg-card rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Topic Prediction</h3>
            <p className="text-muted-foreground">
              Analyze past papers to predict likely exam questions and focus
              your studies.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CampusCrack. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
