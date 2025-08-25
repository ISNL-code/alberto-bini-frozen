import VideoDialog from "components/organisms/Modals/VideoDialog";
import { Dispatch, SetStateAction } from "react";
import { DialogStateInterface } from "types/app_models";

interface Props {
  isOpen: boolean;
  setIsOpen;
  string;
  dialogState?: DialogStateInterface | null;
  handleSetDialogState: Dispatch<SetStateAction<DialogStateInterface | null>>;
}

const VideoWindow = ({
  isOpen,
  setIsOpen,
  string,
  dialogState,
  handleSetDialogState,
}: Props) => {
  if (!isOpen) return null;

  return (
    <VideoDialog
      string={string}
      onClose={() => {
        setIsOpen(null);
        handleSetDialogState(null);
      }}
      onSubmit={() => {
        setIsOpen(false);
        handleSetDialogState(null);
      }}
      closeAvailable
      dialogState={dialogState}
    />
  );
};

export default VideoWindow;
