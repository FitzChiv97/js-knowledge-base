## Basic Format

```
type: short description
```
```
feat: add basic HTML structure
fix: correct navbar alignment
style: format CSS spacing
```
### Common Commit Types
| Type       | When to Use It                         |
| ---------- | -------------------------------------- |
| `feat`     | New feature                            |
| `fix`      | Bug fix                                |
| `style`    | Formatting (no logic change)           |
| `refactor` | Improve code without changing behavior |
| `docs`     | Documentation changes                  |
| `chore`    | Setup, configs, dependencies           |
| `test`     | Adding/modifying tests                 |

### Examples From Start to Finish
When you create the project: `chore: initialize project`

Add index.html: `feat: add initial HTML structure`

Add CSS file: `feat: add basic styling`

Fix a layout issue: `fix: correct flexbox alignment in header`

Clean up code: `refactor: simplify navigation markup`


## How Often Should You Commit?
> Commit after every meaningful change!

## Extra Tips (Very Important)
### Keep messages short but meaningful 

Good: `feat: add login form validation`

Bad: `did some stuff`

### Use present tense
Say: `add button`

Not: `added button`

### First line under 50 characters (best practice)
If you need more explanation:

```
feat: add user authentication

Implements JWT-based login and registration.
Includes error handling and validation.
```

Your finished project might look like:
```
chore: initialize project
feat: add basic HTML structure
feat: add navigation section
feat: add main layout styling
feat: implement responsive design
feat: add form validation
fix: resolve mobile overflow issue
refactor: simplify CSS structure
docs: update README
```

## One-Sentence Rule

If a user opens the website and notices a difference → ***not refactor**

If a user sees zero difference but your code is cleaner → ***refactor***

If it's just formatting → **style**

## Clean Mental Model

Think of it like this:

🧹 `style` - Cleaning the code formatting.

🧠 `refactor` - Reorganizing the furniture inside the room without changing how the room looks.

🎨 `Visual changes` Repainting the room (UI) → usually `feat` (or `fix`).

## Final Ultra-Simple Rule
| If it changes           | Use        |
| ----------------------- | ---------- |
| User experience         | `feat`     |
| Bug behavior            | `fix`      |
| Internal structure only | `refactor` |
| Formatting only         | `style`    |
