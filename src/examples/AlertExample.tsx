import "./AlertExample.css";
import {
  Alert,
  AlertIcon,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "rev1son-ui";
import { FaBug } from "react-icons/fa";
const AlertExample = () => {
  return (
    <div className="alert-example">
      <Alert>
        <AlertIcon>
          <FaBug />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Hey!</AlertTitle>
          <AlertDescription>
            You can add components to your app by downloading the file.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  );
};

export default AlertExample;
