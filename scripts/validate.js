#!/usr/bin/env node
/**
 * Validate YAML files against the schema
 * Usage: node scripts/validate.js [file1.yaml] [file2.yaml] ...
 * If no files specified, validates all YAML files in data/
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const yaml = require('js-yaml');
const { validateEntry, formatValidationErrors } = require('./utils/validation');

const DATA_DIR = path.join(__dirname, '../data');

/**
 * Get all YAML files in the data directory
 * @returns {string[]} Array of file paths
 */
function getAllYamlFiles() {
  const pattern = path.join(DATA_DIR, '**/*.yaml');
  return glob.sync(pattern);
}

/**
 * Load and parse a YAML file
 * @param {string} filePath - Path to the YAML file
 * @returns {object|null} Parsed YAML object or null on error
 */
function loadYamlFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return yaml.load(content);
  } catch (err) {
    console.error(`Error reading ${filePath}: ${err.message}`);
    return null;
  }
}

/**
 * Validate a single file
 * @param {string} filePath - Path to the YAML file
 * @returns {boolean} True if valid, false otherwise
 */
function validateFile(filePath) {
  const data = loadYamlFile(filePath);
  if (!data) {
    return false;
  }

  const result = validateEntry(data, filePath);
  if (result.valid) {
    console.log(`✓ ${filePath}`);
  } else {
    console.error(formatValidationErrors(result));
  }

  return result.valid;
}

/**
 * Main validation function
 */
function main() {
  const args = process.argv.slice(2);
  let files = [];

  if (args.length > 0) {
    // Validate specified files
    files = args;
  } else {
    // Validate all YAML files in data/
    files = getAllYamlFiles();
  }

  if (files.length === 0) {
    console.log('No YAML files to validate.');
    process.exit(0);
  }

  console.log(`Validating ${files.length} YAML file(s)...\n`);

  let allValid = true;
  let validatedCount = 0;

  for (const file of files) {
    if (fs.existsSync(file)) {
      if (!validateFile(file)) {
        allValid = false;
      }
      validatedCount++;
    } else {
      console.warn(`⚠ File not found: ${file}`);
      allValid = false;
    }
  }

  console.log('');

  if (allValid) {
    console.log(`✓ All ${validatedCount} file(s) passed validation.`);
    process.exit(0);
  } else {
    console.error(`✗ Validation failed for ${validatedCount} file(s).`);
    process.exit(1);
  }
}

main();
