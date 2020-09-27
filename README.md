# Blog template

This is a blog template project build with GatsbyJS, specifically with help of [blog starter](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/). However, there are some changes made to initial boilerplate, content is fetched from Contentful.

[Preview is available here](https://practical-goldwasser-72b7b9.netlify.app)

## Blog model

Blog model defined in Contentful, it consists of following fields:

```
title: string
subttile: string
date: string
slug: strig
image: media
content: rich text
author: {
  name: string
  summary: string
}
```

## How to start

In order to start developing locally, you should have `.env` file in root folder, which should contain values for `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`. That would allow to fetch data from Contentful API.

To start development server locally:

```sh
  gatsby develop
```

## Future improvements

Next step would be make use of grid layout to display blog and apply styling to make it look nicer.
