function startProcessing() {
    // 1. Hide the survey and show the processing section
    document.getElementById('surveyQuestionSection').classList.add('hidden');
    document.getElementById('commentSection').classList.add('hidden');
    document.getElementById('processingSection').classList.remove('hidden');

    // 2. Initialize/Reset variables
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const steps = [
        document.getElementById('step-1'),
        document.getElementById('step-2'),
        document.getElementById('step-3')
    ];
    
    let progress = 0;
    const checkSvg = `<svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`;

    // 3. Reset UI State (in case user re-runs)
    progressBar.style.width = '0%';
    progressText.innerText = '0% complete';
    steps[1].classList.add('opacity-50');
    steps[2].classList.add('opacity-50');

    // 4. Start Interval
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + '%';
        progressText.innerText = progress + '% complete';

        // Logic for Step 2 (IP Check) starts at 20%
        if (progress === 20) {
            steps[1].classList.remove('opacity-50');
            steps[1].querySelector('.spinner').classList.remove('hidden');
        }
        if (progress === 50) {
            steps[1].querySelector('.status-icon').innerHTML = checkSvg;
        }

        // Logic for Step 3 (Stock Check) starts at 60%
        if (progress === 60) {
            steps[2].classList.remove('opacity-50');
            steps[2].querySelector('.spinner').classList.remove('hidden');
        }
        if (progress === 95) {
            steps[2].querySelector('.status-icon').innerHTML = checkSvg;
        }

        if (progress >= 100) {
            clearInterval(interval);
            progressText.innerText = "Processing Complete!";
            
            // Optional: Redirect after success
            // setTimeout(() => { window.location.href = "reward.html"; }, 1000);
        }
    }, 50); 
}