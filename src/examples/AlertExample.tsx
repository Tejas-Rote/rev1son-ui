import "./AlertExample.css";
import { FaBug } from "react-icons/fa";
import Alert from "../components/Alert/Alert";
import AlertIcon from "../components/Alert/AlertIcon";
import AlertContent from "../components/Alert/AlertContent";
import AlertTitle from "../components/Alert/AlertTitle";
import AlertDescription from "../components/Alert/AlertDescription";
const AlertExample = () => {
  return (
    <div className="alert-example">
      <Alert type="info">
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
