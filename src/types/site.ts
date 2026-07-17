export type PageId = "home" | "publications" | "experience" | "awards";

export interface LinkItem {
  label: string;
  url: string;
}

export interface NavigationItem {
  label: string;
  page: PageId;
}

export interface Notice {
  label: string;
  text: string;
  link?: LinkItem;
}

export interface BiographyParagraph {
  text: string;
  links?: LinkItem[];
}

export interface Profile {
  name: string;
  nativeName?: string;
  photo?: string;
  photoAlt?: string;
  photoPosition?: string;
  photoScale?: number;
  photoRotation?: number;
  position: string;
  department?: LinkItem;
  institution: LinkItem;
  address?: string[];
  email: string;
  links: LinkItem[];
  researchInterests: string[];
  biography: BiographyParagraph[];
  notice?: Notice;
}

interface NewsItemBase {
  date: string;
  featured?: boolean;
}

export type NewsItem = NewsItemBase &
  (
    | {
        text: string;
        paperNames?: never;
        action?: never;
        venue?: never;
        note?: never;
      }
    | {
        text?: never;
        paperNames: string[];
        action: string;
        venue: string;
        note?: string;
      }
  );

export interface PublicationMedia {
  type: "image" | "video";
  src: string;
  alt: string;
  fit?: "contain" | "cover";
  position?: string;
  scale?: number;
}

export type PublicationResourceLabel =
  | "Project"
  | "Paper"
  | "Code"
  | "Data"
  | "Model";

export interface PublicationResourceLink extends LinkItem {
  label: PublicationResourceLabel;
  url: `https://${string}` | `http://${string}`;
}

export interface Publication {
  title: string;
  authors: string[];
  authorNote?: string;
  publicationType?: "preprint" | "publication";
  venue: string;
  venueShort: string;
  year: number;
  media?: PublicationMedia;
  mediaStatus?: string;
  award?: string;
  links: PublicationResourceLink[];
  selected?: boolean;
}

export interface TimelineItem {
  organization: string;
  organizationUrl?: string;
  role: string;
  period: string;
  location?: string;
  advisors?: LinkItem[];
  topics?: string[];
  description?: string;
  note?: string;
}

export interface ServiceGroup {
  title: string;
  items?: string[];
  compactLists?: Array<{
    label: string;
    items: string[];
  }>;
}

export interface AwardItem {
  title: string;
  period: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  language: string;
  accentColor: string;
}

export interface SiteConfig {
  meta: SiteMeta;
  navigation: NavigationItem[];
  profile: Profile;
  news: NewsItem[];
  publications: Publication[];
  education: TimelineItem[];
  experience: TimelineItem[];
  service: ServiceGroup[];
  awards: AwardItem[];
  footer: {
    lastUpdated: string;
    visitorMapUrl?: string;
  };
}
