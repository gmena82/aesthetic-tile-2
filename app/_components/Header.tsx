"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { primaryNav, serviceNav, socialLinks } from "./navigation"
import { SOCIAL_ICON_MAP } from "./social-icons"
import { useMobileMenu } from "../_hooks/useMobileMenu"
import { useScrollShadow } from "../_hooks/useScrollShadow"

const phoneLink = {
  href: "tel:+15026507014",
  label: "(502) 650-7014",
  icon: (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.49a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
      />
    </svg>
  ),
}

const emailLink = {
  href: "mailto:office@aesthetictile.com",
  label: "office@aesthetictile.com",
  icon: (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.24l7.4 5.55a1 1 0 001.2 0L20 8.24V18H4z"
      />
    </svg>
  ),
}

export function Header() {
  const { isOpen: mobileOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu()
  const hasShadow = useScrollShadow()
  const pathname = usePathname()

  const servicePaths = serviceNav.map((service) => service.href)
  const isLinkActive = (href: string) => {
    if (!pathname) return false
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }
  const servicesActive =
    isLinkActive("/services") || (pathname ? servicePaths.some((path) => pathname.startsWith(path)) : false)
  const navButtonBase =
    "relative inline-flex items-center gap-1 rounded-lg border border-slate-700/40 bg-gradient-to-b from-white/92 via-white/86 to-white/72 px-3 py-1.5 text-sm text-slate-700 transition-[color,border-color,box-shadow] hover:text-teal-700 hover:border-teal-400 hover:shadow-[0_0_10px_rgba(20,184,166,0.3)]"
  const navButtonActive = "border-slate-800 text-teal-700"
  const dropdownLinkBase =
    "block rounded-md border border-slate-700/30 px-3 py-2 text-slate-600 transition-all hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 hover:shadow-[0_0_10px_rgba(20,184,166,0.25)]"
  const dropdownLinkActive = "border-teal-400 bg-teal-50 text-teal-700"

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${hasShadow ? "shadow-md" : "shadow-sm"}`}>
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-2 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 font-semibold text-slate-700">
            <span className="inline-flex size-2 rounded-full bg-teal-600" aria-hidden />
            <span>Groveland, FL</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-slate-600">
            {[phoneLink, emailLink].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 transition-colors hover:bg-teal-50 hover:text-teal-700"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            {socialLinks.map((link) => {
              const isX = link.label === "X"
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 transition-colors hover:bg-teal-50 hover:text-teal-700"
                >
                  {SOCIAL_ICON_MAP[link.label] ?? null}
                  <span className={isX ? "sr-only" : undefined}>{link.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:grid md:grid-cols-[minmax(250px,1fr)_auto_minmax(250px,1fr)] md:items-center md:gap-8">
          <Link
            href="/"
            className="flex items-center gap-4 md:justify-self-start"
            aria-label="Aesthetic Tile home"
          >
            <Image
              src="/images/aesthetic-tile-logo.png"
              alt="Aesthetic Tile logo"
              width={80}
              height={80}
              className="h-[5rem] w-[5rem] object-contain"
              priority
            />
            <span className="text-[1.5rem] font-semibold leading-tight text-slate-800 md:text-[1.8rem]">Aesthetic Tile</span>
          </Link>

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
            className="flex size-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:border-teal-500 hover:text-teal-600 md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>

          <div className="hidden md:flex justify-center">
            <nav aria-label="Primary" className="flex items-center gap-6 text-sm font-medium text-slate-700">
              {primaryNav.map((item) => {
                if (item.label !== "Services") {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                    className={`${navButtonBase} ${isLinkActive(item.href) ? navButtonActive : ""}`}
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={`${navButtonBase} ${servicesActive ? navButtonActive : ""}`}
                    >
                      {item.label}
                      <svg className="size-3" viewBox="0 0 20 20" aria-hidden>
                        <path
                          fill="currentColor"
                          d="M7.293 7.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                        />
                      </svg>
                    </Link>
                    <span aria-hidden className="absolute left-0 right-0 top-full h-3" />
                    <div 
                      className="pointer-events-none absolute left-1/2 top-full hidden min-w-[16rem] -translate-x-1/2 translate-y-2 rounded-xl border border-slate-200 bg-white p-3 shadow-xl transition duration-150 group-hover:block group-hover:pointer-events-auto group-focus-within:block group-focus-within:pointer-events-auto"
                      onMouseLeave={(e) => {
                        // Force the group to lose hover state by triggering a blur
                        const parent = e.currentTarget.parentElement
                        if (parent) {
                          parent.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }))
                        }
                      }}
                    >
                      <ul className="space-y-1 text-sm">
                        {serviceNav.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              className={`${dropdownLinkBase} ${
                                pathname && pathname.startsWith(service.href) ? dropdownLinkActive : ""
                              }`}
                              onClick={(e) => {
                                // Close dropdown when link is clicked
                                const dropdown = e.currentTarget.closest('.group')
                                if (dropdown) {
                                  dropdown.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }))
                                }
                              }}
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </nav>
          </div>
          <div className="hidden md:flex justify-end">
            <Link
              href="/contact"
              className="relative rounded-full border-2 border-teal-400/60 bg-gradient-to-b from-white/90 via-white/80 to-white/60 px-7 py-3.5 text-base font-semibold text-teal-600 shadow-lg shadow-teal-400/20 backdrop-blur-sm transition-all before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/40 before:to-transparent before:opacity-50 hover:scale-105 hover:border-teal-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] hover:shadow-lg"
            >
              <span className="relative z-10">Request a Quote</span>
            </Link>
          </div>
        </div>

        <div
          className={`md:hidden ${mobileOpen ? "block" : "hidden"}`}
        >
          <div className="space-y-6 border-t border-slate-200 bg-white px-6 py-6 text-sm text-slate-700">
            <nav aria-label="Mobile primary" className="space-y-4">
              {primaryNav.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg border border-slate-700/40 px-3 py-1.5 text-base font-semibold transition-[color,border-color,box-shadow] ${
                      isLinkActive(item.href)
                        ? "border-slate-800 text-teal-700"
                        : "text-slate-800 hover:text-teal-700 hover:border-teal-400 hover:shadow-[0_0_10px_rgba(20,184,166,0.25)]"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                  {item.label === "Services" && (
                    <ul className="mt-2 space-y-2 pl-4 text-sm">
                      {serviceNav.map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            className={`block rounded-lg border border-slate-700/30 px-2 py-1 text-slate-600 transition-[color,border-color,box-shadow] hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 hover:shadow-[0_0_10px_rgba(20,184,166,0.2)] ${
                              pathname && pathname.startsWith(service.href) ? "border-teal-300 bg-teal-50 text-teal-700" : ""
                            }`}
                            onClick={closeMobileMenu}
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="relative flex w-full items-center justify-center rounded-full border-2 border-teal-400/60 bg-gradient-to-b from-white/90 via-white/80 to-white/60 px-7 py-3.5 text-base font-semibold text-teal-600 shadow-lg shadow-teal-400/20 backdrop-blur-sm transition-all before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/40 before:to-transparent before:opacity-50 hover:scale-105 hover:border-teal-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] hover:shadow-lg"
                onClick={closeMobileMenu}
              >
                <span className="relative z-10">Request a Quote</span>
              </Link>
              <div className="space-y-2 text-sm text-slate-600">
                <a href={phoneLink.href} className="block hover:text-teal-700">
                  {phoneLink.label}
                </a>
                <a href={emailLink.href} className="block hover:text-teal-700">
                  {emailLink.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

