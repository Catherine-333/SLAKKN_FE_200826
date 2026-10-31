import React from 'react'

const ProductCard = ({catherine1}) => {

  return (
    
  <>
     <div>
        <h1>This is product Price</h1>
    {catherine1.map((e,i)=>(
        
        <div key={i}>
          <p>{e.price}</p>
        </div>
        
    ))}
   </div>
   
  </>
  )
}

export default ProductCard



