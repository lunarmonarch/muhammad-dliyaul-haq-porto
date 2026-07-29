import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="container-page flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
      <h1 className="text-h1 mt-2">Halaman Tidak Ditemukan</h1>
      <p className="mt-3 max-w-md text-ink/60">
        Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Link href="/" className="mt-8">
        <Button variant="primary">Kembali ke Beranda</Button>
      </Link>
    </main>
  );
}
