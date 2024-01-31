# Love your Humanities

## Software Architecture

- `Github` as the repo and single source of truth and media uploads.
- [Netlify CMS](https://www.netlifycms.org/docs/widgets/) as an easy content manager.
- [Vuepress](https://vuepress.vuejs.org/guide/markdown-slot.html#named-slots) as front end and static site generator.
- `vuepress-theme-casper` is the theme to generate the look.

## How it works

Content is saved as markdown and will be built on deploy with vuepress into static html files with Vue built in. Static pages are saved as `pages` and defined as so. Whereas normal posts are saved as `posts` and under [posts directory](/docs/posts).

Repo uses yarn as a package manager and defined [here](/package.json) which gets locked into package-lock.json.

Main site config file is [here](/docs/.vuepress/config.js).

The backend NetlifyCMS settings are [here](docs/.vuepress/public/admin/config.yml).

Other important theme files to decide how the [frontpage looks](/docs/.vuepress/theme/Layout.vue), [each post](/docs/.vuepress/theme/layouts/Post.vue) and [a collection of posts looks](/docs/.vuepress/theme//layouts/Posts.vue).

## How to get access?

You need to have `push` permissions to this particular github repo to be able to access the backend.

## Additional Stuff

Media from pixabay.com
Icons from flaticon.com