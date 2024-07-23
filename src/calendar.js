/**
 * Creates events in the user's default calendar from Notion data.
 */
function createEvent() {
	const notionData = JSON.parse(getNotionData()); // Parse the JSON string
	const calendarId = "primary";

	notionData.results.forEach((notionEvent) => {
		const eventFromNotion = {
			summary: notionEvent.properties.Name.title[0].text.content,
			start: {
				dateTime: new Date(notionEvent.properties.Date.date.start).toISOString(),
			},
			end: {
				dateTime: new Date(notionEvent.properties.Date.date.end).toISOString(),
			},
		};

		try {
			// Insert new event in the calendar
			const event = Calendar.Events.insert(eventFromNotion, calendarId);
			console.log("Event created: " + event.summary);
		} catch (err) {
			console.log("Failed to create event: " + err.message);
		}
	});
}
