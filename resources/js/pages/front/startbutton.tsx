import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import { UserPlus } from 'lucide-react';

const StartButton = () => {
    const { url } = usePage();
    const handleNavigation = (route: string) => {
        Inertia.visit(route); // Use Inertia for navigation
    };

    return (
        <button
            type="button"
            onClick={() => handleNavigation('/register')}
            className="btn border-green-600 bg-green-300 px-2 py-0 text-green-900 hover:cursor-pointer hover:border-green-600 hover:bg-green-800 focus:border-green-600 focus:bg-green-600 focus:text-green-100 focus:ring focus:ring-green-100 active:border-green-600 active:bg-green-600 active:text-white active:ring active:ring-green-100 dark:ring-green-400/20"
        >
            <UserPlus className="mr-2 inline-block size-4" />
            <span className="align-middle">Register To Get Started</span>
        </button>
    );
};

export default StartButton;
