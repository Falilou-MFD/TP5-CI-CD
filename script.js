// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Logique pour le graphique des ventes (Chart.js)
    const salesCtx = document.getElementById('salesChart');
    if (salesCtx) {
        new Chart(salesCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
                datasets: [{
                    label: 'Ventes Mensuelles (XOF)',
                    data: [120000, 150000, 100000, 180000, 200000, 160000, 220000, 190000, 250000, 230000, 270000, 300000],
                    backgroundColor: '#007bff',
                    borderColor: '#007bff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Montant (XOF)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Mois'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.raw.toLocaleString('fr-FR') + ' XOF';
                            }
                        }
                    }
                }
            }
        });
    }

    // Ajoutez ici d'autres logiques JavaScript pour l'interactivité
    // Par exemple, gestion des clics sur les boutons, filtres de tableau, etc.

    // Exemple : Faire en sorte que les liens de navigation défilent vers la section
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Supprime la classe active de tous les liens
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
            });
            // Ajoute la classe active au lien cliqué
            this.classList.add('active');


            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajustez si vous avez une barre de navigation fixe
                    behavior: 'smooth'
                });
            }
        });
    });

    // Pour le responsive des tableaux (ajouter data-label)
    const tableRows = document.querySelectorAll('table tbody tr');
    tableRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const headers = row.closest('table').querySelectorAll('th');
        cells.forEach((cell, index) => {
            if (headers[index]) {
                cell.setAttribute('data-label', headers[index].innerText + ':');
            }
        });
    });

});