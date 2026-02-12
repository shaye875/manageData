import React from 'react'
import Terorist from './terorist'
import data from "../data/data.json"
import "./terorists.css"
import { useState } from 'react'

const Terorists = () => {
    const [byName, setByName] = useState("")
    const [showAll, setShowAll] = useState(true)
    const [byAttacts, seTbyattacts] = useState("")
    const [byStatus, setBystatus] = useState("all")
    const [byMostDasngers, setMostDangers] = useState(false)
    let higeAttacts = 0
    for(let item of data){
        if(item.attacksCount > higeAttacts){
            higeAttacts = item.attacksCount
        }
    }
    console.log(higeAttacts);
    
    return (
        <div>
            <div id='options'>
                <input className='option' onClick={() => {
                    setShowAll(false)
                }} type="text" placeholder='Search by name' value={byName} onChange={(e) => setByName(e.target.value)} />
                <input className='option' onClick={() => {
                    setShowAll(false)
                }} type="text" placeholder='Search by atacts' value={byAttacts} onChange={(e) => seTbyattacts(e.target.value)} />
                <select className='option' onClick={() => {
                }} defaultValue={"all"} value={byStatus} onChange={(e) => setBystatus(e.target.value)} >
                    <option value="all">all</option>
                    <option value="active">active</option>
                    <option value="quiet">quiet</option>
                    <option value="agent">agent</option>
                    <option value="dead">dead</option>
                </select>
                <button className='option' id='button' onClick={() => {
                    setShowAll(false)
                    setMostDangers(true)
                }}>find most Dangerous</button>
            </div>
            <div id='allTerorist'>
                <div id='linefirst'>
                    <p>name</p>
                    <p>organization</p>
                    <p>attacks</p>
                    <p>status</p>
                    <p>Summary</p>
                </div>

                {byStatus == "all" && showAll && data.map((item) => {
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
                {data.filter((item) => item.status == byStatus)
                    .map((item2) => {
                        return (
                            <Terorist name={item2.name} organization={item2.organization} attacks={item2.attacksCount} status={item2.status} summary={item2.relationToIsraelSummary} img={item2.imageUrl} />
                        )
                    })}
                {byMostDasngers && data.filter((item) => item.status == "active" && item.imageUrl != null && item.attacksCount == higeAttacts)
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
