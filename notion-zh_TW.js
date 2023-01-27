// ==UserScript==
// @name         Notion-zh_CN notion的汉化脚本
// @namespace    http://tampermonkey.net/
// @version      2.4.5
// @description  notion的100%汉化脚本，基于官方中文+机器翻译韩文，支持app版本以及网页油猴，地址：https://github.com/reamd7/notion-zh_CN
// @author       reamd7
// @match        *://www.notion.so/*
// @grant        none
// @run-at       document-start
// @copyright    2021, reamd7
// @license      MIT
// ==/UserScript==
(function () {
  "use strict";
  var lang = "zh-CN";
  var isSafari =
    navigator.userAgent.includes("Safari/") &&
    !navigator.userAgent.includes("Chrome/");
  var isElectron = "undefined" != typeof global || window.__isElectron;

  const scriptList = document.querySelectorAll("script[defer]");
  const scriptSrcList = Array.from(scriptList).map((v) => v.src);
  if (isSafari) {
    scriptList.forEach((v) => v.remove());
    document.getElementById("notion-app").remove();
  }

  const script = document.createElement("script");
  script.id = "messages";
  script.type = "application/json";
  script.setAttribute("data-locale", lang);
  script.text = JSON.stringify({
    "AuditLogCSV.exportConfirmationDialog.label": "導出",
    "AuditLogSettings.copyAuditLogEvent": "拷貝行",
    "CollectionSettingsSyncedContentShare.continueButton": "繼續",
    "CollectionSettingsSyncedContentShare.header": "分享同步的內容給",
    "CollectionSettingsSyncedContentShare.option.restrict.caption":
      "你需要使用分享菜單與他人分享",
    "CollectionSettingsSyncedContentShare.option.restrict.title": "只有你",
    "CollectionSettingsSyncedContentShare.option.share.caption.accessToIntegration":
      "將獲得從 {integrationName} 同步內容的訪問權限",
    "CollectionSettingsSyncedContentShare.option.share.caption.sharedWithPublic":
      "和通過鏈接分享的內容",
    "CollectionSettingsSyncedContentShare.option.share.caption.usersWithGuests":
      "{numberOfUsers} 個人（包括你 {numberOfGuests, plural, one {和 {numberOfGuests} 位訪客} other {和 {numberOfGuests} 位訪客}}）",
    "CollectionSettingsSyncedContentShare.option.share.caption.usersWithoutGuests":
      "{numberOfUsers} 個人（包括你）",
    "CollectionSettingsSyncedContentShare.option.share.title":
      "此頁面上的任何人",
    "CollectionSettingsViewMain.editSettings": "編輯 {databaseName} 設置",
    "CollectionViewActionMenu.editSettings": "編輯 {databaseName} 設置",
    "ContextualInvite.permissions_invites.button.cancel": "取消",
    "ContextualInvite.permissions_invites.guest.tooltip":
      "將邀請 {email} 作為訪客",
    "ContextualInvite.permissions_invites.messageLengthWarning":
      "{characters}/{maxCharacters} 個字符",
    "ContextualInvite.permissions_invites.removeLinkWarning":
      "消息中的鏈接將被刪除",
    "ContextualInvite.send_guest_invite.button": "發送邀請",
    "ContextualInvite.send_guest_invite.subtitle":
      "{firstEmail}，其他 {numOfEmails} 個",
    "ContextualInvite.send_guest_invite.title": "邀請到頁面或工作區？",
    "ContextualInvite.share_this_page.subtitle": "邀請作為頁面訪客",
    "ContextualInvite.share_this_page.subtitle2":
      "這些人只能訪問此頁面。他們不會添加到你的賬單中。",
    "ContextualInvite.share_this_page.title": "僅分享此頁面",
    "ContextualInvite.share_this_workspace.subtitle": "邀請到此空間作為成員",
    "ContextualInvite.share_this_workspace.subtitle2":
      "這些人員將有權訪問與 {workspaceName} 中的工作區成員共享的所有內容。將新電子郵件添加為計費成員。",
    "ContextualInvite.share_this_workspace.title": "共享此工作區",
    "ContextualInviteEmail.pageInviteMessage": "{name} 邀請你加入 {pageName}",
    "ContextualInviteEmail.workspaceInviteMessage":
      "{name} 邀請你加入 {workspaceName}",
    "ContextualInviteEmail.workspaceInviteMessageFromBot":
      "你已被邀請加入 {workspaceName}",
    "ContextualInviteEmail.workspacePreview.numberOfMembers":
      "{numberOfMembers} 個成員",
    "ContexualInvites.inviteUserModal.searchInput.placeholder":
      "添加郵箱地址、人員、集成...",
    "ContexualInvites.inviteUserModal.searchInput.placeholderWithTeams":
      "添加電子郵件、人員、團隊空間...",
    "CreateTeamspaceMenu.closedTeamspace.caption":
      "任何人都可以查看此團隊空間，但無法參與",
    "CreateTeamspaceMenu.openTeamspace.caption":
      "任何人都可以查看和參與此團隊空間",
    "CreateTeamspaceMenu.privateTeamspace.caption": "僅向成員顯示此團隊空間",
    "OnboardingSurvery.usecase.question.docs": "文檔編輯和共享",
    "OnboardingSurvery.usecase.question.goals": "公司目標和 OKR",
    "OnboardingSurvery.usecase.question.other": "其他",
    "OnboardingSurvery.usecase.question.project": "項目管理",
    "OnboardingSurvery.usecase.question.wikis": "Wiki / 知識庫",
    "OnboardingSurvey.usecase.question.notes": "個人筆記",
    "Outliner.showNMorePages": "還有 {hiddenPages} 頁",
    "PermissionsInviteSearchRequest.userTooltip.admin":
      "點擊以邀請 {userNameAndEmail}",
    "PermissionsInviteSearchRequest.userTooltip.guest":
      "{userNameAndEmail} 是此工作區的成員",
    "PermissionsInviteSearchRequest.userTooltip.invited_page":
      "{userNameAndEmail} 已受邀訪問此頁面",
    "PermissionsInviteSearchRequest.userTooltip.invited_space":
      "{userNameAndEmail} 已受邀加入此工作區",
    "PermissionsInviteSearchRequest.userTooltip.member":
      "{userNameAndEmail} 是此工作區的管理員",
    "PermissionsInviteSearchRequest.userTooltip.not_in_space":
      "{userNameAndEmail} 是此工作區的訪客",
    "PersonaCollectionModal.initial.1000PlusLabel": "超過 1,001 人",
    "PersonaCollectionModal.initial.101_1000Label": "101 到 1,000 人",
    "PersonaCollectionModal.initial.1_100Label": "1 到 100 人",
    "PersonaCollectionModal.initial.caption":
      "我們想了解更多有關你的信息，以便我們可以讓我們的產品更好地為你服務",
    "PersonaCollectionModal.initial.companySizeLabel": "公司規模",
    "PersonaCollectionModal.initial.header": "請更多地向我們介紹一下你自己",
    "PersonaCollectionModal.initial.questionLabel": "你打算用 Notion 做什麼？",
    "PersonaCollectionModal.initial.roleLabel": "你的角色是什麼？",
    "PersonaCollectionModal.initial.sendLabel": "提交",
    "PersonaCollectionModal.initial.workLabel": "你從事哪一類工作？",
    "PersonaCollectionModal.link.caption": "模板庫",
    "PersonaCollectionModal.prompt.caption":
      "我們想更多地了解你，以便我們可以讓我們的產品更好地為你服務",
    "PersonaCollectionModal.prompt.header": "請更多地介紹一下你自己",
    "PersonaCollectionModal.prompt.skipLabel": "跳過",
    "PersonaCollectionModal.prompt.survey": "參與 20 秒的問卷調查",
    "PersonaCollectionModal.selectQuestion.label": "選擇回答",
    "PersonaCollectionModal.thanks.caption":
      "謝謝你！在<textlink>模板庫中</textlink>發現使用 Notion 的新方法",
      "PersonaCollectionModalQuestionSelect.question.product": "產品管理",
      "PersonaCollectionModalQuestionSelect.question.roleLabel": "角色",
      "PersonaCollectionModalQuestionSelect.question.useLabel": "使用",
      "PersonaCollectionModalQuestionSelect.question.workLabel": "工作",
      "PersonaCollectionModalQuestionSelect.roleQuestion.dept_lead": "部門主管",
      "PersonaCollectionModalQuestionSelect.roleQuestion.exec":
        "行政人員（高層/副總裁）",
      "PersonaCollectionModalQuestionSelect.roleQuestion.member": "團隊成員",
      "PersonaCollectionModalQuestionSelect.roleQuestion.personal":
        "只為自己使用 Notion",
      "PersonaCollectionModalQuestionSelect.roleQuestion.solo":
        "個人企業家/自由職業者",
      "PersonaCollectionModalQuestionSelect.roleQuestion.team_manager":
        "團隊經理",
      "PersonaCollectionModalQuestionSelect.useQuestion.docs": "編輯和共享文檔",
      "PersonaCollectionModalQuestionSelect.useQuestion.goals": "目標設置和跟踪",
      "PersonaCollectionModalQuestionSelect.useQuestion.notes": "個人筆記",
      "PersonaCollectionModalQuestionSelect.useQuestion.other": "其他",
      "PersonaCollectionModalQuestionSelect.useQuestion.project":
        "項目或任務管理",
      "PersonaCollectionModalQuestionSelect.useQuestion.wikis":
        "公司知識庫/內部網",
      "PersonaCollectionModalQuestionSelect.workQuestion.design": "設計",
      "PersonaCollectionModalQuestionSelect.workQuestion.educator": "教育工作者",
      "PersonaCollectionModalQuestionSelect.workQuestion.eng": "工程",
      "PersonaCollectionModalQuestionSelect.workQuestion.finance": "金融",
      "PersonaCollectionModalQuestionSelect.workQuestion.hr": "人力資源",
      "PersonaCollectionModalQuestionSelect.workQuestion.it": "IT",
      "PersonaCollectionModalQuestionSelect.workQuestion.marketing": "市場營銷",
      "PersonaCollectionModalQuestionSelect.workQuestion.operations": "運營",
      "PersonaCollectionModalQuestionSelect.workQuestion.other": "其他",
      "PersonaCollectionModalQuestionSelect.workQuestion.project":
        "項目/計劃管理",
      "PersonaCollectionModalQuestionSelect.workQuestion.sales": "銷售",
      "PersonaCollectionModalQuestionSelect.workQuestion.student": "學生",
      "PersonaCollectionModalQuestionSelect.workQuestion.support": "客戶服務",
      "ReactionBar.emojiModalMenu.title": "反應",
      "ReactionBar.hoverTooltip.text":
        "{names} <medium>使用</medium> {icon} 做出反應。",
      "RelationPropertyPageSection.show.minimalRelations":
        "{numberOfRelations, plural, other {{propertyName} 中的 {numberOfRelations} 個鏈接頁面}}",
      "SearchBadResultsForm.additionalInformation.placeholder":
        "任何其他評論或上下文（例如...）",
      "SearchBadResultsForm.cancelButton.label": "取消",
      "SearchBadResultsForm.reportButton.label": "提交",
      "SearchBadResultsForm.title": "報告錯誤搜索",
      "SearchBadResultsForm.url.placeholder": "鏈接到你正在查找的頁面",
      "SearchResultsFooter.helpText.resultCount":
        "{resultCount, plural, other {<resultwrapper>{resultCount}</resultwrapper> 個結果}}",
      "SearchResultsFooter.helpText.resultCountApproximate":
        "{resultCount, plural, other {<resultwrapper>{resultCount}+</resultwrapper> 個結果}}",
      "SidebarDetailViewHeader.headers.favorites": "收藏夾",
      "SidebarDetailViewHeader.headers.private": "私人",
      "SidebarDetailViewHeader.headers.shared": "已共享",
      "SidebarDetailViewHeader.headers.workspace": "工作區",
      "SpecificTeamMemberToAddRow.addMemberButton.text": "添加",
      "SpecificTeamMemberToAddRow.team_invite_failure": "添加 {user} 失敗",
      "TeamAccessLevelSwitcher.closeOrPrivateTeam.disabledTooltip":
        "你無法更改此設置，因為這是默認團隊。請聯繫工作區管理員尋求幫助。",
      "TeamAccessLevelSwitcher.closeOrPrivateTeam.disabledTooltipNonAdmin":
        "你無法更改此設置，因為這是默認團隊。請聯繫工作區管理員尋求幫助。",
      "TeamAccessLevelSwitcher.closeOrPrivateTeam.disabledTooltipOnlyDefaultTeam":
        "這是工作區中唯一的默認團隊，並且默認團隊必須處於開放狀態。首先將另一個團隊設置為默認團隊。",
      "TeamAccessLevelSwitcher.closeOrPrivateTeamspace.disabledTooltipNonAdmin":
        "你無法更改此設置，因為這是默認團隊空間。請聯繫你的工作區管理員以尋求幫助。",
      "TeamAccessLevelSwitcher.closeOrPrivateTeamspace.disabledTooltipOnlyDefaultTeam":
        "這是工作區中唯一的默認團隊空間，必須打開默認團隊空間。請先將另一個團隊空間設為默認值。",
      "TeamAccessLevelSwitcher.closedTeam.caption":
        "任何人都可以查看，但不能加入",
      "TeamAccessLevelSwitcher.closedTeam.title": "封閉式",
      "TeamAccessLevelSwitcher.closedTeamSpace.title": "封閉式",
      "TeamAccessLevelSwitcher.closedTeamspace.caption":
        "任何人都可以看到但不能加入",
      "TeamAccessLevelSwitcher.openTeam.caption": "任何人都可以查看，並加入團隊",
      "TeamAccessLevelSwitcher.openTeam.title": "開放式",
      "TeamAccessLevelSwitcher.openTeamspace.caption": "任何人都可以查看和加入",
      "TeamAccessLevelSwitcher.openTeamspace.title": "開放式",
      "TeamAccessLevelSwitcher.privateTeam.caption": "只有團隊成員才能查看內容",
      "TeamAccessLevelSwitcher.privateTeam.title": "私人",
      "TeamAccessLevelSwitcher.privateTeamSpace.title": "私人",
      "TeamAccessLevelSwitcher.privateTeamspace.caption": "只有成員才能查看",
      "TeamAccessLevelSwitcher.privateTeamspaceUpsellBusiness.tooltip":
        "升級到商業版以啟用私人團隊空間",
      "TeamAccessLevelSwitcher.privateTeamspaceUpsellEnterprise.tooltip":
        "升級到企業版以啟用私人團隊空間",
      "TeamBreadcrumbPopup.morePages": "其他 {numberOfMorePages} 頁…",
      "TeamBreadcrumbPopup.teamMemberCount":
        "{numberOfMembers, plural, other {{numberOfMembers} 位成員}}",
      "TeamMemberOwnerSelect.guestLabel": "訪客",
      "TeamMemberOwnerSelect.memberCaption":
        "對團隊空間頁面擁有訪問權限，但不能編輯團隊空間設置",
      "TeamMemberOwnerSelect.memberItem.disableOwnerForGroupsTooltip":
        "組不能是團隊空間所有者。",
      "TeamMemberOwnerSelect.memberItem.disableWithOnlyOneOwnerTooltip":
        "團隊必須至少有一個所有者。首先讓其他人成為所有者。",
      "TeamMemberOwnerSelect.memberLabel": "成員",
      "TeamMemberOwnerSelect.ownerCaption":
        "對團隊空間頁面擁有完全訪問權限，並且可以編輯團隊空間設置",
      "TeamMemberOwnerSelect.ownerLabel": "團隊空間所有者",
      "TeamMemberOwnerSelect.permissionOverrideCaption":
        "自定義團隊空間頁面訪問權限",
      "TeamMemberOwnerSelect.permissionsOverride": "自定義權限",
      "TeamMemberOwnerSelect.remove": "移除",
      "TeamMemberOwnerSelect.remove.disabledTooltip.cannotRemoveFromDefault":
        "無法從默認團隊空間中移除成員。",
      "TeamMemberOwnerSelect.remove.disabledTooltip.multiple":
        "移除 {groupName} 和 {numMoreGroups} {numMoreGroups, plural, one {個群組 } other {個群組}}以移除此成員",
      "TeamMemberOwnerSelect.remove.disabledTooltip.single":
        "移除 {groupName} 以移除此成員",
      "TeamMemberOwnerSelect.remove.disabledTooltip.withoutGroupInfo":
        "此成員是通過工作區管理員管理的群組添加的。請與他們聯繫以刪除此成員。",
      "TeamMemberOwnerSelect.roleName.comment_only": "可以評論",
      "TeamMemberOwnerSelect.roleName.content_only_editor": "可以編輯內容",
      "TeamMemberOwnerSelect.roleName.custom": "特別定制",
      "TeamMemberOwnerSelect.roleName.editor": "完整訪問權限",
      "TeamMemberOwnerSelect.roleName.none": "無訪問權限",
      "TeamMemberOwnerSelect.roleName.read_and_write": "可以編輯",
      "TeamMemberOwnerSelect.roleName.reader": "可以查看",
      "TeamMembersPermissionRow.teamPermissionItem.description":
        "{num, plural, other {{num} 個團隊成員}}",
      "TeamMembersPermissionRow.teamspacePermissionItem.description":
        "{num, plural, other {{num} 個人}}",
      "TeamMembersTopSection.header.permissionsSectionTitle": "權限",
      "TeamMembersTopSection.permissionItem.defaultAccessSpaceName":
        "{spaceName} 中的其他所有人",
      "TeamMembersTopSection.permissionItem.defaultAccessTeamSpaceName":
        "團隊空間成員",
      "TeamMembersTopSection.permissionItem.defaultAccessWithoutSpaceName":
        "工作區中的其他所有人",
      "TeamMembersTopSection.permissionItem.defaultAccessWithoutTeamspaceName":
        "團隊空間成員",
      "TeamOwnersPermissionRow.permissionItem.teamspaceOwnersAccessToggleName":
        "團隊空間所有者",
      "TeamOwnersPermissionRow.permissionItem.teamspaceOwnersAccessToggleNameWithoutTeamName":
        "團隊空間所有者",
      "TeamOwnersPermissionRow.teamPermissionItem.description":
        "{num, plural, other {{num} 個團隊所有者}}",
      "TeamOwnersPermissionRow.teamspaceOwnersRowTooltip":
        "默認情況下，團隊空間所有者擁有對團隊空間頁面的完全訪問權限",
      "TeamOwnersPermissionRow.teamspacePermissionItem.description":
        "{num, plural, other {{num} 個人}}",
      "TeamPermissionsInviteOverlay.membersTitle.label":
        "將人員添加到 {teamName}",
      "TeamPermissionsList.search.inThisTeam": "在這個團隊中",
      "TeamPermissionsList.search.notInTeam": "不在團隊中",
      "TeamPermissionsList.search.zeroState": "未找到成員",
      "TeamPermissionsListHeader.nameColumn": "名稱",
      "TeamPermissionsListHeader.roleColumn": "角色",
      "TeamSettings.groups.noResult": "未找到任何群組",
      "TeamSettings.groups.numPeople":
        "{numUsers} {numUsers, plural, one {個人} other {個人}}",
      "TeamSettings.groups.remoevGroupButton": "移除群組",
      "TeamSettings.groups.removeGroupModal.confirmationButton": "移除群組",
      "TeamSettings.groups.removeGroupModal.description":
        "此組中的 {numGroupMembers} {numGroupMembers, plural, one {位成員} other {位成員}} 將從該團隊空間中移除。",
      "TeamSettings.groups.removeGroupModal.title": "確定要移除 {groupName}？",
      "TeamSettings.groups.removeGroupModal.title.noGroupName":
        "確定要移除此群組？",
      "TeamSettings.groups.subtitle":
        "為團隊成員設置群組。只有管理員才能訪問群組。",
      "TeamSettings.groups.title": "群組",
      "TeamSettingsGeneral.generalSettings.description.title": "描述",
      "TeamSettingsGeneral.generalSettings.iconAndName.title": "圖標和名稱",
      "TeamSettingsGeneral.generalSettings.noDescription": "無描述",
      "TeamSettingsGeneral.generalSettings.subtitle":
        "編輯團隊名稱、描述或圖標。",
      "TeamSettingsGeneral.generalSettings.title": "團隊空間詳細信息",
      "TeamSettingsGeneral.settingsChanged": "團隊空間詳細信息已更新。",
      "TeamSettingsMembers.title": "成員",
      "TeamSettingsPermissions.pagePermissions.subtitle":
        "選擇用戶默認擁有的頁面權限。",
      "TeamSettingsPermissions.pagePermissions.title": "權限",
      "TeamSettingsPermissions.settingSelect.whoCanEditSidebarPinnedPages.upgradeToBusinessTooltip":
        "升級到商業版以更改此設置",
      "TeamSettingsPermissions.settingSelect.whoCanEditSidebarPinnedPages.upgradeToEnterpriseTooltip":
        "升級到企業版以更改此設置",
      "TeamSettingsPermissions.settingSelect.whoCanEditTeamspacePages.upgradeToBusinessTooltip":
        "升級到商業版以更改此設置",
      "TeamSettingsPermissions.settingSelect.whoCanEditTeamspacePages.upgradeToEnterpriseTooltip":
        "升級到企業版以更改此設置",
      "TeamSettingsPermissions.teamAccess.title": "團隊訪問權限",
      "TeamSettingsPermissions.teamPageAccess.title": "團隊頁面訪問權限",
      "TeamSettingsPermissions.teamspaceAccess.title": "團隊空間訪問權限",
      "TeamSettingsPermissions.whoCanEditSidebarPinnedPages.caption":
        "添加、刪除或重新排序團隊側邊欄頁面",
      "TeamSettingsPermissions.whoCanEditSidebarPinnedPages.teamMembersAndOwners.title":
        "任何團隊成員",
      "TeamSettingsPermissions.whoCanEditSidebarPinnedPages.teamOwners.title":
        "僅限團隊所有者",
      "TeamSettingsPermissions.whoCanEditSidebarPinnedPages.title":
        "誰可以編輯側邊欄固定頁面",
      "TeamSettingsPermissions.whoCanEditTeamspacePages.caption":
        "添加、刪除或重新排序團隊空間側邊欄頁面",
      "TeamSettingsPermissions.whoCanEditTeamspacePages.teamMembersAndOwners.title":
        "任何團隊空間成員",
      "TeamSettingsPermissions.whoCanEditTeamspacePages.teamOwners.title":
        "僅團隊空間所有者",
      "TeamSettingsPermissions.whoCanEditTeamspacePages.title":
        "誰可以編輯團隊空間側邊欄",
      "TeamSettingsPermissions.whoCanInviteTeamMembers.caption":
        "誰可以向團隊添加人員",
      "TeamSettingsPermissions.whoCanInviteTeamMembers.teamMembersAndOwners.title":
        "任何團隊成員",
      "TeamSettingsPermissions.whoCanInviteTeamMembers.teamOwners.title":
        "僅限團隊所有者",
      "TeamSettingsPermissions.whoCanInviteTeamMembers.title":
        "誰可以邀請團隊成員",
      "TeamSettingsPermissions.whoCanInviteTeamspaceMembers.caption":
        "誰可以向團隊空間添加人員",
      "TeamSettingsPermissions.whoCanInviteTeamspaceMembers.teamMembersAndOwners.title":
        "任何團隊成員",
      "TeamSettingsPermissions.whoCanInviteTeamspaceMembers.teamOwners.title":
        "僅團隊空間所有者",
      "TeamSettingsPermissions.whoCanInviteTeamspaceMembers.title":
        "誰可以邀請團隊空間成員",
      "TeamSettingsPermissions.whoCanJoinTeam.everyoneInWorkspace.title":
        "工作區中的所有人",
      "TeamSettingsPermissions.whoCanJoinTeam.inviteOnly.title": "僅限邀請",
      "TeamSettingsPermissions.whoCanJoinTeam.title": "誰可以加入團隊",
      "TeamSettingsPermissions.whoCanSeeTeam.everyoneInWorkspace.title":
        "工作區中的所有人",
      "TeamSettingsPermissions.whoCanSeeTeam.teamMembersOnly.title":
        "僅限團隊成員和所有者",
      "TeamSettingsPermissions.whoCanSeeTeam.title": "誰可以看到團隊",
      "TeamSettingsSecurity.title": "安全性",
      "TeamTeamMembersListSection.sectionTitle.members": "成員",
      "TeamTeamMembersListSection.sectionTitle.membersAndGroups": "成員和群組",
      "TemporarySignUpEmail.signUpLink.continuedBody":
        "附言：此鏈接對你是唯一的，當你使用上面的按鈕或鏈接時，該鏈接將失效。因此，請不要與任何人分享！",
      "TemporarySignUpEmail.signUpLink.linkAlternative":
        "按鈕不起作用？你也可以通過將此 URL 粘貼到瀏覽器中來完成註冊：",
      "TemporarySignUpEmail.signUpLink.subjectLine": "完成註冊 Notion",
      "TemporarySignUpEmail.signUpLink.titleOfEmail": "即將完成！",
      "TemporarySignUpEmail.signUpLink.titleOfEmail.actionLink":
        "繼續前往 Notion",
      "TemporarySignUpEmail.signUpLink.titleOfEmail.text":
        "你的新 Notion 帳戶創建很快就要完成了。點擊下面的按鈕繼續：",
      "UpdateSidebarFollowControl.follow.caption": "接收所有更新和評論通知",
      "UpdateSidebarFollowControl.follow.label": "關注",
      "UpdateSidebarFollowControl.following.label": "關注中",
      "UpdateSidebarFollowControl.unfollow.caption": "不接收更新和評論通知",
      "UpdateSidebarFollowControl.unfollow.label": "取消關注",
      "abstractBlock.embeds.button.label": "嵌入 Abstract",
      "abstractBlock.embeds.caption": "適用於啟用了公共訪問的 Abstract 鏈接",
      "abstractBlock.placeholder": "嵌入 Abstract",
      "accountActions.deletingAccount.loadingMessage": "正在刪除你的帳戶…",
      "accountActions.deletingAccount.noUserToDeleteMessage":
        "沒有要刪除的帳戶。",
      "action.addtoFavorites.name": "添加到最愛",
      "action.alignment.center.name": "居中",
      "action.alignment.left.name": "左對齊",
      "action.alignment.name": "對齊",
      "action.alignment.right.name": "右對齊",
      "action.backgroundColor.blue.fuzzySearchKeyword": "藍色背景 Bluebackground",
      "action.backgroundColor.blue.name": "藍色背景",
      "action.backgroundColor.brown.fuzzySearchKeyword":
        "棕色背景 Brownbackground",
      "action.backgroundColor.brown.name": "棕色背景",
      "action.backgroundColor.default.fuzzySearchKeyword":
        "Default Black White 默認 moren mo'ren 黑 hei 白 bai",
      "action.backgroundColor.default.name": "默認背景",
      "action.backgroundColor.gray.fuzzySearchKeyword":
        "Grey Gray background 灰色 huise hui'se 背景 beijing bei'jing",
      "action.backgroundColor.gray.name": "灰色背景",
      "action.backgroundColor.green.name": "綠色背景",
      "action.backgroundColor.orange.fuzzySearchKeyword":
        "橙色背景 Orangebackground",
      "action.backgroundColor.orange.name": "橙色背景",
      "action.backgroundColor.pink.fuzzySearchKeyword": "粉色背景 Pinkbackground",
      "action.backgroundColor.pink.name": "粉色背景",
      "action.backgroundColor.purple.fuzzySearchKeyword":
        "紫色背景 Purplebackground",
      "action.backgroundColor.purple.name": "紫色背景",
      "action.backgroundColor.red.fuzzySearchKeyword": "紅色背景 Redbackground",
      "action.backgroundColor.red.name": "紅色背景",
      "action.backgroundColor.teal.fuzzySearchKeyword":
        "藍綠色背景 Tealbackground Greenbackground",
      "action.backgroundColor.yellow.fuzzySearchKeyword":
        "黃色背景 Yellowbackground",
      "action.backgroundColor.yellow.name": "黃色背景",
      "action.backtoNotion.name": "回到 Notion",
      "action.bold.name": "加粗",
      "action.calendarBy.name": "日曆顯示",
      "action.caption.name": "標題",
      "action.clearContents.title": "清除內容",
      "action.clearDate.name": "清除日期",
      "action.codePreviewSection.name": "在塊中顯示",
      "action.color.name": "顏色",
      "action.columnHeader.title": "標題行",
      "action.comment.name": "評論",
      "action.commentPage.name": "評論",
      "action.configure.name": "塊設置",
      "action.copiedCodeToClipboard.snackBarMessage": "已將代碼複製到剪貼板",
      "action.copiedLinkToClipboard.snackBarMessage": "已將連接複製到剪貼板",
      "action.copiedLinksToClipboard.snackBarMessage": "已將連接複製到剪貼板",
      "action.copiedPropertyToClipboard.snackBarMessage": "已將屬性複製到剪貼板",
      "action.copiedToClipboard.snackBarMessage": "已復製到剪貼板",
      "action.copiedTokenToClipboard.snackBarMessage": "已將令牌拷貝到剪貼板",
      "action.copyDirectLink.name": "拷貝原始鏈接",
      "action.copyLink.name": "複製塊鏈接",
      "action.copyLinkNavigableType.name": "拷貝鏈接",
      "action.copyLinkToCurrentPage.snackBarMessage":
        "指向當前頁面的鏈接已復製到剪貼板。",
      "action.copyLinks.name": "拷貝全部鏈接",
      "action.copyLinktoView.name": "複製視圖鏈接",
      "action.createEquation.name": "創建公式",
      "action.createLink.name": "創建鏈接",
      "action.createNotionPage.name": "創建您自己的 Notion 頁面",
      "action.createTeamFromPage.caption": "團隊自定義權限和協作的空間",
      "action.createTeamFromPage.name": "轉換為團隊空間",
      "action.customizeCollectionViewBlock.label": "編輯設置",
      "action.customizeCollectionViewBlock.label.dynamic":
        "編輯 {databaseName} 設置",
      "action.customizePage.label": "自定義頁面",
      "action.darkMode.name": "深色模式",
      "action.databaseLock.label": "鎖定數據庫",
      "action.dateOrReminder.description": "在文本中插入日期或提醒。",
      "action.dateOrReminder.title": "日期或提醒",
      "action.delete.name": "刪除",
      "action.deletePages.snackBarMessage": "已移至垃圾箱",
      "action.download.name": "下載",
      "action.duplicate.name": "創建副本",
      "action.duplicatePage.name": "創建副本頁面",
      "action.duplicateTo.name": "保存副本到",
      "action.edit.name": "編輯",
      "action.editPage.name": "編輯",
      "action.editProperty.name": "編輯屬性",
      "action.enter.name": "輸入",
      "action.export.caption": "PDF、HTML、Markdown",
      "action.export.name": "導出",
      "action.filter.name": "篩選",
      "action.fontSmallText.fuzzySearchKeywords":
        "Font Small Text 字體 ziti zi'ti 字號 zihao zi'hao 小字 xiaozi xiao'zi",
      "action.fontSmallText.label": "小字號",
      "action.foregroundColor.blue.fuzzySearchKeyword": "藍色",
      "action.foregroundColor.blue.name": "藍色",
      "action.foregroundColor.brown.fuzzySearchKeyword": "棕色",
      "action.foregroundColor.brown.name": "棕色",
      "action.foregroundColor.default.name": "默認",
      "action.foregroundColor.gray.fuzzySearchKeyword":
        "Grey Gray 灰色 huise hui'se",
      "action.foregroundColor.gray.name": "灰色",
      "action.foregroundColor.green.name": "綠色",
      "action.foregroundColor.orange.fuzzySearchKeyword": "橙色",
      "action.foregroundColor.orange.name": "橙色",
      "action.foregroundColor.pink.fuzzySearchKeyword": "粉色",
      "action.foregroundColor.pink.name": "粉色",
      "action.foregroundColor.purple.fuzzySearchKeyword": "紫色",
      "action.foregroundColor.purple.name": "紫色",
      "action.foregroundColor.red.fuzzySearchKeyword": "紅色",
      "action.foregroundColor.red.name": "紅色",
      "action.foregroundColor.teal.fuzzySearchKeyword": "藍綠色",
      "action.foregroundColor.yellow.fuzzySearchKeyword": "黃色",
      "action.foregroundColor.yellow.name": "黃色",
      "action.fullScreen.name": "全屏",
      "action.fullWidth.label": "全寬",
      "action.group.name": "分組",
      "action.groupBy.name": "分組",
      "action.highlight.name": "高亮",
      "action.import.name": "導入",
      "action.insertBelow.name": "在下面插入",
      "action.insertColumnLeft.title": "在左側插入",
      "action.insertColumnRight.title": "在右側插入",
      "action.insertEmoji.description": "搜索要放在文本中的表情符號。",
      "action.insertEmoji.title": "表情符號",
      "action.insertInlineEquation.description": "在文本中插入數學符號。",
      "action.insertInlineEquation.fuzzySearchKeyword":
        "LaTeX Math Inline Equation $ TeX LaTex 方程式 fangchengshi fang'cheng'shi 數學 shuxue shu'xue 行內 hangnei hang'nei 公式 gongshi gong'shi",
      "action.insertInlineEquation.title": "行內公式",
      "action.insertRowAbove.title": "在上方插入",
      "action.insertRowBelow.title": "在下方插入",
      "action.italic.name": "斜體",
      "action.languageMode.abap": "ABAP",
      "action.languageMode.agda": "Agda",
      "action.languageMode.arduino": "Arduino",
      "action.languageMode.bash": "Bash",
    "action.languageMode.basic": "Basic",
    "action.languageMode.bnf": "BNF",
    "action.languageMode.c": "C",
    "action.languageMode.clojure": "Clojure",
    "action.languageMode.coffeescript": "CoffeeScript",
    "action.languageMode.coq": "Coq",
    "action.languageMode.cplusplus": "C++",
    "action.languageMode.csharp": "C#",
    "action.languageMode.css": "CSS",
    "action.languageMode.cstyle": "Java/C/C++/C#",
    "action.languageMode.dart": "Dart",
    "action.languageMode.dhall": "Dhall",
    "action.languageMode.diff": "Diff",
    "action.languageMode.docker": "Docker",
    "action.languageMode.ebnf": "EBNF",
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
    "action.languageMode.idris": "Idris",
    "action.languageMode.java": "Java",
    "action.languageMode.javascript": "JavaScript",
    "action.languageMode.json": "JSON",
    "action.languageMode.julia": "Julia",
    "action.languageMode.kotlin": "Kotlin",
    "action.languageMode.latex": "LaTeX",
    "action.languageMode.less": "LESS",
    "action.languageMode.lisp": "Lisp",
    "action.languageMode.livescript": "LiveScript",
    "action.languageMode.llvm": "LLVM IR",
    "action.languageMode.lua": "Lua",
    "action.languageMode.makefile": "Makefile",
    "action.languageMode.markdown": "Markdown",
    "action.languageMode.markup": "Markup",
    "action.languageMode.mathematica": "Mathematica",
    "action.languageMode.matlab": "MATLAB",
    "action.languageMode.mermaid": "Mermaid",
    "action.languageMode.name": "語言設置",
    "action.languageMode.nasm": "彙編",
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
    "action.languageMode.purescript": "PureScript",
    "action.languageMode.python": "Python",
    "action.languageMode.r": "R",
    "action.languageMode.racket": "Racket",
    "action.languageMode.reason": "Reason",
    "action.languageMode.ruby": "Ruby",
    "action.languageMode.rust": "Rust",
    "action.languageMode.sass": "Sass",
    "action.languageMode.scala": "Scala",
    "action.languageMode.scheme": "Scheme",
    "action.languageMode.scss": "SCSS",
    "action.languageMode.shell": "Shell",
    "action.languageMode.solidity": "堅固",
    "action.languageMode.sql": "SQL",
    "action.languageMode.swift": "Swift",
    "action.languageMode.toml": "TOML",
    "action.languageMode.typescript": "TypeScript",
    "action.languageMode.vbdotnet": "VB.net",
    "action.languageMode.verilog": "Verilog",
    "action.languageMode.vhdl": "VHDL",
    "action.languageMode.visualbasic": "Visual Basic",
    "action.languageMode.webassembly": "WebAssembly",
    "action.languageMode.xml": "XML",
    "action.languageMode.yaml": "YAML",
    "action.lastUsedHighlight.fuzzySearchKeywords":
      "Color last used 上次使用的顏色 shangcishiyongdeyanse shang'ci'shi'yong'de'yan'se 上次 shangci shang'ci 使用 shiyong shi'yong 顏色 yanse yan'se",
    "action.lastUsedHighlight.title": "上次使用",
    "action.leave.name": "離開",
    "action.listFormat.circle.name": "圓形",
    "action.listFormat.disc.name": "盤型",
    "action.listFormat.letters.default": "默認值",
    "action.listFormat.letters.name": "字母",
    "action.listFormat.letters.roman": "羅馬數字",
    "action.listFormat.name": "列表格式",
    "action.listFormat.numbers.name": "數字",
    "action.listFormat.sectionName": "列表格式",
    "action.listFormat.square.name": "方形",
    "action.lockDatabaseName.name": "鎖定數據庫",
    "action.lockDatabaseViewsName.name": "鎖定視圖",
    "action.lockPage.name": "鎖定頁面",
    "action.logIn.name": "登錄",
    "action.mentionPage.description": "提及頁面並鏈接在文本中。",
    "action.mentionPage.title": "提及頁面",
    "action.mentionPerson.description": "提及某人並向他們發送通知。",
    "action.mentionPerson.title": "提及人員",
    "action.mergewithCSV.name": "與 CSV 合併",
    "action.moveDown.name": "向下移動",
    "action.moveTo.name": "移動到",
    "action.moveUp.name": "向上移動",
    "action.newPageIn.name": "轉換成頁面到",
    "action.noDate.name": "無日期",
    "action.openAllToggles.name": "展開所有折疊列表",
    "action.openAsPage.name": "以全頁面打開",
    "action.openInNewTab.name": "在新選項卡中打開",
    "action.openInNewWindow.name": "在新窗口中打開",
    "action.openPageInNewTab.name": "在新選項卡中打開頁面",
    "action.openasPage.name": "以全頁面打開",
    "action.openinAndroidApp.name": "在安卓應用中打開",
    "action.openinMacApp.name": "在 Mac 應用中打開",
    "action.openinWindowsApp.name": "在 Windows 應用中打開",
    "action.openiniOSApp.name": "在 iOS 應用中打開",
    "action.pageHistory.name": "頁面歷史記錄",
    "action.pageUpdates.title": "更新頁面",
    "action.paste.name": "粘貼",
    "action.properties.name": "屬性",
    "action.propertyVisibility.label": "切換屬性可見性",
    "action.quickFind.name": "快速查找",
    "action.quoteSize.default": "默認",
    "action.quoteSize.large": "大",
    "action.quoteSize.name": "引用大小",
    "action.redo.name": "重做",
    "action.reloadPreview": "重新加載預覽",
    "action.reloadSyncedPage": "重新同步頁面",
    "action.removefromFavorites.name": "從最愛中移除",
    "action.rename.name": "重命名",
    "action.replace.name": "替換",
    "action.reportPage.name": "報告頁面",
    "action.resetZoom.name": "重置縮放",
    "action.resyncPage.name": "刷新離線數據",
    "action.rowHeader.title": "標題列",
    "action.search.name": "搜索",
    "action.search.noResults": "無結果",
    "action.section.actions": "動作",
    "action.section.advancedBlocks": "高級塊",
    "action.section.background": "背景",
    "action.section.background.fuzzySearchKeywords":
      "Color Background 顏色 yanse yan'se 背景 beijing bei'jing",
    "action.section.backgroundColor": "背景顏色",
    "action.section.basicBlocks": "基本塊",
    "action.section.color": "顏色",
    "action.section.database": "數據庫",
    "action.section.embeds": "嵌入塊",
    "action.section.fontStyle": "風格",
    "action.section.inline": "行內",
    "action.section.media": "媒體",
    "action.section.quoteSize": "引用大小",
    "action.section.simpleTableColumn": "列",
    "action.section.syncedDatabases": "同步的數據庫",
    "action.section.textColor": "文本顏色",
    "action.section.turnInto": "轉換成",
    "action.setPageFont.default.caption": "默認",
    "action.setPageFont.default.fuzzySearchKeywords":
      "Font Default 字體 ziti zi'ti 默認 moren mo'ren",
    "action.setPageFont.default.tooltip": "適合任何場景的無襯線字體",
    "action.setPageFont.mono.caption": "等寬體",
    "action.setPageFont.mono.fuzzySearchKeywords":
      "Font Mono 字體 ziti zi'ti 等寬體 dengkuanti deng'kuan'ti",
    "action.setPageFont.mono.tooltip": "適合草稿和筆記",
    "action.setPageFont.serif.caption": "襯線體",
    "action.setPageFont.serif.fuzzySearchKeywords":
      "Font Serif 字體 ziti zi'ti 襯線體 chenxianti chen'xian'ti",
    "action.setPageFont.serif.tooltip": "適合發表長文章",
    "action.shareLink.name": "分享鏈接",
    "action.showCodePreviewFormat.name": "預覽",
    "action.showDeletedPages.name": "顯示已刪除的頁面",
    "action.showOnlyCodeFormat.name": "代碼",
    "action.showSplitViewFormat.name": "拆分",
    "action.signUpForNotion.name": "註冊 Notion",
    "action.signUpOrlogIn.name": "註冊或登錄",
    "action.sort.name": "排序",
    "action.startPublicEditDialog.continueLabel": "繼續",
    "action.startPublicEditDialog.message":
      "當你開始編輯時，頁面所有者將可以看到你的姓名，郵箱地址和頭像。",
    "action.strikeThrough.name": "刪除線",
    "action.subGroupBy.name": "子組",
    "action.syncPage.name": "保存到離線",
    "action.templates.name": "模板",
    "action.timelineBy.name": "時間軸顯示",
    "action.toggleRecordingInputLatency.name": "切換記錄輸入延遲",
    "action.turnInto.name": "轉換成",
    "action.turnIntoCollection.title": "轉換成數據庫",
    "action.turnPreviewIntoMention": "轉換為提及",
    "action.turnintoInline.name": "轉換成內嵌",
    "action.turnintoPage.name": "轉換成頁面",
    "action.turnintoSimpleTable.name": "轉換成簡單的表格",
    "action.underline.name": "下劃線",
    "action.undo.name": "撤消",
    "action.unlockDatabaseName.name": "解鎖視圖",
    "action.unlockPageName.name": "解鎖頁面",
    "action.unpin.name": "從側邊欄移除",
    "action.unsyncPage.name": "從離線中移除",
    "action.unsyncTransclusionContainer.fuzzySearchKeywords":
      "取消同步所有取消分組",
    "action.unsyncTransclusionContainerName.name": "禁用所有同步",
    "action.unsyncTransclusionReference.fuzzySearchKeywords":
      "取消同步取消分組",
    "action.unsyncTransclusionReference.name": "取消同步",
    "action.viewOriginal.name": "查看原始內容",
    "action.whatIsNotion.name": "Notion 是什麼？",
    "action.workAtNotion.name": "在 Notion 中工作",
    "action.wrapAllColumns.name": "對所有列應用換行",
    "action.wrapCode.fuzzySearchKeywords":
      "Wrap Code 代碼 daima dai'ma 換行 huanhang huan'hang",
    "action.wrapCode.label": "代碼換行",
    "action.zoomIn.name": "放大",
    "action.zoomOut.name": "縮小",
    "activateReferral.dialogError.cannotInviteSelf.errorMessage":
      "你不能邀請自己",
    "activateReferral.dialogError.emailNotEligible.errorMessage":
      "此郵箱地址不符合引薦計劃的使用條例。如果你認為這是個錯誤，請與支持人員聯繫。",
    "activateReferral.dialogError.invitationCreditAlreadyApplied.errorMessage":
      "你已經應用了邀請積分。",
    "activateReferral.dialogError.noValidReferral.errorMessage":
      "找不到有效的引薦。",
    "activateReferral.dialogError.referralAlreadyActivated.errorMessage":
      "引薦已被激活。",
    "activateReferral.dialogError.referringUserNotFound.errorMessage":
      "找不到引薦用戶。",
    "activateReferral.dialogError.userAlreadySignedUp.errorMessage":
      "用戶已註冊。",
    "activity.accessRequested.header":
    "{activity.accessRequested.header, plural, other {{authorOrAuthors} 請求訪問 {pageName}}}",
  "activity.accessRequested.messageLabel": "來自{author}的消息",
  "activity.actions.unarchiveButton.label": "取消歸檔",
  "activity.blockEdited.header":
    "{activity.blockEdited.header, plural, other {{authorOrAuthors} 編輯了 {pageTitle}}}",
  "activity.collectionCreated.header":
    "{activity.collectionCreated.header, plural, other {{authorOrAuthors} 創建了 {collectionTitle}}}",
  "activity.collectionEdited.header":
    "{activity.collectionEdited.header, plural, other {{authorOrAuthors} 編輯了 {collectionTitle}}}",
  "activity.collectionPropertyCreated.header":
    "{activity.collectionPropertyCreated.header, plural, other {{authorOrAuthors} 在 {collectionTitle} 中創建了屬性 {collectionPropertyTitle}}}",
  "activity.collectionPropertyDeleted.header":
    "{activity.collectionPropertyDeleted.header, plural, other {{authorOrAuthors} 在 {collectionTitle} 中刪除了屬性 {collectionPropertyTitle}}}",
  "activity.collectionPropertyEdited.header":
    "{activity.collectionPropertyEdited.header, plural, other {{authorOrAuthors} 在 {collectionTitle} 中編輯了屬性 {collectionPropertyTitle}}}",
  "activity.collectionRowCreated.header":
    "{activity.collectionRowCreated.header, plural, other {{authorOrAuthors} 創建了 {pageTitle}}}",
  "activity.collectionRowDeleted.header":
    "{activity.collectionRowDeleted.header, plural, other {{authorOrAuthors} 刪除了 {pageTitle}}}",
  "activity.collectionViewCreated.header":
    "{activity.collectionViewCreated.header, plural, other {{authorOrAuthors} 在 {collectionTitle} 中創建了視圖 {collectionViewTitle}}}",
  "activity.collectionViewDeleted.header":
    "{activity.collectionViewDeleted.header, plural, other {{authorOrAuthors} 在 {collectionTitle} 中刪除了視圖 {collectionViewTitle}}}",
  "activity.collectionViewEdited.header":
    "{activity.collectionViewEdited.header, plural, other {{authorOrAuthors} 在 {collectionTitle} 中編輯了視圖 {collectionViewTitle}}}",
  "activity.commentActivity.header":
    "{activity.commentActivity.header, plural, other {{authorOrAuthors} 評論了 {blockName}}}",
  "activity.deletedGroup.placeholder": "已刪除的群組",
  "activity.emailEdited.header":
    "{activity.emailEdited.header, plural, other {{authorOrAuthors} 將郵箱地址從 {oldEmail} 更改為 {newEmail}}}",
  "activity.mentionActivity.header":
    "{activity.mentionActivity.header, plural, other {{authorOrAuthors} 在 {pageName} 中提及了您}}",
  "activity.pageLocked.header":
    "{activity.pageLocked.header, plural, other {{authorOrAuthors} 鎖定了 {blockTitle}}}",
  "activity.pageUnlocked.header":
    "{activity.pageUnlocked.header, plural, other {{authorOrAuthors} 解鎖了 {blockTitle}}}",
  "activity.permissionGroupTitles.deletedGroup": "已刪除的群組",
  "activity.permissionGroupTitles.untitledGroup": "無標題群組",
  "activity.permissionsActivity.header":
    "{activity.permissionsActivity.header, plural, other {{authorOrAuthors} 加入了 {pageOrSpaceName}}}",
  "activity.refollowPageButton.label": "重新關注此頁面",
  "activity.reminderInActivity.header": "{pageTitle}中的提醒",
  "activity.replyButton.label": "回复",
  "activity.restorePermissionsForActivity.header":
    "{activity.restorePermissionsForActivity.header, plural, other {{authorOrAuthors} 恢復了繼承的 {pageOrSpaceName} 訪問權限}}",
  "activity.restrictPermissionsForActivity.header":
    "{activity.restrictPermissionsForActivity.header, plural, other {{authorOrAuthors} 限制了 {pageOrSpaceName} 的訪問權限}}",
  "activity.topLevelBlockPrivateCreated.header":
    "{activity.topLevelBlockPrivateCreated.header, plural, other {{authorOrAuthors} 創建了私人頁面 {pageTitle}}}",
  "activity.topLevelBlockPrivateDeleted.header":
    "{activity.topLevelBlockPrivateDeleted.header, plural, other {{authorOrAuthors} 刪除了私人頁面 {pageTitle}}}",
  "activity.topLevelBlockWorkspaceCreated.header":
    "{activity.topLevelBlockWorkspaceCreated.header, plural, other {{authorOrAuthors} 創建了工作區頁面 {pageTitle}}}",
  "activity.topLevelBlockWorkspaceDeleted.header":
    "{activity.topLevelBlockWorkspaceDeleted.header, plural, other {{authorOrAuthors} 刪除了工作區頁面 {pageTitle}}}",
  "activity.unarchiveButton.label": "取消歸檔",
  "activity.unfollowPageButton.label": "取消關注此頁面",
  "activity.untitledGroup.placeholder": "無標題的群組",
  "activity.untitledPlaceholder": "無標題",
  "activity.updatedPermissionGroupCreated.header":
    "{activity.updatedPermissionGroupCreated.header, plural, other {{authorOrAuthors} 創建了 {groupName} 群組}}",
  "activity.updatedPermissionGroupDeleted.header":
    "{activity.updatedPermissionGroupDeleted.header, plural, other {{authorOrAuthors} 刪除了 {groupName} 群組}}",
  "activity.updatedPermissionGroupEdit.header":
    "{activity.updatedPermissionGroupEdit.header, plural, other {{authorOrAuthors} 編輯了 {groupName} 群組}}",
  "activity.updatedPermissionGroupEditedDefault.header":
    "{activity.updatedPermissionGroupEditedDefault.header, plural, other {{authorOrAuthors}編輯了 {groupName} 群組}}",
    "activity.updatedPermissionsForActivity.header":
      "{activity.updatedPermissionsForActivity.header, plural, other {{authorOrAuthors} 更新了 {pageOrSpaceName} 的權限}}",
    "activity.userInvitedActivityGroupId.header":
      "{activity.userInvitedActivityGroupId.header, plural, other {{authorOrAuthors} 將您加入了 {groupName} 群組}}",
    "activity.userInvitedActivityGroupIdByBot.header":
      "你已被添加到{groupName}群組}}",
    "activity.userInvitedActivityNavigableBlock.header":
      "{activity.userInvitedActivityNavigableBlock.header, plural, other {{authorOrAuthors} 邀請您加入 {blockName}}}",
    "activity.userInvitedActivityNavigableBlockByBot.header":
      "你已被邀請加入{blockName}",
    "activity.userInvitedActivityOtherInvite.header":
      "{activity.userInvitedActivityOtherInvite.header, plural, other {{authorOrAuthors} 邀請您加入 {spaceName}}}",
    "activity.userInvitedActivityOtherInviteByBot.header":
      "你已被邀請加入{spaceName}",
    "activity.userInvitedToTeamActivity.header":
      "{activity.userInvitedToTeamActivity.header, plural, other {{authorOrAuthors} 邀請您加入 {teamName} 團隊}}",
    "activity.viewMoreButton.label": "查看其餘 {moreCount} 項",
    "activitySection.archiveAction.tooltip": "歸檔此通知",
    "activitySection.authorPhrase.forMoreThanTwoAuthors.label":
      "{numberOfOtherAuthors, plural, other {<b>{firstAuthor}</b>、<b>{secondAuthor}</b>及其他 {numberOfOtherAuthors} 位}}",
    "activitySection.authorPhrase.forNoAuthors.label": "某人",
    "activitySection.authorPhrase.forOneAuthor.label": "<b>{author}</b>",
    "activitySection.authorPhrase.forTwoAuthors.label":
      "<b>{firstAuthor}</b>和<b>{secondAuthor}</b>",
    "activitySection.viewVersionForUpdate.tooltip": "查看本次更新後的版本",
    "activityUpdate.unknownErrorLoadingActivities.message": "出了些問題。",
    "activityUpdates.clearFilters": "清除",
    "activityUpdates.filterMenu.byDate": "日期範圍",
    "activityUpdates.filterMenu.byType.addItemLabel": "添加活動類型",
    "activityUpdates.filterMenu.byType.resultSectionTitle": "活動類型",
    "activityUpdates.filterMenu.byType.title": "搜索類型",
    "activityUpdates.offlineMessage": "請連接網絡後查看動態。",
    "actorHelpers.anonymousPlaceholder": "匿名",
    "actorHelpers.userFullName": "{lastName} {firstName}",
    "adminAPIRequest.loadingMessage": "載入中…",
    "adminConnectionsSettings.autoApproveBuiltByNotion.caption":
      "啟動此選項，以批准所有工作區成員安裝<helpcenterlink>由 Notion 構建</helpcenterlink>的連接。",
    "adminConnectionsSettings.autoApproveBuiltByNotion.title":
      "自動批准<builtbynotion>由 Notion 構建</builtbynotion>的連接",
    "adminConnectionsSettings.connectionRestrictions.allowList.caption":
      "工作區成員只能安裝由管理員預先批准的連接。",
    "adminConnectionsSettings.connectionRestrictions.info.title":
      "管理員可以隨時安裝和批准新連接。",
    "adminConnectionsSettings.connectionRestrictions.off.caption":
      "工作區成員可以安裝任何連接。",
    "adminConnectionsSettings.requireApprovalSetting.allowList.caption":
      "工作區成員只能安裝由管理員預先批准的連接。",
    "adminConnectionsSettings.requireApprovalSetting.allowList.workspaceOwner.caption":
      "工作區成員只能安裝由工作區所有者預先批准的連接。",
    "adminConnectionsSettings.requireApprovalSetting.off.caption":
      "工作區成員可以安裝任何新連接。",
    "adminConnectionsSettings.requireApprovalSetting.title": "禁止成員安裝連接",
    "adminConnectionsSettings.search.button.label":
      "{plusIcon}&nbsp;添加已批准的連接",
    "adminConnectionsSettings.search.input.placeholder": "按名稱或集成 ID 添加",
    "adminConnectionsSettings.table.allowIntegrations.title":
      "已批准的連接 {numberOfIntegrations}",
    "adminConnectionsSettings.table.default.title":
      "所有連接 {numberOfIntegrations}",
    "adminIntegrationSettings.autoApproveBuiltByNotion.builtbyNotion.link":
      "由 Notion 構建",
    "adminIntegrationSettings.autoApproveBuiltByNotion.caption":
      "啟動此選項，批准所有工作區成員安裝 <helpcenterlink>Built by Notion</helpcenterlink> 集成。",
    "adminIntegrationSettings.autoApproveBuiltByNotion.title":
      "自動批准 <builtbynotion>Built by Notion</builtbynotion> 集成",
    "adminIntegrationSettings.integrationRestrictions.allowList.caption":
      "工作區成員只能安裝由管理員預先批准的集成。",
    "adminIntegrationSettings.integrationRestrictions.allowList.title":
      "從批准列表中",
    "adminIntegrationSettings.integrationRestrictions.allowList.workspaceOwners.caption":
      "工作區成員只能安裝由工作區所有者預先批准的集成。",
    "adminIntegrationSettings.integrationRestrictions.info.title":
      "管理員可以隨時安裝和批准新的集成。",
    "adminIntegrationSettings.integrationRestrictions.off.caption":
      "工作區成員可以安裝任何集成。",
    "adminIntegrationSettings.integrationRestrictions.off.title": "關閉",
    "adminIntegrationSettings.requireApprovalSetting.allowList.caption":
      "工作區成員只能安裝由管理員預先批准的集成。",
    "adminIntegrationSettings.requireApprovalSetting.allowList.workspaceOwner.caption":
      "工作區成員只能安裝由工作區所有者預先批准的集成。",
    "adminIntegrationSettings.requireApprovalSetting.off.caption":
      "工作區成員可以安裝任何新集成。",
    "adminIntegrationSettings.requireApprovalSetting.title": "禁止成員安裝集成",
    "adminIntegrationSettings.search.button.label":
      "{plusIcon}&nbsp; 添加批准的集成",
    "adminIntegrationSettings.search.input.placeholder": "按名稱或集成 ID 添加",
    "adminIntegrationSettings.search.label.noResults": "無結果",
    "adminIntegrationSettings.search.subtitle.notionBuilt": "由 Notion 開發",
    "adminIntegrationSettings.search.title.popularIntegrations": "熱門集成",
    "adminIntegrationSettings.table.allowIntegrations.title":
      "批准的集成 {numberOfIntegrations}",
    "adminIntegrationSettings.table.default.title": "所有集成",
    "adminLoginAsUser.loggingInAs.loadingMessage": "以 {userEmail} 登錄",
    "aliasBlock.comment.noAccess.subtitle": "你無權查看此頁面及其評論",
    "aliasBlock.comment.noAccess.title": "無權訪問頁面評論",
    "allTimeZones.Africa/Abidjan": "非洲/阿比讓",
    "allTimeZones.Africa/Accra": "非洲/阿克拉",
    "allTimeZones.Africa/Addis_Ababa": "非洲/亞的斯亞貝巴",
    "allTimeZones.Africa/Algiers": "非洲/阿爾及爾",
    "allTimeZones.Africa/Asmara": "非洲/阿斯馬拉",
    "allTimeZones.Africa/Asmera": "非洲/阿斯梅拉",
    "allTimeZones.Africa/Bamako": "非洲/巴馬科",
    "allTimeZones.Africa/Bangui": "非洲/班吉",
    "allTimeZones.Africa/Banjul": "非洲/班珠爾",
    "allTimeZones.Africa/Bissau": "非洲/比紹",
    "allTimeZones.Africa/Blantyre": "非洲/布蘭太爾",
    "allTimeZones.Africa/Brazzaville": "非洲/布拉柴維爾",
    "allTimeZones.Africa/Bujumbura": "非洲/布瓊布拉",
    "allTimeZones.Africa/Cairo": "非洲/開羅",
    "allTimeZones.Africa/Casablanca": "非洲/卡薩布蘭卡",
    "allTimeZones.Africa/Ceuta": "非洲/休達",
    "allTimeZones.Africa/Conakry": "非洲/科納克里",
    "allTimeZones.Africa/Dakar": "非洲/達喀爾",
    "allTimeZones.Africa/Dar_es_Salaam": "非洲/達累斯薩拉姆",
    "allTimeZones.Africa/Djibouti": "非洲/吉布提",
    "allTimeZones.Africa/Douala": "非洲/杜阿拉",
    "allTimeZones.Africa/El_Aaiun": "非洲/阿尤恩",
    "allTimeZones.Africa/Freetown": "非洲/弗里敦",
    "allTimeZones.Africa/Gaborone": "非洲/哈博羅內",
    "allTimeZones.Africa/Harare": "非洲/哈拉雷",
    "allTimeZones.Africa/Johannesburg": "非洲/約翰內斯堡",
    "allTimeZones.Africa/Juba": "非洲/朱巴",
    "allTimeZones.Africa/Kampala": "非洲/坎帕拉",
    "allTimeZones.Africa/Khartoum": "非洲/喀土穆",
    "allTimeZones.Africa/Kigali": "非洲/基加利",
    "allTimeZones.Africa/Kinshasa": "非洲/金沙薩",
    "allTimeZones.Africa/Lagos": "非洲/拉各斯",
    "allTimeZones.Africa/Libreville": "非洲/利伯維爾",
    "allTimeZones.Africa/Lome": "非洲/洛美",
    "allTimeZones.Africa/Luanda": "非洲/羅安達",
    "allTimeZones.Africa/Lubumbashi": "非洲/盧本巴希",
    "allTimeZones.Africa/Lusaka": "非洲/盧薩卡",
    "allTimeZones.Africa/Malabo": "非洲/馬拉博",
    "allTimeZones.Africa/Maputo": "非洲/馬普托",
    "allTimeZones.Africa/Maseru": "非洲/馬塞盧",
    "allTimeZones.Africa/Mbabane": "非洲/姆巴巴納",
    "allTimeZones.Africa/Mogadishu": "非洲/摩加迪沙",
    "allTimeZones.Africa/Monrovia": "非洲/蒙羅維亞",
    "allTimeZones.Africa/Nairobi": "非洲/內羅畢",
    "allTimeZones.Africa/Ndjamena": "非洲/恩賈梅納",
    "allTimeZones.Africa/Niamey": "非洲/尼亞美",
    "allTimeZones.Africa/Nouakchott": "非洲/努瓦克肖特",
    "allTimeZones.Africa/Ouagadougou": "非洲/瓦加杜古",
    "allTimeZones.Africa/Porto-Novo": "非洲/波多諾伏",
    "allTimeZones.Africa/Sao_Tome": "非洲/聖多美",
    "allTimeZones.Africa/Timbuktu": "非洲/廷巴克圖",
    "allTimeZones.Africa/Tripoli": "非洲/的黎波里",
    "allTimeZones.Africa/Tunis": "非洲/突尼斯",
    "allTimeZones.Africa/Windhoek": "非洲/溫得和克",
    "allTimeZones.America/Adak": "美洲/阿達克",
    "allTimeZones.America/Anchorage": "美洲/安克雷奇",
    "allTimeZones.America/Anguilla": "美洲/安圭拉",
    "allTimeZones.America/Antigua": "美洲/安提瓜",
    "allTimeZones.America/Araguaina": "美洲/阿拉瓜伊納",
    "allTimeZones.America/Argentina/Buenos_Aires": "美洲/阿根廷/布宜諾斯艾利斯",
    "allTimeZones.America/Argentina/Catamarca": "美洲/阿根廷/卡塔馬卡",
    "allTimeZones.America/Argentina/ComodRivadavia":
      "美洲/阿根廷/ComodRivadavia",
    "allTimeZones.America/Argentina/Cordoba": "美洲/阿根廷/科爾多瓦",
    "allTimeZones.America/Argentina/Jujuy": "美洲/阿根廷/胡胡伊",
    "allTimeZones.America/Argentina/La_Rioja": "美洲/阿根廷/拉里奧哈",
    "allTimeZones.America/Argentina/Mendoza": "美洲/阿根廷/門多薩",
    "allTimeZones.America/Argentina/Rio_Gallegos": "美洲/阿根廷/里奧加耶戈斯",
    "allTimeZones.America/Argentina/Salta": "美洲/阿根廷/薩爾塔",
    "allTimeZones.America/Argentina/San_Juan": "美洲/阿根廷/聖胡安",
    "allTimeZones.America/Argentina/San_Luis": "美洲/阿根廷/聖路易斯",
    "allTimeZones.America/Argentina/Tucuman": "美洲/阿根廷/圖庫曼",
    "allTimeZones.America/Argentina/Ushuaia": "美洲/阿根廷/烏斯懷亞",
    "allTimeZones.America/Aruba": "美洲/阿魯巴",
    "allTimeZones.America/Asuncion": "美洲/亞松森",
    "allTimeZones.America/Atikokan": "美洲/阿蒂科肯",
    "allTimeZones.America/Atka": "美洲/阿特卡",
    "allTimeZones.America/Bahia": "美洲/巴伊亞",
    "allTimeZones.America/Bahia_Banderas": "美洲/班德拉斯海灣",
    "allTimeZones.America/Barbados": "美洲/巴巴多斯",
    "allTimeZones.America/Belem": "美洲/貝倫",
    "allTimeZones.America/Belize": "美洲/伯利茲",
    "allTimeZones.America/Blanc-Sablon": "美洲/勃朗峰-薩伯隆",
    "allTimeZones.America/Boa_Vista": "美洲/博阿維斯塔",
    "allTimeZones.America/Bogota": "美洲/波哥大",
    "allTimeZones.America/Boise": "美洲/博伊西",
    "allTimeZones.America/Buenos_Aires": "美洲/布宜諾斯艾利斯",
    "allTimeZones.America/Cambridge_Bay": "美洲/劍橋灣",
    "allTimeZones.America/Campo_Grande": "美洲/大坎普",
    "allTimeZones.America/Cancun": "美洲/坎昆",
    "allTimeZones.America/Caracas": "美洲/加拉加斯",
    "allTimeZones.America/Catamarca": "美洲/卡塔馬卡",
    "allTimeZones.America/Cayenne": "美洲/卡宴",
    "allTimeZones.America/Cayman": "美洲/開曼",
    "allTimeZones.America/Chicago": "美洲/芝加哥",
    "allTimeZones.America/Chihuahua": "美洲/奇瓦瓦",
    "allTimeZones.America/Coral_Harbour": "美洲/科勒爾港",
    "allTimeZones.America/Cordoba": "美洲/科爾多瓦",
    "allTimeZones.America/Costa_Rica": "美洲/哥斯達黎加",
    "allTimeZones.America/Creston": "美洲/克雷斯頓",
    "allTimeZones.America/Cuiaba": "美洲/庫亞巴",
    "allTimeZones.America/Curacao": "美洲/庫拉索",
    "allTimeZones.America/Danmarkshavn": "美洲/丹麥港",
    "allTimeZones.America/Dawson": "美洲/道森",
    "allTimeZones.America/Dawson_Creek": "美洲/道森克里克",
    "allTimeZones.America/Denver": "美洲/丹佛",
    "allTimeZones.America/Detroit": "美洲/底特律",
    "allTimeZones.America/Dominica": "美洲/多米尼克",
    "allTimeZones.America/Edmonton": "美洲/埃德蒙頓",
    "allTimeZones.America/Eirunepe": "美洲/埃魯內佩",
    "allTimeZones.America/El_Salvador": "美洲/薩爾瓦多",
    "allTimeZones.America/Ensenada": "美洲/恩塞納達",
    "allTimeZones.America/Fort_Nelson": "美洲/納爾遜堡",
    "allTimeZones.America/Fort_Wayne": "美國/韋恩堡",
    "allTimeZones.America/Fortaleza": "美洲/福塔雷薩",
    "allTimeZones.America/Glace_Bay": "美洲/格萊斯灣",
    "allTimeZones.America/Godthab": "美洲/戈特霍布",
    "allTimeZones.America/Goose_Bay": "美洲/古斯灣",
    "allTimeZones.America/Grand_Turk": "美洲/大特克斯島",
    "allTimeZones.America/Grenada": "美洲/格林納達",
    "allTimeZones.America/Guadeloupe": "美洲/瓜德羅普島",
    "allTimeZones.America/Guatemala": "美洲/危地馬拉",
    "allTimeZones.America/Guayaquil": "美洲/瓜亞基爾",
    "allTimeZones.America/Guyana": "美洲/圭亞那",
    "allTimeZones.America/Halifax": "美洲/哈利法克斯",
    "allTimeZones.America/Havana": "美洲/哈瓦那",
    "allTimeZones.America/Hermosillo": "美洲/埃莫西約",
    "allTimeZones.America/Indiana/Indianapolis":
      "美洲/印第安納州/印第安納波利斯",
    "allTimeZones.America/Indiana/Knox": "美洲/印第安納州/諾克斯",
    "allTimeZones.America/Indiana/Marengo": "美洲/印第安納州/馬倫戈",
    "allTimeZones.America/Indiana/Petersburg": "美洲/印第安納州/彼得斯堡",
    "allTimeZones.America/Indiana/Tell_City": "美洲/印第安納州/特爾城",
    "allTimeZones.America/Indiana/Vevay": "美洲/印第安納州/韋韋",
    "allTimeZones.America/Indiana/Vincennes": "美洲/印第安納州/文森斯",
    "allTimeZones.America/Indiana/Winamac": "美洲/印第安納州/維納馬克",
    "allTimeZones.America/Indianapolis": "美洲/印第安納波利斯",
    "allTimeZones.America/Inuvik": "美洲/伊努維克",
    "allTimeZones.America/Iqaluit": "美洲/伊卡盧伊特",
    "allTimeZones.America/Jamaica": "美洲/牙買加",
    "allTimeZones.America/Jujuy": "美洲/胡胡伊",
    "allTimeZones.America/Juneau": "美洲/朱諾",
    "allTimeZones.America/Kentucky/Louisville": "美洲/肯塔基州/路易斯維爾",
    "allTimeZones.America/Kentucky/Monticello": "美洲/肯塔基州/蒙蒂塞洛",
    "allTimeZones.America/Knox_IN": "美洲/Knox_IN",
    "allTimeZones.America/Kralendijk": "美洲/克拉倫代克",
    "allTimeZones.America/La_Paz": "美洲/拉巴斯",
    "allTimeZones.America/Lima": "美洲/利馬",
    "allTimeZones.America/Los_Angeles": "美洲/洛杉磯",
    "allTimeZones.America/Louisville": "美洲/路易斯維爾",
    "allTimeZones.America/Lower_Princes": "美洲/聖馬丁島",
    "allTimeZones.America/Maceio": "美洲/馬塞約",
    "allTimeZones.America/Managua": "美洲/馬那瓜",
    "allTimeZones.America/Manaus": "美洲/馬瑙斯",
    "allTimeZones.America/Marigot": "美洲/馬里戈特",
    "allTimeZones.America/Martinique": "美洲/馬提尼克",
    "allTimeZones.America/Matamoros": "美洲/馬塔莫羅斯",
    "allTimeZones.America/Mazatlan": "美洲/馬薩特蘭",
    "allTimeZones.America/Mendoza": "美洲/門多薩",
    "allTimeZones.America/Menominee": "美洲/梅諾米尼",
    "allTimeZones.America/Merida": "美洲/梅里達",
    "allTimeZones.America/Metlakatla": "美洲/梅特拉卡特拉",
    "allTimeZones.America/Mexico_City": "美洲/墨西哥城",
    "allTimeZones.America/Miquelon": "美洲/密克隆",
    "allTimeZones.America/Moncton": "美洲/蒙克頓",
    "allTimeZones.America/Monterrey": "美洲/蒙特雷",
    "allTimeZones.America/Montevideo": "美洲/蒙得維的亞",
    "allTimeZones.America/Montreal": "美洲/蒙特利爾",
    "allTimeZones.America/Montserrat": "美洲/蒙特塞拉特",
    "allTimeZones.America/Nassau": "美洲/拿騷",
    "allTimeZones.America/New_York": "美洲/紐約",
    "allTimeZones.America/Nipigon": "美洲/尼皮貢",
    "allTimeZones.America/Nome": "美洲/諾姆",
    "allTimeZones.America/Noronha": "美洲/諾羅尼亞",
    "allTimeZones.America/North_Dakota/Beulah": "美洲/北達科他州/比烏拉",
    "allTimeZones.America/North_Dakota/Center": "美洲/北達科他州/中部",
    "allTimeZones.America/North_Dakota/New_Salem": "美洲/北達科他州/新塞勒姆",
    "allTimeZones.America/Ojinaga": "美洲/奧希納加",
    "allTimeZones.America/Panama": "美洲/巴拿馬",
    "allTimeZones.America/Pangnirtung": "美洲/旁納唐",
    "allTimeZones.America/Paramaribo": "美洲/帕拉馬里博",
    "allTimeZones.America/Phoenix": "美洲/菲尼克斯",
    "allTimeZones.America/Port-au-Prince": "美洲/太子港",
    "allTimeZones.America/Port_of_Spain": "美洲/西班牙港",
    "allTimeZones.America/Porto_Acre": "美洲/阿克雷港",
    "allTimeZones.America/Porto_Velho": "美洲/波多韋柳",
    "allTimeZones.America/Puerto_Rico": "美洲/波多黎各",
    "allTimeZones.America/Punta_Arenas": "美洲/蓬塔阿雷納斯",
    "allTimeZones.America/Rainy_River": "美洲/雷尼河",
    "allTimeZones.America/Rankin_Inlet": "美洲/蘭京海口",
    "allTimeZones.America/Recife": "美洲/累西腓",
    "allTimeZones.America/Regina": "美洲/里賈納",
    "allTimeZones.America/Resolute": "美洲/雷索盧特",
    "allTimeZones.America/Rio_Branco": "美洲/里奧布朗庫",
    "allTimeZones.America/Rosario": "美洲/羅薩里奧",
    "allTimeZones.America/Santa_Isabel": "美洲/聖伊薩貝爾",
    "allTimeZones.America/Santarem": "美洲/聖塔倫",
    "allTimeZones.America/Santiago": "美洲/聖地亞哥",
    "allTimeZones.America/Santo_Domingo": "美洲/聖多明各",
    "allTimeZones.America/Sao_Paulo": "美洲/聖保羅",
    "allTimeZones.America/Scoresbysund": "美洲/斯科斯比松",
    "allTimeZones.America/Shiprock": "美洲/希普羅克",
    "allTimeZones.America/Sitka": "美洲/錫特卡",
    "allTimeZones.America/St_Barthelemy": "美洲/聖巴夫林米",
    "allTimeZones.America/St_Johns": "美洲/聖約翰斯",
    "allTimeZones.America/St_Kitts": "美洲/聖基茨",
    "allTimeZones.America/St_Lucia": "美洲/聖盧西亞",
    "allTimeZones.America/St_Thomas": "美洲/聖托馬斯",
    "allTimeZones.America/St_Vincent": "美洲/聖文森特",
    "allTimeZones.America/Swift_Current": "美洲/斯威夫特卡倫特",
    "allTimeZones.America/Tegucigalpa": "美洲/特古西加爾巴",
    "allTimeZones.America/Thule": "美洲/圖勒",
    "allTimeZones.America/Thunder_Bay": "美洲/桑德貝",
    "allTimeZones.America/Tijuana": "美洲/蒂華納",
    "allTimeZones.America/Toronto": "美洲/多倫多",
    "allTimeZones.America/Tortola": "美洲/托托拉島",
    "allTimeZones.America/Vancouver": "美洲/溫哥華",
    "allTimeZones.America/Virgin": "美洲/維爾京",
    "allTimeZones.America/Whitehorse": "美洲/懷特霍斯",
    "allTimeZones.America/Winnipeg": "美洲/溫尼伯",
    "allTimeZones.America/Yakutat": "美洲/雅庫塔特",
    "allTimeZones.America/Yellowknife": "美洲/耶洛奈夫",
    "allTimeZones.Antarctica/Casey": "南極洲/凱西",
    "allTimeZones.Antarctica/Davis": "南極洲/戴維斯",
    "allTimeZones.Antarctica/DumontDUrville": "南極洲/杜蒙杜維爾",
    "allTimeZones.Antarctica/Macquarie": "南極洲/麥格理",
    "allTimeZones.Antarctica/Mawson": "南極洲/莫森",
    "allTimeZones.Antarctica/McMurdo": "南極洲/麥克默多",
    "allTimeZones.Antarctica/Palmer": "南極洲/帕爾默",
    "allTimeZones.Antarctica/Rothera": "南極洲/羅瑟拉",
    "allTimeZones.Antarctica/South_Pole": "南極洲/南極",
    "allTimeZones.Antarctica/Syowa": "南極洲/昭和基地",
    "allTimeZones.Antarctica/Troll": "南極洲/特羅爾",
    "allTimeZones.Antarctica/Vostok": "南極洲/沃斯托克",
    "allTimeZones.Arctic/Longyearbyen": "北極/朗伊爾城",
    "allTimeZones.Asia/Aden": "亞洲/亞丁",
    "allTimeZones.Asia/Almaty": "亞洲/阿拉木圖",
    "allTimeZones.Asia/Amman": "亞洲/安曼",
    "allTimeZones.Asia/Anadyr": "亞洲/阿納德爾",
    "allTimeZones.Asia/Aqtau": "亞洲/阿克圖",
    "allTimeZones.Asia/Aqtobe": "亞洲/阿克托比",
    "allTimeZones.Asia/Ashgabat": "亞洲/阿什哈巴德",
    "allTimeZones.Asia/Ashkhabad": "亞洲/阿什哈巴德",
    "allTimeZones.Asia/Atyrau": "亞洲/阿特勞",
    "allTimeZones.Asia/Baghdad": "亞洲/巴格達",
    "allTimeZones.Asia/Bahrain": "亞洲/巴林",
    "allTimeZones.Asia/Baku": "亞洲/巴庫",
    "allTimeZones.Asia/Bangkok": "亞洲/曼谷",
    "allTimeZones.Asia/Barnaul": "亞洲/巴爾瑙爾",
    "allTimeZones.Asia/Beirut": "亞洲/貝魯特",
    "allTimeZones.Asia/Bishkek": "亞洲/比什凱克",
    "allTimeZones.Asia/Brunei": "亞洲/文萊",
    "allTimeZones.Asia/Calcutta": "亞洲/加爾各答",
    "allTimeZones.Asia/Chita": "亞洲/赤塔",
    "allTimeZones.Asia/Choibalsan": "亞洲/喬巴山",
    "allTimeZones.Asia/Chongqing": "亞洲/重慶",
    "allTimeZones.Asia/Chungking": "亞洲/重慶",
    "allTimeZones.Asia/Colombo": "亞洲/科倫坡",
    "allTimeZones.Asia/Dacca": "亞洲/達卡",
    "allTimeZones.Asia/Damascus": "亞洲/大馬士革",
    "allTimeZones.Asia/Dhaka": "亞洲/達卡",
    "allTimeZones.Asia/Dili": "亞洲/帝力",
    "allTimeZones.Asia/Dubai": "亞洲/迪拜",
    "allTimeZones.Asia/Dushanbe": "亞洲/杜尚別",
    "allTimeZones.Asia/Famagusta": "亞洲/法馬古斯塔",
    "allTimeZones.Asia/Gaza": "亞洲/加沙",
    "allTimeZones.Asia/Harbin": "亞洲/哈爾濱",
    "allTimeZones.Asia/Hebron": "亞洲/希伯倫",
    "allTimeZones.Asia/Ho_Chi_Minh": "亞洲/胡志明市",
    "allTimeZones.Asia/Hong_Kong": "亞洲/香港",
    "allTimeZones.Asia/Hovd": "亞洲/科布多",
    "allTimeZones.Asia/Irkutsk": "亞洲/伊爾庫茨克",
    "allTimeZones.Asia/Istanbul": "亞洲/伊斯坦布爾",
    "allTimeZones.Asia/Jakarta": "亞洲/雅加達",
    "allTimeZones.Asia/Jayapura": "亞洲/查亞普拉",
    "allTimeZones.Asia/Jerusalem": "亞洲/耶路撒冷",
    "allTimeZones.Asia/Kabul": "亞洲/喀布爾",
    "allTimeZones.Asia/Kamchatka": "亞洲/堪察加半島",
    "allTimeZones.Asia/Karachi": "亞洲/卡拉奇",
    "allTimeZones.Asia/Kashgar": "亞洲/喀什",
    "allTimeZones.Asia/Kathmandu": "亞洲/加德滿都",
    "allTimeZones.Asia/Katmandu": "亞洲/加德滿都",
    "allTimeZones.Asia/Khandyga": "亞洲/坎迪加",
    "allTimeZones.Asia/Kolkata": "亞洲/加爾各答",
    "allTimeZones.Asia/Krasnoyarsk": "亞洲/克拉斯諾亞爾斯克",
    "allTimeZones.Asia/Kuala_Lumpur": "亞洲/吉隆坡",
    "allTimeZones.Asia/Kuching": "亞洲/古晉",
    "allTimeZones.Asia/Kuwait": "亞洲/科威特",
    "allTimeZones.Asia/Macao": "亞洲/澳門",
    "allTimeZones.Asia/Macau": "亞洲/澳門",
    "allTimeZones.Asia/Magadan": "亞洲/馬加丹",
    "allTimeZones.Asia/Makassar": "亞洲/望加錫",
    "allTimeZones.Asia/Manila": "亞洲/馬尼拉",
    "allTimeZones.Asia/Muscat": "亞洲/馬斯喀特",
    "allTimeZones.Asia/Nicosia": "亞洲/尼科西亞",
    "allTimeZones.Asia/Novokuznetsk": "亞洲/新庫茲涅茨克",
    "allTimeZones.Asia/Novosibirsk": "亞洲/新西伯利亞",
    "allTimeZones.Asia/Omsk": "亞洲/鄂木斯克",
    "allTimeZones.Asia/Oral": "亞洲/烏拉爾",
    "allTimeZones.Asia/Phnom_Penh": "亞洲/金邊",
    "allTimeZones.Asia/Pontianak": "亞洲/坤甸",
    "allTimeZones.Asia/Pyongyang": "亞洲/平壤",
    "allTimeZones.Asia/Qatar": "亞洲/卡塔爾",
    "allTimeZones.Asia/Qostanay": "亞洲/庫斯塔奈",
    "allTimeZones.Asia/Qyzylorda": "亞洲/克孜洛爾達",
    "allTimeZones.Asia/Rangoon": "亞洲/仰光",
    "allTimeZones.Asia/Riyadh": "亞洲/利雅得",
    "allTimeZones.Asia/Saigon": "亞洲/西貢",
    "allTimeZones.Asia/Sakhalin": "亞洲/薩哈林島",
    "allTimeZones.Asia/Samarkand": "亞洲/撒馬爾罕",
    "allTimeZones.Asia/Seoul": "亞洲/首爾",
    "allTimeZones.Asia/Shanghai": "亞洲/上海",
    "allTimeZones.Asia/Singapore": "亞洲/新加坡",
    "allTimeZones.Asia/Srednekolymsk": "亞洲/中科雷姆斯克",
    "allTimeZones.Asia/Taipei": "亞洲/台北",
    "allTimeZones.Asia/Tashkent": "亞洲/塔什幹",
    "allTimeZones.Asia/Tbilisi": "亞洲/第比利斯",
    "allTimeZones.Asia/Tehran": "亞洲/德黑蘭",
    "allTimeZones.Asia/Tel_Aviv": "亞洲/特拉維夫",
    "allTimeZones.Asia/Thimbu": "亞洲/廷布",
    "allTimeZones.Asia/Thimphu": "亞洲/廷布",
    "allTimeZones.Asia/Tokyo": "亞洲/東京",
    "allTimeZones.Asia/Tomsk": "亞洲/托木斯克",
    "allTimeZones.Asia/Ujung_Pandang": "亞洲/烏戎潘當",
    "allTimeZones.Asia/Ulaanbaatar": "亞洲/烏蘭巴托",
    "allTimeZones.Asia/Ulan_Bator": "亞洲/烏蘭巴托",
    "allTimeZones.Asia/Urumqi": "亞洲/烏魯木齊",
    "allTimeZones.Asia/Ust-Nera": "亞洲/烏斯季涅拉",
    "allTimeZones.Asia/Vientiane": "亞洲/萬象",
    "allTimeZones.Asia/Vladivostok": "亞洲/符拉迪沃斯托克",
    "allTimeZones.Asia/Yakutsk": "亞洲/雅庫茨克",
    "allTimeZones.Asia/Yangon": "亞洲/仰光",
    "allTimeZones.Asia/Yekaterinburg": "亞洲/葉卡捷琳堡",
    "allTimeZones.Asia/Yerevan": "亞洲/埃里溫",
    "allTimeZones.Atlantic/Azores": "大西洋/亞速爾群島",
    "allTimeZones.Atlantic/Bermuda": "大西洋/百慕大",
    "allTimeZones.Atlantic/Canary": "大西洋/加那利",
    "allTimeZones.Atlantic/Cape_Verde": "大西洋/佛得角",
    "allTimeZones.Atlantic/Faeroe": "大西洋/法羅",
    "allTimeZones.Atlantic/Faroe": "大西洋/法羅群島",
    "allTimeZones.Atlantic/Jan_Mayen": "大西洋/揚馬延島",
    "allTimeZones.Atlantic/Madeira": "大西洋/馬德拉",
    "allTimeZones.Atlantic/Reykjavik": "大西洋/雷克雅未克",
    "allTimeZones.Atlantic/South_Georgia": "大西洋/南喬治亞",
    "allTimeZones.Atlantic/St_Helena": "大西洋/聖赫勒拿",
    "allTimeZones.Atlantic/Stanley": "大西洋/斯坦利",
    "allTimeZones.Australia/ACT": "澳大利亞/澳大利亞首都直轄區",
    "allTimeZones.Australia/Adelaide": "澳大利亞/阿德萊德",
    "allTimeZones.Australia/Brisbane": "澳大利亞/布里斯班",
    "allTimeZones.Australia/Broken_Hill": "澳大利亞/布羅肯希爾",
    "allTimeZones.Australia/Canberra": "澳大利亞/堪培拉",
    "allTimeZones.Australia/Currie": "澳大利亞/柯里",
    "allTimeZones.Australia/Darwin": "澳大利亞/達爾文",
    "allTimeZones.Australia/Eucla": "澳大利亞/尤克拉",
    "allTimeZones.Australia/Hobart": "澳大利亞/霍巴特",
    "allTimeZones.Australia/LHI": "澳大利亞/豪勳爵島",
    "allTimeZones.Australia/Lindeman": "澳大利亞/林德曼",
    "allTimeZones.Australia/Lord_Howe": "澳大利亞/豪勳爵",
    "allTimeZones.Australia/Melbourne": "澳大利亞/墨爾本",
    "allTimeZones.Australia/NSW": "澳大利亞/新南威爾士州",
    "allTimeZones.Australia/North": "澳大利亞/北部",
    "allTimeZones.Australia/Perth": "澳大利亞/珀斯",
    "allTimeZones.Australia/Queensland": "澳大利亞/昆士蘭州",
    "allTimeZones.Australia/South": "澳大利亞/南部",
    "allTimeZones.Australia/Sydney": "澳大利亞/悉尼",
    "allTimeZones.Australia/Tasmania": "澳大利亞/塔斯馬尼亞",
    "allTimeZones.Australia/Victoria": "澳大利亞/維多利亞",
    "allTimeZones.Australia/West": "澳大利亞/西部",
    "allTimeZones.Australia/Yancowinna": "澳大利亞/Yancowinna",
    "allTimeZones.Brazil/Acre": "巴西/阿克里",
    "allTimeZones.Brazil/DeNoronha": "巴西/迪諾羅尼亞",
    "allTimeZones.Brazil/East": "巴西/東部",
    "allTimeZones.Brazil/West": "巴西/西部",
    "allTimeZones.CET": "CET",
    "allTimeZones.CST6CDT": "CST6CDT",
    "allTimeZones.Canada/Atlantic": "加拿大/大西洋",
    "allTimeZones.Canada/Central": "加拿大/中部",
    "allTimeZones.Canada/Eastern": "加拿大/東部",
    "allTimeZones.Canada/Mountain": "加拿大/山區",
    "allTimeZones.Canada/Newfoundland": "加拿大/紐芬蘭",
    "allTimeZones.Canada/Pacific": "加拿大/太平洋",
    "allTimeZones.Canada/Saskatchewan": "加拿大/薩斯喀徹溫省",
    "allTimeZones.Canada/Yukon": "加拿大/育空",
    "allTimeZones.Chile/Continental": "智利/大陸",
    "allTimeZones.Chile/EasterIsland": "智利/復活節島",
    "allTimeZones.Cuba": "古巴",
    "allTimeZones.EET": "EET",
    "allTimeZones.EST": "EST",
    "allTimeZones.EST5EDT": "EST5EDT",
    "allTimeZones.Egypt": "埃及",
    "allTimeZones.Eire": "愛爾蘭",
    "allTimeZones.Etc/GMT": "Etc/GMT",
    "allTimeZones.Etc/GMT+0": "Etc/GMT+0",
    "allTimeZones.Etc/GMT+1": "Etc/GMT+1",
    "allTimeZones.Etc/GMT+10": "Etc/GMT+10",
    "allTimeZones.Etc/GMT+11": "Etc/GMT+11",
    "allTimeZones.Etc/GMT+12": "Etc/GMT+12",
    "allTimeZones.Etc/GMT+2": "Etc/GMT+2",
    "allTimeZones.Etc/GMT+3": "Etc/GMT+3",
    "allTimeZones.Etc/GMT+4": "Etc/GMT+4",
    "allTimeZones.Etc/GMT+5": "Etc/GMT+5",
    "allTimeZones.Etc/GMT+6": "Etc/GMT+6",
    "allTimeZones.Etc/GMT+7": "Etc/GMT+7",
    "allTimeZones.Etc/GMT+8": "Etc/GMT+8",
    "allTimeZones.Etc/GMT+9": "Etc/GMT+9",
    "allTimeZones.Etc/GMT-0": "Etc/GMT-0",
    "allTimeZones.Etc/GMT-1": "Etc/GMT-1",
    "allTimeZones.Etc/GMT-10": "Etc/GMT-10",
    "allTimeZones.Etc/GMT-11": "Etc/GMT-11",
    "allTimeZones.Etc/GMT-12": "Etc/GMT-12",
    "allTimeZones.Etc/GMT-13": "Etc/GMT-13",
    "allTimeZones.Etc/GMT-14": "Etc/GMT-14",
    "allTimeZones.Etc/GMT-2": "Etc/GMT-2",
    "allTimeZones.Etc/GMT-3": "Etc/GMT-3",
    "allTimeZones.Etc/GMT-4": "Etc/GMT-4",
    "allTimeZones.Etc/GMT-5": "Etc/GMT-5",
    "allTimeZones.Etc/GMT-6": "Etc/GMT-6",
    "allTimeZones.Etc/GMT-7": "Etc/GMT-7",
    "allTimeZones.Etc/GMT-8": "Etc/GMT-8",
    "allTimeZones.Etc/GMT-9": "Etc/GMT-9",
    "allTimeZones.Etc/GMT0": "Etc/GMT0",
    "allTimeZones.Etc/Greenwich": "Etc/格林威治",
    "allTimeZones.Etc/UCT": "Etc/UCT",
    "allTimeZones.Etc/UTC": "Etc/UTC",
    "allTimeZones.Etc/Universal": "Etc/世界時",
    "allTimeZones.Etc/Zulu": "Etc/祖魯",
    "allTimeZones.Europe/Amsterdam": "歐洲/阿姆斯特丹",
    "allTimeZones.Europe/Andorra": "歐洲/安道爾",
    "allTimeZones.Europe/Astrakhan": "歐洲/阿斯特拉罕",
    "allTimeZones.Europe/Athens": "歐洲/雅典",
    "allTimeZones.Europe/Belfast": "歐洲/貝爾法斯特",
    "allTimeZones.Europe/Belgrade": "歐洲/貝爾格萊德",
    "allTimeZones.Europe/Berlin": "歐洲/柏林",
    "allTimeZones.Europe/Bratislava": "歐洲/布拉迪斯拉發",
    "allTimeZones.Europe/Brussels": "歐洲/布魯塞爾",
    "allTimeZones.Europe/Bucharest": "歐洲/布加勒斯特",
    "allTimeZones.Europe/Budapest": "歐洲/布達佩斯",
    "allTimeZones.Europe/Busingen": "歐洲/布辛根",
    "allTimeZones.Europe/Chisinau": "歐洲/基希訥烏",
    "allTimeZones.Europe/Copenhagen": "歐洲/哥本哈根",
    "allTimeZones.Europe/Dublin": "歐洲/都柏林",
    "allTimeZones.Europe/Gibraltar": "歐洲/直布羅陀",
    "allTimeZones.Europe/Guernsey": "歐洲/根西島",
    "allTimeZones.Europe/Helsinki": "歐洲/赫爾辛基",
    "allTimeZones.Europe/Isle_of_Man": "歐洲/馬恩島",
    "allTimeZones.Europe/Istanbul": "歐洲/伊斯坦布爾",
    "allTimeZones.Europe/Jersey": "歐洲/澤西島",
    "allTimeZones.Europe/Kaliningrad": "歐洲/加里寧格勒",
    "allTimeZones.Europe/Kirov": "歐洲/基洛夫",
    "allTimeZones.Europe/Kyiv": "歐洲/基輔",
    "allTimeZones.Europe/Lisbon": "歐洲/里斯本",
    "allTimeZones.Europe/Ljubljana": "歐洲/盧布爾雅那",
    "allTimeZones.Europe/London": "歐洲/倫敦",
    "allTimeZones.Europe/Luxembourg": "歐洲/盧森堡",
    "allTimeZones.Europe/Madrid": "歐洲/馬德里",
    "allTimeZones.Europe/Malta": "歐洲/馬耳他",
    "allTimeZones.Europe/Mariehamn": "歐洲/瑪麗港",
    "allTimeZones.Europe/Minsk": "歐洲/明斯克",
    "allTimeZones.Europe/Monaco": "歐洲/摩納哥",
    "allTimeZones.Europe/Moscow": "歐洲/莫斯科",
    "allTimeZones.Europe/Nicosia": "歐洲/尼科西亞",
    "allTimeZones.Europe/Oslo": "歐洲/奧斯陸",
    "allTimeZones.Europe/Paris": "歐洲/巴黎",
    "allTimeZones.Europe/Podgorica": "歐洲/波德戈里察",
    "allTimeZones.Europe/Prague": "歐洲/布拉格",
    "allTimeZones.Europe/Riga": "歐洲/裡加",
    "allTimeZones.Europe/Rome": "歐洲/羅馬",
    "allTimeZones.Europe/Samara": "歐洲/薩馬拉",
    "allTimeZones.Europe/San_Marino": "歐洲/聖馬力諾",
    "allTimeZones.Europe/Sarajevo": "歐洲/薩拉熱窩",
    "allTimeZones.Europe/Saratov": "歐洲/薩拉托夫",
    "allTimeZones.Europe/Simferopol": "歐洲/辛菲羅波爾",
    "allTimeZones.Europe/Skopje": "歐洲/斯科普里",
    "allTimeZones.Europe/Sofia": "歐洲/索非亞",
    "allTimeZones.Europe/Stockholm": "歐洲/斯德哥爾摩",
    "allTimeZones.Europe/Tallinn": "歐洲/塔林",
    "allTimeZones.Europe/Tirane": "歐洲/地拉那",
    "allTimeZones.Europe/Tiraspol": "歐洲/蒂拉斯波爾",
    "allTimeZones.Europe/Ulyanovsk": "歐洲/烏里揚諾夫斯克",
    "allTimeZones.Europe/Uzhgorod": "歐洲/烏日哥羅德",
    "allTimeZones.Europe/Vaduz": "歐洲/瓦杜茲",
    "allTimeZones.Europe/Vatican": "歐洲/梵蒂岡",
    "allTimeZones.Europe/Vienna": "歐洲/維也納",
    "allTimeZones.Europe/Vilnius": "歐洲/維爾紐斯",
    "allTimeZones.Europe/Volgograd": "歐洲/伏爾加格勒",
    "allTimeZones.Europe/Warsaw": "歐洲/華沙",
    "allTimeZones.Europe/Zagreb": "歐洲/薩格勒布",
    "allTimeZones.Europe/Zaporozhye": "歐洲/扎波羅熱",
    "allTimeZones.Europe/Zurich": "歐洲/蘇黎世",
    "allTimeZones.GB": "GB",
    "allTimeZones.GB-Eire": "GB-Eire",
    "allTimeZones.GMT": "GMT",
    "allTimeZones.GMT+0": "GMT+0",
    "allTimeZones.GMT-0": "GMT-0",
    "allTimeZones.GMT0": "GMT0",
    "allTimeZones.Greenwich": "格林威治",
    "allTimeZones.HST": "HST",
    "allTimeZones.Hongkong": "中國香港",
    "allTimeZones.Iceland": "冰島",
    "allTimeZones.Indian/Antananarivo": "印度洋/塔那那利佛",
    "allTimeZones.Indian/Chagos": "印度洋/查戈斯群島",
    "allTimeZones.Indian/Christmas": "印度洋/聖誕島",
    "allTimeZones.Indian/Cocos": "印度洋/科科斯",
    "allTimeZones.Indian/Comoro": "印度洋/科摩羅",
    "allTimeZones.Indian/Kerguelen": "印度洋/凱爾蓋朗",
    "allTimeZones.Indian/Mahe": "印度洋/馬埃島",
    "allTimeZones.Indian/Maldives": "印度洋/馬爾代夫",
    "allTimeZones.Indian/Mauritius": "印度洋/毛里求斯",
    "allTimeZones.Indian/Mayotte": "印度洋/馬約特島",
    "allTimeZones.Indian/Reunion": "印度洋/留尼汪島",
    "allTimeZones.Iran": "伊朗",
    "allTimeZones.Israel": "以色列",
    "allTimeZones.Jamaica": "牙買加",
    "allTimeZones.Japan": "日本",
    "allTimeZones.Kwajalein": "誇賈林",
    "allTimeZones.Libya": "利比亞",
    "allTimeZones.MET": "MET",
    "allTimeZones.MST": "MST",
    "allTimeZones.MST7MDT": "MST7MDT",
    "allTimeZones.Mexico/BajaNorte": "墨西哥/巴哈諾特",
    "allTimeZones.Mexico/BajaSur": "墨西哥/巴哈蘇爾",
    "allTimeZones.Mexico/General": "墨西哥/一般",
    "allTimeZones.NZ": "新西蘭",
    "allTimeZones.NZ-CHAT": "NZ-CHAT",
    "allTimeZones.Navajo": "納瓦霍語",
    "allTimeZones.PRC": "中國",
    "allTimeZones.PST8PDT": "PST8PDT",
    "allTimeZones.Pacific/Apia": "太平洋/阿皮亞",
    "allTimeZones.Pacific/Auckland": "太平洋/奧克蘭",
    "allTimeZones.Pacific/Bougainville": "太平洋/布干維爾",
    "allTimeZones.Pacific/Chatham": "太平洋/查塔姆",
    "allTimeZones.Pacific/Chuuk": "太平洋/楚克島",
    "allTimeZones.Pacific/Easter": "太平洋/復活節島",
    "allTimeZones.Pacific/Efate": "太平洋/埃法特島",
    "allTimeZones.Pacific/Enderbury": "太平洋/恩德伯里島",
    "allTimeZones.Pacific/Fakaofo": "太平洋/法考福",
    "allTimeZones.Pacific/Fiji": "太平洋/斐濟",
    "allTimeZones.Pacific/Funafuti": "太平洋/富納富提",
    "allTimeZones.Pacific/Galapagos": "太平洋/加拉帕戈斯",
    "allTimeZones.Pacific/Gambier": "太平洋/甘比爾",
    "allTimeZones.Pacific/Guadalcanal": "太平洋/瓜達爾卡納爾島",
    "allTimeZones.Pacific/Guam": "太平洋/關島",
    "allTimeZones.Pacific/Honolulu": "太平洋/火奴魯魯",
    "allTimeZones.Pacific/Johnston": "太平洋/約翰斯頓",
    "allTimeZones.Pacific/Kiritimati": "太平洋/基里蒂馬蒂",
    "allTimeZones.Pacific/Kosrae": "太平洋/科斯雷",
    "allTimeZones.Pacific/Kwajalein": "太平洋/誇賈林島",
    "allTimeZones.Pacific/Majuro": "太平洋/馬朱羅",
    "allTimeZones.Pacific/Marquesas": "太平洋/馬克薩斯群島",
    "allTimeZones.Pacific/Midway": "太平洋/中途島",
    "allTimeZones.Pacific/Nauru": "太平洋/瑙魯",
    "allTimeZones.Pacific/Niue": "太平洋/紐埃",
    "allTimeZones.Pacific/Norfolk": "太平洋/諾福克",
    "allTimeZones.Pacific/Noumea": "太平洋/努美阿",
    "allTimeZones.Pacific/Pago_Pago": "太平洋/帕果帕果",
    "allTimeZones.Pacific/Palau": "太平洋/帕勞",
    "allTimeZones.Pacific/Pitcairn": "太平洋/皮特凱恩",
    "allTimeZones.Pacific/Pohnpei": "太平洋/波納佩島",
    "allTimeZones.Pacific/Ponape": "太平洋/波納佩島",
    "allTimeZones.Pacific/Port_Moresby": "太平洋/莫爾茲比港",
    "allTimeZones.Pacific/Rarotonga": "太平洋/拉羅湯加",
    "allTimeZones.Pacific/Saipan": "太平洋/塞班島",
    "allTimeZones.Pacific/Samoa": "太平洋/薩摩亞",
    "allTimeZones.Pacific/Tahiti": "太平洋/塔希提島",
    "allTimeZones.Pacific/Tarawa": "太平洋/塔拉瓦",
    "allTimeZones.Pacific/Tongatapu": "太平洋/湯加塔布島",
    "allTimeZones.Pacific/Truk": "太平洋/特魯克",
    "allTimeZones.Pacific/Wake": "太平洋/威克",
    "allTimeZones.Pacific/Wallis": "太平洋/瓦利斯",
    "allTimeZones.Pacific/Yap": "太平洋/雅浦",
    "allTimeZones.Poland": "波蘭",
    "allTimeZones.Portugal": "葡萄牙",
    "allTimeZones.ROC": "ROC",
    "allTimeZones.ROK": "韓國",
    "allTimeZones.Singapore": "新加坡",
    "allTimeZones.Turkey": "土耳其",
    "allTimeZones.UCT": "UCT",
    "allTimeZones.US/Alaska": "美國/阿拉斯加",
    "allTimeZones.US/Aleutian": "美國/阿留申",
    "allTimeZones.US/Arizona": "美國/亞利桑那州",
    "allTimeZones.US/Central": "美國/中部",
    "allTimeZones.US/East-Indiana": "美國/東印第安納州",
    "allTimeZones.US/Eastern": "美國/東部",
    "allTimeZones.US/Hawaii": "美國/夏威夷",
    "allTimeZones.US/Indiana-Starke": "美國/印第安納-斯塔克",
    "allTimeZones.US/Michigan": "美國/密歇根州",
    "allTimeZones.US/Mountain": "美國/山地",
    "allTimeZones.US/Pacific": "美國/太平洋",
    "allTimeZones.US/Pacific-New": "美國/太平洋-新",
    "allTimeZones.US/Samoa": "美國/薩摩亞",
    "allTimeZones.UTC": "UTC",
    "allTimeZones.Universal": "世界時",
    "allTimeZones.W-SU": "W-SU",
    "allTimeZones.WET": "WET",
    "allTimeZones.Zulu": "祖魯",
    "app.emptyState.customize": "自定義 {appName}",
    "appConfigToggledFeaturesSection.caption": "{num} 項功能 {on}",
    "appConfigToggledFeaturesSection.tooltip.instructions":
      "點擊以展開並編輯選項",
    "appConfigToggledFeaturesSection.tooltip.turnedOnFeature":
      "{featureNames} 已開啟",
    "appContainer.header.addDatabase": "添加數據庫",
    "appContainer.header.collections.editButton.done": "已完成",
    "appContainer.header.collections.editButton.edit": "編輯",
    "appContainer.header.collections.title": "{appName} 中的數據庫",
    "appContainer.header.customize": "編輯 {databaseName} 設置",
    "appTemplates.createdTimePropertyTitle": "創建時間",
    "appTemplates.docs.createdByProperty": "創建者",
    "appTemplates.docs.createdTimePropertyTitle": "創建時間",
    "appTemplates.docs.docTypeFeature": "文檔類型",
    "appTemplates.docs.docTypeFeatureDescription":
      "文檔類型：文檔、產品規格、工程設計文檔、營銷簡報等。",
    "appTemplates.docs.docsCollectionEmptyButtonTitle": "新建文檔",
    "appTemplates.docs.docsCollectionEmptyDescription":
      "文檔可幫助你的團隊組織和協作處理團隊文檔。",
    "appTemplates.docs.docsCollectionEmptyTitle": "無文檔",
    "appTemplates.docs.docsCollectionName": "文檔",
    "appTemplates.docs.docsCreatedTimeProperty": "創建時間",
    "appTemplates.docs.docsListViewName": "列表",
    "appTemplates.docs.docsTableViewName": "所有文檔",
    "appTemplates.docs.docsWelcomeSubtitle":
      "簡單文檔模板，具有單個文檔數據庫。",
    "appTemplates.docs.docsWelcomeTitle": "歡迎使用文檔",
    "appTemplates.docs.gettingStartedWithDocs": "文檔入門指南",
    "appTemplates.docs.lastEditedByProperty": "上次編輯者",
    "appTemplates.docs.lastEditedTimeProperty": "上次編輯時間",
    "appTemplates.docs.myDocsFeatureDescription": "我創建的文檔列表視圖。",
    "appTemplates.docs.myDocsListViewName": "我的文檔",
    "appTemplates.docs.paragraph1": "👋 歡迎使用文檔！",
    "appTemplates.docs.paragraph2":
      "使用此模板組織文檔，如技術規範、架構概述和項目啟動記錄。",
    "appTemplates.docs.preview1Description": "關於此模板預覽圖片的一些描述...",
    "appTemplates.docs.preview2Description": "關於此模板預覽視頻的一些描述...",
    "appTemplates.docs.recentlyEditedFeatureDescription":
    "按上次編輯時間排序的文檔列表視圖。",
  "appTemplates.docs.recentlyEditedViewName": "最近編輯",
  "appTemplates.docs.simpleDocsFeatureDescription":
    "具有創建時間、創建者、上次創建時間、上次創建者的屬性的文檔數據庫。",
  "appTemplates.docs.simpleDocsPresetDescription": "簡單的文檔。 PRD、RFC 等",
  "appTemplates.docs.simpleDocsPresetName": "文檔",
  "appTemplates.docs.simpleDocsPresetShortName": "文檔",
  "appTemplates.docs.statusDone": "完成",
  "appTemplates.docs.statusFeatureDescription":
    "草稿、新建、審核中、已批准、已存檔。",
  "appTemplates.docs.statusInProgress": "進行中",
  "appTemplates.docs.statusProperty": "狀態",
  "appTemplates.docs.statusToDo": "待辦事項",
  "appTemplates.docs.tagProperty": "標籤",
  "appTemplates.meetings.brainstorm": "集體討論",
  "appTemplates.meetings.byTypeViewFeature": "按類型分類的會議",
  "appTemplates.meetings.byTypeViewFeatureDescription":
    "按會議類型分類的會議視圖。",
  "appTemplates.meetings.byTypeViewName": "按類型",
  "appTemplates.meetings.calendarViewFeature": "日曆視圖",
  "appTemplates.meetings.calendarViewFeatureDescription":
    "在日曆視圖中顯示會議。",
  "appTemplates.meetings.createdByAndTimeFeature": "創建者/時間",
  "appTemplates.meetings.createdByAndTimeFeatureDescription":
    "創建會議記錄的時間和人員。",
  "appTemplates.meetings.createdByProperty": "創建者",
  "appTemplates.meetings.createdTimePropertyTitle": "創建時間",
  "appTemplates.meetings.gettingStartedWith1on1s": "1:1 會議入門指南",
  "appTemplates.meetings.gettingStartedWithDocs": "文檔入門指南",
  "appTemplates.meetings.gettingStartedWithMeetings": "會議入門指南",
  "appTemplates.meetings.lastEditedByAndTimeFeature": "上次編輯時間和編輯者",
  "appTemplates.meetings.lastEditedByAndTimeFeatureDescription":
    "上次編輯會議記錄的時間和人員",
  "appTemplates.meetings.lastEditedByProperty": "上次編輯者",
  "appTemplates.meetings.lastEditedTimeProperty": "上次編輯時間",
  "appTemplates.meetings.meetingAttendeesProperty": "與會者",
  "appTemplates.meetings.meetingTimeProperty": "會議時間",
  "appTemplates.meetings.meetingTypeFeatureDescription":
    "會議類型：晨會、集體討論、團隊週會等",
  "appTemplates.meetings.meetingTypeProperty": "會議類型",
  "appTemplates.meetings.meetingsAndNotesPresetDescription":
    "從同步的日曆事件中記錄會議筆記。與 Notion 的日曆應用程序 Corn 配合使用,效果很好。",
  "appTemplates.meetings.meetingsAndNotesPresetName": "會議",
  "appTemplates.meetings.meetingsAndNotesPresetShortName": "會議",
  "appTemplates.meetings.meetingsCollectionName": "會議",
  "appTemplates.meetings.meetingsParticipantProperty": "參與者",
  "appTemplates.meetings.meetingsWelcomeSubtitle":
    "追踪你的會議和筆記：與會者、議程、待辦事項等。",
  "appTemplates.meetings.meetingsWelcomeTitle": "歡迎加入會議",
  "appTemplates.meetings.myMeetingViewFeatureDescription":
    "我創建或參加的所有會議的視圖。",
  "appTemplates.meetings.myMeetingViewName": "我的會議",
  "appTemplates.meetings.notesCollectionName": "會議記錄",
  "appTemplates.meetings.oneOnOnePresetDescription":
    "簡單的 1:1 模板，帶有單個數據庫。",
  "appTemplates.meetings.oneOnOnePresetName": "1:1 會議",
  "appTemplates.meetings.oneOnOnePresetShortName": "1:1",
  "appTemplates.meetings.oneOnOneparagraph1": "👋 歡迎加入 1:1 會議！",
  "appTemplates.meetings.oneOnOneparagraph2":
    "使用此模板組織和記錄 1:1 會議的紀要",
  "appTemplates.meetings.oneOnOneparagraph3":
    "要開始使用，請與隊友分享此模板，並使用它為即將到來的 1:1 會議做記錄！",
  "appTemplates.meetings.paragraph1": "👋 歡迎加入會議！",
  "appTemplates.meetings.paragraph2":
    "使用此模板組織會議、分享議程和記錄會議紀要。",
  "appTemplates.meetings.preview1Description":
    "關於此模板預覽圖片的一些描述...",
  "appTemplates.meetings.preview2Description":
    "關於此模板預覽視頻的一些描述...",
  "appTemplates.meetings.standup": "晨會",
  "appTemplates.meetings.tagProperty": "標籤",
  "appTemplates.meetings.teamWeekly": "團隊週會",
  "appTemplates.meetingsParticipantProperty": "參與者",
  "appTemplates.mettings.notesCollectionEmptyButtonTitle": "新建會議",
  "appTemplates.mettings.notesCollectionEmptyDescription":
    "會議可幫助你的團隊組織會議、共享議程，以及記錄會議記錄。",
  "appTemplates.mettings.notesCollectionEmptyTitle": "沒有會議",
  "appTemplates.namePropertyTitle": "名稱",
  "appTemplates.notes.notesCreatedTimeProperty": "創建時間",
  "appTemplates.projects.advancedTaskFeatureDescription": "任務的看板視圖。",
  "appTemplates.projects.advancedTaskProjectStatus.description":
    "任務和項目：未啟動、進行中、已暫停、已完成、已取消",
  "appTemplates.projects.advancedTaskProjectStatus.name":
    "未開始、進行中、完成、已歸檔",
  "appTemplates.projects.agilePresetName": "項目、任務、迭代（敏捷）",
  "appTemplates.projects.agilePresetShortName": "項目和任務",
  "appTemplates.projects.allTasksViewName": "全部",
  "appTemplates.projects.assignProperty": "分配",
  "appTemplates.projects.boardViewName": "看板",
  "appTemplates.projects.bug": "Bug",
  "appTemplates.projects.cancelled": "已取消",
  "appTemplates.projects.completed": "完成",
  "appTemplates.projects.description": "描述",
  "appTemplates.projects.doing": "處理中",
  "appTemplates.projects.done": "已完成",
  "appTemplates.projects.dueDateProperty": "截止日期",
  "appTemplates.projects.endDateProperty": "結束日期",
  "appTemplates.projects.estimateProperty": "估計",
  "appTemplates.projects.estimatesFeatureDescription":
  "使用常用的方法和自定義選項來調整你的任務大小。",
"appTemplates.projects.feature": "功能",
"appTemplates.projects.gettingStartedWithProjects": "項目入門指南",
"appTemplates.projects.hmlPriority": "高、中、低",
"appTemplates.projects.inProgress": "進行中",
"appTemplates.projects.isCurrentSprintProperty": "是當前迭代",
"appTemplates.projects.isCurrentSprintRollup": "是當前迭代",
"appTemplates.projects.markAsDuplicate": "標記為重複",
"appTemplates.projects.markAsDuplicateFeatureDescription":
  "將任務標記為另一個任務的副本。",
"appTemplates.projects.notStarted": "未啟動",
"appTemplates.projects.parentTasksName": "父任務",
"appTemplates.projects.paused": "已暫停",
"appTemplates.projects.pointsEstimates": "要點",
"appTemplates.projects.priorityFeatureDescription":
  "標記首先要完成的任務或項目。",
"appTemplates.projects.priorityHigh": "高",
"appTemplates.projects.priorityLow": "低",
"appTemplates.projects.priorityMedium": "中",
"appTemplates.projects.priorityProperty": "優先級",
"appTemplates.projects.projectLeads": "主管",
"appTemplates.projects.projectMembers": "成員",
"appTemplates.projects.projectOwners": "所有者",
"appTemplates.projects.projectPeople": "人員",
"appTemplates.projects.projectTimelineFeature": "產品路線圖",
"appTemplates.projects.projectTimelineFeatureDescription":
  "讓你的團隊與高級項目產品路線圖保持同步。",
"appTemplates.projects.projectsAndTasksAppName": "項目",
"appTemplates.projects.projectsAndTasksPresetName": "項目和任務（看板）",
"appTemplates.projects.projectsAndTasksPresetShortName": "項目和任務",
"appTemplates.projects.projectsBoardViewName": "項目",
"appTemplates.projects.projectsCollectionEmptyButtonTitle": "新建項目",
"appTemplates.projects.projectsCollectionEmptyDescription":
  "項目可幫助你的團隊組織任務並把握全局。",
"appTemplates.projects.projectsCollectionEmptyTitle": "沒有項目",
"appTemplates.projects.projectsCollectionName": "項目",
"appTemplates.projects.projectsFeatureDescription":
  "適合複雜工作（可以是任務的集合）的數據庫。",
"appTemplates.projects.projectsLeadsAndMembers": "項目主管和成員",
"appTemplates.projects.projectsOwnersAndMembers": "項目的所有者和成員",
"appTemplates.projects.projectsTableViewName": "所有項目",
"appTemplates.projects.projectsViewName": "項目",
"appTemplates.projects.simpleTaskFeatureDescription":
  "適合精細工作的數據庫，例如問題、任務或 bug。",
"appTemplates.projects.simpleTaskProjectStatus.description":
  "任務：待辦事項，處理中，已完成；項目：未開始、進行中、已暫停、已完成、已取消",
"appTemplates.projects.simpleTaskProjectStatus.name": "待辦事項、完成",
"appTemplates.projects.simpleTasksPresetName": "待辦事項",
"appTemplates.projects.simpleTasksPresetShortName": "任務",
"appTemplates.projects.sprintsCollectionEmptyButtonTitle": "新建迭代",
"appTemplates.projects.sprintsCollectionEmptyDescription":
  "衝刺定義了你可以將任務和項目組織到其中的時間段。",
"appTemplates.projects.sprintsCollectionEmptyTitle": "沒有迭代",
"appTemplates.projects.sprintsCollectionName": "迭代",
"appTemplates.projects.sprintsName": "迭代",
"appTemplates.projects.startDateProperty": "開始日期",
"appTemplates.projects.status": "狀態",
"appTemplates.projects.statusDone": "完成",
"appTemplates.projects.statusFeatureDescription": "跟踪任務/項目的狀態。",
"appTemplates.projects.statusInProgress": "進行中",
"appTemplates.projects.statusProperty": "狀態",
"appTemplates.projects.statusToDo": "待辦事項",
"appTemplates.projects.subTaskFeatureDescription":
  "將任務分解為更小的子任務並跟踪進度。",
"appTemplates.projects.subTasksName": "子任務",
"appTemplates.projects.tableViewName": "表格",
"appTemplates.projects.tags": "標籤",
"appTemplates.projects.taskBlockedByName": "阻止者",
"appTemplates.projects.taskBlockingName": "正在阻止",
"appTemplates.projects.taskDependenciesFeatureDescription":
  "將一個任務標記為被另一個任務阻止。",
"appTemplates.projects.taskDependenciesName": "依賴性",
"appTemplates.projects.taskDueDateFeature": "任務截止日期",
"appTemplates.projects.taskDueDateFeatureDescription":
  "為任務添加截止日期。",
"appTemplates.projects.taskDuplicatesName": "重複項",
"appTemplates.projects.taskIsDuplicateOfName": "與...重複",
"appTemplates.projects.taskProjectRelationName": "項目",
"appTemplates.projects.taskRelatedName": "相關",
"appTemplates.projects.taskReporter": "報告者",
"appTemplates.projects.taskType": "任務類型",
"appTemplates.projects.taskTypeFeatureDescription":
  "使用模板創建不同類型的任務。",
"appTemplates.projects.tasksBoardFeatureName": "任務看板",
"appTemplates.projects.tasksBoardViewName": "任務看板",
"appTemplates.projects.tasksCollectionEmptyButtonTitle": "新任務",
"appTemplates.projects.tasksCollectionEmptyDescription":
  "任務追踪細化且單一的工作。",
"appTemplates.projects.tasksCollectionEmptyTitle": "沒有任務",
"appTemplates.projects.tasksCollectionName": "任務",
"appTemplates.projects.tasksCurrentSprintViewName": "此迭代",
"appTemplates.projects.tasksViewName": "所有任務",
"appTemplates.projects.tasksWithSprintsFeatureDescription":
  "每隔幾週讓你的團隊專注於一組任務。",
"appTemplates.projects.timelineProperty": "日期",
"appTemplates.projects.todo": "待辦事項",
"appTemplates.projects.tshirtSizeEstimates": "T 卹尺碼",
"appTemplates.projects.welcomeSubtitle":
  "創建一個項目管理系統來跟踪個人或團隊項目。先從下面選擇一個模板，然後輕鬆地對其進行定制以滿足你的需求。",
"appTemplates.projects.welcomeTitle": "管理項目和任務",
"appTemplates.sprints.datesProperty": "日期",
"appTemplates.sprints.sprint1": "迭代 1",
"appTemplates.sprints.sprint2": "迭代 2",
"appTemplates.sprints.sprint3": "迭代 3",
"appTemplates.tasks.activeProjectsGalleryFeature": "活動項目畫廊",
"appTemplates.tasks.activeProjectsGalleryFeatureDescription":
  "進行中項目的畫廊視圖。",
"appTemplates.tasks.activeProjectsView": "活動項目",
"appTemplates.tasks.agilePresetDescription":
  "專為軟件開發團隊設計的系統。通過衝刺、項目估算等組織項目。",
"appTemplates.tasks.assignProperty": "分配",
"appTemplates.tasks.createATask": "創建任務",
"appTemplates.tasks.createNotionWorkspace": "創建 Notion 工作區",
"appTemplates.tasks.defineASprint": "定義迭代",
"appTemplates.tasks.docsTitleProperty": "標題",
"appTemplates.tasks.downloadProjectTemplate": "下載項目模板",
"appTemplates.tasks.downloadTaskTemplate": "下載任務模板",
"appTemplates.tasks.inviteTeamMembers": "邀請團隊成員",
"appTemplates.tasks.meetingNotesTitleProperty": "名稱",
"appTemplates.tasks.myTasks": "我的任務",
"appTemplates.tasks.myTasksFeatureDescription":
  "分配給我的任務的表格視圖。",
"appTemplates.tasks.notesViewName": "筆記",
"appTemplates.tasks.preview1Description": "關於此模板預覽圖片的一些描述...",
"appTemplates.tasks.preview2Description":
  "將項目分解為任務，將工作從高級計劃組織到單個任務。",
"appTemplates.tasks.projectCalendarFeature": "日曆",
"appTemplates.tasks.projectCalendarFeatureDescription":
  "項目時間表的日曆視圖。",
"appTemplates.tasks.projectTitleProperty": "項目名稱",
"appTemplates.tasks.projectsAndTasksPresetDescription":
  "專為小型團隊設計的系統。按項目組織任務，與你的團隊協調，並跟踪進度。",
"appTemplates.tasks.projectsBoardFeature": "項目看板",
"appTemplates.tasks.projectsBoardFeatureDescription": "項目的看板視圖",
"appTemplates.tasks.projectsTimelineView": "時間軸",
"appTemplates.tasks.simpleTasksPresetDescription":
  "簡單任務管理，專為單個用戶而設計。可在一個視圖中跟踪所有任務的狀態。",
"appTemplates.tasks.sprintTitleProperty": "迭代名稱",
"appTemplates.tasks.statusDone": "完成",
"appTemplates.tasks.statusInProgress": "進行中",
"appTemplates.tasks.statusProperty": "狀態",
"appTemplates.tasks.statusToDo": "待辦",
"appTemplates.tasks.taskByDueDateFeature": "任務表格",
"appTemplates.tasks.taskByDueDateFeatureDescription":
  "按到期日期的不同窗口分組的任務表格視圖。",
"appTemplates.tasks.taskByPersonFeatureDescription":
  "按代理人分組的任務看板視圖。",
"appTemplates.tasks.taskByPersonFeatureName": "按人員顯示任務",
"appTemplates.tasks.taskByPersonViewName": "人員",
"appTemplates.tasks.taskByProjectFeatureDescription":
  "按項目分組的任務的看板視圖。",
"appTemplates.tasks.taskByProjectFeatureName": "特定於項目的任務",
"appTemplates.tasks.taskByProjectViewName": "按項目顯示任務",
"appTemplates.tasks.taskTitleProperty": "任務名稱",
"appTemplates.tasks.tasksBoardFeatureDescription": "可視化看板上的工作。",
"appTemplates.wiki.companyHomeWikiDescription":
  "一個將公司信息集中在一起的地方，例如公司政策和重要公告。",
"appTemplates.wiki.engineeringWikiDescription":
  "一個為工程團隊建立的知識庫，包括工程流程和設置指南。",
"appTemplates.wiki.lifeWikiDescription":
  "“我們做得越好，我們就會越快變得更好。 ” ── Douglas Engelbart",
"appTemplates.wiki.personalHomeWikiDescription":
  "將你生活中的所有信息都組織起來。",
"appTemplates.wiki.preview1Description": "關於此模板預覽圖片的一些描述...",
"appTemplates.wiki.preview2Description": "關於此模板預覽視頻的一些描述...",
"appTemplates.wiki.productWikiDescription":
  "一個為產品團隊建立的知識庫，包括啟動過程和團隊OKR。",
"appTemplates.wiki.salesWikiDescription":
  "一個為銷售團隊建立的知識庫，包括推銷材料和銷售流程。",
"appTemplates.wiki.simpleWikiPresetName": "簡單知識庫",
"appTemplates.wiki.teamHomeWikiDescription":
  "為團隊中的每個人提供重要信息、資源、公告等信息的真實來源。",
"appTemplates.wiki.wikiAppName": "知識庫",
"appTemplates.wiki.wikiWelcomeSubtitle":
  "從頭開始使用模板。你稍後可以從模板畫廊中添加更多知識庫。",
"appTemplates.wiki.wikiWelcomeTitle": "創建團隊知識庫",
"appUpdateListener.mobileAppNotSupported.android": "安卓",
"appUpdateListener.mobileAppNotSupported.ios": "iOS",
"appUpdateListener.mobileAppNotSupported.message":
  "不再支持此應用程序版本。{br}請<upgradelink>升級你的 {androidOrIOSApp} 應用</upgradelink>。",
"appUpdateListener.mobilePlatformNotSupported.message":
  "不再支持此操作系統。{br}請<upgradelink>升級到{supportedPlatformVersion}或更高版本。</upgradelink>",
"appUpdateListener.reinstallDesktopApp.message":
  "<textlink>下載並重新安裝</textlink>你的桌面應用以獲取最新功能。",
"appVersionMenuItem.desktopVersion.menuItem":
  "桌面版 {desktopVersionFormatted}",
"appVersionMenuItem.downloadingUpdate.message":
  "正在下載{version} {percentComplete}",
"appVersionMenuItem.lastUpdatedReactNativeVersion.menuItem":
  "移動端 {reactNativeVersionFormatted}",
"appVersionMenuItem.lastUpdatedTime.menuItem": "更新於 {lastUpdatedTime}",
"appVersionMenuItem.mobile.clearCache.message": "清除緩存",
"appVersionMenuItem.noUpdatesForApp.message": "無更新 {timeFromNow}",
"appVersionMenuItem.updateReady.message": "更新就緒 {version}",
"appVersionMenuItem.updateStateForApp.checking.message": "正在檢查更新…",
"appVersionMenuItem.waitingForAppJsUpdate.message": "App.js - 等待中…",
"appVersionMenuitem.updateError.message": "更新錯誤 {errorMessage}",
"appearanceSetting.dark.label": "深色",
"appearanceSetting.light.label": "淺色",
"appearanceSetting.system.label": "使用系統設置",
"appearanceSettings.description.message": "自定義 Notion 在設備上的外觀。",
"appearanceSettings.modal.done": "完成",
"appearanceSettings.title": "外觀",
"appleErrors.api.missingAccessTokenError": "Apple 無法授權登錄。",
"appleErrors.api.missingBetaAppReviewSubmission":
  "找不到 betaAppReviewSubmission 條目。",
"appleErrors.api.missingIdError": "在從 Apple 獲取用戶信息時出現問題。",
"appleErrors.api.missingPreReleaseVersion":
  "找不到 preReleaseVersion 條目。",
"appleErrors.api.statusError": "Apple 服務出現問題。",
"appleErrors.api.tokenError": "在與 Apple 驗證你的身份時出現問題。",
"applyCreditToggle.applyCredit.amount": "使用 {creditAmount} 積分",
"apps.AppInitializationOverlay.startButton": "立即開始",
"apps.AppInitializationOverlay.welcomeTitle.default": "歡迎使用 {appName}",
"apps.emptyAppOverlay.actionButton.label": "添加新 {entity}",
"apps.emptyAppOverlay.emptyMessage.label": "無 {entity}",
"apps.workspacesetup.button.continueWithChosenApps":
  "繼續使用 {num} 個模板",
"apps.workspacesetup.button.continueWithoutChoosingApps":
  "我將稍後添加模板",
"apps.workspacesetup.header.description":
  "從 {workspace} 中每個人可以共同使用的模板開始。",
"apps.workspacesetup.header.title": "讓您的團隊開始使用 Notion",
"asanaActions.authenticatingWithAsana.loadingMessage": "Asana 授權中…",
"asanaActions.loginWithAsanaPopupModal.title": "Asana 登錄",
"asanaImportOption.actionsMenu.connectAnotherAccount": "綁定另一個帳戶",
"asanaImportOption.actionsMenu.import": "導入",
"asanaImportOption.actionsMenu.removeIntegration": "移除",
"asanaImportOption.search.noResultsPlaceholder": "沒有項目",
"asanaImportOption.search.placeholder": "搜索項目…",
"attributionSetting.description.message":
  "在隊友創建或編輯的塊左側查看隊友的姓名首字母縮寫。",
"attributionSetting.title": "塊歸屬",
"attributionTooltip.createdByTitle": "創建者",
"attributionTooltip.lastEditedByTitle": "上次編輯者",
"attributionTooltip.moreTitle": "另外 {total} 個",
"attributionTooltip.pageInTitle": "頁面",
"attributionTooltip.sharedFromTitle": "共享自",
"attributionTooltip.sharedWithTitle": "共享對象",
"audioBlock.embed.caption": "適用於 .mp3、.wav 和 .ogg 等格式",
"audioBlock.embedAudio.button.label": "嵌入音頻",
"audioBlock.placeholder": "添加音頻文件",
"auditLog.actionNames.eventColumn.login": "已登錄",
"auditLog.actionNames.eventColumn.loginWithCity":
  "已登錄 {platform} {city}",
"auditLog.actionNames.eventColumn.loginWithCityAndCountry":
  "已登錄 {platform} {city}，{countryCode}",
"auditLog.actionNames.eventColumn.loginWithCityStateAndCountry":
  "已在 {geolocation} 通過 {platform} 登錄",
"auditLog.actionNames.eventColumn.loginWithMetadata":
  "已在 {city} 登錄 {platform}",
"auditLog.actionNames.eventColumn.loginWithPlatform":
  "已通過 {platform} 登錄",
"auditLog.actionNames.eventColumn.loginWithPlatformOnly":
  "已登錄 {platform}",
"auditLog.dateTimeRangeMenu.endingDatePlaceholder": "結束",
"auditLog.dateTimeRangeMenu.startingDatePlaceholder": "開始",
"auditLog.dateTimeRangeMenu.timePlaceholderInNumber": "凌晨 12:00",
"auditLogCSV.menu.30days": "過去 30 天",
"auditLogCSV.menu.365days": "過去 1 年",
"auditLogCSV.menu.365days.prompt":
  "你確定要導出一年的 CSV 嗎？在後台進行處理時，不能重複此操作。",
"auditLogCSV.menu.60days": "過去 60 天",
"auditLogCSV.menu.90days": "過去 90 天",
"auditLogCSV.menu.export": "導出",
"auditLogCSV.popup.tooltip": "點擊以 CSV 格式導出審計日誌的選項",
"auditLogColumnEvent.tooltip.audienceMessage": "頁面觀眾：{audience}",
"auditLogColumnEvent.tooltip.pageAudience.private": "私人",
"auditLogColumnEvent.tooltip.pageAudience.sharedExternally": "已外部分享",
"auditLogColumnEvent.tooltip.pageAudience.sharedInternally": "已內部分享",
"auditLogColumnEvent.tooltip.pageAudience.sharedToWeb": "已分享到網絡",
"auditLogEntry.changes.workspaceCreation.afterSetting":
  "到 {afterWorkspaceCreationSetting}",
"auditLogEntry.changes.workspaceCreation.beforeSetting":
  "從 {prevWorkspaceCreationSetting}",
"auditLogPaginatedTable.copiedText.noEmail": "不適用",
"auditLogPaginatedTable.copiedText.noRole": "不適用",
"auditLogPaginatedTable.copiedText.notionAdmin": "notion_admin",
"auditLogPaginatedTable.copyButton.actionName": "actionName",
"auditLogPaginatedTable.copyButton.emailPlaceholder": "郵箱地址",
"auditLogPaginatedTable.copyButton.geolocationPlaceholder": "地理位置",
"auditLogPaginatedTable.copyButton.ipPlaceholder": "IP",
"auditLogPaginatedTable.copyButton.platformPlaceholder": "平台",
"auditLogPaginatedTable.copyButton.rolePlaceholder": "角色",
"auditLogSettings.copiedText.missingField": "缺少",
"auditLogSettings.copiedText.notApplicable": "不適用",
"auditLogSettings.metadata.cityAndCountry": "{city}，{countryCode}",
"auditLogSettings.metadata.cityStateAndCountry":
  "{city}，{state}，{countryCode}",
"auditLogSettings.metadata.ipAddress": "IP 地址：{ip}",
"auditLogSettings.timeTooltip.localTIme": "當地時區：{timezone}",
"auditLogSettings.timeTooltip.utcTime": "UTC：{time}",
"auditLogSpaceRoleMessages.admin": "管理員",
"auditLogSpaceRoleMessages.guest": "訪客",
"auditLogSpaceRoleMessages.member": "成員",
"auditLogSpaceRoleMessages.membershipAdmin": "成員資格管理員",
"auditLogSpaceRoleMessages.noAccess": "無訪問權限",
"auditLogSpaceRoleMessages.workspaceOwner": "工作區所有者",
"auditlog.actionNames.allowed_support_access":
  "授予 {name} 的支持訪問權限，直到 {date}",
"auditlog.actionNames.automatic_account_creation_disabled":
  "已禁用在登錄時自動創建帳戶",
"auditlog.actionNames.automatic_account_creation_enabled":
  "已啟用在登錄時自動創建帳戶",
"auditlog.actionNames.eventColumn.a_file": "文件",
"auditlog.actionNames.eventColumn.a_file_with_extension":
  "{extension} 文件",
"auditlog.actionNames.eventColumn.allowed_email_domain_added":
  "已將“{addedValue}”添加到允許的電子郵件域名中",
"auditlog.actionNames.eventColumn.allowed_email_domain_removed":
  "已將“{removedValue}”從允許的電子郵件域名中刪除",
"auditlog.actionNames.eventColumn.disable_guests_toggled": "訪客",
"auditlog.actionNames.eventColumn.email_changed":
  "已將電子郵件從 {oldEmail} 更改為 {newEmail}",
"auditlog.actionNames.eventColumn.export_toggled": "導出",
"auditlog.actionNames.eventColumn.file_downloaded":
  "已從 {pageName} 下載 {fileName}",
"auditlog.actionNames.eventColumn.file_uploaded": "已上傳文件",
"auditlog.actionNames.eventColumn.file_uploaded_public":
  "已將文件上傳到 {pageName}",
"auditlog.actionNames.eventColumn.for_private_team": "針對私人團隊空間",
"auditlog.actionNames.eventColumn.for_team_name": "針對 {teamName}",
"auditlog.actionNames.eventColumn.from_old_team_name_to_new_team_name":
  "從“{oldTeamName}”更改為“{newTeamName}”",
"auditlog.actionNames.eventColumn.from_unknown_team_name_to_new_team_name":
  "從某個團隊空間名稱更改為“{newTeamName}”",
"auditlog.actionNames.eventColumn.group": "群組",
"auditlog.actionNames.eventColumn.group_added_to_team":
  "已邀請 {groupName} 作為團隊空間成員加入 {teamName}",
"auditlog.actionNames.eventColumn.group_removed_from_team":
  "已將 {groupName} 從 {teamName} 中移除",
"auditlog.actionNames.eventColumn.guest_removed":
  "已將訪客 {guestNameAndEmail} 從工作區中移除",
"auditlog.actionNames.eventColumn.idp_metadata_url_set":
  "將 IDP 元數據 URL 設置為“{newValue}”",
"auditlog.actionNames.eventColumn.idp_metadata_url_updated":
  "已將 IDP 元數據 URL 從“{oldValue}”更改為“{newValue}”",
"auditlog.actionNames.eventColumn.idp_metadata_xml_removed":
  "已刪除 IDP 元數據 XML",
"auditlog.actionNames.eventColumn.idp_metadata_xml_updated":
  "已更新 IDP 元數據 XML",
"auditlog.actionNames.eventColumn.inviteLink.disabled": "已禁用邀請鏈接",
"auditlog.actionNames.eventColumn.inviteLink.enabled": "已啟用邀請鏈接",
"auditlog.actionNames.eventColumn.invite_link_disabled": "已禁用邀請鏈接",
"auditlog.actionNames.eventColumn.invite_link_enabled": "已啟用邀請鏈接",
"auditlog.actionNames.eventColumn.invite_link_reset": "重置邀請鏈接",
"auditlog.actionNames.eventColumn.logged_in_geolocation":
  "位於 {geolocation}",
"auditlog.actionNames.eventColumn.logged_in_platform": "在 {platform} 上",
"auditlog.actionNames.eventColumn.logout": "已登出",
"auditlog.actionNames.eventColumn.member_added_to_team":
  "已邀請 {memberNameAndEmail} 作為 {teamRole} 加入 {teamName}",
"auditlog.actionNames.eventColumn.member_invited":
  "已邀請 {memberNameAndEmail} 作為 {newRole} 加入工作區",
"auditlog.actionNames.eventColumn.member_joined": "已加入工作區",
"auditlog.actionNames.eventColumn.member_joined_team":
  "已作為 {teamRole} 加入 {teamName}",
"auditlog.actionNames.eventColumn.member_left": "已離開工作區",
"auditlog.actionNames.eventColumn.member_left_team": "已離開 {teamName}",
"auditlog.actionNames.eventColumn.member_removed":
  "已將 {memberNameAndEmail} 從工作區中移除",
"auditlog.actionNames.eventColumn.member_removed_from_team":
  "已將 {memberNameAndEmail} 從 {teamName} 中移除",
"auditlog.actionNames.eventColumn.member_role_updated":
  "已將 {memberNameAndEmail} 從 {oldRole} 更新為 {newRole}",
"auditlog.actionNames.eventColumn.member_team_role_updated":
  "{teamName} 中的 {memberNameAndEmail} 已從 {oldTeamRole} 更新為 {newTeamRole}",
"auditlog.actionNames.eventColumn.member_updated":
  "已將成員更新為 {newRole}",
"auditlog.actionNames.eventColumn.old_domain": "原域名為“{oldDomain}”",
"auditlog.actionNames.eventColumn.otherWorkspace": "另一個工作區",
"auditlog.actionNames.eventColumn.page_access_requests_toggled":
  "來自非成員的頁面訪問請求",
"auditlog.actionNames.eventColumn.page_created_general": "已創建頁面",
"auditlog.actionNames.eventColumn.page_created_private": "已創建私人頁面",
"auditlog.actionNames.eventColumn.page_created_team":
  "已在 {teamName} 下創建頁面",
"auditlog.actionNames.eventColumn.page_created_under":
"已使用 {parentPageName} 創建頁面",
"auditlog.actionNames.eventColumn.page_created_workspace":
"已在工作區中創建頁面",
"auditlog.actionNames.eventColumn.page_deleted": "已刪除 {pageName}",
"auditlog.actionNames.eventColumn.page_deleted_private": "已刪除私人頁面",
"auditlog.actionNames.eventColumn.page_exported": "已導出 {pageName}",
"auditlog.actionNames.eventColumn.page_exported_private": "已導出私人頁面",
"auditlog.actionNames.eventColumn.page_moved":
"已將 {pageName} 從 {oldParentName} 移動到 {newParentName}",
"auditlog.actionNames.eventColumn.page_moved_private": "已移動私人頁面",
"auditlog.actionNames.eventColumn.page_moved_team":
"已將 {pageName} 從 {oldTeamAndPage} 移動到 {newTeamAndPage}",
"auditlog.actionNames.eventColumn.page_permanently_deleted":
"永久刪除 {pageName}",
"auditlog.actionNames.eventColumn.page_permissions_private":
"已更新私人頁面的權限",
"auditlog.actionNames.eventColumn.page_permissions_under":
'已更新 "{pageName}" 的權限',
"auditlog.actionNames.eventColumn.page_permissions_updated_team":
"{teamName} 的 {pageName} 權限已從 {oldRole} 更新為 {newRole}",
"auditlog.actionNames.eventColumn.page_permissions_updated_workspace_bot":
"bot {botName} 對 {pageName} 的權限已從 {oldRole} 更新為 {newRole}",
"auditlog.actionNames.eventColumn.page_permissions_updated_workspace_default":
"{memberNameAndEmail} 對 {pageName} 的權限已從 {oldRole} 更新為 {newRole}",
"auditlog.actionNames.eventColumn.page_permissions_updated_workspace_guest":
"已將訪客 {guestNameAndEmail} 的 {pageName} 權限從 {oldRole} 更新為{newRole}。",
"auditlog.actionNames.eventColumn.page_permissions_updated_workspace_space":
"已為工作區中的所有人將 {pageName} 的權限從 {oldRole} 更新為 {newRole}",
"auditlog.actionNames.eventColumn.page_restored": "已恢復 {pageName}",
"auditlog.actionNames.eventColumn.page_restored_private": "已恢復私人頁面",
"auditlog.actionNames.eventColumn.page_shared_to_web":
"已將 {pageName} 分享到網絡",
"auditlog.actionNames.eventColumn.page_shared_to_web.disabled":
"已禁用將 {pageName} 分享到網絡",
"auditlog.actionNames.eventColumn.page_shared_to_web.enabled":
"已啟用將 {pageName} 分享到網絡",
"auditlog.actionNames.eventColumn.page_viewed_private": "已查看私人頁面",
"auditlog.actionNames.eventColumn.page_viewed_under": "已查看 {pageName}",
"auditlog.actionNames.eventColumn.pages_to_other_workspaces_toggled":
"將頁面移動或保存副本到其他工作區",
"auditlog.actionNames.eventColumn.password_changed": "已更改登錄密碼",
"auditlog.actionNames.eventColumn.password_cleared": "已清除登錄密碼",
"auditlog.actionNames.eventColumn.password_set": "已創建登錄密碼",
"auditlog.actionNames.eventColumn.picture_changed": "已更改個人資料圖片",
"auditlog.actionNames.eventColumn.preferred_name_changed":
"已將名稱從“{oldValue}”更改為“{newValue}”",
"auditlog.actionNames.eventColumn.preferred_name_changed_from_value":
"已刪除原名稱“{oldValue}”",
"auditlog.actionNames.eventColumn.preferred_name_changed_generic":
"名稱已更改",
"auditlog.actionNames.eventColumn.preferred_name_changed_to_value":
"將名稱設置為“{newValue}”",
"auditlog.actionNames.eventColumn.private": "私人",
"auditlog.actionNames.eventColumn.private_page": "私人頁面",
"auditlog.actionNames.eventColumn.private_team": "私人團隊空間",
"auditlog.actionNames.eventColumn.public_page_changed":
"將公共主頁從“{oldPage}”更改為“{newPage}”",
"auditlog.actionNames.eventColumn.public_page_set":
"將“{newPage}”設置為公共主頁",
"auditlog.actionNames.eventColumn.public_page_sharing_toggled":
"公開分享頁面的成員",
"auditlog.actionNames.eventColumn.team": "團隊空間",
"auditlog.actionNames.eventColumn.team_access_level_types.team_members":
"任何團隊成員",
"auditlog.actionNames.eventColumn.team_access_level_types.team_owners":
"僅限團隊所有者",
"auditlog.actionNames.eventColumn.team_access_level_types.unknown": "未知",
"auditlog.actionNames.eventColumn.team_and_page": "團隊空間和頁面",
"auditlog.actionNames.eventColumn.team_archived": "已歸檔 {teamName}",
"auditlog.actionNames.eventColumn.team_created": "已創建 {teamName}",
"auditlog.actionNames.eventColumn.team_creation_admins_setting_disabled":
"已禁用成員創建團隊空間",
"auditlog.actionNames.eventColumn.team_creation_admins_setting_enabled":
"已啟用成員創建團隊空間",
"auditlog.actionNames.eventColumn.team_default_disabled":
"已從默認團隊空間列表中移除 {teamName} 。工作區成員將不再自動添加到該團隊空間中",
"auditlog.actionNames.eventColumn.team_default_enabled":
"已將 {teamName} 添加到默認團隊空間列表中。工作區成員將自動添加到該團隊空間中",
"auditlog.actionNames.eventColumn.team_description_changed":
"已更改 {teamName} 的描述",
"auditlog.actionNames.eventColumn.team_export_disabled":
"已為 {teamName} 禁用導出",
"auditlog.actionNames.eventColumn.team_export_enabled":
"已為 {teamName} 啟用導出",
"auditlog.actionNames.eventColumn.team_guests_toggled.team_space_equal":
". 此設置與當前工作區設置相同",
"auditlog.actionNames.eventColumn.team_guests_toggled.team_space_less_restrictive":
". 此設置比當前的工作區設置限制更少",
"auditlog.actionNames.eventColumn.team_guests_toggled.team_space_more_restrictive":
". 此設置比當前的工作區設置限制更多",
"auditlog.actionNames.eventColumn.team_guests_toggled_disabled":
"已禁用 {teamName} 的訪客",
"auditlog.actionNames.eventColumn.team_guests_toggled_enabled":
"已啟用 {teamName} 的訪客",
"auditlog.actionNames.eventColumn.team_icon_changed":
"已更改 {teamName} 的圖標",
"auditlog.actionNames.eventColumn.team_invite_access_changed":
"更改了誰可以為 {teamName} 邀請團隊成員加入 {newType}",
"auditlog.actionNames.eventColumn.team_level_guest": "團隊空間訪客",
"auditlog.actionNames.eventColumn.team_member": "團隊空間成員",
"auditlog.actionNames.eventColumn.team_member_default_permission_updated":
"已將 {teamName} 中團隊空間成員的默認頁面權限從 {oldRole} 更新為 {newRole}",
"auditlog.actionNames.eventColumn.team_name_changed":
"已更改團隊空間名稱 {oldTeamNameToNewTeamName}",
"auditlog.actionNames.eventColumn.team_owner": "團隊空間所有者",
"auditlog.actionNames.eventColumn.team_parent_page":
"{teamName} 頁面 {parentPage}",
"auditlog.actionNames.eventColumn.team_privacy_type_changed":
"{teamName} 的團隊隱私類型已從 {oldType} 更改為 {newType}",
"auditlog.actionNames.eventColumn.team_privacy_types.closed": "封閉式",
"auditlog.actionNames.eventColumn.team_privacy_types.open": "開放式",
"auditlog.actionNames.eventColumn.team_privacy_types.private": "私人",
"auditlog.actionNames.eventColumn.team_privacy_types.unknown":
"未知的隱私狀態",
"auditlog.actionNames.eventColumn.team_public_page_sharing_disabled":
"已禁用成員公開分享 {teamName} 下的頁面",
"auditlog.actionNames.eventColumn.team_public_page_sharing_enabled":
"已啟用成員公開分享 {teamName} 下的頁面",
"auditlog.actionNames.eventColumn.team_restored": "已恢復 {teamName}",
"auditlog.actionNames.eventColumn.team_sidebar_editing_disabled":
"已禁用成員更改 {teamName} 的側邊欄部分",
"auditlog.actionNames.eventColumn.team_sidebar_editing_enabled":
"已啟用成員更改 {teamName} 的側邊欄部分",
"auditlog.actionNames.eventColumn.team_workspace_default_permission_updated":
"工作區中 {teamName} 的其他所有人的默認頁面權限已從 {oldRole} 更新為 {newRole}",
"auditlog.actionNames.eventColumn.thisWorkspace": "此工作區",
"auditlog.actionNames.eventColumn.toggleEvent.disabled":
"已禁用 {workspaceSetting}",
"auditlog.actionNames.eventColumn.toggleEvent.enabled":
"已啟用 {workspaceSetting}",
"auditlog.actionNames.eventColumn.under_private_page_in_team":
"{teamName} 中的私人頁面",
"auditlog.actionNames.eventColumn.under_private_team_and_private_parent_page":
"私人團隊空間頁面",
"auditlog.actionNames.eventColumn.untitled_page": "無標題頁面",
"auditlog.actionNames.eventColumn.user_deleted": "用戶已刪除",
"auditlog.actionNames.eventColumn.workspace": "工作區",
"auditlog.actionNames.eventColumn.workspaceLevel": "工作區級別",
"auditlog.actionNames.eventColumn.workspace_creation_set_for_email_domain":
"已更改工作區創建設置 {before}{after}。",
"auditlog.actionNames.eventColumn.workspace_creation_set_for_email_domain.fallback_message":
"已更改工作區創建設置",
"auditlog.actionNames.eventColumn.workspace_domain_changed":
"已將工作區域名 {oldValue} 更改為“{newValue}”",
"auditlog.actionNames.eventColumn.workspace_exported":
"已導出所有工作區內容",
"auditlog.actionNames.eventColumn.workspace_icon_changed":
"已更改工作區圖標",
"auditlog.actionNames.eventColumn.workspace_integration_restriction_changed.approved_only":
"已禁用成員安裝集成",
"auditlog.actionNames.eventColumn.workspace_integration_restriction_changed.disabled_built_by_notion.from_approved_or_built_by_notion":
"已禁用自動批准由 Notion 構建的集成",
"auditlog.actionNames.eventColumn.workspace_integration_restriction_changed.enabled_built_by_notion":
"已啟用自動批准由 Notion 構建的集成",
"auditlog.actionNames.eventColumn.workspace_integration_restriction_changed.fallback_message":
"已更改工作區集成限制",
"auditlog.actionNames.eventColumn.workspace_integration_restriction_changed.no_restrictions":
"已啟用成員安裝集成",
"auditlog.actionNames.eventColumn.workspace_name_changed":
"已將工作區名稱從“{oldValue}”更改為“{newValue}”",
"auditlog.actionNames.eventColumn.workspace_sidebar_editing_toggled":
"更改工作區部分的成員",
"auditlog.actionNames.public_page_cleared": "已清除公共主頁鏈接",
"auditlog.actionNames.revoked_support_access":
"已撤消 {name} 的支持訪問權限",
"auditlog.actionNames.saml_disabled": "已禁用 SAML",
"auditlog.actionNames.saml_enabled": "已啟用 SAML",
"auditlog.actionNames.saml_enforced": "已啟用強制實施 SAML",
"auditlog.actionNames.saml_unenforced": "已禁用強制實施 SAML",
"auditlog.actionNames.scim_token_generated": "生成的 API SCIM 令牌",
"auditlog.actionNames.scim_token_revoked": "撤銷的 API SCIM 令牌",
"auditlog.error.loadCurrentAuditLogError": "無法加載審計日誌",
"auditlog.logTable.dateColumn.header": "日期",
"auditlog.logTable.eventColumn.header": "事件",
"auditlog.logTable.nextPage": "下一個",
"auditlog.logTable.noResults": "無結果",
"auditlog.logTable.noResultsHelpText":
"嘗試不同的篩選器。日誌可能需要一些時間才能顯示出來。",
"auditlog.logTable.previousPage": "上一個",
"auditlog.logTable.userColumn.header": "用戶",
"auditlog.title": "審計日誌",
"auditlogActorFilter.removed_user": "已刪除",
"auditlogActorFilter.searchActor.placeholder": "搜索用戶…",
"auditlogActorFilter.searchActor.resultsTitle": "選擇用戶",
"auditlogActorFilter.title": "用戶",
"auditlogDateFilter.quickFilters.lastMonth": "過去 30 天",
"auditlogDateFilter.quickFilters.lastWeek": "過去 7 天",
"auditlogDateFilter.quickFilters.today": "今天",
"auditlogDateFilter.quickFilters.yesterday": "昨天",
"auditlogDateFilter.timeToggle": "使用時間",
"auditlogDateFilter.title": "日期",
"auditlogEventFilter.actionName.email_changed": "郵件已更改",
"auditlogEventFilter.actionName.file_downloaded": "已下載的文件",
"auditlogEventFilter.actionName.file_uploaded": "文件已上傳",
"auditlogEventFilter.actionName.guest_removed": "訪客已刪除",
"auditlogEventFilter.actionName.invite_link_toggled": "已切換邀請鏈接",
"auditlogEventFilter.actionName.login": "登錄",
"auditlogEventFilter.actionName.logout": "登出",
"auditlogEventFilter.actionName.member_invited": "成員已邀請",
"auditlogEventFilter.actionName.member_joined": "成員已加入",
"auditlogEventFilter.actionName.member_removed": "成員已刪除",
"auditlogEventFilter.actionName.member_role_updated": "成員角色已更新",
"auditlogEventFilter.actionName.page_created": "頁面已創建",
"auditlogEventFilter.actionName.page_deleted": "頁面已刪除",
"auditlogEventFilter.actionName.page_exported": "頁面已導出",
"auditlogEventFilter.actionName.page_moved": "頁面已移動",
"auditlogEventFilter.actionName.page_permission_updated": "頁面權限已更新",
"auditlogEventFilter.actionName.page_restored": "頁面已恢復",
"auditlogEventFilter.actionName.page_shared_to_web": "已分享到網絡的頁面",
"auditlogEventFilter.actionName.page_viewed": "頁面已查看",
"auditlogEventFilter.actionName.password_changed": "密碼已更改",
"auditlogEventFilter.actionName.password_cleared": "密碼已清除",
"auditlogEventFilter.actionName.password_set": "密碼已設置",
"auditlogEventFilter.actionName.picture_changed": "圖片已更改",
"auditlogEventFilter.actionName.preferred_name_changed": "名稱已更改",
"auditlogEventFilter.actionName.user_deleted": "用戶已刪除",
"auditlogEventFilter.actionNames.allowed_email_domain_added":
  "添加了允許的電子郵件域名",
"auditlogEventFilter.actionNames.allowed_email_domain_removed":
  "刪除了允許的電子郵件域名",
"auditlogEventFilter.actionNames.allowed_support_access":
  "已授予支持訪問權限",
"auditlogEventFilter.actionNames.automatic_account_creation_toggled":
  "已切換至在登錄時自動創建帳戶",
"auditlogEventFilter.actionNames.disable_guests_toggled": "已切換禁用訪客",
"auditlogEventFilter.actionNames.export_toggled": "已切換導出",
"auditlogEventFilter.actionNames.group_added_to_team":
  "群組已添加到團隊空間",
"auditlogEventFilter.actionNames.group_removed_from_team":
  "群組已從團隊空間中移除",
"auditlogEventFilter.actionNames.idp_metadata_url_updated":
  "IDP 元數據 URL 已更新",
"auditlogEventFilter.actionNames.idp_metadata_xml_removed":
  "IDP 元數據 XML 已刪除",
"auditlogEventFilter.actionNames.idp_metadata_xml_updated":
  "IDP 元數據 XML 已更新",
"auditlogEventFilter.actionNames.invite_link_reset": "邀請鏈接重置",
"auditlogEventFilter.actionNames.member_added_to_team":
  "成員已添加到團隊空間",
"auditlogEventFilter.actionNames.member_joined_team": "成員已加入團隊空間",
"auditlogEventFilter.actionNames.member_left_team": "成員已離開團隊空間",
"auditlogEventFilter.actionNames.member_removed_from_team":
  "成員已從團隊空間中移除",
"auditlogEventFilter.actionNames.member_team_role_updated":
  "已更新團隊空間的成員角色",
"auditlogEventFilter.actionNames.page_access_requests_toggled":
  "已切換頁面訪問請求",
"auditlogEventFilter.actionNames.pages_to_other_workspaces_toggled":
  "頁面已切換到其他工作區",
"auditlogEventFilter.actionNames.public_page_cleared": "已清除公共主頁鏈接",
"auditlogEventFilter.actionNames.public_page_set": "公共主頁設置",
"auditlogEventFilter.actionNames.public_page_sharing_toggled":
  "已切換公共頁面共享",
"auditlogEventFilter.actionNames.revoked_support_access":
  "已撤銷支持訪問權限",
"auditlogEventFilter.actionNames.saml_enforce_toggled":
  "已切換至強制執行 SAML",
"auditlogEventFilter.actionNames.saml_toggled": "已切換至啟用 SAML",
"auditlogEventFilter.actionNames.scim_token_generated": "已生成 SCIM 令牌",
"auditlogEventFilter.actionNames.scim_token_revoked": "已撤銷 SCIM 令牌",
"auditlogEventFilter.actionNames.team_archived": "團隊空間已歸檔",
"auditlogEventFilter.actionNames.team_created": "團隊空間已創建",
"auditlogEventFilter.actionNames.team_creation_admins_setting_toggled":
  "已更改只有管理員才能創建團隊空間",
"auditlogEventFilter.actionNames.team_default_toggled":
  "已切換團隊空間默認值",
"auditlogEventFilter.actionNames.team_description_changed":
  "團隊空間描述已更改",
"auditlogEventFilter.actionNames.team_export_toggled":
  "已切換團隊空間導出功能",
"auditlogEventFilter.actionNames.team_guests_toggled": "已切換團隊禁用訪客",
"auditlogEventFilter.actionNames.team_icon_changed": "團隊空間圖標已更改",
"auditlogEventFilter.actionNames.team_invite_access_changed":
  "團隊邀請訪問權限已更改",
"auditlogEventFilter.actionNames.team_member_default_permission_updated":
"已更新團隊空間成員默認權限",
"auditlogEventFilter.actionNames.team_name_changed": "團隊空間名稱已更改",
"auditlogEventFilter.actionNames.team_privacy_type_changed":
"團隊隱私類型已更改",
"auditlogEventFilter.actionNames.team_public_page_sharing_toggled":
"已切換團隊空間公共頁面共享權限",
"auditlogEventFilter.actionNames.team_restored": "團隊空間已恢復",
"auditlogEventFilter.actionNames.team_sidebar_editing_toggled":
"已切換團隊空間側邊欄編輯權限",
"auditlogEventFilter.actionNames.team_workspace_default_permission_updated":
"已更新團隊空間的工作區默認權限",
"auditlogEventFilter.actionNames.workspace_creation_set_for_email_domain":
"工作區創建設置已更新",
"auditlogEventFilter.actionNames.workspace_domain_changed": "已更改域名",
"auditlogEventFilter.actionNames.workspace_exported": "內容已導出",
"auditlogEventFilter.actionNames.workspace_icon_changed": "圖標已更改",
"auditlogEventFilter.actionNames.workspace_integration_restriction_changed":
"已切換集成安裝",
"auditlogEventFilter.actionNames.workspace_name_changed": "名稱已更改",
"auditlogEventFilter.actionNames.workspace_sidebar_editing_toggled":
"已切換工作區側邊欄編輯",
"auditlogEventFilter.applyButton": "應用",
"auditlogEventFilter.categoryName.account": "帳戶",
"auditlogEventFilter.categoryName.page": "頁面",
"auditlogEventFilter.categoryName.team": "團隊空間",
"auditlogEventFilter.categoryName.workspace": "工作區",
"auditlogEventFilter.clearButton": "清除",
"auditlogEventFilter.title": "事件",
"backlink.currentPageTokenLabel": "此頁面",
"backlink.originalTokenLabel": "原始",
"block.imageCaption.placeholder": "寫一個標題…",
"block.propertyTypeName.caption": "標題",
"block.propertyTypeName.checked": "已選",
"block.propertyTypeName.description": "描述",
"block.propertyTypeName.language": "語言",
"block.propertyTypeName.link": "鏈接",
"block.propertyTypeName.size": "大小",
"block.propertyTypeName.source": "來源",
"block.propertyTypeName.title": "標題",
"block.selectableAddMenu.tooltip.addBelow":
"按住 Option 鍵點擊<mediumcolor>以在右側添加塊</mediumcolor>",
"block.selectableAddMenu.tooltip.addRight":
"點擊<mediumcolor>以在下方添加塊</mediumcolor>",
"blockAuthorInfo.label": "上次由{author}編輯",
"blockAuthorInfo.restrictedBadge": "已受限",
"blockAuthorInfo.restrictedBadge.clickText": "點擊查看訪問權限",
"blockAuthorInfo.restrictedBadge.infoText": "訪問受限於父頁面",
"blockDiscussionMenu.emptyState.noCommentsMessage": "無評論。",
"blockDiscussionMenu.emptyState.noResolvedCommentsMessage":
"沒有已解決的評論。",
"blockDiscussionMenu.mobileMenu.title": "評論",
"blockDiscussionMenu.openDiscussionsTab.title":
"進行中 ({numberOfOpenDiscussions})",
"blockDiscussionMenu.resolvedDiscussionsTab.title":
"已解決 ({numberOfResolvedDiscussions})",
"blockHelpers.abstractBlockType": "Abstract",
"blockHelpers.audioBlockType": "音頻",
"blockHelpers.codepenBlockType": "CodePen",
"blockHelpers.deepnoteBlockType": "Deepnote",
"blockHelpers.driveBlockType": "谷歌云端硬盤",
"blockHelpers.embedBlockType": "嵌入",
"blockHelpers.excalidrawBlockType": "Excalidraw",
"blockHelpers.figmaBlockType": "Figma",
"blockHelpers.fileBlockType": "文件",
"blockHelpers.framerBlockType": "Framer",
"blockHelpers.gistBlockType": "Gist",
"blockHelpers.hexBlockType": "十六進制",
"blockHelpers.imageBlockType": "圖片",
"blockHelpers.invisionBlockType": "Invision",
"blockHelpers.loomBlockType": "Loom",
"blockHelpers.mapsBlockType": "地圖",
"blockHelpers.miroBlockType": "Miro",
"blockHelpers.pdfBlockType": "PDF",
"blockHelpers.replitBlockType": "Replit",
"blockHelpers.sketchBlockType": "Sketch",
"blockHelpers.tweetBlockType": "推文",
"blockHelpers.typeformBlockType": "Typeform",
"blockHelpers.videoBlockType": "視頻",
"blockHelpers.whimsicalBlockType": "Whimsical",
"blockMenu.actionButton.label": "動作",
"blockMenu.filterForActions.placeholder": "搜索動作…",
"blockMenuRestrictedMessage.adminRestoreAction.label": "恢復權限",
"blockMenuRestrictedMessage.label": "你無權編輯此塊，因為它受到限制。",
"blockPasteMenu.actions.createTransclusion.title": "粘貼並同步",
"blockPasteMenu.actions.dismiss.title": "解除",
"blockPasteMenu.actions.linkToPage.title": "指向頁面的鏈接",
"blockPermissionsSettings.botPermission.tooltip":
"這是你工作區中的一個集成服務。",
"blockPermissionsSettings.confirmationDialog.private.message":
"確定將當前頁面變為私有？<semibold>私有化後只有你可以訪問它。</semibold>",
"blockPermissionsSettings.confirmationDialog.privateButton.label":
"移動到私人",
"blockPermissionsSettings.confirmationDialog.workspace.message":
"確定與工作區分享此頁面嗎？<semibold>所有 {memberCount} 位成員都將可以訪問。</semibold>",
"blockPermissionsSettings.confirmationDialog.workspaceButton.label":
"移動到工作區",
"blockPermissionsSettings.copyLinkButton.label": "複製鏈接",
"blockPermissionsSettings.groupPermission.label": "組",
"blockPermissionsSettings.groupPermission.none":
"{numberOfGroupMembers, plural, other {{numberOfGroupMembers} 位群組成員}}",
"blockPermissionsSettings.groupPermission.tooltip":
  "將此頁面顯示在{groupName}群組成員的<boldtext>共享</boldtext>側邊欄分組中。",
"blockPermissionsSettings.groupPermissionUsers.tooltip":
  "其他 {countRemainingUsers} 位…",
"blockPermissionsSettings.learnAboutAutogeneratedDomains.changingLinks":
  "公共鏈接正在發生變化。",
"blockPermissionsSettings.learnAboutAutogeneratedDomains.openSettingsCTA":
  "設置",
"blockPermissionsSettings.learnAboutAutogeneratedDomains.setDomainForPublicLinks":
  "為以下位置的公共鏈接設置域名",
"blockPermissionsSettings.learnAboutAutogeneratedDomains.transition":
  "了解有關轉換的更多信息",
"blockPermissionsSettings.learnAboutSharing.prompt": "了解共享",
"blockPermissionsSettings.learnMore.prompt": "了解更多",
"blockPermissionsSettings.mobileShareMenu.title": "分享",
"blockPermissionsSettings.moveToButton.label": "移動到",
"blockPermissionsSettings.offline.prompt": "連接網絡後便可發布並分享。",
"blockPermissionsSettings.permissionItem.linkSharing": "分享到網絡",
"blockPermissionsSettings.permissionItem.teamAccess": "{teamName} 的成員",
"blockPermissionsSettings.permissionItem.teamAccess.privateTeam":
  "私人團隊的團隊成員",
"blockPermissionsSettings.permissionItem.teamOwnerAccess":
  "{teamName} 的所有者",
"blockPermissionsSettings.permissionItem.workspaceAccessNew":
  "{workspaceName}中的所有人",
"blockPermissionsSettings.permissionsForBot.label": "集成服務",
"blockPermissionsSettings.permissionsForBot.personalBot.label":
  "僅對你可見",
"blockPermissionsSettings.permissionsForBot.spaceBot.label":
  "已通過工作區分享",
"blockPermissionsSettings.privatePermissions.tooltip":
  "只有你可以訪問此頁面。",
"blockPermissionsSettings.publicLinkInfo.tooltip":
  "此頁面有公共鏈接訪問權限，擁有鏈接的任何人都可以查看。",
"blockPermissionsSettings.publicPermission.canComment":
  "任何有鏈接的人都可以發表評論",
"blockPermissionsSettings.publicPermission.canEdit":
  "任何有鏈接的人都可以編輯和評論",
"blockPermissionsSettings.publicPermission.canRead":
  "任何有鏈接的人都可以查看",
"blockPermissionsSettings.publicPermission.none": "發布並與任何人分享鏈接",
"blockPermissionsSettings.publicPermission.tooltip":
  "知道鏈接的任何人都可以訪問此頁面。",
"blockPermissionsSettings.restrictedPermissions.tooltip":
  "訪問權限基於{inlineIconAndName}。更改後將不再繼承父頁面的權限。",
"blockPermissionsSettings.sentInvitation.message": "已發送邀請",
"blockPermissionsSettings.spacePermission.none":
  "{numberOfWorkspaceMembers, plural, other {{numberOfWorkspaceMembers} 位工作區成員}}",
"blockPermissionsSettings.spacePermission.tooltip":
  "將此頁面顯示在工作區所有成員的<boldtext>工作區</boldtext>側邊欄分組中。",
"blockPermissionsSettings.teamOwnerPermission.subtitle":
  "{teamOwnersCount, plural, other {{teamOwnersCount} 個人}}",
"blockPermissionsSettings.teamOwnerPermission.tooltip":
  "適用於 {teamName} 的全部所有者（共 {ownerCount} 人）。",
"blockPermissionsSettings.teamPermission.subtitle":
  "{membersCount, plural, other {{membersCount} 個團隊成員}}",
"blockPermissionsSettings.teamPermission.tooltip":
  "適用於 {teamName} 的全部所有者和非訪客團隊成員（共 {memberCount} 個）。",
"blockPermissionsSettings.userPermissions.tooltip":
  "只有你和其他受邀成員或訪客才能通過鏈接查看此頁面。",
"blockPermissionsSettings.workspacePermissions.tooltip":
  "此頁面具有工作區訪問權限，工作區中的任何人都可以通過鏈接查看此頁面。",
"blockPropertyValue.filterForNumberFormats.placeholder": "篩選格式...",
"blockTemplates.board.assignPropertyTitle": "指派",
"blockTemplates.board.card1Title": "卡片 1",
"blockTemplates.board.card2Title": "卡片 2",
"blockTemplates.board.card3Title": "卡片 3",
"blockTemplates.board.namePropertyTitle": "名稱",
"blockTemplates.board.statusPropertyGreenOptionTitle": "已完成",
"blockTemplates.board.statusPropertyRedOptionTitle": "未開始",
"blockTemplates.board.statusPropertyTitle": "狀態",
"blockTemplates.board.statusPropertyYellowOptionTitle": "進行中",
"blockTemplates.board.viewTitle": "看板視圖",
"blockTemplates.calendar.datePropertyTitle": "日期",
"blockTemplates.calendar.namePropertyTitle": "名稱",
"blockTemplates.calendar.tagsPropertyTitle": "標籤",
"blockTemplates.calendar.viewTitle": "日曆視圖",
"blockTemplates.gallery.createdPropertyTitle": "創建時間",
"blockTemplates.gallery.namePropertyTitle": "名稱",
"blockTemplates.gallery.page1CompletedTodoTitle": "已完成的待辦事項",
"blockTemplates.gallery.page1Title": "頁面 1",
"blockTemplates.gallery.page1TodoTitle": "待辦事項",
"blockTemplates.gallery.page2Title": "頁面 2",
"blockTemplates.gallery.page3Title": "頁面 3",
"blockTemplates.gallery.tagsPropertyTitle": "標籤",
"blockTemplates.gallery.viewTitle": "畫廊視圖",
"blockTemplates.list.createdPropertyTitle": "創建時間",
"blockTemplates.list.namePropertyTitle": "名稱",
"blockTemplates.list.page1Title": "頁面 1",
"blockTemplates.list.page2Title": "頁面 2",
"blockTemplates.list.page3Title": "頁面 3",
"blockTemplates.list.tab1Title": "選項卡 1",
"blockTemplates.list.tab2Title": "選項卡 2",
"blockTemplates.list.tab3Title": "選項卡 3",
"blockTemplates.list.tagsPropertyTitle": "標籤","blockTemplates.list.viewTitle": "列表視圖",
"blockTemplates.table.namePropertyTitle": "名稱",
"blockTemplates.table.tagsPropertyTitle": "標籤",
"blockTemplates.templateButton.addNewTodoTitle": "添加待辦事項",
"blockTemplates.timeline.datePropertyTitle": "日期",
"blockTemplates.timeline.viewTitle": "時間軸視圖",
"blocks.blockMenu.collectionHelpButton": "了解數據庫",
"blocks.hoverBlockMenu.collectionHelpButton": "了解數據庫",
"boardHiddenGroup.searchPlaceholder": "搜索頁面…",
"bookmarkBlock.addWebBookmark.placeholder": "添加 Web 書籤",
"bookmarkBlock.bookmark.title": "書籤",
"bookmarkBlock.editBookmark.linkPlaceholder": "以 https://… 格式粘貼",
"bookmarkBlock.invalidLinkError.message": "請輸入有效的鏈接",
"bookmarkBlock.loadWhileFetching.message": "獲取預覽中",
"bookmarkBlock.visualBookmark.create": "創建書籤",
"bookmarkBlock.visualBookmark.prompt": "從鏈接創建可視化書籤。",
"bootupHelpers.iosErrorRequiresReinstall.errorMessage":
  "你好。iOS應用程序檢測到問題。刪除此應用後，請在App Store中重新安裝它。",
"botActions.deleteBotConfirmationDialog.confirmDeleteBotButton.label":
  "是的",
"botActions.deleteBotConfirmationDialog.confirmationMessage":
  "確定要撤銷{integrationName}的訪問權限嗎？",
"botMenuItem.spaceBot.label": "已通過工作區分享",
"breadcrumb.mobileBreadcrumbMenu.title": "導航欄",
"breadcrumb.moveTo.hasPermission.subtitle": "點擊以移動",
"breadcrumb.moveTo.hasPermission.title": "只有你有權訪問",
"breadcrumb.moveTo.privatePages": "私人",
"breakingUpdateDialog.title": "我們剛剛推出了新功能！",
"breakingUpdateDialog.updateButtonTitle": "更新並查看新功能",
"bulletedListBlock.placeholder.label": "項目",
"calendarItem.endsTime.message": "{endTime} 結束",
"calendarSettings.startWeekOnMonday.label": "星期開始於週一",
"calendarSettings.startWeekOnMonday.message":
  "這將更改你應用中所有日曆的外觀。",
"calloutBlock.inputPlaceholder": "輸入內容…",
"capabilitiesTooltip.insertComment.enabled": "可以評論。",
"capabilitiesTooltip.mixedAccess.readContent.enabled": "可以讀取內容。",
"capabilitiesTooltip.mixedAccess.title": "混合訪問權限",
"capabilitiesTooltip.mixedaccess.insertContent.disabled": "無法插入內容。",
"capabilitiesTooltip.mixedaccess.insertContent.enabled": "可以插入內容。",
"capabilitiesTooltip.mixedaccess.readContent.disabled": "無法讀取內容。",
"capabilitiesTooltip.mixedaccess.updateContent.disabled": "無法更新內容。",
"capabilitiesTooltip.mixedaccess.updateContent.enabled": "可以更新內容。",
"capabilitiesTooltip.readComment.enabled": "可以讀取評論。",
"capabilitiesTooltip.userAccess.readUserEmailAddresses.disabled":
  "無法查看用戶電子郵件地址。",
"capabilitiesTooltip.userAccess.readUserEmailAddresses.enabled":
  "可以查看用戶電子郵件地址。",
"capabilitiesTooltip.userAccess.readUsers.disabled": "無法查看用戶。",
"capabilitiesTooltip.userAccess.readUsers.enabled": "可以查看用戶。",
"chargeReminderEmail.billingLink.text":
  "<b><billinglink>點擊此處查看你的賬單設置</billinglink></b>",
"chargeReminderEmail.billingType.ACHOrWire.text": "ACH 或電匯",
"chargeReminderEmail.billingType.creditCard.text":
  "以<b> {last4Digits} </b>結尾的<b> {brand} </b>卡",
"chargeReminderEmail.closingText": "謝謝你。{br} ──來自 Notion 團隊",
"chargeReminderEmail.greeting": "嗨，你好！",
"chargeReminderEmail.reminderBody.text":
  "看起來你下個 Notion 計費周期的積分不足。溫馨提醒：我們將於 {dateOfNextCharge}通過帳戶上已設置的付款方式（{paymentMethod}）向你收取 <b>{amountToBeCharged}</b>。",
"chargeReminderEmail.subjectLine.text":
  "Notion 提醒：你將於 7 天內被收取費用",
"churnSurveyMenu.alternatives.airtable": "Airtable",
"churnSurveyMenu.alternatives.alternativeOtherPlaceholder":
  "請告訴我們更多…",
"churnSurveyMenu.alternatives.asana": "Asana",
"churnSurveyMenu.alternatives.atlassianConfluence": "Confluence",
"churnSurveyMenu.alternatives.atlassianJira": "Jira",
"churnSurveyMenu.alternatives.coda": "Coda",
"churnSurveyMenu.alternatives.description": "請選擇一個或多個",
"churnSurveyMenu.alternatives.dropboxPaper": "Dropbox Paper",
"churnSurveyMenu.alternatives.evernote": "印象筆記國際版（Evernote）",
"churnSurveyMenu.alternatives.googleDriveDocs": "谷歌云端硬盤/文檔",
"churnSurveyMenu.alternatives.microsoftOffice": "微軟 / Office 365",
"churnSurveyMenu.alternatives.other": "其他",
"churnSurveyMenu.alternatives.quip": "Quip",
"churnSurveyMenu.alternatives.title": "2. 你將使用什麼其他工具？",
"churnSurveyMenu.alternatives.trello": "Trello",
"churnSurveyMenu.cancelButton.title": "取消",
"churnSurveyMenu.continueDowngrade.downgradeMessage.personal":
  "如果你現在取消訂閱，你仍可繼續使用此付費方案的所有功能直到 {periodEnd}。你可以隨時重新訂閱或切換到另一個付費方案。{br}在 {periodEnd}後，此工作區將降級為免費的個人版，包含以下限制：<li>單人使用</li><li>工作區的訪客限制為 5 個</li><li>上傳文件每個最多 5MB</li><li>沒有版本歷史記錄</li><li>沒有與團隊成員共享的工作區</li>",
"churnSurveyMenu.continueDowngrade.downgradeMessage.team":
  "如果你現在取消訂閱，你仍可繼續使用此付費方案的所有功能直到 {periodEnd}。你可以隨時重新訂閱或切換到另一個付費方案。{br}在 {periodEnd}後，此工作區將降級為團隊版的免費試用版，包含以下限制：<li>1,000 個塊限制</li><li>上傳文件每個最大 5MB</li><li>沒有版本歷史記錄</li><li>沒有批量導出</li><li>沒有高級權限</li><li>沒有權限群組</li>",
"churnSurveyMenu.continueDowngrade.title": "繼續降級？",
"churnSurveyMenu.downgradeButton.title": "降級",
"churnSurveyMenu.goBackButton.title": "返回到付費方案",
"churnSurveyMenu.header.covidMessage":
  "💛 如果你受到 COVID-19 的影響，請<contactuslink>聯繫我們</contactuslink>以尋求幫助。",
"churnSurveyMenu.header.description":
  "Notion 正在不斷改善的旅途中。在你降級之前，我們希望你能告訴我們為什麼，以便我們在今後為每個人提供更好的服務。感謝你的反饋意見。",
"churnSurveyMenu.header.personal.title": "降級到個人版",
"churnSurveyMenu.header.team.title": "降級到團隊試用版",
"churnSurveyMenu.other.otherFeedbackPlaceholder":
  "我們的團隊將審核你的反饋，以使 Notion 變得更好。",
"churnSurveyMenu.otherFeedback.title": "3. 對我們的反饋意見",
"churnSurveyMenu.reasons.companyShuttingDown": "公司正在關閉或削減開支",
"churnSurveyMenu.reasons.description": "請選擇一個或多個",
"churnSurveyMenu.reasons.missingFeatures": "缺少功能",
"churnSurveyMenu.reasons.missingFeaturesPlaceholder":
  "讓我們知道你還需要哪些功能…",
"churnSurveyMenu.reasons.notUsingEnough": "沒有經常使用",
"churnSurveyMenu.reasons.other": "其他",
"churnSurveyMenu.reasons.reasonOtherPlaceholder": "請告訴我們更多…",
"churnSurveyMenu.reasons.securityComplianceRequirements":
  "安全性或合規性要求",
"churnSurveyMenu.reasons.title": "1. 你降級的原因是什麼？",
"churnSurveyMenu.reasons.toDifficult": "太難用了",
"churnSurveyMenu.reasons.tooExpensive": "太貴了",
"churnSurveyMenu.reasons.trialOver": "試用期結束",
"churnSurveyMenu.reasons.upgradedByMistake": "不小心升級",
"churnSurveyMenu.reasons.usingAlternative": "使用替代方案",
"clipboardActions.offlineError.message": "請連接網絡後復制此塊。",
"clipboardActions.pasteFileIntoCommentError.message":
  "很抱歉，你無法將文件粘貼到評論中。",
"clipboardInputRenderer.copyLink.message": "右鍵單擊並複制上面的鏈接",
"codeBlock.caption.button": "標題",
"codeBlock.copyToClipboard.button": "複製",
"codeBlock.databaseEditGroupMenu.addGroupTitle": "添加群組",
"codeBlock.databaseEditGroupMenu.cancelButton.label": "取消",
"codeBlock.databaseEditGroupMenu.doneButton.label": "完成",
"codeBlock.databaseEditGroupMenu.renameGroupTitle": "重命名群組",
"codeBlock.mobileCodePreviewMenu.doneButton.label": "完成",
"codeBlock.mobileCodePreviewMenu.title": "代碼預覽",
"codeBlock.mobileLanguageMenu.doneButton.label": "完成",
"codeBlock.mobileLanguageMenu.title": "語言",
"codeBlock.searchPrompt": "搜索語言…",
"codepenBlock.embed.caption": "適用於啟用了公共訪問的 CodePen 鏈接",
"codepenBlock.placeholder": "嵌入 CodePen",
"collection.boardView.hiddenColumns.label": "隱藏分欄",
"collection.boardView.hiddenGroups.label": "隱藏群組",
"collection.boardView.selectProperty.defaultName": "狀態",
"collection.numberFormat.argentinePeso": "阿根廷比索",
"collection.numberFormat.baht": "銖",
"collection.numberFormat.brl": "巴西雷亞爾",
"collection.numberFormat.canadianDollar": "加元",
"collection.numberFormat.chileanPeso": "智利比索",
"collection.numberFormat.colombianPeso": "哥倫比亞比索",
"collection.numberFormat.danishKrone": "丹麥克朗",
"collection.numberFormat.dirham": "迪拉姆",
"collection.numberFormat.dollar": "美元",
"collection.numberFormat.euro": "歐元",
"collection.numberFormat.forint": "福林",
"collection.numberFormat.franc": "法郎",
"collection.numberFormat.hongKongDollar": "港元",
"collection.numberFormat.idr": "印尼盾",
"collection.numberFormat.koruna": "捷克克朗",
"collection.numberFormat.krona": "瑞典克朗",
"collection.numberFormat.leu": "列伊",
"collection.numberFormat.mexicanPeso": "墨西哥比索",
"collection.numberFormat.newTaiwanDollar": "新台幣",
"collection.numberFormat.newZealandDollar": "新西蘭元",
"collection.numberFormat.norwegianKrone": "挪威克朗",
"collection.numberFormat.number": "數字",
"collection.numberFormat.numberWithCommas": "帶千位分隔符的數字",
"collection.numberFormat.percent": "百分比",
"collection.numberFormat.philippinePeso": "菲律賓比索",
"collection.numberFormat.pound": "英磅",
"collection.numberFormat.rand": "蘭特",
"collection.numberFormat.ringgit": "林吉特",
"collection.numberFormat.riyal": "里亞爾",
"collection.numberFormat.ruble": "盧布",
"collection.numberFormat.rupee": "盧比",
"collection.numberFormat.shekel": "謝克爾",
"collection.numberFormat.try": "里拉",
"collection.numberFormat.uruguayanPeso": "烏拉圭比索",
"collection.numberFormat.won": "韓元",
"collection.numberFormat.yen": "日元",
"collection.numberFormat.yuan": "人民幣",
"collection.numberFormat.zloty": "茲羅提",
"collectionBoardItem.actions.cancel": "取消",
"collectionBoardItem.actions.reposition": "更改位置",
"collectionBoardItem.actions.savePosition": "保存位置",
"collectionBoardItem.edit.tooltip": "編輯",
"collectionBoardItem.itemName.placeholder": "輸入名稱…",
"collectionBoardItem.reposition.tooltip": "重命名、刪除、移動等…",
"collectionBoardItem.untitledBlock": "無標題",
"collectionFilterCombinatorGrid.filterOperator.and": "與",
"collectionFilterCombinatorGrid.filterOperator.and.lowercase": "與",
"collectionFilterCombinatorGrid.filterOperator.or": "或",
"collectionFilterCombinatorGrid.filterOperator.or.lowercase": "或",
"collectionFilterMenu.dateFilter.relativeDateFilter.description":
  "篩選器將根據當前日期更新",
"collectionFilterMenu.dateRangeFilter.relativeDateRangeFilter.description":
"篩選器將根據當前日期更新",
"collectionFilterMenuFilter.filterOperators.checkbox.order":
"{operator}{operatorValue}",
"collectionFilterMenuFilter.filterOperators.date.order":
"{operator}{operatorValue}",
"collectionFilterMenuFilter.filterOperators.file.order":
"{operator}{operatorValue}",
"collectionFilterMenuFilter.filterOperators.multi_select.order":
"{operator}{operatorValue}",
"collectionFilterMenuFilter.filterOperators.number.order":
"{operator}{operatorValue}",
"collectionFilterMenuFilter.filterOperators.person.order":
"{operator}{operatorValue}",
"collectionFilterMenuFilter.filterOperators.relation.order":
"{operator}{operatorValue}",
"collectionFilterMenuFilter.filterOperators.select.order":
"{operator}{operatorValue}",
"collectionFilterMenuFilter.filterOperators.status.order":
"{operator}{operatorValue}",
"collectionFilterMenuFilter.filterOperators.text.order":
"{operator}{operatorValue}",
"collectionFilterMenuFilter.property.name": "屬性",
"collectionFilterMenuFilterOperatorValue.date.exact.order":
"{exact}{dateValue}",
"collectionFilterMenuFilterOperatorValue.dateRange.exact.order":
"{exact}{dateValue}",
"collectionFilterMenuHelpers.checkbox.checked": "已選",
"collectionFilterMenuHelpers.checkbox.unchecked": "未選",
"collectionFilterMenuHelpers.combinatorOperators.and": "與",
"collectionFilterMenuHelpers.combinatorOperators.or": "或",
"collectionFilterMenuHelpers.operator.any": "的任何值",
"collectionFilterMenuHelpers.operator.any.lowercase": "任何",
"collectionFilterMenuHelpers.operator.checkboxIs": "是",
"collectionFilterMenuHelpers.operator.checkboxIs.lowercase": "是",
"collectionFilterMenuHelpers.operator.checkboxIsNot": "不是",
"collectionFilterMenuHelpers.operator.checkboxIsNot.lowercase": "不是",
"collectionFilterMenuHelpers.operator.dateIs": "是",
"collectionFilterMenuHelpers.operator.dateIs.lowercase": "是",
"collectionFilterMenuHelpers.operator.dateIsAfter": "晚於",
"collectionFilterMenuHelpers.operator.dateIsAfter.lowercase": "晚於",
"collectionFilterMenuHelpers.operator.dateIsBefore": "早於",
"collectionFilterMenuHelpers.operator.dateIsBefore.lowercase": "早於",
"collectionFilterMenuHelpers.operator.dateIsOnOrAfter": "是或晚於",
"collectionFilterMenuHelpers.operator.dateIsOnOrAfter.lowercase":
"是或晚於",
"collectionFilterMenuHelpers.operator.dateIsOnOrBefore": "是或早於",
"collectionFilterMenuHelpers.operator.dateIsOnOrBefore.lowercase":
"是或早於",
"collectionFilterMenuHelpers.operator.dateIsWithin": "在",
"collectionFilterMenuHelpers.operator.dateIsWithin.lowercase":
"介於兩者之間",
"collectionFilterMenuHelpers.operator.enumContains": "包含",
"collectionFilterMenuHelpers.operator.enumContains.lowercase": "包含",
"collectionFilterMenuHelpers.operator.enumDoesNotContain": "不包含",
"collectionFilterMenuHelpers.operator.enumDoesNotContain.lowercase":
"不包含",
"collectionFilterMenuHelpers.operator.enumIs": "是",
"collectionFilterMenuHelpers.operator.enumIs.lowercase": "是",
"collectionFilterMenuHelpers.operator.enumIsNot": "不是",
"collectionFilterMenuHelpers.operator.enumIsNot.lowercase": "不是",
"collectionFilterMenuHelpers.operator.every": "的每個值",
"collectionFilterMenuHelpers.operator.every.lowercase": "每個",
"collectionFilterMenuHelpers.operator.isEmpty": "為空",
"collectionFilterMenuHelpers.operator.isEmpty.lowercase": "為空",
"collectionFilterMenuHelpers.operator.isNotEmpty": "不為空",
"collectionFilterMenuHelpers.operator.isNotEmpty.lowercase": "不為空",
"collectionFilterMenuHelpers.operator.none": "沒有值",
"collectionFilterMenuHelpers.operator.none.lowercase": "無",
"collectionFilterMenuHelpers.operator.numberDoesNotEqual": "≠",
"collectionFilterMenuHelpers.operator.numberDoesNotEqual.lowercase": "≠",
"collectionFilterMenuHelpers.operator.numberEquals": "=",
"collectionFilterMenuHelpers.operator.numberEquals.lowercase": "=",
"collectionFilterMenuHelpers.operator.numberGreaterThan": ">",
"collectionFilterMenuHelpers.operator.numberGreaterThan.lowercase": ">",
"collectionFilterMenuHelpers.operator.numberGreaterThanOrEqualTo": "≥",
"collectionFilterMenuHelpers.operator.numberGreaterThanOrEqualTo.lowercase":
"≥",
"collectionFilterMenuHelpers.operator.numberLessThan": "<",
"collectionFilterMenuHelpers.operator.numberLessThan.lowercase": "<",
"collectionFilterMenuHelpers.operator.numberLessThanOrEqualTo": "≤",
"collectionFilterMenuHelpers.operator.numberLessThanOrEqualTo.lowercase":
"≤",
"collectionFilterMenuHelpers.operator.personContains": "包含",
"collectionFilterMenuHelpers.operator.personContains.lowercase": "包含",
"collectionFilterMenuHelpers.operator.personDoesNotContain": "不包含",
"collectionFilterMenuHelpers.operator.personDoesNotContain.lowercase":
"不包含",
"collectionFilterMenuHelpers.operator.relationContains": "包含",
"collectionFilterMenuHelpers.operator.relationContains.lowercase": "包含",
"collectionFilterMenuHelpers.operator.relationDoesNotContain": "不包含",
"collectionFilterMenuHelpers.operator.relationDoesNotContain.lowercase":
  "不包含",
"collectionFilterMenuHelpers.operator.statusIs": "是",
"collectionFilterMenuHelpers.operator.statusIsNot": "不是",
"collectionFilterMenuHelpers.operator.stringContains": "包含",
"collectionFilterMenuHelpers.operator.stringContains.lowercase": "包含",
"collectionFilterMenuHelpers.operator.stringDoesNotContain": "不包含",
"collectionFilterMenuHelpers.operator.stringDoesNotContain.lowercase":
  "不包含",
"collectionFilterMenuHelpers.operator.stringEndsWith": "結尾是",
"collectionFilterMenuHelpers.operator.stringEndsWith.lowercase": "結尾是",
"collectionFilterMenuHelpers.operator.stringHasNoAlphabetPrefix": "(禁用)",
"collectionFilterMenuHelpers.operator.stringHasNoAlphabetPrefix.lowercase":
  "（未使用）",
"collectionFilterMenuHelpers.operator.stringIs": "是",
"collectionFilterMenuHelpers.operator.stringIs.lowercase": "是",
"collectionFilterMenuHelpers.operator.stringIsNot": "不是",
"collectionFilterMenuHelpers.operator.stringIsNot.lowercase": "不是",
"collectionFilterMenuHelpers.operator.stringStartsWith": "開頭是",
"collectionFilterMenuHelpers.operator.stringStartsWith.lowercase": "開頭是",
"collectionFilterMenuHelpers.relativeDates.exactDate": "自定義日期",
"collectionFilterMenuHelpers.relativeDates.exactDateRange": "自定義範圍",
"collectionFilterMenuHelpers.relativeDates.oneMonthAgo": "一個月前",
"collectionFilterMenuHelpers.relativeDates.oneMonthFromNow": "一個月後",
"collectionFilterMenuHelpers.relativeDates.oneWeekAgo": "一周前",
"collectionFilterMenuHelpers.relativeDates.oneWeekFromNow": "一周後",
"collectionFilterMenuHelpers.relativeDates.theNextMonth": "下月",
"collectionFilterMenuHelpers.relativeDates.theNextWeek": "下週",
"collectionFilterMenuHelpers.relativeDates.theNextYear": "明年",
"collectionFilterMenuHelpers.relativeDates.thePastMonth": "上月",
"collectionFilterMenuHelpers.relativeDates.thePastWeek": "上週",
"collectionFilterMenuHelpers.relativeDates.thePastYear": "去年",
"collectionFilterMenuHelpers.relativeDates.today": "今天",
"collectionFilterMenuHelpers.relativeDates.tomorrow": "明天",
"collectionFilterMenuHelpers.relativeDates.yesterday": "昨天",
"collectionGalleryViewItem.action.cancel": "取消",
"collectionGalleryViewItem.action.reposition": "更改位置",
"collectionGalleryViewItem.action.savePosition": "保存位置",
"collectionGalleryViewItem.itemName.placeholder": "輸入名稱…",
"collectionGalleryViewItem.repositionAction.tooltip":
  "重命名、刪除、移動等…",
"collectionGalleryViewItem.untitledBlock": "無標題",
"collectionHelpers.board.caption": "看板視圖，適合項目規劃以及錯誤跟踪",
"collectionHelpers.board.displayName": "看板",
"collectionHelpers.calendar.caption": "月視圖，可用於事件計劃和安排",
"collectionHelpers.calendar.displayName": "日曆",
"collectionHelpers.gallery.caption": "卡片網格，可用於情緒板、索引卡和食譜",
"collectionHelpers.gallery.displayName": "畫廊",
"collectionHelpers.list.caption": "簡化的頁面列表視圖，適合書籤和筆記",
"collectionHelpers.list.displayName": "列表",
"collectionHelpers.table.caption":
  "表格視圖，存儲和查看任何類型的結構化數據",
"collectionHelpers.table.displayName": "表格",
"collectionHelpers.timeline.caption": "時間軸視圖，適合項目排期和計劃",
"collectionHelpers.timline.displayName": "時間軸",
"collectionHiddenGroupsButton.hiddenGroupsButton.text":
  "{numberOfHiddenGroups, plural, other {{numberOfHiddenGroups} 個隱藏群組}}",
"collectionNoDateMenu.addResultToCalendar.prompt": "點擊添加到日曆",
"collectionNoDateMenu.addResultToTimeline.prompt": "點擊添加到時間軸",
"collectionNoDateMenu.loading.message": "載入中…",
"collectionNoDateMenu.mobileMenuTitle": "沒有日期的頁面",
"collectionNoDateMenu.noResults.title": "無結果",
"collectionNoDateMenu.pagesWithNoDateInPrefix":
  "{noDateTotal, plural, other {{noDateTotal} 個頁面沒有日期・用於}}",
"collectionNoDateMenu.searchPlaceholder": "搜索頁面…",
"collectionNoDateMenu.view.button.label": "視圖",
"collectionPicker.searchBarFilter.text": "篩選…",
"collectionSettings.appCreateView.addOrPinView": "添加或固定視圖",
"collectionSettings.appCreateView.addViewInCollection":
  "在 {collectionName} 中添加視圖並將其固定",
"collectionSettings.appCreateView.newEmptyView": "新建視圖",
"collectionSettings.appCreateView.newViewInCollection":
  "新建 {collectionName} 的視圖",
"collectionSettingsAccountPicker.title": "選擇帳戶",
"collectionSettingsCreateExternalViewPicker.authenticateBody.title":
  "鏈接您的 {integration} 帳戶以獲得更豐富的內容預覽和無縫導入。",
"collectionSettingsCreateExternalViewPicker.authenticateButton.title":
  "連接到 {integration}",
"collectionSettingsCreateExternalViewPicker.authenticateHeader.title":
  "連接到 {integration}",
"collectionSettingsCreateExternalViewPicker.currentAccountSection.label":
  "已連接到{integration}",
  "collectionSettingsCreateExternalViewPicker.error.unknown": "出了些問題。",
  "collectionSettingsCreateExternalViewPicker.filters.Issues": "問題",
  "collectionSettingsCreateExternalViewPicker.filters.PullRequests":
    "拉取請求",
  "collectionSettingsCreateExternalViewPicker.filters.all": "全部",
  "collectionSettingsCreateExternalViewPicker.filters.boards": "看板",
  "collectionSettingsCreateExternalViewPicker.filters.issues": "問題",
  "collectionSettingsCreateExternalViewPicker.filters.projects": "項目",
  "collectionSettingsCreateExternalViewPicker.filters.pullRequests":
    "拉取請求",
  "collectionSettingsCreateExternalViewPicker.filters.releases": "版本",
  "collectionSettingsCreateExternalViewPicker.loadingData":
    "正在加載可用源...",
  "collectionSettingsCreateExternalViewPicker.noResults.help":
    "嘗試不同的搜索或粘貼任意 {integration} URL",
  "collectionSettingsCreateExternalViewPicker.noResults.text": "無結果",
  "collectionSettingsCreateExternalViewPicker.settingUpSync":
    "正在設置同步...",
  "collectionSettingsCreateExternalViewPicker.subHeader":
    "{integration} 的可用源。",
  "collectionSettingsCreateExternalViewPicker.syncSourceButton.label":
    "同步源",
  "collectionSettingsCreateExternalViewPicker.title":
    "從 {integration} 中選擇",
  "collectionSettingsCreateExternalViewSource.authenticateBody.title":
    "鏈接你的 {integration} 帳戶以獲得更豐富的內容預覽和無縫導入。",
  "collectionSettingsCreateExternalViewSource.authenticateButton.title":
    "連接到 {integration}",
  "collectionSettingsCreateExternalViewSource.authenticateHeader.title":
    "連接到 {integration}",
  "collectionSettingsCreateExternalViewSource.error.label":
    "無效的 {integration} 數據庫 URL",
  "collectionSettingsCreateExternalViewSource.linkBody.title":
    "複製任意一個 {integration} URL，然後將其粘貼到下面開始同步。",
  "collectionSettingsCreateExternalViewSource.linkHeader.title":
    "鏈接 {integration}",
  "collectionSettingsCreateExternalViewSource.linkInput.label":
    "{integration} URL",
  "collectionSettingsCreateExternalViewSource.nextButton.label": "下一步",
  "collectionSettingsViewBlockAppConfiguration.confirmDialog.closeSettings.message":
    "確定要關閉自定義側邊欄嗎？你的所有自定義都將丟失。",
  "collectionSettingsViewBlockAppConfiguration.confirmDialog.discardButton.label":
    "放棄更改",
  "collectionSettingsViewBlockAppConfiguration.confirmDialog.saveButton.label":
    "保存更改",
  "collectionSettingsViewBlockAppConfiguration.searchBar.placeholder":
    "添加或移除功能...",
  "collectionSettingsViewBlockCollection.databaseTab.deleteButton.text":
    "刪除數據庫",
  "collectionSettingsViewBlockCollection.databaseTab.deleteConfirmation":
    "確定要刪除此數據庫？",
  "collectionSortMenuRow.sortDirectionSelectMenu.ascending": "升序",
  "collectionSortMenuRow.sortDirectionSelectMenu.descending": "降序",
  "collectionSortMenuRow.sortDirectionSelectMenu.placeholder": "空",
  "collectionSortMenuRow.sortDirectionSelectMenu.title": "排序",
  "collectionTabBar.newViewPlaceholder.title": "新建視圖",
  "collectionTabBar.showMoreViews.title": "其他 {moreViewsCount} 個...",
  "collectionTabBar.viewTab.tooltip": "{collection} 的 {viewType} 視圖",
  "collectionViewBlock.action.filter.title": "篩選器",
  "collectionViewBlock.action.newItem.title": "新",
  "collectionViewBlock.action.noDateButton.noProperty.label":
    "無日期 ({noDateTotal})",
  "collectionViewBlock.action.sort.title": "排序",
  "collectionViewBlock.actionBar.offlineTemplatePicker.message":
    "請連接網絡以使用模板。",
  "collectionViewBlock.deletedCollection.banner.message": "源數據庫已刪除",
  "collectionViewBlock.noSourcePlaceholder.title": "無數據源",
  "collectionViewBlock.setExternalSource.title": "鏈接 {integrationName}",
  "collectionViewBlock.setExternalSourceButton.title":
    "<button>鏈接到 {integrationName}</button> 以繼續",
  "collectionViewBlock.setSourceButton.title":
    "<button>選擇一個數據源</button>以繼續",
  "collectionViewSelect.viewSearch.label": "搜索視圖...",
  "collections.operatorValueSelect.placeholder": "選擇選項",
  "colors.select.blue": "藍色",
  "colors.select.brown": "棕色",
  "colors.select.gray": "灰色",
  "colors.select.green": "綠色",
  "colors.select.lightGray": "淺灰色",
  "colors.select.orange": "橙色",
  "colors.select.pink": "粉色",
  "colors.select.purple": "紫色",
  "colors.select.red": "紅色",
  "colors.select.yellow": "黃色",
  "comment.actions.addReaction.label": "添加反應",
  "comment.actions.moreActions.label": "編輯、刪除、複製鏈接...",
  "comment.actions.reopenButton.label": "重新開啟",
  "comment.actions.resolveButton.label": "解決",
  "comment.confirmDialog.deleteComment.deleteButton.label": "刪除",
  "comment.confirmDialog.deleteComment.prompt": "你要刪除這條評論嗎？",
  "comment.confirmDialog.discardEdit.discardButton.label": "放棄",
  "comment.confirmDialog.discardEdit.prompt": "你要放棄這次編輯嗎？",
  "comment.copyLinkToDiscussion.button": "拷貝討論鏈接",
  "comment.deleteComment.button": "刪除評論",
  "comment.editComment.button": "編輯評論",
  "comment.editedAtTime.label": "{lastEditedTime}（已編輯）",
  "comment.embeddedFile.uploadInProgressMessage": "正在上傳文件...",
  "comment.hide": "隱藏頁面評論",
  "comment.newIndicator.label": "新評論",
  "comment.reopenDiscussion.button": "重新開啟討論",
  "comment.resolveDiscussion.button": "解決評論",
  "comment.unfurl.attachments.title":
    "{numberOfAttachments, plural, other {{numberOfAttachments} 個附件}}",
  "comment.unfurl.resolvedStatus": "已解決",
  "comments.learn": "了解評論",
  "comments.showLessLabel": "顯示更少",
  "configureRelationModal.relationProperty.createModal.databaseSelect.mobile.caption":
    "你希望鏈接到的數據庫。",
  "configureRelationModal.relationProperty.createModal.description":
    "關聯關係可以讓你從其他數據庫中鏈接頁面。",
  "confirmDialogInput.incorrectInputError.message":
    "請輸入“{requiredInputValue}”以繼續",
  "confirmUnsubscribePage.confirmButton": "取消訂閱",
  "confirmUnsubscribePage.errorMessage": "無法取消訂閱。",
  "confirmUnsubscribePage.loadingMessage": "載入中…",
  "confirmationInputDialog.cancelButton.label": "取消",
  "confluenceImportErrors.attachmentNotFound.message":
    "無法在 ZIP 歸檔中找到附件。",
  "confluenceImportErrors.attachmentUploadFailed.message":
    "無法從文件中上傳附件。",
  "confluenceImportErrors.bufferUploadFailed.message":
    "無法從緩衝區上傳附件。",
  "confluenceImportErrors.failedToBuildPage.message": "無法導入頁面。",
  "confluenceImportErrors.failedToExtractZip.message": "無法提取ZIP文件。",
  "confluenceImportErrors.failedToFindElement.message": "無法解析上傳。",
  "confluenceImportErrors.foundElementIsIncorrectType.message":
    "無法解析上傳。",
  "confluenceImportErrors.indexHtmlMissingAvailablePages.message":
    "無效的索引文件：找不到可用頁面。",
  "confluenceImportErrors.noConfluenceIdInPageLink.message":
    "無法從文件名中提取頁面 ID。",
  "confluenceImportErrors.noIndexHtmlFile.message":
    "在 ZIP 中找不到索引文件。",
  "confluenceImportErrors.uploadFileSizeExceeded.message":
    "文件不能超過 {maxSize}。",
  "confluenceImportHelpers.subpageHeader": "子頁面",
  "confluenceImportHelpers.untitledTableColumn.name": "列",
  "confluenceImportStatus.creatingIndex": "創建索引中…",
  "confluenceImportStatus.downloadingFile": "驗證文件中…",
  "confluenceImportStatus.finishingUp": "完成中…",
  "confluenceImportStatus.importingPage":
    "頁面導入中…（第{current}個，總共{total}個）",
  "confluenceImportStatus.indexingContent": "正在更新搜尋…",
  "confluenceImportStatus.savingTransactions": "正在保存更改…",
  "confluenceImportStatus.uploadingAttachments": "附件上傳中…",
  "connectedAppSettings.deleteExternalAuthorization.confirmDelete.label":
    "是",
  "connectedAppSettings.deleteExternalAuthorization.withAccountName.confirmationMessage":
    "確定要撤銷 {accountName} 的訪問權限嗎？",
  "connectedAppSettings.deleteExternalAuthorization.withoutAccountName.confirmationMessage":
    "確定要撤銷此帳戶的訪問權限嗎？",
  "connectedAppSettingsDiscoverItem.connectButton.label": "綁定",
  "connectedAppsSettings.asana.caption": "從看板和列表中導入任務。",
  "connectedAppsSettings.connectedAppsSection.subtitle":
    "管理你與應用的綁定，這些應用可將其他工具的內容引入 Notion。 <helpcenterlink>了解更多。 </helpcenterlink>",
  "connectedAppsSettings.connectedAppsSection.title": "已綁定的應用",
  "connectedAppsSettings.connectionsSection.title": "我的連接",
  "connectedAppsSettings.disconnectGoogleDriveModal.disconnectButton.label":
    "解除綁定",
  "connectedAppsSettings.disconnectGoogleDriveModal.message":
    "解除綁定會禁用所有工作區中嵌入的谷歌云端硬盤文件預覽。這不會從 Notion 中刪除你的嵌入塊，因此你可以隨時重新綁定。",
  "connectedAppsSettings.discoverNewAppSection.showAll.label": "全部顯示",
  "connectedAppsSettings.discoverNewAppsSection.title": "發現新應用",
  "connectedAppsSettings.evernote.caption": "導入筆記本。",
  "connectedAppsSettings.googleDrive.caption": "查找並嵌入文件。",
  "connectedAppsSettings.helpButton.caption":
    "了解有關在 Notion 中嵌入內容的更多信息。",
  "connectedAppsSettings.offline.message": "請連接網絡後管理綁定應用。",
  "connectedAppsSettings.trello.caption": "導入你的看板。",
  "connectedAppsSettingsItem.connectAccountLink": "綁定",
  "connectedAppsSettingsItem.connectAnotherAccountLink": "綁定另一個帳戶",
  "connectedAppsSettingsItem.disconnectLink": "解除綁定",
  "connectionErrorIndicator.details.message":
    "自 {sinceSomeTimeAgo} ，保存你的更改時發生錯誤。稍後我們將重試",
  "connectionErrorIndicator.label.retrying": "似乎出現問題。正在重試…",
  "connectionErrorIndicator.label.retryingInSeconds":
    "似乎出現問題。將在 {numberOfSeconds} 秒後重試…",
  "connectionErrorIndicator.label.shortMessage": "似乎出現問題。",
  "connectionState.errorIndicator.cannotMakeEdits.detailedMessage":
    "你無法繼續進行編輯：{errorMessage} {usageInfoMessage}",
  "connectionState.errorIndicator.cannotSaveChanges.message": "無法保存更改…",
  "connectionState.errorIndicator.lowStorageOnDesktopApp.message":
    "磁盤空間不足",
  "connectionState.errorIndicator.lowStorageOnMobileApp.message":
    "應用存儲空間不足",
  "connectionState.errorIndicator.lowStorageOnWebApp.message":
    "瀏覽器存儲空間不足",
  "connectionState.errorIndicator.possibleLostEdits.detailedMessagePart1":
    "Notion 正在使用設備上可用存儲空間的 {percentageOfStorageBytesUsed}（{totalNumberOfBytes}中的{usedNumberOfBytes}）。",
  "connectionState.errorIndicator.possibleLostEdits.detailedMessagePart2":
  "你可能會丟失離線時所做的更改。嘗試關閉並重新打開應用，如果無法解決問題，請與支持人員聯繫。",
"connectionState.offlineBadge.label": "離線中",
"connectionState.offlineBadge.tooltip":
  "{numberOfEdits, plural, other {下一次連接網絡時，會自動同步 {numberOfEdits} 個更改。}}",
"connectionState.savePercentangeIndicator.tooltip": "{percent}完成。",
"connectionState.saving.message": "保存中…",
"connectionsSettings.connectionsSection.title": "我的連接",
"connectionsSettings.discoverNewConnectionsSection.title": "發現新連接",
"connectionsSettingsLinks.connectionsGallery": "瀏覽畫廊中的連接",
"connectionsSettingsLinks.helpCenter": "了解有關連接的更多信息",
"connectionsSettingsLinks.manageConnections": "開發或管理集成",
"contextual_invite.contextual_invite_failure": "未能邀請 {users} 成為成員",
"contextual_invite.permission_invite_failure": "未能向 {users} 發送邀請",
"contextual_invite.permission_invite_success":
  "[僅限本地消息] 成功向 {users} 發送邀請",
"contextual_invite.permission_invite_success2": "成功向 {users} 發送邀請",
"contextual_invite.permission_invite_success3": "成功向 {users} 發送邀請",
"contextual_invite.toast.two_users": "{user1} 和 {user2}",
"contextual_invite.two_users": "{user1} 及其他 {numOfOtherUsers} 位用戶",
"cookieConsent.acceptAllButton.label": "全部接受",
"cookieConsent.bannerDisclaimer.message":
  "Notion 使用 cookie 來改善你的體驗。有關詳細信息，請參閱 <cookielink>Cookie 聲明</cookielink>。",
"cookieConsent.customizeCookies.header": "自定義 cookie",
"cookieConsent.disclaimer.message":
  "Notion 使用 cookie 為你提供更好的體驗。有關詳細信息，請參閱<cookielink>Cookie 聲明</cookielink>和<privacylink>隱私政策</privacylink> 。",
"cookieConsent.dismissButton.label": "完成",
"cookieConsent.moreOptionsButton.label": "更多選項",
"cookieConsent.reloadAfterSave.message":
  "Notion 將重新加載以使你的 cookie 首選項生效。點擊 OK 繼續。",
"cookieConsent.saveError": "無法記錄 cookie 同意書，請稍後再試。",
"cookieConsent.settings.label": "Cookie 設置",
"cookieConsent.settingsDisclaimer.message":
  "自定義 cookie。有關詳細信息，請參閱 <cookielink>Cookie 聲明</cookielink>。",
"cookieConsent.snackbarDisclaimer.message":
  "Notion 使用 cookie。有關詳細信息，請參閱 <cookielink>Cookie 聲明</cookielink>。",
"cookieConsent.trackingTypeNecessary.caption":
  "對網站的運作至關重要。始終啟用。",
"cookieConsent.trackingTypeNecessary.title": "絕對必要",
"cookieConsent.trackingTypePerformance.caption":
  "用於衡量使用情況並改善你的體驗。",
"cookieConsent.trackingTypePerformance.title": "分析",
"cookieConsent.trackingTypePreference.caption":
  "用於記住首選項並提供增強功能。",
"cookieConsent.trackingTypePreference.title": "功能性",
"cookieConsent.trackingTypeTargeting.caption": "用於定向廣告。",
"cookieConsent.trackingTypeTargeting.subtitleiOS":
  "未在 iOS 應用程序中收集或使用",
"cookieConsent.trackingTypeTargeting.title": "市場營銷",
"cookieConsentSnackbar.description": "Notion 使用 cookie 來改善你的體驗。",
"cookieSelector.captions.necessary": "網站正常運行所必需的。",
"cookieSelector.captions.performance": "用於改善你的體驗。",
"cookieSelector.captions.preference": "用於記住你所做的首選項。",
"cookieSelector.captions.targeting": "用於衡量廣告效果。",
"cookieSelector.done.label": "完成",
"cookieSelector.label.acceptAll": "全都接受",
"cookieSelector.label.custom": "自定義",
"cookieSelector.label.customize": "自定義",
"cookieSelector.select": "自定義 cookie",
"couponEntryInput.button.apply": "使用",
"couponEntryInput.error.noPromo": "無效的優惠券代碼",
"couponEntryInput.placeholder": "優惠券代碼",
"createPageMenuItem.title.withPageName": "添加“{filterText}”頁面到…",
"createPageMenuItem.title.withoutPageName": "添加頁面到…",
"createSubpageMenuItem.title.withPageName": "添加“{filterText}”子頁面",
"createSubpageMenuItem.title.withoutPageName": "添加子頁面",
"createTeamFromPage.buttonDisabledTooltip.cannotMovePage":
  "你沒有移動此頁面的權限",
"createTeamFromPage.buttonDisabledTooltip.isNotOwner":
  "只有此團隊空間的所有者才能從此頁面創建新的團隊空間",
"createTeamFromPage.buttonDisabledTooltip.isNotPageBlock":
  "只有頁面才能轉換為團隊空間",
"createTeamFromPage.buttonDisabledTooltip.privateTeamNonEnterprise":
  "升級到企業版以將其轉換為私人團隊空間。否則，請增加頁面的工作區訪問權限，以將其轉換為封閉式團隊空間。",
"createTeamFromPage.buttonDisabledTooltip.untitledPage":
  "無法將沒有標題的頁面轉換為團隊空間",
"createTeamFromPage.confirmModal.cancelButton": "取消",
"createTeamFromPage.confirmModal.confirmButton": "創建團隊空間",
"createTeamFromPage.confirmModal.description":
  "這會將此頁面連同已經有權訪問此頁面的人員一起移動到一個新創建的團隊空間中。",
"createTeamFromPage.confirmModal.learnMore": "了解有關團隊空間的更多信息",
"createTeamFromPage.confirmModal.title": "轉換為團隊空間？",
"csatPopup.additionalFeedback.placeholder": "請告訴我們更多…",
"csatPopup.feedbackPrompt.defaultlabel": "你對使用 Notion 的滿意度如何？",
"csatPopup.feedbackPrompt.docNotesLabel":
  "你對使用 Notion 處理筆記和文檔的滿意度如何？",
"csatPopup.feedbackPrompt.enterpriseDefaultLabel":
  "你向朋友推薦 Notion 的可能性有多大？",
"csatPopup.feedbackPrompt.projManagementLabel":
  "你對在 Notion 中管理項目和任務的滿意度如何？",
"csatPopup.feedbackPrompt.wikiLabel":
  "你對在 Notion 中創建團隊知識庫的滿意度如何？",
"csatPopup.sendButton.label": "發送",
"csatPopup.stars.1StarLabel": "非常不滿意",
"csatPopup.stars.1StarLabelNps": "非常不可能",
"csatPopup.stars.2StarLabel": "有些不滿意",
"csatPopup.stars.2StarLabelNps": "有點不可能",
"csatPopup.stars.3StarLabel": "不滿意也不滿足",
"csatPopup.stars.3StarLabelNps": "不太可能也不太可能",
"csatPopup.stars.4StarLabel": "還算滿意",
"csatPopup.stars.4StarLabelNps": "有點可能",
"csatPopup.stars.5StarLabel": "非常滿意",
"csatPopup.stars.5StarLabelNps": "非常可能",
"csatPopup.stars.notSpecifiedLabel": "選擇一項",
"csatPopup.thanks.description": "你的反饋將幫助我們改善 Notion。",
"csatPopup.thanks.header": "感謝你的反饋！",
"customizePageMenu.header.label": "頁面視圖・用於",
"customizePageMenu.lock.label": "重新鎖定",
"customizePageMenu.locked.header": "在父級數據庫上已鎖定設置。",
"customizePageMenu.mobileHeader.label": "自定義頁面",
"customizePageMenu.pageSections.backlinksTitle": "反向鏈接",
"customizePageMenu.pageSections.pageCommentsTitle": "頁面評論",
"customizePageMenu.pageSections.topLevelPageDiscussionsTitle":
  "頂層頁面討論",
"customizePageMenu.propertiesSection.header": "屬性",
"customizePageMenu.sectionsSection.header": "欄目",
"customizePageMenu.unlock.label": "解鎖",
"customizePageMenu.unlocked.header": "在父級數據庫上已解鎖設置。",
"customizePageMenuVisibilitySelect.collapsed.label": "在彈出窗口中顯示",
"customizePageMenuVisibilitySelect.default.label": "默認",
"customizePageMenuVisibilitySelect.expanded.label": "展開",
"customizePageMenuVisibilitySelect.hide.label": "始終隱藏",
"customizePageMenuVisibilitySelect.hideIfEmpty.label": "空時隱藏",
"customizePageMenuVisibilitySelect.minimal.label": "最小",
"customizePageMenuVisibilitySelect.mobile.doneButton.label": "完成",
"customizePageMenuVisibilitySelect.mobile.title": "選擇可見性",
"customizePageMenuVisibilitySelect.off.label": "關閉",
"customizePageMenuVisibilitySelect.property.label": "作為屬性",
"customizePageMenuVisibilitySelect.section.label": "作為頁面部分",
"customizePageMenuVisibilitySelect.show.label": "始終顯示",
"database.CollectionSettings.NumberOptions.applyAllViews":
  "更改將應用於顯示此屬性的所有視圖。",
"database.FirstLoadLimitSelectOption.limitPagesTitle": "{limit} 頁",
"database.actionBar.groupButton.label": "群組",
"database.actionButton.callTooltip": "貨幣",
"database.actionButton.openAsPageTitle": "打開",
"database.actionButton.openAsPageTooltip": "在頁面上打開",
"database.actionButton.openInSidePeekTooltip": "在側視圖中打開",
"database.actionButton.openLinkTooltip": "打開鏈接",
"database.actionButton.personAddSelfTooltip": "添加本人",
"database.actionButton.personRemoveSelfTooltip": "移除本人",
"database.actionButton.personReplaceWithSelfTooltip": "與本人替換",
"database.actionButton.sendEmailTooltip": "發送電子郵件",
"database.actionMenu.fileProperty.delete.title": "刪除",
"database.actionMenu.fileProperty.download.title": "下載",
"database.actionMenu.fileProperty.fullscreen.title": "全屏",
"database.actionMenu.fileProperty.rename.title": "重命名",
"database.actionMenu.fileProperty.viewOriginal.title": "查看原始內容",
"database.addNewProperty.pageProperty.defaultNamePrefix": "屬性",
"database.addNewProperty.property.defaultNamePrefix": "屬性",
"database.aggregationDescription.average": "計算數值屬性的平均值。",
"database.aggregationDescription.checked": "對此屬性選中的頁面進行計數。",
"database.aggregationDescription.count":
  "對全部頁面進行計數，包括空白頁面。",
"database.aggregationDescription.count_per_group":
  "計算具有此狀態群組的頁面總數。",
"database.aggregationDescription.count_values":
  "計算此屬性的非空值的數量。對於可以包含多個值的類型（例如多選或人員），這將計算每個頁面的選定值數。",
"database.aggregationDescription.date_range":
  "計算日期屬性的日期範圍（最晚日期減最早日期）。",
"database.aggregationDescription.earliest_date": "尋找日期屬性的最早日期。",
"database.aggregationDescription.empty": "對此屬性為空值的頁面進行計數。",
"database.aggregationDescription.latest_date": "尋找日期屬性的最晚日期。",
"database.aggregationDescription.max": "尋找數字屬性的最大值。",
"database.aggregationDescription.median": "尋找數字屬性的中位數。",
"database.aggregationDescription.min": "尋找數值屬性的最小值。",
"database.aggregationDescription.not_empty":
  "對此屬性為非空值的頁面進行計數。",
"database.aggregationDescription.percent_checked":
  "顯示此屬性已選頁面的百分比。",
"database.aggregationDescription.percent_empty":
  "顯示此屬性為空值的頁面的百分比。",
"database.aggregationDescription.percent_not_empty":
  "顯示此屬性為非空值的頁面的百分比。",
"database.aggregationDescription.percent_per_group":
  "顯示具有此狀態群組的頁面的百分比",
"database.aggregationDescription.percent_unchecked":
  "顯示此屬性未選頁面的百分比。",
"database.aggregationDescription.range":
  "計算數字屬性的範圍（最大值減最小值）。",
"database.aggregationDescription.show_unique":
  "顯示此屬性的唯一值。對於可以包含多個值（例如多選或人員）的屬性類型，將計算所有頁面中的唯一值。",
"database.aggregationDescription.sum": "計算數字屬性的總和。",
"database.aggregationDescription.unchecked": "對此屬性未選的頁面進行計數。",
"database.aggregationDescription.unique":
  "計算此屬性的唯一值的數量。對於可以包含多個值（例如多選或個人）的類型，這將計算所有頁面上的唯一值。",
"database.aggregationFullName.average": "平均數",
"database.aggregationFullName.checked": "選中",
"database.aggregationFullName.count": "總數",
"database.aggregationFullName.count_per_group": "每個群組總數",
"database.aggregationFullName.count_values": "值的總數",
"database.aggregationFullName.date_range": "日期範圍",
"database.aggregationFullName.earliest_date": "最早日期",
"database.aggregationFullName.empty": "空單元格總數",
"database.aggregationFullName.latest_date": "最晚日期",
"database.aggregationFullName.max": "最大值",
"database.aggregationFullName.median": "中位數",
"database.aggregationFullName.min": "最小值",
"database.aggregationFullName.not_empty": "非空單元格總數",
"database.aggregationFullName.percent_checked": "選中百分比",
"database.aggregationFullName.percent_empty": "空單元格百分比",
"database.aggregationFullName.percent_not_empty": "非空單元格百分比",
"database.aggregationFullName.percent_per_group": "每個群組百分比",
"database.aggregationFullName.percent_unchecked": "未選百分比",
"database.aggregationFullName.range": "範圍",
"database.aggregationFullName.sum": "總和",
"database.aggregationFullName.unchecked": "未選",
"database.aggregationFullName.unique": "唯一值的總數",
"database.aggregationFullName.unique_values": "顯示唯一值",
"database.aggregationShortName.average": "平均",
"database.aggregationShortName.checked": "選中",
"database.aggregationShortName.count": "計數",
"database.aggregationShortName.count_per_group": "總數",
"database.aggregationShortName.count_values": "值",
"database.aggregationShortName.date_range": "範圍",
"database.aggregationShortName.earliest_date": "最早",
"database.aggregationShortName.empty": "空",
"database.aggregationShortName.latest_date": "最晚",
"database.aggregationShortName.max": "最大",
"database.aggregationShortName.median": "中位",
"database.aggregationShortName.min": "最小",
"database.aggregationShortName.not_empty": "非空",
"database.aggregationShortName.percent_checked": "選中",
"database.aggregationShortName.percent_empty": "空",
"database.aggregationShortName.percent_not_empty": "非空",
"database.aggregationShortName.percent_per_group": "百分比",
"database.aggregationShortName.percent_unchecked": "未選",
"database.aggregationShortName.range": "範圍",
"database.aggregationShortName.showUnique": "顯示唯一",
"database.aggregationShortName.sum": "總和",
"database.aggregationShortName.unchecked": "未選",
"database.aggregationShortName.unique": "唯一",
"database.boardAggregation.tooltip": "匯總",
"database.boardView.actions.addNewPage.tooltip": "創建新頁面",
"database.boardView.addGroupButtonTitle": "添加分組",
"database.boardView.addItemButtonTitle": "新建",
"database.boardView.missingSelectProperty":
  "無法呈現此視圖，因為數據庫缺少選擇屬性。",
"database.boardView.searchResults.noResults.label": "無結果",
"database.boardView.uncategorizedColumnTitle": "無{name}",
"database.boardView.uncategorizedColumnTooltip":
  "任何<b>{name}</b>屬性為空的項目都將移到此處。此分組無法刪除。",
"database.calendarView.addItemButtonTooltip": "添加項目",
"database.calendarView.dateProperty.defaultName": "日期",
"database.calendarView.missingDateProperty":
  "無法呈現此視圖，因為數據庫缺少日期屬性。",
"database.calendarView.todayButton.label": "今天",
"database.collectionEditGroupMenu.newGroupLabel.placeholder": "新建群組",
"database.collectionEditGroupMenu.renameGroupLabel.placeholder":
  "重命名群組",
"database.collectionEditGroupMenu.submitButton.label": "完成",
"database.collectionEditViewButtonPopup.dateNameProperty": "日期",
"database.collectionEditViewButtonPopup.renameButtonTitle": "重命名",
"database.collectionEditViewButtonPopup.statusNameProperty": "狀態",
"database.collectionGroupActionMenu.colorSectionTitle": "顏色",
"database.collectionGroupActionMenu.deleteButtonTitle": "刪除",
"database.collectionGroupActionMenu.deleteDialogMessage":
  "是否確定？該群組內的所有塊都將被刪除。",
"database.collectionGroupActionMenu.hideButtonTitle": "隱藏",
"database.collectionGroupActionMenu.showButtonTitle": "顯示",
"database.collectionGroupActionMenu.title": "動作",
"database.collectionGroupAggregation.title": "聚合",
"database.collectionGroupHeader.actions.addNewPage.tooltip": "創建新頁面",
"database.collectionGroupValue.dateGroup.last7Days": "過去 7 天",
"database.collectionGroupValue.dateGroup.last_30Days": "過去 30 天",
"database.collectionGroupValue.dateGroup.next30Days": "未來 30 天",
"database.collectionGroupValue.dateGroup.next7Days": "未來 7 天",
"database.collectionGroupValue.dateGroup.today": "今天",
"database.collectionGroupValue.dateGroup.tomorrow": "明天",
"database.collectionGroupValue.dateGroup.week.differingStartAndEndMonth":
  "{startYear}{startMonth} {startDay} - {endMonth} {endDay} 當週",
"database.collectionGroupValue.dateGroup.week.differingStartAndEndYear":
  "{startYear}{startMonth} {startDay}  -{endYear}  {endMonth} {endDay} 當週",
"database.collectionGroupValue.dateGroup.week.sameStartAndEndMonth":
  "{startYear}{startMonth} {startDay}-{endDay} 當週",
"database.collectionGroupValue.dateGroup.yesterday": "昨天",
"database.collectionGroupValue.numberGroup.outOfRange": "超出範圍",
"database.collectionGroupValue.numberGroup.range": "{start} 到 {end}",
"database.collectionGroupValue.textGroup.other": "其他",
"database.collectionTemplatePickerItem.actionMenu.setAsDefault": "設為默認",
"database.collectionTemplatePickerItem.setAsDefaultDialog.message":
  "<span>創建新頁面時將 &ldquo;{pageName}&rdquo; 用作默認模板？</span>",
"database.collectionTemplatePickerItem.setAsDefaultDialog.setCollection":
  "對於 &ldquo;{databaseName}&rdquo; 中的所有視圖",
"database.collectionTemplatePickerItem.setAsDefaultDialog.setCollectionView":
  "僅在 &ldquo;{viewName}&rdquo; 視圖上",
"database.collectionView.untitledName.board": "看板",
"database.collectionView.untitledName.calendar": "日曆",
"database.collectionView.untitledName.gallery": "畫廊",
"database.collectionView.untitledName.list": "列表",
"database.collectionView.untitledName.table": "表格",
"database.collectionView.untitledName.timeline": "時間軸",
"database.collectionViewBlock.openFullscreenPageButton.tooltip":
  "以整頁形式打開",
"database.collectionViewBlock.openViewSettingsButton.tooltip":
  "編輯視圖佈局、分組等…",
"database.collectionViewSelect.addViewButtonTitle": "添加視圖",
"database.collectionViewSelect.noResultsTitle": "無結果",
"database.configureProperty.duplicateAction": "創建屬性副本",
"database.configureProperty.hideAction": "隱藏屬性",
"database.configureProperty.showAsAction": "顯示為",
"database.confirmDialog.templatePickerItem.deleteButton.label": "刪除",
"database.confirmDialog.templatePickerItem.deleteMessage":
  "確定要刪除此模板嗎？",
"database.copyButton.copyToClipboard": "複製到剪貼板",
"database.editButton.configureRollupTooltip": "配置匯總",
"database.editButton.editEmailTooltip": "編輯郵箱地址",
"database.editButton.editLinkTooltip": "編輯URL",
"database.editButton.editPhoneTooltip": "編輯電話號碼",
"database.editProperty.databaseLocked.tooltipPart1": "頁面屬性已鎖定",
"database.editProperty.databaseLocked.tooltipPart2":
  "請前往{recordIconAndTitle}解鎖",
"database.editProperty.errorDialog.duplicateSelectValue.message":
  "此選擇項已經存在。",
"database.editProperty.errorDialog.forbidDeleteDefaultOption.message":
  "無法刪除默認選項。",
"database.editProperty.errorDialog.missingSelectValue.message":
  "請輸入一個值。",
"database.editProperty.select.mobileLabel": "重命名",
"database.editProperty.setAsDefault.confirm.continueButton": "繼續",
"database.editProperty.setAsDefault.confirm.description":
  "新頁面將以 {defaultValue} 作為默認狀態啟動。<b>未設置狀態</b>的現有頁面將切換到 {defaultValue}。",
"database.editProperty.setAsDefault.confirm.title":
  "將默認值更改為 <b>{defaultValue}</b>？",
"database.emptyTemplatesList.info": "使用模板來復用此數據庫中的頁面格式。",
"database.fileProperty.focusedLabel": "添加文件或圖片",
"database.fileProperty.mobileMenu.title": "文件屬性",
"database.filterAndSort.datePropertyValue.placeholder": "選擇日期",
"database.filterAndSort.dateRangePropertyValue.placeholder": "選擇範圍",
"database.filterAndSort.firstPersonPropertyValue.title": "我自己",
"database.filterAndSort.mobileEditButton.label": "編輯",
"database.filterAndSort.propertyValueInput.placeholder": "值",
"database.filterAndSortMenu.propertyButton.label": "屬性",
"database.filterBar.addButton.title": "添加篩選器",
"database.filterBar.advancedFilterRulesCount.title":
  "{ruleCount, plural, other {{ruleCount} 條規則}}",
"database.filterBar.changesControl.mergeIntoAdvancedFilter.title":
  "合併到高級篩選器中",
"database.filterBar.changesControl.reset.title": "重置",
"database.filterBar.changesControl.saveAsNewView.title": "另存為新視圖",
"database.filterBar.changesControl.saveForEveryone.title": "為所有人保存",
"database.filterBar.doubleClickToEdit.title": "雙擊進行編輯",
"database.filterBar.filter.title": "篩選器",
"database.filterBar.mobileSearch.placeholder": "輸入以搜索…",
"database.filterBar.reset.title": "重置",
"database.filterBar.saved.title": "為所有人保存的更改。",
"database.filterBar.search.title": "搜索",
"database.filterBar.sorts.label": "{sortCount} 個排序",
"database.filterBar.tooltipPreview.empty.title": "清空篩選器",
"database.filterBar.tooltipPreview.moreAdditionalRules.title":
  "{ruleCount, plural, other {{ruleCount} 條篩選器規則}}",
"database.filterBar.turnOffFilter.title": "點擊可自行關閉此篩選器",
"database.filterBar.turnOnFilter.title": "點擊可自行啟用此篩選器",
"database.filterBar.undo.title": "撤銷",
"database.filterBar.updateFilter.title": "點擊可自行更新此篩選器",
"database.filterBarFilterValue.notOperator": "不是",
"database.filterBarFilterValue.title":
  "{propertyName}{colonSeparator} {filterOperator} {propertyValue}",
"database.filterMenu.addFilterGroup2ButtonTitle": "添加篩選器組",
"database.filterMenu.addFilterGroupButtonCaption": "一個組可包含多個篩選器",
"database.filterMenu.addFilterGroupButtonTitle": "添加篩選器組",
"database.filterMenu.addFilterRuleButtonTitle": "添加篩選器規則",
"database.filterMenu.comparatorMenuDropdownButton.label": "比較器",
"database.filterMenu.dateSelectMenu.emptyPlaceholder": "空",
"database.filterMenu.duplicateFilterGroupMenuTitle": "創建副本",
"database.filterMenu.duplicateFilterMenuTitle": "創建副本",
"database.filterMenu.filterGroupIndex": "篩選器組 {index}",
"database.filterMenu.filterIndex": "篩選 {index}",
"database.filterMenu.filterOperatorMenu.title": "運算符",
"database.filterMenu.mobileComparatorValueMenu.title": "比較器",
"database.filterMenu.mobileDateSelectMenu.title": "日期",
"database.filterMenu.mobileMenuTitle": "篩選器",
"database.filterMenu.operatorPlaceholder": "運算符",
"database.filterMenu.removeFilterGroupMenuTitle": "移除",
"database.filterMenu.removeFilterMenuTitle": "移除",
"database.filterMenu.rollupPropertyValue.mobileMenu.title": "設置篩選器",
"database.filterMenu.turnIntoFilterMenuTitle": "轉換成篩選器",
"database.filterMenu.turnIntoGroupMenuTitle": "轉換成組",
"database.filterMenu.unwrapGroupMenuTitle": "展開組",
"database.filterMenu.where": "當",
"database.filterMenu.wrapInGroupMenuCaption": "圍繞此項創建篩選器組",
"database.filterMenu.wrapInGroupMenuTitle": "包裝成組",
"database.filterOperatorValue.askForInput": "請求輸入",
"database.filterOperatorValue.checkboxPlaceholder.title": "選擇一個值",
"database.filterOperators.and": "與",
"database.filterOperators.andCaption": "必須滿足所有篩選規則",
"database.filterOperators.any": "的任何值",
"database.filterOperators.every": "的每個值",
"database.filterOperators.none": "沒有值",
"database.filterOperators.or": "或",
"database.filterOperators.orCaption": "必須滿足至少一個篩選規則",
"database.filterValue.checkboxType.checked.title": "選中",
"database.filterValue.checkboxType.title": "複選框",
"database.filterValue.checkboxType.unchecked.title": "未選中",
"database.filterValue.clear.message": "清除",
"database.filterValue.commaSeparator": ",",
"database.filterValue.dateType.dateIsAfter.title": "之後",
"database.filterValue.dateType.dateIsBefore.title": "之前",
"database.filterValue.dateType.dateIsOnOrAfter.title": "當日或之後",
"database.filterValue.dateType.dateIsOnOrBefore.title": "當日或之前",
"database.filterValue.dateType.ending.title": "結束",
"database.filterValue.dateType.starting.title": "開始",
"database.filterValue.dateType.title": "日期",
"database.filterValue.deleteFilter.title": "刪除篩選器",
"database.filterValue.mergeIntoAdvancedFilter.title": "合併到高級篩選器中",
"database.filterValue.mergeIntoAdvancedFilter.tooltip":
  "使用高級篩選器對篩選器規則進行分組並使用 AND/OR 條件。",
"database.filterValue.numberType.searchPlaceholder": "輸入一個值…",
"database.filterValue.numberType.title": "數字",
"database.filterValue.personType.firstPersonPropertyValue.title": "我",
"database.filterValue.personType.noResults.message": "無結果",
"database.filterValue.personType.searchPersonPropertyMenuItem.errorMessage":
  "出了些問題。",
"database.filterValue.personType.searchPlaceholder":
  "搜索一個或多個人員...",
"database.filterValue.personType.title": "人員",
"database.filterValue.relationType.searchPlaceholder":
  "搜索一個或多個頁面...",
"database.filterValue.relationType.title": "關聯關係",
"database.filterValue.selectType.clearSelection.message": "清除選擇",
"database.filterValue.selectType.noResults.message": "無結果",
"database.filterValue.selectType.prompt": "選擇選項",
"database.filterValue.selectType.searchPlaceholder":
  "選擇一個或多個選項...",
"database.filterValue.selectType.title": "選擇",
"database.filterValue.textType.searchPlaceholder": "輸入一個值…",
"database.filterValue.textType.title": "文本",
"database.firstLoadLimitSelectMenu.firstLoadLimitSetting":
  "在首次加載時顯示",
"database.formula.acceptFormulaInput.tooltip": "接受",
"database.formula.category.constants": "常數",
"database.formula.category.functions": "函數",
"database.formula.category.operators": "運算符",
"database.formula.category.properties": "屬性",
"database.formula.constant.e.description": "自然對數的底數。",
"database.formula.constant.pi.description": "圓周長與其直徑之比。",
"database.formula.doneButton.label": "完成",
"database.formula.examplesSection.title": "例子",
"database.formula.function.abs.description": "返回數字的絕對值。",
"database.formula.function.cbrt.description": "返回數字的立方根。",
"database.formula.function.ceil.description":
  "返回大於或等於數字的最小整數。",
"database.formula.function.concat.description": "將參數拼接並返回結果。",
"database.formula.function.contains.description":
  "如果在第一個參數中找到第二個參數，則返回 true。",
"database.formula.function.date.description":
  "返回一個介於 1 到 31 之間的整數，對應於給定月份中的日期數。",
"database.formula.function.dateAdd.description":
  '添加時間到日期。最後一個參數“單位”可以是以下選項（英文）："quarters", "months", "weeks", "days", "hours", "minutes", "seconds" 或 "milliseconds"。 ',
"database.formula.function.dateBetween.description":
  '返回兩個日期之間的時間。最後一個參數“單位”可以是以下選項（英文）："quarters", "months", "weeks", "days", "hours", "minutes", "seconds" 或 "milliseconds"。 ',
"database.formula.function.dateSubtract.description":
  '從日期減去時間。最後一個參數“單位”可以是以下選項（英文）："quarters", "months", "weeks", "days", "hours", "minutes", "seconds" 或 "milliseconds"。',
  "database.formula.function.day.description":
    "返回與給定日期的星期幾相對應的整數：0 代表星期日，1 代表星期一，2 代表星期二，依此類推。",
  "database.formula.function.empty.description": "測試值是否為空。",
  "database.formula.function.end.description": "返回日期範圍的結束。",
  "database.formula.function.exp.description":
    "返回 E^x，其中 x 是參數，E 是歐拉常數（2.718…），即自然對數的底數。",
  "database.formula.function.floor.description":
    "返回小於或等於數字的最大整數。",
  "database.formula.function.format.description": "將其參數格式化為字符串。",
  "database.formula.function.formatDate.description":
    "使用 Moment.js 的時間格式字符串來格式化日期。",
  "database.formula.function.fromTimestamp.description":
    "返回從 Unix 毫秒時間戳構建的日期，對應於自1970年1月1日起的毫秒數。",
  "database.formula.function.hour.description":
    "返回一個介於 0 和 23 之間的整數，對應於給定日期中的小時數。",
  "database.formula.function.id.description": "返回每個條目的唯一字符串ID。",
  "database.formula.function.join.description":
    "以第一個參數為連接符，將數組中所有元素拼接為一個字符串。",
  "database.formula.function.length.description": "返回字符串的長度。",
  "database.formula.function.ln.description": "返回數字的自然對數。",
  "database.formula.function.log10.description":
    "返回數字的以 10 為底的對數。",
  "database.formula.function.log2.description": "返回數字的以 2 為底的對數。",
  "database.formula.function.max.description":
    "返回零個或多個數字中的最大值。",
  "database.formula.function.min.description":
    "返回零個或多個數字中的最小值。",
  "database.formula.function.minute.description":
    "返回一個介於 0 和 59 之間的整數，對應於給定日期中的分鐘數。",
  "database.formula.function.month.description":
    "根據本地時間，返回一個介於 0 和 11 之間的整數，對應於給定日期中的月份。0 對應於一月，1 對應於二月，依此類推。",
  "database.formula.function.now.description": "返回當前日期和時間。",
  "database.formula.function.replace.description":
    "用新值替換正則表達式的第一個匹配項。",
  "database.formula.function.replaceAll.description":
    "用新值替換正則表達式的所有匹配項。",
  "database.formula.function.round.description":
    "返回四捨五入到最接近整數的數字的值。",
  "database.formula.function.sign.description":
    "返回 x 的符號，指示 x 是正數、負數還是零。",
  "database.formula.function.slice.description":
    "從起始索引（包含）到結束索引（可選，不包含）的提取字符串中的子字符串。",
  "database.formula.function.sqrt.description": "返回數字的正平方根。",
  "database.formula.function.start.description": "返回日期範圍的開始。",
  "database.formula.function.test.description":
    "測試字符串是否與正則表達式匹配。",
  "database.formula.function.timestamp.description":
    "返回 Unix 毫秒時間戳的整數，對應於自1970年1月1日起的毫秒數。",
  "database.formula.function.toNumber.description": "從文本中解析數字。",
  "database.formula.function.year.description":
    "返回與給定日期的年份相對應的數字。",
  "database.formula.keyboardShortcutHint": "{commandEnter} 以接受",
  "database.formula.mobileNoErrors.message": "沒有錯誤。",
  "database.formula.operator.add.description":
    "將兩個數字相加並返回其總和，或者將兩個字符串拼接起來。",
  "database.formula.operator.and.description":
    "返回其兩個參數的邏輯與（AND）。",
  "database.formula.operator.divide.description":
    "將兩個數字相除並返回其商。",
  "database.formula.operator.equal.description":
    "如果參數相等，則返回 true，否則返回 false。",
  "database.formula.operator.if.description":
    "基於另一個值在兩個選項之間切換。",
  "database.formula.operator.larger.description":
    "如果第一個參數大於第二個參數，則返回 true。",
  "database.formula.operator.largerEq.description":
    "如果第一個參數大於或等於第二個參數，則返回 true。",
  "database.formula.operator.mod.description": "將兩個數字相除並返回其餘數。",
  "database.formula.operator.multiply.description":
    "將兩個數字相乘並返回其乘積。",
  "database.formula.operator.not.description": "返回其參數的邏輯非（NOT）。",
  "database.formula.operator.or.description":
    "返回其兩個參數的邏輯或（OR）。",
  "database.formula.operator.pow.description":
    "返回底數（base）的指數（exponent）次冪，即 baseexponent。",
  "database.formula.operator.smaller.description":
    "如果第一個參數小於第二個參數，則返回 true。",
  "database.formula.operator.smallerEq.description":
    "如果第一個參數小於或等於第二個參數，則返回 true。",
  "database.formula.operator.subtract.description":
    "將兩個數字相減並返回其差值。",
  "database.formula.operator.unaryMinus.description": "數字的負數。",
  "database.formula.operator.unaryPlus.description": "將其參數轉換為數字。",
  "database.formula.operator.unequal.description":
    "如果參數相等，則返回 false，否則返回 true。",
  "database.formula.placeholder": "輸入一個函數",
  "database.formula.property.description":
    "返回每個條目的{propertyName}屬性。",
  "database.formula.syntaxSection.title": "語法",
  "database.formulaPropertyEntryMenuItem.title": "文檔",
  "database.galleryView.addItemButtonTitle": "新建",
  "database.genericColumn.name": "列 {columnNumber}",
  "database.groupExistsAlreadyError.message": "群組已存在。",
  "database.groupMenu.clear": "清除",
  "database.groupMenu.columnsBy": "列依據",
  "database.groupMenu.dateGroupBy.day": "日",
  "database.groupMenu.dateGroupBy.month": "月",
  "database.groupMenu.dateGroupBy.relative": "相對",
  "database.groupMenu.dateGroupBy.week": "週",
  "database.groupMenu.dateGroupBy.year": "年",
  "database.groupMenu.groupBy": "分組方式",
  "database.groupMenu.hiddenGroups": "隱藏群組",
  "database.groupMenu.hideAllGroups": "全部隱藏",
  "database.groupMenu.loadMoreButton.text":
  "{database.groupMenu.loadMoreButton.text, plural, other {顯示另外 {loadMoreAmount, plural, one {{loadMoreAmount} 個群組} other {{loadMoreAmount} 個群組}}}}",
"database.groupMenu.numberGroupBy.range": "{start} 到 {end}",
"database.groupMenu.numberGroupRange": "群組範圍",
"database.groupMenu.numberGroupSize": "分組間隔",
"database.groupMenu.showAllGroups": "全部顯示",
"database.groupMenu.statusGroupBy.group": "分組",
"database.groupMenu.statusGroupBy.option": "選項",
"database.groupMenu.textGroupBy.alphabetical": "按字母順序",
"database.groupMenu.textGroupBy.exact": "精確",
"database.groupMenu.visibleGroups": "可見群體",
"database.groups.loadMoreButton.text":
  "{database.groups.loadMoreButton.text, plural, other {另外 {loadMoreAmount} 個}}",
"database.listView.addItemButtonTitle": "新建",
"database.loadMoreButtonTitle": "加載更多",
"database.mobileBoardAggregationMenu.title": "表匯總",
"database.mobileFilterAndSortMenu.property.buttonMenuItem.label": "屬性",
"database.mobileFormulaModal.saveButton.label": "保存",
"database.mobileFormulaModal.title": "函數",
"database.mobilePropertyAggregationMenu.title": "表匯總",
"database.mobileSearch.placeholder": "輸入以搜索…",
"database.mobileSelectViewMenu.title":
  "{numberOfViews, plural, one {{numberOfViews} 個視圖} other {{numberOfViews} 個視圖}}",
"database.mobileTemplatesMenu.title": "數據庫模板",
"database.navigateButton.openAsPageTitle": "打開",
"database.navigateButton.openInSidePeekTooltip": "側面打開",
"database.noPersonSearchResults.message": "無結果",
"database.noRelationSearchResults.message": "無結果",
"database.optionExistsAlreadyError.message": "選項已存在。",
"database.pageProperties.addPropertyButtonTitle": "添加屬性",
"database.pageProperties.hidePropertyTitle":
  "{num, plural, other {隱藏 {num} 個屬性}}",
"database.pageProperties.showMorePropertyTitle":
  "{num, plural, other {其他 {num} 個屬性}}",
"database.pageProperty.emptyTitle": "空",
"database.personPropertyMenu.noSearchResults.message": "無結果",
"database.personPropertyMenu.searchErrorMessage": "出了些問題。",
"database.personPropertyValue.searchPlaceholder": "搜索人員…",
"database.personPropertyValue.selectPerson.searchPlaceholder":
  "選擇一個或多個人員",
"database.personPropertyValue.selectPerson.searchPlaceholderWithLimit":
  "選擇人員",
"database.propertyAggregationMenu.noneText": "無",
"database.propertyTypeDescription.checkbox": "通過複選框追踪狀態。",
"database.propertyTypeDescription.created_by": "引用創建頁面的人員。",
"database.propertyTypeDescription.created_time":
  "引用頁面的創建日期和時間。",
"database.propertyTypeDescription.date":
  "一個日期，帶有格式化選項，可包含時間。",
"database.propertyTypeDescription.email": "引用郵箱地址。",
"database.propertyTypeDescription.file": "上傳文件和圖片。",
"database.propertyTypeDescription.formula": "使用頁面的其他屬性計算函數。",
"database.propertyTypeDescription.last_edited_by":
  "引用上次編輯頁面的人員。",
"database.propertyTypeDescription.last_edited_time":
  "引用頁面的上次編輯日期和時間。",
"database.propertyTypeDescription.multi_select":
  "使用選項列表中的值進行標記。",
"database.propertyTypeDescription.number":
  "一個數字，可以格式化為貨幣、百分比等選項。",
"database.propertyTypeDescription.person": "引用你團隊中的人員。",
"database.propertyTypeDescription.phone_number": "引用電話號碼。",
"database.propertyTypeDescription.relation":
  "允許此數據庫中的頁面引用另一個數據庫中的頁面。",
"database.propertyTypeDescription.rollup": "顯示並彙總關聯關係中的數據。",
"database.propertyTypeDescription.select": "從選項列表中選擇。",
"database.propertyTypeDescription.status": "帶有組自定義選項列表的標籤",
"database.propertyTypeDescription.text": "一行文字。",
"database.propertyTypeDescription.url": "網絡上的鏈接。",
"database.propertyTypeName.checkbox": "複選框",
"database.propertyTypeName.created_by": "創建者",
"database.propertyTypeName.created_time": "創建時間",
"database.propertyTypeName.date": "日期",
"database.propertyTypeName.email": "電子郵件",
"database.propertyTypeName.file": "文件和媒體",
"database.propertyTypeName.formula": "函數",
"database.propertyTypeName.last_edited_by": "上次編輯者",
"database.propertyTypeName.last_edited_time": "上次編輯時間",
"database.propertyTypeName.multi_select": "多選",
"database.propertyTypeName.number": "數字",
"database.propertyTypeName.person": "人員",
"database.propertyTypeName.phone_number": "電話",
"database.propertyTypeName.relation": "關聯關係",
"database.propertyTypeName.rollup": "匯總",
"database.propertyTypeName.select": "單選",
"database.propertyTypeName.status": "狀態",
"database.propertyTypeName.text": "文本",
"database.propertyTypeName.title": "標題",
"database.propertyTypeName.url": "網址",
"database.propertyValues.mobileFormulaMenu.title": "函數",
"database.relationMenu.hiddenInRelationTitle": "在相關數據庫中隱藏",
"database.relationMenu.noProperties": "無屬性",
"database.relationMenu.shownInRelationTitle": "在相關數據庫中顯示",
"database.relationMenuRow.tooltip.addPage.message": "鏈接頁面",
"database.relationMenuRow.tooltip.insertPage.message": "鏈接另一個頁面",
"database.relationMenuRow.tooltip.openPage.message": "在頁面上打開",
"database.relationMenuRow.tooltip.removePage.message": "移除頁面",
"database.relationProperty.emptyState.addNew": "新建頁面",
"database.relationProperty.emptyState.label":
  "在 {databaseWithIcon} 中找不到任何頁面",
"database.relationProperty.newRelation.targetDatabase":
  "<regular>在</regular> {databaseWithIcon}<regular>中</regular>",
"database.relationProperty.noResults.subHeader": "無結果",
"database.relationProperty.relatedPages.limit.subHeader": "鏈接的頁面",
"database.relationProperty.relatedPages.subHeader":
  "{count, plural, other {{count} 個鏈接的頁面}}",
"database.relationProperty.unrelatedPages.anotherPage.subHeader":
  "鏈接另一個頁面",
"database.relationProperty.unrelatedPages.subHeader":
  "{database.relationProperty.unrelatedPages.subHeader, plural, other {選擇頁面}}",
"database.relationPropertyMenu.tooltip.addPage.message": "添加到關聯",
"database.relationPropertyMenu.tooltip.addPage.prompt": "輸入",
"database.relationPropertyMenu.tooltip.removePage.message": "移除頁面",
"database.relationPropertyValue.moreItems.message":
  "其他 {relationMoreItemsCount} 項…",
"database.restoredProperty.name": "{propertyName}（已恢復）",
"database.rollupProperty.aggregate.showOriginal": "顯示原始值",
"database.rollupProperty.editAggregate.title": "計算",
"database.rollupProperty.editAggregate.tooltip":
  "先選擇現有的關聯關係和屬性。",
"database.rollupProperty.editProperty.buttonTitle": "選擇要顯示的屬性…",
"database.rollupProperty.editProperty.title": "屬性",
"database.rollupProperty.editProperty.tooltip": "請先選擇現有的關聯關係。",
"database.rollupProperty.editRelation.buttonTitle": "選擇現有關聯關係…",
"database.rollupProperty.editRelation.title": "關聯關係",
"database.searchInputPlaceholder": "輸入以搜索…",
"database.searchPerson.placeholder": "搜索人員…",
"database.searchRelation.createNewPageFooter":
  "在 {databaseNameWithIcon} 中<medium>新建</medium> {pageName} <medium>頁面</medium>",
"database.searchRelation.placeholder": "搜索頁面...",
"database.selectPropertyEditMenu.createLabel": "創建",
"database.selectPropertyEditMenu.noResults": "未找到任何選項",
"database.selectPropertyEditMenu.searchPlaceholder": "搜索選項…",
"database.selectPropertyEditMenu.searchStatusPlaceholder": "搜索選項",
"database.selectPropertyEditMenu.selectOnlyPrompt": "選擇選項",
"database.selectPropertyEditMenu.selectOrCreatePrompt":
  "選擇或創建一個選項",
"database.selectPropertyOptionEditMenu.Group": "分組",
"database.selectPropertyOptionEditMenu.colorsSection": "顏色",
"database.selectPropertyOptionEditMenu.deleteLabel": "刪除",
"database.selectPropertyOptionEditMenu.deleteModal.confirmButton": "移除",
"database.selectPropertyOptionEditMenu.deleteModal.prompt":
  "確定要移除此選項？",
"database.selectPropertyOptionEditMenu.setAsDefault": "設為默認",
"database.sortMenu.addSortButtonTitle": "添加排序",
"database.sortMenu.deleteButtonTooltip": "刪除排序規則",
"database.source.editTitle.title": "編輯數據庫標題",
"database.source.hideTitle.title": "隱藏數據庫標題",
"database.source.titlePlaceholder": "無標題",
"database.source.viewDatabase.title": "查看數據庫",
"database.statusProperty.groupName.complete": "已完成",
"database.statusProperty.groupName.inProgress": "進行中",
"database.statusProperty.groupName.todo": "待辦",
"database.tableHeaderCell.deleteProperty": "刪除屬性",
"database.tableHeaderCell.deleteProperty.modal.inverseConfirmButton":
  "刪除，但保留相關屬性",
"database.tableHeaderCell.deleteProperty.modal.prompt":
  "注意：此屬性在{relationTargetName}上有一個相關屬性，該屬性也將被刪除。",
"database.tableHeaderCell.editProperty": "編輯屬性",
"database.tableHeaderCell.editPropertyTooltip":
  "編輯屬性名稱、類型和其他選項...",
"database.tableHeaderCell.filter": "篩選器",
"database.tableHeaderCell.hideFromView": "從視圖中隱藏",
"database.tableHeaderCell.hideInView": "在視圖中隱藏",
"database.tableHeaderCell.rename": "重命名",
"database.tableHeaderCell.sortAscending": "升序排列",
"database.tableHeaderCell.sortDescending": "降序排列",
"database.tableHeaderCell.wrapColumn": "列換行",
"database.tableView.addRowButton": "新建",
"database.tableView.aggregationPlaceholder": "計算",
"database.tableView.emptyTablePlaceholder": "此表內容為空。",
"database.tableView.emptyTablePlaceholderWithFilters":
  "沒有結果。點擊以添加新的頁面，或重置篩選器。",
"database.templateList.UntitledDatabaseTitle": "無標題",
"database.templatePicker.emptyPageTitle": "空白頁",
"database.templatePickerItem.actionMenu.delete": "刪除",
"database.templatePickerItem.actionMenu.duplicate": "創建副本",
"database.templatePickerItem.actionMenu.edit": "編輯",
"database.templatePickerItem.actionMenu.repeat": "重複",
"database.templatePickerItem.actionMenu.view": "視圖",
"database.templatePickerItem.editTemplate.tooltip": "編輯此模板",
"database.templatePickerItem.mobileRepeatModal.title": "重複",
"database.templatePickerItem.quickOptionMenuItem.day": "每天",
"database.templatePickerItem.quickOptionMenuItem.month": "每月",
"database.templatePickerItem.quickOptionMenuItem.week": "每週",
"database.templatePickerItem.quickOptionMenuItem.year": "每年",
"database.templatePickerMenuItem.default": "默認",
"database.templateView.newTemplateButton": "新模板",
"database.templatesList.templatesFor": "模板・用於",
"database.timelineByMenu.dateRange": "日期範圍",
"database.timelineByMenu.endDate": "結束日期",
"database.timelineByMenu.startDate": "開始日期",
"database.timelineByMenu.title": "時間軸顯示",
"database.timelineByMenu.useSeparatePropertiesToggle":
  "使用單獨的開始和結束日期",
"database.timelineView.addRowButton": "新建",
"database.timelineView.controlHeader.showTableButton.title": "顯示表格",
"database.timelineView.controlHeader.todayButton.title": "今天",
"database.timelineView.dateProperty.defaultName": "日期",
"database.timelineView.emptyTablePlaceholder": "此表內容為空。",
"database.timelineView.item.addRowButton": "新建",
"database.timelineView.missingDateProperty":
  "無法呈現此視圖，因為數據庫缺少日期屬性。",
"database.timelineView.mobileTimelineZoomPicker.title": "選擇縮放等級",
"database.timelineView.tableGroupResults.hideTableButton.title": "隱藏表格",
"database.timelineView.zoomLevel.biWeek": "雙週",
"database.timelineView.zoomLevel.day": "天",
"database.timelineView.zoomLevel.hours": "小時",
"database.timelineView.zoomLevel.month": "月度",
"database.timelineView.zoomLevel.quarter": "季度",
"database.timelineView.zoomLevel.week": "週",
"database.timelineView.zoomLevel.year": "年度",
"database.titleColumn.name": "標題",
"database.viewBlockSettings.appConfiguration.advanced": "高級",
"database.viewBlockSettings.appConfiguration.databases": "數據庫",
"database.viewBlockSettings.appConfiguration.features": "功能",
"database.viewBlockSettings.appConfiguration.presets": "預設",
"database.viewBlockSettings.appConfiguration.saveForEveryone":
  "為所有人保存",
"database.viewBlockSettings.appConfiguration.showMoreFeaturesButton.label":
  "另外 {num} 個...",
"database.viewBlockSettings.appConfiguration.templates": "模板",
"database.viewBlockSettings.appConfiguration.title": "模板設置",
"database.viewBlockSettings.database.add": "添加數據庫",
"database.viewBlockSettings.database.delete": "刪除數據庫",
"database.viewBlockSettings.database.namePlaceholder": "數據庫名稱",
"database.viewBlockSettings.database.newProperty": "新建屬性",
"database.viewBlockSettings.database.title":
  "在 {viewBlockName} 中編輯數據庫",
"database.viewBlockSettings.databases.addDatabase": "添加數據庫",
"database.viewBlockSettings.databases.databaseSummary":
  "{propertyCount, plural, one {{propertyCount} 個屬性} other {{propertyCount} 個屬性}} • 用於 {viewCount, plural, one {{viewCount} 個視圖} other {{viewCount} 個視圖}}",
"database.viewBlockSettings.databases.linkedDatabases": "鏈接數據庫",
"database.viewBlockSettings.databases.properties": "屬性",
"database.viewBlockSettings.databases.sourceDatabases": "源數據庫",
"database.viewBlockSettings.databases.title":
  "管理 {viewBlockName} 中的數據庫",
"database.viewHelpers.dateProperty.defaultName": "日期",
"database.viewHelpers.defaultFilterName": "無標題",
"database.viewHelpers.firstPersonPropertyValue": "我",
"database.viewHelpers.selectProperty.defaultName": "狀態",
"database.viewPropertiesMenu.coverFormat.none": "無",
"database.viewPropertiesMenu.coverFormat.pageContent": "頁面內容",
"database.viewPropertiesMenu.coverFormat.pageCover": "頁面封面",
"database.viewPropertiesMenu.coverSize.large": "大",
"database.viewPropertiesMenu.coverSize.medium": "中",
"database.viewPropertiesMenu.coverSize.small": "小",
"database.viewPropertiesMenu.firstLoadLimitSetting": "加載限制",
"database.viewPropertiesMenu.peekMode.centerPeek": "居中預覽",
"database.viewPropertiesMenu.peekMode.defaultForView": "{view} 的默認值",
"database.viewPropertiesMenu.peekMode.description.centerPeek":
  "以聚焦且居中的模式打開頁面。",
"database.viewPropertiesMenu.peekMode.description.fullPage":
  "以整頁方式打開頁面。",
"database.viewPropertiesMenu.peekMode.description.sidePeek":
  "在一側打開頁面。將視圖保持在交互視圖後面。",
"database.viewPropertiesMenu.peekMode.fullPage": "整頁",
"database.viewPropertiesMenu.peekMode.sidePeek": "側邊預覽",
"database.viewSettigs.searchCollections.thisDatabase.tooltip": "此數據庫",
"database.viewSettings.collectionPropertyLimitHelpers.limit": "限值",
"database.viewSettings.collectionPropertyLimitHelpers.limitOne":
  "1 個 {type}",
"database.viewSettings.collectionPropertyLimitHelpers.limitOne.relation":
  "1 頁",
"database.viewSettings.collectionPropertyLimitHelpers.noLimit": "無限制",
"database.viewSettings.configureSelfRelationTab.accept.title":
  "創建關聯關係",
"database.viewSettings.configureSelfRelationTab.createNewPropertyOption.caption":
  "<b>不同步</b>：在“任務”數據庫中搭建“相關任務”屬性時，請使用此選項。",
"database.viewSettings.configureSelfRelationTab.createNewPropertyOption.title":
  "創建新屬性",
"database.viewSettings.configureSelfRelationTab.samePropertyOption.caption":
"<b>雙向同步</b>：在“任務”數據庫中搭建“父任務”和“子任務”屬性時，請使用此選項。",
"database.viewSettings.configureSelfRelationTab.samePropertyOption.title":
"使用同一個屬性",
"database.viewSettings.configureSelftRelationTab.title": "新建關聯關係",
"database.viewSettings.copyLinkSnackBarItem.title":
"視圖鏈接已復製到剪貼板",
"database.viewSettings.createCollectionTab.createCollectionButton.title":
"創建數據庫",
"database.viewSettings.createCollectionTab.inputPlaceholder": "數據庫名稱",
"database.viewSettings.createCollectionTab.title": "新建數據庫",
"database.viewSettings.createCustomFilterTab.doneButton.title": "完成",
"database.viewSettings.createCustomFilterTab.title": "新建篩選器",
"database.viewSettings.createFilterTab.addAdvancedFilter.title":
"添加高級篩選器",
"database.viewSettings.createFilterTab.advancedFilter.title": "高級篩選器",
"database.viewSettings.createFilterTab.advancedFilterRulesCount.title":
"{ruleCount, plural, other {{ruleCount} 條規則}}",
"database.viewSettings.createFilterTab.doneButton.title": "自定義篩選器",
"database.viewSettings.createFilterTab.inputPlaceholder": "篩選方式…",
"database.viewSettings.createFilterTab.suggestedFilters.title":
"建議篩選器",
"database.viewSettings.createFilterTab.title": "添加篩選器",
"database.viewSettings.createPropertyTab.title": "新建屬性",
"database.viewSettings.createSortTab.inputPlaceholder": "排序方式…",
"database.viewSettings.createSortTab.title": "新建排序",
"database.viewSettings.createViewSourceTab.newCollectionButton.title":
"新建數據庫",
"database.viewSettings.createViewSourceTab.newCollectionWithNameButton.title":
"新建數據庫“{filterText}”",
"database.viewSettings.createViewSourceTab.title": "選擇數據源",
"database.viewSettings.createViewTab.doneButton.title": "完成",
"database.viewSettings.createViewTab.newCollectionButton.title":
"新建數據庫",
"database.viewSettings.createViewTab.title": "新建視圖",
"database.viewSettings.databases.title": "數據庫",
"database.viewSettings.dateOptions.dateFormat": "日期格式",
"database.viewSettings.dateOptions.timeFormat": "時間格式",
"database.viewSettings.deleteButton.text": "刪除視圖",
"database.viewSettings.deletedPropertiesTab.noResults": "無結果",
"database.viewSettings.deletedPropertiesTab.permanentlyDeleteProperty.modal.prompt":
"是否確定要刪除此屬性？",
"database.viewSettings.duplicateExistingViewTab.inputPlaceholder":
"搜索視圖…",
"database.viewSettings.duplicateExistingViewTab.newEmptyViewButton.title":
"新建空視圖",
"database.viewSettings.duplicateExistingViewTab.noResultsTitle": "無結果",
"database.viewSettings.duplicateExistingViewTab.showMore.title":
"顯示其他 {showMore} 個",
"database.viewSettings.duplicateExistingViewTab.title": "拷貝現有視圖",
"database.viewSettings.editRelation.noTarget.title": "無目標",
"database.viewSettings.editRelation.selfRelationTarget.title": "此數據庫",
"database.viewSettings.editRelation.targetLink.title": "關聯到",
"database.viewSettings.editRelation.updateButton.title": "更新關聯關係",
"database.viewSettings.filterAndSortSaveControl.filter.caption":
"{count, plural, other {{count} 個篩選器已更改，不同於其他人看到的情況}}",
"database.viewSettings.filterAndSortSaveControl.more": "更多選項",
"database.viewSettings.filterAndSortSaveControl.resetFilters": "重置篩選器",
"database.viewSettings.filterAndSortSaveControl.resetSorts": "重置排序",
"database.viewSettings.filterAndSortSaveControl.sort.caption":
"排序已更改，不同於其他人看到的情況",
"database.viewSettings.filterTab.deleteFilter.modal.confirmButton": "刪除",
"database.viewSettings.filterTab.deleteFilter.modal.prompt":
"確定要刪除該篩選器？",
"database.viewSettings.filterTab.deleteFilterButton.title": "刪除篩選器",
"database.viewSettings.filterTab.removeButton.title": "移除",
"database.viewSettings.filterTab.title": "高級篩選器",
"database.viewSettings.filterTab.turnOnByDefault.title": "默認開啟",
"database.viewSettings.filtersTab.advancedFilterEdit.title": "編輯",
"database.viewSettings.filtersTab.defaultOn.title": "默認啟用",
"database.viewSettings.filtersTab.newFilter.title": "添加篩選器",
"database.viewSettings.filtersTab.title": "篩選器",
"database.viewSettings.formulaOptions.edit": "編輯",
"database.viewSettings.formulaOptions.title": "函數",
"database.viewSettings.groupByTypeTab.dateBy": "按日期",
"database.viewSettings.groupByTypeTab.numberBy": "按數字",
"database.viewSettings.groupByTypeTab.statusBy": "按狀態",
"database.viewSettings.groupByTypeTab.textBy": "按文本",
"database.viewSettings.groupTab.colorColumns": "顏色列",
"database.viewSettings.groupTab.group.title": "群組",
"database.viewSettings.groupTab.groupProperty": "分組方式",
"database.viewSettings.groupTab.hideEmptyGroups": "隱藏空群組",
"database.viewSettings.groupTab.learnMoreButton.title": "了解分組",
"database.viewSettings.groupTab.noGroupingSetMessage": "無",
"database.viewSettings.groupTab.removeButton.title": "移除分組",
"database.viewSettings.groupTab.sort": "排序",
"database.viewSettings.groupTab.sortType.alphabetical": "按字母順序",
"database.viewSettings.groupTab.sortType.ascending": "升序",
"database.viewSettings.groupTab.sortType.chronological": "按時間順序",
"database.viewSettings.groupTab.sortType.descending": "降序",
"database.viewSettings.groupTab.sortType.manual": "手動",
"database.viewSettings.groupTab.sortType.reverseAlphabetical":
  "按反向字母順序",
"database.viewSettings.groupTab.sortType.reverseChronological":
  "按時間倒序",
"database.viewSettings.groupTab.subGroup.title": "子組",
"database.viewSettings.groupTab.subGroupProperty": "子組分組方式",
"database.viewSettings.layoutTab.boardGroupByButton.title": "分組方式",
"database.viewSettings.layoutTab.cardPreviewButtonTitle": "卡片預覽",
"database.viewSettings.layoutTab.firstLoadLimitSetting": "加載限制",
"database.viewSettings.layoutTab.learnMoreButton.title": "了解視圖",
"database.viewSettings.layoutTab.limitPagesTitle": "{limit} 頁",
"database.viewSettings.layoutTab.peekModeTitle": "打開頁面方式",
"database.viewSettings.layoutTab.propertiesButton.propertiesShown.title":
  "{propertiesShown} 已顯示",
"database.viewSettings.layoutTab.showCalendarByProperty.title":
  "日曆顯示方式",
"database.viewSettings.layoutTab.showDatabaseTitle.title": "顯示數據庫標題",
"database.viewSettings.layoutTab.showTimelineByProperty.title":
  "時間軸顯示方式",
"database.viewSettings.layoutTab.tablePropertiesButton.title": "表格屬性",
"database.viewSettings.layoutTab.tableWrapAllColumns": "對所有列應用換行",
"database.viewSettings.layoutTab.timelineEndDate.title": "結束日期",
"database.viewSettings.layoutTab.timelineStartDate.title": "開始日期",
"database.viewSettings.layoutTab.timelineUseSeparateDates.title":
  "單獨的開始和結束日期",
"database.viewSettings.layoutTab.title": "佈局",
"database.viewSettings.mainTab.contentOnlyEditorPill.subtitle":
  "內容編輯者可以編輯頁面，但不能更改視圖和數據庫設置。",
"database.viewSettings.mainTab.contentOnlyEditorPill.title":
  "你是內容編輯者",
"database.viewSettings.mainTab.copyLinkButton.title": "拷貝視圖鏈接",
"database.viewSettings.mainTab.deleteButton.title": "刪除視圖",
"database.viewSettings.mainTab.deleteViewConfirm.text":
  "確定要刪除此視圖？",
"database.viewSettings.mainTab.duplicateButton.title": "創建視圖副本",
"database.viewSettings.mainTab.filterButton.filters.title":
  "{numberOfFilters, plural, other {{numberOfFilters} 個篩選器}}",
"database.viewSettings.mainTab.filterButton.noFilters.title": "無",
"database.viewSettings.mainTab.filterButton.title": "篩選器",
"database.viewSettings.mainTab.groupButton.title": "群組",
"database.viewSettings.mainTab.layoutButton.title": "佈局",
"database.viewSettings.mainTab.lockDatabase.title": "鎖定數據庫",
"database.viewSettings.mainTab.lockViews.title": "鎖定視圖",
"database.viewSettings.mainTab.propertiesButton.propertiesShown.title":
  "已顯示 {propertiesShown}",
"database.viewSettings.mainTab.propertiesButton.title": "屬性",
"database.viewSettings.mainTab.removeViewConfirm.text":
  "確定要刪除此視圖？",
"database.viewSettings.mainTab.sortButton.noSorts.title": "無",
"database.viewSettings.mainTab.sortButton.oneOrMoreSorts.title":
  "{numberOfSorts, plural, other {{numberOfSorts} 個排序}}",
"database.viewSettings.mainTab.sortButton.title": "排序",
"database.viewSettings.mainTab.sourceButton.title": "來源",
"database.viewSettings.mainTab.subGroupButton.title": "子組",
"database.viewSettings.mainTab.title": "查看選項",
"database.viewSettings.mainTab.unlockDatabase.title": "解鎖數據庫",
"database.viewSettings.mainTab.unlockViews.title": "解鎖視圖",
"database.viewSettings.mainTab.viewNamePlaceholder.title": "視圖名稱",
"database.viewSettings.mainTab.viewNameSection.title": "視圖名稱",
"database.viewSettings.numberOptions.color": "顏色",
"database.viewSettings.numberOptions.divideBy": "除以",
"database.viewSettings.numberOptions.numberFormat": "數字格式",
"database.viewSettings.numberOptions.showValue": "顯示編號",
"database.viewSettings.numberPercentOptions.showAs": "顯示為",
"database.viewSettings.propertiesTab.deletedProperties": "已刪除屬性",
"database.viewSettings.propertiesTab.hiddenInBoardTitle": "在看板中隱藏",
"database.viewSettings.propertiesTab.hiddenInCalendarTitle": "在日曆中隱藏",
"database.viewSettings.propertiesTab.hiddenInGalleryTitle": "在畫廊中隱藏",
"database.viewSettings.propertiesTab.hiddenInListTitle": "在列表中隱藏",
"database.viewSettings.propertiesTab.hiddenInTableTitle": "在表格中隱藏",
"database.viewSettings.propertiesTab.hiddenInTimelineTitle":
  "在時間軸中隱藏",
"database.viewSettings.propertiesTab.hideAllProperties": "全部隱藏",
"database.viewSettings.propertiesTab.inputPlaceholder": "搜索屬性…",
"database.viewSettings.propertiesTab.learnMoreButton.title": "了解屬性",
"database.viewSettings.propertiesTab.newProperty": "新建屬性",
"database.viewSettings.propertiesTab.newProperty.defaultNamePrefix": "屬性",
"database.viewSettings.propertiesTab.noResults": "無結果",
"database.viewSettings.propertiesTab.showAllProperties": "全部顯示",
"database.viewSettings.propertiesTab.showTable": "顯示表格",
"database.viewSettings.propertiesTab.shownInBoardTitle": "在看板中顯示",
"database.viewSettings.propertiesTab.shownInCalendarTitle": "在日曆中顯示",
"database.viewSettings.propertiesTab.shownInGalleryTitle": "在畫廊中顯示",
"database.viewSettings.propertiesTab.shownInListTitle": "在列表中顯示",
"database.viewSettings.propertiesTab.shownInTableTitle": "在表格中顯示",
"database.viewSettings.propertiesTab.shownInTimelineTitle":
  "在時間軸中顯示",
"database.viewSettings.propertiesTab.tableProperties": "表格",
"database.viewSettings.propertiesTab.timelineProperties": "時間軸",
"database.viewSettings.propertiesTab.title": "屬性",
"database.viewSettings.propertySelect.inputPlaceholder": "搜索屬性…",
"database.viewSettings.propertySelect.noResultsTitle": "無結果",
"database.viewSettings.propertySelect.noneMessage": "無",
"database.viewSettings.propertySelect.showMoreTitle": "其他 {moreCount} 個",
"database.viewSettings.propertyTab.deleteButton.title": "刪除屬性",
"database.viewSettings.propertyTab.deleteProperty.modal.confirmButton":
  "刪除",
"database.viewSettings.propertyTab.deleteProperty.modal.prompt":
  "確定要刪除該屬性嗎？",
"database.viewSettings.propertyTab.duplicateButton.title": "創建屬性副本",
"database.viewSettings.propertyTab.duplicatePropertyNameError":
  "此數據庫中已經存在一個名為 {propertyName} 的屬性。",
"database.viewSettings.propertyTab.formulas.learnMoreButton.title":
  "了解函數",
"database.viewSettings.propertyTab.hideButton.title": "隱藏",
"database.viewSettings.propertyTab.hideInViewButton.title": "在視圖中隱藏",
"database.viewSettings.propertyTab.propertyName": "屬性名稱",
"database.viewSettings.propertyTab.propertyNameInput.title": "屬性名稱",
"database.viewSettings.propertyTab.propertyType": "類型",
"database.viewSettings.propertyTab.relations.learnMoreButton.title":
  "了解關聯關係",
"database.viewSettings.propertyTab.removeButton.title": "刪除",
"database.viewSettings.propertyTab.rollups.learnMoreButton.title":
  "了解匯總",
"database.viewSettings.propertyTab.showButton.title": "顯示",
"database.viewSettings.propertyTab.showInViewButton.title": "在視圖中顯示",
"database.viewSettings.propertyTab.title": "編輯屬性",
"database.viewSettings.propertyTypeSection.advanced": "高級",
"database.viewSettings.propertyTypeSection.basic": "基本",
"database.viewSettings.propertyTypeSelect.inputPlaceholder":
  "搜索屬性類型…",
"database.viewSettings.propertyTypeSelect.noResultsTitle": "無結果",
"database.viewSettings.rollupOptions.calculate": "計算",
"database.viewSettings.rollupOptions.relationProperty": "關聯關係",
"database.viewSettings.rollupOptions.selectRelation": "選擇",
"database.viewSettings.rollupOptions.selectTargetProperty": "選擇",
"database.viewSettings.rollupOptions.targetProperty": "屬性",
"database.viewSettings.searchCollections.inputPlaceholder":
  "鏈接或創建數據庫…",
"database.viewSettings.searchCollections.noResultsTitle": "無結果",
"database.viewSettings.searchCollections.showMore.title":
  "顯示其他 {showMore} 個",
"database.viewSettings.selectNewRelationSourceTab.title":
  "新建關聯關係目標",
"database.viewSettings.selectOptions.addOption": "添加選項",
"database.viewSettings.selectOptions.addStatus": "添加狀態",
"database.viewSettings.selectOptions.newSelectOption.inputPlaceholder":
  "輸入新選項…",
"database.viewSettings.selectOptions.noOptions": "添加選項",
"database.viewSettings.selectOptions.title": "選項",
"database.viewSettings.selectRelationSourceTab.inputPlaceholder":
  "搜索數據庫",
"database.viewSettings.selectRelationSourceTab.title": "新建關聯關係",
"database.viewSettings.setupRelationTab.addButton.title": "添加關聯關係",
"database.viewSettings.setupRelationTab.autoRelate.title": "自動關聯",
"database.viewSettings.setupRelationTab.autoRelateTooltip":
  "關聯將根據在頁面屬性中找到的鏈接自動填充。",
"database.viewSettings.setupRelationTab.createInverseDisabledWarning.title":
  "無法在目標數據庫上創建反向關聯關係。",
"database.viewSettings.setupRelationTab.createInverseRelation":
  "創建反向關聯關係",
"database.viewSettings.setupRelationTab.deleteInverseDisabledWarning.title":
  "無法刪除目標數據庫上的反向關聯關係。",
"database.viewSettings.setupRelationTab.deleteInverseRelation":
  "刪除反向關聯關係",
"database.viewSettings.setupRelationTab.inverseDisabledWarning.title":
  "無法編輯目標數據庫。",
"database.viewSettings.setupRelationTab.inverseRelationName.placeholder":
  "與目標相關",
"database.viewSettings.setupRelationTab.inverseRelationNameInput.title":
  "{databaseName}上的相關屬性",
"database.viewSettings.setupRelationTab.inverseRelationTooltip":
  "在 {databaseName} 上創建一個屬性，顯示指向當前數據庫的反向鏈接",
"database.viewSettings.setupRelationTab.inverseRelationTooltip.selfRelation":
  "為雙向關係的每個方向創建反向屬性。可用於對父任務/子任務、阻止者/阻止等進行建模。",
"database.viewSettings.setupRelationTab.inverseSelfRelationNameInput.title":
  "相關屬性名稱",
"database.viewSettings.setupRelationTab.relation.reverse":
"在 {databaseName} 中顯示",
"database.viewSettings.setupRelationTab.relation.reverseNoDB":
"在目標中顯示",
"database.viewSettings.setupRelationTab.relationVisualizer.title": "預覽",
"database.viewSettings.setupRelationTab.selfRelation.reverse": "反向",
"database.viewSettings.setupRelationTab.title": "新建關聯關係",
"database.viewSettings.sortTab.deleteAllSorts": "刪除排序",
"database.viewSettings.sortTab.mobile.sort": "排序 {sortNumber}",
"database.viewSettings.sortTab.mobileDeleteButtonTitle": "刪除",
"database.viewSettings.sortTab.newSort": "添加排序",
"database.viewSettings.sortTab.title": "排序",
"database.viewSettings.sourceTab.inputPlaceholder": "鏈接或創建數據庫…",
"database.viewSettings.sourceTab.newCollectionMenuItem.title":
"新建數據庫“{filterText}”",
"database.viewSettings.sourceTab.suggestedSources": "建議的來源",
"database.viewSettings.sourceTab.title": "來源",
"database.viewSettings.statusOptions.showAs": "顯示為",
"database.viewSettings.syncedSourceTab.limit": "限值",
"database.viewSettings.syncedSourceTab.limitRows": "{value}/{limit} 行",
"database.viewSettings.syncedSourceTab.sourceDatabase": "源數據庫",
"database.viewSettings.syncedSourceTab.update": "立即同步",
"database.viewSettings.syncedSourceTab.update.rateLimitError":
"你的數據庫最近已更新。你可以稍後再試，也可以等待自動重新同步。",
"database.viewSettings.timelineByPropertyTab.timelineByEndProperty.title":
"結束日期",
"database.viewSettings.timelineByPropertyTab.timelineStartDate.title":
"開始日期",
"database.viewSettings.viewActionMenu.copyLink": "拷貝視圖鏈接",
"database.viewSettings.viewActionMenu.delete": "刪除",
"database.viewSettings.viewActionMenu.duplicate": "創建副本",
"database.viewSettings.viewActionMenu.editView": "編輯視圖",
"database.viewSettings.viewActionMenu.rename": "重命名",
"database.viewSettings.viewActionMenu.showDatabaseTitle": "顯示數據庫標題",
"databaseActions.removeSortingConfirmationDialog.prompt": "要移除排序嗎？",
"databaseActions.removeSortingConfirmationDialog.removeSortingButton.label":
"移除",
"databaseRelationOperators.selectPlaceholder": "選擇頁面",
"databaseTemplatePickerActions.duplicateTemplateFailedError.message":
"保存模板失敗。",
"databaseViewActions.importFailedError.message": "導入失敗。",
"databaseViewActions.importingCSV.loadingMessage": "導入中",
"databaseViewActions.uploadingCSV.loadingMessage": "上傳中",
"databdatabase.viewSettings.layoutTab.cardSizeButtonTitle": "卡片大小",
"databdatabase.viewSettings.layoutTab.fitImageButtonTitle":
"自適應圖片大小",
"databdatabase.viewSettings.layoutTab.tableWrapCells": "單元格換行",
"dateFormatHelpers.reminderMenuItems.atTimeOfEvent": "在事件發生時",
"dateFormatHelpers.reminderMenuItems.daysBefore":
"{numberOfDays, plural, other {在 {formattedTimeText} 之前的 {numberOfDays} 天}}",
"dateFormatHelpers.reminderMenuItems.hoursBefore":
"{numberOfHours, plural, other {提前 {numberOfHours} 小時}}",
"dateFormatHelpers.reminderMenuItems.minutesBefore":
"{numberOfMinutes, plural, other {提前 {numberOfMinutes} 分鐘}}",
"dateFormatHelpers.reminderMenuItems.monthsBefore":
"{numberOfMonths, plural, other {在 {formattedTimeText} 之前的 {numberOfMonths} 個月}}",
"dateFormatHelpers.reminderMenuItems.none": "無",
"dateFormatHelpers.reminderMenuItems.onTheDayOfEvent":
"在事件當天的 {formattedTimeText}",
"dateFormatHelpers.reminderMenuItems.weeksBefore":
"{numberOfWeeks, plural, other {在 {formattedTimeText} 之前的 {numberOfWeeks} 週}}",
"dateFormatHelpers.reminderMenuItems.yearsBefore":
"{numberOfYears, plural, other {在 {formattedTimeText} 之前的 {numberOfYears} 年}}",
"dateFormatHelpers.text.lastDayOfTheWeek": "上{dayOfTheWeek}",
"dateFormatHelpers.text.nextDayOfTheWeek": "下{dayOfTheWeek}",
"dateFormatHelpers.text.today": "今天",
"dateFormatHelpers.text.tomorrow": "明天",
"dateFormatHelpers.text.yesterday": "昨天",
"dateHelpers.12hourTimeFormat": "12 小時",
"dateHelpers.24hourTimeFormat": "24 小時",
"dateHelpers.dateFormat.dayMonthYear": "日/月/年",
"dateHelpers.dateFormat.explicitMonthDayYear": "年月日",
"dateHelpers.dateFormat.fullDate": "完整日期",
"dateHelpers.dateFormat.monthDayYear": "月/日/年",
"dateHelpers.dateFormat.relative": "相對日期",
"dateHelpers.dateFormat.yearMonthDay": "年/月/日",
"dateInputError.invalidDateError.tooltip": "無效日期",
"dateInputError.invalidDateRangeError.tooltip": "無效範圍",
"dateParserHelpers.at": "時間：",
"dateParserHelpers.day": "工作",
"dateParserHelpers.last": "過去",
"dateParserHelpers.me": "我",
"dateParserHelpers.month": "月",
"dateParserHelpers.next": "下一個",
"dateParserHelpers.now": "現在",
"dateParserHelpers.remind": "提醒符_通知",
"dateParserHelpers.today": "今天",
"dateParserHelpers.today.short": "td",
"dateParserHelpers.tomorrow": "明天",
"dateParserHelpers.tomorrow.short": "tm",
"dateParserHelpers.year": "年",
"dateParserHelpers.yesterday": "昨天",
"dateParserHelpers.yesterday.short": "yd",
"datePropertyMenu.clearButton.label": "清除日期",
"datePropertyMenu.dateFormatDropdownButton.label": "日期格式",
"datePropertyMenu.formatMenu.emptyButton.label": "未填寫",
"datePropertyMenu.invalidDateError.tooltip": "無效日期",
"datePropertyMenu.invalidDateOrTimeRangeError.tooltip": "無效範圍",
"datePropertyMenu.invalidTimeError.tooltip": "無效時間",
"datePropertyMenu.learnMore.helpButton.label": "了解提醒",
"datePropertyMenu.menuItem.endDate.label": "結束日期",
"datePropertyMenu.menuItem.format.label": "日期格式",
"datePropertyMenu.menuItem.formatAndTimezone.label": "日期格式與時區",
"datePropertyMenu.menuItem.includeTime.label": "包含時間",
"datePropertyMenu.menuItem.remind.label": "提醒",
"datePropertyMenu.menuItem.select.title": "選擇時區",
"datePropertyMenu.menuItem.time.label": "時區",
"datePropertyMenu.menuItem.timeFormat.label": "時間格式",
"datePropertyMenu.mobileDate.title": "日期",
"datePropertyMenu.mobileDateFormatModal.title": "日期格式",
"datePropertyMenu.mobileDoneButton.label": "完成",
"datePropertyMenu.mobileDoneReminderButton.label": "完成",
"datePropertyMenu.mobileRemindModal.title": "提醒",
"datePropertyMenu.mobileTimezoneMenu.title": "時區",
"datePropertyMenu.timeFormatMenu.emptyButton.label": "未填寫",
"datePropertyMenu.timeFormatMenu.title": "時間格式",
"datePropertyMenu.timeSearch.placeholder": "搜索時區…",
"datePropertyMenu.timezoneMenu.noResults": "無結果",
"datePropertyMenu.timezoneMenu.select.placeholder": "選擇時區",
"dateRangeMenu.relativeDateToggle.mobileButton.label": "使用相對日期",
"ddatabase.templatePickerItem.mobileDoneRepeatButton.label": "已完成",
"deepnoteBlock.embeds.button.label": "嵌入 Deepnote",
"deepnoteBlock.embeds.caption": "適用於具有公開鏈接的 Deepnote 塊",
"deepnoteBlock.placeholder": "嵌入 Deepnote",
"defaultTeamsInput.defaultTeamList.title": "團隊空間",
"desktop.rightClickMenu.copyEmailAddress": "複製郵箱地址地址",
"desktop.rightClickMenu.copyImage": "複製圖片",
"desktop.rightClickMenu.copyImageAddress": "複製圖片地址",
"desktop.rightClickMenu.copyLink": "複製鏈接",
"desktop.rightClickMenu.openLink": "打開鏈接",
"desktop.searchMenuItem.searchWithGoogle.title": "用谷歌搜索",
"desktop.spellcheckMenuItem.disableSpellcheck.title": "禁用拼寫檢查",
"desktop.spellcheckMenuItem.enableSpellcheck.title": "啟用拼寫檢查",
"desktop.textEditingMenuItem.copyAction.title": "複製",
"desktop.textEditingMenuItem.cutAction.title": "剪切",
"desktop.textEditingMenuItem.pasteAction.title": "粘貼",
"desktopAppUpdater.dialog.dismissButton.label": "好的",
"desktopAppUpdater.moveNotionToApplicationsFolderDialog.dismissButton.label":
  "好的",
"desktopAppUpdater.moveNotionToApplicationsFolderDialog.prompt":
  "請將 Notion 應用程序移至 /Applications 文件夾，以使自動更新程序正常工作。",
"desktopAppUpdater.restartDialog.message":
  "請退出並重新啟動應用程序以安裝更新。",
"desktopLogin.footer.helpCenterLink": "需要幫助？",
"desktopLogin.footer.privacyAndTermsLink": "隱私與條款",
"desktopLogin.loginOrSignupToSyncMessage": "登錄以同步內容。",
"desktopLogin.upgradeWarning.appOutOfDateMessage.mac":
  "你的 Mac 應用已過期。",
"desktopLogin.upgradeWarning.appOutOfDateMessage.windows":
  "你的 Windows 應用已過期。",
"desktopLogin.upgradeWarning.upgradeInstructions.mac":
  "請下載並重新安裝你的 Mac 應用。",
"desktopLogin.upgradeWarning.upgradeInstructions.windows":
  "請下載並重新安裝你的 Windows 應用。",
"desktopLogin.welcomeMessage.mac": "歡迎來到 Notion",
"desktopLogin.welcomeMessage.windows": "歡迎來到 Notion",
"developerIntegration.confirmationModal.cancelLabel": "取消",
"developerIntegration.confirmationModal.confirmLabel": "繼續",
"developerIntegration.confirmationModal.deleteLabel": "刪除",
"developerIntegrationCard.botTagline.placeholder": "內部集成。",
"developerIntegrationCard.dropdown.delete": "刪除此集成",
"developerIntegrationCard.integrationTagline.placeholder": "公共集成。",
"developerIntegrationCard.placeholderCard.label": "創建新集成",
"developerIntegrationCardDropdown.delete.confirmationError":
  "輸入內容與集成名稱不匹配。",
"developerIntegrationCardDropdown.delete.confirmationMessage":
  "此公共集成將停用，並從其已添加到的所有工作區中刪除。要確認，請輸入此集成的名稱。",
"developerIntegrationCardDropdown.delete.confirmationTitle":
  "刪除 {integrationName}？",
"developerIntegrationForm.botToken.label": "內部集成令牌",
"developerIntegrationForm.botToken.secretName": "令牌",
"developerIntegrationForm.botToken.subtitle":
  "僅適用於 <bold>{spaceName}</bold> 工作區。要更改工作區，<developertermslink>創建另一個集成</developertermslink>。",
"developerIntegrationForm.capabilities.caption":
  "當用戶授權你集成時，將會向他們顯示這些請求的功能。有關更多幫助，請參閱<inlinetextlink>開發者文檔</inlinetextlink>。",
"developerIntegrationForm.capabilities.comment_capabilities.title":
  "評論功能",
"developerIntegrationForm.capabilities.content_capabilities.title":
  "內容功能",
"developerIntegrationForm.capabilities.insert_comment.caption":
  "在塊和頁面上創建評論。",
"developerIntegrationForm.capabilities.insert_comment.title": "插入評論",
"developerIntegrationForm.capabilities.insert_content.caption":
"請求創建新內容。",
"developerIntegrationForm.capabilities.insert_content.title": "插入內容",
"developerIntegrationForm.capabilities.label": "功能",
"developerIntegrationForm.capabilities.no_user_capabilities.caption":
"不要請求訪問任何用戶信息。",
"developerIntegrationForm.capabilities.no_user_capabilities.title":
"沒有用戶信息",
"developerIntegrationForm.capabilities.read_comment.caption":
"讀取關於塊和頁面的評論。",
"developerIntegrationForm.capabilities.read_comment.title": "讀取評論",
"developerIntegrationForm.capabilities.read_content.caption":
"請求讀取內容。",
"developerIntegrationForm.capabilities.read_content.title": "讀取內容",
"developerIntegrationForm.capabilities.read_user_with_email.caption":
"請求訪問用戶信息，包括電子郵件地址。",
"developerIntegrationForm.capabilities.read_user_with_email.title":
"讀取用戶信息，包括電子郵件地址",
"developerIntegrationForm.capabilities.read_user_without_email.caption":
"請求訪問用戶信息，不包括電子郵件地址。",
"developerIntegrationForm.capabilities.read_user_without_email.title":
"讀取用戶信息，不包括電子郵件地址",
"developerIntegrationForm.capabilities.update_content.caption":
"請求更新現有內容。",
"developerIntegrationForm.capabilities.update_content.title": "更新內容",
"developerIntegrationForm.capabilities.user_capabilities.title": "用戶功能",
"developerIntegrationForm.clientSecret.confirmationModal.confirm": "繼續",
"developerIntegrationForm.clientSecret.confirmationModal.message":
"此客戶端密鑰將僅顯示一次，無法再次查看。請確保你安全地存儲該密鑰。",
"developerIntegrationForm.clientSecret.confirmationModal.title":
"顯示 OAuth 客戶端密鑰？",
"developerIntegrationForm.developerName.caption":
"公司或組織的名稱。如果不適用，你可以使用自己的姓名。",
"developerIntegrationForm.developerName.label": "公司名稱",
"developerIntegrationForm.developerSpace.label": "關聯的工作區",
"developerIntegrationForm.developerSpace.subtitle":
"選擇一個工作區來安裝集成以進行開發。一旦獲得批准，它將可供所有用戶使用。",
"developerIntegrationForm.domain.caption":
"URL 域使用此集成展開。將在發布給用戶之前驗證域。",
"developerIntegrationForm.domain.developmentDomain.label": "開發域名",
"developerIntegrationForm.domain.label": "展開 Url 域",
"developerIntegrationForm.domain.verifiedDomains.label": "已驗證的域名",
"developerIntegrationForm.domainVerification.caption":
"開發和驗證的域名，以便用此集成展開 URL。域名在發布給用戶之前必須經過驗證。有關更多的驗證過程，請參閱 <textlink>Notion 文檔</textlink>。",
"developerIntegrationForm.email.label": "支持電子郵件",
"developerIntegrationForm.email.subtitle":
"用於鏈接到集成頁面和身份驗證屏幕中的集成支持電子郵件。",
"developerIntegrationForm.external_client_id.label": "OAuth 客戶端 ID",
"developerIntegrationForm.external_client_secret.label": "OAuth 客戶端密鑰",
"developerIntegrationForm.external_deletion_url.caption":
"當用戶刪除你的集成時由 Notion 調用。",
"developerIntegrationForm.external_deletion_url.label":
"已刪除令牌回調 URL（可選）",
"developerIntegrationForm.external_oauth_authorize_url.caption":
"由 Notion 用於通過集成啟動用戶授權。",
"developerIntegrationForm.external_oauth_authorize_url.label":
"OAuth 授權 URL",
"developerIntegrationForm.external_oauth_scopes.caption":
"可選作用域字符串",
"developerIntegrationForm.external_oauth_scopes.label":
"OAuth 作用域（可選）",
"developerIntegrationForm.external_oauth_token_url.caption":
"由 Notion 調用，檢索展開回調 URL 的訪問令牌。",
"developerIntegrationForm.external_oauth_token_url.label": "OAuth 令牌 URL",
"developerIntegrationForm.icon.label": "徽標",
"developerIntegrationForm.icon.subtitle":
"建議使用 512px x 512px 的 PNG 格式。",
"developerIntegrationForm.integrationClientId.label": "OAuth 客戶端 ID",
"developerIntegrationForm.integrationSecret.label": "OAuth 客戶端密鑰",
"developerIntegrationForm.integrationSecret.secretName": "密鑰",
"developerIntegrationForm.jsonEditor.error":
"{value} 屬性包含無效的 JSON。",
"developerIntegrationForm.name.label": "名稱",
"developerIntegrationForm.name.subtitle": "用於向用戶識別你的集成的名稱。",
"developerIntegrationForm.privacy_policy_url.label": "隱私政策",
"developerIntegrationForm.privacy_policy_url.subtitle":
"用於鏈接到集成頁面和身份驗證屏幕中的集成隱私政策。",
"developerIntegrationForm.redirect_uri.label": "重定向 URI",
"developerIntegrationForm.redirect_uri.subtitle":
"在 Notion 的開放授權流程中，用戶在使用 Notion 進行身份驗證後將被重定向到此路徑。此路徑將附加訪問授權代碼，並且必須具有協議。它不能包含 URL 片段、相對路徑或通配符，也不能是公共 IP 地址。它還必須包含在令牌請求中。",
"developerIntegrationForm.redirect_uris.label": "重定向 URI",
"developerIntegrationForm.regexAttributes.caption":
"從正則表達式中提取屬性。允許你在展開完成之前創建佔位符內容。",
"developerIntegrationForm.regexAttributes.label": "展開正則表達式屬性",
"developerIntegrationForm.regexPattern.caption":
"當用戶粘貼與此模式匹配的 URL 時，他們可以選擇使用此集成展開。",
"developerIntegrationForm.regexPattern.label": "展開正則表達式模式",
"developerIntegrationForm.regexRule.name.label": "規則名稱",
"developerIntegrationForm.regexRule.pattern.label": "模式",
"developerIntegrationForm.sampleUrls.caption":
"提供你希望集成展開的示例。對於提供的任何示例，除非所有 URL 都與至少一個正則表達式模式匹配，否則我們將阻止保存。",
"developerIntegrationForm.sampleUrls.label": "示例 URL",
"developerIntegrationForm.sectionCaption.unfurling":
  "訪問<previewlab>鏈接預覽實驗室</previewlab>，規劃展開預覽和響應。",
"developerIntegrationForm.sectionHeader.basic": "基本信息",
"developerIntegrationForm.sectionHeader.external_oauth": "外部授權設置",
"developerIntegrationForm.sectionHeader.links": "組織信息",
"developerIntegrationForm.sectionHeader.oauth": "OAuth 域和 URI",
"developerIntegrationForm.sectionHeader.secrets": "密鑰",
"developerIntegrationForm.sectionHeader.unfurling": "展開域 &amp; 模式",
"developerIntegrationForm.sectionSubtitle.external_oauth":
  "有關 OAuth 2.0 的信息，請參閱<textlink>官方 IETF 規範</textlink>。",
"developerIntegrationForm.space.label": "關聯的工作區",
"developerIntegrationForm.space.subtitle":
  "選擇一個工作區來安裝集成。 你可以稍後升級集成以使用 OAuth。",
"developerIntegrationForm.submissionType.label": "集成類型",
"developerIntegrationForm.tagline.label": "標語",
"developerIntegrationForm.tagline.subtitle": "集成功能的簡短描述。",
"developerIntegrationForm.template_url.label": "Notion模板URL",
"developerIntegrationForm.template_url.subtitle":
  "(可選)必須是可複制的公共Notion頁面的URL。用於在用戶安裝集成功能時將模板複製到用戶的工作空間中。",
"developerIntegrationForm.terms_of_use_url.label": "使用條款",
"developerIntegrationForm.terms_of_use_url.subtitle":
  "用於鏈接到集成頁面和身份驗證屏幕中的集成使用條款。",
"developerIntegrationForm.unfurlUrl.caption":
  "當發生展開操作時，用 POST 請求調用，當刪除展開 uri 預覽或提及時，用 DELETE 請求調用。",
"developerIntegrationForm.unfurlUrl.label": "展開回調 URL",
"developerIntegrationForm.urlMatchingAndPlaceholder.caption":
  "當用戶在你的驗證域上粘貼與此模式匹配的 URL 時，他們可以選擇將其作為預覽展開。任何示例 URL 都會根據提供的模式進行驗證。",
"developerIntegrationForm.urlMatchingAndPlaceholder.label":
  "URL 匹配和占位符",
"developerIntegrationForm.website_url.label": "網站或主頁",
"developerIntegrationForm.website_url.subtitle":
  "用於鏈接到集成頁面和身份驗證屏幕中的集成網站或主頁。",
"developerIntegrationFormHandler.create.developerTerms":
  "提交即表示你同意 Notion 的<developertermslink>開發者條款</developertermslink>。",
"developerIntegrationFormHandler.createIntegration.confirmationModal.confirm":
  "繼續",
"developerIntegrationFormHandler.createIntegration.confirmationModal.message":
  "你將獲得一個 OAuth 密鑰，並且需要實施 OAuth 進行授權。有關詳細信息，請參閱<oauthdocumentationlink>開發人員文檔</oauthdocumentationlink>。",
"developerIntegrationFormHandler.createIntegration.confirmationModal.title":
  "切換到公共集成？",
"developerIntegrationFormHandler.updateIntegration.capabilities.confirmationModal.confirm":
  "更改",
"developerIntegrationFormHandler.updateIntegration.capabilities.confirmationModal.message":
  "集成的任何現有用戶都需要重新進行身份驗證。",
"developerIntegrationFormHandler.updateIntegration.capabilities.confirmationModal.title":
  "更改請求的功能？",
"developerIntegrationFormRegexRule.deletionModal.confirm": "刪除",
"developerIntegrationFormRegexRule.deletionModal.message":
  "在你提交表單之前，不會保存更改。",
"developerIntegrationFormRegexRule.deletionModal.title":
  "是否確實要刪除此正則表達式模式規則？",
"developerIntegrationFormValidator.sampleUrls.sampleUrlDoesNotMatchProvidedDomain.error":
  "URL“{value}”與提供的域名不匹配。",
"developerIntegrationFormValidator.sampleUrls.sampleUrlDoesNotMatchProvidedRegexes.error":
  "URL “{value}” 與提供的正則表達式模式不匹配。",
"developerIntegrationFormValidator.sampleUrls.sampleUrlMissingDomain.error":
  "URL“{value}”缺少域名。",
"developerIntegrationFormValidator.urlMatchingAndPlaceholder.attributes.error":
  "{value} 屬性 JSON 與請求模式不匹配。",
"developerIntegrationFormValidator.urlMatchingAndPlaceholder.regex.error":
  "{value} 正則表達式模式無效。",
"developerIntegrationLab.domain.label": "域",
"developerIntegrationLab.navigateBack.label": "返回集成",
"developerIntegrationLab.regexAttributes.label": "正則表達式屬性",
"developerIntegrationLab.regexConfiguration.label": "管理正則表達式配置",
"developerIntegrationLab.relatedAttributes.empty": "未找到相關屬性。",
"developerIntegrationLab.relatedAttributes.label": "已關聯展開響應有效載荷",
"developerIntegrationLab.rootAttributes.label": "展開響應負載",
"developerIntegrationLab.rootUrl.label": "已將 URL 粘貼到預覽",
"developerIntegrationLab.subtitle.label":
  "規劃預覽 URL 正則表達式模式和 API 響應。",
"developerIntegrationLab.title.label": "鏈接預覽實驗室",
"developerIntegrationNotFound.subtitle.label": "此集成不存在。",
"developerIntegrationNotFound.title.label": "未找到",
"developerIntegrationView.publishedIntegrationWarning":
  "一旦你保存對此頁面的更改，你在 Notion <integrationgallerylink>集成畫廊</integrationgallerylink>中的列表將立即更新。",
"developerIntegrationView.subtitle.label": "查看和編輯集成信息。",
"developerIntegrationsCreate.error.capabilities.invalidContent":
  "必須至少請求一種內容功能。",
"developerIntegrationsCreate.error.capabilities.invalidContent2":
  "必須請求至少一種功能。",
"developerIntegrationsCreateInternal.error.invalidInput":
  "{ fieldName } 無效。",
"developerIntegrationsCreateInternal.subtitle.label":
  "我們將指導你如何設置新的集成。",
"developerIntegrationsCreateInternal.title.label": "創建新集成",
"developerIntegrationsForm.clientIdCopied.tooltip": "ID 已復制",
"developerIntegrationsForm.copiedId.label": "已復制",
    "developerIntegrationsForm.copyClientId.tooltip": "拷貝客戶端 ID",
    "developerIntegrationsForm.copyId.label": "拷貝",
    "developerIntegrationsForm.error.missingRequired":
      "{ fieldName } 為必填項。",
    "developerIntegrationsForm.error.submission":
      "提交集成時出錯。請重試，如果問題仍然存在，請聯繫客服。",
    "developerIntegrationsForm.redirectUri.typePrompt": "輸入重定向 URI…",
    "developerIntegrationsForm.regexPatternRulesInput.addMore.label":
      "添加另一條規則",
    "developerIntegrationsForm.spacePicker.missingSpacesError":
      "你不是任何工作區的管理員。請<linktonotion>創建新工作區</linktonotion>或請求你的工作區管理員更新你的訪問權限。",
    "developerIntegrationsForm.urlsInput.typePrompt": "輸入或粘貼 URL…",
    "developerIntegrationsLayout.backButton.label": "我的集成",
    "developerIntegrationsLayout.document.title": "我的集成｜Notion 開發人員",
    "developerIntegrationsList.addNewButton.label": "新集成",
    "developerIntegrationsList.allFilter.label": "查看全部",
    "developerIntegrationsList.internalFilter.label": "內部",
    "developerIntegrationsList.publicFilter.label": "公共",
    "developerIntegrationsList.subtitle": "創建、審核和編輯開發信息和憑據。",
    "developerIntegrationsList.title": "我的集成",
    "developerIntegrationsList.viewIntegration.buttonText": "查看集成",
    "developerInternalIntegraion.integrationType.bot.caption":
      "僅適用於你作為其管理員的工作區。集成可以自動安裝到這些工作區，不需要審核。",
    "developerInternalIntegraion.integrationType.bot.title": "內部集成",
    "developerInternalIntegraion.integrationType.integration.caption":
      "適用於任何 Notion 用戶。可能需要審核和驗證才能在集成畫廊中列出。",
    "developerInternalIntegraion.integrationType.integration.title": "公共集成",
    "developerInternalIntegration.integrationType.internal.caption":
      "僅適用於你作為其管理員的工作區。集成可以自動安裝到這些工作區，不需要審核。",
    "developerInternalIntegration.integrationType.internal.title": "內部集成",
    "developerInternalIntegration.integrationType.public.caption":
      "適用於任何 Notion 用戶。可能需要審核和驗證才能在集成畫廊中列出。",
    "developerInternalIntegration.integrationType.public.title": "公共集成",
    "developerInternalIntegration.integrationType.unfurling.caption":
      "適用於任何 Notion 用戶。可能需要審核和驗證才能在集成畫廊中列出。",
    "developerInternalIntegration.integrationType.unfurling.title": "展開集成",
    "dialog.acceptButton.label": "確認",
    "dialog.closeButton.label": "關閉",
    "dialog.dismissButton.label": "好的",
    "dialog.genericErrorMessage": "發生意外錯誤",
    "discussion.confirmDialog.discardReply.prompt": "你要放棄這條回复嗎？",
    "discussion.confirmDialog.discardReplyButton.label": "放棄",
    "discussion.mobileReplyMenu.closeButton.label": "關閉",
    "discussion.mobileReplyMenu.title": "評論",
    "discussion.moreMessageTooltip": "更多評論",
    "discussion.showMoreCommentsSidebarButton.label":
      "{moreCommentsNumber, plural, other {還有 {moreCommentsNumber} 條評論}}",
    "discussionInput.defaultPlaceholder.addComment": "添加評論…",
    "discussionInput.insertMention.button.tooltip": "提及人員、頁面或日期",
    "discussionInput.uploadFile.button.tooltip": "附加文件",
    "discussionInput.uploadFile.tooManyFilesErrorMessage":
      "每個評論不能上傳超過 {maxFiles} 個文件。",
    "domainSettings.workspaceCreation.admin_only.caption":
      "只有主工作區的管理員可以創建新工作區。",
    "domainSettings.workspaceCreation.admin_only.captionWithSpaceName":
      "只有此工作區的管理員可以創建新工作區。",
    "domainSettings.workspaceCreation.admins_only.title": "僅限管理員",
    "domainSettings.workspaceCreation.admins_only.titleWithSpaceName":
      "{primaryWorkspaceName} 管理員",
    "domainSettings.workspaceCreation.byline": "自定義可以創建新工作區的用戶。",
    "domainSettings.workspaceCreation.caption": "限制已驗證域名的工作區創建。",
    "domainSettings.workspaceCreation.disabledTooltip":
      "必須至少有一個已驗證的域名才能配置工作區創建設置。",
    "domainSettings.workspaceCreation.title": "工作區創建",
    "domainSettings.workspaceCreation.unrestricted.caption":
      "任何用戶都可以創建新工作區",
    "domainSettings.workspaceCreation.unrestricted.title": "任何人",
    "domainSettings.workspaceCreation.workspaceOwnerOnly.title":
      "僅工作區所有者",
    "domainSettings.workspaceCreation.workspaceOwnersOnly.captionWithSpaceName":
      "只有此工作區的工作區所有者才能創建新工作區。",
    "domainSettings.workspaceCreation.workspaceOwnersOnly.title":
      "僅工作區所有者",
    "domainSettings.workspaceCreation.workspaceOwnersOnly.titleWithSpaceName":
      "{primaryWorkspaceName} 工作區所有者",
    "domainVerificationInput.domainInput.placeholder": "未配置域名",
    "domainVerificationInput.emailDomainsSection.removeDomain.accept":
      "刪除域名",
    "domainVerificationInput.emailDomainsSection.removeDomain.cancel": "取消",
    "domainVerificationInput.emailDomainsSection.removeDomain.message":
      "確定要刪除此域名？",
    "domainVerificationInput.emailDomainsSection.statusToken.invalid": "無效",
    "domainVerificationInput.emailDomainsSection.statusToken.notVerified":
      "未驗證",
    "domainVerificationInput.emailDomainsSection.statusToken.verified":
      "已驗證",
    "domainVerificationInput.myIntegrations.emailDomainsSection.removeDomain.description":
      "刪除此域名（如果已驗證）將阻止集成展開包含此域名的 URL。",
    "domainVerificationInput.securitySAMLSettings.emailDomainsSection.removeDomain.description":
    "如果該域名已經過驗證，則刪除該域名將阻止使用該電子郵件的其他人使用 SSO 登錄。",
  downloadMacIntelLabel: "適用於配備 Intel 處理器的 Mac",
  downloadMacSiliconLabel: "適用於配備 Apple M1 的 Mac",
  "dragHandleButton.clickPrompt.text": "點擊<medium>打開菜單</medium>",
  "dragHandleButton.dragPrompt.text": "拖動<medium>以移動</medium>",
  "duplicateActions.offlineError.message": "請連接網絡後復制此塊。",
  "duplicatePagePopup.buttonMenuItem.logoutButton.label": "登出（ {email} ）",
  "duplicatePagePopup.choooseWorkspaceMobileMenu.title": "選擇工作區",
  "duplicatePagePopup.chooseWorkspace.menuItem.title": "選擇工作區",
  "duplicateRateLimitError.message": "已達到塊複製限制。請稍後再試。",
  "edit.blockDeletedEditStyles.defaultLabel": "已刪除",
  "edit.blockDeletedEditStyles.factoryLabel": "已刪除",
  "edit.bookmarkBlockProperty.label": "書籤",
  "edit.bookmarkBlockPropertyChanged.label": "書籤",
  "edit.calloutBlock.label": "標註",
  "edit.calloutBlockChanged.label": "標註",
  "edit.codeBlockChanged.label": "代碼",
  "edit.codeBlockWithLanguageChanged.label": "代碼 - {codeLanguage}",
  "edit.collectionBlock.untitled": "無標題",
  "edit.deletedPermissionGroup.label": "已刪除的群組",
  "edit.descriptionPropertyChanged.label": "描述",
  "edit.descriptionPropertyCreated.label": "描述",
  "edit.equationBlock.label": "公式",
  "edit.equationBlockChanged.label": "公式",
  "edit.googleDriveFile.label": "谷歌云端硬盤文件",
  "edit.imageBlockChanged.updatedTitle": "更新為",
  "edit.pageBlock.untitled": "無標題",
  "edit.publishToWebPermissionTarget.label": "已發布的鏈接",
  "edit.quoteBlock.label": "引用",
  "edit.quoteBlockChanged.label": "引用",
  "edit.teamMemberPermissionChanged.knownTeam": "{teamName} 的成員",
  "edit.teamMemberPermissionChanged.unknownTeam": "未知團隊空間的成員",
  "edit.teamOwnerPermissionChanged.knownTeam": "{teamName} 的所有者",
  "edit.teamOwnerPermissionChanged.unknownTeam": "未知團隊空間的所有者",
  "edit.templateButtonBlock.label": "模板按鈕",
  "edit.templateButtonBlockChanged.label": "模板按鈕",
  "edit.unknownAuthor.label": "未知作者",
  "edit.unknownAuthorCommentDiff.label": "未知作者",
  "edit.unknownSpacePermissionTarget.label": "未知",
  "editFormatDiff.pageIcon.label": "頁面圖標",
  "editProperty.emptyProperty.label": "空",
  "editProperty.relationEditedProperties.moreCount.label":
    "其他 {leftoverCountNumber} 項",
  "emailActivity.accessRequested.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors}請求訪問{pageName}}}",
  "emailActivity.blockEdited.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors}編輯了{pageTitle}}}",
  "emailActivity.collectionCreated.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors}創建了{collectionTitle}}}",
  "emailActivity.collectionEdited.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors} 編輯了 {collectionTitle}}}",
  "emailActivity.collectionPropertyCreated.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中創建了屬性{collectionPropertyTitle}}}",
  "emailActivity.collectionPropertyDeleted.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中刪除了屬性{collectionPropertyTitle}}}",
  "emailActivity.collectionPropertyEdited.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中編輯了{collectionPropertyTitle}屬性}}",
  "emailActivity.collectionRowCreated.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors}已創建{pageTitle}}}",
  "emailActivity.collectionRowDeleted.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors} 刪除了 {pageTitle}}}",
  "emailActivity.collectionViewCreated.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中創建了視圖{collectionViewTitle}}}",
  "emailActivity.collectionViewDeleted.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中刪除了視圖{collectionViewTitle}}}",
  "emailActivity.collectionViewEdited.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors}在{collectionTitle}中編輯了{collectionViewTitle}視圖}}",
  "emailActivity.commentActivity.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors} 在 {blockName} 留下評論}}",
  "emailActivity.emailEdited.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors}將郵箱地址從 {oldEmail} 更改為 {newEmail}}}",
  "emailActivity.mentionActivity.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors}在{pageName}提及了你}}",
  "emailActivity.pageDeleted.header":
    "{emailActivity.pageDeleted.header, plural, other {{authorOrAuthors} 永久刪除了 {blockTitle}}}",
  "emailActivity.pageLocked.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors} 鎖定了 {blockTitle}}}",
  "emailActivity.pageUnlocked.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors} 解鎖了 {blockTitle}}}",
  "emailActivity.permissionsActivity.header":
    "{numberOfAuthors, plural, other {{authorOrAuthors} 已加入 {pageOrSpaceName}}}",
  "emailActivity.reminderInActivity.header": "{pageTitle} 中的提醒",
  "emailActivity.restorePermissionsForActivity.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors}恢復了{pageOrSpaceName}其繼承的訪問權限}}",
"emailActivity.restrictPermissionsForActivity.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors}恢復了{pageOrSpaceName}其繼承的訪問權限}}",
"emailActivity.topLevelBlockPrivateCreated.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors}已創建私人頁面{pageTitle}}}",
"emailActivity.topLevelBlockPrivateDeleted.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors}已刪除私人頁面{pageTitle}}}",
"emailActivity.topLevelBlockWorkspaceCreated.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors}已創建工作區頁面{pageTitle}}}",
"emailActivity.topLevelBlockWorkspaceDeleted.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors} 刪除了工作區頁面 {pageTitle}}}",
"emailActivity.untitledDatabase.placeholder": "無標題",
"emailActivity.updatedPermissionsForActivity.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors} 已更新 {pageOrSpaceName} 的權限}}",
"emailActivity.userInvitedActivityGroupId.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors} 將你添加到 {groupName} 群組}}",
"emailActivity.userInvitedActivityGroupIdByBot.header":
  "你已被添加到{groupName}群組",
"emailActivity.userInvitedActivityNavigableBlock.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors} 邀請你到 {blockName}}}",
"emailActivity.userInvitedActivityNavigableBlockByBot.header":
  "你已被邀請加入{blockName}",
"emailActivity.userInvitedActivityOtherInvite.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors} 邀請你加入 {spaceName}}}",
"emailActivity.userInvitedActivityOtherInviteByBot.header":
  "你已被邀請加入{spaceName}",
"emailActivitySection.authorPhrase.forMoreThanTwoAuthors.label":
  "{numberOfOtherAuthors, plural, other {<b>{firstAuthor}</b>、<b>{secondAuthor}</b>及其他 {numberOfOtherAuthors} 位}}",
"emailActivitySection.authorPhrase.forNoAuthors.label": "沒有人",
"emailActivitySection.authorPhrase.forOneAuthor.label": "<b>{author}</b>",
"emailActivitySection.authorPhrase.forTwoAuthors.label":
  "<b>{firstAuthor}<b> 和 {secondAuthor}</b></b>",
"emailBase.footer.notionDescription":
  "{notionProduct} 是一個集筆記、項目管理、知識庫和數據庫{br}為一體的全能工作區。",
"emailBase.tooManyNotifications.message": "太多通知？給我們反饋加以改進",
"emailBase.unsubscribeFromEmails.prompt": "取消訂閱",
"emailChangeNotificationEmail.emailChanged.headline":
  "你已更改登錄 Notion 用的郵箱地址",
"emailChangeNotificationEmail.emailChanged.message":
  "現在，你可以使用新的郵箱地址 {emailAddress} 登錄 Notion。",
"emailChangeNotificationEmail.emailChanged.subjectLine":
  "你已更改登錄用的郵箱地址",
"emailChangeNotificationEmail.emailChanged.text":
  "你用於登錄 Notion 的郵箱地址已被更改為 {newEmail}。如果你沒有進行此項更改，請發送電子郵件到 team@makenotion 告知我們。",
"emailChangeNotificationEmail.unintendedChange.message":
  "如果你沒有進行此項更改，請發送電子郵件到 team@makenotion 告知我們。",
"emailChangeSettings.downgradeEducationPlan.warning.message":
  "更改你的電子郵件可能會將你在免費教育版中的工作區降級為基本免費版。你不會丟失任何數據，但需要升級才能重新訪問付費功能。對此有疑問嗎？<sendmessagelink>向支持人員發送消息</sendmessagelink>。",
"emailChangeVerifyEmail.contentsTitle": "更改郵箱地址驗證",
"emailChangeVerifyEmail.copyPasteCode.label":
  "複製並粘貼驗證碼以驗證當前郵箱地址：",
"emailChangeVerifyEmail.didNotChange.message":
  "如果你沒有嘗試更改你的 Notion 帳戶的郵箱地址，則可以放心地忽略此電子郵件。",
"emailChangeVerifyEmail.subjectLine":
  "你的更改郵箱地址驗證碼為 {temporaryPassword}",
"emailDomain.workspaceCreationSetting.auditLog.unrestricted": "無限制",
"emailDomain.workspaceCreationSetting.auditLog.workspaceOwnersOnly":
  "僅限工作區所有者",
"emailEdit.blockDeletedEdit.defaultLabel": "已刪除",
"emailEdit.blockDeletedEdit.factoryLabel": "已刪除",
"emailEdit.bookmarkBlock.label": "書籤",
"emailEdit.bookmarkBlockChanged.label": "書籤",
"emailEdit.bookmarkBlockDeleted.label": "書籤",
"emailEdit.calloutBlock.label": "標註",
"emailEdit.calloutBlockChanged.label": "標註",
"emailEdit.calloutBlockDeleted.label": "標註",
"emailEdit.codeBlockChanged.label": "代碼",
"emailEdit.codeBlockWithLanguageChanged.label": "代碼 - {codeLanguage}",
"emailEdit.collectionBlock.untitled": "無標題",
"emailEdit.deletedPermissionGroup.label": "已刪除的群組",
"emailEdit.descriptionPropertyChanged.label": "描述",
"emailEdit.descriptionPropertyCreated.label": "描述",
"emailEdit.equationBlock.label": "公式",
"emailEdit.equationBlockChanged.label": "公式",
"emailEdit.equationBlockDeleted.label": "公式",
"emailEdit.googleDriveFile.label": "谷歌云端硬盤文件",
"emailEdit.pageBlock.untitled": "無標題",
"emailEdit.publishToWebPermissionTarget.label": "發佈到網絡：",
"emailEdit.quoteBlock.label": "引用",
"emailEdit.quoteBlockChanged.label": "引用",
"emailEdit.quoteBlockDeleted.label": "引用",
"emailEdit.templateButton.label": "模板按鈕",
"emailEdit.templateButtonChanged.label": "模板按鈕",
"emailEdit.templateButtonDeleted.label": "模板按鈕",
"emailEdit.unknownAuthor.label": "未知作者",
"emailEdit.unknownAuthorCommentDiff.label": "未知作者",
"emailEdit.unknownSpacePermissionTarget.label": "未知",
"emailEditFormatDiff.pageIcon.label": "頁面圖標",
"emailEditProperty.emptyProperty.label": "空",
"emailEditProperty.relationEditedProperties.moreCount.label":
  "其他 {leftoverCountNumber} 項",
"emailErrors.emailUnreachable.message":
  "我們無法聯繫到你提供的郵箱地址。請用其他電子郵件重試。",
"emailErrors.incorrectPassword.message": "密碼錯誤。",
"emailErrors.invalidEmailAddress.message": "無效的郵箱地址",
"emailErrors.invalidEmailEntered.message": "請輸入有效郵箱地址。",
"emailErrors.invalidOrExpiredPassword.message":
  "你的登錄碼不正確，請重試。",
"emailErrors.noExistingAccountForEmailAddress.message":
  "此郵箱地址沒有關聯的現有帳戶。",
"emailErrors.userAlreadyExists.message": "使用此郵箱地址的用戶已經存在。",
"embedBlock.actionButton.tooltip.align": "配合",
"embedBlock.actionButton.tooltip.blockActionMenu": "其他操作",
"embedBlock.actionButton.tooltip.caption": "標題",
"embedBlock.actionButton.tooltip.comment": "回帖",
"embedBlock.actionButton.tooltip.download": "下載",
"embedBlock.actionButton.tooltip.original": "原稿",
"embedBlock.captionForLink.button": "標題",
"embedBlock.embedAnything.placeholder":
  "嵌入任何內容（PDF、谷歌文檔、谷歌地圖、Spotify 等）",
"embedBlock.embedButton.label": "嵌入鏈接",
"embedBlock.embedTab.title": "嵌入",
"embedBlock.expandFullScreen.button.label": "展開",
"embedBlock.invalidLinkError.message": "請輸入有效的鏈接。",
"embedBlock.linkPrompt.caption":
  "適用於 PDF、谷歌云端硬盤、谷歌地圖、CodePen 等…",
"embedBlock.originalLink.button": "原稿",
"embedBlock.pastePrompt": "粘貼鏈接，例如 https://…",
"embedBlock.viewOriginalLink.button.label": "查看原始內容",
"embedBlockActions.downloading.label": "正在下載…",
"embedError.audio.notFound": "找不到此音頻。",
"embedError.audio.offline": "連接網絡後查看此音頻",
"embedError.audio.permissionDenied": "沒有權限。",
"embedError.audio.serverError": "無法加載此音頻。",
"embedError.audio.unknown": "無法加載此音頻。",
"embedError.audio.unsupportedContentType":
  "此音頻格式（{extension}）無法在此設備上播放。",
"embedError.embed.notFound": "找不到此嵌入文件。",
"embedError.embed.offline": "連接網絡後查看此嵌入文件",
"embedError.embed.permissionDenied": "沒有權限。",
"embedError.embed.serverError": "無法加載此嵌入文件。",
"embedError.embed.unknown": "無法加載此嵌入文件。",
"embedError.embed.unsupportedContentType":
  "此嵌入格式（{extension}）無法在此設備上播放。",
"embedError.extension.unknown": "未知",
"embedError.file.notFound": "找不到此文件。",
"embedError.file.offline": "連接網絡後查看此文件",
"embedError.file.permissionDenied": "沒有權限。",
"embedError.file.serverError": "無法加載此文件。",
"embedError.file.unknown": "無法加載此文件。",
"embedError.file.unsupportedContentType":
  "此文件格式（{extension}）無法在此設備上播放。",
"embedError.hostnameAndStatusCode": "{hostname}（錯誤 {statusCode}）",
"embedError.image.notFound": "找不到此圖片。",
"embedError.image.offline": "連接網絡後查看此圖片",
"embedError.image.permissionDenied": "沒有權限。",
"embedError.image.serverError": "無法加載此圖片。",
"embedError.image.unknown": "無法加載此圖片。",
"embedError.image.unsupportedContentType":
  "此圖片格式（{extension}）無法在此設備上顯示。",
"embedError.learnMore": "了解更多",
"embedError.video.notFound": "找不到此視頻。",
"embedError.video.offline": "連接網絡後查看此視頻",
"embedError.video.permissionDenied": "沒有權限。",
"embedError.video.serverError": "無法加載此視頻。",
"embedError.video.unknown": "無法加載此視頻。",
"embedError.video.unsupportedContentType":
  "此視頻格式（{extension}）無法在此設備上播放。",
"embedMenu.action.abstract": "嵌入 Abstract 項目",
"embedMenu.action.audio": "嵌入音頻",
"embedMenu.action.codepen": "嵌入 CodePen",
"embedMenu.action.createEmbed": "創建嵌入",
"embedMenu.action.deepnote": "嵌入 Deepnote",
"embedMenu.action.drive": "嵌入谷歌云端硬盤",
"embedMenu.action.excalidraw": "嵌入 Excalidraw",
"embedMenu.action.figma": "嵌入 Figma",
"embedMenu.action.framer": "嵌入 Framer 原型",
"embedMenu.action.gist": "嵌入 GitHub Gist",
"embedMenu.action.hex": "嵌入十六進制",
"embedMenu.action.image": "嵌入圖片",
"embedMenu.action.invision": "嵌入 Invision 項目",
"embedMenu.action.loom": "嵌入 Loom",
"embedMenu.action.maps": "嵌入谷歌地圖",
"embedMenu.action.miro": "嵌入 Miro 畫板",
"embedMenu.action.pdf": "嵌入 PDF",
"embedMenu.action.replit": "嵌入 Repl",
"embedMenu.action.sketch": "嵌入 Sketch 文檔",
"embedMenu.action.tweet": "嵌入推文",
"embedMenu.action.typeform": "嵌入 Typeform",
"embedMenu.action.video": "嵌入視頻",
"embedMenu.action.whimsical": "嵌入 Whimsical 畫板",
"embedMenu.actions.createBookmark.title": "創建書籤",
"embedMenu.actions.createLinkedDatabase.title": "創建鏈接數據庫",
"embedMenu.actions.createLinkedViewOfDatabase.title":
  "創建數據庫的鏈接視圖",
"embedMenu.actions.createTransclusion.title": "粘貼並同步",
"embedMenu.actions.dismiss.title": "取消",
"embedMenu.actions.linkToPage.title": "鏈接到頁面",
"embedMenu.actions.mentionBlock.title": "提及塊",
"embedMenu.actions.mentionPage.title": "提及頁面",
"emojiPicker.noResults.message": "無結果",
"emojiPicker.section.activity": "活動",
"emojiPicker.section.animals": "動物與自然",
"emojiPicker.section.callout": "標註",
"emojiPicker.section.flags": "旗幟",
"emojiPicker.section.food": "食物與飲料",
"emojiPicker.section.objects": "物品",
"emojiPicker.section.people": "人物",
"emojiPicker.section.recent": "最近",
"emojiPicker.section.symbols": "符號",
"emojiPicker.section.travel": "旅行與地點",
emptyDatabaseViewTitle: "{commaSeparatedDatabaseNames} 視圖",
emptyPageTitle: "無標題",
"enhancedSidebarFeatureTour.pinPages.actionButton": "了解更多",
"enhancedSidebarFeatureTour.pinPages.actionText": "了解更多",
"enhancedSidebarFeatureTour.pinPages.primaryText": "在此整理共享頁面",
"enhancedSidebarFeatureTour.pinPages.secondaryText":
  "將經常訪問的頁面固定到側邊欄中",
"enterpriseContactModal.additionalFeedback.placeholder": "想了解什麼？",
"enterpriseContactModal.initial.1000PlusLabel": "超過 1,001 人",
"enterpriseContactModal.initial.101_1000Label": "101-1,000人",
"enterpriseContactModal.initial.1_100Label": "1-100人",
"enterpriseContactModal.initial.caption":
  "我們將與你合作制定你的專屬方案。",
"enterpriseContactModal.initial.companySizeLabel": "公司規模",
"enterpriseContactModal.initial.emailLabel": "工作電子郵件地址",
"enterpriseContactModal.initial.header": "聯繫銷售人員",
"enterpriseContactModal.initial.nameLabel": "你的名字",
"enterpriseContactModal.initial.questionLabel": "你的問題",
"enterpriseContactModal.initial.sendLabel": "發送",
"enterpriseContactModal.selectQuestion.label": "選擇問題",
"enterpriseContactModal.thanks.caption":
  "我們已收到你的詢問，並將很快通過電子郵件與你聯繫。",
"enterpriseContactModal.yourQuestion.title": "你的問題",
"enterpriseContactModalQuestionSelect.question.live_demo": "安排現場演示",
"enterpriseContactModalQuestionSelect.question.other": "其他",
"enterpriseContactModalQuestionSelect.question.plan_help":
  "選擇方案時需要幫助",
"enterpriseContactModalQuestionSelect.question.setup_trial":
  "設置企業試用版",
"enterpriseMembersSettingsPrompt.caption":
  "成員資格管理員可以向工作區和組添加人員以及從中刪除人員。他們無法訪問其他管理員設置。",
"enterpriseMembersSettingsPrompt.cta": "管理成員",
"enterpriseMembersSettingsPrompt.learnMore.button": "了解更多",
"enterpriseMembersSettingsPrompt.title": "用於成員管理的新管理員訪問權限",
"equationBlock.actions.tooltip": "重命名、刪除等…",
"equationBlock.empty.placeholder": "添加一個 TeX 公式",
"equationInput.inputError.label": "無效的公式：",
"equationInput.inputError.learnMore": "了解更多",
"equationInput.submitButton.label": "完成",
"evernoteActions.authenticatingWithEvernote.loadingMessage":
  "Evernote 授權中…",
"evernoteActions.loginPopupModal.title": "印象筆記國際版（Evernote）登錄",
"evernoteImportOption.actionsMenu.connectAnotherAccount": "綁定另一個帳戶",
"evernoteImportOption.actionsMenu.import": "導入",
"evernoteImportOption.actionsMenu.learnMore": "了解更多信息",
"evernoteImportOption.actionsMenu.removeIntegration": "移除",
"evernoteImportOption.caption.getCredit": "導入即可賺取 US$5 的積分",
"evernoteImportOption.search.noResultsPlaceholder": "無筆記本",
"evernoteImportOption.search.placeholder": "搜索筆記本…",
"excalidrawBlock.embeds.button.label": "嵌入 Excalidraw",
"excalidrawBlock.embeds.caption": "適用於 Excalidraw 白板。",
"excalidrawBlock.placeholder": "嵌入 Excalidraw",
"export.csvHeader.email": "郵箱地址",
"export.csvHeader.id": "ID",
"export.csvHeader.name": "名稱",
"export.csvHeader.permissionGroups": "權限群組",
"export.csvHeader.role": "角色",
"export.exportPartitioned.message":
  "由於文件較大，導出仍在進行中。我們將向您發送電子郵件告知進度。",
"export.linkToPage.untitledPagePlaceholder": "無標題",
"export.markdown.untitledDatabase.placeholder": "無標題",
"export.userPermissionsRole.admin.message": "管理員",
"export.userPermissionsRole.guest.message": "訪客",
"export.userPermissionsRole.member.message": "成員",
"export.userPermissionsRole.membershipAdmin.message": "成員資格管理員",
"export.userPermissionsRole.workspaceOwner.message": "工作區所有者",
"exportActions.auditLog.exporting.EmailMessage":
  "當前正在生成你的 CSV 導出文件。生成的 CSV 與實時審計日誌相比有 2 小時的延遲。導出成功後，將向你發送一封包含下載鏈接的電子郵件。",
"exportActions.exportFailedError.message": "導出失敗。",
"exportActions.exporting.loadingMessage": "導出中",
"exportAuditLog.error.internal": "發生內部錯誤。",
"exportAuditLog.error.spaceError":
  "你不是該空間的管理員，或者該空間不存在。",
"exportAuditLog.header.activity": "活動",
"exportAuditLog.header.activityType": "活動類型",
"exportAuditLog.header.audience": "觀眾",
"exportAuditLog.header.city": "城市",
"exportAuditLog.header.country": "國家",
"exportAuditLog.header.dateAndTime": "日期和時間 (UTC)",
"exportAuditLog.header.email": "郵箱地址",
"exportAuditLog.header.ipAddress": "IP 地址",
"exportAuditLog.header.name": "名稱",
"exportAuditLog.header.pageId": "頁面 ID",
"exportAuditLog.header.platform": "平台",
"exportAuditLog.header.state": "州",
"exportAuditLog.header.status": "狀態",
"exportAuditLogCSVEmail.exportCustomerSupport.text":
  "請聯繫你的客服經理或客服尋求更多幫助。",
"exportAuditLogCSVEmail.exportEmailText":
  "你的 Notion Audit Log CSV 導出已完成：{downloadURL}",
"exportAuditLogCSVEmail.exportReady.text":
"你的 Notion Audit Log CSV 導出已完成",
"exportAuditLogCSVEmail.exportSubjectLine":
"你的 Notion Audit Log CSV 導出已完成",
"exportAuditLogCSVEmail.exportWithErrors.text":
"很抱歉，為以下日期生成此報告時出錯：",
"exportCSVEmail.downloadLinkPrompt":
"點擊<downloadlink>此處</downloadlink>下載。該鏈接將在 7 天后過期。",
"exportEmail.downloadLinkPrompt":
"點擊<downloadlink>此處</downloadlink>下載。該鏈接將在 30 天后過期。",
"exportHelpers.unknownFilePlaceholderTitle": "未知文件",
"exportHelpers.untitledPagePlaceholderTitle": "無標題",
"exportModal.cancelButton.label": "取消",
"exportModal.closeButton.label": "關閉",
"exportModal.exportButton.label": "導出",
"exportModal.exportFormat.description": "導出格式",
"exportModal.exportFormatButton.html.label": "HTML",
"exportModal.exportFormatButton.markdownAndCSV.label": "Markdown 和 CSV",
"exportModal.exportFormatButton.pdf.label": "PDF",
"exportModal.flattenExportFiletree.description": "為子頁面創建文件夾",
"exportModal.includeContentTypes.everything.label": "所有內容",
"exportModal.includeContentTypes.no_files.label": "沒有文件或圖像",
"exportModal.includeContents.description": "要包括的內容",
"exportModal.includeDatabases.all.label": "所有內容",
"exportModal.includeDatabases.currentView.label": "當前視圖",
"exportModal.includeDatabases.description": "包括數據庫",
"exportModal.includeSubpages.label": "含子頁面",
"exportModal.offlineMessage.description": "請連接網絡後導出。",
"exportModal.pageFormat.description": "頁面格式",
"exportModal.pageFormatButton.a3.label": "A3",
"exportModal.pageFormatButton.a4.label": "A4",
"exportModal.pageFormatButton.legal.label": "Legal",
"exportModal.pageFormatButton.letter.label": "Letter",
"exportModal.pageFormatButton.tabloid.label": "Tabloid",
"exportModal.pageScale.description": "比例百分比",
"exportModal.pageScale.invalidScaleError":
"比例百分比必須是 10 到 200 之間的數字",
"exportModal.pdfSubpageUpgradeTooltip.caption":
"創建一個 zip 歸檔，其中包含嵌套在當前頁面中的所有子頁面的 PDF 文件。",
"exportModal.pdfSubpageUpgradeTooltip.title":
"升級以在 PDF 導出中包含子頁面",
"exportModal.title": "導出",
"exportModal.workspacePdfUpgradeTooltip.caption":
"創建一個 zip 歸檔，其中包含工作區中的所有頁面的 PDF 文件。",
"exportModal.workspacePdfUpgradeTooltip.title":
"升級以將工作區導出為 PDF 文件",
"exportPreview.error.message": "錯誤",
"exportPreview.loading.message": "載入中…",
"exportProgressDialog.closeButton.label": "關閉",
"exportProgressDialog.emailMessage":
"我們還將向你發送包含下載鏈接的電子郵件。",
"exportProgressDialog.exportStartedMessage": "導出中…",
"exportProgressDialog.exportedPagesMessage":
"{pagesExported, plural, other {已導出 {pagesExported} 頁}}",
"exportProgressEmail.emailText":
"我們正在處理您的數據導出請求。我們目前已導出 {exportedPageCount} 個頁面。導出完成後，我們會向您發送電子郵件通知。",
"exportProgressEmail.subjectLine": "Notion 工作區導出正在進行中",
"exportRenderer.titleOfBlock.untitled": "無標題",
"exportRenderer.titleOfDatabase.untitled": "無標題數據庫",
"exportRenderer.titleOfNewProperty.property": "屬性",
"exportResultEmail.emailText":
"點擊<downloadlink>此處</downloadlink>下載。該鏈接將在 30 天后過期。",
"exportResultEmail.subjectLine": "你的 Notion 導出已準備就緒",
"export_audit_log_rate_limited.message":
"已達到導出審計日誌的速率限制，請在當前導出完成後重試。",
"externalIntegrationAuthActions.authenticationWithIntegration.loadingMessage":
"通過集成進行授權…",
"externalIntegrationAuthActions.loginWithExternalIntegrationPopupModal.title":
"身份驗證",
"externalObjectBlock.errorDropdown.copiedDebuggingInfo": "已復製到剪貼板。",
"externalObjectInstance.bodyAttribute.moreLabel": "更多",
"externalObjectInstance.bodyAttribute.showLessLabel": "顯示更少",
"externalObjectInstanceBlock.editLabel.message": "鏈接預覽",
"externalObjectInstanceBlock.placeholder.message": "嵌入 {value}",
"externalObjectInstanceBlockErrorDropdown.dialogItem.copyDebugData":
"複製調試信息",
"externalObjectInstanceBlockErrorDropdown.dialogItem.reviewGuide":
"查看指南",
"externalObjectInstanceEmbedPreview.expandButton.label": "展開",
"factoryBlock.buttonName.subtitle": "這個按鈕該叫什麼？",
"factoryBlock.buttonName.title": "按鈕名稱",
"factoryBlock.configureButton.label": "配置模板按鈕",
"factoryBlock.configureMenu.closeButton.label": "關閉",
"factoryBlock.configureTemplate.button.label": "配置模板",
"factoryBlock.emptyTemplate.placeholder": "空。拖動塊到這裡…",
"factoryBlock.moreActions.button.label": "更多動作…",
"factoryBlock.newItem.button.label": "添加新項目",
"factoryBlock.newItem.button.placeholder": "添加新項目",
"factoryBlock.templateArea.subtitle.":
"將每次點擊模板按鈕時要復制的塊拖動到這裡。",
"factoryBlock.templateArea.title": "模板",
"faq.addingAndRemovingMembers.answer":
"<p>無論你是按月還是按年結算，如果添加或刪除成員，都可能每月向你的帳戶收費。如果你添加了成員，則將根據每位成員被添加時剩餘的計費周期百分比，按比例向你的帳戶收取費用。如果你刪除了成員，將以同樣的方式返還餘額到你的帳戶。</p>",
"faq.addingAndRemovingMembers.question": "如何添加和刪除成員？",
"faq.advancedPermissions.answer":
"<p>在免費的團隊試用版中，你可以在頁面上將訪問權限設置為“全部權限”、“可以查看”或“可以評論”。“全部權限”是指該人員可以編輯、評論、並與他人分享頁面。</p> <p>在付費團隊版和企業版中，你可以向其他用戶授予“可以編輯”訪問權限，這樣受邀人員可以在頁面上進行編輯和評論，但不能與他人分享。如果你不希望你的內容洩漏到團隊之外，這將特別有用。 </p> <p> <contactsales>聯繫銷售以了解更多</contactsales> </p>",
"faq.advancedPermissions.question": "付費團隊版和企業版提供哪些高級權限？",
"faq.cancelPlan.answer":
  "<p>你的 Notion 訂閱（年付或月付）將自動續訂，直到你取消為止。你可以在電腦左側邊欄“設置與成員”中選擇“定價方案”，然後選擇“降級”來取消訂閱。取消後，你仍可以使用所有付費功能，直到結算週期結束。</p><p><billingandpaymentlink>更多關於賬單和支付的信息在這裡</billingandpaymentlink></p>",
"faq.cancelPlan.question": "如何取消我的付費方案？",
"faq.changePaymentMethod.answer":
  "<p>你可以隨時在賬單設置中更改付款方式。</p>",
"faq.changePaymentMethod.question": "我可以更改付款方式嗎？",
"faq.changePlans.answer":
  "<p>升級或降級方案的工作原理與添加和刪除成員相似。系統會根據更改方案時剩餘的結算週期百分比來向你的帳戶收費或返還餘額。</p>",
"faq.changePlans.question": "更改方案時會發生什麼？",
"faq.deleteBlocks.answer":
  "<p>當然！與你手機或電腦上的存儲限制一樣，如果刪除一些內容，就會釋放更多空間。</p>",
"faq.deleteBlocks.question": "我可以刪除塊來釋放存儲空間嗎？",
"faq.freeVsPersonalAndTeam.answer":
  "<p>最大的區別在於如何與他人合作。</p> <p>免費個人版專為個人使用量身設計，最多可容納 5 位不同的訪客。這些訪客可以是你的朋友、家人、以及其他你邀請到頁面的人。你還可以將頁面公開分享到網絡，並打開評論或編輯權限。在頁面右上方的“分享”菜單中，依次打開“分享到網絡”和“允許編輯”後，任何擁有頁面鏈接的 Notion 用戶便可編輯你的頁面。</p> <p>在個人專業版，你可以邀請無限的訪客進行協作。例如，如果你經營自己的公司，則可以邀請所有客戶為你提供工作的反饋。</p> <p>在團隊版，你可以將固定成員添加到工作區中，以便大家共享和處理內容。團隊版還具有更多的權限和管理員控制，這樣你和你的團隊可以安全地一起工作。更多詳細信息，請參閱定價方案比較表。</p>",
"faq.freeVsPersonalAndTeam.question":
  "免費個人版、個人專業版和團隊版有什麼不同？",
"faq.howToApplyCredit.answer":
  "<p>要使用積分，你必須先升級到任何付費方案。在升級過程中，你可以選擇將部分或全部帳戶積分應用於新方案。</p>",
"faq.howToApplyCredit.question": "如何將積分應用於工作區？",
"faq.howToEarnCredit.answer":
  "<p>你可以通過在不同設備上使用 Notion 並嘗試新功能來賺取積分。請前往“設置與成員”中的“賺取積分”選項卡以了解更多。</p>",
"faq.howToEarnCredit.question": "如何賺取積分？",
"faq.importStorageLimit.answer":
  "<p>通過導入創建的內容不計入工作區的存儲限制。我們希望確保你盡可能順利地開始使用 Notion。</p>",
"faq.importStorageLimit.question":
  "如果我正在使用團隊試用版，從其他應用導入內容會如何影響我的塊存儲限制？",
"faq.mandatoryRefund.answer":
  "<p>如果您居住在歐盟、英國或其他適用強制性退款政策的地區，您甚至可以在72小時後退還您的月度訂閱費。例如，歐盟的客戶可以在14天內(而不是購買後72小時)全額退還每月訂閱費。</p><p>請在應用內查詢退款請求，或發送電子郵件至team@makenotion.com。如果您居住在適用強制性退款政策的地區，請告知我們，我們將竭誠為您提供幫助。</p>",
"faq.mandatoryRefund.question":
  "如果居住在適用強制性退款政策的地區，會發生什麼情況？",
"faq.maximumEarnedCredit.answer":
  "<p>是的，最多可以賺取 {maximumAmountInDollars} 的積分。</p>",
"faq.maximumEarnedCredit.question": "賺取的積分有上限嗎？",
"faq.monthlyAndYearlyBilling.answer":
  "<p>是的！我們提供月付和年付方案，年付更便宜（大概可以省 20％）。舉個例子，當你選擇月付方案，團隊版為每位成員每月 US$10，但如果選擇年付方案，則每位成員每月 US$8。</p>",
"faq.monthlyAndYearlyBilling.question": "有月付和年付的選項嗎？",
"faq.multipleTeams.answer":
  "<p>可以！你可以使用同一個電子郵件地址創建並加入多個團隊。但是，每一個工作區擁有它自己的定價方案，需要單獨升級。</p>",
"faq.multipleTeams.question": "我可以在 Notion 上隸屬於多個團隊嗎？",
"faq.overGuestLimitInFreePlan.answer":
  "<p>你可以升級到沒有訪客限制的個人專業版。如果你經常和同一組人一起協作，則可升級為團隊版。你還可以在“設置與成員”中查看和移除不活動的訪客。</p>",
"faq.overGuestLimitInFreePlan.question":
  "當我超出個人版的訪客限制時會發生什麼？",
"faq.overStorageLimitInFreePlan.answer":
  "<p>你仍然可以像往常一樣讀取、編輯和組織現有內容塊，但無法添加新的內容塊。</p><p> 你可以刪除現有內容塊以釋放存儲空間。</p>",
"faq.overStorageLimitInFreePlan.question":
  "當我超出團隊試用版的塊存儲限制時會發生什麼？",
"faq.paymentFailure.answer":
  "<p>付款失敗後，系統會通過郵件通知你。在賬單逾期的第一個月，系統會最多重試 4 次付款。此後，如果付款失敗，你將被降級為免費版。</p>",
"faq.paymentFailure.question":
  "如果付款失敗會發生什麼？比如我的信用卡過期了？",
"faq.paymentProcessor.answer":
  "<p>我們使用 Stripe 處理你的付款。Stripe 是 Twitter、Pinterest 和 Lyft 等產品的支付提供商。我們不會直接處理你的信用卡信息。</p>",
"faq.paymentProcessor.question": "我的付款是如何處理的？",
"faq.personalPricing.answer":
  "<p>如果你將工作區升級到個人專業版，將需支付固定費用（每月 US$5 或每年 US$48）。</p><p>訪客完全免費，但一次只能添加到一個頁面。</p>",
"faq.personalPricing.question": "如何計算個人專業版的定價？",
"faq.refund.answer":
  "<p>我們的退款政策很簡單。如果你認為你在網頁或應用內訂閱 Notion 付費方案時出了差錯，請在應用內聯繫我們或發送電子郵件到 team@makenotion.com。如果你在訂閱月付方案的 72 小時內或訂閱年付方案的 30 天內降級，我們很樂意全額退款（不按比例）。</p><p>如果你出於任何原因對 Notion 不滿意，請通過 team@makenotion.com 告訴我們──我們很樂意聽取你的反饋，合作共創最好的使用體驗。</p>",
"faq.refund.question": "退款如何運作？",
"faq.runOutOfCredit.answer":
  "<p>如果積分用完了，則會通過你提供的付款方式向你的帳戶收取費用。</p>",
"faq.runOutOfCredit.question": "如果我的積分用完了會發生什麼？",
"faq.serviceLevelAgreement.answer":
  "<p>我們不提供標準 SLA。對於成員超過 100 人的團隊，我們可以提供定制 SLA。</p><p><contactsales>請聯繫銷售以了解更多</contactsales></p>",
"faq.serviceLevelAgreement.question": "你們有服務級別協議 (SLA) 嗎？",
"faq.studentDiscount.answer":
  "<p>個人專業版對學生和教育工作者是免費的。如果你是學生或教育工作者，就可和無限訪客進行協作、使用版本歷史記錄等專業版功能。只需使用你的學校郵箱地址進行註冊，即可獲得這些功能。</p><p>如果你已經升級到個人專業版，請將與你的帳戶關聯的郵箱地址更改為學校的郵箱地址，以免費獲得個人專業版。如果你之前已經在使用我們的舊版免費教育版，則會自動升級到個人專業版。</p><p><helpcenterlink>請前往幫助中心了解更多。</helpcenterlink></p>",
"faq.studentDiscount.question": "你們給學生提供任何優惠嗎？",
"faq.teamAdminTools.answer":
  "<p>在免費的團隊試用版中，工作區中的每位成員都是管理員。這意味著任何人都可以更改團隊設置並邀請其他人進入工作區。</p><p>如果你只想讓少數人具有管理員權限，我們建議你升級到完整的團隊版。它附帶的工具可以讓你區分管理員和普通成員。成員無法編輯帳單信息或安全選項，也無法在工作區之外共享內容。</p>",
"faq.teamAdminTools.question": "團隊版隨附哪些管理員工具？",
"faq.teamPricing.answer":
  "<p>如果你將工作區升級到團隊版，則會向每位成員將收取費用（每人每月 US$10 或每年 US$96）。例如，如果你使用月付方案，並有 5 位成員，則每月收取 US$50。</p><p>訪客完全免費，但他們只能訪問被邀請的特定頁面。也就是說，訪客不能看到側邊欄中的“工作區”分區內容。</p>",
"faq.teamPricing.question": "如何計算團隊版的定價？",
"faq.teamTrial.answer":
"<p>當系統在註冊過程中詢問你如何設置 Notion 時，選擇“團隊”，你將自動加入團隊試用版。你將可以使用付費團隊版的大多數功能，但塊存儲限制為 1,000 個。如果你的團隊想要添加更多內容，請升級到完整的團隊版。上文有詳細說明。</p>",
"faq.teamTrial.question": "如何免費試用團隊版？",
"faq.useNotionForFree.answer":
"<p>的確如此！Notion 可以無限期免費使用。</p><p>個人版供個人完全免費使用。團隊版有 1,000 個塊可供免費試用，足夠你的團隊在升級前試用 Notion。</p>",
"faq.useNotionForFree.question": "我可以免費使用 Notion 嗎？",
"faq.whatIsABlock.answer":
"<p>塊是你添加到頁面的任何單個內容，如文本段落、待辦事項、圖片、代碼塊、嵌入文件等。一個頁面是由這些塊構建的。</p>",
"faq.whatIsABlock.question": "什麼是塊？",
"faq.whyBillingInformation.answer":
"<p>即使你使用了足夠的積分來支付第一筆帳單，我們仍需要你的付款信息，因為在將來積分用盡時，可保障你的帳戶正常續費。</p>",
"faq.whyBillingInformation.question":
"如果我有足夠積分來支付 Notion，為什麼還需要我的付款信息？",
"faqList.moreQuestionsTextHelpCenter":
"還有其他問題嗎？在我們的<messagelink>幫助中心</messagelink>了解更多信息。",
"faqList.moreQuestionsTextIntercom":
"還有其他問題嗎？<messagelink>給我們發送消息</messagelink>",
"figmaBlock.caption": "適用於啟用了公共訪問的 Figma 鏈接",
"figmaBlock.placeholder": "嵌入 Figma",
"fileBlock.embedButton.label": "嵌入鏈接",
"fileBlock.fileTab.title": "文件",
"fileBlock.invalidLinkError.message": "請輸入有效的鏈接。",
"fileBlock.linkPrompt.caption":
"適用於 PDF、谷歌云端硬盤、谷歌地圖、CodePen 等…",
"fileBlock.linkPrompt.placeholder": "粘貼文件鏈接…",
"fileBlock.uploadOrEmbed.placeholder": "上傳或嵌入文件",
"filePropertyMenu.header": "文件",
"filePropertyMenu.uploadFileFailedError.message": "上傳失敗。",
"fileUploadErrors.freePlanFileSizeExceeded.message":
"你的文件超過免費版的 5MB 限制。",
"filtersIntroTooltip.subtitle":
"在共享視圖中，在你保存之前，篩選器和排序不會影響其他人。",
"filtersIntroTooltip.title": "保存篩選器和排序",
"flattenedAppTemplates.tasks.taskByProjectViewName": "特定於項目的任務",
"forkPageActions.loadingStateDisplayText":
"正在將“{blockTitle}”的副本保存到“{spaceTitle}”…",
"forkPageActions.untitledBlockRecordTitle": "無標題",
"forkPageActions.untitledSpaceRecordTitle": "無標題",
"forkPageScreen.chooseWorkspace.message": "選擇工作區",
"formHandler.submitButton.create.label": "提交",
"formHandler.submitButton.create.update": "保存更改",
"formInputIcon.uploadButton.label": "上傳圖片",
"formSecretShow.copied.label": "已復制",
"formSecretShow.copySecret.label": "拷貝",
"formSecretShow.copySecret.tooltip": "拷貝 {secretName}",
"formSecretShow.refreshSecret.label": "刷新",
"formSecretShow.secretCopied.tooltip": "{secretName} 已復制",
"formSecretShow.showSecret.label": "顯示",
"formatMessage.error.undefinedResultType": "未定義",
"formulaHelpers.error.branchCondition":
"條件的每個分支必須屬於同一類型： {input}",
"formulaHelpers.error.circularDependency":
"屬性 {propertySchemaName} 創建了循環依賴項。",
"formulaHelpers.error.illegalConstant": "非法常量： {value}",
"formulaHelpers.error.invalidPropertyReference": "無效的屬性引用： {input}",
"formulaHelpers.error.invalidSyntax": "無效的語法： {input}",
"formulaHelpers.error.noSignatureForFunction":
"未找到函數的簽名： {functionName}",
"formulaHelpers.error.propertyNotFound": "未找到屬性：prop({input})",
"formulaHelpers.error.tooFewArguments": "函數 {functionName} 中的參數太少",
"formulaHelpers.error.tooFewArgumentsVariadic":
"函數 {functionName} 中的參數太少",
"formulaHelpers.error.tooManyArguments": "函數 {functionName} 中的參數過多",
"formulaHelpers.error.tooManyArgumentsInProp": "傳遞給 prop() 的參數過多。",
"formulaHelpers.error.typeMismatch":
"類型不匹配 {nodeString} 不是 {localizedPropertyTypeDisplayName}。",
"formulaHelpers.error.undefinedConstant": "未定義的常量： {constantName}",
"formulaHelpers.error.undefinedFunction": "未定義的函數： {functionName}",
"formulaHelpers.error.undefinedOperator": "未定義的運算符： {operator}",
"formulaPropertyMenu.learnMore.button.label": "了解函數",
"frame.importingMessage": "導入中…",
"framerBlock.embedFramer.button.label": "嵌入 Framer",
"framerBlock.linkInput.caption": "適用於 Framer 原型",
"framerBlock.placeholder": "嵌入 Framer 原型",
"frontPricingCard.businessPlan.context.allBusinessPlanFeatures":
"團隊版的全部功能，以及",
"frontPricingCard.businessPlan.oneliner": "適用於多個或大型團隊；小型公司",
"frontPricingCard.businessPlan.title": "商業版",
"frontPricingCard.comingSoonBadge": "即將推出",
"frontPricingCard.educationPlan.attribute.contentApi.v2": "API",
"frontPricingCard.educationPlan.attribute.shareWithGuests": "無限訪客",
"frontPricingCard.educationPlan.attribute.unlimitedFileUploads":
"無限文件上傳",
"frontPricingCard.educationPlan.attribute.versionHistory": "版本歷史",
"frontPricingCard.educationPlan.context.allPersonalPlanFeatures":
"個人版的全部功能，以及",
"frontPricingCard.enterprisePlan.attribute.advancedSecurity":
"高級安全控制",
"frontPricingCard.enterprisePlan.attribute.auditLog": "審計日誌",
"frontPricingCard.enterprisePlan.attribute.customContractInvoicing":
"定制合同",
"frontPricingCard.enterprisePlan.attribute.dedicatedManager":
"專屬客戶成功經理（超過 100 個席位）",
"frontPricingCard.enterprisePlan.attribute.scimApi": "用戶管理分配（SCIM）",
"frontPricingCard.enterprisePlan.attribute.sso": "SAML 單點登錄",
"frontPricingCard.enterprisePlan.attribute.unlimitedVersionHistory":
"無限的版本歷史",
"frontPricingCard.enterprisePlan.context.allBusinessPlanFeatures":
"商業版的全部功能，以及",
"frontPricingCard.enterprisePlan.context.allTeamPlanFeatures":
"團隊版的全部功能，以及",
"frontPricingCard.enterprisePlan.oneliner": "運轉公司所需的控制和支持。",
"frontPricingCard.enterprisePlan.title": "企業版",
"frontPricingCard.evernotePremiumComparison.attribute.notes": "筆記",
"frontPricingCard.evernotePremiumComparison.attribute.reminders": "提醒",
"frontPricingCard.evernotePremiumComparison.attribute.tags": "標籤",
"frontPricingCard.evernotePremiumComparison.attribute.twoLevelHierarchy":
"兩級層級",
"frontPricingCard.evernotePremiumComparison.attribute.webClipper":
"網頁剪裁器",
"frontPricingCard.evernotePremiumComparison.oneliner": "基本筆記",
"frontPricingCard.evernotePremiumComparison.title": "Evernote 付費版",
"frontPricingCard.freePlan.attribute.shareWithGuests": "與 5 位訪客分享",
"frontPricingCard.freePlan.attribute.syncAcrossDevices": "跨設備同步",
"frontPricingCard.freePlan.attribute.unlimitedBlocks": "無限頁面和塊",
"frontPricingCard.freePlan.context.freeForIndividuals": "個人使用免費",
"frontPricingCard.personalFreePlan.oneliner": "整理你生活的每一個角落。",
"frontPricingCard.personalFreePlan.title": "個人版",
"frontPricingCard.personalPlan.attribute.limitedVersionHistory":
"30 天版本歷史",
"frontPricingCard.personalPlan.context.allPersonalPlanFeatures":
"個人版的全部功能，以及",
"frontPricingCard.personalPlanComparison.attribute.databases": "數據庫",
"frontPricingCard.personalPlanComparison.attribute.infiniteHierarchy":
"無限層級",
"frontPricingCard.personalPlanComparison.attribute.markdownSupport":
"Markdown 支持",
"frontPricingCard.personalPlanComparison.attribute.realTimeCollaboration":
"實時協作",
"frontPricingCard.personalPlanComparison.oneliner":
"整理你生活的每一個角落。",
"frontPricingCard.personalPlanComparison.title": "Notion 個人版",
"frontPricingCard.personalProPlan.oneliner":
"適用於想要執行更多操作的高級用戶。",
"frontPricingCard.personalProPlan.title": "個人專業版",
"frontPricingCard.startupPlan.context.allProPlanFeatures":
"專業版的全部功能，以及",
"frontPricingCard.teamPlan.attribute.adminTools": "管理員工具",
"frontPricingCard.teamPlan.attribute.advancedPermissions": "高級權限",
"frontPricingCard.teamPlan.attribute.collaborativeWorkspace": "協作工作區",
"frontPricingCard.teamPlan.attribute.sharingPermissions": "共享權限",
"frontPricingCard.teamPlan.attribute.unlimitedMembers": "無限團隊成員",
"frontPricingCard.teamPlan.context.allProPlanFeatures":
"專業版的全部功能，以及",
"frontPricingCard.teamPlan.oneliner": "讓團隊在同個地方協作。",
"frontPricingCard.teamPlan.title": "團隊版",
"frontSignupComponent.emailInput.educationEmailPlaceholder":
"輸入你的學校郵箱地址...",
"frontSignupComponent.emailInput.genericEmailPlaceholder":
"輸入你的郵箱地址...",
"frontSignupComponent.emailInput.teamEmailPlaceholder":
"輸入你的工作郵箱地址...",
"frontSignupComponent.submitButton.label": "註冊",
"fullPageError.accessNotAllowed.message":
"你無權訪問{workspaceName}。請與管理員聯繫以將你添加為成員。",
"fullPageError.backToMyContentButton.label": "回到我的內容",
"fullPageError.canRequestAccess.message":
"如果有人批准你的請求，你則可以訪問此頁面。",
"fullPageError.canRequestAccess.title": "無權訪問此頁面。",
"fullPageError.cannotRequestAccess.message":
"此頁面不存在，或者你沒有訪問此頁面的權限。",
"fullPageError.contentDoesNotExist.message":
"遇到麻煩？<helplink>向支持人員發送消息</helplink>",
"fullPageError.contentDoesNotExist.title": "此內容不存在",
"fullPageError.createOrJoinWorkspaceButton.label": "創建或加入工作區",
"fullPageError.downloadMobileAppButton.label": "獲取移動應用",
"fullPageError.loggedOut.message": "歡迎訪問 Notion 上的{workspaceName}。",
"fullPageError.noAccess.title": "未找到頁面",
"fullPageError.offlineError.message":
"哎呀，你好像離線了。請連接網絡查看此頁面。",
"fullPageError.openInMobileAppButton.label": "在移動應用中開啟",
"fullPageError.pageIsPrivate.message":
"這是{workspaceName}的私有頁面。{hasOwner, select, true {請聯繫{ownerName}（ {ownerEmail} ）邀請你進行協作。}other{請與頁面所有者聯繫以邀請你進行協作。}}",
"fullPageError.publicDomainInterstitial.title":
"跟踪以下鏈接繼續訪問外部站點",
"fullPageError.reportAProblem.label": "報告問題",
"fullPageError.requestAccessButton.label": "申請訪問權限",
"fullPageError.requestAccessButton.requested": "已申請訪問權限",
"fullPageError.returnToOnboardingButton.label": "回到引導流程",
"fullPageError.sendMessageButton.label": "向支持人員發送消息",
"fullPageError.sendMessageForHelp.message":
"<sendmessagelink>向支持人員發送消息</sendmessagelink>以尋求幫助。",
"fullPageError.somethingWrong.label": "出了什麼問題？",
"fullPageError.termsAndPrivacyButton.label": "條款",
"fullPageError.unsafePageError.message":
"此頁面可能包含垃圾郵件、網絡釣魚、非法或不當內容。如果你從未知來源收到此鏈接，建議你關閉此標籤頁。<proceedanywaylink>仍然繼續</proceedanywaylink>",
"fullPageError.unsafePageError.title": "此頁面被標記為不安全",
"fullPageError.whatIsNotionButton.label": "什麼是 Notion？",
"fullPageError.wrongAccount.message":
"你可能需要使用其他郵箱地址<loginlink>登錄</loginlink> ，或與頁面所有者聯繫以請求訪問。 ",
"fullPageError.wrongAccountRequestAccess.message":
  "你可能需要使用其他郵箱地址<loginlink>登錄</loginlink>。",
"fullPageError.wrongAccountRequestAccessSwitchAccount.message":
  "你可能需要<switchlink>切換帳戶</switchlink>或使用其他郵箱地址<loginlink>登錄</loginlink>。",
"fullPageError.wrongLoggedInUserError.message":
  "你當前以 {currentlyLoggedInUser} 登錄",
"fullscreenRenderer.closeButton.label": "關閉",
"genericDialogModal.cancelButton.label": "取消",
"genericErrors.genericErrorMessage": "出了些問題。",
"gistBlock.embedButton.label": "嵌入 Gist",
"gistBlock.linkInput.caption": "適用於 Github 上的 Gist 鏈接",
"gistBlock.placeholder": "嵌入 Gist",
"githubGistRenderer.errorLoading.message": "載入 Gist 時出錯",
"githubGistRenderer.loading.message": "載入 Gist 中…",
"googleAuthPromptModal.connectToGoogleButton.label": "綁定谷歌帳戶",
"googleAuthPromptModal.mobileUseDesktopPrompt.errorMessage":
  "請在電腦上的 Notion 綁定新帳戶。",
"googleAuthPromptModal.noAccessFile.errorMessage":
  "Notion 無法訪問你要嵌入的谷歌云端硬盤文件。",
"googleAuthPromptModal.seeConnectedAccountsButton.label":
  "查看我的綁定帳戶",
"googleDriveActions.authenticatingWithGoogle.loadingMessage": "谷歌授權中…",
"googleDriveActions.loginWithGoogleModal.title": "谷歌登錄",
"googleDriveBlock.embedTab.caption": "適用於谷歌云端硬盤中的任何文件",
"googleDriveBlock.embedTab.embedButton.label": "嵌入谷歌云端硬盤中的文件",
"googleDriveBlock.legacy.placeholder": "嵌入谷歌云端硬盤的文件",
"googleDriveBlock.legacyLinkInput.caption": "適用於谷歌文檔、谷歌表格等。",
"googleDriveBlock.mediaMenuActions.embedTab.title": "嵌入",
"googleDriveBlock.mediaPicker.googleDriveTab.title": "瀏覽谷歌云端硬盤",
"googleDriveBlock.pageDeleted.caption": "此文件位於垃圾箱中。",
"googleDriveBlock.pageDescription":
  "{hasUserName, select, true {由{userName}} other {}}上次修改於{hasLastModifiedTime, select, true {{lastModifiedTime}} other {}}",
"googleDriveBlock.placeholder.authenticated":
  "選擇要從谷歌云端硬盤嵌入的文件",
"googleDriveBlock.placeholder.notAuthenticated":
  "將 Google 雲端硬盤連接到 Notion 以嵌入文件",
"googleDriveHelpers.untitledFilePlaceholder": "無標題",
"googleErrors.googleDriveTokenError":
  "來自谷歌云端硬盤的錯誤：{errorMessage}",
"googleMapsBlock.embed.caption": "適用於谷歌地圖上的任何地點",
"googleMapsBlock.embedButton.label": "嵌入地圖",
"googleMapsBlock.placeholder": "嵌入谷歌地圖",
"grantAccessActivityAction.accessGranted.title": "由{grantedBy}批准",
"grantAccessActivityAction.alreadyHasAccess.label":
  "{requestingUser}已具有訪問權限。",
"grantAccessActivityAction.changePermissionButton.label": "更改",
"grantAccessActivityAction.grantAccessButton.label": "授予訪問權限",
"grantAccessActivityAction.ignoreButton.label": "忽略",
"guestPagesButton.label":
  "{numberOfAccessiblePages, plural, other {{numberOfAccessiblePages} 個頁面}}",
"guestPagesPopup.addAdminPermissionButton.label": "轉為管理員",
"guestPagesPopup.addAdminPermissionButton.tooltip":
  "這位訪客將成為此工作區的管理員。",
"guestPagesPopup.addMemberPermission.updatingMessage": "更新中…",
"guestPagesPopup.addMemberPermissionButton.label": "轉為成員",
"guestPagesPopup.addMemberPermissionButton.tooltip":
  "這位訪客將成為此工作區的成員。",
"guestPagesPopup.guestAccessiblePagesCaption": "這位訪客可以訪問這些頁面",
"guestPagesPopup.permissionsForUserGuest.label": "訪客",
"guestPagesPopup.privatePagePlaceholder": "私人頁面",
"guestPagesPopup.removeGuest.updatingMessage": "更新中…",
"guestPagesPopup.removeGuestButton.label": "移除",
"guestPagesPopup.removeGuestButton.tooltip":
  "這位訪客將從此工作區的所有頁面中移除。",
"guestPagesPopup.removeGuestModal.confirmationMessage":
  "確定要移除此人？他將無法訪問所有已分享的頁面。",
"guestPagesPopup.removeGuestModal.removeButton.label": "移除",
"header1Block.placeholder": "標題 1",
"helpButton.contactSupport.menuItem": "聯繫客服",
"helpButton.desktopHelpButton.tooltip": "幫助、反饋及快捷鍵",
"helpButton.giveFeedback.menuItem": "提供反饋",
"helpButton.helpSupportGuide.menuItem": "幫助和文檔",
"helpButton.joinUs.menuItem": "加入我們",
"helpButton.keyboardShortcuts.menuItem": "鍵盤快捷鍵",
"helpButton.mobile.rightActionButton.done": "完成",
"helpButton.mobile.title": "幫助與反饋",
"helpButton.mobileHelpFeedbackButton.label": "幫助與反饋",
"helpButton.mobileTwitter.menuItem": "Twitter – @{notionHandle}",
"helpButton.onboardingChecklist.menuItem": "Notion 基礎知識",
"helpButton.salesChat.menuItem": "聯繫銷售人員",
"helpButton.sendMessage.menuItem": "向支持人員發送消息",
"helpButton.sendUsAMessage.tooltip":
  "我們使用 Intercom 發送消息。{br}請確保它未被你的瀏覽器阻止。",
"helpButton.sendUsAMessage.tooltip.intercom.disabled":
  "要啟用消息傳遞，請確保你已接受功能性 cookie。{br}你可以在 Notion 設置中更新你的 cookie。{br}你也可以發送電子郵件至 team@makenotion.com 與我們聯繫。",
"helpButton.showTeamspacesEductation": "了解團隊空間",
"helpButton.survey.menuItem": "參與問卷調查",
"helpButton.twitter.menuItem": "Twitter – @{notionHandle}",
"helpButton.whatsNew.menuItem": "新消息",
"hexBlock.embeds.button.label": "嵌入十六進制",
"hexBlock.embeds.caption": "適用於具有公開訪問權限的十六進制單元格鏈接。",
"hexBlock.placeholder": "嵌入十六進制",
"highlightSelectionButton.backgroundSection.label": "背景",
"highlightSelectionButton.colorSection.label": "顏色",
"highlightSelectionButton.defaultBackground.label": "默認背景",
"highlightSelectionButton.lastUsedSection.label": "上次使用",
"highlightSelectionButton.mobileColorIcon.label": "顏色",
"highlightSelectionButton.mobileTextColor.label": "文本顏色",
"highlightSelectionButton.textColor.tooltip": "文本顏色",
"historyModal.confirmDialog.description": "確定恢復到此版本？",
"historyModal.confirmDialog.restoreButton.label": "恢復",
"historyModal.desktopModal.cancelButton.label": "取消",
"historyModal.desktopModal.errorMessage": "出了些問題",
"historyModal.desktopModal.learnMoreButton.label": "了解頁面歷史記錄",
"historyModal.desktopModal.restoreButton.label": "恢復版本",
"historyModal.desktopModal.sidebar.upgradeMessage.tooltip":
  "升級以恢復快照。",
"historyModal.errorMessage": "出了些問題",
"historyModal.mobileHistoryMenu.title": "歷史",
"historyModal.mobileSnapshotMenu.restoreButton.label": "恢復",
"historyModal.noSnapshotsYet.message":
  "此頁面尚無任何快照。生成第一個快照最多需要 10 分鐘。",
"historyModal.snapshotsMenuList.upgrade.tooltip": "升級以查看此快照。",
"historyModal.unavailableForFreeWorkspaces.messagePart1":
  "版本歷史不適用於免費工作區。",
"historyModal.unavailableForFreeWorkspaces.messagePart2":
  "請升級到我們的付費方案。",
"historyModal.upgradeForHistoryButton.label": "升級",
"historyModal.upgradeToEnterprise.message":
  "請升級到企業版以訪問 30 天以上的版本歷史。",
"historyModalActions.restoringPreviousVersion.loadingMessage": "恢復中…",
"hoverPreviewOverlay.action.turnPreviewIntoBlock": "轉換成塊",
"hoverPreviewOverlay.action.turnPreviewIntoPreview": "轉換為預覽",
"hoverPreviewOverlay.editButton.label": "編輯",
"htmlHelpers.table.fileColumnName": "文件",
"iFramePreview.imagelessAreaLabel": "點擊以加載嵌入",
"iFramePreview.pillLabel": "加載嵌入",
"iconPicker.newBadge": "新功能",
"iconPicker.section.icons": "圖標",
"iconPicker.section.recent": "最近的項目",
"identityAndProvisioning.accountAuth.byline":
  "自定義用戶訪問啟用了 SAML SSO 的工作區的方式。",
"identityAndProvisioning.accountAuth.option.enforced": "僅限 SAML SSO",
"identityAndProvisioning.accountAuth.option.notEnforced": "任何方式",
"identityAndProvisioning.accountAuth.title": "登錄方式",
"identityAndProvisioning.claimWorkspaces.actionsMenu.terms": "條款和條件",
"identityAndProvisioning.claimWorkspaces.button":
  "瀏覽 {numWorkspaces} 個工作區",
"identityAndProvisioning.claimWorkspaces.buttonEmpty": "沒有工作區",
"identityAndProvisioning.claimWorkspaces.message":
  "聲明使用經驗證的域名創建的工作區或要求所有者使用外部域名",
"identityAndProvisioning.claimWorkspaces.personalPlan": "個人版",
"identityAndProvisioning.claimWorkspaces.proPlan": "個人專業版",
"identityAndProvisioning.claimWorkspaces.summaryByline":
  "{subscriptionTier} · {memberCount, plural, one {{memberCount} 個成員} other {{memberCount} 個成員}}",
"identityAndProvisioning.claimWorkspaces.table.admins": "工作區所有者",
"identityAndProvisioning.claimWorkspaces.table.createdAt": "創建時間",
"identityAndProvisioning.claimWorkspaces.table.createdBy": "創建者",
"identityAndProvisioning.claimWorkspaces.table.empty":
  "沒有可聲明的工作區。",
"identityAndProvisioning.claimWorkspaces.table.name": "工作區",
"identityAndProvisioning.claimWorkspaces.table.pending": "待定",
"identityAndProvisioning.claimWorkspaces.table.pendingExplaination":
  "等待 {name} 將工作區轉移到外部帳戶。",
"identityAndProvisioning.claimWorkspaces.teamPlan": "團隊",
"identityAndProvisioning.claimWorkspaces.teamTrialPlan": "團隊（試用版）",
"identityAndProvisioning.claimWorkspaces.title": "聲明工作區",
"identityAndProvisioning.claimWorkspaces.tooltip":
  "沒有可用的工作區可供聲明",
"identityAndProvisioning.claimWorkspaces.users.empty": "已刪除用戶",
"identityAndProvisioning.claimWorkspaces.users.emptyTooltip":
  "從 {domain} 中刪除的用戶",
"identityAndProvisioning.claimWorkspaces.users.name":
  "{remainingCount, plural, other {{firstUser} <gray>+{remainingCount}</gray>}}",
"identityAndProvisioning.createAccount.byline":
  "為通過 SAML SSO 登錄的新用戶自動創建 Notion 帳戶。",
"identityAndProvisioning.createAccount.title": "自動創建帳戶",
"identityAndProvisioning.editSamlConfig.acsByline":
  "在您的 IDP 的 SAML 配置中輸入此內容。",
"identityAndProvisioning.editSamlConfig.acsTitle":
  "斷言使用者服務 (ACS) URL",
"identityAndProvisioning.editSamlConfig.byline":
  "使用您的身份提供商 (IDP) 為 Notion 工作區配置 SAML 單點登錄。<guidelink>了解更多</guidelink>。",
"identityAndProvisioning.editSamlConfig.cancel": "取消",
"identityAndProvisioning.editSamlConfig.enableSaml": "啟用 SAML",
"identityAndProvisioning.editSamlConfig.feedback.empty":
  "你不能將此字段留空",
"identityAndProvisioning.editSamlConfig.feedback.signed_request":
  "無法對請求進行簽名",
"identityAndProvisioning.editSamlConfig.idpTitle": "身份提供商詳細信息",
"identityAndProvisioning.editSamlConfig.idpUrl": "身份提供商 URL",
"identityAndProvisioning.editSamlConfig.idpUrlByline":
  "輸入你的 IDP 提供的值。",
"identityAndProvisioning.editSamlConfig.idpXml": "身份提供商元數據 XML",
"identityAndProvisioning.editSamlConfig.saveChanges": "保存更改",
"identityAndProvisioning.editSamlConfig.title": "SAML 單點登錄",
"identityAndProvisioning.emailDomainsSection.byline":
  "使用具有已驗證域名的郵箱地址的任何人都可以使用 SAML 單點登錄。",
"identityAndProvisioning.emailDomainsSection.title": "已驗證的電子郵件域名",
"identityAndProvisioning.samlToggle.byline":
  "使用已驗證域的電子郵件地址的任何人都可以通過 SAML SSO 登錄。",
"identityAndProvisioning.samlToggle.configure": "編輯 SAML 單點登錄配置",
"identityAndProvisioning.samlToggle.learnMore": "了解 SAML 單點登錄",
"identityAndProvisioning.samlToggle.title": "啟用 SAML 單點登錄",
"identityAndProvisioning.scim.byline": "生成令牌以配置 SCIM。",
"identityAndProvisioning.scim.title": "SCIM 令牌",
"identityAndProvisioning.secondaryWorkspaces.empty": "沒有鏈接的工作區。",
"identityAndProvisioning.secondaryWorkspaces.message":
  "此 SAML SSO 配置適用於以下其他工作區。 <contactlink>聯繫支持人員</contactlink>以添加或刪除工作區。",
"identityAndProvisioning.secondaryWorkspaces.table.memberCount": "成員",
"identityAndProvisioning.secondaryWorkspaces.table.members":
  "{count} 個成員",
"identityAndProvisioning.secondaryWorkspaces.table.name": "名稱",
"identityAndProvisioning.secondaryWorkspaces.table.plan": "創建時間",
"identityAndProvisioning.secondaryWorkspaces.title": "鏈接的工作區",
"identityProvisioningSettings.claimWorkspaces.actions.externalTransfer":
  "轉移到外部帳戶",
"identityProvisioningSettings.claimWorkspaces.actions.externalTransferCaption":
  "用個人帳戶替換當前工作區所有者。",
"identityProvisioningSettings.claimWorkspaces.breadcrumb": "← 身份和配置",
"identityProvisioningSettings.claimWorkspaces.byline":
  "向你的企業版聲明驗證域工作區或要求所有者使用外部域。",
"identityProvisioningSettings.claimWorkspaces.personalSpaces":
  "個人版 {spacesCount}",
"identityProvisioningSettings.claimWorkspaces.teamSpaces":
  "團隊版 {spacesCount}",
"identityProvisioningSettings.claimWorkspaces.title": "聲明工作區",
"identityProvisioningSettings.domain.title": "域名管理",
"identityProvisioningSettings.offline.message":
  "請連接網絡後管理身份和配置設置。",
"identityProvisioningSettings.saml.title": "SAML 單點登錄（SSO）",
"identityProvisioningSettings.scim.title": "SCIM 配置",
"identityProvisioningSettings.secondaryWorkspace.uneditableMessage":
  "已驗證的域名和 SAML SSO 配置由工作區 <bold>{workspaceName}</bold> 管理。請導航到此處或聯繫該工作區的管理員，以編輯已驗證的域名或 SSO 配置。",
"identityProvisioningSettings.secondaryWorkspace.uneditableTitle":
  "主工作區是 <bold>{primaryWorkspaceName}</bold>。",
"identityProvisioningSettings.setupInfo.title": "設置信息",
"identityProvisioningSettings.title": "身份和配置",
"imageBlock.embedImage.button.label": "嵌入圖片",
"imageBlock.linkInput.caption": "適用於網絡上的任何圖片。",
"imageBlock.linkInput.placeholder": "粘貼圖片鏈接…",
"imageBlock.placeholder": "添加圖片",
"importActions.asanaImportFailedError.message": "Asana 導入失敗。",
"importActions.evernoteImportFailedError.message":
  "印象筆記國際版（Evernote）導入失敗。",
"importActions.fileImportFailedError.sizeTooLarge.message":
  "導入失敗：文件超過 5MB。",
"importActions.importFailedError.message": "導入失敗。",
"importActions.importTitle": "導入 {date}",
"importActions.importingFromAsana.loadingMessage":
  "{importingCount, plural, other {正從 Asana 導入 {importingCount} 個項目中⋯}}",
"importActions.importingFromEvernote.loadingMessage":
  "{importingCount, plural, other {正從 Evernote 導入 {importingCount} 個筆記本中⋯}}",
"importActions.importingFromTrello.loadingMessage":
  "{importingCount, plural, other {正在導入 Trello 中的 {importingCount} 個看板中⋯}}",
"importActions.importingMultipleFilesComplete.loadingMessage":
  "{totalNumberOfFiles} 個文件已導入，共 {totalNumberOfFiles} 個",
"importActions.importingMultipleFilesInProgress.loadingMessage":
  "{numberOfUploadedFiles} 個文件已導入，共 {totalNumberOfFiles} 個",
"importActions.importingMultipleFilesNotStarted.loadingMessage":
  "0 個文件已導入，共 {totalNumberOfFiles} 個",
"importActions.importingOneFile.loadingMessage": "導入中…",
"importActions.trelloImportFailedError.message": "Trello 導入失敗。",
"importActions.uploadingMultipleFilesComplete.loadingMessage":
  "{totalNumberOfFiles} 個文件已上傳，共 {totalNumberOfFiles} 個",
"importActions.uploadingMultipleFilesInProgress.loadingMessage":
  "{numberOfUploadedFiles} 個文件已上傳，共 {totalNumberOfFiles} 個",
"importActions.uploadingMultipleFilesNotStarted.loadingMessage":
  "0 個文件已上傳，共 {totalNumberOfFiles} 個",
"importActions.uploadingOneFile.loadingMessage":
  "上傳中…（ {percentComplete}％）",
"importAsana.databaseProperty.assignedPerson": "指派給",
"importAsana.databaseProperty.attachedFiles": "附件",
"importAsana.databaseProperty.completedCheckbox": "完成",
"importAsana.databaseProperty.dueDate": "到期日",
"importAsana.databaseProperty.name": "名稱",
"importAsana.databaseProperty.sectionMultiSelect": "分部",
"importAsana.databaseProperty.tagsMultiSelect": "標籤",
"importErrors.enexFileNotSupported.message": "不支持 Evernote .enex 導入。",
"importEvernote.databaseProperty.createdTime": "創建時間",
    "importEvernote.databaseProperty.name": "名稱",
    "importEvernote.databaseProperty.reminder": "提醒",
    "importEvernote.databaseProperty.tags": "標籤",
    "importEvernote.databaseProperty.updatedTime": "更新時間",
    "importEvernote.databaseProperty.url": "網址",
    "importEvernote.databaseViews.galleryView.title": "畫廊視圖",
    "importEvernote.databaseViews.listView.title": "列表視圖",
    "importEvernote.importTooLarge.textProperty.message":
      "因為項目太大無法導入。所以我們將其內容轉為文件上傳了。",
    "importModal.helpButton.label": "了解導入",
    "importModal.importButton.label": "導入",
    "importOptions.helpButton.tooltip": "了解如何導入",
    "importOptions.offlineErrorMessage": "請連接網絡後導入。",
    "importOptions.textMarkdown.title": "文本與 Markdown",
    "importPopup.deselectAll": "取消全選",
    "importPopup.selectAll": "全選",
    "importTrello.assignedPersonColumn.propertyName": "指派給",
    "importTrello.attachedFilesColumn.propertyName": "附件",
    "importTrello.database.defaultViewTitle": "默認視圖",
    "importTrello.dueDateColumn.propertyName": "到期",
    "importTrello.labelColumn.propertyName": "標籤",
    "importTrello.nameColumn.propertyName": "名稱",
    "importTrello.statusColumn.propertyName": "狀態",
    "importTrello.statusProperty.backlog": "待辦需求",
    "importTrello.statusProperty.complete": "已完成",
    "importTrello.statusProperty.inProgress": "進行中",
    "inactiveSCIMTokenEmail.subjectLine.text":
      "你的 Notion 帳戶：公共頁面上審核過的內容",
    "inactiveScimTokenEmail.bodyLine1":
      "你的企業版工作區 <b> {spaceName}</b> 正在使用由不再是工作區管理員的用戶生成的 SCIM API 令牌。",
    "inactiveScimTokenEmail.bodyLine2":
      "你可以通過進入<b>設置與成員 → 安全和身份 → SCIM 配置→ + 新令牌</b>來替換此令牌，然後在身份提供商中替換新令牌。",
    "inactiveScimTokenEmail.bodyLine3":
      "感謝你使用 Notion Enterprise 配置用戶配置，以獲得更安全的用戶體驗！",
    "inactiveScimTokenEmail.closingText": "──來自 Notion 團隊",
    "inactiveScimTokenEmail.greetingWithName": "嗨，{customerName}！",
    "inactiveScimTokenEmail.greetingWithoutName": "嗨，你好！",
    "inactiveScimTokenEmail.helpCenterReference":
      "在<a>此處</a>可以找到完整的詳細信息。",
    "inactiveScimTokenEmail.imageAltText":
      "顯示 SCIM 令牌菜單並指示“+ 新建令牌”按鈕位置的屏幕截圖",
    "inactiveScimTokenEmail.subjectLine.text":
      "更換已撤銷的 SCIM API 令牌的通知",
    "inlineCommentButton.commentLabel": "評論",
    "inlineCommentButton.tooltip": "對所選文本發表評論",
    "inlineEquationToken.invalidPlaceholder.label": "無效的公式",
    "inlineEquationToken.placeholder.label": "新公式",
    "inlineUnfurlingAuthenticationPopup.caption":
      "你和有權訪問此 Notion 頁面的任何其他人都將看到豐富的實時更新內容預覽。",
    "inlineUnfurlingAuthenticationPopup.connectButton": "綁定",
    "inlineUnfurlingAuthenticationPopup.learnMore.text": "了解更多",
    "inlineUnfurlingAuthenticationPopup.title": "綁定 {integration}",
    "integrationErrors.domainAlreadyVerified.errorMessage":
      "集成已驗證此域名。",
    "integrationImportPopup.importButton.label": "導入",
    "integrationInstallerFilter.userSearch.placeholder": "按用戶篩選",
    "internalUnfurlingMenu.actions.pasteAsLink.title": "以鏈接形式粘貼",
    "internalUnfurlingMenu.actions.pasteAsMention.title": "以提及形式粘貼",
    "internalUnfurlingMenu.actions.pasteAsPreview.title": "以預覽形式粘貼",
    "invalidNameErrors.errorMessage": "無效名稱。",
    "invalidVATEmail.billingLink.text":
      "<b>請使用<billinglink>此鏈接</billinglink>更新你的稅號。</b>",
    "invalidVATEmail.body.text":
      "我們聯繫你是因為你存檔的增值稅 (VAT) 編號或商品及服務稅 (GST) 編號無效。根據當地法律，如果你沒有有效的編號，我們需要向你徵稅。",
    "invalidVATEmail.closingText": "謝謝你。{br} ──來自 Notion 團隊",
    "invalidVATEmail.greetingWithName": "嗨，{customerName}！",
    "invalidVATEmail.greetingWithoutName": "嗨，你好！",
    "invalidVATEmail.subjectLine.text": "請更新你的 Notion 帳戶上的稅號",
    "invisionBlock.embeds.button.label": "嵌入 Invision",
    "invisionBlock.embeds.caption": "適用於 Invision 項目",
    "invisionBlock.placeholder": "嵌入 Invision 項目",
    "inviteEmail.clickToViewPage.message": "點這裡查看",
    "inviteEmail.clickToViewWorkspace.message": "點這裡查看",
    "inviteEmail.pageInviteMessage": "{name}邀請你加入{pageName}。",
    "inviteEmail.pageTitle.untitledPage": "無標題",
    "inviteEmail.title": "邀請",
    "inviteEmail.workspaceInviteMessage":
      "{name}邀請你加入{workspaceName}工作區。",
    "inviteEmail.workspaceInviteMessageFromBot":
      "你已被邀請進入{workspaceName}工作區。",
    "inviteEmail.workspaceName.untitledName": "無標題",
    "inviteLinkErrors.inviteLinkDisabled.message":
      "邀請被禁用，請與此工作區的管理員聯繫。",
    "inviteLinkErrors.unableToJoinSpace.message":
      "請讓管理員直接邀請你進入此空間。",
    "inviteUserButton.addGuestsAndGroupsAndIntegrationsLabel":
      "人員、郵箱地址、群組或集成",
    "inviteUserButton.addMemberLabel": "添加成員",
    "inviteUserButton.invitePersonLabel": "邀請",
    "inviteUserButton.modalTooltip.guestLimitLine1":
      "你的個人版最多可邀請 5 位不同的訪客。",
    "inviteUserButton.modalTooltip.guestLimitLine2": "升級以無限使用",
    "inviteUserButton.tooltip.adminsOnlyMessage": "只有管理員可以添加成員。",
    "inviteUserButton.tooltip.fullAccessOnlyMessage":
      "只有擁有全部權限的人才能添加人員。",
    "inviteUserModal.addMemberMenu.title": "添加成員",
    "inviteUserModal.helpButton.caption": "了解如何邀請他人並設置權限",
    "inviteUserModal.inviteButton.label": "邀請",
    "inviteUserModal.inviteButton.upgradeLabel": "升級",
    "inviteUserModal.invitePersonMenu.title": "邀請人員",
    "inviteUserModal.mobile.inviteButton.label": "邀請",
    "inviteUserModal.permissionLevel.title": "權限級別",
    "inviteUserModal.searchDropdown.addPeople": "繼續輸入邀請電子郵件",
    "inviteUserModal.searchDropdown.selectGroupTitle": "選擇一個群組",
    "inviteUserModal.searchDropdown.selectPersonTitle": "選擇人員",
    "inviteUserModal.searchDropdown.selectTeamTitle": "選擇團隊空間",
    "inviteUserModal.searchInput.errorMessage": "出了些問題",
    "inviteUserModal.searchInput.placeholder": "搜索名稱或郵箱地址",
    "inviteUserModal.searchPersonDropdown.noSearchResultsMessage":
      "在上面輸入或粘貼郵箱地址，以逗號分隔。",
    "inviteUserModal.userAlreadyHasPermissionMessage": "{user}已擁有權限。",
    "inviteUserModal.userAlreadyInvitedMessage": "已邀請{user}。",
    "inviteUserModal.userRole.adminBadge.label": "管理員",
    "inviteUserModal.userRole.adminBadge.tooltip":
      "{ userNameAndEmail} 是此工作區的管理員",
    "inviteUserModal.userRole.guest.tooltip":
      "{ userNameAndEmail} 是此工作區的訪客",
    "inviteUserModal.userRole.guestBadge.label": "訪客",
    "inviteUserModal.userRole.invitedBadge.label": "已邀請",
    "inviteUserModal.userRole.invitedBadge.page.tooltip":
      "此人已受邀訪問此頁面",
    "inviteUserModal.userRole.invitedBadge.space.tooltip":
      "此人已受邀加入此工作區",
    "inviteUserModal.userRole.memberBadge.label": "成員",
    "inviteUserModal.userRole.memberBadge.tooltip":
      "{ userNameAndEmail} 是此工作區的成員",
    "inviteUserModal.userRole.membershipAdminBadge.label": "成員資格管理員",
    "inviteUserModal.userRole.membershipAdminBadge.tooltip":
      "此人是此工作區中的成員資格管理員",
    "inviteUserModal.userRole.newUserBadge.label": "新",
    "inviteUserModal.userRole.newUserBadge.tooltip": "此人當前無權訪問此工作區",
    "inviteUserModal.userRole.workspaceOwnerBadge.label": "工作區所有者",
    "inviteUserModal.userRole.workspaceOwnerBadge.tooltip":
      "{ userNameAndEmail} 是此工作區中的工作區所有者",
    "invoice.chargeItem.changedNumberOfMembers.memberChange.new":
      "({oldTotalMembers} → {newTotalMembers})",
    "invoice.chargeItem.changedNumberOfMembers.membersAdded.new":
      "{numberOfMembersAdded, plural, other {在 {productName} 中添加了 {numberOfMembersAdded} 個成員}}",
    "invoice.chargeItem.changedNumberOfMembers.membersRemoved.new":
      "{numberOfMembersRemoved, plural, other {在 {productName} 中刪除了 {numberOfMembersRemoved} 個成員}}",
    "invoice.chargeItem.discountApplied.label": "優惠券",
    "invoice.chargeItem.proratedCharge.switchedBillingInterval.fromMonthlyToYearly.new":
      "從月付方案更改為年付方案",
    "invoice.chargeItem.proratedCharge.switchedBillingInterval.fromYearlyToMonthly.new":
      "從年付方案更改為月付方案",
    "invoice.chargeItem.proratedCharge.switchedProducts.dateRange":
      "{startDate} - {endDate}",
    "invoice.chargeItem.proratedCharge.switchedProducts.new":
      "已從 {oldProductName} 更改為 {newProductName}",
    "invoice.chargeItem.taxCharge": "稅",
    "invoice.chargeRecurringItem":
      "{numberOfMembers, plural, other {{planType} {intervalType} x {numberOfMembers} 個成員}}",
    "invoice.date.label": "發票日期",
    "invoice.details.amount": "金額",
    "invoice.details.date": "日期",
    "invoice.details.description": "描述",
    "invoice.details.helpButton.label": "了解有關按比例分配費用的更多信息",
    "invoice.details.label": "詳細信息",
    "invoice.details.no.prorated.charges":
      "在此賬單週期內沒有按比例計算的費用。",
    "invoice.details.no.recurring.charges": "在此賬單週期內沒有任何定期費用。",
    "invoice.details.prorated.charges.explanation":
      "當你更改方案，或添加或移除工作區成員時，Notion 會將之前的成員數或方案記入你的賬戶，並就新成員數或方案的剩餘時間向你收費。",
    "invoice.details.recurring.charges.explanation":
      "當你續訂訂閱時，Notion 會按賬單週期向你收取費用。",
    "invoice.details.subtotal": "小計",
    "invoice.details.taxLanguage.explanation":
      "稅費將根據你所在的司法管轄區而有所不同。如果貴公司位於美國，則稅費涉及州和地方銷售稅。如果貴公司位於加拿大，則稅費以魁北克銷售稅 (QST) 表示。如果貴公司位於歐盟、英國或俄羅斯，則稅費以增值稅 (VAT) 表示。如果你位於歐盟或英國且不需要支付增值稅，則在收到此發票時，其相關服務視為已提供，並且根據第 196 條理事會指令 2006/112/EC，客戶必須在各自管轄範圍內以反向收費的方式自行核算增值稅。",
    "invoice.details.taxLanguage.explanation.ca": "CA QST: NR00012289",
    "invoice.details.taxLanguage.explanation.ru.inn": "RU INN: 9909540024",
    "invoice.details.taxLanguage.explanation.ru.kpp": "RU KPP: 997789001",
    "invoice.details.taxLanguage.explanation.vat": "EU VAT: EU528003828",
    "invoice.intervalType.monthly": "月付",
    "invoice.intervalType.yearly": "年付",
    "invoice.memberCount":
      "{numberOfMembers, plural, other {{numberOfMembers} 位成員}}",
    "invoice.number.label": "賬單編號",
    "invoice.payment.info.stripeLink.downloadReceipt": "點擊以下載收據",
    "invoice.payment.info.stripeLink.pay": "點擊以支付賬單",
    "invoice.payment.status.label": "狀態",
    "invoice.paymentInfo.label": "付款",
    "invoice.pdf.title": "Notion 發票 {date}",
    "invoice.planType.business": "商業版",
    "invoice.planType.enterprise": "企業版",
    "invoice.planType.legacy": "舊版",
    "invoice.planType.personal": "個人版",
    "invoice.planType.personalEducation": "個人教育版",
    "invoice.planType.team": "團隊版",
    "invoice.printOrExportButton.label": "打印或導出為 PDF",
    "invoice.productName.business":
      "{billingInterval, select, month {Notion 商業版月付方案} year {Notion 商業版年付方案} other {Notion 商業版}}",
    "invoice.productName.enterprise":
      "{billingInterval, select, month {Notion 企業版月付方案} year {Notion 企業版年付方案} other {Notion 企業版}}",
    "invoice.productName.legacy":
      "{billingInterval, select, month {Notion 舊月付方案} year {Notion 舊年付方案} other {Notion 舊方案}}",
    "invoice.productName.personal":
      "{billingInterval, select, month {Notion 個人版月付方案} year {Notion 個人版年付方案} other {Notion 個人版}}",
    "invoice.productName.personalEducation":
      "{billingInterval, select, month {Notion 個人專業版（教育）月付方案} year {Notion 個人專業版（教育）年付方案} other {Notion 個人專業版（教育）}}",
    "invoice.productName.team":
      "{billingInterval, select, month {Notion 團隊版月付方案} year {Notion 團隊版年付方案} other {Notion 團隊版}}",
    "invoice.recipient.billing.label": "記賬對象",
    "invoice.recurringDate": "{startDate} - {endDate}",
    "invoice.status.not_paid": "未支付",
    "invoice.status.paid": "已付費",
    "invoice.status.upcoming": "下一個賬單・尚未到期",
    "invoice.summary.amountDue.label": "截止時間",
    "invoice.summary.credits": "積分",
    "invoice.summary.prorated.charges": "按比例分配的費用",
    "invoice.summary.prorated.charges.credits": "按比例分配的費用和積分",
    "invoice.summary.prorated.charges.explanation":
      "賬單週期內成員和方案變更的部分費用。",
    "invoice.summary.recurring.charges": "週期性方案費用",
    "invoice.summary.recurring.charges.explanation":
      "在此賬單週期內 Notion 方案的續費費用。",
    "invoice.summary.tax": "稅",
    "invoice.title": "Notion",
    "invoice.title.label": "發票",
    "invoice.total.label": "應付總額",
    "invoice.upcomingInvoicePlaceholder": "下一個賬單",
    "invoice.workspace.label": "工作區",
    "invoiceErrors.invoiceNotFound.message":
      "你可能需要<loginlink>登錄</loginlink>才能查看。",
    "invoiceErrors.invoiceNotFound.title": "找不到賬單",
    "languagePicker.betaBadge": "試用版",
    "languagePicker.captions.chineseS": "簡體中文",
    "languagePicker.captions.chineseT": "繁體中文",
    "languagePicker.captions.englishUS": "英文（美國）",
    "languagePicker.captions.frenchFr": "法文",
    "languagePicker.captions.germanDE": "德語",
    "languagePicker.captions.japaneseJa": "日文",
    "languagePicker.captions.koreanKo": "韓文",
    "languagePicker.captions.portugueseBr": "葡萄牙文（巴西）",
    "languagePicker.captions.spanishEs": "西班牙文（西班牙）",
    "languagePicker.captions.spanishLatam": "西班牙文（拉丁美洲）",
    "languagePicker.changeLanguage.confirmationMessage":
      "確定要將語言更新為{language}嗎？",
    "languagePicker.changeLanguage.updateButton.label": "更新",
    "languageRegionSettings.language.label": "語言",
    "languageSettings.formatsSection.title": "格式",
    "languageSettings.languageSection.title": "語言與地區",
    "languageSettings.languageSwitcher.subtitle": "更改用戶界面的語言。",
    "languageSettings.offline.message": "請連接網絡以設置語言和地區。",
    "leaveTeam.cannotLeaveTeamDialog.partOfGroup.label":
      "你無法離開 {teamName}，因為你是通過工作區管理員管理的群組添加到此團隊的。",
    "leaveTeam.confirmDialog.cancelButton.label": "取消",
    "leaveTeam.confirmDialog.confirmButton.label": "退出團隊",
    "leaveTeam.confirmDialog.description.label":
      "是否確定要退出 {team}？此團隊不再顯示在側邊欄中，你可能會失去權限。",
    "leaveTeam.onlyTeamMeberLeft.label":
      "你不能退出此團隊，因為你是唯一的團隊所有者。邀請其他團隊所有者，你才能退出。",
    "linkMention.reload": "重新加載提及",
    "linkPreview.reload": "重新加載預覽",
    "linkToCollectionBlock.input.placeholder": "搜索數據庫…",
    "linkToCollectionBlock.menuItem.noResults.label": "無結果",
    "linkToCollectionBlock.menuItem.noResults.title": "選擇數據庫",
    "linkToCollectionBlock.menuItem.showResults.title": "選擇數據庫",
    "linkToPageBlock.noSearchResults": "無結果",
    "linkToPageBlock.searchPlaceholder": "搜索頁面…",
    "linkToPageBlock.selectPrompt": "選擇頁面",
    "linkToPageBlock.selectPrompt.withContents": "選擇頁面",
    "loadingSpinner.label": "載入中…",
    "localDatabase.erroMessages.noDiskSpaceRemaining":
      "磁盤空間不足。如果不能解決問題，請聯繫客服。",
    "localDatabase.erroMessages.noDiskSpaceRemainingBrowserLimit":
      "磁盤空間不足。你的瀏覽器設置可能限制了 Notion 可以使用的存儲空間。如果不能解決問題，請聯繫客服。",
    "localDatabase.errorFixes.chromeSettingsDamaged":
      "你的 Chrome 個人資料可能已損壞。如果你更改了 chrome://flags，請重設它們，然後重新啟動瀏覽器。如果問題仍然存在，請嘗試創建新的 Chrome 用戶。如果不能解決問題，請聯繫客服。",
    "localDatabase.errorFixes.chromeUpgradeCorruptedSettings":
      "你的 Chrome 個人資料可能已損壞。要獲得更一致的體驗，請下載 Notion 桌面應用：https://notion.so/desktop",
    "localDatabase.errorFixes.firefoxSettingsDamaged":
      "你的 Firefox 個人資料可能已損壞。訪問 https://firefox-storage-test.glitch.me/ 進行診斷。如果不能解決問題，請聯繫客服。",
    "localDatabase.errorFixes.helpAndSupportPrompt":
      "Notion 的本地存儲可能損壞了。請參閱 (?) > 幫助和支持 > 重置 Notion。如果不能解決問題，請聯繫客服。",
    "localDatabase.errorFixes.reloadAllTabs":
      "嘗試關閉並重新打開所有 Notion 的選項卡或窗口。如果不能解決問題，請聯繫客服。",
    "localDatabase.errorFixes.reloadThisTab":
      "嘗試重新加載 Notion。如果不能解決問題，請聯繫客服。",
    "loginActions.dialogError.logoutUnsavedChanges.confirmButton.label":
      "放棄編輯並登出",
    "loginActions.dialogError.logoutUnsavedChanges.message":
      "你尚未保存更改。如果你現在退出，可能會丟失這些更改。",
    "loginActions.googleLoginPopupModal.title": "谷歌登錄",
    "loginActions.loggingInWithApple.errorMessage":
      "嘗試使用 Apple 登錄時出了點問題。",
    "loginActions.loggingInWithApple.loadingMessage": "使用 Apple 登錄中…",
    "loginActions.loggingInWithGoogle.errorMessage":
      "嘗試使用 Google 登錄時出現問題。",
    "loginActions.loggingInWithGoogle.loadingMessage": "使用谷歌登錄中…",
    "loginActions.login.pending.message": "正在登錄 Notion…",
    "loginActions.signup.pending.message": "正在創建 Notion 帳戶…",
    "loginErrors.adminModeUnsupported.message": "不適用於管理員模式",
    "loginErrors.bannedNetwork.message":
      "你與 Notion 的網絡連接出現問題。請在應用內聯繫客服或發送電子郵件至 team@makenotion.com。",
    "loginErrors.bannedUser.message": "你的帳戶有問題。請聯繫客服。",
    "loginErrors.csrf.message":
      "如果您通過鏈接登錄，請在您請求鏈接的瀏覽器中打開該鏈接。",
    "loginErrors.generic.message": "登錄時出現問題。",
    "loginErrors.invalidEmail.message": "無效的郵箱地址。",
    "loginErrors.invalidPassword.message": "無效的密碼",
    "loginErrors.restrictedRegion.message":
      "你正試圖從受限制的司法管轄區訪問我們的服務。",
    "loginErrors.tryAgain.message": "請重新登錄。",
    "loginForm.continueWithEmailButton.label": "用郵箱地址登錄",
    "loginForm.continueWithLoginCodeButton.label": "用臨時登錄碼登錄",
    "loginForm.continueWithPasswordButton.label": "用密碼登錄",
    "loginForm.continueWithReverifyButton.label": "驗證郵箱地址",
    "loginForm.continueWithSAMLButton.label": "用 SAML 登錄",
    "loginForm.createNewAccountButton.label": "創建新帳戶",
    "loginForm.disclaimer":
      "點擊上方的“用谷歌帳戶 / 郵箱地址 / SAML 登錄”，即表示你已經閱讀和理解，並同意 Notion 的<termsandconditionslink>條款和條件</termsandconditionslink>和<privacypolicylink>隱私政策</privacypolicylink>。",
    "loginForm.emailInput.label": "郵箱地址",
    "loginForm.emailInput.placeholder": "輸入你的郵箱地址…",
    "loginForm.forgotPasswordLink": "忘記密碼？",
    "loginForm.loginCodeInput.label": "登錄碼",
    "loginForm.loginWithAppleButton.label": "Apple 登錄",
    "loginForm.loginWithGoogleButton.label": "用谷歌帳戶登錄",
    "loginForm.otherLoginOptions.continueWithEmail":
      "你也可以<emailloginlink>使用郵箱地址</emailloginlink>以繼續",
    "loginForm.otherLoginOptions.continueWithEmailOrSAML":
      "你也可以<emailloginlink>使用郵箱地址</emailloginlink>或<samlloginlink>使用 SAML SSO</samlloginlink> 以繼續",
    "loginForm.otherLoginOptions.continueWithSAML":
      "你也可以<samlloginlink>使用 SAML SSO</samlloginlink> 以繼續",
    "loginForm.passcodeInput.enterCodePlaceholder": "輸入登錄碼",
    "loginForm.passcodeInput.enterPasswordPlaceholder": "輸入密碼…",
    "loginForm.passcodeInput.enterSignupCodePlaceholder": "輸入註冊碼",
    "loginForm.passcodeInput.pasteCodePlaceholder": "粘貼登錄碼",
    "loginForm.passcodeInput.pasteSignupCodePlaceholder": "粘貼註冊碼",
    "loginForm.passcodeInput.reverifyPlaceholder": "粘貼驗證碼",
    "loginForm.passwordInput.label": "密碼",
    "loginForm.passwordResetSentMessage": "檢查收件箱中的鏈接以重置密碼。",
    "loginForm.reverifyPasswordLabel":
      "<emailverifiedtext>郵箱地址已驗證</emailverifiedtext>。你可以繼續使用密碼登錄。",
    "loginForm.reverifySentMessage":
      "此帳戶需要郵箱地址驗證。請檢查你的收件箱並粘貼驗證碼。",
    "loginForm.sendResetLink": "發送重置鏈接",
    "loginForm.signUpCodeInput.label": "註冊碼",
    "loginForm.temporaryPasscodeSentMessage":
      "我們剛剛向你發送了一個臨時登錄碼。{br}請檢查你的收件箱。",
    "loginForm.temporaryPasscodeSentMessageNoAccount":
      "我們剛剛向你發送了一個臨時註冊碼。請檢查你的收件箱並把註冊碼粘貼在下面。",
    "loginForm.verificationCodeInput.label": "驗證碼",
    "loginForm.workEmailInput.label": "工作用郵箱地址",
    "loginMobileNative.descriptionOfNotion.message":
      "Notion 是個可以用於<mediumfont>筆記</mediumfont>、 <mediumfont>任務管理</mediumfont>和<mediumfont>知識庫</mediumfont>的協作工具",
    "loginMobileNative.footer.helpButton.label": "需要幫助？",
    "loginMobileNative.footer.privacyAndTermsButton.label": "隱私與條款",
    "loginMobileNative.goBackButton.label": "後退",
    "loginMobileNative.welcomeMessage": "歡迎來到 Notion！👋",
    "loginPage.pageTitle": "登錄",
    "loginPage.title": "登錄",
    "loginPermissions.googleContactPermissions.checkboxUnchecked.message":
      "我不想分享谷歌聯繫人",
    "loginPermissions.googleContactPermissions.message":
      "我們請求讀取你的 Google 通訊錄，以便通過 Notion 邀請或提及人員時為你提供更好的體驗。",
    "loomBlock.embed.caption": "適用於啟用了公共訪問的 Loom 鏈接",
    "loomBlock.placeholder": "嵌入 Loom",
    "manageActiveSessions.confirmationModal.close": "關閉",
    "manageActiveSessions.confirmationModal.withEmail":
      "你已從 {email} 的其他活動會話中註銷。",
    "manageActiveSessions.confirmationModal.withoutEmail":
      "你已經從其他活動會話中註銷了。",
    "manageActiveSessions.logOutActiveSessions.button": "登出",
    "manageActiveSessions.logOutActiveSessions.label":
      "你將退出當前會話之外的所有其他活動會話，並且必須重新登錄。",
    "manageActiveSessions.title": "從所有設備登出",
    "manageSCIMTokenTable.ConfirmDeletingTokenModal.acceptButton.label":
      "撤銷令牌",
    "manageSCIMTokenTable.ConfirmDeletingTokenModal.cancelButton.label": "取消",
    "manageSCIMTokenTable.ConfirmDeletingTokenModal.description":
      "一旦令牌被撤銷，使用該令牌的現有 SCIM 配置將不再工作，你必須為它們提供一個新令牌。",
    "manageSCIMTokenTable.ConfirmDeletingTokenModal.message":
      "你確定要撤銷此令牌嗎？",
    "manageSCIMTokenTable.colums.addedBy.selfIndicator": "（你）",
    "manageSCIMTokenTable.noTokensFound.message": "沒有活動狀態的 SCIM 令牌。",
    "manageScimTokenTable.OutdatedWarningIcon.tooltip":
    "過期令牌。撤銷此令牌並生成一個新令牌以查看其內容。",
  "manageScimTokenTable.columnTitle.addedBy": "添加者",
  "manageScimTokenTable.columnTitle.created": "創建時間",
  "manageScimTokenTable.columnTitle.token": "令牌",
  "manageScimTokenTable.renderTokenThatCannotBeViewed.tooltip":
    "此令牌只能由其創建者查看。",
  "manageTeamAccessCell.selectLabel.closedTeam": "封閉式",
  "manageTeamAccessCell.selectLabel.openTeam": "開放式",
  "manageTeamAccessCell.selectLabel.privateTeam": "私人",
  "manageTeamAccessCell.selectLabel.privateUnderTeamPlanUpgradeBusinessTooltip":
    "在商業版功能下，團隊訪問權限只能設置為私人。{br}如果您將團隊訪問權限更改為“開放式”或“封閉式”，則需要進行升級才能恢復為“私人”。",
  "manageTeamAccessCell.selectLabel.privateUnderTeamPlanUpgradeEnterpriseTooltip":
    "在企業版功能下，團隊訪問權限只能設置為私人。{br}如果您將團隊訪問權限更改為“開放式”或“封閉式”，則需要進行升級才能恢復為“私人”。",
  "manageTeamAccessCell.selectLabel.privateUpgradeToBusinessTooltip":
    "升級到商業版以設置為私人",
  "manageTeamAccessCell.selectLabel.privateUpgradeToEnterpriseTooltip":
    "升級到企業版以設置為私人",
  "manageTeamAccessCell.selectLabel.upgradeBadge": "{tier}",
  "manageTeamsAccessFilter.accessFilter.filterAllTeams": "任何",
  "manageTeamsAccessFilter.accessFilter.filterClosedTeams": "封閉式",
  "manageTeamsAccessFilter.accessFilter.filterOpenTeams": "開放式",
  "manageTeamsAccessFilter.accessFilter.filterPrivateTeams": "私人",
  "manageTeamsAccessFilter.accessSelectPlaceolder": "訪問權限",
  "manageTeamsArchivedFilter.archivedFilter.hideArchivedTeams": "隱藏已歸檔",
  "manageTeamsArchivedFilter.archivedFilter.showArchivedTeams": "顯示已歸檔",
  "manageTeamsArchivedFilter.archivedSelectPlaceolder": "已歸檔",
  "manageTeamsBrowser.newTeamButton.text": "新建團隊",
  "manageTeamsBrowser.subtitle": "在這裡管理您有權訪問的所有團隊空間。",
  "manageTeamsBrowser.title": "管理團隊空間",
  "manageTeamsFilterRow.searchFilter.placeholder": "搜索",
  "manageTeamsHelpers.confirmChangeSecuritySetting.allowTeamCreation":
    "確定要允許此工作區的所有成員創建團隊？",
  "manageTeamsHelpers.confirmChangeSecuritySetting.confirm": "確認",
  "manageTeamsHelpers.confirmChangeSecuritySetting.disableTeamCreation":
    "確定要僅限管理員創建團隊？",
  "manageTeamsHelpers.confirmChangeSecuritySetting.workspaceOwners.disableTeamCreation":
    "是否確實要僅限工作區所有者才能創建團隊空間？",
  "manageTeamsOwnerFilter.filterTitle.onlyOrphanedTeams": "所有者：無",
  "manageTeamsOwnerFilter.filterTitle.unset": "所有者",
  "manageTeamsOwnerFilter.filterTitle.withSpecifiedOwner":
    "所有者：{teamOwnerName}",
  "manageTeamsOwnerFilter.noOwnersFilterOption": "沒有所有者的團隊空間",
  "manageTeamsOwnerFilter.searchOwner.placeholder": "搜索團隊空間所有者...",
  "manageTeamsOwnerFilter.searchOwner.resultsTitle": "選擇用戶",
  "manageTeamsOwnersCell.nMoreOwnersLabel": "+{numAdditionalOwners}",
  "manageTeamsOwnersCell.noOwners": "沒有所有者",
  "manageTeamsTable.access.openTeamLabel": "開放式",
  "manageTeamsTable.access.privateTeamLabel": "私人",
  "manageTeamsTable.archivedTag": "已歸檔",
  "manageTeamsTable.columnTitle.access": "訪問權限",
  "manageTeamsTable.columnTitle.members": "成員",
  "manageTeamsTable.columnTitle.owners": "所有者",
  "manageTeamsTable.columnTitle.team": "團隊",
  "manageTeamsTable.columnTitle.updated": "更新時間",
  "manageTeamsTable.emptyManageTeamTableDisclaimer.noTeamsExist":
    "找不到任何團隊空間。",
  "manageTeamsTable.emptyManageTeamTableDisclaimer.teamsFilteredOut":
    "找不到任何團隊空間。<linkbutton>請重置篩選器</linkbutton>",
  "manageTeamsTable.numMembersCell":
    "{numTeamMembers, plural, other {個成員}}",
  "manageTeamspacesTable.columnTitle.teamspace": "團隊空間",
  "marginComments.collapsed.expand.label": "展開",
  "marginComments.collapsed.numComments.count":
    "{numComments, plural, other {{numComments} 條評論}}",
  "mathParseHelpers.errorPosition.message": "字符 {position}",
  "mathParseHelpers.fullError.message": "{errorBody} ({postfix})",
  "mathParseHelpers.syntax.error": "部分 {token} 中的語法錯誤",
  "mathParseHelpers.tokenExpected.error": "預期的 {token}",
  "mathParseHelpers.unexpected.error": "意外的 {token}",
  "mediaPicker.chooseFile.button.label": "選擇文件",
  "mediaPicker.chooseImage.buttonText": "上傳文件",
  "mediaPicker.chooseVideo.buttonText": "選擇視頻",
  "mediaPicker.embedPlaceholder.text": "以 https://… 格式粘貼",
  "mediaPicker.embedTab.embedLinkButtonText": "鏈接",
  "mediaPicker.emojiFilter.text": "篩選…",
  "mediaPicker.emojiTab.random": "隨機",
  "mediaPicker.errorMessage": "糟糕，出了些問題。",
  "mediaPicker.invalidImageDrop.wrongTypeErrorMessage":
    "抱歉，不支持該文件類型。",
  "mediaPicker.invalidLinkError.text": "請輸入有效的鏈接。",
  "mediaPicker.maximumFileSize.notice": "每個文件的大小不超過 {filesize}MB。",
  "mediaPicker.menuItem.choosePagesFromAccount.label": "從{accountName}選擇",
  "mediaPicker.menuItem.connectFirstGoogleAccount.caption":
    "查找並嵌入谷歌云端硬盤中的文件",
  "mediaPicker.menuItem.connectFirstGoogleAccount.label": "綁定谷歌帳戶",
  "mediaPicker.menuItem.connectMoreGoogleAccounts.label": "綁定另一個帳戶",
  "mediaPicker.mobileCloseButton.label": "關閉",
  "mediaPicker.mobileRemoveButton.label": "移除",
  "mediaPicker.tabs.browse":"瀏覽",
  "mediaPicker.tabs.custom": "自定義",
  "mediaPicker.tabs.embedLink": "嵌入鏈接",
  "mediaPicker.tabs.emoji": "表情符號",
  "mediaPicker.tabs.gallery": "畫廊",
  "mediaPicker.tabs.icon": "圖標",
  "mediaPicker.tabs.remove": "移除",
  "mediaPicker.tabs.upload": "上傳",
  "mediaPicker.unsplash.byAuthor":
    "作者 <inlinetextlink>{authorName}</inlinetextlink>",
  "mediaPicker.unsplash.noResultsText": "未找到結果。",
  "mediaPicker.unsplash.searchText": "搜索以查找更多結果。",
  "mediaPicker.unsplashPlaceholder.text": "搜索圖片…",
  "memberSettingsButton.goOnline.prompt": "請連接網絡後管理成員。",
  "memberSettingsButton.mobileMemberSettings.title": "成員",
  "memberSettingsButton.mobileSidebar.label": "成員",
  "memberSettingsButton.rightActionButton.done": "完成",
  "mentionMenu.addPage.prompt2": "輸入以添加或鏈接頁面…",
  "mentionMenu.createPageSection.title": "新頁面",
  "mentionMenu.date.autocomplete.nextTuesday": "下週二下午 3 點",
  "mentionMenu.date.autocomplete.reminder": "提醒明天上午9點",
  "mentionMenu.date.autocomplete.today": "今天",
  "mentionMenu.date.prompt2": "提及日期…",
  "mentionMenu.date.remindAtDateTime": "提醒{dateTime}",
  "mentionMenu.dateSection.title": "日期",
  "mentionMenu.noSearchResults.title": "無結果",
  "mentionMenu.offlineMessage": "連接網絡後便可提及人員或頁面。",
  "mentionMenu.page.prompt2": "輸入以鏈接或添加頁面…",
  "mentionMenu.pageDate.prompt2": "提及頁面或日期…",
  "mentionMenu.pagesSection.title2": "鏈接到頁面",
  "mentionMenu.peopleSection.title": "人員",
  "mentionMenu.person.prompt2": "提及人員…",
  "mentionMenu.personDate.prompt2": "提及人員或日期…",
  "mentionMenu.personPage.prompt2": "提及人員或頁面…",
  "mentionMenu.personPageDate.prompt2": "提及人員、頁面或日期…",
  "mentionMenu.showMoreResultsButton.title": "其餘 {numberMore} 個結果",
  "mentionMenu.templateVariables.description.me": "複製的用戶",
  "mentionMenu.templateVariables.description.now": "複製時間",
  "mentionMenu.templateVariables.description.today": "複製日期",
  "mentionMenu.templateVariables.keywords.me": "我",
  "mentionMenu.templateVariables.keywords.now": "現在",
  "mentionMenu.templateVariables.keywords.today": "今天",
  "mentionMenu.templateVariables.text.me": "我",
  "mentionMenu.templateVariables.text.now": "現在",
  "mentionMenu.templateVariables.text.tday": "今天",
  "menuList.menuListSection.noResult": "無結果",
  "mermaidRenderer.error.seeMermaidExamples": "查看 Mermaid 示例",
  "mermaidRenderer.error.unknownError": "未知錯誤： {error}",
  "miroBlock.embeds.button.label": "嵌入 Miro",
  "miroBlock.embeds.caption": "適用於啟用了公共訪問的 Miro 鏈接",
  "miroBlock.placeholder": "嵌入 Miro",
  "mobile.dismissKeyboardBar.button.label": "完成",
  "mobile.modal.backButton": "返回",
  "mobile.modal.cancelButton": "取消",
  "mobile.modal.doneButton": "完成",
  "mobileActionBar.accessibility.blockColor": "更改塊顏色",
  "mobileActionBar.accessibility.bold": "加粗",
  "mobileActionBar.accessibility.close": "關閉文本格式菜單",
  "mobileActionBar.accessibility.closeMenu": "關閉菜單",
  "mobileActionBar.accessibility.code": "代碼",
  "mobileActionBar.accessibility.comment": "添加評論",
  "mobileActionBar.accessibility.endEditing": "結束編輯",
  "mobileActionBar.accessibility.equation": "添加公式",
  "mobileActionBar.accessibility.filePicker": "添加圖片",
  "mobileActionBar.accessibility.indent": "縮進塊",
  "mobileActionBar.accessibility.insertBlock": "添加塊",
  "mobileActionBar.accessibility.italics": "斜體",
  "mobileActionBar.accessibility.link": "添加鏈接",
  "mobileActionBar.accessibility.mention": "添加提及",
  "mobileActionBar.accessibility.more": "更多塊操作",
  "mobileActionBar.accessibility.moveDown": "向下移動塊",
  "mobileActionBar.accessibility.moveUp": "向上移動塊",
  "mobileActionBar.accessibility.redo": "重做編輯",
  "mobileActionBar.accessibility.strikethrough": "刪除線",
  "mobileActionBar.accessibility.textColor": "文本顏色",
  "mobileActionBar.accessibility.textFormatting": "打開文本格式菜單",
  "mobileActionBar.accessibility.trash": "刪除塊",
  "mobileActionBar.accessibility.turnInto": "轉換成塊",
  "mobileActionBar.accessibility.udno": "撤消編輯",
  "mobileActionBar.accessibility.underline": "下劃線",
  "mobileActionBar.accessibility.unindent": "取消縮進塊",
  "mobileActionBar.actionMenuTitle.blockColor": "顏色",
  "mobileActionBar.actionMenuTitle.insertBlock": "插入塊",
  "mobileActionBar.actionMenuTitle.turnInto": "轉換成",
  "mobileActionBar.blockColor.modalTitle": "塊顏色",
  "mobileActionBar.bold.symbol": "B",
  "mobileActionBar.code.symbol": "代碼",
  "mobileActionBar.color.buttonTitle": "顏色",
  "mobileActionBar.databaseSection.title": "數據庫",
  "mobileActionBar.insertBlock.modalTitle": "插入塊",
  "mobileActionBar.italic.symbol": "i",
  "mobileActionBar.link.symbol": "鏈接",
  "mobileActionBar.more.buttonTitle": "更多",
  "mobileActionBar.nativeMenu.textColor.title": "顏色",
  "mobileActionBar.strikeThrough.symbol": "S",
  "mobileActionBar.templateButtonTitle": "選擇模板...",
  "mobileActionBar.templates.buttonTitle": "選擇模板…",
  "mobileActionBar.templates.modalTitle": "模板",
  "mobileActionBar.turnInto.buttonTitle": "轉換成","mobileActionBar.turnInto.modalTitle": "轉換成",
  "mobileActionBar.underline.symbol": "U",
  "mobileAppDownloadStep.button": "下載Notion",
  "mobileAppDownloadStep.subTitle":
    "在移動瀏覽器中完成Notion設置或下載用於{os}的Notion。",
  "mobileAppDownloadStep.title": "<boldtext>應用程序下載</boldtext>",
  "mobileCalendarDayMenu.newItemButton.label": "新項目",
  "mobileCalendarDayMenu.noResults.message": "無項目",
  "moveBlockMenu.addFromTemplate.title": "從模板添加",
  "moveBlockMenu.addToPrivatePages":
    "移動到<mediumtext>私人頁面</mediumtext>",
  "moveBlockMenu.addToSpace.title": "添加到工作區",
  "moveBlockMenu.currentPage.pluralAddTitle": "新的子頁面",
  "moveBlockMenu.currentPage.singleAddTitle": "新的子頁面",
  "moveBlockMenu.errorOnMove.label": "出了些問題。",
  "moveBlockMenu.learnMoreButton.title": "了解更多",
  "moveBlockMenu.learnMoreButton.tooltip": "選擇要移動到的目的地",
  "moveBlockMenu.mobileAddTo.label": "添加到另一頁面…",
  "moveBlockMenu.mobileMoveTo.label": "移動到",
  "moveBlockMenu.mobileNewPageInj.label": "添加到另一頁面",
  "moveBlockMenu.moveToSpace.title": "移動到工作區",
  "moveBlockMenu.moveToTemplate.title": "移動到模板",
  "moveBlockMenu.noResults.label": "無結果",
  "moveBlockMenu.pagesSection.title": "頁面",
  "moveBlockMenu.rightDoneButton.label": "完成",
  "moveBlockMenu.spaceSwitcher.menuTitle": "工作區",
  "moveBlockMenu.suggestedSection.title": "建議",
  "moveBlockMenu.teamsSection.title": "團隊空間",
  "moveToHelpers.afterBulkMoveCompleteToastMessage":
    "移動了 {pageDescriptor}",
  "moveToHelpers.afterBulkMoveCompleteToastMessageWithDestination":
    "將 {pageDescriptor} 移動到了 {destinationName}",
  "moveToHelpers.afterMoveToast.viewButton": "訪問",
  "moveToHelpers.bulkMoveConfirmationButtonLabel":
    "{moveToHelpers.bulkMoveConfirmationButtonLabel, plural, other {移動 {numPagesMoved, plural, one {# 頁} other {# 頁}}}}",
  "moveToHelpers.bulkMoveConfirmationTitle":
    "{moveToHelpers.bulkMoveConfirmationTitle, plural, other {是否確定要將 {pageDescriptor} 移動到 {destinationName}？權限可能會發生改變。}}",
  "moveToHelpers.bulkMoveConfirmationTitleWithoutDestination":
    "{moveToHelpers.bulkMoveConfirmationTitleWithoutDestination, plural, other {是否確定要移動 {pageDescriptor}？權限可能會發生改變。}}",
  "moveToHelpers.bulkMoveConfirmationToPrivateTitle":
    "{moveToHelpers.bulkMoveConfirmationToPrivateTitle, plural, other {是否確定要將 {pageDescriptor} 移動到 {destinationName}？團隊中的所有人都將失去訪問權限。}}",
  "moveToHelpers.bulkMoveConfirmationWithoutDestinationToPrivateTitle":
    "{moveToHelpers.bulkMoveConfirmationWithoutDestinationToPrivateTitle, plural, other {是否確定要移動 {pageDescriptor}？團隊中的所有人都將失去訪問權限。}}",
  "moveToHelpers.destinationName.favorites": "收藏夾",
  "moveToHelpers.destinationName.private": "私人",
  "moveToHelpers.moveBlocksDescriptorString":
    "{numBlocksMoved, plural, other {# 個塊}}",
  "moveToHelpers.movePageDescriptorString":
    "{numPagesMoved, plural, other { 頁}}",
  "moveToMenuActions.movingContent.loadingMessage": "正在移動內容…",
  "moveToMenuRenderer.addNewPageIn.label": "搜索要添加到的頁面…",
  "moveToMenuRenderer.addTo.label": "搜索要添加到的頁面…",
  "moveToMenuRenderer.moveTo.teamLabel": "將頁面移至…",
  "moveToModal.relevantSection.title": "相關",
  "moveToModal.suggestedSection.title": "建議",
  "moveToModal.teamsSection.title": "團隊空間",
  "moveToModal.workspaceSection.title": "工作區",
  "moveToOrCreateMenu.createSubpage.description":
    "在當前塊內，在你的光標所在的位置創建一個新的子頁面。",
  "moveToOrCreateMenu.newPageIn.description":
    "在任何現有頁面內創建一個新頁面，然後一次性地鏈接到此頁面。",
  "moveToOrCreateMenu.turnInto.description":
    "將塊轉換為任何現有數據庫或頁面內的新頁面。",
  "newBadge.label": "新",
  "newBadgeComponent.label": "新",
  "newBlock.abstract.description": "嵌入 Abstract 項目。",
  "newBlock.abstract.fuzzySearchKeywords": "Abstract",
  "newBlock.abstract.title": "Abstract",
  "newBlock.audio.description": "從 SoundCloud、Spotify 等嵌入音頻。",
  "newBlock.audio.fuzzySearchKeywords":
    "Audio Sound Music 音頻 yinpin yin'pin 音效 yinxiao yin'xiao 聲音 shengyin sheng'yin 音樂 yinyue yin'yue",
  "newBlock.audio.title": "音頻",
  "newBlock.boardView.description": "創建看板數據庫視圖。",
  "newBlock.boardView.title": "看板視圖",
  "newBlock.bookmark.description": "通過鏈接創建可視化書籤。",
  "newBlock.bookmark.fuzzySearchKeywords":
    "Web Link Bookmark 網頁 wangye wang'ye 鏈接 lianjie lian'jie 書籤 shuqian shu'qian",
  "newBlock.bookmark.title": "網頁書籤",
  "newBlock.breadcrumb.description": "顯示目前頁面的位置。",
  "newBlock.breadcrumb.fuzzySearchKeywords":
    "Breadcrumb 麵包屑 mianbaoxie mian'bao'xie 頁面路徑 yemianlujing ye'mian'lu'jing 路徑 lujing lu'jing",
  "newBlock.breadcrumb.title": "導航欄",
  "newBlock.bulletedList.description": "創建一個簡單的項目符號列表。",
  "newBlock.bulletedList.fuzzySearchKeywords":
    "Bulleted Unordered List 項目符號 xiangmufuhao xiang'mu'fu'hao 無序 wuxu wu'xu 列表 liebiao lie'biao",
  "newBlock.bulletedList.title": "項目符號列表",
  "newBlock.calendarView.description": "創建日曆數據庫視圖。",
  "newBlock.calendarView.title": "日曆視圖",
  "newBlock.callout.description": "將文字加強突出。",
  "newBlock.callout.fuzzySearchKeywords": "Callout 標註 biaozhu biao'zhu",
  "newBlock.callout.title": "標註",
  "newBlock.code.description": "摘取代碼段。",
  "newBlock.code.fuzzySearchKeywords": "Code ``` 代碼 daima dai'ma",
  "newBlock.code.title": "代碼",
  "newBlock.codepen.description": "嵌入 Codepen 項目。",
  "newBlock.codepen.fuzzySearchKeywords": "CodePen Codepen",
  "newBlock.codepen.title": "CodePen",
  "newBlock.column2.description": "創建 2 列塊。",
  "newBlock.column2.fuzzySearchKeywords": "創建 2 列塊垂直",
  "newBlock.column2.title": "2 列",
  "newBlock.column3.description": "創建 3 列塊。",
  "newBlock.column3.fuzzySearchKeywords": "c3 col3 column3 columns 3col",
  "newBlock.column3.title": "3 列",
  "newBlock.column4.description": "創建 4 列塊。",
  "newBlock.column4.fuzzySearchKeywords": "c4 col4 column4 columns 4col",
  "newBlock.column4.title": "4 列",
  "newBlock.column5.description": "創建 5 列塊。",
  "newBlock.column5.fuzzySearchKeywords": "c5 col5 column5 columns 5col",
  "newBlock.column5.title": "5 列",
  "newBlock.columnList.description": "創建列塊。",
  "newBlock.columnList.fuzzySearchKeywords": "創建列塊垂直",
  "newBlock.columnList.title": "列",
  "newBlock.database.description": "將新數據庫添加為子頁面。",
  "newBlock.database.title": "數據庫",
  "newBlock.databaseFullPage.fuzzySearchKeywords": "數據庫整頁 db",
  "newBlock.databaseFullPage.title": "數據庫 - 整頁",
  "newBlock.databaseInline.fuzzySearchKeywords": "數據庫行內 db",
  "newBlock.databaseInline.title": "數據庫 - 行內",
  "newBlock.deepnote.description": "嵌入 Deepnote 塊。",
  "newBlock.deepnote.fuzzySearchKeywords": "Deepnote",
  "newBlock.deepnote.title": "Deepnote",
  "newBlock.divider.description": "在視覺上創建分隔。",
  "newBlock.divider.fuzzySearchKeywords":
    "Horizontal Rule Divider --- —- 水平 shuiping shui'ping 分隔線 fengexian fen'ge'xian 分割尺 fengechi fen'ge'chi —— ",
  "newBlock.divider.title": "分隔線",
  "newBlock.drive.description": "嵌入谷歌文檔、谷歌表格等。",
  "newBlock.drive.fuzzySearchKeywords":
    "Google Drive 谷歌 guge gu'ge 網盤 wangpan wang'pan 雲盤 yunpan yun'pan",
  "newBlock.drive.title": "谷歌云端硬盤",
  "newBlock.embed.description": "適用於 PDF、谷歌地圖等。",
  "newBlock.embed.fuzzySearchKeywords": "Embed iFrame 嵌入 qianru qian'ru",
  "newBlock.embed.title": "嵌入",
  "newBlock.equation.description": "顯示獨立的數學公式塊。",
  "newBlock.equation.fuzzySearchKeywords":
    "LaTeX Math Block Equation $ 數學 shuxue shu'xue 區塊 qukuai qu'kuai 方程式 fangchengshi fang'cheng'shi 公式 gongshi gong'shi 算式 suanshi suan'shi 等式 dengshi deng'shi 表達式 biaodashi biao'da'shi",
  "newBlock.equation.title": "公式塊",
  "newBlock.excalidraw.description": "嵌入Excalidraw白板。",
  "newBlock.excalidraw.fuzzySearchKeywords": "Excalidraw Xcalidro",
  "newBlock.excalidraw.title": "Excalidraw",
  "newBlock.factory.description": "點擊即可快速重複特定區塊。",
  "newBlock.factory.fuzzySearchKeywords":
    "Template Duplicate Button 模板 muban mu'ban 複製 fuzhi fu'zhi 按鈕 anniu an'niu 副本 fuben fu'ben",
  "newBlock.factory.title": "模板按鈕",
  "newBlock.figma.description": "嵌入 Figma 文件。",
  "newBlock.figma.fuzzySearchKeywords": "Figma",
  "newBlock.figma.title": "Figma",
  "newBlock.file.description": "上傳或以鏈接嵌入。",
  "newBlock.file.fuzzySearchKeywords": "File 文件 wenjian wen'jian",
  "newBlock.file.title": "文件",
  "newBlock.framer.description": "嵌入 Framer 原型。",
  "newBlock.framer.fuzzySearchKeywords": "Framer",
  "newBlock.framer.title": "Framer",
  "newBlock.fullPageBoard.fuzzySearchKeywords":
    "Board - Full page 看板 kanban kan'ban 整頁 zhengye zheng'ye",
  "newBlock.fullPageBoardDatabase.description": "將看板數據庫添加為子頁面。",
  "newBlock.fullPageBoardDatabase.fuzzySearchKeywords": "看板數據庫 - 整頁",
  "newBlock.fullPageBoardDatabase.title": "看板數據庫 - 整頁",
  "newBlock.fullPageCalendar.fuzzySearchKeywords":
    "Calendar - Full page 日曆 rili ri'li 整頁 zhengye zheng'ye",
  "newBlock.fullPageCalendarDatabase.description":
    "將日曆數據庫添加為子頁面。",
  "newBlock.fullPageCalendarDatabase.fuzzySearchKeywords":
    "日曆數據庫 - 整頁",
  "newBlock.fullPageCalendarDatabase.title": "日曆數據庫 - 整頁",
  "newBlock.fullPageGallery.fuzzySearchKeywords":
    "Gallery - Full page 畫廊 hualang hua'lang 整頁 zhengye zheng'ye",
  "newBlock.fullPageGalleryDatabase.description":
    "將畫廊數據庫添加為子頁面。",
  "newBlock.fullPageGalleryDatabase.fuzzySearchKeywords": "畫廊數據庫 - 整頁",
  "newBlock.fullPageGalleryDatabase.title": "畫廊數據庫 - 整頁",
  "newBlock.fullPageList.fuzzySearchKeywords":
    "List - Full page 列表 liebiao lie'biao 整頁 zhengye zheng'ye",
  "newBlock.fullPageListDatabase.description": "將列表數據庫添加為子頁面。",
  "newBlock.fullPageListDatabase.fuzzySearchKeywords": "列表數據庫 - 整頁",
  "newBlock.fullPageListDatabase.title": "列表數據庫 - 整頁",
  "newBlock.fullPageTable.fuzzySearchKeywords":
    "Table - Full page 表格 biaoge biao'ge 整頁 zhengye zheng'ye",
  "newBlock.fullPageTableDatabase.description": "將表格數據庫添加為子頁面。",
  "newBlock.fullPageTableDatabase.fuzzySearchKeywords": "表格數據庫 - 整頁",
  "newBlock.fullPageTableDatabase.title":"表格數據庫 - 整頁",
  "newBlock.fullPageTimeline.fuzzySearchKeywords":
    "Timeline - Full page 時間軸 shijianzhou shi'jian'zhou 整頁 zhengye zheng'ye",
  "newBlock.fullPageTimelineDatabase.description":
    "將時間軸數據庫添加為子頁面。",
  "newBlock.fullPageTimelineDatabase.fuzzySearchKeywords":
    "時間軸數據庫 - 整頁",
  "newBlock.fullPageTimelineDatabase.title": "時間軸數據庫 - 整頁",
  "newBlock.galleryView.description": "創建畫廊數據庫視圖。",
  "newBlock.galleryView.title": "畫廊視圖",
  "newBlock.gist.description": "嵌入 GitHub Gist。",
  "newBlock.gist.fuzzySearchKeywords": "GitHub Gist",
  "newBlock.gist.title": "GitHub Gist",
  "newBlock.header.description": "大大的標題。",
  "newBlock.header.fuzzySearchKeywords": "Heading 1 # 標題 biaoti biao'ti",
  "newBlock.header.title": "標題 1",
  "newBlock.hex.description": "嵌入十六進制單元格。",
  "newBlock.hex.fuzzySearchKeywords": "十六進制",
  "newBlock.hex.title": "十六進制",
  "newBlock.image.description": "上傳或以鏈接嵌入。",
  "newBlock.image.fuzzySearchKeywords":
    "Image Picture 圖片 tupian tu'pian 圖像 tuxiang tu'xiang 圖形 tuxing tu'xing",
  "newBlock.image.title": "圖片",
  "newBlock.inlineBoard.fuzzySearchKeywords":
    "Board - Inline 看板 kanban kan'ban 內嵌 neiqian nei'qian",
  "newBlock.inlineCalendar.fuzzySearchKeywords":
    "Calendar - Inline 日曆 rili ri'li 內嵌 neiqian nei'qian",
  "newBlock.inlineGallery.fuzzySearchKeywords":
    "Gallery - Inline 畫廊 hualang hua'lang 內嵌 neiqian nei'qian",
  "newBlock.inlineList.fuzzySearchKeywords":
    "List - Inline 列表 liebiao lie'biao 內嵌 neiqian nei'qian",
  "newBlock.inlineTable.fuzzySearchKeywords":
    "Table - Inline 表格 biaoge biao'ge 內聯 neilian nei'lian",
  "newBlock.inlineTimeline.fuzzySearchKeywords":
    "Timeline - Inline 時間軸-內聯 shijianzhou-neilian shi'jian'zhou'-'nei'lian",
  "newBlock.inlineTimelineDatabase.description":
    "將時間軸數據庫添加到此頁面。",
  "newBlock.inlineTimelineDatabase.fuzzySearchKeywords":
    "時間軸數據庫 - 行內",
  "newBlock.inlineTimelineDatabase.title": "時間軸數據庫 - 行內",
  "newBlock.invision.description": "嵌入 Invision 項目。",
  "newBlock.invision.fuzzySearchKeywords": "Invision",
  "newBlock.invision.title": "Invision",
  "newBlock.linkToCollection.description": "將現有數據庫添加到此頁面。",
  "newBlock.linkToCollection.fuzzySearchKeywords":
    "Create linked database 創建 chuangjian chuang'jian 鏈接 lianjie lian'jie 數據庫 shujuku shu'ju'ku",
  "newBlock.linkToPage.description": "鏈接到現有頁面。",
  "newBlock.linkToPage.fuzzySearchKeywords":
    "Link to page ltp 鏈接 lianjie lian'jie 頁面 yemian ye'mian",
  "newBlock.linkToPage.title": "鏈接到頁面",
  "newBlock.linkedViewOfCollection.description": "將現有數據庫添加到此頁面。",
  "newBlock.linkedViewOfCollection.fuzzySearchKeywords":
    "創建數據庫 db 的鏈接視圖",
  "newBlock.linkedViewOfCollection.title": "鏈接的視圖",
  "newBlock.listView.description": "創建列表數據庫視圖。",
  "newBlock.listView.title": "列表視圖",
  "newBlock.loom.description": "嵌入 Loom 錄像。",
  "newBlock.loom.fuzzySearchKeywords": "Loom",
  "newBlock.loom.title": "Loom",
  "newBlock.maps.description": "嵌入谷歌地圖。",
  "newBlock.maps.fuzzySearchKeywords":
    "Google Maps 谷歌 guge gu'ge 地圖 ditu di'tu",
  "newBlock.maps.title": "谷歌地圖",
  "newBlock.mermaidCode.description": "通過編寫代碼創建圖表。",
  "newBlock.mermaidCode.fuzzySearchKeywords":
    "mermaid 圖形 graphviz 流程圖代碼",
  "newBlock.mermaidCode.title": "代碼 - Mermaid",
  "newBlock.miro.description": "嵌入 Miro 畫板。",
  "newBlock.miro.fuzzySearchKeywords": "Miro",
  "newBlock.miro.title": "Miro",
  "newBlock.numberedList.description": "創建一個帶有序號的列表。",
  "newBlock.numberedList.fuzzySearchKeywords":
    "Numbered Ordered List 編號 bianhao bian'hao 有序 youxu you'xu 列表 liebiao lie'biao 序號 xuhao xu'hao",
  "newBlock.numberedList.title": "有序列表",
  "newBlock.page.description": "在此頁面中嵌入子頁面。",
  "newBlock.page.fuzzySearchKeywords": "Page 頁面 yemian ye'mian",
  "newBlock.page.title": "頁面",
  "newBlock.pdf.description": "嵌入 PDF 文件。",
  "newBlock.pdf.fuzzySearchKeywords": "PDF P'D'F",
  "newBlock.pdf.title": "PDF",
  "newBlock.quote.description": "摘取引用。",
  "newBlock.quote.fuzzySearchKeywords": "Quote 引用 yinyong yin'yong",
  "newBlock.quote.title": "引用",
  "newBlock.replit.description": "嵌入Repl。",
  "newBlock.replit.fuzzySearchKeywords": "Replit Repl",
  "newBlock.replit.title": "Replit",
  "newBlock.simple_table.description": "為表格內容添加表格",
  "newBlock.simple_table.fuzzySearchKeywords": "表",
  "newBlock.simple_table.title": "表",
  "newBlock.sketch.description": "嵌入Sketch文檔。",
  "newBlock.sketch.fuzzySearchKeywords": "Sketch",
  "newBlock.sketch.title": "Sketch",
  "newBlock.subHeader.description": "中標題。",
  "newBlock.subHeader.fuzzySearchKeywords":
    "sub heading 2 ## 子標題 zibiaoti zi'biao'ti 副標題 fubiaoti fu'biao'ti 中標題 zhongbiaoti zhong'biao'ti",
  "newBlock.subHeader.title": "標題 2",
  "newBlock.subSubHeader.description": "小標題。",
  "newBlock.subSubHeader.fuzzySearchKeywords":
    "sub heading 3 ### 小標題 xiaobiaoti xiao'biao'ti 子標題zibiaoti zi'biao'ti",
    "newBlock.subSubHeader.title": "標題 3",
    "newBlock.tab.description": "選項卡",
    "newBlock.tab.keywords": "選項卡",
    "newBlock.tab.title": "創建製表符塊",
    "newBlock.tableOfContents.description": "顯示頁面大綱。",
    "newBlock.tableOfContents.fuzzySearchKeywords":
      "TOC Table of Contents 目錄 mulu mu'lu 大綱 dagang da'gang",
    "newBlock.tableOfContents.title": "目錄",
    "newBlock.tableView.description": "為新數據庫或現有數據庫添加表格視圖。",
    "newBlock.tableView.title": "表格視圖",
    "newBlock.text.description": "以純文本開始書寫。",
    "newBlock.text.fuzzySearchKeywords":
      "Plain Text 純文本 chunwenben chun'wen'ben 文本 wenben wen'ben 純文字 chunwenzi chun'wen'zi 文字 wenzi wen'zi",
    "newBlock.text.title": "文本",
    "newBlock.timelineView.description": "創建時間軸數據庫視圖。",
    "newBlock.timelineView.title": "時間軸視圖",
    "newBlock.toDo.description": "使用待辦清單追踪任務。",
    "newBlock.toDo.fuzzySearchKeywords":
      "Todo To-Do Checkbox List 待辦 daiban dai'ban 待辦事項 daibanshixiang dai'ban'shi'xiang 複選框 fuxuankuang fu'xuan'kuang 清單 qingdan qing'dan 列表 liebiao lie'biao",
    "newBlock.toDo.title": "待辦清單",
    "newBlock.toggle.description": "折疊列表可以選擇性隱藏或顯示內部內容。",
    "newBlock.toggle.fuzzySearchKeywords":
      "Toggle list 切換 qiehuan qie'huan 列表 liebiao lie'biao 切換列表 qiehuanliebiao qie'huan'lie'biao",
    "newBlock.toggle.title": "折疊列表",
    "newBlock.toggleFormatHeader.description": "將內容隱藏在大標題內。",
    "newBlock.toggleFormatHeader.fuzzySearchKeywords": "折疊標題 1 # h1",
    "newBlock.toggleFormatHeader.keywords": "折疊格式標題 1",
    "newBlock.toggleFormatHeader.title": "折疊標題 1",
    "newBlock.toggleFormatSubHeader.description": "將內容隱藏在中等標題內。",
    "newBlock.toggleFormatSubHeader.fuzzySearchKeywords": "切換子標題 2 ## h2",
    "newBlock.toggleFormatSubHeader.keywords": "折疊格式標題 2",
    "newBlock.toggleFormatSubHeader.title": "折疊標題 2",
    "newBlock.toggleFormatSubSubHeader.description": "將內容隱藏在小標題內。",
    "newBlock.toggleFormatSubSubHeader.fuzzySearchKeywords":
      "切換子子標題 3 ### h3",
    "newBlock.toggleFormatSubSubHeader.keywords": "折疊格式標題 3",
    "newBlock.toggleFormatSubSubHeader.title": "折疊標題 3",
    "newBlock.transclusionContainer.description": "同步所有頁面的內容。",
    "newBlock.transclusionContainer.fuzzySearchKeywords":
      "Create synced block reference transclusion portal embed 同步 tongbu tong'bu",
    "newBlock.transclusionContainer.title": "同步塊",
    "newBlock.tweet.description": "嵌入推文。",
    "newBlock.tweet.fuzzySearchKeywords": "Tweet 推文 tuiwen tui'wen",
    "newBlock.tweet.title": "推文",
    "newBlock.typeform.description": "嵌入 Typeform 表單。",
    "newBlock.typeform.fuzzySearchKeywords": "Typeform",
    "newBlock.typeform.title": "Typeform",
    "newBlock.video.description": "從 YouTube、Vimeo 等嵌入視頻。",
    "newBlock.video.fuzzySearchKeywords": "Video 視頻 shipin shi'pin",
    "newBlock.video.title": "視頻",
    "newBlock.whimsical.description": "嵌入 Whimsical 畫板。",
    "newBlock.whimsical.fuzzySearchKeywords": "Whimsical",
    "newBlock.whimsical.title": "Whimsical",
    "newDiscussionMenu.discardCommentConfirmationDialog.discardButton.label":
      "放棄",
    "newDiscussionMenu.discardCommentConfirmationDialog.prompt":
      "你想放棄這條評論嗎？",
    "notificationActions.archiveNotificationsError.message": "出了些問題。",
    "notificationAndPersonalSettings.notificationSection.title": "我的通知",
    "notificationAndPersonalSettings.settingsSection.title": "我的設置",
    "notificationSettings.desktopNotificationSettings.description":
      "通過你的桌面應用接收提及和評論的即時推送通知。",
    "notificationSettings.desktopNotificationSettings.title": "桌面推送通知",
    "notificationSettings.emailAlwaysNotificationSettings.description":
      "通過電子郵件接收更新，即使你在應用上處於活動狀態。",
    "notificationSettings.emailAlwaysNotificationSettings.title":
      "始終發送電子郵件通知",
    "notificationSettings.emailNotificationSettings.description":
      "通過電子郵件接收你關注的所有頁面的編輯摘要、評論和提及。",
    "notificationSettings.emailNotificationSettings.title": "電子郵件通知",
    "notificationSettings.helpButton.caption": "了解通知與設置",
    "notificationSettings.mobilePushNotificationSettings.description":
      "通過你的移動應用接收提及和評論的推送通知。",
    "notificationSettings.mobilePushNotificationSettings.title":
      "移動端推送通知",
    "notificationSettingsButton.goOnline.prompt": "請連接網絡後設置。",
    "notificationSettingsButton.mobileSidebar.label": "通知與設置",
    "notificationSettingsButton.mobileSidebar.title": "通知與設置",
    "notificationSettingsButton.rightActionButton.done": "完成",
    "notificationUpdates.offline.message": "請連接網絡後查看動態。",
    "notificationUpdates.unknownErrorMessage": "出了些問題。",
    "notionAppContainer.dialog.mismatchedOriginURL.okayButton.label": "好的",
    "notionAppContainer.dialog.notionAppNotInApplications.message":
      "請將 Notion 應用程序移至 /Applications 文件夾，以使自動更新程序正常工作。",
    "numberedListBlock.placeholder.label": "項目",
    "oauthAuthorization.loadingMessage": "正在授權…",
    "oauthAuthorizationPage.error.cancelButton.label": "取消",
    "oauthAuthorizationPage.error.clientNotFound.body":
      "客戶端 ID 缺失或不完整。請參閱<inlinetextlink>開發人員文檔</inlinetextlink>以獲得更多幫助。 ",
      "oauthAuthorizationPage.error.genericError.title": "出了些問題",
      "oauthAuthorizationPage.error.integrationAlreadyInstalled.body":
        "你可以在“設置”中查看和刪除已添加的集成。",
      "oauthAuthorizationPage.error.integrationAlreadyInstalled.openWorkspaceSettingsButton.label":
        "打開設置",
      "oauthAuthorizationPage.error.integrationAlreadyInstalled.title":
        "此集成已添加到 {workspaceName}",
      "oauthAuthorizationPage.error.integrationNotApproved.body":
        "有關更多信息，請聯繫系統管理員。",
      "oauthAuthorizationPage.error.integrationNotApproved.title":
        '你無權將集成"{integrationName}"添加到 {workspaceName}',
      "oauthAuthorizationPage.error.invalidClientId.body":
        "客戶端 ID 缺失或不完整。請參閱<inlinetextlink>開發人員文檔</inlinetextlink>以獲得更多幫助。",
      "oauthAuthorizationPage.error.invalidRedirectUri.body":
        "redirect_uri 缺失或無效。請參閱<inlinetextlink>開發人員文檔</inlinetextlink>以獲得更多幫助。",
      "oauthAuthorizationPage.error.invalidResponseType":
        "response_type 缺失或無效。請參閱<inlinetextlink>開發人員文檔</inlinetextlink>以獲得更多幫助。",
      "oauthAuthorizationPage.error.notAnAdmin.body":
        "請與管理員聯繫以授予你訪問權限，或切換到其他工作區。",
      "oauthAuthorizationPage.error.notAnAdmin.switchWorkspaceButton.label":
        "切換工作區",
      "oauthAuthorizationPage.error.notAnAdmin.title":
        "不允許向 {workspaceName} 添加集成",
      "oauthAuthorizationPage.permissionStep.cancelButton.label": "取消",
      "oauthAuthorizationPage.permissionStep.continueButton.label": "選擇頁面",
      "oauthAuthorizationPage.permissionStep.finishButton.label": "允許訪問",
      "oauthAuthorizationPage.permissionStep.integrationApprovalNotice":
        "授權此集成將其添加到工作區的批准列表中。其他工作區成員將能夠安裝此集成。",
      "oauthAuthorizationPage.permissionStep.intro":
        "<inlinetextlink>{integrationName}</inlinetextlink> 想要",
      "oauthAuthorizationPage.permissionStep.permissionListItem.addNewPages":
        "向 {workspaceName} 添加新頁面",
      "oauthAuthorizationPage.permissionStep.permissionListItem.addNewPages.details":
        "{integrationName} 將能夠在其有權訪問的頁面內添加新頁面。",
      "oauthAuthorizationPage.permissionStep.permissionListItem.insertContent":
        "在你選擇的頁面中創建新內容",
      "oauthAuthorizationPage.permissionStep.permissionListItem.insertContent.description":
        "“{integrationName}”將能夠向你在下一步選擇的頁面添加新內容或子頁面。你稍後還可以通過“分享”菜單與“{integrationName}”分享頁面。",
      "oauthAuthorizationPage.permissionStep.permissionListItem.readContent":
        "查看你選擇的頁面",
      "oauthAuthorizationPage.permissionStep.permissionListItem.readContent.description":
        "“{integrationName}”將能夠查看你在下一步選擇的頁面。你稍後還可以通過“分享”菜單與“{integrationName}”分享頁面。",
      "oauthAuthorizationPage.permissionStep.permissionListItem.updateContent":
        "編輯你選擇的頁面",
      "oauthAuthorizationPage.permissionStep.permissionListItem.updateContent.description":
        "“{integrationName}”將能夠編輯你在下一步選擇的頁面。你稍後還可以通過“分享”菜單與“{integrationName}”分享頁面。",
      "oauthAuthorizationPage.permissionStep.permissionListItem.viewAndEditPages":
        "查看和編輯你選擇的頁面",
      "oauthAuthorizationPage.permissionStep.permissionListItem.viewAndEditPages.description":
        "{integrationName} 將能夠查看和編輯你在下一步選擇的頁面。你稍後還可以通過“分享”菜單與 {integrationName} 分享頁面。",
      "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsers":
        "查看工作區用戶",
      "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsers.detail":
        '"{integrationName}"將能夠查看所有工作區成員和訪客的基本信息，例如他們的姓名和個人資料圖片，但不能查看他們的電子郵件地址。 ',
      "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsersAndEmail":
        "查看工作區用戶及其郵箱地址",
      "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsersAndEmail.detail":
        "“{integrationName}”將能夠查看有關所有工作區成員和訪客數據的基本信息，包括他們的姓名、個人資料圖片和電子郵件地址。",
      "oauthAuthorizationPage.permissionStep.title":
        "<inlinetextlink>{integrationName}</inlinetextlink> 想要訪問 {workspaceName}",
      "oauthAuthorizationPage.permissionStep.warning.body":
        "如果繼續，你可能會共享敏感信息。Notion 不會審核第三方集成，例如“{integrationName}”。通過查看其<privacypolicylink>隱私政策</privacypolicylink>和<termsofservicelink>服務條款</termsofservicelink>了解“{integrationName}”如何處理你的數據。",
      "oauthAuthorizationPage.permissionStep.warning.title":
        "確保你信任“{integrationName}” ({redirectUriDomain})",
      "oauthAuthorizationPage.selectPageStep.empty": "內無頁面",
      "oauthAuthorizationPage.selectPagesStep.backButton.label": "返回",
      "oauthAuthorizationPage.selectPagesStep.finishButton.label": "允許訪問",
      "oauthAuthorizationPage.selectPagesStep.pagePicker.manuallyAddedPagesSection.title":
        "手動添加",
      "oauthAuthorizationPage.selectPagesStep.pagePicker.privateSection.title":
        "私人",
      "oauthAuthorizationPage.selectPagesStep.pagePicker.search.placeholder":
        "在 {workspaceName} 中搜索頁面",
      "oauthAuthorizationPage.selectPagesStep.pagePicker.sharedSection.title":
        "已共享",
      "oauthAuthorizationPage.selectPagesStep.pagePicker.workspaceSection.title":
        "工作區",
      "oauthAuthorizationPage.selectPagesStep.title":
        "允許“{integrationName}”訪問這些頁面",
      "oauthAuthorizationPage.workspaceSwitcher.disabledWorkspace.tooltip":
        "此集成只能由成員或管理員添加。",
      "oauthPageSearchResults.disabledResult.byAncestor.message":
      "已通過 {ancestorPageName} 添加",
    "oauthPageSearchResults.disabledResult.bySelf.message": "已添加",
    "oauthPageSearchResults.noResults.placeholder": "無結果",
    "offlineErrors.offlineErrorMessage": "脫機。",
    "onboarding.desktopLogoutOption.text":
      "你正在為 {userEmail} 新建帳戶。{br}如果你不打算設置新帳戶，可以使用<closelink>另一個郵箱地址登錄。</closelink>",
    "onboarding.workspaceCreate.buttonLabel.title": "添加 logo",
    "onboardingActions.closeOnboardingDialog.existingUser.confirmCloseButton.label":
      "回到之前的工作區",
    "onboardingActions.closeOnboardingDialog.existingUser.continueButton.label":
      "繼續設置",
    "onboardingActions.closeOnboardingDialog.existingUser.subtitle":
      "你將回到之前的工作區。",
    "onboardingActions.closeOnboardingDialog.existingUser.title":
      "取消設置新的工作區？",
    "onboardingActions.closeOnboardingDialog.newUser.confirmCloseButton.label":
      "返回主頁",
    "onboardingActions.closeOnboardingDialog.newUser.continueButton.label":
      "繼續設置",
    "onboardingActions.closeOnboardingDialog.newUser.subtitle":
      "你將回到 Notion 主頁。",
    "onboardingActions.closeOnboardingDialog.newUser.title": "取消新帳戶設置？",
    "onboardingActions.onboardingErrorDialog.closeButton.label": "關閉",
    "onboardingActions.onboardingErrorDialog.message": "糟糕，出了些問題。",
    "onboardingActions.onboardingErrorDialog.startOverButton.label": "重新開始",
    "onboardingAppDownload.step.downloadMacButton": "下載 Windows 應用",
    "onboardingAppDownload.step.downloadWindowsButton": "下載 Windows 應用",
    "onboardingAppDownload.step.title": "下載 Notion",
    "onboardingAppDownload.subtitle.mac":
      "使用 Mac 版 Notion 應用，以獲得更好的離線和通知體驗。",
    "onboardingAppDownload.subtitle.macAndWindows":
      "使用 Mac 版或 Windows 版 Notion 應用，以獲得更好的離線和通知體驗。",
    "onboardingAppDownload.subtitle.windows":
      "使用 Windows 版 Notion 應用，以獲得更好的離線和通知體驗。",
    "onboardingChecklist.collab.comments.text":
      "請向團隊成員留言反饋、提問和意見。直接在頁面的評論主題中討論想法，協調您的意見並做出決定。",
    "onboardingChecklist.collab.comments.title": "評論",
    "onboardingChecklist.collab.mentions.text":
      "要支持團隊成員，請在頁面或評論中鍵入@，然後輸入團隊成員的姓名。收到通知的團隊成員可以立即加入。",
    "onboardingChecklist.collab.mentions.title": "提及",
    "onboardingChecklist.createContent.block.title": "塊",
    "onboardingChecklist.createContent.blockTypes.text":
      "塊是組成Notion頁面的元素。塊可以包含不同類型的內容，包括文本、圖像、複選框和表格。",
    "onboardingChecklist.createContent.rearrangeBlocks.text":
      "將塊替換為其他內容類型，以便以新的方式使用、顯示和更詳細地表達包括的信息。",
    "onboardingChecklist.createContent.rearrangeBlocks.title": "重新排列塊",
    "onboardingChecklist.createContent.transformBlocks.title": "改變塊",
    "onboardingChecklist.createPages.slashCommand.text":
      "如果鍵入/，則會出現一個菜單，其中包含可以添加到Notion頁面的所有內容類型。😋",
    "onboardingChecklist.createPages.slashCommand.title": "斜線命令",
    "onboardingChecklist.createPages.subPage.text":
      "在頁面上輸入/頁面命令以創建子頁面。您可以更有層次地組織你的內容，方便隨時查找。",
    "onboardingChecklist.createPages.subPage.title": "子頁",
    "onboardingChecklist.createPages.text":
      "單擊工作區左下角的+新頁面或側欄中的+按鈕，即可創建新頁面。",
    "onboardingChecklist.createPages.title": "創建新頁面",
    "onboardingChecklist.share.addTeammates.text":
      "和團隊一起工作嗎？通過從“設置”和“成員”菜單添加團隊成員，您可以共享所有相同的Notion工作空間。",
    "onboardingChecklist.share.addTeammates.title": "添加團隊成員",
    "onboardingChecklist.share.button.text":
      "使用頁面右上角的“分享”按鈕，您可以邀請非工作區成員以及非成員進行協作。",
    "onboardingChecklist.share.button.title": "“分享”按鈕",
    "onboardingChecklist.tipsAndTricks.downloadApps.text":
      "下載<a1>桌面</a1>或<a2>移動</a2>應用。",
    "onboardingChecklist.tipsAndTricks.exploreTemplates.text":
      "<link>查看模板</link>",
    "onboardingChecklist.tipsAndTricks.import.text":
      "查看我們的<a>幫助中心</a>了解更多信息！",
    "onboardingChecklist.tipsAndTricks.templates.text":
      "使用我們的<a>模板畫廊</a>瀏覽模板！",
    "onboardingChecklist.tipsAndTricks.title": "了解詳情",
    "onboardingChecklist.whatIsNotion.mainUsecases":
      "使用Notion，您可以執行各種任務，包括這些任務。",
    "onboardingChecklist.whatIsNotion.title": "Notion簡介",
    "onboardingChecklist.whatIsNotion.youtubeVideoLink":
      "https://www.youtube.com/embed/oTahLEX3NXo",
    "onboardingChecklistButton.collaborateWithOthers.displayName":
      "與其他用戶協作",
    "onboardingChecklistButton.createContent.displayName": "創建內容",
    "onboardingChecklistButton.createPages.displayName": "創建頁面",
    "onboardingChecklistButton.getMoreHelp.button": "獲得更多幫助",
    "onboardingChecklistButton.nextStage.complete": "完成！🎉",
    "onboardingChecklistButton.shareYourWork.displayName": "工作共享",
    "onboardingChecklistButton.stageFooter.next": "下一個",
    "onboardingChecklistButton.stageTracker":
      "第 {currentStageNumber} 個，共 {totalStageNumber} 個",
    "onboardingChecklistButton.stagesComplete":
      "已查看第 {numStagesComplete} 個，共 {numTotalStages} 個。",
    "onboardingChecklistButton.subtitleText":
      "歡迎使用一體化的 Notion 全能工作區。從這裡開始了解基礎知識。",
    "onboardingChecklistButton.tipsAndTricks.displayName": "幫助和技巧",
    "onboardingChecklistButton.title": "<b>Notion 基礎知識</b>",
    "onboardingChecklistButton.tooltip": "Notion 基礎知識",
    "onboardingChecklistButton.whatIsNotion.displayName": "Notion 是什麼？ ",
    "onboardingGDPR.agreeButton.label": "同意",
    "onboardingGDPR.consentInfo.paragraph1.body":
      "我們使用 Cookie 來安全地識別你的帳戶，讓你保持登錄狀態，並改進我們的服務。",
    "onboardingGDPR.consentInfo.paragraph2.body":
      "我們透過行為數據分析來改進產品並解決客戶的問題。其中包括 {intercomLink} 、 {amplitudeLink} 、 {segmentLink} 、 {snowflakeLink} 、 {crashlyticsLink}和{logglyLink}。我們將默認啟用行為數據分析，因為它對我們的業務至關重要。",
    "onboardingGDPR.consentInfo.paragraph3.body":
      "你可以通過發送電子郵件到 {emailLink} 來撤銷你對行為數據分析的許可。",
    "onboardingGDPR.consentInfo.paragraph4.body":
      "我們偶爾會發送產品更新和市場營銷的電子郵件。每封電子郵件都會附上能讓你立即退訂的鏈接。",
    "onboardingGDPR.consentInfo.paragraph5.body":
      "請閱讀我們的<termslink>服務條款與隱私政策</termslink>以獲取更多信息。",
    "onboardingGDPR.disagreeButton.label": "不同意",
    "onboardingGDPR.mobileAgreeButton.label": "同意",
    "onboardingGDPR.mobileDisagreeButton.label": "不同意",
    "onboardingGDPR.step.title": "隱私與數據收集",
    "onboardingHelpers.personalWorkspaceName": "{userName}的 Notion",
    "onboardingInvite.addEmail.caption":
      "輸入或粘貼一個或多個郵箱地址，以逗號、空格或換行符分隔。",
    "onboardingInvite.bulkInvites.placeholder":
      "penny@myteam.com, varun@company.com, vicky@company.com, ...",
    "onboardingInvite.chrome.subtitle": "邀請你的隊友以充分利用 Notion。",
    "onboardingInvite.chrome.title": "邀請隊友",
    "onboardingInvite.desktopButton.invitedEmails.finishButton":
      "邀請並轉到 Notion",
    "onboardingInvite.desktopButton.labelWithAction": "邀請並繼續",
    "onboardingInvite.email.placeholder": "郵箱地址",
    "onboardingInvite.emailDomainAutoJoinCheckbox.label":
      "允許擁有 <b>@{emailDomain}</b> 郵箱地址的任何人加入此工作區",
    "onboardingInvite.emails.addAnotherButtonText": "添加另一個",
    "onboardingInvite.emails.addMoreOrInviteInBulkText": "添加更多或批量邀請",
    "onboardingInvite.emails.sendInvites": "發送邀請",
    "onboardingInvite.finishButton": "轉到 Notion",
    "onboardingInvite.invalidEmails.error.message":
      "有些郵箱地址似乎無效。再試一次？",
    "onboardingInvite.mobile.copyButton.title": "複製邀請鏈接",
    "onboardingInvite.mobileStep.subtitle": "Notion 適合任何規模的團隊。",
    "onboardingInvite.mobileStep.title": "邀請隊友",
    "onboardingInvite.shareInviteLink.caption":
      "當你的隊友點擊此鏈接時，他們會自動添加到你的工作區。",
    "onboardingInvite.sharingButton.copied": "已復制！",
    "onboardingInvite.sharingButton.copy": "獲取可共享的鏈接",
    "onboardingInvite.sharingButton.tooltip.copy": "使用此鏈接邀請隊友",
    "onboardingInviteNew.error.invalidEmail.message": "無效的郵箱地址。",
    "onboardingMobileScroller.continueButton.label": "繼續",
    "onboardingMobileTutorial.button.skip": "跳過",
    "onboardingMobileTutorial.button.takeMeToNotion": "轉到 Notion",
    "onboardingMobileTutorial.getStartedButton.label": "立即開始",
    "onboardingMobileTutorial.nextButton.label": "下一個",
    "onboardingPopup.next": "下一個",
    "onboardingPopup.skip": "跳過其餘部分",
    "onboardingProfile.addProfilePhotoButton.label": "添加照片",
    "onboardingProfile.changeProfilePhotoButton.label": "更改",
    "onboardingProfile.continueButton.label": "繼續",
    "onboardingProfile.dialogError.photoUploadFailure.message": "上傳失敗。",
    "onboardingProfile.mobileNameInput.placeholder":
      "例如 Ada Lovelace、Ada、AL",
    "onboardingProfile.mobileNameQuestion.label": "我們應該怎麼稱呼你？",
    "onboardingProfile.mobileStage.subtitle": "首先，請向我們介紹一下你自己。",
    "onboardingProfile.mobileStage.title": "歡迎來到 Notion",
    "onboardingProfile.nameInput.placeholder": "例如 Ada Lovelace、Ada、AL",
    "onboardingProfile.nameQuestion.label": "我們應該怎麼稱呼你？",
    "onboardingProfile.nameUndefinedError.message": "未填寫名稱。",
    "onboardingProfile.passwordGuidelines":
      "密碼長度至少為 15 個字母，或者長度至少為 10 個字符且同時包含字母和數字。",
    "onboardingProfile.passwordInput.label": "設置密碼",
    "onboardingProfile.passwordInput.placeholder": "新密碼",
    "onboardingProfile.passwordUndefinedError.message": "未填寫密碼。",
    "onboardingProfile.stage.subtitle": "首先，請向我們介紹一下你自己。",
    "onboardingProfile.stage.title": "歡迎來到 Notion",
    "onboardingProfile.uploading.text": "上傳中…",
    "onboardingStateActions.creatingWorkspace.loadingMessage": "馬上就好…",
    "onboardingStateActions.errorMessage.domainClaim.workspaceCreationPrevented":
      "工作區創建已禁用。請與系統管理員聯繫，以獲得對工作區的訪問權限或創建新的工作區。",
    "onboardingStateActions.errorMessage.domainClaim.workspaceCreationPreventedWithEmail":
      "你已登錄 {userEmailAddress}，但無權訪問任何工作區。請聯繫你的 IT 部門以獲取 Notion 訪問權限。",
    "onboardingStateActions.errorMessage.noActionToPerform":
      "沒有對{onboardingRedirectType}可執行的操作",
    "onboardingStateActions.errorMessage.spaceDidNotLoad": "無法加載工作區。",
    "onboardingStateActions.errorMessage.spaceDoesNotExist": "工作區不存在。",
    "onboardingStateActions.joiningWorkspace.loadingMessage": "正在加入團隊…",
    "onboardingStateActions.navigatingToWorkspace.loadingMessage":
      "正在轉到你的工作區……",
    "onboardingSurvey.cancelButton.label": "跳過",
    "onboardingSurvey.continueButton.label": "繼續",
    "onboardingSurvey.persona.label": "你從事哪一類工作？",
    "onboardingSurvey.persona.popuplabel": "你的職能",
    "onboardingSurvey.subtitle": "我們將根據你的選擇定制你的 Notion 體驗。",
    "onboardingSurvey.teamRole.label": "你的角色是什麼？ ",
    "onboardingSurvey.teamRole.popuplabel": "你的角色",
    "onboardingSurvey.title": "請向我們介紹一下你自己",
    "onboardingSurvey.usecase.label": "你打算用 Notion 做什麼？",
    "onboardingSurvey.usecase.popuplabel": "用 Notion 來...",
    "onboardingSurvey.usecasesSelect.placeholder": "選擇一個或多個...",
    "onboardingSurvey.usecasesSelect.plural.placeholder":
      "{count, plural, other {已選擇 {count} 個}}",
    "onboardingTeamRoleSelect.teamRoleSelect.companyLead": "C 級或 VP",
    "onboardingTeamRoleSelect.teamRoleSelect.notLead": "我不管理團隊",
    "onboardingTeamRoleSelect.teamRoleSelect.orgLead": "部門主管",
    "onboardingTeamRoleSelect.teamRoleSelect.placeholder": "選擇團隊角色",
    "onboardingTeamRoleSelect.teamRoleSelect.teamLead": "團隊主管",
    "onboardingTeamRoleSelect.teamTypeMenu.title": "團隊類型",
    "onboardingWorkspaceChoose.createSpaceOption.message": "創建新工作區",
    "onboardingWorkspaceChoose.joinWorkspaceButton.join.label": "加入",
    "onboardingWorkspaceChoose.joinWorkspaceButton.label": "{workspaceName}",
    "onboardingWorkspaceChoose.joinWorkspaceButton.memberCount.label":
      "{memberCount, plural, other {{memberCount} 個成員}}",
    "onboardingWorkspaceChoose.mobileStage.subtitle":
      "{numberOfWorkspaces, plural, other {看來你已被邀請到 {numberOfWorkspaces} 個工作區，現在就加入吧！}}",
    "onboardingWorkspaceChoose.mobileStage.title": "加入工作區",
    "onboardingWorkspaceChoose.stage.disableSpaceCreationFooter":
      "你的系統管理員已禁用創建工作區。",
    "onboardingWorkspaceChoose.stage.disableSpaceCreationTooltip":
      "你的系統管理員已禁用創建工作區。",
    "onboardingWorkspaceChoose.stage.subtitle":
      "{numberOfWorkspaces, plural, other {你已被邀請到 {numberOfWorkspaces} 個工作區。選擇加入，或創建新的工作區。}}",
    "onboardingWorkspaceChoose.stage.subtitleWithNoCreateOption":
      "{numberOfWorkspaces, plural, other {您已受邀加入 {numberOfWorkspaces} 個工作區。請選擇一個加入。}}",
    "onboardingWorkspaceChoose.stage.title": "與你的隊友一起加入 Notion",
    "onboardingWorkspaceCreate.fieldUndefinedError.message":
      "未定義工作區創建字段。",
    "onboardingWorkspaceCreate.nextButton.labelInvite": "繼續",
    "onboardingWorkspaceCreate.roleOnTeam.label": "在團隊中的角色",
    "onboardingWorkspaceCreate.stage.subtitle": "為你的隊友填寫一些詳細信息。",
    "onboardingWorkspaceCreate.stage.team.title": "創建團隊工作區",
    "onboardingWorkspaceCreate.workspaceNameInput.hint": "你公司或組織的名稱。",
    "onboardingWorkspaceCreate.workspaceNameInput.label": "工作區名稱",
    "onboardingWorkspaceCreate.workspaceNameInput.placeholder": "Acme 公司",
    "onboardingWorkspaceMobileScroller.mobileCancelButton.label": "取消",
    "onboardingWorkspacePlanChoose.continueButton.label": "繼續",
    "onboardingWorkspacePlanChoose.goToNotionButton.label": "帶我去 Notion",
    "onboardingWorkspacePlanChoose.mobileStep.subtitle":
      "我們將通過你的選擇簡化初期設置。",
    "onboardingWorkspacePlanChoose.mobileStep.title": "我用 Notion 來…",
    "onboardingWorkspacePlanChoose.personalUseCaseButton.callout":
      "單人使用免費",
    "onboardingWorkspacePlanChoose.personalUseCaseButton.description":
      "寫得更好，想得更清晰。一切井然有序。",
    "onboardingWorkspacePlanChoose.personalUseCaseButton.label": "為我自己",
    "onboardingWorkspacePlanChoose.step.subtitle":
      "我們將通過你的選擇簡化初期設置。",
    "onboardingWorkspacePlanChoose.step.title": "你打算如何使用 Notion？",
    "onboardingWorkspacePlanChoose.teamUseCaseButton.callout": "免費試用",
    "onboardingWorkspacePlanChoose.teamUseCaseButton.description":
      "協作處理你的文檔、項目和知識庫。",
    "onboardingWorkspacePlanChoose.teamUseCaseButton.label": "與我的團隊",
    "outliner.NoDatabasesInside.placeholder": "裡面沒有數據庫",
    "outliner.NoPagesInside.placeholder": "內無頁面",
    "outlinerTeamOverflow.restoreArchivedTeam.disabledTooltipText":
      "只有團隊空間所有者才能恢復已歸檔的團隊空間。",
    "outlinerTeamOverflow.teamActions.restoreLabel": "恢復團隊空間",
    "outlinerTeamToggleButton.joinTeamButton": "加入",
    "outlinerTeamToggleButton.joinedBadge": "已加入",
    "outlinerTeamToggleButton.numTeamMembers":
      "{numTeamMembers, plural, other {# 位成員}}",
    "outlinerTeamToggleButton2.joinTeamButton": "加入",
    "outlinerToggleButton.popup.buttonText": "好的",
    "outlinerToggleButton.popup.skipText": "清除模板",
    "outlinerViewAllMenuList.addToSidebar.tooltip": "添加到側邊欄",
    "outlinerViewAllMenuList.removeFromSidebar.tooltip": "從側邊欄移除",
    "outlinerViewAllPopover.menu.header": "已共享",
    "outlinerViewAllPopover.search.noMatchesPrompt": "未找到頁面",
    "outlinerViewAllPopover.search.placeholder": "搜索共享頁面",
    "outlinerViewAllPopover.search.teamPlaceholder": "搜索團隊頁面...",
    "outlinerViewAllPopover.search.teamPlaceholder2": "搜索 {teamName}...",
    "outlinerViewAllPopover.sortSelect.allPages": "所有頁面",
    "outlinerViewAllPopover.sortSelect.menuTitle": "排序",
    "outlinerViewAllPopover.sortSelect.ownedPages": "擁有的頁面",
    "outlinerViewAllPopover.sortSelect.sharedPages": "共享頁面",
    "page.backlinks.label": "鏈接到此頁面",
    "page.backlinks.more": "其他 {count} 個",
    "page.backlinks.privatePages":
      "{count, plural, other {{count} 個私人頁面}}",
    "page.backlinks.privatePagesTooltip": "已在你無權訪問的頁面中同步。",
    "page.blockActionMenu.tooltip": "重命名、刪除等…",
    "page.changeIcon.tooltip": "更改圖標",
    "pageCover.changeCover.text": "更換封面",
    "pageCover.embedType.buttonText": "提交",
    "pageCover.embedType.caption": "適用於網絡上任何圖片。",
    "pageCover.embedType.placeholder": "粘貼圖片鏈接…",
    "pageCover.embedType.title": "鏈接",
    "pageCover.errorDialogMessage.uploadFailed": "上傳失敗",
    "pageCover.fileType.caption": "寬於 {idealImageWidth} 像素的圖片效果最佳。",
    "pageCover.gradientCategory.header": "顏色和漸變",
    "pageCover.gradients10.title": "漸變 10",
    "pageCover.gradients11.title": "漸變 11",
    "pageCover.gradients2.title": "漸變 2",
    "pageCover.gradients3.title": "漸變 3",
    "pageCover.gradients4.title": "漸變 4",
    "pageCover.gradients5.title": "漸變 5",
    "pageCover.gradients8.title": "漸變 8",
    "pageCover.metArnoldBocklin1880.subtitle": "1880，死者之島",
    "pageCover.metArnoldBocklin1880.title": "阿諾德·勃克林",
    "pageCover.metBruegel1565.subtitle": "1565",
    "pageCover.metBruegel1565.title": "老彼得·勃魯蓋爾",
    "pageCover.metCamillePissarro1896.subtitle": "1896，陰天早晨的魯昂",
    "pageCover.metCamillePissarro1896.title": "卡米耶·畢沙羅",
    "pageCover.metCanaletto1720.subtitle": "1720 年代",
    "pageCover.metCanaletto1720.title": "卡納萊托",
    "pageCover.metCategory.header": "大都會藝術博物館",
    "pageCover.metCezanne1890.subtitle": "1890，靜物：蘋果和報春花",
    "pageCover.metCezanne1890.title": "保羅·塞尚",
    "pageCover.metEdgarDegas1874.subtitle": "1874，舞蹈課",
    "pageCover.metEdgarDegas1874.title": "埃德加·德加",
    "pageCover.metEmanuelLeutze.subtitle": "1851，華盛頓橫渡特拉華河",
    "pageCover.metEmanuelLeutze.title": "埃瑪紐埃爾·洛伊茨",
    "pageCover.metFitzHenryLane.subtitle": "1854，金州號進入紐約港",
    "pageCover.metFitzHenryLane.title": "菲茨·亨利·萊恩",
    "pageCover.metFredericEdwinChurch1871.subtitle": "1871，帕特農神廟",
    "pageCover.metFredericEdwinChurch1871.title": "弗雷德里克·埃德溫·丘奇",
    "pageCover.metGeorgesSeurat1884.subtitle": "1884，大碗島的星期天下午練習版",
    "pageCover.metGeorgesSeurat1884.title": "喬治·秀拉",
    "pageCover.metGerome1890.subtitle": "1890，皮格馬利翁和伽拉忒亞",
    "pageCover.metGerome1890.title": "讓-里奧·傑洛姆",
    "pageCover.metGoya1789.subtitle": "1787",
    "pageCover.metGoya1789.title": "戈雅",
    "pageCover.metHenriRousseau1907.subtitle": "1907，猛獅就食",
    "pageCover.metHenriRousseau1907.title": "亨利·盧梭",
    "pageCover.metHenriTl1892.subtitle": "1892，Divan Japonais",
    "pageCover.metHenriTl1892.title": "亨利·德·土魯斯-勞特累克",
    "pageCover.metHenryLerolle1885.subtitle": "1885，管風琴排練",
    "pageCover.metHenryLerolle1885.title": "亨利·勒羅爾",
    "pageCover.metHoracePippin.subtitle": "1945，維多利亞式室內 1",
    "pageCover.metHoracePippin.title": "霍勒斯·皮平",
    "pageCover.metJeanBeraud.subtitle": "1877，巴黎魯萊聖斐理伯教堂的星期天",
    "pageCover.metJeanBeraud.title": "讓·貝羅",
    "pageCover.metJohnSingerSargentMorocco.subtitle": "1879，摩洛哥",
    "pageCover.metJohnSingerSargentMorocco.title": "約翰·辛格·薩金特",
    "pageCover.metJosephHidley1870.subtitle": "1870，波斯滕基爾景觀，紐約",
    "pageCover.metJosephHidley1870.title": "約瑟夫·希德利",
    "pageCover.metJulesTavernier1878.subtitle":
      "1878，在清澈湖中的地下圓形舞廳裡跳舞，加州",
    "pageCover.metJulesTavernier1878.title": "朱爾斯·塔弗尼爾",
    "pageCover.metKlimt1912.subtitle": "1912",
    "pageCover.metKlimt1912.title": "古斯塔夫·克里姆特",
    "pageCover.metPatternsCategory.header": "大都會藝術博物館 - 圖案",
    "pageCover.metPaulSignac.subtitle": "1891，孔卡爾諾：傍晚的寧靜",
    "pageCover.metPaulSignac.title": "保羅·希涅克",
    "pageCover.metSilkKashanCarpet.subtitle": "16 世紀",
    "pageCover.metSilkKashanCarpet.title": "真絲喀山地毯",
    "pageCover.metTerracottaFuneraryPlaque.subtitle":
      "約在公元前 520-公元前 510",
    "pageCover.metTerracottaFuneraryPlaque.title": "陪葬陶片",
    "pageCover.metTheUnicornInCaptivity.subtitle": "約 1495–1505",
    "pageCover.metTheUnicornInCaptivity.title": "被囚禁的獨角獸",
    "pageCover.metVincentVanGoghCradle.subtitle": "1889，搖籃曲",
    "pageCover.metVincentVanGoghCradle.title": "文森特·梵高",
    "pageCover.metVincentVanGoghGinoux.subtitle":
      "1890，阿萊城的姑娘：吉努夫人",
    "pageCover.metVincentVanGoghGinoux.title": "文森特·梵高",
    "pageCover.metVincentVanGoghIrises.subtitle": "1890，鳶尾花",
    "pageCover.metVincentVanGoghIrises.title": "文森特·梵高",
    "pageCover.metVincentVanGoghOleanders.subtitle": "1888，夾竹桃",
    "pageCover.metVincentVanGoghOleanders.title": "文森特·梵高",
    "pageCover.metWilliamMorris1875.subtitle": "1875，萬壽菊",
    "pageCover.metWilliamMorris1875.title": "威廉·莫里斯",
    "pageCover.metWilliamMorris1877Willow.subtitle": "1875，柳樹枝",
    "pageCover.metWilliamMorris1877Willow.title": "威廉·莫里斯",
    "pageCover.metWilliamMorris1878.subtitle": "1878，鳥",
    "pageCover.metWilliamMorris1878.title": "威廉·莫里斯",
    "pageCover.metWilliamTurner1835.subtitle": "1835，威尼斯運河",
    "pageCover.metWilliamTurner1835.title": "威廉·特納",
    "pageCover.metWinslowHomerMaineCoast.subtitle": "1896，緬因州海岸",
    "pageCover.metWinslowHomerMaineCoast.title": "溫斯洛·霍默",
    "pageCover.metWoodcutsCategory.header": "大都會藝術博物館 - 日本版畫",
    "pageCover.mobileMenu.title": "頁面封面",
    "pageCover.nasaBruceMccandlessSpacewalk.title": "布魯斯·麥坎德利斯太空漫步",
    "pageCover.nasaBuzzAldrinOnTheMoon.subtitle": "1969",
    "pageCover.nasaBuzzAldrinOnTheMoon.title": "月球上的巴茲·奧爾德林",
    "pageCover.nasaCarinaNebula.title": "船底座星雲",
    "pageCover.nasaCategory.header": "NASA 檔案館",
    "pageCover.nasaEagleInLunarOrbit.subtitle": "1969",
    "pageCover.nasaEagleInLunarOrbit.title": "月球軌道中的“鷹”",
    "pageCover.nasaEarthGrid.title": "地球網格",
    "pageCover.nasaEvaDuringSkylab3.subtitle": "1973",
    "pageCover.nasaEvaDuringSkylab3.title": "天空實驗室 3 號飛行期間艙外活動",
    "pageCover.nasaFingerprintsOfWaterOnTheSand.title": "沙地上的水",
    "pageCover.nasaGreatSandyDesertAustralia.subtitle": "2013",
    "pageCover.nasaGreatSandyDesertAustralia.title": "澳大利亞大沙沙漠",
    "pageCover.nasaIbmType704.subtitle": "1957",
    "pageCover.nasaIbmType704.title": "IBM Type 704 系統",
    "pageCover.nasaMultiAxisGimbleRig.subtitle": "1959",
    "pageCover.nasaMultiAxisGimbleRig.title": "多軸萬向節鑽機",
    "pageCover.nasaNewYorkCityGrid.title": "紐約市規劃網格",
    "pageCover.nasaOrionNebula.subtitle": "1994",
    "pageCover.nasaOrionNebula.title": "獵戶座大星雲",
    "pageCover.nasaReducedGravityWalkingSimulator.subtitle": "1963",
    "pageCover.nasaReducedGravityWalkingSimulator.title": "減重力步行模擬器",
    "pageCover.nasaRobertStewartSpacewalk.title": "羅伯特·斯圖爾特太空漫步",
    "pageCover.nasaRobertStewartSpacewalk2.title": "羅伯特·斯圖爾特太空漫步 2",
    "pageCover.nasaSpaceShuttleChallenger.subtitle": "1985",
    "pageCover.nasaSpaceShuttleChallenger.title": "挑戰者號航天飛機",
    "pageCover.nasaSpaceShuttleColumbia.subtitle": "1986",
    "pageCover.nasaSpaceShuttleColumbia.title": "哥倫比亞號航天飛機",
    "pageCover.nasaSpaceShuttleColumbiaAndSunrise.subtitle": "1983",
    "pageCover.nasaSpaceShuttleColumbiaAndSunrise.title":
      "哥倫比亞號航天飛機和日出",
    "pageCover.nasaTheBlueMarble.subtitle": "1972",
    "pageCover.nasaTheBlueMarble.title": "藍色彈珠",
    "pageCover.nasaTimPeakeSpacewalk.title": "蒂姆·皮克太空漫步",
    "pageCover.nasaTransonicTunnel.subtitle": "1990",
    "pageCover.nasaTransonicTunnel.title": "超音速風洞",
    "pageCover.nasaWrightsFirstFlight.subtitle": "1903",
    "pageCover.nasaWrightsFirstFlight.title": "萊特兄弟的第一次飛行",
    "pageCover.reposition.cancelText": "取消",
    "pageCover.reposition.text": "調整位置",
    "pageCover.rijksmuseumAvercamp1608.subtitle": "1608，冬季景觀與溜冰者",
    "pageCover.rijksmuseumAvercamp1608.title": "亨德里克·阿弗坎普",
    "pageCover.rijksmuseumAvercamp1620.subtitle": "1620，享受小鎮附近的冰",
    "pageCover.rijksmuseumAvercamp1620.title": "亨德里克·阿弗坎普",
    "pageCover.rijksmuseumCategory.header": "荷蘭國立博物館",
    "pageCover.rijksmuseumClaesz1628.subtitle": "1628，虛空靜物：拔刺男孩",
    "pageCover.rijksmuseumClaesz1628.title": "彼得·克拉斯",
    "pageCover.rijksmuseumJanLievens1627.subtitle": "1627，靜物：書",
    "pageCover.rijksmuseumJanLievens1627.title": "揚·利文斯",
    "pageCover.rijksmuseumJansz1636.subtitle": "1636，哈勒姆聖巴沃教堂內部",
    "pageCover.rijksmuseumJansz1636.title": "彼得·詹斯",
    "pageCover.rijksmuseumJansz1637.subtitle": "1637，烏得勒支的馬里亞克大教堂",
    "pageCover.rijksmuseumJansz1637.title": "彼得·詹斯",
    "pageCover.rijksmuseumJansz1641.subtitle":
      "1641，烏得勒支瑪麗亞教堂的中殿和合唱團",
    "pageCover.rijksmuseumJansz1641.title": "彼得·詹斯",
    "pageCover.rijksmuseumJansz1649.subtitle":
      "1649，阿森德爾夫特（Sendelft）的聖奧杜弗斯克教堂的內部",
    "pageCover.rijksmuseumJansz1649.title": "彼得·詹斯",
    "pageCover.rijksmuseumMignons1660.subtitle": "1660，靜物：花和手錶",
    "pageCover.rijksmuseumMignons1660.title": "亞伯拉罕·米尼翁",
    "pageCover.rijksmuseumRembrandt1642.subtitle": "1642，夜巡",
    "pageCover.rijksmuseumRembrandt1642.title": "倫勃朗·範·賴恩",
    "pageCover.rijksmuseumVermeerTheMilkmaid.subtitle": "1660，倒牛奶的女僕",
    "pageCover.rijksmuseumVermeerTheMilkmaid.title": "約翰尼斯·弗美爾",
    "pageCover.savePosition.text": "保存位置",
    "pageCover.solidBeige.title": "米色",
    "pageCover.solidBlue.title": "藍色",
    "pageCover.solidRed.title": "紅色",
    "pageCover.solidYellow.title": "黃色",
    "pageCover.webbTelescope.header": "詹姆斯·韋布空間望遠鏡",
    "pageCover.webbTelescopeCosmitCliffs": "船底座星雲中的“宇宙懸崖”",
    "pageCover.webbTelescopeDeepField": "深空",
    "pageCover.webbTelescopeSouthernRingNebula": "南環星雲",
    "pageCover.webbTelescopeStephansQuintet": "斯蒂芬五重星系",
    "pageCover.woodcuts1.subtitle": "1830，神奈川衝浪裡",
    "pageCover.woodcuts1.title": "葛飾北齋",
    "pageCover.woodcuts10.subtitle": "1840，龜山",
    "pageCover.woodcuts10.title": "歌川廣重",
    "pageCover.woodcuts11.subtitle": "1900，燕子和茶花",
    "pageCover.woodcuts11.title": "伊藤若沖",
    "pageCover.woodcuts13.subtitle": "1858，備前市由賀山",
    "pageCover.woodcuts13.title": "歌川廣重",
    "pageCover.woodcuts14.subtitle": "1830，甲州犬目峠",
    "pageCover.woodcuts14.title": "葛飾北齋",
    "pageCover.woodcuts15.subtitle": "1842，草津站",
    "pageCover.woodcuts15.title": "歌川廣重",
    "pageCover.woodcuts16.subtitle": "瀬田夕照",
    "pageCover.woodcuts16.title": "歌川廣重",
    "pageCover.woodcuts2.subtitle": "1830，山下白雨",
    "pageCover.woodcuts2.title": "葛飾北齋",
    "pageCover.woodcuts3.subtitle": "1830，凱風快晴",
    "pageCover.woodcuts3.title": "葛飾北齋",
    "pageCover.woodcuts4.subtitle": "1842，錦鯉",
    "pageCover.woodcuts4.title": "溪齋英泉",
    "pageCover.woodcuts5.subtitle": "1878，江戶郊外的冬夜街景",
    "pageCover.woodcuts5.title": "小林清親",
    "pageCover.woodcuts6.subtitle": "1850，山景·臼井通的淺間",
    "pageCover.woodcuts6.title": "歌川國芳",
    "pageCover.woodcuts7.subtitle": "1833，京師·三條大橋",
    "pageCover.woodcuts7.title": "歌川廣重",
    "pageCover.woodcuts8.subtitle": "1830，甲州三島越",
    "pageCover.woodcuts8.title": "葛飾北齋",
    "pageCover.woodcuts9.subtitle": "1830，甲州石班澤",
    "pageCover.woodcuts9.title": "葛飾北齋",
    "pageCover.woodcutsSekka1.subtitle": "1909，巴之雪",
    "pageCover.woodcutsSekka1.title": "神坂雪佳",
    "pageCover.woodcutsSekka2.subtitle": "1903，熏香道具",
    "pageCover.woodcutsSekka2.title": "神坂雪佳",
    "pageCover.woodcutsSekka3.subtitle": "1909，春",
    "pageCover.woodcutsSekka3.title": "神坂雪佳",
    "pageDescription.emptyPlaceholder": "添加描述…",
    "pageDescription.lockedTooltip.message":
      "請解鎖{pageTitleWithIcon}以編輯描述。",
    "pageErrorIndicator.loadingError.message":
      "哎呀，加載此頁面時出錯。請刷新以再次加載。",
    "pageErrorIndicator.reloadButton.label": "刷新",
    "pageLockIndicator.lockedButton.label": "已鎖定",
    "pageLockIndicator.lockedTooltip":
      "由{lockedByPerson}{br}鎖定，以防止意外編輯。{br}<prompttext>點擊以解鎖</prompttext>",
    "pageLockIndicator.mobileLockedButton.label": "已鎖定",
    "pageLockIndicator.mobileRelockButton.label": "重新鎖定",
    "pageLockIndicator.relockButton.label": "重新鎖定",
    "pageMentionOverlay.openPage": "打開頁面",
    "pageMoreButton.wordCount.caption": "字數：{count}",
    "pageOfflineIndicator.hasLocalData.message":
      "請連接網絡後加載此頁面，之後你便可以在離線時訪問它。",
    "pageOfflineIndicator.noLocalData.message":
      "哎呀，你好像離線了。請連接網絡後查看此頁面。",
    "pageOnAppStoreSetting.description.message":
      "選擇 Notion 啟動或切換工作區時顯示的內容。",
    "pageOnAppStoreSetting.firstPage.label": "側邊欄中的第一頁",
    "pageOnAppStoreSetting.lastVisitedPage.label": "上次訪問的頁面",
    "pageOnAppStoreSetting.title": "啟動時打開",
    "pagePermissionItem.allowComments.setting": "允許評論",
    "pagePermissionItem.allowComments.tooltip":
      "任何已登錄的 Notion 用戶都可以在此頁面上發表評論。",
    "pagePermissionItem.allowDuplicateTemplate.setting": "允許創建副本",
    "pagePermissionItem.allowDuplicateTemplate.tooltip":
      "開啟後，將允許其他用戶創建公共頁面的副本到他們的工作區。",
    "pagePermissionItem.allowEdits.setting": "允許編輯",
    "pagePermissionItem.allowEdits.tooltip":
      "任何已登錄的 Notion 用戶都可以編輯此頁面。僅與你信任的人分享此秘密鏈接。",
    "pagePermissionItem.allowSearchEngine.tooltip":
      "如果允許，你的公共頁面可能會出現在搜索引擎（如 Google）中，但僅當你或其他人在 Web 的其他地方鏈接到此網頁時。",
    "pagePermissionItem.allowSearchEngines.setting": "搜索引擎索引",
    "pagePermissionItem.inheritedRecordPermissions.setting":
      "基於{linkBoxWithPageTitle}",
    "pagePermissionItem.searchEngineUpgradeTooltip.caption":
      "讓你的頁面出現在搜索引擎結果中。",
    "pagePermissionItem.searchEngineUpgradeTooltip.title":
      "升級以打開搜索引擎索引",
    "pagePermissionItem.showLinkOptions.label": "顯示鏈接選項",
    "pageProperties.editProperty.customizePage.label": "自定義頁面",
    "pagePropertyRowValue.addRelationButtonMessage": "添加頁面",
    "pageShareMenu.copiedLinkButton.label": "✓ 已復制",
    "pageShareMenu.copyMaybePublicLinkButton.label.web": "複製網頁鏈接",
    "pageShareMenu.copyPageLinkButton.label": "複製頁面鏈接",
    "pageShareMenu.restrictedAccessBanner.label":
      "訪問受限。可能無法與{linkBoxWithPageTitle}中的所有人分享。",
    "pageShareMenu.restrictedAccessBanner.restore": "恢復",
    "pageShareMenu.sharePageLinkButton.label": "分享頁面鏈接",
    "pageSnapshotPreview.unknownPreviewLoadError.message": "出了些問題。",
    "pageTemplateModal.goToFullTemplateGalleryButton.label": "瀏覽更多模板",
    "pageTemplateModal.mobileModal.title": "試試這個模板",
    "pageTemplateModal.mobileModal.useButton.label": "使用",
    "pageTemplateModal.modifiedTemplateDialog.discardEditsButton.label": "放棄",
    "pageTemplateModal.modifiedTemplateDialog.prompt":
      "看起來你已經修改了模板。要保存編輯嗎？",
    "pageTemplateModal.modifiedTemplateDialog.saveButton.label": "保存修改",
    "pageTemplateModal.useTemplateButton.label": "使用這個模板",
    "pageTemplatePreview.offline.message": "請連接網絡後查看此模板。",
    "pageTitle.flaggedContent": "標記的內容",
    "pageUpdatesModal.mobileMenu.title": "頁面更新",
    "pageViewBlock.add.pageComment": "添加評論",
    "pageViewBlock.add.pageCommentMobile": "評論",
    "pageViewBlock.add.pageCover": "添加封面",
    "pageViewBlock.add.pageCoverMobile": "封面",
    "pageViewBlock.add.pageIcon": "添加圖標",
    "pageViewBlock.add.pageIconMobile": "圖標",
    "pageViewBlock.add.pageTitle": "添加標題",
    "pageViewBlock.add.pageTitleMobile": "標題",
    "pageViewBlock.addDescription.button": "添加描述",
    "pageViewBlock.addDescription.mobileButton": "描述",
    "pageViewBlock.appContainer.header.collections.title":
      "{appName} 中的數據庫",
    "pageViewBlock.appContainer.numberOfDatabases":
      "{numberOfDatabases} 個數據庫",
    "pageViewBlock.archivedTeamBanner.message":
      "此頁面位於已歸檔的團隊空間中。",
    "pageViewBlock.editingPageBanner.status": "你現在可以編輯此頁面。",
    "pageViewBlock.editingPageBanner.stop": "完成編輯",
    "pageViewBlock.evernoteBanner.contents":
      "已導入{totalNumberOfNotes}個筆記，共{totalNumberOfNotes}個",
    "pageViewBlock.hideDescription.button": "隱藏描述",
    "pageViewBlock.movedPageBanner.ancestorMovedMessage":
      "{movedAncestorLink} 已移動到 {targetSpaceLink}。",
    "pageViewBlock.movedPageBanner.pageMovedMessage":
      "已移動到 {targetSpaceLink}。",
    "pageViewBlock.permanentlyDeleted.message": "此頁面已被永久刪除。",
    "pageViewBlock.resolvedComments.menuTabTitle": "已解決的評論",
    "pageViewBlock.show.backlinks":
      "{numberOfBacklinks, plural, other {{numberOfBacklinks} 個反向鏈接}}",
    "pageViewBlock.show.backlinks.tooltip": "顯示鏈接到此頁面的頁面",
    "pageViewBlock.show.pageComments":
      "{numberOfComments, plural, other {{numberOfComments} 則評論}}",
    "pageViewBlock.showDescription.button": "顯示描述",
    "pageViewBlock.showDescription.mobileButton": "描述",
    "pageViewBlock.showResolvedComments.button":
      "{numberOfResolvedComments, plural, other {{numberOfResolvedComments} 條已解決的評論}}",
    "pageViewBlock.syncedBlock.original": "鏈接到原始 url",
    "pageViewBlock.templatePageBanner.backButton.label": "返回",
    "pageViewBlock.templatePageBanner.editTemplateLabel":
      "正在編輯{pageTitleWithIcon}<mediumtext>的模板</mediumtext>",
    "pageViewBlock.templatePageBanner.learnMoreLink": "了解更多",
    "pageViewBlock.templatePageBanner.mobile.editTemplateLabel":
      "{pageTitleWithIcon}<mediumtext>中的模板</mediumtext>",
    "pageViewBlock.trashBanner.deletePermanentlyButton.label": "永久刪除",
    "pageViewBlock.trashBanner.message": "此頁面位於垃圾箱中。",
    "pageViewBlock.trashBanner.restoreButton.label": "恢復頁面",
    "pageViewBlock.trashBanner.restoreCurrentPageButton.label": "恢復當前頁面",
    "pageViewBlock.trashBanner.restoreLastVersionButton.label":
      "恢復上一個版本",
    "passwordChangeNotificationEmail.changePassword.message":
      "可以使用你的新密碼和郵箱地址 {emailAddress} 登錄到 Notion",
    "passwordChangeNotificationEmail.newPasswordSet.headline":
      "你的 Notion 密碼已設定完畢！",
    "passwordChangeNotificationEmail.newPasswordSet.subjectLine":
      "新密碼已創建",
    "passwordChangeNotificationEmail.passwordChanged.headline":
      "你已更改 Notion 密碼",
    "passwordChangeNotificationEmail.passwordChanged.subjectLine":
      "你的密碼已被更改",
    "passwordChangeNotificationEmail.passwordRemoved.headline":
      "你的 Notion 密碼已被刪除",
    "passwordChangeNotificationEmail.passwordRemoved.subjectLine":
      "你的密碼已被移除",
    "passwordChangeNotificationEmail.removePassword.message":
      "你仍然可以通過登錄頁面上的“用電子郵件登錄”來訪問 Notion。我們會通過電子郵件向你傳送一個臨時登錄碼。",
    "passwordChangeNotificationEmail.setPassword.message":
      "現在你可以使用你的郵箱地址 {emailAddress} 和新密碼來訪問工作區。",
    "passwordChangeNotificationEmail.unintendedChange.message":
      "如果你沒有進行此更改，請發送電子郵件到 team@makenotion.com 告知我們。去“我的帳戶”設置中更改密碼，或使用“忘記密碼”重設密碼。",
    "passwordResetEmail.clickToResetPassword.message": "點這裡重置密碼",
    "passwordResetEmail.emailSubject": "重置你的密碼",
    "passwordResetEmail.emailText.message":
      "通過訪問以下鏈接重置密碼： {resetUrl}",
    "passwordResetEmail.emailTitle": "重置你的 Notion 密碼",
    "passwordResetEmail.noResetRequested.message":
      "如果你沒有請求重置，請不要擔心。你可以安全地忽略此電子郵件。",
    "passwordSettings.changePasswordButton.label": "更改密碼",
    "passwordSettings.changePasswordModal.newPasswordMismatchError":
      "你的新密碼不匹配。",
    "passwordSettings.changePasswordModal.newPasswordNotRepeatedError":
      "請重複你的新密碼。",
    "passwordSettings.changePasswordModal.newPasswordsMismatchError":
      "你的密碼不匹配。",
    "passwordSettings.changePasswordModal.oldPasswordInput.label": "舊密碼",
    "passwordSettings.changePasswordModal.oldPasswordMissingError":
      "請輸入你的舊密碼。",
    "passwordSettings.changePasswordModal.passwordNotEnteredError":
      "請輸入密碼。",
    "passwordSettings.changePasswordSuccess.message": "你的新密碼已保存。",
    "passwordSettings.deletePasswordModal.passwordInput.label": "密碼",
    "passwordSettings.educationPlanGuidelines":
      "如果你無法訪問學校的郵箱地址，則可以使用密碼登錄。",
    "passwordSettings.genericPasswordSaveError": "保存密碼時出錯。請稍後再試。",
    "passwordSettings.newPasswordInput.label": "新密碼",
    "passwordSettings.newPasswordInput.placeholder": "輸入新密碼…",
    "passwordSettings.oldPasswordInput.placeholder": "輸入舊密碼…",
    "passwordSettings.passwordGuidelines":
      "密碼長度至少為 15 個字母，或者長度至少為 8 個字符且同時包含字母和數字。",
    "passwordSettings.passwordInput.label": "密碼",
    "passwordSettings.passwordManagedThroughSAMLProvider.message":
      "你的密碼是由你的 SAML 單點登錄供應商管理的。",
    "passwordSettings.passwordMissingLetter.message":
      "請在密碼中包含字母，或使用更長的密碼。",
    "passwordSettings.passwordMissingLetterAndNumber.message":
      "請在密碼中包含字母和數字，或使用更長的密碼。",
    "passwordSettings.passwordMissingNumber.message":
      "請在密碼中包含數字，或使用更長的密碼。",
    "passwordSettings.passwordNotEntered.message": "請輸入你的密碼。",
    "passwordSettings.passwordNotSet.message": "未設置密碼。",
    "passwordSettings.passwordSetError.message":
      "你目前無法設置密碼。請稍後再試。",
    "passwordSettings.passwordSetInstructions":
      "如果你不想使用臨時登錄碼，你可以設置永久密碼。",
    "passwordSettings.passwordTooConsistent.message": "請添加其他唯一字符。",
    "passwordSettings.passwordTooShortError.message": "請增加密碼長度。",
    "passwordSettings.removePasswordButton.label": "移除密碼",
    "passwordSettings.removePasswordModal.educationPlanWarning":
    "如果你無法訪問學校的郵箱地址，則將無法重新登錄 Notion。",
  "passwordSettings.removePasswordModal.message":
    "移除密碼時出錯。請稍後再試。",
  "passwordSettings.removePasswordModal.oldPasswordNotEnteredError":
    "請輸入你的當前密碼。",
  "passwordSettings.removePasswordModal.passwordInput.placeholder":
    "輸入密碼…",
  "passwordSettings.removePasswordModal.removePasswordButton.label":
    "移除密碼",
  "passwordSettings.removePasswordModal.text":
    "你即將刪除密碼。我們會通過電子郵件將你的臨時登錄碼發送給你，以供日後訪問 Notion。",
  "passwordSettings.removePasswordSuccess.message": "你的密碼已被移除。",
  "passwordSettings.repeatPasswordInput.label": "再次輸入密碼",
  "passwordSettings.repeatPasswordInput.placeholder": "再次輸入新密碼…",
  "passwordSettings.setPasswordButton.label": "設置密碼",
  "passwordSettings.setPasswordSuccess.educationMessage":
    "你的密碼已全部設置好！即使無法訪問學校的郵箱地址，你也能用密碼登錄。",
  "passwordSettings.setPasswordSuccess.message": "密碼設置完畢！",
  "passwordSettings.title": "密碼",
  "pdfBlock.embeds.button.label": "嵌入 PDF",
  "pdfBlock.embeds.caption": "嵌入 PDF 文件",
  "pdfBlock.placeholder": "嵌入 PDF",
  "peekModeIntroTooltip.subtitle":
    "使用表格、看板、列表和時間軸，同時在側邊打開頁面，以加快工作流程。在此處切換到其他預覽模式。",
  "peekModeIntroTooltip.title": "新增功能！在側邊預覽中打開頁面",
  "peekMoveToMenu.addTo.addTo": "添加到",
  "peekMoveToMenu.addTo.defaultButton": "添加到",
  "peekMoveToMenu.addTo.privatePages": "私人頁面",
  "peekMoveToMenu.tooptip": "設置默認頁面或數據庫",
  "peekTopbar.changePeekOption.changeForThisView": "編輯視圖默認設置",
  "peekTopbar.close.button": "關閉",
  "peekTopbar.navigateToPage.tooltip": "以整頁形式打開",
  "peekTopbar.openPagesAs.button": "切換預覽模式",
  "peekTopbar.openPagesAs.buttonFullPage": "或以整頁形式打開",
  "peekTopbar.peekNavDownArrow.tooltip": "下一頁",
  "peekTopbar.peekNavUpArrow.tooltip": "上一頁",
  "permissionInviteToken.groupRole.ownerAlert.tooltip":
    "不能將群組添加為團隊空間所有者。",
  "permissionItem.publicPermissionItem.expiration.day": "一天內",
  "permissionItem.publicPermissionItem.expiration.hour": "一小時內",
  "permissionItem.publicPermissionItem.expiration.week": "一周內",
  "permissionRoleSelect.overrideMessage.caption":
    "更改角色後，將替代從父頁面繼承的權限。",
  "permissionRoleSelect.spaceReadAndWriteUpgradeTooltip.caption":
    "成員無法更改工作區設置或邀請新成員。",
  "permissionRoleSelect.spaceReadAndWriteUpgradeTooltip.title":
    "升級以添加非管理員成員",
  "permissionRoleSelect.userEditorUpgradeTooltip.caption":
    "具有全部權限的訪客可以編輯頁面並與他人分享。",
  "permissionRoleSelect.userEditorUpgradeTooltip.title": "升級以授予全部權限",
  "permissionRoleSelect.userReadAndWriteUpgradeTooltip.caption":
    "具有編輯權限的用戶可以編輯頁面，但不能與他人分享頁面。",
  "permissionRoleSelect.userReadAndWriteUpgradeTooltip.title":
    "升級以添加編輯者",
  "permissions.confirmDialog.upgradeToTeamWorkspace.confirmButton.label":
    "升級到團隊工作區",
  "permissions.confirmDialog.upgradeToTeamWorkspace.message":
    "若要將成員添加到工作區，你需要切換到團隊版。將根據當前的計費間隔和賬戶餘額按比例向你收取費用。",
  "permissionsActions.preventRemovingAllFullAccess.message":
    "在刪除此權限之前，請向其他人授予“全部權限”。",
  "permissionsActions.preventUserOrGroupDeletion.message":
    "至少有一個人或一個組必須具有訪問權限。",
  "permissionsInvite.closeInviteDialog.cancelButton.label": "取消",
  "permissionsInvite.closeInviteDialog.confirmationButton.label": "是",
  "permissionsInvite.closeInviteDialog.confirmationMessage":
    "你的更改尚未保存。放棄更改？",
  "permissionsInvite.integration.select.message": "選擇集成",
  "permissionsInvite.searchInput.placeholder": "搜索郵箱地址、姓名或群組",
  "permissionsInvite.spaceAddMemberUpgradeTooltip.caption":
    "成員是你邀請加入到工作區的隊友。他們可以訪問並添加頁面供所有成員查看，或者被邀請到具有私人協作權限的頁面。",
  "permissionsInvite.spaceAddMemberUpgradeTooltip.title": "升級以添加成員",
  "pricingGrid.betaBadge": "測試版",
  "pricingGrid.businessPlanColumn.header": "商業版",
  "pricingGrid.cancelPlanLink": "取消方案",
  "pricingGrid.comingSoonBadge": "即將推出",
  "pricingGrid.comparisonSection.adminAndSecurityFeatures.title":
    "管理員與安全性",
  "pricingGrid.comparisonSection.adminAndSecurityFeatures.titleMessage":
    "安全與管理",
  "pricingGrid.comparisonSection.collaboration.title": "協作",
  "pricingGrid.comparisonSection.features.title": "功能",
  "pricingGrid.comparisonSection.general.title": "一般",
  "pricingGrid.comparisonSection.notionFundamentals.title": "Notion 基礎",
  "pricingGrid.comparisonSection.platformAndWorkflow.title": "平台/工作流程",
  "pricingGrid.comparisonSection.support.title": "支持",
  "pricingGrid.comparisonSection.support.titleMessage": "支持與訪問權限",
  "pricingGrid.comparisonSection.usage.title": "使用",
  "pricingGrid.contactSalesLink": "聯繫銷售人員",
  "pricingGrid.currentPlan.largeScreenLabel": "當前方案",
  "pricingGrid.currentPlan.tooltip": "這是你當前的方案",
  "pricingGrid.currentPlanButton.label": "當前方案",
  "pricingGrid.downgradePlanButton.label": "降級",
  "pricingGrid.enterprisePlanColumn.header": "企業版",
  "pricingGrid.inTeamTrial": "免費試用中",
  "pricingGrid.inTeamTrial.tooltip":
    "你當前的團隊試用版有 1,000 個塊限制。升級以解除限制。",
  "pricingGrid.personalFreePlanColumn.header": "個人版",
  "pricingGrid.personalPlans.label": "個人使用",
  "pricingGrid.personalProPlanColumn.header": "個人專業版",
  "pricingGrid.planAttribute.ApiAdminControls.title": "API 管理控件",
  "pricingGrid.planAttribute.LinkPreviews.titleMessage": "鏈接預覽",
  "pricingGrid.planAttribute.SSO.tooltip":
    "通過安全的單點登錄，自動化管理員工的訪問權限。",
  "pricingGrid.planAttribute.adminTools.title": "管理員工具",
  "pricingGrid.planAttribute.adminTools.tooltip":
    "創建獨立的管理員角色，以與成員權限區分。只有管理員可以邀請新成員、更改工作區設置。",
  "pricingGrid.planAttribute.advancedPermissions.title": "高級權限",
  "pricingGrid.planAttribute.advancedPermissions.tooltip":
    "設置更精細的權限，以限制受邀人員與他人分享頁面。",
  "pricingGrid.planAttribute.advancedSecurity.title": "高級安全控制",
  "pricingGrid.planAttribute.advancedSecurity.tooltip":
    "解鎖額外的權限控制，以防止特定人員向外部分享頁面、禁用訪客、並設置工作區級別規則。",
  "pricingGrid.planAttribute.allPersonalPlanFeatures.tooltip":
    "含個人版的所有功能，以及更多。",
  "pricingGrid.planAttribute.allProPlanFeatures.tooltip":
    "含個人專業版的所有功能，以及更多。",
  "pricingGrid.planAttribute.allTeamPlanFeatures.tooltip":
    "含團隊版的所有功能，以及更多。",
  "pricingGrid.planAttribute.apiAdminControls.description.advanced": "高級",
  "pricingGrid.planAttribute.apiAdminControls.description.basic": "基本",
  "pricingGrid.planAttribute.apiAdminControls.tooltip":
    "為管理員提供對 API 的更多控制。",
  "pricingGrid.planAttribute.apps.title": "Web、桌面和移動應用",
  "pricingGrid.planAttribute.apps.tooltip":
    "Notion 可以在任何網頁瀏覽器中運行，無需安裝。你也可以下載我們的 Mac、Windows、iOS 或安卓應用。",
  "pricingGrid.planAttribute.auditLog.title": "審計日誌",
  "pricingGrid.planAttribute.auditLog.tooltip":
    "訪問工作區帳戶的安全和安全相關活動的詳細日誌，以識別潛在的安全問題、調查可疑行為或排查訪問問題。",
  "pricingGrid.planAttribute.blockStorage.tooltip":
    "塊是你添加到頁面上的內容組成部分，例如段落、待辦事項、圖片、嵌入式文件等。現在，所有定價方案的塊都是無限的。團隊試用版中的塊存儲上限為 1,000 個。",
  "pricingGrid.planAttribute.blockTypes.title": "40 多種塊內容類型",
  "pricingGrid.planAttribute.blockTypes.tooltip.line1":
    "塊是你可以添加到頁面的不同類型的內容：待辦事項、圖像、代碼塊、上傳的文件。",
  "pricingGrid.planAttribute.blockTypes.tooltip.line2":
    "塊還可以幫助你嵌入來自 Google Drive、GitHub、Twitter 和 Typeform 等第三方服務的內容。",
  "pricingGrid.planAttribute.blocks.title": "頁面和塊",
  "pricingGrid.planAttribute.blocks.titleMessage": "塊",
  "pricingGrid.planAttribute.bulkExport.title": "批量導出",
  "pricingGrid.planAttribute.bulkExport.tooltip":
    "你的數據是你的。你可以將所有頁面導出為 HTML、Markdown 或 CSV（用於數據庫），以及你上傳的任何文件/圖片。",
  "pricingGrid.planAttribute.bulkPDFExport.title": "批量 PDF 導出",
  "pricingGrid.planAttribute.bulkPDFExport.tooltip":
    "將所有內容導出為 PDF，方便進行法律或合規性備份。",
  "pricingGrid.planAttribute.button.upgrade": "升級",
  "pricingGrid.planAttribute.collaborativeWorkspace.title": "協作工作區",
  "pricingGrid.planAttribute.collaborativeWorkspace.tooltip":
    "協作工作區讓成員輕鬆分享頁面給整個團隊，讓整個團隊統一內容結構，並支持精細的權限設置。",
  "pricingGrid.planAttribute.contentApi.title.v2": "API",
  "pricingGrid.planAttribute.contentApi.title.v3": "API 調用",
  "pricingGrid.planAttribute.contentApi.tooltip.v2":
    "<p>使用 Notion API 為你的團隊構建自定義集成。現在處於測試階段。</p>",
  "pricingGrid.planAttribute.contentApi.tooltip.v3":
    "使用 Notion API 為你的團隊構建自定義集成。",
  "pricingGrid.planAttribute.customContract.title": "定制合同和賬單",
  "pricingGrid.planAttribute.customContract.tooltip":
    "我們將為你定制合同，並通過 PO/賬單付款。適用於超過 100 個用戶的企業帳戶。",
  "pricingGrid.planAttribute.databaseProperties.tooltip":
    "構建具有豐富屬性的強大數據庫，例如復選框、下拉菜單、貨幣、指派人員、日期和文件等。",
  "pricingGrid.planAttribute.databaseSync.title": "同步數據庫",
  "pricingGrid.planAttribute.databaseViews.title":
    "表格、列表、日曆、看板、畫廊和時間軸視圖",
  "pricingGrid.planAttribute.databases.title": "具有多元屬性類型的數據庫",
  "pricingGrid.planAttribute.databases.tooltip":
    "數據庫支持多種視圖，可以選擇最適合自己工作流的可視化方式。數據庫可以用來做項目看版、事件日曆等。",
  "pricingGrid.planAttribute.dedicatedManager.title":
    "專屬客戶成功經理{break}（超過 100 個席位）",
  "pricingGrid.planAttribute.dedicatedManager.tooltip":
    "適用於超過 100 人的年付團隊。",
  "pricingGrid.planAttribute.dedicatedManager.value.scaledSuccess":
    "擴展成功",
  "pricingGrid.planAttribute.earlyAccess.title": "提前使用新功能",
  "pricingGrid.planAttribute.earlyAccess.tooltip":
    "提前體驗特權意味著你將永遠擁有最新、功能最強大的 Notion 版本。你還將直接影響我們未來的產品路線圖。",
  "pricingGrid.planAttribute.evernoteHierarchy.tooltip":
    "將筆記組織到筆記本或堆疊中。",
  "pricingGrid.planAttribute.fileUploads.title": "文件上傳",
  "pricingGrid.planAttribute.fileUploads.tooltip":
    "單一文件大小限制可能適用於你上傳到 Notion 頁面或數據庫的任何文件。",
  "pricingGrid.planAttribute.fileUploads.trial.5MbFileUploadLimit":
    "試用版 5 MB",
  "pricingGrid.planAttribute.fileUploads.value.5MbFileUploadLimit": "5 MB",
  "pricingGrid.planAttribute.freeForIndividuals.tooltip":
    "現在，個人可免費使用 Notion。",
  "pricingGrid.planAttribute.genericNotes.tooltip":
    "創建文檔，並與他人分享。",
  "pricingGrid.planAttribute.genericReminders.tooltip":
    "收到截止日期的提醒。",
  "pricingGrid.planAttribute.genericTags.tooltip": "組織並追踪你的筆記。",
  "pricingGrid.planAttribute.genericWebClipper.tooltip":
    "保存網絡上的任何頁面。",
  "pricingGrid.planAttribute.guests.title": "訪客",
  "pricingGrid.planAttribute.guests.titleMessage": "訪客訪問權限",
  "pricingGrid.planAttribute.guests.tooltip":
    "訪客是工作區成員之外的個人，例如朋友、家人、承包商或客戶。通過在個人頁面上邀請訪客進行非公開協作。",
  "pricingGrid.planAttribute.limitedVersionHistory.tooltip":
    "查看和恢復過去 30 天內任何 Notion 頁面的以前版本。",
  "pricingGrid.planAttribute.linkPreviews.title": "預覽鏈接",
  "pricingGrid.planAttribute.linkPreviews.tooltip":
    "鏈接預覽會在你粘貼鏈接時顯示網頁的預覽。",
  "pricingGrid.planAttribute.linkSharing.title": "鏈接共享",
  "pricingGrid.planAttribute.linkSharing.tooltip":
    "與任何人分享一個秘密鏈接，以便他們查看、評論或編輯你的頁面。",
  "pricingGrid.planAttribute.members.title": "成員",
  "pricingGrid.planAttribute.members.titleMessage": "成員限制",
  "pricingGrid.planAttribute.members.tooltip":
    "成員是你邀請加入工作區的隊友。他們可以訪問並添加頁面供所有成員查看，或者被添加到具有私人協作權限的頁面。",
  "pricingGrid.planAttribute.membershipAdmin.title": "成員資格管理員",
  "pricingGrid.planAttribute.membershipAdmin.tooltip":
    "成員資格管理員可以在工作區和組中添加和刪除成員，但無權訪問其他工作區設置。",
  "pricingGrid.planAttribute.notInTrial": "不在試用版中",
  "pricingGrid.planAttribute.notionCollaboration.tooltip":
    "與其他人同時在同一個頁面上工作。",
  "pricingGrid.planAttribute.notionDatabases.tooltip":
    "用數據庫視圖、匯總、篩選器等工具搭建新的工作流。",
  "pricingGrid.planAttribute.notionHierarchy.tooltip":
    "筆記可以無限層級、無限嵌套。",
  "pricingGrid.planAttribute.notionMarkdown.tooltip":
    "用 Markdown 書寫或導出內容。",
  "pricingGrid.planAttribute.permissionGroups.title": "權限群組",
  "pricingGrid.planAttribute.permissionGroups.tooltip":
    "為不同的群組和團隊設置不同等級及精細度的權限。",
  "pricingGrid.planAttribute.prioritySupport.title": "優先支持",
  "pricingGrid.planAttribute.prioritySupport.titleMessage": "高級支持",
  "pricingGrid.planAttribute.prioritySupport.tooltip":
    "我們隨時為你提供幫助。",
  "pricingGrid.planAttribute.proWebPublishing.tooltip":
    "將 Notion 頁面作為獨立網站發布。即將推出。",
  "pricingGrid.planAttribute.realTimeCollaboration.title": "實時協作",
  "pricingGrid.planAttribute.realTimeCollaboration.tooltip":
    "實時與他人合作，可顯示在線狀態和評論。",
  "pricingGrid.planAttribute.scimApi.title": "用戶管理分配（SCIM）",
  "pricingGrid.planAttribute.scimApi.tooltip":
    "訪問 Notion SCIM API 以配置和管理用戶和群組。",
  "pricingGrid.planAttribute.sharingPermissions.tooltip":
    "設置更精細的權限，以限制受邀人員與他人分享頁面。",
  "pricingGrid.planAttribute.sso.title": "SAML 和單點登錄（SSO）",
  "pricingGrid.planAttribute.syncedDatabases.tooltip":
    "將Jira和GitHub的最新信息從Notion展示到數據庫。",
  "pricingGrid.planAttribute.teams.title": "團隊空間",
  "pricingGrid.planAttribute.teams.tooltip":
    "讓你可以在不同的團隊（如營銷、工程或設計）中創建和組織所有文檔。",
  "pricingGrid.planAttribute.teams.value.limitedTeams": "3 個團隊空間",
  "pricingGrid.planAttribute.teams.value.noTeams": "無團隊空間",
  "pricingGrid.planAttribute.teams.value.unlimited": "無限的團隊空間",
  "pricingGrid.planAttribute.templates.title": "50 多個入門模板",
  "pricingGrid.planAttribute.templates.tooltip.line1":
    "你可以從一張白紙開始，也可以直接從經過專業設計的模板庫中挑選模板。",
  "pricingGrid.planAttribute.templates.tooltip.line2":
    "一些模板包括：筆記、目標、公司主頁、會議記錄、產品路線圖、員工入職手冊和工程知識庫。",
  "pricingGrid.planAttribute.timeline.tooltip":
    "使用時間軸視圖進行項目排程和規劃。",
  "pricingGrid.planAttribute.unlimitedVersionHistory.tooltip":
    "查看和恢復任何 Notion 頁面的以前版本。",
  "pricingGrid.planAttribute.value.blockLimit": "試用版 1,000 個",
  "pricingGrid.planAttribute.value.justYou": "僅自己",
  "pricingGrid.planAttribute.value.unlimitedMembers": "無限",
  "pricingGrid.planAttribute.versionHistory.title": "版本歷史",
  "pricingGrid.planAttribute.versionHistory.tooltip":
    "查看和恢復任何 Notion 頁面的以前版本。",
  "pricingGrid.planAttribute.versionHistory.value.1WeekSavedHistory": "1 週",
  "pricingGrid.planAttribute.versionHistory.value.30DaysSavedHistory":
    "30 天",
  "pricingGrid.planAttribute.versionHistory.value.foreverSavedHistory":
    "永久",
  "pricingGrid.planAttribute.versionHistory.value.notInTrial": "不在試用版中",
  "pricingGrid.planAttribute.versionHistory.value.oneYearSavedHistory":
    "1 年",
  "pricingGrid.planAttribute.versionHistory.value.trialUpgradeLabel":
    "升級到 30 天歷史記錄",
  "pricingGrid.planAttribute.wikiDocsNotes.title": "知識庫、文檔和筆記",
  "pricingGrid.planAttribute.wikisDocsNotes.tooltip":
    "用 Notion 構建共享知識庫、文檔，或將其作為強大的筆記工具。",
  "pricingGrid.pricingTermToggle.payAnnually.label": "年付",
  "pricingGrid.pricingTermToggle.payMonthly.label": "月付",
  "pricingGrid.resubscribePlanButton.label": "重新訂閱",
  "pricingGrid.switchPlanAsMember.tooltip":
    "需要成為此工作區的管理員才能切換方案。",
  "pricingGrid.switchPlanFromInAppPurchase.tooltip":
    "你目前通過 Apple 的應用內購買進行訂閱。要切換計劃，請先取消你的 Apple 訂閱。",
  "pricingGrid.switchToPersonalPlanButton.tooltip":
    "個人版和個人專業版僅供 1 人使用。如果你想使用這些方案，請移除當前工作區中的其他成員。",
  "pricingGrid.teamPlanColumn.header": "團隊版",
  "pricingGrid.teamPlans.label": "團隊或企業",
  "pricingGrid.teamTrialLink": "免費試用",
  "pricingGrid.upgradePlanButton.label": "升級",
  "pricingGrid.willDowngradePlan.largeScreenLabel": "未來方案",
  "pricingGrid.willDowngradePlan.tooltip": "這是你當前方案到期後的方案",
  "pricingGrid.willDowngradePlanButton.label": "未來方案",
  "pricingHelpers.perMemberPerMonthPricing.label": "每人每月",
  "pricingHelpers.perMonthPricing.label": "每月",
  "privatePageBadge.label": "私人",
  "privatePageBadge.tooltip": "只有你可以訪問此頁面",
  "profileSettings.cancelButton.label": "取消",
  "profileSettings.changeEmailModal.changeEmailButton.label": "更改郵箱地址",
  "profileSettings.changeEmailModal.continueButton.label": "繼續",
  "profileSettings.changeEmailModal.currentEmail":
    "你當前的郵箱地址是 {currentEmail}。",
  "profileSettings.changeEmailModal.enterCurrentEmailVerificationCodeInput.placeholder":
    "輸入登錄碼",
  "profileSettings.changeEmailModal.enterPasswordInstructions":
    "請輸入你的密碼。",
  "profileSettings.changeEmailModal.enterVerificationCodeInput.placeholder":
    "輸入驗證碼",
  "profileSettings.changeEmailModal.errorFetchingAccountData":
    "無法獲取 {currentEmail} 的帳戶信息。",
  "profileSettings.changeEmailModal.errorNoUserValue": "未定義用戶值。",
  "profileSettings.changeEmailModal.newEmailInput.placeholder":
    "輸入新的電子郵件地址",
  "profileSettings.changeEmailModal.newEmailInstructions":
    "請輸入新的郵箱地址，我們將向你發送驗證碼。",
  "profileSettings.changeEmailModal.passwordInput.label": "密碼",
  "profileSettings.changeEmailModal.sendCurrentEmailVerificationCode.label":
    "發送驗證碼",
  "profileSettings.changeEmailModal.sendVerificationCodeButton.label":
    "發送驗證碼",
  "profileSettings.changeEmailModal.sendVerificationCodeToCurrentEmail":
    "我們將向此郵箱地址發送臨時驗證碼。",
  "profileSettings.changeEmailModal.sentVerificationCodeToCurrentEmail":
    "我們已向此郵箱地址發送了臨時驗證碼。",
  "profileSettings.changeEmailModal.verificationCodeSentMessage":
    "我們剛剛向你的帳戶 {newEmail} 發送了一個臨時驗證碼 。",
  "profileSettings.cookieAcceptance.subtitle":
    "允許 Notion 使用 cookie 來改善你的體驗。",
  "profileSettings.cookieAcceptance.title": "接受 cookie",
  "profileSettings.dangerousSettings.deleteAccountButton.label":
    "刪除我的帳戶",
  "profileSettings.dangerousSettings.title": "危險區域",
  "profileSettings.deleteAccountConfirmationDialog.deleteAccountAndWorkspacesButton.label":
    "{numberOfWorkspaces, plural, other {永久刪除帳戶以及 {numberOfWorkspaces} 個工作區}}",
  "profileSettings.deleteAccountConfirmationDialog.deleteAccountAndWorkspacesButtonMobile.label":
    "{numberOfWorkspaces, plural, other {刪除帳戶和 {numberOfWorkspaces} 個工作區}}",
  "profileSettings.deleteAccountConfirmationDialog.deleteAccountButton.label":
    "永久刪除帳戶",
  "profileSettings.deleteAccountConfirmationDialog.prompt":
    "請輸入你的郵箱地址進行確認。",
  "profileSettings.deleteAccountConfirmationDialog.warning":
    "此操作無法撤消。這將永久刪除你的整個帳戶。所有私人工作區將被刪除，同時你將從所有共享工作區中移除。",
  "profileSettings.helpButton.caption":
    "帳戶設定的更改將應用於你的所有工作區。",
  "profileSettings.helpButton.learnMoreLink": "<s>了解更多。</s>",
  "profileSettings.offline.message": "請連接網絡後設置個人資料。",
  "profileSettings.personalInfoSection.emailSetting.changeEmailButton.label":
    "更改郵箱地址",
  "profileSettings.personalInfoSection.emailSetting.label": "電子郵件地址",
  "profileSettings.personalInfoSection.nameInput.label": "首選名稱",
  "profileSettings.personalInfoSection.nameMissing.message": "請填寫姓名。",
  "profileSettings.personalInfoSection.title": "個人資料",
  "profileSettings.profilePhotoSection.removePhotoButton.label": "移除",
  "profileSettings.profilePhotoSection.title": "照片",
  "profileSettings.profilePhotoSection.uploadPhotoButton.label": "上傳照片",
  "profileSettings.profilePhotoSection.uploadProfilePhotoError.message":
    "上傳失敗。",
  "profileSettings.title": "帳戶",
  "profileSettings.updateButton.label": "更新",
  "propertySelectMenu.mobileMenu.property.header": "屬性",
  "propertySelectMenu.mobileMenu.relationProperty.header": "關聯屬性",
  "propertySelectMenu.search.noResults.title": "無結果",
  "propertySelectMenu.searchForProperty.default.placeholder": "搜索屬性…",
  "propertySelectMenu.searchForProperty.relation.placeholder":
    "搜索關聯屬性…",
  "publicPageDataHelpers.untitledWorkspace.placeholder": "無標題的工作區",
  "publicPermissionItem.expiration.chooseDate": "選擇日期",
  "publicPermissionItem.expiration.never": "從不",
  "publicPermissionItem.expirationTime.label": "鏈接過期",
  "publicPermissionsMenu.expiration.mobile.label": "完成",
  "publicPermissionsMenu.expiration.mobile.title": "到期時間",
  "pushNotification.authorPhrase.unknown": "未知作者",
  "pushNotification.blockEdited.notificationSubject":
    "{userName} 編輯了 {blockName}",
  "pushNotification.deletedBlock.notificationContents":
    "[已刪除] {renderedBlock}",
  "pushNotification.emptyBlockPropertyValueEdited.placeholderLabel": "空",
  "pushNotification.imageInPushNotification.placeholder": "{imageEmoji} 圖片",
  "pushNotification.pageName.defaultLabel": "Notion 頁面",
  "pushNotification.permissionGroupName.defaultLabel": "已刪除的群組",
  "pushNotification.permissionGroupName.untitledLabel": "無標題群組",
  "pushNotification.pluralizedUserNames.defaultLabel": "有人",
  "pushNotification.propertyNameWithEditedValue.notificationBody":
    "{propertyName} ({propertyValue})",
  "pushNotification.propertyNameWithEditedValue.notificationSubject":
  "{propertyName} ({propertyValue})",
"pushNotification.threePlusUserNames.label":
  "{othersCount, plural, other {{firstAuthor}及其他 {othersCount} 位}}",
"pushNotification.twoUserNames.label": "{firstAuthor} 和 {secondAuthor}",
"pushNotification.untitledBlockTitle.placeholder": "無標題",
"pushNotification.untitledCollectionName.placeholder": "無標題",
"pushNotification.untitledSpaceName.label": "無標題",
"pushNotification.untitledTeamName.label": "無標題",
"pushNotification.userCreatedBlockInSpace.message":
  "{userName} 在 {spaceName} 創建了 {targetName}",
"pushNotification.userCreatedRowInCollection.message":
  "{userName} 在 {collectionName} 創建了 {targetName}",
"pushNotification.userCreatedTarget.label":
  "{userName} 創建了 {permissionGroupName}",
"pushNotification.userDeletedBlockInSpace.message":
  "{userName} 刪除了 {spaceName} 中的 {targetName}",
"pushNotification.userDeletedRowInCollection.message":
  "{userName} 刪除了 {collectionName} 中的 {targetName}",
"pushNotification.userDeletedTarget.label":
  "{userName} 刪除了 {permissionGroupName}",
"pushNotification.userEditedTarget.label":
  "{userName}編輯了{permissionGroupName}",
"pushNotifications.accessRequested.subject": "{userName}請求訪問{pageName}",
"pushNotifications.botPermissionsWithRole.label":
  "{botName} ({permissionLevel})",
"pushNotifications.collectionCreated.notificationSubject":
  "{userName} 創建了 {collectionName}",
"pushNotifications.collectionDescriptionAdded.notificationSubject":
  "{userName} 為 {collectionName} 添加了描述",
"pushNotifications.collectionDescriptionDeleted.notificationSubject":
  "{userName} 刪除了 {collectionName} 的描述",
"pushNotifications.collectionEdited.notificationSubject":
  "{userName} 編輯了 {collectionName}",
"pushNotifications.collectionPropertyEdited.subject":
  "{userName}編輯了{collectionName}中的{propertyType}屬性",
"pushNotifications.collectionViewEdited.notificationSubject":
  "{userName}編輯了{collectionName}中的{collectionViewName}視圖",
"pushNotifications.commentOnlyPermissionLevel.label": "只能評論",
"pushNotifications.editOnlyPermissionLevel.label": "只能編輯",
"pushNotifications.editPermissionLevel.label": "編輯",
"pushNotifications.editorPermissionLevel.label": "全部權限",
"pushNotifications.emailAccountSettingsEdited.subject":
  "{userName}編輯了其帳戶設置",
"pushNotifications.emptyPropertyValueInCollection.label": "空",
"pushNotifications.formatChange.pageIcon.imagePlaceholder": "圖片",
"pushNotifications.formatChange.pageIcon.label": "頁面圖標",
"pushNotifications.noAccessPermissionLevel.label": "無法訪問",
"pushNotifications.pageDeleted.subject": "{userName} 已刪除 {pageName}",
"pushNotifications.pageLocked.subject": "{userName} 鎖定了 {pageName}",
"pushNotifications.pagePermanentlyDeleted.subject":
  "{userName} 已永久刪除 {pageName}",
"pushNotifications.pageRestored.subject": "{userName} 已恢復 {pageName}",
"pushNotifications.pageUnlocked.subject": "{userName} 解鎖了 {pageName}",
"pushNotifications.permissionsEditedForPageOrSpace.notificationSubject":
  "{userName}編輯了{targetName}的權限",
"pushNotifications.publicPermissions.label": "公開 ({permissionLevel})",
"pushNotifications.readerPermissionLevel.label": "只讀",
"pushNotifications.reminderChanged.subject": "{pageName} 中的提醒",
"pushNotifications.spacePermissionsWithRole.label":
  "{spaceName} ({permissionLevel})",
"pushNotifications.unknownAuthorUpdatedProperty.label": "未知作者",
"pushNotifications.unknownCollectionPropertyName.label": "未知",
"pushNotifications.unknownRelationPropertyChanged.label": "未知",
"pushNotifications.untitledCollection.label": "無標題",
"pushNotifications.userAddedToSpace.notificationSubject":
  "{userName} 將你加入到 {workspaceName}",
"pushNotifications.userCommentedSubject.notificationSubject":
  "{userName} 在 {targetName} 發表了評論",
"pushNotifications.userDeletedCommentText.notificationContents":
  "[已刪除]💬 {commentText}",
"pushNotifications.userInvitedToSpace.notificationSubject":
  "{userName} 邀請你加入 {workspaceName}",
"pushNotifications.userInvitedToSpaceByBot.notificationSubject":
  "你已被邀請加入{workspaceName}",
"pushNotifications.userInvitedToTeam.notificationSubject":
  "{userName} 邀請你加入 {teamName} 團隊",
"pushNotifications.userMentionedInPage.notificationSubject":
  "{userName}在{targetName}提及了你",
"pushNotifications.userPermissionsWithRole.label":
  "{userName} ({permissionLevel})",
"pushNotifications.workspaceName.untitled.placeholder": "無標題",
"queueApiErrors.duplicateBlockLimit.errorMessage":
  "糟糕，內容太多了！你當前的方案限制你只能創建 {blockLimitNumber} 個塊副本。請使用較少的內容重試。",
"queueApiErrors.export_audit_log_limit.errorMessage":
  "哎呀，此工作區的導出操作已在進行中！請在當前導出完成並收到包含 CSV 內容的電子郵件後重試。",
"quoteBlock.emptyQuote.placeholder": "空白引用",
"rateLimitError.message": "請稍後再試。",
"recordIcon.customTab.title": "自定義",
"recordIcon.emojiModalMenu.title": "頁面圖標",
"recordIcon.emojiTab.title": "表情符號",
"recordIcon.iconTab.title": "圖標",
"recordIcon.linkTab.buttonText": "提交",
"recordIcon.linkTab.placeholder": "粘貼圖片鏈接…",
"recordIcon.mediaMenu.caption":
  "推薦尺寸為 {recommendedWidth} × {recommendedHeight} 像素",
"recordIcon.uploadFileTab.uploadError.message": "出了些問題。",
"recordPath.untitledBlock.placeholder": "無標題",
"referralActivatedEmail.greeting": "你好 {name} ，",
"referralActivatedEmail.howToEarnCreditList.item.downloadApps":
  "下載<mobilelink>移動應用</mobilelink>和<desktoplink>桌面應用</desktoplink>。",
"referralActivatedEmail.howToEarnCreditList.item.installWebClipper":
  "為 Chrome 安裝<webclipperlink> Notion 網頁剪裁器</webclipperlink>。",
"referralActivatedEmail.howToEarnCreditList.item.keepInviting":
  "多多<referlink>邀請</referlink>朋友和同事。",
"referralActivatedEmail.notionTeamSignoffAndThanks":
  "感謝你將 Notion 告訴親朋好友，{br} ──來自 Notion 團隊",
"referralActivatedEmail.rewardMessage":
  "你的帳戶已賺取<b> {creditValue} 的積分</b>！可以使用積分來<upgradelink>升級</upgradelink>並完全利用 Notion 的所有強大功能。{br}{br}想要<upgradelink>賺取更多的積分</upgradelink>嗎？可以通過以下幾種方法：",
"referralActivatedEmail.signupText":
  "收到你的邀請後，有人註冊了 Notion 帳戶。",
"referralActivatedEmail.subjectLine": "{creditValue}積分即將到帳！",
"referralEmail.creditInfo.text":
  "註冊後，我們會將<b> {creditDollarAmount} </b>放入你的帳戶。可以用它來升級並發現 Notion 提供的所有強大功能。",
"referralEmail.invitedIntro.text":
  "<b> {fromUserName} </b> ({fromUserEmail}) 邀請你加入 Notion！ {br}{br} Notion 是一種多合一的信息工具，幫助你保持生活和工作井井有條。在我們的<referlink>網站</referlink>上可以了解更多相關信息。",
"referralEmail.signupPrompt":
  "<b> <signuplink>點擊此處註冊並賺取 {creditDollarAmount} 積分</signuplink> </b>",
"referralEmail.subjectLine": "{fromUserName} 邀請你加入Notion",
"regionSettings.region.label": "地區",
"regionSettings.region.subtitle": "影響日期、數字和貨幣的默認格式",
"regionalFormatSettings.customDateFormat.applyChanges": "應用更改",
"regionalFormatSettings.customDateFormat.title": "自定義格式",
"regionalFormatSettings.customSettingOption.fullDate.custom": "單個設置",
"regionalFormatSettings.customSettingOption.fullDate.full": "完整日期",
"regionalFormatSettings.customSettingOption.fullDate.iso": "ISO格式",
"regionalFormatSettings.customSettingOption.fullDate.long": "全部",
"regionalFormatSettings.customSettingOption.fullDate.medium": "中間",
"regionalFormatSettings.customSettingOption.fullDate.short": "簡單",
"regionalFormatSettings.customSettingOption.number.number": "數字",
"regionalFormatSettings.customSettingOption.number.percent": "百分比",
"regionalFormatSettings.customSettingOption.number.withCommas":
  "包含逗號的數字",
"regionalFormatSettings.customSettingOption.shortDate.custom": "單個設置",
"regionalFormatSettings.customSettingOption.shortDate.iso": "ISO格式",
"regionalFormatSettings.customSettingOption.shortDate.short": "簡單",
"regionalFormatSettings.customSettingOption.weekStartOn.monday": "星期一",
"regionalFormatSettings.customSettingOption.weekStartOn.sunday": "週日",
"regionalFormatSettings.defaultRegionalSettings.startDayOfWeek.monday":
  "星期一",
"regionalFormatSettings.defaultRegionalSettings.startDayOfWeek.sunday":
  "週日",
"regionalFormatSettings.defaultSetting.fullDate": "完整日期",
"regionalFormatSettings.defaultSetting.numbers": "數字",
"regionalFormatSettings.defaultSetting.shortDate": "日期簡寫",
"regionalFormatSettings.defaultSetting.weekStart": "一周的開始日期",
"regionalFormatSettings.label.subtitle": "自動應用你所在地區的標準格式",
"regionalFormatSettings.label.title": "使用區域默認值",
"relationHelpers.autoInverseRelation.name":
  "與{sourceCollectionName}相關 ({sourceRelationName})",
"relationHelpers.autoInverseRelation.untitledDatabase": "無標題數據庫",
"relationHelpers.autoInverseRelation.untitledRelation": "無標題關係",
"relationHelpers.autoInverseRelationSimple.name": "{sourceCollectionName}",
"relationHelpers.autoInverseRelationWithIcon.name":
  "{sourceCollectionIcon} {sourceCollectionName}",
"relationHelpers.autoRelation.name": "{targetCollectionName}",
"relationHelpers.autoRelationWithIcon.name":
  "{targetCollectionIcon} {targetCollectionName}",
"relationHelpers.autoSelfRelation.name": "相關 {targetCollectionName}",
"relationHelpers.autoSelfRelationInverse.name":
  "逆相關 {sourceCollectionName}",
"relationPropertyMenu.addAPage.button": "添加頁面",
"relationPropertyMenu.mobileDoneButton": "完成",
"relationPropertyMenu.mobileMenuDone.button": "完成",
"relationPropertyMenu.mobileRelationMenu.title": "關聯",
"relationPropertyMenu2.searchPlaceholder": "鏈接或創建頁面…",
"relationToken.title.placeholder": "鍵入標題...",
"removeUsersFromSpace.nonexistentSpace.error.message": "空間不存在。",
"removeUsersFromSpace.nonexistentUser.error.message": "用戶不存在。",
"removeUsersFromSpace.removingLastAdmin.error.message":
  "哎呀！你不能刪除最後一個管理員。",
"renameFileMenuPopup.input.placeholder": "無標題","replitBlock.embeds.button.label": "嵌入 Repl",
"replitBlock.embeds.caption": "適用於 Replit。",
"replitBlock.placeholder": "嵌入 repl",
"reportPage.additionalInformation.placeholder": "輸入附加信息(可選)",
"reportPage.helpButton.caption": "Notion 的內容政策",
"reportPage.reportReasons.inappropriate_content": "內容不當",
"reportPage.reportReasons.other_content_policy_violation": "其他",
"reportPage.reportReasons.phishing_or_spam": "網絡釣魚或垃圾郵件",
"reportPageModal.cancelButton.label": "取消",
"reportPageModal.closeButton.label": "關閉",
"reportPageModal.mobile.title": "舉報頁面",
"reportPageModal.offlineMessage.description": "請連接網絡後進行舉報。",
"reportPageModal.reportButton.label": "舉報",
"reportPageModal.reportReasons.other_content_policy_violation": "其他",
"reportPageModal.reportReasons.phishing_or_spam": "網絡釣魚或垃圾郵件",
"reportPageModal.somethingWentWrong.label": "出了些問題。",
"reportPageModal.thanksForReporting":
  "感謝你舉報此頁面，我們的團隊將進行查看。",
"reportPageModal.title": "為什麼要舉報此頁面？",
"requestAccessForm.cancelButton.label": "取消",
"requestAccessForm.messageInput.placeholder": "消息（可選）",
"requestAccessForm.mobileSend.label": "發送",
"requestAccessForm.sendRequestButton.label": "發送請求",
"requestAccessForm.sendRequestButton.title": "申請訪問權限",
"requestAccessForm.title.label": "申請訪問權限",
restrictedPageTitle: "無訪問權限",
"restrictedPermissionConfirmationModal.actionButton.cancel": "關閉",
"restrictedPermissionConfirmationModal.actionButton.restoreAccess":
  "恢復訪問權限",
"restrictedPermissionConfirmationModal.actionButton.restrictAccess":
  "限制訪問",
"restrictedPermissionConfirmationModal.footer.whisperText":
  "管理員仍然可以為受限頁面恢復權限。",
"restrictedPermissionConfirmationModal.permissionGroup.generic": "權限",
"restrictedPermissionConfirmationModal.permissionGroup.group": "群組",
"restrictedPermissionConfirmationModal.permissionGroup.space": "工作區",
"restrictedPermissionConfirmationModal.permissionGroup.user": "用戶",
"restrictedPermissionConfirmationModal.remove.description":
  "確定要更改此角色並限制訪問嗎？此頁面將不再繼承父頁面的分享設置。",
"restrictedPermissionConfirmationModal.restore.description":
  "確定要恢復訪問權限嗎？將從父頁面繼承以下權限：",
"restrictedPermissionConfirmationModal.restoreNoChanges.description":
  "確定要恢復訪問權限嗎？",
"restrictedPermissionConfirmationModal.restrict.description":
  "確定要刪除此{permissionGroup}並限制訪問權限嗎？此頁面將不再繼承父頁面的分享設置。",
"revokeTokenButton.tooltip": "撤銷此令牌。",
"richTextMenu.boldButton.tooltip": "加粗",
"richTextMenu.equationButton.tooltip": "創建公式",
"richTextMenu.italicsButton.tooltip": "斜體",
"richTextMenu.linkButton.tooltip": "鏈接",
"richTextMenu.markAsCodeButton.tooltip": "標記為代碼",
"richTextMenu.mentionButton.tooltip": "提及人員、頁面或日期…",
"richTextMenu.strikeThroughButton.tooltip": "刪除線",
"richTextMenu.turnIntoButton.label": "轉換成",
"richTextMenu.turnIntoButton.tooltip": "轉換成",
"richTextMenu.underlineButton.tooltip": "下劃線",
"router.loginWithSamlError.message": "無法登錄。",
"router.renderErrorPage.message.part1": "糟糕，出了些問題。",
"router.renderErrorPage.message.part2":
  "請刷新並重試，或者<textlink>向支持人員發送消息</textlink>。",
"router.renderErrorPage.reloadButton.label": "刷新",
"samlErrors.couldNotDownloadIdpMetadata.message":
  "無法下載 SAML IDP 元數據。請檢查你的 IDP 元數據 URL 是否正確。",
"samlErrors.couldNotParseIdentityProviderMetadataXML.message":
  "無法解析 IDP 元數據 XML。",
"samlErrors.couldNotParseIdpMetadata.message":
  "無法解析 SAML IDP 元數據。請檢查你的 IDP 元數據是否正確。",
"samlErrors.disableTogglingPageAccessRequestsForNonMembers":
  "當前已禁用非工作區成員的頁面訪問請求。",
"samlErrors.domainVerificationConfigHasDomain.message":
  "SAML 配置已具有嘗試添加的域。",
"samlErrors.domainVerificationDnsFailed.message":
  "DNS 記錄不包含正確的 Notion 驗證碼 TXT 記錄。",
"samlErrors.domainVerificationInvalidDomain.message":
  "域的值無效。請正確調整格式並確保未保留域：{domain}",
"samlErrors.domainVerificationhasPending.message":
  "此域已有待處理的域名驗證。",
"samlErrors.emailDomainAlreadyConfigured.message":
  "此電子郵件域名已在現有工作區設置過 SAML。",
"samlErrors.emailDomainWorkspaceCreationIsEducationDomain.message":
  "無法阻止基於教育電子郵件域名創建工作區。",
"samlErrors.emailNotConfiguredForSamlSso.message":
  "此電子郵件未配置為此工作區的SAML SSO。請與管理員聯繫。",
"samlErrors.incorrectURL.message":
  "SAML 斷言中的 Audience 必須為 {correctUrl}",
"samlErrors.incorrectlyConfiguredSaml.message":
  "SAML SSO 配置錯誤。請聯繫你的管理員。",
"samlErrors.invalidIDPURL.message": "IDP 元數據 URL 是無效的 URL。",
"samlErrors.invalidSamlConfiguration.message":
  "無效的 SAML 配置。請聯繫你的管理員。",
"samlErrors.samlNameIdEmailRequired.message":
  "SAML 名稱 ID 屬性必須是郵箱地址。請聯繫你的管理員。",
"samlErrors.samlRequired.message": "你必須使用 SAML SSO 以登錄 Noion",
"saveChanges.errorDialog.blocksCannotBeMovedInsideSelf.message":
  "嘿！塊不能移動到它們自己裡面。",
"saveEditsError.message": "保存編輯時存在問題。請給我們發消息尋求幫助。",
"saveEditsError.mobile.message":
  "保存編輯時存在問題。請給我們發消息尋求幫助。",
"scimTableLegacyUserCell.tooltip": "此令牌由不再是工作區管理員的用戶創建。 ",
"scimTokenSettings.NewSCIMTokenButton.title": "添加令牌",
"scimTokenSettings.NewSCIMTokenButton.unableToCreateTokenMessage.spaceHasLegacyToken":
  "要創建新的 SCIM 令牌，請撤銷現有令牌。",
"scimTokenSettings.NewSCIMTokenButton.unableToCreateTokenMessage.undefined":
  "目前無法創建新的 SCIM 令牌。請稍後再試。",
"scimTokenSettings.NewSCIMTokenButton.unableToCreateTokenMessage.userHasExistingToken":
  "你已經擁有註冊過的 SCIM 令牌。如要創建新的令牌，請撤銷你之前創建的令牌。",
"scimTokenSettings.error.failedCreatingNewScimToken":
  "無法創建新的 SCIM 令牌，請稍後重試。",
"scroller.scrollDown.name": "向下滾動",
"search.addFilter.button.label": "添加篩選器",
"search.dateMenu.dateMessage": "選擇或輸入日期...",
"search.dateRangeMenu.endingMessage": "結束",
"search.dateRangeMenu.startingMessage": "開始",
"search.filterBarFilter.title":
  "{filterName}{colon} {filterOperator} {filterValues}",
"search.filterMenu.addAPersonButton.label": "添加人員",
"search.filterMenu.addATeamButton.label": "添加團隊",
"search.filterMenu.deletedOnlyToggle.label": "僅刪除的內容",
"search.filterMenu.devSection.title": "開發工具",
"search.filterMenu.moreFilters.Date": "日期",
"search.filterMenu.moreFilters.created": "創建時間",
"search.filterMenu.moreFilters.createdBy": "創建者",
"search.filterMenu.moreFilters.date": "日期",
"search.filterMenu.moreFilters.inPage": "在頁面中",
"search.filterMenu.moreFilters.inTeams": "團隊中",
"search.filterMenu.moreFilters.lastEdited": "上次編輯",
"search.filterMenu.moreFilters.parentPage": "頁中",
"search.filterMenu.moreFilters.person": "人員",
"search.filterMenu.moreFiltersSection.title": "更多篩選",
"search.filterMenu.onlyMatchTitlesToggle.label": "僅搜索標題",
"search.filterMenu.quickFilters.createdByMe": "由我創建",
"search.filterMenu.quickFilters.editedLastWeek": "編輯於上週",
"search.filterMenu.quickFilters.inCurrentPage": "在當前頁面",
"search.filterMenu.quickFiltersSection.title": "快速篩選",
"search.filterMenu.searchPeople.placeholder": "搜索人員",
"search.filterMenu.searchTeams.placeholder": "搜索團隊",
"search.filterMenu.searchTeams.resultsTitle": "選擇團隊",
"search.filterMenu.showSource.label": "顯示調試信息",
"search.header.addFilter.button.label": "添加篩選器",
"search.header.badSearch.button.label": "報告錯誤搜索",
"search.inputMenu.errorMessage": "出了些問題。",
"search.inputMenu.loading.message": "載入中…",
"search.inputMenu.noResults.message": "未找到結果。",
"search.recentMenuItem.createdDateAfter.subtitle": "創建於 {startDate}之後",
"search.recentMenuItem.createdDateBefore.subtitle":
  "創建於 {startDate}之前",
"search.recentMenuItem.createdDateWithRange.subtitle":
  "創建於 {startDate}至 {endDate}",
"search.recentMenuItem.lastEditedDateAfter.subtitle":
  "上次編輯於 {startDate}之後",
"search.recentMenuItem.lastEditedDateBefore.subtitle":
  "上次編輯於 {endDate}之前",
"search.recentMenuItem.lastEditedDateWithRange.subtitle":
  "上次編輯於 {startDate}至 {endDate}",
"search.recentMenuItem.listOfPeopleOrPages.label":
  "{firstPageOrPerson} + {numberRemaining}",
"search.recentMenuItem.onlyMatchTitles.subtitle": "僅匹配標題",
"search.recentMenuItemDetail.createdBy.subtitle": "由{people}創建",
"search.recentMenuItemDetail.editedBy.subtitle": "由{people}編輯",
"search.recentMenuItemDetail.inPage.subtitle": "在{pages}中",
"search.recentPagesTimeBuckets.older.text": "更早",
"search.recentPagesTimeBuckets.past30Days.text": "過去 30 天",
"search.recentPagesTimeBuckets.pastWeek.text": "上週",
"search.recentPagesTimeBuckets.today.text": "今天",
"search.recentPagesTimeBuckets.yesterday.text": "昨天",
"search.sort.sortMenuTitle": "排序方式",
"search.sort.sortOrder.bestMatches": "最佳匹配",
"search.sort.sortOrder.created.newestFirst": "創建時間：最新優先",
"search.sort.sortOrder.created.oldestFirst": "創建時間：最早優先",
"search.sort.sortOrder.lastEdited.newestFirst": "上次編輯：最新優先",
"search.sort.sortOrder.lastEdited.oldestFirst": "上次編輯：最早優先",
"searchDateFilter.acceptButton.label": "接受",
"searchDateFilter.applyButton": "應用",
"searchDateFilter.cancelButton.label": "取消",
"searchDateFilter.clearButton": "清除",
"searchDateFilter.shortTitle": "日期",
"searchErrorMenuItem.error.genericErrorMessage": "出了些問題",
"searchErrorMenuItem.error.noResults": "無結果",
"searchErrorMenuItem.errorPrompt.goOnline": "連接到網絡以獲取更多結果。",
"searchErrorMenuItem.errorPrompt.refreshOrReport":
  "嘗試刷新或<reportlink>報告問題</reportlink>。",
"searchErrorMenuItem.errorPrompt.searchDeleted":
  "某些結果可能位於已刪除的頁面中。{br}<searchdeleted>搜索已刪除的頁面</searchdeleted>",
"searchErrorMenuItem.errorPrompt.searchTerms": "嘗試不同的搜索詞",
"searchErrorMenuItem.errorPrompt.searchTermsAndFilters":
  "嘗試不同的搜索詞或篩選",
"searchFooter.helpText.openHint": "打開",
"searchFooter.helpText.openNewTab": "在新標籤頁中打開",
"searchFooter.helpText.openNewWindow": "在新窗口中打開",
"searchFooter.helpText.selectHint": "選擇",
"searchHelpers.afterStartDate": "在 {startDate}之後",
"searchHelpers.beforeEndDate": "在 {endDate}之前",
"searchHelpers.betweenStartAndEndDates": "{startDate} - {endDate}",
"searchInputMenuItem.placeholder.namedPage": "在 {pageTitle} 中搜索…",
"searchInputMenuItem.placeholder.namedSpace": "搜索 {spaceName}…",
"searchInputMenuItem.placeholder.unnamedPage": "在頁面中搜索…",
"searchPageFilter.searchTokenFilter.addAPage.button": "添加另一個頁面",
"searchPageFilter.searchTokenFilter.resultSection.title": "選擇頁面",
"searchPageFilter.searchTokenFilter.tokenInput.placeholder": "搜索頁面…",
"searchTokenFilter.applyButton": "應用",
"searchTokenFilter.clearButton": "清除",
"securitySAMLSettings.SAMLSection.helpButton.label": "了解 SAML 和單點登錄",
"securitySAMLSettings.SAMLSection.uneditableMessage":
  "SAML 正在由工作區<bold>{workspaceName}</bold>管理。請到那裡更改相關 SAML 設置。",
"securitySAMLSettings.SAMLSingleSignOnSection.automaticallyCreateAccounts.caption":
  "允許用戶創建 Notion 帳戶，而無需從 IDP 配置。",
"securitySAMLSettings.SAMLSingleSignOnSection.automaticallyCreateAccounts.label":
  "登錄時自動創建帳戶",
"securitySAMLSettings.SAMLSingleSignOnSection.enableSAML.caption":
  "這將允許用戶使用已配置的域名上的郵箱地址通過 SAML 登錄。SAML 身份驗證可以在下面強制執行。",
"securitySAMLSettings.SAMLSingleSignOnSection.enableSAML.label":
  "啟用 SAML",
"securitySAMLSettings.SAMLSingleSignOnSection.enableSAML.tooltip":
  "SAML 完全配置後方可啟用。",
"securitySAMLSettings.SAMLSingleSignOnSection.enforceSAML.captionMulti":
  "強制執行後，在上面配置的電子郵件域名中到工作區成員只能使用 SAML SSO 登錄。管理員帳戶仍可以使用電子郵件登錄。",
"securitySAMLSettings.SAMLSingleSignOnSection.enforceSAML.label":
  "強制使用 SAML",
"securitySAMLSettings.SAMLSingleSignOnSection.enforceSAML.tooltip":
  "啟用 SAML 後變更此選項。",
"securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.IdentityProviderMetadataURLOption.label":
  "IDP 元數據 URL",
"securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.IdentityProviderMetadataXMLOption.caption":
  "輸入你的身份提供商（IDP）提供的值。",
"securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.IdentityProviderMetadataXMLOption.input.placeholder":
  "IDP 元數據 XML",
"securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.IdentityProviderMetadataXMLOption.label":
  "IDP 元數據 XML",
"securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.title":
  "單點登錄 URL",
"securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.url.caption":
  "在身份提供商的 SAML 配置中輸入此內容。",
"securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.url.tooltip":
  "複製鏈接",
"securitySAMLSettings.SAMLSingleSignOnSection.title": "SAML 單點登錄",
"securitySAMLSettings.SCIMSection.helpButton.label": "了解 SCIM",
"securitySAMLSettings.SCIMSection.title": "SCIM 配置",
"securitySAMLSettings.SetupInformationSection.samlSSOEntityID":
  "SSO/SAML 實體 ID",
"securitySAMLSettings.SetupInformationSection.samlSSOEntityID.copyTooltip":
  "點擊可複制鏈接",
"securitySAMLSettings.SetupInformationSection.samlSSOEntityIDLink":
  "SAML 單點登錄/SAML 實體 ID",
"securitySAMLSettings.SetupInformationSection.scimBaseUrl": "SCIM 基礎 URL",
"securitySAMLSettings.SetupInformationSection.scimBaseUrl.copyTooltip":
  "點擊可複制鏈接",
"securitySAMLSettings.SetupInformationSection.title": "設置信息",
"securitySAMLSettings.SetupInformationSection.workspaceId": "工作區 ID",
"securitySAMLSettings.SetupInformationSection.workspaceId.copyTooltip":
  "點擊可複制 ID",
"securitySAMLSettings.cancelButton.label": "取消",
"securitySAMLSettings.disableGuests.confirmationModal.confirmButton.label":
  "是的",
"securitySAMLSettings.disableGuests.confirmationModal.message":
  "是否確定？此工作區中的所有訪客都將被移除。",
"securitySAMLSettings.emailDomainsSection.addDomain": "添加域名",
"securitySAMLSettings.emailDomainsSection.emailInput.captionNoSupportLink":
  "啟用 SAML 後，任何具有以下域名的郵箱地址的都可以使用 SAML SSO 登錄。",
"securitySAMLSettings.emailDomainsSection.removeDomain.accept": "刪除域名",
"securitySAMLSettings.emailDomainsSection.removeDomain.cancel": "取消",
"securitySAMLSettings.emailDomainsSection.removeDomain.description":
  "如果該域名已經過驗證，則刪除該域名將阻止使用該電子郵件的其他人使用 SSO 登錄。",
"securitySAMLSettings.emailDomainsSection.removeDomain.message":
  "確定要刪除此域名？",
"securitySAMLSettings.emailDomainsSection.statusToken.expired": "已過期",
"securitySAMLSettings.emailDomainsSection.statusToken.invalid": "無效",
"securitySAMLSettings.emailDomainsSection.statusToken.notVerified":
  "未驗證",
"securitySAMLSettings.emailDomainsSection.statusToken.verified": "已驗證",
"securitySAMLSettings.emailDomainsSection.title": "電子郵件域名",
"securitySAMLSettings.offline.message": "請連接網絡後管理安全設置。",
"securitySAMLSettings.preventPublicSharing.confirmationModal.confirmButton.label":
  "是的",
"securitySAMLSettings.preventPublicSharing.confirmationModal.message":
  "是否確定？任何非工作區成員或訪客將無權訪問工作區中的所有頁面。",
"securitySAMLSettings.securitySection.disableExport.caption":
  "禁止任何人導出為 Markdown、CSV 或 PDF。",
"securitySAMLSettings.securitySection.disableExport.label": "禁用導出",
"securitySAMLSettings.securitySection.disableGuests.caption":
  "禁止任何人邀請工作區之外的人訪問任何頁面。",
"securitySAMLSettings.securitySection.disableGuests.label": "禁用訪客",
"securitySAMLSettings.securitySection.disableMovingPages.caption":
  "禁止任何人通過“移動到”或“保存副本到”操作將頁面移動或保存副本到其他工作區。",
"securitySAMLSettings.securitySection.disableMovingPages.label":
  "禁止移動頁面或保存副本到其他工作區",
"securitySAMLSettings.securitySection.disablePublicAccessRequests.caption":
  "這將防止擁有頁面鏈接的人請求訪問。工作區成員始終可以請求訪問權限。",
"securitySAMLSettings.securitySection.disablePublicAccessRequests.label":
  "禁用來自非成員的頁面訪問請求",
"securitySAMLSettings.securitySection.disableSpacePageEdits.caption":
  "使成員無法創建、移動、重新排序和刪除頂層工作區頁面。",
"securitySAMLSettings.securitySection.disableSpacePageEdits.label":
  "阻止成員編輯工作區部分",
"securitySAMLSettings.securitySection.preventPublicSharing.caption":
  "禁用此工作區中每個頁面上“分享”菜單中的“分享到網絡”選項。",
"securitySAMLSettings.securitySection.preventPublicSharing.label":
  "禁用公共頁面共享",
"securitySAMLSettings.securitySection.title": "安全",
"securitySAMLSettings.spaceNamesSection.spaceNameInput.caption":
  "此處的 SAML 設置適用於多個工作區。<contactlink>聯繫支持人員</contactlink>來添加或刪除工作區。",
"securitySAMLSettings.spaceNamesSection.title": "工作區",
"securitySAMLSettings.updateButton.label": "更新",
"securitySAMLSettings.upsell.caption":
  "升級到企業版即可獲得高級安全設置、SAML 單點登錄以及自動用戶和群組配置。",
"securitySAMLSettings.upsell.title": "升級以獲得高級安全設置、SAML 和 SCIM",
"selectableCommentMenu.addCommentPrompt.tooltip":
  "點擊<invertedcolor>添加評論</invertedcolor>",
"selectableHoverMenu.filterActions.placeholder": "搜索動作…",
"selectionLinkButton.addLink.tooltip": "添加鏈接",
"selectionLinkButton.copyLink": "複製鏈接",
"selectionLinkButton.linkToPage": "鏈接到頁面",
"selectionLinkButton.linkToPage.linkToBlock": "鏈接到塊",
"selectionLinkButton.linkToPage.loading": "載入中…",
"selectionLinkButton.linkToPage.unknownBlock": "未知塊",
"selectionLinkButton.linkToPageSection.title": "鏈接到頁面",
"selectionLinkButton.linkToURL": "鏈接到網頁",
"selectionLinkButton.linkToWebPage": "鏈接到網頁",
"selectionLinkButton.linkedToSection.title": "鏈接到",
"selectionLinkButton.linkedToSection.webPage": "網頁",
"selectionLinkButton.mobile.title": "鏈接",
"selectionLinkButton.removeLink": "移除鏈接",
"selectionLinkButton.search.createNewLinkPlaceholder": "粘貼鏈接或搜索頁面",
"selectionLinkButton.search.editLinkPlaceholder": "編輯鏈接或搜索頁面",
"sendEmailDigest.emailSubjectLine":
  "{numberOfUpdates, plural, other {{workspaceName}有 {numberOfUpdates} 項更新}}",
"sendEmailDigest.untitledSpaceName.placeholder": "無標題",
"sendMobileAppLink.textMessage":
  "你好！點擊此鏈接可在手機上安裝 Notion： {baseURL}/mobile?download=true 不要忘了下載我們的 Mac 和 Windows 應用。祝使用愉快！",
"sendSCIMTokenInactiveEmail.emailSubjectLine":
  "SCIM 令牌已在 {workspaceName} 撤銷",
"sendSCIMTokenInactiveEmail.untitledSpaceName.placeholder": "工作區",
"setPageContentClassification.unknownPageName.default": "Notion 頁面",
"settingItem.buttonPopup.done.label": "完成",
"settings.regionSettings.regionSearch": "搜索區域",
"sharedActivity.updatedPermissionGroupCreated.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors}創建了群組{groupName}}}",
"sharedActivity.updatedPermissionGroupDeleted.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors}刪除了群組{groupName}}}",
"sharedActivity.updatedPermissionGroupEdit.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors}編輯了群組{groupName}}}",
"sharedActivity.updatedPermissionGroupEditedDefault.header":
  "{numberOfAuthors, plural, other {{authorOrAuthors}編輯了群組{groupName}}}",
"sharedContextualInviteHelpers.default.inviteMessage": "你的邀請消息",
"sharedContextualInviteHelpers.guest.inviteMessage":
  "{userName} 已分享“ {pageName} ”。加入 {spaceName} 以查看此頁面。",
"sharedContextualInviteHelpers.guest.inviteMessage2":
  "{userName} 分享了 {pageName}。加入 {spaceName} 以查看此頁面。",
"sharedContextualInviteHelpers.member.inviteMessage":
  "{userName} 已分享“ {pageName} ”。",
"sharedContextualInviteHelpers.member.inviteMessage2":
  "{userName} 與你分享了頁面 {pageName}。",
"sharedWithMePage.menuItem.caption": "{time}・{actorName}",
"sharedWithMePageMenuItem.copylinkToPage.tooltip": "複製鏈接",
"sharedWithMePageMenuItem.linkCopied.tooltip": "鏈接已復制",
"sharedWithMePopover.earlierSection.label": "早些時候",
"sharedWithMePopover.learnMore.prompt": "了解共享頁面",
"sharedWithMePopover.pastWeekSection.label": "上週",
"sharedWithMePopover.sortOrder.lastEditedNewest": "上次編輯時間",
"sharedWithMePopover.sortOrder.relevance": "相關性",
"sharedWithMePopover.todaySection.label": "今天",
"sharedWithMePopover.updatedEarlierSection.label": "較早更新",
"sharedWithMePopover.updatedPastWeekSection.label": "上週更新",
"sharedWithMePopover.updatedTodaySection.label": "今天更新",
"sideBar.betaBadge": "試用版",
"sideBar.newBadge": "新",
"sidebar.addAPageButtonTeamToggle.tooltip": "添加頁面",
"sidebar.addAWorkspaceOrPrivatePage.tooltip": "添加頁面",
"sidebar.addButton.addPageTooltip": "添加頁面",
"sidebar.addButton.addTeamTooltip": "新建團隊空間",
"sidebar.betaBadge": "試用版",
"sidebar.bookmarkedPagesSection.tooltip": "你最愛的頁面。",
"sidebar.developmentOnly.uidoc.button": "UI 文檔",
"sidebar.developmentOnly.uidoc.tooltip": "僅用於開發的設計和工程工具。",
"sidebar.favoritesSection.header": "最愛",
"sidebar.guestMember.createWorkspacePrompt": "創建工作區",
"sidebar.guestMember.message":
  "你當前是工作區訪客。若要查看所有工作區頁面，請聯繫管理員將你升級為成員。",
"sidebar.newPage.button": "新頁面",
"sidebar.openImportModalButton": "導入",
"sidebar.openImportModalButton.tooltip": "從 Word、Markdown、HTML 等導入。",
"sidebar.openSidebarTeamBrowserButton": "團隊空間",
"sidebar.openSidebarTeamBrowserButton.tooltip": "創建或加入更多團隊空間",
"sidebar.openTemplatePickerButton": "模板",
"sidebar.openTemplatePickerButton.tooltip":
  "查看模板並將其保存到你的工作區中。",
"sidebar.openTrashModalButton.tooltip": "恢復已刪除的頁面。",
"sidebar.outlinerTeamToggleButton.addLabel": "添加成員",
"sidebar.outlinerTeamToggleButton.archiveLabel": "歸檔團隊空間",
"sidebar.outlinerTeamToggleButton.cannotArchiveTooltip":
  "創建另一個默認團隊空間，以歸檔此團隊空間",
"sidebar.outlinerTeamToggleButton.joinLabel": "加入團隊空間",
"sidebar.outlinerTeamToggleButton.leaveLabel": "離開團隊空間",
"sidebar.outlinerTeamToggleButton.memberViewLabel": "查看成員",
"sidebar.outlinerTeamToggleButton.ownerViewLabel": "團隊空間設置",
"sidebar.outlinerTeamToggleButton.tooltip": "團隊空間設置和成員...",
"sidebar.overflowButton.browseTeamspaces": "瀏覽團隊空間",
"sidebar.privatePagesSection.tooltip": "只有你可以訪問這些頁面。",
"sidebar.privateSection.header": "私人",
"sidebar.quickFindSearch.label": "快速查找",
"sidebar.quickFindSearch.tooltip": "搜索并快速跳轉到頁面",
"sidebar.search.label": "搜索",
"sidebar.sectionHeaderHide.tooltip": "點擊以隱藏分區",
"sidebar.sectionHeaderShow.tooltip": "點擊以顯示分區",
"sidebar.sharedPagesSection.tooltip": "只有你和分享過頁面的人才能訪問。",
"sidebar.sharedSection.header": "共享",
"sidebar.teamSection.tooltip": "你的團隊之一",
"sidebar.templateIntro.content":
  "開箱即用，或根據你自己的工作流程自定義它們。",
"sidebar.templateIntro.title": "這裡有一些模板，可以幫助你入門",
"sidebar.upgradeButton.prompt":
  "更新你的個人資料、升級到專業版或邀請新成員",
"sidebar.workspacePagesSection.tooltip":
  "所有工作區成員都可以訪問這些頁面。",
"sidebar.workspaceSection.header": "工作區",
"sidebarActions.confirmDialog.lockedWorkspaceTopLevel.message":
  "此工作區已鎖定工作區頂層頁面的動作。",
"sidebarActions.confirmDialog.movePageToPrivate.confirmButton.label":
  "移動到私人區",
"sidebarActions.confirmDialog.movePageToPrivate.message":
  "確定要將此頁面設為私有嗎？ <boldtext>只有你將能夠訪問它。</boldtext>",
"sidebarActions.confirmDialog.moveWorkspacePage.confirmButton.label":
  "移動頁面",
"sidebarActions.confirmDialog.moveWorkspacePage.message":
  "確定要移動此工作區頁面？<boldtext>所有 {memberCount} 位成員都可以看到</boldtext>",
"sidebarActions.confirmDialog.newWorkspacePage.confirmButton.label":
  "創建頂層頁面",
"sidebarActions.confirmDialog.newWorkspacePage.message":
  "確定要創建一個頂層頁面嗎？ <strongtext>此頁面將在所有 {memberCount} 位成員的工作區邊欄中可見。</strongtext>",
"sidebarActions.confirmDialog.reorderWorkspaceSidebar.confirmButton.label":
  "重新排序側邊欄",
"sidebarActions.confirmDialog.reorderWorkspaceSidebar.message":
  "確定要對工作區邊欄重新排序嗎？ <boldtext>這將影響所有 {memberCount} 位成員。</boldtext>",
"sidebarActions.confirmDialog.sharePageWithWorkspace.confirmButton.label":
  "移動到工作區",
"sidebarActions.confirmDialog.sharePageWithWorkspace.message":
  "確定與工作區分享此頁面嗎？<boldtext>所有 {memberCount} 位成員都將可以訪問。</boldtext>",
"sidebarAppDownload.downloadApp": "下載應用",
"sidebarAppDownload.subtitle":
  "<boldtext>我們採用極簡的桌面應用，可讓你保持專注。而且該應用的速度也更快了。</boldtext>",
"sidebarAppDownload.title": "<boldtext>試用 {os} 版 Notion</boldtext>",
"sidebarCreateTeamModal.footer.createTeam": "創建團隊空間",
"sidebarCreateTeamModal.logo.label": "添加徽標",
"sidebarCreateTeamModal.membersDescription.label": "邀請人員進行協作",
"sidebarCreateTeamModal.membersTitle.label": "添加人員",
"sidebarCreateTeamModal.teamDescription.label": "用於協作和組織頁面的空間",
"sidebarCreateTeamModal.teamScreen.addAllMembersWithWorkspaceName":
  "{numMembers, plural, other {添加 <semibold>{workspaceName}</semibold> 的所有 {numMembers} 個成員}}",
"sidebarCreateTeamModal.teamScreen.closedTeam.caption": "封閉式",
"sidebarCreateTeamModal.teamScreen.closedTeam.description":
  "只有團隊成員才能訪問團隊中的頁面。",
"sidebarCreateTeamModal.teamScreen.closedTeam.title": "封閉式團隊",
"sidebarCreateTeamModal.teamScreen.descriptionPlaceholder": "團隊詳細信息",
"sidebarCreateTeamModal.teamScreen.namePlaceholder": "Acme 研究所",
"sidebarCreateTeamModal.teamScreen.openTeam.caption": "開放式",
"sidebarCreateTeamModal.teamScreen.openTeam.description":
  "工作區中的每個人都可以訪問團隊中的頁面。",
"sidebarCreateTeamModal.teamScreen.openTeam.title": "開放式團隊",
"sidebarCreateTeamModal.teamScreen.permissionsLabel": "權限",
"sidebarCreateTeamModal.teamScreen.privateTeam.caption": "私人",
"sidebarCreateTeamModal.teamScreen.privateTeam.description":
  "只有團隊成員才能訪問團隊中的頁面。",
"sidebarCreateTeamModal.teamScreen.privateTeam.title": "私人團隊",
"sidebarCreateTeamModal.teamScreen.teamDescriptionLabel": "描述",
"sidebarCreateTeamModal.teamScreen.teamNameLabel": "團隊空間名稱",
"sidebarCreateTeamModal.teamTitle.label": "創建新團隊空間",
"sidebarCredits.earnedCredit.message":
  "你已賺取 {creditAmountInDollars} 的積分。",
"sidebarCredits.freeMonthMessage":
  "{numberOfMonths, plural, other {等同於 <b>{numberOfMonths} 個月</b>免費。}}",
"sidebarExpandButton.tooltip": "鎖定展開側邊欄",
"sidebarItem.addAPageInside.popup.addTo": "添加到",
"sidebarItem.addAPageInside.tooltip": "快速添加子頁面",
"sidebarItem.changeIconButton.tooltip": "更改圖標",
"sidebarItem.favoritedPageMenuButton.tooltip": "移除、重命名等…",
"sidebarItem.pageMenuButton.tooltip": "刪除、創建副本等…",
"sidebarMobile.addAPageToOnlyPrivateSection.title": "添加頁面",
"sidebarMobile.addAPrivatePage.title": "添加頁面",
"sidebarMobile.addPageToWorkspace.title": "添加頁面",
"sidebarMultiSwitcher.desktopAppGetMobileApp.prompt": "獲取移動應用程序",
"sidebarMultiSwitcher.macAppButton.text": "獲取 Mac 應用",
"sidebarMultiSwitcher.windowsAppButton.text": "獲取 Windows 應用",
"sidebarOutliner.teamsSection.teamsLabel": "團隊空間",
"sidebarOutliner.teamsSection.tooltip": "你加入的團隊空間。",
"sidebarResizer.clickToToggleSidebar.message":
  "點擊<invertedcolor>來{expanded, select, true {關閉} other {打開鎖定}} </invertedcolor>",
"sidebarResizer.tooltip.dragMessage":
  "拖動<invertedcolor>調整大小</invertedcolor>",
"sidebarSettingsButton.mobile.settingsAndMembers": "設置",
"sidebarSettingsButton.settingsAndMembers": "設置與成員",
"sidebarStudentPlanPrompt.eligible.getFreePrompt": "獲取免費個人專業版",
"sidebarStudentPlanPrompt.eligible.message":
  "你有資格獲取免費個人專業版（教育）。",
"sidebarSwitcher.createOrJoinWorkspaceButton.prompt": "創建或加入工作區",
"sidebarSwitcher.educationPlan.label": "個人專業版（教育）",
"sidebarSwitcher.enterprisePlan.label": "企業版",
"sidebarSwitcher.legacyPlan.label": "舊定價方案",
"sidebarSwitcher.personalPlan.label": "個人版",
"sidebarSwitcher.proPlan.label": "個人專業版",
"sidebarSwitcher.teamPlan.label": "團隊版",
"sidebarSwitcher.teamTrialPlan.label": "團隊試用版",
"sidebarSwitcher.workspaceSubtitleWithMembers.label":
  "{planType}・{numberOfWorkspaceMembers} 位成員",
"sidebarSwitcher.workspaceSubtitleWithoutMembers.label": "{planType}",
"sidebarSwitcherMultiAccount.addAccount.description":
  "登錄現有帳戶，或使用新郵箱地址註冊。你當前的帳戶將保持登錄狀態。",
"sidebarSwitcherMultiAccount.addAccount.title": "添加帳戶",
"sidebarSwitcherMultiAccount.addAccountButton.label": "添加另一個帳戶",
"sidebarSwitcherMultiAccount.addAccountModal.cancelButton.label": "取消",
"sidebarSwitcherMultiAccount.createWork.description":
  "我們會檢查你是否已有隊友在 Notion 上。如果沒有，我們將為你的團隊創建新的工作區。",
"sidebarSwitcherMultiAccount.createWork.title": "創建工作帳戶",
"sidebarSwitcherMultiAccount.errorMessage":
  "SidebarSwitcherMultiAccount 中出現意外的 createType",
"sidebarSwitcherMultiAccount.menuItem.createWorkAccountButton.label":
  "創建工作帳戶",
"sidebarSwitcherMultiAccount.menuItem.logoutAllButton.label": "登出全部",
"sidebarSwitcherMultiAccount.mobileMenu.title": "帳戶與工作區",
"sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label":
  "加入或創建工作區",
"sidebarSwitcherMultiAccount.singleAccountMenu.logOut.label": "登出",
"sidebarTeamBrowser.newTeam.button": "新建團隊空間",
"sidebarTeamBrowser.title": "所有團隊和頁面",
"sidebarTeamBrowserHeader.searchFilter.placeholder": "搜索團隊空間...",
"sidebarTeamBrowserHeader.searchFilter.placeholderWithoutSpaceName":
  "搜索團隊空間...",
"sidebarTeamBrowserHeader.title": "所有團隊空間",
"sidebarTeamModal.aboutScreen.descriptionPlaceholder": "添加描述…",
"sidebarTeamModal.teamName.nameTooLongError":
  "團隊名稱長度必須小於 {maxTeamNameLength} 個字符。",
"sidebarTeamModalSettingsScreen.basedOnWorkspaceSettings":
  "基於<underline>工作區設置</underline>",
"sidebarTeamModalSettingsScreen.dangerZone.archiveTeamCaption":
  "歸檔此團隊空間會將其從所有團隊空間成員的側邊欄中移除。",
"sidebarTeamModalSettingsScreen.dangerZone.cannotArchive":
  "無法歸檔此團隊空間，因為它是此工作區中唯一的默認團隊空間。",
"sidebarTeamModalSettingsScreen.dangerZone.restoreTeamButton":
  "恢復團隊空間",
"sidebarTeamModalSettingsScreen.dangerZone.restoreTeamCaption":
  "恢復此團隊將在側邊欄中為之前添加的所有團隊成員添加團隊。",
"sidebarTeamModalSettingsScreen.dangerZone.title": "危險區",
"sidebarTeamModalSettingsScreen.setting.exportCaption":
  "禁止任何人導出為 Markdown、CSV 或 PDF。",
"sidebarTeamModalSettingsScreen.setting.guestCaption":
  "禁止任何人邀請工作區之外的人訪問頁面。",
"sidebarTeamModalSettingsScreen.setting.guestTitle": "禁用訪客",
"sidebarTeamModalSettingsScreen.setting.shareCaption":
  "禁用該團隊中所有頁面的“分享”菜單中的“分享到網絡”選項。",
"sidebarTeamModalSettingsScreen.setting.topLockCaption":
  "防止成員在側邊欄中添加、移除或重新排序團隊的固定頁面列表。",
"sidebarTeamModalSettingsScreen.setting.topLockTitle":
"防止成員編輯側邊欄固定頁面",
"sidebarTeamModalSettingsScreenPermissions.header.title": "權限",
"sidebarTeamModalTab.option.general": "一般",
"sidebarTeamModalTab.option.members": "成員",
"sidebarTeamModalTab.option.permissions": "權限",
"sidebarTeamModalTab.option.security": "安全性",
"sidebarTeamModalTab.unownedBadge": "無主",
"sidebarTrash.allPages.tabHeader": "所有頁面",
"sidebarTrash.deletePagePermanentlyButton.tooltip": "永久刪除",
"sidebarTrash.filterBy.noMatchesPrompt": "無匹配項。",
"sidebarTrash.filterBy.placeholder": "按頁面標題篩選…",
"sidebarTrash.goOnline.prompt": "請連接網絡後查看垃圾箱。",
"sidebarTrash.inCurrentPage.tabHeader": "在當前頁面",
"sidebarTrash.learnMore.prompt": "了解刪除和恢復頁面",
"sidebarTrash.menu.header": "垃圾箱",
"sidebarTrash.mobileFilterBy.noMatchesPrompt": "無匹配項。",
"sidebarTrash.restorePageButton.tooltip": "恢復",
"sidebarTrashButton.text": "垃圾箱",
"sidebarUnexpandButton.closeSidebar.tooltip": "關閉側邊欄",
"signupPage.pageTitle": "註冊",
"signupPage.title": "註冊",
"signupPage.title.tryNotionMobileCTAV3": "註冊以創建 Notion 頁面",
"signupPage.titleForSpace": "歡迎訪問 Notion 上的 {workspaceName}",
"simpleTable.actionBar.fitToPage": "使表格符合頁面寬度",
"simpleTable.actionBar.options": "選項",
"simpleTable.resizer.dimensions": "{num_columns} × {num_rows}",
"simpleTable.resizer.tooltipColumn": "<b>點擊</b>以添加新列",
"simpleTable.resizer.tooltipCorner": "<b>點擊</b>以添加新行和列",
"simpleTable.resizer.tooltipRow": "<b>點擊</b>以添加新行",
"simpleTable.resizer.tooltipSubtitleColumn":
"<b>拖動</b>以快速添加或刪除列",
"simpleTable.resizer.tooltipSubtitleCorner":
"<b>拖動</b>以快速添加或刪除行和列",
"simpleTable.resizer.tooltipSubtitleRow": "<b>拖動</b>以快速添加或刪除行",
"simpleTableActions.collectionColumnTitle": "列 {columnIndex}",
"simpleTableActions.collectionTitle": "標題",
"sketchBlock.embeds.button.label": "嵌入 Sketch",
"sketchBlock.embeds.caption": "適用於啟用了公共鏈接訪問的 Sketch 鏈接",
"sketchBlock.placeholder": "嵌入 Sketch",
"slackActions.dialogError.loginWithSlack.errorMessage": "出了些問題。",
"slackActions.loginPopupModal.title": "Slack 登錄",
"slackAuthorizationErrors.blockNotFound.errorMessage": "未找到塊。",
"slackAuthorizationErrors.missingEditPermission.errorMessage":
"用戶無法編輯塊。",
"slackAuthorizationErrors.webhookNotFound.errorMessage":
"找不到 Slack 的 webhook。",
"slackIntegrationButton.removeIntegrationConfirmationDialog.prompt":
"確定要刪除 Slack 集成服務嗎？",
"slackIntegrationButton.removeIntegrationConfirmationDialog.removeButton.label":
"移除",
"slackNotification.pageTitle.untitledPage.placeholder": "無標題",
"slackNotification.welcomeMessage":
"歡迎來到 Notion！此頻道已與 Notion 的頁面綁定成功 {pageLink}。你將獲取有關此頁面或頁面內的評論、提及和編輯的更新動態。",
"slackNotifications.blockCreated.notificationContents":
"{userName} 在 {workspaceName} 中創建了 {blockName}",
"slackNotifications.blockDeleted.notificationContents":
"{userName} 在 {workspaceName} 刪除了 {blockName}",
"slackNotifications.blockEdited.notificationContents":
"{userName} 編輯了 {blockName}",
"slackNotifications.botInvitedYouToSpace.notificationContents":
"你已被邀請加入{workspaceName}",
"slackNotifications.collectionPropertyEdited.contents":
"{userName}編輯了{collectionName}中的{propertyName}屬性",
"slackNotifications.collectionRowCreated.notificationContents":
"{userName} 在 {collectionName} 創建了 {rowName}",
"slackNotifications.collectionRowDeleted.notificationContents":
"{userName} 在 {collectionName} 刪除了 {rowName}",
"slackNotifications.collectionViewEdited.contents":
"{userName}編輯了{collectionName}中的{collectionViewName}視圖",
"slackNotifications.defaultPropertyName.label": "屬性",
"slackNotifications.emptyPropertyValue.label": "空",
"slackNotifications.equationAuthorName.notificationTitle": "公式",
"slackNotifications.permissionChanged.notificationBody":
"{permissionTarget}：{permissionsBefore} → {permissionsAfter}",
"slackNotifications.permissionsCreatedOrDeletedText.notificationContents":
"{permissionTarget}：{permissions}",
"slackNotifications.permissionsEditedForBlock.notificationContents":
"{userName} 編輯了 {blockName} 的權限",
"slackNotifications.propertyValueChanged.notificationContents":
"{propertyName}：{propertyValueBefore} → {propertyValueAfter}",
"slackNotifications.propertyValueWithName.notificationContents":
"{propertyName}：{propertyValue}",
"slackNotifications.publicPermissions.label": "公開",
"slackNotifications.reminderInPage.contents": "{pageName} 中的提醒",
"slackNotifications.showMoreEditsLinkText.label":
"{numberOfMoreEdits, plural, other {顯示其餘 {numberOfMoreEdits} 項編輯⋯}}",
"slackNotifications.unknownAuthorForComment.label": "未知作者",
"slackNotifications.unknownCollectionPropertyEdited.label": "未知",
"slackNotifications.untitledCollectionName.label": "無標題",
"slackNotifications.userAddedYouToSpace.notificationContents":
"{userName}將你添加到{workspaceName}","slackNotifications.userCommentedInPage.notificationContents":
"{userName} 在 {pageName} 發表了評論",
"slackNotifications.userDeletedPage.contents":
"{userName} 已刪除 {pageName}",
"slackNotifications.userEditedAccountSettings.contents":
"{userName}編輯了其帳戶設定",
"slackNotifications.userEditedCollection.notificationContents":
"{userName} 編輯了 {collectionName}",
"slackNotifications.userInvitedToTeam.contents":
"{userName} 邀請你加入 {teamName} 團隊",
"slackNotifications.userInvitedYouToSpace.notificationContents":
"{userName} 邀請你加入 {workspaceName}",
"slackNotifications.userLockedPage.contents":
"{userName} 鎖定了 {pageName}",
"slackNotifications.userMentionedInBlock.notificationContents":
"{userName} 在 {pageName} 提到了你",
"slackNotifications.userPermanentlyDeletedPage.contents":
"{userName} 已永久刪除 {pageName}",
"slackNotifications.userRequestedAccessToBlock.contents":
"{userName}請求訪問{pageName}",
"slackNotifications.userRestoredPage.contents":
"{userName} 已恢復 {pageName}",
"slackNotifications.userUnlockedPage.contents":
"{userName} 解鎖了{pageName}",
"snackbar.undo.title": "撤消",
"spaceActions.createGettingStartedPage.copyNotCreated.error":
"無法創建客戶端副本。",
"spaceActions.deletingWorkspace.loadingMessage": "正在刪除工作區…",
"spaceActions.dialogError.couldNotMoveContentError.message":
"抱歉，我們無法移動此內容。請再試一次。",
"spaceActions.dialogError.createOrUpdatePermissionGroup.invalidWorkspaceStorage.message":
"沒有有關此工作區的本地數據。",
"spaceActions.dialogError.createTemplatesInSpace.invalidStorage.message":
"無效的工作區數據。",
"spaceActions.dialogError.createTemplatesInWorkspace.invalidStorage.message":
"無效的工作區視圖數據。",
"spaceActions.dialogError.createTemplatesInWorkspace.invalidUserSettings.message":
"無效的用戶設置數據。",
"spaceActions.dialogError.createWorkspaceError.goOnline.message":
"請連接網絡後創建你的工作區。",
"spaceActions.dialogError.createWorkspaceError.message":
"抱歉，我們無法創建你的工作區。請再試一次。",
"spaceActions.dialogError.createWorkspaceError.notLoggedIn.message":
"必須登錄。",
"spaceActions.dialogError.forkPageError.message": "無法創建分支頁面。",
"spaceActions.dialogError.joinWorkspace.invalidWorkspaceStorage.message":
"沒有創建工作區視圖數據。",
"spaceActions.dialogError.moveContentError.cannotMovePages.message":
"無法同時移動這些頁面。",
"spaceActions.dialogError.moveContentError.goOnline.message":
"請連接網絡後向其他工作區移動內容。",
"spaceActions.dialogError.movetoWorkspace.notLoggedIn.message":
"必須登錄。",
"spaceActions.dialogError.navigateToWorkspace.invalidStorage.message":
"無效的工作區數據。",
"spaceBasicSettings.PublicHomePageSection.caption":
"使用{linkText}訪問我們的公共主頁。",
"spaceBasicSettings.PublicHomePageSection.caption.tooltip":
"點擊可複制鏈接",
"spaceBasicSettings.PublicHomePageSection.dropdownLabel": "清除",
"spaceBasicSettings.PublicHomePageSection.dropdownLabel.noResults":
"無結果",
"spaceBasicSettings.PublicHomePageSection.input.placeholder":
"選擇分享到網絡的頁面",
"spaceBasicSettings.PublicHomePageSection.title": "公共主頁",
"spaceBasicSettings.allowedEmailDomainsSection.emailDomainInput.caption":
"任何在這些域名中擁有郵箱地址的人都可以自動加入你的工作區。",
"spaceBasicSettings.allowedEmailDomainsSection.emailDomainInput.disabledDueToSaml":
"對該設置的編輯被禁用，因為在此工作區中配置了 SAML。請更新 SAML 配置。",
"spaceBasicSettings.allowedEmailDomainsSection.emailDomainInput.placeholder":
"輸入電子郵件域名…",
"spaceBasicSettings.allowedEmailDomainsSection.emailDomainsDropdown.placeholder":
"輸入電子郵件域名…",
"spaceBasicSettings.allowedEmailDomainsSection.emailDomainsDropdown.placeholderNoResults":
"輸入此工作區成員的電子郵件域名…",
"spaceBasicSettings.allowedEmailDomainsSection.genericErrorMessage":
"出了些問題…",
"spaceBasicSettings.allowedEmailDomainsSection.title": "允許的電子郵件域名",
"spaceBasicSettings.cancelButton.label": "取消",
"spaceBasicSettings.changeDomain.cta.text": "設置自己的網域",
"spaceBasicSettings.changeWorkspaceDomain.areYouSure":
"確定要更改你的域名嗎？",
"spaceBasicSettings.changeWorkspaceDomain.cancelButton.label": "取消",
"spaceBasicSettings.changeWorkspaceDomain.changeButton.label": "更改",
"spaceBasicSettings.changeWorkspaceDomain.prompt":
"此工作區具有公共頁面。如果繼續更改域名，則以 {current_domain}.notion.site 開頭的任何現有鏈接將不再有效。",
"spaceBasicSettings.dangerousSettingsSection.deleteWorkspaceButton.label":
"刪除整個工作區",
"spaceBasicSettings.dangerousSettingsSection.deleteWorkspaceHelpButton.caption":
"了解刪除工作區。",
"spaceBasicSettings.dangerousSettingsSection.leaveWorkspaceButton.label":
"離開工作區",
"spaceBasicSettings.dangerousSettingsSection.title": "危險區域",
"spaceBasicSettings.deleteWorkspace.untitledWorkspace.placeholder":
"無標題的工作區",
"spaceBasicSettings.deleteWorkspaceConfirmationDialog.deleteWorkspaceButton.label":
"永久刪除工作區",
"spaceBasicSettings.deleteWorkspaceConfirmationDialog.prompt":
"此操作無法撤消。這將永久刪除工作區，包括所有頁面和文件。請輸入工作區的名稱進行確認。 ",
"spaceBasicSettings.domainSection.title": "域名",
"spaceBasicSettings.domainSection.workspaceDomainInput.joinWorkspace.caption":
  "如果有允許的電子郵件域，任何人都可以通過{linkText}鏈接訂閱此工作空間。",
"spaceBasicSettings.domainSection.workspaceDomainInput.placeholder":
  "你的域名",
"spaceBasicSettings.domainSection.workspaceDomainInput.validationMessage.available":
  "可用",
"spaceBasicSettings.domainSection.workspaceDomainInput.validationMessage.notAllowed":
  "不允許",
"spaceBasicSettings.domainSection.workspaceDomainInput.validationMessage.used":
  "已使用",
"spaceBasicSettings.domainSection.workspaceDomainInput.viewPublicPage.caption":
  "Web上共享的頁面的地址以{linkText}開頭。",
"spaceBasicSettings.exportContentSection.exportButton.label":
  "導出所有工作區內容",
"spaceBasicSettings.exportContentSection.helpButton.caption":
  "了解導出工作區。",
"spaceBasicSettings.exportContentSection.title": "導出內容",
"spaceBasicSettings.exportMembersSection.exportAsCSVButton.label":
  "將成員導出為 CSV",
"spaceBasicSettings.exportMembersSection.helpButton.caption":
  "了解導出成員。",
"spaceBasicSettings.exportMembersSection.title": "導出成員",
"spaceBasicSettings.groupsTab.title": "群組",
"spaceBasicSettings.guestLimitedAccessMessage":
  "你是當前工作區的訪客。請要求管理員將你添加為成員，以查看其他頁面和工作區設置。",
"spaceBasicSettings.leaveWorkspaceConfirmationDialog.leaveButton.label":
  "離開",
"spaceBasicSettings.leaveWorkspaceConfirmationDialog.prompt":
  "確定要離開此工作區？",
"spaceBasicSettings.membersTab.manageMembersWithLinkCaption":
  "在這裡管理成員。",
"spaceBasicSettings.membersTab.manageMembersWithoutLinkCaption":
  "在這裡管理成員，或<setupdomainlink>設置域名</setupdomainlink>以便具有此域名內郵箱地址的每個人都可以自動加入當前工作區。",
"spaceBasicSettings.membersTab.payPerMemberCaption":
  "注意：你將為添加的每個成員付費。請訪問<billingguidelink>我們的指南</billingguidelink>了解有關我們如何計費的更多信息。",
"spaceBasicSettings.nameInput.placeholder": "例如公司名稱",
"spaceBasicSettings.offlineMessage": "請連接網絡後設置。",
"spaceBasicSettings.reprovisioningTab.title": "最近離開的用戶",
"spaceBasicSettings.spacePermissionsSettings.groupsTab.defaultNewGroupName":
  "無標題",
"spaceBasicSettings.title": "工作區設置",
"spaceBasicSettings.updateButton.label": "更新",
"spaceBasicSettings.workspaceDomain.tooltip": "點擊複製鏈接",
"spaceBasicSettings.workspaceIconSection.caption":
  "上傳圖片或選擇表情符號。它將顯示在側邊欄和通知中。",
"spaceBasicSettings.workspaceIconSection.title": "圖標",
"spaceBasicSettings.workspaceNameSection.nameInput.caption":
  "你可以使用你的名字或團隊的名字。保持簡單。",
"spaceBasicSettings.workspaceNameSection.title": "名稱",
"spaceConnectionsSettings.connectionsDevelopment.sitelink":
  "開發自己的連接",
"spaceConnectionsSettings.connectionsManagement.sitelink":
  "詳細了解如何管理連接",
"spaceConnectionsSettings.connectionsTable.connectionsColumn.title": "連接",
"spaceConnectionsSettings.connectionsTable.creationInfoColumn.title":
  "用戶和訪問權限",
"spaceConnectionsSettings.title": "連接",
"spaceHelpers.getSpaceName.untitledWorkspace.name": "無標題的工作區",
"spaceHelpers.reprovisionPrivatePages.title": "{name} 的私有頁面",
"spaceIntegrationSettings.actionMenu.contactDeveloperSupport.label":
  "聯繫客服",
"spaceIntegrationSettings.actionMenu.contactDeveloperSupportButton.label":
  "聯繫客服",
"spaceIntegrationSettings.actionMenu.copyInternalIntegrationTokenButton.label":
  "拷貝內部集成令牌",
"spaceIntegrationSettings.actionMenu.copyTokenModal.closeButton.label":
  "關閉",
"spaceIntegrationSettings.actionMenu.copyTokenModal.copyTokenButton.label":
  "拷貝令牌",
"spaceIntegrationSettings.actionMenu.disconnectAll.label":
  "斷開所有用戶的連接",
"spaceIntegrationSettings.actionMenu.disconnectAll.modal.caption":
  "撤銷此工作區所有用戶對 {integrationName} 的訪問權限。",
"spaceIntegrationSettings.actionMenu.disconnectAll.modal.label":
  "斷開工作區中所有用戶的 {integrationName} 連接",
"spaceIntegrationSettings.actionMenu.disconnectIntegration..modal.button.disconnect":
  "斷開連接",
"spaceIntegrationSettings.actionMenu.disconnectIntegrationButton.label":
  "斷開 {integrationName} 的連接",
"spaceIntegrationSettings.actionMenu.disconnectIntegrationButton.laber":
  "斷開 {integrationName} 的連接",
"spaceIntegrationSettings.actionMenu.disconnectUser.modal.caption":
  "撤銷 {userName} 對 {integrationName} 的訪問權限",
"spaceIntegrationSettings.actionMenu.disconnectUser.modal.label":
  "斷開 {integrationName} 的連接？",
"spaceIntegrationSettings.actionMenu.removeIntegration.modal.label.caption":
  "撤銷工作區中的 {integrationName} 訪問權限",
"spaceIntegrationSettings.actionMenu.removeIntegration.modal.label.title":
  "斷開工作區中的 {integrationName} 連接",
"spaceIntegrationSettings.actionMenu.removeIntegrationApproval.label":
  "從已批准列表中移除",
"spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.button.cancel":
  "取消",
"spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.button.disconnect":
  "斷開連接",
"spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.button.remove":
"移除",
"spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.caption":
"阻止成員安裝 {integrationName}。",
"spaceIntegrationSettings.actionMenu.removeIntegrationApproval.modal.title":
"將 {integrationName} 從已批准的集成中移除",
"spaceIntegrationSettings.actionMenu.removeIntegrationApprovalAndDisconnectAll.caption":
"撤消此工作區中所有用戶對 {integrationName} 的訪問權限，並阻止成員安裝 {integrationName}。",
"spaceIntegrationSettings.actionMenu.removeLegacyIntegration.caption":
"移除工作區成員將 {integrationName} 添加到 {workspaceName} 的功能。",
"spaceIntegrationSettings.actionMenu.removeLegacyIntegration.label":
"移除對 {integrationName} 的訪問權限",
"spaceIntegrationSettings.actionMenu.revokeUserAccess.label":
"斷開用戶的連接",
"spaceIntegrationSettings.actionMenu.visitDeveloperWebsite.label":
"訪問開發者網站",
"spaceIntegrationSettings.actionMenu.visitDeveloperWebsiteButton.label":
"訪問開發者網站",
"spaceIntegrationSettings.error": "出了些問題...",
"spaceIntegrationSettings.helpButton.caption": "了解集成管理",
"spaceIntegrationSettings.integrationDevelopment.sitelink":
"開發自己的集成",
"spaceIntegrationSettings.integrationManagement.sitelink":
"詳細了解如何管理集成",
"spaceIntegrationSettings.integrationManagementSiteLink.caption":
"為我創建集成",
"spaceIntegrationSettings.integrationTable.creationInfoColumn.contents":
"{installerName} 於 {installedTime}",
"spaceIntegrationSettings.integrationTable.emptyMessage": "未安裝集成",
"spaceIntegrationSettings.integrationTable.emptyTable.message":
"未安裝集成",
"spaceIntegrationSettings.integrationTable.installerInfo.notion.tooltip":
"由 Notion 開發",
"spaceIntegrationSettings.integrationTable.installerInfoColumn.anyone":
"{spaceName} 中的任何人",
"spaceIntegrationSettings.integrationTable.installerInfoColumn.legacy":
"Notion Connected 應用",
"spaceIntegrationSettings.integrationTable.installerInfoColumn.listOfUsers":
"{remainingCount, plural, other {{firstUser} 與 {remainingCount}+}}",
"spaceIntegrationSettings.integrationTable.installerInfoColumn.noUsers":
"無用戶",
"spaceIntegrationSettings.integrationTable.installerInfoColumn.notion":
"Notion {icon}",
"spaceIntegrationSettings.integrationTable.integrationColumn.title": "集成",
"spaceIntegrationSettings.integrationTable.label.unknownDeveloper":
"未知開發者",
"spaceIntegrationSettings.integrationTable.pillLabel.importer": "導入者",
"spaceIntegrationSettings.integrationTable.pillLabel.internal": "內部",
"spaceIntegrationSettings.integrationTable.pillLabel.preview": "鏈接預覽",
"spaceIntegrationSettings.integrationTable.pillLabel.sync": "同步",
"spaceIntegrationSettings.integrationTable.row.internalIntegrationLabel":
"內部",
"spaceIntegrationSettings.integrationtable.creationInfoColumn.title":
"添加的用戶",
"spaceIntegrationSettings.title": "{workspaceName}的完整集成列表",
"spaceInviteLinkEmail.body.cta":
"你可以將此電子郵件轉發給你的隊友，邀請他們進入你的工作區。",
"spaceInviteLinkEmail.body.label":
"{userName}為{spaceName}創建了一個新的 Notion 工作區。點擊鏈接加入！",
"spaceInviteLinkEmail.subject.label": "在{spaceName}上加入你的團隊",
"spaceInviteLinkEmail.text.label":
"你的團隊正在使用 Notion 進行協作、計劃和完成工作。",
"spaceInviteLinkEmail.titleOfEmail": "在{spaceName}上加入你的團隊",
"spacePermissionSettings.memberRoleSelect.permissionitem.roleUpgradeDisabled":
"無法升級到比成員更高的角色",
"spacePermissionSettings.memberUpsell.alternativeTrialLabel": "免費試用",
"spacePermissionSettings.memberUpsell.alternativeUpgradeLabel":
"升級到團隊版",
"spacePermissionSettings.memberUpsell.caption":
"免費試用 Notion 團隊版 — 更適合多人協作的工作區、無限成員以及高級權限設置。",
"spacePermissionSettings.memberUpsell.title": "與無限成員分享",
"spacePermissionSettings.spaceMembers.inviteLink.caption":
"分享這個私密鏈接以邀請他人加入此工作區。只有可以邀請成員的用戶可見。",
"spacePermissionSettings.spaceMembers.inviteLink.resetLink":
"你可以為工作區所有成員<resetlink>重置鏈接</resetlink>以生成新的邀請鏈接。",
"spacePermissionSettingsTrialModal.cancel.label": "取消",
"spacePermissionSettingsTrialModal.tryItFree.label": "免費試用",
"spacePermissionsSettings.groupsTab.adminsOnly":
"只有管理員可以添加權限群組。",
"spacePermissionsSettings.groupsTab.caption":
"設置群組以便在分享菜單中方便地控制頁面權限。",
"spacePermissionsSettings.groupsTab.captionWithTeams":
"設置群組來批量管理團隊成員。只有工作區管理員可以向團隊添加群組。",
"spacePermissionsSettings.groupsTab.captionWithTeamsV2":
"設置群組以簡化共享菜單中的頁面權限，並批量管理團隊空間成員。",
"spacePermissionsSettings.groupsTab.createGroupButton.label": "創建群組",
"spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationButton.label":
"是的",
"spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationMessage":
"確定要刪除此群組嗎？此群組的所有私人頁面都將轉移給你。",
"spacePermissionsSettings.groupsTab.filterGroupNamesInput.placeholder":
"按群組名稱篩選...",
"spacePermissionsSettings.groupsTab.groupList.actionMenu.createTeamFromGroup":
"從群組創建團隊空間","spacePermissionsSettings.groupsTab.groupList.actionMenu.deleteItem":
"刪除",
"spacePermissionsSettings.groupsTab.groupList.actionMenu.renameItem":
"重命名",
"spacePermissionsSettings.groupsTab.groupList.addMemberButton.label":
"添加成員",
"spacePermissionsSettings.groupsTab.removeMemberFromGroupButton.label":
"移除",
"spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationButton.label":
"是的",
"spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationMessage":
"確定要移除此成員？",
"spacePermissionsSettings.groupsTab.showMoreUsersButton.label":
"{numberOfHiddenUsers, plural, other {顯示其他 {numberOfHiddenUsers} 位}}",
"spacePermissionsSettings.groupsTab.spaceGroupsTable.groups": "群組",
"spacePermissionsSettings.groupsTab.spaceGroupsTable.member": "成員",
"spacePermissionsSettings.groupsTab.spaceGroupsTable.noGroupsFound":
"未找到任何群組。",
"spacePermissionsSettings.groupsTab.spaceGroupsTable.teams": "團隊空間",
"spacePermissionsSettings.groupsTab.upgradeCaption":
"升級到團隊版以從“分享”菜單設置群組並控制權限。",
"spacePermissionsSettings.groupsTab.upgradeTitle": "升級以創建群組。",
"spacePermissionsSettings.groupsTab.userGroup.addUserButton.label": "添加",
"spacePermissionsSettings.groupsTab.userGroup.groupIcon.tooltip":
"添加圖標",
"spacePermissionsSettings.groupsTab.userGroup.groupNameInput.placeholder":
"無標題",
"spacePermissionsSettings.groupsTab.userGroup.memberCount":
"{numberOfGroupMembers, plural, other {{numberOfGroupMembers} 位成員}}",
"spacePermissionsSettings.groupsTab.userGroup.searchUserDropdown.noResultsMessage":
"無結果",
"spacePermissionsSettings.groupsTab.userGroup.teamsCount":
"{numberOfTeams, plural, other {{numberOfTeams} 個團隊空間}}",
"spacePermissionsSettings.groupsTab.userGroup.teamsCountNone": "無",
"spacePermissionsSettings.groupsTab.userGroup.userSearchInput.placeholder":
"搜索人員…",
"spacePermissionsSettings.groupsTab.workspaceOwnersOnly":
"只有工作區所有者才能添加權限組。",
"spacePermissionsSettings.guestsTab.title": "訪客 ({numberOfGuests})",
"spacePermissionsSettings.helpButton.caption": "了解如何將成員添加到工作區",
"spacePermissionsSettings.inviteLinkRefreshModal.accept": "重置",
"spacePermissionsSettings.inviteLinkRefreshModal.description":
"確定要為工作區所有成員重置邀請鏈接？舊鏈接將無法再使用。",
"spacePermissionsSettings.membersTab.filterGuestsInput.placeholder":
"按郵箱地址或姓名篩選…",
"spacePermissionsSettings.membersTab.filterMembersInput.placeholder":
"按郵箱地址或姓名篩選…",
"spacePermissionsSettings.membersTab.showMore.message":
"顯示其餘 {moreMembersCount} 位",
"spacePermissionsSettings.membersTab.showMoreGuestsButton.label":
"{numberOfHiddenGuests, plural, other {顯示其他 {numberOfHiddenGuests} 位}}",
"spacePermissionsSettings.membersTab.title": "成員 ({numberOfMembers})",
"spacePermissionsSettings.offlineMessage": "請連接網絡後管理成員。",
"spacePermissionsSettings.reprovision.toUser.title": "轉移私人頁面",
"spacePermissionsSettings.reprovisionPrivatePagesConfirmationDialog.confirmButton.label":
"轉移私人頁面",
"spacePermissionsSettings.reprovisionPrivatePagesConfirmationDialog.confirmationMessage":
"確定要轉移他們的私人頁面嗎？此動作無法撤消。",
"spacePermissionsSettings.reprovisioningTab.caption":
"查看最近成為工作區一部分且具有可恢復的私人頁面的用戶。",
"spacePermissionsSettings.reprovisioningTab.workspaceOwner.caption":
"查看過去 30 天內以前屬於該工作區的用戶。只有工作區所有者才能看到此信息。",
"spacePermissionsSettings.spaceMembers.inviteLink.copyButton": "複製鏈接",
"spacePermissionsSettings.spaceMembers.inviteLink.shareButton": "分享鏈接",
"spacePermissionsSettings.spaceMembers.inviteLink.title": "邀請鏈接",
"spacePermissionsSettings.spaceMembers.members.title": "成員",
"spacePermissionsSettings.updatePermissionsMessage": "更新中…",
"spacePermissionsSettings.user.admin": "管理員",
"spacePermissionsSettings.user.membershipAdmin": "成員資格管理員",
"spacePermissionsSettings.user.workspaceOwner": "工作區所有者",
"spacePermissionsSettings.userTable.accessLevelColumn.header": "訪問權限",
"spacePermissionsSettings.userTable.actionLevelColumn.header": "操作",
"spacePermissionsSettings.userTable.pageCountColumn.header": "私人頁面",
"spacePermissionsSettings.userTable.teamsColumn.header": "團隊",
"spacePermissionsSettings.userTable.userColumn.header": "用戶",
"spaceSettings.closeSettingsDialog.cancelationButton.label": "否",
"spaceSettings.closeSettingsDialog.confirmationButton.label": "是",
"spaceSettings.closeSettingsDialog.confirmationMessage":
"你的更改尚未保存。保存更改？",
"spaceSettings.closeSettingsDialog.updateSettingsButton.label": "保存",
"spaceSettings.sidebar.button.upgrade": "升級方案",
"spaceSettings.sidebar.personalSettingsSection.title": "我",
"spaceSettings.sidebar.upgradeLink": "升級以無限使用",
"spaceSettings.sidebar.workspaceSettingsSection.title": "工作區",
"spaceSettingsDebugZone.userUserSimilarity.title": "用戶相似度",
"spaceSettingsSidebar.accountTab.title": "我的帳戶",
"spaceSettingsSidebar.auditLogTab.title": "審計日誌",
"spaceSettingsSidebar.billingTab.title": "賬單",
"spaceSettingsSidebar.connectedAppsTab.title": "我綁定的應用",
"spaceSettingsSidebar.creditTab.title": "賺取積分",
"spaceSettingsSidebar.debugZoneTab.title": "調試區",
"spaceSettingsSidebar.experimentsTab.title": "實驗",
"spaceSettingsSidebar.identity&ProvisioningTab.title": "身份和配置",
"spaceSettingsSidebar.integrationsTab.title": "集成",
"spaceSettingsSidebar.languageAndRegionTab.title": "語言與地區",
"spaceSettingsSidebar.membersTab.title": "成員",
"spaceSettingsSidebar.notificationsAndSettings.title": "我的通知與設置",
"spaceSettingsSidebar.plansTab.title": "定價方案",
"spaceSettingsSidebar.securityAndSAMLTab.title": "安全與身份",
"spaceSettingsSidebar.securityTab.title": "安全",
"spaceSettingsSidebar.settingsTab.title": "設置",
"spaceSettingsSidebar.spaceConnectionsTab.title": "連接",
"spaceSettingsSidebar.subscriptionTab.title": "訂閱",
"spaceSettingsSidebar.teamsTab.title": "團隊空間",
"spaceSettingsSidebar.upgradeTab.title": "升級",
"spaceSettingsSidebar.userConnectionsTab.title": "我的連接",
"spaceSubscriptionBilling.addButton.label": "添加",
"spaceSubscriptionBilling.address.invalidError":
  "你的地址無效。請更新你的地址，以便我們能夠處理你的付款。",
"spaceSubscriptionBilling.apply.label": "使用",
"spaceSubscriptionBilling.applyCouponModal.successMessage":
  "已使用優惠券！",
"spaceSubscriptionBilling.applyCouponModal.title": "使用優惠券",
"spaceSubscriptionBilling.applyCreditButton.label": "使用積分",
"spaceSubscriptionBilling.cancelButton.label": "取消",
"spaceSubscriptionBilling.changeBillingAddressModal.cancelButton.label":
  "取消",
"spaceSubscriptionBilling.changeBillingAddressModal.updateButton.label":
  "更新",
"spaceSubscriptionBilling.changeBillingEmailModal.title":
  "更改賬單郵箱地址",
"spaceSubscriptionBilling.changeBillingInterval.helpButton.label":
  "了解此設置將如何影響你的帳單。",
"spaceSubscriptionBilling.changeBillingInterval.title": "更改賬單間隔",
"spaceSubscriptionBilling.changePaymentMethod.changeCardButton.label":
  "更換卡片",
"spaceSubscriptionBilling.changeVATIDModal.subtitle":
  "請包括你的國家/地區代碼",
"spaceSubscriptionBilling.changeVATIDModal.title":
  "更改增值稅/商品及服務稅編號",
"spaceSubscriptionBilling.changeYourAddressModal.title": "更改你的地址",
"spaceSubscriptionBilling.discount.percentOff": "{percentOff}% 的折扣",
"spaceSubscriptionBilling.invoicesSection.invoiceStatus.credited": "已退款",
"spaceSubscriptionBilling.invoicesSection.invoiceStatus.due": "已到期",
"spaceSubscriptionBilling.invoicesSection.invoiceStatus.failed": "失敗",
"spaceSubscriptionBilling.invoicesSection.invoiceStatus.paid": "已付費",
"spaceSubscriptionBilling.invoicesSection.loadMoreInvoicesButton.label":
  "加載更多",
"spaceSubscriptionBilling.invoicesSection.noInvoicesMessage":
  "此工作區尚未付款。",
"spaceSubscriptionBilling.invoicesSection.title": "發票",
"spaceSubscriptionBilling.invoicesSection.viewInvoiceButton": "查看發票",
"spaceSubscriptionBilling.offline.message": "請連接網絡後管理賬單。",
"spaceSubscriptionBilling.setBillingInterval.monthlyOption": "月付",
"spaceSubscriptionBilling.setBillingInterval.pricePerMonth":
  "每月 {monthlyPrice}",
"spaceSubscriptionBilling.setBillingInterval.pricePerMonth.perMember":
  "每人每月 {monthlyPrice}",
"spaceSubscriptionBilling.setBillingInterval.yearlyOption":
  "年付・可節省 {yearlySavingsPercent}",
"spaceSubscriptionBilling.setPaymentMethod.payWithCardOption": "用卡片付款",
"spaceSubscriptionBilling.setPaymentMethod.payWithCardOption.description":
  "信用卡或借記卡",
"spaceSubscriptionBilling.subscriptionSettingsSection.VATID.title":
  "增值稅/商品及服務稅編號",
"spaceSubscriptionBilling.subscriptionSettingsSection.applyCoupon.title":
  "使用優惠券",
"spaceSubscriptionBilling.subscriptionSettingsSection.billingEmail.title":
  "賬單郵箱地址",
"spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.title":
  "賬單間隔",
"spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.value.monthly":
  "每月",
"spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.value.yearly":
  "每年",
"spaceSubscriptionBilling.subscriptionSettingsSection.businessPlanTitle":
  "商業版",
"spaceSubscriptionBilling.subscriptionSettingsSection.changePlanButton.label":
  "更改方案",
"spaceSubscriptionBilling.subscriptionSettingsSection.discount.title":
  "折扣",
"spaceSubscriptionBilling.subscriptionSettingsSection.enterprisePlanTitle":
  "企業版",
"spaceSubscriptionBilling.subscriptionSettingsSection.legacyPlanTitle":
  "舊定價方案",
"spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.title":
  "付款方式",
"spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.achOrWireTransfer":
  "ACH 或電匯",
"spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.creditCard":
  "尾數為 {lastFourDigits} 的 {creditCardBrand} 卡","spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.none":
  "無",
"spaceSubscriptionBilling.subscriptionSettingsSection.personalEducationPlanTitle":
  "個人專業版（教育）",
"spaceSubscriptionBilling.subscriptionSettingsSection.personalPlanTitle":
  "個人專業版",
"spaceSubscriptionBilling.subscriptionSettingsSection.restartSubscriptionButton.label":
  "重新訂閱",
"spaceSubscriptionBilling.subscriptionSettingsSection.teamPlanTitle":
  "團隊版",
"spaceSubscriptionBilling.subscriptionSettingsSection.workspaceSubscriptionBalance.title":
  "工作區餘額",
"spaceSubscriptionBilling.subscriptionSettingsSection.yourAddress.title":
  "地址",
"spaceSubscriptionBilling.updateButton.label": "更新",
"spaceSubscriptionBilling.useCreditModal.amountOfCreditQuestion":
  "你想在下一張發票使用多少積分？",
"spaceSubscriptionBilling.useCreditModal.applyCreditButton.label":
  "使用積分",
"spaceSubscriptionBilling.useCreditModal.cancelButton.label": "取消",
"spaceSubscriptionBilling.useCreditModal.nextInvoiceAmount": "下張發票總額",
"spaceSubscriptionBilling.useCreditModal.title":
  "使用 Notion 積分・{creditInDollars} 可用",
"spaceSubscriptionBilling.useCreditModal.warning":
  "使用積分到你的帳戶後<bold>不能撤消</bold>。",
"spaceSubscriptionBilling.vatCountryCode.subtitle":
  "請包括你的國家/地區代碼",
"spaceSubscriptionBilling.vatId.missingCountry":
  "要更新你的增值稅/商品及服務稅編號，請更新你的賬單地址。",
"spaceSubscriptionBilling.vatId.vatNotRequired":
  "你的稅務管轄區不需要增值稅/商品及服務稅編號。",
"spaceSubscriptionBillingInfoForm.countryDropdown.title":
  "選擇一個國家或地區",
"spaceSubscriptionPaymentForm.billingInformation.address": "地址",
"spaceSubscriptionPaymentForm.billingInformation.businessName":
  "企業名稱（可選）",
"spaceSubscriptionPaymentForm.billingInformation.city": "城市",
"spaceSubscriptionPaymentForm.billingInformation.country": "國家或地區",
"spaceSubscriptionPaymentForm.billingInformation.fullName": "全名",
"spaceSubscriptionPaymentForm.billingInformation.header": "賬單信息",
"spaceSubscriptionPaymentForm.billingInformation.state": "州或省",
"spaceSubscriptionPaymentForm.billingInformation.zipCode": "郵政編碼",
"spaceSubscriptionPaymentForm.paymentInformation.header": "付款信息",
"spaceSubscriptionPaymentForm.vatCountryCode.header": "增值稅（可選）",
"spaceSubscriptionPaymentForm.vatCountryCode.placeholder":
  "增值稅/商品及服務稅編號",
"spaceSubscriptionPlans.faqSection.title": "常見問題",
"spaceSubscriptionPlans.offlineMessage": "請連接網絡後設置定價方案。",
"spaceSubscriptionPlans.priceDisclaimer":
  "顯示的為年付方案價格。若選擇月付，<b>個人專業版</b>為每月 {personalMonthlyPrice}，<b>團隊版</b>為每位成員每月 {teamMonthlyPrice}，而<b>企業版</b>為每位成員每月 {enterpriseMonthlyPrice}。",
"spaceSubscriptionPlans.studentsAndEducatorsSection.getEducationPlanButton.label":
  "獲取免費教育版",
"spaceSubscriptionPlans.studentsAndEducatorsSection.text":
  "<p>個人專業版對學生和教育工作者是免費的！只需使用你的學校的郵箱地址註冊即可立即使用這些功能。</p><p>如果你已經在使用個人專業版，請將與你帳戶關聯的電子郵件更改為學校的郵箱地址以免費獲取。</p>",
"spaceSubscriptionPlans.studentsAndEducatorsSection.title":
  "學生與教育工作者",
"spaceSubscriptionPlans.teamPlan.confirmButtonLabel":
  "{upgrading, select, true {升級到團隊版} other {降級到團隊版}}",
"spaceSubscriptionPlans.teamPlan.confirmMessage":
  "你將以每位成員每月{price}的價格訂閱 Notion 團隊版。{br}系統將在扣除帳戶餘額後，按比例向你收取費用。",
"spaceSubscriptionSettings.upgradeModal.billingIntervalSection.header":
  "賬單間隔",
"spaceSubscriptionSettings.upgradeModal.checkEmailDialog.message":
  "請檢查你的電子郵件以獲取發票。",
"spaceSubscriptionSettings.upgradeModal.contactSales": "聯繫銷售",
"spaceSubscriptionSettings.upgradeModal.paymentMethodSection.header":
  "付款方式",
"spaceSubscriptionSettings.upgradeModal.sales.questions":
  "有問題？請聯繫我們的銷售團隊了解更多信息。",
"spaceSubscriptionUpdatePaymentMethod.applePay.total.label":
  "Notion - 我們會定期向你收取費用",
"spaceSubscriptionUpdatePaymentMethod.creditCard.update.header":
  "更新信用卡",
"spaceSubscriptionUpdatePaymentMethod.creditCard.updateButton": "更新",
"spaceSubscriptionUpdatePaymentMethod.update.header": "更新付款方式",
"spaceSubscriptionUpgradeModal.applePay.total.label":
  "Notion - 我們會定期向你收取費用",
"spaceSubscriptionUpgradeModal.billingAddress.invalidError":
  "你的地址無效。請更新你的地址，以便我們能夠處理你的付款。",
"spaceSubscriptionUpgradeModal.billingAddress.missingCountryError":
  "無效的國家/地區。請從下拉菜單中選擇國家/地區。",
"spaceSubscriptionUpgradeModal.creditCard.genericError":
  "無法處理你的卡片。請再試一次。",
"spaceSubscriptionUpgradeModal.orderSummary.businessPlan":
  "商業版 ({numberOfMembers, plural, one {# 位成員} other {# 位成員}})",
"spaceSubscriptionUpgradeModal.orderSummary.enterprisePlan":
  "企業版 ({numberOfMembers, plural, one {# 位成員} other {# 位成員}})",
"spaceSubscriptionUpgradeModal.orderSummary.header": "訂單摘要",
"spaceSubscriptionUpgradeModal.orderSummary.personalPlan": "個人專業版",
"spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.billedMonthly":
  "{price} /用戶/月 · 按月計費",
"spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.billedYearly":
"{price} /用戶/月 · 年付",
"spaceSubscriptionUpgradeModal.orderSummary.teamPlan":
"團隊版 ({numberOfMembers, plural, one {# 位成員} other {# 位成員}})",
"spaceSubscriptionUpgradeModal.upgradeButton.enterprisePlan":
"升級到企業版",
"spaceSubscriptionUpgradeModal.upgradeButton.personalProPlan":
"升級到個人專業版",
"spaceSubscriptionUpgradeModal.upgradeButton.teamPlan": "升級到團隊版",
"spaceSubscriptionUpgradeOrderSummary.orderTotal": "總額",
"spaceSubscriptionUpgradePlanFeatures.blockLimit.description":
"前 1,000 個塊",
"spaceSubscriptionUpgradePlanFeatures.blockLimit.title": "免費",
"spaceSubscriptionUpgradePlanFeatures.blockLimit.tooltip":
"塊是你添加到頁面的內容，例如文本段落或待辦事項。{br}團隊試用版不提供付費團隊版中的某些功能。",
"startupCouponInlineLink.text": "您是初創公司嗎？",
"stripeHelpers.cardDeclined.error.message": "你的卡被拒絕。",
"stripeHelpers.cardDeclined.error.message.declinedFunds":
"您的卡被拒絕，因為賬戶餘額不足。",
"stripeHelpers.cardDeclined.error.message.expiredCard":
"您的卡被拒絕，因為該卡已過期。",
"stripeHelpers.cardDeclined.error.message.incorrectNumber":
"您的卡被拒絕，因為輸入的卡號錯誤。",
"stripeHelpers.cardDeclined.error.message.invalidAmount":
"您的卡被拒絕，因為付款金額超過了允許的金額。",
"stripeHelpers.cardDeclined.error.message.invalidCvc":
"您的卡被拒絕，因為您輸入的 CVC 碼無效",
"stripeHelpers.invalidCVC.error.message": "你的卡的安全碼無效。",
"stripeHelpers.invalidExpiryYear.error.message":
"你的卡的到期年份是過去的年份。",
"stripeHelpers.invalidNumber.error.message":
"你的卡號不是有效的信用卡號碼。",
"studentNotEligibleModal.contactUsSection.message":
"對此有疑問？<inlinelink>更多信息和常見問題解答</inlinelink>。",
"studentNotEligibleModal.header":
"<p>你當前使用的郵箱地址沒有資格享受免費的個人專業版。</p><p>K-12 學生、K-12 教育工作者以及使用 Gmail、Outlook 等個人郵箱地址的用戶沒有資格免費獲取<pricinglink>個人專業版</pricinglink>，但任何人都可以使用免費的<pricinglink>個人版</pricinglink>享受無限存儲空間。</p>",
"studentNotEligibleModal.numberedList.changeEmailItem.button.label":
"更改郵箱地址",
"studentNotEligibleModal.numberedList.changeEmailItem.message":
"你當前的郵箱地址是：",
"studentNotEligibleModal.numberedList.changeEmailItem.message2":
"成千上萬的大學、學院、中學後教育機構的域名已具備資格，而不僅是 .edu 結尾的郵箱地址。",
"studentNotEligibleModal.numberedList.firstItem": "1.",
"studentNotEligibleModal.numberedList.item2.promocode.errorMessage":
"促銷代碼 {code} 不存在",
"studentNotEligibleModal.numberedList.item2.promocodePlaceholder":
"輸入教育優惠碼…",
"studentNotEligibleModal.numberedList.promoCodeItem.message":
"有教育優惠碼？",
"studentNotEligibleModal.numberedList.promoCodeItem.submitButton": "提交",
"studentNotEligibleModal.numberedList.secondItem": "2.",
"subheaderBlock.placeholder": "標題 2",
"subscriptSettings.freePersonal.downgradeTitle": "降級到個人版？",
"subscriptionActions.overFreeBlockLimit.longMessage":
"你已超過免費版的塊限制",
"subscriptionActions.overFreeBlockLimit.shortMessage": "你已超過塊限制",
"subscriptionActions.upgradeForUnlimitedBlocks.longMessage":
"升級以無限使用",
"subscriptionActions.upgradeForUnlimitedBlocks.shortMessage": "升級",
"subscriptionErrors.cardRequiredError":
"由於你尚未支付上次的賬單，因此必須使用卡片支付。",
"subscriptionErrors.collectionMethodNotAllowed":
"你無法在應用中選擇此收款方式。請聯繫支持人員。",
"subscriptionErrors.couponAlreadyApplied": "這是已經使用的優惠券。",
"subscriptionErrors.creditExceedsBalanceError":
"無法使用超過 {maxCredits} 的積分餘額。",
"subscriptionErrors.creditNoFreeLunch": "負積分是不可能的。",
"subscriptionErrors.invalidCreditError": "此積分額度不可用。",
"subscriptionErrors.invalidPlan": "你選擇的方案不可用。",
"subscriptionErrors.invalidVatError": "不是有效的商業登記號(VAT號)。",
"subscriptionErrors.missingAddressError": "地址行1必須存在。",
"subscriptionErrors.missingNameError": "名稱必須存在。",
"subscriptionErrors.paymentMethodNotAllowed":
"你的帳戶不符合此付款方式的條件。",
"subscriptionErrors.personalPlanMoreThanOneMember":
"個人版使用時，你的工作區內只能有一位成員。",
"subscriptionHelpers.billingInterval.monthly.option.title":
"月付 – 每人每月 {memberPrice}",
"subscriptionHelpers.billingInterval.monthly.title": "月付",
"subscriptionHelpers.billingInterval.yearly.option.title":
"<pre>年付 – 每人每月 {memberPrice} <span>節省 {yearlySavingsPercent}</span></pre>",
"subscriptionHelpers.billingInterval.yearly.title":
"<pre>年付・<span>省 {yearlySavingsPercent}</span></pre>",
"subscriptionHelpers.lineItems.balance": "餘額",
"subscriptionHelpers.lineItems.credit": "積分",
"subscriptionHelpers.lineItems.promo": "優惠券",
"subscriptionHelpers.lineItems.promo.subtitle":
"有效期為 {expirationInMonths} 個月",
"subscriptionHelpers.lineItems.subTotal": "小計",
"subscriptionHelpers.lineItems.tax.subtitle": "如果適用",
"subscriptionHelpers.lineItems.tax.title": "稅",
"subscriptionHelpers.paymentMethod.appleOrGooglePay.title":
"Apple 或 Google Pay",
"subscriptionHelpers.paymentMethod.creditCard.title": "信用卡或借記卡",
"subscriptionHelpers.paymentMethod.invoice.caption": "通過電子郵件接收發票",
"subscriptionHelpers.paymentMethod.invoice.title": "ACH 或電匯",
"subscriptionHelpers.pricePerMonthPricing.label": "每月 {price}",
"subscriptionHelpers.pricePerUserPerMonthPricing.label": "每人每月 {price}",
"subscriptionSettings.button": "管理訂閱",
"subscriptionSettings.description":
  "你目前通過 Apple 的應用內購買進行訂閱。你可以在 Apple 的訂閱設置中管理你的訂閱。",
"subscriptionSettings.downgradeToBusinessDialog.confirmationButton":
  "降級到商業版",
"subscriptionSettings.freePersonal.downgradeConfirmationButton":
  "降級到個人版",
"subscriptionSettings.freePersonal.downgradeMessage":
  "個人版僅供1人免費使用。你將失去添加成員的能力，並且每個工作區的訪客將限制為 5 個。",
"subscriptionSettings.freeTeam.upgradeMessage":
  "你將獲得付費團隊版的大多數功能，塊存儲限制為 1,000 個。你可以隨時升級以解除限制。",
"subscriptionSettings.freeTeam.upgradeTitle": "免費試用團隊版",
"subscriptionSettings.invalidPromoCodeError.message": "此促銷代碼無效。",
"subscriptionSettings.mobileDescription":
  "通過 App Store 管理你的個人專業版訂閱。",
"subscriptionSettings.personalFreeMessage":
  "你現在免費訂閱了 Notion 的個人專業版。",
"subscriptionSettings.startTeamTrialDialog.confirmationbutton":
  "開始團隊版試用",
"subscriptionSettings.subscriptionNextChargeMessage.businessPlan":
  "{planInterval, select, month {此工作區的商業版方案已設定為<bold>每月 {planCharge}</bold>，並將於 {renewalDate} 續訂。} other {此工作區的商業版方案已設定為<bold>每年 {planCharge}</bold>，並將於 {renewalDate} 續訂。}}",
"subscriptionSettings.subscriptionNextChargeMessage.enterprisePlan":
  "{planInterval, select, month {此工作區的企業版方案已設定為<bold>每月 {planCharge}</bold>，並將於 {renewalDate}續訂。} other {此工作區的企業版方案設定為<bold>每年 {planCharge}</bold>，並將於 {renewalDate}續訂。}}",
"subscriptionSettings.subscriptionNextChargeMessage.legacyPlan":
  "{planInterval, select, month {此工作區的舊定價方案已設定為<bold>每月 {planCharge}</bold>，並將於 {renewalDate}續訂。} other {此工作區的舊定價方案設定為<bold>每年 {planCharge}</bold>，並將於 {renewalDate}續訂。}}",
"subscriptionSettings.subscriptionNextChargeMessage.personalEducationPlan":
  "{planInterval, select, month {此工作區的個人專業版（教育）方案已設定為<bold>每月 {planCharge}</bold>，並將於 {renewalDate}續訂。} other {此工作區的個人專業版（教育）方案已設定為<bold>每年 {planCharge}</bold>，並將於 {renewalDate}續訂。}}",
"subscriptionSettings.subscriptionNextChargeMessage.personalPlan":
  "{planInterval, select, month {此工作區的個人專業版方案已設定為<bold>每月 {planCharge}</bold>，並將於 {renewalDate}續訂。} other {此工作區的個人專業版方案已設定為<bold>每年 {planCharge}</bold>，並將於 {renewalDate}續訂。}}",
"subscriptionSettings.subscriptionNextChargeMessage.teamPlan":
  "{planInterval, select, month {此工作區的團隊版方案已設定為<bold>每月 {planCharge}</bold>，並將於 {renewalDate}續訂。} other {此工作區的團隊版方案已設定為<bold>每年 {planCharge}</bold>，並將於 {renewalDate}續訂。}}",
"subscriptionSettings.subscriptionStatus.cancellationMessage.businessPlan":
  "此工作區的<bold>商業版</bold>方案已於 {cancellationDate} 取消，並將於 {expirationDate} 到期。",
"subscriptionSettings.subscriptionStatus.cancellationMessage.enterprisePlan":
  "此工作區的<bold>企業版</bold>方案已於 {cancellationDate}取消，並將於 {expirationDate}到期。",
"subscriptionSettings.subscriptionStatus.cancellationMessage.legacyPla":
  "此工作區的<bold>舊定價方案</bold>已於 {cancellationDate}取消，並將於 {expirationDate}到期。",
"subscriptionSettings.subscriptionStatus.cancellationMessage.personalEducationPlan":
  "此工作區的<bold>個人專業教育版</bold>方案已於{cancellationDate}取消，並將於 {expirationDate}到期。",
"subscriptionSettings.subscriptionStatus.cancellationMessage.personalPlan":
  "此工作區的<bold>個人專業版</bold>方案已於 {cancellationDate}取消，並將於 {expirationDate}到期。",
"subscriptionSettings.subscriptionStatus.cancellationMessage.teamPlan":
  "此工作區的<bold>團隊版</bold>方案已於 {cancellationDate}取消，並將於 {expirationDate}到期。",
"subscriptionSettings.subscriptionStatus.legacySubscriptionMessage":
  "我們的訂閱系統目前正在遷移中。請稍後再查看以了解新功能！",
"subscriptionSettings.subscriptionStatus.nextPlan.personal":
  "當前方案到期後，此工作區將降級為個人版。",
"subscriptionSettings.subscriptionStatus.nextPlan.team":
  "當前方案過期後，此工作區將降級為免費試用的團隊版，塊存儲限制為 1,000 個。",
"subscriptionSettings.subscriptionStatus.personalFreeUpgradeMessage":
  "此工作區為<bold>個人版</bold>。升級以使用 Notion 與更多人進行協作。",
"subscriptionSettings.subscriptionStatus.proratedChargeMessage":
  "你將於 {upcomingChargeDate}按比例支付 {formattedInvoiceNextCharge}。",
"subscriptionSettings.subscriptionStatus.reachedFreeBlockLimit":
  "此工作區使用了 {freeBlockLimit} 個塊存儲限制中的 {usedBlocks} 個塊（佔總存儲的 {utilizationPercentage}）。",
"subscriptionSettings.subscriptionStatus.remainingChargeMessage":
  "根據你的帳戶餘額進行調整後，你將需要支付 {formattedInvoiceNextCharge} 費用。",
"subscriptionSettings.subscriptionStatus.teamTrialMessage":
  "此工作區是<bold>團隊版</bold>的免費試用版，有塊存儲限制。",
"subscriptionSettings.subscriptionStatus.upcomingInvoiceLink":
  "<upcominginvoicelink>查看下個發票</upcominginvoicelink>",
"subscriptionSettings.title": "訂閱",
"subscriptionSettings.updatingSubscriptionMessage": "正在更新訂閱…",
"subscriptionSettings.upgradeToBusinessDialog.confirmationButton":
  "升級到商業版",
"subscriptionSettings.upgradeToBusinessDialog.message":
  "你將以每位成員每月 {price} 的價格訂閱 Notion 商業版。{br}系統將在扣除帳戶餘額後，按比例向你收取費用。",
"subscriptionSettings.upgradeToEnterpriseDialog.confirmationbutton":
"升級到企業版",
"subscriptionSettings.upgradeToEnterpriseDialog.message":
"你將以每位成員每月{price}的價格訂閱 Notion 企業版。{br}系統將在扣除帳戶餘額後，按比例向你收取費用。",
"subscriptionSettings.verifyingEligibilityMessage": "正在驗證資格…",
"subscriptionUpgradeDetails.features":
"<span>{planName}的所有功能，</span>以及：",
"subscriptionUpgradeDetails.learnMore": "了解更多",
"subscriptionUpgradeDetails.oneLiner.enterprise":
"運轉公司所需的控制和支持。",
"subscriptionUpgradeDetails.oneLiner.personal": "給想要更多的高級玩家。",
"subscriptionUpgradeDetails.oneLiner.team":
"讓團隊在一個地方寫作、計劃與合作。",
"subscriptionUpgradeDetails.perMonthPricing.label": "每月",
"subscriptionUpgradeDetails.perUserPerMonthPricing.label": "每人{br}每月",
"subscriptionUpgradeDetails.planName.free": "個人版",
"subscriptionUpgradeDetails.planName.personal": "專業版",
"subscriptionUpgradeDetails.planName.team": "團隊版",
"subscriptionUpgradeDetails.planName.teamTrial": "團隊試用版",
"subscriptionUpgradeDetails.price": "{price}",
"subscriptionUpgradeDetails.title.enterprise": "升級到企業版",
"subscriptionUpgradeDetails.title.personal": "升級到個人專業版",
"subscriptionUpgradeDetails.title.team": "升級到團隊版",
"subscriptionUpgradeDetails.title.teamFree": "升級到團隊試用版",
"subscriptionUpgradeModal.oneLiner.enterprise":
"運營公司所需的控制和支持。",
"subscriptionUpgradeModal.oneLiner.personal":
"適用於想要執行更多操作的高級用戶。",
"subscriptionUpgradeModal.oneLiner.team": "在一個地方寫作、計劃與合作。",
"subscriptionUpgradeModal.title.enterprise": "升級到企業版",
"subscriptionUpgradeModal.title.personal": "升級到個人專業版",
"subscriptionUpgradeModal.title.team": "升級到團隊版",
"subscriptionUpgradeModal.title.teamFree": "升級到團隊試用版",
"subscriptionUpgradeModal.upgradeToBusinessDialog.businessPlan":
"升級到商業版",
"subsubheaderBlock.placeholder": "標題 3",
"synced.lastSyncedAt.label": "同步時間為 {lastSyncedAt}",
"synced.partial_sync.label": "部分同步",
"synced.syncing.label": "正在同步",
"syncedCollectionIndicators.calendar.label": "日曆",
"syncedCollectionIndicators.issues.label": "問題",
"syncedCollectionIndicators.originalUrl": "鏈接到原始 url",
"syncedCollectionIndicators.originalUrlWithIntegration":
"{integrationName} 中的 {collectionType}",
"syncedCollectionIndicators.project.label": "項目",
"syncedCollectionIndicators.pullRequests.label": "拉取請求",
"syncedCollectionIndicators.releases.label": "發布",
"tabBlock.emptyBlock.placeholderText": "空選項卡。點擊或拖動塊到這裡。",
"tabBlockActions.addTab.title": "新選項卡",
"tabMenuBlock.title.placeholder": "無標題",
"tableOfContentsBlock.mobileActionMenu.button.label": "更多動作…",
"tableOfContentsBlock.placeholder":
"添加標題塊以創建目錄。<linktohelpbutton>了解更多</linktohelpbutton>。",
"tableView.selectionOverlay.dragAndFill.tooltip": "上下拖動以輸入值。",
"teamAccessLevel.selectLabel.privateUpgradeToBusinessTooltip":
"升級到商業版以設置為私人",
"teamAccessLevel.selectLabel.privateUpgradeToEnterpriseTooltip":
"升級到企業版以設置為私人",
"teamActions.archiveTeam.confirmDialogAcceptLabel": "歸檔團隊空間",
"teamActions.archiveTeam.confirmDialogDescription":
"歸檔此團隊空間會將其從所有團隊空間成員的側邊欄中移除。請輸入團隊空間名稱進行確認。",
"teamActions.archiveTeam.confirmDialogTitle": "是否確定要歸檔此團隊空間？",
"teamActions.confirmMoveFromTeam.description":
"這將把 {numPagesMoved, plural, one {此頁面} other {這些頁面}} 上的權限轉移至 {moveToTeamName} 的成員。",
"teamActions.confirmMoveToTeam.acceptLabel": "確認",
"teamActions.confirmMoveToTeam.removeRestrictedDescription":
"{numPagesMoved, plural, one {此頁面} other {這些頁面}} 將不再具有受限訪問權限。",
"teamActions.confirmMoveToTeam.title":
"你確定要將 {numPagesMoved, plural, one {此頁面} other {這些頁面}} 移動至 {moveToTeamName}？",
"teamActions.confirmTeamAccessChangeDialog.acceptLabel": "確認",
"teamActions.confirmTeamAccessChangeDialog.closedTeam.titleWithName":
"確定要將 {teamName} 設為封閉式團隊嗎？",
"teamActions.confirmTeamAccessChangeDialog.openTeam.title":
"確定要將此團隊設為開放式團隊嗎？",
"teamActions.confirmTeamAccessChangeDialog.openTeam.titleWithName":
"確定要將 {teamName} 設為開放式團隊嗎？",
"teamActions.confirmTeamAccessChangeDialog.privateTeam.title":
"確定要將此團隊設為私人團隊嗎？",
"teamActions.confirmTeamAccessChangeDialog.privateTeam.titleWithName":
"確定要將 {teamName} 設為私人團隊嗎？",
"teamActions.confirmTeamAccessDialog.disableDefaultTeamLabel":
"這還將禁用默認團隊並停止將團隊成員資格與工作區同步。",
"teamActions.createTeamFromPage.emptyTitle":
"無法將沒有標題的頁面轉換為團隊空間。",
"teamActions.leaveTeam.confirmDialogAcceptLabel": "移除",
"teamActions.leaveTeam.confirmDialogAcceptLabel.removingYourself":
"離開團隊空間",
"teamActions.leaveTeam.confirmDialogCancelLabel.removingSomeoneElse":
"取消",
"teamActions.leaveTeam.confirmDialogDescription.removingSomeoneElse":
"此更改不會應用於團隊空間中的任何受限頁面。",
"teamActions.leaveTeam.confirmDialogDescription.removingYourself":
"你在側邊欄中將再也看不到此團隊空間。",
"teamActions.leaveTeam.confirmDialogMessage.removingSomeoneElse":
"是否確定要從 {teamName} 中移除 {memberName}？",
"teamActions.leaveTeam.confirmDialogMessage.removingYourself":
"是否確定要退出 {teamName}？此團隊空間將不再顯示在你的側邊欄中，並且你可能會失去權限。",
"teamActions.leaveTeam.onlyTeamMemberLeftDialogMessage":
"你不能離開此團隊空間，因為你是唯一的團隊空間所有者。請邀請其他團隊空間所有者加入，你才能離開此團隊空間。",
"teamActions.leaveTeam.partOfGroupDialog.removingSomeoneElse":
"你無法從 {teamName} 中移除 {memberName}，因為他們是通過工作區管理員管理的群組添加到此團隊的。",
"teamActions.leaveTeam.partOfGroupDialog.removingYourself":
"你不能離開 {teamName}，因為你是通過工作區管理員管理的群組添加到此團隊的。",
"teamActions.leaveTeam.userMembershipFromGroupDialogMessage":
"無法離開此團隊空間，因為它是{groupNames}的成員。",
"teamActions.teamScreen.closedTeam.description":
"工作區中的任何人都可以查看團隊空間並分享內容，但無法加入。",
"teamActions.teamScreen.openTeam.description":
"工作區中的每個人都可以訪問團隊及其內容。",
"teamActions.teamScreen.privateTeam.description":
"只有成員才能查看團隊及其內容。",
"teamBrowser.teamCard.Membership": "成員",
"teamBrowser.teamCard.MembershipPlural": "成員",
"teamBrowser.teamCard.button.joined": "已加入",
"teamBrowser.teamCard.leaveTeam.defaultTeamTooltip":
"你不能離開此團隊空間，因為它已與整個組織同步。",
"teamBrowser.teamCard.leaveTeam.groupTooltip":
"由於你是 {groupNames} 的成員，所以不能離開此團隊空間。",
"teamBrowser.teamCard.leaveTeam.groupTooltipNonAdmin":
"你無法離開此團隊空間，因為你是由工作區管理員管理的群組的成員。",
"teamBrowserOutliner.createTeamspaceButton": "新建團隊空間",
"teamBrowserOutliner.joinedTeamsLabel": "你的團隊空間",
"teamBrowserOutliner.joinedTeamsSection.tooltip": "你加入的團隊空間",
"teamBrowserOutliner.noFilterResults.description":
"重試或<linkbutton>清除搜索</linkbutton>",
"teamBrowserOutliner.noFilterResults.title": "無結果",
"teamBrowserOutliner.noUnjoinedTeams": "沒有可加入的團隊空間",
"teamBrowserOutliner.searchResultsLabel": "搜索結果",
"teamBrowserOutliner.unjoinedTeamsLabel": "更多團隊空間",
"teamBrowserOutliner.unjoinedTeamsSection.tooltip": "你可以加入的團隊空間",
"teamHelpers.generalTeam.name": "一般",
"teamJoinLeaveButton.joinTeam.closedTeamTooltip":
"成員必須邀請才能參與私人團隊空間。",
"teamJoinLeaveButton.leaveTeam.enabledTooltip": "點擊退出團隊空間。",
"teamJoinLeaveButton.leaveTeam.onlyOwnerTooltip":
"你不能離開此團隊空間，因為你是唯一的團隊空間所有者。請邀請其他所有者進入，你才能離開。",
"teamMemberOwnerSelect.removeMember.confirmation.message":
"確定要從團隊中移除 {memberName}？",
"teamMemberOwnerSelect.removeMember.confirmation.messageWithTeamName":
"確定要從 {teamName} 中移除 {memberName}？",
"teamMemberPermissionRoleSelect.member.permissionItem.defaultDescription":
"為成員提供比團隊空間默認設置更多的權限。",
"teamMemberPermissionRoleSelect.member.permissionItem.overrideDescription":
"此成員具有比團隊空間默認設置更多的權限。",
"teamMemberPermissionRoleSelect.member.permissionItem.restoreButton":
"恢復為團隊空間默認設置",
"teamMemberPermissionRoleSelect.member.permissionitem.description":
"你不能授予比團隊空間默認設置更低的訪問權限。請降低團隊空間成員的訪問權限以啟用此選項。",
"teamMemberPermissionRoleSelect.permissionItem.defaultTag": "默認",
"teamMemberPermissionRoleSelect.permissionOverride.buttonTooltip":
"為此團隊空間中的所有頁面設置自定義權限級別",
"teamMemberPermissionRoleSelect.permissionOverride.menuHeader":
"選擇自定義角色",
"teamMemberPermissionSettings.permissionSwitcher.accept": "更改訪問權限",
"teamMemberPermissionSettings.permissionSwitcher.confirmation.description":
"此更改不會應用於團隊空間中的任何受限頁面。",
"teamMemberPermissionSettings.permissionSwitcher.confirmation.message":
"是否確定要將 {name} 的角色更改為 {role}？",
"teamMemberPermissionSettings.removeSelfTeamOwner.confirmation.message":
"是否確定要移除自己的團隊空間所有者身份？你將無法再編輯團隊空間設置和權限。",
"teamMemberPermissionSettings.removeTeamOwner.confirmation.message":
"是否確定要移除團隊空間所有者 {name}？他們將無法再編輯團隊空間設置和權限。",
"teamMembersList.tooltip.overflowMessage":
"還有 {countRemainingUsers} 個用戶…",
"teamMenuHeader.teamMemberCount":
"{numberOfMembers, plural, other {{numberOfMembers} 位成員}}",
"teamOutliner.addPage": "添加頁面",
"teamOutliner.emptyMessage": "沒有固定頁面",
"teamOutliner.noOverflowEmptyMessage": "沒有頁面",
"teamPermissionRow.group.tooltip": "添加者",
"teamPermissionSettings.closeSpacePermissionItem.description":
"此設置已關閉，因此只有 {num} 位團隊成員具有訪問權限。",
"teamPermissionSettings.generalSection.spacePermission": "默認訪問權限",
"teamPermissionSettings.generalSection.teamPermission": "團隊成員",
"teamPermissionSettings.group": "組",
"teamPermissionSettings.member.showMore": "顯示其他 {numNotShown} 個",
"teamPermissionSettings.numberOfMembers":
"{groupSize, plural, one {{groupSize} 位成員} other {{groupSize} 位成員}}",
"teamPermissionSettings.openSpacePermissionItem.description":
"{num, plural, one {{num} 位工作區成員} other {{num} 位工作區成員}}",
"teamPermissionSettings.teamPermissionItem.description":
"{num, plural, one {{num} 位團隊成員} other {{num} 位團隊成員}}",
"teamPermissionSettings.unknownGroup": "未知群組",
"teamPermissionsActions.archivedTeam": "已歸檔 {teamName}",
"teamPermissionsActions.joinedTeam": "已加入 {teamName}",
"teamPermissionsActions.leftTeam": "已離開 {teamName}",
"teamPermissionsActions.leftTeamNoName": "已離開團隊",
"teamPermissionsActions.restoredTeam": "已恢復 {teamName}",
"teamPermissionsActions.restoredTeamNoName": "已恢復團隊",
"teamPermissionsInviteOverlay.inviteModal.addNMembers":
  "{numMembers, plural, other {添加 {numMembers} 個成員}}",
"teamPermissionsInviteOverlay.inviteModal.addNMembers.groupsAsOwnersTooltip":
  "無法將組添加為團隊空間所有者。請刪除所有組以繼續。",
"teamPermissionsInviteOverlay.inviteModal.addNOwners":
  "{numMembers, plural, other {添加 {numMembers} 名所有者}}",
"teamPermissionsInviteOverlay.inviteModal.done": "完成",
"teamPermissionsInviteOverlay.inviteModal.inviteNMembers":
  "{numMembers, plural, other {邀請 {numMembers} 個成員}}",
"teamPermissionsInviteOverlay.inviteModal.inviteNOwners":
  "{numMembers, plural, other {邀請 {numMembers} 名所有者}}",
"teamPermissionsInviteOverlay.inviteModal.skipForNow": "暫時跳過",
"teamPermissionsInviteWithModal.addMembers.tooltip": "添加成員和組",
"teamPermissionsInviteWithModal.addMembersNoPermissions.tooltip":
  "你沒有將成員添加到此團隊空間的權限",
"teamPermissionsInviteWithModal.addMembersToDefaultTeam.tooltip":
  "你無法添加成員，因為所有工作區成員都已與此默認團隊空間同步",
"teamPermissionsInviteWithModal.filterGroupsAndMembersInput.placeholder":
  "搜索成員或群組...",
"teamPermissionsInviteWithModal.filterMembersInput.placeholder":
  "按郵箱地址或姓名篩選…",
"teamPermissionsInviteWithModal.openModal": "添加成員",
"teamPermissionsMenu.memberItem.caption":
  "不能編輯團隊空間設置，但可以訪問團隊空間頁面。",
"teamPermissionsMenu.memberItem.label": "成員",
"teamPermissionsMenu.ownerItem.caption":
  "可以編輯團隊空間設置，並且擁有團隊空間頁面的完全訪問權限。",
"teamPermissionsMenu.ownerItem.label": "團隊空間所有者",
"teamPermissionsSettings.closeTeamToOpen.accept": "向所有人授予訪問權限",
"teamPermissionsSettings.closeTeamToOpen.dialogDescription":
  "確定要向工作區中的所有人授予對此團隊中頁面的訪問權限？",
"teamPermissionsSettings.closedTeam.noAccessLabel": "無訪問權限",
"teamPermissionsSettings.openTeamToClose.accept": "移除訪問權限",
"teamPermissionsSettings.openTeamToClose.dialogDescription":
  "確定要刪除工作區中所有人的訪問權限？只有團隊成員才具有訪問權限，新成員必須通過邀請加入。",
"teamPermissionsSettings.privateTeam.noAccessLabel": "無訪問權限",
"teamPermissionsSettings.privateTeam.noAccessTooltip":
  "當團隊為私有團隊時，無法與工作區共享頁面",
"teamPermissionsSettings.teamspace.disabledPermissionitem.description":
  "團隊空間級別權限不能低於默認工作區權限。",
"teamSettings.confirmDuplicateTeamName.cancelLabel": "取消",
"teamSettings.confirmDuplicateTeamName.message":
  "已存在同名團隊。確定要將此團隊命名為“{teamName}”嗎？",
"teamSettings.defaultTeam.subtitle": "所有工作區成員將自動添加到團隊中。",
"teamSettings.defaultTeam.title": "設為默認團隊",
"teamSettings.disableDefaultTeam.confirmationModal.confirmButton.label":
  "停止同步團隊空間",
"teamSettings.disableDefaultTeam.confirmationModal.message":
  "是否確定要停止此團隊空間與整個組織的同步？當前成員將保留在團隊空間中，但不會自動添加新的工作區成員。",
"teamSettings.disableExportOverride.confirmationButtonLabel":
  "覆蓋工作區設置",
"teamSettings.disableExportOverride.confirmationTitle":
  "是否確定要允許可以導出團隊空間頁面？默認情況下，無法導出此工作區中的頁面。",
"teamSettings.disableGuests.confirmationTitle":
  "是否確定？此團隊空間中的所有頁面訪客權限都將被移除。",
"teamSettings.disableGuestsOverride.confirmationButtonLabel":
  "覆蓋工作區設置",
"teamSettings.disableGuestsOverride.confirmationTitle":
  "是否確定要允許訪客進入此團隊空間？默認情況下，不允許訪客進入此工作區中的團隊空間。",
"teamSettings.disablePublicPages.confirmationTitle":
  "是否確定？這將從該團隊空間的所有頁面中移除任何不是工作區成員或訪客的訪問權限。",
"teamSettings.disablePublicPagesOverride.confirmationButtonLabel":
  "覆蓋工作區設置",
"teamSettings.disablePublicPagesOverride.confirmationTitle":
  "確定要允許將團隊空間頁面設為公開嗎？默認情況下，此工作區中的頁面不能設為公開。",
"teamSettings.enableDefaultTeam.confirmationModal.confirmButton.label":
  "同步團隊空間",
"teamSettings.enableDefaultTeam.confirmationModal.message":
  "是否確定要將此團隊空間與整個組織同步？工作區中的每個人以及未來的工作區成員都將被添加到此團隊空間中。",
"teamSettings.settingConfirmation.acceptButton": "是",
"teamSettings.workspaceSettingOverride.confirmationButtonLabel":
  "覆蓋工作區設置",
"teamSettingsGeneral.setting.isDefaultTeam.tooltipInviteOnlyTeam":
  "無法啟用默認團隊，因為此團隊僅限邀請",
"teamSettingsGeneral.setting.isDefaultTeam.tooltipNonSpaceAdmin":
  "只有工作區管理員可以設置默認團隊",
"teamSettingsGeneral.setting.isDefaultTeam.tooltipNonSpaceWorkspaceOwner":
  "只有工作區所有者才能設置默認團隊",
"teamSettingsSecurity.basedOnWorkspaceSettings":
  "基於<underline>工作區設置</underline>",
"teamSettingsSecurity.dangerZone.archiveTeamButton": "歸檔團隊空間",
"teamSettingsSecurity.overridesWorkspaceSettings":
  "覆蓋<underline>工作區設置</underline>",
"teamSettingsSecurity.setting.businessGateToggleTooltip":
  "升級到商業版以更改安全設置",
"teamSettingsSecurity.setting.enterpriseGateToggleTooltip":
  "升級到企業版以更改安全設置",
"teamSettingsSecurity.setting.exportCaption":
  "禁止任何人以 Markdown、CSV 或 PDF 格式導出。",
"teamSettingsSecurity.setting.exportTitle": "禁用導出",
"teamSettingsSecurity.setting.guestCaption":
  "禁止任何人邀請工作區之外的人訪問頁面。",
"teamSettingsSecurity.setting.guestTitle": "禁用訪客",
"teamSettingsSecurity.setting.shareCaption":
  "禁用該團隊空間中所有頁面的“分享”菜單中的“分享到網絡”選項。",
  "teamSettingsSecurity.setting.shareTitle": "禁用公共頁面共享",
    "teamSettingsSecurity.setting.topLockCaption":
      "防止成員在側邊欄中創建、移動、重新排序或刪除團隊的頁面列表。",
    "teamSettingsSecurity.setting.topLockTitle": "防止成員編輯團隊側邊欄部分",
    "teamWorkspacesSettings.disableTeamCreation.caption":
      "只允許工作區管理員創建團隊",
    "teamWorkspacesSettings.disableTeamCreation.title":
      "將團隊創建限制為僅管理員",
    "teamWorkspacesSettings.disableTeamCreation.workspaceOwnercaption":
      "僅允許工作區所有者創建團隊空間",
    "teamWorkspacesSettings.disableTeamCreation.workspaceOwners.title":
      "僅限工作區所有者才能創建團隊空間",
    "teamsDropdownForGroupMenu.filterForTeams.placeholder": "篩選團隊空間...",
    "teamsDropdownForMember.filterForTeams.placeholder": "篩選團隊...",
    "teamsDropdownForMember.label":
      "{numberOfTeams, plural, other {{numberOfTeams} 個團隊}}",
    "teamsDropdownForMember.numMembers":
      "{numMembers} {numMembers, plural, one {位成員} other {位成員}}",
    "teamsDropdownForMember.teamsCount.label":
      "{numberOfTeams, plural, other {{numberOfTeams} 個團隊空間}}",
    "teamsDropdownForMember.teamsCountNone.label": "無",
    "teamsEducationContent.teamsEducationSubtitle": "帶有團隊空間的新側邊欄",
    "teamsEducationContent.teamsEducationTitle": "Notion 2.18中的新增功能",
    "teamsEducationModal.doneButtonCta": "已完成",
    "teamsEducationModal.forAdmins.tabButton.joinTeamspace.subtitle":
      "加入與我相關的團隊空間。從“設置”菜單之一管理整個團隊空間。",
    "teamsEducationModal.forAdmins.tabButton.joinTeamspace.title":
      "輕鬆查找和管理團隊空間",
    "teamsEducationModal.forAdmins.tabButton.privacySettings.subtitle":
      "對所有用戶開放團隊或將其保留為私有狀態。您可以設置各種安全設置。",
    "teamsEducationModal.forAdmins.tabButton.privacySettings.title":
      "詳細的隱私設置，以保護團隊的安全",
    "teamsEducationModal.forAdmins.tabButton.teamspaceOrg.subtitle":
      "加入TeamSpace是一種中心，使您可以管理項目、文檔和Wiki。",
    "teamsEducationModal.forAdmins.tabButton.teamspaceOrg.title":
      "使用團隊空間配置工作空間",
    "teamsEducationModal.forAdmins.tabButton.turnIntoTeamspaces.subtitle":
      "只需單擊一下，即可移動所有子頁面和用戶，以創建團隊空間。",
    "teamsEducationModal.forAdmins.tabButton.turnIntoTeamspaces.title":
      "將現有頁面轉換為團隊空間",
    "teamsEducationModal.forMembers.tabButton.customizeTeamspace.subtitle":
      "從外觀和感覺到默認訪問權限設置，您可以調整所有設置。",
    "teamsEducationModal.forMembers.tabButton.customizeTeamspace.title":
      "根據需要設置團隊空間",
    "teamsEducationModal.forMembers.tabButton.joinTeamspace.subtitle":
      "使用與我相關的團隊空間自定義側邊欄。",
    "teamsEducationModal.forMembers.tabButton.joinTeamspace.title":
      "找到相關的團隊空間並參與",
    "teamsEducationModal.forMembers.tabButton.teamspaceOrg.subtitle":
      "加入TeamSpace是一種中心，使您可以管理項目、文檔和Wiki。",
    "teamsEducationModal.forMembers.tabButton.teamspaceOrg.title":
      "團隊配置所有設置的空間",
    "teamsEducationModal.forMembers.tabButton.teamspaceOwner.subtitle":
      "作為所有者，管理成員、設置權限和管理設置。",
    "teamsEducationModal.forMembers.tabButton.teamspaceOwner.title":
      "將創建者設置為TeamSpace所有者",
    "teamsEducationModal.learnMoreUrl": "了解有關團隊空間的更多信息",
    "teamsEducationModal.nextButtonCta": "下一頁",
    "teamsEducationModal.skipMessage": "跳過",
    "teamsInGroupMenu.filterForTeams.numMembers":
      "{numMembers} {numMembers, plural, one {位成員} other {位成員}}",
    "teamsWorkspaceSettings.defaultTeams.caption":
      "選擇所有新的和當前工作區成員將自動加入的團隊空間",
    "teamsWorkspaceSettings.defaultTeams.inputPlaceholder":
      "選擇默認團隊空間...",
    "teamsWorkspaceSettings.defaultTeams.title": "默認團隊空間",
    "teamsWorkspaceSettings.title": "團隊設置",
    "teamsWorkspaceSettings.updateButton.label": "更新",
    "templateChecklist.completed.description":
      "要獲得更多啟發，請轉到 Notion Guides 以提陞技能並探索更多使用 Notion 的新方法。",
    "templateChecklist.completed.header": "你完成了！",
    "templateChecklist.quickNote.a.description":
      "在現實場景中查看文檔和知識庫（A）",
    "templateChecklist.quickNote.a.title": "導入你的工作區（A）",
    "templateChecklist.quickNote.b.description":
      "在現實場景中查看文檔和知識庫（B）",
    "templateChecklist.quickNote.b.title": "導入你的工作區（A）",
    "templateChecklist.quickNote.c.description":
      "在現實場景中查看文檔和知識庫（C）",
    "templateChecklist.quickNote.c.title": "導入你的工作區（C）",
    "templateChecklistHeader.useCaseHeader.databases": "數據庫入門指南",
    "templateChecklistHeader.useCaseHeader.default": "Notion 入門指南",
    "templateChecklistHeader.useCaseHeader.notes": "筆記入門指南",
    "templateChecklistHeader.useCaseHeader.projectManagement":
      "項目和任務入門指南",
    "templateChecklistHeader.useCaseHeader.wiki": "筆記和文檔入門指南",
    "templateDetail.customizableFeatures.label": "可定制的功能",
    "templateDetail.getTemplateButton.label": "獲取模板",
    "templateDetail.madeBy.label": "製造者",
    "templateDetail.presetTitle.freeLabel": "免費",
    "templateDetail.relatedTemplates.label": "相關模板",
    "templateGallery.sidebar.category.all": "全部",
    "templateGallery.sidebar.category.docs": "文檔",
    "templateGallery.sidebar.category.notesMeetings": "筆記和會議",
    "templateGallery.sidebar.category.tasksProjects": "任務和項目",
    "templateGallery.sidebar.category.title": "類別",
    "templateGallery.sidebar.category.wikis": "知識庫",
    "templateGallery.sidebar.persona.all": "全部",
    "templateGallery.sidebar.persona.design": "設計",
    "templateGallery.sidebar.persona.eng": "工程",
    "templateGallery.sidebar.persona.finance": "金融",
    "templateGallery.sidebar.persona.hr": "人力資源",
    "templateGallery.sidebar.persona.marketing": "市場營銷",
    "templateGallery.sidebar.persona.pm": "產品管理",
    "templateGallery.sidebar.persona.sales": "銷售",
    "templateGallery.sidebar.persona.support": "支持",
    "templateGallery.sidebar.searchbar.placeholder": "搜索模板",
    "templateGallerySidebar.topPicksSection.label": "熱門精選",
    "templateHelpers.personas.design": "設計",
    "templateHelpers.personas.education": "教育",
    "templateHelpers.personas.educator": "教育工作者",
    "templateHelpers.personas.engineering": "開發",
    "templateHelpers.personas.entrepreneur": "企業家",
    "templateHelpers.personas.freelancer": "自由職業者",
    "templateHelpers.personas.gettingStarted": "立即開始",
    "templateHelpers.personas.humanResources": "人力資源",
    "templateHelpers.personas.it": "IT",
    "templateHelpers.personas.marketing": "市場營銷",
    "templateHelpers.personas.media": "媒體",
    "templateHelpers.personas.other": "其他",
    "templateHelpers.personas.personal": "個人",
    "templateHelpers.personas.productManagement": "產品管理",
    "templateHelpers.personas.productManagementV2": "產品",
    "templateHelpers.personas.sales": "銷售",
    "templateHelpers.personas.student": "學生",
    "templateHelpers.personas.suggestedTemplates": "建議模板",
    "templateHelpers.personas.support": "支持",
    "templateHelpers.personas.truncated.humanResources": "人力資源",
    "templateHelpers.templates.applicantTracker": "招聘追踪器",
    "templateHelpers.templates.blogPost": "博客文章",
    "templateHelpers.templates.brandAssets": "品牌資產",
    "templateHelpers.templates.classDirectory": "班級目錄",
    "templateHelpers.templates.classNotes": "課堂筆記",
    "templateHelpers.templates.classroomHome": "課堂首頁",
    "templateHelpers.templates.clubHomepage": "社團主頁",
    "templateHelpers.templates.companyGoals": "公司目標",
    "templateHelpers.templates.companyHome": "公司內部主頁",
    "templateHelpers.templates.competitiveAnalysis": "競爭分析",
    "templateHelpers.templates.contentCalendar": "內容日曆",
    "templateHelpers.templates.cornellNotesSystem": "康奈爾筆記系統",
    "templateHelpers.templates.courseSchedule": "課程時間表",
    "templateHelpers.templates.designSystem": "設計系統",
    "templateHelpers.templates.designTasks": "設計任務",
    "templateHelpers.templates.docs": "文檔",
    "templateHelpers.templates.engineeringWiki": "工程知識庫",
    "templateHelpers.templates.getStarted": "立即開始",
    "templateHelpers.templates.getStartedOnEvernote": "從 Evernote 開始",
    "templateHelpers.templates.getStartedOnMobile": "移動版入門指南",
    "templateHelpers.templates.goals": "目標",
    "templateHelpers.templates.gradeCalculator": "成績計算器",
    "templateHelpers.templates.habitTracker": "習慣追踪器",
    "templateHelpers.templates.helpCenter": "幫助中心",
    "templateHelpers.templates.jobApplications": "工作申請",
    "templateHelpers.templates.jobBoard": "職位公告板",
    "templateHelpers.templates.journal": "日誌",
    "templateHelpers.templates.lessonPlans": "課程計劃",
    "templateHelpers.templates.lifeWiki": "生活知識庫",
    "templateHelpers.templates.mediaList": "媒體列表",
    "templateHelpers.templates.meetingNotes": "會議記錄",
    "templateHelpers.templates.moodBoard": "情緒板",
    "templateHelpers.templates.newHireOnboarding": "新員工入職",
    "templateHelpers.templates.notes": "筆記和文檔",
    "templateHelpers.templates.personalCRM": "個人 CRM",
    "templateHelpers.templates.personalHome": "個人主頁",
    "templateHelpers.templates.processDocs": "流程文檔",
    "templateHelpers.templates.productFAQs": "產品常見問題解答",
    "templateHelpers.templates.productWiki": "產品知識庫",
    "templateHelpers.templates.projectManagement": "項目和任務",
    "templateHelpers.templates.quickNote": "快速筆記",
    "templateHelpers.templates.readingList": "閱讀清單",
    "templateHelpers.templates.resume": "簡歷",
    "templateHelpers.templates.roadmap": "產品路線圖",
    "templateHelpers.templates.roommateSpace": "室友空間",
    "templateHelpers.templates.salesAssets": "銷售資產",
    "templateHelpers.templates.salesCRM": "銷售 CRM",
    "templateHelpers.templates.salesWiki": "銷售知識庫",
    "templateHelpers.templates.simpleBudget": "簡單預算",
    "templateHelpers.templates.simpleNotebook": "簡單筆記本",
    "templateHelpers.templates.syllabus": "教學大綱",
    "templateHelpers.templates.taskList": "任務列表",
    "templateHelpers.templates.teamDirectory": "團隊目錄",
    "templateHelpers.templates.teamsGettingStarted": "團隊入門指南",
    "templateHelpers.templates.teamsHomepage": "團隊空間主頁",
    "templateHelpers.templates.thesisPlanning": "論文規劃",
    "templateHelpers.templates.toDo": "待辦事項",
    "templateHelpers.templates.travelPlanner": "旅行計劃",
    "templateHelpers.templates.userResearchDatabase": "用戶調研數據庫",
    "templateHelpers.templates.weeklyAgenda": "每週議程",
    "templateHelpers.templates.wiki": "團隊知識庫",
    "templateHelpers.useCase.bookmarks": "書籤",
    "templateHelpers.useCase.personalNotebook": "筆記本",
    "templateHelpers.useCase.teamDocs": "文檔",
    "templateHelpers.useCase.teamHome": "團隊主頁",
    "templateHelpers.useCase.teamMeetingNotes": "會議記錄",
    "templateHelpers.useCase.teamTasks": "團隊任務",
    "templateHelpers.useCase.todos": "待辦事項",
    "templatePicker.databaseTemplates.label": "數據庫",
    "templatePicker.deviceOffline.goOnlinePrompt":
      "{isMobileDevice, select, true{按此處創建空白頁。在連接網絡後可使用模板。}other{按 Enter 鍵創建一個空白頁。在連接網絡後可使用模板。}}",
    "templatePicker.isTemplate.emptyPagePrompt":
      "{isMobileDevice, select, true{按此處創建空白頁。}other{按 Enter 鍵創建空白頁。}}",
    "templatePicker.mobileCollectionEmptyPage.prompt":
      "{isParentLocked, select, true{按此處創建空白頁}other{按此處創建空白頁，或<templatebutton>創建模板</templatebutton>}}",
    "templatePicker.mobilePhoneEmptyPage.withTemplates.prompt": "點擊此處繼續…",
    "templatePicker.mobileTabletEmptyPage.withTemplates.prompt":
      "點擊此處繼續使用空白頁，或選擇一個模板",
    "templatePicker.mobileTemplatePicker.databaseTemplateSection.label":
      "數據庫",
    "templatePicker.webCollectionEmptyPage.prompt":
      "{isParentLocked, select, true{按 Enter 創建空白頁}other{按 Enter 創建空白頁，或<templatebutton>創建模板</templatebutton>}}",
    "templatePicker.webEmptyPage.withTemplates.prompt":
      "{isTemplate, select, true{按 Enter 創建空白頁，或選擇模板}other{按 Enter 創建空白頁，或選擇模板（↑↓來選擇）}}",
    "templatePickerHelpers.basicTemplateItems.empty": "空白頁",
    "templatePickerHelpers.basicTemplateItems.emptyWithIcon": "空白頁（圖標）",
    "templatePickerHelpers.basicTemplateItems.import": "導入",
    "templatePickerHelpers.basicTemplateItems.templates": "模板",
    "templatePickerHelpers.databaseTemplateNames.board": "看板",
    "templatePickerHelpers.databaseTemplateNames.boardView": "看板視圖",
    "templatePickerHelpers.databaseTemplateNames.calendar": "日曆",
    "templatePickerHelpers.databaseTemplateNames.calendarView": "日曆視圖",
    "templatePickerHelpers.databaseTemplateNames.gallery": "畫廊",
    "templatePickerHelpers.databaseTemplateNames.galleryView": "畫廊視圖",
    "templatePickerHelpers.databaseTemplateNames.list": "列表",
    "templatePickerHelpers.databaseTemplateNames.listView": "列表視圖",
    "templatePickerHelpers.databaseTemplateNames.table": "表格",
    "templatePickerHelpers.databaseTemplateNames.tableView": "表格視圖",
    "templatePickerHelpers.databaseTemplateNames.timeline": "時間軸",
    "templatePickerHelpers.databaseTemplateNames.timelineView": "時間軸視圖",
    "templatePickerHelpers.mobileBasicTemplateItems.emptyPage": "空白頁",
    "templatePickerHelpers.mobileBasicTemplateItems.pageWithIcon":
      "空白頁（圖標）",
    "templatePreview.getTemplateButton.label": "獲取模板",
    "templatePreview.presetTitle.freeLabel": "免費",
    "temporaryPasscodeLoginEmail.copyPasteCodeNoLink.prompt":
      "{hasExistingUser, select, true {複製並粘貼此臨時登錄碼： } other {複製並粘貼此臨時註冊碼： }}",
    "temporaryPasscodeLoginEmail.copyPasteCodeWithLink.prompt":
      "{hasExistingUser, select, true {或複制並粘貼此臨時登錄碼： } other {或複制並粘貼此臨時註冊碼： }}",
    "temporaryPasscodeLoginEmail.loginCode.subjectLine":
      "你的臨時 Notion 登錄碼為 {temporaryPassword}",
    "temporaryPasscodeLoginEmail.magicLink.text":
      "{hasExistingUser, select, true {點擊此處使用此魔法鏈接登錄} other {點擊此處使用此魔法鏈接註冊}}",
    "temporaryPasscodeLoginEmail.noNotionAccount.text":
      "我們找不到此郵箱地址上的帳戶。",
    "temporaryPasscodeLoginEmail.noRequest.text":
      "{hasExistingUser, select, true {如果你未嘗試登錄，則可以安全地忽略此電子郵件。} other {如果你沒有嘗試註冊，則可以放心忽略此電子郵件。}}",
    "temporaryPasscodeLoginEmail.setPermanentPassword.text":
      "提示：你可以在“設置與成員”&rarr;“我的帳戶”中設定永久密碼。",
    "temporaryPasscodeLoginEmail.signupCode.subjectLine":
      "你的 Notion 註冊碼為 {temporaryPassword}",
    "temporaryPasscodeLoginEmail.titleOfEmail":
      "{hasExistingUser, select, true {登錄} other {註冊}}",
    "text.commandsMenuNotOpen.placeholder": "輸入“/”發起指令",
    "text.commandsMenuOpen.placeholder": "輸入以篩選…",
    "text.truncated.showMoreLabel": "更多",
    "textRenderHelpers.commentMention.attachments.title":
      "{numberOfAttachments, plural, other {{numberOfAttachments} 個附件}}",
    "textRenderHelpers.commentMention.noAccess.title": "無權訪問頁面評論",
    "textRenderHelpers.commentMention.untitledPlaceholder": "無標題",
    "textRenderHelpers.pageMention.untitledPlaceholder": "無標題",
    "textRenderHelpers.untitledTextAsString": "無標題",
    "timeUtils.durationDescriptor.day":
      "{numDays, plural, other {{numDays} 天前}}",
    "timeUtils.durationDescriptor.hour":
      "{numHours, plural, other {{numHours} 小時前}}",
    "timeUtils.durationDescriptor.minute": "剛才",
    "timeline.itemPlaceholder.newPage": "新頁面",
    "timelineItem.itemName.placeholder": "輸入名稱…",
    "todoBlock.placeholder": "待辦事項",
    "toggleBlock.emptyBlock.placeholderText":
      "空的折疊塊。點擊或拖動塊到這裡。",
    "toggleBlock.placeholder": "折疊列表",
    "topbar.commentsButton.closeSidebartTooltip": "關閉所有評論",
    "topbar.commentsButton.openSidebartTooltip": "查看所有評論",
    "topbar.commentsButton.title": "評論",
    "topbar.connectionSection.connectionIntegration.label": "{connectionName}",
    "topbar.connectionSection.disconnectIntegration.label": "斷開與頁面的連接",
    "topbar.connectionSection.disconnectIntegrationConfirmation.label":
    "{botName}將從所有子頁面中刪除。是否繼續？",
  "topbar.connectionSection.disconnectIntegrationFromParent.label":
    "從父頁面斷開連接",
  "topbar.connectionSection.label": "已連接",
  "topbar.connectionsSection.connectedIntegration.label":
    "{connectedIntegrationName}",
  "topbar.connectionsSection.connectedIntegrationLoading.loading":
    "連接加載中…",
  "topbar.connectionsSection.connectionLoading.label": "正在導入連接...",
  "topbar.connectionsSection.connectionMore.label": "更多",
  "topbar.connectionsSection.connectionSearchError.label": "發生了問題。",
  "topbar.connectionsSection.connectionSearchResult.label": "{name}",
  "topbar.connectionsSection.connectionsLoading.label": "連接加載中…",
  "topbar.connectionsSection.connectionsMore.label": "更多",
  "topbar.connectionsSection.connectionsMoreSettings.label": "更多連接",
  "topbar.connectionsSection.disconnectIntegration.label": "斷開與頁面的連接",
  "topbar.connectionsSection.disconnectIntegrationFromParent.label":
    "斷開與父級的連接",
  "topbar.connectionsSection.discoverIntegration.label":
    "{discoverIntegrationName}",
  "topbar.connectionsSection.manageConnections.label": "管理連接",
  "topbar.connectionsSection.searchConnections.label": "查找連接",
  "topbar.connectionsSection.suggestedConnection.label":
    "{suggestedConnectionName}",
  "topbar.favoriteButton.activeTitle": "已加到最愛",
  "topbar.favoriteButton.activeTooltip1": "從側邊欄隱藏此頁面",
  "topbar.favoriteButton.title": "加到最愛",
  "topbar.favoriteButton.tooltip1": "將此頁面固定在側邊欄中",
  "topbar.moreButton.collectionHelpButton": "了解數據庫",
  "topbar.presenceIndicator.hiddenUsers.lastViewedBy.tooltip": "上次查看者",
  "topbar.presenceIndicator.hiddenUsers.otherCount.message":
    "{hiddenUsersCount, plural, other {+{hiddenUsersCount}}}",
  "topbar.presenceIndicator.hiddenUsers.viewingNow.tooltip": "正在查看",
  "topbar.presenceIndicator.lastViewedTime.tooltip": "{timeFromNow}查看過",
  "topbar.presenceIndicator.viewingNow.tooltip": "正在查看",
  "topbar.presenceIndicator.viewingNowWithLocation.tooltip":
    "正在查看。點擊以查看他的位置。",
  "topbar.publicPage.TryNotionCTAExperiment.label.try.V1": "Notion",
  "topbar.publicPage.TryNotionCTAExperiment.label.try.V3": "試用 Notion",
  "topbar.publicPage.comment": "評論",
  "topbar.publicPage.cta.label.open": "打開 Notion",
  "topbar.publicPage.cta.label.try": "試用 Notion",
  "topbar.publicPage.cta.label.try.V1": "免費試用 Notion",
  "topbar.publicPage.cta.label.try.V2": "註冊 Notion",
  "topbar.publicPage.cta.label.try.V3": "試用 Notion",
  "topbar.publicPage.cta.label.try.V4": "免費試用 Notion",
  "topbar.publicPage.cta.label.try.V5": "註冊 Notion",
  "topbar.publicPage.duplicateButton.label": "保存副本",
  "topbar.publicPage.edit": "編輯",
  "topbar.publicPage.searchButton.label": "搜索",
  "topbar.shareButton.title": "分享",
  "topbar.shareButton.tooltip": "分享或發佈到網絡上",
  "topbar.startPublicEditDialog.continueLabel": "繼續",
  "topbar.startPublicEditDialog.message":
    "當你開始編輯時，頁面所有者將可以看到你的姓名，郵箱地址和頭像。",
  "topbar.updatesButton.closeSidebartTooltip": "關閉所有更新",
  "topbar.updatesButton.emptyState": "此頁面尚未進行編輯。",
  "topbar.updatesButton.openSidebartTooltip": "打開更新側邊欄",
  "topbar.updatesButton.slackIntegrationButton.activeTitle": "基於",
  "topbar.updatesButton.slackIntegrationButton.connectedCaption":
    "已連接到Slack通道",
  "topbar.updatesButton.slackIntegrationButton.disconnectTooltip":
    "解除綁定 Slack 頻道，以停止獲取有關此頁面及其中頁面的更新。",
  "topbar.updatesButton.slackIntegrationButton.loading": "載入中…",
  "topbar.updatesButton.slackIntegrationButton.title": "綁定 Slack 頻道",
  "topbar.updatesButton.slackIntegrationButton.tooltip":
    "綁定 Slack 頻道以獲取有關此頁面及其中頁面的更新。",
  "topbar.updatesButton.title": "更新",
  "topbar.updatesButton.tooltip": "查看此頁面過去的更改",
  "topbarBrowserHistoryButton.goForwardButton.label": "前進",
  "topbarBrowserHistoryButtons.goBackButton.label": "後退",
  "topbarConnectionSection.sectionMenu.title": "連接目標",
  "topbarMobile.addToPageOrWorkspaceSectionButton.label": "添加到",
  "topbarMobile.addToPrivateSectionButton.label":
    "<mediumcolor>添加到</mediumcolor>{userAvatar}<mediumweight>私人頁面</mediumweight>",
  "topbarMobile.backButton.label": "返回",
  "topbarMobile.cancelQuickAddButton.label": "取消",
  "topbarMobile.commentsMenu.title": "評論",
  "topbarMobile.offline.message": "你處於離線狀態",
  "topbarMoreButton.loggedOut.tooltip": "更多...",
  "topbarMoreButton.mobileActionsMenu.title": "動作",
  "topbarMoreButton.tooltip": "樣式、導出等…",
  "topbarPresence.presenceIndicator.hiddenUsers.moreUsersNotViewing.tooltip":
    "其他 {notViewingMoreUsersCount} 位…",
  "transactionErrors.activityEditsMaxSize.message":
    "你已超出每頁的最大編輯次數。",
  "transactionErrors.atLeastOneAdminInWorkspace.message":
    "你的工作區中至少需要一名管理員。",
  "transactionErrors.atLeastOneDefaultTeam.message":
    "你的工作區中至少需要有一個默認團隊。",
  "transactionErrors.blockContentMaxSize.message":
    "你已超出每頁的最大內容數。",
  "transactionErrors.blockPermissionsMaxSize.message":
  "你已超出每頁的最大權限。",
"transactionErrors.blocksInsideThemselvesNotAllowed.message":
  "糟糕！區塊無法在自己內部移動。",
"transactionErrors.cannotArchiveOnlyDefaultTeam.message":
  "無法歸檔此團隊，因為它是此工作區中唯一的默認團隊。",
"transactionErrors.cannotDowngradeSelfIfOnlyOwner.message":
  "不能將自己降級為成員，因為團隊必須至少有一個所有者。",
"transactionErrors.cannotInviteGuestsToTeam":
  "無法邀請不是此工作區成員的人員加入團隊。",
"transactionErrors.cannotJoinClosedTeam.message":
  "無法加入封閉式團隊。請聯繫該團隊的所有者以獲得邀請。",
"transactionErrors.cannotJoinPrivateTeam.message":
  "無法加入私人團隊。請聯繫待邀請團隊的所有者。",
"transactionErrors.cannot_archive_only_default_team.message":
  "無法歸檔此團隊，因為它是此工作區中唯一的默認團隊。",
"transactionErrors.cantAddNewMembersFromThisJurisdiction":
  "我們目前不允許來自該司法管轄區的客戶添加新成員。",
"transactionErrors.cantAddNewMembersFromThisJursidiction":
  "我們目前不允許客戶添加來自該司法管轄區的新成員。",
"transactionErrors.commentOnlyAccessCantMovePage.message":
  "抱歉，你無法移動此頁面，因為你只有＂只能評論＂訪問權限。",
"transactionErrors.databaseSyncsOverLimit": "你已達到同步數據庫限制。",
"transactionErrors.guestsInvitedTooQuickly.message":
  "你邀請訪客加入工作區的速度太快。請稍後再試。",
"transactionErrors.guestsNotAllowed.message": "此工作區不允許訪客。",
"transactionErrors.guestsoverLimit.message":
  "此工作區已達到最多訪客數（5位）。",
"transactionErrors.movingPagesToOtherWorkspacesNotAllowed.message":
  "此工作區已禁用將頁面移動到其他工作區。",
"transactionErrors.nonApiMovesNotAllowed.message":
  "請刷新（Cmd / Ctrl + R）以更新 Notion 後便可將頁面移動到其他工作區。",
"transactionErrors.nonOwnersCannotSetIsDefault":
  "只有團隊所有者可以設置團隊的默認狀態。",
"transactionErrors.publicAccessNotAllowed.message":
  "此工作區不允許具有公開訪問權限的頁面。",
"transactionErrors.publicAccessNotAllowedInTeam.message":
  "此團隊不允許具有公共訪問權限的頁面。",
"transactionErrors.searchEngineIndexingNotAllowed.message":
  "此工作空間不允許公開頁包含在搜索索引中。",
"transactionErrors.spaceAllowedEmailDomainMatchesNoMembers.message":
  "允許的電子郵件域名必須與至少一個成員匹配。",
"transactionErrors.spaceDomainNotAvailable.message": "抱歉，此域名不可用。",
"transactionErrors.spaceEmailDomainNotAllowed.message":
  "抱歉，不允許使用此域名： {domain}",
"transactionErrors.teamDescriptionTooLong.message":
  "團隊描述必須少於 {maxTeamDescriptionLength} 個字符。",
"transactionErrors.teamLevelGuestsNotAllowed.message": "此團隊不允許訪客。",
"transactionErrors.teamNameEmpty.message": "團隊名稱不能為空。",
"transactionErrors.teamNameTooLong.message":
  "團隊名稱必須小於 {maxTeamNameLength} 個字符。",
"transactionErrors.teamPageEditOperationNotAllowed.message":
  "抱歉，你不能向此團隊空間添加頁面或從中刪除頁面。",
"transactionErrors.teamTopLevelOperationNotAllowed.message":
  "此團隊已鎖定其側邊欄固定頁面。",
"transactionErrors.teamTopLevelPageMismatch.message":
  "頂層團隊頁面不在其父級 Team.team_pages 中。",
"transactionErrors.upgradeClientIsNeeded.message":
  "請刷新(Cmd/Ctrl+R)以更新Notion，然後重試。",
"transactionErrors.workspaceTopLevelOperationNotAllowed.message":
  "此工作區已鎖定修改側邊欄的工作區部分。",
"transactionHelpers.requestTooLargeError.message":
  "抱歉，此請求太大。嘗試導入？",
"transclusionContainerBlock.actions.copySuccessMessage":
  "複製完成！現在，您可以將內容粘貼到所需的頁面上以同步內容。",
"transclusionContainerBlock.copy": "拷貝並同步",
"transclusionContainerBlock.differingPermissionsWarning":
  "不是每個人都能看到此內容。原始頁面<page>源頁面標題</page>未與此頁面上的所有人共享。",
"transclusionContainerBlock.editingMultiple":
  "在 {icon} {numberOfBacklinks, plural, one {其他 {numberOfBacklinks} 個頁面} other {其他 {numberOfBacklinks} 個頁面}}中編輯",
"transclusionContainerBlock.editingOriginal": "編輯原件",
"transclusionContainerBlock.emptyEditingPlaceholder":
  "在此處點擊或拖動塊，然後粘貼到另一個頁面以同步內容。",
"transclusionContainerBlock.learnMoreLabel": "了解有關同步塊的更多信息",
"transclusionContainerBlock.remove.confirm": "刪除並取消同步副本",
"transclusionContainerBlock.remove.confirmationMessage.header":
  "全部取消同步？",
"transclusionContainerBlock.remove.confirmationMessage.text":
  "{numberOfBacklinks, plural, one {其他 {numberOfBacklinks} 個頁面} other {其他 {numberOfBacklinks} 個頁面}}將不再與這些塊同步。",
"transclusionContainerBlock.remove.header": "刪除原內容？",
"transclusionContainerBlock.remove.text":
  "這些塊在 {numberOfBacklinks, plural, one {其他 {numberOfBacklinks} 個頁面} other {其他 {numberOfBacklinks} 個頁面}}中同步。如果你刪除原內容，這些塊將不再同步。",
"transclusionContainerBlock.unsyncTransclusionContainer.confirm":
  "全部取消同步",
"transclusionContainerBlock.unsyncTransclusionContainer.header":
  "全部取消同步？",
"transclusionContainerBlock.unsyncTransclusionContainer.text":
  "{numberOfBacklinks, plural, one {其他 {numberOfBacklinks} 個頁面} other {其他 {numberOfBacklinks} 個頁面}}將不再與這些塊同步。",
"transclusionContainerBlock.unsyncTransclusionReference.confirm":
  "取消同步",
"transclusionContainerBlock.unsyncTransclusionReference.header":
  "取消同步此項？",
"transclusionContainerBlock.unsyncTransclusionReference.text":
  "選定的塊將不再與原始塊同步。",
"trashActions.deletePagePermanentlyDialog.confirmDeleteButton.label":
  "是的，刪除此頁面",
"trashActions.deletePagePermanentlyDialog.prompt":
  "確定要永久刪除此頁面嗎？",
"trelloActions.authenticatingWithTrello.loadingMessage": "Trello 授權中…",
"trelloActions.loginPopupModal.title": "Trello 登錄",
"trelloImportOption.actionsMenu.connectAnotherAccount": "綁定另一個帳戶",
"trelloImportOption.actionsMenu.import": "導入",
"trelloImportOption.actionsMenu.removeIntegration": "移除",
"trelloImportOption.boardProperty.defaultName": "看板",
"trelloImportOption.search.noResultsPlaceholder": "無看板",
"trelloImportOption.search.placeholder": "搜索看板…",
"tweetBlock.embedTweet.button.label": "嵌入推文",
"tweetBlock.linkInput.caption": "適用於 Twitter 上的推文鏈接",
"tweetBlock.placeholder": "嵌入推文",
"tweetRenderer.errorLoadingTweet.message": "載入推文時出錯",
"tweetRenderer.loadingTweet.message": "載入推文中…",
"typeformBlock.embed.caption": "適用於啟用了公共訪問的 Typeform 鏈接",
"typeformBlock.placeholder": "嵌入 Typeform",
"uidoc.colors.copied": "已復制 {colorCode}",
"unfurling.asana.asanaAssignedTo": "已分配給 {value} 人",
"unfurling.asana.asanaDueAt": "截止時間為 {value}",
"unfurling.asana.asanaProject": "Asana 中的項目",
"unfurling.asana.asanaTask": "Asana 中的任務",
"unfurling.asana.asanaUpdatedAt": "更新時間為 {value}",
"unfurling.authenticateButton.title": "綁定 {integration} 以更新",
"unfurling.dropbox.dropboxFile": "Dropbox 文件",
"unfurling.errorOptions.authenticateAction.alreadyAuthenticated.title":
  "綁定另一個 {integration} 帳戶",
"unfurling.errorOptions.authenticateAction.alreadyAuthenticatedCompact.title":
  "綁定另一個帳戶",
"unfurling.errorOptions.authenticateAction.notAuthenticated.title":
  "綁定 {integration} 帳戶",
"unfurling.errorOptions.authenticateAction.reAuthenticate.title":
  "重新驗證帳戶",
"unfurling.errorOptions.learnMore.title": "了解有關此錯誤的更多信息",
"unfurling.errorOptions.menuTitle": "請嘗試以下選項",
"unfurling.errorOptions.removeAction.title": "移除",
"unfurling.errorOptions.replace.title": "更改 URL",
"unfurling.errorOptions.tryAgainAction.title": "再試一次",
"unfurling.figma.figmaFile": "Figma 文件",
"unfurling.figma.figmaLastModifiedBy": "上次由 {value} 修改",
"unfurling.generic.assigned": "已分配",
"unfurling.generic.author": "作者",
"unfurling.generic.created": "創建時間",
"unfurling.generic.due": "截止時間",
"unfurling.generic.lastModifiedAt": "修改時間",
"unfurling.generic.lastModifiedBy": "修改者",
"unfurling.generic.project": "項目",
"unfurling.generic.section": "分部",
"unfurling.generic.status": "狀態",
"unfurling.generic.type": "類型",
"unfurling.generic.updated": "更新時間",
"unfurling.github.githubCommit": "提交",
"unfurling.github.githubCommitted": "提交時間：{value}",
"unfurling.github.githubIssue": "Issue{value}",
"unfurling.github.githubIssues": "{value} 個問題",
"unfurling.github.githubPullClosed": "Closed {value}",
"unfurling.github.githubPullMerged": "Merged：{value}",
"unfurling.github.githubPullOpened": "Opened：{value}",
"unfurling.github.githubPullRequest": "Pull Request {value}",
"unfurling.github.githubPullRequests": "{value} 個拉取請求",
"unfurling.github.githubRepoUpdated": "Updated {value}",
"unfurling.github.issue": "問題",
"unfurling.github.jiraUpdated": "Updated {value}",
"unfurling.github.owner": "所有者",
"unfurling.github.pullRequest": "PR",
"unfurling.jira.jiraAssignee": "{value}分配給人員",
"unfurling.slack.replies": "回複數",
"unfurling.slack.slackMessage": "Slack 中的消息",
"unfurling.slack.slackReplyCount":
  "{value, plural, other {{value} 條回复}}",
"unfurling.slack.slackThread": "Slack 中的消息列",
"unfurling.trello.list": "列表",
"unfurling.trello.trelloAssignedTo": "已分配給 {value} 人",
"unfurling.trello.trelloCard": "Trello 中的卡片",
"unfurling.trello.trelloDueAt": "截止時間為 {value}",
"unfurling.trello.trelloUpdatedAt": "更新時間為 {value}",
"unfurling.updateButton.header": "此鏈接預覽已過期。",
"unfurling.updateButton.title": "更新",
"unfurling.zoom.host": "主持人",
"unfurling.zoom.joinZoomMeeting": "加入 Zoom 會議",
"unfurling.zoom.meetingId": "會議 ID",
"unfurling.zoom.passcode": "登錄碼",
"unfurling.zoom.zoomPasscode": "密碼： {value}",
"unfurlingHelpers.authenticatedErrorDescription.accessDenied":
  "資源所有者或授權服務器拒絕了該請求。請與你的組織或資源所有者聯繫，確保 OAuth 安裝已啟用。",
"unfurlingHelpers.authenticatedErrorDescription.invalidRequest":
  "授權請求無效。如果問題依然存在，請聯繫客服。",
"unfurlingHelpers.authenticatedErrorDescription.invalidScope":
  "請求的作用域無效。如果問題仍然存在，請聯繫客服。",
"unfurlingHelpers.authenticatedErrorDescription.serverError":
  "授權服務器遇到了阻止它完成請求的意外情況。如果問題依然存在，請聯繫客服。",
"unfurlingHelpers.authenticatedErrorDescription.temporarilyUnavailable":
  "由於服務器臨時超載或維護，授權服務器目前無法處理該請求。如果問題依然存在，請聯繫客服。",
"unfurlingHelpers.authenticatedErrorDescription.unknownError":
  "授權服務器響應了一個未知錯誤 (`{value}`)。如果問題依然存在，請聯繫客服。",
"unfurlingHelpers.authenticatedErrorDescription.unsupportedResponseType":
  "授權服務器不支持使用這種方法獲得授權代碼。如果問題仍然存在，請聯繫客服。",
"unfurlingHelpers.unauthorizedClient.":
  "未授權客戶端使用此方法請求授權代碼。如果問題依然存在，請聯繫客服。",
"unfurlingHelpers.unfurlResponseError.accessDenied": "拒絕訪問",
"unfurlingHelpers.unfurlResponseError.databaseSyncLimit":
  "已達到同步數據庫限制",
"unfurlingHelpers.unfurlResponseError.githubNotAcceptable":
  "需要所有者角色",
"unfurlingHelpers.unfurlResponseError.invalidRequest": "無法加載預覽",
"unfurlingHelpers.unfurlResponseError.jiraNotAcceptable":
  "已在另一個工作區中同步",
"unfurlingHelpers.unfurlResponseError.notAcceptable": "需要所有者角色",
"unfurlingHelpers.unfurlResponseError.notFound": "找不到內容",
"unfurlingHelpers.unfurlResponseError.rateLimited": "請求太多",
"unfurlingHelpers.unfurlResponseError.reAuthenticate":
  "需要重新進行身份驗證",
"unfurlingHelpers.unfurlResponseError.serverError": "無法加載預覽",
"unfurlingHelpers.unfurlResponseError.unknownError": "無法加載預覽",
"unfurlingHelpers.unfurlResponseError.unprocessableEntity":
  "無法識別的 URL",
"unfurlingHelpers.unfurlResponseErrorDescription.accessDenied":
  "你沒有訪問此資源的適當權限。",
"unfurlingHelpers.unfurlResponseErrorDescription.databaseSyncLimit":
  "您的工作區已達到同步數據庫限制。",
"unfurlingHelpers.unfurlResponseErrorDescription.githubNotAcceptable":
  "您沒有同步此資源的適當權限。您需要具有所有者角色。",
"unfurlingHelpers.unfurlResponseErrorDescription.invalidRequest":
  '嘗試獲取此資源的信息時出錯。收到的錯誤代碼為 "{statusCode}"。 ',
"unfurlingHelpers.unfurlResponseErrorDescription.jiraNotAcceptable":
  "您已在另一個工作區中同步此資源。",
"unfurlingHelpers.unfurlResponseErrorDescription.notAcceptable":
  "你沒有同步此資源的適當權限。你需要具有所有者角色。",
"unfurlingHelpers.unfurlResponseErrorDescription.notFound":
  "找不到此鏈接的資源信息。它可能已不存在，或者你可能沒有適當的訪問權限。",
"unfurlingHelpers.unfurlResponseErrorDescription.rateLimited":
  '"{integrationName}" 收到了太多來自你或你所在組織的請求。請等待幾分鐘，然後重試。 ',
"unfurlingHelpers.unfurlResponseErrorDescription.reAuthenticate":
  "你需要重新驗證自己的帳戶才能訪問此資源。",
"unfurlingHelpers.unfurlResponseErrorDescription.serverError":
  '嘗試獲取此資源的信息時出錯。收到的錯誤代碼為 "{statusCode}"。 ',
"unfurlingHelpers.unfurlResponseErrorDescription.unknownError":
  '嘗試獲取此資源的信息時出錯。收到的錯誤代碼為 "{statusCode}"。 ',
"unfurlingHelpers.unfurlResponseErrorDescription.unprocessableEntity":
  "此集成當前無法嵌入此 URL。",
"unfurlingMenu.actions.pasteAsDatabase.title": "粘貼為數據庫",
"unfurlingMenu.actions.pasteAsLink.title": "以鏈接形式粘貼",
"unfurlingMenu.actions.pasteAsMention.title": "以提及形式粘貼",
"unfurlingMenu.actions.pasteAsPreview.title": "以預覽形式粘貼",
"unsubscribeFromEmails.workspace.confirmUnsubscribeDescription":
  "確定要取消訂閱此列表嗎？",
"unsubscribeFromEmails.workspace.message":
  "你已成功退訂{workspaceName}的電子郵件",
"unwantedContentTakedownEmail.body.appeal":
  "如果你想對此決定提出上訴，請發送電子郵件至 <mailto>team@makenotion.com</mailto>，詳細說明你的內容已如何更改或未違反我們的政策。",
"unwantedContentTakedownEmail.body.consequence":
  "因此，此頁面不再公開。你仍然可以在你的私人工作區中訪問它。",
"unwantedContentTakedownEmail.body.intro": "感謝你使用 Notion。",
"unwantedContentTakedownEmail.body.takedown":
  "我們寫這封信是為了告訴你，我們已確定位於<pagelink>此頁面</pagelink>上的內容不符合我們的<contentpolicylink>內容與使用政策</contentpolicylink>中列出的標準。",
"unwantedContentTakedownEmail.closingText":
  "謝謝你。{br} ──來自 Notion 團隊",
"unwantedContentTakedownEmail.greetingWithName": "嗨，{customerName}！",
"unwantedContentTakedownEmail.greetingWithoutName": "嗨，你好！",
"unwantedContentTakedownEmail.subjectLine.text":
  "你的 Notion 帳戶：公共頁面上已審核的內容",
"updateBanner.updateAvailableBanner.message": "更新並查看新功能",
"updateSidebar.commentContainer.emptyResolved":
  "此頁上的已解決評論將在此處顯示。",
"updateSidebar.commentContainer.emptyTitleResolved": "未解決評論",
"updateSidebar.commentContainer.emptyTitleUnresolved": "尚無公開評論",
"updateSidebar.commentContainer.emptyUnresolved":
  "此頁面上的公開評論將顯示在這裡",
"updateSidebar.commentContainer.restricted": "你無權查看此受限頁面的更新。",
"updateSidebar.comments.filter.button.resolvedMode": "已解決",
"updateSidebar.comments.filter.button.unresolvedMode": "未解決",
"updateSidebar.comments.mode.resolvedOption": "已解決的評論",
"updateSidebar.comments.mode.unresolvedOption": "未解決的評論",
"updateSidebar.commentsTab.title": "評論",
"updateSidebar.header.commentsLabel": "評論",
"updateSidebar.header.updatesLabel": "更新",
"updateSidebar.placeholder.addComment": "添加評論...",
"updateSidebar.updatesContainer.empty": "此頁面沒有更新。",
"updateSidebar.updatesContainer.emptyAfterSearch":
  "沒有更新與請求的篩選器匹配。",
"updateSidebar.updatesTab.title": "更新",
"updateSidebarSelect.selectComments.label": "評論",
"updateSidebarSelect.selectUpdates.label": "所有更新",
"updateSidebarTabCommentsSegmentedControl.option.open": "打開",
"updateSidebarTabCommentsSegmentedControl.option.resolved": "已解決",
"updateSidebarUnexpandButton.closeSidebar.tooltip": "關閉側邊欄",
"updateSpaceDomain.error.invalidDomain.message": "此域名不可用。",
"updateSpaceDomain.error.missingDomain.message": "需要一個域名。",
"updatesButton.allUpdates.sidebarButton": "所有更新",
"updatesButton.tooltip": "此工作區中所有頁面的更新",
"updatesModal.allPagesTab.emptyPrompt": "工作區中頁面的更新將顯示在這裡。",
"updatesModal.allPagesTab.emptyPromptTitle": "沒有新的更新",
"updatesModal.allUpdatesTab.title": "全部",
"updatesModal.archiveTab.emptyPrompt":
  "你歸檔的所有收件箱更新都將顯示在這裡。",
"updatesModal.archiveTab.emptyPromptTitle": "沒有已歸檔的更新",
"updatesModal.archiveTab.title": "已歸檔",
"updatesModal.currentPageTab.emptyPrompt":
  "對此頁面的任何更改都將顯示在這裡。",
"updatesModal.currentPageTab.emptyPromptTitle": "沒有頁面更新",
"updatesModal.followedUpdatesTab.allArchived":
  "在任何頁面的“更新”菜單中打開“關注此頁面”，即可在這裡接收更新。",
"updatesModal.followedUpdatesTab.allArchivedTitle": "沒有新的更新",
"updatesModal.followedUpdatesTab.title": "正在關注",
"updatesModal.mentionsTab.title": "收件箱",
"updatesModal.mobileMenu.title": "所有更新",
"updatesModal.mobileThisPage.title": "此頁面",
"updatesModal.openNotifications.tooltip": "打開通知設定",
"updatesModal.spaceUpdatesTab.allArchived":
  "當有人@提及你、回复你的評論或邀請你進入頁面時，你將在這裡收到通知。",
"updatesModal.spaceUpdatesTab.allArchivedRequests":
  "當有人@提及你、回复你的評論、向你發送請求或邀請你進入頁面時，你將在這裡收到通知。",
"updatesModal.spaceUpdatesTab.allArchivedTitle": "都看完啦！",
"updatesModal.spaceUpdatesTab.archiveAllButtonTitle": "全部歸檔",
"updatesModal.spaceUpdatesTab.archiveReadButtonTitle": "歸檔閱讀",
"updatingSubscriptionDetails.restrictedRegion.genericErrorMessage":
  "我們目前不允許此司法管轄區的客戶升級其訂閱。",
"updatingSubscriptionDetails.restrictedRegion.newSubscriptionErrorMessage":
  "我們目前不接受來自該司法管轄區的新客戶。",
"upgradeButton.business.text": "商業版",
"upgradeButton.enterprise.text": "企業版",
"upgradeButton.learnMore.tooltip": "點擊以了解更多。",
"upgradeButton.personal.text": "個人專業版",
"upgradeButton.team.text": "團隊版",
"upgradeButton.upgrade.tooltip": "升級以使用此功能。",
"upgradeMobileButton.upgradeButton.label": "升級到專業版",
upgradeToBusinessBadge: "商業版",
upgradeToBusinessForPrivateTooltip: "升級到商業版以啟用私人團隊",
upgradeToEnterpriseBadge: "企業版",
upgradeToEnterpriseForPrivateTooltip: "升級到企業版以啟用私人團隊",
"uploadActions.uploadFailedError.message": "上傳失敗。",
"uploadLimitExceededBanner.message":
  "{shouldShowShortMessage, select, true {文件超出 {maxFreeAccountFileSize}MB 大小限制} other {你的文件超過了免費版的 {maxFreeAccountFileSize}MB 大小限制}}",
"uploadLimitExceededBanner.upgradeButton.label":
  "{shouldShowShortMessage, select, true {升級} other {升級以獲得無限上傳}}",
"upsellActions.confirmProration.acceptLabel":
  "升級到{plan, select, personal {個人版} team {團隊版} business {商業版} other {企業版}}",
"upsellActions.confirmProration.message":
  "你將以每位成員每月 {price} 的價格訂閱 Notion {plan, select, personal {個人版} team {團隊版} business {商業版} other {企業版}}。{br}{isSubscribed, select, true {系統將在扣除帳戶餘額後，按比例向你收取費用。} other {}}",
"upsellActions.switchPlanFromInAppPurchase":
  "你目前通過 Apple 的應用內購買進行訂閱。要切換計劃，請先取消你的 Apple 訂閱。",
"upsellCallout.learnMoreButton.text": "了解更多",
"upsellCallout.upgradeButton.text": "升級",
"useCaseOnboarding.mobileEditorSidebarStep.description":
  "你將在這裡找到工作區頁面和你的私人頁面。",
"useCaseOnboardingStep.cancelButton.label": "取消",
"useCasemobileDesktopStep.browser.label": "瀏覽器",
"useCasemobileDesktopStep.desktopApp.label": "Mac&Windows應用程序",
"useCasemobileDesktopStep.title":
  "Notion也適用於<boldtext>Mac</boldtext>、<boldtext>Windows</boldtext>和<boldtext>瀏覽器</boldtext>！頁面內容在所有設備上同步。",
"useCasemobileEditorSidebarStep.description":
  "您可以在此處查看工作區頁面和部門頁面。",
"useCasemobileEditorSidebarStep.title":
  "<boldtext>側欄菜單</boldtext>，可實現系統化的工作整理。",
"useCasemobileEditorStep.description":
  "要重新排列內容，請<boldtext>長觸摸</boldtext>。",
"useCasemobileEditorStep.title": "一些必要的提示：",
"useCasemobileWebClipperStep.title":
  "<boldtext>請將網頁或本地文件保存到Notion。</boldtext>",
"useCasewebClipperStep.description":
  "點擊“共享”按鈕，然後選擇要保存的頁面或數據庫。",
"userConnectionsSettings.actionMenu.connectAccount.label": "綁定另一個帳戶",
"userConnectionsSettings.actionMenu.disconnectAccount.label":
  "斷開帳戶連接",
"userConnectionsSettings.actionMenu.pagePicker.cancel": "取消",
"userConnectionsSettings.actionMenu.pagePicker.title":
  "允許“{connectionName}”訪問這些頁面",
"userConnectionsSettings.actionMenu.pagePicker.update": "更新訪問權限",
"userConnectionsSettings.actionMenu.selectPages.label": "訪問選定的頁面",
"userConnectionsSettings.connectionsTable.accessColumn.external":
  "可以{capabilities}",
"userConnectionsSettings.connectionsTable.accessColumn.googleDrive":
  "可以嵌入內容",
"userConnectionsSettings.connectionsTable.accessColumn.legacyImporter":
  "只能添加頁面",
"userConnectionsSettings.connectionsTable.accessColumn.title": "訪問權限",
"userConnectionsSettings.connectionsTable.accessColumn.userGuest":
  "可以{capabilities}內容",
"userConnectionsSettings.connectionsTable.botAccess.insertContent": "插入",
"userConnectionsSettings.connectionsTable.botAccess.previewLinks":
  "預覽鏈接",
"userConnectionsSettings.connectionsTable.botAccess.readContent": "查看",
"userConnectionsSettings.connectionsTable.botAccess.syncDatabases":
  "同步數據庫",
"userConnectionsSettings.connectionsTable.botAccess.updateContent": "更新",
"userConnectionsSettings.connectionsTable.connectionsColumn.title": "連接",
"userConnectionsSettings.deleteExternalAuthorization.confirmDelete.label":
  "是",
"userConnectionsSettings.deleteExternalAuthorization.withoutAccountName.confirmationMessage":
  "確定要撤銷此帳戶的訪問權限嗎？",
"userCreditSettings.creditBalanceSection.applyCreditButton.label":
  "使用積分",
"userCreditSettings.creditBalanceSection.creditBalanceMessage":
  "你目前的積分餘額為 {creditBalance}。",
"userCreditSettings.creditBalanceSection.freeMonthMessage":
  "{numberOfMonths, plural, other {這相當於<b> {numberOfMonths} 個月</b>的個人專業版。}}",
"userCreditSettings.creditBalanceSection.maximumCreditBalanceExceeded":
  "你已經超出了每個帳戶的最高積分總額 {maximumCreditBalance}。你賺取的額外積分不會增加你的餘額。",
"userCreditSettings.creditBalanceSection.title": "積分餘額",
"userCreditSettings.creditBalanceSection.upgradeForFreeButton.label":
  "免費升級",
"userCreditSettings.helpButton.caption": "了解如何賺取和使用積分",
"userCreditSettings.inviteFriendsSection.showLessReferredUsers.link":
  "少顯示 {numberOfReferredUsers} 位",
"userCreditSettings.inviteFriendsSection.showMoreReferredUsers.link":
  "顯示其他 {numberOfReferredUsers} 位",
"userCreditSettings.inviteFriendsSection.sourceOfReferralNote":
  "（已邀請你）",
"userCreditSettings.inviteFriendsSection.title": "邀請朋友並賺取積分",
"userCreditSettings.inviteFriendsSection.userHasAlreadySignedUpNote":
  "（已註冊）",
"userCreditSettings.inviteFriendsSection.userHasNotSignedUpNote":
  "（尚未註冊）",
"userCreditSettings.offline.message": "請連接網絡以管理帳戶積分。",
"userCreditSettings.otherWaysToEarnCreditSection.desktopApp.actionLink":
  "下載",
"userCreditSettings.otherWaysToEarnCreditSection.desktopApp.description":
  "下載桌面應用並登錄",
"userCreditSettings.otherWaysToEarnCreditSection.desktopApp.title":
  "在桌面應用中登錄",
"userCreditSettings.otherWaysToEarnCreditSection.evernoteImport.actionLink":
  "綁定",
"userCreditSettings.otherWaysToEarnCreditSection.evernoteImport.description":
  "導入你的筆記和筆記本",
"userCreditSettings.otherWaysToEarnCreditSection.evernoteImport.title":
  "從 Evernote 導入",
"userCreditSettings.otherWaysToEarnCreditSection.mobileApp.actionLink":
  "下載",
"userCreditSettings.otherWaysToEarnCreditSection.mobileApp.description":
  "下載移動應用並登錄",
"userCreditSettings.otherWaysToEarnCreditSection.mobileApp.title":
  "在移動應用中登錄",
"userCreditSettings.otherWaysToEarnCreditSection.mobileShare.actionLink":
  "下載",
"userCreditSettings.otherWaysToEarnCreditSection.mobileShare.description":
  "使用分享菜單將鏈接保存到 Notion 中",
"userCreditSettings.otherWaysToEarnCreditSection.mobileShare.title":
  "使用 iOS 或安卓系統分享菜單",
"userCreditSettings.otherWaysToEarnCreditSection.totalCreditSummaryText":
  "賺取的總積分",
"userCreditSettings.otherWaysToEarnCreditSection.webApp.actionLink": "訪問",
"userCreditSettings.otherWaysToEarnCreditSection.webApp.description":
  "從任何網頁瀏覽器登錄到 Notion",
"userCreditSettings.otherWaysToEarnCreditSection.webApp.title":
  "在網頁版登錄",
"userCreditSettings.otherWaysToEarnCreditSection.webClipper.actionLink":
  "安裝",
"userCreditSettings.otherWaysToEarnCreditSection.webClipper.description":
  "下載 Chrome 擴展程序並保存鏈接",
"userCreditSettings.otherWaysToEarnCreditSection.webClipper.title":
  "使用網頁剪裁器",
"userCreditSettings.otherWaysToEarnCreditSectionAlt.title":
  "賺取積分的方法",
"userDataConsent.render.error": "出了些問題",
"userDataConsentSettings.accessGranted.label":
  "你已授予 Notion 訪問你的帳戶的權限，僅以用於支持目的，直到{expiryTime}。",
"userDataConsentSettings.accessNotGranted.label":
  "授予 Notion 支持人員對你的帳戶的臨時訪問權限，以便我們代表你解決問題或恢復內容。你可以隨時撤銷訪問權限。",
"userDataConsentSettings.allowSupportAccess.button": "授予支持訪問權限",
"userDataConsentSettings.header.label": "支持訪問權限",
"userDataConsentSettings.revokeSupportAccess.button": "撤消訪問權限",
"userPermissionsMenu.adminItem.caption":
  "可以更改工作區設置並邀請新成員加入工作區。",
"userPermissionsMenu.adminItem.label": "管理員",
"userPermissionsMenu.canCommentItem.caption":
  "可以查看和評論，但無法編輯。",
"userPermissionsMenu.canCommentItem.label": "可以評論",
"userPermissionsMenu.canEditContentItem.caption":
  "可以編輯內容，但不能編輯數據庫的視圖或結構。",
"userPermissionsMenu.canEditContentItem.label": "可以編輯內容",
"userPermissionsMenu.canEditItem.caption": "可以編輯，但無法與他人分享。",
"userPermissionsMenu.canEditItem.label": "可以編輯",
"userPermissionsMenu.canReadItem.caption": "無法編輯或與他人分享。",
"userPermissionsMenu.canReadItem.label": "可以查看",
"userPermissionsMenu.canWriteItem.caption": "無法讀取或與他人分享。",
"userPermissionsMenu.canWriteItem.label": "可以寫入。",
"userPermissionsMenu.disabledItem.label": "禁用",
"userPermissionsMenu.downgradePermissionsModal.downgradeSelfButton.label":
  "降級",
"userPermissionsMenu.downgradePermissionsModal.downgradeSelfFromWorkspaceOrPage.confirmationMessage":
  "確定要降級自己的訪問權限嗎？",
"userPermissionsMenu.fullAccessItem.caption": "可以編輯並與他人分享。 ",
"userPermissionsMenu.fullAccessItem.label": "全部權限",
"userPermissionsMenu.guestItem.label": "訪客",
"userPermissionsMenu.leaveWorkspaceItem.label": "離開工作區",
"userPermissionsMenu.memberItem.caption":
  "無法更改工作區設置或邀請新成員加入工作區。",
"userPermissionsMenu.memberItem.label": "成員",
"userPermissionsMenu.membershipAdminItem.caption":
  "可以管理工作區和組成員資格。",
"userPermissionsMenu.membershipAdminItem.label": "成員資格管理員",
"userPermissionsMenu.mixedAccessItem.caption": "具有混合訪問權限。",
"userPermissionsMenu.mixedAccessItem.label": "混合訪問權限",
"userPermissionsMenu.mobile.doneButton.label": "完成",
"userPermissionsMenu.mobile.title": "選擇團隊空間角色",
"userPermissionsMenu.noAccessItem.label": "無法訪問",
"userPermissionsMenu.removeFromWorkspaceItem.label": "從工作區移除",
"userPermissionsMenu.removePermissionsModal.removeSelfButton.label": "刪除",
"userPermissionsMenu.removePermissionsModal.removeSelfFromPage.confirmationMessage":
  "確定要刪除自己的訪問權限嗎？",
"userPermissionsMenu.removePermissionsModal.removeSelfFromWorkspace.confirmationMessage":
  "確定要刪除自己的訪問權限嗎？你將無法訪問工作區，並且所有私人頁面都將丟失。",
"userPermissionsMenu.removePermissionsModal.removeUserButton.label": "移除",
"userPermissionsMenu.removePermissionsModal.removeUserFromPage.confirmationMessage":
  "確定要移除此人？",
"userPermissionsMenu.removePermissionsModal.removeUserFromWorkspace.confirmationMessage":
  "確定要移除此人？他將無法訪問工作區，並且所有私人頁面都將丟失。",
"userPermissionsMenu.removeWorkspaceItem.label": "移除",
"userPermissionsMenu.workspaceOwnerItem.caption":
  "可以更改工作區設置並邀請新成員加入工作區。",
"userPermissionsMenu.workspaceOwnerItem.label": "工作區所有者",
"userSettings.userType.personal": "只有我",
"userSettings.userType.team1000+": "1000人以上",
"userSettings.userType.team101-1000": "101人~1000人",
"userSettings.userType.team2-50": "2人~50人",
"userSettings.userType.team51-100": "51人~100人",
"userTypeTooltip.generalPerson": "此人員",
"verifyDomainModal.addNewDomain.integration.subtitle":
  "鏈接預覽集成必須{br}在發布之前驗證域名。",
"verifyDomainModal.addNewDomain.next": "下一步",
"verifyDomainModal.addNewDomain.samlConfig.subtitle":
  "具有已驗證域名的用戶可以{br}使用 SAML 單點登錄。",
"verifyDomainModal.addNewDomain.subtitle":
  "具有已驗證域名的用戶可以{br}使用 SAML 單點登錄。",
"verifyDomainModal.addNewDomain.title": "添加新域名",
"verifyDomainModal.editSamlConfig.copy": "拷貝",
"verifyDomainModal.invalidDomain.expired": "此域名的驗證碼已過期。",
"verifyDomainModal.invalidDomain.invalid":
  "你無法驗證此域名，因為它已由另一個工作區驗證。",
"verifyDomainModal.invalidDomain.okay": "好的",
"verifyDomainModal.invalidDomain.title": "無法驗證 {domain}",
"verifyDomainModal.verifiedDomain.integration.subtitle":
  "此集成可以展開包含此域名的 URL。",
"verifyDomainModal.verifiedDomain.okay": "好的",
"verifyDomainModal.verifiedDomain.samlConfig.subtitle":
  "用戶可以使用此電子郵件域名{br}通過SAML 單點登錄。",
"verifyDomainModal.verifiedDomain.subtitle":
  "用戶可以使用此電子郵件域名{br}通過SAML 單點登錄。",
"verifyDomainModal.verifiedDomain.title": "已成功驗證 {domain}",
"verifyDomainModal.verifyExistingDomain.copy": "拷貝",
"verifyDomainModal.verifyExistingDomain.instructionsDNS":
  "導航到你的域名主機的 DNS 記錄部分。",
"verifyDomainModal.verifyExistingDomain.instructionsHangTight":
  "通常，此更改只需幾分鐘即可生效，但是，在某些情況下，DNS 記錄可能需要長達 72 小時才能傳播。",
"verifyDomainModal.verifyExistingDomain.instructionsTXT":
  "創建新的 TXT 記錄，並將其作為值粘貼到上面的代碼中。",
"verifyDomainModal.verifyExistingDomain.instructionsVerify":
  "點擊“驗證”以通知 Notion 檢查你的 DNS 記錄。",
"verifyDomainModal.verifyExistingDomain.subtitle":
  "請按照以下步驟完成驗證。",
"verifyDomainModal.verifyExistingDomain.title": "驗證你的域名",
"verifyDomainModal.verifyExistingDomain.verificationCodeExpiresAt":
  "{timeLeft} 後過期",
"verifyDomainModal.verifyExistingDomain.verificationCodeLabel": "驗證碼",
"verifyDomainModal.verifyExistingDomain.verify": "驗證",
"videoBlock.embedVideo.button.label": "嵌入視頻",
"videoBlock.linkInput.caption": "適用於 YouTube、Vimeo 等視頻鏈接",
"videoBlock.linkInput.placeholder": "粘貼視頻鏈接…",
"videoBlock.placeholder": "嵌入或上傳視頻",
"viewMoreOutlinerButton.inlineOverflowButtonText": "查看全部 ({total})",
"viewMoreOutlinerButton.label": "查看全部 ({total})",
"viewMoreOutlinerButton.labelv2": "另外 {total} 個",
"viewsIntroModal.doneMessage": "明白了",
"viewsIntroModal.learnMoreUrl": "訪問 {url} 了解更多",
"viewsIntroModal.mobileDoneMessage": "明白了",
"viewsIntroModal.skipMessage": "全部跳過",
"viewsIntroModal.subtitle": "Notion 2.15 的新特性",
"viewsIntroModal.tab1.subtitle": "現在，只需單擊一下即可獲得自定義視圖。",
"viewsIntroModal.tab1.title": "用標籤發現和切換視圖",
"viewsIntroModal.tab2.subtitle":
  "更改團隊的共享數據庫視圖，不會中斷其他人的工作流。",
"viewsIntroModal.tab2.title": "在保存之前，篩選器和排序不會影響其他人",
"viewsIntroModal.tab3.subtitle":
  "包括跨多個頁面的同一數據庫的視圖，根據你的需要進行自定義。",
"viewsIntroModal.tab3.title": "從現有數據庫創建視圖",
"viewsIntroModal.title": "更好的數據庫和篩選器",
"webApp.redirectingToDesktop.continueInBrowser.message":
  "或者在瀏覽器中繼續",
  "webApp.redirectingToDesktop.directLink.message":
    "如果你沒有被重定向，請單擊此處。",
  "webApp.redirectingToDesktop.message": "重定向到你的 Notion 應用…",
  "webClipper.clippedItemDatabase.properties.createdTime": "創建時間",
  "webClipper.clippedItemDatabase.properties.name": "名稱",
  "webClipper.clippedItemDatabase.properties.tags": "標籤",
  "webClipper.clippedItemDatabase.properties.url": "網址",
  "webClipper.clippedItemDatabase.views.viewAll": "查看所有",
  "whatIsNotion.usecases.databases": "數據庫",
  "whatIsNotion.usecases.documents": "文檔",
  "whatIsNotion.usecases.knowledgeBases": "知識庫",
  "whatIsNotion.usecases.notes": "世界上最美的筆記... 😉",
  "whatIsNotion.usecases.projectManagementSystems": "項目管理系統",
  "whatIsNotion.usecases.publicWebsites": "公共網站",
  "whimsicalBlock.embeds.button.label": "嵌入 Whimsical",
  "whimsicalBlock.embeds.caption": "適用於啟用了公共訪問的 Whimsical 鏈接",
  "whimsicalBlock.placeholder": "嵌入 Whimsical",
  "withImageRepositioning.dragImage.text": "拖動圖片以調整位置",
  "workspaceTransferErrors.failedTransfer.errorMessages":
    "移動工作區失敗。請再試一次。",
  "workspaceTransferErrors.invalidCorporateEmail.errorMessages":
    "無法將工作區轉移到公司用戶帳戶。",
  "workspaceTransferErrors.reattemptWrongUser.errorMessages":
    "不允許重新嘗試轉移到不同的用戶帳戶。",  });

  const routes = document.createElement("script");
  routes.id = "routes";
  routes.type = "application/json";
  routes.setAttribute("data-locale", lang);
  routes.text = JSON.stringify({});

  function insertMoment() {
    try {
      moment.updateLocale(lang.toLowerCase(), {
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah點mm分",
          LLLL: "YYYY年M月D日ddddAh點mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
      });
      moment.locale(lang.toLowerCase());
    } catch (e) {
      requestAnimationFrame(() => {
        insertMoment();
      });
    }
  }

  try {
    const preferredLocaleStr = window.localStorage.getItem(
      "LRU:KeyValueStore2:preferredLocale"
    );
    const preferredLocale = JSON.parse(preferredLocaleStr);
    if (preferredLocale.value) {
      preferredLocale.value = lang;
      window.localStorage.setItem(
        "LRU:KeyValueStore2:preferredLocale",
        JSON.stringify(preferredLocale)
      ); // search window.document.querySelector("#messages") 请阅读
    }
  } catch (e) {}

  if (isElectron) {
    var observer = new MutationObserver(function (callback) {
      if (
        callback.filter((v) => {
          return v.target === document.head;
        }).length > 0
      ) {
        document.head.insertAdjacentElement("afterbegin", script);
        document.head.insertAdjacentElement("afterbegin", routes);
        observer.disconnect();
      }
    });
    observer.observe(document, {
      childList: true, // 观察目标子节点的变化，是否有添加或者删除
      attributes: false, // 观察属性变动
      subtree: true, // 观察后代节点，默认为 false
    });
    insertMoment();
  } else {
    function insert() {
      try {
        document.body.appendChild(script);
        document.body.appendChild(routes);
      } catch (e) {
        requestAnimationFrame(() => {
          insert();
        });
      }
    }
    insert();
    insertMoment();

    // for UserScript
    if (isSafari) {
      const notionRoot = document.createElement("div");
      notionRoot.id = "notion-app";
      notionRoot.setAttribute("data-inject", true);
      document.body.append(notionRoot);
      scriptSrcList.forEach((url) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.defer = "defer";
        script.src = url;
        script.setAttribute("data-inject", true);
        document.head.append(script);
      });
    }
  }
})();
