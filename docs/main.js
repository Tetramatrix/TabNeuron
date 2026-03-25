/**
 * Scroll and Toggle Functions for TabNeuron Documentation
 */

/**
 * Scroll to a section with smart positioning
 * @param {string} targetId - The ID of the target section (with or without #)
 */
function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId.replace('#', ''));
    if (targetElement) {
        // If target is an H2, toggle its section open first
        if (targetElement.tagName === 'H2') {
            toggleSection(targetElement);
        }

        // Check if the element is already visible
        const rect = targetElement.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        // If the element is visible but at the top, scroll so it's in the center
        if (isVisible && rect.top < window.innerHeight * 0.1) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else {
            // Otherwise normal scrolling
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

/**
 * Alternative function that always centers when the element is already visible
 * @param {string} targetId - The ID of the target section (with or without #)
 */
function smartScrollToSection(targetId) {
    const targetElement = document.getElementById(targetId.replace('#', ''));
    if (targetElement) {
        // If target is an H2, toggle its section open first
        if (targetElement.tagName === 'H2') {
            toggleSection(targetElement);
        }

        const rect = targetElement.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInViewport) {
            // If the element is already visible, center it
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else {
            // Otherwise scroll to the beginning of the element
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

/**
 * Toggle the visibility of a section associated with an H2 element
 * @param {HTMLElement} h2Element - The H2 element that was clicked
 */
function toggleSection(h2Element) {
    h2Element.classList.toggle('collapsed');

    // Find the next section element following this h2 (skip any intermediate elements, stop at next H2)
    let nextElement = h2Element.nextElementSibling;
    while (nextElement && nextElement.tagName !== 'SECTION' && nextElement.tagName !== 'H2') {
        nextElement = nextElement.nextElementSibling;
    }

    // Toggle the section if found
    if (nextElement && nextElement.tagName === 'SECTION') {
        nextElement.classList.toggle('collapsed');

        // Update arrows in this section
        const arrows = nextElement.querySelectorAll('.nav-arrow-down, .nav-arrow-up');
        arrows.forEach(function(arrow) {
            if (nextElement.classList.contains('collapsed')) {
                arrow.textContent = '+';  // collapsed = plus
            } else {
                arrow.textContent = '−';  // open = minus
            }
        });
    }
}

/**
 * Toggle the visibility of a div associated with an H3 element
 * @param {HTMLElement} h3Element - The H3 element that was clicked
 */
function toggleH3Section(h3Element) {
    h3Element.classList.toggle('collapsed');

    // Find the next div element following this h3
    let nextElement = h3Element.nextElementSibling;
    while (nextElement && nextElement.tagName !== 'DIV' && nextElement.tagName !== 'H3' && nextElement.tagName !== 'H2') {
        nextElement = nextElement.nextElementSibling;
    }

    // Toggle the div if found
    if (nextElement && nextElement.tagName === 'DIV') {
        nextElement.classList.toggle('collapsed');
    }
}

/**
 * Toggle section from arrow button click
 * @param {HTMLElement} arrowElement - The arrow span that was clicked
 */
function toggleSectionFromArrow(arrowElement) {
    // Find the parent cta-box
    const ctaBox = arrowElement.closest('.cta-box');
    if (!ctaBox) return;

    // Find the parent section of the cta-box
    const parentSection = ctaBox.closest('section');
    if (!parentSection) return;

    // Toggle the section
    parentSection.classList.toggle('collapsed');

    // Update arrow symbols in this cta-box only
    const downArrow = ctaBox.querySelector('.nav-arrow-down');
    const upArrow = ctaBox.querySelector('.nav-arrow-up');

    if (parentSection.classList.contains('collapsed')) {
        if (downArrow) downArrow.textContent = '+';  // collapsed = plus
        if (upArrow) upArrow.textContent = '+';
    } else {
        if (downArrow) downArrow.textContent = '−';  // open = minus
        if (upArrow) upArrow.textContent = '−';
    }

    // Also update the H2 symbol if there is one in this section
    const h2InSection = parentSection.previousElementSibling;
    if (h2InSection && h2InSection.tagName === 'H2') {
        if (parentSection.classList.contains('collapsed')) {
            h2InSection.classList.add('collapsed');
        } else {
            h2InSection.classList.remove('collapsed');
        }
    }
}

/**
 * Initialize collapsible sections
 */
(function() {
    // Collapse all sections by default
    const allSections = document.querySelectorAll('main section');
    allSections.forEach(function(section) {
        section.classList.add('collapsed');
    });

    // Collapse all H3 divs by default
    const h3Elements = document.querySelectorAll('main h3');
    h3Elements.forEach(function(h3) {
        // Skip if data-no-toggle is set
        if (h3.getAttribute('data-no-toggle') === 'true') return;

        h3.classList.add('collapsible');
        // Find and collapse the next div
        let nextElement = h3.nextElementSibling;
        while (nextElement && nextElement.tagName !== 'DIV' && nextElement.tagName !== 'H3' && nextElement.tagName !== 'H2') {
            nextElement = nextElement.nextElementSibling;
        }
        if (nextElement && nextElement.tagName === 'DIV') {
            nextElement.classList.add('collapsed');
        }
    });

    // Set all arrows to + (collapsed state)
    const allArrows = document.querySelectorAll('.nav-arrow-down, .nav-arrow-up');
    allArrows.forEach(function(arrow) {
        arrow.textContent = '+';
    });

    // Initialize H2 collapsible functionality
    const h2Elements = document.querySelectorAll('main h2');
    h2Elements.forEach(function(h2) {
        // Skip if data-no-toggle is set
        if (h2.getAttribute('data-no-toggle') === 'true') return;

        h2.classList.add('collapsible');
        h2.addEventListener('click', function(e) {
            // Don't toggle if clicking on a link inside the h2
            if (e.target.tagName !== 'A') {
                toggleSection(h2);
            }
        });
    });

    // Initialize H3 collapsible functionality (toggle next div)
    h3Elements.forEach(function(h3) {
        // Skip if data-no-toggle is set
        if (h3.getAttribute('data-no-toggle') === 'true') return;

        h3.addEventListener('click', function(e) {
            // Don't toggle if clicking on a link inside the h3
            if (e.target.tagName !== 'A') {
                toggleH3Section(h3);
            }
        });
    });
})();
