<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
    - [Install Dependencies](#install-dependencies)
    - [Start Local Development](#start-local-development)
    - [Environment Variables](#environment-variables)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Support](#support)

</details>

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


#### Environment Variables


| Name                       | Description                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| DATABASE_URL               | The local database url                                                      |
| AUTH_SECRET                | The jwt secret key for authentication between the FE and BE                 |

> You can generate a the jwt secret key here: https://jwtsecret.com/generate

## Roadmap

- Frontend
  - Create Habit
  - View Habit List
  - View Habit Detail
  - Delete Habit
- Backend
  - Optimize Queries
  - Unit tests
  
## Support

Reach out to the maintainer at one of the following places:

- [GitHub discussions](https://github.com/mitchellgenova/HabitRabbit/discussions)
