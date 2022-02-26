import amazonPage from '../../pages/amazon-page'
import amazonFactory from '../../factories/amazon-factory'

describe('Amazon-poc', () =>{

    var dataMock = amazonFactory.data()

    beforeEach( () =>{
        amazonPage.go()
    })

    it('Search Iphone on Amazon Web Site and log all itens', () =>{
        amazonPage.search(dataMock.search)
        amazonPage.logSearch()
    })

    it('Take more expensive item', () =>{
        amazonPage.search(dataMock.search)
        amazonPage.takeMoreExpensiveItem()
    })
})