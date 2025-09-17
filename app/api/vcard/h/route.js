// app/api/vcard/h/route.js
import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

// fold setiap 76 chars; baris lanjutan diawali spasi (vCard folding rule)
function foldLine(input, width = 76) {
  const parts = [];
  for (let i = 0; i < input.length; i += width) {
    parts.push(input.slice(i, i + width));
  }
  return parts.join("\r\n ");
}

export async function GET() {
  // 1) Baca foto
  const imgPath = join(process.cwd(), "public", "static", "images", "logo-black.png");
  const img = await readFile(imgPath);
  const base64 = img.toString("base64");

  // 2) Susun vCard 3.0
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Herbert",
    "N:Johan;Herbert;;;",
    "TITLE:COO",
    "ORG:Uniskai",
    "EMAIL;TYPE=INTERNET,PREF:herbert@uniskai.id",
    "TEL;TYPE=CELL:+62819872228",
    "URL:https://instagram.com/uni.bert",
    "ADR;TYPE=work:;;Komplek CBD, Jl. Padang Golf Blok. AA No.3,;Suka Damai,;Kec. Medan Polonia,;Kota Medan,;Sumatera Utara;20219;Indonesia",
    "PHOTO;ENCODING=b;TYPE=PNG:" + base64, // folding di bawah
    "END:VCARD",
  ];

  // 3) Folding khusus baris PHOTO
  const folded = lines.map((line) => {
    if (line.startsWith("PHOTO;")) return foldLine(line);
    return line;
  });

  const vcf = folded.join("\r\n") + "\r\n";

  // 4) Response
  return new NextResponse(vcf, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="herbert.vcf"',
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    },
  });
}
