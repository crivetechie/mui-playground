import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

export default function ActionAreaCard() {
  const [show, setShow] = useState(false);
  return (
    <Box>
      <Card
        sx={{ width: 150 }}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <CardActionArea
          onClick={() => {
            console.log("pasticcio");
          }}
        >
          <CardMedia
            sx={{ height: 150, objectFit: "contain" }}
            component="img"
            width="150"
            height="150"
            image="https://backstage.io/logo_assets/svg/Icon_Gradient.svg"
            alt="Backstage"
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: 25,
              backgroundColor: "#393939"
            }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                mx: -2,
                my: -2,
                color: "white",
                textAlign: "center"
              }}
            >
              Backstage yah yah oh well
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{
          width: 160,
          position: "absolute",
          top: 100,
          left: 20
        }}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        {show && <Typography>Click</Typography>}
      </Card>
    </Box>
  );
}
