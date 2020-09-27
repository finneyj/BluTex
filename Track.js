class PlaybackContext
{
    constructor()
    {
        this.video = null;
        this.clipIndex = 0;
    }
}

class Track{
	constructor() 
	{
        this.clips = [];
        this.context = new PlaybackContext();
    }	

	insertClip(index,clip)
	{
		if(index >= this.clips.length){
			this.clips.push(clip);
		}
		else{
			let temp = this.clips[index];
			this.clips[index] = clip;
			for(let i=index+1;i<this.clips.length-1;i++){
				this.clips[i] = temp;
				temp = this.clips[i+1];
			}
			this.clips[this.clips.length-1] = temp;
		}
    }

	addClip(clip)
	{
		clips.push(clip);
	}

    static fromJSON(t)
    {
        let track = new Track();

        // Create Clip instance for each scheduled clip, setting any undefined attributes to their default values.
        for(let i=0;i<t.clips.length;i++)
            track.clips[i] = Clip.fromJSON(t.clips[i]);

        return track;
    }
}