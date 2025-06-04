// This file will handle displaying Melbourne startup-related grants.

document.addEventListener('DOMContentLoaded', function() {
    const grantsSection = document.getElementById('grants');
    if (!grantsSection) return;

    const grants = [
        {
            name: 'LaunchVIC Open Grant',
            link: 'https://launchvic.org/grants/',
            description: 'LaunchVic funds programs and investors supporting Victorian startup growth',
            amount: 'Up to $50,000 equity-free funding',
            status: 'No current open grants'
        },
        {
            name: 'CSIRO Kick-Start',
            link: 'https://www.csiro.au/en/work-with-us/funding-programs/sme/csiro-kick-start/about',
            description: 'Supports Aussie startups and small business with CSIRO funding and research access.',
            amount: 'Matching funding of $10,000 to $50,000',
            status: 'Open'
        },
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
            link: ' https://www.industry.gov.au/science-technology-and-innovation/industry-innovation/research-and-development-tax-incentive',
            description: 'Encouraging Australian businesses to invest in research and development',
            amount: 'Varies',
            status:'Open'
        }
    ];

    let html = `<h2>Public Grants</h2>`;
    grants.forEach(grant => {
        html += `
            <div class="event">
                <h3><a href="${grant.link}" target="_blank">${grant.name}</a></h3>
                <p><strong>Purpose:</strong> ${grant.description}</p>
                <p><strong>Amount:</strong> ${grant.amount}</p>
                <p><strong>Status:</strong> ${grant.status}</p>
            </div>
        `;
    });
    grantsSection.innerHTML = html;
});