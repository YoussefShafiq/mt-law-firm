import type { Metadata } from 'next';
import PagesHero from '../components/PagesHero';
import Link from 'next/link';
import { blogPosts } from './data';

export const metadata: Metadata = {
    title: 'Blogs - MT Law Firm',
    description: 'Insights, updates, and legal news from MT Law Firm.',
};

export default function Blogs() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <PagesHero title="Blogs at MT Law Firm" description="Insights, updates, and legal news." />

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Latest Articles</h2>
                    <p className="text-slate-600 mb-12 text-lg">Stay tuned for expert legal insights and firm updates.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {blogPosts.map((post) => (
                            <Link href={`/blogs/${post.id}`} key={post.id} className="block group h-full">
                                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 h-full flex flex-col">
                                    <div className="h-48 bg-slate-200 relative overflow-hidden">
                                        <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors"></div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="text-sm text-slate-600 mb-2 font-semibold flex justify-between">
                                            <span>{post.category}</span>
                                            <span className="text-slate-400 font-normal">{post.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{post.title}</h3>
                                        <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                                        <span className="text-primary font-semibold group-hover:underline mt-auto">Read More &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
