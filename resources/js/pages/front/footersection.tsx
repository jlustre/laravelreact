const FooterSection = () => {
    return (
        <footer className="dark:bg-zink-700 relative bg-slate-800 pt-20 pb-12">
            <div className="container mx-auto px-4 2xl:max-w-[87.5rem]">
                {/* <FooterContent /> */}
                {/* <LanguageSelector /> */}

                <div className="dark:text-zink-200 text-16 mt-12 text-center text-slate-400">
                    <p>
                        <script>document.write(new Date().getFullYear())</script> © Wealth Legacy Alliance. Designed & Developed by{' '}
                        <a href="#!" className="dark:text-zink-100 text-slate-300 underline">
                            JCL
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
