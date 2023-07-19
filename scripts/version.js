const fs = require("fs")
const inquirer = require("inquirer")
const semVer = require("semver")
const simpleGit = require("simple-git")

const data = {}

/**
 * Prepare variables for version bumping.
 */
const packageJson = JSON.parse(fs.readFileSync("package.json").toString())
const version = {
  current: packageJson.version,
  nextMajor: semVer.inc(packageJson.version, "major"),
  nextMinor: semVer.inc(packageJson.version, "minor"),
  nextPatch: semVer.inc(packageJson.version, "patch"),
}

askForVersion()
  .then((bump) => {
    data.version = semVer.inc(packageJson.version, bump)
    return updateVersion()
  })
  .catch((err) => {
    console.log(err, err.stack)
  })

/**
 * @description Prompts a message in the console to get the new version tag.
 *
 * @returns {Promise}
 */
function askForVersion() {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt({
        type: "list",
        name: "bump",
        message: "How would you like to bump it?",
        choices: [
          { value: "major", name: "major (" + version.nextMajor + ")" },
          { value: "minor", name: "minor (" + version.nextMinor + ")" },
          { value: "patch", name: "patch (" + version.nextPatch + ")" },
        ],
      })
      .then((data) => {
        resolve(data.bump)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * @description Updates the version of the app with the provided one.
 */
function updateVersion() {
  const changelogPath = "CHANGELOG.md"
  const packagePath = "package.json"
  const packageLockPath = "package-lock.json"

  updateChangelog(changelogPath)
  updatePackage(packagePath)
  updatePackage(packageLockPath)

  console.log("==================")

  performCommit()
}

/**
 * @description Adds row for new version into changelog
 *
 * @param {string} changelogPath
 */
function updateChangelog(changelogPath) {
  const originalContent = fs.readFileSync(changelogPath).toString()

  const releaseDate = getReleaseDate()

  const prependedContent = `v${data.version}- / ${releaseDate}\n==================\n\n`

  fs.writeFileSync(changelogPath, prependedContent + originalContent)

  console.log(`Updated ${changelogPath} to v${data.version}`)
}

/**
 * @description Updates version into package.json
 *
 * @param {string} packagePath
 */
function updatePackage(packagePath) {
  const originalContent = fs.readFileSync(packagePath).toString()

  const originalVersion = JSON.parse(originalContent).version

  fs.writeFileSync(
    packagePath,
    originalContent.replace(
      `"version": "${originalVersion}",`,
      `"version": "${data.version}",`
    )
  )

  console.log(`Updated ${packagePath} to v${data.version}`)
}

/**
 * @description Gets current date (fullYear and month).
 *
 * @returns {string}
 */
function getReleaseDate() {
  const d = new Date()
  const year = d.getFullYear()
  const month = dateLeadingZero(d.getMonth() + 1)

  return `${year}-${month}-`
}

/**
 * @description Adds leading zero to date element if needed.
 * `slice(-2)` takes the latest two elements of the string.
 *
 * @param {number} dateElement
 * @returns {string}
 */
function dateLeadingZero(dateElement) {
  return ("0" + dateElement).slice(-2)
}

/**
 * @description Perform build commit.
 */
function performCommit() {
  const commitMessage = `build: working on ${data.version}`

  simpleGit()
    .init()
    .add(["CHANGELOG.md", "package.json", "package-lock.json"])
    .commit(commitMessage)

  console.log(`Now working on v${data.version}`)
}
