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

export const IconDownload = create(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
    <path d="M7 11l5 5l5 -5" />
    <path d="M12 4l0 12" />
  </>
);

export const IconNodeJS = create(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
    <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
  </>
);

export const IconPython = create(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
    <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
    <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
    <path d="M11 6l0 .01" />
    <path d="M13 18l0 .01" />
  </>
);
export const IconDart = create(
  <>
    <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z" />
  </>
);

export const IconMySQL = create(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" />
    <path d="M9 7h.01" />
  </>
);
