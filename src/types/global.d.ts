// declare module 'Foo' {
//     // Some variable declarations
//     export type Bar = string | number; /*sample*/
// }

declare module 'Menu' {
  export interface ItemMenu {
    title: string;
    path: string;
  }
}
declare module 'CategoryMenu' {
  export interface CategoryCard {
    sub: string;
    title: string;
    textBtn: string;
  }
}
declare module 'Tag' {
  export interface ProductTag {
    name: string;
  }
}

declare module 'FeedbackPost' {
  export interface FeedBackCustomers {
    id: number;
    product_id: number;
    status: string;
    reviewer: string;
    reviewer_email: string;
    review: string;
  }

  export interface BlogPostsAuthor {
    id: number;
    date: Date;
    slug: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    excerpt: Excerpt;
    author: number;
    featured_media: number;
    jetpack_featured_media_url: string;
    shortlink: string;
    rapidData: RapidData;
    premiumContent: boolean;
    premiumCutoffPercent: number;
    featured: boolean;
    subtitle: string;
    seoTitle: string;
    editorialContentProvider: string;
    seoDescription: string;
    tc_cb_mapping: any[];
    associatedEvent: null;
    event: null;
    authors: number[];
    hide_featured_image: boolean;
    canonical_url: string;
    _links: Links;
  }

  export interface Links {
    self: About[];
    collection: About[];
    about: About[];
    replies: Author[];
    'version-history': VersionHistory[];
    'predecessor-version': PredecessorVersion[];
    authors: Author[];
    'https://techcrunch.com/edit': About[];
    author: Author[];
    'wp:featuredmedia': Author[];
    'wp:attachment': About[];
    'wp:term': WpTerm[];
    curies: Cury[];
  }

  export interface About {
    href: string;
  }

  export interface Author {
    embeddable: boolean;
    href: string;
  }

  export interface Cury {
    name: string;
    href: string;
    templated: boolean;
  }

  export interface PredecessorVersion {
    id: number;
    href: string;
  }

  export interface VersionHistory {
    count: number;
    href: string;
  }

  export interface WpTerm {
    taxonomy: string;
    embeddable: boolean;
    href: string;
  }

  export interface Excerpt {
    rendered: string;
    protected: boolean;
  }

  export interface RapidData {
    pt: string;
    pct: string;
  }
}
declare module 'Footer' {
  interface FooterLinks {
    title: string;
    links: Links;
  }

  interface Links {
    [index: number]: string;
  }
}
