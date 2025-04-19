import { forwardRef } from 'react';
import IconBase, { type IconBaseProps } from './IconBase';

const CircleMinus = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  return (
    <IconBase viewBox="0 0 20 20" ref={ref} {...props}>
      <circle cx="9.9974" cy="9.99935" r="8.33333" stroke="url(#paint0_linear_6930_2029)" />
      <path d="M12.5 10H7.5" stroke="url(#paint1_linear_6930_2029)" strokeLinecap="round" />
      <defs>
        <linearGradient id="paint0_linear_6930_2029" x1="18.0182" y1="1.66602" x2="0.672861" y2="2.77082" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2DD282" />
          <stop offset="1" stopColor="#90F4E8" />
        </linearGradient>
        <linearGradient id="paint1_linear_6930_2029" x1="12.5" y1="10.9812" x2="12.4867" y2="9.93648" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2DD282" />
          <stop offset="1" stopColor="#90F4E8" />
        </linearGradient>
      </defs>
    </IconBase>
  );
});

CircleMinus.displayName = 'CircleMinus';

export default CircleMinus;
