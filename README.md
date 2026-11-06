# Rick's Notes/Blog

My own custom minimal Jekyll blog for GitHub Pages.

## Publishing

1. Open `_posts` in GitHub.
2. Choose **Add file → Create new file**.
3. Name it like `2026-11-05-my-new-post.md`.
4. Add front matter:

```yaml
---
layout: post
title: "My new post"
date: 2026-11-05 09:00:00 -0500
category: personal
---
```

Write Markdown below the second `---`, and **Commit changes**.

To add a new category, make a `categories/new-category.html` page that uses `layout: category`, `category: new-category`, and `permalink: /categories/new-category/`.

The homepage and category lists automatically show 10 entries at a time. A View more entries link appears whenever there are more.

## First publish

1. Create a **public** repository called `<your-github-username>.github.io`.
2. Upload the *contents* of this folder (not the ZIP itself) to the repository root.
3. In **Settings → Pages**, select **Deploy from a branch**, `main`, `/ (root)`, and save.
4. Visit `https://<your-github-username>.github.io/` after the deployment succeeds.

No local software required.
