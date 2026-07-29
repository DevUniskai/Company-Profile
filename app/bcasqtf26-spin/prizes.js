export const MERCH_DIR = "/static/images/sqtf26/merch";

/**
 * Every prize on the poster. This list is the *reel* — all of it always spins
 * past, whether or not the item is still in stock, so customers can't tell
 * which prizes have run out. Availability is handled separately in
 * usePrizeStock; only in-stock items can be landed on.
 */
export const merchandise = [
  { name: "TRAVEL TOILETRIES", file: "TOILETRY_BAG_SQUARE.webp" },
  { name: "UNIVERSAL ADAPTER", file: "TRAVEL_ADAPTOR_SQUARE.webp" },
  { name: "PREMIUM HAND CARRY", file: "HAND_CARRY_SQUARE.webp" },
  { name: "TRAVEL ORGANIZER", file: "TRAVEL_BAG_SQUARE.webp" },
  {
    name: "DIGITAL TRAVEL BAG & EXCLUSIVE FLAZZ CARD",
    file: "Digital_Travel_Bag_Flazz.webp",
  },
  { name: "PREMIUM UMBRELLA", file: "PAYUNG_SQUARE.webp" },
  { name: 'SUITCASE "UNISKAI" 16 INCH', file: "KOPER_KECIL_01.webp" },
  { name: "STYLISH EVERYDAY CAP", file: "Stylish_Cap.webp" },
  { name: "EXCLUSIVE STAINLESS TUMBLER", file: "Stainless_Tumbler.webp" },
  { name: "1 BIG DOUBLE ZIP TRAVEL ORGANIZER", file: "Large_Double_Zip.webp" },
  {
    name: "2 SMALL DOUBLE ZIP TRAVEL ORGANIZER",
    file: "2_Small_Double_Zip.webp",
  },
  { name: "BOARDING PASS BOX", file: "BOARDINGPASS_BOX_SQUARE.webp" },
].map((item) => ({
  ...item,
  id: item.file,
  src: `${MERCH_DIR}/${item.file}`,
}));
