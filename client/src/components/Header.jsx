import React from "react";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import "./Header.css";

function Header( ) {
    return (
     <div className="header">
        <h2 className="head"><FoodBankIcon /> DelightfulFood Recipes</h2>
     </div>
    );
}

export default Header;