import type { Route } from "next"

export type NavItem = {
  label: string
  href: Route
}

export type ExternalLink = {
  label: string
  href: string
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
]

export const serviceNav: NavItem[] = [
  { label: "Kitchen Backsplash", href: "/kitchen-backsplashes" },
  { label: "Bathroom & Shower", href: "/bathroom-shower" },
  { label: "Floor Tile Installation", href: "/floor-tile-installation" },
  { label: "Fireplaces", href: "/fireplaces" },
  { label: "Special Projects", href: "/special-projects" },
]

export const socialLinks: ExternalLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/AestheticTileCo" },
  { label: "X", href: "https://x.com/AestheticTileCo" },
  { label: "YouTube", href: "https://www.youtube.com/@AestheticTile" },
  { label: "Instagram", href: "https://www.instagram.com/aesthetictile/" },
]

