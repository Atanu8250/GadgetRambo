import React from "react";
import { useState, useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/Backend/Firebase/firebase";
import styles from "@/styles/admin.module.css";

const Index = () => {
  const mobileData = {
    image: "",
    brand: "",
    description: "",
    model: "",
    price: 0,
    releaseDate: "",
    dimension: "",
    batteryCap: "",
    refreshRate: "",
    screenSize: 0,
    resolution: "",
    processor: "",
    ram: 0,
    storage: 0,
    storageUpto: 0,
  };
  const [products, setProducts] = useState(mobileData);
  const formreset = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const productRef = collection(db, "gadget_rambo/products/mobiles");
      await addDoc(productRef, products);
      setProducts(mobileData);
      formreset.current?.focus();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <form
        className={styles.form}
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <input
          ref={formreset}
          required
          value={products.brand}
          onChange={(e) => setProducts({ ...products, brand: e.target.value })}
          type="text"
          placeholder="brand"
        />
        <input
          required
          value={products.image}
          onChange={(e) => setProducts({ ...products, image: e.target.value })}
          type="text"
          placeholder="image"
        />
        <input
          required
          value={products.description}
          onChange={(e) =>
            setProducts({ ...products, description: e.target.value })
          }
          name="description"
          type="text"
          placeholder="Description"
        />
        <input
          required
          value={products.model}
          onChange={(e) => setProducts({ ...products, model: e.target.value })}
          name="model"
          type="text"
          placeholder="Model"
        />
        <input
          required
          value={products.price}
          onChange={(e) =>
            setProducts({ ...products, price: Number(e.target.value) })
          }
          name="price"
          type="number"
          placeholder="Price"
        />
        <input
          required
          value={products.releaseDate}
          placeholder="releaseDate"
          onChange={(e) =>
            setProducts({ ...products, releaseDate: e.target.value })
          }
          type="text"
        />
        <input
          required
          value={products.dimension}
          placeholder="dimension"
          onChange={(e) =>
            setProducts({ ...products, dimension: e.target.value })
          }
          type="text"
        />
        <input
          required
          value={products.batteryCap}
          placeholder="batteryCap"
          onChange={(e) =>
            setProducts({ ...products, batteryCap: e.target.value })
          }
          type="text"
        />
        <input
          required
          placeholder="refreshRate"
          value={products.refreshRate}
          onChange={(e) =>
            setProducts({ ...products, refreshRate: e.target.value })
          }
          type="text"
        />
        <input
          required
          value={products.screenSize}
          placeholder="screenSize(N)"
          onChange={(e) =>
            setProducts({ ...products, screenSize: Number(e.target.value) })
          }
          type="text"
        />
        <input
          required
          placeholder="resolution"
          value={products.resolution}
          onChange={(e) =>
            setProducts({ ...products, resolution: e.target.value })
          }
          type="text"
        />
        <input
          placeholder="processor"
          required
          value={products.processor}
          onChange={(e) =>
            setProducts({ ...products, processor: e.target.value })
          }
          type="text"
        />
        <input
          placeholder="ram"
          required
          value={products.ram}
          onChange={(e) =>
            setProducts({ ...products, ram: Number(e.target.value) })
          }
          type="text"
        />
        <input
          placeholder="storage(N)"
          required
          value={products.storage}
          onChange={(e) =>
            setProducts({ ...products, storage: Number(e.target.value) })
          }
          type="text"
        />
        <input
          placeholder="storageUpto(N)"
          required
          value={products.storageUpto}
          onChange={(e) =>
            setProducts({ ...products, storageUpto: Number(e.target.value) })
          }
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Index;
