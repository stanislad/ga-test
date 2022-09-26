import React, {useState} from "react";

const SearchBar = ({onTermSubmit, term, setTerm}) => {

    const onFormSubmit = e => {
        e.preventDefault();
        onTermSubmit(term);
    }

    return (
        <div className='ui segment'>
            <form onSubmit={onFormSubmit} className='ui form'>
                <div className='field'>
                    <input
                        type='text'
                        placeholder='Enter Word'
                        // controlled element
                        value={term}
                        onChange={e => setTerm(e.target.value)}/>
                </div>
            </form>
        </div>
    );
}
export default SearchBar;
