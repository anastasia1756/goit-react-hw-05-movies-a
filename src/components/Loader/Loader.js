import { Oval } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={50}
      width={50}
      strokeWidth={5}
      color="#331333"
      secondaryColor="#aa27aa"
    />
  );
};
