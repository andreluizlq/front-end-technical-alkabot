import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LogoImage from "../assets/images/userImage";
import CloseIcon from "@mui/icons-material/Close";

const DialogPost = ({
  open,
  handleClose,
  post,
  userDetails,
  postsComments,
  handlePerfil,
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      <Dialog fullScreen={isMobile} open={open} onClose={handleClose}>
        <DialogTitle>
          <Stack
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Stack alignItems="center" flexDirection="row">
              <Avatar
                onClick={() => handlePerfil(userDetails.id)}
                sx={{
                  height: "36px",
                  width: "36px",
                  mr: "1rem",
                  cursor: "pointer",
                }}
              >
                <LogoImage width={60} />
              </Avatar>
              <Box>
                <Typography
                  fontWeight="600"
                  fontSize="14px"
                  color="#292929"
                  mr="6px"
                  sx={{ cursor: "pointer" }}
                  onClick={() => handlePerfil(userDetails.id)}
                >
                  {userDetails?.name}
                </Typography>

                <Typography
                  fontSize="12px"
                  color="#757575"
                  sx={{ cursor: "pointer" }}
                  onClick={() => handlePerfil(userDetails.id)}
                >
                  {userDetails?.email}
                </Typography>
              </Box>
            </Stack>
            <IconButton size="small" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Box mt="1rem" mb="2.25rem">
            <Typography
              fontWeight="600"
              fontSize="22px"
              sx={{
                "&:first-letter": {
                  textTransform: "capitalize",
                },
              }}
            >
              {post.title}
            </Typography>
            <Typography
              fontSize="16px"
              color="#757575"
              pt={1}
              sx={{
                "&:first-letter": {
                  textTransform: "capitalize",
                },
              }}
            >
              {post.body}
            </Typography>
          </Box>
          <Divider sx={{ mb: "1.5rem" }} />
          <Stack>
            <Typography fontSize="14px" color="#757575" mb="1rem">
              Esta publicação tem {postsComments?.length} comentários:
            </Typography>
            {postsComments.map((item, index) => (
              <Box key={index} mb="1rem">
                <Typography fontSize="12px" color="#757575">
                  Por {item?.email}
                </Typography>
                <Typography
                  fontWeight="600"
                  fontSize="14px"
                  color="#292929"
                  mr="6px"
                >
                  {item?.name}
                </Typography>
                <Typography fontSize="12px" color="#757575">
                  {item?.body}
                </Typography>
              </Box>
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogPost;
