// Product catalogue sourced from the official TMF brochure (names & spelling preserved).
const slug = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const categories = [
  { slug: "bhajani-chakli", name: "Bhajani Chakli", image: "/assets/products/bhajani-chakali-special.jpg", blurb: "Traditional rice-flour chaklis, crisp and golden" },
  { slug: "grain-sticks", name: "Grain Sticks", image: "/assets/products/kolhapuri-sticks.jpg", blurb: "Crunchy Kolhapuri-style grain sticks" },
  { slug: "hot-sticks", name: "Hot Sticks", image: "/assets/products/soya-sticks.jpg", blurb: "Bold, chatpata flavoured sticks" },
  { slug: "hot-chips", name: "Hot Chips", image: "/assets/products/yellow-banana-chips.jpg", blurb: "Banana, potato and multigrain chips" },
  { slug: "hot-sev", name: "Hot Sev", image: "/assets/products/nachani-sev.jpg", blurb: "Wholesome sev in many grains" },
  { slug: "bhakarwadi", name: "Bhakarwadi", image: "/assets/products/bhakarwadi.jpg", blurb: "The classic Maharashtrian favourite" },
  { slug: "namkeen", name: "Namkeen", image: "/assets/products/bhadang-bhel.jpg", blurb: "Farsan, bhel and everyday namkeen" },
  { slug: "chaat-chaska-namkeen", name: "Chaat Chaska Namkeen", image: "/assets/products/cheese-ball.jpg", blurb: "Our signature chaat chaska range" },
  { slug: "butter-chakli", name: "Butter Chakli", image: "/assets/products/mini-butter-chakali.jpg", blurb: "The original since 2000" },
  { slug: "bites", name: "Bites", image: "/assets/products/chocos.jpg", blurb: "Sweet little bites for everyone" },
];

const raw = [
  // Bhajani Chakli
  ["Bhajani chakali Special", "bhajani-chakli"],
  ["Mini bhajani chakali", "bhajani-chakli"],
  ["Garlic Mini bhajani chakali", "bhajani-chakli"],
  ["Methi Mini bhajani chakali", "bhajani-chakli"],
  ["Bhajani sticks chakali", "bhajani-chakli"],
  ["Multigrain muruku", "bhajani-chakli"],
  // Grain Sticks
  ["Kolhapuri sticks", "grain-sticks"],
  ["Garlic kolhapuri sticks", "grain-sticks"],
  ["Bajara methi sticks", "grain-sticks"],
  ["Bajara sticks chakli", "grain-sticks"],
  // Hot Sticks
  ["Soya sticks", "hot-sticks"],
  ["Sejwan sticks", "hot-sticks"],
  ["Manchurian sticks", "hot-sticks"],
  ["Tomato sticks", "hot-sticks"],
  ["Panipuri sticks", "hot-sticks"],
  ["Nachani sticks", "hot-sticks"],
  ["Makai (Corn) sticks", "hot-sticks"],
  // Hot Chips
  ["Soya chips", "hot-chips"],
  ["Nachani (Raggi) chips", "hot-chips"],
  ["Nachani (Raggi) chips peri peri", "hot-chips"],
  ["Nachani (Raggi) chips Cream N onion", "hot-chips"],
  ["Makai (Corn) chips", "hot-chips"],
  ["Panipuri chips", "hot-chips"],
  ["Jawar chips", "hot-chips"],
  ["Bajara chips", "hot-chips"],
  ["Oats chips", "hot-chips"],
  ["Carrot chips", "hot-chips"],
  ["Barley chips", "hot-chips"],
  ["Multigrain chips", "hot-chips"],
  ["Rajma chips", "hot-chips"],
  ["Beetroot chips", "hot-chips"],
  ["Cream N onion chips", "hot-chips"],
  ["Periperi chips", "hot-chips"],
  ["Jalopino chips", "hot-chips"],
  ["Sejwan chips", "hot-chips"],
  ["Manchurian chips", "hot-chips"],
  ["Moong chips", "hot-chips"],
  ["Alsi chips", "hot-chips"],
  ["Potato chips", "hot-chips"],
  ["Yellow Banana chips", "hot-chips"],
  ["Miri Banana chips", "hot-chips"],
  ["Mix veg chips", "hot-chips"],
  ["Tomato chips", "hot-chips"],
  ["Brocoli chips", "hot-chips"],
  // Hot Sev
  ["Nachani sev", "hot-sev"],
  ["Soya sev", "hot-sev"],
  ["Panipuri sev", "hot-sev"],
  ["Jawar sev", "hot-sev"],
  ["Bajara sev", "hot-sev"],
  ["Multigrain sev", "hot-sev"],
  ["Moong sev", "hot-sev"],
  // Bhakarwadi
  ["Bhakarwadi", "bhakarwadi"],
  ["Mini Bhakarwadi", "bhakarwadi"],
  ["Coin Bhakarwadi", "bhakarwadi"],
  ["Garlic Bhakarwadi", "bhakarwadi"],
  ["Sandwiz Bhakarwadi", "bhakarwadi"],
  ["Long Bhakarwadi", "bhakarwadi"],
  ["Patti Samosa", "bhakarwadi"],
  ["Sandwiz Roll", "bhakarwadi"],
  ["shankarpali", "bhakarwadi"],
  ["Kachori", "bhakarwadi"],
  ["Moong samosa", "bhakarwadi"],
  // Namkeen
  ["Garlic Sev", "namkeen"],
  ["Thikha Sev", "namkeen"],
  ["Dalmuth", "namkeen"],
  ["Thikha Madras", "namkeen"],
  ["Mix Farsan", "namkeen"],
  ["Mumbai Bhel", "namkeen"],
  ["Sing Bhujia", "namkeen"],
  ["Chana Dal", "namkeen"],
  ["Moong Dal", "namkeen"],
  ["Crispy peanut", "namkeen"],
  ["Bhadang bhel", "namkeen"],
  // Chaat Chaska Namkeen
  ["Cheese Ball", "chaat-chaska-namkeen"],
  ["Chikki", "chaat-chaska-namkeen"],
  ["Diet Chiwada", "chaat-chaska-namkeen"],
  ["Sweets chiwda", "chaat-chaska-namkeen"],
  ["Kothimbir chiwda", "chaat-chaska-namkeen"],
  ["sabudana chiwda", "chaat-chaska-namkeen"],
  ["Wati", "chaat-chaska-namkeen"],
  ["Nylon Poha", "chaat-chaska-namkeen"],
  ["Chana jor", "chaat-chaska-namkeen"],
  ["Cheese ring", "chaat-chaska-namkeen"],
  // Butter Chakli
  ["Mini Butter Chakali", "butter-chakli"],
  ["Nachani Butter Chakali", "butter-chakli"],
  ["Makai Butter Chakali", "butter-chakli"],
  ["Sezwan Butter Chakali", "butter-chakli"],
  ["potato murukku", "butter-chakli"],
  // Bites
  ["chocolate bites", "bites"],
  ["vanilla bites", "bites"],
  ["stawberry bites", "bites"],
  ["pinneapple bites", "bites"],
  ["chocos", "bites"],
  ["mix fruit bites", "bites"],
];

export const products = raw.map(([name, category]) => ({
  id: slug(name),
  name,
  category,
  image: `/assets/products/${slug(name)}.jpg`,
}));

export const categoryName = (slugValue) =>
  categories.find((c) => c.slug === slugValue)?.name || slugValue;

export const categoryCount = (slugValue) =>
  products.filter((p) => p.category === slugValue).length;
