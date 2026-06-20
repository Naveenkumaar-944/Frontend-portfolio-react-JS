
function Projects(){
    return(
        <div className="projects">
            <section id="project">
            <h2 className="ph2">PROJECTS</h2>
            <div className="pj">
            <h3 className="ph3">Hospital Management System | Java, JDBC, MySQL, OOP</h3>
            <ul>
                <li>Developed a Hospital Management System to manage patients, doctors, and appointments. </li>
                <li>Implemented CRUD operations using JDBC and MySQL for efficient data storage and retrieval. </li>
                <li>Applied OOP principles to build a scalable and maintainable application. </li>
            </ul>
            </div>
            <div className="pj">
            <h3 className="ph3">Enterprise Data Warehouse | PostgreSQL, ETL</h3>
            <ul>    
                <li>Built an end-to-end Data Warehouse using Medallion Architecture (Bronze → Silver → Gold layers). </li>
                <li>Developed ETL pipelines to extract, transform, and load data from multiple source systems. </li>
                <li>Designed Star Schema with Fact and Dimension tables to optimize analytical queries.</li> 
            </ul>
            </div>
            </section>
        </div>
    );
}

export default Projects;