import React from "react";

type DeleteIconProps = React.SVGProps<SVGSVGElement> & {
  width?: number | string;
  height?: number | string;
};

const DeleteIcon: React.FC<DeleteIconProps> = ({
  width = 17,
  height = 17,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.42188 4.30859L12.8069 12.6936"
      stroke="#FF8B43"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M4.42383 12.6934L12.8088 4.30836"
      stroke="#FF8B43"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default DeleteIcon;
