import myLinksLogo from '../assets/cover/myLinks.png';
import bingoLogo from '../assets/cover/Bingo1.png';
import bingoImg from '../assets/cover/Bingo0.png';
export const projectsArray = [
    {
        image: bingoLogo,
        title: "Bingo",
        category: "Web App",
        metaDescription: "MyLinks is a website where all of the links mostly used by me displays here.",
        detailedDescription: `<div class='flex f-center'><img src="${bingoLogo}" class="border-radius max-w-4 max-h-4" alt='ViewImg' /></div>
        <p>Introducing Bingo: The Digital Solution for Traditional Game Enthusiasts. Play eco-friendly Bingo on electronic devices, no copies needed!</p>
        <div class="text-size-4 text-color-2 font-bold">How to Play Bingo?</div>
        <p>Bingo is typically a two-player game played on a 5x5 grid. The grid contains randomly assigned numbers from 1 to 25 (or the number of cells in the grid). Once all the cells are filled with numbers, the game begins. Players take turns calling out a number, and all players mark or "cut" that number on their grids. The player who called the number continues the next turn. To score points, players look for groups of numbers in cells that have a different color from the rest. An example image will be displayed to illustrate this.</p>
        <div class='flex f-center'><img src="${bingoImg}" class="border-radius max-w-4 max-h-4" alt='ViewImg' /></div>
        <p>If you're still unsure about the rules, you can visit my website by clicking the "Visit" button at the top of the page. In my game called Bingo, I've included the necessary functionalities for playing, such as adding or removing numbers on random cells. Additionally, I've added some extra features to enhance user experience and avoid page reloads. For example, if you want to change the grid size from 5x5 to 6x6, simply click the "Reset" button, and two options will appear on the screen. Select "Change Grid" and choose your desired size to start playing with the new grid. Another functionality is available if you wish to restart the game without changing the grid size. Just click "Reset" and then "Refresh" to restart the game. The score is automatically implemented by the computer, which updates the grid's background color and displays the score button for convenience.</p>
        `,
        visitURL: "https://bingo.shahidakhter.repl.co/"
    },
    {
        image: myLinksLogo,
        title: "MyLinks",
        category: "Web App",
        metaDescription: "MyLinks is a website where all of the links mostly used by me displays here.",
        detailedDescription: `<div class='flex f-center'><img src="${myLinksLogo}" class="border-radius max-w-4 max-h-4" alt='ViewImg' /></div>
        <div class="text-size-4 text-color-2 font-bold">Introduction</div>
        <p>myLinks is a website created by me to prevent forgetting important website names or URLs that I frequently use.</p>
        <div class="text-size-4 text-color-2 font-bold">Evolution of myLinks</div>
        <p>The idea for myLinks came to me when I realized that I often forget the names of websites I frequently visit, making it difficult for me to remember them. Therefore, I came up with the concept of creating this website called myLinks.</p>
        <div class="text-size-4 text-color-2 font-bold">Useful Feature:</div>
        <p>This website not only allows you to create a collection of links but also provides a selection tag for categorizing them. By changing the selection tag's value, you can display only the links belonging to a specific category on the screen.</p>
        `,
        visitURL: "https://mylinks.shahidakhter.repl.co/"
    },
];