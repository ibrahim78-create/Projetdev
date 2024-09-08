document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/articles')
        .then(response => response.json())
        .then(data => {
            const articlesDiv = document.getElementById('articles');
            data.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.className = 'article';
                articleDiv.innerHTML = <h2></h2><p></p>;
                articlesDiv.appendChild(articleDiv);
            });
        })
        .catch(error => console.error('Error fetching articles:', error));
});
