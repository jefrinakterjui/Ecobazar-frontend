import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbPath {
    label: string;
    href?: string;
}

interface BreadcrumbSectionProps {
    paths: BreadcrumbPath[];
    backgroundImage?: string;
}

const BreadcrumbSection = ({
    paths,
    backgroundImage = "/breadcrumbs-bg.jpg"
}: BreadcrumbSectionProps) => {
    return (
        <section className="relative w-full h-32 md:h-40 overflow-hidden font-sans">
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Breadcrumb Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                <nav className="flex items-center gap-2 text-sm md:text-base">

                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        <Home size={20} />
                    </Link>

                    {paths.map((path, index) => {
                        const isLast = index === paths.length - 1;

                        return (
                            <div key={index} className="flex items-center gap-2">
                                <ChevronRight size={16} className="text-gray-500" />

                                {isLast ? (
                                    <span className="text-primary font-medium capitalize">
                                        {path.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={path.href || "#"}
                                        className="text-gray-400 hover:text-white transition-colors capitalize"
                                    >
                                        {path.label}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>
        </section>
    );
};

export default BreadcrumbSection;