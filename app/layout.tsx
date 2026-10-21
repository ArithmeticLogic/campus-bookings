import "./globals.css";
import NavLinks from "@/app/_components/nav-links";
import type { Metadata } from "next";
import ThemeToggle from "./_components/theme-toggle";

export const metadata: Metadata = {
  title: {
    template: "%s · Campus Bookings",
    default: "Campus Bookings",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="text-black dark:text-white bg-white dark:bg-black">
        <nav
          className="flex items-center justify-evenly p-4 bg-violet-400 dark:bg-violet-950 text-black dark:text-white"
          aria-label="Main"
        >
          <NavLinks />
        </nav>

        <main className="max-w-5xl mx-auto p-6 wrapper on">{children}</main>

        <footer className="flex items-center p-4 bg-violet-400 dark:bg-violet-950 text-black dark:text-white">
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </footer>
      </body>
    </html>
  );
}
