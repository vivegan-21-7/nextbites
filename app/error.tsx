"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      className="detail"
      style={{ textAlign: "center", padding: "60px 20px" }}
    >
      <div
        className="empty"
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          padding: "36px 24px",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            margin: "0 0 10px",
            color: "var(--brand)",
          }}
        >
          Something went wrong!
        </h2>
        <p style={{ color: "var(--ink2)", margin: "10px 0 24px" }}>
          {error.message ||
            "An unexpected error occurred while loading this page."}
        </p>
        <button
          onClick={() => reset()}
          className="chip chip-cuisine"
          style={{
            cursor: "pointer",
            border: "none",
            padding: "10px 22px",
            fontSize: "0.95rem",
            fontWeight: 700,
          }}
        >
          Try again
        </button>
      </div>
    </main>
  );
}
