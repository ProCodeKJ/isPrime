// get elements
const num = document.querySelector('#num');
const ok = document.querySelector('#ok');

// when ok button is clicked
ok.addEventListener("click", checkNum);

function checkNum() {
    let numValue = Number(num.value);
    if (numValue != 0) {
        console.log(`Chosen number : ${numValue}`);
        checkPrime(numValue);
    }else {
        console.error(`Not allowed`);
        alert(`다른 숫자 입력 하셈_`);
    }
}

function checkPrime(num) {
    if(num == 1) {
        alert("1은 소수도 합성수도 아닙니다.")
    }else if(num == 2) {
        alert("2!!! 가장 작은 소수입니다!")
    }else {
        for(let i = 2; i<num; i++) {
            if(num % i == 0) {
                alert(`${num}은 합성수입니다!`);
                break;
            }else {
                alert(`${num}은 소수입니다!`);
                break;
            }
        }
    }
}