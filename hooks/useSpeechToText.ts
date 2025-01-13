import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export function useSpeechToText() {
  const [transcript, setTranscript] = useState("");

  const startListening = () =>
    SpeechRecognition.start((result) => setTranscript(result));
  const stopListening = () => SpeechRecognition.stop();

  return { startListening, stopListening, transcript };
}
