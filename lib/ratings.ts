/**
 * Score starts at 9.9 for the #1 partner and decreases by 0.1 per position,
 * never dropping below 9.5.
 */
export function calculateRating(order: number): number {
  const score = 9.9 - (order - 1) * 0.1;
  const clamped = Math.max(9.5, score);
  return Math.round(clamped * 10) / 10;
}

/**
 * Stars by position:
 *  - top 3   -> 5 stars
 *  - top 4-7 -> 4.5 stars
 *  - rest    -> 4 stars
 */
export function calculateStars(order: number): number {
  if (order <= 3) return 5;
  if (order <= 7) return 4.5;
  return 4;
}

/** Human label for the rank badge based on position. */
export function rankBadge(order: number): string {
  if (order === 1) return "1.º Lugar";
  if (order === 2) return "Segunda Escolha";
  if (order === 3) return "Recomendado";
  return `Posição ${order}`;
}
