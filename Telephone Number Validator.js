//Return true if the passed string looks like a valid US phone number.

//The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

//555-555-5555
//(555)555-5555
//(555) 555-5555
//555 555 5555
//5555555555
//1 555 555 5555
//For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


//Establezco variables que esten definidas por expresiones regulares que me eyuden a identificar las distintas variantes en cuanto a numeros celulares
function telephoneCheck(str) {
  var primero = /^\d{3}-\d{3}-\d{4}/gm;
  var segundo = /^[(]\d{3}[)]\d{3}-\d{4}/gm;
  var tercero = /\(\d{3}\)\s\d{3}-\d{4}/gm;
  var cuarto = /\d{3}\s\d{3}\s\d{4}/gm;
  var quinto = /^\d{10}$/gm;
  var sexto = /^1\s?\([\s\)]?\d{3}\s?\)?-?[\s\)]?\d{3}\s?-?\d{4}/gm;
  var septimo = /^1\s?\d{3}\s?-?\d{3}\s?-?\d{4}/;

  //Establezco condiciones que me devuelvan true o false si se cumple o no se cumple la condicion en la cadena que se esta analizando
  if (str.match(primero) || str.match(segundo)) {
    return true;
  } else if (str.match(tercero) && str.match(cuarto)) {
    return true;
  } else if (str.match(quinto)) {
    return true;
  } else if (str.match(sexto)) {
    return true;
  } else if (str.match(septimo)) {
    return true;
  }
  return false;
}

telephoneCheck("555-555-5555");
