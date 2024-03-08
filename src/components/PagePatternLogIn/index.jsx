import { Outlet } from "react-router-dom"
import HeaderLogIn from "../HeaderLogIn"

const PagePatternLogIn = () => {
    return (
        <main className="md:flex md:justify-evenly">
            <HeaderLogIn/>

            <Outlet/>
        </main>
    )
}

export default PagePatternLogIn