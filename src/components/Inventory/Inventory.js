import React from 'react';

const Inventory = () => {
    const handleProduct=()=>{
        const products={}
        fetch('https://afternoon-bastion-96687.herokuapp.com/addProduct',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(products)
        })
    }
    return (
        <div>
         <form action="">
             <p><span>Name:<input type="text"/></span></p>
             <p><span>Price:<input type="text"/></span></p>
             <p><span>Quantity:<input type="text"/></span></p>
             <p><span>Upload Image:<input type="file"/></span></p>
             <button onClick={handleProduct}>add products</button>
         </form>
        </div>
    );
};

export default Inventory;