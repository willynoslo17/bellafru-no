/** Norway market price matching (2026-10-30). Keys are CJ product ids (pid).
 * PRICE_OVERRIDE: regular NOK price aligned to the Norwegian market, never below the profit floor.
 * HIDDEN: profit floor is above the Norwegian market price -> product is hidden (not deleted). */
export const PRICE_OVERRIDE: Record<string, number> = {};
/* 2026-10-30: products without required certification removed from store (owner order). */
/* 2026-10-31: second certification review (owner order) - more items hidden. */
export const HIDDEN = new Set<string>(["F25DF9B2-5E6B-42C9-85FD-B34D55E39822", "1601142020842729472", "0EC32457-ED22-47D0-BD79-686FF2003D95", "1369856925562441728", "1567808255651491840", "1364514380825366528", "1519549481530961920", "969859D5-BE43-41BC-A327-B18D04425E64", "1424185548188291072", "EB2424DF-0278-4023-BE91-4C7270E31B52", "2407220127371606800", "2506290524161628900", "2407110543301603300", "1396295866180046848", "1421757625602805760"]);
