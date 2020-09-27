class Video{
	constructor(vid,x,y,w,h,rotation) 
	{
		this.vid = vid;
		this.source = vid.src;
		this.x = (x == null ? 0 : parseInt(x));
		this.y = (y == null ? 0 : parseInt(y));
		this.w = (w == null ? 0 : parseInt(w));
		this.h = (h == null ? 0 : parseInt(h));
		this.rotation = (rotation == null ? 0 : parseInt(rotation));
		this.canvas = null;
        this.ctx = null;
        
        if(rotation > 0)
        {
            this.canvas = document.createElement("canvas");
            this.ctx = v.canvas.getContext("2d");
            this.canvas.width = c.width;
            this.canvas.height = c.height;

            this.ctx.translate(c.width/2,c.height/2);
            this.ctx.rotate(v.rotation*Math.PI/180);
            this.ctx.translate(-c.width/2,-c.height/2);
        }
    }
    
    /**
     * Parse an object representation of a Lecture, and return a fully initialised
     * instance of 
     */
    static fromJSON(v)
    {
        let vid = createVideoElement(v.source);
        vid.id = v.source.substring(0,v.source.lastIndexOf("."));
        vid.width = 0;
        
        if(v.x == null)
            v.x = 0;
        if(v.y == null)
            v.y = 0;
        if(v.rotation == null)
            v.rotation = 0;
            
        return new Video(vid, v.x, v.y, v.w, v.h, v.rotation);
    }
		
}