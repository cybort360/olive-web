import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-forest flex flex-col items-center justify-center px-6 py-20 text-center">

        {/* Olive branch mark */}
        <Image
          src="/olive-branch.svg"
          alt=""
          width={48}
          height={48}
          className="mb-10"
          aria-hidden="true"
          priority
        />

        {/* Hero headline */}
        <h1 className="font-fraunces font-semibold text-offwhite text-5xl md:text-7xl leading-tight max-w-3xl mb-6">
          Know your footprint.<br />Own your future.
        </h1>

        {/* Subhead */}
        <p className="font-sans text-sage text-lg md:text-xl max-w-md mb-14 leading-relaxed">
          Olive is a personal carbon tracker built around the things you already do.
        </p>

        {/* Mission */}
        <div className="font-sans text-white/75 text-base max-w-lg space-y-5 leading-relaxed">
          <p>
            Most people want to live more sustainably but have no idea where their carbon
            actually comes from. Olive tracks your travel and purchases quietly in the
            background, without questionnaires or manual logging. You get a real number
            built from your real life.
          </p>
          <p>
            We built it because carbon guilt is everywhere and carbon clarity is almost nowhere.
          </p>
        </div>

      </main>

      <footer className="bg-forest font-sans text-xs text-white/35 text-center py-6">
        © 2026 Olive
      </footer>
    </>
  )
}
