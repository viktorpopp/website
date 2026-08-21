import { getCollection, type CollectionEntry } from "astro:content";

const FILENAME_REGEX = /^(\d{4})-(\d{2})-(\d{2})-([a-zA-Z0-9-]+)$/;

export interface Post {
  entry: CollectionEntry<"blog">;
  year: string;
  month: string;
  day: string;
  slug: string;
  date: Date;
  url: string;
}

export function parseFilename(id: string) {
  const match = id.match(FILENAME_REGEX);
  if (!match) {
    throw new Error(
      `Blog file "${id}.mdx" does not match the required "YYYY-MM-DD-TITLE" naming pattern.`,
    );
  }
  const [, year, month, day, slug] = match;
  return { year, month, day, slug };
}

export async function getAllPosts(): Promise<Post[]> {
  const entries = await getCollection("blog");

  const posts = entries.map((entry) => {
    const { year, month, day, slug } = parseFilename(entry.id);
    return {
      entry,
      year,
      month,
      day,
      slug,
      date: new Date(`${year}-${month}-${day}T00:00:00Z`),
      url: `/blog/${year}/${month}/${day}/${slug}/`,
    };
  });

  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return posts;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function monthName(month: string): string {
  return MONTHS[parseInt(month, 10) - 1] ?? month;
}

export function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function formatFullDate(
  year: string,
  month: string,
  day: string,
): string {
  return `${ordinal(parseInt(day, 10))} ${monthName(month)} ${year}`;
}
