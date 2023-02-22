interface BaseTextProps {
  children: React.ReactNode;
  className?: string;
}

interface TextProps extends BaseTextProps {}
interface TextSmallProps extends BaseTextProps {}
interface TextLargeProps extends BaseTextProps {}

interface BlockQuoteProps {
  quote: string;
  author: string;
  wrapperClass?: string;
  quoteClass?: string;
  quotationClass?: string;
  footerClass?: string;
  citeClass?: string;
}

const Paragraph: React.FC<TextProps> = ({ children, className }) => {
  return <p className={`text-gray-900 ${className}`}>{children}</p>;
};

const ParagraphSmall: React.FC<TextSmallProps> = ({ children, className }) => {
  return <p className={`text-sm text-gray-900 ${className}`}>{children}</p>;
};

const ParagraphLarge: React.FC<TextLargeProps> = ({ children, className }) => {
  return <p className={`text-lg text-gray-900 ${className}`}>{children}</p>;
};

const BlockQuote: React.FC<BlockQuoteProps> = ({
  wrapperClass = "",
  quoteClass = "",
  quotationClass = "",
  footerClass = "",
  citeClass = "",
  quote,
  author,
}) => {
  return (
    <blockquote className={`relative ${wrapperClass}`}>
      <span className={`text-8xl absolute -top-2 -left-12 ${quotationClass}`}>
        &quot;
      </span>
      <span className={`text-4xl ${quoteClass}`}>{quote}</span>
      <span className={`text-8xl absolute -top-2 -right-12 ${quotationClass}`}>
        &quot;
      </span>
      <footer className={`mt-8 text-center ${footerClass}`}>
        <cite className={citeClass}>{author}</cite>
      </footer>
    </blockquote>
  );
};

export { Paragraph, ParagraphSmall, ParagraphLarge, BlockQuote };
