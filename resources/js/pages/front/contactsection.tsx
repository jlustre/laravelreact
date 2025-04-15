import StartButton from './startbutton';

const ContactSection = () => {
    return (
        <section className="bg-custom-600 dark:bg-custom-800 relative py-20" id="contact">
            <div className="border-t-custom-500 border-l-custom-500 absolute -bottom-[250px] z-10 hidden size-[500px] rotate-45 rounded-full border border-dashed border-r-slate-700 border-b-slate-700 lg:block ltr:right-40 rtl:left-40"></div>
            <div className="container mx-auto px-4 2xl:max-w-[87.5rem]">
                <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12">
                    <div className="lg:col-span-9">
                        <h1 className="text-custom-50 mb-4 leading-normal capitalize">Ready to get started with Wealth Legacy Alliance</h1>
                        <p className="text-custom-200 text-lg">Tell us which describes you, and we'll get in touch with next steps.</p>
                    </div>
                    <div className="lg:col-span-3 ltr:lg:text-right rtl:lg:text-left">
                        <StartButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
