import React from "react";
import * as TbIcons from 'react-icons/tb';
import * as FaIcons from 'react-icons/fa';
import * as RxIcons from 'react-icons/rx';
import * as MdIcons from "react-icons/md";
import * as PiIcons from "react-icons/pi";
import Image from "next/image";
import { ReactSVG } from 'react-svg'

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
    }else if(iconName.toLocaleLowerCase().startsWith("pi")) {
        IconComponent = PiIcons[iconName]
    }
    
    if (iconName.toLocaleLowerCase().startsWith("image")) {
        return <Image {...props} alt="viva" />;
    } else if(iconName.toLocaleLowerCase().startsWith("svg")) {
        return <ReactSVG {...props} />
    } else{
        return <IconComponent {...props} />;
    }
};

export default Icon;