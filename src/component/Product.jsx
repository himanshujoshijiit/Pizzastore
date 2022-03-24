import React,{useState,useEffect} from "react";
import { useParams } from "react-router";

const Product =() =>{
    const {id} = useParams();
    const [pro,setProduct] = useState([]);
    const [loading,setLoading] = useState(false);
    
   useEffect(()=>{
       const getProduct = async () =>{
           setLoading(true);
           const res = await fetch(`https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68/${id}`);
            
               setProduct( res.json());
           setLoading(false);
            
           
       }
      getProduct();
    },[]);

    const Loading  = () =>{
        return (
            <>
             Loading....
            </>
        )
    }

    const ShowProduct =() =>{
        return(
            <>
            <div> 
             <img src = {pro.img_url}  className="card-img-top" alt={pro.name}
            height="400px" width="400px"/>
               {pro.name}
            </div>
             
             <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Pizza_on_stone.jpg"  height="100px" width="100px"/>
            </>
        )
    }

      return(
          <div>

         
          <div className="container">
              <div className="row">
                {loading? <Loading/>:<ShowProduct/>}
              </div>
             
          </div> 
          </div>
      );

};

export default Product;