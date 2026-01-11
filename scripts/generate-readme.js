#!/usr/bin/env node

/**
 * Generate README.md from YAML files
 * Reads all category YAML files, validates them, sorts alphabetically,
 * generates HTML, and writes the final README.md
 */

const fs = require('fs');
const path = require('path');
const { readYamlDir } = require('./utils/yaml');
const { validateEntry, formatValidationErrors } = require('./utils/validation');
const { readTemplate, replacePlaceholder, generateEntryHtml, writeReadme } = require('./utils/template');

// Category processing order
const CATEGORIES = ['plugins', 'themes', 'agents', 'projects', 'resources'];

// Placeholder names for each category
const CATEGORY_PLACEHOLDERS = {
  plugins: 'PLUGINS',
  themes: 'THEMES',
  agents: 'AGENTS',
  projects: 'PROJECTS',
  resources: 'RESOURCES'
};

/**
 * Generate HTML for a single category
 * @param {string} categoryName - Category directory name
 * @returns {Promise<string>} Generated HTML for all entries in the category
 */
async function generateCategorySection(categoryName) {
  const categoryPath = path.join(__dirname, '../data', categoryName);

  let entries = [];
  let errors = [];

  try {
    entries = await readYamlDir(categoryPath);
  } catch (err) {
    // If directory doesn't exist, return empty string
    if (err.code === 'ENOENT') {
      return { html: '', count: 0, errors: [] };
    }
    // Re-throw other errors
    throw err;
  }

  // Validate and filter entries
  const validEntries = [];
  for (const entry of entries) {
    const result = validateEntry(entry, entry._filePath || path.join(categoryPath, `${entry.name || 'unknown'}.yaml`));
    
    if (result.valid) {
      validEntries.push(entry);
    } else {
      const errorMsg = formatValidationErrors(result);
      errors.push(errorMsg);
      console.error(errorMsg);
    }
  }

  // Sort alphabetically by name (case-insensitive)
  validEntries.sort((a, b) => {
    const nameA = (a.name || '').toLowerCase();
    const nameB = (b.name || '').toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Generate HTML for each entry
  const htmlParts = validEntries.map(entry => generateEntryHtml(entry));

  // Join with double newlines for proper spacing
  const html = htmlParts.join('\n\n');

  return { html, count: validEntries.length, errors };
}

/**
 * Main function to generate the README
 */
async function main() {
  console.log('Starting README generation...\n');

  // Read template
  let template;
  try {
    template = readTemplate();
    console.log('Template loaded successfully');
  } catch (err) {
    throw new Error(`Failed to read template: ${err.message}`);
  }

  // Process each category in order
  const results = {};
  let totalEntries = 0;
  let allErrors = [];

  for (const category of CATEGORIES) {
    const placeholder = CATEGORY_PLACEHOLDERS[category];
    console.log(`Processing ${category}...`);

    try {
      const result = await generateCategorySection(category);
      results[placeholder] = result.html;
      totalEntries += result.count;
      allErrors = allErrors.concat(result.errors);

      if (result.count > 0) {
        console.log(`  - Found ${result.count} valid entries`);
      } else {
        console.log(`  - No entries found`);
      }
    } catch (err) {
      console.error(`  - Error processing ${category}: ${err.message}`);
      results[placeholder] = '';
    }
  }

  // Replace each placeholder in template
  let content = template;
  for (const [placeholder, html] of Object.entries(results)) {
    content = replacePlaceholder(content, placeholder, html);
  }

  // Write final README
  try {
    writeReadme(content);
    console.log('\nREADME.md written successfully');
  } catch (err) {
    throw new Error(`Failed to write README.md: ${err.message}`);
  }

  // Log summary
  const errorCount = allErrors.length;
  if (errorCount > 0) {
    console.log(`\n⚠️  Generated README.md with ${totalEntries} entries across ${CATEGORIES.length} categories`);
    console.log(`   ${errorCount} validation error(s) were logged (affected entries were skipped)`);
  } else {
    console.log(`\n✅ Generated README.md with ${totalEntries} entries across ${CATEGORIES.length} categories`);
  }

  return { totalEntries, categoryCount: CATEGORIES.length, errorCount };
}

// Execute main function
main()
  .then(({ totalEntries, categoryCount, errorCount }) => {
    process.exit(errorCount > 0 ? 0 : 0);
  })
  .catch(err => {
    console.error('\n❌ Generation failed:', err.message);
    process.exit(1);
  });
