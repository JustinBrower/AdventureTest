
export const Dialogue = {

    messages: {

        intro: [
            'Hello there, and welcome to the CodeWorks dungeon. You`re in for the toughest ride of your life here buddy. A real rice-crispy filled adventure. Now get your laptop, get your coffee, and brush up on your pong, `cause it`s go time.',
            "You know the rules, they're the same as baseball. Three strikes you're out, don't argue with the ref, and there's no shame in stealing bases (as long as the bases are NOT your peer's code).",
            "Enough talk, let's head into your technical interview to see if you have what it takes."
        ],
        0: {
            question:
                [
                    "Which HTML tag you would use to get the BIGGEST header size you can?",
                    "Can you tell me which tag you'd use to get the SMALLEST header size?",
                    "What does HTML actually stand for?",
                    "Which tag is typically used to display text?",
                    "Which example is the proper way to add attributes to a tag?",
                    "What is an element?",
                    "Correct example of a div tag?",
                    "How should you always end the name of your html file?",
                    "To effect the entire application, which tag would you add attributes to?",
                    "How do you open your dev tools in Google Chrome?"
                ],
            wrongAnswer:
            {
                0: [
                    "<h5>",
                    "<p>",
                    "<div>"
                ],
                1: [
                    "<h2>",
                    "<tiny>",
                    "<h9>"
                ],
                2: [
                    "Handled-To-Multi-Level",
                    "Hold-This-Moldy-Lettuce",
                    "Hard-Text-Middle-Length"
                ],
                3: [
                    "<div>",
                    "<section>",
                    "<audio>"
                ],
                4: [
                    "class='example'<div>",
                    "<class='example' div>",
                    "<div> class='example'",
                ],
                5: [
                    "The information inbetween the start and end tags",
                    "An attribute on the tag",
                    "The class on the tag"
                ],
                6: [
                    ">div<",
                    "<>div",
                    "div"
                ],
                7: [
                    ".index",
                    ".file",
                    ".name"
                ],
                8: [
                    "<header>",
                    "<main>",
                    "<meta>"
                ],
                9: [
                    "inspect element",
                    "F12",
                    "CTRL + Shift + i"
                ]
            },
            correctAnswer: [
                "<h1>",
                "<h6>",
                "Hyper-Text-Markup-Language",
                "<p>",
                "<div class='example'>",
                "Everything from the start tag to the end tag",
                "<div>",
                ".html",
                "<body>",
                "All of the above"
            ],
            help: [
                "https://www.w3schools.com/html/html_basic.asp",
                "https://www.w3schools.com/html/html_basic.asp",
                "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
                "https://www.w3schools.com/html/html_paragraphs.asp",
                "https://www.w3schools.com/html/html_attributes.asp",
                "https://www.w3schools.com/html/html_elements.asp",
                "https://www.w3schools.com/tags/default.asp",
                "https://www.thoughtco.com/naming-html-files-3466503",
                "https://www.w3schools.com/tags/tag_body.asp",
                "https://www.hostinger.com/tutorials/website/how-to-inspect-and-change-style-using-google-chrome",
            ]
        },
        1: {
            question: [
                "What exactly does CSS stand for?",
                "What tag do you use for in-line styling?",
                "What selector is used when selecting ALL elements?"
            ],
            wrongAnswer:
            {
                0: [
                    "Cats-Can't-Speak",
                    "Closed-Select-Styling",
                    "C-Stack-Synergy"
                ],
                1: [
                    "CSS",
                    "Change",
                    "Element"
                ],
                2: [
                    "#",
                    ".",
                    "^"
                ]
            },
            correctAnswer: [
                "Cascading-Style-Sheets",
                "Style",
                "*"
            ],
            help: [
                "https://codeworksacademy.com/fs-student-guide/resources/wk1/03-CSS.html",
                "https://codeworksacademy.com/fs-student-guide/resources/wk1/03-CSS.html",
                "https://flukeout.github.io/"
            ]
        },
        2: {
            question: [
                "How would you display something to the console?",
                "Which of these is an example of a string data type?",
                "What is the most common method of iterating through an array?"
            ],
            wrongAnswer:
            {
                0: [
                    "console.writeline()",
                    "console.read()",
                    "console.logger()"
                ],
                1: [
                    "35",
                    "false",
                    "[1, 2, 3]"
                ],
                2: [
                    "iterate()",
                    "if-else statement",
                    "do-while loop"
                ]
            },
            correctAnswer: [
                "console.log()",
                "'hello'",
                "for loop"
            ],
            help: [
                "https://eloquentjavascript.net/00_intro.html",
                "https://eloquentjavascript.net/01_values.html",
                "https://eloquentjavascript.net/05_higher_order.html"
            ]
        },
        goodJob: [
            "Wow! You're doing great! Let's keep going...",
            "Nice! But can you handle what's next?",
            "Good good... but what about this...",
            "Pretty good, let's see about this next one.",
            "Dang you're pretty good, next question.",
            "Alright! Moving on to something more challenging..."
        ],
        badJob: [
            "Not quite, let's see about this next one.",
            "You may need to study more!",
            "You didn't get that one... Let's try this.",
            "Mm, you must have misclicked. Another try!",
            "That wasn't right, but here's another question.",
            "Not that one. Here's another."
        ]
    }
}

