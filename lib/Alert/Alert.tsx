export interface AlertProps {
  children: React.ReactNode;
  type?: "success" | "error" | "info" | "warning";
  className?: string;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="flex items-center justify-center bg-[var(--background-color)] gap-5 p-4 border border-[var(--primary-border)] rounded-lg shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] text-sm transition-all hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
      {children}
    </div>
  );
};

export default Alert;
