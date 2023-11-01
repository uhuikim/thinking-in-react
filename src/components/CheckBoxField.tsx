import React, { useRef } from 'react';

type CheckBoxFieldProps = {
    label: string,
    inStockOnly: boolean,
    setInStockOnly: (value: boolean) => void,
}

const CheckBoxField = ({ label, inStockOnly, setInStockOnly }: CheckBoxFieldProps) => {
    const id = useRef(`checkbox-${label}`.replace(" ", "-").toLowerCase());

    const handleChange = () => {
        setInStockOnly(!inStockOnly)
    }

    return (
        <div>
            <input
                type='checkbox'
                id={id.current}
                checked={inStockOnly}
                onChange={handleChange}
            />
            <label htmlFor={id.current}>
                {label}
            </label>
        </div>
    );
};

export default CheckBoxField;