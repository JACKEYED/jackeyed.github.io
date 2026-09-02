import { getCollection } from 'astro:content';

const showDrafts = import.meta.env.DEV;

export async function getProjects() {
  const items = await getCollection('projects', ({ data }) => showDrafts || !data.draft);
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedProjects() {
  return (await getProjects()).filter((p) => p.data.featured);
}

export async function getNotes() {
  const items = await getCollection('notes', ({ data }) => showDrafts || !data.draft);
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
