export type Locale = "id" | "en";

export const translations = {
  id: {
    nav: {
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Project",
      contact: "Kontak",
    },
    profile: {
      role: "Industrial Engineer | Data-Driven Operations",
      tagline:
        "Membantu operasional produksi berjalan lebih rapi, aman, dan berbasis data — dari penjadwalan maintenance hingga penyusunan SOP.",
    },
    hero: {
      badge: "Fresh Graduate — Teknik Industri",
      greeting: "Halo, saya",
      downloadCv: "Download CV",
      contactMe: "Hubungi Saya",
    },
    skillsHighlight: {
      heading: "Apa yang Saya Kuasai",
      subtitle:
        "Kombinasi kompetensi operasional, keselamatan kerja, dan analisis data — dibentuk dari pengalaman langsung di lapangan.",
      items: [
        {
          title: "Data & Analytics",
          desc: "Excel, Looker Studio, dan visualisasi data untuk mendukung keputusan operasional.",
        },
        {
          title: "Operasi & Proses",
          desc: "Preventive maintenance, SOP, dan production planning & control.",
        },
        {
          title: "K3 & Safety",
          desc: "Bersertifikat BNSP sebagai Petugas Keselamatan dan Kesehatan Kerja.",
        },
        {
          title: "Soft Skill",
          desc: "Penilaian kinerja karyawan & penyusunan laporan teknis yang jelas.",
        },
      ],
    },
    experiencePreview: {
      heading: "Pengalaman yang Membentuk Saya",
      position: "Internship",
      summary:
        "Terlibat langsung dalam empat area operasional utama — dari penjadwalan preventive maintenance, penyusunan SOP mesin baru, pembuatan form penilaian kinerja, hingga stock opname.",
      highlights: [
        "Menyusun jadwal preventive maintenance",
        "Menyusun SOP mesin baru",
        "Membuat form penilaian kinerja",
        "Stock opname & inventory check",
      ],
      viewDetail: "Lihat Detail",
    },
    projectPreview: {
      heading: "Project Saya",
      subtitle:
        "Sedang menyusun project analisis data pertama untuk ditampilkan di sini — akan mendemonstrasikan proses olah data dari mentah hingga insight yang bisa ditindaklanjuti.",
      comingSoonBadge: "Coming Soon",
      cardTitle: "Data Analysis Project",
      cardDesc: "Studi kasus analisis data operasional — dipublikasikan segera.",
    },
    certifications: {
      heading: "Sertifikasi",
      items: [
        { name: "Petugas Keselamatan dan Kesehatan Kerja (K3)", issuer: "BNSP" },
        { name: "CEFR B2 — Upper Intermediate", issuer: "British Council" },
      ],
    },
    cta: {
      heading: "Mari Terhubung",
      subtitle:
        "Terbuka untuk peluang di bidang operasional, K3, maupun analisis data. Jangan ragu untuk menghubungi saya.",
      sendEmail: "Kirim Email",
      downloadCv: "Download CV",
    },
    footer: {
      builtWith: "Dibangun dengan Next.js.",
      email: "Email",
      linkedin: "LinkedIn",
    },
    about: {
      eyebrow: "Tentang Saya",
      heading: "Mengenal Perjalanan Saya Lebih Dekat",
      narrative: [
        "Saya lulus dari Teknik Industri Universitas 17 Agustus 1945 Surabaya dengan IPK 3.70, dengan minat besar pada bagaimana operasional produksi bisa berjalan lebih rapi, aman, dan terukur lewat data.",
        "Ketertarikan ini semakin kuat saat menjalani magang di PT Realfood Winta Asia, tempat saya belajar bahwa efisiensi operasional bukan cuma soal mesin bekerja lancar — tapi juga soal sistem yang terdokumentasi, keselamatan kerja yang terjaga, dan keputusan yang didukung data yang akurat.",
        "Ke depan, saya ingin terus mengasah kemampuan di persimpangan antara Teknik Industri dan Data Analytics — membantu perusahaan manufaktur mengambil keputusan operasional yang lebih baik berdasarkan data, tanpa melupakan aspek keselamatan dan standar kerja yang jelas.",
      ],
      educationHeading: "Pendidikan",
      major: "Teknik Industri",
      gpaLabel: "IPK",
      certHeading: "Sertifikasi",
      skillMatrixHeading: "Skill Matrix",
      skillMatrixSubtitle: "Klik kategori untuk menyaring kompetensi yang ingin Anda lihat.",
      skillTabAll: "Semua",
    },
    skillCategories: [
      {
        title: "Data & Analytics",
        skills: [
          "Microsoft Excel",
          "Looker Studio",
          "Analisis Data Dasar",
          "Data Visualization",
          "Pengolahan dan Analisis Data",
        ],
      },
      {
        title: "Operasi & Proses",
        skills: [
          "Preventive Maintenance Scheduling",
          "Penyusunan SOP",
          "Inventory Management (Stock Opname)",
          "Production Planning and Control",
          "Goal Programming (Optimasi)",
        ],
      },
      {
        title: "Safety & Compliance",
        skills: ["Occupational Safety and Health (K3)"],
      },
      {
        title: "Soft Skill & Lainnya",
        skills: ["Penilaian Kinerja Karyawan", "Penyusunan Laporan Teknis"],
      },
    ],
    experiencePage: {
      badge: "Internship",
      subtitle:
        "Empat area kerja utama yang saya jalani selama magang, disusun dalam format Situasi–Tugas–Aksi–Hasil agar konteks dan dampaknya lebih jelas terlihat.",
      backToProjects: "Kembali ke Project",
      labels: { situation: "Situasi", task: "Tugas", action: "Aksi", result: "Hasil" },
      items: [
        {
          title: "Preventive Maintenance Scheduling",
          situation:
            "Beberapa mesin produksi berisiko mengalami downtime tak terduga karena belum ada jadwal perawatan yang terstruktur.",
          task: "Ditugaskan menyusun dan mengelola jadwal preventive maintenance untuk beberapa mesin produksi.",
          action:
            "Memetakan siklus perawatan tiap mesin, menyusun jadwal berkala, dan mengoordinasikan pelaksanaannya dengan tim terkait.",
          result: "Mesin beroperasi lebih optimal dengan risiko kerusakan mendadak yang lebih terkendali.",
        },
        {
          title: "Penyusunan SOP Mesin Baru",
          situation:
            "Perusahaan akan mengimplementasikan mesin baru dalam proses produksi tanpa panduan operasional yang baku.",
          task: "Melakukan penelitian dan menyusun Standar Operasional Prosedur (SOP) untuk mesin tersebut.",
          action:
            "Mempelajari cara kerja mesin, mengumpulkan referensi teknis, dan menyusunnya menjadi SOP yang mudah diikuti operator.",
          result: "SOP siap digunakan sebagai panduan resmi implementasi mesin baru dalam proses produksi.",
        },
        {
          title: "Form Penilaian Kinerja Karyawan",
          situation: "Evaluasi performa karyawan belum memiliki alat bantu terstandarisasi.",
          task: "Membuat form penilaian kinerja karyawan sebagai alat bantu evaluasi.",
          action:
            "Merancang kriteria penilaian yang relevan dan format form yang mudah diisi serta didokumentasikan.",
          result: "Tersedia alat evaluasi yang lebih konsisten untuk mendukung proses penilaian kinerja.",
        },
        {
          title: "Stock Opname & Inventory Check",
          situation: "Perlu memastikan data persediaan perusahaan sesuai dengan kondisi stok fisik di lapangan.",
          task: "Membantu pelaksanaan stock opname melalui pencatatan dan pengecekan.",
          action: "Melakukan pencatatan sistematis dan mencocokkan hasilnya dengan data persediaan yang tercatat.",
          result: "Diperoleh gambaran akurat mengenai kesesuaian stok fisik dan data persediaan perusahaan.",
        },
      ],
    },
    projectsPage: {
      eyebrow: "Project",
      heading: "Project yang Sedang Saya Bangun",
      subtitle:
        "Project pertama saya sedang dalam proses pengerjaan. Halaman ini akan diperbarui begitu project selesai dipublikasikan.",
      comingSoonNote:
        "Detail lengkap studi kasus — termasuk metodologi, dataset, dan insight — akan dipublikasikan di halaman ini setelah project selesai dikerjakan.",
      backToProjects: "Kembali ke Project",
    },
    contactPage: {
      eyebrow: "Kontak",
      heading: "Mari Terhubung",
      subtitle:
        "Terbuka untuk peluang di bidang operasional, K3, maupun analisis data. Silakan hubungi saya melalui salah satu kanal di bawah, atau unduh CV lengkap saya.",
      emailLabel: "Email",
      sendEmail: "Kirim Email",
      linkedinLabel: "LinkedIn",
      linkedinDesc: "Terhubung secara profesional",
      openLinkedin: "Buka LinkedIn",
      cvHeading: "Ingin Lihat CV Lengkap Saya?",
      cvSubtitle:
        "Unduh CV dalam format PDF untuk detail riwayat pendidikan, pengalaman, dan sertifikasi secara lengkap.",
      downloadCv: "Download CV",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    profile: {
      role: "Industrial Engineer | Data-Driven Operations",
      tagline:
        "Helping production operations run more smoothly, safely, and data-informed — from maintenance scheduling to SOP development.",
    },
    hero: {
      badge: "Fresh Graduate — Industrial Engineering",
      greeting: "Hi, I'm",
      downloadCv: "Download CV",
      contactMe: "Contact Me",
    },
    skillsHighlight: {
      heading: "What I Bring to the Table",
      subtitle:
        "A blend of operations, workplace safety, and data analysis competencies — shaped through hands-on field experience.",
      items: [
        {
          title: "Data & Analytics",
          desc: "Excel, Looker Studio, and data visualization to support operational decisions.",
        },
        {
          title: "Operations & Process",
          desc: "Preventive maintenance, SOP development, and production planning & control.",
        },
        {
          title: "OHS & Safety",
          desc: "BNSP-certified Occupational Health and Safety Officer.",
        },
        {
          title: "Soft Skills",
          desc: "Employee performance appraisal & clear technical report writing.",
        },
      ],
    },
    experiencePreview: {
      heading: "Experience That Shaped Me",
      position: "Internship",
      summary:
        "Directly involved in four core operational areas — from preventive maintenance scheduling, new-machine SOP development, performance appraisal forms, to stock opname.",
      highlights: [
        "Preventive maintenance scheduling",
        "New machine SOP development",
        "Performance appraisal forms",
        "Stock opname & inventory check",
      ],
      viewDetail: "View Details",
    },
    projectPreview: {
      heading: "My Projects",
      subtitle:
        "Currently working on my first data analysis project to be featured here — it will demonstrate the process of turning raw data into actionable insight.",
      comingSoonBadge: "Coming Soon",
      cardTitle: "Data Analysis Project",
      cardDesc: "An operational data analysis case study — publishing soon.",
    },
    certifications: {
      heading: "Certifications",
      items: [
        { name: "Occupational Health and Safety Officer (K3)", issuer: "BNSP" },
        { name: "CEFR B2 — Upper Intermediate", issuer: "British Council" },
      ],
    },
    cta: {
      heading: "Let's Connect",
      subtitle:
        "Open to opportunities in operations, workplace safety, or data analysis. Feel free to reach out.",
      sendEmail: "Send Email",
      downloadCv: "Download CV",
    },
    footer: {
      builtWith: "Built with Next.js.",
      email: "Email",
      linkedin: "LinkedIn",
    },
    about: {
      eyebrow: "About Me",
      heading: "Getting to Know My Journey",
      narrative: [
        "I graduated in Industrial Engineering from Universitas 17 Agustus 1945 Surabaya with a 3.70 GPA, with a strong interest in how production operations can run more smoothly, safely, and measurably through data.",
        "This interest grew stronger during my internship at PT Realfood Winta Asia, where I learned that operational efficiency isn't just about machines running smoothly — it's also about well-documented systems, maintained workplace safety, and decisions backed by accurate data.",
        "Going forward, I want to keep sharpening my skills at the intersection of Industrial Engineering and Data Analytics — helping manufacturing companies make better operational decisions based on data, without losing sight of safety and clear work standards.",
      ],
      educationHeading: "Education",
      major: "Industrial Engineering",
      gpaLabel: "GPA",
      certHeading: "Certifications",
      skillMatrixHeading: "Skill Matrix",
      skillMatrixSubtitle: "Click a category to filter the competencies you'd like to see.",
      skillTabAll: "All",
    },
    skillCategories: [
      {
        title: "Data & Analytics",
        skills: [
          "Microsoft Excel",
          "Looker Studio",
          "Basic Data Analysis",
          "Data Visualization",
          "Data Processing & Analysis",
        ],
      },
      {
        title: "Operations & Process",
        skills: [
          "Preventive Maintenance Scheduling",
          "SOP Development",
          "Inventory Management (Stock Opname)",
          "Production Planning and Control",
          "Goal Programming (Optimization)",
        ],
      },
      {
        title: "Safety & Compliance",
        skills: ["Occupational Safety and Health (K3)"],
      },
      {
        title: "Soft Skills & Others",
        skills: ["Employee Performance Appraisal", "Technical Report Writing"],
      },
    ],
    experiencePage: {
      badge: "Internship",
      subtitle:
        "The four core work areas I handled during my internship, structured in Situation–Task–Action–Result format for clearer context and impact.",
      backToProjects: "Back to Projects",
      labels: { situation: "Situation", task: "Task", action: "Action", result: "Result" },
      items: [
        {
          title: "Preventive Maintenance Scheduling",
          situation:
            "Several production machines were at risk of unexpected downtime due to the lack of a structured maintenance schedule.",
          task: "Assigned to build and manage the preventive maintenance schedule for several production machines.",
          action:
            "Mapped each machine's maintenance cycle, built a periodic schedule, and coordinated execution with the relevant team.",
          result: "Machines ran more optimally with better-controlled risk of sudden breakdowns.",
        },
        {
          title: "New Machine SOP Development",
          situation:
            "The company was about to implement a new machine in the production process without a standardized operating guide.",
          task: "Researched and developed a Standard Operating Procedure (SOP) for the new machine.",
          action:
            "Studied how the machine worked, gathered technical references, and compiled them into an SOP operators could easily follow.",
          result: "The SOP was ready to serve as the official guide for implementing the new machine in production.",
        },
        {
          title: "Employee Performance Appraisal Form",
          situation: "Employee performance evaluation lacked a standardized tool.",
          task: "Created an employee performance appraisal form as an evaluation aid.",
          action:
            "Designed relevant assessment criteria and an easy-to-fill, well-documented form format.",
          result: "A more consistent evaluation tool became available to support the performance appraisal process.",
        },
        {
          title: "Stock Opname & Inventory Check",
          situation: "Needed to ensure the company's inventory data matched the actual physical stock on the ground.",
          task: "Assisted in carrying out stock opname through recording and verification.",
          action: "Performed systematic recording and cross-checked results against recorded inventory data.",
          result: "Obtained an accurate picture of the match between physical stock and the company's inventory data.",
        },
      ],
    },
    projectsPage: {
      eyebrow: "Projects",
      heading: "Projects I'm Currently Building",
      subtitle:
        "My first project is currently in progress. This page will be updated once it's published.",
      comingSoonNote:
        "The full case study — including methodology, dataset, and insights — will be published on this page once the project is complete.",
      backToProjects: "Back to Projects",
    },
    contactPage: {
      eyebrow: "Contact",
      heading: "Let's Connect",
      subtitle:
        "Open to opportunities in operations, workplace safety, or data analysis. Feel free to reach out through any channel below, or download my full CV.",
      emailLabel: "Email",
      sendEmail: "Send Email",
      linkedinLabel: "LinkedIn",
      linkedinDesc: "Connect with me professionally",
      openLinkedin: "Open LinkedIn",
      cvHeading: "Want to See My Full CV?",
      cvSubtitle: "Download my CV in PDF format for full details on education, experience, and certifications.",
      downloadCv: "Download CV",
    },
  },
} as const;
