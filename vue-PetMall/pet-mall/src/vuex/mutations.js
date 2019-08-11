const mutations = {
    addToCar({
        carList
    }, payload) {
        const {
            newGood
        } = payload
        let isExist = false
        for (let good of carList) {
            if (good.gid == newGood.gid) {
                isExist = true
                good.buyNum = newGood.buyNum
            }
        }
        if (!isExist) {
            carList.push(newGood)
        }
    }
}

export default mutations