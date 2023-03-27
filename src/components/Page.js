import {
  Stack,
  Typography,
  Button,
  Container,
  useMediaQuery,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Page = ({ children, container = false, variant = false }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleHome = () => {
    return navigate("/front-end-technical-alkabot");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  }, []);

  return (
    <Stack>
      <Stack
        alignItems="center"
        px="1.5rem"
        py="0.5rem"
        flexDirection="row"
        justifyContent="space-between"
        sx={{
          borderBottom: !variant
            ? "0.5px solid #E0E0E0"
            : !isActive
            ? "0.5px solid #2F2F32"
            : "0.5px solid #E0E0E0",
          background: !variant ? "#fff" : !isActive ? "#6383DD" : "#fff",
          zIndex: "100",
          position: "fixed",
          left: "0",
          top: "0",
          width: "100%",
          transition: "background 0.2s",
        }}
      >
        <Typography
          fontSize="2.625rem"
          fontWeight="300"
          onClick={handleHome}
          sx={{ cursor: "pointer" }}
        >
          alkabot
        </Typography>

        <Stack flexDirection="row" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none",
              paddingX: "23px",
              borderRadius: "2rem",
            }}
          >
            Cadastre-se
          </Button>
          {!isMobile && (
            <Typography
              ml={2}
              mr={4}
              sx={{
                cursor: "pointer",
                color: !variant ? "primary" : !isActive ? "#fff" : "primary",
                opacity: !variant ? "60%" : !isActive ? "100%" : "60%",
              }}
            >
              Entrar
            </Typography>
          )}
        </Stack>
      </Stack>

      <Box mt="80px">
        {container && <Container>{children}</Container>}
        {!container && children}
      </Box>
    </Stack>
  );
};

export default Page;
