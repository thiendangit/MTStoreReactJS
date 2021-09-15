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

declare module 'Footer' {
  interface FooterLinks {
    title: string;
    links: Links;
  }
  interface Links {
    [index: number]: string;
  }
}
