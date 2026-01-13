# Accordion Block Reference

This is the standard accordion implementation for this project.

## Design Features

- White rounded cards (20px border-radius)
- Subtle box-shadow with hover effect
- Smooth animations with cubic-bezier easing
- Opposing motion on hover (text slides right, icon slides left)
- Clean typography and spacing
- Fully responsive (mobile-first)

## Reference Implementation

See: `/blocks/accordion/` for the complete implementation

## Key Styling Patterns

```css
/* Card-based items with gap spacing */
.accordion {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* White rounded cards */
.accordion-item {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0 0 0 / 5%);
}

/* Hover effects with opposing motion */
.accordion-item:hover .accordion-button span {
  transform: translateX(8px);  /* Text slides right */
}

.accordion-item:hover .accordion-button::after {
  transform: translateX(-8px); /* Icon slides left */
}
```

## Content Model

Each row in the block has:
- Column 1: Question/Title (bold)
- Column 2: Answer/Content (expanded when clicked)

## Authoring Structure

```
| Accordion |  |
|-----------|-----------|
| Frontend  | React, Vue.js, HTML5, CSS3, Tailwind, SASS |
| Backend   | Node.js, Express, MongoDB, PostgreSQL |
```

## Source Design

Based on: https://lab-activity-accordion--zeroto100--meejain.aem.live/accordion
