/* La carte — L'Atelier du Pizzaiolo (prix en DA, tailles L / XL) */

export const MENU = [
  {
    id: 'tomate',
    nameKey: 'menuPage.cat1',
    items: [
      { id: 'margarita', name: { fr: 'Margarita', ar: 'مارغريتا' }, desc: { fr: 'Mozza Bio, gruyère d’import, olives, basilic.', ar: 'موزاريلا بيولوجية، غرويير مستورد، زيتون، حبق.' }, l: 700, xl: 1400, tags: ['veg'], img: '/images/pizza-margherita.jpg' },
      { id: 'margarita-orig', name: { fr: 'Margarita originale', ar: 'مارغريتا أصلية' }, desc: { fr: 'Rondelles de mozza Bio, pesto, gratinage gruyère.', ar: 'شرائح موزاريلا بيولوجية، بيستو، غراتان غرويير.' }, l: 750, xl: 1500, tags: ['veg'] },
      { id: 'vegetarienne', name: { fr: 'Végétarienne', ar: 'نباتية' }, desc: { fr: 'Mozza Bio, gruyère d’import, poivrons, tomates, oignons, olives, champignons frais, origan.', ar: 'موزاريلا بيولوجية، غرويير مستورد، فلفل رومي، طماطم، بصل، زيتون، فطر طازج، أوريجانو.' }, l: 800, xl: 1600, tags: ['veg'] },
      { id: 'fromagere', name: { fr: 'Fromagère', ar: 'الأجبان' }, desc: { fr: 'Rondelles de mozza Bio, coulommiers, fromage raclette, gruyère.', ar: 'شرائح موزاريلا بيولوجية، جبن كولوميي، راكليت، غرويير.' }, l: 850, xl: 1700, tags: ['veg'] },
      { id: 'tonata', name: { fr: 'Tonata', ar: 'توناتا' }, desc: { fr: 'Mozza Bio, gruyère d’import, thon, oignons, herbes de Provence.', ar: 'موزاريلا بيولوجية، غرويير مستورد، تونة، بصل، أعشاب بروفانس.' }, l: 900, xl: 1800, tags: ['sea'] },
      { id: 'regina', name: { fr: 'Regina', ar: 'ريجينا' }, desc: { fr: 'Mozza Bio, gruyère d’import, jambon de dinde artisanal, origan.', ar: 'موزاريلا بيولوجية، غرويير مستورد، لحم ديك رومي حرفي، أوريجانو.' }, l: 900, xl: 1800, tags: [] },
      { id: 'orientale', name: { fr: 'Orientale', ar: 'شرقية' }, desc: { fr: 'Mozza Bio, gruyère d’import, merguez, poivrons, origan.', ar: 'موزاريلا بيولوجية، غرويير مستورد، مرغيز، فلفل رومي، أوريجانو.' }, l: 950, xl: 1900, tags: [] },
      { id: 'basquaise', name: { fr: 'Basquaise', ar: 'باسكية' }, desc: { fr: 'Mozza Bio, gruyère d’import, escalope de poulet, tomates fraîches, oignons, poivrons, olives.', ar: 'موزاريلا بيولوجية، غرويير مستورد، شرائح دجاج، طماطم طازجة، بصل، فلفل رومي، زيتون.' }, l: 950, xl: 1900, tags: [] },
      { id: 'bolognaise', name: { fr: 'Bolognaise', ar: 'بولونيز' }, desc: { fr: 'Mozza Bio, gruyère d’import, viande hachée de bœuf, oignons.', ar: 'موزاريلا بيولوجية، غرويير مستورد، لحم بقر مفروم، بصل.' }, l: 1000, xl: 2000, tags: [] },
      { id: '4saisons', name: { fr: '4 Saisons', ar: 'الفصول الأربعة' }, desc: { fr: 'Mozza Bio, gruyère d’import, jambon de dinde artisanal, champignons frais, poivrons, oignons, herbes de Provence.', ar: 'موزاريلا بيولوجية، غرويير مستورد، لحم ديك رومي حرفي، فطر طازج، فلفل رومي، بصل، أعشاب بروفانس.' }, l: 1100, xl: 2200, tags: [] },
      { id: 'cannibale', name: { fr: 'Cannibale', ar: 'كانيبال' }, desc: { fr: 'Mozza Bio, gruyère d’import, viande hachée de bœuf, merguez, oignons, poivrons.', ar: 'موزاريلا بيولوجية، غرويير مستورد، لحم بقر مفروم، مرغيز، بصل، فلفل رومي.' }, l: 1100, xl: 2200, tags: [] },
      { id: 'family', name: { fr: 'Family', ar: 'عائلية' }, desc: { fr: 'Mozza Bio, gruyère d’import, viande hachée de bœuf, fromage ail & fines herbes, œuf.', ar: 'موزاريلا بيولوجية، غرويير مستورد، لحم بقر مفروم، جبن بالثوم والأعشاب المنسّمة، بيض.' }, l: 1100, xl: 2200, tags: [] },
      { id: 'piquante', name: { fr: 'Piquante', ar: 'حارة' }, desc: { fr: 'Mozza Bio, gruyère d’import, chorizo artisanal, poivrons, piment.', ar: 'موزاريلا بيولوجية، غرويير مستورد، شوريزو حرفي، فلفل رومي، فلفل حار.' }, l: 1200, xl: 2400, tags: ['spicy'] },
      { id: 'provencale', name: { fr: 'Provençale', ar: 'بروفنسال' }, desc: { fr: 'Mozza Bio, gruyère d’import, anchois Bio, tapenade artisanale, tomates confites.', ar: 'موزاريلا بيولوجية، غرويير مستورد، أنشوا بيولوجي، تابيناد حرفية، طماطم كونفي.' }, l: 1200, xl: 2400, tags: ['sea'] },
      { id: 'lextra', name: { fr: 'L’Extra', ar: 'إكسترا' }, desc: { fr: 'Mozza Bio, gruyère d’import, viande hachée de bœuf, chorizo artisanal, merguez, poivrons, oignons, olives.', ar: 'موزاريلا بيولوجية، غرويير مستورد، لحم بقر مفروم، شوريزو حرفي، مرغيز، فلفل رومي، بصل، زيتون.' }, l: 1300, xl: 2600, tags: ['spicy'] },
      { id: 'bayonne', name: { fr: 'Bayonne', ar: 'بايون' }, desc: { fr: 'Mozza Bio, gruyère d’import, jambon d’import halal, champignons frais, gratinage gruyère.', ar: 'موزاريلا بيولوجية، غرويير مستورد، لحم مدخن مستورد حلال، فطر طازج، غراتان غرويير.' }, l: 1300, xl: 2600, tags: [] },
      { id: 'newyork', name: { fr: 'New Yorkaise', ar: 'نيويورك' }, desc: { fr: 'Mozza Bio, gruyère d’import, pastrami artisanal, oignons, tomates confites, barbecue.', ar: 'موزاريلا بيولوجية، غرويير مستورد، باسترامي حرفي، بصل، طماطم كونفي، صلصة باربكيو.' }, l: 1300, xl: 2600, tags: ['best'], img: '/images/pizza-newyork.jpg' },
      { id: 'rebloche', name: { fr: 'Rebloche', ar: 'رابلوش' }, desc: { fr: 'Mozza Bio, gruyère d’import, lardinette de dinde artisanale, reblochon de Savoie, fromage raclette, champignons frais.', ar: 'موزاريلا بيولوجية، غرويير مستورد، شرائح ديك رومي مدخنة، ربلوشون دو سافوا، راكليت، فطر طازج.' }, l: 1300, xl: 2600, tags: [] },
      { id: 'salmone', name: { fr: 'Salmone', ar: 'سالموني' }, desc: { fr: 'Mozza Bio, gruyère d’import, saumon fumé, fromage ail & fines herbes.', ar: 'موزاريلا بيولوجية، غرويير مستورد، سلمون مدخن، جبن بالثوم والأعشاب المنسّمة.' }, l: 1300, xl: 2600, tags: ['sea'] },
      { id: 'royale', name: { fr: 'Royale', ar: 'ملكية' }, desc: { fr: 'Mozza Bio, gruyère d’import, crevettes fraîches, saumon fumé, pesto.', ar: 'موزاريلا بيولوجية، غرويير مستورد، قريدس طازج، سلمون مدخن، بيستو.' }, l: 1700, xl: 3400, tags: ['sea'] },
      { id: 'signature', name: { fr: 'Signature du Chef', ar: 'توقيع الشيف' }, desc: { fr: 'Rondelles de mozza Bio, pastrami artisanal, burrata Bio, tomates cerises, parmesan, pesto.', ar: 'شرائح موزاريلا بيولوجية، باسترامي حرفي، بوراتا بيولوجية، طماطم كرزية، بارميزان، بيستو.' }, l: 2000, xl: 4000, tags: ['best', 'new'], img: '/images/pizza-signature.jpg' },
    ],
  },
  {
    id: 'creme',
    nameKey: 'menuPage.cat2',
    items: [
      { id: 'cremeuse', name: { fr: 'Cremeuse', ar: 'كريمية' }, desc: { fr: 'Rondelles de mozza Bio, gruyère d’import, coulommiers, fromage raclette, parmesan, gratinage gruyère.', ar: 'شرائح موزاريلا بيولوجية، غرويير مستورد، كولوميي، راكليت، بارميزان، غراتان غرويير.' }, l: 1100, xl: 2200, tags: ['veg'] },
      { id: 'savoyarde', name: { fr: 'Savoyarde', ar: 'سافويار' }, desc: { fr: 'Mozza Bio, gruyère d’import, dinde fumée artisanale, reblochon de Savoie, oignons, gratinage gruyère.', ar: 'موزاريلا بيولوجية، غرويير مستورد، ديك رومي مدخن حرفي، ربلوشون دو سافوا، بصل، غراتان غرويير.' }, l: 1100, xl: 2200, tags: [] },
      { id: 'dijonnaise', name: { fr: 'Dijonnaise', ar: 'ديجون' }, desc: { fr: 'Mozza Bio, gruyère d’import, viande hachée, champignons frais, moutarde, fromage ail & fines herbes, oignons.', ar: 'موزاريلا بيولوجية، غرويير مستورد، لحم مفروم، فطر طازج، خردل، جبن بالثوم والأعشاب، بصل.' }, l: 1100, xl: 2200, tags: [] },
      { id: 'boisee', name: { fr: 'Boisée · spécialité lyonnaise', ar: 'غابية · تخصص ليوني' }, desc: { fr: 'Mozza Bio, gruyère d’import, escalope de poulet, poivrons, sauce gruyère maison.', ar: 'موزاريلا بيولوجية، غرويير مستورد، شرائح دجاج، فلفل رومي، صلصة غرويير منزلية.' }, l: 1200, xl: 2400, tags: [] },
      { id: 'figue', name: { fr: 'Figue-Chèvre', ar: 'تين وماعز' }, desc: { fr: 'Mozza Bio, gruyère d’import, chèvre AOP, confiture de figues, amandes effilées, noix.', ar: 'موزاريلا بيولوجية، غرويير مستورد، جبن ماعز AOP، مربى التين، لوز شرائح، جوز.' }, l: 1200, xl: 2400, tags: ['veg'] },
      { id: 'raclette', name: { fr: 'Raclette Authentique', ar: 'راكليت أصلية' }, desc: { fr: 'Mozza Bio, gruyère d’import, pomme de terre, fromage raclette, dinde fumée artisanale, oignons.', ar: 'موزاريلا بيولوجية، غرويير مستورد، بطاطا، جبن راكليت، ديك رومي مدخن حرفي، بصل.' }, l: 1200, xl: 2400, tags: ['best'], img: '/images/pizza-raclette.jpg' },
      { id: 'boiseefumee', name: { fr: 'Boisée Fumée · spécialité lyonnaise', ar: 'غابية مدخنة · تخصص ليوني' }, desc: { fr: 'Mozza Bio, gruyère d’import, poulet fumé, poivrons, sauce du chef « gruyère ».', ar: 'موزاريلا بيولوجية، غرويير مستورد، دجاج مدخن، فلفل رومي، صلصة الشيف «غرويير».' }, l: 1300, xl: 2600, tags: ['best'], img: '/images/pizza-fumee.jpg' },
      { id: 'norvegienne', name: { fr: 'Norvégienne', ar: 'نرويجية' }, desc: { fr: 'Mozza Bio, gruyère d’import, saumon fumé, tomates fraîches, basilic.', ar: 'موزاريلا بيولوجية، غرويير مستورد، سلمون مدخن، طماطم طازجة، حبق.' }, l: 1300, xl: 2600, tags: ['sea'] },
      { id: 'fondue', name: { fr: 'Fondue', ar: 'فوندو' }, desc: { fr: 'Mozza Bio, gruyère d’import, lardinette de dinde artisanale, reblochon de Savoie, fromage raclette, poivre.', ar: 'موزاريلا بيولوجية، غرويير مستورد، شرائح ديك رومي مدخنة، ربلوشون دو سافوا، راكليت، فلفل أسود.' }, l: 1300, xl: 2600, tags: [] },
      { id: 'boursine', name: { fr: 'Boursine', ar: 'بورسين' }, desc: { fr: 'Mozza Bio, gruyère d’import, saumon fumé, tomates fraîches, oignons, fromage ail & fines herbes.', ar: 'موزاريلا بيولوجية، غرويير مستورد، سلمون مدخن، طماطم طازجة، بصل، جبن بالثوم والأعشاب.' }, l: 1400, xl: 2800, tags: ['sea'] },
      { id: 'oceane', name: { fr: 'L’Océane', ar: 'محيطية' }, desc: { fr: 'Mozza Bio, gruyère d’import, crevettes fraîches, tomates cerises, pesto.', ar: 'موزاريلا بيولوجية، غرويير مستورد، قريدس طازج، طماطم كرزية، بيستو.' }, l: 1600, xl: 3200, tags: ['sea'] },
      { id: 'fruitsmer', name: { fr: 'Fruits de Mer', ar: 'ثمار البحر' }, desc: { fr: 'Mozza Bio, gruyère d’import, poulpe frais, crevettes fraîches, saumon fumé, tomates cerises, tapenade.', ar: 'موزاريلا بيولوجية، غرويير مستورد، أخطبوط طازج، قريدس طازج، سلمون مدخن، طماطم كرزية، تابيناد.' }, l: 1900, xl: 3800, tags: ['sea'] },
      { id: 'burrata', name: { fr: 'Burrata Bianca', ar: 'بوراتا بيانكا' }, desc: { fr: 'Rondelles de mozza Bio, pastrami artisanal, burrata Bio, tomates cerises, tapenade.', ar: 'شرائح موزاريلا بيولوجية، باسترامي حرفي، بوراتا بيولوجية، طماطم كرزية، تابيناد.' }, l: 2000, xl: 4000, tags: ['best'], img: '/images/pizza-burrata.jpg' },
    ],
  },
]

export const ALL_ITEMS = MENU.flatMap((c) => c.items)
export const getItem = (id) => ALL_ITEMS.find((i) => i.id === id)
export const BEST_SELLERS = ALL_ITEMS.filter((i) => i.tags.includes('best'))
