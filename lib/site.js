export const SITE_NAME = "JavTech";
export const SITE_DESCRIPTION =
  "IT services, product engineering, cloud, and digital experiences — built with modern web technology.";

export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL || "https://javtech.example.com";
  return raw.replace(/\/$/, "");
}
