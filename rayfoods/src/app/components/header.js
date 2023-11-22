import React from 'react';

function Header() {
    return (
        <header className='header-container px-[5%] py-[_1.5rem] lg:px-[_7%] lg:flex lg:flex-row items-justify gap-4 border border-white-800'>
            <div className='logo'>
                <h1>Ray foods</h1>
            </div>
            <div className='search-icon'>
                <form>
                    <div className='form-field'>
                        <div className='drop-down'>all category
                        <ul>
                            <li>category one</li>
                            <li>category two</li>
                            <li>category three</li>
                        </ul>
                        </div>
                        <input type="search"  placeholder='search your products'/>
                      <button type='submit' className='search-button'>search</button>
                    </div>
                </form>
            </div>
            <div className='other-info'>
                <div className='notification-icon'>

                </div>
                <div className='add-to-cart-icon'>

                </div>
                <div className='user-profile'>
                    <div className='profile-icon'>

                    </div>
                    <span className='account-details'>Account</span>
                </div>
            </div>
        </header>
    );
}

export default Header;