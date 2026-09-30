# Images

Place your editable site assets here. Recommended names:

- `profile.jpg` — portrait, preferably 4:5 and at least 800 px tall
- `paper-project-name.jpg` — publication teaser, preferably 16:9
- `paper-project-name.mp4` — short muted publication preview

Reference them from `src/content/site.ts` without a leading slash:

```ts
photo: "images/profile.jpg"

media: {
  type: "image",
  src: "images/paper-project-name.jpg",
  alt: "Overview of the proposed method",
}
```
