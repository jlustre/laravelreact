const PricingSection = () => {
    return (
        <section className="relative pb-32" id="pricing">
            <div className="container mx-auto px-4 2xl:max-w-[87.5rem]">
                <div className="mx-auto text-center xl:max-w-3xl">
                    <h1 className="mb-4 leading-normal capitalize">Tailored Website Design Package</h1>
                    <p className="dark:text-zink-200 text-lg text-slate-500">
                        A good web design package will include designing a logo, ingratiation with local SEO, linking a site to a social media
                        presence, and more.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
                    <div className="text-15 card !shadow-lg">
                        <div className="card-body">
                            <h5 className="mb-2">
                                <i data-lucide="goal" className="inline-block size-5 text-green-500 ltr:mr-1 rtl:ml-1"></i>{' '}
                                <span className="align-middle">Lite</span>
                            </h5>
                            <p className="dark:text-zink-200 mb-4 text-slate-500">Perfect plan for Lite</p>

                            <h1 className="mb-4 font-normal">
                                <span className="dark:text-zink-200 text-slate-400">$</span>9.99
                                <small className="text-15 dark:text-zink-200 text-slate-500">/Monthly</small>
                            </h1>
                            <button
                                type="button"
                                className="text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20 w-full border-dashed bg-white"
                            >
                                Purchase Now
                            </button>
                            <ul className="mt-5 flex flex-col gap-3">
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>3</b> Projects
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>299</b> Customers
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>Scalable Bandwidth</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>0</b> No Team Account
                                    </span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>In app messaging</span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>
                                        <b>5</b> FTP Login
                                    </span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>Detailed Analytics</span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>Custom Domain</span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>Smart Workflow</span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>IQ test</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-15 card !shadow-lg">
                        <div className="card-body">
                            <h5 className="mb-2">
                                <i data-lucide="graduation-cap" className="inlinesize text-purple-500 ltr:mr-1 rtl:ml-1"></i>{' '}
                                <span className="align-middle">Professional</span>
                            </h5>
                            <p className="dark:text-zink-200 mb-4 text-slate-500">For users who want to do more.</p>

                            <h1 className="mb-4 font-normal">
                                <span className="dark:text-zink-200 text-slate-400">$</span>29.99
                                <small className="text-15 dark:text-zink-200 text-slate-500">/Monthly</small>
                            </h1>
                            <button
                                type="button"
                                className="text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20 w-full border-dashed bg-white"
                            >
                                Purchase Now
                            </button>
                            <ul className="mt-5 flex flex-col gap-3">
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>3</b> Projects
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>299</b> Customers
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>Scalable Bandwidth</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>3</b> No Team Account
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>In app messaging</span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>
                                        <b>5</b> FTP Login
                                    </span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>Detailed Analytics</span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>Custom Domain</span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>Smart Workflow</span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>IQ test</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card text-15 relative overflow-hidden !shadow-lg">
                        <div className="card-body">
                            <div className="absolute top-0 size-16 ltr:right-0 rtl:left-0">
                                <div className="absolute top-6 w-[170px] transform bg-sky-500 py-1 text-center font-medium text-white ltr:-right-12 ltr:rotate-45 rtl:-left-12 rtl:-rotate-45">
                                    25% Sale
                                </div>
                            </div>
                            <h5 className="mb-2">
                                <i data-lucide="crown" className="inlinesize text-sky-500 ltr:mr-1 rtl:ml-1"></i>{' '}
                                <span className="align-middle">Enterprise</span>
                            </h5>
                            <p className="dark:text-zink-200 mb-4 text-slate-500">Run your company on your teams</p>

                            <h1 className="mb-4 font-normal">
                                <span className="dark:text-zink-200 text-slate-400">$</span>39.99
                                <small className="text-15 dark:text-zink-200 text-slate-500">/Monthly</small>
                            </h1>
                            <button
                                type="button"
                                className="text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20 w-full border-dashed bg-white"
                            >
                                Purchase Now
                            </button>
                            <ul className="mt-5 flex flex-col gap-3">
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>3</b> Projects
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>299</b> Customers
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>Scalable Bandwidth</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>3</b> No Team Account
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>In app messaging</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>5</b> FTP Login
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>Detailed Analytics</span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>Custom Domain</span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>Smart Workflow</span>
                                </li>
                                <li className="dark:text-zink-200 flex items-center gap-2 text-slate-500 line-through">
                                    <i data-lucide="x" className="inline-block size-4 fill-green-100 text-red-500"></i>
                                    <span>IQ test</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-15 card !shadow-lg">
                        <div className="card-body">
                            <h5 className="mb-2">
                                <i data-lucide="luggage" className="inlinesize text-orange-500 ltr:mr-1 rtl:ml-1"></i>{' '}
                                <span className="align-middle">Unlimited</span>
                            </h5>
                            <p className="dark:text-zink-200 mb-4 text-slate-500">Your entire team in one place</p>

                            <h1 className="mb-4 font-normal">
                                <span className="dark:text-zink-200 text-slate-400">$</span>49.99
                                <small className="text-15 dark:text-zink-200 text-slate-500">/Monthly</small>
                            </h1>
                            <button
                                type="button"
                                className="text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20 w-full border-dashed bg-white"
                            >
                                Purchase Now
                            </button>
                            <ul className="mt-5 flex flex-col gap-3">
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>3</b> Projects
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>299</b> Customers
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>Scalable Bandwidth</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>3</b> No Team Account
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>In app messaging</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>
                                        <b>5</b> FTP Login
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>Detailed Analytics</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>Custom Domain</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>Smart Workflow</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i
                                        data-lucide="check-check"
                                        className="inline-block size-4 fill-green-100 text-green-500 dark:fill-green-500/20"
                                    ></i>
                                    <span>IQ test</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
