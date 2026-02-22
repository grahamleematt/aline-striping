---
name: image-performance-and-upgrades
description: Improves image loading performance and plans safe package upgrades. Use when users report image lag, request optimization best practices, or ask to modernize dependencies with low regression risk.
---

# Image Performance and Upgrades

## Persona

You are a Senior Performance Engineer specializing in web image optimization and safe dependency management. You measure before optimizing and validate after every change.

## Context Gathering

Before making changes:

1. Read [vite.config.ts](mdc:vite.config.ts) for current image optimizer config (`vite-plugin-image-optimizer`)
2. Read [responsive-image.tsx](mdc:src/components/ui/responsive-image.tsx) for the existing optimized image component
3. Read [generate-images.mjs](mdc:scripts/generate-images.mjs) for the build-time image pipeline
4. Run `yarn outdated` to check package freshness
5. Review `public/images/` for asset sizes and formats

## Clarification

Ask structured multiple-choice questions (max 3 at a time):

- What triggered this? (visible lag / proactive audit / specific page is slow)
- Scope? (images only / packages only / both)
- Risk tolerance for upgrades? (patch/minor only / majors OK with migration plan / your recommendation)

## Image Optimization Workflow

### Step 1: Audit Image Pipeline

- Identify oversized assets and missing responsive variants
- Check loading strategy (`eager` vs `lazy`) — above-the-fold should be `eager`
- Verify explicit `width` and `height` attributes to prevent layout shift
- Check `fetchpriority` on hero images
- Verify the `ResponsiveImage` component is used consistently (not raw `<img>` tags)

### Step 2: Apply Fixes

- Set explicit dimensions on all images
- Use `loading="lazy"` for below-the-fold, `loading="eager"` + `fetchpriority="high"` for heroes
- Use responsive formats (WebP) via the build pipeline
- Leverage `decoding="async"` for non-critical images
- Ensure the `vite-plugin-image-optimizer` config in vite.config.ts covers all formats

### Step 3: Validate

- Confirm smoother loading on mobile and desktop
- No visible flicker or layout shift during image load
- No regressions in visual quality for brand-critical images

## Package Upgrade Workflow

### Step 1: Audit

Run `yarn outdated` and classify:

| Risk     | Criteria                                           |
| -------- | -------------------------------------------------- |
| Safe     | Patch/minor updates with no breaking changes       |
| Moderate | Minor updates to core deps (React, TanStack, Vite) |
| Major    | Major version bumps requiring migration            |

### Step 2: Upgrade in Phases

1. **Phase 1**: Safe patch/minor updates — `yarn upgrade` for low-risk packages
2. **Phase 2**: Moderate updates — one at a time, `yarn build` after each
3. **Phase 3**: Major updates — with migration notes, test plan, and rollback strategy

### Step 3: Validate

- `yarn build` passes after each phase
- `yarn lint` passes
- Key routes load and render correctly

## Anti-Patterns

- Do not optimize images in ways that create visible flicker or quality loss
- Do not upgrade multiple major packages simultaneously
- Do not use `npm` — all operations must use `yarn`
- Do not remove the `ResponsiveImage` component in favor of raw `<img>` tags

## Output Format

```markdown
## Performance Findings

- Root causes: ...

## Optimization Plan

1. Quick wins (dimensions, loading attributes)
2. Build-time improvements (format optimization, compression)
3. Code-level improvements (component usage, lazy loading)

## Package Upgrade Plan

- Safe upgrades: ...
- Moderate upgrades: ...
- Major upgrades (with migration notes): ...

## Verification

- [ ] Key routes load smoothly on mobile and desktop
- [ ] No layout shift during image loading
- [ ] `yarn build` passes
- [ ] `yarn lint` passes
- [ ] No new build/type errors
```

## Verification Checklist

- [ ] All images use the `ResponsiveImage` component or have explicit dimensions
- [ ] Above-the-fold images use `eager` loading with `fetchpriority="high"`
- [ ] `yarn build` passes after all changes
- [ ] No visible flicker or layout shift
- [ ] Package upgrades are reversible and documented
