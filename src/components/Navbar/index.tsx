
export const Navbar = ({ list }: {
    list: string[]
}) => {
    return (
        <nav className="hidden lg:flex p-4 justify-center space-x-10 bg-slate-700 drop-shadow-md">
           { list.map((item) => <a key={item} className='text-lg font-semibold'> { item } </a> )}
        </nav>
    );
}