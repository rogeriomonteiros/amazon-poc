
class AmazonPage {

    go() {
        cy.visit('/')
        cy.get('#nav-logo>a[href*="nav_logo"]').should('be.visible')
    }

    search(search) {
        cy.get('input[type=text][aria-label="Pesquisa"]').type(search)

        cy.get('input[type="submit"][value="Ir"]').should('be.visible')
        cy.get('input[type="submit"][value="Ir"]').click()

        cy.get('div[class^="s-main-slot s-result-list"]').should('be.visible')
    }

    logSearch() {
        cy.get('div[data-component-type="s-search-result"] span[class="a-size-base-plus a-color-base a-text-normal"]')
            .each((item, index, list) => {
                var itemText = item.text().toString()
                cy.log('item[' + index.toString() + '] - ' + itemText)
            })
    }

    takeMoreExpensiveItem() {
        var maxValue = Number.MIN_VALUE;
        cy.log('maxValueInicial = ' + maxValue.toString())
        cy.get('div[data-component-type="s-search-result"] a>span[class="a-price"]>span[class="a-offscreen"]')
            .each((item, index, list) => {
                var price = item.text().toString().replace('R$', '').replace('.', '').trim()
                price = price.slice(0, price.length - 3)
                var itemPrice = Number.parseInt(price.toString())

                if (itemPrice > maxValue)
                    maxValue = itemPrice;

                cy.log('itemPrice = ' + itemPrice.toString())
                cy.log('maxValue = ' + maxValue.toString())
            }).then(() => {
                cy.log('More expensive item costs ' + maxValue.toString())
            })
    }

}

export default new AmazonPage;