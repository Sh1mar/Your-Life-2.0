
let userTimeFramesElement = document.getElementById('timeFrameSelection');
let userDOBValue = null;
let selectedTimeFrame = null;

// It splits the classes string into an array and adds them to the element's classList.
function addTailwindClasses(element, classes) {
   element.classList.add(...classes.split(' '));
}

// MARK: Calculates thet Users time lived
function timeLived(userDOB){ 

   let yearsLived_arr = [];
   
   // Intializes the current Year and Month 
   const currentYear = new Date().getFullYear();
   const currentMonth = new Date().getMonth() + 1;

   const userYear = Number(userDOB.split('-')[0]);
   const userMonth = Number(userDOB.split('-')[1]);

   // Calculates User Year and Month, given the current Month
   let yearsLived = currentMonth < userMonth ? currentYear - userYear -1 : currentYear - userYear
   let monthsLived = currentMonth < userMonth ? (12 - userMonth) + currentMonth  : currentMonth - userMonth;

   yearsLived_arr = [yearsLived,monthsLived];

   return yearsLived_arr;
}
 
 // MARK: Week Number by Date ~ Credit https://www.geeksforgeeks.org/calculate-current-week-number-in-javascript/
 function getDateWeek(date) {

   // Checks the tyoe of date 
   const currentDate = (typeof date === 'object') ? date : new Date();
   
   // Ensure currentDate is set to either the provided date object or the current date 
   const januaryFirst = new Date(currentDate.getFullYear(), 0, 1);
   
   // Initialize januaryFirst to the beginning of the current year using new
   const daysToNextMonday = (januaryFirst.getDay() === 1) ? 0 : (7 - januaryFirst.getDay()) % 7;
   
   // Determine the number of days to the next Monday from January 1st
   const nextMonday = new Date(currentDate.getFullYear(), 0, januaryFirst.getDate() + daysToNextMonday);

   // Compare currentDate with nextMonday and calculate the week number accordingly
   return (currentDate < nextMonday) ? 52 : 
   (currentDate > nextMonday ? Math.ceil(
   (currentDate - nextMonday) / (24 * 3600 * 1000) / 7) : 1);
}


// MARK: Years UI using DOM
function createYearsUI(userDOB) { 
   const mainDiv = document.createElement("div");
   const innerDiv = document.createElement("div");

   // Add Tailwind classes to elements
   addTailwindClasses(mainDiv, 'flex justify-center items-center py-16');
   addTailwindClasses(innerDiv, 'grid grid-cols-5 sm:grid-cols-10 md:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10 gap-4 overflow-auto');

   mainDiv.appendChild(innerDiv);
   document.getElementById('Years').append(mainDiv);

   for(var i = 0; i < 90; i++){

      const yearsDiv = document.createElement("div");
      addTailwindClasses(yearsDiv, 'flex justify-center items-center w-8 h-8 p-4 border-2 rounded text-white text-xs');         
      yearsDiv.textContent = i+1;
      yearsDiv.setAttribute("id","Year" + " " + (i+ 1));
      innerDiv.appendChild(yearsDiv);

      if(i < userDOB) {
         addTailwindClasses(yearsDiv, "bg-brightRed");
      }
   }
}

// MARK: Months UI using DOM
// Below is the HTML template that I used to create the DOM in JS
/* <div class="flex justify-center items-center py-16" id="Months">
   <div class="overflow-auto">

   <div class="flex justify-center items-center pl-12">
      <div class="flex justify-center items-center w-14 h-8 p-2 border-2 text-white text-xs bg-brightRed mb-2">Months</div>
   </div>
      
   <!-- Year indicator box -->
   <div class="flex flex-col">
      
      <div class="flex items-center">
         <div class="flex justify-center items-center w-14 h-8 p-2 border-2 text-white text-xs bg-brightRed mb-2 mr-4">Year 1</div>                        
      
         <!-- Month boxes for the year -->
         <div class="grid grid-cols-12 gap-2 mb-2">
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">1</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">2</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">3</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">4</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">5</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">6</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">7</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">8</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">9</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">10</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">11</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">12</div>
         </div>
      </div>   
   </div>

   <div class="flex flex-col">
      <div class="flex items-center">
         <div class="flex justify-center items-center w-14 h-8 p-2 border-2 text-white text-xs bg-brightRed mb-2 mr-4">Year 2</div>                        
         
         <!-- Month boxes for the year -->
         <div class="grid grid-cols-12 gap-2 mb-2">
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">1</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">2</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">3</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">4</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">5</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">6</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">7</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">8</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">9</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">10</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">11</div>
            <div class="flex justify-center items-center w-4 h-4 p-3 border-2 text-white text-xs">12</div>
         </div>
      </div>   
   </div>

</div> */

