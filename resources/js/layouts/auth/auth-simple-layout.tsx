import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-start gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col justify-start gap-8 pt-4">
                    <div className="flex flex-col items-center gap-4">
                        <div className="mt-16 text-center">
                            <h4 className="text-custom-500 dark:text-custom-500 mb-0">{title} !</h4>
                            <p className="dark:text-zink-200 text-slate-500">{description}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
