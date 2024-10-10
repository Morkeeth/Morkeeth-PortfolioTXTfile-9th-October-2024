console.log("Script is running");

const text = `Oscar Morke

I was born in Stockholm, Sweden. Lived in Seoul and Silicon Valley. Manifesting a move to slightly sunnier Portugal.

At Anotherblock, we're democratizing music rights. Rihanna, The Weeknd, and Michael Jackson's first recording on the blockchain. 40,000 users earning 12% APY from music streams, $2.1M in volume. A complete new asset class.

I host Wave Radio, where we chat about shipping products that matter, like AI wearables and the optimal stack for 10x engineers.

✦ ✦ ✦

Founded Contrib. A playground for 200 builders, designers and enthusiasts, we hosted 42 crypto bars. I pitched to VCs running around WeWork at the Antler VC program and shipped 2 MVPs while concluding that bounties are not the optimal way of working.

Spent the pandemic navigating Silicon Valley at Nordic Innovation House and built out their community efforts, hosted events and spent time on the delusion called Clubhouse.

Thought that academia was the ultimate proof so got two Master's degrees. Industrial Engineering and Business/Entrepreneurship. I use them occasionally. But more interesting, co-founded a creative/digital agency with friends where we got 30+ clients and 4+ government contracts, built apps, made campaigns, scaled hackathons and learned how to shoot and edit videos.

✦ ✦ ✦

Hackathons became like a sport. Won a few, including a slam dunk in ETH Bogota, ETH New York and Lisbon. Was the judge for a DLT hack 2019 in Times Square, a different time back then. The grand receipt is more than 16 gold medals and $62,616 in rewards but more importantly - Built stuff that works.

I consider myself a remover of blockers and enjoy spending time with problems, prioritizing features and creating clarity.

✦ ✦ ✦

[GET_PERSONAL]

You can reach me on [TWITTER] or [LINKEDIN].

Updated: October 9, 2024
From Stockholm to Web3, fueled by coffee and dreams of sunny beaches`;

const editor = document.getElementById('editor');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        if (text.charAt(i) === '\n') {
            editor.innerHTML += '<br>';
        } else {
            editor.innerHTML += text.charAt(i);
        }
        i++;
        editor.scrollTop = editor.scrollHeight;
        setTimeout(typeWriter, 10);
    } else {
        editor.innerHTML += '<span id="cursor"></span>';
        addInteractiveElements();
    }
}

function addInteractiveElements() {
    editor.innerHTML = editor.innerHTML.replace('[GET_PERSONAL]', '<span class="clickable" onclick="togglePersonal()">Get Personal</span><span id="personal" style="display:none;"> I DJ, play tennis, try to surf, and recently started running. I\'ve journaled every day since 2014 and keep everything in a huge TXT file, just like this site.</span>');
    editor.innerHTML = editor.innerHTML.replace('[TWITTER]', '<a href="https://x.com/Morkeeth" target="_blank">Twitter</a>');
    editor.innerHTML = editor.innerHTML.replace('[LINKEDIN]', '<a href="https://www.linkedin.com/in/oscarmorke/" target="_blank">LinkedIn</a>');
}

function togglePersonal() {
    const personal = document.getElementById('personal');
    personal.style.display = personal.style.display === 'none' ? 'inline' : 'none';
}

typeWriter();

// Console functionality
const consoleContainer = document.getElementById('console-container');
let consoleOpen = false;

function createConsoleButton() {
    console.log("Creating console button");
    const button = document.createElement('button');
    button.id = 'console-button';
    button.innerHTML = '&gt;_';
    button.onclick = toggleConsole;
    consoleContainer.appendChild(button);
    console.log("Console button created:", button);
}

function createConsole() {
    console.log("Creating console");
    const console = document.createElement('div');
    console.id = 'console';
    console.innerHTML = `
        <div id="console-output"></div>
        <input type="text" id="console-input" placeholder="Enter command...">
    `;
    consoleContainer.appendChild(console);
    console.log("Console created:", console);

    const input = document.getElementById('console-input');
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleCommand(this.value);
            this.value = '';
        }
    });
}

function toggleConsole() {
    console.log("Toggle console called");
    const console = document.getElementById('console');
    consoleOpen = !consoleOpen;
    console.style.display = consoleOpen ? 'block' : 'none';
    if (consoleOpen) {
        document.getElementById('console-input').focus();
    }
}

function handleCommand(command) {
    const output = document.getElementById('console-output');
    output.innerHTML += `> ${command}<br>`;
    
    switch(command.toLowerCase()) {
        case 'help':
            output.innerHTML += 'Available commands: help, projects, contact, skills<br>';
            break;
        case 'projects':
            output.innerHTML += 'Projects: Anotherblock, Wave Radio, Contrib<br>';
            break;
        case 'contact':
            output.innerHTML += 'Contact: Twitter @Morkeeth, LinkedIn /in/oscarmorke<br>';
            break;
        case 'skills':
            output.innerHTML += 'Skills: Product Management, Community Building, Blockchain, Entrepreneurship<br>';
            break;
        default:
            output.innerHTML += 'Command not recognized. Type "help" for available commands.<br>';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");
    createConsoleButton();
    createConsole();
    console.log("Console button and console created");
});

console.log("Script completed");