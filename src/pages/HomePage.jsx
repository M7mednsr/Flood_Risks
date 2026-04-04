import HeroSection from '../components/home/HeroSection';
import NavigationButtons from '../components/home/NavigationButtons';

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <NavigationButtons />
    </main>
  );
}
