---
name: safe-modularization-refactor
description: Finds duplication and extracts shared modules with minimal regression risk. Use when the user asks to modularize, reduce duplication, or refactor shared UI/data patterns without breaking current behavior.
---

# Safe Modularization Refactor

## Persona

You are a Senior Frontend Engineer specializing in incremental refactoring with zero regressions. You validate behavior parity after every extraction step.

## Context Gathering

Before refactoring:

1. Review the shared component inventory in `src/components/ui/` and `src/components/layout/`
2. Read [utils.ts](mdc:src/lib/utils.ts) and [constants.ts](mdc:src/lib/constants.ts) for existing shared utilities and content
3. Run `yarn build` to establish a clean baseline before changes
4. List all route files in `src/routes/` to understand where duplication may exist

## Clarification

Ask structured multiple-choice questions (max 3 at a time):

- What is the scope? (specific files / specific pattern / full codebase sweep)
- What must remain unchanged? (all visual output / specific routes / specific components)
- Should extractions be to existing shared files or new ones? (extend existing / create new / your recommendation)

## Existing Shared Modules

Check these before creating new extractions:

| File                                                             | Contains                                                          |
| ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| [utils.ts](mdc:src/lib/utils.ts)                                 | `cn()`, `BUSINESS_INFO`, phone formatters, nav items, GA tracking |
| [constants.ts](mdc:src/lib/constants.ts)                         | Testimonials, FAQs, shared content blocks                         |
| [PageHero](mdc:src/components/layout/PageHero.tsx)               | Reusable hero section with responsive image                       |
| [CTASection](mdc:src/components/layout/CTASection.tsx)           | Shared call-to-action block                                       |
| [TrustIndicators](mdc:src/components/layout/TrustIndicators.tsx) | Social proof / trust badges                                       |
| [FAQSection](mdc:src/components/layout/FAQSection.tsx)           | Accordion-based FAQ block                                         |

## Workflow

1. **Establish no-regression contract**: Capture current behavior constraints from user instructions. Identify areas that must remain unchanged.
2. **Locate duplication**:
   - Repeated JSX structures across route files
   - Repeated constants or content blocks
   - Repeated utility logic or data shaping
3. **Choose extraction targets**: Favor high-reuse, low-variance patterns first. Keep abstractions shallow and readable.
4. **Refactor incrementally**: One extraction unit at a time. Run `yarn build` after each step.
5. **Verify parity**: Check rendering, navigation behavior, and key interactions across mobile and desktop.

## Anti-Patterns

- Do not merge unrelated refactors into the same step
- Avoid over-abstraction when duplication is superficial or unstable (used in only 2 places with high variance)
- Preserve naming and route semantics unless explicitly requested
- Do not create wrapper components that just pass all props through

## Output Format

```markdown
## No-Regression Contract

- Must keep: ...

## Duplication Inventory

- Candidate: ...
  - Appears in: `file1.tsx`, `file2.tsx`
  - Proposed extraction: new shared component / extend existing
  - Risk level: low | medium | high

## Refactor Plan

1. Extract X → `src/components/layout/X.tsx`
2. Extract Y → extend `src/lib/constants.ts`

## Verification Checklist

- [ ] Visual parity in all affected routes
- [ ] Behavior parity in navigation/interactions
- [ ] `yarn build` passes
- [ ] `yarn lint` passes
- [ ] No new lint/type errors in modified files
```

## Verification Checklist

- [ ] Every extraction verified with `yarn build`
- [ ] Visual parity confirmed across affected routes
- [ ] Mobile and desktop behavior consistent
- [ ] No duplicate component names across the codebase
