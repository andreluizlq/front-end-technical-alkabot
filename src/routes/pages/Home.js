import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  Stack,
  Button,
  Pagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPosts from "../../components/CardPosts";
import {
  fetchPostsData,
  selectPostsData,
} from "../../redux/slices/blogDataSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import Frame1 from "../../assets/Frame1";
import Frame2 from "../../assets/Frame2";
import Page from "../../components/Page";

function Home() {
  const isHd = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isFullHd = useMediaQuery((theme) => theme.breakpoints.down("xl"));
  const dispatch = useDispatch();
  const listPosts = useSelector(selectPostsData);
  const [page, setPage] = useState(1);
  const pageLimit = 6;

  useEffect(() => {
    dispatch(fetchPostsData()).then(unwrapResult);
  }, [dispatch]);

  window.scrollTo(0, 0);
  return (
    <Page variant>
      <Stack
        flexDirection="row"
        alignItems="center"
        sx={{ position: "relative", background: "#6383DD" }}
      >
        <Container>
          <Box mt="97px" mb="104px">
            <Typography
              fontSize={{ xs: "54px", sm: "96px" }}
              fontWeight="600"
              color="#080808"
            >
              Fique curioso.
            </Typography>
            <Typography
              fontSize={{ xs: "20px", sm: "24px" }}
              color="#292929"
              maxWidth="40rem"
            >
              Descubra histórias, pensamentos e conhecimentos de escritores
              sobre qualquer assunto.
            </Typography>
            <Box mt="3rem">
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  paddingX: "40px",
                  borderRadius: "2rem",
                  Top: "1rem",
                }}
              >
                Começar agora
              </Button>
            </Box>
          </Box>
        </Container>
        {!isHd && (
          <Stack sx={{ position: "absolute", right: "0" }}>
            {isFullHd && <Frame1 />}
            {!isFullHd && <Frame2 />}
          </Stack>
        )}
      </Stack>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} pr={{ xs: "0", sm: "87px" }}>
            <Typography fontSize="1rem" color="#757575" mt="2.5rem" mb="1rem">
              Em alta no Alkabot
            </Typography>
            <Divider sx={{ mb: "1rem" }} />
            <Stack>
              {listPosts
                ?.slice((page - 1) * pageLimit, page * pageLimit)
                .map((item, index) => (
                  <CardPosts item={item} key={index} />
                ))}
            </Stack>
            <Stack alignItems="center" my={4}>
              <Pagination
                sx={{ pb: "1rem" }}
                count={Math.ceil(listPosts?.length / pageLimit)}
                onChange={(_, value) => setPage(value)}
                page={page}
                size="small"
              />
            </Stack>
          </Grid>
          {!isHd && (
            <Grid item md={4} sx={{ borderLeft: "0.5px solid #E0E0E0" }} />
          )}
        </Grid>
      </Container>
    </Page>
  );
}

export default Home;
