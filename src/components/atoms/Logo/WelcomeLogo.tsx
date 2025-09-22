import { Box, Typography } from "@mui/material";

const WelcomeLogo = () => {
  return (
    <Box
      className="WelcomeLogo"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 1,
        animation: `fadeIn 2200ms linear forwards`,
        transformOrigin: "center",
        "@keyframes fadeIn": {
          "0%": { opacity: 0.1 },
          "30%": { opacity: 0.7 },
          "75%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          overflow: "hidden",
          border: "1px solid #fff",
          width: 350,
          height: 350,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={require("assets/img/alb-logo.png")}
          style={{ height: 300 }}
          alt="img"
        />
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontSize: 54,
              fontWeight: 400,
              textShadow: "#0000006a 0 0 2px",
              mr: 0.1,
              lineHeight: 1,
            }}
          >
            S
          </Typography>
          <Typography
            sx={{
              fontSize: 54,
              fontWeight: 400,
              color: "#000",
              textShadow: "#000 0 0 2.25px",
              lineHeight: 1,
            }}
          >
            T
          </Typography>
          <Typography
            sx={{
              fontSize: 54,
              fontWeight: 400,
              color: "#000",
              textShadow: "#000 0 0 2.25px",
              lineHeight: 1,
            }}
          >
            O
          </Typography>
          <Typography
            sx={{
              fontSize: 54,
              fontWeight: 400,
              color: "#000",
              textShadow: "#000 0 0 2.25px",
              lineHeight: 1,
            }}
          >
            N
          </Typography>
          <Typography
            sx={{
              fontSize: 54,
              fontWeight: 400,
              color: "#000",
              textShadow: "#000 0 0 2.25px",
              lineHeight: 1,
            }}
          >
            E
          </Typography>
          <Typography
            sx={{
              fontSize: 54,
              fontWeight: 400,
              color: "#000",
              textShadow: "#000 0 0 2.25px",
              lineHeight: 1,
            }}
          >
            D
          </Typography>
          <Typography
            sx={{
              fontSize: 54,
              fontWeight: 400,
              color: "#000",
              textShadow: "#000 0 0 2.25px",
              lineHeight: 1,
              ml: 2,
            }}
          >
            C
          </Typography>
          <Typography
            sx={{
              fontSize: 54,
              fontWeight: 400,
              color: "#000",
              textShadow: "#000 0 0 2.25px",
              lineHeight: 1,
            }}
          >
            L
          </Typography>
          <Typography
            sx={{
              fontSize: 54,
              fontWeight: 400,
              color: "#000",
              textShadow: "#000 0 0 2.25px",
              lineHeight: 1,
            }}
          >
            U
          </Typography>
          <Typography
            sx={{
              fontSize: 54,
              fontWeight: 400,
              color: "#000",
              textShadow: "#000 0 0 2.25px",
              lineHeight: 1,
            }}
          >
            B
          </Typography>
        </Box>
      </Box> */}
    </Box>
  );
};

export default WelcomeLogo;
