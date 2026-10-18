import BooksPage from "./components/HomePage/books";
import HeroPage from "./components/HomePage/hero";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-emerald-100 via-emerald-50 to-white">
      <HeroPage />
      <BooksPage />
      
    </div>
  );
}
