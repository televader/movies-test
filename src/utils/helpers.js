import React from "react";
import Card from "../components/Card";


export function fillHarryCard(data){
    return(
        <Card
            key={data.id}
            image={data.image}
            name={data.name}
            actor={data.actor}
        />
    )
}

export function sum(number1, number2){
    if (typeof number1 !== 'number' || typeof number2 !== 'number'){
        return "invalid data"
    }
    return number1 + number2
}

export function filterHighestNumber(arrayOfNumbers){
    if (Array.isArray(arrayOfNumbers)){
        if (arrayOfNumbers.every((element) => typeof element === 'number')){
            return Math.max(...arrayOfNumbers);
        }
        return "invalid data"
    }
    return "invalid data"
}

export function getHighestNumberDoubled(arrayOfNumbers){
    return (filterHighestNumber(arrayOfNumbers) * 2)
}

export function firstLetterUppercase(sentence){
    if (typeof sentence !== 'string'){
        return "invalid data"
    }
    let words = sentence.split(' ');
    let capitalizedWords = words.map(word =>
word.charAt(0).toUpperCase() + word.slice(1));
    let capitalizedSentence = capitalizedWords.join(' ');

    return capitalizedSentence;
}

export function whichIsHigher(number1, number2){
    if (typeof number1 !== 'number' || typeof number2 !== 'number'){
        return "invalid data";
    }
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}