import { useEffect, useState } from "react"
import ProductsContainer from "../../components/ProductsContainer"
import Banner from "../../components/Banner"
import { getProducts } from "../../api/Products/products"
import { useSearchQuery } from "../../contexts/SearchContext"

const Home = () => {
    const [products, setProducts] = useState([]) 
    const { searchQuery } = useSearchQuery()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts()
            setProducts(response)
        }

        fetchProducts()
    }, [])

    const filteredProducts = searchQuery
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products

    return (
        <div className="flex flex-col">
            <section className="flex flex-col justify-center">
                <Banner/>
                <h1 className="text-xl font-semibold p-4 text-blue-900">Destaques</h1>
                {filteredProducts.length > 0 ? (
                    <ProductsContainer productsList={filteredProducts} />
                ) : (
                    <ProductsContainer productsList={products} />
                )}

            </section>

        </div>
    )
}

export default Home