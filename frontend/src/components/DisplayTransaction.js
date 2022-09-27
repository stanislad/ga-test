import React from "react";

const DisplayTransaction = ({transactions}) => {

    const convert_date = date =>{
        return new Date(date).toLocaleDateString()
    }

    const renderTransactions = transactions.map((transaction, i) => {
            return (
                <div key={i} className='item'>
                    <div className='content'>
                        <div className='header'>
                            {convert_date(transaction.date)}
                        </div>
                        £{transaction.price}
                    </div>
                </div>
            )
        }
    )

    return (
        <div className='ui celled list' style={{'text-align': 'center'}}>
            {renderTransactions}
        </div>
    );
}
export default DisplayTransaction;
