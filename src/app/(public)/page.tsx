import Features from "@/components/module/Home/Features";
import Hero from "@/components/module/Home/Hero";
import PopularCategories from "@/components/module/Home/PopularCategories";

export default function page() {
    return (
        <div>
            <Hero />
            <Features />
            <PopularCategories/>
        </div>
    );
}