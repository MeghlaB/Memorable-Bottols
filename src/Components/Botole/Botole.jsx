import './Botole.css'

export default function Botole({bottol,handelBtn}) {
    // console.log(bottol)
   
    const {name,img,price} =bottol;
  return (
    <div className="botole">
      <h3>Name: {name}</h3>
      <img src={img} alt="" />
      <h4>Price : ${price}</h4>
      <button onClick={()=>handelBtn(bottol)}>Purchase</button>
      
    </div>
  )
}
