import React from 'react'
import { useState , useRef } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/Backend/Firebase/firebase';
import styles from '@/styles/admin.module.css'


const Index = () => {
  const initdata = {
    name:"",
    description:"",
    brand:"",
    model:"",
    price:0,
  }
  const [products, setProducts] = useState(initdata)
  const formreset = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const productRef = collection(db,"gadget_rambo/products/tv");
      await addDoc(productRef, products)
      setProducts(initdata)
      formreset.current?.focus()
    } catch (error) {
      alert("error");
    }
  }
  return (
    <>
    <form className={styles.form} style={{ display: "flex",flexDirection:"column"}} onSubmit={handleSubmit} >
          <input required ref={formreset} value={products.name}  onChange={(e)=> setProducts({...products,name:e.target.value})} name='name' type="text" placeholder='Name'/>
          <input required value={products.description} onChange={(e)=> setProducts({...products,description:e.target.value})} name='description' type="text" placeholder='Description'/>
          <input required value={products.brand} onChange={(e)=> setProducts({...products,brand:e.target.value})} name='brand' type="text" placeholder='Brand'/>
          <input required value={products.model} onChange={(e)=> setProducts({...products,model:e.target.value})} name='model' type="text" placeholder='Model'/>
          <input required value={products.price} onChange={(e)=> setProducts({...products,price:Number(e.target.value)})} name='price' type="number" placeholder='Price'/>
          <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default Index