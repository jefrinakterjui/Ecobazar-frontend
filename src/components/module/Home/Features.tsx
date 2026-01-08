import { Truck, Headphones, ShoppingBag, Package } from "lucide-react";

const features = [
    {
        id: 1,
        icon: Truck,
        title: "Free Shipping",
        subtitle: "Free shipping on all your order",
    },
    {
        id: 2,
        icon: Headphones,
        title: "Customer Support 24/7",
        subtitle: "Instant access to Support",
    },
    {
        id: 3,
        icon: ShoppingBag,
        title: "100% Secure Payment",
        subtitle: "We ensure your money is save",
    },
    {
        id: 4,
        icon: Package,
        title: "Money-Back Guarantee",
        subtitle: "30 Days Money-Back Guarantee",
    },
];

const Features = () => {
    return (
        <section className="py-8 font-sans">
            <div className="container mx-auto px-4">
                <div className="bg-white border-b-2 lg:border-none border-gray-100 shadow-[0px_8px_40px_rgba(0,0,0,0.08)] rounded-lg p-8">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 group">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-primary transition-colors duration-300">
                                    <item.icon
                                        size={32}
                                        className="text-primary group-hover:text-white transition-colors duration-300"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-gray-900 font-bold text-base mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;