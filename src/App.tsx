import { useEffect, useState, type CSSProperties, type MouseEvent } from "react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { siteConfig } from "./content/site";
import { ExperiencePage } from "./pages/ExperiencePage";
import { HomePage } from "./pages/HomePage";
import { PublicationsPage } from "./pages/PublicationsPage";
import { AwardsPage } from "./pages/AwardsPage";
import type { PageId } from "./types/site";

type ThemeStyle = CSSProperties & {
  "--accent": string;
};

const pageTitles: Record<PageId, string> = {
  home: "Home",
  publications: "Publications",
  experience: "Experience",
  awards: "Awards",
};

function getPageFromHash(): PageId {
  const route = window.location.hash.replace(/^#\/?/, "");
  return route in pageTitles ? (route as PageId) : "home";
}

function PageContent({ page }: { page: PageId }) {
  switch (page) {
    case "publications":
      return <PublicationsPage />;
    case "experience":
      return <ExperiencePage />;
    case "awards":
      return <AwardsPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);

  useEffect(() => {
    document.documentElement.lang = siteConfig.meta.language;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = siteConfig.meta.description;
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => setCurrentPage(getPageFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.title =
      currentPage === "home"
        ? siteConfig.meta.title
        : `${pageTitles[currentPage]} | ${siteConfig.profile.name}`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentPage]);

  const handleSkipLink = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("main-content")?.focus();
  };

  const themeStyle: ThemeStyle = {
    "--accent": siteConfig.meta.accentColor,
  };

  return (
    <div className="site" style={themeStyle}>
      <a className="skip-link" href="#main-content" onClick={handleSkipLink}>
        Skip to content
      </a>
      <SiteHeader
        name={siteConfig.profile.name}
        navigation={siteConfig.navigation}
        currentPage={currentPage}
      />

      <main id="main-content" className="container main-content" tabIndex={-1}>
        <PageContent page={currentPage} />
      </main>

      <SiteFooter
        name={siteConfig.profile.name}
        lastUpdated={siteConfig.footer.lastUpdated}
        visitorMapUrl={siteConfig.footer.visitorMapUrl}
      />
    </div>
  );
}
