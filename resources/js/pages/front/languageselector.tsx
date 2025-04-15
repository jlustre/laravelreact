const LanguageSelector = () => {
    return (
        <div className="mt-20 border-y border-slate-700 py-5">
            <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-12">
                <div className="md:col-span-2">
                    <div className="dropdown relative">
                        <button
                            type="button"
                            className="dropdown-toggle btn group/items focus:border-custom-500 inline-flex items-center gap-3 border-slate-700 transition-all duration-200 ease-linear"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                        >
                            <img src="./assets/images/us2.svg" alt="" className="h-5 rounded-full object-cover" />
                            <h6 className="group-hover/items:text-custom-500 text-base font-medium text-slate-300 transition-all duration-200 ease-linear">
                                English
                            </h6>
                        </button>

                        <div
                            className="dropdown-menu dark:bg-zink-600 absolute z-50 mt-1 flex hidden min-w-[9rem] list-none flex-col gap-3 rounded-md bg-white p-3 text-left shadow-md"
                            aria-labelledby="dropdownMenuButton"
                        >
                            <a href="#!" className="group/items flex items-center gap-3">
                                <img src="./assets/images/us2.svg" alt="" className="h-4 rounded-full object-cover" />
                                <h6 className="dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500 text-sm font-medium text-slate-600 transition-all duration-200 ease-linear">
                                    English
                                </h6>
                            </a>
                            <a href="#!" className="group/items flex items-center gap-3">
                                <img src="./assets/images/es2.svg" alt="" className="h-4 rounded-full object-cover" />
                                <h6 className="dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500 text-sm font-medium text-slate-600 transition-all duration-200 ease-linear">
                                    Spanish
                                </h6>
                            </a>
                            <a href="#!" className="group/items flex items-center gap-3">
                                <img src="./assets/images/de2.svg" alt="" className="h-4 rounded-full object-cover" />
                                <h6 className="dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500 text-sm font-medium text-slate-600 transition-all duration-200 ease-linear">
                                    German
                                </h6>
                            </a>
                            <a href="#!" className="group/items flex items-center gap-3">
                                <img src="./assets/images/fr2.svg" alt="" className="h-4 rounded-full object-cover" />
                                <h6 className="dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500 text-sm font-medium text-slate-600 transition-all duration-200 ease-linear">
                                    French
                                </h6>
                            </a>
                            <a href="#!" className="group/items flex items-center gap-3">
                                <img src="./assets/images/jp2.svg" alt="" className="h-4 rounded-full object-cover" />
                                <h6 className="dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500 text-sm font-medium text-slate-600 transition-all duration-200 ease-linear">
                                    Japanese
                                </h6>
                            </a>
                            <a href="#!" className="group/items flex items-center gap-3">
                                <img src="./assets/images/it.svg" alt="" className="h-4 rounded-full object-cover" />
                                <h6 className="dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500 text-sm font-medium text-slate-600 transition-all duration-200 ease-linear">
                                    Italian
                                </h6>
                            </a>
                            <a href="#!" className="group/items flex items-center gap-3">
                                <img src="./assets/images/ru.svg" alt="" className="h-4 rounded-full object-cover" />
                                <h6 className="dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500 text-sm font-medium text-slate-600 transition-all duration-200 ease-linear">
                                    Russian
                                </h6>
                            </a>
                            <a href="#!" className="group/items flex items-center gap-3">
                                <img src="./assets/images/ae.svg" alt="" className="h-4 rounded-full object-cover" />
                                <h6 className="dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500 text-sm font-medium text-slate-600 transition-all duration-200 ease-linear">
                                    Arabic
                                </h6>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-3 md:col-start-10">
                    <ul className="flex items-center gap-3 md:justify-end">
                        <li>
                            <a
                                href="#!"
                                className="hover:text-custom-500 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 ease-linear"
                            >
                                <i data-lucide="facebook" className="size-4"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#!"
                                className="hover:text-custom-500 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 ease-linear"
                            >
                                <i data-lucide="linkedin" className="size-4"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#!"
                                className="hover:text-custom-500 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 ease-linear"
                            >
                                <i data-lucide="instagram" className="size-4"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#!"
                                className="hover:text-custom-500 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 ease-linear"
                            >
                                <i data-lucide="twitter" className="size-4"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#!"
                                className="hover:text-custom-500 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 ease-linear"
                            >
                                <i data-lucide="youtube" className="size-4"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;
