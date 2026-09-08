/* Infos pratiques — L'Atelier du Pizzaiolo */

export const INSTAGRAM = 'https://www.instagram.com/latelier_du_pizzaiolo/'
export const INSTAGRAM_HANDLE = '@latelier_du_pizzaiolo'

export const BRANCHES = [
  {
    id: 'dely',
    name: { fr: 'Dely Brahim', ar: 'دالي إبراهيم' },
    addr: { fr: 'Dely Brahim, Alger', ar: 'دالي إبراهيم، الجزائر العاصمة' },
    tel: '05 41 65 12 80',
    telHref: '+213541651280',
    wa: '213541651280',
    maps: "https://www.google.com/maps/place/L'+Atelier+du+Pizzaiolo/@36.7601945,2.9843837,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb1ced011032b:0xf96f9609d0310a91!8m2!3d36.7601945!4d2.9843837!16s%2Fg%2F11cnc7sgzr",
    embed: 'https://maps.google.com/maps?q=36.7601945,2.9843837&z=16&output=embed',
  },
  {
    id: 'hydra',
    name: { fr: 'Hydra · Saïd Hamdine', ar: 'حيدرة · سعيد حمدين' },
    addr: { fr: 'Saïd Hamdine, Hydra, Alger', ar: 'سعيد حمدين، حيدرة، الجزائر العاصمة' },
    tel: '05 42 72 37 39',
    telHref: '+213542723739',
    wa: '213542723739',
    maps: "https://www.google.com/maps/place/L'atelier+du+pizzaiolo/@36.7458381,3.041054,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb30e3150fd07:0xff5bb29a56c19401!8m2!3d36.7458381!4d3.041054!16s%2Fg%2F11s84jzs3d",
    embed: 'https://maps.google.com/maps?q=36.7458381,3.041054&z=16&output=embed',
  },
  {
    id: 'val',
    name: { fr: 'Val d’Hydra', ar: 'فال دحيدرة' },
    addr: { fr: 'Val d’Hydra, Alger', ar: 'فال دحيدرة، الجزائر العاصمة' },
    tel: '07 96 74 39 62',
    telHref: '+213796743962',
    wa: '213796743962',
    maps: "https://www.google.com/maps/place/L%E2%80%99atelier+du+pizzaiolo+Val+d%E2%80%99hydra/@36.7621518,3.0241018,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb3005f89236b:0x50b76a60ad4d409a!8m2!3d36.7621518!4d3.0241018!16s%2Fg%2F11y3t9wlyd",
    embed: 'https://maps.google.com/maps?q=36.7621518,3.0241018&z=16&output=embed',
  },
]

export const REVIEWS = [
  { name: 'Yasmine B.', q: { fr: 'La Signature du Chef est une tuerie — la burrata change tout. La pâte est fine, croustillante, on sent le feu de bois.', ar: 'بيتزا «توقيع الشيف» خرافية — البوراتا تغيّر كل شيء. العجينة رقيقة ومقرمشة، تشعر بنار الحطب.' } },
  { name: 'Amine K.', q: { fr: 'Meilleure pizza d’Alger, sans débat. La Boisée Fumée est incroyable et l’équipe est aux petits soins.', ar: 'أفضل بيتزا في الجزائر، بلا نقاش. «غابية مدخنة» رائعة والفريق في غاية اللطف.' } },
  { name: 'Sarah M.', q: { fr: 'Portions généreuses, produits frais, et la pâte polenta en option c’est génial. Je commande chaque vendredi.', ar: 'حصص سخية، منتجات طازجة، وعجينة البولينتا اختيارياً فكرة رائعة. أطلب كل جمعة.' } },
  { name: 'Ryad D.', q: { fr: 'Commandé sur WhatsApp, livré en 35 min à Hydra, encore brûlante. La Raclette Authentique me hante.', ar: 'طلبت عبر واتساب، وصلني الطلب في 35 دقيقة إلى حيدرة وهو لازال ساخناً. «راكليت أصلية» تسكن تفكيري.' } },
  { name: 'Meriem L.', q: { fr: 'Enfin une vraie pizza artisanale ! Le gruyère importé change tout par rapport aux autres pizzerias.', ar: 'أخيراً بيتزا حرفية حقيقية! الغرويير المستورد يصنع الفرق مقارنة ببقية المطاعم.' } },
  { name: 'Sofiane H.', q: { fr: 'À Val d’Hydra, on voit le pizzaiolo travailler derrière le four. Un spectacle, et une 4 Saisons parfaite.', ar: 'في فال دحيدرة ترى البيتزايولو يعمل أمام الفرن. متعة للعين، وبيتزا «الفصول الأربعة» مثالية.' } },
]

export const OFFERS = [
  {
    tag: { fr: 'Combo du moment', ar: 'عرض اللحظة' },
    title: { fr: 'Formule Atelier', ar: 'صيغة المشغل' },
    desc: { fr: 'Une pizza L (base tomate) + une boisson 33 cl, de 11 h à 15 h, sur place ou à emporter.', ar: 'بيتزا مقاس L (صلصة طماطم) + مشروب 33 سل، من 11h إلى 15h، في المحل أو سفري.' },
    price: '1 200',
    old: '1 550',
    featured: true,
  },
  {
    tag: { fr: 'Family deal', ar: 'عرض العائلة' },
    title: { fr: 'Dimanche en famille', ar: 'أحد العائلة' },
    desc: { fr: 'Deux pizzas XL + une pizza L au choix, chaque dimanche, dans les trois ateliers.', ar: 'بيتزتان XL + بيتزا L من اختيارك، كل يوم أحد، في الفروع الثلاثة.' },
    price: '6 500',
    old: '7 400',
    featured: false,
  },
  {
    tag: { fr: 'Nouveauté', ar: 'جديد' },
    title: { fr: 'Signature du Chef', ar: 'توقيع الشيف' },
    desc: { fr: 'Pastrami artisanal, burrata Bio, tomates cerises, parmesan & pesto. La pizza dont tout le monde parle.', ar: 'باسترامي حرفي، بوراتا بيولوجية، طماطم كرزية، بارميزان وبيستو. البيتزا التي يتحدث عنها الجميع.' },
    price: '2 000',
    old: null,
    featured: false,
  },
]

export const WHY_US = [
  { icon: 'wheat', t: 'why.1t', d: 'why.1d' },
  { icon: 'cheese', t: 'why.2t', d: 'why.2d' },
  { icon: 'flame', t: 'why.3t', d: 'why.3d' },
  { icon: 'halal', t: 'why.4t', d: 'why.4d' },
]

export const FAQ = [
  { q: 'faq.1q', a: 'faq.1a' },
  { q: 'faq.2q', a: 'faq.2a' },
  { q: 'faq.3q', a: 'faq.3a' },
  { q: 'faq.4q', a: 'faq.4a' },
]

export const IG_GRID = [
  '/images/slice-pull.jpg',
  '/images/dough.jpg',
  '/images/oven.jpg',
  '/images/pizza-margherita.jpg',
  '/images/combo.jpg',
  '/images/interior.jpg',
]

export const STATS = [
  { n: '3', label: 'stat.1' },
  { n: '34', label: 'stat.2' },
  { n: '48 h', label: 'stat.3' },
  { n: '68 k', label: 'stat.4' },
]
