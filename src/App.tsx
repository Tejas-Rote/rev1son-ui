import {
  ToastContent,
  ToastMsg,
  ToastTitle,
  Toast,
  ToastButton,
} from "rev1son-ui";
import { useTheme } from "rev1son-ui";
import "./App.css";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
function App() {
  const { toggleTheme } = useTheme();
  const [toastVisible, setToastVisible] = useState(false);
  const showToast = () => {
    setToastVisible(true);
  };
  const hideToast = () => {
    setToastVisible(false);
  };
  return (
    <div className="app h-full min-h-dvh flex flex-col items-start justify-between p-4 bg-primary text-primary gap-5">
      <button
        className="mb-4 px-4 py-2 bg-primary text-primary rounded"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      <button
        className="mb-4 px-4 py-2 bg-primary text-primary rounded"
        onClick={showToast}
      >
        Show Toast
      </button>
      <div>
        <Toast
          duration={5000}
          direction="bottom"
          visible={toastVisible}
          onClose={hideToast}
        >
          <ToastContent>
            <ToastTitle>Email sent</ToastTitle>
            <ToastMsg>Would you like to see the email.</ToastMsg>
          </ToastContent>
          <ToastButton onClick={() => console.log("clicked")}>
            <FiExternalLink />
          </ToastButton>
        </Toast>
      </div>
    </div>
  );
}

export default App;
