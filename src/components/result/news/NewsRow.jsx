import { FaExternalLinkAlt } from "react-icons/fa";

import StatusBadge from "./StatusBadge";

function NewsRow({ item, index }) {
  return (
    <tr className="border-b border-gray-200">
      {/* NUMBER */}
      <td className="px-4 py-5 text-sm">{index + 1}.</td>

      {/* TITLE */}
      <td className="px-4 py-5 text-sm">{item.title}</td>

      {/* SOURCE */}
      <td className="px-4 py-5 text-sm">{item.source}</td>

      {/* SIMILARITY */}
      <td className="px-4 py-5 text-sm font-medium">{item.similarity}%</td>

      {/* STATUS */}
      <td className="px-4 py-5">
        <StatusBadge status={item.status} />
      </td>

      {/* LINK */}
      <td className="px-4 py-5">
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            gap-2
            text-blue-500
            text-sm
            font-medium
            hover:underline
          "
        >
          <span>Buka artikel</span>

          <FaExternalLinkAlt className="text-xs" />
        </a>
      </td>
    </tr>
  );
}

export default NewsRow;
