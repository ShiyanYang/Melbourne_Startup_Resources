document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('events');

    const events = [
        {
            title: 'Build or Buy',
            date: '2025-06-18',
            location: 'Cremone Digital Hub',
            price: 'Free',
            description: 'Explore how Orgs are supercharging partnering with startups, accelerators, and collaborators to solve complex problems, faster',
            link: 'https://cremornedigitalhub.com.au/events',
            organizer: 'Cremone Digital Hub'
        },
        {
            title: 'Victoria Startup GALA',
            date: '2025-07-24',
            location: 'CENTREPIECE at Melbourne Park',
            price: '$475',
            description: "Celebrating Victoria's thriving startup ecosystem at LaunchVic's annual gala event",
            link: 'https://events.humanitix.com/2025-victorian-startup-gala',
            organizer: 'LaunchVIC'
        },
        {
            title: 'ANZ Startup Calendar',
            description: 'ANZ Startup Calendar is a community-driven calendar that lists startup-related events across Australia and New Zealand',
            link: 'https://lu.ma/ANZStartupCalendar?tag=melbourne',
            organizer: 'lu.ma'
        },
        {
            title: 'Melbourne Startup Pitch, Networking, and Workshop on Eventbrite',
            description: "Pitch and Network with Melbourne's vibrant startup community. Find events, workshops, and networking opportunities",
            link: 'https://www.eventbrite.com.au/d/australia--melbourne/startup/',
            organizer: 'Eventbrite'
        },
        {
            title: 'Melbourne Startup Events on Meetup',
            description: "Connect with Melbourne's startup community through Meetup",
            link: 'https://www.meetup.com/find/?keywords=startup&location=au--Melbourne&source=EVENTS',
            organizer: 'Meetup'
        }
    ];

    // Sort by date if available
    events.sort((a, b) => {
        if (a.date && b.date) return new Date(a.date) - new Date(b.date);
        if (a.date) return -1;
        if (b.date) return 1;
        return 0;
    });
    let html = '<h2>Coming Startup Events</h2>';
    events.forEach(event => {
        html += `
            <div class="event">
                <h3>
                    <a href="${event.link}" target="_blank" rel="noopener noreferrer">${event.title}</a>
                    ${event.description ? `<span style="font-weight: normal;"> &mdash; ${event.description}</span>` : ''}
                </h3>
                <p>
                    ${event.date ? `<strong>Date:</strong> <span style="
                        display:inline-block;
                        background:#e0e7ef;
                        color:#234;
                        border-radius:8px;
                        padding:2px 8px;
                        margin-right:5px;
                        font-size:0.9em;
                        font-weight:bold;
                    ">${event.date}</span>` : ''}
                    ${event.location ? `<strong>Location:</strong> ${event.location}<br>` : ''}
                    ${event.price ? `<strong>Price:</strong> ${event.price}<br>` : ''}
                    <strong>Organizer:</strong> ${event.organizer}
                </p>
            </div>
        `;
    });

    eventsContainer.innerHTML = html;
});