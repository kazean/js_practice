// 블록
{
    const name = 'Mark';
    console.log(name);
}

// console.log(name);

// 밖에서 안으로
let age = 37;

{
    age++;
    console.log(age);
}

console.log(age);

// 중첩
{
    {
        {
            console.log(age);
        }
    }
}