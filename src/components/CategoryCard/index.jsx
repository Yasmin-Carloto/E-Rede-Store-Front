import { Link } from "react-router-dom"

const CategoryCard = ({categoryName, categoryId, categoryImage}) => {
    return (
        <Link to={`/products/categories/${categoryName}`}>
            <div className="flex p-2 justify-between text-center items-center bg-slate-100 w-48 rounded-lg shadow-[0_5px_8px_2px_rgba(0,0,0,0.3)]">
                <img src={`../../../public/media/categories/${categoryImage}`} alt={`Imagem da categoria ${categoryName}`} className="w-20 rounded" />
                <h2 className="m-2 text-center font-semibold">{categoryName}</h2>
            </div>
        </Link>
    )
}

export default CategoryCard