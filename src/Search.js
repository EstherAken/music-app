import React from "react";
import { CiSearch } from "react-icons/ci";


export default function Search(){

const styles= {
    color: "gray",
    position: "absolute",
    top:"13px"
}

    return(
        <div className="Search--bar">
<img src="./images/musicscore.png" alt="musicscore" />

<div className="search--icon--bar">
<CiSearch size="20px" style={styles} />
<input type="text" placeholder="search artists" />
</div>


        </div>
        
    )
}