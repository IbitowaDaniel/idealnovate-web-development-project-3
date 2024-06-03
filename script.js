function checkPalindrome() {
  const userInput = document.getElementById('inp-word').value.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedInput = userInput.split('').reverse().join('');

  if (userInput === reversedInput) {
      document.getElementById('result').innerHTML = `You are correct! <span class="user-input">"${userInput}"</span> is a palindrome!`;
  } else {
      document.getElementById('result').innerHTML = `That is Wrong! <span class="user-input">"${userInput}"</span> is not a palindrome.`;
  }
}
