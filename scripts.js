// ===== MYTHOLOGY DATABASE =====

// DATA STRUCTURES OVERVIEW

// My project uses basic data structures: arrays and objects to organize and manage the mythology data.
// In the first 460 lines of code I have defined the main array of my project myths array which containts 40 objects
// Each object represents a mythological entity and has the following properties ( key value pairs):
// - id: a unique identifier for the entity
// - name: the name of the entity
// - type: the category of the entity (deity, spirit, trickster, monster)
// - country: the country associated with the entity
// - region: the broader region of Africa where the entity is from
// - tribe:
// - description: a brief description of the entity 
// - image: a URL to an image representing the entity
// - lore: a detailed lore section that provides more in-depth information about the entity's mythology, stories, and cultural significance

const mythsArray = [
  {
    id: 1,
    name: "Anansi",
    type: "Trickster",
    country: "Ghana",
    region: "West Africa",
    tribe: "Akan",
    description: "The spider trickster god known for his wisdom, cunning, and storytelling abilities.",
    image: "assets/dataset/anansi.png",
    lore: "Anansi is one of West Africa's most beloved figures, a clever spider who often outwits more powerful beings through his intelligence rather than strength. He is the keeper of stories and the master of tricks, teaching lessons through his cunning ways. In Akan folklore, Anansi bridges the divine and human worlds, bringing wisdom through unexpected means."
  },
  {
    id: 2,
    name: "Grootslang",
    type: "Monster",
    country: "South Africa",
    region: "Southern Africa",
    tribe: "Sotho",
    description: "A legendary creature that is a massive serpent-like being, guardian of precious gems in deep caves.",
    image: "assets/dataset/grootslang.png",
    lore: "Grootslang is a fearsome creature from South African mythology, often described as a hybrid of an elephant and a serpent. It dwells in vast underground caverns, guarding treasure and gemstones with jealous fury. Some legends suggest it is a remnant of prehistoric times, a creature that narrowly escaped Noah's flood by hiding in deep caves."
  },
  {
    id: 3,
    name: "Mwari",
    type: "Deity",
    country: "Zimbabwe",
    region: "Southern Africa",
    tribe: "Shona",
    description: "The supreme creator deity in Shona religion, representing the ultimate source of life and spiritual authority.",
    image: "assets/dataset/mwari.png",
    lore: "Mwari is the all-powerful creator god in Shona religion, residing in the mountains and communicated with through oracles and sacred sites. Mwari is neither male nor female but represents the ultimate creative force. The deity is approached through intermediaries and priests, who receive divine guidance for the community's wellbeing and governance."
  },
  {
    id: 4,
    name: "Nyambe",
    type: "Deity",
    country: "Zambia",
    region: "Southern Africa",
    tribe: "Lozi",
    description: "The supreme god and creator in Lozi mythology, associated with the sky and responsible for creation.",
    image: "assets/dataset/nyambe.png",
    lore: "Nyambe is the high god of the Lozi people, dwelling in the sky and responsible for all creation. Though Nyambe is supreme, the deity is not directly worshipped but honored through natural phenomena and the land itself. The Lozi people maintain a deep respect for Nyambe as the ultimate authority over fate and fortune."
  },
  {
    id: 5,
    name: "Nyami Nyami",
    type: "Spirit",
    country: "Zimbabwe/Zambia",
    region: "Southern Africa",
    tribe: "Tonga",
    description: "The river god of the Zambezi River, a serpent-like spirit that controls the waters and protects the people.",
    image: "assets/dataset/nyami nyami.png",
    lore: "Nyami Nyami is a powerful water spirit that dwells in the Zambezi River, taking the form of a massive serpent. The spirit is both feared and respected, as it controls the river's flow and the fish within it. Local people make offerings to Nyami Nyami for safe passage and bountiful fishing, and anger the spirit at their peril."
  },
  {
    id: 6,
    name: "Nzambi Mpangu",
    type: "Deity",
    country: "Democratic Republic of Congo",
    region: "Central Africa",
    tribe: "Kongo",
    description: "The supreme creator god in Kongo religion, the omnipotent and omniscient deity who created all things.",
    image: "assets/dataset/nzambi mpangu.png",
    lore: "Nzambi Mpangu is the ultimate creator in Kongo cosmology, existing beyond the human realm and beyond direct worship. The deity is honored through ancestors and intermediaries, as direct approach to Nzambi is not possible. The Kongo people maintain bridges to the divine through ritual, art, and spiritual practices that honor Nzambi's creation."
  },
  {
    id: 7,
    name: "Ogun",
    type: "Deity",
    country: "Nigeria",
    region: "West Africa",
    tribe: "Yoruba",
    description: "The god of iron, war, and labor in Yoruba mythology, the divine blacksmith.",
    image: "assets/dataset/ogun.png",
    lore: "Ogun is the mighty god of iron and warfare, the divine smith who forges tools and weapons for humanity. He represents courage, strength, and hard work, and is honored by soldiers, hunters, and craftspeople. Ogun is both protective and dangerous, demanding respect and monthly offerings to maintain balance."
  },
  {
    id: 8,
    name: "Orunmila",
    type: "Deity",
    country: "Nigeria",
    region: "West Africa",
    tribe: "Yoruba",
    description: "The god of wisdom, knowledge, and divination, possessing the secrets of the Ifá oracle system.",
    image: "assets/dataset/orunmila.png",
    lore: "Orunmila is the keeper of divine knowledge and the master of the Ifá divination system, which contains the secrets of destiny and fate. This deity is approached for guidance and wisdom, and divination ceremonies invoke Orunmila's insight into past, present, and future. Orunmila's counsel shapes the spiritual and practical decisions of the Yoruba people."
  },
  {
    id: 9,
    name: "Oshun",
    type: "Deity",
    country: "Nigeria",
    region: "West Africa",
    tribe: "Yoruba",
    description: "The goddess of love, beauty, fertility, and rivers, associated with fresh water and feminine energy.",
    image: "assets/dataset/oshun.png",
    lore: "Oshun is the divine feminine principle, embodying grace, beauty, and fertility. As the goddess of rivers, she brings fresh water and life to the land. Oshun is generous and nurturing but also fierce in protecting her children. She is celebrated through music, dance, and water rituals that honor feminine power and abundance."
  },
  {
    id: 10,
    name: "Shango",
    type: "Deity",
    country: "Nigeria",
    region: "West Africa",
    tribe: "Yoruba",
    description: "The god of thunder, lightning, and justice, the powerful ruler who wields thunderbolts.",
    image: "assets/dataset/shango.png",
    lore: "Shango is the thunderous warrior god, commanding lightning as his weapon and justice as his domain. He represents power, virility, and righteous anger against evil. Shango is honored through drumming and dance, and those who honor him are believed to gain his protection and strength in facing life's challenges."
  },
  {
    id: 11,
    name: "Mami Wata",
    type: "Spirit",
    country: "Nigeria",
    region: "West Africa",
    tribe: "Yoruba",
    description: "A powerful water spirit and mermaid figure who brings prosperity and enchantment from the depths.",
    image: "assets/dataset/mami wata.png",
    lore: "Mami Wata is a mysterious water spirit who appears as a beautiful woman, controlling wealth, beauty, and mystical power. She is both generous with her blessings and dangerous to those who offend her, often demanding exclusive devotion. Her followers receive riches and spiritual power, but at significant personal cost."
  },
  {
    id: 12,
    name: "Nommo",
    type: "Spirit",
    country: "Mali",
    region: "West Africa",
    tribe: "Dogon",
    description: "The primordial spirit of water and regeneration, essential to all life and existence.",
    image: "assets/dataset/nommo.png",
    lore: "Nommo represents the life force itself, the animating principle in water and all creation. In Dogon cosmology, Nommo brought language and civilization to humanity. This spirit is honored in rituals connecting to water, fertility, and the continuity of human and natural cycles."
  },
  {
    id: 13,
    name: "Mawu",
    type: "Deity",
    country: "Benin",
    region: "West Africa",
    tribe: "Fon",
    description: "The moon goddess and one of the supreme deities in Fon cosmology.",
    image: "assets/dataset/mawu.png",
    lore: "Mawu is the moon mother, representing night, coolness, and the feminine principle of creation. She is paired with her male counterpart Lisa (the sun), and together they created and sustain the universe. Mawu watches over women, children, and those who work during the night hours."
  },
  {
    id: 14,
    name: "Chukwu",
    type: "Deity",
    country: "Nigeria",
    region: "West Africa",
    tribe: "Igbo",
    description: "The supreme god and creator in Igbo religion, source of all power and existence.",
    image: "assets/dataset/chukwu.png",
    lore: "Chukwu is the high god of the Igbo people, dwelling beyond the mortal realm and rarely approached directly. Instead, the Igbo honor intermediary spirits and deities who carry prayers and offerings to Chukwu. This deity represents ultimate authority, wisdom, and the divine order of existence."
  },
  {
    id: 15,
    name: "Ala",
    type: "Deity",
    country: "Nigeria",
    region: "West Africa",
    tribe: "Igbo",
    description: "The earth mother goddess of fertility, agriculture, and morality in Igbo culture.",
    image: "assets/dataset/ala.png",
    lore: "Ala is the nurturing earth goddess who brings forth crops and children, while also maintaining justice and moral order. She is especially honored during harvest festivals and ceremonies celebrating fertility. Violations of Ala's laws bring supernatural punishment and misfortune upon the offender and their family."
  },
  {
    id: 16,
    name: "Waq",
    type: "Deity",
    country: "Ethiopia",
    region: "East Africa",
    tribe: "Oromo",
    description: "The sky god and creator of all things in Oromo spirituality.",
    image: "assets/dataset/waq.png",
    lore: "Waq dwells in the sky and controls the weather, fertility of the land, and the fate of humanity. This deity is honored through rituals and sacrifices that ensure protection and prosperity. Waq's will is understood through natural phenomena, and the Oromo people align their actions with the divine intentions."
  },
  {
    id: 17,
    name: "Obatala",
    type: "Deity",
    country: "Nigeria",
    region: "West Africa",
    tribe: "Yoruba",
    description: "The creator of human bodies and the god of peace, purity, and wisdom.",
    image: "assets/dataset/obatala.png",
    lore: "Obatala is the divine sculptor who shapes human forms and oversees the creation of life. This deity represents peace, truth, and spiritual cleanliness. Obatala followers are called to lives of honesty and non-violence, serving as peacemakers within their communities and maintaining spiritual purity."
  },
  {
    id: 18,
    name: "Legba",
    type: "Spirit",
    country: "Benin",
    region: "West Africa",
    tribe: "Fon/Ewe",
    description: "The trickster spirit who guards crossroads and controls passages between worlds.",
    image: "assets/dataset/legba.png",
    lore: "Legba is the divine trickster who stands at crossroads, controlling who passes and what destiny unfolds. This spirit speaks all languages and mediates between the human and divine realms. Legba must be honored first in any ritual, as this spirit controls access to all other powers and paths."
  },
  {
    id: 19,
    name: "Adroanzi",
    type: "Spirit",
    country: "Namibia",
    region: "Southern Africa",
    tribe: "Himba",
    description: "The ancestral spirit of the Himba people, appearing in dreams and guiding the community.",
    image: "assets/dataset/adroanzi.png",
    lore: "Adroanzi represents the spirits of the ancestors in Himba tradition, serving as intermediaries between the living and the spiritual realm. These spirits are believed to watch over their descendants, offering guidance and protection. The Himba people honor Adroanzi through rituals and offerings to maintain harmony with their ancestors."
  },
  {
    id: 20,
    name: "Aigamuxa",
    type: "Monster",
    country: "Namibia",
    region: "Southern Africa",
    tribe: "San",
    description: "A mythical creature with eyes on its feet, lurking in the desert shadows.",
    image: "assets/dataset/aigamuxa.png",
    lore: "Aigamuxa is a fearsome creature from San mythology, said to have eyes located in the soles of its feet. This allows it to see while crawling through the sand, making it a dangerous predator in the desert. Legends say it hunts those who wander alone at night in the arid lands of Namibia."
  },
  {
    id: 21,
    name: "Asase Ya",
    type: "Deity",
    country: "Ghana",
    region: "West Africa",
    tribe: "Akan",
    description: "The earth goddess and mother of all in Akan cosmology, provider of fertility and harvest.",
    image: "assets/dataset/asase yaa.png",
    lore: "Asase Ya is the great earth mother in Akan religion, responsible for fertility of the land and the bounty of harvests. She is honored through ceremonies and offerings, especially during planting and harvest seasons. The goddess also maintains moral order, punishing those who disrespect the earth or violate community laws."
  },
  {
    id: 22,
    name: "Atete",
    type: "Deity",
    country: "Kenya",
    region: "East Africa",
    tribe: "Kikuyu",
    description: "The goddess of the mountain and provider of fertility in Kikuyu tradition.",
    image: "assets/dataset/atete.png",
    lore: "Atete is the sacred mountain goddess of the Kikuyu people, dwelling in the peaks that connect the earth to the heavens. She is the source of fertility, granting women the ability to bear children and the land the ability to produce crops. Pilgrimages to her mountain shrines are made for blessings and guidance."
  },
  {
    id: 23,
    name: "Babalu Aye",
    type: "Deity",
    country: "Nigeria",
    region: "West Africa",
    tribe: "Yoruba",
    description: "The god of disease and healing, controlling the spread of illness and granting recovery.",
    image: "assets/dataset/babalu aye.png",
    lore: "Babalu Aye is the orisha of disease and medicine, holding power over all illnesses and their cures. He represents the balance between health and sickness, teaching humanity the importance of hygiene and proper care. Those who honor Babalu Aye are granted protection from plagues and epidemics."
  },
  {
    id: 24,
    name: "Bumba",
    type: "Deity",
    country: "Democratic Republic of Congo",
    region: "Central Africa",
    tribe: "Luba",
    description: "The creator god who vomited the world into existence in Luba mythology.",
    image: "assets/dataset/bumba.png",
    lore: "Bumba is the great creator god of the Luba people, who created the world through a powerful act of vomiting. From Bumba's vomit came the sun, which dried the earth; the moon, which gave light; and all the animals and humans. Bumba continues to watch over creation, ensuring the balance of the universe is maintained."
  },
  {
    id: 25,
    name: "Cagn",
    type: "Deity",
    country: "South Africa",
    region: "Southern Africa",
    tribe: "Khoikhoi",
    description: "The supreme god and creator of the Khoikhoi people, master of all things.",
    image: "assets/dataset/cagn.png",
    lore: "Cagn is the chief deity of the Khoikhoi people, the great creator who made the sky, earth, and all living things. Though powerful, Cagn is also known for human-like emotions and actions, sometimes causing trouble for humanity. The Khoikhoi honor Cagn through rituals and songs passed down through generations."
  },
  {
    id: 26,
    name: "Chiuta",
    type: "Deity",
    country: "Malawi",
    region: "Southern Africa",
    tribe: "Tumbuka",
    description: "The supreme god and creator in Tumbuka mythology, provider of all life.",
    image: "assets/dataset/chiuta.png",
    lore: "Chiuta is the great creator god of the Tumbuka people, who fashioned humanity from clay and breathed life into them. This deity is associated with rain, fertility, and the cycles of nature. Chiuta is approached through intermediaries and sacred rituals to ensure prosperity and protection for the community."
  },
  {
    id: 27,
    name: "Ebigane",
    type: "Spirit",
    country: "Democratic Republic of Congo",
    region: "Central Africa",
    tribe: "Lunda",
    description: "The forest spirit that protects the wildlife and guides hunters in the Congo.",
    image: "assets/dataset/ebigane.png",
    lore: "Ebigane is the guardian spirit of the forest in Lunda tradition, watching over all creatures and plants within the wilderness. Hunters seek Ebigane's permission before taking game, and offerings are made to ensure safe passage. Those who disrespect the forest face the spirit's wrath in the form of getting lost or illness."
  },
  {
    id: 28,
    name: "Enkai",
    type: "Deity",
    country: "Kenya",
    region: "East Africa",
    tribe: "Maasai",
    description: "The god of the sky and rain, the provider of life for the Maasai people.",
    image: "assets/dataset/enkai.png",
    lore: "Enkai is the divine sky god of the Maasai, who controls the rain that sustains all life on the savanna. Through Enkai, the Maasai receive the cattle that are central to their culture and livelihood. Ceremonies are performed to honor Enkai and ensure his blessing of rain and prosperity for the tribe."
  },
  {
    id: 29,
    name: "Gauna",
    type: "Spirit",
    country: "South Africa",
    region: "Southern Africa",
    tribe: "Xhosa",
    description: "The ancestral spirit that guides the Xhosa people through important life transitions.",
    image: "assets/dataset/gauna.png",
    lore: "Gauna represents the spirits of deceased ancestors in Xhosa tradition, appearing to guide the living through important moments. These spirits are honored during ceremonies and are believed to protect the family from harm. The Xhosa maintain a deep connection with Gauna through rituals and offerings at sacred sites."
  },
  {
    id: 30,
    name: "Kianda",
    type: "Spirit",
    country: "Angola",
    region: "Central Africa",
    tribe: "Kimbundu",
    description: "The water spirit and goddess of the sea, controlling tides and protecting sailors.",
    image: "assets/dataset/kianda.png",
    lore: "Kianda is the powerful water goddess of the Kimbundu people, ruling over the seas and ocean currents. She is both protective of sailors who honor her and dangerous to those who disrespect the waters. Offerings of flowers and jewelry are made to Kianda before voyages to ensure safe passage across the seas."
  },
  {
    id: 31,
    name: "Modimo",
    type: "Deity",
    country: "South Africa",
    region: "Southern Africa",
    tribe: "Tswana",
    description: "The supreme god and creator in Tswana mythology, the source of all existence.",
    image: "assets/dataset/modimo.png",
    lore: "Modimo is the supreme being of the Tswana people, the creator of all things visible and invisible. Though distant from daily life, Modimo is honored through prayer and offerings. The deity is associated with rain, fertility, and the wellbeing of the community. Ancestors serve as intermediaries between Modimo and the living."
  },
  {
    id: 32,
    name: "Mukasa",
    type: "Spirit",
    country: "Uganda",
    region: "East Africa",
    tribe: "Buganda",
    description: "The god of the lake and fertility, protector of the Baganda people.",
    image: "assets/dataset/mukasa.png",
    lore: "Mukasa is the deity of Lake Victoria in Buganda tradition, controlling the waters and granting fertility to the land. The god is approached through the kabaka (king) and priests at sacred shrines along the lake shore. Offerings of food and drink are made to Mukasa to ensure good fishing and protection from storms."
  },
  {
    id: 33,
    name: "Ngewo",
    type: "Deity",
    country: "Sierra Leone",
    region: "West Africa",
    tribe: "Mende",
    description: "The supreme god and creator in Mende cosmology, the great provider.",
    image: "assets/dataset/ngewo.png",
    lore: "Ngewo is the high god of the Mende people, the creator who made the earth and all living things. Though distant, Ngewo is believed to watch over humanity and answer prayers through the spirits and ancestors. The Mende honor Ngewo through ceremonies and maintain spiritual balance through ritual practices."
  },
  {
    id: 34,
    name: "Niniganne",
    type: "Spirit",
    country: "Mali",
    region: "West Africa",
    tribe: "Bambara",
    description: "The trickster spirit of the wilderness, master of illusion and deception.",
    image: "assets/dataset/niniganne.png",
    lore: "Niniganne is the forest trickster in Bambara mythology, a cunning spirit that uses illusion to mislead travelers and hunters. This spirit represents the wild, unpredictable forces of nature that must be respected. Those who encounter Niniganne must be clever to escape, or they become lost in the forest forever."
  },
  {
    id: 35,
    name: "Popobawa",
    type: "Spirit",
    country: "Tanzania",
    region: "East Africa",
    tribe: "Swahili",
    description: "The evil spirit of the night, feared across the Swahili coast.",
    image: "assets/dataset/popobawa.png",
    lore: "Popobawa is a malevolent spirit in Swahili folklore, said to attack at night and possess its victims. This spirit is feared across the East African coast, with stories warning of its deadly powers. People protect themselves through prayers, amulets, and avoiding certain places after dark."
  },
  {
    id: 36,
    name: "Shetani",
    type: "Spirit",
    country: "Tanzania",
    region: "East Africa",
    tribe: "Swahili",
    description: "The evil spirits that haunt the ancient ruins and sacred places of the coast.",
    image: "assets/dataset/shetani.png",
    lore: "Shetani are malevolent spirits that dwell in the ancient ruins and sacred sites along the Swahili coast. These spirits are believed to guard hidden treasures and punish those who disturb their resting places. Local people make offerings to appease the Shetani and avoid the places they haunt."
  },
  {
    id: 37,
    name: "Tano",
    type: "Deity",
    country: "Ghana",
    region: "West Africa",
    tribe: "Akan",
    description: "The god of the rivers and streams, provider of water and life.",
    image: "assets/dataset/tano.png",
    lore: "Tano is the river god of the Akan people, controlling the flow of water that sustains farms and communities. This deity is honored through offerings at river shrines, especially during dry seasons. Tano is believed to have healing powers, and the waters of certain rivers are considered sacred."
  },
  {
    id: 38,
    name: "Tiurakh",
    type: "Spirit",
    country: "Namibia",
    region: "Southern Africa",
    tribe: "San",
    description: "The moon spirit in San mythology, bringer of light and time.",
    image: "assets/dataset/tiurakh.png",
    lore: "Tiurakh is the moon spirit in San belief, responsible for marking time and guiding the cycles of life. The San believe the moon controls the movement of animals and the growth of plants. Tiurakh is honored through dances and stories during important lunar events."
  },
  {
    id: 39,
    name: "Tokoloshe",
    type: "Spirit",
    country: "South Africa",
    region: "Southern Africa",
    tribe: "Zulu",
    description: "A mischievous water sprite that can be summoned for protection or mischief.",
    image: "assets/dataset/tokoloshe.png",
    lore: "Tokoloshe is a small, mischievous water spirit in Zulu mythology that can be called upon to protect or harm. Traditionally, tokoloshes are believed to guard treasure and assist medicine men. However, they can also cause trouble for those who disturb them, making them a complex part of Zulu spiritual practice."
  },
  {
    id: 40,
    name: "Yorugu",
    type: "Spirit",
    country: "Ethiopia",
    region: "East Africa",
    tribe: "Amhara",
    description: "The forest guardian spirit, protector of the ancient woodlands.",
    image: "assets/dataset/yorugu.png",
    lore: "Yorugu is the guardian spirit of the forests in Amhara tradition, protecting the trees and creatures within. This spirit is honored through rituals performed at sacred groves and forest shrines. Hunters and woodcutters seek Yorugu's permission before taking from the forest, offering prayers to maintain balance with nature."
  }
];
// This next section of code "currentFilters" is an object that keeps track of all active filters
// It allows for my websiteto easily manage and apply multiple filters simultaneously when rendering the myths catalogue
// and also allows for easy resetting of filters when the user clicks the reset button
// The properties (key value pairs) of the currentFilters object include:
// - search: string typed by the user
// - types/regions: arrays because multiple can be selected at once
// - tribe/country: strings because only one can be selected at a time
// - sort: string representing the chosen sort order
// - showFavorites: boolean toggle to show only favorited entries
let currentFilters = {
  search: "",
  types: [],
  regions: [],
  tribe: "",
  country: "",
  sort: "a-z",
  showFavorites: false
}
// ===== FILTER AND SORT LOGIC =====
// DATA OPERATION — FILTERING + SORTING
// This is the core data function of the catalogue. It takes mythsArray and
// applies every active filter from currentFilters in sequence using .filter().
// Each condition acts as a gate: if a myth fails any check, it is excluded.
// After filtering, the surviving array is sorted in place using .sort() with
// different comparison functions based on the chosen sort order. The final
// filtered and sorted array is then returned for rendering.
function getFilteredAndSortedMyths() {
  let filtered = mythsArray.filter(myth => {
    // Search filter
    if (currentFilters.search) {
      const query = currentFilters.search.toLowerCase();
      const matchesSearch = 
        myth.name.toLowerCase().includes(query) ||
        myth.country.toLowerCase().includes(query) ||
        myth.tribe.toLowerCase().includes(query) ||
        myth.description.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Type filter
    if (currentFilters.types.length > 0) {
      if (!currentFilters.types.includes(myth.type)) return false;
    }

    // Region filter
    if (currentFilters.regions.length > 0) {
      if (!currentFilters.regions.includes(myth.region)) return false;
    }

    // Tribe filter
    if (currentFilters.tribe) {
      if (myth.tribe !== currentFilters.tribe) return false;
    }

    // Country filter
    if (currentFilters.country) {
      if (myth.country !== currentFilters.country) return false;
    }

    // Favorites filter - only show items in favorites array
    if (currentFilters.showFavorites) {
      if (!favorites.includes(myth.id)) return false;
    }

    return true;
  });

  // Sort
  switch (currentFilters.sort) {
    case "a-z":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "z-a":
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "region":
      filtered.sort((a, b) => a.region.localeCompare(b.region));
      break;
    case "type":
      filtered.sort((a, b) => a.type.localeCompare(b.type));
      break;
  }

  return filtered;
};

// This next section of code "favorites" is an array that stores the ids of the myths that the user has favorited by clicking the star icon 
// Favorites here is a flat array of myht IDs
let favorites = [];

// ===== INITIALIZE =====
// This section runs once, renders the initial catalogue and wires up all interactive UI elements
document.addEventListener("DOMContentLoaded", () => {
  renderMythsCatalogue();
  setupEventListeners();
  populateTribeDropdown();
  populateCountryDropdown();
  updateFavoritesCount();
});


// ===== UPDATE FAVORITES COUNT =====
// Reads the length of the favorites array and updates the count badge.
function updateFavoritesCount() {
  const countElement = document.getElementById("favorites-count");
  countElement.textContent = favorites.length;
}

// ===== TOGGLE FAVORITE =====
// DATA OPERATION — ADD / REMOVE FROM ARRAY
// Checks whether the myth's id already exists in the favorites array.
// If found , it removes it with .splice()
// If not found, it adds the id with .push(). Then re-renders to reflect the updated star state on all visible cards.
function toggleFavorite(id) {
  // Check if already favorited
  const index = favorites.indexOf(id);
  if (index > -1) {
    // Remove from favorites
    favorites.splice(index, 1);
  } else {
    // Add to favorites
    favorites.push(id);
  }
  // Update the count display
  updateFavoritesCount();
  // Re-render to show updated star states
  renderMythsCatalogue();
}

// ===== CHECK IF FAVORITED =====
// Helper that returns true/false for whether a given id is in the favorites array.
function isFavorited(id) {
  return favorites.includes(id);
}

// ===== EVENT LISTENERS =====
// Attaches all user interaction handlers to the DOM after the page loads.
// Each listener updates the relevant property in currentFilters and then
// calls renderMythsCatalogue() to refresh the displayed results.
function setupEventListeners() {
  // Search
  document.getElementById("search-input").addEventListener("input", (e) => {
    currentFilters.search = e.target.value;
    renderMythsCatalogue();
  });

  // Type filter pills (Filters by type)
  document.querySelectorAll(".type-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const type = pill.dataset.type;
      if (currentFilters.types.includes(type)) {
        currentFilters.types = currentFilters.types.filter(t => t !== type);
      } else {
        currentFilters.types.push(type);
      }
      updatePillStates();
      renderMythsCatalogue();
    });
  });

  // Region filter pills (Filters by region)
  document.querySelectorAll(".region-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const region = pill.dataset.region;
      if (currentFilters.regions.includes(region)) {
        currentFilters.regions = currentFilters.regions.filter(r => r !== region);
      } else {
        currentFilters.regions.push(region);
      }
      updatePillStates();
      renderMythsCatalogue();
    });
  });

  // Tribe dropdown (Filters by tribe)
  document.getElementById("tribe-filter").addEventListener("change", (e) => {
    currentFilters.tribe = e.target.value;
    renderMythsCatalogue();
  });

  // Country dropdown - filter by country
  document.getElementById("country-filter").addEventListener("change", (e) => {
    currentFilters.country = e.target.value;
    renderMythsCatalogue();
  });

  // Favorites button - toggle showing only favorites
  document.getElementById("favorites-btn").addEventListener("click", () => {
    currentFilters.showFavorites = !currentFilters.showFavorites;
    // Update button appearance
    const btn = document.getElementById("favorites-btn");
    btn.classList.toggle("active", currentFilters.showFavorites);
    renderMythsCatalogue();
  });

  // Sort dropdown
  // Updates currentFilters.sort with the chosen option (a-z, z-a, region, type).
  document.getElementById("sort-select").addEventListener("change", (e) => {
    currentFilters.sort = e.target.value;
    renderMythsCatalogue();
  });

  // Reset all filters to their default values
  document.getElementById("reset-btn").addEventListener("click", resetFilters);

  // Modal close buttons
  document.querySelectorAll(".modal-close").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.target.closest(".modal").classList.remove("active");
    });
  });

  // Click outside modal to close
  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });

  // Form submit for adding and editing new entries (currently just logs the form data, but can be expanded to actually add/edit entries in the dataset)
  document.getElementById("add-deity-form").addEventListener("submit", handleAddDeity);
  document.getElementById("clear-form-btn").addEventListener("click", clearForm);

  // Edit form submit
  document.getElementById("edit-deity-form").addEventListener("submit", handleEditDeity);
}

