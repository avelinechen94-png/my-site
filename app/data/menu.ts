export interface MenuItem {
  id: string
  name: string
  sizes: { label: string; price: number }[]
  isSpecial?: boolean
}

export interface MenuSection {
  category: string
  items: MenuItem[]
}

export const menuData: MenuSection[] = [
  {
    category: 'Coffee',
    items: [
      {
        id: 'flat-white',
        name: 'Flat White',
        sizes: [
          { label: 'Small', price: 4.5 },
          { label: 'Large', price: 5.5 },
        ],
      },
      {
        id: 'espresso',
        name: 'Espresso',
        sizes: [
          { label: 'Single', price: 3.0 },
          { label: 'Double', price: 4.0 },
        ],
      },
      {
        id: 'fig-latte',
        name: "Tuesday's Fig Latte",
        sizes: [
          { label: 'Small', price: 5.5 },
          { label: 'Large', price: 6.5 },
        ],
        isSpecial: true,
      },
    ],
  },
  {
    category: 'Pastries',
    items: [
      {
        id: 'almond-croissant',
        name: 'Almond Croissant',
        sizes: [{ label: 'One', price: 4.0 }],
      },
      {
        id: 'pain-au-chocolat',
        name: 'Pain au Chocolat',
        sizes: [{ label: 'One', price: 3.5 }],
      },
    ],
  },
]
