import { suma, filtrarNumeroMasAlto, firstLetterUppercase, higherNumber, getHighestNumberDoubled } from "../utils/helpers";

describe("helpers functions", () => {
    test("Suma 2 numeros", () => {
        let response = suma(2, 2);

        expect(response).toBe(4);
        // expect(typeof response).toBe('string');
    })
    test("No puede devolver suma de numeros y letras", () => {
        let response = suma(2, "a");
        expect(response).toBe("invalid data");
    })
})

/////

describe("filtrar Numero Mas Alto", () => {
    test("Given an array of numbers, the function finds and return its highest number", () => {
        let response = filtrarNumeroMasAlto([5, 23, 6, 56]);

        expect(response).toBe(56);
        expect(typeof response).toBe('number')
    })

    test("If the given array contains a string, the function retuns invalid data", () => {
        let response = filtrarNumeroMasAlto([2, 5, 2, "abc"]);

        expect(response).toBe("invalid data")
    })
})

describe("Highest number doubled", () => {
    test("Given an array of numbers, the function returns the highest one multiplied for 2 ", () => {
        let response = getHighestNumberDoubled([1, 2, 3,]);

        expect(response).toBe(6)
        expect(typeof response).toBe('number')
    })
})


/// firstLetterUppercase ///
describe("first Letter Uppercase", () => {
    test("The function returns every word with a first letter uppercase", () => {
        let response = firstLetterUppercase("hola loco");

        expect(response).toBe("Hola Loco");
        expect(typeof response).toBe("string");
    })

    test("If some input isn´t a string, give a message", () => {
        let response = firstLetterUppercase(432412);

        expect(response).toBe("invalid data");
    })
})

/// numero mas alto ///

describe("higher Number", () => {
    test("Given 2 num, return the higfest one", () => {
        let response = higherNumber(3, 2);

        expect(response).toBe(3)
        expect(typeof response).toBe("number")
    })
})

