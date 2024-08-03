/*　文字列 */
var moji1 = 'おはようっていってるやん！？';
console.log(moji1);
var moji2 = '大阪に行きたいこの頃です・・・';
console.log(moji2);
var moji3 = '香川・高知・愛媛・徳島';
console.log(moji3);
var moji4 = '創立記念４００年キャンペーン実施中！！！！！';
console.log(moji4);
var moji5 = 2322;
var person = {
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
var food = {
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
var fruits = ['apple', 'peach', 12, 'grape'];
/** 配列で型宣言をする場合 */
/**　配列に入る値の型が1種類だけの場合 */
var array = ['あ', 'い', 'う'];
