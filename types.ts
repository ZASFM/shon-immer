export type PromoTypes={
   id: number,
   title: string,
   img: string,
   salesQ: number,
   likesN: number,
   PercentOff: number,
   price: number,
}

export type MenuTypes={
   id: string,
   title: string,
   shortDescr: string,
   longDescr: string,
   price: number,
   image: string,
   category: string,
   prepType: string[],
}

export type User={
   id:string,
   email:string,
   name:string,
   img:string,
   role:string
}

export type Category={
   desc: string,
   id: string,
   category: string,
   imageSrc: string
}