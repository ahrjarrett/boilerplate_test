// #11:
function() {
  var movieLists = [
    {
      name: "New Releases",
      videos: [
	{
	  "id": 70111470,
	  "title": "Die Hard",
	  "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 4.0,
	  "bookmark": []
	},
	{
	  "id": 654356453,
	  "title": "Bad Boys",
	  "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 5.0,
	  "bookmark": [{ id: 432534, time: 65876586 }]
	}
      ]
    },
    {
      name: "Dramas",
      videos: [
	{
	  "id": 65432445,
	  "title": "The Chamber",
	  "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 4.0,
	  "bookmark": []
	},
	{
	  "id": 675465,
	  "title": "Fracture",
	  "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 5.0,
	  "bookmark": [{ id: 432534, time: 65876586 }]
	}
      ]
    }
  ];

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use map and concatAll to flatten the movieLists in a list of video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  return movieLists.map(({ videos }) => videos.map(video => video.id)).concatAll()
}


// #12:
function() {
  var movieLists = [
    {
      name: "Instant Queue",
      videos : [
	{
	  "id": 70111470,
	  "title": "Die Hard",
	  "boxarts": [
	    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
	    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
	  ],
	  "url": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 4.0,
	  "bookmark": []
	},
	{
	  "id": 654356453,
	  "title": "Bad Boys",
	  "boxarts": [
	    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
	    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
	    
	  ],
	  "url": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 5.0,
	  "bookmark": [{ id: 432534, time: 65876586 }]
	}
      ]
    },
    {
      name: "New Releases",
      videos: [
	{
	  "id": 65432445,
	  "title": "The Chamber",
	  "boxarts": [
	    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
	  ],
	  "url": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 4.0,
	  "bookmark": []
	},
	{
	  "id": 675465,
	  "title": "Fracture",
	  "boxarts": [
	    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
	    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
	  ],
	  "url": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 5.0,
	  "bookmark": [{ id: 432534, time: 65876586 }]
	}
      ]
    }
  ];
  

// Use one or more map, concatAll, and filter calls to create an array with the following items
// [
//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
// ];

  return movieLists.map(list =>
    list.videos.map(video => 
      video.boxarts.filter(({ width, height }) =>
        width === 150 && height === 200

      ).map(boxart => ({
	id: video.id,
	title: video.title,
	boxart: boxart.url
      }))
      ).concatAll()
    ).concatAll()
}


// #13:
Array.prototype.concatMap = function(fn) {
  return this.map(item => fn(item))
  // apply the concatAll function to flatten the two-dimensional array
  .concatAll();
};


// #14:
function() {
  var movieLists = [
    {
      name: "Instant Queue",
      videos : [
	{
	  "id": 70111470,
	  "title": "Die Hard",
	  "boxarts": [
	    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
	    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
	  ],
	  "url": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 4.0,
	  "bookmark": []
	},
	{
	  "id": 654356453,
	  "title": "Bad Boys",
	  "boxarts": [
	    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
	    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
	    
	  ],
	  "url": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 5.0,
	  "bookmark": [{ id: 432534, time: 65876586 }]
	}
      ]
    },
    {
      name: "New Releases",
      videos: [
	{
	  "id": 65432445,
	  "title": "The Chamber",
	  "boxarts": [
	    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
	  ],
	  "url": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 4.0,
	  "bookmark": []
	},
	{
	  "id": 675465,
	  "title": "Fracture",
	  "boxarts": [
	    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
	    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
	  ],
	  "url": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 5.0,
	  "bookmark": [{ id: 432534, time: 65876586 }]
	}
      ]
    }
  ];


  // Use one or more concatMap, map, and filter calls to create an array with the following items
  // [
  //	 {"id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  //	 {"id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
  //	 {"id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
  //	 {"id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  return movieLists.concatMap(list =>
    list.videos.concatMap(video =>
      video.boxarts.filter( ({width, height}) => width === 150 && height === 200)
      .map(boxart => ({ id: video.id, title: video.title, boxart: boxart.url})
    ))
  )
}


// #16: Implement reduce()

// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];

