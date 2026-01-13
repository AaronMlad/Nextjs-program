import Link from 'next/link';

export default function Header() {
 return (
 <>
    <div className="sticky top-0 bg-[#031a38] text-white text-center p-4">
        <div className="flex justify-between border-b pt-2">
            <div className="ml-8 mb-2 mt-2">
                <span>
                    <h1><strong>Dashboard</strong></h1>
                </span>
            </div>
                <nav className="flex gap-4 mr-16 ml-8 mb-2 mt-2">
                    <Link href="/" className="hover:bg-gray-700 px-3 py-1 rounded"><i className="fa-solid fa-house"></i>Home</Link>
                    <Link href="/about" className="hover:bg-gray-700 px-3 py-1 rounded">About</Link>
                    <Link href="/contact" className="hover:bg-gray-700 px-3 py-1 rounded">Contact</Link>
                </nav>
        </div>
    </div>
  </>
);
}