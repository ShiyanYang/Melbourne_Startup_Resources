// This file will handle fetching and displaying Melbourne startup-related events.

document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('events');

    // Sample data for demonstration purposes
    const events = [
        {
            title: 'Melbourne Startup Meetup',
            date: '2023-11-15',
            location: 'Melbourne Convention Centre',
            description: 'Join us for a networking event with local startups and entrepreneurs.'
        },
        {
            title: 'Tech Innovation Workshop',
            date: '2023-11-20',
            location: 'The Cluster',
            description: 'A hands-on workshop focusing on the latest tech innovations.'
        },
        {
            title: 'Pitch Night',
            date: '2023-12-01',
            location: 'Startup Hub',
            description: 'Watch startups pitch their ideas to a panel of investors.'
        }
    ];

    function displayEvents() {
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');

            eventElement.innerHTML = `
                <h2>${event.title}</h2>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
            `;

            eventsContainer.appendChild(eventElement);
        });
    }

    displayEvents();
});