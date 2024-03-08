import logo from "../../assets/e-redeLogo.png"

const HeaderLogIn = () => {
    return (
        <div className="flex justify-center p-6 bg-blue-900 md:flex-col md:gap-3 md:w-full md:order-last md:items-center">
            <h1 className="hidden md:flex md:text-[32px] text-white md:px-16 md:py-3">Sua nova experiência em compras online</h1>
            <img src={logo} alt="Logo do e-rede store" className="h-12 md:h-48 md:w-96"/>
        </div>
    )
}

export default HeaderLogIn