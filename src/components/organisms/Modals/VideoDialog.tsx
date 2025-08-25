import { useEffect, useState } from "react";
import {
  Dialog,
  ClickAwayListener,
  IconButton,
  CircularProgress,
  Box,
} from "@mui/material";
import { Color, Colors } from "constants/colors";
import { DialogStateInterface } from "types/app_models";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  string; // локализованные строки (например, "video_preview")
  onClose: () => void;
  closeAvailable: boolean;
  onSubmit: () => void;
  dialogState?: DialogStateInterface | null;
}

const VideoDialog = ({
  string,
  onClose,
  closeAvailable,
  onSubmit,
  dialogState,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleClose = () => {
    setOpen(false);
    onClose();
    setVideoLoaded(false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      {!videoLoaded && (
        <CircularProgress
          sx={{
            color: Color?.PRIMARY,
            zIndex: 5000,
            position: "fixed",
            top: "50%",
            left: "46%",
            p: 0,
            m: 0,
          }}
          thickness={2}
        />
      )}

      <ClickAwayListener
        onClickAway={() => {
          if (closeAvailable) handleClose();
        }}
        mouseEvent={false}
        touchEvent={false}
      >
        <>
          <Dialog
            sx={{
              zIndex: 4500,
              opacity: videoLoaded ? 1 : 0,
            }}
            open={open}
            onClose={() => {
              if (closeAvailable) handleClose();
            }}
            PaperProps={{
              sx: {
                borderRadius: 4,
                overflow: "hidden",
                border: "none",
                mx: 0.5,
                position: "relative",
              },
            }}
          >
            {closeAvailable && (
              <IconButton
                sx={{
                  backgroundColor: Colors?.WHITE,
                  "&:hover": { backgroundColor: Colors?.WHITE },

                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid #ccc",
                  m: 1,
                  position: "absolute",
                  right: 0,
                  top: 0,
                  zIndex: 2000,
                }}
                onClick={() => {
                  handleClose();
                }}
                size="small"
              >
                <CloseIcon sx={{ fontSize: 20 }} />
              </IconButton>
            )}

            <Box
              sx={{
                width: "100%",
                backgroundColor: Color?.PRIMARY_LIGHT,
              }}
            >
              {/* Заголовок — можно локализовать */}
              {/* <Box sx={{ width: "fit-content", px: 1, py: 0.5 }}>
                {string?.video_preview || "Video Preview"}
              </Box> */}
            </Box>

            <Box
              sx={{
                p: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: Colors?.BLACK,
              }}
            >
              <video
                style={{ maxWidth: "100vw", width: "100%" }}
                src={dialogState?.videoUrl || ""}
                autoPlay
                preload="metadata" // грузит только заголовки и первый кадр
                playsInline // важно для iOS, иначе ждёт fullscreen
                onLoadedData={() => setVideoLoaded(true)}
                loop
              />
            </Box>
          </Dialog>
        </>
      </ClickAwayListener>
    </>
  );
};

export default VideoDialog;
