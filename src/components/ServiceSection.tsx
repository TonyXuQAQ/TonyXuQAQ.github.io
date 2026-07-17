import type { ServiceGroup } from "../types/site";

interface ServiceSectionProps {
  groups: ServiceGroup[];
}

export function ServiceSection({ groups }: ServiceSectionProps) {
  if (groups.length === 0) {
    return null;
  }

  return (
    <section id="service" className="content-section section-anchor">
      <h2>Academic Service</h2>
      <div className="service-grid">
        {groups.map((group) => (
          <article className="service-card" key={group.title}>
            <h3>{group.title}</h3>
            {group.items && group.items.length > 0 ? (
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {group.compactLists?.map((list) => (
              <div className="service-compact-list" key={list.label}>
                <h4>{list.label}</h4>
                <p>{list.items.join(" · ")}</p>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
