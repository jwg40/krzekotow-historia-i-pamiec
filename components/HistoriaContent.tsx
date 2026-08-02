import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

export default function HistoriaContent({ content }: Props) {
  return (
    <article>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </article>
  );
}