import { Fragment, type CSSProperties } from "react";
import { resolveUrl } from "../lib/asset";
import type {
  Publication,
  PublicationMedia,
  PublicationResourceLabel,
} from "../types/site";
import { ExternalLink } from "./ExternalLink";

interface PublicationsSectionProps {
  items: Publication[];
  highlightedAuthor: string;
  mode?: "selected" | "all";
  scholarUrl?: string;
}

const primaryLinkOrder: Record<PublicationResourceLabel, number> = {
  Project: 0,
  Paper: 1,
  Code: 2,
  Data: 3,
  Model: 4,
};

function orderedPublicationLinks(links: Publication["links"]) {
  return links
    .map((link, index) => ({ link, index }))
    .sort((left, right) => {
      const leftPriority = primaryLinkOrder[left.link.label];
      const rightPriority = primaryLinkOrder[right.link.label];

      return leftPriority - rightPriority || left.index - right.index;
    })
    .map(({ link }) => link);
}

function mediaPresentation(media: PublicationMedia): {
  className: string;
  style: CSSProperties;
} {
  const fit = media.fit ?? (media.type === "video" ? "cover" : "contain");

  return {
    className: `paper-media paper-media--${fit}`,
    style: {
      objectFit: fit,
      objectPosition: media.position ?? "center",
      transform: media.scale && media.scale !== 1 ? `scale(${media.scale})` : undefined,
    },
  };
}

function PublicationPreview({ publication }: { publication: Publication }) {
  if (!publication.media) {
    return (
      <div
        className="paper-placeholder"
        aria-label={`${publication.title} preview status`}
      >
        <span className="paper-placeholder-year">{publication.year}</span>
        <small>{publication.mediaStatus ?? "Preview forthcoming"}</small>
      </div>
    );
  }

  const presentation = mediaPresentation(publication.media);

  if (publication.media.type === "video") {
    return (
      <video
        className={presentation.className}
        style={presentation.style}
        src={resolveUrl(publication.media.src)}
        aria-label={publication.media.alt}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <img
      className={presentation.className}
      style={presentation.style}
      src={resolveUrl(publication.media.src)}
      alt={publication.media.alt}
      loading="lazy"
    />
  );
}

function PublicationAward({ award }: { award: string }) {
  const isHighlight = award.toLowerCase().includes("highlight");
  const kind = isHighlight ? "highlight" : "esi";
  const icon = isHighlight ? "★" : "↗";

  return (
    <span className={`paper-award-badge paper-award-badge--${kind}`}>
      <span className="paper-award-icon" aria-hidden="true">
        {icon}
      </span>
      <span>{award}</span>
    </span>
  );
}

function AuthorList({ authors, highlightedAuthor }: { authors: string[]; highlightedAuthor: string }) {
  return (
    <p className="paper-authors">
      {authors.map((author, index) => (
        <Fragment key={`${author}-${index}`}>
          {author.replace(/[\s*†‡]+$/u, "") === highlightedAuthor ? (
            <strong>{author}</strong>
          ) : (
            author
          )}
          {index < authors.length - 1 ? ", " : "."}
        </Fragment>
      ))}
    </p>
  );
}

function PublicationEntry({
  publication,
  highlightedAuthor,
}: {
  publication: Publication;
  highlightedAuthor: string;
}) {
  return (
    <article className="publication">
      <div className="paper-preview">
        <span className="paper-venue-badge">{publication.venueShort}</span>
        {publication.award ? <PublicationAward award={publication.award} /> : null}
        <PublicationPreview publication={publication} />
      </div>

      <div className="paper-content">
        <h3>{publication.title}</h3>
        <AuthorList authors={publication.authors} highlightedAuthor={highlightedAuthor} />
        <p className="paper-venue">
          {publication.venue} (<strong>{publication.venueShort}</strong>), {publication.year}.
          {publication.award ? <em> {publication.award}</em> : null}
        </p>
        {publication.links.length > 0 ? (
          <div className="paper-links" aria-label={`${publication.title} links`}>
            {orderedPublicationLinks(publication.links).map((link) => (
              <ExternalLink key={link.label} href={link.url}>
                [{link.label}]
              </ExternalLink>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function PublicationsSection({
  items,
  highlightedAuthor,
  mode = "all",
  scholarUrl,
}: PublicationsSectionProps) {
  const visibleItems = mode === "selected" ? items.filter((item) => item.selected) : items;
  const showAllPublications = mode === "selected" && items.some((item) => !item.selected);
  const preprints = visibleItems.filter((item) => item.publicationType === "preprint");
  const publications = visibleItems.filter((item) => item.publicationType !== "preprint");
  const groups =
    mode === "all" && preprints.length > 0
      ? [
          { title: "Preprints", items: preprints },
          { title: "Peer-reviewed Publications", items: publications },
        ]
      : [{ title: "", items: visibleItems }];
  const authorNotes = Array.from(
    new Set(visibleItems.flatMap((item) => (item.authorNote ? [item.authorNote] : []))),
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <section id="publications" className="content-section section-anchor">
      <div className="section-heading-row">
        <div>
          <h2>{mode === "selected" ? "Selected Publications" : "Publications"}</h2>
          {authorNotes.length > 0 ? (
            <p className="publication-legend">{authorNotes.join(" · ")}</p>
          ) : null}
        </div>

        {scholarUrl || showAllPublications ? (
          <div className="section-actions">
            {scholarUrl ? (
              <ExternalLink className="filter-button" href={scholarUrl}>
                Google Scholar
              </ExternalLink>
            ) : null}
            {showAllPublications ? (
              <a className="filter-button" href="#/publications">
                View all publications
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="publication-groups">
        {groups.map((group) => (
          <div className="publication-group" key={group.title || "selected"}>
            {group.title ? <h3 className="publication-group-title">{group.title}</h3> : null}
            <div className="publication-list">
              {group.items.map((publication) => (
                <PublicationEntry
                  publication={publication}
                  highlightedAuthor={highlightedAuthor}
                  key={`${publication.year}-${publication.title}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
