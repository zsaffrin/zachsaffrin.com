
<div class="mx4">
    <div class="mb3">
        <div class="h2 strong mb2">OverEasy</div>
        <a href="http://overeasy.zachsaffrin.com" target="_blank" class="button-toast inverted">Project Page</a>
        <a href="https://github.com/zsaffrin/overeasy" target="_blank" class="button-black inverted">GitHub</a>
    </div>
    <div class="mb4">
        <p>OverEasy is my very own web structure and style framework that I built from scratch.</p>

        <div class="container mb4">
            <h3 class="caps">Ok... but why?</h3>
            <p>Surely there is already an inexhaustible wealth of frameworks already freely available on the web that could solve any possible approach, right? I could have fancy, modern, responsive sites up and running in no time with minimal effort by using any number of tools. But as a self-taught developer, I encountered several reasons to start from scratch.</p>
            <ul class="list-disc pr4 mb2">
                <li>There are in fact lots of great tools out there for a great many approaches... but not necessarily mine. When using other frameworks, I would constantly be struggling to adapt the idea in my head to language understood by the framework. Sometimes I simply couldn&apos;t do what I was trying to do, either because I didn&apos;t understand the mechanisms I was working with or the tool I was using simply wasn&apos;t designed to do what I was trying to make it do.</li>
                <li>It taught me how to work with a grid system, which meant understanding the box model, draw behaviors in various browsers, and the layout logic of CSS.</li>
                <li>It taught me how to work with media breakpoints for responsive web design. What does mobile-first mean and how do I both design and test for varying display sizes? I had to learn how to objectively view my design from a user experience and accessibility point of view.</li>
                <li>It taught me how to compartmentalize and build a packaged program/application. I wanted to be able to plug this functionality into a new project without simply copying/pasting file contents and creating the same folder structure over and over. By making it easy to deploy for me, I would learn how to make it portable for other developers to use.</li>
                <li>It taught me how to use versioning and repository tools like GitHub and BitBucket. I learned how to be more responsible with my planning, deployment, and handling of code versions and updates. I could no longer afford to make hasty experimental changes and needed to learn how to map out target objectives ahead of time and work according to a plan.</li>
                <li>I get to contribute something back to the community. I learned basically everything I needed to build this framework by picking apart other developers&apos; work and hopefully someone can learn something useful from mine.</li>
                <li>And don&apos;t call me Shirley</li>
            </ul>
            <p>OverEasy more or less represents the current state of my basic web development techniques. It is both the result of trying, testing, and breaking web design concepts over the years but is also my proving ground to try out new ideas and concepts to see how they play out when actually in use. I learn by doing, so OverEasy is my learning in action.</p>
            
            <h3 class="caps">Great! How does it work?</h3>
            <p>OverEasy is an Object-Oriented CSS (OOCSS) framework. It is a thorough collection of small, specific CSS style utilities to be used in combination to achieve the desired result. The mixing of these utilities is done inline on your HTML code, so there is very little CSS editing involved in setting up even an entire website. In addition, thanks to Node,js, Grunt, and Sass, specific opinionated configuration settings, from whitespace margins/padding to fonts and text sizes to colors, are based on variables that can be easily modified while the framework responds automatically.</p>
            <p>For example:</p>
            <p>
                <code><span class="attribute">class=</span><span class="value">&quot;mt1&quot;</span></code>
                &nbsp;: Sets margin-top to the value of the <code class="attribute">$space-1</code> variable
            </p>
            <p>
                <code><span class="attribute">class=</span><span class="value">&quot;px3&quot;</span></code>
                &nbsp;: Sets x-axis (left and right) paddings both to the value of the <code class="attribute">$space-3</code> variable
            </p>
            <p>
                <code><span class="attribute">class=</span><span class="value">&quot;bluecorn&quot;</span></code>
                &nbsp;: Sets the text color of the element to the value of your color named "bluecorn" set in the <code class="attribute">$colors</code> variable
            </p>
            <p>
                <code><span class="attribute">class=</span><span class="value">&quot;mt1 p3 center toast bg-banana&quot;</span></code>
                &nbsp;: <code class="attribute">$space-1</code> of top margin, <code class="attribute">$space-3</code> of padding on all four sides, text-align center, "toast" color text, and "banana" color background.
            </p>
            <p>There is a column-based grid with a variable number of columns - change one variable number and it changes from a 12-column grid framework to a 16-column grid framework just like that! Use any number of columns you prefer. It has buttons, borders, text, background, and hover/focus color utilities that all autogenerate from one key-value pair where you input your color names and values. It has Flex box support and code example formatting. It is designed to be totally flexible and unopinionated, allowing you to use the tools in any manner or combination suits whatever project you&apos;re working on.</p>
            
            <h3 class="caps">I&apos;m intrigued. Where do I find it?</h3>
            <ul>
                <li><a href="http://overeasy.zachsaffrin.com" target="_blank" class="button-toast inverted">Project Page</a> for documentation and examples of usage</li>
                <li><a href="https://github.com/zsaffrin/overeasy" target="_blank" class="button-black inverted">GitHub</a> to browse, clone, or fork the source code and use for your own project</li>
            </ul>

            <h3 class="caps mt4">Inspiration and Resources</h3>
            <p>I developed OverEasy to the state it is today based on several years of my own development. I could not have done this without the multitude of great examples others have created from which I could learn. Here are just a few of the great resources that helped get me to this point (in no particular order):</p>

            <div class="p1">
                <div class="h5 caps strong blueberry">Frameworks</div>
                <ul class="small">
                    <li><a href="http://www.basscss.com/" target="_blank" class="nostyle bold apple hf-strawberry">BassCSS</a> - Modular OOCSS framework, decentralized as a set of Node packages</li>
                    <li><a href="https://melody.molovo.co/" target="_blank" class="nostyle bold apple hf-strawberry">Melody</a> - The original version of this framework taught me a lot about relative grid sizing structure</li>
                    <li><a href="http://getskeleton.com/" target="_blank" class="nostyle bold apple hf-strawberry">Skeleton</a> - This boilerplate taught me a lot about basic Responsive design techniques</li>
                    <li><a href="http://purecss.io/" target="_blank" class="nostyle bold apple hf-strawberry">Pure</a> - A great lightweight modular toolkit</li>
                    <li><a href="http://960.gs/" target="_blank" class="nostyle bold apple hf-strawberry">960.gs</a> - One of my first really valuable lessons in layout grids</li>
                </ul>
            </div>

            <div class="p1">
                <div class="h5 caps strong blueberry">Readings</div>
                <ul class="small">
                    <li><a href="http://everydaydesigner.net/development/i-build-my-own-tools-and-you-should-too" class="nostyle bold apple hf-strawberry">I build my own tools and you should too</a> by James Dinsdale - Reinforcement that I wasn&apos;t crazy to try this</li>
                </ul>
            </div>

        </div>


    </div>
</div>
