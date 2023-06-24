
const getInnerHtml = value => {
    return `<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="featured-box">
            <figure>
                <div class="icon">
                    <span class="bg-green"><i class="lni-heart"></i></span>
                    <span><i class="lni-bookmark"></i></span>
                </div>
                <a href="#"><img class="img-fluid" src="${value.img}" alt=""></a>
            </figure>
            <div class="feature-content">
                <div class="product">
                    <a href="#">Electronic > </a>
                    <a href="#">Apple</a>
                </div>
                <h4><a href="ads-details.html">${value.title}</a></h4>
                <div class="meta-tag">
                    <span>
                        <a href="#"><i class="lni-user"></i> John Smith</a>
                    </span>
                    <span>
                        <a href="#"><i class="lni-map-marker"></i> New York, US</a>
                    </span>
                    <span>
                        <a href="#"><i class="lni-tag"></i> Apple</a>
                    </span>
                </div>
                <p class="dsc">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry.</p>
                <div class="listing-bottom">
                    <h3 class="price float-left">${value.price}</h3>
                    <a href="ads-details.html" class="btn btn-common float-right">${value.url}</a>
                </div>
            </div>
        </div>
    </div>
</div>`
}

const listingWrapper = document.getElementById("grid-view");

// fetch('http://localhost:8080/axio').then((data) => {
//     return data.json();
// }).then((completedata) => {
//     console.log(completedata);

//     for (const data of completedata) {
//         const h1 = document.createElement('h1')
//         h1.textContent = data.price
//         console.log('object')
//         listingWrapper.appendChild(h1)
//     }
// });


let arr = [1, 2]

for (a of arr) {
    const h1 = document.createElement('h1')
    h1.textContent = `${a}`
    listingWrapper.appendChild(h1)
}