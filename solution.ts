// problem 1;

type FormatValueType = string | number | boolean;

const formatValue=<T extends FormatValueType>(value:FormatValueType):FormatValueType=>{
 if(typeof value === 'string'){
    return value.toUpperCase()
 }else if(typeof value === 'number'){
    return value*10;
 }else{
    return !value;
 }
}

const formatedValue=formatValue('hello world')

// problem 2
type GetLengthType = string | any[]
const getLength = (value:GetLengthType) :number =>{
  if(Array.isArray(value)){
    return value.length;
  }else{
    return value.length;
  }
}

const gotLength = getLength('my name is opi korim')


//problem 3


