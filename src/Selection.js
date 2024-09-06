import React, { useState } from 'react';
import Generate_op from './generate_op';

function Selection() {
    const [selectedState, setSelectedState] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmission = () => {
        setSubmitted(true);
    };

    return (
        <div>
            <select 
                id="state" 
                className="selection"
                onChange={(e) => setSelectedState(e.target.value)}
            >
                <option value="">Choose</option>
                <option value="Telangana">Telangana</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Maharashtra">Maharashtra</option>
            </select>
            <button type="button" onClick={handleSubmission}>Search</button>

            {submitted && selectedState && <Generate_op state={selectedState} />}
        </div>
    );
}

export default Selection;
