/** Norway market price matching (2026-10-30; 2026-10-31: 10–20 kr under cheapest Norwegian competitor, never below profit floor). Keys are CJ product ids (pid).
 * PRICE_OVERRIDE: regular NOK price aligned to the Norwegian market, never below the profit floor.
 * HIDDEN: profit floor is above the Norwegian market price -> product is hidden (not deleted). */
export const PRICE_OVERRIDE: Record<string, number> = {"66645D79-79CE-443A-9BE7-91E4139E2CDD": 219, "75E35F20-50E5-4D2B-8C6B-77B939D39B67": 159, "1509085236112666624": 139, "51FC9295-07E3-4EE7-B1F9-FE66A10B50BE": 149, "B072A0C8-B1EF-4785-83E9-FAE5FFFC124F": 169, "FDF662E9-C64E-4962-AEEE-B5FD2968B6FA": 139};
/* 2026-10-30: products without required certification removed from store (owner order). */
export const HIDDEN = new Set<string>(["F25DF9B2-5E6B-42C9-85FD-B34D55E39822", "1601142020842729472", "0EC32457-ED22-47D0-BD79-686FF2003D95", "1369856925562441728"]);
