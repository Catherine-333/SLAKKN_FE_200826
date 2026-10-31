

const ProductList = ({Catherine}) => {
   
  return (
   <>
     
   <div>
    <h1>This is product Name</h1>
    {Catherine.map((e,i)=>(
        
        <div key={i}>
            <p>{e.name}</p>
        </div>
        
    ))}
   </div>
   

   </>
  )
}

export default ProductList