function createMonthsUI(userYears,userMonths) {
  
   const container = document.createElement('div');
   addTailwindClasses(container, 'flex justify-center items-center py-16');
   container.id = 'Months';

   const innerContainer = document.createElement('div');
   addTailwindClasses(innerContainer, 'overflow-auto');

   const headerContainer = document.createElement('div');
   addTailwindClasses(headerContainer, 'grid grid-flow-col justify-stretch');

   innerContainer.appendChild(headerContainer);

   for (let year = 1; year <= 90; year++) {
      const yearContainer = document.createElement('div');
      addTailwindClasses(yearContainer, 'flex flex-col');

      const yearMonthContainer = document.createElement('div');
      addTailwindClasses(yearMonthContainer, 'flex items-center');

      const yearLabel = document.createElement('div');
      // max-sm:hidden - This will make the above element stay hidden until the viewport increases past the width size of 640px.
      addTailwindClasses(yearLabel, 'flex justify-center items-center mr-2 ml-2 sm:w-8 sm:h-8 sm:p-3 sm:mb-2 sm:ml-1 w-6 h-6 p-2 border rounded text-white text-xs bg-brightRed');
      yearLabel.textContent = `${year}`;
      yearMonthContainer.appendChild(yearLabel);

      const monthGrid = document.createElement('div');
      addTailwindClasses(monthGrid, 'grid grid-cols-12 gap-1 mb-2 pl-2 mb:gap-2 md:grid-cols-12 sm:ml-4');
      monthGrid.id = `Year ${year}`;

      for (let i = 1; i <= 12; i++) {
         const weeksBox = document.createElement('div');
         addTailwindClasses(weeksBox, 'flex justify-center items-center w-4 h-4 p-2 rounded border-2 text-white text-xs sm:w-6 sm:h-6 md:w-8 md:h-8 md:p-3');
         weeksBox.textContent = i;
         monthGrid.appendChild(weeksBox);

         if(year < userYears) { 
            addTailwindClasses(weeksBox, 'bg-brightRed');
         }
       
      }

      yearMonthContainer.appendChild(monthGrid);
      yearContainer.appendChild(yearMonthContainer);
      innerContainer.appendChild(yearContainer);
   }

   container.appendChild(innerContainer);
   document.getElementById('Months').appendChild(container);


   const gridElements = document.querySelectorAll('.grid.grid-cols-12')[userYears-1];
   
   if(userYears != 0) { 
      const children = gridElements.children;
      const childrenArray = Array.from(children);

      const first8Children = childrenArray.slice(0, userMonths-1);

      // Log or process the first 8 children as needed
      first8Children.forEach((child) => {
         addTailwindClasses(child, 'bg-brightRed');
      });
   }
}

