//* 2. Yol

const ProductCard = ({title,price,image}) => {

  return (
    <div className="card">
      <div className="price">
        <h3>{price}</h3>
      </div>
      <img src={image} alt="" />
      <div className="card_over">
        <h2>{title}</h2>
      </div>


    </div>
  )
}



//* 1. yol


// const ProductCard = ({ürün}) => {
//   console.log(ürün);
//   const {price, image,title} = ürün
//   return (
//     <div className="card">
//       <div className="price">
//         <h3>{price}</h3>
//       </div>
//       <img src={image} alt="" />
//       <div className="card_over">
//         <h2>{title}</h2>
//       </div>


//     </div>
//   )
// }

export default ProductCard