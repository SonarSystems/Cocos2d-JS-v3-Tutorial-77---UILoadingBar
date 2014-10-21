var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    count: 0,
    loadingBar: null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(sprite, 0);

        this.loadingBar = new ccui.LoadingBar();
        this.loadingBar.setName("LoadingBar");
        this.loadingBar.loadTexture(res.LoadingBar_png);
        this.loadingBar.setPercent(0);
        this.loadingBar.x = size.width / 2;
        this.loadingBar.y = size.height / 2;
        this.addChild(this.loadingBar);

        this.scheduleUpdate();

        return true;
    },

    update: function(dt)
    {
        this.count++;

        if (this.count > 100)
        {
            this.count = 0;
        }

        this.loadingBar.setPercent(this.count);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

