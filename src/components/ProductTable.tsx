import selectCategories from "../utils/selectCategories";
import ProductsInCategory from "./ProductsInCategory";

import { Product } from "../types/Product";

function ProductTable({ products }: { products: Product[] }) {

    const categories = selectCategories(products)

    return <table className='product-table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {categories.map((category) =>
                <ProductsInCategory
                    key={category}
                    category={category}
                    products={products} />
            )
            }
        </tbody>
    </table>
}


export default ProductTable