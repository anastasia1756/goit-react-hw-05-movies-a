import { lazy } from "react";

export const useLazyLoader = (componentName) => {
  return lazy(() =>
    import(`../pages/${componentName}`).then((module) => ({
      default: module[componentName],
    }))
  );
};
