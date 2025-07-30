# Public Assets

This directory is for storing your static assets, such as images, videos, fonts, and other files that you want to be publicly accessible.

## How to use

Any file you place in this `public` directory will be served from the root of your application.

For example, if you add an image named `my-image.png` to this directory, you can reference it in your code like this:

```html
<img src="/my-image.png" alt="My Image" />
```

Similarly, a video named `my-video.mp4` can be referenced as:

```html
<video src="/my-video.mp4" />
```

You can also create subdirectories for better organization, for example:
- `public/images/`
- `public/videos/`

An image at `public/images/logo.svg` would be accessible at `/images/logo.svg`.
