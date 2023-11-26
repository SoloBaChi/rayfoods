import React from "react";

function SubscribeEmailBtn(props) {
  return (
    <form>
      <div className="form-field relative">
        <input
          type="search"
          className="w-full rounded-[_20px] p-2 outline-none text-[_#1e1e1e]"
          placeholder="Enter your email"
        />
        <button
          type="email"
          className="block bg-[_#E41616] text-2xl absolute top-0 right-0 rounded-r-[_20px] h-full p-2"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default SubscribeEmailBtn;
