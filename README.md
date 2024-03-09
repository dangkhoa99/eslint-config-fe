# @dk/eslint-config-fe

## Installation

1.  Install @dk/eslint-config-fe:

    ```
    npm install --save-dev git+https://github.com/dangkhoa99/eslint-config-fe.git
    ```

2.  Add @dk/eslint-config-fe to your ESLint configuration [eslintrc].

    - eslintrc: Add `require.resolve("@dk/eslint-config-fe")` to the "extends" array in your `.eslintrc.*` file. Make sure to put it **last,** so it gets the chance to override other configs.

           ```json
           {
             "extends": [
                "some-other-config-you-use",
                require.resolve("@dk/eslint-config-fe")
             ]
           }
           ```
