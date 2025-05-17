# CampusCrack: AI-Powered Exam Preparation for VTU Students

An AI-driven chatbot tailored for Visvesvaraya Technological University (VTU) students, focusing on exam preparation.

## Features

- **Q&A from Your Materials**: Upload and query your own syllabus, notes, and past papers
- **Syllabus Coverage Tracker**: See which parts of the syllabus your notes cover
- **Personalized Quiz Generator**: Generate quizzes from your materials
- **Topic Predictor**: Analyze past papers to predict likely exam questions

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Vector Database**: Supabase pgvector
- **AI Models**: Gemini API (Phase 1), Gemma/Qwen locally (Phase 2)
- **Document Processing**: PDF.js, text chunking, and embedding

## Setup Instructions

### Prerequisites

- Node.js 18+
- Supabase account
- Google AI API key (for Gemini access)

### Getting Started

1. **Clone the repository**

   ```
   git clone https://github.com/yourusername/campuscrack.git
   cd campuscrack
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   GOOGLE_API_KEY=your_google_api_key
   ```

4. **Run the development server**

   ```
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application

## Project Structure

- **/app**: Next.js application routes
  - **/dashboard**: Main application views (upload, chat)
- **/components**: Reusable UI components
- **/lib**: Utility functions and modules
  - **/supabase**: Supabase client and functions
  - **/ai**: AI model integration (Gemini)
  - **/processing**: Document processing utilities

## Implementation Phases

### Phase 1: Cloud-Based MVP

- User uploads PDFs (notes, papers, syllabus)
- Text is extracted and chunked for context
- Gemini API generates embeddings stored in Supabase
- Chatbot retrieves relevant chunks and generates answers using Gemini

### Phase 2: Offline/Local Enhancement

- Swap Gemini API for open-source embedding models
- Use local LLM (Gemma 2 9B/Qwen 2.5 7B) via Ollama or llama.cpp
- Optionally migrate to ChromaDB for unlimited local storage

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

\*\* CampusCrack AI-Powered Exam Preparation Chatbot for VTU Syllabus

## 2. **Abstract**

This project aims to develop an AI-driven chatbot tailored for Visvesvaraya Technological University (VTU) students, focusing on exam preparation. The system leverages Retrieval-Augmented Generation (RAG) to answer student queries using a custom knowledge base built from VTU-specific notes, previous question papers, and official syllabus documents. The solution utilizes Next.js for the frontend, Supabase as the vector database, and Gemini API for embeddings and language generation (with a roadmap to migrate to local open-source models). The chatbot provides syllabus-aligned answers, personalized quiz generation, and coverage analysis, enhancing student learning and exam readiness.

---

## 3. **Objectives**

- Enable VTU students to interactively query their syllabus, notes, and past papers.
- Provide accurate, syllabus-aligned answers and explanations.
- Generate quizzes and predict important topics based on historical question trends.
- Offer a scalable, privacy-friendly, and cost-effective solution.

---

## 4. **Scope**

- Supports hundreds of PDFs (notes, papers, syllabus).
- Initially cloud-based (Gemini API, Supabase), with an offline migration plan (Gemma/Qwen models).
- Modular for easy extension to other universities or courses.

---

## 5. **System Architecture**

- **Frontend:** Next.js (TypeScript) web app for PDF upload, chat interface, and quiz dashboard.
- **Backend:** Next.js API routes for document processing, embedding, and retrieval.
- **Vector DB:** Supabase pgvector for storing and searching embeddings.
- **AI Models:** Gemini API for embeddings and language generation (Phase 1); local Gemma/Qwen for offline (Phase 2).
- **Data Sources:** VTU syllabus PDFs, scanned/typed notes, past question papers.

---

## 6. **Implementation Phases**

## **Phase 1: Cloud-Based MVP**

- User uploads PDFs (notes, papers, syllabus).
- Text is extracted and chunked for context.
- Gemini API generates embeddings; stored in Supabase.
- On query, chatbot retrieves relevant chunks and generates answers using Gemini.
- Features: syllabus coverage analysis, quiz generation, topic prediction.

## **Phase 2: Offline/Local Enhancement**

- Swap Gemini API for open-source embedding models (e.g., all-MiniLM-L6-v2).
- Use local LLM (Gemma 2 9B/Qwen 2.5 7B) via Ollama or llama.cpp.
- Optionally migrate to ChromaDB for unlimited local storage.

---

## 7. **Key Features**

- **Syllabus Coverage Tracker:** Highlights which syllabus topics are covered/missing in uploaded notes.
- **Personalized Quiz Generator:** Creates quizzes from user's own material and past paper trends.
- **Topic Predictor:** Analyzes historical papers to suggest likely exam questions.
- **Chatbot Q&A:** Answers student queries using only VTU-aligned content.

---

## 8. **Technologies Used**

- Next.js (TypeScript)
- Supabase (pgvector, storage)
- Gemini API (embedding, generation)
- Python (text extraction, preprocessing)
- Open-source LLMs (Gemma, Qwen) for future offline use

---

## 9. **Testing & Evaluation**

- **User Acceptance Testing:** Conducted with VTU students for usability and accuracy.
- **Performance Testing:** Evaluated for response time and retrieval accuracy.
- **Coverage Testing:** Ensured all syllabus modules are represented.

---

## 10. **Challenges & Solutions**

- **Data Quality:** Addressed by manual curation and OCR correction of scanned notes.
- **Context Loss:** Mitigated by overlapping chunking and careful prompt engineering.
- **API Cost/Latency:** Planned migration to local models for long-term sustainability.

---

## 11. **Results & Impact**

- Students can instantly query their own notes and VTU papers for exam prep.
- Syllabus compliance and quiz features improve targeted revision.
- The system can be adapted for other universities or competitive exams.

---

## 12. **Future Work**

- Expand to support more universities and courses.
- Integrate with mobile platforms.
- Add voice input/output for accessibility.
- Incorporate adaptive learning analytics.

---

## 13. **References**

- [VTU Official Syllabus1](https://vtu.ac.in/pdf/cbcs/pg/2022/aimlsyll.pdf)
- Project report guidelines ([Scribd VTU Guidelines](https://www.scribd.com/document/232327492/VTU-Guidelines-for-Project-Report))[2](https://www.scribd.com/document/232327492/VTU-Guidelines-for-Project-Report)
- Example chatbot project ([Studocu](https://www.studocu.com/in/document/east-west-college-of-engineering-bangalore/electronics-and-communication/a-project-report-on-chatbot/103594724))[3](https://www.studocu.com/in/document/east-west-college-of-engineering-bangalore/electronics-and-communication/a-project-report-on-chatbot/103594724)

---

## 14. **Appendices**

- Sample screenshots of the chatbot interface
- Sample syllabus coverage report
- Example quiz generated from uploaded notes

---

**Prepared as per VTU project report guidelines, including certificate, abstract, and all required sections[2](https://www.scribd.com/document/232327492/VTU-Guidelines-for-Project-Report)[4](https://www.scribd.com/doc/148859709/Final-Year-PW-1-VTU-Guidelines-for-the-Preparation-of-the-Project-Reports).**

A chatbot alone can help you build a solid hackathon project, but **adding unique, relevant features will significantly boost your chances of winning**-especially at the college level where judges look for creativity, impact, and user-centric solutions[1](https://www.linkedin.com/posts/mrmanik_i-got-killer-tips-to-ace-any-hackathon-from-activity-7191345284436656130-Pakj)[2](https://www.upgrad.com/blog/hackathon-project-ideas/)[4](https://www.linkedin.com/posts/kishore-sr_what-it-takes-to-win-a-hackathon-after-activity-7266864220883869696-KVz2)6.
