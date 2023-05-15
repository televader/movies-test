import React from "react";
import Card from "../components/Card";

export function fillHarryCard(data) {
    return (
        <Card
            key={data.id}
            image={data.image}
            name={data.name}
            actor={data.actor}
        />
    )
}

export function sum(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        return "invalid data"
    }
    return numero1 + numero2;
}

export function filterHighestNumber(arrayNumeros) {
    if (arrayNumeros.every((element) => typeof element === 'number')) {
        return Math.max(...arrayNumeros)
    }
    return "invalid data";
}

export function getHighestNumberDoubled(arrayNumeros){
    return (filterHighestNumber(arrayNumeros) * 2);
}

export function firstLetterUppercase(sentence) { // ingreso un texto
    if (typeof sentence !== 'string') {
        return "invalid data";
    }
    let words = sentence.split(' '); // entrega un array con palabras
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let capitalizedSentence = capitalizedWords.join(' ');

    return capitalizedSentence;
}

export function higherNumber(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "invalid data";
    }
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

