// import React from 'react'
import "./NavCustom.css"
import logo from "../../assets/inshort_logo1.png"
import TemporaryDrawer from "../LeftDrawer/LeftDrawer"
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function NavCustom({ setCategory, category }) {
    return (
        <div className="nav__container">
            <div className='nav__icon'>
                <TemporaryDrawer setCategory={setCategory} category={category}/>
            </div>
            <img src={logo} alt="inshort logo" className="logo__img" />
        </div>
    )
}

NavCustom.prototype = {
    setCategory: PropTypes.func.isRequired
}

export default NavCustom