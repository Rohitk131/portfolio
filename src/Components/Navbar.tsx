
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full pt-4">
      <header className="flex items-center justify-center px-5 py-5 bg-green-300 shadow-2xl max-w-xl mx-auto rounded-full bg-blur-blur-lg">
        <nav className="flex items-center gap-12">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-muted-foreground"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-muted-foreground"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-muted-foreground"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-muted-foreground"
            prefetch={false}
          >
            Blogs
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-muted-foreground"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}
