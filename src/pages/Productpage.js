import "./Productpage.css"

const Productpage = (props) => {
    console.log(props)
    const toBeRendered = props.collection.map(item => {
        return (
            <li key={item.name} className="productpage__listItem">
                <img src={item.image} alt={item.alt} />
                <p>{item.name}</p>
                <p>{item.description}</p>
                <button>Add to cart</button>
            </li>)
    })
    return (
        <article className="productpage">
            <ul className="productpage__list">
                {toBeRendered}
            </ul>
            
        </article>
    )
}

export default Productpage;