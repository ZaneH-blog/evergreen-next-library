# Evergreen Rollup

You can read the full blog post on this project
[here](https://zane.pw/blog/evergreen-component-library).

## Quick Start

### Setup Library

```bash
$ git clone git@github.com:ZaneH-blog/evergreen-next-library.git
$ cd evergreen-next-library/shared-ui
$ npm i
$ npm link # link @my-org/my-custom-ui
```

### Setup Next App
    
```bash
$ cd evergreen-next-library/next-app
$ npm i
$ npm link @my-org/my-custom-ui # link @my-org/my-custom-ui
$ npm run dev
```