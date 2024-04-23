import { useCallback, useState, useEffect, useRef } from "react";
import { AVPlaybackSource, Audio } from "expo-av";
import { ImageSourcePropType } from "react-native";

export const useHome = () => {

  interface ImageProps {
    id: number;
    img: ImageSourcePropType;
    sound: AVPlaybackSource;
  }

  const database: ImageProps[] = [
    {
      id: 0,
      img: require("@/assets/images/duck.jpg"),
      sound: require("@/assets/sounds/duck.mp3"),
    },

    {
      id: 2,
      img: require("@/assets/images/bird.jpg"),
      sound: require("@/assets/sounds/bird.mp3"),
    },
    {
      id: 3,
      img: require("@/assets/images/flamengo-zico.jpeg"),
      sound: require("@/assets/sounds/flamengo-zico.mp3"),
    },
    {
      id: 4,
      img: require("@/assets/images/water-drink.jpg"),
      sound: require("@/assets/sounds/water-drink.mp3"),
    },
    {
      id: 5,
      img: require("@/assets/images/pizza.jpg"),
      sound: require("@/assets/sounds/pizza.mp3"),
    },

  ];
  const [currentPage, setCurrentPage] = useState(0);
  const [currentData, setCurrentData] = useState<ImageProps | undefined>(database?.[0]);

  const soundRef = useRef<any>();

  const handleGenerateMessage = useCallback(() => {
    const mensagemAleatoria =
      database[Math.floor(Math.random() * database.length)];

    setCurrentData(mensagemAleatoria);
  }, []);

  const handleChangeImageNext = useCallback(() => {
    console.log("currentPage", currentPage);

    let newValue = currentPage + 1;

    if (newValue < database?.length) {
      const imgFind = database?.find?.((value) => value.id === newValue);
      setCurrentPage(newValue);
      setCurrentData(imgFind);
    } else {
      alert("Last Image: handleChangeImageNext");
    }
  }, [currentPage]);

  const handleChangeImagePrev = useCallback(() => {
    console.log("currentPage", currentPage);

    let newValue = currentPage - 1;

    if (currentPage > 0) {
      setCurrentPage(newValue);
      const imgFind = database?.find?.((value) => value.id === newValue);
      setCurrentData(imgFind);
    } else {
      alert("Last Image: handleChangeImagePrev");
    }
  }, [currentPage]);

  const handlePlaySound = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.replayAsync();
    }
  }, [soundRef, currentData]);

  useEffect(() => {
    //carrega som do relogio
    if (!currentData) {
      return console.log('Nenhum dado encontrado')

    }
    const loadSound = async () => {


      const { sound: soundObject } = await Audio.Sound.createAsync(
        currentData.sound
      );
      soundRef.current = soundObject;
    }

    loadSound();

    return () => {
      //Remove o som, ao sair da tela
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, [currentData, soundRef, handleChangeImageNext, handleChangeImagePrev]);


  return {
    handleChangeImageNext,
    handleChangeImagePrev,
    currentData,
    soundRef,
    handlePlaySound,
    handleGenerateMessage,
  };
};
