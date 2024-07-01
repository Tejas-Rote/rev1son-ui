export interface AlertTitleProps {
  children: React.ReactNode;
  className?: string;
}
const AlertTitle = ({ children }: AlertTitleProps) => {
  return <div className="text-base font-semibold">{children}</div>;
};

export default AlertTitle;
