interface productsType{
    id:number,
    title:string,
    description:string,
    img:string,
    price:number,
    createdAt:Date,
    stock:number,
    isActive:boolean,
    color:string,
    size:string
}

export const products:productsType[]=[

{
    id:1,
    title:'fishinig stick',
    description:'for lure use',
    img:'',
    price:50,
    createdAt:new Date(),
    stock:30,
    isActive:true,
    color:'blue',
    size:'xl'
},
{
    id:2,
    title:'fishinig stick',
    description:'for lure use',
    img:'',
    price:50,
    createdAt:new Date(),
    stock:30,
    isActive:true,
    color:'blue',
    size:'xl'
}
]