/**
 * This is just a very simple component that I usually need when using flexboxes.
 */
import React from "react";

export const DivFlexSpacer: React.FC = (props: any) => (
  <div style={{ flex: "1 1 auto" }} {...props} />
);
export default DivFlexSpacer;
