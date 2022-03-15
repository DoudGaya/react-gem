import Product from "./chemcider/product"
import catalog from './chemcider/products'




function MainContents() {

  let products = catalog.map( (item) => {

    return <Product 
    name={ item.name}
    image={item.image}
    volume={item.volume}
    price={item.price}
    grade={item.grade}
     ></Product>

  })
  
    return (
      <div className=" w-full flex bg-gray-100  justify-center my-6 ">
      <div className=" grid grid-cols-3 w-1/2  gap-3 px-6 py-6">
       {products}
      </div>
      
      </div>
    )
  }

  
  export default MainContents