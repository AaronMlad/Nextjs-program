import Link from 'next/link';

export default function Header() {
 return (
 <>
    <div className="sticky top-0">
        <div className="flex justify-between border-b pt-2">
            <div className="ml-8 mb-2 mt-2">
                <span>
                    <h1><strong>Dashboard</strong></h1>
                </span>
            </div>
                <nav className="flex gap-4 mr-16 ml-8 mb-2 mt-2">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
        </div>
    </div>
  </>
);
}