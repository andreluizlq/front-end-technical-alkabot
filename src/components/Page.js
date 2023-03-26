import {
  Stack,
  Typography,
  Button,
  Container,
  useMediaQuery,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Page = ({ children, container = false, variant = false }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleHome = () => {
    return navigate("/");
  };

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
            : "0.5px solid #2F2F32",
          background: variant ? "#6383DD" : "#fff",
          zIndex: "100",
          position: "fixed",
          left: "0",
          top: "0",
          width: "100%",
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
            color={!variant ? "secondary" : "primary"}
            sx={{
              textTransform: "none",
              paddingX: "23px",
              borderRadius: "2rem",
              fontWeight: 400,
            }}
          >
            Cadastre-se
          </Button>
          {!isMobile && (
            <>
              {!variant && (
                <Typography
                  ml={2}
                  mr={4}
                  sx={{
                    cursor: "pointer",
                    opacity: "60%",
                    "&:hover": {
                      color: "#706E72",
                    },
                  }}
                >
                  Entrar
                </Typography>
              )}
              {variant && (
                <Typography
                  ml={2}
                  w
                  mr={4}
                  sx={{
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  Entrar
                </Typography>
              )}
            </>
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
