import { useCallback, useEffect, useState } from "react";

export interface UseToggleOptions {
  initToggle?: boolean
  changedCallback?: (toggle: boolean) => any
}

const useToggle = ({
  initToggle=false,
  changedCallback,
}: UseToggleOptions) => {
  const [toggle, setToggle] = useState(initToggle);

  const handleToggle = useCallback(() => {
    setToggle(t => !t);
  }, []);

  useEffect(() => {
    changedCallback && changedCallback(toggle);
  }, [changedCallback, toggle]);

  return ({
    toggle,
    setToggle,
    handleToggle,
  });
};

export default useToggle;