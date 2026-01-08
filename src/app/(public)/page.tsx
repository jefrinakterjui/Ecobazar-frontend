import DiscountBanner from "@/components/module/Home/DiscountBanner";
import FeaturedProducts from "@/components/module/Home/FeaturedProducts";
import Features from "@/components/module/Home/Features";
import Hero from "@/components/module/Home/Hero";
import HotDeals from "@/components/module/Home/HotDeals";
import PopularCategories from "@/components/module/Home/PopularCategories";
import PopularProducts from "@/components/module/Home/PopularProducts";
import PromotionalBanners from "@/components/module/Home/PromotionalBanners";

export default function page() {
    return (
        <div>
            <Hero />
            <Features />
            <PopularCategories/>
            <PopularProducts/>
            <PromotionalBanners/>
            <HotDeals/>
            <DiscountBanner/>
            <FeaturedProducts/>
        </div>
    );
}