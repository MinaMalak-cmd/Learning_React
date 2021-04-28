import { useState,useEffect } from "react"
const useFetch =(url,error) =>{
    const [data,setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(null);
    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url,{ signal :abortCont.signal})
            .then((res) =>{
                if(!res.ok){
                    throw Error(error)
                }
                return res.json();
            })
            .then((data) =>{
              setData(data);
              setIsLoading(false);  
              setError(null);
            })
            .catch((err)=>{
                if(err==="AbortError"){
                    console.log("error here",err.message)
                }
                else{
                    setError(err.message);
                    setData(null);
                    setIsLoading(false);
                }
            })
        },1000)
        return () => abortCont.abort();
    },[url])
    return {data,isLoading,isError};
}
export default useFetch;