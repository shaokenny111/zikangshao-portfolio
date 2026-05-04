# TODO — Deferred Items

Items deferred from current work, to be picked up in later stages.

## Stage b2 — i18n / 国际化

- **#6 Language toggle (EN / 中)**
  - Wire the existing `EN / 中` switcher in the top app bar to actually toggle between English and Chinese copy.
  - Add national flag SVG icons (UK/US for EN, CN for 中) next to the switcher.
  - All copy with both EN + ZH already authored in `Website_Content_Optimized.md` — needs a key/value structure in JS (or data-attributes) for swap-in-place.

## Pending real assets (manual collection)

- **#7 Company / school logos**
  - Need: HSBC, emlyon business school, Guoyuan Securities (国元证券), Huashang College (华商学院), Haisheng Financial Leasing (海晟融资租赁), HSBC (汇丰).
  - Once user supplies the SVG / PNG logo files, wire them into the Background tab cards (Work + Education).

## v1.1 — Polish

- **#8 Selected Works modal**
  - Each project card on click → blurred overlay modal (same style as the existing Experience modals) showing extended case-study content.
  - Currently the cards have hover-translate but no click handler.

- **#9 Full Projects page**
  - `View All →` link in Selected Works currently goes to `#`. v1.0 placeholder: point it at `#experience` and trigger the Project Experience tab.
  - v1.1: build a dedicated `/projects` page with all projects + filters.

## Pending real value (placeholder in code)

- LinkedIn footer URL — currently `href="#"` with `event.preventDefault()`. Replace once user supplies real URL.
- WeChat ID in footer tooltip — currently `ZS_WeChat_ID`. Replace once user supplies real WeChat handle.
- `Zikang_Shao_CV_EN.pdf` — referenced by Hero "Download Resume" but file does not exist yet. Upload to project root.
