---
name: Zikang Shao Identity
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#765935'
  on-secondary: '#ffffff'
  secondary-container: '#fed6a9'
  on-secondary-container: '#795b37'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1a'
  on-tertiary-container: '#868382'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffddb7'
  secondary-fixed-dim: '#e6c094'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#5c4220'
  tertiary-fixed: '#e6e2df'
  tertiary-fixed-dim: '#cac6c4'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  h2:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Newsreader
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.6'
  ui-label:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.04em
  ui-metadata:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
  caption:
    fontFamily: Newsreader
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  container-max: 1140px
  gutter: 32px
  margin-page: 5vw
  section-gap: 120px
  element-gap: 24px
  stack-sm: 8px
  stack-md: 16px
---

## Brand & Style

This design system is built on the intersection of academic rigor and modern product building. It utilizes a **Minimalist Editorial** aesthetic, blending the classic authority of a broadsheet newspaper with the functional clarity of a digital workspace. The emotional response is one of "quiet confidence"—sophisticated, intellectual, and deliberate.

The visual narrative prioritizes high-quality typography and structural whitespace over decorative elements. It positions the builder as a curator of ideas, where the interface acts as a silent, high-end gallery for finance and AI insights. Key characteristics include razor-thin lines, a warm parchment-inspired palette, and a document-like flow that feels both archival and cutting-edge.

## Colors

The color palette is rooted in organic, earthy tones to move away from the "coldness" typically associated with AI. 
- **Ink (#1A1A1A):** Used for primary headings and body text to ensure maximum legibility and a classic print feel.
- **Warm White (#FBFAF7):** The canvas color, providing a softer, more premium reading experience than pure white.
- **Section Alt (#F4F2EC):** Used for subtle differentiation between content blocks or to group related case studies.
- **Accent Brown (#6B4F2C):** Used sparingly for links, active states, and callouts to ground the AI-focused content in something human and tactile.

## Typography

The typographic hierarchy relies on the contrast between the intellectual **Newsreader** (Serif) and the utilitarian **Inter** (Sans). 

- **Serif Primacy:** Newsreader is used for all narrative content. Large display headers should utilize tighter letter-spacing to mimic high-end editorial layouts. 
- **Sans-Serif Utility:** Inter is reserved for "the machine"—navigation labels, dates, tags, and small functional UI. It should often be presented in uppercase with slight tracking to provide a technical, structured counterpoint to the fluid serif.
- **Readability:** Body text is set with generous line height to maintain a comfortable "Notion-like" reading rhythm.

## Layout & Spacing

This design system uses a **Fixed Document Grid**. While the background fills the viewport, the content is centered within a sophisticated max-width container, mimicking a well-set page.

- **Rhythm:** Use an 8px base grid for small elements, but shift to large, airy gaps (120px+) between major sections to emphasize focus.
- **The Sidebar/Navigation:** The navigation is fixed. On scroll, it should transition from a transparent background to a blurred `Accent Soft` or `Section Alt` background with a thin `Line` bottom border.
- **Margins:** Ample horizontal margins are critical. The content should never feel crowded; let the whitespace guide the user's eye through the narrative.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Low-Contrast Outlines** rather than traditional shadows.

- **The Document Feel:** Elements like code snippets or AI prompt examples should be placed on `Section Alt` backgrounds with a 1px `Line` border.
- **Shadows:** Avoid them entirely or use a single, extremely faint "ink bleed" shadow (3% opacity) for floating navigation menus only.
- **Dividers:** Use 1px horizontal lines (`Line` color) to separate sections, reminiscent of a financial report or a broadsheet newspaper.

## Shapes

The shape language is **Strictly Geometric and Sharp**. 

To maintain the "document" and "financial report" aesthetic, all corners are 0px (Sharp). This creates a sense of precision and architectural integrity. If a softer feel is absolutely required for interactive elements (like a "Copy Code" button), use a maximum of 2px radius, but the default preference is always right angles.

## Components

- **Navigation:** A fixed top-bar or minimalist sidebar. Use `Inter` for links. The active state is indicated by a subtle `Accent` color change or a small 1px underline.
- **Buttons:** 
    - **Primary:** Sharp corners, `Ink` background, `Warm White` text. 
    - **Secondary:** 1px `Line` border, `Ink` text, transparent background.
- **Cards (Project/Post):** Do not use heavy containers. A project "card" is a headline, a date in Inter, a short serif summary, and perhaps a 1px divider line below it. 
- **Tags/Chips:** Small `Inter` text, all-caps, on an `Accent Soft` background with no border.
- **Input Fields:** Bottom-border only (1px `Line`), resembling a printed form.
- **Quote Blocks:** Use a slightly larger `Newsreader` italic, with a 2px `Accent` left-border to highlight key finance/AI insights.
- **AI-Specific Blocks:** Use a monospaced variant of Inter or a subtle background tint (`Section Alt`) to denote machine-generated or technical content.