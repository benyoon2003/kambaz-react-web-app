export default function Modules() {
    return (
        <div>
            <button>Collapse All</button>
            <select id="wd-select-one-genre">
                <option selected value="Publish All">
                    Publish All</option>
            </select>
            <button>View Course Notifications</button>
            <button>+ Module</button>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-reading">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating</li>
                            </ul>
                        </li>
                        <li className="wd-slides">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating HTTP server with node.js</li>
                                <li className="wd-content-item">Creating a react application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li className="wd-content-item">Deplpoy the assignment with Netify</li>
                            </ul>
                        </li>
                        <li className="wd-slides">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                                <li className="wd-content-item">Formatting Web content with Headings and</li>
                                <li className="wd-content-item">Formatting content with Lists and Tables</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
