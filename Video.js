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

	}
		
}