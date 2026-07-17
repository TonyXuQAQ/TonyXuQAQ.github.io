import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { isExternalUrl, resolveUrl } from "../lib/asset";

interface ExternalLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
}

export function ExternalLink({
  href,
  children,
  ...props
}: PropsWithChildren<ExternalLinkProps>) {
  const external = isExternalUrl(href);

  return (
    <a
      href={resolveUrl(href)}
      target={external ? "_blank" : props.target}
      rel={external ? "noreferrer" : props.rel}
      {...props}
    >
      {children}
    </a>
  );
}
