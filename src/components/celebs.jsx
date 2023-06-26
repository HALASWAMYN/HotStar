import { useState } from "react";
import '../styles/celebs.css'

const Celebs = () => {
    //database
    let stars = [
        {
            img: "/celebs/clb1.jfif",
            name: "AadhiTara",
            id: 1
        },
        {
            img: "/celebs/clb2.jfif",
            name: "Anish",
            id: 2
        },
        {
            img: "/celebs/clb3.jpg",
            name: "RadheShyam",
            id: 3
        },
        {
            img: "/celebs/clb4.jfif",
            name: "nani",
            id: 4
        },
        {
            img: "/celebs/clb5.jfif",
            name: "dq",
            id: 5
        }
    ]
    let [starsData,setData]=useState(stars)
    let handleRemove =(id,name)=>{
        setData(starsData.filter(x=>x.id!=id))
        alert(`${name} has been removed`)
    }
    return (
        <div className="celebs">
               <h1>Top Celebrites</h1>
            {
                starsData.map(data => (
                    <div className="celebs_list">
                        <div className="image">
                            <img src={data.img} alt="" />
                        </div>
                        <div className="info">
                            <h1>{data.name}</h1>
                            <button onClick={()=>handleRemove(data.id,data.name)}>Remove</button>
                        </div>
                    </div>

                ))
            }
        </div>
    );
}

export default Celebs;