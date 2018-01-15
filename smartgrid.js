const smartgrid = require('smart-grid');

const settings = {
    outputStyle: 'sass',
    columns: 12, /*прописываем число колонок*/
    offset: '10px', /*расстояние между линиями*/
    container: {
        maxWidth: '960px', /*ширина по макету*/
        fields: '30px' /*padding по краям*/
    },
    breakPoints: {
        md: {
            width: '960px',
            fields: '20px' /*ставим padding*/
        },
        sm: {
            width: '720px',
            fields: '15px' /*ставим padding*/
        },
        xs: {
            width: '500px',
            fields: '15px' /*ставим padding*/
        },
        xxs: {
            width: '350px',
            fields: '10px' /*ставим padding*/
        }
        
    },
    oldSizeStyle: false,
    properties: [] /*лежат все flex-свойства, их можно сюда добавить*/
};

smartgrid ('./app/sass', settings);