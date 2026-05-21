# Review Feature Changes

## Files created or updated

- `data/reviews.ts` - static review data extracted from the provided screenshots.
- `components/ReviewCard.tsx` - reusable Google-style review card with avatar, Google badge, rating, and full review text in an equal-height card.
- `components/ReviewsSection.tsx` - review grid, "Write a Review" modal, validation, localStorage merging, and "Load more reviews" behavior.
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

The `Write a Review` button opens a modal form with:

- Name
- Rating
- Review message

All fields are required. Submitted reviews appear immediately at the top of the review section with `time: "Just now"`.
No backend or API is used.

## localStorage usage

The feature uses browser storage only on the client side to avoid Next.js hydration errors.

- `shwaastika-user-reviews` stores reviews submitted through the modal.

Static screenshot reviews and locally submitted reviews are merged in `components/ReviewsSection.tsx`.

## Display behavior

The reviews section is shown only on the `/testimonials` page.
It displays 5 reviews initially and reveals 5 more each time `Load more reviews` is clicked.
Each visible card keeps the same height for visual symmetry. Full review text is preserved inside the card with an internal scroll area when a review is long.
