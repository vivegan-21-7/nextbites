import Link from "next/link";

export default function NavBar() {
  return (
    <header className="nav">
      <Link href="/" className="brand">
        <span className="brand-mark">🍴</span> NextBites
      </Link>
      <nav className="nav-links">
        <Link href="/">Recipes</Link>
        <a
          href="https://github.com/vivegan-21-7/nextbites"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
