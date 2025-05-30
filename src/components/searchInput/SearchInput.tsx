import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchInput() {
    return (
        <div className='rounded-xl  border border-gray-300 flex  items-center px-3 py-2  w-[35rem] '>
            <select className='w-[15rem] font-bold focus:outline-0 focus:border-0'>
                <option value="all">All categories</option>


            </select>

            <div className='border-l border-gray-300 px-3 ml-3'>

                <form className='relative w-[20rem] '>
                    <input className='focus:outline-0 focus:border-0 py-1   placeholder:text-gray-300 w-[95%]' placeholder='Search Products, categories...' />
                    <button className='absolute left-[95%]  cursor-pointer  px-3 py-2'>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="text-black "
                        />
                    </button>

                </form>



            </div>




        </div>
    )
}

export default SearchInput