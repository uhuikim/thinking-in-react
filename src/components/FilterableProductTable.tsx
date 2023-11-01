import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import { Product } from '../types/Product';

type FilterableProductTableProps = {
    products: Product[]
}

const FilterableProductTable = ({ products }: FilterableProductTableProps) => {
    return (
        <div className='filterable-product-table'>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
};

export default FilterableProductTable;