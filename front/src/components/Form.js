import React from 'react';



const Form = () => {
    return(
        <div>
                <form className="edit-form">


                        <label htmlFor="">Image</label>
                        <input type="text"
                               />


                        <label htmlFor="">Name</label>
                    <input type="text"/>



                        <label htmlFor="">Description</label>
                        <textarea />

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