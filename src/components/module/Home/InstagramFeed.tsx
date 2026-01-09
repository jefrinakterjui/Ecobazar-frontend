import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

interface InstagramPost {
  id: number;
  image: string;
  link: string;
}

const instagramPosts: InstagramPost[] = [
  { id: 1, image: "/post-1.png", link: "#" },
  { id: 2, image: "/post-2.png", link: "#" },
  { id: 3, image: "/post-3.png", link: "#" },
  { id: 4, image: "/post-4.png", link: "#" },
  { id: 5, image: "/post-5.png", link: "#" },
  { id: 6, image: "/post-6.png", link: "#" },
];

const InstagramFeed = () => {
  return (
    <section className="py-12 bg-white font-sans">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Follow us on Instagram</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {instagramPosts.map((post) => (
            <Link 
              key={post.id} 
              href={post.link}
              target="_blank"
              className="group relative block aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={post.image}
                alt="Instagram Post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-green-600/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramFeed;