import { Language } from '../types';

export const translations = {
  en: {
    nav: {
      products: "Products",
      catalog: "Catalog",
      innovation: "About Us",
      support: "Order / Contact",
    },
    hero: {
      titleLine1: "PRIME",
      titleLine2: "Transmission BELTS",
      subtitle: "PRIME launched high quality power transmission belts.",
      subtitle2: "Take a look at our products and you can connect with us or open a ticket to order.",
      cta: "View Products",
    },
    about: {
      title: "Our Legacy",
      subtitle: "20 Years of Innovation",
      description: "The Masara family and their dedicated team of employees have 20 years of innovation and creativity, and they are constantly working to achieve the best. For us, our continuous investment in improving employers is integral to the path to success.",
      stats: [
        { value: "20+", label: "Years Experience" },
        { value: "4", label: "Product Series" },
        { value: "ISO 9001", label: "Certified" }
      ]
    },
    productsSection: {
      title: "Products",
      intro: "PRIME has launched many types of power transmission belts.",
      featuresLabel: "Features",
      structureLabel: "Structure and Material",
      viewSpecs: "View Specifications",
      items: [
        {
          id: "timing",
          title: "Timing Belt",
          features: [
            "Super-high mechanical efficiency",
            "Low noise operation",
            "No need of lubricant",
            "Prevention of skidding"
          ],
          structure: [
            "The high tensile body (core wire) consists of glass fiber, which possesses high tensile strength and elasticity to prevent belt stretching.",
            "The rubber teeth exhibit strong thermotolerance and oil resistance, along with a super strong cohesion between the core wire of the tensile body and the rubber teeth.",
            "The nylon fabric exhibits excellent frictional resistance and a low skin-friction coefficient, contributing to the prolongation of the product's service life."
          ]
        },
        {
          id: "ribbed",
          title: "V-Ribbed Belt",
          features: [
            "Exceptional flexibility and ability to handle both small belt wheels and reverse bending",
            "Excellent transmission efficiency",
            "Minimal noise",
            "Reliable driving performance"
          ],
          structure: [
            "Upper fabric: A synthetic fabric with a special rubber layer ensures excellent heat resistance, oil resistance, and wear resistance.",
            "Tensile body (core wire): The heat-treated core wire enables it to withstand high shock loads.",
            "Rib rubber: Fiber-reinforced compound rubber ensures outstanding heat resistance, oil resistance, and durability."
          ]
        },
        {
          id: "rawedge",
          title: "Raw Edge V-Belt",
          features: [
            "High power transmission capacity",
            "Anti-static, oil and heat resistant",
            "Excellent flexibility"
          ],
          structure: [
            "Top fabric: Excellent heat, oil, and wear resistance.",
            "Tension member: Specially heat-treated cords that provide high modulus and resistance to shock loads.",
            "Adhesion rubber: Maintains the integrity of the cord line.",
            "Compression rubber: Reinforced with fibers to maintain cross-sectional shape."
          ]
        },
        {
          id: "wrapped",
          title: "Wrapped V-Belt",
          features: [
            "High power capacity",
            "Excellent flexibility",
            "Protection against oil, heat, and abrasion"
          ],
          structure: [
            "Rubberized fabric cover: Protects internal components.",
            "Fan belt compression rubber section: Resists compression fatigue.",
            "Adhesion rubber section: Bonds the cords to the compression section."
          ]
        }
      ]
    },
    catalog: {
      title: "PRIME Catalog",
      subtitle: "Identify the exact belts for your engine instantly.",
      quickSearch: "Quick Search",
      manualEntry: "Manual Entry",
      labels: {
        year: "Year",
        make: "Make",
        model: "Model",
        engine: "Engine",
        vin: "VIN (Optional)"
      },
      submit: "Find Specifications",
      reset: "Start Over",
      errors: {
        incomplete: "Please complete all vehicle details.",
        failed: "Could not retrieve data. Please try again."
      }
    },
    results: {
      vehicleIdentified: "Vehicle Identified",
      specificationsFound: "Specifications Found",
      specification: "Specification",
      refPart: "Ref Part #",
      notes: "Notes"
    },
    beltTypes: {
      "Serpentine": "Serpentine",
      "Timing": "Timing",
      "V-Belt": "V-Belt",
      "Other": "Other"
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Order directly or request support.",
      email: "usprime@outlook.sa",
      letter: {
        intro: "We are committed to providing the highest quality transmission solutions for your business.",
        signOffName: "Obeida (عبيدة)",
        signOffDept: "Manager | Overseas Sales Team, Sales Division PRIME"
      },
      form: {
        companyName: "Company Name",
        phone: "Phone Number",
        email: "Email Address",
        targetMarket: "Target Market / Country",
        inquiry: "Your Inquiry / Order Details"
      },
      submit: "Send Message"
    },
    footer: {
      copyright: "© 2024 PRIME Power Transmission. All rights reserved."
    }
  },
  ar: {
    nav: {
      products: "المنتجات",
      catalog: "الكتالوج",
      innovation: "من نحن",
      support: "طلب / اتصل بنا",
    },
    hero: {
      titleLine1: "أحزمة برايم",
      titleLine2: "لنقل الحركة",
      subtitle: "شركة برايم تقدم أحزمة نقل حركة عالية الجودة.",
      subtitle2: "ألق نظرة على منتجاتنا ويمكنك التواصل معنا أو فتح تذكرة للطلب.",
      cta: "عرض المنتجات",
    },
    about: {
      title: "إرثنا",
      subtitle: "٢٠ عاماً من الابتكار",
      description: "عائلة مسرة وفريق عملهم المتفاني يمتلكون ٢٠ عاماً من الابتكار والإبداع، وهم يعملون باستمرار لتحقيق الأفضل. بالنسبة لنا، استثمارنا المستمر في تطوير موظفينا هو جزء لا يتجزأ من طريق النجاح.",
      stats: [
        { value: "+٢٠", label: "عاماً من الخبرة" },
        { value: "٤", label: "سلاسل منتجات" },
        { value: "ISO 9001", label: "شهادة معتمدة" }
      ]
    },
    productsSection: {
      title: "المنتجات",
      intro: "أطلقت برايم العديد من أنواع أحزمة نقل الطاقة.",
      featuresLabel: "المميزات",
      structureLabel: "التركيب والمواد",
      viewSpecs: "عرض المواصفات",
      items: [
        {
          id: "timing",
          title: "سير التايمن (Timing Belt)",
          features: [
            "كفاءة ميكانيكية فائقة",
            "تشغيل منخفض الضوضاء",
            "لا يحتاج إلى تزييت",
            "منع الانزلاق"
          ],
          structure: [
            "جسم شد عالي (سلك أساسي): يتكون من الألياف الزجاجية التي تمتلك قوة شد ومرونة عالية لمنع تمدد الحزام.",
            "الأسنان المطاطية: تظهر مقاومة قوية للحرارة والزيت، مع تماسك فائق القوة بين السلك الأساسي والأسنان.",
            "نسيج النايلون: يظهر مقاومة ممتازة للاحتكاك ومعامل احتكاك منخفض، مما يساهم في إطالة عمر المنتج."
          ]
        },
        {
          id: "ribbed",
          title: "سير الماكينة (V-Ribbed Belt)",
          features: [
            "مرونة استثنائية وقدرة على التعامل مع بكرات الحزام الصغيرة والانحناء العكسي",
            "كفاءة ممتازة في نقل الحركة",
            "ضوضاء قليلة جداً",
            "أداء قيادة موثوق"
          ],
          structure: [
            "النسيج العلوي: نسيج صناعي مع طبقة مطاطية خاصة يضمن مقاومة ممتازة للحرارة والزيت والتآكل.",
            "جسم الشد (السلك الأساسي): السلك الأساسي المعالج بالحرارة يتيح له تحمل أحمال الصدمات العالية.",
            "مطاط الأضلاع: مطاط مركب مقوى بالألياف يضمن مقاومة متميزة للحرارة والزيت والمتانة."
          ]
        },
        {
          id: "rawedge",
          title: "Raw Edge V-Belt",
          features: [
            "قدرة عالية على نقل الطاقة",
            "مقاوم للكهرباء الساكنة والزيوت والحرارة",
            "مرونة ممتازة"
          ],
          structure: [
            "النسيج العلوي: مقاومة ممتازة للحرارة والزيوت والتآكل.",
            "عضو الشد: حبال معالجة بالحرارة توفر معامل عالي ومقاومة لأحمال الصدمات.",
            "مطاط الالتصاق: يحافظ على سلامة خط الحبل.",
            "مطاط الضغط: مقوى بالألياف للحفاظ على شكل المقطع العرضي."
          ]
        },
        {
          id: "wrapped",
          title: "Wrapped V-Belt",
          features: [
            "قدرة طاقة عالية",
            "مرونة ممتازة",
            "حماية ضد الزيت والحرارة والتآكل"
          ],
          structure: [
            "غطاء نسيج مطاطي: يحمي المكونات الداخلية.",
            "قسم مطاط ضغط حزام المروحة: يقاوم إجهاد الضغط.",
            "قسم مطاط الالتصاق: يربط الحبال بقسم الضغط."
          ]
        }
      ]
    },
    catalog: {
      title: "كتالوج برايم",
      subtitle: "حدد الأحزمة المناسبة لمحركك فوراً.",
      quickSearch: "بحث سريع",
      manualEntry: "إدخال يدوي",
      labels: {
        year: "السنة",
        make: "الشركة المصنعة",
        model: "الموديل",
        engine: "المحرك",
        vin: "رقم الهيكل (اختياري)"
      },
      submit: "البحث عن المواصفات",
      reset: "بحث جديد",
      errors: {
        incomplete: "الرجاء إكمال جميع بيانات المركبة.",
        failed: "تعذر استرداد البيانات. الرجاء المحاولة مرة أخرى."
      }
    },
    results: {
      vehicleIdentified: "تم التعرف على المركبة",
      specificationsFound: "المواصفات الموجودة",
      specification: "المواصفات",
      refPart: "رقم القطعة المرجعي",
      notes: "ملاحظات"
    },
    beltTypes: {
      "Serpentine": "سير ماكينة (Serpentine)",
      "Timing": "سير تايمن (Timing)",
      "V-Belt": "سير V",
      "Other": "أخرى"
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "اطلب مباشرة أو اطلب الدعم.",
      email: "usprime@outlook.sa",
      letter: {
        intro: "نحن ملتزمون بتقديم حلول نقل حركة عالية الجودة لأعمالك.",
        signOffName: "عبيدة",
        signOffDept: "مدير | فريق المبيعات الخارجية، قسم مبيعات برايم"
      },
      form: {
        companyName: "اسم الشركة",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        targetMarket: "السوق المستهدف / الدولة",
        inquiry: "تفاصيل استفسارك / طلبك"
      },
      submit: "إرسال الرسالة"
    },
    footer: {
      copyright: "© 2024 برايم لنقل الطاقة. جميع الحقوق محفوظة."
    }
  }
};