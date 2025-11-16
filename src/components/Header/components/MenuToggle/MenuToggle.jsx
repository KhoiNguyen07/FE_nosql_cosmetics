import { CgMenu } from "react-icons/cg";

const MenuToggle = () => {
  return (
    <div className="block text-xl xl:hidden absolute left-0 top-1/2 -translate-y-1/2 px-5">
      <CgMenu />
    </div>
  );
};

export default MenuToggle;
