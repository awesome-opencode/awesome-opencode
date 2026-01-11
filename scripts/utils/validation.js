/**
 * Schema validation utilities for awesome-opencode
 */

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

// Initialize AJV with all errors option
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// Load schema lazily (on first use)
let validateFn = null;

/**
 * Get the compiled validation function
 * @returns {Function} AJV validate function
 */
function getValidator() {
  if (!validateFn) {
    const schemaPath = path.join(__dirname, '../../data/schema.json');
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    validateFn = ajv.compile(schema);
  }
  return validateFn;
}

/**
 * Validate an entry against the schema
 * @param {object} data - Parsed YAML data
 * @param {string} filePath - File path for error messages
 * @returns {object} { valid: boolean, errors: array|null }
 */
function validateEntry(data, filePath) {
  const validate = getValidator();
  
  // Remove internal metadata fields before validation
  const cleanData = { ...data };
  delete cleanData._filePath;
  delete cleanData._fileName;
  
  const valid = validate(cleanData);
  
  if (!valid) {
    const errors = validate.errors.map(err => ({
      path: err.instancePath || '/',
      message: err.message,
      keyword: err.keyword,
      params: err.params
    }));
    return { valid: false, errors, filePath };
  }
  
  return { valid: true, errors: null, filePath };
}

/**
 * Format validation errors for display
 * @param {object} result - Result from validateEntry
 * @returns {string} Formatted error message
 */
function formatValidationErrors(result) {
  if (result.valid) return '';
  
  const lines = [`Validation failed for ${result.filePath}:`];
  for (const err of result.errors) {
    lines.push(`  - ${err.path}: ${err.message}`);
  }
  return lines.join('\n');
}

module.exports = { validateEntry, formatValidationErrors, getValidator };
