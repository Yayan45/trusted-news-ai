import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { FaRotateRight } from "react-icons/fa6";

import toast from "react-hot-toast";

import SearchInput from "./SearchInput";
import ActionButton from "./ActionButton";

function SearchForm({ onSearch }) {
  const [headline, setHeadline] = useState("");

  // =========================
  // HANDLE SUBMIT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDATION
    if (!headline.trim()) {
      toast.error("Headline tidak boleh kosong");

      return;
    }

    // SEARCH
    onSearch(headline);
  };

  // =========================
  // HANDLE RESET
  // =========================
  const handleReset = () => {
    setHeadline("");

    toast.success("Form berhasil direset");
  };

  return (
    <div
      className="
        bg-white
        shadow
        rounded-2xl
        p-4
        sm:p-6
        mt-5
      "
    >
      {/* LABEL */}
      <label
        className="
          text-sm
          sm:text-base
          font-semibold
        "
      >
        Masukan Headline berita yang ingin dicek
      </label>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="
          flex
          flex-col
          lg:flex-row
          gap-3
          mt-4
        "
      >
        {/* INPUT */}
        <SearchInput
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          placeholder="Masukan headline berita..."
        />

        {/* BUTTON GROUP */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-3
            w-full
            lg:w-auto
          "
        >
          {/* SEARCH */}
          <ActionButton type="submit" variant="primary">
            <div className="flex items-center gap-2">
              <FaSearch />

              <span>Cek Hoax</span>
            </div>
          </ActionButton>

          {/* RESET */}
          <ActionButton type="button" variant="danger" onClick={handleReset}>
            <div className="flex items-center gap-2">
              <FaRotateRight />

              <span>Reset</span>
            </div>
          </ActionButton>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
