interface Props {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2" style={{ color: 'var(--color-text)' }}>{title}</h2>
      {subtitle && <p style={{ color: 'var(--color-text-secondary)' }} className="max-w-2xl">{subtitle}</p>}
    </div>
  );
}
