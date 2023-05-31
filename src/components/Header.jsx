import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const handleClick = () => console.log("Hello");

export default function CustomSeparator({ title }) {
  return (
    <div className="card bg-white dark:bg-secondary-dark-bg p-4 drop-shadow my-2 rounded-md">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link
          underline="hover"
          key="1"
          color="inherit"
          href="/"
          onClick={handleClick}
        >
          <div className="text-xl font-bold">Pages</div>
        </Link>

        <Typography key="3" color="text-primary">
          {title}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
