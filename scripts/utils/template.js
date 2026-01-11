/**
 * Template rendering utilities for awesome-opencode
 */

const fs = require('fs');
const path = require('path');

/**
 * Read the README template
 * @returns {string} Template content
 */
function readTemplate() {
  const templatePath = path.join(__dirname, '../../templates/README.template.md');
  return fs.readFileSync(templatePath, 'utf8');
}

/**
 * Replace a placeholder in the template
 * @param {string} template - Template content
 * @param {string} placeholder - Placeholder name (without braces)
 * @param {string} content - Content to insert
 * @returns {string} Updated template
 */
function replacePlaceholder(template, placeholder, content) {
  const pattern = new RegExp(`\\{\\{${placeholder}\\}\\}`, 'g');
  return template.replace(pattern, content);
}

/**
 * Generate HTML for a single entry
 * @param {object} entry - Parsed YAML data
 * @returns {string} HTML string for the details element
 */
function generateEntryHtml(entry) {
  // Determine link text based on URL type first
  let linkText = '🔗 <b>View Repository</b>';
  if (entry.repo.includes('gist.github.com')) {
    linkText = '🔗 <b>View Gist</b>';
  } else if (entry.repo.includes('/discussions/')) {
    linkText = '🔗 <b>View Discussion</b>';
  }

  // Extract owner/repo from URL for star badge (only for non-gist, non-discussion GitHub repos)
  // Use negative lookahead to exclude gist.github.com
  const isGist = entry.repo.includes('gist.github.com');
  const isDiscussion = entry.repo.includes('/discussions/');
  const repoMatch = entry.repo.match(/github\.com\/(?!gist\.)([^\/]+)\/([^\/]+)/);

  let summaryContent = `<b>${entry.name}</b>`;

  // Add star badge if it's a GitHub repo (not a gist or discussion)
  if (repoMatch && !isGist && !isDiscussion) {
    const owner = repoMatch[1];
    const repo = repoMatch[2].replace(/\.git$/, '').replace(/\/$/, '');
    const starBadge = `https://badgen.net/github/stars/${owner}/${repo}`;
    summaryContent += ` <img src="${starBadge}" height="14"/>`;
  }

  summaryContent += ` - <i>${entry.description}</i>`;
  
  return `<details>
  <summary>${summaryContent}</summary>
  <blockquote>
    ${entry.full_description}
    <br><br>
    <a href="${entry.repo}">${linkText}</a>
  </blockquote>
</details>`;
}

/**
 * Write the final README
 * @param {string} content - Generated README content
 */
function writeReadme(content) {
  const readmePath = path.join(__dirname, '../../README.md');
  fs.writeFileSync(readmePath, content, 'utf8');
}

module.exports = { 
  readTemplate, 
  replacePlaceholder, 
  generateEntryHtml, 
  writeReadme 
};
