document.addEventListener('DOMContentLoaded', () => {
    // Div elements from index
    const descriptionElement = document.getElementById('taskDescription');
    const showTextButton = document.getElementById('showTextButton');
    const nameInputSection = document.getElementById('nameInputSection');
    const dateInputSection = document.getElementById('dateInputSection');
    const experimentMethodSection = document.getElementById('experimentMethodSection');

    // Javascript elements
    const participantNameInput = document.getElementById('participantName');
    const dateInput = document.getElementById('date');
    const withAIInput = document.getElementById('withAI');
    const withoutAIInput = document.getElementById('withoutAI');
    const submitButton = document.getElementById('submit');
    const displayTextContainer = document.getElementById('displayText');
    const logMessages = [];
    
    let currentIndex = -1;
    let timerStart = null;

    let aiOption = '';
    let currentTaskData;
    
    if (taskDescription && taskDescription.length > 0) {
        descriptionElement.innerHTML = `<p>${taskDescription[0]}</p>`;
    }

    showTextButton.style.display = 'none';

    // Event listener for the submit button
    submitButton.addEventListener('click', () => {
        const participantName = participantNameInput.value.trim();
        const experimentDate = dateInput.value.trim();
        aiOption = withAIInput.checked ? "With AI" : "Without AI";

        if (participantName.length > 0 && experimentDate.length > 0) {
            logMessages.push(`Participant Name: ${participantName}`);
            logMessages.push(`Date of Experiment: ${experimentDate}`);
            logMessages.push(`AI Option: ${aiOption}`);

            nameInputSection.classList.add('hide');
            dateInputSection.classList.add('hide');
            experimentMethodSection.classList.add('hide');
            submitButton.classList.add('hide');
            
            showTextButton.style.display = '';
        } else {
            alert('Please enter your name, the date, and choose an AI option to start the experiment.');
        }
    });

    // Event listener for the "With AI" option
    withAIInput.addEventListener('click', () => {
        loadScript('task3.js');
    });

    // Event listener for the "Without AI" option
    withoutAIInput.addEventListener('click', () => {
        loadScript('task4.js');
    });

    // Function to dynamically load JavaScript file
    function loadScript(scriptName) {
        const scriptElement = document.createElement('script');
        scriptElement.src = scriptName;
        scriptElement.onload = function() {
            if (scriptName === "task3.js") {
                currentTaskData = task3;
                if (aiOption === "With AI") {
                    displayTask(0);
                }
            } else if (scriptName === "task4.js") {
                currentTaskData = task4;
                if (aiOption === "Without AI") {
                    displayTask(0);
                }
            }
        };
        scriptElement.onerror = function() {
            console.error('Error loading script:', scriptName);
        };
        document.body.appendChild(scriptElement);
    }

    const downloadLogButton = document.createElement('button');
    downloadLogButton.textContent = 'Access Log';
    document.body.appendChild(downloadLogButton);

    showTextButton.textContent = "Start Experiment";
    showTextButton.addEventListener('click', function() {
        if (timerStart !== null) {
            const timerEnd = new Date();
            const elapsedSeconds = (timerEnd - timerStart) / 1000;
            logMessages.push("Time elapsed for task " + (currentIndex + 1) + ": " + elapsedSeconds + " seconds");
            timerStart = null;
        }
    
        if (currentIndex < currentTaskData.length - 1) { // Use currentTaskData here
            currentIndex++; 
            timerStart = new Date();
            displayTask(currentIndex);
    
            if (currentIndex < currentTaskData.length - 1) { // Use currentTaskData here
                this.textContent = "Next Task";
            } else {
                this.textContent = "Finish Experiment";
            }
        } else {
            this.disabled = true;
        }
    });
    
    function displayTask(index) {
        const newParagraph = document.createElement('p');
        newParagraph.innerHTML = currentTaskData[index];
        newParagraph.className = 'text-section';
        displayTextContainer.appendChild(newParagraph);
    }        

    downloadLogButton.addEventListener('click', () => {
        const logBlob = new Blob([logMessages.join('\n')], {type: 'text/plain'});
        const logUrl = URL.createObjectURL(logBlob);
        const downloadLink = document.createElement('a');
        downloadLink.href = logUrl;
        downloadLink.download = 'experiment-log.txt';
        downloadLink.click();
    });
});
