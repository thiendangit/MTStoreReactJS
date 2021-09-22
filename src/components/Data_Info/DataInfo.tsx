import * as Menu from 'Menu';
import * as Tag from 'Tag';
import * as CategoryMenu from 'CategoryMenu';
import * as WooCommerce from 'WooCommerce';
import * as FeedbackPost from 'FeedbackPost';

export const itemMenu: Menu.ItemMenu[] = [
  { title: 'Bakery', path: '#bakery' },
  { title: 'Fruit and vegetables', path: '#fruit_vegetables' },
  { title: 'Meat and fish', path: '#meat_fish' },
  { title: 'Drinks', path: '#drinks' },
  { title: 'Kitchen', path: '#kitchen' },
  { title: 'Special nutrition', path: '#Special_nutrition' },
  { title: 'Baby', path: '#baby' },
  { title: 'Pharmacy', path: '#pharmacy' },
];
export const productTags: Tag.ProductTag[] = [
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
export const categoryCard: CategoryMenu.CategoryCard[] = [
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
export const productList: WooCommerce.Product[] = [
  {
    id: 799,
    name: 'Product Title',
    slug: 'ship-your-idea-22',
    permalink: 'https://example.com/product/ship-your-idea-22/',
    date_created: '2017-03-23T17:03:12',
    date_created_gmt: '2017-03-23T20:03:12',
    date_modified: '2017-03-23T17:03:12',
    date_modified_gmt: '2017-03-23T20:03:12',
    type: 'variable',
    status: 'publish',
    featured: false,
    catalog_visibility: 'visible',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    short_description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    sku: '',
    price: '48.56',
    regular_price: '0.28',
    sale_price: '-36%',
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    price_html: '',
    on_sale: false,
    purchasable: false,
    total_sales: 0,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: '',
    button_text: '',
    tax_status: 'taxable',
    tax_class: '',
    manage_stock: false,
    stock_quantity: null,
    stock_status: 'instock',
    backorders: 'no',
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: '',
    dimensions: {
      length: '',
      width: '',
      height: '',
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: '',
    shipping_class_id: 0,
    reviews_allowed: true,
    average_rating: '0.00',
    rating_count: 0,
    related_ids: [31, 22, 369, 414, 56],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: '',
    categories: [
      {
        id: 9,
        name: 'Clothing',
        slug: 'clothing',
      },
      {
        id: 14,
        name: 'T-shirts',
        slug: 't-shirts',
      },
    ],
    tags: [],
    images: [
      {
        id: 793,
        date_created: '2017-03-23T14:03:11',
        date_created_gmt: '2017-03-23T20:03:11',
        date_modified: '2017-03-23T14:03:11',
        date_modified_gmt: '2017-03-23T20:03:11',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7YUMcrmn1KENRXmBr7IQjxyB-rJqAOjnBA&usqp=CAU',
        name: '',
        alt: '',
      },
      {
        id: 794,
        date_created: '2017-03-23T14:03:11',
        date_created_gmt: '2017-03-23T20:03:11',
        date_modified: '2017-03-23T14:03:11',
        date_modified_gmt: '2017-03-23T20:03:11',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7YUMcrmn1KENRXmBr7IQjxyB-rJqAOjnBA&usqp=CAU',
        name: '',
        alt: '',
      },
      {
        id: 795,
        date_created: '2017-03-23T14:03:08',
        date_created_gmt: '2017-03-23T20:03:08',
        date_modified: '2017-03-23T14:03:08',
        date_modified_gmt: '2017-03-23T20:03:08',
        src:
          'https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg',
        name: '',
        alt: '',
      },
      {
        id: 796,
        date_created: '2017-03-23T14:03:09',
        date_created_gmt: '2017-03-23T20:03:09',
        date_modified: '2017-03-23T14:03:09',
        date_modified_gmt: '2017-03-23T20:03:09',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2stfQ01420Zzw0EhOpPOo_juxVI3AEIuuw&usqp=CAU',
        name: '',
        alt: '',
      },
      {
        id: 797,
        date_created: '2017-03-23T14:03:10',
        date_created_gmt: '2017-03-23T20:03:10',
        date_modified: '2017-03-23T14:03:10',
        date_modified_gmt: '2017-03-23T20:03:10',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHvSXXeaaOctfvhHXUM3-hzLOTeF32AKg_g&usqp=CAU',
        name: '',
        alt: '',
      },
      {
        id: 798,
        date_created: '2017-03-23T14:03:11',
        date_created_gmt: '2017-03-23T20:03:11',
        date_modified: '2017-03-23T14:03:11',
        date_modified_gmt: '2017-03-23T20:03:11',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7YUMcrmn1KENRXmBr7IQjxyB-rJqAOjnBA&usqp=CAU',
        name: '',
        alt: '',
      },
      {
        id: 799,
        date_created: '2017-03-23T14:03:11',
        date_created_gmt: '2017-03-23T20:03:11',
        date_modified: '2017-03-23T14:03:11',
        date_modified_gmt: '2017-03-23T20:03:11',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7YUMcrmn1KENRXmBr7IQjxyB-rJqAOjnBA&usqp=CAU',
        name: '',
        alt: '',
      },
      {
        id: 800,
        date_created: '2017-03-23T14:03:11',
        date_created_gmt: '2017-03-23T20:03:11',
        date_modified: '2017-03-23T14:03:11',
        date_modified_gmt: '2017-03-23T20:03:11',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7YUMcrmn1KENRXmBr7IQjxyB-rJqAOjnBA&usqp=CAU',
        name: '',
        alt: '',
      },
      {
        id: 801,
        date_created: '2017-03-23T14:03:11',
        date_created_gmt: '2017-03-23T20:03:11',
        date_modified: '2017-03-23T14:03:11',
        date_modified_gmt: '2017-03-23T20:03:11',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7YUMcrmn1KENRXmBr7IQjxyB-rJqAOjnBA&usqp=CAU',
        name: '',
        alt: '',
      },
      {
        id: 802,
        date_created: '2017-03-23T14:03:11',
        date_created_gmt: '2017-03-23T20:03:11',
        date_modified: '2017-03-23T14:03:11',
        date_modified_gmt: '2017-03-23T20:03:11',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7YUMcrmn1KENRXmBr7IQjxyB-rJqAOjnBA&usqp=CAU',
        name: '',
        alt: '',
      },
      {
        id: 803,
        date_created: '2017-03-23T14:03:11',
        date_created_gmt: '2017-03-23T20:03:11',
        date_modified: '2017-03-23T14:03:11',
        date_modified_gmt: '2017-03-23T20:03:11',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7YUMcrmn1KENRXmBr7IQjxyB-rJqAOjnBA&usqp=CAU',
        name: '',
        alt: '',
      },
    ],
    attributes: [
      {
        id: 6,
        name: 'Color',
        position: 0,
        visible: false,
        variation: true,
        options: ['Black', 'Green'],
      },
      {
        id: 0,
        name: 'Size',
        position: 0,
        visible: true,
        variation: true,
        options: ['S', 'M'],
      },
    ],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    meta_data: [],
    _links: {
      self: [
        {
          href: 'https://example.com/wp-json/wc/v3/products/799',
        },
      ],
      collection: [
        {
          href: 'https://example.com/wp-json/wc/v3/products',
        },
      ],
    },
  },
];
export const feedbackCustomers: FeedbackPost.FeedBackCustomers[] = [
  {
    id: 22,
    product_id: 22,
    status: 'approved',
    reviewer: 'John Doe',
    reviewer_email: 'john.doe@example.com',
    review:
      '“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “',
  },
  {
    id: 23,
    product_id: 23,
    status: 'approved',
    reviewer: 'John Doe',
    reviewer_email: 'john.doe@example.com',
    review:
      '“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “',
  },
  {
    id: 24,
    product_id: 24,
    status: 'approved',
    reviewer: 'John Doe',
    reviewer_email: 'john.doe@example.com',
    review:
      '“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “',
  },
  {
    id: 25,
    product_id: 25,
    status: 'approved',
    reviewer: 'John Doe',
    reviewer_email: 'john.doe@example.com',
    review:
      '“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “',
  },
  {
    id: 26,
    product_id: 26,
    status: 'approved',
    reviewer: 'John Doe',
    reviewer_email: 'john.doe@example.com',
    review:
      '“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “',
  },
  {
    id: 27,
    product_id: 27,
    status: 'approved',
    reviewer: 'John Doe',
    reviewer_email: 'john.doe@example.com',
    review:
      '“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “',
  },
  {
    id: 28,
    product_id: 28,
    status: 'approved',
    reviewer: 'John Doe',
    reviewer_email: 'john.doe@example.com',
    review:
      '“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “',
  },
  {
    id: 29,
    product_id: 29,
    status: 'approved',
    reviewer: 'John Doe',
    reviewer_email: 'john.doe@example.com',
    review:
      '“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “',
  },
  {
    id: 30,
    product_id: 30,
    status: 'approved',
    reviewer: 'John Doe',
    reviewer_email: 'john.doe@example.com',
    review:
      '“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “',
  },
];
export const blogPosts: FeedbackPost.BlogPostsAuthor[] = [
  {
    id: 1,
    title: 'Dinner tips',
    content: 'Our chef tips for a great and tasty dinner ready in 20 minutes',
    avatar:
      'data:image/jpeg;base64,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',
    img:
      'https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg',
    author: 'Author',
    date: '17. 6. 2020',
  },
  {
    id: 2,
    title: 'Vegetable',
    content: 'Our chef tips for a great and tasty dinner ready in 20 minutes',
    avatar: '',
    img:
      'https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg',
    author: 'Author',
    date: '17. 6. 2020',
  },
  {
    id: 3,
    title: 'Dinner tips',
    content: 'Our chef tips for a great and tasty dinner ready in 20 minutes',
    avatar: '',
    img:
      'https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg',
    author: 'Author',
    date: '17. 6. 2020',
  },
  {
    id: 4,
    title: 'Dinner tips',
    content: 'Our chef tips for a great and tasty dinner ready in 20 minutes',
    avatar: '',
    img:
      'https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg',
    author: 'Author',
    date: '17. 6. 2020',
  },
  {
    id: 5,
    title: 'Dinner tips',
    content: 'Our chef tips for a great and tasty dinner ready in 20 minutes',
    avatar: '',
    img:
      'https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg',
    author: 'Author',
    date: '17. 6. 2020',
  },
  {
    id: 6,
    title: 'Dinner tips',
    content: 'Our chef tips for a great and tasty dinner ready in 20 minutes',
    avatar: '',
    img:
      'https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg',
    author: 'Author',
    date: '17. 6. 2020',
  },
  {
    id: 7,
    title: 'Dinner tips',
    content: 'Our chef tips for a great and tasty dinner ready in 20 minutes',
    avatar: '',
    img:
      'https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg',
    author: 'Author',
    date: '17. 6. 2020',
  },
  {
    id: 8,
    title: 'Dinner tips',
    content: 'Our chef tips for a great and tasty dinner ready in 20 minutes',
    avatar: '',
    img:
      'https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg',
    author: 'Author',
    date: '17. 6. 2020',
  },
  {
    id: 9,
    title: 'Dinner tips',
    content: 'Our chef tips for a great and tasty dinner ready in 20 minutes',
    avatar: '',
    img:
      'https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg',
    author: 'Author',
    date: '17. 6. 2020',
  },
];
