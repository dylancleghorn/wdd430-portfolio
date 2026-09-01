import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 py-4 text-white shadow-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6">
        <div id="header-title" className="text-2xl font-bold">
          Dylan Cleghorn
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
