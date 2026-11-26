# Phone Catalog — Technical Debt

> Deferred refactoring tasks. Complete the main Mate Academy requirements first.
> Keep existing behavior and Figma layouts unchanged during refactoring.

## 1. Shared IconButton

- [ ] Evaluate extracting a reusable `IconButton` from `ProductsSlider` and `Footer` (also consider future pagination controls).
- [ ] Define a typed API for icon/direction, click handler, disabled state and accessible label.
- [ ] Unify shared button styles: dimensions, colors, hover, focus-visible and disabled states.
- [ ] Preserve the current arrow dimensions and orientations according to Figma.
- [ ] Keep the Footer's `Back to top` text and arrow inside one semantic button; do not nest interactive elements.
- [ ] Move button-specific SCSS variables into the shared component if extracted.

## 2. SCSS architecture

- [ ] Audit `src/modules/shared/styles/scss-utils/_variables.scss` for unused variables, duplicates and inconsistent naming.
- [ ] Keep only shared design tokens in global SCSS: spacing, typography, breakpoints, layout, z-index and transitions.
- [ ] Evaluate splitting global tokens into `_spacing.scss`, `_typography.scss`, `_layout.scss` and `_animations.scss`.
- [ ] Move component-specific variables closer to their components: `ProductCard`, `ProductsSlider`, `HeroSlider`, `CategoryCard`, `Footer`, etc.
- [ ] Keep category image offsets and dimensions local to `CategoryCard`.
- [ ] Keep `_globals.scss` and Vite's SCSS configuration consistent; explicitly load local variables where needed.
- [ ] Remove obsolete variables only after checking all references.

## 3. Refactoring acceptance checklist

- [ ] No changes to the existing visual layout or behavior of `Hero`, `BrandNewModels`, `ShopByCategory`, `HotPrices` and `Footer`.
- [ ] Verify mobile (320px+), tablet (640px+) and desktop (1200px+) layouts.
- [ ] Run `npm run lint`, `npx tsc --noEmit`, `npm run build` and `git diff --check`.
- [ ] Commit the refactoring separately from new features.

## Priority

**Deferred — non-blocking.** Finish the current Footer implementation and continue the required catalog functionality before undertaking broad architectural changes. Revisit the shared button when pagination is implemented or when further duplication makes the abstraction worthwhile.
