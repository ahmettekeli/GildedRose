import Snackbar from "@material-ui/core/Snackbar";

function Notification({
  open,
  onClose,
  message,
}: {
  open: boolean;
  onClose: () => void;
  message: string;
}) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={3000}
      message={message}
    />
  );
}

export default Notification;
