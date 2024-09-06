import './generate_op.js';

function Selection(){
    var selected_state;
    const handleSubmission=()=>{
        selected_state= document.getElementById("state").value;
        generate_op(selected_state);
    }
    return(
        <div>
             <select id="state" class="selection">
                <option value="Telangana">Telangana</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Maharashtra">Maharashtra</option>
                
            </select>
            <input type="submit" id = "submit" onClick={handleSubmission} />
            </div>
    );
}

export default Selection;