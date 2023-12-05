function Product(props){
 console.log(props)
  return(
    <div className="card">
      <img src={props.image} alt="not found"/>
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  )
}
export default Product;