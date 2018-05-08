var initialState = [
    {
        id: 1,
        name: "iphone 6 Plus",
        price: 400,
        status: true
    },
    {
        id: 1,
        name: "iphone 5S",
        price: 300,
        status: false
    },
    {
        id: 1,
        name: "iphone 4S",
        price: 100,
        status: true
    }
];

const products = (state = initialState, action)=>{
    switch(action.type){
        default: return [...state];
    }
}

export default products;