import React, { useState } from "react"
const Form = (props) => {
    const [formObj, setFormObj] = useState({
        productName: "",
        productCategory: "",
        productAmount: 0,
        productDate: ''
    })
    const submitForm = (e) => {
        e.preventDefault();
        props.addNewObj(formObj);
        props.setFilters(props.list)
    }

    return (
        <div id="formDiv">
            <form onSubmit={submitForm} >
                <input type="text" placeholder="Product Name" onChange={(e) => setFormObj({ ...formObj, productName: e.target.value })}></input>
                <input type="number" placeholder="productAmount" onChange={(e) => setFormObj({ ...formObj, productAmount: e.target.value })}></input>
                <input type="date" placeholder="productDate" onChange={(e) => setFormObj({ ...formObj, productDate: e.target.value })}></input>
                <input type="text" placeholder="productCategory" onChange={(e) => setFormObj({ ...formObj, productCategory: e.target.value })}></input>
                <button type="submit" > submits</button>
            </form>
        </div>
    )
}
export default Form