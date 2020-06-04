import { config } from "./config";
import * as fileHelper from "./helper.file";
import * as request from "request";
import * as fs from "fs";
import * as queryString from "querystring"

speechToText("Rajath_speech2.wav");
function speechToText(fileName: string) {
    const requestOptions: request.CoreOptions = {
        headers: {
            "Content-Type": "audio/wav; codec=audio/pcm; samplerate=16000",
            "Transfer-Encoding": "chunked",
            "Ocp-Apim-Subscription-Key": config.speech.bingSpeech.key1
        },
        body: fileHelper.readFile(`${__dirname}/${fileName}`)
    };
    request.post(
        config.speech.bingSpeech.endPoind,
        requestOptions,
        (error, response, body) => {
            console.log(response.body);
        }
    );
}

