import React, { Fragment, useState } from "react";
import Form from "./form/form";
import Card from "./card/card";
import Category from "./category/category";




const App = () => {
  const [list, setList] = useState([])
  const [filters, setFilters] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const addNewObj = (formObj) => {
    setList(list => [...list, formObj])
    if (!categoryList.includes(formObj.productCategory)) {
      setCategoryList(categoryList => [...categoryList, formObj.productCategory])
    }

  }

  const filtered = (value) => {
    let filteredList = list.filter(listItem => listItem.productCategory === value)
    setFilters(filteredList)
  }
  return (

    <div>

      <Form setFilters={setFilters} list={list} addNewObj={addNewObj} ></Form>
      <Fragment>
        {list.length >= 1 && <button onClick={() => setFilters(list)}>All</button>}
        <Category filtered={filtered} size={list.length} objectCategory={categoryList}></Category>

        <div id="cardsDiv">
        {filters.map((fridge, index) => {
          return (
            
            <div id="cardDiv"  key={index}>
              <Card 
                objectCategory={fridge.productCategory}
                objectName={fridge.productName}
                objectNumber={fridge.productAmount}
                objectDate={fridge.productDate}
              />
            </div>
            
          )

        })}
</div>

      </Fragment>

    </div>

  )
}

export default App