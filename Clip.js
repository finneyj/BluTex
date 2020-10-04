class Clip{

    static CLIP_TYPE_VIDEO = 1;
    static CLIP_TYPE_WAIT_FOR = 2;
    static CLIP_TYPE_ACTION = 3;
    static DEFAULT_BASENAME = "Clip ";
    static DEFAULT_BASENAME_INDEX = 1;

	constructor(vid,name,start,end,volume,x,y,scale,type,delay=0,intro=null) 
	{
        this.vid = vid;
        this.type = type;
        this.delay = delay;
		this.name = name;
		this.intro = intro;
        this.canvas = null;
        this.ctx = null;
        this.seekTime = null;

        this._x = x;
		this._y = y;
        this._scale = scale;
        this._volume = volume;        

        // Ensure we have a copy of mutable state
        this.reset();

        if (this.name == null)
            this.name = Clip.DEFAULT_BASENAME + Clip.DEFAULT_BASENAME_INDEX++;

        // Visualise metadata if requested
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

    reset()
    {
        this.x = this._x;
		this.y = this._y;
        this.scale = this._scale;
        this.volume = this._volume;        
        this.position = null;
        this.started = null;
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

    isVideo()
    {
        return (this.type == Clip.CLIP_TYPE_VIDEO);
    }

    isWaitFor()
    {
        return (this.type == Clip.CLIP_TYPE_WAIT_FOR);
    }

    isAction()
    {
        return (this.type == Clip.CLIP_TYPE_ACTION);
    }

    hasStarted()
    {
        return (this.started != null);
    }

    static fromJSON(l)
    {
        // Test if we have a vid, waitFor or action element
        if (l.vid != null)
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

            return new Clip(l.vid, l.name, l.start, l.end, l.volume, l.x, l.y, l.scale, Clip.CLIP_TYPE_VIDEO, 0, l.intro);						
        }

        if (l.waitFor != null)
        {
            return new Clip(l.waitFor, l.name, null, null, null, null, null, null, Clip.CLIP_TYPE_WAIT_FOR, l.delay, null);	
        }

        if (l.action != null)
        {
            return new Clip(l.action, l.name, null, null, l.volume, l.x, l.y, l.scale, Clip.CLIP_TYPE_ACTION, 0, null);						            
        }

    }

}