export default function Container({children}) {
    return(
        <section className="w-full pt-5 h-auto calc min-h-[calc(100vh-112px)] flex justify-around">
            {children}
        </section>
    )
}