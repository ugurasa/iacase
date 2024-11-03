import Box from "@mui/joy/Box";
import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

const AppContainer = (props: IContainerProps) => {
  const { children } = props;

  return (
    <Box sx={{ display: "flex", minHeight: "100dvh", justifyContent: "center", padding: 0 }}>
      <Box
        component="main"
        className="MainContent"
        sx={{
          px: { xs: 2, md: 12 },
          pt: {
            xs: "calc(12px + var(--Header-height))",
            sm: "calc(12px + var(--Header-height))",
            md: 3,
          },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "100dvh",
          gap: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppContainer;
