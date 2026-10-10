import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Kitchen Krisp — The everyday pantry", description: "Premixes and ready-to-eat food. Shop cookies, cakes, breakfast mixes and baked treats from Kitchen Krisp, with cash on delivery." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
