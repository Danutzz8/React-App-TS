import React from "react";
import "./text.scss"

type TextProps = {
  children: string;
  truncateLength?: number;
} & React.ComponentPropsWithoutRef<"div">;

type NoTruncateTextProps = TextProps & { truncate?: false };
type TruncateTextProps = TextProps & { truncate: true; expanded?: boolean ; truncateLength?: number };

const exampleText =
  "When I was born, the name for what I was did not exist. They called me nymph, assuming I would be like my mother and aunts and thousand cousins. Least of the lesser goddesses, our powers were so modest they could scarcely ensure our eternities. We spoke to fish and nurtured flowers, coaxed drops from the clouds or salt from the waves. That word, nymph, paced out the length and breadth of our futures.";

const truncateString = (string: string, length = 100) =>
  string.slice(0, length) + "…";

function TextTruncate(props: NoTruncateTextProps): React.JSX.Element;
function TextTruncate(props: TruncateTextProps): React.JSX.Element;
function TextTruncate(props: TextProps & { truncate?: boolean; expanded?: boolean }) {
  const { children, truncate, expanded, truncateLength = 100, ...otherProps } = props;
  const shouldTruncate = truncate && !expanded;
  return (
    <div aria-expanded={!!expanded} {...otherProps}>
      {shouldTruncate ? truncateString(children, truncateLength) : children}
    </div>
  );
}

export default TextTruncate;