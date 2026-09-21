import FooterPage from "./components/Footer/footer";
import BooksPage from "./components/HomePage/books";
import HeroPage from "./components/HomePage/hero";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <BooksPage />
      <FooterPage />
    </div>
  );
}
