function StatusBadge({ status }) {
  const styles = {
    Membantah: "bg-red-100 text-red-500",

    Mendukung: "bg-green-100 text-green-600",

    Netral: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div
      className={`
        px-4
        py-1
        rounded-full
        text-sm
        font-medium
        w-fit
        ${styles[status]}
      `}
    >
      {status}
    </div>
  );
}

export default StatusBadge;
