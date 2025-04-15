const FeaturesSection = () => {
    return (
        <section className="dark:bg-zink-700 relative bg-slate-900 py-32" id="features">
            <div className="container mx-auto px-4 2xl:max-w-[87.5rem]">
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                    <div className="order-2 xl:order-1 xl:col-span-5">
                        <div className="relative z-10 grid grid-cols-3 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-12">
                                <img src="./assets/images/widgets.jpg" alt="" className="rounded-xl shadow-xl ltr:ml-auto rtl:mr-auto" />
                            </div>
                            <div className="xl:col-span-6">
                                <img src="./assets/images/widgets-3.jpg" alt="" className="rounded-xl shadow-xl xl:mt-5 ltr:ml-auto rtl:mr-auto" />
                            </div>
                            <div className="xl:col-span-6">
                                <img src="./assets/images/widgets-2.jpg" alt="" className="rounded-xl shadow-xl xl:mt-5 ltr:ml-auto rtl:mr-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="relative z-20 order-1 xl:order-last xl:col-span-7 xl:-mt-72">
                        <img src="./assets/images/home.jpg" alt="" className="rounded-xl shadow-2xl" />
                    </div>
                </div>
                <div className="mt-24">
                    <h1 className="dark:text-zink-50 mb-16 leading-normal text-slate-100 capitalize">Build for anyone who works with Tailwick</h1>
                </div>
            </div>
            <div className="absolute bottom-48 hidden size-[500px] rotate-45 rounded-full border border-dashed border-t-slate-700 border-r-slate-700 border-b-slate-700 border-l-slate-700 md:block ltr:-left-80 rtl:-right-80"></div>
            <div className="absolute bottom-24 hidden size-[700px] rotate-45 rounded-full border border-dashed border-t-slate-700 border-r-slate-700 border-b-slate-700 border-l-slate-700 md:block ltr:-left-96 rtl:-right-96"></div>
        </section>
    );
};

export default FeaturesSection;
