const tabs = Array.from(document.getElementsByClassName('tab'));
const tabContent = document.getElementsByClassName('tab__content');

function activeElements() {
	
	for (const content of tabContent) {
		content.className = 'tab__content';
	}

	for (const tab of tabs) {
		tab.className = 'tab';
	}
	
	let i = tabs.indexOf(this);
	tabs[i].className = 'tab tab_active';
	tabContent[i].className = 'tab__content tab__content_active';
}

for (const click of tabs) {
	click.onclick = activeElements;
}

