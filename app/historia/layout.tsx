import "./historia.css";

export default function HistoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="historia-tlo">
      {children}
    </div>
  );
}