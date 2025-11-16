const users = [
  {
    name: "Aarav Patel",
    profession: "Software Engineer",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600",
    username: "aarav.codes",
    followers: 12500,
    following: 320,
    desc: "💻 Coding my way through life | Tech enthusiast | Coffee lover ☕",
    posts: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        caption: "Late-night coding sessions hit different!",
        likes: 2100,
        postedDate: "2025-01-05"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        caption: "Clean code = clear mind.",
        likes: 1850,
        postedDate: "2025-01-12"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        caption: "Debugging: 90% frustration, 10% victory.",
        likes: 2400,
        postedDate: "2025-01-20"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
        caption: "Minimal setups are the best setups.",
        likes: 3200,
        postedDate: "2025-01-26"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1521305916504-4a1121188589",
        caption: "Coffee + code = productivity unlocked ☕",
        likes: 2700,
        postedDate: "2025-02-01"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3",
        caption: "Pushing updates today!",
        likes: 1980,
        postedDate: "2025-02-05"
      }
    ]
  },

  {
    name: "Sneha Reddy",
    profession: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600",
    username: "sneha.designs",
    followers: 9800,
    following: 410,
    desc: "🎨 Creating colors out of pixels | Designer & illustrator",
    posts: [
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1503602642458-232111445657",
        caption: "Color palettes that make me smile 🎨",
        likes: 1500,
        postedDate: "2025-01-03"
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1694612896095-7dfc4a6b2cc7?w=600&auto=format",
        caption: "Logo concepts for a new client!",
        likes: 1780,
        postedDate: "2025-01-10"
      },
      {
        id: 9,
        image: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a",
        caption: "Design + coffee = magic ✨",
        likes: 1650,
        postedDate: "2025-01-18"
      },
      {
        id: 10,
        image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe",
        caption: "Sketching ideas all day.",
        likes: 1920,
        postedDate: "2025-01-25"
      },
      {
        id: 11,
        image: "https://images.unsplash.com/photo-1546146830-2cca9512c68e",
        caption: "Minimalist poster redesign!",
        likes: 2100,
        postedDate: "2025-01-31"
      },
      {
        id: 12,
        image: "https://images.unsplash.com/photo-1761123044903-1671e0edc3f6",
        caption: "Typography love ❤️",
        likes: 1720,
        postedDate: "2025-02-04"
      }
    ]
  },

  {
    name: "Rahul Verma",
    profession: "Marketing Specialist",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600",
    username: "rahul.markets",
    followers: 7600,
    following: 290,
    desc: "📈 Strategy. Growth. Creativity. | Marketing is storytelling.",
    posts: [
      {
        id: 13,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        caption: "Brainstorming new campaign ideas!",
        likes: 1240,
        postedDate: "2025-01-02"
      },
      {
        id: 14,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
        caption: "Analytics never lie 📊",
        likes: 1450,
        postedDate: "2025-01-09"
      },
      {
        id: 15,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        caption: "Content planning for Q1.",
        likes: 1310,
        postedDate: "2025-01-17"
      },
      {
        id: 16,
        image: "https://images.unsplash.com/photo-1571591707151-66ef4c22418e?w=600",
        caption: "Growth happens outside comfort zones.",
        likes: 1520,
        postedDate: "2025-01-26"
      },
      {
        id: 17,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        caption: "Workshop day!",
        likes: 1680,
        postedDate: "2025-02-01"
      },
      {
        id: 18,
        image: "https://images.unsplash.com/photo-1552581234-26160f608093",
        caption: "Marketing = storytelling.",
        likes: 1390,
        postedDate: "2025-02-05"
      }
    ]
  },

  {
    name: "Priya Sharma",
    profession: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600",
    username: "priya.uiux",
    followers: 11200,
    following: 350,
    desc: "✨ Designing experiences, not screens | Minimalist at heart",
    posts: [
      {
        id: 19,
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
        caption: "Wireframing all day ✏️",
        likes: 2100,
        postedDate: "2025-01-04"
      },
      {
        id: 20,
        image: "https://images.unsplash.com/photo-1669895649487-05bd003214f6?w=600",
        caption: "User-first, always.",
        likes: 1980,
        postedDate: "2025-01-12"
      },
      {
        id: 21,
        image: "https://images.unsplash.com/photo-1570505712855-2aecb86b835a?w=600&auto=format",
        caption: "Design is thinking made visual.",
        likes: 2340,
        postedDate: "2025-01-19"
      },
      {
        id: 22,
        image: "https://images.unsplash.com/photo-1659500652719-b984a033eb4f?w=600&auto=format",
        caption: "UI update for an app project!",
        likes: 2550,
        postedDate: "2025-01-27"
      },
      {
        id: 23,
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
        caption: "Color systems experimenting 🎨",
        likes: 2200,
        postedDate: "2025-02-02"
      },
      {
        id: 24,
        image: "https://images.unsplash.com/photo-1543273879-001211011d83?w=600",
        caption: "Minimal & clean ❤️",
        likes: 2400,
        postedDate: "2025-02-06"
      }
    ]
  },

  {
    name: "Rohan Das",
    profession: "Content Creator",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600",
    username: "rohan.creates",
    followers: 15400,
    following: 510,
    desc: "🎥 Creating content that inspires | Storytelling is my superpower",
    posts: [
      {
        id: 25,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        caption: "Recording day! 🎥",
        likes: 3500,
        postedDate: "2025-01-03"
      },
      {
        id: 26,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        caption: "Editing for hours but worth it!",
        likes: 3720,
        postedDate: "2025-01-11"
      },
      {
        id: 27,
        image: "https://images.unsplash.com/photo-1499955085172-a104c9463ece",
        caption: "Behind the scenes 🎬",
        likes: 4100,
        postedDate: "2025-01-18"
      },
      {
        id: 28,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        caption: "New vlog dropping soon!",
        likes: 3600,
        postedDate: "2025-01-26"
      },
      {
        id: 29,
        image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
        caption: "Lights. Camera. Action!",
        likes: 3950,
        postedDate: "2025-02-01"
      },
      {
        id: 30,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        caption: "Storytelling matters.",
        likes: 3800,
        postedDate: "2025-02-06"
      }
    ]
  },

  {
    name: "Kavya Iyer",
    profession: "Photographer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600",
    username: "kavya.lens",
    followers: 18200,
    following: 270,
    desc: "📸 Capturing moments that matter | Traveler & dreamer",
    posts: [
      {
        id: 31,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        caption: "Golden hour magic 🌅",
        likes: 4800,
        postedDate: "2025-01-02"
      },
      {
        id: 32,
        image: "https://images.unsplash.com/photo-1670508142255-f119391c4213?w=600",
        caption: "Portrait sessions today!",
        likes: 4500,
        postedDate: "2025-01-10"
      },
      {
        id: 33,
        image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
        caption: "Travel photography = happiness ✨",
        likes: 5200,
        postedDate: "2025-01-17"
      },
      {
        id: 34,
        image: "https://plus.unsplash.com/premium_photo-1723489437904-60bc9530747e?w=600",
        caption: "Monochrome vibes 🖤",
        likes: 4980,
        postedDate: "2025-01-26"
      },
      {
        id: 35,
        image: "https://images.unsplash.com/photo-1730528220487-80ed488ad546?w=600",
        caption: "Lens stories 📷",
        likes: 5100,
        postedDate: "2025-02-02"
      },
      {
        id: 36,
        image: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00",
        caption: "Nature’s beauty never disappoints.",
        likes: 5300,
        postedDate: "2025-02-06"
      }
    ]
  },

  {
    name: "Vikram Nair",
    profession: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    username: "vikram.builds",
    followers: 9400,
    following: 190,
    desc: "🚀 Building ideas into reality | Startup enthusiast",
    posts: [
      {
        id: 37,
        image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "New project kickoff!",
        likes: 1800,
        postedDate: "2025-01-03"
      },
      {
        id: 38,
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        caption: "Team brainstorming session.",
        likes: 2100,
        postedDate: "2025-01-11"
      },
      {
        id: 39,
        image: "https://images.unsplash.com/photo-1521791055366-0d553872125f",
        caption: "Hustle mode: ON 💼",
        likes: 1950,
        postedDate: "2025-01-19"
      },
      {
        id: 40,
        image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
        caption: "Startup life = endless learning.",
        likes: 2300,
        postedDate: "2025-01-27"
      },
      {
        id: 41,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        caption: "Pitch deck revisions!",
        likes: 2050,
        postedDate: "2025-02-02"
      },
      {
        id: 42,
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
        caption: "Big ideas, bigger dreams 🚀",
        likes: 2400,
        postedDate: "2025-02-06"
      }
    ]
  }
];

export default users;