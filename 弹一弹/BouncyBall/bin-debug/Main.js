var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        //防止this的作用域改变，这里使用箭头函数的格式
        _this.contactHandler = function (e) {
            console.log(e.bodyA, e.bodyB);
            if (e.bodyA.displays && e.bodyA.displays[0] instanceof Brick) {
                _this._score.value++;
                e.bodyA.displays[0].destroy();
            }
            else if (e.bodyB.displays && e.bodyB.displays[0] instanceof Brick) {
                _this._score.value++;
                e.bodyB.displays[0].destroy();
            }
            if ((e.bodyA == _this._ball.ballBody && e.bodyB.id == 1000) || (e.bodyB == _this._ball.ballBody && e.bodyA.id == 1000)) {
                _this.gameOver();
            }
        };
        _this.preSolveHandler = function (e) {
            for (var i = 0; i < e.contactEquations.length; i++) {
                var eq = e.contactEquations[i];
                if ((eq.bodyA == _this._ball.ballBody && eq.bodyB == _this._bat.body) || (eq.bodyB == _this._ball.ballBody && eq.bodyA == _this._bat.body)) {
                    //如果碰到bat的顶端，则进行反弹
                    var y = eq.normalA[1];
                    if (y != 0) {
                        _this._ball.ballBody.applyImpulse(_this._bat.force, [0, 0]);
                    }
                }
            }
        };
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        var _this = this;
        this._world = World.getInstance();
        this._startPanel = new StartPanelUI(this.stage.stageWidth, this.stage.stageHeight);
        this.stage.addChild(this._startPanel);
        this._startPanel.startBtn.addEventListener("touchBegin", function (e) {
            _this.stage.removeChild(_this._startPanel);
            _this.initMainScene();
        }, this);
        this._endPanel = new endPanelUI(this.stage.stageWidth, this.stage.stageHeight);
        this._endPanel.replayBtn.addEventListener("touchBegin", function (e) {
            _this.stage.removeChild(_this._endPanel);
            _this.resetGame();
        }, this);
    };
    Main.prototype.initMainScene = function () {
        var _this = this;
        this.addBackground();
        this.initInfoPanel();
        this.addBoundary();
        this.addBricks();
        this._bat = new Bat(this.stage);
        this.stage.addChild(this._bat);
        this._ball = new Ball();
        this.stage.addChild(this._ball);
        egret.startTick(this.moveBall, this);
        this._world.on("beginContact", this.contactHandler);
        this._world.on("preSolve", this.preSolveHandler);
        //计时
        this._timer = new egret.Timer(1000);
        this._timer.addEventListener(egret.TimerEvent.TIMER, function (e) {
            _this._time.value++;
        }, this);
        this._timer.start();
    };
    Main.prototype.moveBall = function (timeStamp) {
        this._world.step(1 / 60, 0.1, 10);
        this._ball.render();
        return false;
    };
    Main.prototype.addBackground = function () {
        var backGround = new egret.Sprite;
        backGround.x = 0;
        backGround.y = 0;
        backGround.graphics.beginFill(0x333333);
        backGround.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        backGround.graphics.endFill();
        this.addChild(backGround);
    };
    Main.prototype.initInfoPanel = function () {
        this._score = new InfoUI();
        this._score.label = "score";
        this._score.x = 20;
        this._score.y = 10;
        this._score.value = 0;
        this.stage.addChild(this._score);
        this._time = new InfoUI();
        this._time.label = "time";
        this._time.x = 400;
        this._time.y = 10;
        this._time.value = 0;
        this.stage.addChild(this._time);
    };
    Main.prototype.addBoundary = function () {
        this.addStaticPanel(10, 50, 0, 1, this.stage.stageWidth - 20); //top
        this.addStaticPanel(this.stage.stageWidth - 10, 50, Math.PI / 2, 2, this.stage.stageHeight - 60); //right
        this.addStaticPanel(this.stage.stageWidth - 10, this.stage.stageHeight - 10, Math.PI, 1000, this.stage.stageWidth - 20); //buttom
        this.addStaticPanel(10, this.stage.stageHeight - 10, 270 * Math.PI / 180, 4, this.stage.stageHeight - 60); //left
    };
    Main.prototype.addStaticPanel = function (x, y, angle, id, width) {
        var planeBody = new p2.Body({
            position: [x, y],
            angle: angle,
            id: id
        });
        var planeShape = new p2.Plane({});
        planeBody.addShape(planeShape);
        this._world.addBody(planeBody);
        var planeMc = new egret.Sprite();
        planeMc.x = planeBody.position[0];
        planeMc.y = planeBody.position[1];
        planeMc.graphics.lineStyle(3, 0x000000);
        planeMc.graphics.moveTo(0, 0);
        planeMc.graphics.lineTo(width, 0);
        planeMc.graphics.endFill();
        planeMc.rotation = planeBody.angle * 180 / Math.PI;
        this.addChild(planeMc);
    };
    Main.prototype.addBricks = function () {
        this._bricks = [];
        for (var i = 0; i <= 8; i++) {
            for (var j = 0; j <= 5; j++) {
                var brick = new Brick();
                brick.brickBody.position[0] = 80 + i * 60;
                brick.brickBody.position[1] = 200 + j * 40;
                brick.render();
                this._bricks.push(brick);
                this.addChild(brick);
            }
        }
    };
    Main.prototype.resetGame = function () {
        var _this = this;
        this._score.value = 0;
        this._time.value = 0;
        this._timer.reset();
        this._timer.start();
        this._bricks.forEach(function (ele) {
            _this._world.addBody(ele.brickBody);
            _this.addChild(ele);
        }, this);
        this._ball.ballBody.position[0] = 200;
        this._ball.ballBody.position[1] = 500;
        this._world.on("beginContact", this.contactHandler);
        this._world.on("preSolve", this.preSolveHandler);
    };
    Main.prototype.gameOver = function () {
        this._timer.stop();
        this.stage.addChild(this._endPanel);
        this._endPanel.score.value = this._score.value;
        this._endPanel.time.value = this._time.value;
        this._world.off("beginContact", this.contactHandler);
        this._world.off("preSolve", this.preSolveHandler);
        if (this._world.has("beginContact", this.contactHandler)) {
            this._world.off("beginContact", this.contactHandler);
        }
        if (this._world.has("preSolve", this.preSolveHandler)) {
            this._world.off("preSolve", this.preSolveHandler);
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map