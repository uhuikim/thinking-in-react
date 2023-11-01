import CheckBoxField from "./CheckBoxField";

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <div>
                <input type='text' placeholder='search..' />
            </div>
            <CheckBoxField label="Only show products in stock" />
        </div>
    );
};

export default SearchBar;