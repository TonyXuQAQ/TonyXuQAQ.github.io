interface SiteFooterProps {
  name: string;
  lastUpdated: string;
  visitorMapUrl?: string;
}

export function SiteFooter({ name, lastUpdated, visitorMapUrl }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          © {new Date().getFullYear()} {name}. Last updated {lastUpdated}.
        </p>
        {visitorMapUrl ? (
          <a href={visitorMapUrl} target="_blank" rel="noreferrer">
            Visitor map
          </a>
        ) : null}
      </div>
    </footer>
  );
}
