import React, { useRef } from 'react';

const CheckBoxField = ({ label }: { label: string }) => {
    const id = useRef(`checkbox-${label}`.replace(" ", "-").toLowerCase());

    return (
        <div>
            <input type='checkbox' id={id.current} />
            <label htmlFor={id.current}>
                {label}
            </label>
        </div>
    );
};

export default CheckBoxField;