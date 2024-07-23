// Example:
// curl 'https://api.notion.com/v1/databases/z42a88bf7f9a3bc9a2ed1f006aca278b' \
//   -H 'Authorization: Bearer '"$NOTION_API_KEY"'' \
//   -H 'Notion-Version: 2022-06-28'

storeSecrets();

function main() {
	createEvent();
}
