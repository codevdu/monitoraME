import { Header } from "@/components/hero/header";
import { HeroSection } from "@/components/hero/sections/hero";
import { LogosSection } from "@/components/hero/sections/logos-section";

export default function Home() {
	return (
		<>
			<Header />
			<main className="grow">
				<HeroSection />
				<LogosSection />
			</main>
		</>
	);
}
