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
            description: "Victoria Government's independent startup agency supporting founders and investors",
            category:'Pre-seed, seed, and series A',
            domain: 'General Industry, Ecosystem Support',
            amount: 'Up to $50,000 equity-free funding and other blended capital',
            grant_link: 'https://launchvic.org/grants/#open',
            metric: '30+ programs for founders, investors, and startups',
            metric_link: 'https://launchvic.org/programs/?program_category=for-founders'
        },
        
        {
            name: 'CSIRO Program for SME',
            link: 'https://www.csiro.au/en/work-with-us/funding-programs/sme/csiro-kick-start/about',
            description: 'Innovate Australian startups and small businesses with CSIRO funding and research access',
            category:'Companies < $10M in turnover or operating expenditure OR < 3 years trading',
            domain: 'General R&D',
            amount: 'CSIRO Kick-Start: $10,000 to $50,000 matching funding',
            grant_link: 'https://www.csiro.au/en/work-with-us/funding-programs/SME/CSIRO-Kick-Start/about',
            metric: 'Innovate to Grow (free 8-week online program)',
            metric_link: 'https://www.csiro.au/en/work-with-us/funding-programs/SME/Innovate-to-Grow'
        },
        {
            name: 'Melbourne Accelerator Program (MAP)',
            link: 'https://www.themap.co/',
            description: "The University of Melbourne's startup accelerator",
            category:'Seed',
            domain: 'General Industry',
            amount: '$20,000 equity-free funding',
            metric: 'Book office hours for founders',
            metric_link: "https://www.themap.co/apply"
        },

        {
            name: 'Stone & Chalk',
            link: 'https://www.stoneandchalk.com.au/',
            description: "The largest innovation community in Australia, supporting startups and scaleups",
            category:'',
            domain: 'General Industry',
            amount: '$1b capital raised by residents and alumni',
            metric: 'Join residency program',
            metric_link: 'https://www.stoneandchalk.com.au/membership'
        },
         
    ];

    const funding_seed_to_A = [
        {
            name: 'Skalata Ventures',
            link: 'https://www.skalata.vc/',
            description: "Help pre-seed founders build the capabilities for long term success",
            category:'Pre-seed',
            domain: 'General Industry',
            amount: 'Up to $300,000, with $500k+$1m+$2m follow-on',
            amount_link: 'https://www.skalata.vc/founders/get-investment',
            metric: 'Founder application',
            metric_link: 'https://www.skalata.vc/contact'
        },
     
        {
            name: 'Startmate',
            link: 'https://startmate.com/',
            description: "A leading Australian accelerator investing 230+ startups across various sectors",
            category:'Pre-seed, seed',
            domain: 'General Tech, B2B, B2C',
            amount: '$25,000, with possible $50,000 - $100,000 follow-on',
            amount_link: 'https://www.startmate.com/spark-fund',
            metric: '2026 Startmate Accelerator Program Register (12 weeks)',
            metric_link: 'https://www.startmate.com/accelerator?utm_source=website&utm_medium=link&utm_campaign=AccW25-website_navigation&utm_content=homepage_hero'
        },
        {
            name: 'Antler',
            link: 'https://www.antler.co/residency/australia',
            description: "Global startup generator and early-stage venture capital firm",
            category:'Pre-seed, seed, series A',
            domain: 'General Industry',
            amount: '$260,000 pre-Seed funding (12% equity stake, $75,000 platform fee)',
            metric: '10-week rediency program',
            metric_link: 'https://www.antler.co/apply#location'
        },
       
        {
            name: 'Boab Ventures',
            link: 'https://boab.ventures/',
            description: "A subsidiary of Artesian Venture Partners, focusing on deeptech startups",
            category:'Seed',
            domain: 'Deeptech',
            amount: '$300,000-$1.6m in first round, with up to $3m follow-on',
            metric: 'Open programs for application',
            metric_link: 'https://boab.ventures/apply/'
        },
        
        {
            name: 'Rocket Seeder',
            link: 'https://www.rocketseeder.com/',
            description: "Supports early-stage startups aligned to the UN's SDGs",
            category:'Pre-seed, seed',
            domain: 'AgTech',
            amount: 'Funding unknown',
            metric: 'AgTech Seeds Program',
            metric_link: "https://www.rocketseeder.com/agtechseeds"
        },

    ];

    const others = [
        {
            name: 'Australian Government Grants',
            link: 'https://help.grants.gov.au//getting-started-with-grantconnect/information-made-easy/current-opportunities/',
            description: 'Grants to support Australia’s jobs, growth and innovation',
            category:'Government Grant',
            domain: 'General Industry',
            amount: 'Varies'
        },

        {
            name: 'Victorian Government Grants and Programs',
            link: 'https://www.vic.gov.au/grants-and-programs',
            description: 'Supports businesses in Victoria',
            category:'Government Grant',
            domain: 'General Industry',
            amount: '$ varies'
            
        },

        {
            name: 'Business Victoria Grants and Programs',
            link: 'https://business.vic.gov.au/grants-and-programs?filter=%7B%22status%22%3A%5B%22opening+soon%22%2C%22open%22%2C%22ongoing%22%5D%7D&page=1',
            description: 'Find various grants and programs to support Victorian businesses',
            category:'Government Grant',
            domain: 'General Industry',
            amount: '$ varies'
        },
  
        {
            name: 'Research and Development Tax Incentive',
            link: 'https://www.industry.gov.au/science-technology-and-innovation/industry-innovation/research-and-development-tax-incentive',
            description: 'Encouraging Australian businesses to invest in research and development',
            category:'Government Grant',
            domain: 'General Industry',
            amount: '$ varies'
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
                        <div class="funding-col amount">
                            ${item.grant_link 
                                ? `<a href="${item.grant_link}" target="_blank" rel="noopener noreferrer">${item.amount ? item.amount : '-'}</a>`
                                : (item.amount ? item.amount : '-')
                            }
                        </div>
                        
                        <div class="funding-col metric">
                            ${item.metric_link 
                                ? `<a href="${item.metric_link}" target="_blank" rel="noopener noreferrer">${item.metric ? item.metric : '-'}</a>`
                                : (item.metric ? item.metric : '-')
                            }
                        </div>
                        </div>
                    </div>
            `;
        });
        return sectionHtml;
    }

    html += renderSection('Government, University & Community', funding_seed);
    html += renderSection('Venture Capital', funding_seed_to_A);
    html += renderSection('Other Public Grants', others);

    container.innerHTML = html;
});