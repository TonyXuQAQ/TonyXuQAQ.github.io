import { ExperienceSection } from "../components/ExperienceSection";
import { siteConfig } from "../content/site";

export function ExperiencePage() {
  return (
    <div className="standalone-page">
      <ExperienceSection
        education={siteConfig.education}
        experience={siteConfig.experience}
      />
    </div>
  );
}
