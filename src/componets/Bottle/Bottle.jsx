import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    const {id, img, name,price}= bottle
    return (
        <div className="bottle">
            <h3>bottle: {name}</h3>
            <p>id:{id}</p>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purches</button>
            
        </div>
    );
};

export default Bottle;