import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import appCss from "../styles.css?url";

const APP_NAME = "Sick Cat Survival";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Symptom evaluation guides and emergency protocols for cat owners. Informational only — not a substitute for veterinary care.",
      },
      { name: "theme-color", content: "#2A5348" },
      { name: "robots", content: "index,follow" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  component: Root,
});

function Root() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
          <SiteShell>
            <Outlet />
          </SiteShell>
        <Scripts />
      </body>
    </html>
  );
}
