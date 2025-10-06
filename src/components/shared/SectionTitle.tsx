interface IProps {
  header: string;
  title: string;
  summary: string;
}

export default function SectionTitle({ header, title, summary }: IProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="mb-4 flex items-center gap-3">
        <div className="from-primary to-primary/60 h-1 w-12 rounded-full bg-gradient-to-r" />
        <span className="text-primary text-sm font-medium tracking-wider uppercase">{header}</span>
      </div>
      <h1 className="from-foreground via-foreground/90 to-foreground/60 mb-4 bg-gradient-to-r bg-clip-text text-4xl leading-tight font-bold text-transparent 2xl:text-6xl">
        {title}
      </h1>
      <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">{summary}</p>
    </div>
  );
}
