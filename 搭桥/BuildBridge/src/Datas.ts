class Datas {
	private static datas=[
		[
			[0,4,0,0,5,0,3],
			[2,0,0,1,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,1],
			[0,0,0,0,0,0,0],
			[0,3,0,2,0,0,0],
			[3,0,0,0,4,0,2],
		],[
			[2,0,0,0,0,0,0],
			[0,2,0,5,0,0,1],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[6,0,0,8,0,0,4],
			[0,0,0,0,0,0,0],
			[3,0,0,5,0,0,4],
		],
		[
			[0,4,0,0,5,0,3],
			[2,0,0,1,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,1],
			[0,0,0,0,0,0,0],
			[0,3,0,2,0,0,0],
			[3,0,0,0,4,0,2],
		],[
			[3,0,0,2,0,2,0,0,1,0],
			[0,3,0,0,0,0,0,0,0,3],
			[0,0,1,0,5,0,0,0,3,0],
			[0,0,0,0,0,0,0,0,0,0],
			[0,3,0,0,5,0,0,0,3,0],
			[5,0,0,0,0,0,0,0,0,4],
			[0,0,0,0,0,0,0,0,0,0],
			[5,0,3,0,0,0,0,0,2,0],
			[0,2,0,0,0,0,0,4,0,3],
			[3,0,0,3,0,0,2,0,0,0],
		]
	]

	public static currentLevel=0;
	public constructor() {
	}

	public static currentLevelData(){
		return Datas.datas[Datas.currentLevel];
	}

	public static newLevel(){
		if(Datas.hasNextLevel()){
			Datas.currentLevel++;
			return Datas.datas[Datas.currentLevel];
		}else{
			return  null;
		}
	}

	public static preLevel(){
		if(Datas.hasPreLevel()){
			Datas.currentLevel--;
			return Datas.datas[Datas.currentLevel];
		}else{
			return null;
		}
	}

	public static hasNextLevel(){
		return Datas.currentLevel<Datas.datas.length-1;
	}

	public static hasPreLevel(){
		return Datas.currentLevel>0;
	}
	
}