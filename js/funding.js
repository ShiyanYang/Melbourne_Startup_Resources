// Render a big "Funding" section with three subsections

document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    if (!main) return;

    // Create or select the container
    let container = document.getElementById('funding-section');
  

    // --- Data Arrays ---
    const funding_seed = [
        {
            name: 'LaunchVIC',
            link: 'https://launchvic.org/',
            description: "Victoria's independent startup agency supporting founders and investors",
            category:'Government Agency',
            domain: 'General Tech, Ecosystem Support',
            amount: 'Grants for startups, programs, and investors',
            equity: 'No Equity (through CivVic Lab)'
        },
        {
            name: 'Cremorne Digital Hub',
            link: 'https://cremornedigitalhub.com.au/en-au/home',
            description: "A Victorian Government initiative to grow the tech sector",
            category:'Government Agency',
            domain: 'Digital, Tech, Innovation',
            amount: 'Funding N/A',
            equity: 'No equity'
        },
        {
            name: 'CSIRO Kick-Start',
            link: 'https://www.csiro.au/en/work-with-us/funding-programs/sme/csiro-kick-start/about',
            description: 'Innovate Australian startups and small businesses with CSIRO funding and research access',
            category:'Government Agency',
            domain: 'General R&D',
            amount: '$10,000 to $50,000 matching funding',
            equity: 'No equity'
        },
        {
            name: 'Melbourne Accelerator Program (MAP)',
            link: 'https://www.themap.co/',
            description: "The University of Melbourne's startup accelerator",
            category:'University Accelerator',
            domain: 'General Industry',
            amount: '$20,000 equity-free funding',
            equity: '300m+ investment raised',
            application: "https://www.themap.co/apply"
        },
        {
            name: 'Rocket Seeder',
            link: 'https://www.rocketseeder.com/',
            description: "Supports early-stage startups aligned to the UN's SDGs",
            category:'Venture Capital',
            domain: 'AgTech',
            amount: '$Undisclosed',
            equity: 'US$60k'
        }
    ];

    const funding_seed_to_A = [
        {
            name: 'Startmate',
            link: 'https://startmate.com/',
            description: "A leading Australian accelerator supporting startups across various sectors",
            category:'Venture Capital',
            domain: 'General Tech, B2B, B2C',
            amount: '$25,000 matching funding',
            equity: '3.5b profilo value'
        },
        {
            name: 'Skalata Ventures',
            link: 'https://www.skalata.vc/',
            description: "Invests in and supports early-stage Australian startups",
            category:'Venture Capital',
            domain: 'General Industry',
            amount: 'Up to $300,000',
            equity: ''
        },
        {
            name: 'Boab Ventures',
            link: 'https://boab.ventures/',
            description: "A subsidiary of Artesian Venture Partners, focusing on deeptech.",
            category:'Venture Capital',
            domain: 'AI, Deeptech',
            amount: '$Undisclosed',
            equity: 'AUM 1b'
        },
        {
            name: 'Antler',
            link: 'https://www.antler.co/residency/australia',
            description: "Global startup generator and early-stage venture capital firm.",
            category:'Venture Capital',
            domain: 'General Tech, B2B, B2C',
            amount: '$120,000 in funding',
            equity: 'Equity taken'
        }

    ];

    const others = [
        
        {
            name: 'Business Victoria Grants and Programs',
            link: 'https://business.vic.gov.au/grants-and-programs?filter=%7B%22status%22%3A%5B%22opening+soon%22%2C%22open%22%2C%22ongoing%22%5D%7D&page=1',
            description: 'Find various grants and programs to support Victorian businesses',
            category:'Government Grant',
            amount: 'Varies',
            status:'Open'
        },
        {
            name: 'Victorian Government Grants and Programs',
            link: 'https://www.vic.gov.au/grants-and-programs',
            description: 'Supports businesses in Victoria',
            category:'Government Grant',
            amount: 'Varies',
            status:'Open'
        },
        {
            name: 'Research and Development Tax Incentive',
            link: 'https://www.industry.gov.au/science-technology-and-innovation/industry-innovation/research-and-development-tax-incentive',
            description: 'Encouraging Australian businesses to invest in research and development',
            category:'Government Grant',
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
                        <div class="funding-col category">${item.category ? item.category : '-'}</div>
                        <div class="funding-col domain">${item.domain ? item.domain : '-'}</div>
                        <div class="funding-col amount">${item.amount ? item.amount : '-'}</div>
                        <div class="funding-col equity">${item.equity ? item.equity : '-'}</div>
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