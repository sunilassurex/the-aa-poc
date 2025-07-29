import { Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

interface RichTextProps {
  description?: Field<string>;
}

export default function RichTextWithLayout({ description }: RichTextProps) {
  return (
    <div className="row">
      <div className="wrapper">
        <RichText field={description}></RichText>
      </div>
    </div>
  );
}
