import { ReactNode, FC, useState } from "react";

interface ParentComponentProps {
    render: (data: string[]) => ReactNode;
}

const ParentComponent: FC<ParentComponentProps> = ({ render }) => {
    const [data] = useState<string[]>(["Apple", "Banana", "Orange"]);

    return <ul>{render(data)}</ul>
};

export default ParentComponent;
