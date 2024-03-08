import { useState, useEffect } from "react"
import CategoryCard from "../../components/CategoryCard"
import { getCategories } from "../../api/Categories/categories"
import { getProducts } from "../../api/Products/products"

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await getCategories()
            setCategories(response.result)
        }

        fetchCategories()
    }, [])

    return(
        <div className="flex md:w-full justify-center md:p-12">
            <div className="flex justify-center flex-wrap items-center p-2 m-4 gap-4 md:flex-row md:w-5/6">
                {categories.map((category) => (
                    <CategoryCard
                        categoryName={category.name}
                        categoryImage={category.image}
                        categoryId={category.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Categories