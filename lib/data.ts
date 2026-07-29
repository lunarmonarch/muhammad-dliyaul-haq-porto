/**
 * Data STRUKTURAL saja (bukan teks yang diterjemahkan).
 * Semua teks yang tampil ke user (judul, deskripsi, label) ada di lib/i18n.ts
 * agar konsisten antara versi ID dan EN.
 */

export const projects = [
  {
    slug: "data-analysis-project",
    status: "coming-soon" as const,
  },
];

export const contact = {
  email: "dliyaoke125@gmail.com",
  linkedin: "www.linkedin.com/in/muhammad-dliya-ul-haq-48ba60281",
};

export const photoProfile = {
  src: "/photo-profile.jpg",
  alt: "Foto profil Muhammad Dliya'ul Haq",
};

// Urutan array ini SEJAJAR dengan urutan t.certifications.items di lib/i18n.ts
export const certificateImages = [
  {
    src: "/certificates/sertifikat-k3-bnsp.jpg",
    alt: "Sertifikat K3 BNSP",
  },
  {
    src: "/certificates/sertifikat-cefr-b2.jpg",
    alt: "Sertifikat CEFR B2 British Council",
  },
];

export const profile = {
  name: "Muhammad Dliya'ul Haq",
  education: {
    institution: "Universitas 17 Agustus 1945 Surabaya",
    gpa: 3.7,
    maxGpa: 4.0,
  },
};
