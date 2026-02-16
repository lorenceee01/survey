function startSurvey() {
            document.getElementById('mainSection').classList.add('hidden');
            document.getElementById('commentSection').classList.add('hidden');
            document.getElementById('surveyQuestionSection').classList.remove('hidden');
        }

function startProcessing () {
            document.getElementById('surveyQuestionSection').classList.add('hidden');
            document.getElementById('processingSection').classList.remove('hidden');
        }