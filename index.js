

const moongoose = require('moongoose')
moongoose
    .connect('mongodb+srv://kweonsikyung:<kweonsk0901!>@cluster0.xy19vy7.mongodb.net/?retryWrites=true&w=majority')
    .then(()=> console.log('MongDB Connected...'))
    .catch(err => console.log(err))