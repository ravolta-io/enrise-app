interface BaseHeadingProps {
  children: React.ReactNode;
  className?: string;
}

interface Heading1Props extends BaseHeadingProps {}
interface Heading2Props extends BaseHeadingProps {}
interface Heading3Props extends BaseHeadingProps {}

const Heading1: React.FC<Heading1Props> = ({ children, className }) => {
  return (
    <h1 className={`text-4xl font-bold text-gray-900 ${className}`}>
      {children}
    </h1>
  );
};

const Heading2: React.FC<Heading2Props> = ({ children, className }) => {
  return (
    <h2 className={`text-3xl font-bold text-gray-900 ${className}`}>
      {children}
    </h2>
  );
};

const Heading3: React.FC<Heading3Props> = ({ children, className }) => {
  return (
    <h3 className={`text-2xl font-bold text-gray-900 ${className}`}>
      {children}
    </h3>
  );
};

export { Heading1, Heading2, Heading3 };
