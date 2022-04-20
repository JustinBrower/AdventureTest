import { reactive } from "vue";



export const Dialogue = reactive({

    messages: {

        intro: [
            'Hello there, and welcome to the CodeWorks dungeon. You`re in for the toughest ride of your life here buddy. A real rice-crispy filled adventure. Now get your laptop, get your coffee, and brush up on your pong, `cause it`s go time.',
            "You know the rules, they're the same as baseball. Three strikes you're out, don't argue with the ref, and there's no shame in stealing bases (as long as the bases are NOT your peer's code).",
            "Enough talk, let's head into your technical interview to see if you have what it takes."
        ],
        0: {
            question:
                [
                    "First question... Tell me which HTML tag you would use to get the BIGGEST font size you can?",
                    "Can you tell me which tag you'd use to get the SMALLEST font size?",
                    "Finally, what does HTML actually stand for?"
                ],
            wrongAnswer:
            {
                0: [
                    "<h5>",
                    "<p>",
                    "<div>"
                ],
                1: [
                    "<h1>",
                    "<small>",
                    "<h9>"
                ],
                2: [
                    "Handled-To-Multi-Level",
                    "Hold-This-Moldy-Lettuce",
                    "Hard-Text-Middle-Length"
                ]
            },
            correctAnswer: {

                0: "<h1>",
                1: "<h6>",
                2: "Hyper-Text-Markup-Language"
            }
        },
        1: {
            question:
                [
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
            correctAnswer: {
                0: "Cascading-Style-Sheets",
                1: "Style",
                2: "*"
            }
        },
    }
})










// 'Hello there,    and welcome to the CodeWorks dungeon. You`re in for the toughest ride of your life here buddy. A real rice-crispy filled adventure. Now get your laptop, get your coffee, and brush up on your pong, `cause it`s go time.',
//     "You know the rules, they're the same as baseball. Three strikes you're out, don't argue with the ref, and there's no shame in stealing bases (as long as the bases are NOT your peer's code).",
//     "Enough talk, let's head into your technical interview to see if you have what it takes."