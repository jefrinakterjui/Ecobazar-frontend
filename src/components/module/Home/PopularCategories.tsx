import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

const categories: Category[] = [
  { id: 1, name: "Fresh Fruit", image: "/frouit.png", slug: "fresh-fruit" },
  { id: 2, name: "Fresh Vegetables", image: "/vage.png", slug: "fresh-vegetables" },
  { id: 3, name: "Meat & Fish", image: "/fish.png", slug: "meat-fish" },
  { id: 4, name: "Snacks", image: "/snacks.png", slug: "snacks" },
  { id: 5, name: "Beverages", image: "/beverages.png", slug: "beverages" },
  { id: 6, name: "Beauty & Health", image: "/beauty.png", slug: "beauty-health" },
  { id: 7, name: "Bread & Bakery", image: "/bread.png", slug: "bread-bakery" },
  { id: 8, name: "Baking Needs", image: "/baking.png", slug: "baking-needs" },
  { id: 9, name: "Cooking", image: "/cooking.png", slug: "cooking" },
  { id: 10, name: "Diabetic Food", image: "/diabetic.png", slug: "diabetic-food" },
  { id: 11, name: "Dish Detergents", image: "/detergents.png", slug: "dish-detergents" },
  { id: 12, name: "Oil", image: "/oil.png", slug: "oil" },
];

const PopularCategories = () => {
  return (
    <section className="py-12 font-sans">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Categories</h2>
          <Link 
            href="/categories" 
            className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((item) => (
            <Link 
              key={item.id} 
              href={`/shop/${item.slug}`}
              className="group block"
            >
              <div className="border border-gray-100 rounded-lg p-6 text-center hover:border-primary  transition-all duration-300 bg-white h-full flex flex-col items-center justify-center gap-4">
                
                <div className="relative w-full h-25 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100} 
                    height={90}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-gray-900 font-medium text-base group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularCategories;