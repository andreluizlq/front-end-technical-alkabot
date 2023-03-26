import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardPosts = ({ item }) => {
  const navigate = useNavigate();

  const handlePerfil = () => {
    return navigate(`/perfil/${item.userId}`);
  };

  return (
    <Stack
      p="6px 12px"
      mb="1rem"
      onClick={handlePerfil}
      sx={{
        cursor: "pointer",
        "&:hover": {
          transition: "background 0.2s",
          background: "rgba(25, 25, 25, 0.01)",
        },
      }}
    >
      <Typography fontWeight="600" fontSize="22px">
        {item.title}
      </Typography>
      <Typography fontSize="16px" color="#757575" pt={1}>
        {item.body}
      </Typography>
      <Typography fontSize="14px" color="#B5B5C3" pt={1.5}>
        3 comentários
      </Typography>
    </Stack>
  );
};

export default CardPosts;
