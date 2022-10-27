const partOfObject=(part,full)=>{
    const partKeys= Object.keys(part)
    const partObject={}
    partKeys.map((item)=>{
        partObject[item]=full[item]
    })
    return partObject
}

module.exports={partOfObject}