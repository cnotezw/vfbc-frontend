import React, { Suspense } from "react";

import { ReactComponent as RollingLoader } from "./rolling.svg";

const SuspenseWrapper = (props) => {
  const LazyComponent = React.lazy(() => import(`${props.path}`));

  return (
    <Suspense
      fallback={
        <div className="loader-container">
          <div className="loader-container-inner">
            {/* <RollingLoader /> */}
            Loading...
          </div>
        </div>
      }
    >
      <LazyComponent />
    </Suspense>
  );
};

export default SuspenseWrapper;