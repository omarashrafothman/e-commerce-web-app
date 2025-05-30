import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function StoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
            >
                <Header />
                <main >
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}