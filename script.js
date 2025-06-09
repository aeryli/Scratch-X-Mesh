// script.js

const uploadForm = document.getElementById('uploadForm');
const txtFile = document.getElementById('txtFile');
const statusElement = document.getElementById('status');

uploadForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const file = txtFile.files[0];
  if (!file) {
    statusElement.textContent = 'Please select a file.';
    return;
  }

  const reader = new FileReader();
  reader.onload = async (e) => {
    const fileContent = e.target.result;

    // --- Interaction with GitHub API (using Github.js) ---
    // You'll need to install Github.js and include it in your project.
    // Replace placeholders with your GitHub details and a Personal Access Token (PAT).
    // Be mindful of security when handling sensitive information like PATs.

    const github = new Github({
      token: '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' // Replace with your PAT
    });
    const repo = github.getRepo('Aeryli', 'Scratch-X-Mesh'); // Replace with your repo details

    try {
      await repo.write(
        'main', // e.g., 'main'
        `/${Metadata.txt}`, // Path and filename in your repo
        fileContent,
        'THRU SCRATCH' // Commit message
      );
      statusElement.textContent = 'File uploaded successfully!';
    } catch (error) {
      statusElement.textContent = `Error uploading file: ${error.message}`;
      console.error(error);
    }
    // --- End of GitHub API Interaction ---
  };
  reader.readAsText(file);
});
