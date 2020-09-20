/**
 * Generates a blank character sheet.
 * The default is to make it viewable to all but editable by the person calling the script.
 *
 * Syntax: !charsheet
 */

var Charsheet = Charsheet || {};

on('chat:message', function(msg) {
    // Exit if not an api command
    if (msg.type != "api") {
        return;
    }

    if (msg.content.indexOf('!charsheet') != -1) {
        Charsheet.Generate(msg);
    }
});

Charsheet.Generate = function(msg) {
        var player = msg.who;
        var character_name = msg.who+Date.now();
        
        var character = createObj('character', {
            gmnotes: 'Player: '+player+'<br>Generated by script Charsheet.js',
            archived: false,
            inplayerjournals: 'all',
            controlledby: msg.playerid
        });  
    
        createObj('attribute', {
            name: 'player_name',
            current: traits,
            source= Others:Aventutero del Abrazo,
            description='Renombre /n prueba /t 0 /nchupalo',
            _characterid: character.id
        });
        createObj('attribute', {
            name: 'player_name',
            current: player,
            _characterid: character.id
        });
        createObj('attribute', {
            name: 'name',
            current: character_name,
            _characterid: character.id
        })

        sendChat(player, "/me created a character named \""+character_name+"\"!");
};

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
