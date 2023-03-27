import { Stack, Typography } from "@mui/material";
import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchPostsComments,
  fetchUsersDetails,
} from "../redux/slices/blogDataSlice";
import DialogPost from "./DialogPost";
import { useNavigate } from "react-router-dom";

const CardPosts = ({ item }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState();
  const [postsComments, setPostsComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsersDetails(item.userId))
      .then(unwrapResult)
      .then((result) => {
        if (result) setUserDetails(result);
      });
    dispatch(fetchPostsComments(item.id))
      .then(unwrapResult)
      .then((result) => {
        if (result) setPostsComments(result);
      });
  }, [dispatch, item.userId, item.id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePerfil = (userId) => {
    return navigate(`/perfil/${userId}`);
  };

  return (
    <>
      <Stack
        p="6px 12px"
        mb="1rem"
        onClick={handleClickOpen}
        sx={{
          cursor: "pointer",
          "&:hover": {
            transition: "background 0.2s",
            background: "rgba(25, 25, 25, 0.02)",
          },
        }}
      >
        <Typography
          fontWeight="600"
          fontSize="22px"
          sx={{
            "&:first-letter": {
              textTransform: "capitalize",
            },
          }}
        >
          {item.title}
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
          {item.body}
        </Typography>
        <Typography
          pt={1}
          fontSize="14px"
          color="#757575"
          onClick={() => handlePerfil(userDetails.id)}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#292929",
            },
          }}
        >
          Por {userDetails?.email}
        </Typography>
        <Typography fontSize="14px" color="#B5B5C3" pt={1.5}>
          {postsComments?.length} Comentários
        </Typography>
      </Stack>
      <DialogPost
        open={open}
        handleClose={handleClose}
        post={item}
        handlePerfil={handlePerfil}
        userDetails={userDetails}
        postsComments={postsComments}
      />
    </>
  );
};

export default CardPosts;
