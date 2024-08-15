import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Radheya-2811')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

    const data=useLoaderData();
    return (
        <div className='text-center m-4 bg-gray-600 text- p-4 text-3xl'>
            <div>
            GithubUsername: {data.login}

            </div>
            Github Followers: {data.followers}
            <div className='text-center'>
                  <img src={data.avatar_url} alt="Githuh image" />
            </div>

            
        </div>
    )
}

export default Github

export const GithubLoader=async ()=>{
    const response=await fetch('https://api.github.com/users/Radheya-2811')
    return response.json();
}