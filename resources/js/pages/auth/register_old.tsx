import { Head, useForm } from '@inertiajs/react';
import { HelpCircle, LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/app/input-error';
import TextLink from '@/components/app/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

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
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <Head title="Register" />
            {/* {errors && errors.global && (
                <div className="mb-1 rounded-lg border border-red-500 bg-red-100 p-4 text-red-700">
                    {Object.keys(errors).map((key) => (
                        <InputError className="mb-1 last:mb-0" key={key} message={errors[key as keyof RegisterForm]} />
                    ))}
                </div>
            )} */}
            <TooltipProvider>
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
                            <Label htmlFor="username">Username</Label>
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
                            <Label htmlFor="sponsor">Sponsor</Label>
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
                                <span className="ml-1">
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <HelpCircle className="text-muted-foreground h-4 w-4 cursor-pointer" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-xs text-blue-500">
                                                Password must be at least 8 characters long, include an uppercase letter, a number, and a special
                                                character.
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </span>
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
                            <TextLink href={route('terms')} tabIndex={ndx++}>
                                Terms of Service
                            </TextLink>{' '}
                            and{' '}
                            <TextLink href={route('privacy')} tabIndex={ndx++}>
                                Privacy Policy
                            </TextLink>
                        </div>
                        <Button type="submit" className="mt-0 w-full hover:cursor-pointer" tabIndex={ndx++} disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Create account
                        </Button>
                    </div>

                    <div className="text-muted-foreground text-center text-sm">
                        Already have an account?{' '}
                        <TextLink href={route('login')} tabIndex={ndx++}>
                            Log in
                        </TextLink>
                    </div>
                </form>
            </TooltipProvider>
        </AuthLayout>
    );
}
