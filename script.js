class Video {
    constructor(title, uploader, duration){
        this.title = title;
        this.uploader = uploader;
        this.duration = duration;
    }
    watchEntirely(){
        console.log(`You watched all ${this.duration} seconds of ${this.title}!`);
    }
    watch(sec){
        console.log(`You watched ${sec} seconds of ${this.title}!`);
    }
}

const birthdayVideo = new Video('Birthday video', 'Nicole', 150);
birthdayVideo.watch(34);
birthdayVideo.watchEntirely();

const schoolVideo = new Video('School video', 'Jack', 167);
schoolVideo.watch(66);
birthdayVideo.watchEntirely();


//Use an array of data and a for loop to instantiate 5 Video objects
const videos = [
    {
     title: 'Birthday video',
     uploader: 'Nicole',
     duration: 150
    },
    {
     title: 'School video',
     uploader: 'Jack',
     duration: 167
    },
    {
     title: 'Wedding video',
     uploader: 'Natali',
     duration: 253
    },
    {
     title: 'Cake video',
     uploader: 'Mom',
     duration: 320
    },
    {
     title: 'Cat video',
     uploader: 'Julia',
     duration: 144
    }
];

videos.map(video => {
    console.log(new Video(video.title, video.uploader, video.duration));
})



