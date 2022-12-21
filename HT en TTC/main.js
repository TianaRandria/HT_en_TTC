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







//Display results
let result = document.querySelector('.result');
let tvaPrice = document.querySelector('#tva_price');
//let convertTTC = document.querySelector('#convert_TTC');

/**
 * From HT to TTC
 */
let HT = document.querySelector('#ht_price');
let TVAHT = document.querySelector('#taux_tva_ht');
let resultTTC = document.getElementById('ttc_price_result');

HT.addEventListener('keyup', () => {
  calculatorTTC(HT.value, TVAHT.value);
})

TVAHT.addEventListener('change', () => {
  calculatorTTC(HT.value, TVAHT.value);
})

function calculatorTTC(HT, TVA) {
  let taxe = HT*TVA;
  let priceTTC = parseFloat(HT)+parseFloat(taxe);console.log(priceTTC)
  resultTTC.value = priceTTC.toFixed(2);
  tvaPrice.innerHTML = taxe.toFixed(2);
  result.classList.add('show');
}



/**
 * From TTC to HT
 */
let TVATTC = document.querySelector('#taux_tva_ttc');
let TTC = document.getElementById('ttc_price');
let resultHT = document.getElementById('ht_price_result');

TTC.addEventListener('keyup', () => {
  calculatorHT(TTC.value, TVATTC.value);
})

TVATTC.addEventListener('change', () => {
  calculatorHT(TTC.value, TVATTC.value);
})


function calculatorHT(TTC, TVA) {
  let taxe = parseFloat(1)+parseFloat(TVA);
  let priceHT = TTC / taxe;
  resultHT.value = priceHT.toFixed(2);
  tvaPrice.innerHTML = (TTC - priceHT).toFixed(2);
  result.classList.add('show');
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