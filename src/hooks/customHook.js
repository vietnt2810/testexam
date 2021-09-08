import {useState} from "react";
const CustomHook = () => {
  const [index, setIndex] = useState(0);
  const user = [
    { id: 1, name: "Huyen" },
    { id: 2, name: "Hoa" },
    { id: 3, name: "Hung" },
    { id: 4, name: "Long" },
  ];

  const nextPage = () => {
    if (index !== 3) {
      setIndex(index + 1);
    } else {
      setIndex(index - 3);
    }
  };

  const previousPage = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(index + 3);
    }
  };

  return [user, index, setIndex, nextPage, previousPage];
};

export default CustomHook;
