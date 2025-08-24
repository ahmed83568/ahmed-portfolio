"use client";

export default function ResumeButton() {
  return (
    <div className="text-center my-10">
      <a
        href="/AhmedRaza-Resume-Frontend-Developer.pdf"
        download
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
      >
        📄 Download Resume
      </a>
    </div>
  );
}
