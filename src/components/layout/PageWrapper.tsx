interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center">{children}</div>
  );
};

export default PageWrapper;
