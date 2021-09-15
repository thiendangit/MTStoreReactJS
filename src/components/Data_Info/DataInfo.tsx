interface ItemMenu {
  title: string;
  path: string;
}
interface ProductTag {
  name: string;
}
interface FooterLinks {
  title: string;
  links: Links;
}
interface Links {
  [index: number]: string;
}
export const itemMenu: ItemMenu[] = [
  { title: 'Bakery', path: '#bakery' },
  { title: 'Fruit and vegetables', path: '#fruit_vegetables' },
  { title: 'Meat and fish', path: '#meat_fish' },
  { title: 'Drinks', path: '#drinks' },
  { title: 'Kitchen', path: '#kitchen' },
  { title: 'Special nutrition', path: '#Special_nutrition' },
  { title: 'Baby', path: '#baby' },
  { title: 'Pharmacy', path: '#pharmacy' },
];
export const productTags: ProductTag[] = [
  { name: 'Beans' },
  { name: 'Carrots' },
  { name: 'Apples' },
  { name: 'Garlic' },
  { name: 'Mushrooms' },
  { name: 'BeanTomatoes' },
  { name: 'Chilli peppers' },
  { name: 'Broccoli' },
  { name: 'Watermelons' },
  { name: 'Oranges' },
  { name: ' Meat' },
  { name: 'Seo tag' },
  { name: 'Fish' },
  { name: 'Fresh food' },
  { name: 'Lemons' },
  { name: 'Seo tag' },
];
export const footerLinks = [
  {
    title: 'Get in touch',
    links: ['About Us', 'Careers', 'Press Releases', 'Blog'],
  },
  {
    title: 'Connections',
    links: ['Facebook', 'Twitter', 'Instagram', 'Youtube', 'LinkedIn'],
  },
  {
    title: 'Earnings',
    links: ['Become an Affiliate', 'Advertise your product', 'Sell on Market'],
  },
  {
    title: 'Account',
    links: [
      'Your account',
      'Returns Centre',
      '100 % purchase protection',
      'Chat with us',
      'Help',
    ],
  },
];
export const categoryCard = [
  {
    sub: 'Banner subfocus',
    title: 'Space for heading',
    textBtn: 'Read recepies',
  },
  {
    sub: 'Banner subfocus',
    title: 'Space for heading',
    textBtn: 'Read recepies',
  },
  {
    sub: 'Banner subfocus',
    title: 'Space for heading',
    textBtn: 'Read recepies',
  },
  {
    sub: 'Banner subfocus',
    title: 'Space for heading',
    textBtn: 'Read recepies',
  },
  {
    sub: 'Banner subfocus',
    title: 'Space for heading',
    textBtn: 'Read recepies',
  },
  {
    sub: 'Banner subfocus',
    title: 'Space for heading',
    textBtn: 'Read recepies',
  },
];
