import React from "react";
import { menuArr } from "~/assets/ContentArrProject/Header/MenuAndIcon";
import { Link } from "react-router-dom";

const MenuSidebar = ({ titleSidebar, setIsOpenSidebar }) => {
  const handleMenuClick = () => {
    setIsOpenSidebar(false);
  };

  return (
    <div className="p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-6h3>
        
        <div className="space-y-3">
          {menuArr.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              onClick={handleMenuClick}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-all duration-200 text-base font-medium"
            >
              {item.title}
            </Link>
     
        </div>
        
        <div className="pt-6 mt-6 border-t border-gray-200">
          <button
            onClick={handleMenuClick}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 font-medium"
          >
            Đóng Menu
          </button>
        </div>
      </div>
    </div>

  );
};

export default MenuSidebar;