// ===== UPDATE PILL STATES =====
function updatePillStates() {
  document.querySelectorAll(".type-pill").forEach(pill => {
    const type = pill.dataset.type;
    if (currentFilters.types.includes(type)) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  document.querySelectorAll(".region-pill").forEach(pill => {
    const region = pill.dataset.region;
    if (currentFilters.regions.includes(region)) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
}
// ===== RENDER CATALOGUE =====
// Reads the filtered/sorted array and builds a card element for each myth,
// injecting it into the #myths-grid container.
function renderMythsCatalogue() {
  const grid = document.getElementById("myths-grid");
  const filtered = getFilteredAndSortedMyths();

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">No deities match your search. Try adjusting your filters.</div>';
    return;
  }

  filtered.forEach(myth => {
    const card = document.createElement("div");
    card.className = "myth-card";
    const typeColor = getTypeColor(myth.type);
    // Check if this item is favorited
    const isFav = isFavorited(myth.id);
    
    const imageHTML = myth.image 
      ? `<img src="${myth.image}" alt="${myth.name}" class="myth-image" onerror="this.style.display='none'">`
      : `<div class="myth-icon">${getIconSVG(myth.type)}</div>`;

    card.innerHTML = `
      <div class="card-image-container">
        ${imageHTML}
        <button class="card-favorite-btn ${isFav ? 'favorited' : ''}" onclick="event.stopPropagation(); toggleFavorite(${myth.id})">
          ${isFav ? '★' : '☆'}
        </button>
        <span class="type-badge badge-${typeColor}">${myth.type}</span>
      </div>
      <div class="card-body">
        <h3 class="myth-name">${myth.name}</h3>
        <p class="myth-description">${myth.description}</p>
        <div class="myth-tags">
          <span class="tag">${myth.country}</span>
          <span class="tag">${myth.region}</span>
          ${myth.tribe ? `<span class="tag">${myth.tribe}</span>` : ""}
        </div>
        <button class="learn-more-btn" onclick="openDetailModal(${myth.id})">Learn More</button>
      </div>
    `;
    
    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("learn-more-btn") && !e.target.classList.contains("card-favorite-btn")) {
        openDetailModal(myth.id);
      }
    });
    
    grid.appendChild(card);
  });
}
// ===== RESET FILTERS =====
// DATA OPERATION — RESET STATE OBJECT
// Resets the currentFilters object to its default state, clears all input fields and dropdowns, resets the favorites button, and re-renders the catalogue to show all entries.
function resetFilters() {
  currentFilters = {
    search: "",
    types: [],
    regions: [],
    tribe: "",
    country: "",
    sort: "a-z",
    showFavorites: false
  };
  document.getElementById("search-input").value = "";
  document.getElementById("tribe-filter").value = "";
  document.getElementById("country-filter").value = "";
  document.getElementById("sort-select").value = "a-z";
  // Reset favorites button
  document.getElementById("favorites-btn").classList.remove("active");
  updatePillStates();
  renderMythsCatalogue();
}


