import React from 'react';

interface SvgProps {
    color?: string;
    size?: string;
    className?: string;
    
}
const ConditionStart = (props: SvgProps) => (
    <svg width="85px" height="43px" viewBox="0 0 85 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>IF Copy 4</title>
        <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                <stop stop-color="#EEF4F6" stop-opacity="0.65" offset="0%"></stop>
                <stop stop-color="#EEF4F6" offset="100%"></stop>
            </linearGradient>
            <path d="M5,0 L65.7630775,0 C67.2801087,4.16221799e-15 68.7150997,0.688741701 69.6640565,1.87232308 L82.4923313,17.8723231 C83.9576926,19.6999875 83.9576926,22.3000125 82.4923313,24.1276769 L69.6640565,40.1276769 C68.7150997,41.3112583 67.2801087,42 65.7630775,42 L5,42 C2.23857625,42 3.38176876e-16,39.7614237 0,37 L0,5 C-3.38176876e-16,2.23857625 2.23857625,5.07265313e-16 5,0 Z" id="path-2"></path>
            <filter x="-0.6%" y="-1.2%" width="99.5%" height="104.8%" filterUnits="objectBoundingBox" id="filter-3">
                <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1"></feComposite>
                <feColorMatrix values="0 0 0 0 0.831372549   0 0 0 0 0.850980392   0 0 0 0 0.901960784  0 0 0 1 0" type="matrix" in="shadowOffsetOuter1"></feColorMatrix>
            </filter>
        </defs>
        <g id="IF-Copy-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Rectangle">
                <use fill="black" fill-opacity="1" filter="url(#filter-3)"></use>
                <use fill="#FFFFFF" fill-rule="evenodd"></use>
                <path stroke="#D4D9E6" stroke-width="1" d="M65.7630775,0.5 C67.1284056,0.5 68.4198975,1.11986753 69.2739586,2.18509077 L69.2739586,2.18509077 L82.1022334,18.1850908 C82.761646,19.0075398 83.0913523,20.0037699 83.0913523,21 C83.0913523,21.9962301 82.761646,22.9924602 82.1022334,23.8149092 L82.1022334,23.8149092 L69.2739586,39.8149092 C68.4198975,40.8801325 67.1284056,41.5 65.7630775,41.5 L65.7630775,41.5 L5,41.5 C3.75735931,41.5 2.63235931,40.9963203 1.81801948,40.1819805 C1.00367966,39.3676407 0.5,38.2426407 0.5,37 L0.5,37 L0.5,5 C0.5,3.75735931 1.00367966,2.63235931 1.81801948,1.81801948 C2.63235931,1.00367966 3.75735931,0.5 5,0.5 L5,0.5 L65.7630775,0.5 Z" stroke-linejoin="square" fill="url(#linearGradient-1)" fill-rule="evenodd"></path>
            </g>
        </g>
    </svg>
    
);

export default ConditionStart