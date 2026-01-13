/**
 * Decorate the accordion block
 * @param {Element} block the accordion block
 */
export default function decorate(block) {
  // Get all rows (each row is an accordion item)
  const rows = [...block.children];

  // Clear the block and rebuild with accordion structure
  block.innerHTML = '';

  rows.forEach((row) => {
    // Get the two columns (title and content)
    const cols = [...row.children];
    if (cols.length < 2) return; // Skip incomplete rows

    const titleCol = cols[0];
    const contentCol = cols[1];

    // Extract title and content
    const titleElement = titleCol.querySelector('p');
    const contentElement = contentCol.querySelector('p');

    if (!titleElement || !contentElement) return;

    const title = titleElement.textContent.trim();
    const content = contentElement.textContent.trim();

    // Create accordion item structure
    const item = document.createElement('div');
    item.className = 'accordion-item';

    // Create button (header) with title
    const button = document.createElement('button');
    button.className = 'accordion-button';
    button.setAttribute('aria-expanded', 'false');
    button.type = 'button';

    const buttonText = document.createElement('span');
    buttonText.textContent = title;
    button.append(buttonText);

    // Create content panel
    const panel = document.createElement('div');
    panel.className = 'accordion-panel';
    panel.setAttribute('aria-hidden', 'true');

    const panelContent = document.createElement('p');
    panelContent.textContent = content;
    panel.append(panelContent);

    // Add click handler
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      // Toggle this item
      button.setAttribute('aria-expanded', !isExpanded);
      panel.setAttribute('aria-hidden', isExpanded);
      item.classList.toggle('active', !isExpanded);
    });

    // Assemble the item
    item.append(button, panel);
    block.append(item);
  });
}
