import profile from "./assets/profile pic.png"
function Hero(){
    return(
        <div className="pro">
            <section id="home">
            <div className="img-con">
                <img src={profile} alt="profile" className="profile-img"/>
            </div>
            <h1 id="hh1">NAVEENKUMAAR BALAKRISHNAN</h1>
            <h3 id="hh3">SOFTWARE DEVELOPER</h3>

            <p id="hp">
            <h3 className="kw" id="heroh3">PROFESSIONAL SUMMARY</h3>
            <span className="kw">Software Developer</span> with a strong foundation in{" "}
            <span className="kw">Java, Python, SQL, JDBC, Object-Oriented Programming</span>.

            Skilled in <span className="kw">software development, database management </span> 
            and problem-solving through hands-on projects and practical learning.

            Familiar with modern technologies such as{" "}
            <span className="kw">React JS and Spring Boot</span>.

            Eager to contribute to innovative software solutions while continuously enhancing technical expertise and professional growth.
            </p>
            </section>
        </div>
    );
}

export default Hero;