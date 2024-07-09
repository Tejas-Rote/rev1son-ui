import { Avatar, Badge, useTheme } from "rev1son-ui";
import { Button } from "rev1son-ui";
import FeaturedExample from "./examples/FeaturedExample";
import AlertDialogExample from "./examples/AlertDialogExample";
import { FaCodeBranch } from "react-icons/fa6";
import StepperExample from "./examples/StepperExample";
import AccordionExample from "./examples/AccordionExample";
function App() {
  const { toggleTheme } = useTheme();

  return (
    <div className="app h-full min-h-dvh flex flex-col items-start justify-start overflow-auto  p-4 bg-primary text-primary gap-5">
      <Button onClick={toggleTheme} variant="primary" className="font-mono">
        Toggle Theme
      </Button>
      <StepperExample />
      <AlertDialogExample />
      <FeaturedExample />
      <AccordionExample />
      <Avatar
        alt="A"
        src="https://github.com/Tejas-Rote.png"
        size="small"
        className="font-mono"
      />
      <Avatar
        alt="A"
        src="https://github.com/Tejas-Rote.png"
        size="medium"
        className="font-mono"
      />
      <Avatar
        alt="A"
        src="https://github.com/Tejas-Rote.png"
        size="large"
        className="font-mono"
      />
      <Badge variant="primary" className="font-mono" rounded="full">
        Primary
      </Badge>
      <Badge variant="secondary" className="font-mono" rounded="lg">
        Secondary
      </Badge>
      <Badge variant="outlined" className="font-mono" rounded="md">
        Outlined
      </Badge>
      <Badge variant="highlighted" className="font-mono" rounded="sm">
        Highlighted
      </Badge>
      <Badge variant="primary" className="font-mono" rounded="full">
        <FaCodeBranch />
      </Badge>
      <Badge variant="primary" className="font-mono" count={5} rounded="full">
        Cart
      </Badge>
      <Badge
        variant="primary"
        count={true}
        className="font-mono"
        rounded="none"
      >
        Notification
      </Badge>
    </div>
  );
}
export default App;
