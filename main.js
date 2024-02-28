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
    let checkboxStatusLogged = false;

    let aiOption = '';
    let currentTaskData;
    
    if (taskDescription && taskDescription.length > 0) {
        descriptionElement.innerHTML = `<p>${taskDescription[0]}</p>`;
    }

    showTextButton.style.display = 'none';

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
    
            // Create and append text paragraph
            const textParagraph = document.createElement('p');
            textParagraph.id = 'terms';
            textParagraph.textContent = 'By participating in this experiment, you consent to being recorded via screen capture for research and analysis purposes. Your participation is voluntary, and all data collected will be used anonymously and solely for research purposes. Your personal information will be kept confidential and will not be shared with any third parties without your explicit consent. If you have any concerns about privacy or data usage, please let us know before proceeding.';
            textParagraph.style.fontStyle = 'italic';
            textParagraph.style.marginLeft = "12%";
            textParagraph.style.marginRight = "12%";
            textParagraph.style.marginTop = '2%';
            displayTextContainer.appendChild(textParagraph);
    
            // Create and append checkbox and text
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'experimentCheckbox';
            checkbox.style.marginLeft = '10px'; // Add padding to the right side of the checkbox

            const label = document.createElement('label');
            label.htmlFor = 'experimentCheckbox';
            label.textContent = 'I agree to the terms and conditions';
            label.style.marginLeft = '12%';
    
            displayTextContainer.appendChild(label);
            displayTextContainer.appendChild(checkbox);
    
            showTextButton.style.display = '';
        } else {
            alert('Please enter your name, the date, and choose an AI option to start the experiment.');
        }
    });
    

    // Event listener for the "With AI" option
    withAIInput.addEventListener('click', () => {
        loadScript('Advertisement_tasks.js');
    });

    // Event listener for the "Without AI" option
    withoutAIInput.addEventListener('click', () => {
        loadScript('Robot_tasks.js');
    });

    // Function to dynamically load JavaScript file
    function loadScript(scriptName) {
        const scriptElement = document.createElement('script');
        scriptElement.src = scriptName;
        scriptElement.onload = function() {
            if (scriptName === "Advertisement_tasks.js") {
                currentTaskData = advertisement_tasks;
                if (aiOption === "With AI") {
                    displayTask(0);
                }
            } else if (scriptName === "Robot_tasks.js") {
                currentTaskData = robot_tasks;
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
    downloadLogButton.style.display = 'none'; // Initially hide the button
    document.body.appendChild(downloadLogButton);

    showTextButton.textContent = "Start Experiment";
    showTextButton.style.marginLeft = '45%'
    showTextButton.addEventListener('click', function() {
        if (timerStart !== null) {
            const timerEnd = new Date();
            const elapsedSeconds = (timerEnd - timerStart) / 1000;
            logMessages.push("Time elapsed for task " + (currentIndex + 1) + ": " + elapsedSeconds + " seconds");
            timerStart = null;
        }
    
       // Remove the checkbox and its label from the displayTextContainer
    const checkboxToRemove = document.getElementById('experimentCheckbox');
    const labelToRemove = document.querySelector('label[for="experimentCheckbox"]');
    const textToRemove = document.getElementById('terms');
    if(textToRemove){
        displayTextContainer.removeChild(textToRemove);
    }
    if (checkboxToRemove) {
        displayTextContainer.removeChild(checkboxToRemove);
    }
    if (labelToRemove) {
        displayTextContainer.removeChild(labelToRemove);
    }

    if (!checkboxStatusLogged) {
        const checkboxChecked = checkboxToRemove && checkboxToRemove.checked ? 'Checked' : 'Unchecked';
        logMessages.push(`Consent given to terms and conditions: ${checkboxChecked}`);
        checkboxStatusLogged = true;
    }
    
    if (currentIndex < currentTaskData.length - 1) { // Use currentTaskData here
        currentIndex++; 
        timerStart = new Date();
        displayTask(currentIndex);

        if (currentIndex < currentTaskData.length - 1) { // Use currentTaskData here
            this.textContent = "Next Task";
        } else {
            this.textContent = "Finish Experiment";
            downloadLogButton.style.display = ''; // Show the button
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
