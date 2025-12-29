import '../styles/searchBar.css';

export const SearchBar = (props) => {
    const {setValue,value,submitHandler} = props;
    return (
        <div className="search-bar">
            <div className='relative search-bar-container'>
                <input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Search....."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="border border-white-300 rounded-md bg-transparent text-white placeholder-gray-400 "
                />
                <svg
                    className="w-4 h-4 text-white absolute right-3 top-1/2 transform -translate-y-1/2 hover:scale-125 transition-transform duration-150 ease-out cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    onClick={submitHandler}
                >
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.21 4.21a.75.75 0 011.06 0L13.3 9.24a.75.75 0 010 1.06L8.27 15.3a.75.75 0 11-1.06-1.06L11.69 10 7.21 5.53a.75.75 0 010-1.06z" />
                </svg>
            </div>
        </div>
    )
}