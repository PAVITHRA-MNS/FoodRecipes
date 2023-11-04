import React from "react";
import "./Recipe.css";
import Container from '@mui/material/Container';



function Recipe({image,label,ingredients,url,id}){
    return (
        <div id={id} className="recipe">
        <Container fixed>
        <center>
        <table className="tables">
          <tbody>
        <tr>
          <td> <img src={image} alt={label}/> </td>
          <td>
            <h2 className="heading3">{label}</h2>
            <div className="inglist">
            <h4 style={{color : "red"}}>Ingredients</h4>
            <ul className="ing">
            {ingredients.map((singleing,index) => (
              <li key={index}>{singleing}</li>
             ))}
            </ul>
            </div>
            <a
              href={url}><button
                type="button" name="button" className="btn">VIEW RECIPE</button> </a>
          </td>
        </tr>
        </tbody>
      </table>
      </center>
      </Container>
        </div>
    );

}

export default Recipe;