import { useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "utils/helpers";

const BreadCrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').slice(1)
  console.log("location", paths);
  const breadcrumbs: { title: string; link: string }[] = [];
  paths.map((p, index) => {
    breadcrumbs.push({
      title: `${p}`,
      link: `/${paths.slice(0, index + 1).join("/")}`,
    });
  });

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{pb: 1}}>
        {breadcrumbs &&
          breadcrumbs.map((b, index) =>
            index !== breadcrumbs.length - 1 ? (
              <Box key={b.title}>
                <Link underline="hover" color="inherit" href={b.link}>
                  {capitalizeFirstLetter(b.title)}
                </Link>
              </Box>
            ) : (
              <Typography key={b.title} color="text.primary">
                {capitalizeFirstLetter(b.title)}
              </Typography>
            )
          )}
      </Breadcrumbs>
    </>
  );
};

export default BreadCrumbs;
