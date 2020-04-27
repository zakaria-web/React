import React from 'react';

const SearchBox = ({searchfiel, searchChange}) => {
    return(
        <input 
        type='search' 
        placeholder='search rebots'
        onChange = {searchChange}
        />
    );
}
export default SearchBox;