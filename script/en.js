// 不完全英文国际化收集（hack了运行时获取的）
const en = {
  "dateHelpers.dateFormat.fullDate": "Full date",
  "dateHelpers.dateFormat.explicitMonthDayYear": "Month Day, Year",
  "dateHelpers.dateFormat.monthDayYear": "Month/Day/Year",
  "dateHelpers.dateFormat.dayMonthYear": "Day/Month/Year",
  "dateHelpers.dateFormat.yearMonthDay": "Year/Month/Day",
  "dateHelpers.dateFormat.relative": "Relative",
  "dateHelpers.12hourTimeFormat": "12 hour",
  "dateHelpers.24hourTimeFormat": "24 hour",
  "dateFormatHelpers.reminderMenuItems.none": "None",
  "dateFormatHelpers.reminderMenuItems.onTheDayOfEvent":
    "On day of event {formattedTimeText}",
  "dateFormatHelpers.reminderMenuItems.hoursBefore":
    "{numberOfHours, plural, one {{numberOfHours} hour before} other {{numberOfHours} hours before}}",
  "dateFormatHelpers.reminderMenuItems.minutesBefore":
    "{numberOfMinutes, plural, one {{numberOfMinutes} minute before} other {{numberOfMinutes} minutes before}}",
  "dateFormatHelpers.reminderMenuItems.yearsBefore":
    "{numberOfYears, plural, one {{numberOfYears} year before {formattedTimeText}} other {{numberOfYears} years before {formattedTimeText}}}",
  "dateFormatHelpers.reminderMenuItems.daysBefore":
    "{numberOfDays, plural, one {{numberOfDays} day before {formattedTimeText}} other {{numberOfDays} days before {formattedTimeText}}}",
  "dateFormatHelpers.reminderMenuItems.monthsBefore":
    "{numberOfMonths, plural, one {{numberOfMonths} month before {formattedTimeText}} other {{numberOfMonths} months before {formattedTimeText}}}",
  "dateFormatHelpers.reminderMenuItems.weeksBefore":
    "{numberOfWeeks, plural, one {{numberOfWeeks} week before {formattedTimeText}} other {{numberOfWeeks} weeks before {formattedTimeText}}}",
  "dateFormatHelpers.reminderMenuItems.atTimeOfEvent": "At time of event",
  "actorHelpers.anonymousPlaceholder": "Anonymous",
  "actorHelpers.userFullName": "{firstName} {lastName}",
  "action.foregroundColor.default.name": "Default",
  "action.foregroundColor.gray.name": "Gray",
  "action.foregroundColor.brown.name": "Brown",
  "action.foregroundColor.orange.name": "Orange",
  "action.foregroundColor.yellow.name": "Yellow",
  "action.foregroundColor.green.name": "Green",
  "action.foregroundColor.blue.name": "Blue",
  "action.foregroundColor.purple.name": "Purple",
  "action.foregroundColor.pink.name": "Pink",
  "action.foregroundColor.red.name": "Red",
  "action.backgroundColor.gray.name": "Gray background",
  "action.backgroundColor.brown.name": "Brown background",
  "action.backgroundColor.orange.name": "Orange background",
  "action.backgroundColor.yellow.name": "Yellow background",
  "action.backgroundColor.green.name": "Green background",
  "action.backgroundColor.blue.name": "Blue background",
  "action.backgroundColor.purple.name": "Purple background",
  "action.backgroundColor.pink.name": "Pink background",
  "action.backgroundColor.red.name": "Red background",
  "action.backgroundColor.default.name": "Default background",
  "unfurling.github.githubPullOpened": "Opened {value}",
  "unfurling.github.githubPullClosed": "Closed {value}",
  "unfurling.github.githubPullMerged": "Merged {value}",
  "unfurling.github.githubCommitted": "Committed {value}",
  "unfurling.github.githubPullRequest": "Pull Request {value}",
  "unfurling.github.githubIssue": "Issue {value}",
  "unfurling.github.githubCommit": "Commit",
  "unfurling.github.githubRepoUpdated": "Updated {value}",
  "unfurling.jira.jiraAssignee": "Assigned to {value}",
  "unfurling.github.jiraUpdated": "Updated {value}",
  "textRenderHelpers.untitledTextAsString": "Untitled",
  "blockHelpers.embedBlockType": "Embed",
  "blockHelpers.framerBlockType": "Framer",
  "blockHelpers.tweetBlockType": "Tweet",
  "blockHelpers.gistBlockType": "Gist",
  "blockHelpers.driveBlockType": "Drive",
  "blockHelpers.figmaBlockType": "Figma",
  "blockHelpers.loomBlockType": "Loom",
  "blockHelpers.typeformBlockType": "Typeform",
  "blockHelpers.codepenBlockType": "Codepen",
  "blockHelpers.audioBlockType": "Audio",
  "blockHelpers.mapsBlockType": "Maps",
  "blockHelpers.invisionBlockType": "Invision",
  "blockHelpers.imageBlockType": "Image",
  "blockHelpers.pdfBlockType": "PDF",
  "blockHelpers.videoBlockType": "Video",
  "blockHelpers.fileBlockType": "File",
  "blockHelpers.whimsicalBlockType": "Whimsical",
  "blockHelpers.miroBlockType": "Miro",
  "blockHelpers.abstractBlockType": "Abstract",
  "blockHelpers.sketchBlockType": "Sketch",
  "blockHelpers.excalidrawBlockType": "Excalidraw",
  "blockHelpers.replitBlockType": "Replit",
  "mentionMenu.templateVariables.text.now": "Now",
  "mentionMenu.templateVariables.description.now": "Time when duplicated",
  "mentionMenu.templateVariables.keywords.now": "now",
  "mentionMenu.templateVariables.text.tday": "Today",
  "mentionMenu.templateVariables.description.today": "Date when duplicated",
  "mentionMenu.templateVariables.keywords.today": "today",
  "mentionMenu.templateVariables.text.me": "Me",
  "mentionMenu.templateVariables.description.me": "User when duplicated",
  "mentionMenu.templateVariables.keywords.me": "me",
  "database.formula.constant.e.description":
    "The base of the natural logarithm.",
  "database.formula.constant.pi.description":
    "The ratio of a circle's circumference to its diameter.",
  "database.formula.operator.if.description":
    "Switches between two options based on another value.",
  "database.formula.operator.add.description":
    "Adds two numbers and returns their sum, or concatenates two strings.",
  "database.formula.operator.subtract.description":
    "Subtracts two numbers and returns their difference.",
  "database.formula.operator.multiply.description":
    "Multiplies two numbers and returns their product.",
  "database.formula.operator.divide.description":
    "Divides two numbers and returns their quotient.",
  "database.formula.operator.pow.description":
    "Returns base to the exponent power, that is, baseexponent.",
  "database.formula.operator.mod.description":
    "Divides two numbers and returns their remainder.",
  "database.formula.operator.unaryMinus.description": "Negates a number.",
  "database.formula.operator.unaryPlus.description":
    "Converts its argument into a number.",
  "database.formula.operator.not.description":
    "Returns the logical NOT of its argument.",
  "database.formula.operator.and.description":
    "Returns the logical AND of its two arguments.",
  "database.formula.operator.or.description":
    "Returns the logical OR of its two arguments.",
  "database.formula.operator.equal.description":
    "Returns true if its arguments are equal, and false otherwise.",
  "database.formula.operator.unequal.description":
    "Returns false if its arguments are equal, and true otherwise.",
  "database.formula.operator.larger.description":
    "Returns true if the first argument is larger than the second.",
  "database.formula.operator.largerEq.description":
    "Returns true if the first argument is larger than or equal to than the second.",
  "database.formula.operator.smaller.description":
    "Returns true if the first argument is smaller than the second.",
  "database.formula.operator.smallerEq.description":
    "Returns true if the first argument is smaller than or equal to than the second.",
  "database.formula.function.concat.description":
    "Concatenates its arguments and returns the result.",
  "database.formula.function.join.description":
    "Inserts the first argument between the rest and returns their concatenation.",
  "database.formula.function.slice.description":
    "Extracts a substring from a string from the start index (inclusively) to the end index (optional and exclusively).",
  "database.formula.function.length.description":
    "Returns the length of a string.",
  "database.formula.function.format.description":
    "Formats its argument as a string.",
  "database.formula.function.toNumber.description":
    "Parses a number from text.",
  "database.formula.function.contains.description":
    "Returns true if the second argument is found in the first.",
  "database.formula.function.replace.description":
    "Replaces the first match of a regular expression with a new value.",
  "database.formula.function.replaceAll.description":
    "Replaces all matches of a regular expression with a new value.",
  "database.formula.function.test.description":
    "Tests if a string matches a regular expression.",
  "database.formula.function.empty.description": "Tests if a value is empty.",
  "database.formula.function.abs.description":
    "Returns the absolute value of a number.",
  "database.formula.function.cbrt.description":
    "Returns the cube root of a number.",
  "database.formula.function.ceil.description":
    "Returns the smallest integer greater than or equal to a number.",
  "database.formula.function.exp.description":
    "Returns E^x, where x is the argument, and E is Euler's constant (2.718…), the base of the natural logarithm.",
  "database.formula.function.floor.description":
    "Returns the largest integer less than or equal to a number.",
  "database.formula.function.ln.description":
    "Returns the natural logarithm of a number.",
  "database.formula.function.log10.description":
    "Returns the base 10 logarithm of a number.",
  "database.formula.function.log2.description":
    "Returns the base 2 logarithm of a number.",
  "database.formula.function.max.description":
    "Returns the largest of zero or more numbers.",
  "database.formula.function.min.description":
    "Returns the smallest of zero or more numbers.",
  "database.formula.function.round.description":
    "Returns the value of a number rounded to the nearest integer.",
  "database.formula.function.sign.description":
    "Returns the sign of the x, indicating whether x is positive, negative or zero.",
  "database.formula.function.sqrt.description":
    "Returns the positive square root of a number.",
  "database.formula.function.start.description":
    "Returns the start of a date range.",
  "database.formula.function.end.description":
    "Returns the end of a date range.",
  "database.formula.function.now.description":
    "Returns the current date and time.",
  "database.formula.function.timestamp.description":
    "Returns an integer number from a Unix millisecond timestamp, corresponding to the number of milliseconds since January 1, 1970.",
  "database.formula.function.fromTimestamp.description":
    "Returns a date constructed from a Unix millisecond timestamp, corresponding to the number of milliseconds since January 1, 1970.",
  "database.formula.function.dateAdd.description":
    'Add to a date. The last argument, unit, can be one of: "years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", or "milliseconds".',
  "database.formula.function.dateSubtract.description":
    'Subtract from a date. The last argument, unit, can be one of: "years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", or "milliseconds".',
  "database.formula.function.dateBetween.description":
    'Returns the time between two dates. The last argument, unit, can be one of: "years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", or "milliseconds".',
  "database.formula.function.formatDate.description":
    "Format a date using the Moment standard time format string.",
  "database.formula.function.minute.description":
    "Returns an integer number, between 0 and 59, corresponding to minutes in the given date.",
  "database.formula.function.hour.description":
    "Returns an integer number, between 0 and 23, corresponding to hour for the given date.",
  "database.formula.function.day.description":
    "Returns an integer number corresponding to the day of the week for the given date: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.",
  "database.formula.function.date.description":
    "Returns an integer number, between 1 and 31, corresponding to day of the month for the given.",
  "database.formula.function.month.description":
    "Returns an integer number, between 0 and 11, corresponding to month in the given date according to local time. 0 corresponds to January, 1 to February, and so on.",
  "database.formula.function.year.description":
    "Returns a number corresponding to the year of the given date.",
  "database.formula.function.id.description":
    "Returns a unique string id for each entry.",
  "database.formula.category.properties": "Properties",
  "database.formula.category.constants": "Constants",
  "database.formula.category.operators": "Operators",
  "database.formula.category.functions": "Functions",
  "block.propertyTypeName.title": "Title",
  "block.propertyTypeName.description": "Description",
  "block.propertyTypeName.caption": "Caption",
  "block.propertyTypeName.link": "Link",
  "block.propertyTypeName.checked": "Checked",
  "block.propertyTypeName.language": "Language",
  "block.propertyTypeName.source": "Source",
  "block.propertyTypeName.size": "Size",
  "localDatabase.errorFixes.reloadAllTabs":
    "Try closing and re-opening all Notion tabs or windows.",
  "localDatabase.errorFixes.reloadThisTab": "Try reloading Notion.",
  "localDatabase.errorFixes.helpAndSupportPrompt":
    "Notion's local storage may be damaged. See (?) > Help & Support > Reset Notion.",
  "localDatabase.errorFixes.firefoxSettingsDamaged":
    "Your Firefox profile may be damaged. Visit https://firefox-storage-test.glitch.me/ to diagnose.",
  "localDatabase.errorFixes.chromeSettingsDamaged":
    "Your Chrome profile may be damaged. If you changed any chrome://flags then please reset them, then restart your browser. If issues persist, try making a new Chrome user.",
  "localDatabase.erroMessages.noDiskSpaceRemaining": "No disk space remaining.",
  "localDatabase.erroMessages.noDiskSpaceRemainingBrowserLimit":
    "No disk space remaining. Your browser settings may restrict the storage Notion can use.",
  "transactionErrors.publicAccessNotAllowed.message":
    "This workspace does not allow pages with public access.",
  "transactionErrors.blockPermissionsMaxSize.message":
    "You have exceeded the maximum permissions per page.",
  "transactionErrors.guestsoverLimit.message":
    "This workspace has reached the maximum number of guests (5).",
  "transactionErrors.guestsNotAllowed.message":
    "This workspace does not allow guests.",
  "transactionErrors.workspaceTopLevelOperationNotAllowed.message":
    "This workspace has locked modifying the workspace section of the sidebar.",
  "transactionErrors.blocksInsideThemselvesNotAllowed.message":
    "Oops! Blocks cannot be moved inside of themselves.",
  "transactionErrors.movingPagesToOtherWorkspacesNotAllowed.message":
    "This workspace has disabled moving pages to other workspaces.",
  "transactionErrors.spaceDomainNotAvailable.message":
    "Sorry, this domain is not available.",
  "transactionErrors.spaceEmailDomainNotAllowed.message":
    "Sorry, this domain is not allowed: {domain}",
  "transactionErrors.commentOnlyAccessCantMovePage.message":
    "Sorry, you cannot move this page because you only have Comment-Only access.",
  "transactionErrors.nonApiMovesNotAllowed.message":
    "Please refresh (Cmd/Ctrl + R) to update Notion to move pages to other workspaces.",
  "transactionErrors.upgradeClientIsNeeded.message":
    "Please refresh (Cmd/Ctrl + R) to update Notion and try again.",
  "transactionErrors.searchEngineIndexingNotAllowed.message":
    "This workspace does not allow public pages to be search indexed.",
  "samlErrors.emailDomainAlreadyConfigured.message":
    "Email domain is already configured for SAML on existing workspace: {workspace}",
  "samlErrors.couldNotParseIdentityProviderMetadataXML.message":
    "Could not parse IDP metadata XML.",
  "samlErrors.invalidIDPURL.message": "The IDP metadata URL is an invalid URL.",
  "samlErrors.samlRequired.message":
    "You must use SAML SSO to log in to Notion",
  "samlErrors.couldNotParseIdpMetadata.message":
    "Could not parse SAML IDP metadata. Please check that your IDP metadata is correct.",
  "samlErrors.couldNotDownloadIdpMetadata.message":
    "SAML IDP metadata could not be downloaded. Please check that your IDP Metadata URL is correct.",
  "samlErrors.incorrectURL.message":
    "Audience in SAML assertion needs to be {correctUrl}",
  "samlErrors.incorrectlyConfiguredSaml.message":
    "Incorrectly configured SAML SSO. Please contact your administrator.",
  "samlErrors.samlNameIdEmailRequired.message":
    "The SAML Name ID attribute must be an email address. Please contact your administrator.",
  "samlErrors.emailNotConfiguredForSamlSso.message":
    "This email is not configured for SAML SSO to this workspace. Please contact your administrator.",
  "samlErrors.invalidSamlConfiguration.message":
    "Invalid SAML Configuration. Please contact your administrator.",
  "emailErrors.invalidEmailAddress.message": "Invalid email address",
  "emailErrors.invalidEmailEntered.message": "Please enter a valid email.",
  "emailErrors.userAlreadyExists.message":
    "A user with this email already exists.",
  "emailErrors.invalidOrExpiredPassword.message":
    "Your login code was incorrect. Please try again.",
  "emailErrors.noExistingAccountForEmailAddress.message":
    "This email does not have an existing account.",
  "emailErrors.emailUnreachable.message":
    "We could not reach the email address you provided. Please try again with a different email.",
  "emailErrors.incorrectPassword.message": "Incorrect password.",
  "importErrors.enexFileNotSupported.message":
    "Evernote .enex import not supported.",
  "confluenceImportErrors.uploadFileSizeExceeded.message":
    "File cannot exceed {maxSize}.",
  "confluenceImportErrors.failedToExtractZip.message":
    "Failed to extract ZIP file.",
  "confluenceImportErrors.noIndexHtmlFile.message":
    "Could not find index file in ZIP.",
  "confluenceImportErrors.indexHtmlMissingAvailablePages.message":
    "Invalid index file: could not find available pages.",
  "confluenceImportErrors.noConfluenceIdInPageLink.message":
    "Could not extract page ID from file name.",
  "confluenceImportErrors.failedToFindElement.message":
    "Failed to parse upload.",
  "confluenceImportErrors.foundElementIsIncorrectType.message":
    "Failed to parse upload.",
  "confluenceImportErrors.bufferUploadFailed.message":
    "Failed to upload attachment from buffer.",
  "confluenceImportErrors.attachmentNotFound.message":
    "Failed to find attachment in ZIP file.",
  "confluenceImportErrors.attachmentUploadFailed.message":
    "Failed to upload attachment from file.",
  "confluenceImportErrors.failedToBuildPage.message": "Failed to import page.",
  "fileUploadErrors.freePlanFileSizeExceeded.message":
    "Your file is over the 5MB limit of the Free plan.",
  "inviteLinkErrors.inviteLinkDisabled.message":
    "Invites are disabled, contact the administrator of this space.",
  "passwordSettings.passwordTooShortError.message":
    "Please make your password longer.",
  "passwordSettings.passwordMissingLetter.message":
    "Please include a letter, or use a longer password.",
  "passwordSettings.passwordMissingNumber.message":
    "Please include a number, or use a longer password.",
  "passwordSettings.passwordMissingLetterAndNumber.message":
    "Please include a letter and a number, or use a longer password.",
  "passwordSettings.passwordTooConsistent.message":
    "Please include additional unique characters.",
  "passwordSettings.passwordNotEntered.message": "Please enter your password.",
  "passwordSettings.passwordNotSet.message": "No password set.",
  "rateLimitError.message": "Please try again later.",
  "duplicateRateLimitError.message":
    "Rate limit reached, please try again later.",
  "loginErrors.generic.message": "There was a problem logging in.",
  "loginErrors.tryAgain.message": "Please log in again.",
  "loginErrors.csrf.message":
    "If you’re logging in via a link, please open the link in the same browser that you requested the link from.",
  "loginErrors.adminModeUnsupported.message": "Unsupported in Admin Mode",
  "loginErrors.invalidEmail.message": "Invalid email.",
  "loginErrors.invalidPassword.message": "Invalid password.",
  "appleErrors.api.statusError": "There was a problem with the Apple service.",
  "appleErrors.api.tokenError":
    "There was a problem verifying your identity with Apple.",
  "appleErrors.api.missingIdError":
    "There was a problem getting user information from Apple.",
  "appleErrors.api.missingAccessTokenError":
    "Apple failed to authorize the login.",
  "appleErrors.api.missingBetaAppReviewSubmission":
    "Cannot find betaAppReviewSubmission entry.",
  "appleErrors.api.missingPreReleaseVersion":
    "Cannot find preReleaseVersion entry.",
  "googleErrors.googleDriveTokenError":
    "Error from Google Drive: {errorMessage}",
  "subscriptionErrors.cardRequiredError":
    "Since you have not paid your last invoice, you must use a card.",
  "subscriptionErrors.invalidCreditError":
    "This amount of credit is not available.",
  "subscriptionErrors.creditNoFreeLunch": "Negative credits are not possible.",
  "subscriptionErrors.missingNameError": "Name must exist.",
  "subscriptionErrors.missingAddressError": "Address line 1 must exist.",
  "subscriptionErrors.creditExceedsBalanceError":
    "Cannot apply credit to exceed balance beyond {maxCredits}.",
  "subscriptionErrors.personalPlanMoreThanOneMember":
    "In order to use the personal plan, your workspace can have only one member.",
  "subscriptionErrors.invalidVatError": "VAT/GST number is invalid.",
  "subscriptionErrors.couponAlreadyApplied":
    "This coupon has already been applied",
  "activateReferral.dialogError.userAlreadySignedUp.errorMessage":
    "User has already signed up.",
  "activateReferral.dialogError.referralAlreadyActivated.errorMessage":
    "Referral has already been activated.",
  "activateReferral.dialogError.noValidReferral.errorMessage":
    "No valid referral found.",
  "activateReferral.dialogError.referringUserNotFound.errorMessage":
    "Referring user not found.",
  "activateReferral.dialogError.cannotInviteSelf.errorMessage":
    "You cannot invite yourself",
  "activateReferral.dialogError.emailNotEligible.errorMessage":
    "This email is not eligible for the referral program. If you think this is a mistake please contact support.",
  "activateReferral.dialogError.invitationCreditAlreadyApplied.errorMessage":
    "You have already applied an invitation credit.",
  "slackAuthorizationErrors.blockNotFound.errorMessage": "Block not found.",
  "slackAuthorizationErrors.missingEditPermission.errorMessage":
    "User cannot edit block.",
  "slackAuthorizationErrors.webhookNotFound.errorMessage":
    "Slack webhook not found.",
  "queueApiErrors.duplicateBlockLimit.errorMessage":
    "Oops, that's too much content! There's a {blockLimitNumber} block limit for duplicating content. Please try again with a smaller amount of content.",
  "genericErrors.genericErrorMessage": "Something went wrong.",
  "offlineErrors.offlineErrorMessage": "Offline.",
  "dialog.dismissButton.label": "Okay",
  "dialog.closeButton.label": "Close",
  "dialog.genericErrorMessage": "An unexpected error occurred",
  "saveEditsError.mobile.message":
    "There was an issue persisting your edits. Please message us for help.",
  "userSettings.userType.personal": "Just me",
  "userSettings.userType.team2-50": "2-50 people",
  "userSettings.userType.team51-100": "51-100 people",
  "userSettings.userType.team101-1000": "101-1000 people",
  "userSettings.userType.team1000+": "1000+ people",
  "templateHelpers.personas.gettingStarted": "Getting started",
  "templateHelpers.personas.personal": "Personal",
  "templateHelpers.personas.design": "Design",
  "templateHelpers.personas.engineering": "Engineering",
  "templateHelpers.personas.marketing": "Marketing",
  "templateHelpers.personas.media": "Media",
  "templateHelpers.personas.it": "IT",
  "templateHelpers.personas.entrepreneur": "Entrepreneur",
  "templateHelpers.personas.freelancer": "Freelancer",
  "templateHelpers.personas.educator": "Educator",
  "templateHelpers.personas.student": "Student",
  "templateHelpers.personas.other": "Other",
  "templateHelpers.personas.humanResources": "Human resources",
  "templateHelpers.personas.truncated.humanResources": "HR",
  "templateHelpers.personas.productManagement": "Product management",
  "templateHelpers.personas.productManagementV2": "Product",
  "templateHelpers.personas.support": "Support",
  "templateHelpers.personas.education": "Education",
  "templateHelpers.personas.sales": "Sales",
  "templateHelpers.templates.getStarted": "Getting started",
  "templateHelpers.templates.getStartedOnEvernote":
    "Getting started from Evernote",
  "templateHelpers.templates.getStartedOnMobile": "Getting started on mobile",
  "templateHelpers.templates.readingList": "Reading List",
  "templateHelpers.templates.taskList": "Task List",
  "templateHelpers.templates.goals": "Goals",
  "templateHelpers.templates.journal": "Journal",
  "templateHelpers.templates.travelPlanner": "Travel Planner",
  "templateHelpers.templates.quickNote": "Quick Note",
  "templateHelpers.templates.blogPost": "Blog Post",
  "templateHelpers.templates.personalHome": "Personal Home",
  "templateHelpers.templates.weeklyAgenda": "Weekly Agenda",
  "templateHelpers.templates.roadmap": "Roadmap",
  "templateHelpers.templates.userResearchDatabase": "User Research Database",
  "templateHelpers.templates.designTasks": "Design Tasks",
  "templateHelpers.templates.meetingNotes": "Meeting Notes",
  "templateHelpers.templates.designSystem": "Design System",
  "templateHelpers.templates.toDo": "To-Do",
  "templateHelpers.templates.engineeringWiki": "Engineering Wiki",
  "templateHelpers.templates.docs": "Docs",
  "templateHelpers.templates.brandAssets": "Brand Assets",
  "templateHelpers.templates.mediaList": "Media List",
  "templateHelpers.templates.contentCalendar": "Content Calendar",
  "templateHelpers.templates.moodBoard": "Mood Board",
  "templateHelpers.templates.jobBoard": "Job Board",
  "templateHelpers.templates.newHireOnboarding": "New Hire Onboarding",
  "templateHelpers.templates.applicantTracker": "Applicant Tracker",
  "templateHelpers.templates.companyHome": "Company Home",
  "templateHelpers.templates.productWiki": "Product Wiki",
  "templateHelpers.templates.salesCRM": "Sales CRM",
  "templateHelpers.templates.salesWiki": "Sales Wiki",
  "templateHelpers.templates.competitiveAnalysis": "Competitive Analysis",
  "templateHelpers.templates.salesAssets": "Sales Assets",
  "templateHelpers.templates.teamDirectory": "Team Directory",
  "templateHelpers.templates.productFAQs": "Product FAQs",
  "templateHelpers.templates.helpCenter": "Help Center",
  "templateHelpers.templates.processDocs": "Process Docs",
  "templateHelpers.templates.classNotes": "Class Notes",
  "templateHelpers.templates.jobApplications": "Job Applications",
  "templateHelpers.templates.gradeCalculator": "Grade Calculator",
  "templateHelpers.templates.clubHomepage": "Club Homepage",
  "templateHelpers.templates.thesisPlanning": "Thesis Planning",
  "templateHelpers.templates.cornellNotesSystem": "Cornell Notes System",
  "templateHelpers.templates.personalCRM": "Personal CRM",
  "templateHelpers.templates.roommateSpace": "Roommate Space",
  "templateHelpers.templates.simpleBudget": "Simple Budget",
  "templateHelpers.templates.syllabus": "Syllabus",
  "templateHelpers.templates.classroomHome": "Classroom Home",
  "templateHelpers.templates.lessonPlans": "Lesson Plans",
  "templateHelpers.templates.courseSchedule": "Course Schedule",
  "templateHelpers.templates.classDirectory": "Class Directory",
  "templateHelpers.templates.simpleNotebook": "Simple Notebook",
  "templateHelpers.templates.lifeWiki": "Life Wiki",
  "templateHelpers.templates.habitTracker": "Habit Tracker",
  "templateHelpers.templates.resume": "Resume",
  "templateHelpers.templates.wiki": "Team wiki",
  "templateHelpers.templates.notes": "Notes & docs",
  "templateHelpers.templates.projectManagement": "Project & tasks",
  "templateHelpers.personas.suggestedTemplates": "Suggested templates",
  "templateHelpers.useCase.teamHome": "Team Home",
  "templateHelpers.useCase.teamTasks": "Team Tasks",
  "templateHelpers.useCase.teamMeetingNotes": "Meeting Notes",
  "templateHelpers.useCase.teamDocs": "Docs",
  "templateHelpers.useCase.personalNotebook": "Notebook",
  "templateHelpers.useCase.bookmarks": "Bookmarks",
  "templateHelpers.useCase.todos": "Todos",
  "spaceSettingsSidebar.accountTab.title": "My account",
  "spaceSettingsSidebar.notificationsTab.title": "My notifications",
  "spaceSettingsSidebar.settingsTab.title": "Settings",
  "spaceSettingsSidebar.membersTab.title": "Members",
  "spaceSettingsSidebar.plansTab.title": "Plans",
  "spaceSettingsSidebar.upgradeTab.title": "Upgrade",
  "spaceSettingsSidebar.billingTab.title": "Billing",
  "spaceSettingsSidebar.subscriptionTab.title": "Subscription",
  "spaceSettingsSidebar.connectedAppsTab.title": "My connected apps",
  "spaceSettingsSidebar.creditTab.title": "Earn credit",
  "spaceSettingsSidebar.appearanceTab.title": "Appearance",
  "spaceSettingsSidebar.securityAndSAMLTab.title": "Security & identity",
  "spaceSettingsSidebar.languageAndRegionTab.title": "Language & region",
  "spaceSettingsSidebar.integrationsTab.title": "Integrations",
  "spaceSettingsSidebar.experimentsTab.title": "Experiments",
  "subscriptionSettings.updatingSubscriptionMessage":
    "Updating your subscription…",
  "subscriptionSettings.verifyingEligibilityMessage": "Verifying eligibility…",
  "subscriptionSettings.personalFreeMessage":
    "You are now subscribed to Notion’s Personal Pro Plan for free.",
  "duplicateHelpers.copyOfTextForPageTitle": "Copy of {title}",
  "duplicateHelpers.untitledPageToDuplicate": "Untitled",
  "dateParserHelpers.now": "now",
  "dateParserHelpers.remind": "remind",
  "dateParserHelpers.me": "me",
  "dateParserHelpers.at": "at",
  "dateParserHelpers.today.short": "td",
  "dateParserHelpers.today": "today",
  "dateParserHelpers.tomorrow.short": "tm",
  "dateParserHelpers.tomorrow": "tomorrow",
  "dateParserHelpers.yesterday.short": "yd",
  "dateParserHelpers.yesterday": "yesterday",
  "dateParserHelpers.last": "last",
  "dateParserHelpers.next": "next",
  "dateParserHelpers.month": "month",
  "dateParserHelpers.year": "year",
  "dateParserHelpers.day": "day",
  "database.titleColumn.name": "Title",
  "database.genericColumn.name": "Column {columnNumber}",
  "blockTemplates.templateButton.addNewTodoTitle": "Add a new to-do",
  "blockTemplates.table.viewTitle": "Default view",
  "blockTemplates.table.namePropertyTitle": "Name",
  "blockTemplates.table.tagsPropertyTitle": "Tags",
  "blockTemplates.board.viewTitle": "Board view",
  "blockTemplates.board.namePropertyTitle": "Name",
  "blockTemplates.board.assignPropertyTitle": "Assign",
  "blockTemplates.board.statusPropertyTitle": "Status",
  "blockTemplates.board.statusPropertyRedOptionTitle": "Not started",
  "blockTemplates.board.statusPropertyYellowOptionTitle": "In progress",
  "blockTemplates.board.statusPropertyGreenOptionTitle": "Completed",
  "blockTemplates.board.card1Title": "Card 1",
  "blockTemplates.board.card2Title": "Card 2",
  "blockTemplates.board.card3Title": "Card 3",
  "blockTemplates.calendar.viewTitle": "Calendar view",
  "blockTemplates.calendar.namePropertyTitle": "Name",
  "blockTemplates.calendar.datePropertyTitle": "Date",
  "blockTemplates.calendar.tagsPropertyTitle": "Tags",
  "blockTemplates.timeline.viewTitle": "Timeline view",
  "blockTemplates.timeline.datePropertyTitle": "Date",
  "blockTemplates.gallery.viewTitle": "Gallery view",
  "blockTemplates.gallery.namePropertyTitle": "Name",
  "blockTemplates.gallery.tagsPropertyTitle": "Tags",
  "blockTemplates.gallery.createdPropertyTitle": "Created",
  "blockTemplates.gallery.page1Title": "Page 1",
  "blockTemplates.gallery.page2Title": "Page 2",
  "blockTemplates.gallery.page3Title": "Page 3",
  "blockTemplates.gallery.page1TodoTitle": "To-do",
  "blockTemplates.gallery.page1CompletedTodoTitle": "Completed To-do",
  "blockTemplates.list.viewTitle": "List view",
  "blockTemplates.list.namePropertyTitle": "Name",
  "blockTemplates.list.tagsPropertyTitle": "Tags",
  "blockTemplates.list.createdPropertyTitle": "Created",
  "blockTemplates.list.page1Title": "Page 1",
  "blockTemplates.list.page2Title": "Page 2",
  "blockTemplates.list.page3Title": "Page 3",
  "blockTemplates.list.tab1Title": "Tab 1",
  "blockTemplates.list.tab2Title": "Tab 2",
  "blockTemplates.list.tab3Title": "Tab 3",
  "sidebarSwitcher.createOrJoinWorkspaceButton.prompt":
    "Create or join workspace",
  "sidebarSwitcher.personalPlan.label": "Personal Plan",
  "sidebarSwitcher.proPlan.label": "Personal Pro Plan",
  "sidebarSwitcher.educationPlan.label": "Personal Pro Plan (Education)",
  "sidebarSwitcher.teamTrialPlan.label": "Team Plan (Trial)",
  "sidebarSwitcher.teamPlan.label": "Team Plan",
  "sidebarSwitcher.enterprisePlan.label": "Enterprise Plan",
  "sidebarSwitcher.legacyPlan.label": "Legacy Plan",
  "sidebarSwitcher.workspaceSubtitleWithMembers.label":
    "{planType} - {numberOfWorkspaceMembers, plural, one {{numberOfWorkspaceMembers} member} other {{numberOfWorkspaceMembers} members}}",
  "sidebarSwitcher.workspaceSubtitleWithoutMembers.label": "{planType}",
  "newBlock.text.title": "Text",
  "newBlock.text.description": "Just start writing with plain text.",
  "newBlock.text.fuzzySearchKeywords": "Plain Text",
  "newBlock.page.title": "Page",
  "newBlock.page.description": "Embed a sub-page inside this page.",
  "newBlock.page.fuzzySearchKeywords": "Page",
  "newBlock.linkToPage.title": "Link to page",
  "newBlock.linkToPage.description": "Link to an existing page.",
  "newBlock.linkToPage.fuzzySearchKeywords": "Link to page ltp",
  "newBlock.linkToCollection.title": "Create linked database",
  "newBlock.linkToCollection.description":
    "Create custom views for a database.",
  "newBlock.linkToCollection.fuzzySearchKeywords": "Create linked database",
  "newBlock.transclusionContainer.title": "Synced block",
  "newBlock.transclusionContainer.description": "Sync content across pages.",
  "newBlock.transclusionContainer.fuzzySearchKeywords":
    "Create synced block reference transclusion portal block embed",
  "newBlock.toDo.title": "To-do list",
  "newBlock.toDo.description": "Track tasks with a to-do list.",
  "newBlock.toDo.fuzzySearchKeywords": "Todo To-Do Checkbox List",
  "newBlock.header.title": "Heading 1",
  "newBlock.header.description": "Big section heading.",
  "newBlock.header.fuzzySearchKeywords": "Heading 1 #",
  "newBlock.subHeader.title": "Heading 2",
  "newBlock.subHeader.description": "Medium section heading.",
  "newBlock.subHeader.fuzzySearchKeywords": "sub heading 2 ##",
  "newBlock.subSubHeader.title": "Heading 3",
  "newBlock.subSubHeader.description": "Small section heading.",
  "newBlock.subSubHeader.fuzzySearchKeywords": "sub sub heading 3 ###",
  "newBlock.image.title": "Image",
  "newBlock.image.description": "Upload or embed with a link.",
  "newBlock.image.fuzzySearchKeywords": "Image Picture",
  "newBlock.bookmark.title": "Web bookmark",
  "newBlock.bookmark.description": "Save a link as a visual bookmark.",
  "newBlock.bookmark.fuzzySearchKeywords": "Web Link Bookmark",
  "newBlock.divider.title": "Divider",
  "newBlock.divider.description": "Visually divide blocks.",
  "newBlock.divider.fuzzySearchKeywords": "Horizontal Rule Divider --- —-",
  "newBlock.code.title": "Code",
  "newBlock.code.description": "Capture a code snippet.",
  "newBlock.code.fuzzySearchKeywords": "Code ```",
  "newBlock.quote.title": "Quote",
  "newBlock.quote.description": "Capture a quote.",
  "newBlock.quote.fuzzySearchKeywords": "Quote",
  "newBlock.bulletedList.title": "Bulleted list",
  "newBlock.bulletedList.description": "Create a simple bulleted list.",
  "newBlock.bulletedList.fuzzySearchKeywords": "Bulleted Unordered List",
  "newBlock.numberedList.title": "Numbered list",
  "newBlock.numberedList.description": "Create a list with numbering.",
  "newBlock.numberedList.fuzzySearchKeywords": "Numbered Ordered List",
  "newBlock.toggle.title": "Toggle list",
  "newBlock.toggle.description": "Toggles can hide and show content inside.",
  "newBlock.toggle.fuzzySearchKeywords": "Toggle list",
  "newBlock.file.title": "File",
  "newBlock.file.description": "Upload or embed with a link.",
  "newBlock.file.fuzzySearchKeywords": "File",
  "newBlock.video.title": "Video",
  "newBlock.video.description": "Embed from YouTube, Vimeo...",
  "newBlock.video.fuzzySearchKeywords": "Video",
  "newBlock.audio.title": "Audio",
  "newBlock.audio.description": "Embed from SoundCloud, Spotify...",
  "newBlock.audio.fuzzySearchKeywords": "Audio Sound Music",
  "newBlock.embed.title": "Embed",
  "newBlock.embed.description": "For PDFs, Google Maps, and more.",
  "newBlock.embed.fuzzySearchKeywords": "Embed iFrame",
  "newBlock.drive.title": "Google Drive",
  "newBlock.drive.description": "Embed a Google Doc, Google Sheet...",
  "newBlock.drive.fuzzySearchKeywords": "Google Drive",
  "newBlock.figma.title": "Figma",
  "newBlock.figma.description": "Embed a Figma file.",
  "newBlock.figma.fuzzySearchKeywords": "Figma",
  "newBlock.loom.title": "Loom",
  "newBlock.loom.description": "Embed a Loom recording.",
  "newBlock.loom.fuzzySearchKeywords": "Loom",
  "newBlock.typeform.title": "Typeform",
  "newBlock.typeform.description": "Embed a Typeform.",
  "newBlock.typeform.fuzzySearchKeywords": "Typeform",
  "newBlock.codepen.title": "CodePen",
  "newBlock.codepen.description": "Embed a CodePen.",
  "newBlock.codepen.fuzzySearchKeywords": "CodePen",
  "newBlock.tweet.title": "Tweet",
  "newBlock.tweet.description": "Embed a Tweet.",
  "newBlock.tweet.fuzzySearchKeywords": "Tweet",
  "newBlock.gist.title": "GitHub Gist",
  "newBlock.gist.description": "Embed a Gist from GitHub.",
  "newBlock.gist.fuzzySearchKeywords": "GitHub Gist",
  "newBlock.maps.title": "Google Maps",
  "newBlock.maps.description": "Embed a Google Map.",
  "newBlock.maps.fuzzySearchKeywords": "Google Maps",
  "newBlock.framer.title": "Framer",
  "newBlock.framer.description": "Embed a Framer prototype.",
  "newBlock.framer.fuzzySearchKeywords": "Framer",
  "newBlock.invision.title": "Invision",
  "newBlock.invision.description": "Embed an Invision project.",
  "newBlock.invision.fuzzySearchKeywords": "Invision",
  "newBlock.equation.title": "Block equation",
  "newBlock.equation.description": "Display a standalone math equation.",
  "newBlock.equation.fuzzySearchKeywords": "LaTeX Math Block Equation $$",
  "newBlock.pdf.title": "PDF",
  "newBlock.pdf.description": "Embed a PDF.",
  "newBlock.pdf.fuzzySearchKeywords": "PDF",
  "newBlock.factory.title": "Template button",
  "newBlock.factory.description": "Duplicate blocks with a click.",
  "newBlock.factory.fuzzySearchKeywords": "Template Duplicate Button",
  "newBlock.breadcrumb.title": "Breadcrumb",
  "newBlock.breadcrumb.description": "Show the current page location.",
  "newBlock.breadcrumb.fuzzySearchKeywords": "Breadcrumb",
  "newBlock.callout.title": "Callout",
  "newBlock.callout.description": "Make writing stand out.",
  "newBlock.callout.fuzzySearchKeywords": "Callout",
  "newBlock.tableOfContents.title": "Table of contents",
  "newBlock.tableOfContents.description": "Show an outline of your page.",
  "newBlock.tableOfContents.fuzzySearchKeywords": "TOC Table of Contents",
  "newBlock.whimsical.title": "Whimsical",
  "newBlock.whimsical.description": "Embed a Whimsical board.",
  "newBlock.whimsical.fuzzySearchKeywords": "Whimsical",
  "newBlock.miro.title": "Miro",
  "newBlock.miro.description": "Embed a Miro board.",
  "newBlock.miro.fuzzySearchKeywords": "Miro",
  "newBlock.abstract.title": "Abstract",
  "newBlock.abstract.description": "Embed an Abstract project.",
  "newBlock.abstract.fuzzySearchKeywords": "Abstract",
  "newBlock.sketch.title": "Sketch",
  "newBlock.sketch.description": "Embed a Sketch document.",
  "newBlock.sketch.fuzzySearchKeywords": "Sketch",
  "newBlock.excalidraw.title": "Excalidraw",
  "newBlock.excalidraw.description": "Embed an Excalidraw whiteboard.",
  "newBlock.excalidraw.fuzzySearchKeywords": "Excalidraw",
  "newBlock.replit.title": "Replit",
  "newBlock.replit.description": "Embed a repl.",
  "newBlock.replit.fuzzySearchKeywords": "Replit",
  "newBlock.inlineTable.title": "Table - Inline",
  "newBlock.inlineTable.description": "Create a table inline in this page.",
  "newBlock.inlineTable.fuzzySearchKeywords": "Table - Inline",
  "newBlock.inlineBoard.title": "Board - Inline",
  "newBlock.inlineBoard.description":
    "Create a kanban board inline in this page.",
  "newBlock.inlineBoard.fuzzySearchKeywords": "Board - Inline",
  "newBlock.inlineGallery.title": "Gallery - Inline",
  "newBlock.inlineGallery.description": "Create a gallery inline in this page.",
  "newBlock.inlineGallery.fuzzySearchKeywords": "Gallery - Inline",
  "newBlock.inlineList.title": "List - Inline",
  "newBlock.inlineList.description": "Create a list inline in this page.",
  "newBlock.inlineList.fuzzySearchKeywords": "List - Inline",
  "newBlock.inlineCalendar.title": "Calendar - Inline",
  "newBlock.inlineCalendar.description":
    "Create a calendar inline in this page.",
  "newBlock.inlineCalendar.fuzzySearchKeywords": "Calendar - Inline",
  "newBlock.inlineTimeline.title": "Timeline - Inline",
  "newBlock.inlineTimeline.description":
    "Create a timeline inline in this page.",
  "newBlock.inlineTimeline.fuzzySearchKeywords": "Timeline - Inline",
  "newBlock.fullPageTable.title": "Table - Full page",
  "newBlock.fullPageTable.description": "Create a table as its own page.",
  "newBlock.fullPageTable.fuzzySearchKeywords": "Table - Full page",
  "newBlock.fullPageBoard.title": "Board - Full page",
  "newBlock.fullPageBoard.description":
    "Create a kanban board as its own page.",
  "newBlock.fullPageBoard.fuzzySearchKeywords": "Board - Full page",
  "newBlock.fullPageGallery.title": "Gallery - Full page",
  "newBlock.fullPageGallery.description": "Create a gallery as its own page.",
  "newBlock.fullPageGallery.fuzzySearchKeywords": "Gallery - Full page",
  "newBlock.fullPageList.title": "List - Full page",
  "newBlock.fullPageList.description": "Create a list as its own page.",
  "newBlock.fullPageList.fuzzySearchKeywords": "List - Full page",
  "newBlock.fullPageCalendar.title": "Calendar - Full page",
  "newBlock.fullPageCalendar.description": "Create a calendar as its own page.",
  "newBlock.fullPageCalendar.fuzzySearchKeywords": "Calendar - Full page",
  "newBlock.fullPageTimeline.title": "Timeline - Full page",
  "newBlock.fullPageTimeline.description": "Create a timeline as its own page.",
  "newBlock.fullPageTimeline.fuzzySearchKeywords": "Timeline - Full page",
  "newBlock.simple_table.title": "Table",
  "newBlock.simple_table.description": "Add a table for tabular content",
  "newBlock.simple_table.fuzzySearchKeywords": "Table",
  "newBlock.tab.title": "Create a tab block",
  "newBlock.tab.description": "Tab",
  "newBlock.tab.keywords": "Tab",
  "pageCover.gradientCategory.header": "Color & Gradient",
  "pageCover.nasaCategory.header": "NASA Archive",
  "pageCover.metPatternsCategory.header": "The MET Museum – Patterns",
  "pageCover.rijksmuseumCategory.header": "Rijksmuseum",
  "pageCover.metWoodcutsCategory.header": "The MET Museum – Japanese Prints",
  "pageCover.metCategory.header": "The MET Museum",
  "pageCover.solidRed.title": "Red",
  "pageCover.solidYellow.title": "Yellow",
  "pageCover.solidBlue.title": "Blue",
  "pageCover.solidBeige.title": "Beige",
  "pageCover.gradients8.title": "Gradient 8",
  "pageCover.gradients4.title": "Gradient 4",
  "pageCover.gradients2.title": "Gradient 2",
  "pageCover.gradients11.title": "Gradient 11",
  "pageCover.gradients10.title": "Gradient 10",
  "pageCover.gradients5.title": "Gradient 5",
  "pageCover.gradients3.title": "Gradient 3",
  "pageCover.nasaTheBlueMarble.title": "The Blue Marble",
  "pageCover.nasaTheBlueMarble.subtitle": "1972",
  "pageCover.nasaTransonicTunnel.title": "Transonic Tunnel",
  "pageCover.nasaTransonicTunnel.subtitle": "1990",
  "pageCover.nasaMultiAxisGimbleRig.title": "Multi-Axis Gimble Rig",
  "pageCover.nasaMultiAxisGimbleRig.subtitle": "1959",
  "pageCover.nasaEvaDuringSkylab3.title": "EVA During Skylab 3",
  "pageCover.nasaEvaDuringSkylab3.subtitle": "1973",
  "pageCover.nasaEagleInLunarOrbit.title": "Eagle In Lunar Orbit",
  "pageCover.nasaEagleInLunarOrbit.subtitle": "1969",
  "pageCover.nasaBuzzAldrinOnTheMoon.title": "Buzz Aldrin on the Moon",
  "pageCover.nasaBuzzAldrinOnTheMoon.subtitle": "1969",
  "pageCover.nasaIbmType704.title": "IBM Type 704",
  "pageCover.nasaIbmType704.subtitle": "1957",
  "pageCover.nasaWrightsFirstFlight.title": "Wright's First Flight",
  "pageCover.nasaWrightsFirstFlight.subtitle": "1903",
  "pageCover.nasaGreatSandyDesertAustralia.title":
    "Great Sandy Desert, Australia",
  "pageCover.nasaGreatSandyDesertAustralia.subtitle": "2013",
  "pageCover.nasaSpaceShuttleColumbia.title": "Space Shuttle Columbia",
  "pageCover.nasaSpaceShuttleColumbia.subtitle": "1986",
  "pageCover.nasaRobertStewartSpacewalk.title": "Robert Stewart Spacewalk",
  "pageCover.nasaRobertStewartSpacewalk.subtitle": "1984",
  "pageCover.nasaSpaceShuttleChallenger.title": "Space Shuttle Challenger",
  "pageCover.nasaSpaceShuttleChallenger.subtitle": "1985",
  "pageCover.nasaRobertStewartSpacewalk2.title": "Robert Stewart Spacewalk 2",
  "pageCover.nasaRobertStewartSpacewalk2.subtitle": "1984",
  "pageCover.nasaSpaceShuttleColumbiaAndSunrise.title":
    "Space Shuttle Columbia and Sunrise",
  "pageCover.nasaSpaceShuttleColumbiaAndSunrise.subtitle": "1983",
  "pageCover.nasaTimPeakeSpacewalk.title": "Tim Peake Spacewalk",
  "pageCover.nasaTimPeakeSpacewalk.subtitle": "2015",
  "pageCover.nasaBruceMccandlessSpacewalk.title": "Bruce McCandless Spacewalk",
  "pageCover.nasaBruceMccandlessSpacewalk.subtitle": "1984",
  "pageCover.nasaNewYorkCityGrid.title": "New York City Grid",
  "pageCover.nasaNewYorkCityGrid.subtitle": "2015",
  "pageCover.nasaFingerprintsOfWaterOnTheSand.title": "Water on the Sand",
  "pageCover.nasaFingerprintsOfWaterOnTheSand.subtitle": "2015",
  "pageCover.nasaCarinaNebula.title": "Carina Nebula",
  "pageCover.nasaCarinaNebula.subtitle": "2015",
  "pageCover.nasaOrionNebula.title": "Orion Nebula",
  "pageCover.nasaOrionNebula.subtitle": "1994",
  "pageCover.nasaReducedGravityWalkingSimulator.title":
    "Reduced Gravity Walking Simulator",
  "pageCover.nasaReducedGravityWalkingSimulator.subtitle": "1963",
  "pageCover.nasaEarthGrid.title": "Earth Grid",
  "pageCover.metWilliamMorris1877Willow.title": "William Morris",
  "pageCover.metWilliamMorris1877Willow.subtitle": "1875, Willow Bough",
  "pageCover.metWilliamMorris1875.title": "William Morris",
  "pageCover.metWilliamMorris1875.subtitle": "1875, Marigold",
  "pageCover.metWilliamMorris1878.title": "William Morris",
  "pageCover.metWilliamMorris1878.subtitle": "1878, Bird",
  "pageCover.metSilkKashanCarpet.title": "Silk Kashan Carpet",
  "pageCover.metSilkKashanCarpet.subtitle": "16th century",
  "pageCover.rijksmuseumVermeerTheMilkmaid.title": "Johannes Vermeer",
  "pageCover.rijksmuseumVermeerTheMilkmaid.subtitle": "1660, The Milkmaid",
  "pageCover.rijksmuseumJansz1649.title": "Pieter Jansz",
  "pageCover.rijksmuseumJansz1649.subtitle":
    "1649, Interior of the Sint-Odulphuskerk in Assendelft",
  "pageCover.rijksmuseumRembrandt1642.title": "Rembrandt van Rijn",
  "pageCover.rijksmuseumRembrandt1642.subtitle": "1642, Night Watch",
  "pageCover.rijksmuseumJansz1636.title": "Pieter Jansz",
  "pageCover.rijksmuseumJansz1636.subtitle":
    "1636, Interior of the Church of St Bavo in Haarlem",
  "pageCover.rijksmuseumJansz1641.title": "Pieter Jansz",
  "pageCover.rijksmuseumJansz1641.subtitle":
    "1641, The Nave and Choir of the Mariakerk in Utrecht",
  "pageCover.rijksmuseumJanLievens1627.title": "Jan Lievens",
  "pageCover.rijksmuseumJanLievens1627.subtitle": "1627, Still Life with Books",
  "pageCover.rijksmuseumJansz1637.title": "Pieter Jansz",
  "pageCover.rijksmuseumJansz1637.subtitle":
    "1637, The Transept of the Mariakerk in Utrecht",
  "pageCover.rijksmuseumMignons1660.title": "Abraham Mignons",
  "pageCover.rijksmuseumMignons1660.subtitle":
    "1660, Still Life with Flowers and a Watch",
  "pageCover.rijksmuseumAvercamp1620.title": "Hendrick Avercamp",
  "pageCover.rijksmuseumAvercamp1620.subtitle":
    "1620, Enjoying the Ice near a Town",
  "pageCover.rijksmuseumAvercamp1608.title": "Hendrick Avercamp",
  "pageCover.rijksmuseumAvercamp1608.subtitle":
    "1608, Winter Landscape with Ice Skaters",
  "pageCover.rijksmuseumClaesz1628.title": "Pieter Claesz",
  "pageCover.rijksmuseumClaesz1628.subtitle":
    "1628, Vanitas Still Life with the Spinario",
  "pageCover.woodcuts1.title": "Katsushika Hokusai",
  "pageCover.woodcuts1.subtitle": "1830, The Great Wave off Kanagawa",
  "pageCover.woodcuts2.title": "Katsushika Hokusai",
  "pageCover.woodcuts2.subtitle": "1830, Storm Below Mount Fuji",
  "pageCover.woodcuts3.title": "Katsushika Hokusai",
  "pageCover.woodcuts3.subtitle": "1830, South Wind, Clear Sky",
  "pageCover.woodcuts4.title": "Keisai Eisen",
  "pageCover.woodcuts4.subtitle": "1842, Koi",
  "pageCover.woodcuts5.title": "Kobayashi Kiyochika",
  "pageCover.woodcuts5.subtitle":
    "1878, Street Scene in the Outskirts of Edo on an Evening in Winter",
  "pageCover.woodcuts6.title": "Katsushika Hokusai",
  "pageCover.woodcuts6.subtitle": "1850, View of Mt. Asama from the Usui Pass",
  "pageCover.woodcuts7.title": "Katsushika Hokusai",
  "pageCover.woodcuts7.subtitle": "1833, Kyoto, Sanjo Ohashi",
  "pageCover.woodcuts8.title": "Katsushika Hokusai",
  "pageCover.woodcuts8.subtitle": "1830, Mishima Pass in Kai Province",
  "pageCover.woodcuts9.title": "Katsushika Hokusai",
  "pageCover.woodcuts9.subtitle": "1830, Kajikazawa in Kai Province",
  "pageCover.woodcuts10.title": "Katsushika Hokusai",
  "pageCover.woodcuts10.subtitle": "1840, Kameyama",
  "pageCover.woodcuts11.title": "Ito Jakuchu",
  "pageCover.woodcuts11.subtitle": "1900, Swallow and Camellia",
  "pageCover.woodcuts13.title": "Utagawa Hiroshige",
  "pageCover.woodcuts13.subtitle": "1858, Mount Yuga in Bizen Province",
  "pageCover.woodcuts14.title": "Katsushika Hokusai",
  "pageCover.woodcuts14.subtitle": "1830, Fuji from Inume Pass",
  "pageCover.woodcuts15.title": "Katsushika Hokusai",
  "pageCover.woodcuts15.subtitle": "1842, Kusatsu Station",
  "pageCover.woodcuts16.title": "Katsushika Hokusai",
  "pageCover.woodcuts16.subtitle": "Sunset at Seta",
  "pageCover.woodcutsSekka1.title": "Kamisaka Sekka",
  "pageCover.woodcutsSekka1.subtitle": "1909, Dwarrelende sneeuw",
  "pageCover.woodcutsSekka2.title": "Kamisaka Sekka",
  "pageCover.woodcutsSekka2.subtitle": "1903, Wierook benodigdheden",
  "pageCover.woodcutsSekka3.title": "Kamisaka Sekka",
  "pageCover.woodcutsSekka3.subtitle": "1909, Lente",
  "pageCover.metVincentVanGoghGinoux.title": "Vincent van Gogh",
  "pageCover.metVincentVanGoghGinoux.subtitle":
    "1890, L'Arlésienne: Madame Joseph-Michel Ginouxs",
  "pageCover.metWinslowHomerMaineCoast.title": "Winslow Homer",
  "pageCover.metWinslowHomerMaineCoast.subtitle": "1896, Maine Coast",
  "pageCover.metFredericEdwinChurch1871.title": "Frederic Edwin Church",
  "pageCover.metFredericEdwinChurch1871.subtitle": "1871, The Parthenon",
  "pageCover.metJosephHidley1870.title": "Joseph Hidley",
  "pageCover.metJosephHidley1870.subtitle":
    "1870, View of Poestenkill, New York",
  "pageCover.metJulesTavernier1878.title": "Jules Tavernier",
  "pageCover.metJulesTavernier1878.subtitle":
    "1878, Dance in a Subterranean Roundhouse at Clear Lake, California",
  "pageCover.metHenryLerolle1885.title": "Henry Lerolle",
  "pageCover.metHenryLerolle1885.subtitle": "1885, The Organ Rehearsal",
  "pageCover.metGeorgesSeurat1884.title": "Georges Seurat",
  "pageCover.metGeorgesSeurat1884.subtitle":
    "1884, Study for 'A Sunday on La Grande Jatte'",
  "pageCover.metJohnSingerSargentMorocco.title": "John Singer Sargent",
  "pageCover.metJohnSingerSargentMorocco.subtitle": "1879, Morocco",
  "pageCover.metPaulSignac.title": "Paul Signac",
  "pageCover.metPaulSignac.subtitle": "1891, Evening Calm, Concarneau",
  "pageCover.metVincentVanGoghOleanders.title": "Vincent van Gogh",
  "pageCover.metVincentVanGoghOleanders.subtitle": "1888, Oleanders",
  "pageCover.metEmanuelLeutze.title": "Emanuel Leutze",
  "pageCover.metEmanuelLeutze.subtitle":
    "1851, Washington Crossing the Delaware",
  "pageCover.metFitzHenryLane.title": "Fitz Henry Lane",
  "pageCover.metFitzHenryLane.subtitle":
    "1854, The Golden State Entering New York Harbor",
  "pageCover.metVincentVanGoghCradle.title": "Vincent van Gogh",
  "pageCover.metVincentVanGoghCradle.subtitle": "1889, Woman Rocking a Cradle",
  "pageCover.metCamillePissarro1896.title": "Camille Pissarro",
  "pageCover.metCamillePissarro1896.subtitle":
    "1896, Morning, An Overcast Day, Rouen",
  "pageCover.metGerome1890.title": "Jean-Léon Gérôme",
  "pageCover.metGerome1890.subtitle": "1890, Pygmalion and Galatea",
  "pageCover.metArnoldBocklin1880.title": "Arnold Böcklin",
  "pageCover.metArnoldBocklin1880.subtitle": "1880, Island of the Dead",
  "pageCover.metHenriTl1892.title": "Henri de Toulouse-Lautrec",
  "pageCover.metHenriTl1892.subtitle": "1892, Divan Japonais",
  "pageCover.metHoracePippin.title": "Horace Pippin",
  "pageCover.metHoracePippin.subtitle": "1945, Victorian Interior I",
  "pageCover.metJeanBeraud.title": "Jean Béraud",
  "pageCover.metJeanBeraud.subtitle":
    "1877, unday at the Church of Saint-Philippe-du-Roule, Paris",
  "pageCover.metCezanne1890.title": "Paul Cézanne",
  "pageCover.metCezanne1890.subtitle":
    "1890, Still Life with Apples and a Pot of Primroses",
  "pageCover.metEdgarDegas1874.title": "Edgar Degas",
  "pageCover.metEdgarDegas1874.subtitle": "1874, The Dance Class",
  "pageCover.metHenriRousseau1907.title": "Henri Rousseau",
  "pageCover.metHenriRousseau1907.subtitle": "1907, The Repast of the Lion",
  "pageCover.metVincentVanGoghIrises.title": "Vincent van Gogh",
  "pageCover.metVincentVanGoghIrises.subtitle": "1890, Irises",
  "pageCover.metTerracottaFuneraryPlaque.title": "Terracotta funerary plaque",
  "pageCover.metTerracottaFuneraryPlaque.subtitle": "ca. 520–510 B.C.",
  "pageCover.metWilliamTurner1835.title": "William Turner",
  "pageCover.metWilliamTurner1835.subtitle":
    "1835, Venice, from the Porch of Madonna della Salute",
  "pageCover.metTheUnicornInCaptivity.title": "The Unicorn in Captivity",
  "pageCover.metTheUnicornInCaptivity.subtitle": "ca. 1495–1505",
  "pageCover.metGoya1789.title": "Goya",
  "pageCover.metGoya1789.subtitle": "1787",
  "pageCover.metBruegel1565.title": "Pieter Bruegel the Elder",
  "pageCover.metBruegel1565.subtitle": "1565",
  "pageCover.metCanaletto1720.title": "Canaletto",
  "pageCover.metCanaletto1720.subtitle": "1720s",
  "pageCover.metKlimt1912.title": "Gustav Klimt",
  "pageCover.metKlimt1912.subtitle": "1912",
  "uploadActions.uploadFailedError.message": "Upload failed.",
  "database.propertyTypeName.title": "Title",
  "database.propertyTypeName.text": "Text",
  "database.propertyTypeName.number": "Number",
  "database.propertyTypeName.url": "URL",
  "database.propertyTypeName.select": "Select",
  "database.propertyTypeName.multi_select": "Multi-select",
  "database.propertyTypeName.person": "Person",
  "database.propertyTypeName.email": "Email",
  "database.propertyTypeName.phone_number": "Phone",
  "database.propertyTypeName.date": "Date",
  "database.propertyTypeName.file": "Files & media",
  "database.propertyTypeName.checkbox": "Checkbox",
  "database.propertyTypeName.formula": "Formula",
  "database.propertyTypeName.relation": "Relation",
  "database.propertyTypeName.rollup": "Rollup",
  "database.propertyTypeName.created_time": "Created time",
  "database.propertyTypeName.created_by": "Created by",
  "database.propertyTypeName.last_edited_time": "Last edited time",
  "database.propertyTypeName.last_edited_by": "Last edited by",
  "database.propertyTypeDescription.text": "A single line of text.",
  "database.propertyTypeDescription.number":
    "A number, with options to format as currency, percent, and more.",
  "database.propertyTypeDescription.url": "A link to a page on the web.",
  "database.propertyTypeDescription.select": "Select from a list of options.",
  "database.propertyTypeDescription.multi_select":
    "Tag with values from a list of options.",
  "database.propertyTypeDescription.person": "Reference a person on your team.",
  "database.propertyTypeDescription.email": "Reference an email address.",
  "database.propertyTypeDescription.phone_number": "Reference a phone number.",
  "database.propertyTypeDescription.date":
    "A date, with options to format and include time.",
  "database.propertyTypeDescription.file": "Upload files and images.",
  "database.propertyTypeDescription.checkbox":
    "Track status with a single checkbox.",
  "database.propertyTypeDescription.formula":
    "Compute a formula using other properties of a page.",
  "database.propertyTypeDescription.relation":
    "Allow pages in this database to reference pages in another.",
  "database.propertyTypeDescription.rollup":
    "Display and summarize data from a relation.",
  "database.propertyTypeDescription.created_time":
    "Reference the date and time a page was created.",
  "database.propertyTypeDescription.created_by":
    "Reference the person that created a page.",
  "database.propertyTypeDescription.last_edited_time":
    "Reference the date and time a page was last edited.",
  "database.propertyTypeDescription.last_edited_by":
    "Reference the person that last edited a page.",
  "collectionHelpers.table.displayName": "Table",
  "collectionHelpers.board.displayName": "Board",
  "collectionHelpers.calendar.displayName": "Calendar",
  "collectionHelpers.list.displayName": "List",
  "collectionHelpers.gallery.displayName": "Gallery",
  "collectionHelpers.timline.displayName": "Timeline",
  "collectionHelpers.table.caption":
    "Table with types to store and view any kind of structured data",
  "collectionHelpers.board.caption":
    "Kanban board, great for project planning and bug tracking",
  "collectionHelpers.calendar.caption":
    "Month view, for event planning and scheduling",
  "collectionHelpers.list.caption":
    "A simplified page view, great for bookmarks and notes",
  "collectionHelpers.gallery.caption":
    "Grid of cards, use for mood boards, index cards, and recipes",
  "collectionHelpers.timeline.caption":
    "A timeline view, great for project scheduling and planning",
  "databaseActions.removeSortingConfirmationDialog.prompt":
    "Would you like to remove sorting?",
  "databaseActions.removeSortingConfirmationDialog.removeSortingButton.label":
    "Remove",
  "text.commandsMenuNotOpen.placeholder": "Type '/' for commands",
  "text.commandsMenuOpen.placeholder": "Type to filter",
  "block.imageCaption.placeholder": "Write a caption…",
  "imageBlock.linkInput.placeholder": "Paste the image link…",
  "imageBlock.embedImage.button.label": "Embed image",
  "videoBlock.linkInput.placeholder": "Paste the video link…",
  "videoBlock.embedVideo.button.label": "Embed video",
  "historyModalActions.restoringPreviousVersion.loadingMessage": "Restoring…",
  "emojiPicker.noResults.message": "No results",
  "recordIcon.linkTab.placeholder": "Paste an image link…",
  "colors.select.default": "Default",
  "colors.select.gray": "Gray",
  "colors.select.brown": "Brown",
  "colors.select.orange": "Orange",
  "colors.select.yellow": "Yellow",
  "colors.select.green": "Green",
  "colors.select.blue": "Blue",
  "colors.select.purple": "Purple",
  "colors.select.pink": "Pink",
  "colors.select.red": "Red",
  "searchHelpers.betweenStartAndEndDates": "{startDate} - {endDate}",
  "searchHelpers.afterStartDate": "After {startDate}",
  "searchHelpers.beforeEndDate": "Before {endDate}",
  "spaceBasicSettings.spacePermissionsSettings.groupsTab.defaultNewGroupName":
    "Untitled",
  "collectionFilterMenuHelpers.operator.isEmpty": "Is empty",
  "collectionFilterMenuHelpers.operator.isNotEmpty": "Is not empty",
  "collectionFilterMenuHelpers.operator.stringIs": "Is",
  "collectionFilterMenuHelpers.operator.stringIsNot": "Is not",
  "collectionFilterMenuHelpers.operator.stringContains": "Contains",
  "collectionFilterMenuHelpers.operator.stringDoesNotContain":
    "Does not contain",
  "collectionFilterMenuHelpers.operator.stringStartsWith": "Starts with",
  "collectionFilterMenuHelpers.operator.stringEndsWith": "Ends with",
  "collectionFilterMenuHelpers.operator.checkboxIs": "Is",
  "collectionFilterMenuHelpers.operator.checkboxIsNot": "Is not",
  "collectionFilterMenuHelpers.operator.enumIs": "Is",
  "collectionFilterMenuHelpers.operator.enumIsNot": "Is not",
  "collectionFilterMenuHelpers.operator.enumContains": "Contains",
  "collectionFilterMenuHelpers.operator.enumDoesNotContain": "Does not contain",
  "collectionFilterMenuHelpers.operator.personContains": "Contains",
  "collectionFilterMenuHelpers.operator.personDoesNotContain":
    "Does not contain",
  "collectionFilterMenuHelpers.operator.relationContains": "Contains",
  "collectionFilterMenuHelpers.operator.relationDoesNotContain":
    "Does not contain",
  "collectionFilterMenuHelpers.operator.numberEquals": "=",
  "collectionFilterMenuHelpers.operator.numberDoesNotEqual": "≠",
  "collectionFilterMenuHelpers.operator.numberGreaterThan": ">",
  "collectionFilterMenuHelpers.operator.numberLessThan": "<",
  "collectionFilterMenuHelpers.operator.numberGreaterThanOrEqualTo": "≥",
  "collectionFilterMenuHelpers.operator.numberLessThanOrEqualTo": "≤",
  "collectionFilterMenuHelpers.operator.dateIs": "Is",
  "collectionFilterMenuHelpers.operator.dateIsBefore": "Is before",
  "collectionFilterMenuHelpers.operator.dateIsAfter": "Is after",
  "collectionFilterMenuHelpers.operator.dateIsOnOrBefore": "Is on or before",
  "collectionFilterMenuHelpers.operator.dateIsOnOrAfter": "Is on or after",
  "collectionFilterMenuHelpers.operator.dateIsWithin": "Is within",
  "collectionFilterMenuHelpers.operator.any": "Any",
  "collectionFilterMenuHelpers.operator.none": "None",
  "collectionFilterMenuHelpers.operator.every": "Every",
  "collectionFilterMenuHelpers.operator.stringHasNoAlphabetPrefix":
    "(Not used)",
  "collectionFilterMenuHelpers.relativeDates.today": "Today",
  "collectionFilterMenuHelpers.relativeDates.tomorrow": "Tomorrow",
  "collectionFilterMenuHelpers.relativeDates.yesterday": "Yesterday",
  "collectionFilterMenuHelpers.relativeDates.oneWeekAgo": "One week ago",
  "collectionFilterMenuHelpers.relativeDates.oneWeekFromNow":
    "One week from now",
  "collectionFilterMenuHelpers.relativeDates.oneMonthAgo": "One month ago",
  "collectionFilterMenuHelpers.relativeDates.oneMonthFromNow":
    "One month from now",
  "collectionFilterMenuHelpers.relativeDates.exactDate": "Exact date",
  "collectionFilterMenuHelpers.relativeDates.thePastWeek": "The past week",
  "collectionFilterMenuHelpers.relativeDates.thePastMonth": "The past month",
  "collectionFilterMenuHelpers.relativeDates.thePastYear": "The past year",
  "collectionFilterMenuHelpers.relativeDates.theNextWeek": "The next week",
  "collectionFilterMenuHelpers.relativeDates.theNextMonth": "The next month",
  "collectionFilterMenuHelpers.relativeDates.theNextYear": "The next year",
  "collectionFilterMenuHelpers.combinatorOperators.and": "And",
  "collectionFilterMenuHelpers.combinatorOperators.or": "Or",
  "collectionFilterMenuHelpers.checkbox.checked": "Checked",
  "collectionFilterMenuHelpers.checkbox.unchecked": "Unchecked",
  "database.filterOperators.and": "And",
  "database.filterOperators.or": "Or",
  "database.filterOperators.andCaption": "All filters must match",
  "database.filterOperators.orCaption": "At least one filter must match",
  "database.filterOperators.any": "Any",
  "database.filterOperators.every": "Every",
  "database.filterOperators.none": "None",
  "collectionFilterMenuFilter.filterOperators.number.order":
    "{operator}{operatorValue}",
  "collectionFilterMenuFilter.filterOperators.text.order":
    "{operator}{operatorValue}",
  "collectionFilterMenuFilter.filterOperators.checkbox.order":
    "{operator}{operatorValue}",
  "collectionFilterMenuFilter.filterOperators.select.order":
    "{operator}{operatorValue}",
  "collectionFilterMenuFilter.filterOperators.multi_select.order":
    "{operator}{operatorValue}",
  "collectionFilterMenuFilter.filterOperators.relation.order":
    "{operator}{operatorValue}",
  "collectionFilterMenuFilter.filterOperators.person.order":
    "{operator}{operatorValue}",
  "collectionFilterMenuFilter.filterOperators.date.order":
    "{operator}{operatorValue}",
  "collectionFilterMenuFilter.filterOperators.file.order":
    "{operator}{operatorValue}",
  "database.filterAndSort.propertyValueInput.placeholder": "Value",
  "collections.operatorValueSelect.placeholder": "Select an option",
  "databaseRelationOperators.searchPlaceholder": "Search for a page…",
  "databaseRelationOperators.selectPlaceholder": "Select a page",
  "database.filterMenu.mobileDateSelectMenu.title": "Date",
  "database.filterMenu.dateSelectMenu.emptyPlaceholder": "Empty",
  "database.filterMenu.rollupPropertyValue.mobileMenu.title": "Set filter",
  "database.filterMenu.operatorPlaceholder": "Operator",
  "database.personPropertyValue.searchPlaceholder": "Search for a person…",
  "database.personPropertyValue.selectPerson.searchPlaceholder":
    "Select a person",
  "relationPropertyMenu.searchPlaceholder":
    "Search for a page, or create a new one…",
  "database.aggregationFullName.unique_values": "Show unique values",
  "database.aggregationFullName.count": "Count all",
  "database.aggregationFullName.count_values": "Count values",
  "database.aggregationFullName.unique": "Count unique values",
  "database.aggregationFullName.empty": "Count empty",
  "database.aggregationFullName.not_empty": "Count not empty",
  "database.aggregationFullName.percent_empty": "Percent empty",
  "database.aggregationFullName.percent_not_empty": "Percent not empty",
  "database.aggregationFullName.sum": "Sum",
  "database.aggregationFullName.average": "Average",
  "database.aggregationFullName.median": "Median",
  "database.aggregationFullName.min": "Min",
  "database.aggregationFullName.max": "Max",
  "database.aggregationFullName.range": "Range",
  "database.aggregationFullName.earliest_date": "Earliest date",
  "database.aggregationFullName.latest_date": "Latest date",
  "database.aggregationFullName.date_range": "Date range",
  "database.aggregationFullName.checked": "Checked",
  "database.aggregationFullName.unchecked": "Unchecked",
  "database.aggregationFullName.percent_checked": "Percent checked",
  "database.aggregationFullName.percent_unchecked": "Percent unchecked",
  "database.aggregationShortName.count": "Count",
  "database.aggregationShortName.count_values": "Values",
  "database.aggregationShortName.unique": "Unique",
  "database.aggregationShortName.showUnique": "Show unique",
  "database.aggregationShortName.empty": "Empty",
  "database.aggregationShortName.not_empty": "Not Empty",
  "database.aggregationShortName.percent_empty": "Empty",
  "database.aggregationShortName.percent_not_empty": "Not Empty",
  "database.aggregationShortName.sum": "Sum",
  "database.aggregationShortName.average": "Average",
  "database.aggregationShortName.median": "Median",
  "database.aggregationShortName.min": "Min",
  "database.aggregationShortName.max": "Max",
  "database.aggregationShortName.range": "Range",
  "database.aggregationShortName.earliest_date": "Earliest",
  "database.aggregationShortName.latest_date": "Latest",
  "database.aggregationShortName.date_range": "Range",
  "database.aggregationShortName.checked": "Checked",
  "database.aggregationShortName.unchecked": "Unchecked",
  "database.aggregationShortName.percent_checked": "Checked",
  "database.aggregationShortName.percent_unchecked": "Unchecked",
  "database.aggregationDescription.count":
    "Counts the total number of pages, including blank pages.",
  "database.aggregationDescription.count_values":
    "Counts the number of non-empty values for this property. For a type that can contain multiple values like multi-select or person, this will count the number of selected values for each page.",
  "database.aggregationDescription.unique":
    "Counts the number of unique values for this property. For a type that can contain multiple values like multi-select or person, this will count the unique values across all pages.",
  "database.aggregationDescription.show_unique":
    "Shows the unique values for this property. For a type that can contain multiple values like multi-select or person, this will count the unique values across all pages.",
  "database.aggregationDescription.empty":
    "Counts the number of pages with an empty value for this property.",
  "database.aggregationDescription.not_empty":
    "Counts the number of pages with a non-empty value for this property.",
  "database.aggregationDescription.percent_empty":
    "Displays the percentage of pages that have an empty value for this property.",
  "database.aggregationDescription.percent_not_empty":
    "Displays the percentage of pages that have a non-empty value for this property.",
  "database.aggregationDescription.sum":
    "Computes the sum of a numeric property.",
  "database.aggregationDescription.average":
    "Computes the average of a numeric property.",
  "database.aggregationDescription.median":
    "Finds the median of a numeric property.",
  "database.aggregationDescription.min":
    "Finds the minimum of a numeric property.",
  "database.aggregationDescription.max":
    "Finds the maximum of a numeric property.",
  "database.aggregationDescription.range":
    "Computes the range (maximum - minimum) of a numeric property.",
  "database.aggregationDescription.earliest_date":
    "Finds the earliest date in time of a date property.",
  "database.aggregationDescription.latest_date":
    "Finds the latest date in time of a date property.",
  "database.aggregationDescription.date_range":
    "Computes the date range (latest date - earliest date) of a date property.",
  "database.aggregationDescription.checked":
    "Counts the number of pages with a checked checkbox for this property.",
  "database.aggregationDescription.unchecked":
    "Counts the number of pages with an unchecked checkbox for this property.",
  "database.aggregationDescription.percent_checked":
    "Displays the percentage of pages that have a checked checkbox for this property.",
  "database.aggregationDescription.percent_unchecked":
    "Displays the percentage of pages that have an unchecked checkbox for this property.",
  "database.propertyAggregationMenu.noneText": "None",
  "database.navigateButton.openAsPageTitle": "Open",
  "database.navigateButton.openAsPageTooltip": "Open as page",
  "database.navigateButton.sendEmailTooltip": "Send email",
  "database.navigateButton.callTooltip": "Call",
  "database.navigateButton.openLinkTooltip": "Open link",
  "database.editButton.editLinkTooltip": "Edit URL",
  "database.copyButton.copyToClipboard": "Copy to Clipboard",
  "transclusionContainerBlock.actions.copySuccessMessage":
    "Copied! Now paste in any page to sync content.",
  "forkPageActions.untitledBlockRecordTitle": "Untitled",
  "forkPageActions.untitledSpaceRecordTitle": "Untitled",
  "forkPageActions.loadingStateDisplayText":
    "Duplicating {blockTitle} to {spaceTitle}…",
  "permissionsActions.preventRemovingAllFullAccess.message":
    "Please give someone else Full Access before removing this permission.",
  "permissions.confirmDialog.upgradeToTeamWorkspace.message":
    "To add members to your workspace, you need to switch it to the Team plan. You will be charged a prorated amount based on your current billing interval and account balance.",
  "permissions.confirmDialog.upgradeToTeamWorkspace.confirmButton.label":
    "Upgrade to Team workspace",
  "moveToMenuActions.movingContent.loadingMessage": "Moving content…",
  "onboardingChecklist.whatIsNotion.title": "What is Notion?",
  "onboardingChecklist.whatIsNotion.mainUsecases":
    "Notion can do a lot - including but not limited to:",
  "onboardingChecklist.createPages.title": "Create new pages",
  "onboardingChecklist.createPages.text":
    "Create new pages by clicking + New page in the bottom left of your workspace, or with the + button in the sidebar.",
  "onboardingChecklist.createPages.slashCommand.title": "Slash command",
  "onboardingChecklist.createPages.slashCommand.text":
    "The slash command is your personal waiter for blocks - typing / brings up a menu of all the content types you can add to your Notion pages 😋",
  "onboardingChecklist.createPages.subPage.title": "Subpages",
  "onboardingChecklist.createPages.subPage.text":
    "Create a sub-page within any page by using /page, so you can organize your content in a hierarchy that is easy to find.",
  "onboardingChecklist.createContent.block.title": "Blocks",
  "onboardingChecklist.createContent.blockTypes.text":
    "Blocks are what make up a page in Notion. They can contain many different types of content — text, images, checkboxes, tables, and many others.",
  "onboardingChecklist.createContent.rearrangeBlocks.title": "Rearrange blocks",
  "onboardingChecklist.createContent.rearrangeBlocks.text":
    "You can turn blocks from one content type into another to use, view, or deepen that information in a new way.",
  "onboardingChecklist.createContent.transformBlocks.title": "Transform blocks",
  "onboardingChecklist.share.addTeammates.title": "Add teammates",
  "onboardingChecklist.share.addTeammates.text":
    "Working with a team? Add your teammates in the Settings & Members menu so you can all share the same Notion workspace.",
  "onboardingChecklist.share.button.title": "Share button",
  "onboardingChecklist.share.button.text":
    "With the Share button at the top right of a page, invite users both within and outside of your workspace to collaborate!",
  "onboardingChecklist.collab.comments.title": "Comments",
  "onboardingChecklist.collab.comments.text":
    "Post comments for feedback, questions, or thoughts for your teammates. You can discuss an idea and align on a decision using the comment threads, without having to leave the page.",
  "onboardingChecklist.collab.mentions.title": "Mentions",
  "onboardingChecklist.collab.mentions.text":
    "Mention your teammates in a page/comment by typing @ followed by their name. They'll be notified and can jump right in!",
  "onboardingChecklist.tipsAndTricks.title": "Learn more",
  "onboardingChecklist.tipsAndTricks.exploreTemplates.text":
    "<link>Explore templates</link>",
  "onboardingHelpers.personalWorkspaceName": "{userName}'s Notion",
  "onboardingStateActions.joiningWorkspace.loadingMessage": "Joining team…",
  "onboardingStateActions.creatingWorkspace.loadingMessage": "Getting ready…",
  "onboardingStateActions.errorMessage.noActionToPerform":
    "No action to perform for {onboardingRedirectType}",
  "loginActions.loggingInWithApple.loadingMessage": "Logging in with Apple…",
  "loginActions.loggingInWithGoogle.loadingMessage": "Logging in with Google…",
  "loginActions.loggingInWithGoogle.errorMessage":
    "Something went wrong while trying to log in with Google.",
  "loginActions.dialogError.logoutUnsavedChanges.message":
    "You have unsaved changes. If you log out, they will be lost.",
  "loginActions.dialogError.logoutUnsavedChanges.confirmButton.label":
    "Discard edits and log out",
  "loginActions.googleLoginPopupModal.title": "Google login",
  "databaseTemplatePickerActions.duplicateTemplateFailedError.message":
    "Duplicate template failed.",
  "exportActions.exporting.loadingMessage": "Exporting",
  "exportActions.exportFailedError.message": "Export failed.",
  "export.userPermissionsRole.admin.message": "Admin",
  "export.userPermissionsRole.member.message": "Member",
  "export.userPermissionsRole.guest.message": "Guest",
  "export.csvHeader.email": "Email",
  "export.csvHeader.name": "Name",
  "export.csvHeader.role": "Role",
  "export.csvHeader.permissionGroups": "Permission groups",
  "moveToOrCreateMenu.createSubpage.description":
    "Create a new sub-page where your cursor is, inside the current block.",
  "moveToOrCreateMenu.newPageIn.description":
    "Create a new page inside any existing page, then link to it in one go.",
  "moveToOrCreateMenu.turnInto.description":
    "Turn blocks into new pages inside any existing database or page.",
  "quoteBlock.emptyQuote.placeholder": "Empty quote",
  "slackActions.dialogError.loginWithSlack.errorMessage":
    "Something went wrong.",
  "slackActions.loginPopupModal.title": "Slack login",
  "slackIntegrationButton.removeIntegrationConfirmationDialog.prompt":
    "Are you sure you want to remove Slack integration?",
  "slackIntegrationButton.removeIntegrationConfirmationDialog.removeButton.label":
    "Remove",
  "topbar.updatesButton.slackIntegrationButton.loading": "Loading…",
  "topbar.updatesButton.slackIntegrationButton.title": "Connect Slack channel",
  "topbar.updatesButton.slackIntegrationButton.connectedCaption":
    "Connected to Slack channel",
  "action.mentionPerson.title": "Mention a person",
  "action.mentionPerson.description":
    "Ping someone so they get a notification.",
  "action.mentionPage.title": "Mention a page",
  "action.mentionPage.description": "Mention a page and place in text.",
  "action.insertEmoji.title": "Emoji",
  "action.insertEmoji.description": "Search for an emoji to place in text.",
  "action.insertInlineEquation.title": "Inline equation",
  "action.insertInlineEquation.fuzzySearchKeyword":
    "LaTeX Math Inline Equation $",
  "action.insertInlineEquation.description":
    "Insert mathematical symbols in text.",
  "action.dateOrReminder.title": "Date or reminder",
  "action.dateOrReminder.description": "Insert a date or reminder in text.",
  "action.moveTo.name": "Move to",
  "action.enter.name": "Enter",
  "action.delete.name": "Delete",
  "action.duplicate.name": "Duplicate",
  "action.comment.name": "Comment",
  "action.foregroundColor.gray.fuzzySearchKeyword": "Grey Gray",
  "action.backgroundColor.gray.fuzzySearchKeyword": "Grey Gray background",
  "action.backgroundColor.default.fuzzySearchKeyword": "Default Black White",
  "action.section.basicBlocks": "Basic blocks",
  "action.section.inline": "Inline",
  "action.section.database": "Database",
  "action.section.media": "Media",
  "action.section.embeds": "Embeds",
  "action.section.advancedBlocks": "Advanced blocks",
  "action.section.turnInto": "Turn into",
  "action.section.actions": "Actions",
  "action.section.color": "Color",
  "action.section.background": "Background",
  "action.section.background.fuzzySearchKeywords": "Color Background",
  "action.section.fontStyle": "Style",
  "action.duplicateTo.name": "Duplicate to",
  "action.leave.name": "Leave",
  "action.syncPage.name": "Save for offline",
  "action.resyncPage.name": "Refresh offline data",
  "action.unsyncPage.name": "Remove from offline",
  "action.lockPage.name": "Lock page",
  "action.unlockPageName.name": "Unlock page",
  "action.addtoFavorites.name": "Add to Favorites",
  "action.removefromFavorites.name": "Remove from Favorites",
  "action.rename.name": "Rename",
  "action.edit.name": "Edit",
  "action.quickFind.name": "Quick Find",
  "action.search.name": "Search",
  "action.undo.name": "Undo",
  "action.redo.name": "Redo",
  "action.copyLinktoView.name": "Copy link to view",
  "action.whatIsNotion.name": "What is Notion?",
  "action.openinMacApp.name": "Open in Mac app",
  "action.openinWindowsApp.name": "Open in Windows app",
  "action.zoomIn.name": "Zoom in",
  "action.zoomOut.name": "Zoom out",
  "action.resetZoom.name": "Reset zoom",
  "action.openiniOSApp.name": "Open in iOS app",
  "action.openinAndroidApp.name": "Open in Android app",
  "action.copyLink.name": "Copy link",
  "action.copyLinkToCurrentPage.snackBarMessage":
    "Link to current page copied to clipboard",
  "action.editPage.name": "Edit",
  "action.commentPage.name": "Comment",
  "action.duplicatePage.name": "Duplicate page",
  "action.backtoNotion.name": "Back to Notion",
  "action.signUpOrlogIn.name": "Sign up or log in",
  "action.paste.name": "Paste",
  "action.moveUp.name": "Move up",
  "action.moveDown.name": "Move down",
  "action.insertBelow.name": "Insert below",
  "action.fullScreen.name": "Full screen",
  "action.viewOriginal.name": "View original",
  "action.download.name": "Download",
  "action.replace.name": "Replace",
  "action.configure.name": "Configure",
  "action.unsyncTransclusionReference.name": "Unsync",
  "action.unsyncTransclusionContainerName.name": "Unsync all",
  "action.caption.name": "Caption",
  "action.setPageFont.default.fuzzySearchKeywords": "Font Default",
  "action.setPageFont.default.caption": "Default",
  "action.setPageFont.default.tooltip": "The default sans-serif workhorse",
  "action.setPageFont.serif.fuzzySearchKeywords": "Font Serif",
  "action.setPageFont.serif.caption": "Serif",
  "action.setPageFont.serif.tooltip": "Good for publishing",
  "action.setPageFont.mono.fuzzySearchKeywords": "Font Mono",
  "action.setPageFont.mono.caption": "Mono",
  "action.setPageFont.mono.tooltip": "Good for drafting and notes",
  "action.fontSmallText.fuzzySearchKeywords": "Font Small Text",
  "action.fontSmallText.label": "Small text",
  "action.customizePage.label": "Customize page",
  "action.propertyVisibility.label": "Toggle property visibility",
  "action.databaseLock.label": "Database lock",
  "action.fullWidth.label": "Full width",
  "action.wrapCode.fuzzySearchKeywords": "Wrap Code",
  "action.wrapCode.label": "Wrap code",
  "action.wrapCells.name": "Wrap cells",
  "action.mergewithCSV.name": "Merge with CSV",
  "action.turnintoPage.name": "Turn into page",
  "action.turnintoInline.name": "Turn into inline",
  "action.createLink.name": "Create link",
  "action.createEquation.name": "Create equation",
  "action.export.name": "Export",
  "action.export.caption": "PDF, HTML, Markdown",
  "action.import.name": "Import",
  "action.pageHistory.name": "Page history",
  "action.showDeletedPages.name": "Show deleted pages",
  "action.clearDate.name": "Clear date",
  "action.editProperty.name": "Edit property",
  "action.filter.name": "Filter",
  "action.sort.name": "Sort",
  "action.groupBy.name": "Group by",
  "action.group.name": "Group",
  "action.properties.name": "Properties",
  "action.templates.name": "Templates",
  "action.calendarBy.name": "Calendar by",
  "action.timelineBy.name": "Timeline by",
  "action.noDate.name": "No date",
  "action.openasPage.name": "Open as page",
  "action.highlight.name": "Highlight",
  "action.turnInto.name": "Turn into",
  "action.newPageIn.name": "Turn into page in",
  "action.color.name": "Color",
  "action.languageMode.name": "Set language",
  "action.bold.name": "Bold",
  "action.italic.name": "Italic",
  "action.strikeThrough.name": "Strike-through",
  "action.underline.name": "Underline",
  "action.darkMode.name": "Dark mode",
  "action.openAsPage.name": "Open as page",
  "action.openAllToggles.name": "Open all toggles",
  "action.lastUsedHighlight.title": "Last used",
  "action.lastUsedHighlight.fuzzySearchKeywords": "Color last used",
  "action.shareLink.name": "Share link",
  "sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label":
    "Join or create workspace",
  "sidebarSwitcherMultiAccount.singleAccountMenu.logOut.label": "Log out",
  "action.unpin.name": "Remove from sidebar",
  "action.reportPage.name": "Report page",
  "action.quoteSize.name": "Quote size",
  "action.section.quoteSize": "Quote size",
  "action.quoteSize.default": "Default",
  "action.quoteSize.large": "Large",
  "action.listFormat.name": "List format",
  "action.listFormat.numbers.name": "Numbers",
  "action.listFormat.letters.name": "Letters",
  "action.listFormat.letters.default": "Default",
  "action.listFormat.letters.roman": "Roman numerals",
  "action.listFormat.disc.name": "Disc",
  "action.listFormat.circle.name": "Circle",
  "action.listFormat.square.name": "Square",
  "action.listFormat.sectionName": "List format",
  "action.section.simpleTableColumn": "Column",
  "action.insertColumnLeft.title": "Insert Left",
  "action.insertColumnRight.title": "Insert Right",
  "action.insertRowAbove.title": "Insert Above",
  "action.insertRowBelow.title": "Insert Below",
  "action.clearContents.title": "Clear Contents",
  "action.pageUpdates.title": "Page Updates",
  "action.languageMode.abap": "ABAP",
  "action.languageMode.arduino": "Arduino",
  "action.languageMode.bash": "Bash",
  "action.languageMode.basic": "Basic",
  "action.languageMode.c": "C",
  "action.languageMode.clojure": "Clojure",
  "action.languageMode.coffeescript": "CoffeeScript",
  "action.languageMode.cplusplus": "C++",
  "action.languageMode.csharp": "C#",
  "action.languageMode.css": "CSS",
  "action.languageMode.dart": "Dart",
  "action.languageMode.diff": "Diff",
  "action.languageMode.docker": "Docker",
  "action.languageMode.elixir": "Elixir",
  "action.languageMode.elm": "Elm",
  "action.languageMode.erlang": "Erlang",
  "action.languageMode.flow": "Flow",
  "action.languageMode.fortran": "Fortran",
  "action.languageMode.fsharp": "F#",
  "action.languageMode.gherkin": "Gherkin",
  "action.languageMode.glsl": "GLSL",
  "action.languageMode.go": "Go",
  "action.languageMode.graphql": "Graphql",
  "action.languageMode.groovy": "Groovy",
  "action.languageMode.haskell": "Haskell",
  "action.languageMode.html": "HTML",
  "action.languageMode.java": "Java",
  "action.languageMode.javascript": "JavaScript",
  "action.languageMode.json": "JSON",
  "action.languageMode.julia": "Julia",
  "action.languageMode.kotlin": "Kotlin",
  "action.languageMode.latex": "LaTeX",
  "action.languageMode.less": "LESS",
  "action.languageMode.lisp": "Lisp",
  "action.languageMode.livescript": "LiveScript",
  "action.languageMode.lua": "Lua",
  "action.languageMode.makefile": "Makefile",
  "action.languageMode.markdown": "Markdown",
  "action.languageMode.markup": "Markup",
  "action.languageMode.matlab": "MATLAB",
  "action.languageMode.mermaid": "Mermaid",
  "action.languageMode.nix": "Nix",
  "action.languageMode.objectiveC": "Objective-C",
  "action.languageMode.ocaml": "OCaml",
  "action.languageMode.pascal": "Pascal",
  "action.languageMode.perl": "Perl",
  "action.languageMode.php": "PHP",
  "action.languageMode.plaintext": "Plain Text",
  "action.languageMode.powershell": "Powershell",
  "action.languageMode.prolog": "Prolog",
  "action.languageMode.protobuf": "Protobuf",
  "action.languageMode.python": "Python",
  "action.languageMode.r": "R",
  "action.languageMode.reason": "Reason",
  "action.languageMode.ruby": "Ruby",
  "action.languageMode.rust": "Rust",
  "action.languageMode.sass": "Sass",
  "action.languageMode.scala": "Scala",
  "action.languageMode.scheme": "Scheme",
  "action.languageMode.scss": "SCSS",
  "action.languageMode.shell": "Shell",
  "action.languageMode.sql": "SQL",
  "action.languageMode.swift": "Swift",
  "action.languageMode.typescript": "TypeScript",
  "action.languageMode.vbdotnet": "VB.net",
  "action.languageMode.verilog": "Verilog",
  "action.languageMode.vhdl": "VHDL",
  "action.languageMode.visualbasic": "Visual Basic",
  "action.languageMode.webassembly": "WebAssembly",
  "action.languageMode.xml": "XML",
  "action.languageMode.yaml": "YAML",
  "action.languageMode.cstyle": "Java/C/C++/C#",
  "bookmarkBlock.editBookmark.linkPlaceholder": "Paste in https://…",
  "bookmarkBlock.bookmark.title": "Bookmark",
  "bookmarkBlock.invalidLinkError.message": "Please enter a valid link",
  "googleDriveActions.authenticatingWithGoogle.loadingMessage":
    "Authenticating with Google…",
  "googleDriveActions.loginWithGoogleModal.title": "Google login",
  "googleDriveBlock.mediaMenuActions.embedTab.title": "Embed",
  "audioBlock.embedAudio.button.label": "Embed audio",
  "tweetBlock.embedTweet.button.label": "Embed Tweet",
  "gistBlock.embedButton.label": "Embed Gist",
  "googleMapsBlock.embedButton.label": "Embed Map",
  "framerBlock.embedFramer.button.label": "Embed Framer",
  "invisionBlock.embeds.button.label": "Embed Invision",
  "fileBlock.fileTab.title": "File",
  "fileBlock.embedButton.label": "Embed link",
  "fileBlock.linkPrompt.placeholder": "Paste a file link…",
  "fileBlock.linkPrompt.caption":
    "Works with links of PDFs, Google Drive, Google Maps, CodePen…",
  "bulletedListBlock.placeholder.label": "List",
  "todoBlock.placeholder": "To-do",
  "toggleBlock.placeholder": "Toggle",
  "numberedListBlock.placeholder.label": "List",
  "factoryBlock.newItem.button.label": "Add a new item",
  "factoryBlock.newItem.button.placeholder": "Add a new item",
  "header1Block.placeholder": "Heading 1",
  "subheaderBlock.placeholder": "Heading 2",
  "subsubheaderBlock.placeholder": "Heading 3",
  "database.viewHelpers.selectProperty.defaultName": "Status",
  "database.viewHelpers.dateProperty.defaultName": "Date",
  "collectionBoardItem.untitledBlock": "Untitled",
  "collectionBoardItem.itemName.placeholder": "Type a name…",
  "edit.quoteBlock.label": "Quote",
  "edit.calloutBlock.label": "Callout",
  "edit.templateButtonBlock.label": "Template Button",
  "edit.bookmarkBlockProperty.label": "Bookmark",
  "edit.equationBlock.label": "Equation",
  "selectableHoverMenu.filterActions.placeholder": "Filter actions…",
  "boardHiddenGroup.searchPlaceholder": "Search for a page…",
  "database.collectionView.untitledName.board": "Board view",
  "database.collectionView.untitledName.gallery": "Gallery view",
  "database.collectionView.untitledName.timeline": "Timeline view",
  "database.collectionView.untitledName.calendar": "Calendar view",
  "database.collectionView.untitledName.list": "List view",
  "database.collectionView.untitledName.table": "Table view",
  "database.collectionEditViewButtonPopup.renameButtonTitle": "Rename",
  "database.collectionEditViewButtonPopup.statusNameProperty": "Status",
  "database.collectionEditViewButtonPopup.dateNameProperty": "Date",
  "database.collectionEditViewButtonPopup.inputPlaceholder": "View name",
  "database.collectionViewSelect.addViewButtonTitle": "Add a view",
  "database.viewPropertiesMenu.coverFormat.none": "None",
  "database.viewPropertiesMenu.coverFormat.pageContent": "Page content",
  "database.viewPropertiesMenu.coverFormat.pageCover": "Page cover",
  "database.viewPropertiesMenu.coverSize.small": "Small",
  "database.viewPropertiesMenu.coverSize.medium": "Medium",
  "database.viewPropertiesMenu.coverSize.large": "Large",
  "database.editPropertyButtonPopup.propertyTypeSectionTitle": "Property Type",
  "database.editPropertyButtonPopup.extensionMenuSectionTitleBasic": "Basic",
  "database.editPropertyButtonPopup.extensionMenuSectionTitleAdvanced":
    "Advanced",
  "collectionNoDateMenu.searchPlaceholder": "Search for a page…",
  "database.actionBar.searchInputPlaceholder": "Type to search...",
  "unfurlingActions.authPopupTitle": "Authenticate",
  "topbar.favoriteButton.activeTitle": "Favorited",
  "topbar.favoriteButton.title": "Favorite",
  "notificationActions.archiveNotificationsError.message":
    "Something went wrong.",
  "pushNotification.pluralizedUserNames.defaultLabel": "Someone",
  "pushNotification.permissionGroupName.defaultLabel": "Deleted group",
  "pushNotification.permissionGroupName.untitledLabel": "Untitled group",
  "pushNotification.userEditedTarget.label":
    "{userName} edited {permissionGroupName}",
  "pushNotification.userDeletedTarget.label":
    "{userName} deleted {permissionGroupName}",
  "pushNotification.userCreatedTarget.label":
    "{userName} created {permissionGroupName}",
  "pushNotification.authorPhrase.unknown": "Unknown author",
  "pushNotification.untitledSpaceName.label": "Untitled",
  "pushNotification.untitledCollectionName.placeholder": "Untitled",
  "pushNotification.untitledBlockTitle.placeholder": "Untitled",
  "pushNotification.twoUserNames.label": "{firstAuthor} and {secondAuthor}",
  "pushNotification.threePlusUserNames.label":
    "{othersCount, plural, one {{firstAuthor} and {othersCount} other} other {{firstAuthor} and {othersCount} others}}",
  "pushNotifications.editorPermissionLevel.label": "Full access",
  "pushNotifications.readerPermissionLevel.label": "Read only",
  "pushNotifications.editOnlyPermissionLevel.label": "Edit only",
  "pushNotifications.commentOnlyPermissionLevel.label": "Comment only",
  "pushNotifications.noAccessPermissionLevel.label": "No access",
  "pushNotifications.publicPermissions.label": "Public ({permissionLevel})",
  "pushNotifications.userPermissionsWithRole.label":
    "{userName} ({permissionLevel})",
  "pushNotifications.spacePermissionsWithRole.label":
    "{spaceName} ({permissionLevel})",
  "pushNotification.imageInPushNotification.placeholder": "{imageEmoji} Image",
  "pushNotification.userCreatedBlockInSpace.message":
    "{userName} created {targetName} in {spaceName}",
  "pushNotification.userDeletedBlockInSpace.message":
    "{userName} deleted {targetName} in {spaceName}",
  "pushNotification.userCreatedRowInCollection.message":
    "{userName} created {targetName} in {collectionName}",
  "pushNotification.userDeletedRowInCollection.message":
    "{userName} deleted {targetName} in {collectionName}",
  "pushNotification.emptyBlockPropertyValueEdited.placeholderLabel": "Empty",
  "pushNotification.propertyNameWithEditedValue.notificationSubject":
    "{propertyName} ({propertyValue})",
  "pushNotification.propertyNameWithEditedValue.notificationBody":
    "{propertyName} ({propertyValue})",
  "pushNotification.deletedBlock.notificationContents":
    "[Deleted] {renderedBlock}",
  "pushNotification.blockEdited.notificationSubject":
    "{userName} edited {blockName}",
  "pushNotifications.permissionsEditedForPageOrSpace.notificationSubject":
    "{userName} edited permissions for {targetName}",
  "pushNotifications.userMentionedInPage.notificationSubject":
    "{userName} mentioned you in {targetName}",
  "pushNotifications.userDeletedCommentText.notificationContents":
    "[Deleted]💬 {commentText}",
  "pushNotifications.userCommentedSubject.notificationSubject":
    "{userName} commented in {targetName}",
  "pushNotifications.userAddedToSpace.notificationSubject":
    "{userName} added you to {workspaceName}",
  "pushNotifications.userInvitedToSpace.notificationSubject":
    "{userName} invited you to {workspaceName}",
  "pushNotifications.userInvitedToSpaceByBot.notificationSubject":
    "You have been invited to {workspaceName}",
  "pushNotifications.collectionEdited.notificationSubject":
    "{userName} edited {collectionName}",
  "pushNotifications.collectionCreated.notificationSubject":
    "{userName} created {collectionName}",
  "pushNotifications.collectionDescriptionDeleted.notificationSubject":
    "{userName} deleted the description for {collectionName}",
  "pushNotifications.collectionDescriptionAdded.notificationSubject":
    "{userName} added a description for {collectionName}",
  "pushNotifications.untitledCollection.label": "Untitled",
  "pushNotifications.collectionViewEdited.notificationSubject":
    "{userName} edited view {collectionViewName} in {collectionName}",
  "pushNotifications.unknownCollectionPropertyName.label": "Unknown",
  "pushNotifications.collectionPropertyEdited.subject":
    "{userName} edited property {propertyType} in {collectionName}",
  "pushNotifications.reminderChanged.subject": "Reminder in {pageName}",
  "pushNotifications.pageLocked.subject": "{userName} locked {pageName}",
  "pushNotifications.pageUnlocked.subject": "{userName} unlocked {pageName}",
  "pushNotifications.emailAccountSettingsEdited.subject":
    "{userName} edited their account settings",
  "pushNotifications.emptyPropertyValueInCollection.label": "Empty",
  "pushNotifications.unknownRelationPropertyChanged.label": "Unknown",
  "pushNotifications.unknownAuthorUpdatedProperty.label": "Unknown author",
  "pushNotifications.accessRequested.subject":
    "{userName} requested access to {pageName}",
  "pushNotifications.formatChange.pageIcon.label": "Page Icon",
  "pushNotifications.formatChange.pageIcon.imagePlaceholder": "Image",
  "userPermissionsMenu.adminItem.label": "Admin",
  "userPermissionsMenu.adminItem.caption":
    "Can change workspace settings and invite new members to the workspace.",
  "userPermissionsMenu.fullAccessItem.label": "Full access",
  "userPermissionsMenu.fullAccessItem.caption":
    "Can edit and share with others.",
  "userPermissionsMenu.memberItem.label": "Member",
  "userPermissionsMenu.memberItem.caption":
    "Cannot change workspace settings or invite new members to the workspace.",
  "userPermissionsMenu.canEditItem.label": "Can edit",
  "userPermissionsMenu.canEditItem.caption":
    "Can edit, but not share with others.",
  "userPermissionsMenu.canReadItem.label": "Can view",
  "userPermissionsMenu.canReadItem.caption":
    "Cannot edit or share with others.",
  "userPermissionsMenu.canCommentItem.label": "Can comment",
  "userPermissionsMenu.canCommentItem.caption":
    "Can view and comment, but not edit.",
  "userPermissionsMenu.leaveTeamItem.label": "Leave team",
  "userPermissionsMenu.removeFromTeamItem.label": "Remove from team",
  "userPermissionsMenu.removeWorkspaceItem.label": "Remove",
  "userPermissionsMenu.disabledItem.label": "Disabled",
  "userPermissionsMenu.noAccessItem.label": "No access",
  "search.dateRangeMenu.startingMessage": "Starting",
  "search.dateRangeMenu.endingMessage": "Ending",
  "UpdateSidebarFollowControl.unfollow.caption":
    "Stop receiving notifications for updates and comments",
  "UpdateSidebarFollowControl.follow.caption":
    "Receive notifications for all updates and comments",
  "UpdateSidebarFollowControl.follow.label": "Follow",
  "UpdateSidebarFollowControl.following.label": "Following",
  "UpdateSidebarFollowControl.unfollow.label": "Unfollow",
  "topbar.commentsButton.title": "Comments",
  "topbar.updatesButton.title": "Updates",
  "collectionGalleryViewItem.untitledBlock": "Untitled",
  "collectionGalleryViewItem.itemName.placeholder": "Type a name…",
  "database.addNewProperty.tableHeaderCell.namePrefix": "Property",
  "timelineItem.itemName.placeholder": "Type a name…",
  "database.actionBar.titlePlaceholder": "Untitled",
  "linkToPageBlock.searchPlaceholder": "Search for a page…",
  "linkToCollectionBlock.input.placeholder": "Search for a database…",
  "pdfBlock.embeds.button.label": "Embed PDF",
  "calloutBlock.inputPlaceholder": "Type something…",
  "whimsicalBlock.embeds.button.label": "Embed Whimsical",
  "miroBlock.embeds.button.label": "Embed Miro",
  "abstractBlock.embeds.button.label": "Embed Abstract",
  "sketchBlock.embeds.button.label": "Embed Sketch",
  "excalidrawBlock.embeds.button.label": "Embed Excalidraw",
  "replitBlock.embeds.button.label": "Embed a repl",
  "tabBlockActions.addTab.title": "New tab",
  "pageCover.embedType.placeholder": "Paste an image link…",
  "templatePickerHelpers.basicTemplateItems.emptyWithIcon": "Empty with icon",
  "templatePickerHelpers.basicTemplateItems.empty": "Empty",
  "templatePickerHelpers.basicTemplateItems.templates": "Templates",
  "templatePickerHelpers.basicTemplateItems.import": "Import",
  "templatePickerHelpers.mobileBasicTemplateItems.pageWithIcon":
    "Page with icon",
  "templatePickerHelpers.mobileBasicTemplateItems.emptyPage": "Empty page",
  "templatePickerHelpers.databaseTemplateNames.table": "Table",
  "templatePickerHelpers.databaseTemplateNames.board": "Board",
  "templatePickerHelpers.databaseTemplateNames.list": "List",
  "templatePickerHelpers.databaseTemplateNames.calendar": "Calendar",
  "templatePickerHelpers.databaseTemplateNames.gallery": "Gallery",
  "templatePickerHelpers.databaseTemplateNames.timeline": "Timeline",
  "customizePageMenuVisibilitySelect.hide.label": "Always hide",
  "customizePageMenuVisibilitySelect.off.label": "Off",
  "customizePageMenuVisibilitySelect.show.label": "Always show",
  "customizePageMenuVisibilitySelect.expanded.label": "Expanded",
  "customizePageMenuVisibilitySelect.hideIfEmpty.label": "Hide when empty",
  "customizePageMenuVisibilitySelect.collapsed.label": "Show in popover",
  "discussionInput.defaultPlaceholder.addComment": "Add a comment…",
  "clipboardActions.pasteFileIntoCommentError.message":
    "Sorry, you cannot paste files into a comment.",
  "updateSidebar.placeholder.addComment": "Reply...",
  "pageViewBlock.untitledPage.placeholder": "Untitled",
  "embedBlock.embedButton.label": "Embed link",
  "embedBlock.linkPrompt.caption":
    "Works with links of PDFs, Google Drive, Google Maps, CodePen…",
  "embedBlock.pastePrompt": "Paste in https://…",
  "embedBlock.invalidLinkError.message": "Please enter a valid link.",
  "embedBlock.embedTab.title": "Embed",
  "trashActions.deletePagePermanentlyDialog.prompt":
    "Are you sure you want to delete this page permanently?",
  "trashActions.deletePagePermanentlyDialog.confirmDeleteButton.label":
    "Yes. Delete this page",
  "duplicateActions.offlineError.message":
    "Please go online to copy this block.",
  "clipboardActions.offlineError.message":
    "Please go online to copy this block.",
  "codeBlock.searchPrompt": "Search for a language…",
  "spaceActions.deletingWorkspace.loadingMessage": "Deleting workspace…",
  "spaceActions.dialogError.createWorkspaceError.goOnline.message":
    "Please go online to create your workspace.",
  "spaceActions.dialogError.createWorkspaceError.message":
    "Sorry! We could not create your workspace. Please try again.",
  "spaceActions.dialogError.createWorkspaceError.notLoggedIn.message":
    "Must be logged in.",
  "spaceActions.dialogError.moveContentError.goOnline.message":
    "Please go online to move content to another space.",
  "spaceActions.dialogError.moveContentError.cannotMovePages.message":
    "Cannot move these pages at once.",
  "spaceActions.dialogError.couldNotMoveContentError.message":
    "Sorry! We could not move this content. Please try again.",
  "spaceActions.dialogError.movetoWorkspace.notLoggedIn.message":
    "Must be logged in.",
  "spaceActions.dialogError.createTemplatesInSpace.invalidStorage.message":
    "Invalid space data.",
  "spaceActions.dialogError.forkPageError.message": "Could not fork page.",
  "spaceActions.dialogError.navigateToWorkspace.invalidStorage.message":
    "Invalid space data.",
  "spaceActions.createGettingStartedPage.copyNotCreated.error":
    "Client copy could not be created.",
  "spaceActions.dialogError.createTemplatesInWorkspace.invalidStorage.message":
    "Invalid space view data.",
  "spaceActions.dialogError.createTemplatesInWorkspace.invalidUserSettings.message":
    "Invalid user settings data.",
  "spaceActions.dialogError.joinWorkspace.invalidWorkspaceStorage.message":
    "No space view data was created.",
  "spaceActions.dialogError.createOrUpdatePermissionGroup.invalidWorkspaceStorage.message":
    "No local data about this workspace.",
  "saveChanges.errorDialog.blocksCannotBeMovedInsideSelf.message":
    "Hey there! Blocks cannot be moved inside of themselves.",
  "databaseViewActions.importingCSV.loadingMessage": "Importing",
  "databaseViewActions.uploadingCSV.loadingMessage": "Uploading",
  "databaseViewActions.importFailedError.message": "Import failed.",
  "router.loginWithSamlError.message": "Could not log you in.",
  "loginActions.loggingInWithApple.errorMessage":
    "Something went wrong while trying to log in with Apple.",
  "frontPricingCard.personalFreePlan.title": "Personal",
  "frontPricingCard.personalProPlan.title": "Personal Pro",
  "frontPricingCard.teamPlan.title": "Team",
  "frontPricingCard.enterprisePlan.title": "Enterprise",
  "frontPricingCard.evernotePremiumComparison.title": "Evernote Premium",
  "frontPricingCard.personalPlanComparison.title": "Notion Personal",
  "frontPricingCard.personalFreePlan.oneliner":
    "For organizing every corner of your life.",
  "frontPricingCard.personalProPlan.oneliner":
    "For power users who want to do even more.",
  "frontPricingCard.teamPlan.oneliner":
    "Collaborate with your entire team in one place.",
  "frontPricingCard.enterprisePlan.oneliner":
    "Controls & support to run your company.",
  "frontPricingCard.evernotePremiumComparison.oneliner": "Basic note taking.",
  "frontPricingCard.personalPlanComparison.oneliner":
    "For organizing every corner of your life.",
  "spaceSubscriptionBilling.setBillingInterval.pricePerMonth":
    "{monthlyPrice} per month",
  "spaceSubscriptionBilling.setBillingInterval.pricePerMonth.perMember":
    "{monthlyPrice} per member per month",
  "transactionHelpers.requestTooLargeError.message":
    "Sorry, that request was too large. Try import instead?",
  "bootupHelpers.iosErrorRequiresReinstall.errorMessage":
    "Hello, we've noticed an issue with your iOS app. Please delete this app and re-install it from the App Store.",
  "sidebarTrash.filterBy.placeholder": "Filter by page title…",
  "outlinerViewAllPopover.search.placeholder": "Search for shared pages",
  "requestAccessForm.messageInput.placeholder": "Message (optional)",
  "templateChecklist.quickNote.a.title": "Import your workspace (A)",
  "templateChecklist.quickNote.a.description":
    "See your docs and wiki in action (A)",
  "templateChecklist.quickNote.b.title": "Import your workspace (B)",
  "templateChecklist.quickNote.b.description":
    "See your docs and wiki in action (B)",
  "templateChecklist.quickNote.c.title": "Import your workspace (C)",
  "templateChecklist.quickNote.c.description":
    "See your docs and wiki in action (C)",
  "updateSidebar.comments.mode.resolvedOption": "Resolved comments",
  "updateSidebar.comments.mode.unresolvedOption": "Open comments",
  "updateSidebar.comments.filter.button.resolvedMode": "Resolved",
  "updateSidebar.comments.filter.button.unresolvedMode": "Open",
  "onboardingChecklistButton.whatIsNotion.displayName": "What is Notion?",
  "onboardingChecklistButton.createPages.displayName": "Create pages",
  "onboardingChecklistButton.createContent.displayName": "Create content",
  "onboardingChecklistButton.shareYourWork.displayName": "Share your work",
  "onboardingChecklistButton.collaborateWithOthers.displayName":
    "Collaborate with others",
  "onboardingChecklistButton.tipsAndTricks.displayName": "Tips and tricks",
  "onboardingChecklistButton.nextStage.complete": "You're finished! 🎉",
  "importActions.uploadingOneFile.loadingMessage":
    "Uploading… ({percentComplete}%)",
  "importActions.uploadingMultipleFilesNotStarted.loadingMessage":
    "Uploaded 0 of {totalNumberOfFiles}",
  "importActions.uploadingMultipleFilesInProgress.loadingMessage":
    "Uploaded {numberOfUploadedFiles} of {totalNumberOfFiles}",
  "importActions.uploadingMultipleFilesComplete.loadingMessage":
    "Uploaded {totalNumberOfFiles} of {totalNumberOfFiles}",
  "importActions.importingOneFile.loadingMessage": "Importing…",
  "importActions.importingMultipleFilesNotStarted.loadingMessage":
    "Imported 0 of {totalNumberOfFiles}",
  "importActions.importingMultipleFilesInProgress.loadingMessage":
    "Imported {numberOfImportedFiles} of {totalNumberOfFiles}",
  "importActions.importingMultipleFilesComplete.loadingMessage":
    "Imported {totalNumberOfFiles} of {totalNumberOfFiles}",
  "importActions.importingFromTrello.loadingMessage":
    "{importingCount, plural, one {Importing {importingCount} board from Trello} other {Importing {importingCount} boards from Trello}}",
  "importActions.importingFromAsana.loadingMessage":
    "{importingCount, plural, one {Importing {importingCount} project from Asana} other {Importing {importingCount} projects from Asana}}",
  "importActions.importingFromEvernote.loadingMessage":
    "{importingCount, plural, one {Importing {importingCount} notebook from Evernote} other {Importing {importingCount} notebooks from Evernote}}",
  "importActions.importFailedError.message": "Import failed.",
  "importActions.trelloImportFailedError.message": "Trello import failed.",
  "importActions.asanaImportFailedError.message": "Asana import failed.",
  "importActions.evernoteImportFailedError.message": "Evernote import failed.",
  "importActions.importTitle": "Import {date}",
  "trelloActions.authenticatingWithTrello.loadingMessage":
    "Authenticating with Trello…",
  "trelloActions.loginPopupModal.title": "Trello login",
  "evernoteActions.authenticatingWithEvernote.loadingMessage":
    "Authenticating with Evernote…",
  "evernoteActions.loginPopupModal.title": "Evernote login",
  "asanaActions.authenticatingWithAsana.loadingMessage":
    "Authenticating with Asana…",
  "asanaActions.loginWithAsanaPopupModal.title": "Asana login",
  "csatPopup.additionalFeedback.placeholder": "Tell us more...",
  "enterpriseContactModal.additionalFeedback.placeholder":
    "What would you like to learn more about?",
  "mediaPicker.embedPlaceholder.text": "Paste in https://…",
  "mediaPicker.emojiFilter.text": "Filter…",
  "mediaPicker.unsplashPlaceholder.text": "Search for an image…",
  "mentionMenu.personPageDate.prompt2": "Mention a person, page, or date…",
  "mentionMenu.personPage.prompt2": "Mention a person or page…",
  "mentionMenu.personDate.prompt2": "Mention a person or date…",
  "mentionMenu.pageDate.prompt2": "Mention a page or date…",
  "mentionMenu.person.prompt2": "Mention a person…",
  "mentionMenu.date.prompt2": "Mention a date…",
  "mentionMenu.page.prompt2": "Type to link or add page…",
  "mentionMenu.addPage.prompt2": "Type to add or link page…",
  "mentionMenu.date.autocomplete.today": "Today",
  "mentionMenu.date.autocomplete.nextTuesday": "Next Tuesday 3pm",
  "mentionMenu.date.autocomplete.reminder": "Remind tomorrow 9am",
  "mentionMenu.date.remindAtDateTime": "Remind {dateTime}",
  "mentionMenu.noSearchResults.title": "No results",
  "embedMenu.action.image": "Embed image",
  "embedMenu.action.video": "Embed video",
  "embedMenu.action.tweet": "Embed Tweet",
  "embedMenu.action.drive": "Embed Google Drive",
  "embedMenu.action.gist": "Embed GitHub Gist",
  "embedMenu.action.figma": "Embed Figma",
  "embedMenu.action.invision": "Embed Invision project",
  "embedMenu.action.abstract": "Embed Abstract project",
  "embedMenu.action.framer": "Embed Framer prototype",
  "embedMenu.action.whimsical": "Embed Whimsical board",
  "embedMenu.action.sketch": "Embed Sketch document",
  "embedMenu.action.excalidraw": "Embed excalidraw",
  "embedMenu.action.replit": "Embed a repl",
  "embedMenu.action.miro": "Embed Miro board",
  "embedMenu.action.audio": "Embed audio",
  "embedMenu.action.maps": "Embed Google Map",
  "embedMenu.action.loom": "Embed Loom",
  "embedMenu.action.typeform": "Embed Typeform",
  "embedMenu.action.codepen": "Embed CodePen",
  "embedMenu.action.pdf": "Embed PDF",
  "embedMenu.action.createEmbed": "Create embed",
  "embedMenu.actions.linkToPage.title": "Link to page",
  "embedMenu.actions.mentionPage.title": "Mention page",
  "embedMenu.actions.createLinkedDatabase.title": "Create linked database",
  "embedMenu.actions.createBookmark.title": "Create bookmark",
  "embedMenu.actions.createTransclusion.title": "Paste and sync",
  "embedMenu.actions.dismiss.title": "Dismiss",
  "blockPasteMenu.actions.createTransclusion.title": "Paste and sync",
  "blockPasteMenu.actions.linkToPage.title": "Link to page",
  "blockPasteMenu.actions.dismiss.title": "Dismiss",
  "accountActions.deletingAccount.loadingMessage": "Deleting your account…",
  "accountActions.deletingAccount.noUserToDeleteMessage":
    "No account to delete.",
  "spaceBasicSettings.domainSection.workspaceDomainInput.placeholder": "URL",
  "spaceBasicSettings.workspaceDomain.tooltip": "Click to copy link",
  "spaceBasicSettings.nameInput.placeholder": "e.g. company name",
  "spaceBasicSettings.allowedEmailDomainsSection.emailDomainInput.placeholder":
    "Type an email domain…",
  "guestPagesPopup.removeGuest.updatingMessage": "Updating…",
  "guestPagesPopup.addMemberPermission.updatingMessage": "Updating…",
  "churnSurveyMenu.reasons.missingFeaturesPlaceholder":
    "Let us know which features are missing...",
  "churnSurveyMenu.reasons.reasonOtherPlaceholder": "Tell us more...",
  "churnSurveyMenu.alternatives.alternativeOtherPlaceholder": "Tell us more...",
  "churnSurveyMenu.other.otherFeedbackPlaceholder":
    "Our team will review your feedback to make Notion better.",
  "spaceSubscriptionBilling.applyCreditButton.label": "Apply credit",
  "spaceSubscriptionBilling.updateButton.label": "Update",
  "spaceSubscriptionBilling.addButton.label": "Add",
  "spaceSubscriptionBilling.apply.label": "Apply",
  "couponEntryInput.placeholder": "Coupon code",
  "couponEntryInput.error.noPromo": "Invalid coupon code",
  "regionalFormatSettings.customSettingOption.fullDate.full": "Full date",
  "regionalFormatSettings.customSettingOption.fullDate.long": "Long",
  "regionalFormatSettings.customSettingOption.fullDate.medium": "Medium",
  "regionalFormatSettings.customSettingOption.fullDate.short": "Short",
  "regionalFormatSettings.customSettingOption.fullDate.iso": "ISO",
  "regionalFormatSettings.customSettingOption.fullDate.custom": "Custom",
  "regionalFormatSettings.customSettingOption.shortDate.short": "Short",
  "regionalFormatSettings.customSettingOption.shortDate.iso": "ISO",
  "regionalFormatSettings.customSettingOption.shortDate.custom": "Custom",
  "regionalFormatSettings.customSettingOption.number.number": "Number",
  "regionalFormatSettings.customSettingOption.number.withCommas":
    "Number with commas",
  "regionalFormatSettings.customSettingOption.number.percent": "Percent",
  "regionalFormatSettings.customSettingOption.weekStartOn.sunday": "Sunday",
  "regionalFormatSettings.customSettingOption.weekStartOn.monday": "Monday",
  "regionalFormatSettings.defaultSetting.fullDate": "Full date",
  "regionalFormatSettings.defaultSetting.shortDate": "Short date",
  "regionalFormatSettings.defaultSetting.numbers": "Numbers",
  "regionalFormatSettings.defaultSetting.weekStart": "Week starts",
  "regionalFormatSettings.defaultRegionalSettings.startDayOfWeek.sunday":
    "Sunday",
  "regionalFormatSettings.defaultRegionalSettings.startDayOfWeek.monday":
    "Monday",
  "settings.regionSettings.regionSearch": "Search for a region...",
  "appearanceSetting.system.label": "Use system setting",
  "appearanceSetting.light.label": "Light",
  "appearanceSetting.dark.label": "Dark",
  "searchPageFilter.searchTokenFilter.tokenInput.placeholder": "Search pages",
  "searchPageFilter.searchTokenFilter.resultSection.title": "Select a page",
  "reportPage.reportReasons.phishing_or_spam": "Phishing or spam",
  "reportPage.reportReasons.inappropriate_content": "Inappropriate content",
  "reportPage.reportReasons.other_content_policy_violation": "Other",
  "reportPage.additionalInformation.placeholder":
    "Add additional information (optional)",
  "sidebarCreateTeamModal.teamScreen.namePlaceholder": "Acme Labs",
  "sidebarCreateTeamModal.teamScreen.descriptionPlaceholder":
    "Details about your team",
  "topbar.shareButton.title": "Share",
  "sidebar.quickFindSearch.label": "Quick Find",
  "updatesButton.allUpdates.sidebarButton": "All Updates",
  "sidebarSettingsButton.settingsAndMembers": "Settings & Members",
  "sidebar.workspaceSection.header": "Workspace",
  "sidebar.privateSection.header": "Private",
  emptyPageTitle: "Untitled",
  "sidebar.openTemplatePickerButton": "Templates",
  "sidebar.openImportModalButton": "Import",
  "sidebarTrashButton.text": "Trash",
  "sidebar.newPage.button": "New page",
  "withImageRepositioning.dragImage.text": "Drag image to reposition",
  "pageCover.changeCover.text": "Change cover",
  "pageCover.reposition.text": "Reposition",
  "pageViewBlock.addDescription.button": "Add description",
  "database.actionBar.propertiesButtonTitle": "Properties",
  "database.actionBar.groupByButton.label": "Group by",
  "database.actionBar.filterButtonTitle": "Filter",
  "database.actionBar.sortButtonTitle": "Sort",
  "database.actionBar.searchButtonTitle": "Search",
  "database.actionBar.newButton": "New",
  "database.boardView.uncategorizedColumnTitle": "No {name}",
  "database.boardView.addGroupButtonTitle": "Add a group",
  "database.boardView.addItemButtonTitle": "New",
  "updateSidebar.updatesContainer.empty": "No updates on this page yet.",
  "moveBlockMenu.moveToPrivatePages":
    "Move to <mediumtext>Private pages</mediumtext>",
  "spaceSettings.sidebar.workspaceSettingsSection.title": "Workspace",
  "spacePermissionsSettings.membersTab.title": "Members ({numberOfMembers})",
  "spaceBasicSettings.groupsTab.title": "Groups",
  "spacePermissionsSettings.helpButton.caption":
    "Learn about adding members to your workspace",
  "spacePermissionsSettings.spaceMembers.inviteLink.title": "Invite link",
  "spacePermissionSettings.spaceMembers.inviteLink.caption":
    "Share this secret link to invite people to this workspace. Only admins can see this.",
  "spacePermissionSettings.spaceMembers.inviteLink.resetLink":
    "You can <resetlink>reset the link</resetlink> to generate a new invite link.",
  "spacePermissionsSettings.spaceMembers.members.title": "Members",
  "spaceBasicSettings.membersTab.manageMembersWithLinkCaption":
    "Manage members here.",
  "spacePermissionsSettings.userTable.userColumn.header": "User",
  "spacePermissionsSettings.userTable.accessLevelColumn.header": "Access level",
  "inviteUserButton.addMemberLabel": "Add members",
  "blockAuthorInfo.label": "Last edited by {author}",
  "topbar.moreButton.collectionHelpButton": "Learn about databases",
  "sidebarTrash.allPages.tabHeader": "All pages",
  "sidebarTrash.inCurrentPage.tabHeader": "In current page",
  "sidebarTrash.filterBy.noMatchesPrompt": "No matches found.",
  "sidebarTrash.learnMore.prompt": "Learn about deleting and restoring pages",
  "sidebar.openTemplatePickerButton.tooltip":
    "View and clone templates into your workspace.",
  "pageTemplateModal.useTemplateButton.label": "Use this template",
  "pageTemplateModal.goToFullTemplateGalleryButton.label":
    "Browse more templates",
  "pageViewBlock.add.pageCover": "Add cover",
  "pageViewBlock.hideDescription.button": "Hide description",
  "collection.boardView.hiddenColumns.label": "Hidden columns",
  "search.recentlyVisitedPages.title": "Recent pages",
  "search.clearRecentsButton.text": "Clear",
  "search.recentSearches.title": "Recent searches",
  "updatesModal.mentionsTab.title": "Inbox",
  "updatesModal.followedUpdatesTab.title": "Following",
  "updatesModal.allUpdatesTab.title": "All",
  "updatesModal.archiveTab.title": "Archived",
  "updatesModal.spaceUpdatesTab.allArchivedTitle": "You're all caught up",
  "updatesModal.spaceUpdatesTab.allArchived":
    "When someone @mentions you, replies to your comments, or invites you to a page, you’ll be notified here.",
  "sidebarSwitcherMultiAccount.addAccountButton.label": "Add another account",
  "sidebarSwitcherMultiAccount.menuItem.logoutAllButton.label": "Log out all",
  "sidebarMultiSwitcher.desktopAppGetMobileApp.prompt": "Get iOS & Android app",
  "sidebarSwitcherMultiAccount.addAccountModal.cancelButton.label": "Cancel",
  "sidebarSwitcherMultiAccount.addAccount.title": "Add an account",
  "sidebarSwitcherMultiAccount.addAccount.description":
    "Use an existing account, or sign up with a new email. Your current account will remain logged in.",
  "loginForm.loginWithGoogleButton.label": "Continue with Google",
  "loginForm.loginWithAppleButton.label": "Continue with Apple",
  "loginForm.emailInput.label": "Email",
  "loginForm.continueWithEmailButton.label": "Continue with email",
  "loginForm.forgotPasswordLink": "Forgot password?",
  "loginForm.otherLoginOptions.continueWithSAML":
    "You can also <samlloginlink>continue with SAML SSO</samlloginlink>",
  "importModal.importButton.label": "Import",
  "importModal.helpButton.label": "Learn about importing",
  "importOptions.textMarkdown.title": "Text & Markdown",
  "database.propertiesMenu.propertiesFor": "Properties for",
  "database.viewPropertiesMenu.cardPreviewButtonTitle": "Card preview",
  "database.viewPropertiesMenu.cardSizeButtonTitle": "Card size",
  "database.propertiesMenu.addPropertyButtonTitle": "Add a property",
  "blocks.blockMenu.collectionHelpButton": "Learn about databases",
  "database.filterMenu.filtersFor": "Filters for",
  "database.filterMenu.emptyState1.v2": "Use a filter to:",
  "database.filterMenu.emptyState2.v2": "Show tasks assigned to me.",
  "database.filterMenu.emptyState3.v2": "Show only notes with a certain tag.",
  "database.filterMenu.emptyState4.v2": "Hide completed tasks.",
  "database.filterMenu.addFilterButtonTitle": "Add a filter",
  "database.templatesList.templatesFor": "Templates for",
  "database.templatePicker.emptyPageTitle": "Empty page",
  "database.templateView.newTemplateButton": "New template",
  "helpButton.helpSupportGuide.menuItem": "Help & support guide",
  "helpButton.sendMessage.menuItem": "Send us a message",
  "helpButton.salesChat.menuItem": "Chat with sales",
  "helpButton.keyboardShortcuts.menuItem": "Keyboard shortcuts",
  "helpButton.whatsNew.menuItem": "What's new?",
  "helpButton.twitter.menuItem": "Twitter – @{notionHandle}",
  "appVersionMenuItem.desktopVersion.menuItem":
    "Desktop {desktopVersionFormatted}",
  "appVersionMenuItem.lastUpdatedTime.menuItem": "Updated {lastUpdatedTime}",
  "topbar.updatesButton.openSidebartTooltip": "View all updates",
  "updateSidebar.header.commentsLabel": "Comments",
  "updateSidebar.commentContainer.emptyTitleResolved":
    "No resolved comments yet",
  "updateSidebar.commentContainer.emptyResolved":
    "Resolved comments on this page will appear here",
  "pageViewBlock.add.pageComment": "Add comment",
  "embedBlock.captionForLink.button": "Caption",
  "embedBlock.originalLink.button": "Original",
  "pageMoreButton.wordCount.caption": "Word count: {count}",
  "notificationSettings.notificationSection.title": "Notifications",
  "connectedAppsSettings.connectedAppsSection.title": "Connected apps",
  "languageSettings.languageSection.title": "Language & region",
  "languageRegionSettings.language.label": "Language",
  "languageSettings.languageSwitcher.subtitle":
    "Change the language used in the user interface.",
  "calendarSettings.startWeekOnMonday.label": "Start week on Monday",
  "calendarSettings.startWeekOnMonday.message":
    "This will change how all calendars in your app look.",
  "appearanceSettings.title": "Appearance",
  "appearanceSettings.description.message":
    "Customize how Notion looks on your device.",
  "userCreditSettings.creditBalanceSection.title": "Credit balance",
  "userCreditSettings.creditBalanceSection.creditBalanceMessage":
    "Your current credit balance is {creditBalance}.",
  "userCreditSettings.creditBalanceSection.freeMonthMessage":
    "{numberOfMonths, plural, one {That's equivalent to <b>{numberOfMonths} month</b> of the Personal Pro Plan.} other {That's equivalent to <b>{numberOfMonths} months</b> of the Personal Pro Plan.}}",
  "userCreditSettings.otherWaysToEarnCreditSectionAlt.title":
    "Ways to earn credit",
  "userCreditSettings.otherWaysToEarnCreditSection.totalCreditSummaryText":
    "Total credit earned",
  "spaceBasicSettings.title": "Workspace settings",
  "spaceBasicSettings.workspaceNameSection.title": "Name",
  "spaceBasicSettings.workspaceNameSection.nameInput.caption":
    "You can use your name or the name of your team. Keep it simple.",
  "spaceBasicSettings.workspaceIconSection.title": "Icon",
  "spaceBasicSettings.workspaceIconSection.caption":
    "Upload an image or pick an emoji. It will show up in your sidebar and notifications.",
  "spaceBasicSettings.domainSection.title": "Domain",
  "spaceBasicSettings.domainSection.workspaceDomainInput.viewPublicPage.caption":
    "Pages shared to web will be under {linkText}.",
  "spaceBasicSettings.domainSection.workspaceDomainInput.joinWorkspace.caption":
    "Anyone with an allowed email domain can join this workspace via {linkText}.",
  "spaceBasicSettings.allowedEmailDomainsSection.title":
    "Allowed email domains",
  "spaceBasicSettings.allowedEmailDomainsSection.emailDomainInput.caption":
    "Anyone with email addresses at these domains can automatically join your workspace.",
  "spaceBasicSettings.PublicHomePageSection.title": "Public home page",
  "spaceBasicSettings.PublicHomePageSection.caption":
    "Access your public home page via {linkText}.",
  "spaceBasicSettings.exportContentSection.title": "Export content",
  "spaceBasicSettings.exportContentSection.exportButton.label":
    "Export all workspace content",
  "spaceBasicSettings.exportContentSection.helpButton.caption":
    "Learn about exporting workspaces.",
  "spaceBasicSettings.exportMembersSection.title": "Export members",
  "upgradeButton.enterprise.text": "Enterprise",
  "spaceBasicSettings.exportMembersSection.exportAsCSVButton.label":
    "Export members as CSV",
  "spaceBasicSettings.exportMembersSection.helpButton.caption":
    "Learn about exporting members.",
  "spaceBasicSettings.dangerousSettingsSection.title": "Danger zone",
  "spaceBasicSettings.dangerousSettingsSection.deleteWorkspaceButton.label":
    "Delete entire workspace",
  "spaceBasicSettings.dangerousSettingsSection.deleteWorkspaceHelpButton.caption":
    "Learn about deleting workspaces.",
  "spaceBasicSettings.updateButton.label": "Update",
  "spaceBasicSettings.cancelButton.label": "Cancel",
  "subscriptionSettings.subscriptionNextChargeMessage.teamPlan":
    "{planInterval, select, month {This workspace’s Team Plan is set to <bold>{planCharge} per month</bold> and will renew on {renewalDate}.} other {This workspace’s Team Plan is set to <bold>{planCharge} per year</bold> and will renew on {renewalDate}.}}",
  "subscriptionSettings.subscriptionStatus.remainingChargeMessage":
    "Adjusted for your account balance, you will be charged {formattedInvoiceNextCharge}.",
  "subscriptionSettings.subscriptionStatus.upcomingInvoiceLink":
    "<upcominginvoicelink>View upcoming invoice</upcominginvoicelink>",
  "pricingGrid.personalPlans.label": "For individuals",
  "pricingGrid.teamPlans.label": "For teams & businesses",
  "pricingGrid.pricingTermToggle.payAnnually.label": "Pay annually",
  "pricingGrid.pricingTermToggle.payMonthly.label": "Monthly",
  "pricingGrid.downgradePlanButton.label": "Downgrade",
  "pricingGrid.currentPlan.largeScreenLabel": "Current plan",
  "pricingGrid.cancelPlanLink": "Cancel plan",
  "pricingGrid.upgradePlanButton.label": "Upgrade",
  "pricingGrid.contactSalesLink": "Contact sales",
  "pricingGrid.comparisonSection.usage.title": "Usage",
  "pricingGrid.planAttribute.blocks.title": "Pages & blocks",
  "pricingGrid.planAttribute.value.unlimitedMembers": "Unlimited",
  "pricingGrid.planAttribute.members.title": "Members",
  "pricingGrid.planAttribute.value.justYou": "Just you",
  "pricingGrid.planAttribute.guests.title": "Guests",
  "pricingGrid.planAttribute.fileUploads.title": "File uploads",
  "pricingGrid.planAttribute.fileUploads.value.5MbFileUploadLimit": "5 MB",
  "pricingGrid.planAttribute.versionHistory.title": "Version history",
  "pricingGrid.planAttribute.versionHistory.value.30DaysSavedHistory":
    "30 days",
  "pricingGrid.planAttribute.versionHistory.value.foreverSavedHistory":
    "Forever",
  "pricingGrid.comparisonSection.collaboration.title": "Collaboration",
  "pricingGrid.planAttribute.realTimeCollaboration.title":
    "Real-time collaboration",
  "pricingGrid.planAttribute.linkSharing.title": "Link sharing",
  "pricingGrid.planAttribute.collaborativeWorkspace.title":
    "Collaborative workspace",
  "pricingGrid.comparisonSection.features.title": "Features",
  "pricingGrid.planAttribute.apps.title": "Web, desktop, & mobile apps",
  "pricingGrid.planAttribute.blockTypes.title": "40+ block content types",
  "pricingGrid.planAttribute.templates.title": "50+ starter templates",
  "pricingGrid.planAttribute.wikiDocsNotes.title": "Wikis, docs, & notes",
  "pricingGrid.planAttribute.databases.title":
    "Databases with rich property types",
  "pricingGrid.planAttribute.databaseViews.title":
    "Table, list, calendar, kanban board, gallery, & timeline views",
  "pricingGrid.planAttribute.contentApi.title.v2": "API",
  "pricingGrid.betaBadge": "Beta",
  "pricingGrid.comparisonSection.adminAndSecurityFeatures.title":
    "Admin & security",
  "pricingGrid.planAttribute.bulkExport.title": "Bulk export",
  "pricingGrid.planAttribute.adminTools.title": "Admin tools",
  "pricingGrid.planAttribute.permissionGroups.title": "Permission groups",
  "pricingGrid.planAttribute.advancedPermissions.title": "Advanced permissions",
  "pricingGrid.planAttribute.advancedSecurity.title":
    "Advanced security controls",
  "pricingGrid.planAttribute.sso.title": "SAML + Single Sign-On (SSO)",
  "pricingGrid.planAttribute.scimApi.title": "User provisioning (SCIM)",
  "pricingGrid.planAttribute.bulkPDFExport.title": "Bulk PDF export",
  "pricingGrid.comparisonSection.support.title": "Support",
  "pricingGrid.planAttribute.prioritySupport.title": "Priority support",
  "pricingGrid.planAttribute.dedicatedManager.title":
    "Dedicated success manager",
  "pricingGrid.planAttribute.customContract.title":
    "Custom contract & invoicing",
  "pricingGrid.planAttribute.earlyAccess.title": "Access new features early",
  "spaceSubscriptionPlans.priceDisclaimer":
    "Prices shown are for annual billing. When billed month-to-month, the <b>Personal Pro Plan</b> is {personalMonthlyPrice} per month, the <b>Team Plan</b> is {teamMonthlyPrice} per member per month, and the <b>Enterprise Plan</b> is {enterpriseMonthlyPrice} per member per month.",
  "spaceSubscriptionPlans.faqSection.title": "FAQ",
  "faq.freeVsPersonalAndTeam.question":
    "How is the free Personal Plan different from the Personal Pro and Team Plans?",
  "faq.freeVsPersonalAndTeam.answer":
    '<p>The biggest difference is how you can collaborate with others.</p><p>The free Personal Plan is designed for individual use, but allows up to 5 unique guests. These are friends, family members, and others you can invite to collaborate with you privately on any page. You can also share a page publicly and turn on commenting or editing access. In the Share menu at the top right, turn on "Share to web" then "Allow editing." Any Notion user with the link will be able to edit your page.</p><p>With the Personal Pro Plan, you can invite unlimited guests for private collaboration. For example, if you run your own business, you can invite all your clients to provide feedback on your work. </p><p>With the Team Plan, you can add members to your workspace so you all share and work on the same content. It also comes with more permission and admin controls so you and your teammates can work together securely. See the plan comparison chart for more details.</p>',
  "faq.overGuestLimitInFreePlan.question":
    "What happens when I go over the guest limit on my Personal Plan?",
  "faq.overGuestLimitInFreePlan.answer":
    "<p>Upgrade to the Personal Pro Plan for unlimited guests, or the Team Plan if you collaborate with the same group of people automatically. You can also review and remove inactive guests in Settings & Members.</p>",
  "faq.teamTrial.question": "How do I try out the Team Plan for free?",
  "faq.teamTrial.answer":
    "<p>When asked how you would like to set up Notion during sign up, select Team, and you’ll be automatically enrolled in a Team Plan trial. You’ll get access to most features of a paid Team Plan, with a 1,000 block storage limit. If your team wants to add more than that, upgrade to the full Team Plan. Details above.</p>",
  "faq.overStorageLimitInFreePlan.question":
    "What happens when I go over the block storage limit on my Team trial?",
  "faq.overStorageLimitInFreePlan.answer":
    "<p>You can still read, edit, and organize existing content blocks as usual, but you won’t be able to add new content blocks.</p><p>However, you can delete existing content blocks to free up your storage.</p>",
  "faq.useNotionForFree.question": "Can I use Notion for free?",
  "faq.useNotionForFree.answer":
    "<p>Absolutely! Notion is free to use indefinitely.</p><p>The Personal Plan is completely free for individual use. The Team Plan has a free trial with a 1,000 block limit, more than enough to try out Notion with your team before upgrading.</p>",
  "faq.whatIsABlock.question": "What is a block?",
  "faq.whatIsABlock.answer":
    "<p>A block is any single piece of content you add to your page, like a paragraph of text, a to-do item, an image, a code block, an embedded file, etc. Think of your page as being made up of these building blocks.</p>",
  "faq.deleteBlocks.question": "Can I delete blocks to free up my storage?",
  "faq.deleteBlocks.answer":
    "<p>Of course! It works just like the storage limit on your phone or computer. If you delete something, you will free up space for more.</p>",
  "faq.studentDiscount.question": "Do you offer student discounts?",
  "faq.studentDiscount.answer":
    "<p>The Personal Pro Plan is free for students and educators. This lets you collaborate with unlimited guests and gives you version history. Simply sign up with your school email address and you’ll immediately gain access to these features.</p><p>If you’re already on a Personal Pro Plan, change the email associated with your account to your school email address to get it for free. If you're already on our free Education Plan, you've been automatically upgraded to the Personal Pro Plan.</p><p><helpcenterlink>Visit the help center to learn more</helpcenterlink></p>",
  "faq.howToEarnCredit.question": "How do I earn credit?",
  "faq.howToEarnCredit.answer":
    "<p>You can earn credit by using Notion across your devices and trying out new features. Go to the Earn Credit tab in Settings & Members to learn more.</p>",
  "faq.howToApplyCredit.question": "How do I apply credit to my workspace?",
  "faq.howToApplyCredit.answer":
    "<p>To apply credit, you must first upgrade to a paid plan. As part of this process, you can choose to apply some or all of your account credit to the plan.</p>",
  "faq.whyBillingInformation.question":
    "Why do you need my billing information if I have enough credit to pay for Notion?",
  "faq.whyBillingInformation.answer":
    "<p>We still require your billing information, even if you applied enough credit to make your first bill $0, because you may run out of credit in the future and we need to be able to charge your account.</p>",
  "faq.runOutOfCredit.question": "What happens if I run out of credit?",
  "faq.runOutOfCredit.answer":
    "<p>If you run out of credit, your account will be charged via your selected payment method.</p>",
  "faq.maximumEarnedCredit.question":
    "Is there a maximum amount of credit I can earn?",
  "faq.maximumEarnedCredit.answer":
    "<p>Yes, you can earn up to {maximumAmountInDollars} in credit.</p>",
  "faq.advancedPermissions.question":
    "What advanced permissions does the paid Team & Enterprise Plans offer?",
  "faq.advancedPermissions.answer":
    '<p>If you are on a free Team trial, you can set the access level on each page to "Full access," "Can view," or "Can comment." That dictates how other users can interact with that page. "Full access" means someone can edit, comment, and share the page with others.</p><p>On paid Team and Enterprise Plans, you have the ability to grant "Can edit" access to other users. This gives someone the ability to edit and comment on that page, but not share it with others. This is especially useful if you do not want your content leaking outside your team.</p><p><contactsales>Contact sales to learn more</contactsales></p>',
  "faq.teamAdminTools.question": "What admin tools come with the Team Plan? ",
  "faq.teamAdminTools.answer":
    "<p>On a free Team trial, every member in your workspace is an admin. This means all of you can adjust team settings and invite other people into the workspace.</p><p>If you want only a few people to have admin abilities, we recommend upgrading to the full Team Plan. It comes with tools that allow you to make only select people admins while everyone else is a member. Members can't edit billing information or security options, and can't share your content outside the workspace.</p>",
  "faq.personalPricing.question":
    "How is pricing calculated for the Personal Pro Plan?",
  "faq.personalPricing.answer":
    "<p>If you upgrade your workspace to Personal Pro, you will be charged a flat fee ($5 monthly or $48 yearly).</p><p>Guests are free of charge, but they can only be added to one page at a time.</p>",
  "faq.teamPricing.question": "How is pricing calculated for the Team Plan?",
  "faq.teamPricing.answer":
    '<p>If you upgrade your workspace to the Team Plan, you will be charged a fee per member ($10 monthly or $96 yearly). For example, if you pay per month and have 5 members, you will be charged $50 each month.</p><p>Guests are free of charge – but they can only access individual pages they are invited to. In other words, guests won’t be able to see all the team pages under the "Workspace" section in the left sidebar.</p>',
  "faq.monthlyAndYearlyBilling.question":
    "Do you have monthly and yearly billing options?",
  "faq.monthlyAndYearlyBilling.answer":
    "<p>Yes! We offer both monthly and yearly billing options. The yearly billing option is always cheaper (an estimated 20% discount). For example, the Team Plan is $10 per member per month when you choose the monthly option, but $8 per member per month if you choose to pay yearly.</p>",
  "faq.addingAndRemovingMembers.question":
    "How does adding and removing members work?",
  "faq.addingAndRemovingMembers.answer":
    "<p>Whether you're on a monthly or yearly billing schedule, your account may be charged on a monthly basis if you make these types of changes. If you added members, your account will be charged a prorated amount based on the percentage of the billing cycle left at the time each member was added. If you removed members, your account will be credited in the same way.</p>",
  "faq.changePlans.question": "What happens when I change plans?",
  "faq.changePlans.answer":
    "<p>Upgrading or downgrading your plan works similarly to adding and removing members. Your account will be charged or credited based on the percentage of the billing cycle left at the time the plan was changed.</p>",
  "faq.cancelPlan.question": "How do I cancel my paid plan?",
  "faq.cancelPlan.answer":
    '<p>Your Notion subscription, annual or monthly, will automatically renew until you cancel it. You can cancel your subscription by going to "Settings & Members" in the left-hand sidebar on a desktop computer, then selecting "Plans," then "Downgrade." After you cancel, you’ll still have access to all the paid features until the end of your billing cycle.</p><p><billingandpaymentlink>More on billing & payment here</billingandpaymentlink></p>',
  "faq.paymentFailure.question":
    "What happens if my payment fails? Like if my credit card expires?",
  "faq.paymentFailure.answer":
    "<p>Your account email will be notified after each failed payment. Payments may be retried up to 4 times within the next month. After this, if the payment did not succeed, you will be downgraded to the free plan.</p>",
  "faq.changePaymentMethod.question": "Can I change my payment method?",
  "faq.changePaymentMethod.answer":
    "<p>You can change your payment method at any time in your billing settings.</p>",
  "faq.refund.question": "How do refunds work?",
  "faq.refund.answer":
    "<p>Our refund policy is simple. If you believe you've made a mistake signing up for a paid Notion subscription online or in-app, please contact us inside the app or email team@makenotion.com. We'll be happy to refund you the full amount (not pro-rated) if you downgrade your subscription within 72 hours of signing up for monthly billing, or within 30 days of signing up for annual billing.</p><p>And if for any reason you're unhappy with Notion, please let us know at team@makenotion.com — we'd love to hear your feedback, and will be happy to work with you to create the best experience possible.</p>",
  "faq.mandatoryRefund.question":
    "What if I live in a region with a mandatory refund policy?",
  "faq.mandatoryRefund.answer":
    "<p>If you live in the European Union, United Kingdom, or another region with a mandatory refund policy, you may be eligible for a monthly subscription refund past 72 hours. For example, customers in the European Union can receive a full refund for a monthly subscription within 14 days of purchase, rather than 72 hours.</p><p>To request a refund, please contact us inside the app or email team@makenotion.com. If you live in a region with a mandatory refund policy, please let us know and we'll be happy to assist you.</p>",
  "faq.serviceLevelAgreement.question":
    "Do you have a Service-Level Agreement (SLA)?",
  "faq.serviceLevelAgreement.answer":
    "<p>We do not offer a standard SLA. For teams with greater than 100 members, we can offer a custom SLA.</p><p><contactsales>Contact sales to learn more</contactsales></p>",
  "faq.importStorageLimit.question":
    "How does importing content from another app affect my block storage limit if I'm on the Team Plan trial?",
  "faq.importStorageLimit.answer":
    "<p>Content created via import doesn’t count toward your workspace’s storage limit. We want to make sure you get started with Notion as smoothly as possible.</p>",
  "faq.paymentProcessor.question": "How is my payment being processed?",
  "faq.paymentProcessor.answer":
    "<p>We use Stripe to process your payment. It’s the same payment provider used by products such as Twitter, Pinterest, and Lyft. We do not handle your credit card information directly.</p>",
  "faq.multipleTeams.question": "Can I belong to multiple teams on Notion? ",
  "faq.multipleTeams.answer":
    "<p>Yes! You can use the same email address to create and join multiple teams. However, each one of these workspaces is on its own plan and needs to be upgraded individually.</p>",
  "faqList.moreQuestionsTextIntercom":
    "Still have more questions? <messagelink>Send us a message</messagelink>",
  "spaceSubscriptionBilling.subscriptionSettingsSection.teamPlanTitle":
    "Team Plan",
  "spaceSubscriptionBilling.subscriptionSettingsSection.changePlanButton.label":
    "Change plan",
  "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.title":
    "Payment method",
  "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.achOrWireTransfer":
    "ACH or Wire Transfer",
  "spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.title":
    "Billing interval",
  "spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.value.yearly":
    "Yearly",
  "spaceSubscriptionBilling.subscriptionSettingsSection.billingEmail.title":
    "Billing email",
  "spaceSubscriptionBilling.subscriptionSettingsSection.yourAddress.title":
    "Your address",
  "spaceSubscriptionBilling.subscriptionSettingsSection.VATID.title":
    "VAT/GST number",
  "spaceSubscriptionBilling.subscriptionSettingsSection.workspaceSubscriptionBalance.title":
    "Workspace balance",
  "startupCouponInlineLink.text": "Have a coupon code?",
  "spaceSubscriptionBilling.invoicesSection.title": "Invoices",
  "spaceSubscriptionBilling.invoicesSection.noInvoicesMessage":
    "This workspace has no payments yet.",
  "securitySAMLSettings.upsell.title":
    "Upgrade for advanced security, SAML & SCIM",
  "securitySAMLSettings.upsell.caption":
    "Upgrade to the Enterprise Plan for advanced security settings, SAML single sign-on, and automated user and group provisioning.",
  "upsellCallout.upgradeButton.text": "Upgrade",
  "upsellCallout.learnMoreButton.text": "Learn more",
  "securitySAMLSettings.securitySection.title": "Security",
  "securitySAMLSettings.securitySection.preventPublicSharing.label":
    "Prevent members from sharing pages publicly",
  "securitySAMLSettings.securitySection.preventPublicSharing.caption":
    "This will disable the Share to web option in the Share menu on every page in this workspace.",
  "securitySAMLSettings.securitySection.disableSpacePageEdits.label":
    "Prevent members from changing the Workspace section",
  "securitySAMLSettings.securitySection.disableSpacePageEdits.caption":
    "This disables the ability for members to create, move, reorder, and delete top-level Workspace pages.",
  "securitySAMLSettings.securitySection.disableGuests.label": "Disable guests",
  "securitySAMLSettings.securitySection.disableGuests.caption":
    "This prevents anyone from inviting people outside the workspace to any page.",
  "securitySAMLSettings.securitySection.disableMovingPages.label":
    "Disable moving or duplicating pages to other workspaces",
  "securitySAMLSettings.securitySection.disableMovingPages.caption":
    "This prevents anyone from moving or duplicating pages to other workspaces via the Move To or Duplicate To action.",
  "securitySAMLSettings.securitySection.disableExport.label": "Disable export",
  "securitySAMLSettings.securitySection.disableExport.caption":
    "This prevents anyone from exporting as Markdown, CSV, or PDF.",
  "securitySAMLSettings.securitySection.disablePersonalIntegrations.label":
    "Prevent members from installing new third party integrations",
  "securitySAMLSettings.securitySection.disablePersonalIntegrations.caption":
    "This prevents any members from installing new third party integrations on this workspace with their Notion account. Admins can always remove existing integrations in the Integrations section.",
  "securitySAMLSettings.SCIMSection.title": "SCIM configuration",
  "securitySAMLSettings.SCIMSection.helpButton.label": "Learn about SCIM",
  "securitySAMLSettings.SAMLSingleSignOnSection.title": "SAML single sign-on",
  "securitySAMLSettings.SAMLSection.helpButton.label":
    "Learn about SAML and single sign-on",
  "spaceIntegrationSettings.title": "All integrations in {workspaceName}",
  "spaceIntegrationSettings.helpButton.caption":
    "Learn about managing integrations",
  "spaceIntegrationSettings.integrationManagementSiteLink.caption":
    "Develop your own integrations",
  "spaceIntegrationSettings.integrationTable.integrationColumn.title":
    "Integration",
  "spaceIntegrationSettings.integrationtable.creationInfoColumn.title":
    "Added by",
  "spaceIntegrationSettings.integrationTable.emptyMessage":
    "No integration installed",
  "embedError.image.unknown": "This image couldn't be loaded.",
  "embedError.learnMore": "Learn more",
  "enterpriseContactModal.initial.header": "Get in touch with sales",
  "enterpriseContactModal.initial.caption":
    "We'll work with you on your setup and help you land on the best plan.",
  "enterpriseContactModal.initial.nameLabel": "Your name",
  "enterpriseContactModal.initial.emailLabel": "Your work email",
  "enterpriseContactModal.initial.companySizeLabel": "Company size",
  "enterpriseContactModal.initial.1_100Label": "1-100",
  "enterpriseContactModal.initial.101_1000Label": "101-1,000",
  "enterpriseContactModal.initial.1000PlusLabel": "1,001+",
  "enterpriseContactModal.initial.questionLabel": "Your question",
  "enterpriseContactModal.selectQuestion.label": "Select question",
  "enterpriseContactModal.initial.sendLabel": "Send",
  "spacePermissionsSettings.groupsTab.caption":
    "Set up groups to conveniently control page permissions from the share menu.",
  "spacePermissionsSettings.groupsTab.createGroupButton.label":
    "Create a group",
  "historyModal.desktopModal.restoreButton.label": "Restore version",
  "historyModal.desktopModal.cancelButton.label": "Cancel",
  "historyModal.desktopModal.learnMoreButton.label": "Learn about page history",
  "tableOfContentsBlock.placeholder":
    "Add headings to create a table of contents. <linktohelpbutton>Learn more</linktohelpbutton>.",
  "exportModal.exportFormat.description": "Export format",
  "exportModal.exportFormatButton.markdownAndCSV.label": "Markdown & CSV",
  "exportModal.includeContents.description": "Include content",
  "exportModal.includeContentTypes.everything.label": "Everything",
  "exportModal.includeSubpages.label": "Include subpages",
  "exportModal.cancelButton.label": "Cancel",
  "exportModal.exportButton.label": "Export",
  "topbar.updatesButton.slackIntegrationButton.tooltip":
    "Connect a Slack channel to get updates about this page and pages within it."
};

const targetPool = require("../json/kr_zh.json");
const fs = require("fs");
const { writeJSON } = require("../util/writeJSON");

const path = require("path");
const _ = require("lodash");

const res = _(en).pick(_.keys(targetPool)).keys().value().reduce((result, key) => {
  result[key] = [
    en[key],
    targetPool[key][1]
  ]
  return result
}, {});

const res2 = _(targetPool).omit(_.keys(en)).keys().value().reduce((result, key) => {
  result[key] = targetPool[key]
  return result
}, {});

writeJSON('./en_zh.json', res);
writeJSON('./kr_zh.json', res2);
