// Firebase konfiguration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

import { login, signup, onAuthStateChanged } from './auth.js';

// DOM elementer
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginScreen = document.getElementById('login-screen');
const appContent = document.getElementById('app-content');

// Event listeners
document.getElementById('login-btn').addEventListener('click', handleLogin);
document.getElementById('signup-btn').addEventListener('click', handleSignup);

// Håndter login
async function handleLogin() {
  try {
    await login(emailInput.value, passwordInput.value);
  } catch (error) {
    alert('Login fejl: ' + error.message);
  }
}

// Håndter signup
async function handleSignup() {
  try {
    await signup(emailInput.value, passwordInput.value);
    alert('Bruger oprettet!');
  } catch (error) {
    alert('Opret bruger fejl: ' + error.message);
  }
}

// Auth state listener
onAuthStateChanged(user => {
  if (user) {
    loginScreen.style.display = 'none';
    appContent.style.display = 'block';
    initEditor();
  } else {
    loginScreen.style.display = 'grid';
    appContent.style.display = 'none';
  }
});

// Initialiser editor
function initEditor() {
  require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.30.1/min/vs' }});
  
  require(['vs/editor/editor.main'], function() {
    monaco.editor.create(document.getElementById('editor'), {
      value: '// Skriv din kode her\nfunction solution() {\n  // Din løsning\n}',
      language: 'javascript',
      theme: 'vs-dark',
      automaticLayout: true
    });
  });
}

// Indsend løsning
function submitSolution() {
  alert('Løsning indsendt!');
  // Her vil vi senere tilføje logik til at gemme løsningen
}

// Loading animation
function simulateLoading() {
  const steps = [
    'Loading components...',
    'Parsing syntax...',
    'Initializing editor...',
    'Ready'
  ];
  
  const status = document.querySelector('.status-bar span:last-child');
  steps.forEach((step, i) => {
    setTimeout(() => {
      status.innerHTML = i < steps.length - 1 
        ? `<span class="loading">⚙️</span> ${step}`
        : step;
    }, i * 800);
  });
}

// Initialiser app
document.addEventListener('DOMContentLoaded', () => {
  simulateLoading();
  setTimeout(() => {
    loginScreen.style.display = 'grid';
  }, 300);
});
