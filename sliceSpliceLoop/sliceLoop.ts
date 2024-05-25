let sentence: string = "The sUn is bRight"

console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

let sentenceInLowerCase: string = sentence.toLowerCase()
console.log(sentenceInLowerCase);

//length property counts letters n spaces
console.log(sentence.length);
console.log(sentenceInLowerCase.length);

//charAt= is waly index p ye chracter ya letter place h=Returns the character at the specified index.
console.log(sentence.charAt(0));
console.log(sentence.charAt(4));

//split= break the characters or letters with spaces
//"" empty string/quotaion= count all words/letter inside "".
console.log(sentence.split(""));
console.log(sentence.split(" "));
console.log(sentence.split("s"));

//join= to join splitted characters or finish array and make proper sentence
//string [] is lye banaya cus join array p work krta h qk jab string break hota heto multilple
//data me break hota h jisko array me rkhty hen

let sentenceSplitted: string[]= sentence.split(" ")
//word at 0 index = The
console.log(sentenceSplitted[0]); //The
console.log(sentenceSplitted[1]); //sUn
console.log(sentenceSplitted[2]); //is
console.log(sentenceSplitted[3]); //bRight
console.log(sentenceSplitted); //[ 'The', 'sUn', 'is', 'bRight' ]


//join removes parenthesis

console.log(sentenceSplitted.join());
console.log(sentenceSplitted.join(""));
console.log(sentenceSplitted.join(" "));

//split
let sentencesplit: string[]= sentence.split(" ")

for (let i=0; i < sentencesplit.length; i++){
let character = sentencesplit[i]

sentencesplit[i] = character.charAt(0).toUpperCase() + character.slice(1).toLowerCase()
}
//chartAt(0)= 0 index p letter jisko uppercase krna h
//slice(1)= index no.1 c lekr last letter jinko lowercase krna h

let toTitleCase: string= sentencesplit.join(" ")
console.log(toTitleCase);

function makeTitlecase(text: string) : string
{
    let textsplit: string[]= text.split(" ")

    for (let i=0; i < textsplit.length; i++){
    let character = textsplit[i]
    
    textsplit[i] = character.charAt(0).toUpperCase() + character.slice(1).toLowerCase()
    }
    
    return textsplit.join(" ")
    
}
//console + call
console.log (makeTitlecase("khizra riaz"));
console.log (makeTitlecase(sentence));


//other way of calling function

let myName: string = "khizra riaz"
let myNameInTitleCase = makeTitlecase (myName)
console.log(myNameInTitleCase);
//must see assignmet loop


// let personName : string = "joHn"

// let personName : string = "aHmed rAza noMan"

// function toTitleCase(str: string){ 
//     const firstCharInUpperCase = str.charAt(0).toUpperCase();
//     console.log("firstChar: ", firstCharInUpperCase);

//     const charsInLowerCase = str.slice(1).toLowerCase();
//     console.log("charsInLowerCase: ", charsInLowerCase);

//     const titleCaseString = firstCharInUpperCase + charsInLowerCase;
//     return titleCaseString;
    
// }
// personName = toTitleCase(personName);
// console.log(personName);
