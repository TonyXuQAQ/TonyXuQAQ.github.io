import { NewsSection } from "../components/NewsSection";
import { ProfileSection } from "../components/ProfileSection";
import { PublicationsSection } from "../components/PublicationsSection";
import { siteConfig } from "../content/site";

export function HomePage() {
  const scholarUrl = siteConfig.profile.links.find(
    (link) => link.label === "Google Scholar",
  )?.url;

  return (
    <>
      <ProfileSection profile={siteConfig.profile} />
      <NewsSection items={siteConfig.news} />
      <PublicationsSection
        items={siteConfig.publications}
        highlightedAuthor={siteConfig.profile.name}
        mode="selected"
        scholarUrl={scholarUrl}
      />
    </>
  );
}
