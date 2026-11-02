function buyNow(title, author, price, image, category) {

    let book = {
        title: title,
        author: author,
        price: Number(price),
        image: image,
        category: category,
        quantity: 1
    };

    let bookData = encodeURIComponent(JSON.stringify(book));

    window.location.href = "order.html?book=" + bookData;
}