// Listen for submit
document.getElementById('investment-form').addEventListener('submit', function(e){
  //hide results
  document.getElementById('results').style.display = 'none';
  
  //show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});


// Calculate Results
function calculateResults(e){
  // UI Vars
  const investment = document.getElementById('investment');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');

  //calculate
  const totalInvestment = parseFloat(investment.value);
  const calculatedInterest = parseFloat(interest.value) / 100;

  const yearsToDouble = (Math.log(2)/(Math.log(1 + (calculatedInterest))));

  // computer monthly payments


  //const x = Math.pow(1+ calculatedInterest, calculatedPayments);
  //const monthly = (principal*x*calculatedInterest) / (x-1);

  if(isFinite(yearsToDouble)) {
    years.value = Math.round(yearsToDouble);

    //show results
    document.getElementById('results').style.display = 'block';

    
  } else {
    console.log('Please check your numbers...');

    showError('Please check your numbers');
  }

  //hide loader
  document.getElementById('loading').style.display = 'none';

}

function showError(error) {
  // create a div
  const errorDiv = document.createElement('div');

  // get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // add classes
  errorDiv.className = 'alert alert-danger';

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert above heading
  card.insertBefore(errorDiv, heading);

  // clear error after 3 seconds, milliseconds
  setTimeout(clearError, 3000);

}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}