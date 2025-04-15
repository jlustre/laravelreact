import { ChevronUp } from 'lucide-react';

const Gotopbtn = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });
    };
    return (
        <button
            id="back-to-top"
            onClick={scrollToTop}
            className="fixed right-10 bottom-10 flex h-10 w-10 items-center justify-center rounded-md bg-yellow-500 text-white"
        >
            <ChevronUp />
        </button>
    );
};

export default Gotopbtn;
