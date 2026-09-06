import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-background/95 backdrop-blur-md">
      <div className="section-shell flex min-h-16 items-center justify-between gap-6">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
          aria-label="Sun Savera Wellness — Home"
        >
          <span className="grid size-9 place-items-center rounded-sm bg-primary font-display text-sm font-bold text-primary-foreground">
            SS
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg">Sun Savera</span>
            <span className="mt-1 block font-mono text-[0.55rem] uppercase tracking-[0.23em] text-muted-foreground">
              Wellness Pvt Ltd
            </span>
          </span>
        </Link>
        <nav
          className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors hover:text-foreground ${active ? "font-semibold text-foreground" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-saffron-deep sm:inline-flex"
          >
            Enquire Now
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-md border hairline lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <nav className="section-shell border-t hairline py-3" aria-label="Mobile navigation">
            <div className="grid gap-1 text-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-md px-3 py-2 transition-colors hover:bg-secondary hover:text-foreground ${
                    pathname === link.to
                      ? "bg-secondary font-semibold text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-full bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground sm:hidden"
              >
                Enquire Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-sm bg-primary-foreground font-display text-sm font-bold text-primary">
              SS
            </span>
            <p className="font-display text-lg leading-tight">{BUSINESS.name}</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
            Natural, household and food products for quality-conscious everyday living.
          </p>
        </div>
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary-foreground/45">
            Quick Links
          </p>
          <div className="mt-4 grid gap-2 text-sm text-primary-foreground/75">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="w-fit hover:text-accent">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary-foreground/45">
            Contact
          </p>
          <div className="mt-4 grid gap-2 text-sm text-primary-foreground/75">
            <a href={BUSINESS.phoneHref} className="w-fit hover:text-accent">
              {BUSINESS.phoneDisplay}
            </a>
            <a href={BUSINESS.emailHref} className="break-all hover:text-accent">
              {BUSINESS.email}
            </a>
          </div>
        </div>
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary-foreground/45">
            Registered Business
          </p>
          <div className="mt-4 grid gap-2 text-sm text-primary-foreground/75">
            <span>GSTIN {BUSINESS.gstin}</span>
            <span>Udyam {BUSINESS.udyam}</span>
          </div>
        </div>
      </div>
      <div className="section-shell border-t border-primary-foreground/15 py-5 text-xs text-primary-foreground/45">
        {BUSINESS.copyright}
      </div>
    </footer>
  );
}
