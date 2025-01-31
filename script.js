'use strict';

/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * HEADER ANIMATION
 * When scrolled down to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

if (slider) {
  let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  };

  /**
   * NEXT SLIDE
   */
  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  };

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */
  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSlidableItems;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  };

  sliderPrevBtn.addEventListener("click", slidePrev);

  /**
   * RESPONSIVE
   */
  window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
  });
} else {
  console.error('Slider element not found');
}


'use strict';

// Function to get query parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        id: params.get('id')
    };
}

// Function to display article data
function displayArticleData(articleId) {
    const articles = {
        home01: {
            title: "Managing Work, Life, and Personal Time in 2025: A Guide to the Balancing Act",
            content: `
                <p>It's harder than ever to balance work, life, and personal time in the fast-paced digital world of today. 
                Intentionality and discipline are necessary to achieve balance in the age of remote work, hybrid workplaces, and ubiquitous technology.
                Let's examine doable tactics for preserving balance between work obligations, personal development, and wellbeing as we enter 2025.</p>
                <br><h2>1. In 2025, redefining work-life balance</h2><br>
                <p>Maintaining a clear separation between work and personal life was the traditional definition of work-life balance. But in 2025, with flexible work schedules and constant contact, the lines have become more hazy. Aim for work-life integration rather than a strict balance, where life and work enhance rather than rival one another.</p><br>
                <strong>How Can It Be Attained?</strong><br>
                <ul>
                  <li><strong>Establish definite boundaries:</strong> Establish and observe working hours. Share your availability with your family and coworkers.</li>
                  <li><strong>Use Technology Sensibly:</strong> Schedule breaks, automate chores, and control productivity with apps.</li>
                  <li><strong>Set priorities. Adaptability:</strong> Discuss possibilities for remote or mixed employment that suit your schedule.</li>
                </ul><br>
                <h2>2. Managing Tasks Without Exhaustion</h2><br>
                <p>The emphasis on sustainable output has replaced the hustle culture. In 2025, professional success is heavily reliant on mental health and wellbeing.</p><br>

                <strong>Advice for Preventing Burnout:</strong><br>
                <ul>
                  <li><strong>Follow the 80/20 Rule:</strong> Don't try to do everything at once, but concentrate on the things that will have the most impact.</li>
                  <li><strong>Welcome to Microbreaks:</strong> Five to ten minute breaks help you focus better and feel less tired.</li>
                  <li><strong>Employ AI & Automation:</strong> Free up your time to concentrate on strategic projects by letting intelligent tools do repetitive jobs.</li>
                  <li><strong>When it's necessary, say no:</strong> By turning down pointless meetings or initiatives that cause needless tension, you can save time.</li>
                </ul><br>
                <h2>3. Promoting Self-Care & Personal Time</h2>
                <p>Your job and leisure time are equally vital. Making self-care a priority improves productivity and allows you to recharge.</p>

                <strong>Realistic Strategies for Scheduling Personal Time:</strong>
                <ul>
                  <li><strong>Establish Personal Goals:</strong> Plan your activities, such as reading a book, working out, or picking up a new skill, similarly to how you would a meeting.</li>
                  <li><strong>Digitally disconnect:</strong></strong> Establish screen-free periods to concentrate on family, hobbies, or the outdoors.</li></strong>
                  <li>Spend a few minutes each day practicing mindfulness and meditation to help you become more clear-headed and less stressed.</li>
                </ul><br>

                <h2>4. Improving Social Life & Relationships</h2>
                <p>It takes work to sustain meaningful relationships in an era where digital contacts and remote jobs are prevalent.</p><br>

                <strong>How Can I Keep in Touch?</strong>
                <ul>
                  <li><strong>Put Quality Above Quantity:</strong>Prioritize meaningful, deep connections above a large number of acquaintances.</li>
                  <li><strong>Plan Social Time:</strong>Arrange frequent get-togethers with family and friends, much like you would with meetings at work.</li>
                  <li><strong>Take Part in Community Activities: </strong>Participating in interest groups or volunteering helps people feel like they belong.</li>
                </ul><br>

                <h2>5. Embracing Work-Life Balance in the Future</h2>
                <p>Our approach to balance should change along with work models. These days, companies place a strong emphasis on work-life balance, flexible scheduling, and mental wellbeing. Organize your time by setting priorities consciously and use technology to integrate work and life more intelligently.</p><br>

              <p><strong>Conclusion:</strong> In 2025, success will depend more on working smarter and putting one's own health first than on working harder. You can live a more balanced and satisfying life by establishing boundaries, controlling workloads, and scheduling self-care time.</p>`,
            
        },
        home02: {
            title: "Modern Relationships and Social Media: Getting Around in the Digital Age",
            content: `<p>The emergence of social media has had a significant impact on how we establish and preserve connections. The digital age has completely changed the way we interact with people, from dating applications to virtual friendships. Technology presents new chances for love and friendship, but it also presents problems that may affect our relationships.</p><br>
            <h2>The Development of Online Dating</h2>
            <p>The days of people mostly meeting through mutual friends or random meetings are long gone. It's now commonplace to meet possible partners through dating apps like Tinder, Bumble, and Hinge. Convenience is provided by these platforms, but they also present the paradox of choice—having too many options can cause decision fatigue and make it difficult to commit.</p><br>
            <h2>Social Media and the Dynamics of Relationships</h2>
            <p>Social media sites like Facebook, Instagram, and Twitter have altered the way we communicate with our partners. Though it can also result in pressure to project a "perfect" relationship, sharing moments online can be a means of expressing love. Unrealistic expectations and feelings of insecurity can result from comparing one's relationship to romanticized online representations.</p><br>

            <strong>Social media's negative effects on relationships</strong>
            <ul>
              <li><strong>Jealousy and Insecurity:</strong>Observing a partner's online interactions can occasionally cause uncertainty and miscommunication.</li>
              <li><strong>Privacy Issues:</strong>While some people want to share everything about their relationships, others would rather keep them private. Finding equilibrium is essential.</li>
              <li><strong>Communication Barriers:</strong>Misunderstandings can arise because digital communication lacks body language and tone.</li>
            </ul>

            <h2>Managing Contemporary Partnerships in the Digital Era</h2><br>
            <p>In today's digital world, take into account the following to establish and preserve wholesome relationships:</p>
            <ul>
              <li>
                <strong>Establish Boundaries:</strong>
                Talk to your partner about social media expectations, including what can be posted and how much time can be spent online.
                </li>
              <li>Make in-person interactions a priority. Although online communication is practical, nothing can take the place of in-person discussions. Allow time for offline interactions.</li>
              <li><strong>Communicate Openly:</strong>Take care of issues before they get out of hand. Misunderstandings can be avoided by having constructive conversations about social media use.</li>
              <li><strong>Practice Digital Detox: </strong>Taking pauses from social media can help you avoid online distractions and refocus on relationships in the real world.</li>
            </ul><br>
 
          <h2>In conclusion</h2>
          <p>Although social media is an effective way to stay in touch with loved ones, real human interaction should always be complemented by it rather than replaced. We can better manage relationships in the digital age by establishing limits, encouraging communication, and striking a balance between our online and offline lives.</p>




            `,
            images: [
                "./assets/images/featured-1.png",
                "./assets/images/featured-2.png"
            ]
        },
        home03: {
            title: "Climate Change and You: Easy Ways to Have a Significant Impact",
            content: `<p>One of the most important issues of our day is climate change, yet many people believe they have no control over it. The good news is that little things you do every day can have a big effect. You can lessen your carbon footprint and help create a healthier planet by making thoughtful decisions.</p><br>
            <h2>1. The Three R's That Count: Reduce, Reuse, Recycle</h2>
            <ul>
              <li>
                Choose products with minimal packaging, buy only what you need, and stay away from single-use plastics to <strong>cut down</strong> on waste.
              </li>

              <li>
                Instead of discarding things like old clothes, shopping bags, and glass jars, <strong>reuse</strong> them.
              </li>

              <li>
                <strong></strong>By properly sorting materials and making sure they are clean before discarding them, you can <strong>recycle</strong> responsibly.
              </li>
            </ul><br>

            <h2>2. Use Less Energy at Home</h2>
            <ul>
              <li>Make the switch to LED light bulbs; they last longer and consume 75% less energy than conventional bulbs.</li>
              <li>When not in use, unplug electronics to avoid "phantom" energy usage.</li>
              <li>To save energy and maximize heating and cooling, use a programmable thermostat.</li>
            </ul><br>

            <h2>3. Select Better Modes of Transportation</h2>
            <ul>
              <li>Whenever possible, take public transportation, walk, or ride your bike instead of driving.</li>
              <li>To cut emissions, carpool with friends or coworkers.</li>
              <li>If possible, think about moving to an electric or hybrid car.</li>
            </ul><br>

          <h2>4. Consume Food in a Sustainable Way</h2>
          <ul>
            <li>
              Cut back on meat consumption because raising livestock contributes significantly to greenhouse gas emissions. Investigate plant-based diets or try "Meatless Mondays"
            </li>
            
            <li>
              Select seasonal, locally sourced foods to reduce transportation's carbon footprint.
            </li>
            <li>
              Plan your meals, store food correctly, and compost leftovers to reduce food waste.
            </li>

          </ul><br>

          <h2>5. Encourage the Use of Renewable Energy</h2>
          <ul>
            <li>
              Change to a green energy supplier that gets its electricity from hydro, solar, or wind power if at all possible.
            </li>
            
            <li>
              To produce clean energy for your house, get solar panels.
            </li>
            <li>
              Encourage the implementation of laws that promote sustainable infrastructure and renewable energy.
            </li>

          </ul><br>

            <h2>6. Practice Conscientious Consumption</h2>
            <ul>
              <li>Encourage environmentally conscious companies that put sustainability first.</li>
              <li>Prioritize quality over quantity by purchasing fewer, longer-lasting, higher-quality items.</li>
              <li>Steer clear of fast fashion, which adds to waste and pollution.</li>
            </ul><br>

            <h2>7. Make Your Space Greener by Planting Trees</h2>
            <ul>
              <li>Trees enhance the quality of the air by absorbing carbon dioxide. Take part in neighborhood tree-planting campaigns or plant one in your backyard.</li>
              <li>Even on a balcony, start a little garden to promote biodiversity and cool the city.</li>
            </ul><br>


<h2>8. Raise Awareness and Act</h2>
          <ul>
            <li>Inform yourself and other people about sustainability and climate change.</li>
            <li>Vote for leaders who prioritize climate action, sign petitions, and support environmental policies.</li>
            <li>Encourage organizations and companies to implement more environmentally friendly procedures.</li>
          </ul><br>

          <h2>Concluding remarks</h2>
          <p>Making better decisions in day-to-day living is the key to combating climate change; drastic sacrifices are not necessary. You can contribute to building a more sustainable future for future generations by making modest but significant changes.</p>
            `,
            // images: [
            //     "./assets/images/featured-1.png",
            //     "./assets/images/featured-2.png"
            // ]
        },
        home04: {
            title: "AI-Powered Automation: How Machine Learning is Revolutionizing Industries",
            content: `<p>A new era of automation is being ushered in by the development of artificial intelligence and machine learning, which is changing industries and how we work. AI-powered automation is promoting productivity, creativity, and expansion in a variety of industries, including healthcare and manufacturing. Here are some ways that machine learning is transforming different industries:</p><br>
                      <h2>1. Using AI to Improve Healthcare</h2>
                      <p>Automation driven by AI is improving patient care and expediting administrative duties in the healthcare sector. In order to diagnose illnesses, forecast patient outcomes, and customize treatment regimens, machine learning algorithms examine enormous volumes of medical data. AI, for instance, can spot patterns in medical photos, allowing for the early detection of diseases like cancer. Furthermore, AI-powered chatbots and virtual assistants relieve the strain on medical staff by giving patients timely information and assistance.</p><br>

                      <h2>2.Changing Production and Manufacturing</h2>
                      <p>Automation driven by AI is radically changing the manufacturing industry. By anticipating equipment failures, cutting downtime, and enhancing quality control, machine learning models optimize production processes. Autonomous systems and AI-driven robots carry out dangerous and repetitive tasks, improving productivity and worker safety. AI-powered predictive maintenance makes sure that equipment runs efficiently, reducing downtime and increasing output.</p><br>

                      <h2>3.Transforming Logistics and Supply Chains</h2>
                      <p>Automation driven by AI has enormous benefits for the supply chain and logistics sector. Route planning, demand forecasting, and inventory management are all improved by machine learning algorithms. Artificial intelligence (AI)-powered systems use data from multiple sources, including traffic patterns and weather, to make decisions in real time, guaranteeing on-time delivery and cutting expenses. To further increase efficiency, autonomous cars and drones are also being used for last-mile delivery and transportation.</p><br>

                      <h2>4.Simplifying the Financial Services Industry</h2>
                      <p>Automation driven by AI is simplifying processes and enhancing decision-making in the financial industry. Large volumes of financial data are analyzed by machine learning models to identify fraud, evaluate credit risk, and automate trading tactics. Chatbots and virtual assistants powered by AI offer individualized customer support, responding to questions and giving financial guidance. By handling repetitive tasks like data entry and compliance checks, robotic process automation (RPA) frees up human workers for more strategic roles.</p><br>

                      <h2>5. Progressing E-commerce and Retail</h2>
                      <p>AI-powered automation is being used by the retail and e-commerce sectors to improve customer experiences and streamline processes. In order to provide tailored recommendations that increase sales and customer satisfaction, machine learning algorithms examine consumer behavior and preferences. AI-powered chatbots facilitate a smooth shopping experience by answering questions and offering assistance to consumers. Furthermore, automated inventory management systems minimize stockouts and overstock scenarios by guaranteeing that products are always available when needed.</p><br>

                      <h2>6. Energy and Utilities Innovation</h2>
                      <p>AI-powered automation is being used in the energy and utilities sector to improve sustainability and resource management. Energy efficiency is improved, grid operations are optimized, and patterns of energy consumption are predicted by machine learning models. AI-driven systems lower operating costs and downtime by tracking equipment performance, identifying irregularities, and forecasting maintenance requirements. AI algorithms that optimize energy production and distribution are advantageous for renewable energy sources like wind and solar.</p><br>

                      <h2>In conclusion</h2>
                      <p>Automation driven by AI is transforming all industries and promoting productivity, creativity, and expansion. Businesses can enhance decision-making, streamline operations, and provide better goods and services by utilizing machine learning. AI will become an essential tool for industry in the future as it develops further and has an increasing impact on a variety of sectors. Adopting AI-powered automation is essential to remaining competitive in the fast-paced world of today, not just a fad.</p>
            `,
        },
        home05: {
            title: "The Future of Cybersecurity: Emerging Threats and Cutting-Edge Solutions",
            content: `<p>In the constantly changing world of technology, cybersecurity is both a protector and a battlefield. New threats appear as the digital age progresses, and creative ways to safeguard our data and privacy are created. Here's a look at cybersecurity's future, where obstacles are overcome with creativity and tenacity.</p><br>
            <h2>Emerging Threats: The Dark Side of Progress</h2><br>

              <p>
                <strong>Attacks by Artificial Intelligence:</strong>
                 The capabilities of cybercriminals also continue to evolve in tandem with AI. Attacks powered by AI are able to launch complex phishing campaigns, analyze enormous volumes of data to identify vulnerabilities, and even produce malware that adjusts to security measures. Even the technology that is meant to keep us safe can be used against us.

              </p>
              
              <p>
                <strong>Risks Associated with Quantum Computing:</strong>
                 Although quantum computing offers previously unheard-of processing power, there are serious risks involved. Given that quantum computers can crack codes in a matter of seconds, current encryption techniques might become outdated. Our cryptographic systems need to be completely redesigned to meet this impending threat.

              </p>

              <p><strong>IoT Weaknesses</strong>
                 Convenience is provided by the proliferation of Internet of Things (IoT) devices, but the attack surface is also expanded. Every gadget, from connected cars to smart homes, is a possible point of entry for cybercriminals. Maintaining the security of these networked devices is extremely difficult.

              </p>

              <p>
                <strong>Deepfake Fraud:</strong>
                 Deepfakes—AI-produced audio and video that imitate real people—are getting more realistic and challenging to identify. Malicious uses of these include disseminating false information, committing fraud, and swaying public opinion. The emergence of deepfakes adds a new level of risk to cybersecurity.

              </p><br>

              <h2>Innovative Solutions</h2>
              <p><strong>Agentic AI: </strong>From a threat detection tool to fully integrated systems with autonomous defense capabilities, artificial intelligence is changing. AI is able to foresee, recognize, and react to threats by analyzing enormous volumes of data in real-time1.</p>
              <p><strong>Zero-Trust Architectures:</strong> Based on the tenet of "never trust, always verify," this security architecture makes sure that users and devices are continuously authenticated and validated.</p>
              <p><strong>Enhanced Cloud Security: </strong>Protecting cloud environments has become a top responsibility as a result of the move to cloud-based infrastructure.</p>
              <p>Monitoring and evaluating user behavior to identify irregularities and possible dangers is known as behavioral analytics.</p>
              <p><strong>Cooperation and Information Exchange: </strong>In order to improve their overall cybersecurity resilience, organizations are working together more and more and exchanging information.</p><br>

              <h2>In conclusion</h2>
              <p>The field of cybersecurity is dynamic and constantly changing. Organizations may strengthen their defenses against the advanced cyberthreats of the future by keeping up with developing threats and using state-of-the-art solutions.</p>

            `,
        },
        // note: sports section start here
        sports01: {
            title: "Sport's Effect on Mental Health: How Exercise Enhances Well-Being",
            content: ``,
        },
        sports02: {
            title: "",
            content: ``,
        },
        sports03: {
            title: "",
            content: ``,
        },
        sports04: {
            title: "",
            content: ``,
        },
        sports05: {
            title: "",
            content: ``,
        },
        

    };

    const article = articles[articleId];

    if (article) {
        // Set article title
        document.getElementById('article-title').textContent = article.title;
        // Set article content
        document.getElementById('article-content').innerHTML = article.content; // Use innerHTML to parse HTML
        
        // Inject images dynamically
        const articleImagesContainer = document.getElementById('article-images');
        articleImagesContainer.innerHTML = ''; // Clear previous images
        article.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = article.title;
            img.classList.add('article-image');
            articleImagesContainer.appendChild(img);
        });
    } else {
        document.getElementById('article-title').textContent = "Article not found";
        document.getElementById('article-content').textContent = "";
    }
}


