"use client";
import React, { PropsWithChildren } from "react";

interface PageLayoutProps extends PropsWithChildren {
  title: string;
}

const AuthLayout: React.FC<PageLayoutProps> = ({
  children
}: PageLayoutProps) => {
  return children;
  // <Grid container component="main" sx={{ height: "100vh" }}>
  //   <CssBaseline />
  //   <Grid
  //     item
  //     xs={false}
  //     sm={4}
  //     md={7}
  //     sx={{
  //       backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
  //       backgroundRepeat: "no-repeat",
  //       backgroundColor: (t) =>
  //         t.palette.mode === "light"
  //           ? t.palette.grey[50]
  //           : t.palette.grey[900],
  //       backgroundSize: "cover",
  //       backgroundPosition: "center"
  //     }}
  //   />
  //   <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  //     <Box
  //       sx={{
  //         my: 8,
  //         mx: 4,
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center"
  //       }}
  //     >
  //       <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
  //         <LockOutlinedIcon />
  //       </Avatar>
  //       <Typography component="h1" variant="h5">
  //         {title}
  //       </Typography>
  //       <Box className="w-full">{children}</Box>
  //     </Box>
  //   </Grid>
  // </Grid>
};

export default AuthLayout;