Array.prototype.reduce = function(combiner, initialValue) {
  var counter,
      accumulatedValue;
  
  // If the array is empty, do nothing
  if (this.length === 0) {
    return this;
  }
  else {
    // If the user didn't pass an initial value, use the first item.
    if (arguments.length === 1) {
      counter = 1;
      accumulatedValue = this[0];
    }
    else if (arguments.length >= 2) {
      counter = 0;
      accumulatedValue = initialValue;
    }
    else {
      throw "Invalid arguments.";
    }
    
    // Loop through the array, feeding the current value and the result of
    // the previous computation back into the combiner function until
    // we've exhausted the entire array and are left with only one value.
    while(counter < this.length) {
      accumulatedValue = combiner(accumulatedValue, this[counter])
      counter++;
    }
    
    return [accumulatedValue];
  }
};


// #17: Retrieve the largest rating
function() {
  var ratings = [2,3,1,4,5];

  // You should return an array containing only the largest rating. Remember that reduce always
  // returns an array with one item.
  return ratings.reduce((acc, r) => acc > r ? acc : r)
}


// #18: Retrieve url of the largest boxart

function() {
  var boxarts = [
    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
  ];
  
  // You should return an array containing only the URL of the largest box art. Remember that reduce always
  // returns an array with one item.
  return boxarts.reduce((acc, curr) =>
    acc.width * acc.height > curr.width * curr.height ? acc : curr
  ).map(({ url }) => url)
}


// 19: Reducing with an initial value
function() {
  var videos = [
    {
      "id": 65432445,
      "title": "The Chamber"
    },
    {
      "id": 675465,
      "title": "Fracture"
    },
    {
      "id": 70111470,
      "title": "Die Hard"
    },
    {
      "id": 654356453,
      "title": "Bad Boys"
    }
  ];

  // Expecting this output...
  // [
  //     {
  //         "65432445": "The Chamber",
  //         "675465": "Fracture",
  //         "70111470": "Die Hard",
  //         "654356453": "Bad Boys"
  //     }
  // ]
  return videos.
    reduce((accumulatedMap, { id, title }) => {
      var obj = {}
      
      // ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
      // ----- NEW MAP USING THE VIDEO ID AS THE KEY	 ----
      obj[id] = title
      
      // Object.assign() takes all of the enumerable properties from
      // the object listed in its second argument (obj) and assigns them
      // to the object listed in its first argument (accumulatedMap).
      return Object.assign(accumulatedMap, obj);
    }, {});
}
		

