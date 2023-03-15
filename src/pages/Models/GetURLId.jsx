import React, { useState, useEffect } from 'react';
function GetUrl(){
    const [url, setUrl] = useState("None");
    useEffect(()=>{
        setUrl(window.location.href)
    }, [])
    let someSpecificWord  = '5173/';
    let splitstr = url.split(someSpecificWord);
    const getId  = splitstr[1];
    return (
        <p>{getId}</p>
    );
}
export default GetUrl;