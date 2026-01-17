export default function PagesHero({ title, description }: { title: string, description: string }) {
    return <>
        <section className="bg-primary text-white py-16 pt-40 relative overflow-hidden">
            <img src="/logo.png" className='h-[220%] -top-20 right-0 aspect-square rounded-full absolute filter brightness-0 opacity-15 object-cover' alt="" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl text-slate-300">
                    {description}
                </p>
            </div>
        </section>
    </>
}