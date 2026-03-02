import path from "node:path";
import fs from "node:fs";
import { remark } from "remark";
import html from "remark-html";
import frontMatter from "remark-frontmatter";
import yaml from "js-yaml";

const MAX_LANDING_BLOGS = 6;

export type MarkdownHeader = {
  title: string;
  description?: string;
  thumbnail: string;
  ctime?: any;
}

export type BlogBySlugResponse = {
  slug: string;
  contentHtml: string;
  header: MarkdownHeader;
}

export async function getBlogBySlug(
  slug: string
): Promise<BlogBySlugResponse> {
  const fullPath = path.join(process.cwd() + '/data/blogs', `${slug}.md`)
  const fileContents = await fs.promises.readFile(fullPath, 'utf8')

  let header: MarkdownHeader = {
    title: '',
    thumbnail: '',
  }

  const processedContent = await remark()
    .use(html)
    .use(frontMatter)
    .use(function() {
      return function(tree: any) {
        header = yaml.load(tree.children[0].value) as MarkdownHeader
      }
    })
    .process(fileContents)

  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    header
  }
}

export type BlogListResponse = Array<{
  slug: string
  header: MarkdownHeader
}>

export async function getBlogList(): Promise<BlogListResponse> {
  const blogs: BlogListResponse = []
  const fullPathDirectory = path.join(process.cwd() + '/data/blogs')
  const fileNames = await fs.promises.readdir(fullPathDirectory)

  for (let file of fileNames) {
    const content = await fs.promises.readFile(`${fullPathDirectory}/${file}`, 'utf8')
    let header: MarkdownHeader = {
      title: '',
      thumbnail: '',
    }

    await remark()
      .use(frontMatter)
      .use(function() {
        return function(tree: any) {
          header = yaml.load(tree.children[0].value) as MarkdownHeader
        }
      })
      .process(content)

    const stats = await fs.promises.stat(`${fullPathDirectory}/${file}`)
    header.ctime = stats.ctime

    blogs.push({
      slug: file.replace('.md', ''),
      header
    })
  }

  return blogs.sort((a, b) => b.header.ctime - a.header.ctime)
}

export async function getBlogListLanding(): Promise<BlogListResponse> {
  const blogs: BlogListResponse = []
  const fullPathDirectory = path.join(process.cwd() + '/data/blogs')
  const files = await fs.promises.readdir(fullPathDirectory);

  files
    .map(fileName => ({
      name: fileName,
      time: fs.statSync(`${fullPathDirectory}/${fileName}`).ctime.getTime(),
    }))
    .sort((a, b) => a.time - b.time)
    .map(file => file.name);

  let index = 0
  for (let file of files) {
    if (index >= MAX_LANDING_BLOGS) {
      break
    }

    index++;

    const content = await fs.promises.readFile(`${fullPathDirectory}/${file}`, 'utf8')
    let header: MarkdownHeader = {
      title: '',
      thumbnail: '',
    }

    await remark()
      .use(frontMatter)
      .use(function() {
        return function(tree: any) {
          header = yaml.load(tree.children[0].value) as MarkdownHeader
        }
      })
      .process(content)

    const stats = await fs.promises.stat(`${fullPathDirectory}/${file}`)
    header.ctime = stats.ctime

    blogs.push({
      slug: file.replace('.md', ''),
      header
    })
  }

  return blogs
}
