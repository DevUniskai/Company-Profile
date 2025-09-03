// components/FormatTeamLabel.js
import { Text } from "@chakra-ui/react";

export default function FormatTeamLabel({ label }) {
  // ambil hanya sebelum kurung
  const main = label.replace(/\(.*?\)/, "").trim();

  return (
    <Text as="span" fontSize="md" fontWeight="normal">
      {main}
    </Text>
  );
}
// export default function FormatTeamLabel({ label, mainProps = {}, subProps = {} }) {
//   const match = /^(.*?)\s*\((.*?)\)\s*$/.exec(label || "");

//   // always style the main part
//   const main = match ? match[1] : label;
//   const sub = match ? match[2] : null;

//   const defaultMainProps = { as: "span", fontSize: "large", fontWeight: "semibold" };
//   const defaultSubProps  = { as: "span", fontSize: "sm", opacity: 0.8 };

//   return (
//     <Text as="span">
//       <Text {...defaultMainProps} {...mainProps}>{main}</Text>
//       {sub && (
//         <>
//           {" "}
//           <Text {...defaultSubProps} {...subProps}>({sub})</Text>
//         </>
//       )}
//     </Text>
//   );
// }