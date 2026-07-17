import { Fragment, useState } from "react";
import type { NewsItem } from "../types/site";

interface NewsSectionProps {
  items: NewsItem[];
}

const defaultVisibleCount = 5;

function PaperTitle({ title }: { title: string }) {
  const colonIndex = title.indexOf(":");
  const firstSpaceIndex = title.indexOf(" ");
  const abbreviationEnd = colonIndex >= 0 ? colonIndex : firstSpaceIndex;

  if (abbreviationEnd < 0) {
    return (
      <cite className="news-paper-title">
        <strong className="news-paper-abbreviation">{title}</strong>
      </cite>
    );
  }

  return (
    <cite className="news-paper-title">
      <strong className="news-paper-abbreviation">{title.slice(0, abbreviationEnd)}</strong>
      {title.slice(abbreviationEnd)}
    </cite>
  );
}

function PaperTitles({ titles }: { titles: string[] }) {
  return titles.map((title, index) => (
    <Fragment key={title}>
      {index > 0 ? (index === titles.length - 1 ? " and " : ", ") : null}
      <PaperTitle title={title} />
    </Fragment>
  ));
}

function NewsContent({ item }: { item: NewsItem }) {
  if (!item.paperNames) {
    return <>{item.text}</>;
  }

  return (
    <>
      <PaperTitles titles={item.paperNames} /> <span className="news-action">{item.action}</span>{" "}
      <strong className="news-venue">{item.venue}</strong>
      {item.note ? <span className="news-note"> {item.note}</span> : null}.
    </>
  );
}

export function NewsSection({ items }: NewsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, defaultVisibleCount);
  const canToggle = items.length > defaultVisibleCount;

  if (items.length === 0) {
    return null;
  }

  return (
    <section id="news" className="content-section section-anchor">
      <div className="section-heading-row">
        <h2>News</h2>
        {canToggle ? (
          <button
            className="text-button news-toggle"
            type="button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
          >
            {showAll ? "Show less" : `View all (${items.length})`}
          </button>
        ) : null}
      </div>

      <ul className="news-list">
        {visibleItems.map((item, index) => (
          <li className={item.featured ? "featured-news" : undefined} key={`${item.date}-${index}`}>
            <time>{item.date}</time>
            <span className="news-entry">
              <NewsContent item={item} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
