export default function Heading({ title, description }: { title: string; description?: string }) {
    return (
        <div className="mt-10 mb-0">
            <h2 className="mt-10 text-xl font-semibold tracking-tight">{title}</h2>
            {description && <p className="text-muted-foreground -mt-2 text-sm">{description}</p>}
        </div>
    );
}
