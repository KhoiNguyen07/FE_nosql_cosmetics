import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropdownCustom from "~/components/Dropdown/DropdownCustom";
import { StoreContext } from "~/contexts/StoreProvider";
import { showConfirmToast } from "~/utils/showConfirmToast";

const Menu = ({
  title,
  to,
  setIsOpenSidebar,
  titleSidebar,
  setTitleSidebar,
  setIsOpenSearchFunction
}) => {
  const { userInfo, setUserInfo, setCountItem } = useContext(StoreContext);
  const navigate = useNavigate();
  const confirmLogout = () => {
    showConfirmToast({
      message: "Are you sure logout your account?",
      onConfirm: () => {
        setUserInfo(null);
        setCountItem(0);
      }
    });
  };

  const itemPageAfterUserLogin = [
    {
      key: "1",
      label: <button onClick={confirmLogout}>Logout</button>
    },
    {
      key: "2",
      label: (
        <button
          onClick={() => {
            navigate("/order");
          }}
        >
          Your orders
        </button>
      )
    }
  ];
  return (
    <>
      {to ? (
        <Link to={to} className="hidden xl:block menu">
          {title}
        </Link>
      ) : userInfo ? (
        title == "Search" ? (
          <button
            className="hidden xl:block menu"
            onClick={() => {
              setIsOpenSearchFunction(true);
            }}
          >
            {title}
          </button>
        ) : (
          <DropdownCustom items={itemPageAfterUserLogin}>
            <button type="button" className="hidden xl:block menu">
              {userInfo.username}
            </button>
          </DropdownCustom>
        )
      ) : (
        <button
          type="button"
          onClick={() => {
            setIsOpenSidebar(title === "Sign in");
            setTitleSidebar({ ...titleSidebar, icon: "", title: title });
          }}
          className="hidden xl:block menu"
        >
          {title}
        </button>
      )}
    </>
  );
};

export default Menu;
