import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import AboutSection from './front/aboutsection';
import ContactSection from './front/contactsection';
import FooterSection from './front/footersection';
import Gotopbtn from './front/gotopbtn';
import HeroSection from './front/herosection';
import Navbar from './front/navbar';
import Scripts from './front/scripts';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Navbar />
            <HeroSection />
            {/* <FeaturesSection /> */}
            {/* <Features2Section /> */}
            <AboutSection />
            {/* <PricingSection /> */}
            <ContactSection />
            <FooterSection />
            <Gotopbtn />
            <Scripts />
        </>
    );
}
