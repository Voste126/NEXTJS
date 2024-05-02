export default function ProductDetails(
    //typescript syntax
    {params,}:{params: {productid: string}}
){
    
    return (
        <>
            <h1>Product Details{params.productid}</h1>
        </>
    )

}