import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { 
    title: "Discord", 
    "og:site_name" : "Discord Gift",
    "og:title" : "Discord",
    "og:description" :  "You have been given A 3 Month Nitro",
    "og:type" : "Discord",
    itemprop: "image",
    "og:image" : "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Discord_Nitro_2560x1440_withlogo_2560x1440-944994658df3b04d0c4940be832da19e"
};
};

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "/styles.css"
    }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />  
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
