import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag, User, MessageCircle } from "lucide-react";

interface BlogPost {
    id: number;
    image: string;
    date: {
        day: number;
        month: string;
    };
    category: string;
    author: string;
    comments: number;
    title: string;
    slug: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: "/blog-1.png",
        date: { day: 18, month: "NOV" },
        category: "Food",
        author: "Admin",
        comments: 65,
        title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
        slug: "curabitur-porttitor",
    },
    {
        id: 2,
        image: "/blog-2.png",
        date: { day: 29, month: "JAN" },
        category: "Food",
        author: "Admin",
        comments: 65,
        title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
        slug: "eget-lobortis",
    },
    {
        id: 3,
        image: "/blog-3.png",
        date: { day: 21, month: "FEB" },
        category: "Food",
        author: "Admin",
        comments: 65,
        title: "Maecenas blandit risus elementum mauris malesuada.",
        slug: "maecenas-blandit",
    },
];

const LatestNews = () => {
    return (
        <section className="py-16 font-sans bg-white">
            <div className="container mx-auto px-4">

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="group bg-white rounded-lg overflow-hidden shadow-[0px_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-all duration-300"
                        >

                            <div className="relative h-62.5 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded shadow-sm px-3 py-2 text-center min-w-12.5">
                                    <span className="block text-lg font-bold text-gray-900 leading-none">
                                        {post.date.day}
                                    </span>
                                    <span className="block text-[10px] font-medium text-gray-500 uppercase mt-0.5">
                                        {post.date.month}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Tag size={14} className="text-primary" />
                                        <span>{post.category}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={14} className="text-primary" />
                                        <span>By {post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageCircle size={14} className="text-primary" />
                                        <span>{post.comments} Comments</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                                    <Link href={`FeaturedProducts/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <Link
                                    href={`FeaturedProducts/${post.slug}`}
                                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                                >
                                    Read More <ArrowRight size={16} />
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LatestNews;