// ===== POPULATE TRIBE DROPDOWN =====
// This section of code maps through the mythsArray to extract ever tribe, then uses Set to remove duplicates and filter to remove any empty values
// then populates the tribe dropdown with the unique tribes found in the dataset
//the spread operator converts the set back into an array so we can use forEach to create option elements for each tribe and append them to the dropdown
function populateTribeDropdown() {
  const tribes = [...new Set(mythsArray.map(m => m.tribe).filter(t => t))];
  const dropdown = document.getElementById("tribe-filter");
  dropdown.innerHTML = '<option value="">All Tribes</option>';
  tribes.forEach(tribe => {
    const option = document.createElement("option");
    option.value = tribe;
    option.textContent = tribe;
    dropdown.appendChild(option);
  });
}

// ===== POPULATE COUNTRY DROPDOWN =====
// Same as tribes: Extracts unique countries from mythsArray and populates the dropdown
function populateCountryDropdown() {
  // Get unique countries from the myths array
  const countries = [...new Set(mythsArray.map(m => m.country).filter(c => c))];
  // Sort alphabetically
  countries.sort();
  
  const dropdown = document.getElementById("country-filter");
  dropdown.innerHTML = '<option value="">All Countries</option>';
  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    dropdown.appendChild(option);
  });
}
// ===== GET TYPE BADGE COLOR =====
function getTypeColor(type) {
  const colors = {
    "Deity": "gold",
    "Spirit": "teal",
    "Trickster": "amber",
    "Monster": "coral",
    "Ancestor": "purple"
  };
  return colors[type] || "gold";
}

