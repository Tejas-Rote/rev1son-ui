export interface AlertIconProps {
  children: React.ReactNode;
  className?: string;
}
const AlertIcon = ({ children }: AlertIconProps) => {
  return (
    <div className="flex items-center justify-center text-[var(--highlight)] text-lg">
      {children}
    </div>
  );
};

export default AlertIcon;
