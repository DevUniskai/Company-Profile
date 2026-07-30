export const MERCH_DIR = "/static/images/sqtf26/merch";

export const MYSTERY_IMAGE = "/static/images/sqtf26/assets/uniskai_orange.webp";


export const merchandise = [
  { name: "TRAVEL TOILETRIES", file: "TOILETRIES.webp" },
  { name: "UNIVERSAL ADAPTER", file: "ADAPTOR.webp" },
  { name: "PREMIUM HAND CARRY", file: "HANDCARRY.webp" },
  { name: "TRAVEL ORGANIZER", file: "TRAVEL_ORGANIZER.webp" },
  {
    name: "DIGITAL TRAVEL BAG & EXCLUSIVE FLAZZ CARD",
    file: "Pouch_and_Flazz.webp",
  },
  { name: "PREMIUM UMBRELLA", file: "PAYUNG.webp" },
  { name: 'SUITCASE "UNISKAI" 16 INCH', file: "KOPER_KECIL.webp" },
  { name: "STYLISH EVERYDAY CAP", file: "CAP.webp" },
  { name: "EXCLUSIVE STAINLESS TUMBLER", file: "TUMBLER.webp" },
  {
    name: "1 BIG DOUBLE ZIP TRAVEL ORGANIZER",
    file: "LARGE_DOUBLE_ZIPPER.webp",
  },
  {
    name: "2 SMALL DOUBLE ZIP TRAVEL ORGANIZER",
    file: "SMALL_DOUBLE_ZIP.webp",
  },
  { name: "BOARDING PASS BOX", file: "PASPOR_BOX.webp" },
].map((item) => ({
  ...item,
  id: item.file,
  src: `${MERCH_DIR}/${item.file}`,
}));
