const job_list = document.querySelector('.job-list');
let show_all = false


const jobs = [
    {title: 'Account Executive', dept: 'Sales', location: 'Remote Americas(East)'},
    {title: 'Frontend Engineer', dept: 'Engineering', location: 'Remote'},
    {title: 'Search Marketing Manager', dept: 'Marketing', location: 'Remote'},
    {title: 'Staff Product Manager(Mobile)', dept: 'Product & Design', location: 'Remote EMEA'},
    {title: 'Senior GRC Analyst', dept: 'Security & IT', location: 'Remote Americas(East)'},
    {title: 'Backend Engineer', dept: 'Engineering', location: 'Remote'},
    {title: 'Network Engineer', dept: 'Engineering', location: 'Remote'},
    {title: 'Graphic Designer', dept: 'Engineering', location: 'Remote'},
    {title: 'SEO Specialist', dept: 'Marketing', location: 'Remote Americas(East)'},
    {title: 'Sales Manager', dept: 'Sales', location: 'Remote Americas(East)'},
    {title: 'Quality Assurance', dept: 'Engineering', location: 'Remote'}
]

const createComponent = (title, dept, location) => {
    const element = document.createElement('div');
    element.classList.add('job')
    element.innerHTML = `
        <div class='title'>${title}</div>
        <div>${dept}</div>
        <div>
            <img class='location' src="https://img.icons8.com/ios/50/null/marker--v1.png"/>
            ${location}
        </div>
        <div class='arrow'><img src="https://img.icons8.com/windows/32/8C8A99/long-arrow-right.png"/></div>
    `

    return element
}

const showComponent = (range) => {
    const jobs_to_show = jobs.slice(0, range)
    jobs_to_show.forEach(({title, dept, location}) => {
        const element = createComponent(title, dept, location);
        job_list.appendChild(element)
    })
}

if (!show_all) {
    showComponent(5)
}


document.querySelector('.see-all').addEventListener('click', (e) => {
    e.preventDefault()
    
    if (e.target.innerHTML === 'See all positions') {
        show_all = true;
        job_list.innerHTML = '';
        showComponent(jobs.length)
        e.target.innerHTML = 'See fewer'
    } else {
        show_all = false;
        job_list.innerHTML = '';
        showComponent(5)
        e.target.innerHTML = 'See all positions'
    }  
    
});

