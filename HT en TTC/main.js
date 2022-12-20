// function convert_ht_to_ttc(event) {
//   //micreer variable atao hoe ht_price no anarany
//   let ht_price = document.querySelector('#ht_price').value
//   //querySelector mitovy aminy getElementByClass na ID
//   let taux_tva = document.querySelector('#taux_tva').value
//   let ttc_price = document.querySelector('#ttc_price').value

//   if (event.target.name === 'ttc_price') {
//     let new_prix_ht = (ttc_price / (1 + taux_tva / 100)).toFixed(2)
//     document.querySelector('#ht_price').value = new_prix_ht
//   } else {
//     let new_prix_ttc = (ht_price * (1 + taux_tva / 100)).toFixed(2)
//     document.querySelector('#ttc_price').value = new_prix_ttc
//   }
// }

// document.querySelectorAll('#tax input').forEach((input) => {
//   input.addEventListener('keyup', convert_ht_to_ttc)
//   input.addEventListener('mouseup', convert_ht_to_ttc)
// })

// var montantTTC=(montantHT + montantHT * taxe / 100);
// var result = document.querySelector(".result");
// result.innerhtml = montantHT

let HT = document.querySelector('#ht_price');
let TVA = document.querySelector('#taux_tva');
let TTC = document.querySelector('#ttc_price');
let result = document.querySelector('.result');
let tvaPrice = document.querySelector('#tva_price');

let convertTTC = document.querySelector('#convert_TTC');

HT.addEventListener('keyup', () => {
  calculatorTTC(HT.value, TVA.value)
})

TVA.addEventListener('change', () => {
  calculatorTTC(HT.value, TVA.value)
  calculatorHT(TTC.value, TVA.value)
})


TTC.addEventListener('keyup', () => {
  calculatorHT(TTC.value, TVA.value)
})

function calculatorTTC(HT, TVA) {
  let taxe = HT*TVA
  let priceTTC = parseFloat(HT)+parseFloat(taxe)
  TTC.value = priceTTC
  tvaPrice.innerHTML = taxe
  result.classList.add('show')
}


function calculatorHT(TTC, TVA) {
  console.log(TTC);
  taxe = parseFloat(1)+parseFloat(TVA)
  let priceHT = TTC / taxe
  HT.value = priceHT.toFixed(2)
}






let HTShow = document.querySelector('.HT_show');
let TTCShow = document.querySelector('.TTC_show');
let containerTTC = document.querySelector('#convert_TTC');
let containerHT = document.querySelector('#convert_HT');

HTShow.addEventListener('click', () => {
  containerTTC.classList.add('show');
  containerHT.classList.remove('show');
  HTShow.classList.add('show')
  TTCShow.classList.remove('show')
  result.classList.remove('show')
})

TTCShow.addEventListener('click', () => {
  containerHT.classList.add('show');
  containerTTC.classList.remove('show');
  TTCShow.classList.add('show')
  HTShow.classList.remove('show')
  result.classList.remove('show')
})
