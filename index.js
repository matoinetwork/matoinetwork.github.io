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
         npmanager.apk - NP Manager APK\n
         apkeditorpro.apk -  APK Editor Pro APKd\n
	 unifiedremotefull.apk - Unified Remote FULL APK download\n
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
    } else if (command === 'telegram') {
        output.innerHTML += "t.me/drmatoi"
    } else if (command === 'contact') {
        output.innerHTML += "m4t01@proton.me - Telegram @drmatoi"
    } else if (command === 'sourcecode') {
        window.location.replace('https://matoinet.eu');
} else if (command === 'npmanager.apk') {
        window.location.replace('https://dl2.apkmb.com//vfm-admin/vfm-downloader.php?q=0&sh=8b4ceb73a807f04714cca383ade9e17f&share=2d60a21944f1f1e6ae5b66747524d59c');
	} else if (command === 'unifiedremotefull.apk') {
        window.location.replace('https://files.modyolo.com/Unified%20Remote/Unified_Remote_Full-v3.22.3_build_322004-Mod.apk');
	} else if (command === 'apkeditorpro.apk') {
        window.location.replace('https://dl.relaxmodapk.com/files/apps/apk_ediotr_pro_(6.3.4.1.5.6(relaxmodapk.net).apk');
        } else if (command === 'mtmanagervip.apk') {
        window.location.replace('https://dl.relaxmodapk.com/files/apps/MT%20Manager%20v2.14.5-clone%20(Semi%20ViP).apk');
    } else if (command === 'poweroff') {
        output.innerHTML += shutdownText;
        delete inputLine;
        setTimeout(function() {
            window.location.replace('https://google.com');
        }, 1000);
    } else if (command === 'reload') {
        output.innerHTML += rebootText;
        setTimeout(function() {
            window.location.replace('http://matoi.docc.ru');
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

