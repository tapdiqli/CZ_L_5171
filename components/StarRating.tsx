function Star({ fill }: { fill: number }) {
  const id = `s-${Math.random().toString(36).slice(2)}`;
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fill * 100}%`} stopColor="#f2845b" />
          <stop offset={`${fill * 100}%`} stopColor="#3d2f52" />
        </linearGradient>
      </defs>
      <path
        d="M12 2l2.4 5.9L20.8 9l-4.7 4.1L17.6 20 12 16.6 6.4 20l1.5-6.9L3.2 9l6.4-1.1L12 2z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}

export function StarRating({
  stars,
  className = "",
}: {
  stars: number;
  className?: string;
}) {
  const items = [0, 1, 2, 3, 4].map((i) => {
    const diff = stars - i;
    const fill = diff >= 1 ? 1 : diff >= 0.5 ? 0.5 : 0;
    return <Star key={i} fill={fill} />;
  });

  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      aria-label={`${stars} de 5 estrelas`}
    >
      {items}
    </div>
  );
}
