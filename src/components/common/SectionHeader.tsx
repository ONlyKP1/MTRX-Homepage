interface SectionHeaderProps {
  tag?: string;
  heading: string;
  body?: string;
  dark?: boolean;
  center?: boolean;
}

export function SectionHeader({ tag, heading, body, dark = false, center = true }: SectionHeaderProps) {
  return (
    <div className={`section-header ${dark ? 'section-header-dark' : ''} ${center ? 'section-header-center' : ''}`}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2>{heading}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}
