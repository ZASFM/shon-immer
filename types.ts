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