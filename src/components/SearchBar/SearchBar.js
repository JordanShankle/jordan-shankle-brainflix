import './SearchBar.scss';

function SearchBar() {
    return (

        <label className='search'>
            <input type='text' placeholder='Search' name='search' className='search__input' />
        </label>
    )
};

export default SearchBar;