// Function to load project modals dynamically
async function loadProjectModals() {
    const modalContainer = document.createElement('div');
    modalContainer.id = 'project-modals-container';

    try {
        // Load all project modals
        const projectFiles = [
            'projects/project1-modal.html',
            'projects/project2-modal.html',
            'projects/project3-modal.html',
            'projects/project4-modal.html'
        ];

        for (const file of projectFiles) {
            const response = await fetch(file);
            if (response.ok) {
                const content = await response.text();
                modalContainer.innerHTML += content;
            } else {
                console.warn(`Failed to load ${file}`);
            }
        }

        // Add the modal container to the document
        document.body.appendChild(modalContainer);

        // Initialize modal event listeners after loading
        initializeModalEventListeners();

    } catch (error) {
        console.error('Error loading project modals:', error);
    }
}

// Initialize modal event listeners
function initializeModalEventListeners() {
    // Close modal when clicking the X
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.onclick = function () {
            closeModal(this.closest('.modal'));
        }
    });

    // Close modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.style.display === 'block') {
                    closeModal(modal);
                }
            });
        }
    });
}

// Project Modal Functions
function openModal(projectId) {
    const modal = document.getElementById(projectId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
}

function closeModal(modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Load modals when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    loadProjectModals();
});
