module.exports = function toReadable (number) {
  let result = '';
  
  const hundreds = Math.floor(number/100);
  const tens = number % 100;
  const units = number  % 100 % 10;
  
  const digitToWord = (digit) => {
	  switch (digit) {
		  case 1: return 'one';
		  case 2: return 'two';
		  case 3: return 'three';
		  case 4: return 'four';
		  case 5: return 'five';
		  case 6: return 'six';
		  case 7: return 'seven';
		  case 8: return 'eight';
		  case 9: return 'nine';
		  case 0: return 'zero';
	  }
  };
  
  
  result = result + (hundreds > 0 ? `${digitToWord(hundreds)} hundred` : '');
  result =result +  (hundreds > 0 && tens > 0 ? ' ' : '');
  
  switch (tens) {
	  case 10: result =result +  'ten'; break;
	  case 11: result =result +  'eleven'; break;
	  case 12: result =result +  'twelve'; break;
	  case 13: result =result + 'thirteen'; break;
	  case 14: result =result +  'fourteen'; break;
	  case 15: result =result + 'fifteen'; break;
	  case 16: result =result +  'sixteen'; break;
	  case 17: result =result +  'seventeen'; break;
	  case 18: result =result + 'eighteen'; break;
	  case 19: result =result +  'nineteen'; break;	 
	  default: break;
  }
	  
	switch (tens - units) {	  
	  case 20: result =result + 'twenty'; break;
	  case 30: result =result + 'thirty'; break;
	  case 40: result =result + 'forty'; break;
	  case 50: result =result + 'fifty'; break;
	  case 60: result =result + 'sixty'; break;
	  case 70: result =result + 'seventy'; break;
	  case 80: result =result + 'eighty'; break;
	  case 90: result =result + 'ninety'; break;
	  default: break;
  }
  
  result =result +  (tens - units > 10 && units > 0  ? ' ' : '');
  result =result +  ((tens - units == 0 && (units > 0 || hundreds == 0)) || ((tens - units) > 10 && units != 0) ? `${digitToWord(units)}` : '');
  
  return result;  
}
