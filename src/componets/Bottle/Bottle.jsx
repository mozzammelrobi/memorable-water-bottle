import './Bottle.css'
const Bottle = ({bottle}) => {
    const {id, img, name,price}= bottle
    console.log(bottle)
    return (
        <div className="bottle">
            <h3>bottle: {name}</h3>
            <p>id:{id}</p>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            
        </div>
    );
};

export default Bottle;