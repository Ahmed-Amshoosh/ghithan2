// ملف بيانات المشاريع - 48 صورة موزعة على 6 مشاريع
const projectsData = {
  "projects": [
    // ========================================
    // المشروع الأول: شركة TechCorp (8 صور)
    // ========================================
    {
      "id": "techcorp",
      "title": "شركة TechCorp",
      "description": "هوية بصرية كاملة لشركة تقنية ناشئة",
      "category": "branding",
      "categoryName": "هوية بصرية",
      "image": "./imgs/img-1.jpg",
      "count": 8,
      "clientName": "شركة TechCorp",
      "clientDesc": "شركة تقنية ناشئة متخصصة في حلول البرمجيات",
      "works": [
        { "src": "./imgs/img-1.jpg", "title": "صورة الغلاف" },
        { "src": "./imgs/img-2.jpg", "title": "تصميم 2" },
        { "src": "./imgs/img-3.jpg", "title": "تصميم 3" },
        { "src": "./imgs/img-4.jpg", "title": "تصميم 4" },
        { "src": "./imgs/img-5.jpg", "title": "تصميم 5" },
        { "src": "./imgs/img-6.jpg", "title": "تصميم 6" },
        { "src": "./imgs/img-7.jpg", "title": "تصميم 7" },
        { "src": "./imgs/img-8.jpg", "title": "تصميم 8" }
      ]
    },

    // ========================================
    // المشروع الثاني: مطعم La Cuisine (8 صور)
    // ========================================
    {
      "id": "restaurant",
      "title": "مطعم La Cuisine",
      "description": "شعار وهوية بصرية لمطعم فاخر",
      "category": "branding",
      "categoryName": "هوية بصرية",
      "image": "./imgs/img-9.jpg",
      "count": 8,
      "clientName": "مطعم La Cuisine",
      "clientDesc": "مطعم فاخر يقدم أشهى المأكولات",
      "works": [
        { "src": "./imgs/img-9.jpg", "title": "صورة الغلاف" },
        { "src": "./imgs/img-10.jpg", "title": "تصميم 10" },
        { "src": "./imgs/img-11.jpg", "title": "تصميم 11" },
        { "src": "./imgs/img-12.jpg", "title": "تصميم 12" },
        { "src": "./imgs/img-13.jpg", "title": "تصميم 13" },
        { "src": "./imgs/img-14.jpg", "title": "تصميم 14" },
        { "src": "./imgs/img-15.jpg", "title": "تصميم 15" },
        { "src": "./imgs/img-16.jpg", "title": "تصميم 16" }
      ]
    },

    // ========================================
    // المشروع الثالث: ماركة StyleHub (8 صور)
    // ========================================
    {
      "id": "fashion",
      "title": "ماركة StyleHub",
      "description": "حملات سوشيال ميديا لماركة أزياء عصرية",
      "category": "social",
      "categoryName": "سوشيال ميديا",
      "image": "./imgs/img-17.jpg",
      "count": 8,
      "clientName": "ماركة StyleHub",
      "clientDesc": "ماركة أزياء عصرية للشباب",
      "works": [
        { "src": "./imgs/img-17.jpg", "title": "صورة الغلاف" },
        { "src": "./imgs/img-18.jpg", "title": "تصميم 18" },
        { "src": "./imgs/img-19.jpg", "title": "تصميم 19" },
        { "src": "./imgs/img-20.jpg", "title": "تصميم 20" },
        { "src": "./imgs/img-21.jpg", "title": "تصميم 21" },
        { "src": "./imgs/img-22.jpg", "title": "تصميم 22" },
        { "src": "./imgs/img-23.jpg", "title": "تصميم 23" },
        { "src": "./imgs/img-24.jpg", "title": "تصميم 24" }
      ]
    },

    // ========================================
    // المشروع الرابع: شركة HomeFirst (8 صور)
    // ========================================
    {
      "id": "realestate",
      "title": "شركة HomeFirst",
      "description": "بروشورات ومطبوعات لشركة عقارية رائدة",
      "category": "print",
      "categoryName": "مطبوعات",
      "image": "./imgs/img-25.jpg",
      "count": 8,
      "clientName": "شركة HomeFirst",
      "clientDesc": "شركة عقارية رائدة في التطوير العقاري",
      "works": [
        { "src": "./imgs/img-25.jpg", "title": "صورة الغلاف" },
        { "src": "./imgs/img-26.jpg", "title": "تصميم 26" },
        { "src": "./imgs/img-27.jpg", "title": "تصميم 27" },
        { "src": "./imgs/img-28.jpg", "title": "تصميم 28" },
        { "src": "./imgs/img-29.jpg", "title": "تصميم 29" },
        { "src": "./imgs/img-30.jpg", "title": "تصميم 30" },
        { "src": "./imgs/img-31.jpg", "title": "تصميم 31" },
        { "src": "./imgs/img-32.jpg", "title": "تصميم 32" }
      ]
    },

    // ========================================
    // المشروع الخامس: تطبيق FitLife (8 صور)
    // ========================================
    {
      "id": "app",
      "title": "تطبيق FitLife",
      "description": "تصميم واجهات UI/UX لتطبيق لياقة بدنية",
      "category": "web",
      "categoryName": "تصميم ويب",
      "image": "./imgs/img-33.jpg",
      "count": 8,
      "clientName": "تطبيق FitLife",
      "clientDesc": "تطبيق لياقة بدنية وتتبع الصحة",
      "works": [
        { "src": "./imgs/img-33.jpg", "title": "صورة الغلاف" },
        { "src": "./imgs/img-34.jpg", "title": "تصميم 34" },
        { "src": "./imgs/img-35.jpg", "title": "تصميم 35" },
        { "src": "./imgs/img-36.jpg", "title": "تصميم 36" },
        { "src": "./imgs/img-37.jpg", "title": "تصميم 37" },
        { "src": "./imgs/img-38.jpg", "title": "تصميم 38" },
        { "src": "./imgs/img-39.jpg", "title": "تصميم 39" },
        { "src": "./imgs/img-40.jpg", "title": "تصميم 40" }
      ]
    },

    // ========================================
    // المشروع السادس: مقهى Brew & Co (8 صور)
    // ========================================
    {
      "id": "cafe",
      "title": "مقهى Brew & Co",
      "description": "هوية بصرية كاملة لمقهى عصري",
      "category": "branding",
      "categoryName": "هوية بصرية",
      "image": "./imgs/img-41.jpg",
      "count": 8,
      "clientName": "مقهى Brew & Co",
      "clientDesc": "مقهى عصري يقدم أفضل أنواع القهوة",
      "works": [
        { "src": "./imgs/img-41.jpg", "title": "صورة الغلاف" },
        { "src": "./imgs/img-42.jpg", "title": "تصميم 42" },
        { "src": "./imgs/img-43.jpg", "title": "تصميم 43" },
        { "src": "./imgs/img-44.jpg", "title": "تصميم 44" },
        { "src": "./imgs/img-45.jpg", "title": "تصميم 45" },
        { "src": "./imgs/img-46.jpg", "title": "تصميم 46" },
        { "src": "./imgs/img-47.jpg", "title": "تصميم 47" },
        { "src": "./imgs/img-48.jpg", "title": "تصميم 48" }
      ]
    }
  ]
};