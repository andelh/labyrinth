import { motion } from "framer-motion";
import React from "react";
import styled from 'styled-components';


export const Spacer = ({ size = 10, axis = "vertical", style = {}, ...delegated }) => {
  const width = axis === "vertical" ? 1 : size;
  const height = axis === "horizontal" ? 1 : size;
  return (
    <span
      style={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  );
};


export const Flex = styled(motion.div)`
  display: flex;

  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}