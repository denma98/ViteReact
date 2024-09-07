import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect( () =>{
        fetch('https://api.github.com/users/denma98')
        .then( (res) => res.json() )
        .then( (data) => setData(data))
    })
  return (
    <div className='text-center text-4xl text-white bg-gray-600 p-4 '>Github followers: {data.followers} 
        <img src="data.avatar_url" alt="img" width={300} />
    </div>
  )
}

export default Github