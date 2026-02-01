import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layot({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen bg-gray-50">
            <Header />
            <div className="h-full">
                {children}
            </div>
            <Footer />
        </div>
    )
}