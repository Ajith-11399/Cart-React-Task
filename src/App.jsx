import React, { createContext, useState } from "react";
import Cart from "./Cart/Cart";

export const mycontext = createContext("");

const App = () => {
  const cartApi = [
    {
      id: 1,
      title: "Galaxy Z Fold5",
      description:
        "Welcome to the era of mobile AI. With Galaxy Z Fold5 in your hands, you can unleash whole new levels of creativity, productivity and possibility starting with the most important device in your life. Your smartphone.",
      price: 120000,
      discountPercentage: 17.94,
      rating: 4.64,
      stock: 34,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "../src/assets/1.webp",
        "../src/assets/2.webp",
        "../src/assets/3.webp",
        "../src/assets/4.webp",
      ],
    },
    {
      id: 2,
      title: "iPhone 13",
      description: "Your new iPhone awaits. Make it yours.",
      price: 70000,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "../src/assets/5.webp",
        "../src/assets/6.webp",
        "../src/assets/7.png",
        "../src/assets/8.png",
      ],
    },

    {
      id: 3,
      title: "12 5G",
      description: `From the portholes, astronauts look further into space, explorers peer into the depths of the ocean, and off-road drivers cast their eyes over distant mountains... .`,
      price: 70000,
      discountPercentage: 17.91,
      rating: 4.68,
      stock: 123,
      brand: "IQOO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "../src/assets/9.webp",
        "../src/assets/10.webp",
        "../src/assets/11.png",
        "../src/assets/12.webp",
      ],
    },
    {
      id: 4,
      title: "12",
      description:
        "Time empowers creation, leaving its imprint all around us. With design elegance and craftsmanship inspired by the world's most luxurious watches, bold statements reside in every detail.",
      price: 70000,
      discountPercentage: 15.46,
      rating: 4.59,
      stock: 36,
      brand: "OnePlus",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: [
        "../src/assets/13.webp",
        "../src/assets/14.webp",
        "../src/assets/15.webp",
        "../src/assets/16.webp",
      ],
    },
    {
      id: 5,
      title: "9 Pro",
      description:
        "The REDMAGIC 9 Pro features a sleek, flat rear design with durable glass, and no camera bump in sight, giving it a super comfortable feel.",
      price: 70000,
      discountPercentage: 10.58,
      rating: 4.7,
      stock: 32,
      brand: "REDMAGIC",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "../src/assets/17.webp",
        "../src/assets/18.png",
        "../src/assets/19.webp",
        "../src/assets/20.png"
      ],
    },
  ];

  const [data, setData] = useState(cartApi);

  return (
    <div>
      <mycontext.Provider value={[data, setData]}>
        <Cart />
      </mycontext.Provider>
    </div>
  );
};

export default App;
