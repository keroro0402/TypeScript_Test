/*　文字列 */

let moji1: string = 'おはようっていってるやん！？';
console.log(moji1);
let moji2: string = '大阪に行きたいこの頃です・・・';
console.log(moji2);
let moji3: string = '香川・高知・愛媛・徳島';
console.log(moji3);
let moji4: string = '創立記念４００年キャンペーン実施中！！！！！';
console.log(moji4);
let moji5: number = 2322;

let person: {
  name: string;
  age: number;
  sex: string;
} = {
  name: 'jack',
  age: 43,
  sex: '男',
};

console.log(person.name);

person = {
  name: '斉藤ななみ',
  age: 32,
  sex: '女',
};

console.log(person.name);

let food: {
  name: {
    first: string;
    last: string;
  };
  age: number;
  sex: string;
  memo: string;
  etc: {
    long: {
      note: string;
      photo: string;
    };
  };
} = {
  name: {
    first: '斉藤',
    last: 'まなみ',
  },
  age: 43,
  sex: '女',
  memo: '淫乱で猟奇的',
  etc: {
    long: {
      note: '快楽の化身',
      photo: '破壊的衝動にかられやすい',
    },
  },
};

console.log(food.name.first);
console.log(food.etc.long.photo);

let fruits: (string | number)[] = ['apple', 'peach', 12, 'grape'];

/** 配列で型宣言をする場合 */
/**　配列に入る値の型が1種類だけの場合 */
let array: string[] = ['あ', 'い', 'う'];
