import { ServiceSection } from "../components/ServiceSection";
import { siteConfig } from "../content/site";

export function ServicePage() {
  return (
    <div className="standalone-page">
      <ServiceSection groups={siteConfig.service} />
    </div>
  );
}
