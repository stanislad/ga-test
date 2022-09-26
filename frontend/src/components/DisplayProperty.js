import React from "react";
import DisplayTransaction from "./DisplayTransaction";

const DisplayProperty = ({propertyData}) => {

    if(!propertyData) return <div/>

    return (
        <div className='ui raised segment'>
            <h1>Property Address:</h1>
            <p>{propertyData.paon + ' ' + propertyData.street}</p>
            <p>{propertyData.saon}</p>
            <p>{propertyData.outcode + ' ' + propertyData.incode}</p>
            <h1>Property Transactions:</h1>
            <DisplayTransaction transactions={propertyData.lrTransactions}/>
        </div>
    );
}
export default DisplayProperty;
