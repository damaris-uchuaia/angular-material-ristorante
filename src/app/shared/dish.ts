export class Dish {
    id!: string;
    name!: string;
    image!: string;
    category!: string;
    featured!: boolean;
    label!: string;
    price!: string;
    description!: string;
    
   
}




/* Evitando erro 

->error TS2564: Property 'name' has no initializer and is not definitely assigned in the constructor.


Explanation: Got it, it's because typescript 2.7.2 included a strict class checking where all properties
 should be declared in constructor. So to work around that, just add a bang sign (!) like: name!:string; */