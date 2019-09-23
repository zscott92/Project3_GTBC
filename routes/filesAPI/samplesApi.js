/* freesound API documentation, slightly modified...
all credit goes to the talented artists that produced and created their art*/

import React , {Component} from "react";
const freesound = require("freesound");
const freeSoundFrontEnd = require("../../src/Samples");

module.exports = class samplesApi extends React.Component {
    function() {
        freesound.setToken(process.env.FREESOUND_REFRESH_TOKEN);

        var fields = 'id,name,url';
        freesound.getSound(freeSoundFrontEnd.query,
            function (sound) {
                this.set.state.map(function (sound) {
                    this.props(...sound);
                })
            
                let sampleVisualization = "<img src='" + sound.images.waveform_l + "'>";
                msg += '<br><button onclick="snd.play()">play</button><button onclick="snd.pause()">pause</button><br><br>';
                displayMessage(msg, 'resp1');
                // When we have printed some sound info, ask for analysis
                sound.getAnalysis(null, function (analysis) {
                    msg += "<strong>Mfccs:</strong><ul>";
                    for (i in analysis.lowlevel.mfcc.mean) {
                        msg += "<li>" + analysis.lowlevel.mfcc.mean[i] + "</li>"
                    }
                    msg += "</ul>";
                    displayMessage(msg, 'resp1')
                    // When we have printed the analysis, ask for similar sounds
                    sound.getSimilar(function (sounds) {
                        msg += "<strong>Similar sounds:</strong><ul>";

                        for (i = 0; i <= 10; i++) {
                            var snd = sounds.getSound(i);
                            msg += "<li>" + snd.id + ": " + snd.url + "</li>"
                        }
                        msg += "</ul>";
                        displayMessage(msg, 'resp1')
                    }, function () { displayError("Similar sounds could not be retrieved.") },
                        { fields: fields });
                }, function () { displayError("Analysis could not be retrieved.") },
                    true);// showAll
            }, function () { displayError("Sound could not be retrieved.") }
        );
    };
}