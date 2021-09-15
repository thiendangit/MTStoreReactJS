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

declare module 'Tag' {
  interface ProductTag {
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
