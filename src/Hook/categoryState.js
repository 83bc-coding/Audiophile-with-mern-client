import { useState, useEffect, createContext } from "react";
export let SelectPlanContext = createContext();

function SelectPlanProvider({ children }) {
  const [plansOption, setPlansOption] = useState('');

  console.log("plan option", plansOption);









  useEffect(() => {
console.log('effect plan selec',plansOption)  }, [plansOption]);

  return (
    <SelectPlanContext.Provider
      value={{
        plansOption,
        setPlansOption,
      }}
    >
      {children}
    </SelectPlanContext.Provider>
  );
}

export default SelectPlanProvider;
