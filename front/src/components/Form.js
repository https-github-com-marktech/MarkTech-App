import React from 'react';
import 'reactjs-popup/dist/index.css';
import {NavBtn} from "./Header/NavbarElements";

const Form = () => {
    return(
        <div>
                <form className="edit-form">


                        <label htmlFor="">Image</label>
                        <input type="text"
                               />


                        <label htmlFor="">Name</label>
                        <textarea />



                        <label htmlFor="">Description</label>
                        <input type="text"/>

                        <label htmlFor="">Features
                        </label>
                        <input type="text"/>


                        <label htmlFor="">Price</label>
                        <input type="text"/>

                        <label htmlFor="">SolicitudComprador</label>
                        <input type="text"
                        />


                        <button type="submit" className="btn-edit">Save</button>

                </form>
                    </div>


    )
};


export default Form;