import { Inertia } from '@inertiajs/inertia';
import { Link, usePage } from '@inertiajs/react';
import { LogIn, UserPlus } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { url } = usePage();

    const menuItems = [
        { name: 'Home', route: '/' },
        // { name: 'Features', route: '/#features' },
        { name: 'How It Works', route: '/#about' },
        // { name: 'Pricing', route: '/#pricing' },
        { name: 'Contact Us', route: '/#contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (route: string) => {
        Inertia.visit(route); // Use Inertia for navigation
    };

    return (
        <nav
            className="dark:[&.is-sticky]:bg-zink-700 dark:border-zink-500 dark:[&.is-sticky]:shadow-zink-500/30 navbar fixed inset-x-0 top-0 z-[1000] flex h-14 items-center justify-center border-b border-slate-200 bg-blue-200 py-0 [&.is-sticky]:bg-white [&.is-sticky]:shadow-lg [&.is-sticky]:shadow-slate-200/25"
            id="navbar"
        >
            <div className="x-4 container mx-auto flex w-full items-center self-center 2xl:max-w-[87.5rem]">
                <div className="shrink-0">
                    <a href="#!">
                        <img src="./assets/images/logo-dark.png" alt="" className="block h-6 dark:hidden" />
                        <img src="./assets/images/logo-light.png" alt="" className="hidden h-6 dark:block" />
                    </a>
                </div>
                <div className="mx-auto">
                    <ul
                        id="navbar7"
                        className={`${isMenuOpen ? 'visible' : 'hidden'} dark:bg-zink-600 navbar-menu absolute inset-x-0 top-full z-20 items-center rounded-b-md bg-white py-3 shadow-lg hover:cursor-pointer md:relative md:top-auto md:z-0 md:flex md:rounded-none md:bg-transparent md:py-0 md:shadow-none ltr:ml-auto rtl:mr-auto dark:md:bg-transparent`}
                    >
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.route}
                                    className={`menu-item ${url === item.route ? 'active' : ''} text-15 hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 block px-4 py-2.5 font-medium text-slate-800 transition-all duration-300 ease-linear md:inline-block md:px-3 md:py-0.5`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-2">
                    <div className="navbar-toggale-button md:hidden ltr:ml-auto rtl:mr-auto">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="btn flex size-[40px] items-center justify-center border-yellow-500 bg-yellow-500 p-0 text-white hover:border-yellow-600 hover:bg-yellow-600 hover:text-white focus:border-yellow-600 focus:bg-yellow-600 focus:text-white focus:ring focus:ring-yellow-100 active:border-yellow-600 active:bg-yellow-600 active:text-white active:ring active:ring-yellow-100 dark:ring-yellow-400/20"
                        >
                            &#9776;
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={() => handleNavigation('/login')}
                        className="btn bg-custom-500 border-custom-500 hover:bg-custom-600 hover:border-custom-600 focus:bg-custom-600 focus:border-custom-600 focus:ring-custom-100 active:bg-custom-600 active:border-custom-600 active:ring-custom-100 dark:ring-custom-400/20 hover: cursor-pointer px-2 py-0 text-white hover:text-white focus:text-white focus:ring active:text-white active:ring"
                    >
                        <LogIn className="mr-2 inline-block size-4" />
                        <span className="align-middle">Sign In</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => handleNavigation('/register')}
                        className="btn hover: cursor-pointer border-green-500 bg-green-500 px-2 py-0 text-white hover:border-green-600 hover:bg-green-600 hover:text-white focus:border-green-600 focus:bg-green-600 focus:text-white focus:ring focus:ring-green-100 active:border-green-600 active:bg-green-600 active:text-white active:ring active:ring-green-100 dark:ring-green-400/20"
                    >
                        <UserPlus className="mr-2 inline-block size-4" />
                        <span className="align-middle">Register</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
