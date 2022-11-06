
import React from "react"
class Category extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            this.props.objectCategory.map((fridge, index) => {
                return (
                    <div key={index}>
                        <button onClick={() => this.props.filtered(fridge)}>{fridge}</button>
                    </div>

                )
            }))
    }
}

export default Category
