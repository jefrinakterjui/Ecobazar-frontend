import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import NewsletterPopup from "@/components/shared/NewsletterPopup";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NewsletterPopup />
            <Navbar />
            <main className="min-h-dvh">{children}</main>
            <Footer />
            {/* <MobileNavbar /> */}
        </>
    );
}