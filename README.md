# Portofolio — Muhammad Dliya'ul Haq

Website portofolio profesional, dibangun mengikuti **Blueprint-Portofolio-Muhammad-Dliyaul-Haq.md**.

**Semua milestone selesai:**
- ✅ M1 — Setup & Design System
- ✅ M2 — Home Page (Hero, Skills Highlight, Experience Preview, Project Preview, Certifications, CTA)
- ✅ M3 — About & Experience Page (narasi, skill matrix interaktif, case study STAR + timeline)
- ✅ M4 — Projects & Contact Page (grid project, detail dinamis, Download CV)
- ✅ M5 — Page transition antar halaman
- ✅ M6 — Dwibahasa penuh (toggle ID/EN, tersimpan di browser)
- ✅ M7 — SEO (sitemap.xml, robots.txt, metadata per halaman) & halaman 404 custom
- ✅ M8 — Siap deploy ke Vercel

---

## 1. Menjalankan di Komputer Anda

Pastikan Node.js 18+ sudah terpasang, lalu:

```bash
cd portfolio
npm install
npm run dev
```

Buka `http://localhost:3000`.

## 2. Sebelum Deploy — Checklist Wajib

- [ ] **Tambahkan CV**: taruh file PDF Anda di `public/cv-muhammad-dliyaul-haq.pdf` (nama file harus persis sama)
- [ ] **Ganti foto profil**: timpa `public/photo-profile.svg` dengan foto asli Anda. Cara termudah — simpan foto sebagai `photo-profile.jpg`, lalu di `lib/data.ts` ubah `photoProfile.src` menjadi `"/photo-profile.jpg"`. Setelah pakai foto asli (bukan SVG), hapus juga baris `dangerouslyAllowSVG` dkk di `next.config.mjs` (itu hanya dibutuhkan untuk placeholder SVG, bukan best practice keamanan untuk produksi).
- [ ] **Ganti gambar sertifikat**: timpa 2 file di `public/certificates/sertifikat-k3-bnsp.svg` dan `public/certificates/sertifikat-cefr-b2.svg` dengan hasil scan/foto sertifikat asli Anda (format jpg/png lebih disarankan). Update juga path-nya di `lib/data.ts` bagian `certificateImages` sesuai nama file baru.
- [ ] **Update email & LinkedIn**: edit `lib/data.ts` → ganti `contact.email` dan `contact.linkedin` dengan data asli Anda
- [ ] **Update domain**: setelah Anda tahu URL Vercel Anda (mis. `dliyaulhaq.vercel.app`), ganti placeholder `https://namaanda.vercel.app` di 3 file berikut:
  - `app/layout.tsx` (bagian `metadataBase`)
  - `app/sitemap.ts`
  - `app/robots.ts`
- [ ] Cek tampilan di mobile & desktop (`npm run dev`, resize browser atau buka DevTools device toolbar)

## 3. Deploy ke Vercel (Gratis)

1. Buat repository baru di GitHub, lalu push project ini:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — portofolio"
   git branch -M main
   git remote add origin <URL_REPO_GITHUB_ANDA>
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com) → sign in dengan akun GitHub.
3. Klik **New Project** → pilih repository ini → klik **Deploy**.
4. Setelah selesai, website online di `nama-project.vercel.app`.
5. Kembali ke checklist di atas untuk update 3 file domain, lalu `git push` lagi — Vercel otomatis redeploy.

**Custom domain (opsional, sangat murah):** jika ingin domain `.my.id` (~Rp15.000/tahun), beli di registrar lokal (mis. PANDI/Niagahoster), lalu tambahkan di Vercel: Project → Settings → Domains.

## 4. Struktur Project

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout, font, LanguageProvider, metadata dasar
│   ├── template.tsx            # Page transition otomatis antar route
│   ├── page.tsx                 # Home Page
│   ├── globals.css              # Base styles, reduced-motion, focus ring
│   ├── sitemap.ts               # Sitemap otomatis (SEO)
│   ├── robots.ts                # Robots.txt otomatis (SEO)
│   ├── not-found.tsx            # Halaman 404 custom
│   ├── about/page.tsx           # Server wrapper (metadata) → AboutContent
│   ├── experience/page.tsx      # Server wrapper (metadata) → ExperienceContent
│   ├── projects/
│   │   ├── page.tsx              # Server wrapper (metadata) → ProjectsContent
│   │   └── [slug]/page.tsx       # Detail dinamis per project
│   └── contact/page.tsx         # Server wrapper (metadata) → ContactContent
├── components/
│   ├── Navbar.tsx                # Shrink+blur saat scroll, toggle bahasa berfungsi
│   ├── Footer.tsx
│   ├── Reveal.tsx                # Wrapper animasi scroll-reveal reusable
│   ├── LanguageProvider.tsx      # Context global untuk state bahasa (ID/EN)
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── Card.tsx               # + varian ComingSoonCard (shimmer effect)
│   └── sections/
│       ├── Hero.tsx
│       ├── SkillsHighlight.tsx
│       ├── SkillMatrix.tsx        # Tab filter interaktif (About)
│       ├── ExperiencePreview.tsx  # Preview di Home
│       ├── ExperienceTimeline.tsx # Timeline detail (Experience)
│       ├── ProjectPreview.tsx
│       ├── CertificationsStrip.tsx
│       ├── CTA.tsx
│       ├── AboutContent.tsx       # Client content untuk /about
│       ├── ExperienceContent.tsx  # Client content untuk /experience
│       ├── ProjectsContent.tsx    # Client content untuk /projects
│       ├── ProjectDetailContent.tsx
│       └── ContactContent.tsx     # Client content untuk /contact
├── lib/
│   ├── i18n.ts                   # SEMUA teks ID/EN (single source of truth)
│   └── data.ts                   # Data struktural non-teks (email, slug, IPK)
├── tailwind.config.ts            # Design tokens: warna, font, spacing, shadow
└── package.json
```

**Pola penting**: setiap halaman punya `page.tsx` (Server Component, hanya untuk `export const metadata`) yang merender `*Content.tsx` (Client Component, untuk animasi & teks dwibahasa). Ini menjaga SEO metadata tetap jalan meski kontennya interaktif.

## 5. Menambahkan Project Baru

Ketika project analisis data Anda selesai:
1. Buka `lib/data.ts`, ubah `status: "coming-soon"` menjadi `status: "published"` pada project terkait (atau tambah project baru).
2. Buka `lib/i18n.ts`, tambahkan konten lengkap (judul, deskripsi, hasil analisis) di kedua bahasa.
3. Lengkapi `components/sections/ProjectDetailContent.tsx` dengan tampilan detail penuh (gambar, insight, kesimpulan).

## 6. Menerjemahkan / Mengubah Teks

Semua teks yang tampil di website ada di **satu file**: `lib/i18n.ts`, dipisah `id` dan `en`. Edit di sana — tidak perlu menyentuh komponen manapun.

## 7. Design Tokens

- **Warna**: `primary` (#1E3A8A), `primary-light` (#3B82F6) — lihat `tailwind.config.ts`
- **Font**: `font-heading` (Plus Jakarta Sans), `font-body` (Inter) — di-load via `next/font`
- **Aksesibilitas**: focus ring terlihat untuk keyboard navigation, seluruh animasi menghormati `prefers-reduced-motion`
