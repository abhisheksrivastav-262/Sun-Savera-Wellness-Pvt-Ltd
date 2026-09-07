import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Clock, Mail, Menu, Phone, X } from "lucide-react";
import { BUSINESS, NAV_LINKS, PRODUCTS } from "@/lib/site";

export function TopContactBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="section-shell flex min-h-9 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1.5 text-xs">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-1.5 hover:text-accent"
          >
            <Phone className="size-3" /> {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.emailHref}
            className="inline-flex items-center gap-1.5 hover:text-accent"
          >
            <Mail className="size-3" /> <span className="break-all">{BUSINESS.email}</span>
          </a>
        </div>
        <p className="hidden items-center gap-1.5 text-primary-foreground/60 sm:inline-flex">
          <Clock className="size-3" /> Mon - Sat | Business Enquiries
        </p>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopContactBar />
      <header
        className={`sticky top-0 z-50 border-b hairline bg-background/95 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
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
              Request a Quote
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
                  Request a Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div
        className="h-1 bg-gradient-to-r from-saffron-deep via-accent to-forest"
        aria-hidden="true"
      />
      <div className="section-shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-sm bg-primary-foreground font-display text-sm font-bold text-primary">
              SS
            </span>
            <p className="font-display text-lg leading-tight">{BUSINESS.name}</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
            Carefully selected household and food products with a focus on quality, everyday utility
            and dependable customer service.
          </p>
        </div>
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary-foreground/45">
            Company
          </p>
          <div className="mt-4 grid gap-2 text-sm text-primary-foreground/75">
            <Link to="/about" className="w-fit hover:text-accent">
              About Us
            </Link>
            <Link to="/mission-vision" className="w-fit hover:text-accent">
              Mission & Vision
            </Link>
            <Link to="/why-choose-us" className="w-fit hover:text-accent">
              Why Choose Us
            </Link>
          </div>
        </div>
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary-foreground/45">
            Products
          </p>
          <div className="mt-4 grid gap-2 text-sm text-primary-foreground/75">
            {PRODUCTS.map((p) => (
              <Link key={p.slug} to="/products" className="w-fit hover:text-accent">
                {p.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary-foreground/45">
            Quick Links
          </p>
          <div className="mt-4 grid gap-2 text-sm text-primary-foreground/75">
            <Link to="/" className="w-fit hover:text-accent">
              Home
            </Link>
            <Link to="/products" className="w-fit hover:text-accent">
              Products
            </Link>
            <Link to="/contact" className="w-fit hover:text-accent">
              Contact
            </Link>
            <Link to="/contact" className="w-fit hover:text-accent">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
      <div className="section-shell grid gap-2 border-t border-primary-foreground/15 py-5 text-xs text-primary-foreground/60 sm:grid-cols-2">
        <div className="grid gap-1">
          <a href={BUSINESS.phoneHref} className="w-fit hover:text-accent">
            {BUSINESS.phoneDisplay}
          </a>
          <a href={BUSINESS.emailHref} className="break-all hover:text-accent">
            {BUSINESS.email}
          </a>
        </div>
        <div className="grid gap-1 sm:text-right">
          <span>GSTIN: {BUSINESS.gstin}</span>
          <span>Udyam: {BUSINESS.udyam}</span>
          <span className="font-semibold text-accent">Turnover: {BUSINESS.turnover}</span>
        </div>
      </div>
      <div className="section-shell border-t border-primary-foreground/15 py-5 text-xs text-primary-foreground/45">
        {BUSINESS.copyright}
      </div>
    </footer>
  );
}
