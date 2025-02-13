"use strict";
{
    globalThis.C3.Plugins.intch_discordwebhook.Acts = {
        SendMessage(_Url, _Name, _Avatar, _Message)
        {
            const request = new XMLHttpRequest();
            request.open("POST", _Url);

            request.setRequestHeader('Content-type', 'application/json');

            const params = {
                username: _Name,
                avatar_url: _Avatar,
                content: _Message
            }

            request.send(JSON.stringify(params));
        },

        SendEmbed(_url, _title, _description, _color)
        {
            var request = new XMLHttpRequest();
            request.open("POST", _url);
            request.setRequestHeader('Content-type', 'application/json');

            var myEmbed = {
                title: _title,
                description: _description,
                color: _color
            }

            var params = {
                embeds: [myEmbed]
            }

            request.send(JSON.stringify(params));
        }
    };
}