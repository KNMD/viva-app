import React from "react";
import * as TbIcons from 'react-icons/tb';
import * as FaIcons from 'react-icons/fa';
import * as RxIcons from 'react-icons/rx';
import * as MdIcons from "react-icons/md";
import Image from "next/image";

interface IconProps {
    iconName: string; // keyof typeof Icons;
    color?: string;
    size?: string;
    className?: string
}
  
const Icon: React.FC<IconProps> = ({ iconName, ...props }) => {
    let IconComponent;
    if(iconName.toLocaleLowerCase().startsWith("tb")) {
        IconComponent = TbIcons[iconName];
    }else if(iconName.toLocaleLowerCase().startsWith("fa")){
        IconComponent = FaIcons[iconName]
    }else if(iconName.toLocaleLowerCase().startsWith("rx")) {
        IconComponent = RxIcons[iconName]
    }else if(iconName.toLocaleLowerCase().startsWith("md")) {
        IconComponent = MdIcons[iconName]
    }else if(iconName.toLocaleLowerCase().startsWith("image")) {
        IconComponent = "Image"
    }
    console.log("iconcompoinet: ", IconComponent)
    if (IconComponent === 'Image') {
        return <Image {...props} />;
    } else {
        return <IconComponent {...props} />;
    }
};

export default Icon;