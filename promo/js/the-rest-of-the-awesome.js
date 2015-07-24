var dataSource = [{tweets: "Clockwork Tiyanaks.", handle: "anitero"},
{tweets: "Dream-crushing reality.", handle: "xtauymatiao"},
{tweets: "Myself.", handle: "marquistan"},
{tweets: "Devil cats and deep sea divers on land.", handle: "elbertor"},
{tweets: "Running.", handle: "marquistan"},
{tweets: "Long hallways.", handle: "berettablue"},
{tweets: "Procrastination... and by responding I've done it again!", handle:"AprilRicafort"},
{tweets: "Snakes and mad bald men wielding kryptonite. And more snakes.",handle: "cponprod"},
{tweets: "The contestants of RuPaul's Drag Race.", handle: "Muwu"},
{tweets: "Memories.", handle: "whoiselyoo"},
{tweets: "A life doing something I'm not happy or satisfied with.", handle:"xtauymatiao"},
{tweets: "You.", handle: "jopiesanchez"},
{tweets: "Naked men.", handle: "elbertor"},
{tweets: "Also, zombie hamsters with unusually large penises.", handle:"elbertor"},
{tweets: "Intelligent fuzzy caterpillars.", handle: "inthegrayworld"},
{tweets: "Axe-wielding murderers.", handle: "inthegrayworld"},
{tweets: "Personal poverty.", handle: "inthegrayworld"},
{tweets: "Myself.", handle: "inthegrayworld"},
{tweets: "The memory of that time I had to sing a Shania Twain song in front of classmates.", handle: "inthegrayworld"},
{tweets: "Insecurities.", handle: "Jaynein"},
{tweets: "Waking up one day to find all keyboards' layout inverted. All of them.", handle: "AnomalusUndrdog"},
{tweets: "Neighbor's Dog.", handle: "directorjohnlee"},
{tweets: "Ghosts.", handle: "rginedav"},
{tweets: "The inevitable zombie apocalypse.", handle: "Muwu"},
{tweets: "New Generation Zombies \"Runners\"", handle: "directorjohnlee"},
{tweets: "Anomie.", handle: "primadonnita"},
{tweets: "Zombie Usain Bolt.", handle: "Muwu"},
{tweets: "Spiders. ", handle: "lesterechem"},
{tweets: "Responsibility.", handle: "seancctiu"},
{tweets: "Scary Angry Clowns.", handle: "directorjohnlee"},
{tweets: "Michael jackson & Elvis Presley impressionists from Las Vegas .",handle: "directorjohnlee"},
{tweets: "Utot sabay tae virus.", handle: "harveyworks"},
{tweets: "The Imperial Army of the Boxified Lycanthropes.", handle:"seancctiu"},
{tweets: "Aggressive Door to Door salespeople with pamphlets on their hands.", handle: "directorjohnlee"},
{tweets: "BL/ind #MCRdork #ijusthadto", handle: "skybluedays"},
{tweets: "FLYING COCKROACHES.", handle: "skybluedays"},
{tweets: "Reality.", handle: "xerrynna"},
{tweets: "The tax collectors.", handle: "faiye"},
{tweets: "Evil lizards.", handle: "diannedepra"},
{tweets: "Ipis!!!!", handle: "feannekitty"},
{tweets: "Sanity.", handle: "commanderjay"},
{tweets: "That over-eager relative at the reunion.", handle: "lorraelena"},
{tweets: "The extra pounds avenging the lechon I just ate.", handle:"lorraelena"},
{tweets: "Godchildren in Christmas. ", handle: "faiye"},
{tweets: "Zombies.", handle: "perrywarrend"},
{tweets: "The start line in a race.", handle: "perrywarrend"},
{tweets: "Incessant Korean novelty music.", handle: "perrywarrend"},
{tweets: "MY BOOK PROJECT DRAFT", handle: "marawheresclara"},
{tweets: "That popular teen singer who's a boy but sounds like a girl.",handle: "lorraelena"},
{tweets: "The Silence.", handle: "lorraelena"},
{tweets: "The Twilight series.", handle: "perrywarrend"},
{tweets: "Chubby Bubbles Girl.", handle: "colostrumboy"},
{tweets: "Budoy.", handle: "Muwu"},
{tweets: "Flying ipis", handle: "supahstarlet"},
{tweets: "10-ft pile of memos", handle: "supahstarlet"},
{tweets: "Teletubbies.", handle: "sidcarden"},
{tweets: "Vegetables. ", handle: "icemonsod"},
{tweets: "Client who wants a waterfall. ", handle: "HungWin"},
{tweets: "Small talk.", handle: "presidents"},
{tweets: "Temptations.", handle: "craaae"},
{tweets: "That creepy rape-y guy at the parking lot.", handle: "baddie"},
{tweets: "Humanity.", handle: "helgatheweber"},
{tweets: "Mediocrity.", handle: "alliekabok"},
{tweets: "Death and taxes.", handle: "anitero"},
{tweets: "The Others.", handle: "_ohla"},
{tweets: "The white lady standing right behind you. What? Can't you see her?", handle: "luckychan"},
{tweets: "Nuclear explosions.", handle: "toadfrogs"},
{tweets: "Zombies.", handle: "toadfrogs"},
{tweets: "My Life.", handle: "toadfrogs"},
{tweets: "kamote farts.", handle: "sidcarden"},
{tweets: "Obscurity.", handle: "RyanSumo"},
{tweets: "Conspicuously high uric acid levels.", handle: "RyanSumo"},
{tweets: "Electrical sockets.", handle: "ssameee"},
{tweets: "A co-worker whose lunch I have stolen.", handle: "camzandthecity"},
{tweets: "Heights.", handle: "Woqee"},
{tweets: "The law.", handle: "Woqee"},
{tweets: "Gaining extra pounds on holidays.", handle: "philippinebeat"},
{tweets: "Idiots.", handle: "dementia"},
{tweets: "Psychotic rabid clowns.", handle: "ravenwolfshin"},
{tweets: "Deadly experimental marmosets.", handle: "ravenwolfshin"},
{tweets: "Evil ex-girlfriends.", handle: "ravenwolfshin"},
{tweets: "The ghost of Christmas past.", handle: "ravenwolfshin"},
{tweets: "Dead Rats from Hell.", handle: "akosiChoPaeng"},
{tweets: "Forgotten deadlines.", handle: "anitero"},
{tweets: "Looming deadlines!", handle: "Budjette"},
{tweets: "Social rejection.", handle: "haxpor"},
{tweets: "Justin Bieber and his fandom.", handle: "karrui"},
{tweets: "An endless sea of numbers trying to drown me.", handle:"xtauymatiao"},
{tweets: "Christmas shopping.", handle: "philippinebeat"},
{tweets: "Abominable Snow Monster in Skifree.. it still hunts me until today..", handle: "tchukasa"},
{tweets: "ANTOK.", handle: "arrajurado"},
{tweets: "Community service as a punishment.", handle: "arrajurado"},
{tweets: "USG. - University Security Group. Dami ko violations sa kanila.", handle: "arrajurado"}]
;

var other_tweets = $('#other_tweets');

function refreshTweets(target_tbody) {
    return function() {
        var gathered = [];
        
        for ( var i = 0; i < 5; ++i ) {
            var index;
            do {
                index = Math.floor(Math.random() * dataSource.length);
            } while ( $.inArray(index, gathered) != -1 );
            gathered.push(index);
        }
        
        target_tbody.empty();
        for ( var i = 0; i < gathered.length; ++i ) {
            var row = $('<tr class="row' + i + '"/>'),
                tweet = $('<td class="chatter"/>'),
                handle = $('<td class="handle"/>'),
                o = dataSource[gathered[i]];
         
            tweet.append(document.createTextNode(o.tweets));
            handle.append(document.createTextNode("@" + o.handle));
            row.append(handle,tweet);
            target_tbody.append(row);
            twttr.anywhere(function (T) {
                T("table.left").hovercards();
                T("table.right").hovercards();
            });
        }
    }
}

refreshTweets(other_tweets)();               
setInterval(refreshTweets(other_tweets), 6300);
setInterval(refreshTweets($('#other_tweets2')), 7100);