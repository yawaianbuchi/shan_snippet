"use client";
import { cn } from "@/util";
import { Typography, TypographyProps, styled } from "@mui/material";
import React, { PropsWithChildren } from "react";

type Props = TypographyProps & PropsWithChildren;
interface TextProps extends Props {}

const TypographyStyled = styled(Typography)<TextProps>(({}) => ({}));

const Text: React.FC<TextProps> = ({ children, ...rest }) => {
  return (
    <TypographyStyled className={cn(rest.className)} {...rest}>
      {children}
    </TypographyStyled>
  );
};

export default Text;
