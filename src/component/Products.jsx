import React,{useState,useEffect} from "react";
import { NavLink } from 'react-router-dom';


const Products = () =>{
    const [data,setdata] = useState([])
    const [filter,setFilter] = useState(data);
    const [loading,setLoading] = useState(false);
    let componentMounted = true;

    useEffect(()=>{
        const getProducts = async () =>{
            setLoading(true);
            const response = await fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68");
            if(componentMounted){
                setdata(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);


                return () =>{
                    componentMounted = false
                }
            }
        }

        getProducts();
    },[])

    const Loading = () =>{
        return <>Loading...</>;
    };

    const ShowProducts =() =>{
        return(
            <>
            <div className="buttons d-flex justify-content-center mb-5">
                <button className="btn btn-outline-dark me-2">Price</button>
                <button className="btn btn-outline-dark me-2">rate</button>
                <button className="btn btn-outline-dark me-2">All</button>
                <button className="btn btn-outline-dark me-2">All</button>
                <button className="btn btn-outline-dark me-2">All</button>
                </div>
                {filter.map((product)=>{
                    return(
                        <>
                        <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center p-4" key={product.id} >
                            <img src={product.img_url} className="card-img-top" alt={product.name} height ="250px"/>
                            <div className="card-body">
                                <h5 className="card-title">{product.name.substring(0,12)}</h5>
                                <h7 className="card-title">{product.description.substring(0,120)}</h7>
                                <h7>Type-IsVeg::</h7><h7 className="card-title">{product.isVeg? "true":"false"} 
                                  </h7>
                                 
                                <p className="card-text">
                                    ${product.price}
                                    </p>
                                    <p className="card-text">
                                    ${product.rating}
                                    </p>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                    </div>
                                    </div>
                        </>
                    );
                })}
            </>
        );
    };
    return(
        <div>
            <div className="conntainer m5-5 py-5">
                <div className="row">
                    <div className="col-12 mob-5">
                        <h1 className="display-6 fw-bolder text-center">Latest pizza</h1>
                        </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading/>:<ShowProducts/>}</div>
        </div>
        </div>
    );
};

export default Products;