import { useState } from "react";
import {
  AlertDialogActions,
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  Button,
} from "rev1son-ui";
const AlertDialogExample = () => {
  const [alertDialogVisible, setAlertDialogVisible] = useState(false);

  const handleAlertDialog = () => {
    setAlertDialogVisible(!alertDialogVisible);
  };

  return (
    <div>
      <Button
        onClick={handleAlertDialog}
        variant="primary"
        className="font-mono"
      >
        Show Alert
      </Button>

      {alertDialogVisible && (
        <AlertDialog className="font-mono">
          <AlertDialogTitle>Data Deletion Confirmation</AlertDialogTitle>
          <AlertDialogContent>
            You are about to permanently delete the selected data from our
            records. This action cannot be undone. Please confirm if you want to
            proceed with this deletion.
          </AlertDialogContent>
          <AlertDialogActions>
            <Button variant="outlined" onClick={handleAlertDialog}>
              Cancel
            </Button>
            <Button onClick={handleAlertDialog}>Continue</Button>
          </AlertDialogActions>
        </AlertDialog>
      )}
    </div>
  );
};

export default AlertDialogExample;
