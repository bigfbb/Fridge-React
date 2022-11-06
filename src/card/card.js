const Card = (props) => {
    return (
        <div id="cardDiv">
            <h1 >Category: {props.objectCategory}</h1>
            <h2 >Name:{props.objectName}</h2>
            <h2 >Amount:{props.objectNumber}</h2>
            <h2 >{props.objectDate}</h2>
        </div>
    )
}

export default Card