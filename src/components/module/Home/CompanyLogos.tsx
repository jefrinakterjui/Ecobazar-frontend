import Image from "next/image";

interface Brand {
  id: number;
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { id: 1, name: "steps", logo: "/Vector.png" },
  { id: 2, name: "mango", logo: "/mango1.png" },
  { id: 3, name: "food", logo: "/food.png" },
  { id: 4, name: "food", logo: "/food.png" },
  { id: 5, name: "book-off", logo: "/book-off.png" },
  { id: 6, name: "g-series", logo: "/g-series.png" },
];

const CompanyLogos = () => {
  return (
    <section className="py-12 bg-white font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center">
          {brands.map((brand, index) => (
            <div 
              key={brand.id} 
              className={`flex justify-center items-center h-16 w-full ${
                index !== brands.length - 1 ? "lg:border-r border-gray-200" : ""
              }`}
            >
              <div className="relative w-24 h-10 opacity-60 hover:text-primary transition-opacity duration-300">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;