import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/app/input-error';
import TextLink from '@/components/app/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

import AppToolTip from '../common/apptooltip';
import Navbar from '../front/navbar';

type RegisterForm = {
    name: string;
    username: string;
    sponsor: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm> & { global?: string }>({
        name: '',
        username: '',
        sponsor: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    let ndx = 1;

    return (
        <AuthLayout title="Create An Account" description="Enter your details below to create your WLA account">
            <Head title="Register" />
            <Navbar />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            autoFocus
                            tabIndex={ndx++}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Full name"
                        />
                        <InputError message={errors.name} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="username">
                            Username
                            <AppToolTip
                                content="Username must be lowercase, unique and can only contain letters, numbers, and underscores. It should
                                                be between 3 and 30 characters long."
                            />
                        </Label>
                        <Input
                            id="username"
                            name="username"
                            type="text"
                            // required
                            autoFocus
                            tabIndex={ndx++}
                            autoComplete="username"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            disabled={processing}
                            placeholder="Username"
                        />
                        <InputError message={errors.username} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="sponsor">
                            Sponsor
                            <AppToolTip
                                content="The Sponsor field is the username of someone who is already an active member of WLA. If you don't have a sponsor, please
                        contact us at info@wealthlegacyalliance.com"
                            />
                        </Label>
                        <Input
                            id="sponsor"
                            name="sponsor"
                            type="text"
                            autoFocus
                            tabIndex={ndx++}
                            autoComplete="sponsor"
                            value={data.sponsor}
                            onChange={(e) => setData('sponsor', e.target.value)}
                            disabled={processing}
                            placeholder="Sponsor"
                        />
                        <InputError message={errors.sponsor} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            // required
                            tabIndex={ndx++}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="email@example.com"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">
                            Password
                            <AppToolTip content="Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character." />
                        </Label>

                        <Input
                            id="password"
                            name="password"
                            type="password"
                            // required
                            tabIndex={ndx++}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Confirm Password</Label>
                        <Input
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            // required
                            tabIndex={ndx++}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Confirm password"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>
                    <div className="text-muted-foreground text-center text-xs">
                        By signing up, you agree to our{' '}
                        <TextLink href={route('terms')} className="text-custom-500 hover:text-custom-800" tabIndex={ndx++}>
                            Terms of Service
                        </TextLink>{' '}
                        and{' '}
                        <TextLink href={route('privacy')} className="text-custom-500 hover:text-custom-800" tabIndex={ndx++}>
                            Privacy Policy
                        </TextLink>
                    </div>
                    <Button
                        type="submit"
                        className="btn w-full border-green-500 bg-green-500 text-white hover:cursor-pointer hover:border-green-600 hover:bg-green-600 hover:text-white focus:border-green-600 focus:bg-green-600 focus:text-white focus:ring focus:ring-green-100 active:border-green-600 active:bg-green-600 active:text-white active:ring active:ring-green-100 dark:ring-green-400/20"
                        tabIndex={ndx++}
                        disabled={processing}
                    >
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create Account
                    </Button>
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    Already have an account?{' '}
                    <TextLink href={route('login')} className="text-custom-500 hover:text-custom-800" tabIndex={ndx++}>
                        Log in
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
