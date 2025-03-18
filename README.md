<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
    - [Cookiecutter template](#cookiecutter-template)
    - [Backend Environment Variables](#backend-environment-variables)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Support](#support)

---

## About

<table>
<tr>
<td>

Habit Rabbit is a web application for creating and tracking progress on your habits.

Key features of **Habit Rabbit**:

- Create Habits
- Track Habits

</td>
</tr>
</table>

### Built With

- [Node.js](https://www.npmjs.com/package/node)
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Playwright](https://playwright.dev/)

## Getting Started

### Prerequisites

Install Node and NPM
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm


### Usage

#### Install Dependencies

```sh
 npm install
```

#### Start Local Development
```sh
  npm run dev
```


#### Backend Environment Variables


| Name                       | Description                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| DATABASE_URL               | The local database url.                                                     |
| JWT_SECRET_KEY             | Repo slug must match the GitHub repo URL slug part                          |

> You can generate a the jwt secret key here: https://jwtsecret.com/generate

## Roadmap

- Create Habit from Frontend
- View Habit List from Frontend
- View Habit Detail from Frontend
- Delete Habit from Frontend

  
## Support

Reach out to the maintainer at one of the following places:

- [GitHub discussions](https://github.com/mitchellgenova/HabitRabbit/discussions)
