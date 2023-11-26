import React from "react";
import NotificationIcon from "./icons/notificationIcon";
import CartIcon from "./icons/cartIcon";

function Header() {
  return (
    <header className="header-container px-[5%] py-[_1.5rem] lg:px-[_7%] lg:flex lg:flex-row justify-between lg:gap-4 items-center">
      <div className="logo-text">
        <h1 className="text-3xl font-[_700] text-[_#E41616]">Ray foods</h1>
      </div>
      <form className="form-field search-icon basis-1/2 relative">
        <div className="drop-down absolute top-0 left-0 bg-[_#CBD8CC] h-full p-2 rounded-l-lg">
          all category
          <ul>
            {/* <li>category one</li>
                            <li>category two</li>
                            <li>category three</li> */}
          </ul>
        </div>
        <input
          type="search"
          className="border border-[_#ccc] w-full p-2 rounded-lg text-center outline-none"
          placeholder="Search your products"
        />
        <button
          type="submit"
          className="search-button absolute right-0 top-0 bg-[_#1E1E1E] text-[_#fff] h-full rounded-r-lg p-2"
        >
          Search
        </button>
      </form>
      <div className="other-info flex flex-row gap-4 items-center">
        <div className="notification-icon">
          <NotificationIcon />
        </div>
        <div className="add-to-cart-icon">
          <CartIcon />
        </div>
        <div className="user-profile">
          <div className="profile-icon"></div>
          <span className="account-details">Account</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
