import React from "react";

type BoxProps = { children: React.ReactNode; style?: React.CSSProperties };

const Box = ({ children, style = {} }: BoxProps) => {
  return (
    <section className="m-4" style={{ padding: "1em", border: "5px solid purple", ...style }}>
      {children}
    </section>
  );
};

export default function ShowBox() {
  return (
    <Box>
      Just a string.
      <p>Some HTML that is not nested.</p>
      <Box style={{ borderColor: "red" }}>
        <h2>Another React component with one child.</h2>
      </Box>
      <Box style={{ borderColor: "blue" }}>
        <h2>A nested React component with two children.</h2>
        <p>The second child.</p>
      </Box>
    </Box>
  );
}
