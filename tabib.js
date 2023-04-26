const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(req, res) =>
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Portfolio</title>
        <link rel="stylesheet" href="tabib.css">
    </head>
    
    <body>
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section id="home">
                <h1>Welcome to my Portfolio</h1>
                <p>Hi, I am Tabib Khan and I am a developer.</p>
                <a href="#projects">View my Projects</a>
            </section>
            <section id="about">
                <h2>About Me</h2>
                <img src="my photo.jpeg" alt="Your Photo">
                <p>I am a developer with 1 year of experience in the field. I am proficient in HTML, CSS, JS.</p>
            </section>
            <section id="projects">
                <h2>My Projects</h2>
                <div class="project">
                    <h3>Project 1</h3>
                    <p>A brief description of project 1.</p>
                    <a href="#">View Project</a>
                </div>
                <div class="project">
                    <h3>Project 2</h3>
                    <p>A brief description of project 2.</p>
                    <a href="#">View Project</a>
                </div>
            </section>
            <section id="contact">
                <h2>Contact Me</h2>
                <form action="submit-form.php" method="post">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                    <input type = button value="Send Message">
                </form>
            </section>
        </main>
        <footer>
            <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        </footer>
    </body>
    
    </html>

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});