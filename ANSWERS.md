# ANSWERS.md

### Project Structure

Due to time constraints, I chose to use a boilerplate I liked to use for microprojects in the past. It uses gulp, Sass, basic templating, and Skeleton for grid styling.
It is not production ready by all means, and some quick improvements I might have chosen would be to add autoprefixer and some linting tasks.

I also chose to reuse an old component I built around a year ago, which looked very similar to the tab on the mock up. It was built originally as an exercise, and does not use Jquery. I made it 1 year ago, so admittedly it is not that best, and looking back I would improve its accessibility (adding ARIA tags for hidden content, etc) and simplify it's markup and javascript. However for this project I thought it worked, and it was a quick way to add some interactivity to the tab section.

Another area that I would have done different was the CSS conventions. The tab component I built sort of uses a modified convention based off (this article)[http://thesassway.com/advanced/modular-css-naming-conventions]. For consistency, I continued that convention in the rest of the HTML, even though if I was to redo it I would probably just use BEM because it is more popular and recognizable standard.

### Priorities

After I got my initial project structure setup, I prioritized the basic layout of the page first. This included the functionality of the tabbed content, and the title and pictures on the left. Next I made sure it was responsive, and had at least some ARIA tags. I did not focus much on the ARIA tags because I used some HTML5 elements, and it is not an area I am as experienced in. I did not get to adding typefaces, colors, and other CSS polish. Ideally, I would also like to improve the responsiveness of the site, as the current behavior could be improved and made to look less lazy.