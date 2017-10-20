angular.module("myApp").controller("friendCtrl", function( $scope ) {
    $scope.friends = [ 
        { 
            name: 'Preston McNeil', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/albert-einstein-profile-picture-133x133.PNG', 
            location: { 
                city: 'Houston', 
                state: 'Texas', 
                country: 'United States' 
            }, 
            status: null, 
            friend_count: 628 
        },
        { 
            name: 'Ryan Rasmussen', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/bruce-lee-profile-picture-133x133.PNG', 
            location: { 
                city: 'New York', 
                state: 'New York', 
                country: 'United States' 
            }, 
            status: null, 
            friend_count: 994 
        },
        { 
            name: 'Terri Ruff', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/chuck-norris-profile-picture-133x133.PNG', 
            location: { 
                city: 'Sandy', 
                state: 'Utah', 
                country: 'United States' 
            }, 
            status: 'Cannot wait for Hawaii! Excited to b away from work! I\'m getting tired of all the drama!! Big news coming soon!!!', 
            friend_count: 268 
        },
        { 
            name: 'Lindsey Mayer', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/alf-profile-picture-133x133.PNG', 
            location: null, 
            status: null, 
            friend_count: 870 
        },
        { 
            name: 'Peter John Renslow', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/justin-bieber-profile-picture-133x133.PNG', 
            location: { 
                city: 'West Lafayette', 
                state: 'Indiana', 
                country: 'United States' 
            }, 
            status: 'The movie Gravity: decent. The orbital mechanics in the movie Gravity: not so much.', 
            friend_count: 549 
        },
        { 
            name: 'Craig Carroll', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/magnum-pi-profile-picture-133x133.PNG', 
            location: { 
                city: 'Tempe', 
                state: 'Arizona', 
                country: 'United States' 
            }, 
            status: null, 
            friend_count: 249 
        },
        { 
            name: 'Jesse Morrison', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01252014/images/doc-profile-picture-133x133.PNG', 
            location: null, 
            status: 'I\'m pretty excited at the prospect of having the option for cold water out of the faucet. Not just turning it all the way to the right and getting \'less hot\' water', 
            friend_count: 393 
        },
        { 
            name: 'Michelle Key', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/mr-acid-man-profile-picture-133x133.PNG', 
            location: null, 
            status: null, 
            friend_count: 928 
        },
        { 
            name: 'Abe Itty', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01252014/images/leo-dicaprio-profile-picture-133x133.PNG', 
            location: null, 
            status: null, 
            friend_count: 1427 
        },
        { 
            name: 'Ken Peng', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01252014/images/fighter-jet-profile-picture-133x133.PNG', 
            location: { 
                city: 'Tucson', 
                state: 'Arizona', 
                country: 'United States' 
            }, 
            status: null, 
            friend_count: 376 
        },
        { 
            name: 'John Dohyung Kwon', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01262014/images/walking-dead-rick-profile-picture-133x133.PNG', 
            location: null, 
            status: null, 
            friend_count: 79 
        },
        { 
            name: 'Dan Sullivan', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/eagle-profile-picture-133x133.PNG', 
            location: { 
                city: 'Cambridge', 
                state: 'Massachusetts', 
                country: 'United States' 
            }, 
            status: null, 
            friend_count: 527 
        },
        { 
            name: 'Chad Bennett', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01262014/images/wolf-profile-picture-133x133.PNG', 
            location: null, 
            status: null, 
            friend_count: 1885 
        },
        { 
            name: 'Kirk Hill', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/furby-profile-picture-133x133.PNG', 
            location: { 
                city: 'Pearland', 
                state: 'Texas', 
                country: 'United States' 
            }, 
            status: null, 
            friend_count: 185 
        },
        { 
            name: 'Joseph Moses Craven', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01232014/images/mr-bean-profile-picture-133x133.PNG', 
            location: { 
                city: 'Ardmore', 
                state: 'Oklahoma', 
                country: 'United States' 
            }, 
            status: null, 
            friend_count: 708 
        },
        { 
            name: 'Jeremy James', 
            pic_square: 'http://free-profile-pics.com/images/free-blackberry-bbm-profile-picture_246.png', 
            location: { 
                city: 'Provo', 
                state: 'Utah', 
                country: 'United States' 
            }, 
            status: null, 
            friend_count: 555 
        },
        { 
            name: 'Heather Clouse', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/painted-kitten-profile-picture-133x133.PNG', 
            location: { 
                city: 'Orem', 
                state: 'Utah', 
                country: 'United States' 
            }, 
            status: 'Last night I had a dream that my mother-in-law Angie Clouse unexpectedly stopped by my house and gave me a cleaning to do list. Apparently it is time to clean my bathroom.', 
            friend_count: 366 
        },
        { 
            name: 'Joel Gardner', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/lamborghini-profile-picture-133x133.PNG', 
            location: { 
                city: 'Provo', 
                state: 'Utah', 
                country: 'United States' 
            }, 
            status: null, 
            friend_count: 518 
        },
        { 
            name: 'Lance Winward', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/purple-tiger-profile-picture-133x133.PNG', 
            location: { 
                city: 'American Fork', 
                state: 'Utah', 
                country: 'United States' 
            }, 
            status: null, 
            friend_count: 482 
        },
        { 
            name: 'JD Clark', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01252014/images/darthvader-profile-picture-133x133.PNG', 
            location: { 
                city: 'Provo', 
                state: 'Utah', 
                country: 'United States' 
            }, 
            status: 'Internet, why you so distracting?? Stahhp', 
            friend_count: 665 
        },
        { 
            name: 'Spencer Mooso', 
            pic_square: 'http://free-profile-pics.com/profile-pictures/01242014/images/sponge-bob-profile-picture-133x133.PNG', 
            location: { 
                city: 'Lehi', 
                state: 'Utah', 
                country: 'United States' 
            }, 
            status: null, 
            friend_count: 579 
        }];

        $scope.searchTerm = "";

        $scope.filters = {
            name: '',
            state: ''
        };

        $scope.sorts = {
            property: 'name',
            direction: '+'
        };
    }
);