import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PagesHero from '../../components/PagesHero';
import Link from 'next/link';
import { blogPosts } from '../data';
import { FaArrowLeft, FaCalendar, FaTag } from 'react-icons/fa';

interface BlogPostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);
    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }
    return {
        title: `${post.title} - MT Law Firm`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

export default async function BlogPost({ params }: BlogPostPageProps) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white pb-20">
            {/* Header Section */}
            <PagesHero title={post.category} description="" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="h-[400px] relative">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <div className="flex items-center gap-4 text-sm font-medium mb-3 opacity-90">
                                <span className="flex items-center gap-1"><FaCalendar /> {post.date}</span>
                                <span className="flex items-center gap-1"><FaTag /> {post.category}</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{post.title}</h1>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
                            <div className="space-y-6">
                                <p className="text-xl font-medium text-slate-800 border-l-4 border-gold pl-4 italic">
                                    {post.excerpt}
                                </p>
                                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/className="/g, 'class="') }} />
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-100">
                            <Link
                                href="/blogs"
                                className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
                            >
                                <FaArrowLeft /> Back to Blogs
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
