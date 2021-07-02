module.exports = {
    name: "RandomUser",
    author: ["aoe#4851"],
    version: "0.0.1",
    changelog: "Added RandomUser Mod ~ aoe#4851",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "User Action",
    html: function(data) {
        return `
        <div class="row">
        <div class="col">
            <label>Variable Type *</label>
            <select name="vartype" class="form-control">
                <option value="temp">Temp Variable</option>
                <option value="server">Server Variable</option>
                <option value="global">Global Variable</option>
        </select><br>
        </div>
          <div class="col">
          <label>Variable Name *</label>
        <input class="form-control" name="varname"></input><br>
    </div>
</div>
        `;
    },
    init: function(DBS) {
        console.log("Loaded BotSystemInfo Mod ~ aoe#4851");
    },
    mod: function(DBS, message, action, args, command, index) {
        var user = message.guild.members.cache.random().user;
        DBS.BetterMods.saveVar(action.vartype, action.varname, user.id, message.guild);
        DBS.callNextAction(command, message, args, index + 1);
    }
};
