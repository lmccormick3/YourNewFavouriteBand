//declaring genres/vibes array
const vibe = [ 
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

// declaring bands within genres
const bands = {
    happy: [
        {
            title: "Chad Valley",
            image: "assets/chadValley.png",
            suggestedSong: "Shell Suite",
            songURL: "https://www.youtube.com/watch?v=F8Z81lL1aZE"
        },
        {
            title: "Delorean",
            image: "assets/delorean.png",
            suggestedSong: "Stay Close",
            songURL: "https://www.youtube.com/watch?v=F8Z81lL1aZE"
        },
        {
            title: "Air France",
            image: "assets/airFrance.png",
            suggestedSong: "No Excuses",
            songURL: "https://www.youtube.com/watch?v=FTPO6XM_IxM"
        }, 
        {
            title: "Wildcat! Wildcat!",
            image: "assets/wildcatWildcat.png",
            suggestedSong: "Mr. Quiche",
            songURL: "https://www.youtube.com/watch?v=d3pYGE7bOhQ"
        },
        {
            title: "TV Girl",
            image: "assets/tvGirl.png",
            suggestedSong: "Heaven Is A Bedroom",
            songURL: "https://www.youtube.com/watch?v=Q-7hMD2OgBc"
        }
    ],
    spicy: [
        {
            title: "Sylvan LaCue",
            image: "assets/sylvanLaCue.png",
            suggestedSong: "Grateful",
            songURL: "https://www.youtube.com/watch?v=x6i4usHqm5Q"
        },
        {
            title: "Chester Watson",
            image: "assets/chesterWatson.png",
            suggestedSong: "Picbascassquiato",
            songURL: "https://www.youtube.com/watch?v=Yr8rvUTQ9aw"
        },
        {
            title: "Los Campesinos!",
            image: "assets/losCampesinos.png",
            suggestedSong: "Avocado, Baby",
            songURL: "https://www.youtube.com/watch?v=JjzyKLrRDGA"
        },
        {
            title: "Meyhem Lauren",
            image: "assets/meyhemLauren.png",
            suggestedSong: "Thousand Dollar Gym Shoes",
            songURL: "https://www.youtube.com/watch?v=xWjZPNYWEME"
        }
    ],
    meh: [
        {
            title: "Craig Cardiff",
            image: "assets/craigCardiff.png",
            suggestedSong: "Dirty Old Town",
            songURL: "https://www.youtube.com/watch?v=bbz9rIxZJBw"
        },
        {
            title: "Phoebe Bridgers",
            image: "assets/phoebeBridgers.png",
            suggestedSong: "Motion Sickness",
            songURL: "https://www.youtube.com/watch?v=9sfYpolGCu8"
        },
        {
            title: "Dawn Golden",
            image: "assets/dawnGolden.png",
            suggestedSong: "Discoloration",
            songURL: "https://www.youtube.com/watch?v=sE_TKkNi9E8"
        },
        {
            title: "Alberta Cross",
            image: "assets/albertaCross.png",
            suggestedSong: "Isolation",
            songURL: "https://www.youtube.com/watch?v=OIIDTrYzqz8"
        }
    ],
    chill: [
        {
            title: "Blood Orange",
            image: "assets/bloodOrange.png",
            suggestedSong: "Chosen",
            songURL: "https://www.youtube.com/watch?v=gzDTMEo-g2k"
        },
        {
            title: "Chris Staples",
            image: "assets/chrisStaples.png",
            suggestedSong: "Cheap Shades",
            songURL: "https://www.youtube.com/watch?v=-xUPcvvMHNI"
        },
        {
            title: "Baths",
            image: "assets/baths.png",
            suggestedSong: "Animals",
            songURL: "https://www.youtube.com/watch?v=dHvWURUzj3Q"
        },
        {
            title: "Iamamiwhoami",
            image: "assets/iamamiwhoami.png",
            suggestedSong: "Play",
            songURL: "https://www.youtube.com/watch?v=dHvWURUzj3Q"
        }
    ]
}


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

        // storing all user answers in one variable:
        const userAnswers = [answer1, answer2, answer3, answer4, answer5];

        // function to have the object counter increment for every answer the user inputs that matches a genre:
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

    // Generating genre with highest counter:
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

            // jQuery selectors to add to the Results HTML page:
            $('.bandResult').attr('src', finalBand.image);
            const resultBand = finalBand.title;
            $('.bandName').html(resultBand);
            const resultSong = finalBand.suggestedSong;
            $('.suggestedSong').html(`<p>Start exploring their music with the song "${resultSong}"`);
            $('.songURL').attr('href', finalBand.songURL);
        }
        // function to generate the actual band result from the genre with the highest counter which will then be presented on the screen:
        const getRandomBand = function (array) {
            const randomBand = Math.floor(Math.random() * array.length);
            return array[randomBand];
        }
    });
    
    // to switch the screens from the quiz to the result:
    $('.submit').on('click', function(){
        $('.quiz').hide();
        $('.result').fadeIn('slow');

        // function to clear quiz result and return to main quiz page upon click:
        $('.resetQuiz').on('click', function () {
            window.location.reload(true);
    }); 
}); //document ready ends