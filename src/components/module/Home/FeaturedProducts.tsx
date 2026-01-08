import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Heart, Eye } from "lucide-react";
import { SlHandbag } from "react-icons/sl";

interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    rating: number;
    image: string;
    isSale?: boolean;
    saleTag?: string;
    status?: "In Stock" | "Out of Stock";
}

const products: Product[] = [
    {
        id: 1,
        name: "Green Apple",
        price: 14.99,
        oldPrice: 20.99,
        rating: 4,
        image: "/apple.png",
        isSale: true,
        saleTag: "Sale 50%",
    },
    {
        id: 2,
        name: "Fresh Indian Malta",
        price: 20.00,
        rating: 5,
        image: "/malta.png",
    },
    {
        id: 3,
        name: "Chinese cabbage",
        price: 12.00,
        rating: 5,
        image: "/cabbage.png",
    },
    {
        id: 4,
        name: "Green Lettuce",
        price: 9.00,
        rating: 5,
        image: "/lettuce.png",
    },
    {
        id: 5,
        name: "Eggplant",
        price: 34.00,
        rating: 5,
        image: "/eggplant.png",
    },
];

const RatingStars = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={12}
                    fill={i < rating ? "#FF8A00" : "none"}
                    stroke={i < rating ? "none" : "#CCCCCC"}
                    className={i < rating ? "text-warning" : "text-gray-300"}
                />
            ))}
        </div>
    );
};

const FeaturedProducts = () => {
    return (
        <section className="py-12 font-sans">
            <div className="container mx-auto px-4">

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
                    <Link
                        href="/shop"
                        className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                        View All <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border border-gray-100 rounded-lg overflow-hidden bg-white">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative border border-gray-100 p-4 transition-all duration-300 hover:shadow-[0px_0px_12px_rgba(32,181,38,0.32)] hover:border-primary hover:z-10 bg-white"
                        >
                            {product.isSale && (
                                <span className="absolute top-4 left-4 z-20 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                                    {product.saleTag}
                                </span>
                            )}

                            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-20">
                                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-700 hover:bg-primary hover:text-white border border-gray-100 transition-colors">
                                    <Heart size={18} />
                                </button>
                                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-700 hover:bg-primary hover:text-white border border-gray-100 transition-colors">
                                    <Eye size={18} />
                                </button>
                            </div>

                            <div className="relative w-full h-45 flex items-center justify-center mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={200}
                                    height={200}
                                    className="object-contain h-full w-auto"
                                />
                            </div>

                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-gray-700 text-sm font-normal mb-1 group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                    <div className="mb-2">
                                        <RatingStars rating={product.rating} />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-900 font-medium text-base">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        {product.oldPrice && (
                                            <span className="text-gray-400 text-sm line-through decoration-gray-400">
                                                ${product.oldPrice.toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <SlHandbag size={20} />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;