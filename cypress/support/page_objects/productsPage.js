class ProductsPage {

    get product() {
        return cy.get('.inventory_item')
    }

    get productName() {
        return cy.get('.inventory_item_name')
    }

    get productPrice() {
        return cy.get('.inventory_item_price')
    }

    get productsFilter() {
        return cy.get('.product_sort_container')
    }

    get shoppingCart() {
        return cy.get('.shopping_cart_container')
    }

    get shoppingCartBadge() {
        return cy.get('.shopping_cart_badge')
    }

}

export default new ProductsPage()
