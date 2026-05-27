import { useState } from "react";

import toast from "react-hot-toast";

import { FaShieldAlt } from "react-icons/fa";

import API from "../services/api";

import DetectionNavbar from "../components/layout/DetectionNavbar";

import SearchForm from "../components/form/SearchForm";

import LoadingAnalysis from "../components/loading/LoadingAnalysis";
import SkeletonCard from "../components/loading/SkeletonCard";

import ResultSection from "../components/result/ResultSection";

import ErrorState from "../components/common/ErrorState";

import { initialSources } from "../data/sourceDummy";
import { mapApiResult } from "../utils/mapApiResult";

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
    // VALIDASI
    if (!headline.trim()) {
      toast.error("Headline tidak boleh kosong");

      return;
    }

    try {
      // RESET
      setLoading(true);

      setResult(null);

      setError(null);

      setSources(initialSources);

      setProgress(0);

      toast.loading("AI sedang menganalisis berita...", {
        id: "loading",
      });

      // =========================
      // LOADING UI STEP 1
      // =========================
      setProgress(1);

      setSources([
        {
          image: "/google.png",
          title: "Google Search",
          subtitle: "Mengambil artikel terkait...",
          status: "loading",
        },

        {
          image: "/duckduckgo.png",
          title: "DuckDuckGo Search",
          subtitle: "Menunggu proses scraping...",
          status: "waiting",
        },
      ]);

      // =========================
      // REQUEST BACKEND
      // =========================
      const response = await API.post("/check", {
        headline,
      });

      console.log("RESPONSE BACKEND:", response.data);

      // =========================
      // LOADING UI STEP 2
      // =========================
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
          subtitle: "Artikel berhasil ditemukan",
          status: "success",
        },
      ]);

      const resultAI = response.data.data;

      // =========================
      // MAP API → UI FORMAT
      // =========================

      const mappedResult = mapApiResult(headline, resultAI);

      console.log("MAPPED RESULT:", mappedResult);

      // =========================
      // SET RESULT
      // =========================

      setResult(mappedResult);

      toast.success("Analisis berhasil dilakukan", {
        id: "loading",
      });
    } catch (error) {
      console.error(error);

      // ERROR BACKEND
      const errorMessage =
        error.response?.data?.message || "Server backend / AI tidak merespon";

      setError(errorMessage);

      toast.error(errorMessage, {
        id: "loading",
      });
    } finally {
      setLoading(false);
    }
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
            Masukkan headline berita untuk dianalisis menggunakan Artificial
            Intelligence dan Natural Language Processing.
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
