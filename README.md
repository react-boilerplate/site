# React.js Boilerplate Site

The beginnings of the site for React.js Boilerplate: https://github.com/mxstbr/react-boilerplate

## Getting Started

```
	> git clone https://github.com/brotzky/react-boilerplate-site.git
	> cd react-boilerplate-site
	> npm install
	> gulp serve
```

### Tips & Subgenerator

You can easily create new pages using the built-in sub-generator like so:

```
yo yeogurt:page about
```

This will create the structure you saw above:

```
└── src
    └── about
        └── index.{jade,nunjucks}
```

So when you boot up your site and go to `/about` you will see your new page.

### Specifying a layout

You can also create a new page that extends from a different layout file than `base.{jade,nunjucks}`.
