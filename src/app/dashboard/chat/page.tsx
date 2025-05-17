import Link from "next/link";

export default function ChatPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Chat Container */}
      <div className="container mx-auto flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col overflow-hidden border rounded-lg">
          {/* Chat Header */}
          <div className="border-b border-border p-4">
            <h1 className="text-xl font-semibold">Ask Questions</h1>
            <p className="text-sm text-muted-foreground">
              Ask about your notes, syllabus, or exam preparation
            </p>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Welcome Message */}
            <div className="flex items-start gap-3 mb-8 mt-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                CC
              </div>
              <div className="flex-1">
                <div className="bg-card p-4 rounded-lg rounded-tl-none">
                  <p className="text-card-foreground">
                    Welcome to CampusCrack! I'm your VTU exam preparation
                    assistant. You can ask me questions about your syllabus,
                    notes, or past papers.
                  </p>
                  <p className="text-card-foreground mt-2">
                    Try asking something like:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>Explain the concept of normalization in DBMS</li>
                    <li>What are the important topics in Data Structures?</li>
                    <li>Generate a quiz on Computer Networks</li>
                  </ul>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Today at{" "}
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-border p-4">
            <div className="flex gap-3 items-center">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="w-full h-12 px-4 py-2 bg-accent rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button className="h-12 w-12 flex items-center justify-center bg-primary rounded-md hover:bg-primary/90 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-foreground"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center mt-2 px-1">
              <div className="text-xs text-muted-foreground">
                Powered by Gemini
              </div>
              <div className="flex gap-2">
                <button className="text-xs text-muted-foreground hover:text-foreground">
                  Generate Quiz
                </button>
                <button className="text-xs text-muted-foreground hover:text-foreground">
                  Syllabus Coverage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
