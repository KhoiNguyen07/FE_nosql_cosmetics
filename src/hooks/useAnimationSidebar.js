import { useEffect, useState } from "react";
export const useAnimationSidebar = (isOpenSidebar) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isOpenSidebar) {
      setShouldRender(true);
      setAnimationClass("slideToLeft");
    } else {
      setAnimationClass("slideToRight");
      setTimeout(() => {
        setShouldRender(false);
      }, 400); // Match duration in your animation
    }
  }, [isOpenSidebar]);
  return {
    shouldRender,
    animationClass
  };
};
