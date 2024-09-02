// script.js

document.addEventListener('DOMContentLoaded', function () {
    const nextBtns = document.querySelectorAll('.btn-next');
    const prevBtns = document.querySelectorAll('.btn-prev');
    const steps = document.querySelectorAll('.step');
    const formSteps = document.querySelectorAll('.form-step');

    let currentStep = 0;

    nextBtns.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < formSteps.length - 1) {
                formSteps[currentStep].classList.remove('active');
                steps[currentStep].classList.remove('active');
                currentStep++;
                formSteps[currentStep].classList.add('active');
                steps[currentStep].classList.add('active');
            }
        });
    });

    prevBtns.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 0) {
                formSteps[currentStep].classList.remove('active');
                steps[currentStep].classList.remove('active');
                currentStep--;
                formSteps[currentStep].classList.add('active');
                steps[currentStep].classList.add('active');
            }
        });
    });
});
