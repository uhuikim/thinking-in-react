import React from 'react';
type TextFieldProps = {
    placeholder: string;
    filterText: string;
    setFilterText: (value: string) => void,
}

const TextField = ({ placeholder, filterText, setFilterText }: TextFieldProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value)
    }
    return (
        <div>
            <input type='text' placeholder={placeholder} value={filterText} onChange={handleChange} />
        </div>
    );
};

export default TextField;