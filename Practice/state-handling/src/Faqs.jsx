import React, { useState } from 'react'
import { queastions } from "./Data/faqQueastions";

export default function Faqs() {
    let [currentID, setCurrentID]= useState(queastions[0].id);
    let items = queastions.map((itemsData, i) => {

        let itemsDetails={
            itemsData,
            currentID,
            setCurrentID
        }
        return (
            <FaqItems itemsDetails={itemsDetails} key={i} />
        )
    })

    return (
        <div>
            <h1>Frequently Asked Queastions (FAQ's)</h1>
            <div className='faqOuter'>
                {items}
            </div>
        </div>
    )
}

function FaqItems({itemsDetails}) {
    let { itemsData, currentID, setCurrentID } = itemsDetails
    return (
        <div className='faqitems'>
            <h2 onClick={()=>setCurrentID(itemsData.id )}>{itemsData.queastion}</h2>
            <p className={currentID===itemsData.id ? 'activeAns':''}>
                {itemsDetails.itemsData.answer}
            </p>
        </div>
    )
}