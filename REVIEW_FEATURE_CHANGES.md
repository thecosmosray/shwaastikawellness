# Review Feature Changes

## Files created or updated

- `data/reviews.ts` - static review data extracted from the provided screenshots.
- `components/ReviewCard.tsx` - reusable Google-style review card with avatar, Google badge, rating, and full review text in an equal-height card.
- `components/ReviewsSection.tsx` - curated mobile and desktop review carousels, review detail lightbox, and legacy localStorage cleanup.
- `app/testimonials/page.tsx` - replaces the placeholder Google Reviews carousel with the new reviews section.
- `REVIEW_FEATURE_CHANGES.md` - documents the implementation.

## Screenshot review extraction

The provided screenshots were manually read and transcribed into `extractedReviews` in `data/reviews.ts`.
Each review entry uses this structure:

```ts
{
  id: string,
  name: string,
  time: string,
  rating: number,
  review: string,
}
```

All visible screenshots showed 5-star reviews, so each extracted review has `rating: 5`.

## TODOs and unclear text

- Screenshot 1 shows the reviewer name as truncated text: `Guneeta choud...`. The data file stores this as `Guneeta choud... TODO: full surname unclear in screenshot` instead of guessing the full name.

## Manually adding or editing old reviews

Edit `data/reviews.ts` and update the `extractedReviews` array.
Use a stable unique `id` for each review, keep `rating` between `1` and `5`, and preserve line breaks in long review text with `\n\n` where needed.

## Frontend review submissions

Public frontend review submissions are disabled.

The testimonials page now displays only curated static reviews from `data/reviews.ts`. This prevents unmoderated reviews from appearing on the live site.

## Legacy localStorage cleanup

Earlier versions stored browser-only submitted reviews under `shwaastika-user-reviews`.
`components/ReviewsSection.tsx` now removes that key on page load and does not read or display browser-submitted reviews.

## Display behavior

The reviews section is shown only on the `/testimonials` page.
It uses arrow-controlled carousels on mobile and desktop. Desktop shows 3 reviews on wide screens and uses 3 matching carousel indicator dots.
Each visible card keeps the same height for visual symmetry. Full review text is preserved inside the card with an internal scroll area when a review is long.
