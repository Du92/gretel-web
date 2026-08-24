import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeView, MonopoleView, ProjectsView, StandardView } from "../../components/PageViews";
import { Shell } from "../../components/Shell";
import { Lang, PageKey, routeIndex, routes, seo, site } from "../../../content/site";

type Params = Promise<{ lang: string; slug?: string[] }>;

export function generateStaticParams() {
  return routeIndex.map(({ lang, path }) => ({
    lang,
    slug: path.split("/").filter(Boolean).slice(1),
  }));
}

function resolveRoute(langRaw: string, slug: string[] = []) {
  const path = `/${langRaw}${slug.length ? `/${slug.join("/")}` : ""}`;
  return routeIndex.find((item) => item.path === path);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang: langRaw, slug } = await params;
  const match = resolveRoute(langRaw, slug);
  if (!match) return {};
  const { lang, key } = match;
  const alternate: Lang = lang === "es" ? "en" : "es";
  const meta = seo[lang][key];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: routes[lang][key],
      languages: { es: routes.es[key], en: routes.en[key], "x-default": routes.es[key] },
    },
    openGraph: {
      type: "website",
      locale: lang === "es" ? "es_ES" : "en_GB",
      alternateLocale: lang === "es" ? ["en_GB"] : ["es_ES"],
      title: meta.title,
      description: meta.description,
      url: routes[lang][key],
      siteName: site.name,
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: ["/og.svg"] },
    other: { "content-language-alternate": routes[alternate][key] },
  };
}

export default async function LocalisedPage({ params }: { params: Params }) {
  const { lang: langRaw, slug } = await params;
  const match = resolveRoute(langRaw, slug);
  if (!match) notFound();
  const { lang, key } = match;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    email: `mailto:${site.email}`,
    sameAs: [site.orcid],
    jobTitle: lang === "es" ? "Física, investigadora y profesora" : "Physicist, researcher and lecturer",
    knowsAbout: ["Physics", "Astrophysics", "Statistical physics", "Science communication", "Literature"],
  };
  return (
    <Shell lang={lang} pageKey={key}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {key === "home" ? <HomeView lang={lang} /> : key === "projects" ? <ProjectsView lang={lang} /> : key === "monopole" ? <MonopoleView lang={lang} /> : <StandardView lang={lang} pageKey={key as Exclude<PageKey, "home" | "projects" | "monopole">} />}
    </Shell>
  );
}
