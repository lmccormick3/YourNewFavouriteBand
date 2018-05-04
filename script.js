const vibe = [ //declaring genres/vibes array
    {
        genre: "meh",
        counter: 0
    }, {
        genre: "happy",
        counter: 0
    }, {
        genre: "spicy",
        counter: 0
    }, {
        genre: "chill",
        counter: 0
    }, 
]

const bands = {
    happy: [
        {
            title: "Chad Valley",
            image: "assets/chadValley.png"
        },
        {
            title: "Delorean",
            image: "assets/delorean.png"
        },
        {
            title: "Air France",
            image: "assets/airFrance.png"
        },
        {
            title: "Los Campesinos!",
            image: "assets/losCampesinos.png"
        }, 
        {
            title: "Wildcat! Wildcat!",
            image: "assets/wildcatWildcat.png"
        }

    ],
    spicy: [
        {
            title: "Sylvan LaCue",
            image: "assets/sylvanLaCue.png"
        },
        {
            title: "Chester Watson",
            image: "assets/chesterWatson.png"
        }
    ],
    meh: [
        {
            title: "Craig Cardiff",
            image: "assets/craigCardiff.png"
        },
        {
            title: "Dawn Golden",
            image: "assets/dawnGolden.png"
        }
    ],
    chill: [
        {
            title: "Blood Orange",
            image: "assets/bloodOrange.png"
        },
        {
            title: "Chris Staples",
            image: "assets/chrisStaples.png"
        },
        {
            title: "Baths",
            image: "assets/baths.png"
        }
    ]
}

$('input[type=radio]').on('change', function(){
    // const selectedButton = document.querySelector('input[type=radio]:checked');
    $('input[type=radio]:checked label').addClass('selected');
});


// document ready starts 
    $(function(){
        $('.result').hide();
        // upon quiz submission, perform the following function
    $('form').on('submit', function(e){
        // to prevent default page event from happening:
        e.preventDefault();
        // storing answers in objects:
        const answer1 = $('input[name=mood]:checked').val();
        const answer2 = $('input[name=scene]:checked').val();
        const answer3 = $('input[name=plan]:checked').val();
        const answer4 = $('input[name=timeless]:checked').val();
        const answer5 = $('input[name=show]:checked').val();

        const userAnswers = [answer1, answer2, answer3, answer4, answer5];

        userAnswers.forEach((ans) => {
            vibe.forEach((vibe) => {
                if(vibe.genre === ans) {
                    vibe.counter += 1
                }
            });
        });
        console.log(vibe);
        getResult(vibe)
    });

    
    // Generating result:
        function getResult(vibe) {
            let max = 0;
            let final;
            for (let i = 0; i < vibe.length; i++) {
                if (vibe[i].counter > max) {
                    max = vibe[i].counter;
                    final = vibe[i]
                }
            }
            const finalBand = getRandomBand(bands[final.genre]);

            $('.bandResult').attr('src', finalBand.image);
            const resultBand = finalBand.title;
            $('.bandName').html(resultBand);

        }

        const getRandomBand = function (array) {
            const randomBand = Math.floor(Math.random() * array.length);
            return array[randomBand];
        }
        

    });
    
    $('.submit').on('click', function(){
        $('.quiz').hide();
        $('.result').fadeIn();

        $('.resetQuiz').on('click', function () {
            window.location.reload(true);
    }); //document ready ends
});