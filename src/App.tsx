import { Button } from "rev1son-ui";
import AlertExample from "./examples/AlertExample";

import {
  Alert,
  AlertIcon,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "rev1son-ui";
import { FaBug } from "react-icons/fa";

function App() {
  return (
    <>
      <div>
        <Button>Test</Button>
        {/* <AlertExample /> */}
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
    </>
  );
}

export default App;
