import { Product } from "../types/Product";
import selectProducts from "../utils/selectProducts";
import ProductCategoryRow from "./CategoryRow";
import ProductRow from "./ProductRow";

type ProductsInCategoryProps = {
    category: string;
    products: Product[]
}


const ProductsInCategory = ({ category, products }: ProductsInCategoryProps) => {
    const productsInCategory = selectProducts(products, category)

    return (
        <>
            <ProductCategoryRow category={category} />
            {productsInCategory.map((product) => (
                <ProductRow key={product.name} product={product} />
            ))}
        </>
    );
};

export default ProductsInCategory;