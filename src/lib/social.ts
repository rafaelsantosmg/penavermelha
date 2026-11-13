export type SocialId = "instagram" | "facebook" | "youtube";

export type SocialLink = {
  id: SocialId;
  label: string;
  href: string;
};

export function getSocialLinks(): SocialLink[] {
  return [
    {
      id: "instagram",
      label: "Instagram",
      href:
        process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ||
        "https://www.instagram.com/",
    },
    {
      id: "facebook",
      label: "Facebook",
      href:
        process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim() ||
        "https://www.facebook.com/",
    },
    {
      id: "youtube",
      label: "YouTube",
      href:
        process.env.NEXT_PUBLIC_YOUTUBE_URL?.trim() ||
        "https://www.youtube.com/",
    },
  ];
}
