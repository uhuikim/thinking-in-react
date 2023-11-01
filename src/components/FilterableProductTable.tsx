import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import { Product } from '../types/Product';
import { useState } from 'react';
import filterProducts from '../utils/filterProducts';

type FilterableProductTableProps = {
    products: Product[]
}

const FilterableProductTable = ({ products }: FilterableProductTableProps) => {
    const [filterText, setFilterText] = useState<string>('');
    const [inStockOnly, setInStockOnly] = useState<boolean>(false);

    // 조건이 여러개가 있다는 것을 보여주기 위해 object를 사용
    const filteredProducts = filterProducts(products, { filterText, inStockOnly })

    return (
        <div className='filterable-product-table'>
            <SearchBar
                inStockOnly={inStockOnly}
                setInStockOnly={setInStockOnly}
                filterText={filterText}
                setFilterText={setFilterText}
            />
            <ProductTable products={filteredProducts} />
        </div>
    );
};

export default FilterableProductTable;