import Link from "next/link";

export default function NotFound() {
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
        <h1 style={{ fontSize: "3rem", margin: "0 0 12px" }}>404</h1>
        <h2>Recipe Not Found</h2>
        <p style={{ color: "var(--ink2)", margin: "10px 0 24px" }}>
          We couldn&apos;t find the recipe you&apos;re looking for. It might have
          been removed or the link might be broken.
        </p>
        <Link href="/" className="back" style={{ fontSize: "1rem" }}>
          ← Back to all recipes
        </Link>
      </div>
    </main>
  );
}
