module.exports = function toReadable (num) {
    const singl = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['hundred'];
    const thousand = ['thousand'];
    let res = [] ;
    num = num.toString();
  
    if (num.length === 1) {
      res.push(singl[num]);
    }
  
    if (num.length === 2 && num <= 19) {
     res.push(singl[num]);
    } else if (num.length === 2 && num[1] === '0') {
      res.push(tens[num[0] - 2]);
    } else if (num.length === 2) {
      res.push(tens[num[0] - 2]);
      res.push(singl[num[1]]);
    } 
  
    if (num.length === 3 && num[1] === '0' && num[2] === '0') {
        res.push(singl[num[0]]);
        res.push(hundreds[0])
      } else if (num.length === 3 &&  num[1] === '0') {
        res.push(singl[num[0]]);
        res.push(hundreds[0]);
        res.push(singl[num[2]]);
      } else if (num.length === 3 &&  num[1] === '1') {
        res.push(singl[num[0]]);
        res.push(hundreds[0]);
        res.push(singl[num[1] + num[2]]);
      } else if (num.length === 3 &&  num[2] === '0') {
        res.push(singl[num[0]]);
        res.push(hundreds[0]);
        res.push(tens[num[1] - 2]);
      } else if (num.length === 3) {
        res.push(singl[num[0]]);
        res.push(hundreds[0]);
        res.push(tens[num[1] - 2]);
        res.push(singl[num[2]]);
      }
  return res.join(' ');
}
