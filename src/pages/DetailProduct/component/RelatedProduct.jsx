import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "~/components/Product/Product";
import { productService } from "~/apis/productService";

const pickRandom = (arr, count = 4) => {
  const a = Array.isArray(arr) ? [...arr] : [];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, Math.min(count, a.length));
};

const RelatedProduct = () => {
  const [products, setProducts] = useState([]);
  const [randomItems, setRandomItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;
    productService
      .getAllProduct()
      .then((res) => {
        if (!mounted) return;
        const list = Array.isArray(res?.data) ? res.data : [];
        setProducts(list);
        // exclude current product by id (if provided) when picking
        const filtered = id
          ? list.filter((p) => p?._id !== id && p?.id !== id)
          : list;
        setRandomItems(pickRandom(filtered, 4));
      })
      .catch(() => {
        if (!mounted) return;
        setProducts([]);
        setRandomItems([]);
      });
    return () => {
      mounted = false;
    };
  }, [id]);

  const filteredProducts = useMemo(() => {
    return id
      ? products.filter((p) => p?._id !== id && p?.id !== id)
      : products;
  }, [products, id]);

  const handleShuffle = () => {
    setRandomItems(pickRandom(filteredProducts, 4));
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl text-center">Related Products</h2>
        <button
          onClick={handleShuffle}
          className="ml-4 px-3 py-1 bg-gray-200 rounded-md text-sm hover:bg-gray-300"
          aria-label="Shuffle related products"
        >
          Shuffle
        </button>
      </div>
      <div className="flex flex-wrap xl:flex-nowrap gap-5 mt-5">
        {randomItems.map((item, idx) => (
          <Product
            key={item?._id ?? item?.id ?? idx}
            item={item}
            addCartBtn={true}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
