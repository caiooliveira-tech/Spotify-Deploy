export default function ConteudoPrincipal({children}) {
    return(
        <div className="bg-gray-400 w-3/4 grid grid-cols-1 justify-items-start pl-7 pt-7">
        {children}
        </div>
    )
}