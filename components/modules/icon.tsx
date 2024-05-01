import React from "react";
import * as Icons from 'react-icons/tb';

interface IconProps {
    iconName: string; // keyof typeof Icons;
    color?: string;
    size?: string;
    className?: string
}
  
const Icon: React.FC<IconProps> = ({ iconName, ...props }) => {
    const IconComponent = Icons[iconName];
    if (!IconComponent) return null;

    return <IconComponent {...props} />;
};

export default Icon;