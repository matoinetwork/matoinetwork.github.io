const terminal = document.querySelector('.terminal');
const output = terminal.querySelector('.output');
const inputLine = terminal.querySelector('.input-line');
const commandLine = terminal.querySelector('#command-line');


const shutdownText = `systemd[1]: Stopping target Timers.
systemd[1]: Stopping target Sound Card.
systemd[1]: Stopping target Swap.
systemd[1]: Stopping target Local File Systems (Pre).
systemd[1]: Stopping target Local File Systems.
systemd[1]: Stopped target Remote File Systems.
systemd[1]: Stopped target Swap.
systemd[1]: Stopped target Local File Systems (Pre).
systemd[1]: Stopped target Local File Systems.
systemd[1]: Stopped target Timers.
The site will forward to google.com now!`;

const telegramText = `systemd[1]: VISIT MY TELEGRAM.
systemd[1]: VISIT MY TELEGRAM.
systemd[1]: VISIT MY TELEGRAM.
systemd[1]: VISIT MY TELEGRAM.
systemd[1]: VISIT MY TELEGRAM.
The site will forward to my telegram now!`;

const rebootText = `systemd[1]: Stopping target Timers.
systemd[1]: Stopping target Sound Card.
systemd[1]: Stopping target Swap.
systemd[1]: Stopping target Local File Systems (Pre).
systemd[1]: Stopping target Local File Systems.
systemd[1]: Stopped target Remote File Systems.
systemd[1]: Stopped target Swap.
systemd[1]: Stopped target Local File Systems (Pre).
systemd[1]: Stopped target Local File Systems.
systemd[1]: Stopped target Timers.
The site will reload now!`;

function outputCommand() {
    const input = commandLine.value;
    const outputString = `\n> ${input}\n`;
    output.innerHTML += outputString;
    commandLine.value = '';
    handleCommand(input);
}

function handleCommand(command) {
    if (command === 'matoi') {
        const helpText = `Available commands:\n
        ----------------------------------\n
        Available pages:\n
        forum - Matoi Network Forum\n
        darkforums.me.code.download -  darkforums.me source code download\n
	 unified-remote-full.apk - Unified Remote FULL APK download\n
         mtmanagervip.apk - MT Manager VIP Clone APK\n
        ----------------------------------\n
        General commands:\n
        help - displays this help message\n
        clear - clears the screen\n
        about - displays information about me\n
        contact - displays my contact information\n
        poweroff - forwards to google.com\n
        telegram - my telegram\n
        reload - reloads the site\n`
        output.innerHTML += helpText;
    } else if (command === 'clear') {
        output.innerHTML = '';
    } else if (command === 'about') {
        output.innerHTML += "matoinet.eu is the center for the entire Matoi Network."
    } else if (command === 'contact') {
        output.innerHTML += "m4t01@proton.me - Telegram @drmatoi"
    } else if (command === 'sourcecode') {
        window.location.replace('https://matoinet.eu');
} else if (command === 'forum') {
        window.location.replace('https://forum.matoinet.eu');
	} else if (command === 'darkforums.me.code.download') {
        window.location.replace('https://t.me/gigoffiziell/379');
	} else if (command === 'unified-remote-full.apk') {
        window.location.replace('https://t.me/gigoffiziell/365');
        } else if (command === 'mtmanagervip.apk') {
        window.location.replace('https://dl.relaxmodapk.com/files/apps/MT%20Manager%20v2.14.5-clone%20(Semi%20ViP).apk');
    } else if (command === 'poweroff') {
        output.innerHTML += shutdownText;
        delete inputLine;
        setTimeout(function() {
            window.location.replace('https://google.com');
        }, 1000);
} else if (command === 'telegram') {
        output.innerHTML += telegramText;
        delete inputLine;
        setTimeout(function() {
            window.location.replace('https://t.me/drmatoi');
        }, 1000);
    } else if (command === 'reload') {
        output.innerHTML += rebootText;
        setTimeout(function() {
            window.location.replace('https://matoi.docc.ru');
        }, 5000);

    } else {
        const errorText = `Command '${command}' not found. Type 'matoi' for a list of available commands.`;
        output.innerHTML += errorText;
    }
}

commandLine.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        outputCommand();
    }
});
commandLine.focus();

