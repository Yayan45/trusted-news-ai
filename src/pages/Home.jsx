import { useState } from "react";

import toast from "react-hot-toast";

import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
// import Footer from "../components/layout/Footer";

import SearchForm from "../components/form/SearchForm";

import LoadingAnalysis from "../components/loading/LoadingAnalysis";
import SkeletonCard from "../components/loading/SkeletonCard";

import ResultSection from "../components/result/ResultSection";

import ErrorState from "../components/common/ErrorState";

import { resultDummy } from "../data/resultDummy";
import { initialSources } from "../data/sourceDummy";

function Home() {
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

    // =========================
    // SIMULATE ERROR
    // =========================
    if (headline.toLowerCase().includes("error")) {
      setTimeout(() => {
        setLoading(false);

        setError("Gagal mengambil data berita dari server");

        toast.error("Terjadi kesalahan saat analisis");
      }, 2500);

      return;
    }

    // =========================
    // GOOGLE LOADING
    // =========================
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

    // =========================
    // GOOGLE SUCCESS
    // DUCKDUCKGO LOADING
    // =========================
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

    // =========================
    // ALL SUCCESS
    // =========================
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

    // =========================
    // SHOW RESULT
    // =========================
    setTimeout(() => {
      setLoading(false);

      setResult(resultDummy);

      toast.success("Analisis berhasil dilakukan");
    }, 6500);
  };

  return (
    <Container>
      {/* HEADER */}
      <Header />

      {/* SEARCH */}
      <SearchForm onSearch={handleSearch} />

      {/* LOADING */}
      {loading && (
        <>
          <LoadingAnalysis sources={sources} progress={progress} />

          <SkeletonCard />
        </>
      )}

      {/* ERROR */}
      {error && <ErrorState message={error} />}

      {/* RESULT */}
      {result && <ResultSection result={result} />}

      {/* FOOTER */}
      {/* <Footer /> */}
    </Container>
  );
}

export default Home;
