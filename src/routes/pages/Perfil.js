import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import CardPosts from "../../components/CardPosts";
import Page from "../../components/Page";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostsData,
  fetchUsersDetails,
  selectPostsData,
  selectUsersDetails,
} from "../../redux/slices/blogDataSlice";
import { useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import LocationIcon from "../../assets/icons/LocationIcon";
import LogoImage from "../../assets/images/userImage";

const StyledTypography = styled((props) => <Typography {...props} />)({
  fontSize: "14px",
  color: "#757575",
});

function Perfil() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [page, setPage] = useState(1);
  const pageLimit = 6;
  const listPosts = useSelector(selectPostsData);
  const userDetails = useSelector(selectUsersDetails);
  const listPostsUser = listPosts.filter(
    (value) => value.userId === parseInt(userId)
  );
  window.scrollTo(0, 0);
  useEffect(() => {
    dispatch(fetchUsersDetails(userId)).then(unwrapResult);
    dispatch(fetchPostsData()).then(unwrapResult);
  }, [dispatch, userId]);

  return (
    <Page container>
      <Grid container height="100%" sx={{ height: "91.4vh" }}>
        <Grid item xs={12} md={8} pr="87px">
          <Typography fontSize="1rem" color="#757575" mt="2.5rem">
            Publicações de {userDetails?.name}
          </Typography>
          <Typography
            fontSize="1rem"
            color="secondary"
            mb="1rem"
            fontWeight="300"
            sx={{ fontStyle: "italic" }}
          >
            @{userDetails?.username}
          </Typography>
          <Divider sx={{ mb: "1rem" }} />
          <Stack>
            {listPostsUser
              ?.slice((page - 1) * pageLimit, page * pageLimit)
              .map((item, index) => (
                <CardPosts item={item} />
              ))}
          </Stack>
          <Stack alignItems="center" my={4}>
            <Pagination
              sx={{ pb: "1rem" }}
              count={Math.ceil(listPostsUser.length / pageLimit)}
              onChange={(_, value) => setPage(value)}
              page={page}
              size="small"
            />
          </Stack>
        </Grid>
        {!isMobile && (
          <Grid item md={4} sx={{ borderLeft: "0.5px solid #E0E0E0" }}>
            <Stack mt="35px" ml="35px">
              <Avatar sx={{ height: "108px", width: "108px" }}>
                <LogoImage width={110} />
              </Avatar>
              <Box mt="1rem">
                <Typography fontWeight="600" fontSize="16px" color="#292929">
                  {userDetails?.name}
                </Typography>
                <StyledTypography>{userDetails?.email}</StyledTypography>
              </Box>
              <Box mt="1rem">
                <StyledTypography>
                  Empresa: {userDetails?.company?.name}
                </StyledTypography>
                <StyledTypography mt="0.2rem">
                  Setor: {userDetails?.company?.catchPhrase}
                </StyledTypography>
                <StyledTypography mt="0.2rem">
                  Objetivo: {userDetails?.company?.bs}
                </StyledTypography>
              </Box>
              <Stack flexDirection="row" alignItems="center" mt="2rem">
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{
                    textTransform: "none",
                    paddingX: "23px",
                    borderRadius: "2rem",
                    fontWeight: 400,
                    mr: "1rem",
                  }}
                >
                  Website
                </Button>
                <Box width="3px">
                  <IconButton
                    color="secondary"
                    sx={{
                      background: "#6383dd",
                      "&:hover": {
                        background: "#455B9A",
                      },
                    }}
                  >
                    <LocationIcon />
                  </IconButton>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        )}
      </Grid>
    </Page>
  );
}

export default Perfil;
