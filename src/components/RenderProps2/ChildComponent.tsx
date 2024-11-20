import { FC } from "react";

interface ChildComponentProps {
  data: string[];
}

const ChildComponent: FC<ChildComponentProps> = ({ data }) => {
  return (

    data.map((item, index) => (
      <li key={index}>
        {item}
      </li>
    ))

  );
};

export default ChildComponent;
