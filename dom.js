const root = document.getElementById('root');
const main = document.createElement('main');

const vE = document.createElement('input');
root.appendChild(vE);
vE.placeholder = 'Объём двигателя';
vE.type = 'number';

const month = document.createElement('input');
root.appendChild(month);
month.placeholder = 'Месяц выпуска';
month.type = 'number';

const year = document.createElement('input');
root.appendChild(year);
year.placeholder = 'Год выпуска';
year.type = 'number';

const price = document.createElement('input');
root.appendChild(price);
price.placeholder = 'Стоимость';
price.type = 'number';

const btnCalc = document.createElement('button');
root.appendChild(btnCalc);
btnCalc.textContent = 'Рассчитать';
btnCalc.addEventListener('click', () => printSum(false, false));

const btnCalc140 = document.createElement('button');
root.appendChild(btnCalc140);
btnCalc140.textContent = 'Рассчитать со льготой';
btnCalc140.addEventListener('click', () => printSum(true, false));

const btnCalcElectro = document.createElement('button');
root.appendChild(btnCalcElectro);
btnCalcElectro.textContent = 'Рассчитать для электромобиля';
btnCalcElectro.addEventListener('click', () => printSum(false, true));

const btnClean = document.createElement('button');
root.appendChild(btnClean);
btnClean.textContent = 'Очистить';
btnClean.onclick = function () {
    document.querySelectorAll('input').forEach(el => el.value = '');
    document.getElementById('out').textContent = ''
};

function printSum(uk140, electro) {
    const date = new Date();
    const thisYear = date.getFullYear();
    const thisMon = date.getMonth() + 1;
    const age = thisYear + thisMon / 12 - (+year.value) - (+month.value / 12);
    const sum = getSum(+vE.value, +price.value, age, uk140, electro);
    document.getElementById('out').textContent ='стоимость таможенных платежей в евро с учётом утильсбора составляет: ' + sum;
}