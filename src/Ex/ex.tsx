import React from "react";

interface Animals {
    feet: number;
    namePet: string;
    a: number;
    b: number;
}
let arr = [102, 103, 111, 211, 222, 555, 542, 112];
let newArr: number[] = [];
for (let i = 0; i < 9; i++) {
    let value: any = arr[i];
    if (value / 2 !== 0){
        let newArr = arr.push(value);
        console.log(newArr);
    }
}
const Pet = (props: Animals) => {
    return (
        <>
            <p>My Pet is {props.namePet}. It has {props.feet} feet and {props.a + props.b}</p>

        </>
    );
};
export default Pet;
