import React from "react";

const JSONToHtml =(props)=> {
    return <div ><pre style={{color:"white"}}>{JSON.stringify(props.data, null, 2) }</pre></div>;
}

export default JSONToHtml;