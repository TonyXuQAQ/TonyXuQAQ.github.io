import type { NavigationItem, PageId } from "../types/site";

interface SiteHeaderProps {
  name: string;
  navigation: NavigationItem[];
  currentPage: PageId;
}

export function SiteHeader({ name, navigation, currentPage }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#/home">
          {name}
        </a>

        <ul className="nav-links">
          {navigation.map((item) => (
            <li key={item.page}>
              <a
                className={currentPage === item.page ? "is-active" : undefined}
                href={`#/${item.page}`}
                aria-current={currentPage === item.page ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
