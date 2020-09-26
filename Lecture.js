class Lecture{
	constructor(title,width,height,author,contact,subtitle,startDelay) 
	{
		this.title = title;
		this.width = width;
		this.height = height;
		this.subtitle = subtitle;
		this.author = author;
		this.contact = contact;
		this.startDelay = startDelay;

		this.videos = [];
		this.clips = [];
		this.list = [];
	}
	addVideo(v)
	{
		this.videos.push(v);
	}
	addClip(c)
	{
		this.clips.push(c);
	}
	insertInList(index,c)
	{
		if(index >= this.list.length){
			this.list.push(c);
		}
		else{
			let temp = this.list[index];
			this.list[index] = c;
			for(let i=index+1;i<this.list.length-1;i++){
				this.list[i] = temp;
				temp = this.list[i+1];
			}
			this.list[this.list.length-1] = temp;
		}
	}
	
}