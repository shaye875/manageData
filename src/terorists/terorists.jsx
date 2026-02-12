import React from 'react'
import Terorist from './terorist'
import data from "../data/data.json"
import "./terorists.css"
import { useState } from 'react'

const Terorists = () => {
    const [byName, setByName] = useState("")
    const [showAll, setShowAll] = useState(true)
    const [byAttacts, seTbyattacts] = useState("")
    return (
        <div>
            <div>
                <input onClick={() => {
                    setShowAll(false)
                }} type="text" placeholder='Search by name' value={byName} onChange={(e) => setByName(e.target.value)} />
                <input onClick={() => {
                    setShowAll(false)
                }} type="text" placeholder='Search by atacts' value={byAttacts} onChange={(e) => seTbyattacts(e.target.value)} />
                    <select onClick={() => {
                    setShowAll(false)
                }}value={byAttacts} onChange={(e) => seTbyattacts(e.target.value)} ></select>
            </div>
            <div id='allTerorist'>
                <div id='linefirst'>
                    <p>name</p>
                    <p>organization</p>
                    <p>attacks</p>
                    <p>status</p>
                    <p>Summary</p>
                </div>

                {showAll && data.map((item) => {
                    return (
                        <Terorist name={item.name} organization={item.organization} attacks={item.attacksCount} status={item.status} summary={item.relationToIsraelSummary} img={item.imageUrl} />
                    )
                })}
                {data.filter((item) => item.name == byName)
                    .map((item2) => {
                        return (
                            <Terorist name={item2.name} organization={item2.organization} attacks={item2.attacksCount} status={item2.status} summary={item2.relationToIsraelSummary} img={item2.imageUrl} />
                        )
                    })}
                {data.filter((item) => item.attacksCount == byAttacts)
                    .map((item2) => {
                        return (
                            <Terorist name={item2.name} organization={item2.organization} attacks={item2.attacksCount} status={item2.status} summary={item2.relationToIsraelSummary} img={item2.imageUrl} />
                        )
                    })}
            </div>
        </div>
    )
}

export default Terorists
