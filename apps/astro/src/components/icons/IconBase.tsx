import { forwardRef } from 'react';
import type { SVGProps } from 'react';

export interface IconBaseProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  stroke?: string;
  fill?: string;
  className?: string;
  title?: string;
}

const IconBase = forwardRef<SVGSVGElement, IconBaseProps>(
  ({ title, size, width, height, viewBox = '0 0 24 24', className = '', children, ...props }, ref) => {
    const computedWidth = width || size || '24';
    const computedHeight = height || size || '24';

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={computedWidth}
        height={computedHeight}
        viewBox={viewBox}
        fill="none"
        className={className}
        {...props}
      >
        {title && <title>{title}</title>}

        {children}
      </svg>
    );
  }
);

export default IconBase;

IconBase.displayName = 'IconBase';
