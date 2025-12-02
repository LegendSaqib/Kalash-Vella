import { Link } from "react-router-dom"
const Logo = () =>{
    return (
        <>
        <div className="w-[30px] md:w-[50px] lg:w-[70px] xl:w-[90px] 2xl:w-[110px] ">
            <Link to="./" onClick={() => setOpen(false)}><img src="/Vector.png" alt="" /></Link>
        </div>
        </>
    )
}

export default Logo