// ===== GET SVG ICON FOR TYPE =====
function getIconSVG(type) {
  const icons = {
    "Deity": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>',
    "Spirit": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
    "Trickster": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-9h10v2H7z"/></svg>',
    "Monster": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>',
    "Ancestor": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>'
  };
  return icons[type] || icons["Deity"];
}

// ===== DETAIL MODAL =====
// Finds the myth object by ID using .find(), then injects its full data
// (including lore) into the detail modal and opens it.
function openDetailModal(id) {
  const myth = mythsArray.find(m => m.id === id);
  if (!myth) return;

  const modal = document.getElementById("detail-modal");
  const typeColor = getTypeColor(myth.type);

  const imageHTML = myth.image 
    ? `<img src="${myth.image}" alt="${myth.name}" class="modal-image" onerror="this.style.display='none'">`
    : `<div class="modal-icon">${getIconSVG(myth.type)}</div>`;

  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <div class="modal-image-container">
        ${imageHTML}
      </div>
      <div class="modal-body">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <h2 class="modal-title">${myth.name}</h2>
          <span class="type-badge badge-${typeColor}">${myth.type}</span>
        </div>
        <div class="modal-tags">
          <span class="tag">${myth.country}</span>
          <span class="tag">${myth.region}</span>
          ${myth.tribe ? `<span class="tag">${myth.tribe}</span>` : ""}
        </div>
        <div class="modal-section">
          <h3>Description</h3>
          <p>${myth.description}</p>
        </div>
        <div class="modal-section">
          <h3>Lore</h3>
          <p>${myth.lore}</p>
        </div>
        <div class="modal-actions">
          <button class="btn-edit" onclick="openEditModal(${myth.id})">Edit this Deity</button>
          <button class="btn-remove" onclick="removeDeity(${myth.id})">Remove from Archive</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  setupCloseListener(modal);
}

