interface BBBSealProps {
	className?: string;
}

const BBB_PROFILE_URL =
	"https://www.bbb.org/us/tx/wills-point/profile/gutters/lunas-roofing-llc-1075-28119960/#sealclick";

// BBB serves this seal dynamically (live rating + "as of" date), and BBB's terms
// require it to be hotlinked rather than self-hosted. Do not copy it into /public.
const BBB_SEAL_URL =
	"https://seal-easttexas.bbb.org/seals/blue-seal-200-42-bbb-28119960.png";

export function BBBSeal({ className = "" }: BBBSealProps) {
	return (
		<a
			href={BBB_PROFILE_URL}
			target="_blank"
			rel="nofollow noopener noreferrer"
			aria-label="Luna's Roofing LLC BBB Business Review (opens in a new tab)"
			className={`inline-block rounded-md bg-white p-2 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}
		>
			{/* Explicit width/height at the seal's native size prevents layout shift
			    and avoids upscaling the 200x42 PNG (which would blur it). */}
			<img
				src={BBB_SEAL_URL}
				alt="Luna's Roofing LLC BBB Business Review"
				width={200}
				height={42}
				loading="lazy"
				decoding="async"
				className="block h-[42px] w-[200px] max-w-none border-0"
			/>
		</a>
	);
}
