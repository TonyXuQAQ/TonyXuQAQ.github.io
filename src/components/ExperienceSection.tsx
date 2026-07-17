import { Fragment } from "react";
import type { TimelineItem } from "../types/site";
import { ExternalLink } from "./ExternalLink";

interface ExperienceSectionProps {
  education: TimelineItem[];
  experience: TimelineItem[];
}

function TimelineGroup({ title, items }: { title: string; items: TimelineItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="timeline-group">
      <h3>{title}</h3>
      <div className="timeline-list">
        {items.map((item) => (
          <article className="timeline-item" key={`${item.organization}-${item.period}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div>
              <div className="timeline-heading">
                <h4>
                  {item.organizationUrl ? (
                    <ExternalLink href={item.organizationUrl}>
                      {item.organization}
                    </ExternalLink>
                  ) : (
                    item.organization
                  )}
                </h4>
                <span>{item.period}</span>
              </div>
              <p className="timeline-role">{item.role}</p>
              {item.location ? <p className="timeline-meta">{item.location}</p> : null}
              {item.advisors && item.advisors.length > 0 ? (
                <p className="timeline-advisors">
                  <strong>Advisors:</strong>{" "}
                  {item.advisors.map((advisor, index) => (
                    <Fragment key={advisor.url}>
                      <ExternalLink href={advisor.url}>{advisor.label}</ExternalLink>
                      {index < item.advisors!.length - 1 ? ", " : ""}
                    </Fragment>
                  ))}
                </p>
              ) : null}
              {item.topics && item.topics.length > 0 ? (
                <p className="timeline-topics">
                  <strong>Research:</strong> {item.topics.join(", ")}.
                </p>
              ) : null}
              {item.description ? <p className="timeline-description">{item.description}</p> : null}
              {item.note ? <p className="timeline-note">{item.note}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection({ education, experience }: ExperienceSectionProps) {
  if (education.length === 0 && experience.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="content-section section-anchor">
      <h2>Education & Experience</h2>
      <div className="timeline-columns">
        <TimelineGroup title="Education" items={education} />
        <TimelineGroup title="Experience" items={experience} />
      </div>
    </section>
  );
}
