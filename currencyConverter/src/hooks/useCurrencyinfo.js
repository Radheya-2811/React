import {useEffect,useState} from "react"

function useCurrencyinfo(currency){
    let apiUrl=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`

    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(apiUrl)
        .then((response)=>response.json())
        .then((response)=>{
            setData(response)
            //console.log("Response Data:",response);
        })
        .catch((e)=>{
            console.error("Error fetching Data : ",e);
        })
        
    },[currency])
    //console.log("Current data",data);
    return data;
}

export default useCurrencyinfo;