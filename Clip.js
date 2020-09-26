class Clip{
	constructor(name,start,end,vid,volume,x,y,scale,multi = false,intro=0) 
	{
		this.vid = vid;
		this.name = name;
		this.multi = multi;
		this.volume = volume;
		
		//text intro
		this.intro = intro;
		this.canvas = null;
		this.ctx = null;

		this.start = start;
		if(end > start)
			this.end = end;
		else{
			this.end = this.vid.end;
		}	
		
		this.x = x;
		this.y = y;
		this.scale = scale;
	}	

}