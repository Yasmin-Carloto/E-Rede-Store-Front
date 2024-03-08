import ProductsContainer from "../../components/ProductsContainer"
import Select from "../../components/Select"
import ChooseCard from "../../components/ChooseCard"
import { useState, useEffect } from "react"
import { getCategories } from "../../api/Categories/categories"
import { getProducts, getProductsByCategory } from "../../api/Products/products"
import { useNavigate, useParams } from "react-router-dom"

const Products = () => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([]) 
    const [selectedCategory, setSelectedCategory] = useState("camisetas")
    const { category } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCategories = async () => {
            if(category !== undefined){
                setSelectedCategory(category)
            }
            const response = await getCategories()
            setCategories(response.result)
        }

        fetchCategories()

        const fetchProducts = async () => {
            const response = await getProductsByCategory(selectedCategory)
            setProducts(response)
        }

        fetchProducts()
    })

    const handleCategorySelect = (categorySelected) => {
        setSelectedCategory(categorySelected)
        navigate(`/products/categories/${categorySelected}`)
    }

    return(
        <div className="flex flex-col md:flex-row md:items-start md:justify-center">
            <Select 
                options={categories}
                onCategorySelect={handleCategorySelect}
            />

            <ChooseCard
                options={categories}
                hidden={false}
                onCategorySelect={handleCategorySelect}
            />

            <ProductsContainer
                productsList={products}
            />
        </div>
    )
}

export default Products