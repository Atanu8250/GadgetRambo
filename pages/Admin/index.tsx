import React from 'react'
import { useState, useRef } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/Backend/Firebase/firebase';
import styles from '@/styles/admin.module.css'


const Index = () => {
    const Laptopinitdata = {
        name: "",
        image: "",
        description: "",
        brand: "",
        model: "",
        price: "",
        releaseDate: "",
        modelNumber: "",
        series: "",
        dimensions: "",
        weight: "",
        colours: "",
        os: "",
        bateryCapacity: "",
        size: "",
        resolution: "",
        processor: "",
        ram: "",
        hardDisk: "",
        ssd: "",
        wifi: "",
        numberOfUSBPorts: "",
    }
    const [products, setProducts] = useState(Laptopinitdata)
    const formreset = useRef<HTMLFormElement>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const productRef = collection(db, "gadget_rambo/products/laptops");
            await addDoc(productRef, products)
            console.log('products:', products)
            setProducts(Laptopinitdata)
            formreset.current?.reset()
        } catch (error) {
            alert("error");
        }
    }
    return (
        <>
            <form className={styles.form} style={{ display: "flex", flexDirection: "column" }} ref={formreset} onSubmit={handleSubmit} >
                <input required value={products.name} onChange={(e) => setProducts({ ...products, name: e.target.value })} type="text" placeholder='Name' />

                <input required value={products.image} onChange={(e) => setProducts({ ...products, image: e.target.value })} type="text" placeholder='image' />

                <input required value={products.description} onChange={(e) => setProducts({ ...products, description: e.target.value })} type="text" placeholder='Description' />

                <input required value={products.brand} onChange={(e) => setProducts({ ...products, brand: e.target.value })} type="text" placeholder='Brand' />

                <input required value={products.model} onChange={(e) => setProducts({ ...products, model: e.target.value })} type="text" placeholder='Model' />

                <input required value={products.price} onChange={(e) => setProducts({ ...products, price: Number(e.target.value) })} placeholder='Price' />

                <input required value={products.releaseDate} onChange={(e) => setProducts({ ...products, releaseDate: e.target.value })} placeholder='releaseDate' />

                <input required value={products.modelNumber} onChange={(e) => setProducts({ ...products, modelNumber: (e.target.value) })} placeholder='modelNumber' />

                <input required value={products.series} onChange={(e) => setProducts({ ...products, series: e.target.value })} placeholder='series' />

                <input required value={products.dimensions} onChange={(e) => setProducts({ ...products, dimensions: e.target.value })} placeholder='dimensions' />

                <input required value={products.weight} onChange={(e) => setProducts({ ...products, weight: Number(e.target.value) })} placeholder='weight' />

                <input required value={products.colours} onChange={(e) => setProducts({ ...products, colours: e.target.value})} placeholder='colours' />

                <input required value={products.os} onChange={(e) => setProducts({ ...products, os: (e.target.value) })} placeholder='os' />

                <input required value={products.bateryCapacity} onChange={(e) => setProducts({ ...products, bateryCapacity: Number(e.target.value) })} placeholder='bateryCapacity' />

                <input required value={products.size} onChange={(e) => setProducts({ ...products, size: (e.target.value) })}  placeholder='size' />

                <input required value={products.resolution} onChange={(e) => setProducts({ ...products, resolution:(e.target.value) })} placeholder='resolution' />

                <input required value={products.processor} onChange={(e) => setProducts({ ...products, processor: (e.target.value) })} placeholder='processor' />

                <input required value={products.ram} onChange={(e) => setProducts({ ...products, ram: +(e.target.value) })} placeholder='ram' />

                <input required value={products.hardDisk} onChange={(e) => setProducts({ ...products, hardDisk:(e.target.value) })} placeholder='hardDisk' />

                <input required value={products.ssd} onChange={(e) => setProducts({ ...products, ssd: +(e.target.value) })} placeholder='ssd' />

                <input required value={products.wifi} onChange={(e) => setProducts({ ...products, wifi:(e.target.value) })} placeholder='wifi' />

                <input required value={products.numberOfUSBPorts} onChange={(e) => setProducts({ ...products, numberOfUSBPorts: +(e.target.value) })} placeholder='numberOfUSBPorts' />

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Index







// bateryCapacity: 56
// brand: "Honor"
// colours: "Space Gray"
// description: "Honor MagicBook X 14 is a Windows 10 Home laptop with a 14.00-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i3 processor and it comes with 8GB of RAM. The Honor MagicBook X 14 packs 256GB of SSD storage."
// dimensions: "214.80 x 322.50 x 15.90"
// hardDisk: "No"
// image: "https://i.gadgets360cdn.com/products/large/Honor-magicbook-X-14-DB-800x800-1620394329.jpg?downsize=: 
// model: "MagicBook X 14"
// modelNumber: "MagicBook X 14"
// name: "Honor MagicBook X 14"
// numberOfUSBPorts: 2
// os: "Windows 10 Home"
// price: 55819
// processor: "Intel Core i3 10th Gen"
// ram: 8
// releaseDate: "7th May 2021"
// resolution: "1920x1080 pixels"
// series: "MagicBook X"
// size: "14.00-inch"
// ssd: 256
// weight: 1.38
// wifi: "No"