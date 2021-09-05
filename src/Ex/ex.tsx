import React from "react";

interface Animals {
    feet: number;
    namePet: string;
    a: number;
    b: number;
}

let arr = [102, 103, 111, 211, 222, 555, 542, 112], newArr: number[] = [];
for (let i = 0; i <= arr.length; i++) {
    if ( arr[i] % 2 === 0){
        newArr.push(arr[i]);
        console.log(newArr);
    }
}
const Pet = (props: Animals) => {
    return (
        <>
            <p>My Pet is {props.namePet}. It has {props.feet} feet and {props.a + props.b};<br />
                mảng chẵn: {newArr.join(',')}</p>

        </>
    );
};
export default Pet;
