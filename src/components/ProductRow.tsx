import { Product } from '../types/Product';

type ProductRowProps = {
    product: Product
}

const ProductRow = ({ product }: ProductRowProps) => {
    return (
        <tr >
            <td>
                <span
                    style={{ color: product.stocked ? "#000" : "red" }}
                > {product.name}</span>
            </td>
            <td>{product.price}</td>
        </tr>
    );
};

export default ProductRow;