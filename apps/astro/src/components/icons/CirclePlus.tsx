import { forwardRef } from 'react';
import IconBase, { type IconBaseProps } from './IconBase';

const CirclePlus = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  return (
    <IconBase viewBox="0 0 24 24" ref={ref} {...props}>
      <circle cx="12" cy="12" r="10" stroke="url(#paint0_linear_6930_1884)" />
      <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="url(#paint1_linear_6930_1884)" strokeLinecap="round" />
      <defs>
        <linearGradient id="paint0_linear_6930_1884" x1="21.625" y1="2.00001" x2="0.810559" y2="3.32577" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2DD282" />
          <stop offset="1" stopColor="#90F4E8" />
        </linearGradient>
        <linearGradient id="paint1_linear_6930_1884" x1="14.8875" y1="9" x2="8.64317" y2="9.39773" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2DD282" />
          <stop offset="1" stopColor="#90F4E8" />
        </linearGradient>
      </defs>
    </IconBase>
  );
});

CirclePlus.displayName = 'CirclePlus';


export default CirclePlus;
