import { forwardRef } from 'react';
import IconBase from './IconBase';
import type { IconBaseProps } from './IconBase';

const ArrowDown = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => (
  <IconBase ref={ref} viewBox="0 0 16 17" {...props}>
    <path 
      d="M8 3.15039L8 13.8171M8 13.8171L12 9.81706M8 13.8171L4 9.81706" 
      stroke="url(#paint0_linear_7775_525)" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient 
        id="paint0_linear_7775_525" 
        x1="11.85" 
        y1="3.15039" 
        x2="3.50948" 
        y2="3.54883" 
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2DD282"/>
        <stop offset="1" stopColor="#90F4E8"/>
      </linearGradient>
    </defs>
  </IconBase>
));

ArrowDown.displayName = 'ArrowDown';

export default ArrowDown;