const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Pin,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{PlanoDeFundoEmBlocos2: 0},
	{Sólido: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{Fixar: 0},
	{animacao: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{CentrarEm: 0},
	{jogador: 0},
	{Teclado: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Senóide: 0},
	{Sprite3: 0},
	{Âncora: 0},
	{Pontos: 0},
	{acao: 0},
	{inimigo: 0},
	{marcador: 0},
	{Sprite4: 0},
	{cactus: 0},
	{Sprite5: 0},
	{PlanoDeFundoEmBlocos: 0},
	{play: 0},
	{PlanoDeFundoEmBlocos4: 0},
	{retry: 0},
	{PlanoDeFundoEmBlocos5: 0},
	{playAgain: 0},
	{Áudio: 0},
	{pontos: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	animacao: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Pontos: class extends self.ITextInstance {},
	inimigo: class extends self.ISpriteInstance {},
	marcador: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	cactus: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	play: class extends self.IButtonInstance {},
	PlanoDeFundoEmBlocos4: class extends self.ITiledBackgroundInstance {},
	retry: class extends self.IButtonInstance {},
	PlanoDeFundoEmBlocos5: class extends self.ITiledBackgroundInstance {},
	playAgain: class extends self.IButtonInstance {},
	Áudio: class extends self.IInstance {}
}