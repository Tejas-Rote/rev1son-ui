export interface AlertContentProps {
  children: React.ReactNode;
  className?: string;
}
const AlertContent = ({ children, className }: AlertContentProps) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-1 ${className}`}
    >
      {children}
    </div>
  );
};

export default AlertContent;
