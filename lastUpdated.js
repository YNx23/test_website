// Fetch the last commit date from the GitHub API
fetch('https://api.github.com/repos/YNx23/test_website/commits?per_page=1')
  .then(response => response.json())
  .then(data => {
    const lastUpdated = new Date(data[0].commit.author.date);
    document.getElementById('lastUpdated').textContent = lastUpdated.toDateString();
  })
  .catch(error => {
    console.error('Error fetching last commit date:', error);
  });