// ===== EDIT MODAL =====
// Finds the myth by ID, then pre-fills the edit form with that myth's
// current values so the user sees what they're changing.
function openEditModal(id) {
  const myth = mythsArray.find(m => m.id === id);
  if (!myth) return;

  const editModal = document.getElementById("edit-modal");
  const form = document.getElementById("edit-deity-form");
  
  form.innerHTML = `
    <h2 class="form-title">Edit Deity Information</h2>
    
    <div class="form-group">
      <label for="edit-name">Name *</label>
      <input type="text" id="edit-name" value="${myth.name}" required>
      <span class="error-message"></span>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="edit-type">Type *</label>
        <select id="edit-type" required>
          <option value="Deity" ${myth.type === "Deity" ? "selected" : ""}>Deity</option>
          <option value="Spirit" ${myth.type === "Spirit" ? "selected" : ""}>Spirit</option>
          <option value="Trickster" ${myth.type === "Trickster" ? "selected" : ""}>Trickster</option>
          <option value="Monster" ${myth.type === "Monster" ? "selected" : ""}>Monster</option>
          <option value="Ancestor" ${myth.type === "Ancestor" ? "selected" : ""}>Ancestor</option>
        </select>
      </div>

      <div class="form-group">
        <label for="edit-country">Country *</label>
        <input type="text" id="edit-country" value="${myth.country}" required>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="edit-region">Region *</label>
        <select id="edit-region" required>
          <option value="West Africa" ${myth.region === "West Africa" ? "selected" : ""}>West Africa</option>
          <option value="East Africa" ${myth.region === "East Africa" ? "selected" : ""}>East Africa</option>
          <option value="Central Africa" ${myth.region === "Central Africa" ? "selected" : ""}>Central Africa</option>
          <option value="Southern Africa" ${myth.region === "Southern Africa" ? "selected" : ""}>Southern Africa</option>
        </select>
      </div>

      <div class="form-group">
        <label for="edit-tribe">Tribe</label>
        <input type="text" id="edit-tribe" value="${myth.tribe}">
      </div>
    </div>

    <div class="form-group">
      <label for="edit-description">Description *</label>
      <textarea id="edit-description" required>${myth.description}</textarea>
    </div>

    <div class="form-group">
      <label for="edit-lore">Extended Lore</label>
      <textarea id="edit-lore">${myth.lore}</textarea>
    </div>

    <div class="form-actions">
      <button type="submit" class="btn-submit">Save Changes</button>
      <button type="button" class="btn-cancel" onclick="document.getElementById('edit-modal').classList.remove('active')">Cancel</button>
    </div>

    <input type="hidden" id="edit-id" value="${myth.id}">
  `;

  editModal.classList.add("active");
  setupCloseListener(editModal);
}

