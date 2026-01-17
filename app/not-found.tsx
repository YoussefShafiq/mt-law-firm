import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-slate-900 mb-4">404</h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 mb-4">
                    Page Not Found
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                    Sorry, we couldn't find the page you're looking for. The page may have been moved or deleted.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/contacts"
                        className="bg-slate-200 hover:bg-slate-300 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
