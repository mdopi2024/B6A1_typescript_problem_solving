## TypeScript-এ Interface এবং Type-এর মধ্যে মূল পার্থক্যগুলো কী?

### ১. সংজ্ঞা
- **Interface:** Interface দিয়ে আমরা শুধু অবজেক্টের গঠন (structure) তৈরি করতে পারি।
- * Example :
-interface Person {
    name :string;
    age:number
}  
- **Type:** Type দিয়ে আমরা শুধু অবজেক্টের গঠন তৈরি করি না, বরং Union টাইপ, Array টাইপ, Number, String এবং Boolean টাইপও তৈরি করতে পারি। 
- * Example :
- type Person =  Person {
    name :string;
    age:number
}  
- type Age = number,
- type name = string,
- type isAdmin = boolean,

### ২. সম্প্রসারণ (Extending)
- **Interface:** “যদি আমাদের Interface সম্প্রসারণ করার প্রয়োজন  হয়, তাহলে আমরা `extends` ব্যবহার।  
- **Type:** Type সম্প্রসারণ (extend) করতে হলে আমরা extends নয়, বরং & (intersection) ব্যবহার করি।

### ৪. সারসংক্ষেপ
- যদি আমাদের অবজেক্ট তৈরি করতে হয়, তাহলে Interface ব্যবহার করাই ভালো।  
- যদি আমাদের অবজেক্ট ছাড়াও Union, Array, Number, String বা Boolean টাইপ তৈরি করতে হয়, তাহলে Type ব্যবহার করাই ভালো।


---


# TypeScript-এ Union এবং Intersection Types উদাহরণ

* আমরা TypeScript-এ Union এবং Intersection ব্যবহার করে বিভিন্ন টাইপ সংজ্ঞায়িত করি 

### ১. Union Type 

- Union Type ব্যবহার করা হয় যখন একটি ভেরিয়েবল একাধিক টাইপের মধ্যে যেকোনো একটি মান রাখতে পারে।  

- Example :

- type StringOrNumber = string | number;

- const age:StringOrNumber = 23; 
- const name:StringOrNumber = 'x'


### 2. Intersection Type

- Union Type ব্যবহার করা হয় যখন একটি ভেরিয়েবল একাধিক টাইপের মধ্যে যেকোনো একটি মান রাখতে পারে।

- Example :

interface Pesrson1 {
    name : string;
    age: number;
}

interface Pesrson2 {
     isMarried: boolean;
}

const person : Pesrson1 & Pesrson2 = {
     name : "x",
     age: 10,
    isMarried: true / false;
}

### ৩. সারসংক্ষেপ

- যদি আমাদের ভেরিয়েবল একাধিক টাইপের মধ্যে যেকোনো একটি মান রাখতে পারে, তাহলে Union Type ব্যবহার করাই ভালো।

- যদি আমাদের ভেরিয়েবল একাধিক টাইপের সব বৈশিষ্ট্য একসাথে রাখতে হয়, তাহলে Intersection Type ব্যবহার করাই ভালো।