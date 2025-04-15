const Features2Section = () => {
    return (
        <section className="dark:bg-zink-700/40 relative bg-slate-50 pb-32">
            <div className="container mx-auto px-4 2xl:max-w-[87.5rem]">
                <div className="grid grid-cols-1 gap-6 gap-x-5 lg:grid-cols-2 xl:grid-cols-12">
                    <div className="xl:col-span-4">
                        <div className="card dark:bg-zink-600 -mt-36 transition-all duration-300 ease-linear hover:-translate-y-2">
                            <div className="p-6">
                                <img src="./assets/images/chat.jpg" alt="" className="rounded-md shadow" />
                                <div className="mt-6">
                                    <span className="inline-block rounded border border-sky-200 bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-500 dark:border-sky-500/20 dark:bg-sky-500/20">
                                        Popular Apps
                                    </span>
                                    <h6 className="mt-3 mb-2 truncate text-lg">
                                        <a href="#!">Chat with Client & Employee</a>
                                    </h6>
                                    <p className="dark:text-zink-200 text-16 mb-3 text-slate-500">
                                        A chat UI, or user interface, is one of the first things users see when using a web or mobile application to
                                        communicate.
                                    </p>
                                    <a href="#!" className="text-custom-500 text-16">
                                        Read More{' '}
                                        <i data-lucide="move-right" className="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4">
                        <div className="card dark:bg-zink-600 transition-all duration-300 ease-linear hover:-translate-y-2 md:-mt-36">
                            <div className="p-6">
                                <img src="./assets/images/email.jpg" alt="" className="rounded-md shadow" />
                                <div className="mt-6">
                                    <span className="inline-block rounded border border-purple-200 bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-500 dark:border-purple-500/20 dark:bg-purple-500/20">
                                        Email Apps
                                    </span>
                                    <h6 className="mt-3 mb-2 truncate text-lg">
                                        <a href="#!">Exciting New Features Await You</a>
                                    </h6>
                                    <p className="dark:text-zink-200 text-16 mb-3 text-slate-500">
                                        A chat UI, or user interface, is one of the first things users see when using a web or mobile application to
                                        communicate.
                                    </p>
                                    <a href="#!" className="text-custom-500 text-16">
                                        Read More{' '}
                                        <i data-lucide="move-right" className="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4">
                        <div className="card dark:bg-zink-600 transition-all duration-300 ease-linear hover:-translate-y-2 xl:-mt-36">
                            <div className="p-6">
                                <img src="./assets/images/order-overview.jpg" alt="" className="rounded-md shadow" />
                                <div className="mt-6">
                                    <span className="inline-block rounded border border-red-200 bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-500 dark:border-red-500/20 dark:bg-red-500/20">
                                        HR Management
                                    </span>
                                    <h6 className="mt-3 mb-2 truncate text-lg">
                                        <a href="#!">Unleash Your Creativity with Our Latest Tools</a>
                                    </h6>
                                    <p className="dark:text-zink-200 text-16 mb-3 text-slate-500">
                                        A chat UI, or user interface, is one of the first things users see when using a web or mobile application to
                                        communicate.
                                    </p>
                                    <a href="#!" className="text-custom-500 text-16">
                                        Read More{' '}
                                        <i data-lucide="move-right" className="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dark:bg-zink-700 mt-20 rounded-md bg-slate-900 p-10">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                        <div className="text-center">
                            <h3 className="dark:text-zink-50 mb-2 text-slate-50">
                                <span className="counter-value" data-target="4">
                                    0
                                </span>{' '}
                                +
                            </h3>
                            <p className="text-16 dark:text-zink-200 text-slate-400">Multiple Layouts</p>
                        </div>
                        <div className="text-center">
                            <h3 className="dark:text-zink-50 mb-2 text-slate-50">
                                <span className="counter-value" data-target="12">
                                    0
                                </span>{' '}
                                +
                            </h3>
                            <p className="text-16 dark:text-zink-200 text-slate-400">Multi Languages</p>
                        </div>
                        <div className="text-center">
                            <h3 className="dark:text-zink-50 mb-2 text-slate-50">
                                <span className="counter-value" data-target="7">
                                    0
                                </span>{' '}
                                +
                            </h3>
                            <p className="text-16 dark:text-zink-200 text-slate-400">Apps & Dashboard</p>
                        </div>
                        <div className="text-center">
                            <h3 className="dark:text-zink-50 mb-2 text-slate-50">
                                <span className="counter-value" data-target="4">
                                    0
                                </span>{' '}
                                +
                            </h3>
                            <p className="text-16 dark:text-zink-200 text-slate-400">Multiple Modes</p>
                        </div>
                        <div className="text-center">
                            <h3 className="dark:text-zink-50 mb-2 text-slate-50">
                                <span className="counter-value" data-target="36500">
                                    0
                                </span>{' '}
                                +
                            </h3>
                            <p className="text-16 dark:text-zink-200 text-slate-400">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features2Section;
