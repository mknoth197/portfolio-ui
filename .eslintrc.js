module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',          // Use recommended ESLint rules
      'plugin:react/recommended',    // Use recommended React rules
      'plugin:@typescript-eslint/recommended', // If using TypeScript
      'plugin:jsx-a11y/recommended', // Accessibility checks
      'plugin:prettier/recommended', // Integrate Prettier with ESLint
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,                    // Enable JSX
      },
      ecmaVersion: 12,                // Use the latest ECMAScript version
      sourceType: 'module',           // Allow the use of imports
    },
    plugins: [
      'react',                        // Add React plugin
      'jsx-a11y',                     // Add accessibility plugin
      '@typescript-eslint',           // Add TypeScript plugin (if using TypeScript)
      'prettier',                     // Add Prettier plugin for code formatting
    ],
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+
      'react/prop-types': 'off',         // Disable prop-types as we're using TypeScript (optional)
      'no-console': 'warn',              // Warn on console statements
      'no-unused-vars': 'warn',          // Warn on unused variables
      'prettier/prettier': 'error',      // Prettier rules as ESLint errors
      'jsx-a11y/anchor-is-valid': 'off', // Disable anchor validation (for Next.js)
    },
    settings: {
      react: {
        version: 'detect',              // Automatically detect the React version
      },
    },
  };