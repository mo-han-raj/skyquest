import ShinyButton from "./magicui/shiny-button";
import Link from 'next/link';

const Cta = () => {
  return (
    <section>
      <div className="py-20 bg-hlight dark:bg-hdark bg-fill bg-no-repeat rounded container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl max-w-xl text-center mb-8">
            Prepared to see the Northern lights? We are here to guide you
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

            <Link href={'/contact'}>
              <ShinyButton text="Contact Us" className="rounded-full bg-gradient-to-r from-green-200 dark:from-cyan-200 to-cyan-300 dark:to-green-300 dark:bg-gradient-to-r" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
