import type { AwardItem } from "../types/site";

interface AwardsSectionProps {
  items: AwardItem[];
}

export function AwardsSection({ items }: AwardsSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section id="awards" className="content-section section-anchor">
      <h2>Awards & Honors</h2>
      <div className="award-list">
        {items.map((item) => (
          <article className="award-item" key={`${item.period}-${item.title}`}>
            <span>{item.period}</span>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
