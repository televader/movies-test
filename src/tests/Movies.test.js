import { sum , filterHighestNumber, firstLetterUppercase, whichIsHigher, getHighestNumberDoubled } from "../utils/helpers";
    // jest.mock("../utils/helpersMocked");
    
    describe("Sum", ()=> {
        test("Sums 2 numbers and returns the result", ()=> {
            let response = sum(5,2);
    
            expect(response).toBe(7)
            expect(typeof response).toBe('number')
        })
    
        test("When the input is not a number, the function returns invalid data", ()=> {
    
            expect(sum(2,"a")).toBe("invalid data");
            expect(sum(2,false)).toBe("invalid data");
            expect(sum(2,[5,3,6])).toBe("invalid data");
            expect(sum(2,{a:2})).toBe("invalid data");
        })
    })
    
    describe("Highest number", ()=> {
        test("Given an array of numbers, the function finds and returns its highest number", ()=> {
            let response = filterHighestNumber([5,6,8,500]);
    
            expect(response).toBe(500)
            expect(typeof response).toBe('number')
        })
    
        test("If the given array contains other types of data, the function returns invalid data", ()=> {
    
            expect(filterHighestNumber([5,6,8,"abc",500])).toBe("invalid data")
            expect(filterHighestNumber([5,6,8,{a:2},500])).toBe("invalid data")
            expect(filterHighestNumber([5,6,8,true,500])).toBe("invalid data")
            expect(filterHighestNumber([5,6,8,[1,3],500])).toBe("invalid data")
        })
    
        test("If the input is not an array, the function returns invalid data", ()=> {
    
            expect(filterHighestNumber("abc")).toBe("invalid data")
            expect(filterHighestNumber(123)).toBe("invalid data")
            expect(filterHighestNumber(false)).toBe("invalid data")
        })
    })
    
    describe ("Highest number doubled", ()=> {
        test("Given an array of numbers, the function returns the highest number multiplied by 2", ()=> {
            let response = getHighestNumberDoubled([1,2,5]);
    
            expect(response).toBe(10)
            expect(typeof response).toBe('number')
        })
    })
    
    
    describe("First letter uppercase", ()=> {
        test("Given a sentence, the function capitalizes the first letter of its words", ()=> {
            let response = firstLetterUppercase("hello world");
    
            expect(response).toBe("Hello World")
            expect(typeof response).toBe('string')
        })
    
        test("If the input is not a string, the function should return invalid data", ()=> {
    
            expect(firstLetterUppercase(1234)).toBe("invalid data")
            expect(firstLetterUppercase(false)).toBe("invalid data")
            expect(firstLetterUppercase({a:12})).toBe("invalid data")
            expect(firstLetterUppercase([1234])).toBe("invalid data")
        })
    })
    
    
    describe("Which number is higher", ()=> {
        test("Given 2 numbers, the function returns the highest number", ()=> {
            let response = whichIsHigher(5,2);
    
            expect(response).toBe(5)
            expect(typeof response).toBe('number')
        })
    
        test("If the input is not number then it returns invalid data", ()=> {
    
            expect(whichIsHigher("a",2)).toBe("invalid data")
            expect(whichIsHigher(2,"b")).toBe("invalid data")
            expect(whichIsHigher("a","c")).toBe("invalid data")
            expect(whichIsHigher(["a"],2)).toBe("invalid data")
            expect(whichIsHigher({a:1},2)).toBe("invalid data")
            expect(whichIsHigher(true,2)).toBe("invalid data")
        })
    })
    
    
    // import {----funciones-----} from "../components/------";
    
    
    // describe("name", ()=>{
    
    //  // ---- tests unitarios ---- //
    //     test("description of what it does", ()=>{
    //         let response = function(parameter);
    
    //         expect(response).toBe(parameter)
    //         expect(typeof response).toBe()
    //         expect(typeof response).not.toBe()
    //     })
    
    //  // ---- test de integración, usando el store ---- //
    //     test("description of what it does", ()=>{
    //         render(<Provider store={store}> <component to test/> </Provider>)
    //         expect().toBeInTheDocument
    // })
    
    
    //  // ---- test de integración, usando el store ---- //
    //     test("description of what it does", ()=>{
    //         render(<Provider store={store}> <component to test/> </Provider>)
    //              let title = screen.getByText("Title")
    //         expect(title).toBeInTheDocument
    // })
    
    // })
    
    // then run npm test
    
    
    // // -- para eviitar llamar al provider antes de cada test, se usa un
    // "beforeEach":
    
    // describe("name", ()=>{
    
    //      beforeEach(()=>{
    //            render(<Provider store={store}> <component to test/></Provider>)
    //      })
    
    // //      -- and then add all the tests here: --
    // })