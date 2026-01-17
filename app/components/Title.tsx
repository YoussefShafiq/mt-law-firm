export default function Title({ title, subtitle, light = true, text = 'center' }: { title: string, subtitle: string, light?: boolean, text?: string }) {
    return (
        <>
            <h2 className={`text-3xl font-bold text-${text} mb-2 text-primary ${light ? 'text-primary' : 'text-white'}`}>
                {title}
            </h2>
            <p className={`text-lg text-${text} ${light ? 'text-primary/80' : 'text-white/80'}`}>
                {subtitle}
            </p>
        </>
    )
}