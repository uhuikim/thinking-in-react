import CheckBoxField from "./CheckBoxField";
import TextField from "./TextField";

type SearchBarProps = {
    inStockOnly: boolean,
    setInStockOnly: (value: boolean) => void,
    filterText: string,
    setFilterText: (value: string) => void,
}

const SearchBar = ({ inStockOnly, setInStockOnly, filterText, setFilterText }: SearchBarProps) => {
    return (
        <div className='search-bar'>
            <TextField
                filterText={filterText}
                setFilterText={setFilterText}
                placeholder="Search..."
            />
            <CheckBoxField label="Only show products in stock" inStockOnly={inStockOnly} setInStockOnly={setInStockOnly} />
        </div>
    );
};

export default SearchBar;