intent('What does this app do?', 
      reply('This is a File Sharing App'))
intent('What can I do here?', reply('U can Share your files simply and securely!' ))

// Commands

// Navigate to send page
intent('Start sending a file', 'Navigate to send page', 'Help me to send files', 'go to send page',
 (p) => {
    p.play({command: 'sendCommand'});
    p.play('Redirected to send page');
    p.play('Now you can start sharing your files!');
})

// Navigate to download page
intent('Start downloading a file', 'Navigate to download page', 'Help me to download files', 'go to download page',
 (p) => {
    p.play({command: 'downloadCommand'});
    p.play('Redirected to download page');
    p.play('Now you can start downloading!');
})

// Navigate to home page
intent('go back', 'Navigate to homepage', 'take me back', 'go to home page', 'go to initial page', 'go to start',
 (p) => {
    p.play({command: 'homeCommand'});
    p.play('Redirected to homepage');
})

// Help command
intent('help', 'help me to send files', 
      (p) => {
    p.play('Please upload the files you want to share or if you have a key go to download page instead!');
})

// Website intro
intent('Explain about this website', 'Tell me about the website', 'What is simple share', 'Explain about simple share', 'What does this website do?', (p) => {
    p.play('Simple share is a file sharing app which allows you to upload and share a file from your pc or mobile and transfer it to anyone across the internet quickly and easily.')
});

// Alan chat
intent('Hi', 'Introduce yourself', 'Who are you?', (p) => {
    p.play('hello I am alan, Your guide to simple share. Say "help" to acquire help, Happy sharing!');
    p.play('If you want a list of commands, Say "log".')
});

// Installation guide
intent('How to install the app', 'Give me the installation guide', (p) => {
    p.play('Go to chrome browser in your mobile and in the three dots you can find an option to install the app. Thats it, now you can find the app on your home screen.')
});

// Assist msg
intent('Hey alan', (p) => {
    p.play('Hi, how can I assist you today');
})

// how to download
intent('How to download files', 'I have a QR code', 'I have a code', 'I have a unique code',
       (p) => {
    p.play('If you have a qr code, scan it to download files, or if you have a unique code enter it in the download page')
})

// how to scan qr 
intent('How to scan QR', 'How to scan QR code', (p) => {
    p.play('You can scan it using any QR scanning app like google lens');
})

// List of command
intent('Give me the list of commands', 'Log the list of commands', 'log', (p) => {
    p.play('Here are the list of commands.');
    p.play('1. Help - To get help, 2. Navigate - To navigate among pages, 3. log - To log the list of commands, 4. Explain - To explain about the website, 5. Sleep - To put me in sleep mode, 6. Close - To close the window.');
})


// Navigate
intent('Navigate', 'Tell me about navigate command', 
       (p) => {
    p.play('Navigate Command is used to navigate among various pages of simple share');
    p.play('For example, if you want to go to download page, You can say "Navigate to Download page or Go to download page", Its that simple.')
}
);

intent('Explain', p => {
    p.play('Explain command is used to know better about the website');
    p.play('For example, ask "What is simple Share?"');
})

// Thank You
intent('Thank you', (p) => {
    p.play('No Problem, I am here to help you'); 
    p.play("Is there any other thing that I can do for you?");
});

// Joke
intent('Tell me a joke', (p) => {
    p.play('Do you know, that gods of death love apples?');
})

//De activate or shutdown
intent('Shutdown', 'De activate', p => {
    p.play('Going Offline!', opts({deactivate:true}));
});

// Sleep command
intent('Sleep', p => {
    p.play('The sleep command is used to put me into sleep mode');
    p.play('For example, You can say "go to sleep mode" to turn me off, or "shutdown for a minute" to put me in sleep mode for a minute');
});

// Sleep/Shutdown
intent('Go to sleep', 'Shutdown', 'Hey alan, relax!', 'You can rest now', 'Take rest', 'You can rest now', 'You can relax now', 'relax now', 'now you can go to offline', p => {
    p.play('Ahh, Im sleepy right now!', opts({deactivate:true}));
})

// Timer for a minute
intent('Set a 1-minute timer', 'Deactivate for a minute', 'Shutdown for a minute', 'go to sleep mode for a minute', 'go to sleep for a minute', 'Shutup for a minute', 'be quiet for a minute', p => {
    p.play('Sure, 1 minute, starting now',  opts({deactivate:true}));
    setTimeout(() => {
        p.play('Time is up, Now I am online!', opts({activate:true}));
    }, 60000);
});


// Timer for a minute
intent('Set a 30-seconds timer', 'Deactivate for half a minute', 'Shutdown for half a minute', 'Shut up for 30 seconds', 'be quiet for 30 seconds', 'Shut down for 30 seconds', p => {
    p.play('Sure, 30 seconds, starting now',  opts({deactivate:true}));
    setTimeout(() => {
        p.play('Time is up, now I am online!', opts({force:true, activate:true}));
    }, 30000);
});

// Self destruct
intent('Self destruct', 'activate self destruct', 'start self destruct', 'Initiate Self destruct', 'Code red', p => {
    p.play('Self destruct Sequence initiated!');
    p.play('Self destructing in 5...');
    p.play('4...');
    p.play('3...');
    p.play('2...');
    p.play('1...');
    setTimeout(() => {
        p.play({command: 'selfDestruct'}, opts({deactivate:true, force:true}));
    }, 4000);
});

// Close the window
intent('close the window', 'close', 'My work is done', 'Bye alan', 'I finished my work', p => {
    p.play('ThankYou for using simple share');
    p.play('See you next time, Happy sharing!');
    p.play({command:'selfDestruct'}, opts({deactivate:true}));
});