// MARK: Weeks UI using DOM
// The HTML Structure mirrors the structure of the Months UI with a few changes
function createWeeksUI(userYears) {

   const container = document.createElement('div');
   addTailwindClasses(container, 'flex justify-center items-center py-16');
   container.id = 'Weeks';

   const innerContainer = document.createElement('div');
   addTailwindClasses(innerContainer, 'overflow-auto');

   const headerContainer = document.createElement('div');
   addTailwindClasses(headerContainer, 'grid grid-flow-col justify-stretch');

   innerContainer.appendChild(headerContainer);

   for (let year = 1; year <= 90; year++) {
      const yearContainer = document.createElement('div');
      addTailwindClasses(yearContainer, 'flex flex-col');

      const yearMonthContainer = document.createElement('div');
      addTailwindClasses(yearMonthContainer, 'flex items-center');

      const yearLabel = document.createElement('div');
      addTailwindClasses(yearLabel, 'flex justify-center items-center sm:w-8 sm:h-8 sm:p-3 sm:mb-2 sm:mr-4 sm:ml-1 w-6 h-6 p-2 border rounded text-white text-xs bg-brightRed');
      yearLabel.textContent = `${year}`;
      yearMonthContainer.appendChild(yearLabel);

      const weeksGrid = document.createElement('div');
      addTailwindClasses(weeksGrid, 'grid grid-cols-13 gap-1 mb-2 py-2 pl-4 py-0 md:grid-cols-26 lg:grid-cols-52');

      for (let i = 1; i <= 52; i++) {
         const weeksBox = document.createElement('div');
         addTailwindClasses(weeksBox, 'flex justify-center items-center w-4 h-4 p-2 border rounded text-white text-xs');
         weeksBox.textContent = i;
         weeksGrid.appendChild(weeksBox);

         
         if(year < userYears) { 
            addTailwindClasses(weeksBox, 'bg-brightRed');
         }
      }

      yearMonthContainer.appendChild(weeksGrid);
      yearContainer.appendChild(yearMonthContainer);
      innerContainer.appendChild(yearContainer);
   }
   
  const currentDate = new Date();
  const weekNumber = getDateWeek();
   
   container.appendChild(innerContainer);
   document.getElementById('Weeks').appendChild(container);

   const gridElements = document.querySelectorAll('.grid.grid-cols-13')[userYears-1];
   
   if(userYears != 0) { 
      const children = gridElements.children;
      const childrenArray = Array.from(children);

      const firstnthChildren = childrenArray.slice(0, weekNumber+1);

      // Log or process the first 8 children as needed
      firstnthChildren.forEach((child) => {
         addTailwindClasses(child, 'bg-brightRed');
      });
   }
}

// MARK:Clear UI
// The clearContainer function is defined to clear the contents of a container element by its ID.
function clearScreen(containerId) {
   const container = document.getElementById(String(containerId));
   while (container.firstChild) {
       container.removeChild(container.firstChild);
   }
}

// MARK: UI Updates
function updateUI() {
   // CHhecks if userDOBValue is set 
   if (userDOBValue) {
      const userAge = timeLived(userDOBValue);
      console.log(userAge);

      // Render the appropriate UI based on the selectedTimeFrame
      if (selectedTimeFrame === "Years") {
         clearScreen('Years');
         clearScreen('Months');
         clearScreen('Weeks');
         createYearsUI(userAge[0]);
      } else if (selectedTimeFrame === "Months") {
         clearScreen('Years');
         clearScreen('Months');
         clearScreen('Weeks');
         createMonthsUI(userAge[0],userAge[1]);
      } else if (selectedTimeFrame === "Weeks") {
         clearScreen('Years');
         clearScreen('Months');
         clearScreen('Weeks');
         createWeeksUI(userAge[0]);
      }
   
   // If userDOBValue is not set, render UI with default values 
   }else { 
      if (selectedTimeFrame === "Years") {
         clearScreen('Years');
         clearScreen('Months');
         clearScreen('Weeks');
         createYearsUI(0);
      } else if (selectedTimeFrame === "Months") {
         clearScreen('Years');
         clearScreen('Months');
         clearScreen('Weeks');
         createMonthsUI(0);
      } else if (selectedTimeFrame === "Weeks") {
         clearScreen('Years');
         clearScreen('Months');
         clearScreen('Weeks');
         createWeeksUI(0);
   }
   }
}

//MARK:Get User DOB
function getUserDOB(callback) {
   const userForm = document.getElementById('userForm');
   const userDOBElement = document.getElementById('userDOB');

//  Adds an event listener to the form to handle the submit event and retrieve the user's DOB using a callback
   userForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const userDOB = userDOBElement.value;

      callback(userDOB);
   });
}

// MARK:Main
function main() {
   // Get the user's DOB and update the UI accordingly
   getUserDOB((userDOB) => {
      userDOBValue = userDOB;
      updateUI();
   });
   
   // / Adds an event listener to the time frame selection element to update the UI on change
   userTimeFramesElement.addEventListener("change", (event) => {
      const selectedIndex = userTimeFramesElement.options.selectedIndex;
      selectedTimeFrame = userTimeFramesElement.options[selectedIndex].value;
      updateUI();
   });
}

main();
