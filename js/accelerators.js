// This file will handle displaying Melbourne startup accelerators.

document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    if (!main) return;

    // Create a container for the two columns
    let container = document.getElementById('two-column-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'two-column-container';
        container.style.display = 'flex';
        container.style.gap = '40px';
        main.insertBefore(container, main.firstChild);
    }

    // Move grants section into the left column
    const grantsSection = document.getElementById('grants');
    if (grantsSection) {
        let leftCol = document.getElementById('left-col');
        if (!leftCol) {
            leftCol = document.createElement('div');
            leftCol.id = 'left-col';
            leftCol.style.flex = '1';
            container.appendChild(leftCol);
        }
        leftCol.appendChild(grantsSection);
    }

    // Create right column for accelerators
    let rightCol = document.getElementById('right-col');
    if (!rightCol) {
        rightCol = document.createElement('div');
        rightCol.id = 'right-col';
        rightCol.style.flex = '1';
        container.appendChild(rightCol);
    }

    // Accelerator data
    const accelerators = [
        {
            name: 'LaunchVIC',
            link: 'https://launchvic.org/',
            description: "Victoria's startup agency supporting founders and investors.",
            domain: 'General Tech, Ecosystem Support',
            stage: 'Pre-seed, Seed',
            equity: 'No (grants, programs)',
            //tam: 'Victoria, Australia'
        },

        {
            name: 'Cremorne Digital Hub',
            link: 'https://cremornedigitalhub.com.au/en-au/home',
            description: "A Victorian Government initiative to grow the tech sector.",
            domain: 'Digital, Tech, Innovation',
            stage: 'Seed, Early',
            equity: 'No (hub, programs)',
            //tam: 'Victoria, Australia'
        },
        {
            name: 'Melbourne Accelerator Program (MAP)',
            link: 'https://www.themap.co/',
            description: "The University of Melbourne's startup accelerator.",
            domain: 'General Tech, University Startups',
            stage: 'Seed, Early',
            equity: 'No',
            //tam: 'Australia'
        },
       
        {
            name: 'Skalata Ventures',
            link: 'https://www.skalata.vc/',
            description: "Invests in and supports early-stage Australian startups.",
            domain: 'General Tech, B2B, B2C',
            stage: 'Seed, Series A',
            equity: 'Equity taken',
            //tam: 'Australia'
        },

        {
            name: 'Boab Ventures',
            link: 'https://boab.ventures/',
            description: "A subsidiary of Artesian Venture Partners, focusing on deeptech.",
            domain: 'AI, Deeptech',
            stage: 'Seed, Series A',
            equity: 'Equity taken',
            //tam: 'Global'
        },

       {
            name: 'Rocket Seeder',
            link: 'https://www.rocketseeder.com/',
            description: "Supports early-stage startups aligned to the UN's SDGs.",
            domain: 'Agri-food, Sustainability',
            stage: 'Pre-seed, Seed',
            equity: 'No',
            //tam: 'Australia'
        },
        {
            name: 'Antler',
            link: 'https://www.antler.co/melbourne',
            description: "Global startup generator and early-stage venture capital firm.",
            domain: 'General Tech, B2B, B2C',
            stage: 'Pre-seed, Seed',
            equity: 'Equity taken',
            //tam: 'Global'
        },

        {   name: 'Startmate',
            link: 'https://startmate.com/',
            description: "A leading Australian accelerator supporting startups across various sectors.",
            domain: 'General Tech, B2B, B2C',
            stage: 'Seed, Series A',
            equity: 'Equity taken',
            //tam: 'Australia, Global'
        },
         
       {
            name: 'Techstars Melbourne',
            link: 'https://www.techstars.com/accelerators/melbourne',
            description: "Part of the global Techstars network, supporting startups in Melbourne.",
            domain: 'General Tech, B2B, B2C',
            stage: 'Seed, Early',
            equity: 'Equity taken',
            //tam: 'Global'
        },
    ];

 let html = `<h2>Startup Accelerators</h2>`;
accelerators.forEach(acc => {
    html += `
        <div class="event">
            <h3>
                <a href="${acc.link}" target="_blank">${acc.name}</a>
                <span style="font-weight: normal;"> &mdash; ${acc.description}</span>
            </h3>
            <p>
                <strong>Domain:</strong> ${acc.domain}
            </p>
            <div style="display: flex; align-items: flex-start; gap: 30px; flex-wrap: wrap;">
                <div>
                    <strong>Investment Stage:</strong>
                    ${
                        acc.stage.split(',').map(s =>
                            `<span style="
                                display:inline-block;
                                background:#e0e7ef;
                                color:#234;
                                border-radius:8px;
                                padding:2px 8px;
                                margin-right:5px;
                                font-size:0.9em;
                                font-weight:bold;
                            ">${s.trim()}</span>`
                        ).join(' ')
                    }
                </div>
                <div>
                    <strong>Equity:</strong> <span>${acc.equity}</span>
                </div>
            </div>
        </div>
    `;
});

    
    html += `</ul>`;
    rightCol.innerHTML = html;
});