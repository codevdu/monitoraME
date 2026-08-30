import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoCloud() {
	return (
		<div className="relative flex flex-wrap items-center justify-center gap-x-10 gap-y-8 py-6 sm:gap-x-12 sm:gap-y-12">
			{logos.map((logo) => (
				<Image
					alt={logo.alt}
					className={cn(
						"pointer-events-none w-fit select-none dark:brightness-0 dark:invert",
						logo.size,
					)}
					height={logo.height}
					key={logo.alt}
					loading="lazy"
					src={logo.src}
					width={logo.width}
				/>
			))}
		</div>
	);
}

const logos = [
	{
		src: "https://res.cloudinary.com/djjrquydc/image/upload/v1788062438/1788062361802.png",
		alt: "Pague Menos Logo",
		width: 1200,
		height: 1200,
		size: "h-22",
	},
	{
		src: "https://res.cloudinary.com/djjrquydc/image/upload/v1788060063/a7b3450a-12eb-4e63-ba6e-78d3fe7d54e3.png",
		alt: "Amontada Valley Logo",
		width: 1200,
		height: 1200,
		size: "h-15",
	},
	{
		src: "https://res.cloudinary.com/djjrquydc/image/upload/v1788064565/1788064469318.png",
		alt: "Ninna Hub Logo",
		width: 1200,
		height: 1200,
		size: "h-15",
	},
	{
		src: "https://res.cloudinary.com/djjrquydc/image/upload/v1788061954/1788061860774.png",
		alt: "Sebrae Logo",
		width: 1200,
		height: 1200,
		size: "h-15.5",
	},
];
