import React from 'react';

interface SvgProps {
    color?: string;
    size?: string;
    className?: string
}
const ConditionLogic = (props: SvgProps) => (
    <svg width="85px" height="43px" viewBox="0 0 85 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Sub-Statement</title>
        <g id="Sub-Statement" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="IF-Copy" fill="#FFFFFF" stroke="#D4D9E6">
                <path d="M65.7630775,0.5 C67.1284056,0.5 68.4198975,1.11986753 69.2739586,2.18509077 L69.2739586,2.18509077 L82.1022334,18.1850908 C82.761646,19.0075398 83.0913523,20.0037699 83.0913523,21 C83.0913523,21.9962301 82.761646,22.9924602 82.1022334,23.8149092 L82.1022334,23.8149092 L69.2739586,39.8149092 C68.4198975,40.8801325 67.1284056,41.5 65.7630775,41.5 L65.7630775,41.5 L5,41.5 C3.75735931,41.5 2.63235931,40.9963203 1.81801948,40.1819805 C1.00367966,39.3676407 0.5,38.2426407 0.5,37 L0.5,37 L0.5,5 C0.5,3.75735931 1.00367966,2.63235931 1.81801948,1.81801948 C2.63235931,1.00367966 3.75735931,0.5 5,0.5 L5,0.5 L65.7630775,0.5 Z" id="Rectangle"></path>
            </g>
        </g>
    </svg>
    
);

export default ConditionLogic