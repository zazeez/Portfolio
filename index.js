// clicking on Zachary Azeez hides the html in the content-wrap and displays content-wrap html content
function zachary() {
    $('.content-wrap').show();
};

// clicking Zachary hides current content and shows the content-wrap
function clickZachary() {
    $('.name-nav').on('click', function(event){
        zachary();
        $('.about-js').html('');
        $('.projects-js').html('');
      });
}

// clicking on projects hides the html in the content-wrap and displays projects html content
function projects() {
    let html =
    `
    <section class="project-box">
        <img src="https://cdn.shopify.com/s/files/1/0102/0939/4769/files/Screen_Shot_2019-12-24_at_11.08.44_AM.png?v=1577138948" alt="Katy Keto quiz screenshot" style="width:100%;">
    <section class="project-info">
        <h3>Katy Keto Quiz App</h3>
    <section class="tech-icons">
        <img src="https://cdn.shopify.com/s/files/1/0102/0939/4769/files/icons8-javascript-50.png?v=1577140249" alt="JavaScript icon" style="width:25px;" id="js-icon">
        <img src="https://cdn.shopify.com/s/files/1/0102/0939/4769/files/icons8-jquery-50.png?v=1577140249" alt="JQuery icon" style="width:25px;">
    </section>
    <p>
        The Katy Keto Quiz allows you to answer 5 questions related to doign the Keto diet well. At the end of the quiz you receive your final score and the ability to try again. 
        Future development may involve assigning Katy Keto points to a user's account who passes the test answering all 5 questions correctly. 
        These points will allow the user to save money on their next purchase.
    </p>
    <section class="home-links">
        <a href="https://github.com/zazeez/QA" target="_blank">
            <button id="view-code-button" type="button" class="btn-purple">View code</button>
        </a>
        <a href="https://zazeez.github.io/QA/" target="_blank">
            <button id="view-project-button" type="button" class="btn-green">View project</button>
        </a>
    </section>
    </section>
    </section>
    `
    $('.projects-js').html(html);
};

// run projects and hide current content
function clickProjects() {
    $('.projects-nav').on('click', function(event){
        projects();
        $('.content-wrap').hide();
        $('.about-js').html('');
      });
}

// clicking about hides the html in content-wrap and displays the about html
function about() {
    let html =
    `
    <p>
    I build teams of people with shared goals that include having fun, serving
    others and making profits. I hire for a combination of culture fit and raw talent. My teams are
    A players. We work hard, play hard and share in the rewards. I'm passionate about delivering
    a clean, easy to use experience for customers. I'm currently researching and developing pipelines 
    to customize the APIs of SaaS products we use to create an exceptional experience for customers.
    </p>
    <br/>
    <p>
    A bit more about me. I'm a father of 3. My wife and I have previous education training and
    homeschool our 3 monkeys. Our school has a specific focus on outdoor adventures, science and the arts.
    I’m also a passionate long time rock climber and surfer and I love continually training and 
    pushing my limits in both of these sports. My favorite surf spot is Cloudbreak in Fiji, and I hope 
    to one day establish new hard climbing routes on Mt Thor in Baffin Island, one of the world’s 
    largest and most adventurous big walls.
    </p>
    <br/>
    <p>
    I am NOT currently hiring, but I can be contacted using the following links:
    </p>
    <section class="about-icons">
    <a href="mailto:zach@katyketo.com">
    <img src="https://cdn.shopify.com/s/files/1/0102/0939/4769/files/email-icon.png?v=1577093857" alt="email icon" style="height:50px;">
    </a>
    <a href="https://github.com/zazeez/">
    <img src="https://cdn.shopify.com/s/files/1/0102/0939/4769/files/GitHub-Mark-64px.png?v=1577091960" alt="github logo" style="height:50px;">
    </a>
    <a href="https://www.linkedin.com/in/zach-azeez-ab92b05a/">
    <img src="https://cdn.shopify.com/s/files/1/0102/0939/4769/files/LI-In-Bug.png?v=1577091974" alt="linkedin logo" style="height:50px;">
    </a>
    </section>
    `
    $('.about-js').html(html);

};

//run about and hide current content
function clickAbout() {
    $('.about-nav').on('click', function(event){
        about();
        $('.content-wrap').hide();
        $('.projects-js').html('');
      });
}

//booting up the event listeners
function bootUp() {
    clickZachary();
    clickProjects();
    clickAbout();
  };
  
  $(bootUp);