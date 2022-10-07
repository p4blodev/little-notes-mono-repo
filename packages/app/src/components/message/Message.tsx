import './Message.css';

export default function Message({ children }: { children: React.ReactNode }) {
  return <div className="message-error">{children}</div>;
}
