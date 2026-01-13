/**
 * Decorates the accordion block
 * @param {Element} block The accordion block element
 */
export default function decorate(block) {
  // Get all rows (each row is an accordion item)
  const items = [...block.children];
  
  items.forEach((item) => {
    // Each row has 2 divs: [0] = question/title, [1] = answer/content
    const title = item.children[0];
    const content = item.children[1];
    
    // Add classes for styling
    title.classList.add('accordion-title');
    content.classList.add('accordion-content');
    
    // Create button wrapper for the title
    const button = document.createElement('button');
    button.className = 'accordion-button';
    button.setAttribute('aria-expanded', 'false');
    
    // Wrap text in span for hover animation
    const textSpan = document.createElement('span');
    textSpan.innerHTML = title.innerHTML;
    button.appendChild(textSpan);
    
    // Replace title content with button
    title.innerHTML = '';
    title.appendChild(button);
    
    // Initially hide content
    content.style.display = 'none';
    
    // Add click handler
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
      // Close all other items
      items.forEach((otherItem) => {
        const otherButton = otherItem.querySelector('.accordion-button');
        const otherContent = otherItem.querySelector('.accordion-content');
        
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          otherContent.style.display = 'none';
        }
      });
      
      // Toggle current item
      if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        content.style.display = 'none';
      } else {
        button.setAttribute('aria-expanded', 'true');
        content.style.display = 'block';
      }
    });
    
    // Add class to item for styling
    item.classList.add('accordion-item');
  });
}
