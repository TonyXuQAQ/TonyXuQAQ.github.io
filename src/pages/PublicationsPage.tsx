import { PublicationsSection } from "../components/PublicationsSection";
import { siteConfig } from "../content/site";

export function PublicationsPage() {
  const scholarUrl = siteConfig.profile.links.find(
    (link) => link.label === "Google Scholar",
  )?.url;

  return (
    <div className="standalone-page">
      <PublicationsSection
        items={siteConfig.publications}
        highlightedAuthor={siteConfig.profile.name}
        mode="all"
        scholarUrl={scholarUrl}
      />
    </div>
  );
}