// Add global CSS styles using a <style> element
const style = document.createElement('style');
style.innerHTML = `
    #article-title {
        color: #0073e6;
        font-size: 2em;
        margin-bottom: 15px;
    }

    #article-content {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin-bottom: 20px;
    }

    #article-content h2 {
        color: #0a0908;
        font-size: 1.2em;
    }

    #article-content p {
        line-height: 28px;
        padding: 2px;
        color: #49111c;
        padding:10px;
    }

    .article-image {
        margin: 10px;
        width: 100%;
        max-width: 600px;
        border-radius: 8px;
    }

    #article-images {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    #article-content ul {
        list-style-type: disc;
        margin-left: 20px;
        padding-left: 10px;
    }

    #article-content li {
        line-height: 1.8;
        color: #49111c;
        padding: 5px 0;
        position: relative;
    }

    #article-content li::before {
        content: "•";
        position: absolute;
        left: -20px;
        color: #49111c;
        font-size: 1.5em;
        top: 0;
    }

    /* Force style on strong tags */
    #article-content strong {
        color: #49111c;  /* Change the text color */
        font-weight: bold !important;  /* Override the default bold */
        font-style: normal;  /* Add italic style if needed */
    }
`;


// Append the style to the document's head
document.head.appendChild(style);

// Get query parameters and display article data
const queryParams = getQueryParams();
displayArticleData(queryParams.id);
