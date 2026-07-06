const projectsData = {
  projects: [

    // ===============================
    // تصاميم الجمعيات
    // ===============================
    {
      id: "charity-designs",
      title: "تصاميم الجمعيات",
      description: "مجموعة من التصاميم المنفذة للجمعيات والمؤسسات الخيرية",
      category: "associations",
      categoryName: "تصاميم الجمعيات",
      image: "./imgs/charity_designs/charity_designs-1.jpg",
      count: 20,
      clientName: "تصاميم الجمعيات",
      clientDesc: "أعمال متنوعة للجمعيات والمؤسسات",
      works: Array.from({length:20},(_,i)=>({
        src:`./imgs/charity_designs/charity_designs-${i+1}.jpg`,
        title:`تصميم ${i+1}`
      }))
    },

    // ===============================
    // الملفات
    // ===============================
    {
      id: "files",
      title: "الملفات",
      description: "تصاميم ملفات تعريفية وتقارير وعروض",
      category: "files",
      categoryName: "الملفات",
      image: "./imgs/files/file-1.jpg",
      count: 6,
      clientName: "تصاميم الملفات",
      clientDesc: "ملفات تعريفية وعروض تقديمية",
      works: Array.from({length:6},(_,i)=>({
        src:`./imgs/files/file-${i+1}.jpg`,
        title:`ملف ${i+1}`
      }))
    },

    // ===============================
    // السوشيال ميديا
    // ===============================
    {
      id: "social-media",
      title: "تصاميم السوشيال ميديا",
      description: "منشورات وإعلانات لمنصات التواصل الاجتماعي",
      category: "social",
      categoryName: "تصاميم السوشيال ميديا",
      image: "./imgs/social_media/social_media-1.jpg",
      count: 18,
      clientName: "السوشيال ميديا",
      clientDesc: "منشورات احترافية لمختلف المنصات",
      works: Array.from({length:18},(_,i)=>({
        src:`./imgs/social_media/social_media-${i+1}.jpg`,
        title:`تصميم ${i+1}`
      }))
    },

    // ===============================
    // البنرات
    // ===============================
    {
      id: "banners",
      title: "بنرات",
      description: "بنرات وإعلانات متنوعة",
      category: "banners",
      categoryName: "بنرات",
      image: "./imgs/banners/banner-1.jpg",
      count: 4,
      clientName: "البنرات",
      clientDesc: "بنرات وإعلانات متنوعة",
      works: Array.from({length:4},(_,i)=>({
        src:`./imgs/banners/banner-${i+1}.jpg`,
        title:`بنر ${i+1}`
      }))
    }

  ]
};