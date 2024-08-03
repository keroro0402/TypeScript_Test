/** TSのコンパイル時は tec ファイル名.ts --watch
 * とすると、更新後にいちいちコンパルコマンドを打たなくてもコンパイルされるようになるので必ず使うことに気をつけなさい！！！？？？？？
 */
/**TypeScriptの型付け */
/**　文字列型 */
var string1 = 'こんばんは';
console.log(string1);
var string2 = 'おはようございます';
console.log(string2);
/** 数字型 */
var num1 = 12;
console.log(num1);
var num2 = 10000;
console.log(num2);
/** obj */
var obj1 = {
    name: '斉藤ななみ',
    age: 32,
};
console.log(obj1.name, obj1.age);
var obj2 = {
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
var bool1 = false;
if (bool1) {
    console.log('間違い！！');
}
else {
    console.log('正解〜〜！');
}
var bool2 = true;
console.log(bool2 ? 'OK' : 'NG');
var result1;
result1 = bool1 || (bool2 && bool2) || bool1 || bool2 || bool1;
console.log(result1);
