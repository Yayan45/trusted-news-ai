import { useState } from "react";

import toast from "react-hot-toast";

import { FaShieldAlt } from "react-icons/fa";

import DetectionNavbar from "../components/layout/DetectionNavbar";

import SearchForm from "../components/form/SearchForm";

import LoadingAnalysis from "../components/loading/LoadingAnalysis";
import SkeletonCard from "../components/loading/SkeletonCard";

import ResultSection from "../components/result/ResultSection";

import ErrorState from "../components/common/ErrorState";

import { resultDummy } from "../data/resultDummy";
import { initialSources } from "../data/sourceDummy";

function Detection() {
  // =========================
  // STATE
  // =========================
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const [error, setError] = useState(null);

  const [sources, setSources] = useState(initialSources);

  const [progress, setProgress] = useState(0);

  // =========================
  // HANDLE SEARCH
  // =========================
  const handleSearch = async (headline) => {
    // VALIDATION
    if (!headline.trim()) {
      toast.error("Headline tidak boleh kosong");

      return;
    }

    // RESET
    setResult(null);

    setError(null);

    setLoading(true);

    setSources(initialSources);

    setProgress(0);

    toast.success("Memulai analisis berita...");

    // ERROR SIMULATION
    if (headline.toLowerCase().includes("error")) {
      setTimeout(() => {
        setLoading(false);

        setError("Gagal mengambil data berita dari server");

        toast.error("Terjadi kesalahan saat analisis");
      }, 2500);

      return;
    }

    // GOOGLE LOADING
    setTimeout(() => {
      setProgress(1);

      setSources([
        {
          image: "/google.png",
          title: "Google Search",
          subtitle: "Sedang mengambil artikel...",
          status: "loading",
        },

        {
          image: "/duckduckgo.png",
          title: "DuckDuckGo Search",
          subtitle: "Menunggu proses scraping",
          status: "waiting",
        },
      ]);
    }, 1000);

    // GOOGLE SUCCESS
    setTimeout(() => {
      setProgress(2);

      setSources([
        {
          image: "/google.png",
          title: "Google Search",
          subtitle: "Artikel berhasil ditemukan",
          status: "success",
        },

        {
          image: "/duckduckgo.png",
          title: "DuckDuckGo Search",
          subtitle: "Sedang mengambil artikel...",
          status: "loading",
        },
      ]);
    }, 3000);

    // ALL SUCCESS
    setTimeout(() => {
      setSources([
        {
          image: "/google.png",
          title: "Google Search",
          subtitle: "Artikel berhasil ditemukan",
          status: "success",
        },

        {
          image: "/duckduckgo.png",
          title: "DuckDuckGo Search",
          subtitle: "Artikel berhasil ditemukan",
          status: "success",
        },
      ]);
    }, 5000);

    // SHOW RESULT
    setTimeout(() => {
      setLoading(false);

      setResult(resultDummy);

      toast.success("Analisis berhasil dilakukan");
    }, 6500);
  };

  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
      "
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* NAVBAR */}
      <DetectionNavbar />

      {/* MAIN */}
      <main
        className="
          flex-1

          w-full
          max-w-5xl

          mx-auto

          px-4
          sm:px-6

          py-10
          sm:py-16
        "
      >
        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-10">
          {/* ICON */}
          <div className="flex justify-center mb-5">
            <div
              className="
                w-16
                h-16

                rounded-2xl

                flex
                items-center
                justify-center
              "
              style={{
                backgroundColor: "var(--bg-secondary)",
              }}
            >
              <FaShieldAlt className="text-blue-500 text-2xl" />
            </div>
          </div>

          {/* TITLE */}
          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl

              font-black
              leading-tight
            "
          >
            Deteksi Berita Hoax
          </h1>

          {/* DESC */}
          <p
            className="
              mt-4

              text-sm
              sm:text-base

              leading-7
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Masukkan headline berita untuk dianalisis
          </p>
        </div>

        {/* SEARCH FORM */}
        <SearchForm onSearch={handleSearch} />

        {/* LOADING */}
        {loading && (
          <div className="mt-6">
            <LoadingAnalysis sources={sources} progress={progress} />

            <SkeletonCard />
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="mt-6">
            <ErrorState message={error} />
          </div>
        )}

        {/* RESULT */}
        {result && (
          <div className="mt-6">
            <ResultSection result={result} />
          </div>
        )}
      </main>
    </div>
  );
}

export default Detection;
