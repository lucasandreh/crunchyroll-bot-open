const username = document.querySelector('.user-name').textContent;
const user_id = document.querySelector('.user-id');
const user_avatar = document.querySelector('.user-avatar');

chrome.storage.sync.set({ discordUser: username });
chrome.storage.sync.set({ discordUserId: user_id.value });
chrome.storage.sync.set({ discordUserAvatar: user_avatar.value });