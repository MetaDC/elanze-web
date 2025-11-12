// projects-data.js - Store all your project data here

const projectsData = {
  Artdecor: {
    title: "Art & Decor",
    category: "Art & Decor",
    heroImage: "img/projects/artdecor/art1.webp", // Hero image for project listing
    mainImage: "img/projects/artdecor/art1.webp", // Banner background image
    places: [
      {
        id: "spacedream",
        title: "Curated Decor",
        heroImage: "img/projects/artdecor/art2.webp", // Hero image for this place
        location: "Vadodara, Gujarat",
        thumbnail: "img/elanze/one.png",
        images: [
          "img/projects/artdecor/art4.webp",
          "img/projects/artdecor/art5.webp",
        ],
        video: "img/projects/artdecor/art3.webp",
        description:
          "This Art & Décor project highlights the beauty of customization and refined styling. The rich color palette, paired with elegant metallic accents, creates a balanced and timeless visual statement.",
        description2:
          "A handcrafted leather trunk anchors the composition, styled with curated artifacts and vibrant florals. At Elanze, we master the art of curation and combination, blending global elegance with personal expression.",
        details: {
          client: "Bellway Homes",
          homes: "3701",
          tenure: "30% affordable, 70% private",
          siteSize: "12ha",
          approved: "July 2025",
        },
      },
      // {
      //   id: "blackspace",
      //   title: "Blackspace House",
      //   heroImage: "img/projects/artdecor/art3.webp", // Hero image for this place
      //   location: "Princeton, NJ, United States",
      //   thumbnail: "img/elanze/two.png",
      //   images: ["img/project1.png", "img/project2.png"],
      //   video: "herovideo_1.mp4",
      //   description: "Elegant modern design with premium finishes throughout.",
      //   details: {
      //     client: "Modern Homes Inc",
      //     homes: "2500",
      //     tenure: "40% affordable, 60% private",
      //     siteSize: "8ha",
      //     approved: "June 2025",
      //   },
      // },
    ],
  },

  commercial: {
    title: "Commercial styling",
    category: "Commercial",
    heroImage: "img/projects/commercial/gallery/g1.webp",
    mainImage: "img/projects/commercial/gallery/g1.webp",
    places: [
      {
        id: "collin-bea",
        title: "Art Gallery",
        heroImage: "img/projects/commercial/gallery/g1.webp",
        location: "Vadodara Gujarat",
        thumbnail: "img/projects/commercial/gallery/g2.webp",
        images: [
          "img/projects/commercial/gallery/g4.webp",
          "img/projects/commercial/gallery/g5.webp",
        ],
        video: "img/projects/commercial/gallery/g3.webp",
        description:
          " Gallery MOLD is a 1400 sq.ft art space designed with warmth and precision. Wooden flooring, soft wall tones, and refined lighting create a calm, inviting setting. Custom-designed pedestals in varied forms highlight each artwork uniquely, while outdoor greens complete the ambiance — a perfect harmony of simplicity, balance, and modern sophistication.",
        description2: " ",

        details: {
          client: "Heritage Builders",
          homes: "1800",
          tenure: "25% affordable, 75% private",
          siteSize: "6ha",
          approved: "August 2025",
        },
      },
      {
        id: "one-stone",
        title: "Corporate Office",
        heroImage: "img/projects/commercial/naman/com1.webp",
        location: "Vadodara, Gujarat, India",
        thumbnail: "img/elanze/four.png",
        images: [
          "img/projects/commercial/naman/com4.webp",
          "img/projects/commercial/naman/com5.webp",
        ],
        video: "img/projects/commercial/naman/com3.webp",
        description:
          "Naman House is a multi-level corporate office designed to reflect openness, warmth, and modern functionality. Spanning three floors, the space features elegant workstations with ergonomic chairs, custom tables, and curated artwork that add personality to the workspace.",
        description2:
          "Thoughtfully designed zones including conference rooms, a food area, and a library enhance collaboration and comfort. The subtle exterior detailing completes the refined, cohesive design.",
        details: {
          client: "Alpine Developers",
          homes: "1200",
          tenure: "20% affordable, 80% private",
          siteSize: "5ha",
          approved: "September 2025",
        },
      },
    ],
  },

  events: {
    title: "Events & Drops",
    category: "Residential",
    heroImage: "img/projects/drop/diwali/d1.webp",
    mainImage: "img/projects/drop/diwali/d1.webp",
    places: [
      {
        id: "diwali",
        title: "Diwali Drop ",
        heroImage: "img/projects/drop/diwali/d2.webp",
        location: "Gujarat, India",
        thumbnail: "img/projects/drop/diwali/d2.webp",
        images: [
          "img/projects/drop/diwali/d4.webp",
          "img/projects/drop/diwali/d5.webp",
        ],
        video: "img/projects/drop/diwali/d3.webp",
        description:
          "Elanze’s Diwali Drops bring the festival of lights to life through beautiful home styling. We mix art, décor, and handcrafted details to create warm, glowing spaces filled with festive charm. Every setup is designed to make your home shine brighter and feel more joyful.",
        description2:
          "From elegant installations to custom pieces, we blend tradition with a modern touch. Our Diwali themes reflect culture, celebration, and togetherness — helping you welcome guests into a space that feels both festive and personal.",
        details: {
          client: "Bellway Homes",
          homes: "3701",
          tenure: "30% affordable, 70% private",
          siteSize: "12ha",
          approved: "July 2025",
        },
      },
      {
        id: "fall",
        title: "Fall Drop ",
        heroImage: "img/projects/drop/fall/f2.webp",
        location: "Vadodara, Gujarat",
        thumbnail: "img/projects/drop/fall/f2.webp",
        images: [
          "img/projects/drop/fall/f4.webp",
          "img/projects/drop/fall/f5.webp",
        ],
        video: "img/projects/drop/fall/f3.webp",
        description:
          "Our Fall-Themed Drops are inspired by the cozy, earthy feel of autumn. Using soft colors, natural textures, and artful décor, we create warm and inviting spaces that bring seasonal beauty indoors.",
        description2:
          "Each setup is designed to feel calm and balanced, with thoughtful details that make your home look elegant and comfortable. With Elanze, every corner becomes a reflection of timeless style and everyday luxury.",
        details: {
          client: "Modern Homes Inc",
          homes: "2500",
          tenure: "40% affordable, 60% private",
          siteSize: "8ha",
          approved: "June 2025",
        },
      },
    ],
  },

  residential: {
    title: "Residential",
    category: "residential",
    heroImage: "img/projects/residential/nj/nj2.webp",
    mainImage: "img/reshero.jpg",
    places: [
      {
        id: "new-jersey",
        title: " Townhouse",
        heroImage: "img/projects/residential/nj/nj2.webp",
        location: " Edison New Jersey",
        thumbnail: "img/projects/residential/nj/nj2.webp",
        images: [
          "img/projects/residential/nj/nj4.webp",
          "img/projects/residential/nj/nj5.webp",
        ],
        video: "img/projects/residential/nj/nj3.webp",
        description:
          "This<strong> townhouse in New Jersey</strong> was beautifully curated to blend warmth, comfort, and modern style — all within a mindful budget. Soft tones, cozy textures, and thoughtful décor bring a welcoming personality to every room.",
        description2:
          "Layered lighting enhances the ambiance, highlighting key details and adding depth. The result is a stylish, inviting space that feels like home.",
        details: {
          client: "Bellway Homes",
          homes: "3701",
          tenure: "30% affordable, 70% private",
          siteSize: "12ha",
          approved: "July 2025",
        },
      },

      {
        id: "new-york",
        title: "Apartment",
        heroImage: "img/projects/residential/ny/ny3.webp",
        location: "Queens,New York",
        thumbnail: "img/projects/residential/ny/ny3.webp",
        images: [
          "img/projects/residential/ny/ny4.webp",
          "img/projects/residential/ss/ss6.webp",
        ],
        video: "img/projects/residential/ny/ny3.webp",
        description:
          "This elegant Queens apartment was designed for a dynamic working couple after an in-depth style interview to understand their preferences and personality. Their vision for a functional yet refined home guided every design choice",
        description2:
          "The open kitchen features a versatile island for dining, work, and gatherings, while the passage exudes calm sophistication with blue décor, curated artwork, and soft ambient lighting that ties the space together beautifully.",
        details: {
          client: "Modern Homes Inc",
          homes: "2500",
          tenure: "40% affordable, 60% private",
          siteSize: "8ha",
          approved: "June 2025",
        },
      },

      {
        id: "spacedream",
        title: "Apartment",
        heroImage: "img/projects/residential/ss/ss2.webp",
        location: "Seattle",
        thumbnail: "img/projects/residential/ss/ss2.webp",
        images: [
          "img/projects/residential/ss/ss4.webp",
          "img/projects/residential/ss/ss5.webp",
        ],
        video: "img/projects/residential/ss/ss1.webp",
        description:
          "This compact, all-side-open apartment in downtown Seattle was designed for young professionals starting their journey. It is practical, stylish, and affordable, with every corner reflecting smart use of space and a cozy, modern vibe.",
        description2:
          "Curated pieces from IKEA, Wayfair, and other top décor stores brought the design to life. From the compact dining and TV unit to multifunctional furniture, it’s a cheerful, budget-friendly space crafted with care and creativity.",
        details: {
          client: "Bellway Homes",
          homes: "3701",
          tenure: "30% affordable, 70% private",
          siteSize: "12ha",
          approved: "July 2025",
        },
      },
      {
        id: "vadodara",
        title: "Apartment",
        heroImage: "img/projects/residential/vh/vh2.webp",
        location: "Bhayli, Vadodara",
        thumbnail: "img/projects/residential/vh/vh2.webp",
        images: [
          "img/projects/residential/vh/vh4.webp",
          "img/projects/residential/vh/vh5.webp",
        ],
        video: "img/projects/residential/vh/vh3.webp",
        description:
          "Take a perfect example of global inspiration — this 7000 sq.ft apartment blends American and European styling with rich color contrasts and curated details. From custom wallpapers to unique, practical furniture and rare oakwood finishes, every corner reflects thoughtful design. The home’s openness and refined styling create a modern yet timeless aesthetic.",
        description2: " ",
        details: {
          client: "Modern Homes Inc",
          homes: "2500",
          tenure: "40% affordable, 60% private",
          siteSize: "8ha",
          approved: "June 2025",
        },
      },
    ],
  },
};