// 20: Retrieve the id, title, and smallest box art url for every video.
function() {
var movieLists = [
  {
    name: "New Releases",
    videos: [
      {
	"id": 70111470,
	"title": "Die Hard",
	"boxarts": [
	  { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
	  { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
	],
	"url": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": 4.0,
	"bookmark": []
      },
      {
	"id": 654356453,
	"title": "Bad Boys",
	"boxarts": [
	  { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
	  { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
	  
	],
	"url": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": 5.0,
	"bookmark": [{ id:432534, time:65876586 }]
      }
    ]
  },
  {
    name: "Thrillers",
    videos: [
      {
	"id": 65432445,
	"title": "The Chamber",
	"boxarts": [
	  { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
	  { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
	],
	"url": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": 4.0,
	"bookmark": []
      },
      {
	"id": 675465,
	"title": "Fracture",
	"boxarts": [
	  { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
	  { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
	  { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
	],
	"url": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": 5.0,
	"bookmark": [{ id:432534, time:65876586 }]
      }
    ]
  }
];
  
  
  // Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
  // [
  //	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
  //	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
  //	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
  //	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];


  return movieLists
    .concatMap(list =>
      list.videos.concatMap(video =>
        video.boxarts.reduce((acc, curr) =>
          acc.width * acc.height < curr.width * curr.height ? acc : curr
							 
        ).map(boxart => ({
          id: video.id,
          title: video.title,
          boxart: boxart.url
        }))
      )
    )
}


// 22: Implement zip

// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

Array.zip = function(left, right, combinerFunction) {
  var counter,
      results = [];

  for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
    results.push(combinerFunction(left[counter],right[counter]));
  }

  return results;
};
        

// 23: Combine videos and bookmarks by index
function() {
  var videos = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
    }
  ],
      bookmarks = [
	{id: 470, time: 23432},
	{id: 453, time: 234324},
	{id: 445, time: 987834}
      ];

  return Array.zip(videos, bookmarks, (video, bookmark) => ({
    videoId: video.id,
    bookmarkId: bookmark.id
  }))
}


// 24: Retrieve each video's id, title, middle interesting moment time, and smallest box art url
function() {
  var movieLists = [
    {
      name: "New Releases",
      videos: [
	{
	  "id": 70111470,
	  "title": "Die Hard",
	  "boxarts": [
	    { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
	    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
	  ],
	  "url": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 4.0,
	  "interestingMoments": [
	    { type: "End", time:213432 },
	    { type: "Start", time: 64534 },
	    { type: "Middle", time: 323133}
	  ]
	},
	{
	  "id": 654356453,
	  "title": "Bad Boys",
	  "boxarts": [
	    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
	    { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
	    
	  ],
	  "url": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 5.0,
	  "interestingMoments": [
	    { type: "End", time:54654754 },
	    { type: "Start", time: 43524243 },
	    { type: "Middle", time: 6575665}
	  ]
	}
      ]
    },
    {
      name: "Instant Queue",
      videos: [
	{
	  "id": 65432445,
	  "title": "The Chamber",
	  "boxarts": [
	    { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
	    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
	  ],
	  "url": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 4.0,
	  "interestingMoments": [
	    { type: "End", time:132423 },
	    { type: "Start", time: 54637425 },
	    { type: "Middle", time: 3452343}
	  ]
	},
	{
	  "id": 675465,
	  "title": "Fracture",
	  "boxarts": [
	    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
	    { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
	    { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
	  ],
	  "url": "http://api.netflix.com/catalog/titles/movies/70111470",
	  "rating": 5.0,
	  "interestingMoments": [
	    { type: "End", time:45632456 },
	    { type: "Start", time: 234534 },
	    { type: "Middle", time: 3453434}
	  ]
	}
      ]
    }
  ];

  //------------ COMPLETE THIS EXPRESSION --------------
  

  return movieLists.concatMap(list =>
    list.videos.concatMap(video =>
      Array.zip(   
        video.boxarts.reduce((acc, curr) => 
          acc.width * acc.height < curr.width * curr.height ? acc : curr
        ),

        video.interestingMoments.filter( ({type}) => type === 'Middle' ),
                                
        ({ url }, { time }) => ({
          id: video.id,
          title: video.title,
          time,
          url	
        })
      )
    )
  )
}
		

// 25: Converting from Arrays to Trees
function() {

  var lists = [
    {
      "id": 5434364,
      "name": "New Releases"
    },
    {
      "id": 65456475,
      "name": "Thrillers"
    }
  ]
  var videos = [
    {
      "listId": 5434364,
      "id": 65432445,
      "title": "The Chamber"
    },
    {
      "listId": 5434364,
      "id": 675465,
      "title": "Fracture"
    },
    {
      "listId": 65456475,
      "id": 70111470,
      "title": "Die Hard"
    },
    {
      "listId": 65456475,
      "id": 654356453,
      "title": "Bad Boys"
    }
  ];

  // Solution:
  return lists.map(list => ({
    name: list.name,
    videos: videos
      .filter(({ listId }) => listId === list.id)
      .map(({ id, title }) => ({ id, title }))
  }))

}
		

// 26: Converting from Arrays to Deeper Trees
function() {

  // Input:
  var lists = [
    {
      "id": 5434364,
      "name": "New Releases"
    },
    {
      "id": 65456475,
      name: "Thrillers"
    }
  ]
  var videos = [
    {
      "listId": 5434364,
      "id": 65432445,
      "title": "The Chamber"
    },
    {
      "listId": 5434364,
      "id": 675465,
      "title": "Fracture"
    },
    {
      "listId": 65456475,
      "id": 70111470,
      "title": "Die Hard"
    },
    {
      "listId": 65456475,
      "id": 654356453,
      "title": "Bad Boys"
    }
  ]
  var boxarts = [
    { videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
    { videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
    { videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
    { videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
    { videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
    { videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
    { videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
  ]
  var bookmarks = [
    { videoId: 65432445, time: 32432 },
    { videoId: 675465, time: 3534543 },
    { videoId: 70111470, time: 645243 },
    { videoId: 654356453, time: 984934 }
  ];
  
  // Solution:
  return lists.map(list => ({
    name: list.name,
    videos: videos
      .filter(video => video.listId === list.id)
      .concatMap(({ id, title }) => (
	Array.zip(
	  bookmarks.filter(bookmark => bookmark.videoId === id),
	  boxarts
	    .filter(boxart => boxart.videoId === id)
	    .reduce((acc, curr) => (
	      acc.width * acc.height < curr.width * curr.height ? acc : curr
	    )
          ),
	  ({ time }, { url }) => ({
	    id,
	    title,
	    time,
	    boxart: url
	  })  
        )
      ))
    })
  )

}

















