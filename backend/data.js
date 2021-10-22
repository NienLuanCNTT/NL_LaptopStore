import bcrypt from 'bcryptjs';
const data = {

    users: [
        {
            name: 'adminexample',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'tuanhung',
            email: 'tuanhung@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],

    product: [
        {
            // _id: '1',
            name: 'Dell Inspiron 3505',
            category: 'Dell',
            image: '/images/products/1.jpg',
            price: 14990000,
            old_price: 15990000,
            note: 'Quà tặng kèm',
            rating: 4.9,
            numReviews: 10,
            countInStock: 700,
        },

        {
            // _id: '2',
            name: 'Acer Swift 3 13 (Chính hãng - Intel Gen 11)',
            category: 'Acer',
            image: '/images/products/2.jpg',
            price: 19490000,

            note: 'Quà tặng kèm',
            rating: 4.5,
            numReviews: 10,
            countInStock: 700,
        },

        {
            // _id: '3',
            name: 'Dell Inspiron 15 5502 (Chính hãng)',
            category: 'dell',
            image: '/images/products/3.jpg',
            price: 24900000,
            old_price: 26900000,
            note: 'Quà tặng kèm',
            rating: 5,
            numReviews: 10,
            countInStock: 700,
        },

        {
            // _id: '4',
            name: 'Razer Blade 15 Base',
            category: 'Razer',
            image: '/images/products/4.jpg',
            price: 27490000,

            note: 'Quà tặng kèm',
            rating: 4.8,
            numReviews: 10,
            countInStock: 700,
        },

        {
            // _id: '5',
            name: 'Razer Blade 15 Base Edition (Quartz Pink)',
            category: 'Razer',
            image: '/images/products/5.jpg',
            price: 43990000,
            old_price: 45990000,
            note: 'Quà tặng kèm',
            rating: 4.5,
            numReviews: 10,
            countInStock: 700,
        },

        {
            // _id: '6',
            name: 'Acer Nitro 5 15\'\' 2021 (AMD)',
            category: 'Acer',
            image: '/images/products/6.jpg',
            price: 23490000,

            note: 'Quà tặng kèm',
            rating: 4.6,
            numReviews: 10,
            countInStock: 700,
        },

        {
            // _id: '7',
            name: 'HP 15-DY2093DX',
            category: 'Apple',
            image: '/images/products/7.jpg',
            price: 16990000,
            old_price: 17990000,
            note: 'Quà tặng kèm',
            rating: 4.7,
            numReviews: 10,
            countInStock: 700,
        },
        {
            // _id: '8',
            name: 'HP Victus Gaming 16 (Chính hãng)',
            category: 'HP',
            image: '/images/products/8.jpg',
            price: 22990000,
            old_price: 25990000,
            note: 'Quà tặng kèm',
            rating: 4.4,
            numReviews: 10,
            countInStock: 700,
        },
        {
            // _id: '9',
            name: 'Apple Macbook Pro 16 2019 (Chính hãng)',
            category: 'Apple',
            image: '/images/products/9.jpg',
            price: 56490000,
            old_price: 58490000,
            note: 'Quà tặng kèm',
            rating: 4.4,
            numReviews: 10,
            countInStock: 700,
        },
        {
            // _id: '10',
            name: 'Apple Macbook Pro 13 2020',
            category: 'Apple',
            image: '/images/products/11.jpg',
            price: 23990000,
            old_price: 25990000,
            note: 'Quà tặng kèm',
            rating: 4.4,
            numReviews: 5,
            countInStock: 700,
        },
        {
            // _id: '11',
            name: 'Apple Macbook Air (Chính hãng - Apple M1 - Late 2020)',
            category: 'Apple',
            image: '/images/products/12.jpg',
            price: 27490000,
            old_price: 29990000,
            note: 'Quà tặng kèm',
            rating: 5,
            numReviews: 7,
            countInStock: 700,
        },
        {
            // _id: '12',
            name: 'ASUS ROG Strix G15 (G513)',
            category: 'Asus',
            image: '/images/products/14.jpg',
            price: 28990000,
            old_price: 39990000,
            note: 'Quà tặng kèm',
            rating: 4.7,
            numReviews: 15,
            countInStock: 700,
        },
        {
            // _id: '13',
            name: 'Apple Macbook Air 2020',
            category: 'Apple',
            image: '/images/products/13.jpg',
            price: 23490000,
            old_price: 25490000,
            note: 'Quà tặng kèm',
            rating: 4.7,
            numReviews: 15,
            countInStock: 700,
        },
        {
            // _id: '14',
            name: 'Asus ROG Zephyrus G14 2021',
            category: 'Asus',
            image: '/images/products/15.jpg',
            price: 28990000,
            old_price: 31990000,
            note: 'Quà tặng kèm',
            rating: 4.7,
            numReviews: 15,
            countInStock: 700,
        },
        {
            // _id: '15',
            name: 'ASUS ROG Zephyrus Duo 15 SE GX551',
            category: 'Asus',
            image: '/images/products/16.jpg',
            price: 74990000,
            old_price: 76990000,
            note: 'Quà tặng kèm',
            rating: 4.7,
            numReviews: 15,
            countInStock: 700,
        },
        {
            // _id: '16',
            name: 'ASUS TUF Gaming F15 2021 (Chính hãng)',
            category: 'Asus',
            image: '/images/products/17.jpg',
            price: 21990000,
            old_price: 23990000,
            note: 'Quà tặng kèm',
            rating: 4.7,
            numReviews: 15,
            countInStock: 700,
        },
    ],
}

export default data;