// ===== HANDLE EDIT DEITY =====
// DATA OPERATION — UPDATE ENTRY IN ARRAY
// Finds the index of the myth being edited using .findIndex(), then
// replaces the entire object at that index with a new object built from
// the form values.

function handleEditDeity(e) {
  e.preventDefault();
  
  const id = parseInt(document.getElementById("edit-id").value);
  const mythIndex = mythsArray.findIndex(m => m.id === id);
  const myth = mythsArray[mythIndex];
  
  if (mythIndex === -1) return;

  mythsArray[mythIndex] = {
    id,
    name: document.getElementById("edit-name").value,
    type: document.getElementById("edit-type").value,
    country: document.getElementById("edit-country").value,
    region: document.getElementById("edit-region").value,
    tribe: document.getElementById("edit-tribe").value,
    image: myth.image,
    description: document.getElementById("edit-description").value,
    lore: document.getElementById("edit-lore").value
  };

  document.getElementById("edit-modal").classList.remove("active");
  document.getElementById("detail-modal").classList.remove("active");
  renderMythsCatalogue();
}

// ===== REMOVE DEITY =====
// DATA OPERATION — DELETE ENTRY FROM ARRAY
// Prompts the user for confirmation, then uses .findIndex() to locate the
// myth and .splice() to permanently remove it from mythsArray.
// Re-renders the catalogue after removal.
function removeDeity(id) {
  if (confirm("Are you sure you want to remove this deity from the archive? This cannot be undone.")) {
    const index = mythsArray.findIndex(m => m.id === id);
    if (index > -1) {
      mythsArray.splice(index, 1);
      document.getElementById("detail-modal").classList.remove("active");
      renderMythsCatalogue();
    }
  }
}

