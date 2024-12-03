import React, {useState} from "react"

function ColorPicker(){

    const [color, setColor] =useState("#FFFFFF");

function handleColorChange(event){
    setColor(event.target.value);
}

return(
    <div className="container">
        <h1 className="h1">Color Picker App</h1>
        <div className="display" style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
    </div>
);
}


export default ColorPicker