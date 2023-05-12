
import React from 'react'
import { useState } from 'react'
import { AddCategories, GifGrid } from './components'

export default function GifExpertApp() {

    const [categories, setCategories] = useState([])

    const addCategory = (newCategory)=>{
        if (categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
    }

    return (
        <> 
            <h1>GifExpertApp</h1>

            <AddCategories 
                onNewCategory= {addCategory}
            />

            {categories.map(e=>{
                return(
                    <GifGrid key={e} category={e}/>
                )

            })}
        </>

    )
}
