# Chemin du projet
$projectPath = "C:\Users\HP\Desktop\PROJET DE DEVELOPPEMENT DE BASE DE COMPOSANT ET SERVICES WEB"

# Définir les chemins des dossiers
$frontendPath = Join-Path $projectPath "frontend"
$backendPath = Join-Path $projectPath "backend"

# Créer les dossiers nécessaires
New-Item -Path $frontendPath -ItemType Directory -Force
New-Item -Path $backendPath -ItemType Directory -Force

# Déplacer les fichiers dans les dossiers appropriés
Move-Item -Path (Join-Path $projectPath "index.html") -Destination $frontendPath -Force
Move-Item -Path (Join-Path $projectPath "articles.html") -Destination $frontendPath -Force
Move-Item -Path (Join-Path $projectPath "users.html") -Destination $frontendPath -Force
Move-Item -Path (Join-Path $projectPath "index.js") -Destination $frontendPath -Force
Move-Item -Path (Join-Path $projectPath "articles.js") -Destination $frontendPath -Force
Move-Item -Path (Join-Path $projectPath "users.js") -Destination $frontendPath -Force
Move-Item -Path (Join-Path $projectPath "app.js") -Destination $backendPath -Force

# Créer un dossier pour les routes et déplacer les fichiers
$routesPath = Join-Path $backendPath "routes"
New-Item -Path $routesPath -ItemType Directory -Force
Move-Item -Path (Join-Path $projectPath "routes/articles.js") -Destination $routesPath -Force
Move-Item -Path (Join-Path $projectPath "routes/users.js") -Destination $routesPath -Force
# Chemin du projet
$projectPath = "C:\Users\HP\Desktop\PROJET DE DEVELOPPEMENT DE BASE DE COMPOSANT ET SERVICES WEB"

# Définir les chemins des dossiers
$frontendPath = Join-Path $projectPath "frontend"
$backendPath = Join-Path $projectPath "backend"

# Créer les dossiers nécessaires
New-Item -Path $frontendPath -ItemType Directory -Force
New-Item -Path $backendPath -ItemType Directory -Force

# Déplacer les fichiers dans les dossiers appropriés
Move-Item -Path (Join-Path $projectPath "index.html") -Destination $frontendPath -Force
Move-Item -Path (Join-Path $projectPath "articles.html") -Destination $frontendPath -Force
Move-Item -Path (Join-Path $projectPath "users.html") -Destination $frontendPath -Force
Move-Item -Path (Join-Path $projectPath "index.js") -Destination $frontendPath -Force
Move-Item -Path (Join-Path $projectPath "articles.js") -Destination $frontendPath -Force
Move-Item -Path (Join-Path $projectPath "users.js") -Destination $frontendPath -Force
Move-Item -Path (Join-Path $projectPath "app.js") -Destination $backendPath -Force

# Créer un dossier pour les routes et déplacer les fichiers
$routesPath = Join-Path $backendPath "routes"
New-Item -Path $routesPath -ItemType Directory -Force
Move-Item -Path (Join-Path $projectPath "routes/articles.js") -Destination $routesPath -Force
Move-Item -Path (Join-Path $projectPath "routes/users.js") -Destination $routesPath -Force
