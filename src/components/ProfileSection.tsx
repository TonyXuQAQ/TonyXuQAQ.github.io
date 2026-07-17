import { ExternalLink } from "./ExternalLink";
import { resolveUrl } from "../lib/asset";
import type { BiographyParagraph, Profile } from "../types/site";

interface ProfileSectionProps {
  profile: Profile;
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function BiographyText({ paragraph }: { paragraph: BiographyParagraph }) {
  if (!paragraph.links || paragraph.links.length === 0) {
    return <>{paragraph.text}</>;
  }

  const linksByLabel = new Map(paragraph.links.map((link) => [link.label, link]));
  const linkPattern = new RegExp(
    `(${paragraph.links.map((link) => escapeRegExp(link.label)).join("|")})`,
    "g",
  );

  return paragraph.text.split(linkPattern).map((part, index) => {
    const link = linksByLabel.get(part);

    return link ? (
      <ExternalLink href={link.url} key={`${part}-${index}`}>
        {part}
      </ExternalLink>
    ) : (
      part
    );
  });
}

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <section id="home" className="profile-section section-anchor">
      <div className="profile-grid">
        <div className="portrait-frame">
          {profile.photo ? (
            <img
              className="portrait-image"
              src={resolveUrl(profile.photo)}
              alt={profile.photoAlt ?? `Portrait of ${profile.name}`}
              style={{
                objectPosition: profile.photoPosition ?? "center",
                transform: `scale(${profile.photoScale ?? 1}) rotate(${profile.photoRotation ?? 0}deg)`,
              }}
            />
          ) : (
            <div className="portrait-placeholder" aria-label="Profile image placeholder">
              <span>{getInitials(profile.name)}</span>
              <small>Add profile photo</small>
            </div>
          )}
        </div>

        <div className="identity-column">
          <h1>
            {profile.name}
            {profile.nativeName ? (
              <span className="native-name">{profile.nativeName}</span>
            ) : null}
          </h1>

          <div className="contact-block">
            <p>{profile.position}</p>
            {profile.department ? (
              <p>
                <ExternalLink href={profile.department.url}>
                  {profile.department.label}
                </ExternalLink>
              </p>
            ) : null}
            <p>
              <ExternalLink href={profile.institution.url}>
                {profile.institution.label}
              </ExternalLink>
            </p>
            {profile.address?.map((line) => <p key={line}>{line}</p>)}
            <p>
              Email:{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </div>

          <div className="profile-links" aria-label="Profile links">
            {profile.links.map((link) => (
              <ExternalLink key={link.label} href={link.url}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>

        <aside className="interests-column">
          <h2>Research Interests</h2>
          <ul>
            {profile.researchInterests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="biography">
        {profile.biography.map((paragraph) => (
          <p key={paragraph.text}>
            <BiographyText paragraph={paragraph} />
          </p>
        ))}
      </div>

      {profile.notice ? (
        <div className="notice">
          <strong>{profile.notice.label}:</strong> {profile.notice.text}{" "}
          {profile.notice.link ? (
            <ExternalLink href={profile.notice.link.url}>
              {profile.notice.link.label}
            </ExternalLink>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
