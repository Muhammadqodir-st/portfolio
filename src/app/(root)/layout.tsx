import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layot({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="h-full">
                {children}
            </div>
            <Footer />
        </div>
    )
}