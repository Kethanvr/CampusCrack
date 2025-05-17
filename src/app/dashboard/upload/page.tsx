import Link from "next/link";

export default function UploadPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Upload Documents</h1>
        <p className="text-muted-foreground mb-8">
          Upload your study materials, notes, past papers, and syllabus
          documents to get started.
        </p>

        {/* Upload Box */}
        <div className="border-2 border-dashed border-border rounded-lg p-12 text-center mb-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <h3 className="text-xl font-medium">Drag & Drop Files</h3>
            <p className="text-sm text-muted-foreground">
              or click to browse (PDF, DOCX, TXT)
            </p>
            <button className="mt-4 px-6 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium shadow hover:bg-primary/90 transition-colors">
              Select Files
            </button>
          </div>
        </div>

        {/* Document Types Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Document Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card rounded-lg p-4 border border-border/60">
              <h3 className="font-medium mb-2">Notes</h3>
              <p className="text-sm text-muted-foreground">
                Lecture notes, study materials, and textbook summaries.
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border/60">
              <h3 className="font-medium mb-2">Past Papers</h3>
              <p className="text-sm text-muted-foreground">
                Previous year question papers and model exams.
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border/60">
              <h3 className="font-medium mb-2">Syllabus</h3>
              <p className="text-sm text-muted-foreground">
                Official VTU syllabus documents for your courses.
              </p>
            </div>
          </div>
        </div>

        {/* Uploaded Files (Empty State) */}
        <div className="bg-card rounded-lg p-6 border border-border/60">
          <h2 className="text-xl font-semibold mb-4">Your Documents</h2>
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No documents uploaded yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
