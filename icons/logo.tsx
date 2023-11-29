export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      width={24}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h23.987v24H0V0Zm21.533 2.455v19.09H2.453V2.456h19.08Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
