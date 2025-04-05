// Akan name data
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Name meanings
const nameMeanings = {
  "Kwasi": "Born on Sunday; associated with the universe and spirituality",
  "Kwadwo": "Born on Monday; symbolizes peace and gentleness",
  "Kwabena": "Born on Tuesday; represents the ocean and wisdom",
  "Kwaku": "Born on Wednesday; associated with the forest and healing",
  "Yaw": "Born on Thursday; symbolizes the earth and stability",
  "Kofi": "Born on Friday; represents fertility and abundance",
  "Kwame": "Born on Saturday; symbolizes balance and authority",
  "Akosua": "Born on Sunday; represents nurturing and compassion",
  "Adwoa": "Born on Monday; symbolizes peace and kindness",
  "Abenaa": "Born on Tuesday; associated with strength and resilience",
  "Akua": "Born on Wednesday; represents wisdom and knowledge",
  "Yaa": "Born on Thursday; symbolizes prosperity and growth",
  "Afua": "Born on Friday; associated with love and abundance",
  "Ama": "Born on Saturday; represents power and leadership"
};

// DOM elements
const generateBtn = document.getElementById('generateBtn');
const birthdateInput = document.getElementById('birthdate');
const genderSelect = document.getElementById('gender');
const displayNameEl = document.getElementById('displayName');
const dayDisplayEl = document.getElementById('dayDisplay');
const loadingSpinner = document.getElementById('loadingSpinner');
const nameMeaningEl = document.getElementById('nameMeaning');
const meaningTextEl = document.getElementById('meaningText');
const dateErrorEl = document.getElementById('dateError');

// Event listeners
generateBtn.addEventListener('click', generateAkan);

// Functions
function generateAkan() {
  // Reset previous errors and displays
  resetDisplay();
  
  // Get input values
  const birthdate = birthdateInput.value;
  const gender = genderSelect.value;
  
  // Validate inputs
  if (!birthdate) {
    showError('Please select your date of birth');
    return;
  }
  
  if (!gender) {
    showError('Please select your gender');
    return;
  }
  
  // Show loading spinner
  loadingSpinner.classList.add('active');
  
  // Simulate loading (for UX purposes)
  setTimeout(() => {
    try {
      // Parse date
      const date = new Date(birthdate);
      
      // Get day of week (0 = Sunday, 6 = Saturday)
      const dayOfWeek = date.getDay();
      
      // Get Akan name based on gender and day of week
      const akanName = gender === 'male' ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
      
      // Display results
      displayNameEl.textContent = akanName;
      dayDisplayEl.textContent = `Born on ${daysOfTheWeek[dayOfWeek]}`;
      
      // Show name meaning
      if (nameMeanings[akanName]) {
        meaningTextEl.textContent = nameMeanings[akanName];
        nameMeaningEl.classList.add('active');
      }
      
      // Hide loading spinner
      loadingSpinner.classList.remove('active');
    } catch (error) {
      console.error(error);
      showError('Something went wrong. Please try again.');
      loadingSpinner.classList.remove('active');
    }
  }, 800);
}

function showError(message) {
  dateErrorEl.textContent = message;
  dateErrorEl.classList.add('active');
}

function resetDisplay() {
  displayNameEl.textContent = '';
  dayDisplayEl.textContent = '';
  dateErrorEl.textContent = '';
  dateErrorEl.classList.remove('active');
  nameMeaningEl.classList.remove('active');
}

// Initialize with current date
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
birthdateInput.setAttribute('max', `${year}-${month}-${day}`);
