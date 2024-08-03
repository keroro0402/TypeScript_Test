/** TSのコンパイル時は tec ファイル名.ts --watch
 * とすると、更新後にいちいちコンパルコマンドを打たなくてもコンパイルされるようになるので必ず使うことに気をつけなさい！！！？？？？？
 */

/**TypeScriptの型付け */

/**　文字列型 */
let string1: string = 'こんばんは';
console.log(string1);
let string2: string = 'おはようございます';
console.log(string2);

/** 数字型 */
let num1: number = 12;
console.log(num1);
let num2: number = 10000;
console.log(num2);

/** obj */
let obj1: {
  name: string;
  age: number;
} = {
  name: '斉藤ななみ',
  age: 32,
};
console.log(obj1.name, obj1.age);

let obj2: {
  food: {
    name: string;
    price: number;
    store: {
      info1: string;
      info2: string;
    };
  };
  drink: {
    name: string;
    price: number;
    essence: {
      sugar: number;
      cal: number;
    };
  };
} = {
  food: {
    name: 'ハンバーガー',
    price: 500,
    store: {
      info1: '鎌倉点',
      info2: '帯露店',
    },
  },
  drink: {
    name: 'コーラー',
    price: 300,
    essence: {
      sugar: 40,
      cal: 90,
    },
  },
};

console.log(obj2.food.name, obj2.drink.name, obj2.drink.essence);

/** 真偽値 */
let bool1: boolean = false;
if (bool1) {
  console.log('間違い！！');
} else {
  console.log('正解〜〜！');
}

let bool2: boolean = true;

console.log(bool2 ? 'OK' : 'NG');
let result1: boolean;
result1 = bool1 || (bool2 && bool2) || bool1 || bool2 || bool1;
console.log(result1);
