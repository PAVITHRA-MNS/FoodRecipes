import React, { useState } from "react";

function Foodinput({inputHandle}){

    const [food,setFood] = useState("");

    

    return(

        <div>
            <input type="text" placeholder="Enter a recipe name" value={food} onChange={event => setFood(event.target.value)} />
            <button onClick={()=>{
                inputHandle(food);
            }}>Submit</button>
        </div>

    );
}
export default Foodinput;