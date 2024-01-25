document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more')
    let currPage = 1;

    async function getProducts(page){
        const res = await fetch('https://fakestoreapi.com/products?init=&&pages$(page)')
        const products = await res.json()
        return products
    }

    function displayProducts(products){
        const container = document.getElementById('product-container')
        products.forEach(product => {
            const productDiv = document.createElement('div')
            productDiv.className = 'productInfo'
            productDiv.innerHTML = 
            
            
        })
    }
})