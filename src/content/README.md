# Content interface

The public homepage is generated from `site.ts`. In normal use, this is the
only source file you need to edit.

## Common updates

- Profile and links: `profile`
- Homepage announcements: `profile.notice`
- Latest updates: `news`
- Papers: `publications`
- Education and internships: `education` and `experience`
- Hidden service content retained for later use: `service`
- Awards and honors: `awards`
- Top-right page menu: `navigation`

News dates use the `YYYY.MM` format. For paper-related news, use short venue
labels such as `CVPR`, `ICML`, or `RA-L`; put the complete paper title in
`paperNames`.

Homepage biography paragraphs use `{ text, links }`, allowing advisor names or
other phrases inside the prose to link to their official pages.

Tune portrait framing without changing the source image through
`photoPosition`, `photoScale`, and `photoRotation` under `profile`.

The homepage shows the profile, news, and publications marked with
`selected: true`. The Publications page shows every publication entry.

Publication resource buttons are limited to `Project`, `Paper`, `Code`,
`Data`, and `Model`, and are always displayed in that order. Their order in
`site.ts` does not affect the page; any other label is rejected by TypeScript.
All publication resources must use an external `http://` or `https://` URL.
`Paper` may point to arXiv or an official publisher/conference paper link, but
never to a local PDF path.

Set `publicationType: "preprint"` for unpublished manuscripts. The Publications
page automatically places them in a separate group before formal publications.
Use `authorNote` for author marks such as `† Corresponding author`. Separate
multiple marks with ` · `; individual marks are deduplicated and explained once
in the section heading.

Education and experience entries support linked `advisors`, concise `topics`,
and a secondary `note` for distinctions such as HKPFS.

For a paper preview, set `media.src` to a file under
`public/images/publications/`. Scientific diagrams default to `fit: "contain"`
so the full figure is visible. Use `fit: "cover"` for photographs, and tune
`position` or `scale` if needed. To show an exact region of a scientific figure
without modifying the source image, set `crop` to its pixel `x`, `y`, `width`,
`height`, and `imageWidth`. The cropped region is centered within the standard
16:9 preview frame. When a paper is not public yet, omit `media` and set
`mediaStatus` instead of using an unrelated image.

Every entry is checked against `src/types/site.ts` during the production build.
If a field is misspelled or has the wrong type, the build reports its exact
location instead of silently publishing broken content.
