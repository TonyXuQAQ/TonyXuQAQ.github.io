import { AwardsSection } from "../components/AwardsSection";
import { siteConfig } from "../content/site";

export function AwardsPage() {
  return (
    <div className="standalone-page">
      <AwardsSection items={siteConfig.awards} />
    </div>
  );
}
