import StartButton from './startbutton';

const AboutSection = () => {
    return (
        <section className="relative py-2" id="about">
            <div className="container mx-auto px-4 2xl:max-w-[87.5rem]">
                <div className="mx-auto text-center xl:max-w-6xl">
                    <h1 className="mb-6 leading-normal capitalize">
                        <span className="z-50">How Wealth Legacy Alliance Works?</span>
                        <span className="relative mx-2 inline-block px-2 dark:before:bg-sky-500/20">
                            <span className="relative text-3xl text-sky-500">Building Diversified Wealth, Together</span>
                        </span>
                    </h1>
                    <p className="dark:text-zink-200 text-lg text-slate-500">
                        <span className="text-custom-500 font-extrabold">Wealth Legacy Alliance (WLA)</span> offers a unique and strategic approach to
                        building financial freedom and generational wealth by leveraging the power of multiple Multi-Level Marketing (MLM) companies
                        under a unified structure. Unlike traditional MLM participation where individuals operate independently within a single
                        company, WLA provides a collaborative ecosystem that amplifies earning potential and minimizes risk. Here's a detailed
                        breakdown of how our innovative business model works:
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-6">
                        <h1 className="mb-3 leading-normal capitalize">Strategic Partnerships with Multiple MLM Companies</h1>
                        <p className="dark:text-zink-200 mb-6 text-lg text-slate-500">
                            At the core of WLA is our commitment to carefully selecting and partnering with a diverse portfolio of reputable and
                            thriving MLM companies across various industries. This diversification is a key differentiator and provides several
                            advantages:
                        </p>
                        <ul className="mb-6 flex list-inside list-none flex-col gap-3 text-lg">
                            <li>
                                <h2 className="text-xl font-bold">Access to Diverse Product Lines and Markets:</h2>
                                <p>
                                    Our partnerships span various sectors, exposing our members to a wider range of products and customer bases. This
                                    allows individuals to tap into different market trends and cater to diverse consumer needs, potentially increasing
                                    their overall reach and sales opportunities.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold">Reduced reliance on a single income stream:</h2>
                                <p>
                                    By not being solely dependent on the success and stability of one MLM, our members are shielded from potential
                                    downturns or changes within a single company. If one partner faces challenges, the income streams from other
                                    partnerships provide a crucial safety net.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold">Enhanced earning potential through multiple compensation plans:</h2>
                                <p>
                                    We meticulously analyze the compensation plans of each partner MLM to identify the most lucrative strategies and
                                    structures for our members. This ensures that our unified approach maximizes earning potential across all
                                    participating companies.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold">Increased stability and resilience in the face of market fluctuations:</h2>
                                <p>
                                    By diversifying income streams across multiple reputable MLM companies in various sectors, members reduce their
                                    reliance on a single entity and mitigate the risks associated with individual company challenges or market
                                    downturns in specific industries. This multi-faceted approach acts as a buffer, smoothing out income fluctuations
                                    and allowing members to capitalize on diverse market cycles, adapt to changing landscapes, and ultimately build a
                                    more sustainable and secure financial future compared to the inherent volatility of participating in a single MLM.
                                </p>
                            </li>
                        </ul>
                        <p className="dark:text-zink-200 mb-6 text-lg text-slate-500">
                            By joining WLA, you gain access to a carefully curated selection of MLM companies, each with its own unique offerings and
                            compensation structures. This allows you to diversify your income streams and maximize your earning potential.
                        </p>
                        <StartButton />
                    </div>
                    <div className="col-span-12 hidden text-center lg:col-span-6 lg:block">
                        <img src="./assets/images/widgets-4.jpg" alt="" className="rounded-xl shadow-lg ltr:lg:ml-auto rtl:lg:mr-auto" />
                        <img
                            src="./assets/images/widgets-5.jpg"
                            alt=""
                            className="relative -mt-24 rounded-xl shadow-lg ltr:mr-24 ltr:ml-auto rtl:mr-auto rtl:ml-24"
                        />
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
                    <div className="col-span-12 hidden text-center lg:col-span-6 lg:block">
                        <img src="./assets/images/widgets-4.jpg" alt="" className="rounded-xl shadow-lg ltr:lg:ml-auto rtl:lg:mr-auto" />
                        <img
                            src="./assets/images/widgets-5.jpg"
                            alt=""
                            className="relative -mt-24 rounded-xl shadow-lg ltr:mr-24 ltr:ml-auto rtl:mr-auto rtl:ml-24"
                        />
                    </div>
                    <div className="lg:col-span-6">
                        <h1 className="mb-3 leading-normal capitalize">The Power of Single Recruitment, Multiple Benefits</h1>
                        <p className="dark:text-zink-200 mb-6 text-lg text-slate-500">
                            One of the most significant advantages of WLA is our streamlined recruitment process. Instead of requiring members to
                            build separate downlines for each individual MLM they wish to participate in, you recruit once into the Wealth Legacy
                            Alliance community.:
                        </p>
                        <ul className="mb-6 flex list-inside list-none flex-col gap-3 text-lg">
                            <li>
                                <h2 className="text-xl font-bold">Leveraging Your Network:</h2>
                                <p>
                                    When you bring a new member into WLA, they become part of your team across all the MLM companies that WLA is
                                    currently partnered with, and potentially future partnerships as well. This means your initial recruitment efforts
                                    have a compounding effect, generating benefits across multiple income streams simultaneously.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold">Maximizing Recruitment Impact:</h2>
                                <p>
                                    Your time and effort spent on recruiting are significantly amplified. Each new team member contributes to your
                                    growth and earning potential within multiple organizations, making your network more valuable and impactful.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold">Simplified Team Building:</h2>
                                <p>
                                    You focus on building one strong, unified team within the WLA framework, rather than fragmenting your efforts
                                    across numerous independent MLM structures. This fosters stronger team cohesion and shared goals.
                                </p>
                            </li>
                        </ul>
                        <StartButton />
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-6">
                        <h1 className="mb-3 leading-normal capitalize">Unified Strategies for Collective Success</h1>
                        <p className="dark:text-zink-200 mb-6 text-lg text-slate-500">
                            WLA develops and implements unified strategies tailored to the specific compensation plans of each partner MLM. This
                            ensures that all members are working towards maximizing their income in the most efficient and effective way.
                        </p>
                        <ul className="mb-6 flex list-inside list-none flex-col gap-3 text-lg">
                            <li>
                                <h2 className="text-xl font-bold">Expert Analysis and Optimization:</h2>
                                <p>
                                    Our team analyzes the intricacies of each MLM's compensation structure, identifying key drivers for success,
                                    optimal team structures, and effective sales and marketing approaches.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold">Standardized Training and Resources:</h2>
                                <p>
                                    We provide comprehensive training materials and resources that are aligned with these unified strategies for each
                                    partner MLM. This ensures that all members have access to the knowledge and tools they need to succeed in each
                                    venture.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold">Collaborative Implementation:</h2>
                                <p>
                                    By having a unified approach, the efforts of each member contribute to the collective success of the entire
                                    alliance. When everyone follows a proven strategy, individual efforts are amplified, leading to faster growth and
                                    higher earning potential for everyone involved.
                                </p>
                            </li>
                        </ul>

                        <StartButton />
                    </div>
                    <div className="col-span-12 hidden text-center lg:col-span-6 lg:block">
                        <img src="./assets/images/widgets-4.jpg" alt="" className="rounded-xl shadow-lg ltr:lg:ml-auto rtl:lg:mr-auto" />
                        <img
                            src="./assets/images/widgets-5.jpg"
                            alt=""
                            className="relative -mt-24 rounded-xl shadow-lg ltr:mr-24 ltr:ml-auto rtl:mr-auto rtl:ml-24"
                        />
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
                    <div className="col-span-12 hidden text-center lg:col-span-6 lg:block">
                        <img src="./assets/images/widgets-4.jpg" alt="" className="rounded-xl shadow-lg ltr:lg:ml-auto rtl:lg:mr-auto" />
                        <img
                            src="./assets/images/widgets-5.jpg"
                            alt=""
                            className="relative -mt-24 rounded-xl shadow-lg ltr:mr-24 ltr:ml-auto rtl:mr-auto rtl:ml-24"
                        />
                    </div>
                    <div className="lg:col-span-6">
                        <h1 className="mb-3 leading-normal capitalize">Maximizing Income Through Strategic Implementation</h1>
                        <p className="dark:text-zink-200 mb-6 text-lg text-slate-500">
                            Our primary objective is to empower each member to maximize their income. We achieve this through:
                        </p>
                        <ul className="mb-6 flex list-inside list-none flex-col gap-3 text-lg">
                            <li>
                                <h2 className="text-xl font-bold">Tailored Strategies for Each MLM:</h2>
                                <p>
                                    While the recruitment is unified, we understand that each MLM operates differently. We develop specific strategies
                                    for product promotion, team building, and commission qualification that are optimized for each individual partner
                                    company.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold">Collective Learning and Refinement:</h2>
                                <p>
                                    The WLA community fosters an environment of shared learning and continuous improvement. Successful strategies and
                                    best practices are shared among members, allowing everyone to benefit from collective experience and refine their
                                    approaches.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold">Actionable Training and Support:</h2>
                                <p>
                                    Our training sessions break down complex MLM strategies into simple, actionable steps. We provide clear guidance
                                    on what to do, how to approach the business model, and how to effectively leverage the WLA system to achieve
                                    financial goals.
                                </p>
                            </li>
                        </ul>

                        <StartButton />
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-6">
                        <h1 className="mb-3 leading-normal capitalize">Building a Strong and Empowered Community</h1>
                        <p className="dark:text-zink-200 mb-6 text-lg text-slate-500">
                            WLA is more than just a business model; it's a supportive and collaborative community where members work together towards
                            shared success.
                        </p>
                        <ul className="mb-6 flex list-inside list-none flex-col gap-3 text-lg">
                            <li>
                                <h2 className="text-xl font-bold">Collaboration Over Competition:</h2>
                                <p>
                                    We foster a culture where members share knowledge, strategies, and encouragement, recognizing that collective
                                    success benefits everyone.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold">Mutual Growth and Accountability:</h2>
                                <p>Members support and hold each other accountable for their goals, creating a positive and driven environment.</p>
                            </li>
                            <li>
                                <h2 className="text-xl font-bold">Shared Vision and Motivation:</h2>
                                <p>
                                    The shared goal of financial freedom and building a lasting legacy unites our community and motivates members to
                                    persevere and achieve their highest potential.
                                </p>
                            </li>
                        </ul>

                        <StartButton />
                    </div>
                    <div className="col-span-12 hidden text-center lg:col-span-6 lg:block">
                        <img src="./assets/images/widgets-4.jpg" alt="" className="rounded-xl shadow-lg ltr:lg:ml-auto rtl:lg:mr-auto" />
                        <img
                            src="./assets/images/widgets-5.jpg"
                            alt=""
                            className="relative -mt-24 rounded-xl shadow-lg ltr:mr-24 ltr:ml-auto rtl:mr-auto rtl:ml-24"
                        />
                    </div>
                </div>

                <div className="mx-auto mt-10 text-center xl:max-w-6xl">
                    <p className="dark:text-zink-200 mb-6 text-lg text-slate-500">
                        In essence, <span className="text-custom-500 font-bold">Wealth Legacy Alliance (WLA)</span> provides a synergistic approach to
                        MLM participation. By strategically partnering with multiple companies, unifying recruitment efforts, implementing optimized
                        strategies, and fostering a supportive community, we empower our members to build diversified, resilient income streams and
                        achieve lasting financial freedom in a more efficient and collaborative manner than traditional single-company MLM
                        participation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
