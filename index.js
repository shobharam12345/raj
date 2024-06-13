
// // // function Pattern(n){
// // //     for(let i=1; i<=n; i++){
// // //        str='*'
// // //         for(let j=1; j>((2*i)-1); j--){
// // //             str=str+' '
        
// // //         }
// // //         for(let k=1; k<=i; k++){
// // //             str=str+''
// // //         }
// // //         console.log(str)
// // //     }

// // // }
// // // Pattern(6)



// // // function Pattern(row){
// // //     for(let i=0;i<row-1;i++){
// // //         str='*'
// // //         for(let j=0;j<row-1;j++){
// // //             str.str+=' '
// // //         }
// // //         console.log(str)
// // //     }
// // // }
// // // printPatten(4)




// function Pattern(n){
//     let space1=n
//     for(let i=1;i<=n-1;i++){
//         let str=''
//         for(let j=1;j<=i;j++){
//             str=str+'x'
//         }
//         for(let k=1;k<=space1;k++){
//             str=str+' '
//         }
//         space1=space1-2
//         for(let l=1;l<=i;l++){
//             str=str+'x'
//         }
//         console.log(str)
//     }
//     let str2=' '
//     for(let m=1;m<=(n*2)-1;m++){
//         str2=str2+'x'
//     }
//     console.log(str2)
//     let space2=1
//     for(let o=1;o<=n-1;o++){
//         let str3=' '
//         for(let p=1;p<=n-o;p++){
//             str3=str3+'x'
//         }
//         for(let q=1;1<=space2;q++){
//             str3=str3+' '   
//         }
//         space2=space2+2
//         for(let r=1;r<=n-0;r++){
//             str3=str3+'x'
//         }
//         console.log(str3)
//     }

// }
// Pattern(5)



// // function Pattern(n){
// //     for(let i=1;i<=n; i++){
// //         let row=''
// //         for(let j=1;j<=i;j++){
// //             row+='*'
// //         }
// //         console.log(row)
    
// //         for(let k=1;k<=2*i-1;k++){
// //             row+='*'
// //         }
// //         console.log(row)

// //     }
// //     for(let i=row-1;i>=1;i--){
// //         let row=' '
// //         for(let j=row;j>i;j--){
// //             row+=' '
// //         }
// //         for(let k=1;k<=2*1-1;k++){

// //         }
// //         console.log(row)
// //     }
// // }
// // Pattern(5)


// // function Pattern(n){
// // for(let i=1;i<=n;i++){
// //     let str=''
// //     for(let j=i;j<=i;j++){
// //         str=str+j
// //     }
// //     console.log(str)
// // }
// // }
// // Pattern(4)

// function Pattern(n){
//     for(let i=1; i<=n; i++){
//         let str=' '
    
//     for(let j=1;j<=n-i;j++){
//         str=str+' '
//     }
//     for(let k=1; k<=i; k++){
//         str=str+`${i} `
//     }
//     console.log(str)
// }
// }
// Pattern(9)



// function zeros(n){
//     let factValue=factorial(n){

//     }

// }

// function factorial(f){
//     let fact=1
//     for(let i=1;i<=f;i++){
//         fact=fact*
//     }
// }



function Pattern(n){
    for(let i=1; i<=n; i++){
        let str=' '
    
    for(let j=1;j<=n-i;j++){
        str=str+' '
    }
    for(let k=1; k<=i; k++){
        str=str+`${k} `
    }
    console.log(str)
}
for(let i=n; i>=1; i--){
    let str=' '

for(let j=1;j<=n-i;j++){
    str=str+' '
}
for(let k=1; k<=i; k++){
    str=str+`${k} `
}
console.log(str)
}
} 

Pattern(9)