// ===== HANDLE ADD DEITY =====
// DATA OPERATION — ADD NEW ENTRY TO ARRAY
// Reads all form fields, generates a new unique ID by finding the current
// max ID in mythsArray and adding 1, then pushes a new myth object onto
// the array.
function handleAddDeity(e) {
  e.preventDefault();

  const newId = Math.max(...mythsArray.map(m => m.id), 0) + 1;
  const newMyth = {
    id: newId,
    name: document.getElementById("deity-name").value,
    type: document.getElementById("deity-type").value,
    country: document.getElementById("deity-country").value,
    region: document.getElementById("deity-region").value,
    tribe: document.getElementById("deity-tribe").value,
    image: "",
    description: document.getElementById("deity-description").value,
    lore: document.getElementById("deity-lore").value
  };

  mythsArray.push(newMyth);
  clearForm();
  renderMythsCatalogue();
  
  // Scroll to new card
  const newCards = document.querySelectorAll(".myth-card");
  if (newCards.length > 0) {
    newCards[newCards.length - 1].scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// ===== CLEAR FORM =====
// Resets the add-deity form back to its empty default state
function clearForm() {
  document.getElementById("add-deity-form").reset();
  document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
}

// ===== SETUP CLOSE LISTENER =====
function setupCloseListener(modal) {
  modal.querySelector(".modal-close").addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}
