function replaceSpecialCharWithSpace(word) {
/**
 * 1. special characters only, i.e. Bain&Company, output: Bain Company
 * 2. just spaces in between the letters, i.e. hello world, output: *hello* *world*
 * 3. "leb r&on" *leb* *r on*
 */

 let punctuations = /[!#$%^&()+\-=\[\]{}\\|<>\/?]+/
 puncExists = false
 for (let char of word) {

     if (punctuations.test(char)) {
         word = word.replace(char, ' ')
         puncExists = true
     } 
 }

 if (!(puncExists)) {
    strArr = word.split(' ')
    for (let i = 0; i < strArr.length; i ++) {
        strArr[i] = `*${strArr[i]}*`
    }
 }

 return puncExists ? word : `${strArr.join(' ')}`
}

console.log(replaceSpecialCharWithSpace('Ba in Co mpany Cooperation')) 
