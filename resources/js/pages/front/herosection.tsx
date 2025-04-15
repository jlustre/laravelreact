import { LogIn } from 'lucide-react';
import StartButton from './startbutton';

const HeroSection = () => {
    return (
        <section className="relative pt-44 pb-36" id="home">
            <div className="dark:border-t-zink-500 dark:border-l-zink-500 dark:border-r-zink-400 dark:border-b-zink-400 absolute -bottom-[250px] z-10 hidden size-[500px] rotate-45 rounded-full border border-dashed border-t-slate-300 border-r-slate-700 border-b-slate-700 border-l-slate-300 lg:block ltr:right-40 rtl:left-40"></div>
            <div className="dark:border-t-zink-500 dark:border-l-zink-500 dark:border-r-zink-400 dark:border-b-zink-400 absolute -bottom-[350px] z-10 hidden size-[700px] rotate-45 rounded-full border border-dashed border-t-slate-300 border-r-slate-700 border-b-slate-700 border-l-slate-300 2xl:block ltr:right-16 rtl:left-16"></div>
            <div className="container mx-auto px-4 2xl:max-w-[87.5rem]">
                <div className="grid grid-cols-12 2xl:grid-cols-2">
                    <div className="col-span-12 lg:col-span-7 2xl:col-span-1">
                        <h1 className="mb-8 !leading-relaxed md:text-4xl">
                            <span className="text-2xl">Welcome To </span>
                            <span className="relative mx-2 inline-block px-2 before:absolute before:-inset-1 before:block before:-skew-y-6 before:rounded-md before:bg-sky-50 before:backdrop-blur-xl dark:before:bg-sky-500/20">
                                <span className="relative text-sky-600">Wealth Legacy Alliance</span>
                            </span>
                        </h1>
                        <p className="dark:text-zink-200 mb-6 text-lg text-slate-500">
                            <span className="font-extrabold">Unlock Multiple Income Streams</span>. Build Your Wealth Legacy Now.{' '}
                            <span className="text-custom-500 font-medium">Wealth Legacy Alliance</span> offers a clear and strategic path to financial
                            independence through diversified MLM partnerships. Your journey starts today.
                        </p>
                        <div className="flex items-center gap-2">
                            <StartButton />
                            <button
                                type="button"
                                onClick={() => handleNavigation('/login')}
                                className="btn bg-custom-500 border-custom-500 hover:bg-custom-600 hover:border-custom-600 focus:bg-custom-600 focus:border-custom-600 focus:ring-custom-100 active:bg-custom-600 active:border-custom-600 active:ring-custom-100 dark:ring-custom-400/20 hover: cursor-pointer px-2 py-0 text-white hover:text-white focus:text-white focus:ring active:text-white active:ring"
                            >
                                <LogIn className="mr-2 inline-block size-4" />
                                <span className="align-middle">Sign In</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
