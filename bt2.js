const arr1 = [2, 4, 5, 7, 9];
const arr2 = [4, 7];

const min1 = Math.min(...arr1);

const min2 = Math.min(...arr2);

const max1 = Math.max(...arr1);

const max2 = Math.max(...arr2);
console.log(min1, max1, min2, max2);
if (min1 < min2 && max1 > max2)
{
    console.log('Mang 2 nam trong mang 1');
}
else {
    console.log('Mang 2 khong nam trong mang 1');
}