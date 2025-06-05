// Render a big "Funding" section with three subsections

document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    if (!main) return;

    // Create or select the container
    let container = document.getElementById('funding-section');
    if (!container) {
        container = document.createElement('div');
        container.id = 'funding-section';
        container.style.width = '100%';
        main.insertBefore(container, main.firstChild);
    }

    // --- Data Arrays ---
    const funding_seed = [
        {
            name: 'LaunchVIC',
            link: 'https://launchvic.org/',
            description: "Victoria's startup agency supporting founders and investors.",
            domain: 'General Tech, Ecosystem Support',
            stage: 'Pre-seed, Seed',
            equity: 'No (grants, programs)'
        },
        {
            name: 'Cremorne Digital Hub',
            link: 'https://cremornedigitalhub.com.au/en-au/home',
            description: "A Victorian Government initiative to grow the tech sector.",
            domain: 'Digital, Tech, Innovation',
            stage: 'Pre-seed, Seed',
            equity: 'No (hub, programs)'
        },
        {
            name: 'CSIRO Kick-Start',
            link: 'https://www.csiro.au/en/work-with-us/funding-programs/sme/csiro-kick-start/about',
            description: 'Supports Aussie startups and small business with CSIRO funding and research access.',
            amount: 'Matching funding of $10,000 to $50,000',
            status: 'Open'
        },
        {
            name: 'Melbourne Accelerator Program (MAP)',
            link: 'https://www.themap.co/',
            description: "The University of Melbourne's startup accelerator.",
            domain: 'General Tech, University Startups',
            stage: 'Pre-Seed, Seed',
            equity: 'No'
        },
        {
            name: 'Rocket Seeder',
            link: 'https://www.rocketseeder.com/',
            description: "Supports early-stage startups aligned to the UN's SDGs.",
            domain: 'Agri-food, Sustainability',
            stage: 'Pre-seed, Seed',
            equity: 'No'
        }
    ];

    const funding_seed_to_A = [
        {
            name: 'Techstars Melbourne',
            link: 'https://www.techstars.com/accelerators/melbourne',
            description: "Part of the global Techstars network, supporting startups in Melbourne.",
            domain: 'General Tech, B2B, B2C',
            stage: 'Pre-Seed, Seed',
            equity: 'Equity taken'
        },
        {
            name: 'Skalata Ventures',
            link: 'https://www.skalata.vc/',
            description: "Invests in and supports early-stage Australian startups.",
            domain: 'General Tech, B2B, B2C',
            stage: 'Seed, Series A',
            equity: 'Equity taken'
        },
        {
            name: 'Boab Ventures',
            link: 'https://boab.ventures/',
            description: "A subsidiary of Artesian Venture Partners, focusing on deeptech.",
            domain: 'AI, Deeptech',
            stage: 'Seed, Series A',
            equity: 'Equity taken'
        },
        {
            name: 'Antler',
            link: 'https://www.antler.co/residency/australia',
            description: "Global startup generator and early-stage venture capital firm.",
            domain: 'General Tech, B2B, B2C',
            stage: 'Pre-seed, Seed, Series A',
            equity: 'Equity taken'
        },
        {
            name: 'Startmate',
            link: 'https://startmate.com/',
            description: "A leading Australian accelerator supporting startups across various sectors.",
            domain: 'General Tech, B2B, B2C',
            stage: 'Seed, Series A',
            equity: 'Equity taken'
        }
    ];

    const others = [
        
        {
            name: 'Business Victoria Grants and Programs',
            link: 'https://business.vic.gov.au/grants-and-programs?filter=%7B%22status%22%3A%5B%22opening+soon%22%2C%22open%22%2C%22ongoing%22%5D%7D&page=1',
            description: 'Find various grants and programs to support Victorian businesses',
            amount: 'Varies',
            status:'Open'
        },
        {
            name: 'Victorian Government Grants and Programs',
            link: 'https://www.vic.gov.au/grants-and-programs',
            description: 'Supports businesses in Victoria',
            amount: 'Varies',
            status:'Open'
        },
        {
            name: 'Research and Development Tax Incentive',
            link: 'https://www.industry.gov.au/science-technology-and-innovation/industry-innovation/research-and-development-tax-incentive',
            description: 'Encouraging Australian businesses to invest in research and development',
            amount: 'Varies',
            status:'Open'
        }
    ];

    // --- Render Section ---
    let html = `<h2>Funding</h2>`;

    // Helper function to render a section
    function renderSection(title, arr) {
        let sectionHtml = `<h3>${title}</h3>`;
        arr.forEach(item => {
            sectionHtml += `
                <div class="event">
                    <h4>
                        <a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.name}</a>
                        <span style="font-weight: normal;"> &mdash; ${item.description}</span>
                    </h4>
                    <div class="funding-row">
                        <div class="funding-col domain"><strong>Domain:</strong> ${item.domain ? item.domain : '-'}</div>
                        <div class="funding-col amount"><strong>Amount:</strong> ${item.amount ? item.amount : '-'}</div>
                        <div class="funding-col equity"><strong>Equity:</strong> ${item.equity ? item.equity : '-'}</div>
                    </div>
                </div>
            `;
        });
        return sectionHtml;
    }

    html += renderSection('Pre-Seed and Seed', funding_seed);
    html += renderSection('Seed and Series A', funding_seed_to_A);
    html += renderSection('Other Public Grants', others);

    container.innerHTML = html;
});