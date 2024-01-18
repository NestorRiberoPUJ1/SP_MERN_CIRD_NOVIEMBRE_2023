'use client'
import { useState } from "react";



const ProductForm = ({ titleInitial = "", priceInital = 0, descriptionInitial = "", onSubmitFn, btnLabel = "Submit", clearStates = true }) => {

    const [title, setTitle] = useState(titleInitial);
    const [price, setPrice] = useState(priceInital);
    const [description, setDescription] = useState(descriptionInitial);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title,
            price,
            description,
        }
        await onSubmitFn(data);
        if (clearStates) {
            setTitle("");
            setPrice(0);
            setDescription("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Title</label>
                <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Description</label>
                <input type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">{btnLabel}</button>
        </form>
    )
}

export default ProductForm;