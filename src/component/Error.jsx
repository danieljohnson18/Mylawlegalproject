import React from 'react';


export default function Error({ errors }) {
    return <div className={"error"}>{errors ? errors.message : " "}</div>;
}