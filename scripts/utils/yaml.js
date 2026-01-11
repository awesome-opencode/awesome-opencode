/**
 * YAML file reading utilities for awesome-opencode
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { glob } = require('glob');

/**
 * Read and parse a single YAML file
 * @param {string} filePath - Path to YAML file
 * @returns {object} Parsed YAML object
 */
function readYamlFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return yaml.load(content, { filename: filePath });
  } catch (e) {
    throw new Error(`Failed to parse ${filePath}: ${e.message}`);
  }
}

/**
 * Read all YAML files from a directory
 * @param {string} dirPath - Directory containing YAML files
 * @returns {Promise<object[]>} Array of parsed YAML objects with _filePath metadata
 */
async function readYamlDir(dirPath) {
  const pattern = path.join(dirPath, '*.yaml').replace(/\\/g, '/');
  const files = await glob(pattern);
  
  return files.map(file => ({
    ...readYamlFile(file),
    _filePath: file,
    _fileName: path.basename(file, '.yaml')
  }));
}

/**
 * Convert a name to a filename-safe slug
 * @param {string} name - Entry name
 * @returns {string} Slugified filename (without extension)
 */
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = { readYamlFile, readYamlDir, slugify };
