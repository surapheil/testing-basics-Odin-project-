function capitalize(str){
    let letter = str.charAt(0);
    letter = capital[letter]
    return letter + str.slice(1);
}

const capital = {
    'a':'A',
    'b':'B',
    'c':'C',
    'd':'D',
    'e':'E',
    'f':'F',
    'g':'G',
    'h':'H',
    'i':'I',
    'j':'J',
    'k':'K',
    'l':'L',
    'm':'M',
    'n':'N',
    'o':'O',
    'p':'P',
    'q':'Q',
    'r':'R',
    's':'S',
    'u':'U',
    'v':'V',
    'w':'W',
    'y':'Y',
    'x':'X',
    'z':'Z',
    'A':'A',
    'B':'B',
    'C':'C',
    'D':'D',
    'E':'E',
    'F':'F',
    'G':'G',
    'H':'H',
    'I':'I',
    'J':'J',
    'K':'K',
    'L':'L',
    'M':'M',
    'N':'N',
    'O':'O',
    'P':'P',
    'Q':'Q',
    'R':'R',
    'S':'S',
    'U':'U',
    'V':'V',
    'W':'W',
    'Y':'Y',
    'X':'X',
    'Z':'Z'

}

module.exports = capitalize;