import rss from '@astrojs/rss';
import { SITE } from '@/config';
import { getNotes } from '@/lib/content';

export async function GET(context) {
  const notes = await getNotes();
  return rss({
    title: `${SITE.name} · 研究笔记`,
    description: SITE.description,
    site: context.site,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.date,
      link: `/notes/${note.id}/`,
      categories: note.data.tags,
    })),
    customData: `<language>zh-cn</language>`,
  });
}
