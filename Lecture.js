class Lecture{
	constructor(title,width=1920,height=1080,author="",contact="",subtitle="",startDelay=5) 
	{
		this.title = title;
		this.width = width;
		this.height = height;
		this.subtitle = subtitle;
		this.author = author;
		this.contact = contact;
		this.startDelay = startDelay;

		this.videos = [];
		this.tracks = [];
	}

    addVideo(v)
	{
		this.videos.push(v);
	}

    addTrack(t)
	{
		this.tracks.push(t);
	}


    /**
     * Parse an object representation of a Lecture, and return a fully initialised
     * instance of 
     */
    static fromJSON(l)
    {
        // Set defaults if not specified
        if(l.startDelay == null)
            l.startDelay = 5;
        if(l.subtitle == null)
            l.subtitle = "";
        if(l.author == null)
            l.author = "";
        if(l.contact == null)
            l.contact = "";
        if(l.title == null)
            l.title = "title";
        if(l.width == null)
            l.width = 1920;
        if(l.height == null)
            l.height = 1080;

        return new Lecture(l.title, l.width, l.height, l.author, l.contact, l.subtitle, l.startDelay);
    }
    
    findVideo(sourceName)
	{
		for(let i=0;i<this.videos.length;i++){
			if(this.videos[i].source.endsWith(sourceName))
				return this.videos[i];
		}
		return null;
	}
	
}