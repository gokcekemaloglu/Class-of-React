import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  // console.log(products);
  return (
    <div className="urun-list">
      {products.map((ürün) => (
        <div>
          {/*//! Buradan spreadle açarak gönderip objenin propertylerini props objesine yerleştirme */}
          <ProductCard {...ürün}/>

          {/* üç nokta destruct içinde destruct yapılmasını engelliyor, tek seferde hallediyoruz */}

          {/*//! Best Practice Alt Componente Gönderme */}
          {/*//! Buradan açmadan gönderip alt componentte karşılayıp içini açma */}

          {/* <ProductCard ürün={ürün}/> */}

          {/* bütün diziyi bu sayfada bastırabilirdik, ancak best practise burada mapla dönüp başka sayfada bastrmak */}
          {/* <h3>{ürün.price}</h3>
          <img src={ürün.image} alt="" /> */}
        </div>
      ))}
    </div>
  );
};

export default Products;
