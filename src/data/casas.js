
const casas = [
    {
        id: 1,
        fecha: '03/12/23',
        portada: 'https://i.ibb.co/whSx790/Imagen-de-Whats-App-2024-01-20-a-las-21-52-54-2efd666f.jpg',
        fotos: [
            'https://i.ibb.co/whSx790/Imagen-de-Whats-App-2024-01-20-a-las-21-52-54-2efd666f.jpg',
            'https://i.ibb.co/x25Sptz/Imagen-de-Whats-App-2024-01-20-a-las-21-52-54-e1044c53.jpg'
        ],
        material: 'Revestimiento revear, marble medio gris urbano'
    },
    {
        id: 2,
        fecha: '12/12/23',
        portada: 'https://i.ibb.co/cFGjxK5/Imagen-de-Whats-App-2024-01-20-a-las-21-57-47-ae6675fc.jpg',
        fotos: [
            'https://i.ibb.co/cFGjxK5/Imagen-de-Whats-App-2024-01-20-a-las-21-57-47-ae6675fc.jpg',
            'https://i.ibb.co/xC6hXYT/Imagen-de-Whats-App-2024-01-20-a-las-21-57-48-89c72757.jpg',
            'https://i.ibb.co/dmf1jVC/Imagen-de-Whats-App-2024-01-20-a-las-21-57-48-197de181.jpg',
            'https://i.ibb.co/SrQYrL0/Imagen-de-Whats-App-2024-01-20-a-las-21-57-48-548d89bb.jpg',
            'https://i.ibb.co/LhdHV8D/Imagen-de-Whats-App-2024-01-20-a-las-21-57-49-21c7d23c.jpg',
            'https://i.ibb.co/rsg3vwb/Imagen-de-Whats-App-2024-01-20-a-las-21-57-49-9288e52a.jpg',
            'https://i.ibb.co/Nxt1Q78/Imagen-de-Whats-App-2024-01-20-a-las-21-57-49-a3dd1555.jpg',
            'https://i.ibb.co/mXCrqhL/Imagen-de-Whats-App-2024-01-20-a-las-21-57-49-fa5c1d39.jpg'
        ],
        material: 'Revestimiento revear, marble'
    },
    {
        id: 3,
        fecha: '20/12/2023',
        portada: 'https://i.ibb.co/DKsZKn0/Imagen-de-Whats-App-2024-01-24-a-las-22-33-38-a415c765.jpg',
        fotos: [
            'https://i.ibb.co/kMdnp71/Imagen-de-Whats-App-2024-01-24-a-las-22-33-37-32950d63.jpg',
            'https://i.ibb.co/zxrCHwD/Imagen-de-Whats-App-2024-01-24-a-las-22-33-37-b75f8768.jpg',
            'https://i.ibb.co/GCCH30J/Imagen-de-Whats-App-2024-01-24-a-las-22-33-38-8ff279d5.jpg',
            'https://i.ibb.co/DKsZKn0/Imagen-de-Whats-App-2024-01-24-a-las-22-33-38-a415c765.jpg',
            'https://i.ibb.co/QXbdFC5/Imagen-de-Whats-App-2024-01-24-a-las-22-33-39-380abae6.jpg'    
        ],
        material: 'vacio',
        videos:[
            'absDFMioSSE',
            'ZSPcmkvysDc'
        ]
    },
    {
        id: 4,
        fecha: '5/01/2024',
        portada: 'https://i.ibb.co/w0KWw6h/Imagen-de-Whats-App-2024-01-24-a-las-23-18-41-aed70eaf.jpg',
        fotos: [
            'https://i.ibb.co/w0KWw6h/Imagen-de-Whats-App-2024-01-24-a-las-23-18-41-aed70eaf.jpg',
            'https://i.ibb.co/mXckhJ5/Imagen-de-Whats-App-2024-01-24-a-las-23-18-38-c199dd4c.jpg',
            'https://i.ibb.co/HG4Ky2g/Imagen-de-Whats-App-2024-01-24-a-las-23-18-39-2a286811.jpg',
            'https://i.ibb.co/xYFxMq2/Imagen-de-Whats-App-2024-01-24-a-las-23-18-39-ebc15111.jpg',
            'https://i.ibb.co/r2WvNQd/Imagen-de-Whats-App-2024-01-24-a-las-23-18-40-5bfca292.jpg',
            'https://i.ibb.co/j3zQR8B/Imagen-de-Whats-App-2024-01-24-a-las-23-18-40-74698b51.jpg',
            'https://i.ibb.co/XxJgk7C/Imagen-de-Whats-App-2024-01-24-a-las-23-18-40-bb6412fc.jpg',
            'https://i.ibb.co/ynTDDy0/Imagen-de-Whats-App-2024-01-24-a-las-23-18-40-ea281c66.jpg',
            'https://i.ibb.co/pX4jQ0X/Imagen-de-Whats-App-2024-01-24-a-las-23-18-41-5a1e9c6f.jpg'
        ],
        material: 'Revestimiento revear, marble fino blanco hueso'
    },
    {
        id: 5,
        fecha: '11/01/2024',
        portada: 'https://i.ibb.co/KWKzX1N/Imagen-de-Whats-App-2024-01-24-a-las-23-18-39-6a074622.jpg',
        fotos: [
            'https://i.ibb.co/KWKzX1N/Imagen-de-Whats-App-2024-01-24-a-las-23-18-39-6a074622.jpg',
            'https://i.ibb.co/RP9d84B/Imagen-de-Whats-App-2024-01-24-a-las-23-18-39-39e5f356.jpg',
            'https://i.ibb.co/VQ5L88q/Imagen-de-Whats-App-2024-01-24-a-las-23-18-39-adc4452b.jpg',
            'https://i.ibb.co/CP6RwnK/Imagen-de-Whats-App-2024-01-24-a-las-23-21-15-2db788cb.jpg',
            'https://i.ibb.co/KwwRWfD/Imagen-de-Whats-App-2024-01-24-a-las-23-21-15-e6d9e559.jpg',
            ''
        ],
        material: 'vacio'
    },
    {
        id: 6,
        fecha: '18/01/2024',
        portada: 'https://i.ibb.co/1m000mw/Imagen-de-Whats-App-2024-01-24-a-las-23-21-15-7b3104e7.jpg',
        fotos: [
            'https://i.ibb.co/1m000mw/Imagen-de-Whats-App-2024-01-24-a-las-23-21-15-7b3104e7.jpg',
            'https://i.ibb.co/sRHkVDz/Imagen-de-Whats-App-2024-01-24-a-las-23-21-14-348b0353.jpg',
            'https://i.ibb.co/CmvXhrg/Imagen-de-Whats-App-2024-01-24-a-las-23-21-14-2495492e.jpg',
            'https://i.ibb.co/DRvWpTz/Imagen-de-Whats-App-2024-01-24-a-las-23-21-14-52884782.jpg'
        ],
        material: 'vacio'
    },
    {
        id: 7,
        fecha: '26/01/24',
        portada: 'https://i.ibb.co/0JxdY8j/Imagen-de-Whats-App-2024-01-20-a-las-21-28-24-aa9529d6.jpg',
        fotos: [
            'https://i.ibb.co/6smdpC5/Imagen-de-Whats-App-2024-01-20-a-las-21-28-24-122d8b9c.jpg',
            'https://i.ibb.co/0JxdY8j/Imagen-de-Whats-App-2024-01-20-a-las-21-28-24-aa9529d6.jpg',
            'https://i.ibb.co/SyDgBRQ/Imagen-de-Whats-App-2024-01-20-a-las-21-28-24-f351c760.jpg',
            'https://i.ibb.co/52DnJQQ/Imagen-de-Whats-App-2024-01-20-a-las-21-28-25-2ab19940.jpg',
            'https://i.ibb.co/Ky0R4bd/Imagen-de-Whats-App-2024-01-20-a-las-21-28-25-a0e90ebe.jpg',
            'https://i.ibb.co/d7B40FV/Imagen-de-Whats-App-2024-01-20-a-las-21-28-25-a4d133e2.jpg',
            'https://i.ibb.co/GpYNMVp/Imagen-de-Whats-App-2024-01-20-a-las-21-28-26-4f972049.jpg',
            'https://i.ibb.co/1RnmL9P/Imagen-de-Whats-App-2024-01-20-a-las-21-28-26-8859b632.jpg'
        ],
        material: 'Revestimiento fadepa'
    },
]


export default casas