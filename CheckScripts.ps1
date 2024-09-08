# Définir le chemin de ton projet
$projectPath = "C:\users\HP\Desktop\PROJET DE DEVELOPPEMENT DE BASE DE COMPOSANT ET SERVICES WEB"

# Définir les termes de recherche pour les commandes de suppression
$searchTerms = @("rm ", "del ", "unlink ")

# Fonction pour rechercher les termes dans les fichiers
function Search-TermsInFiles {
    param (
        [string]$path,
        [string[]]$terms
    )

    # Obtenir tous les fichiers du projet
    $files = Get-ChildItem -Path $path -Recurse -File -ErrorAction SilentlyContinue

    foreach ($file in $files) {
        # Exclure les fichiers .lock et les fichiers non accessibles
        if ($file.Extension -eq ".lock" -or $file.Attributes -match "Hidden, System") {
            continue
        }

        foreach ($term in $terms) {
            try {
                # Vérifier si le fichier est accessible avant d'effectuer la recherche
                if ((Test-Path $file.FullName) -and (-not (Test-FileLocked $file.FullName))) {
                    $searchResults = Select-String -Path $file.FullName -Pattern $term -Quiet
                    if ($searchResults) {
                        Write-Output "Le terme '$term' trouvé dans le fichier : $($file.FullName)"
                    }
                }
            } catch {
                Write-Output "Erreur lors de la lecture du fichier : $($file.FullName). $_"
            }
        }
    }
}

# Fonction pour vérifier si un fichier est verrouillé
function Test-FileLocked {
    param (
        [string]$filePath
    )

    $fileLocked = $false
    try {
        $file = [System.IO.File]::Open($filePath, 'Open', 'Read', 'None')
        $file.Close()
    } catch {
        $fileLocked = $true
    }
    return $fileLocked
}

# Exécuter la fonction pour vérifier les fichiers du projet
Search-TermsInFiles -path $projectPath -terms $searchTerms
