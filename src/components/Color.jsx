import React from "react";
function Color({color}){
    return (<>
        <div style={{
        display:"inline-flex",
        marginRight:"10px",
        width:"20px",
        height:"20px",
        borderRadius:"50%",
        backgroundColor: color}}>
        </div>
    </>);
}

export default Color;