class Clip{
	constructor(name,start,end,vid,volume,x,y,scale,intro=null) 
	{
		this.vid = vid;
		this.name = name;
		this.volume = volume;
        
        this.x = x;
		this.y = y;
        this.scale = scale;

		//text intro
		this.intro = intro;
        this.canvas = null;
        this.ctx = null;

        if (intro != null)
        {
            this.canvas = document.createElement("canvas");
            this.ctx = this.canvas.getContext("2d");
            this.canvas.width = c.width;
            this.canvas.height = c.height;

            this.ctx.font = 40*this.scale + "px Calibri";
            this.ctx.fillStyle = "LightSteelBlue";
            this.ctx.fillText(lecture.title,this.xTransform(300),this.yTransform(800));
            this.ctx.font = 30*this.scale + "px Calibri";
            this.ctx.fillText(lecture.subtitle,this.xTransform(300),this.yTransform(840));
            this.ctx.fillText(lecture.author,this.xTransform(300),this.yTransform(900));
            this.ctx.fillText(lecture.contact,this.xTransform(300),this.yTransform(935));
        }

		this.start = start;
		if(end > start)
			this.end = end;
		else
	        this.end = this.vid.end;
        
        // Add ourself as an option in the global list of clips
        let clipName = document.createElement("option");
        clipName.text = this.getLabel();

        document.getElementById("clipName").options.add(clipName);
    }	

    xTransform(x)
    {
        return this.x + x * this.scale;
    }

    yTransform(y)
    {
        return this.y + y * this.scale;
    }

    getLabel()
    {
        return this.name +" (" + (this.end - this.start) + ")";
    }

    static fromJSON(l)
    {
        // Find the video associated with this clip
        let v = lecture.findVideo(l.vid);
        
        // Apply any necessary default scaling
        if(l.x == null)
            l.x = v.x;
        if(l.y == null)
            l.y = v.y;
        if(l.scale == null)
            l.scale = 1;			

        return new Clip(l.name, l.start, l.end, l.vid, l.volume, l.x, l.y, l.scale, l.intro);						
    }

}