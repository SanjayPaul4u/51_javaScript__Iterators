console.log("Iterators");

//ITERATORS FUNCTION
function fruitsIterators(values){
    let nextIndex = 0;
    //WE WILL RETURN AN OBJECT
    return {
        next: function(){ 
            if(nextIndex<values.length){
                //WE WILL RETURN BELLOW OBJECT
                return {
                    value: values[nextIndex++],
                    done: false 
                }
            }
            else{
                //WE WILL RETURN BELLOW OBJECT WITH DONE
                return {
                    done: true
                }
            }
        }
    }
}

let myArray = ["apples", "grapes", "oranges", "watermelons"];
console.log(myArray);


//USING ITERATORS...
let myIterator = fruitsIterators(myArray);
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);





//NEXT BUTTON AND BACK BUTTON BY ITERATORS------THIS IS MADE BY ME📌📌

//FIRST INITIALIZE ITERATORS
function iterator(array){
    let nextIndex= 0;
    return{
        next : function(){
            // console.log(nextIndex);
            if(nextIndex<array.length){
                return{
                    value  : array[nextIndex++],
                    done : false
                }
            }
            else{
                return{
                    done: true
                }
            }
        },
        back : function(){
            // console.log(nextIndex);
            if(nextIndex!=0){
                return{
                    value  : array[--nextIndex-1],
                    done : false
                }
            }
            else{
                return{
                    done:true,
                }
            }
            

        }
    }
}

//SECOND MAKING ONE ARRAY
let arr = [25, 100, 200, 65, 56];
let mainIte = iterator(arr);

//USE TWO BUTTON ONE IS FOR NEXT AND SECOND IS FOR BACK
let btn = document.getElementById("btn").addEventListener("click", function(){
    console.log(mainIte.next());
    
})
let btnBack =document.getElementById("btnBack").addEventListener("click", function(){
    console.log(mainIte.back());

})