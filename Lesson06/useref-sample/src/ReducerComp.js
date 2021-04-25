import React,{useState} from 'react'

function ReducerComp() {
    const [data,setData]=useState("")
    const [loading,setLoad] = useState(false)
    const [error,setError] = useState("")

    const fetchingDog = ()=>{
        setLoad(true)
        setData("")
        setError("")

        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res=>res.json())
            .then(result => {
                                setLoad(false)
                                setData(result.message)
                            })
            .catch(()=>{setLoad(false);setError("Error fetching data.")})
    }
    
    return (
        <div>
<hr/>
            <button onClick={fetchingDog} disabled={loading}>
                Fetch Dog
            </button>
            {loading && <p>Loading ...</p>}
 { data && <div> <img src={data} alt="Random Dog"/></div> }
            {{error} && <p>{error}</p>}
        </div>
    )
}

export default ReducerComp
