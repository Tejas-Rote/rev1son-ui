import {
  ToastContent,
  ToastMsg,
  ToastTitle,
  Toast,
  ToastButton,
  CodeBlock,
  AlertDialogActions,
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "rev1son-ui";
import { useTheme } from "rev1son-ui";
import "./App.css";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { Button } from "rev1son-ui";
const code = `
function helloWorld() {
  console.log('Hello, world!');
}
`;

function App() {
  const { toggleTheme } = useTheme();
  // const [toastVisible, setToastVisible] = useState(false);
  // const showToast = () => {
  //   setToastVisible(true);
  // };
  // const hideToast = () => {
  //   setToastVisible(false);
  // };
  const [alertDialogVisible, setAlertDialogVisible] = useState(false);

  const handleAlertDialog = () => {
    setAlertDialogVisible(!alertDialogVisible);
  };
  return (
    <div className="app h-full min-h-dvh flex flex-col items-start justify-center p-4 bg-primary text-primary gap-5">
      <Button onClick={toggleTheme} variant="primary" className="font-mono">
        Toggle Theme
      </Button>

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
      {/* <button */}
      {/*   className="mb-4 px-4 py-2 bg-primary text-primary rounded" */}
      {/*   onClick={showToast} */}
      {/* > */}
      {/*   Show Toast */}
      {/* </button> */}
      {/* <div> */}
      {/*   <Toast */}
      {/*     duration={5000} */}
      {/*     direction="bottom" */}
      {/*     visible={toastVisible} */}
      {/*     onClose={hideToast} */}
      {/*   > */}
      {/*     <ToastContent> */}
      {/*       <ToastTitle>Email sent</ToastTitle> */}
      {/*       <ToastMsg>Would you like to see the email.</ToastMsg> */}
      {/*     </ToastContent> */}
      {/*     <ToastButton onClick={() => console.log("clicked")}> */}
      {/*       <FiExternalLink /> */}
      {/*     </ToastButton> */}
      {/*   </Toast> */}
      {/* </div> */}
      {/* <div className="p-4"> */}
      {/*   <CodeBlock */}
      {/*     code={code} */}
      {/*     language="javascript" */}
      {/*     title="Hello World Function" */}
      {/*     showCopyButton */}
      {/*   /> */}
      {/* </div> */}
    </div>
  );
}
export default App;
