import { forwardRef } from "react";
import type { ReactNode, SVGProps } from "react";

type BaseProps = Omit<SVGProps<SVGSVGElement>, "role" | "viewBox" | "xmlns"> & {
  size?: number;
};

const Base = forwardRef<SVGSVGElement, BaseProps>(
  ({ d, size = 16, width = size, height = size, ...props }, ref) => (
    <svg
      ref={ref}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      width={width}
      height={height}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    />
  )
);

type IconProps = Omit<BaseProps, "children">;

const create = (children: ReactNode) =>
  forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Base ref={ref} {...props}>
      {children}
    </Base>
  ));

export const IconArrowRight = create(
  <>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </>
);

export const IconExternalLink = create(
  <>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </>
);

export const IconImage = create(
  <>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </>
);

export const IconUser = create(
  <>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </>
);

export const IconWhatsApp = create(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
  </>
);

export const IconVirus = create(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M12 7v-4" />
    <path d="M11 3h2" />
    <path d="M15.536 8.464l2.828 -2.828" />
    <path d="M17.657 4.929l1.414 1.414" />
    <path d="M17 12h4" />
    <path d="M21 11v2" />
    <path d="M15.535 15.536l2.829 2.828" />
    <path d="M19.071 17.657l-1.414 1.414" />
    <path d="M12 17v4" />
    <path d="M13 21h-2" />
    <path d="M8.465 15.536l-2.829 2.828" />
    <path d="M6.343 19.071l-1.413 -1.414" />
    <path d="M7 12h-4" />
    <path d="M3 13v-2" />
    <path d="M8.464 8.464l-2.828 -2.828" />
    <path d="M4.929 6.343l1.414 -1.413" />
  </>
);

export const IconAI = create(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
  </>
);

export const IconAsisteProject = create(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
    <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
  </>
);

export const IconLoad = create(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />
    <path d="M18.37 7.16l0 .01" />
    <path d="M13 19.94l0 .01" />
    <path d="M16.84 18.37l0 .01" />
    <path d="M19.37 15.1l0 .01" />
    <path d="M19.94 11l0 .01" />
  </>
);
