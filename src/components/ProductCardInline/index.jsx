import DividerLine from "../DividerLine/DividerLine"

const ProductCardInline = ({image, title, category, price, quantity, hidden}) => {
    return(
        <div className="flex flex-col md:flex-row justify-between m-3 md:w-full">
            <div className="flex gap-2 items-center justify-center">
                <img className="w-20 h-20 rounded-lg" src={`"../../../public${image}`} alt={`Imagem do produto ${title}`} />

                <div className="flex flex-col flex-wrap">
                    <h2 className="font-semibold text-sm">{title}</h2>
                    <h4 className="text-[10px] font-semibold text-stone-500">{category}</h4>
                    <h3 className="font-semibold text-xs text-orange-500">R${price}</h3>
                    <h4 className="font-semibold text-xs text-stone-500">Qtd: {quantity}</h4>
                </div>
            </div>

            <div className="flex justify-between">
                <h2 className={`${hidden} font-normal text-stone-500 md:hidden`}>Status:</h2>
                <h2 className={`${hidden} font-semibold text-green-700`}>Finalizado</h2>
            </div>

            <DividerLine borderColor="border-stone-500"/>
        </div>
    )

}

export default ProductCardInline