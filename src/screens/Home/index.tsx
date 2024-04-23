import { ImageBackground, Text, View } from "react-native";
import colors from "@styles/colors.json";
import { BlurView } from "expo-blur";
import { useHome } from "./index.hook";
import { ButtonArrow } from "@components/ButtonArrow";

function Home() {
  const {
    currentData,
    handlePlaySound,
    handleGenerateMessage,
  } = useHome();

  return (
    <ImageBackground
      resizeMode="cover"
      className="flex-1 justify-between bg-destructive-50"
      source={currentData?.img}>

      {!currentData &&
        <BlurView
          intensity={30}
          tint="dark"
          className="justify-center flex-1 items-center ">
          <Text className="text-4xl text-center font-semibold text-neutral-800 " >Nenhum dado carregado...</Text>
        </BlurView>
      }
      <View />

      {/* <BlurView
        intensity={30}
        tint="dark"
        className=" flex-row p-4 justify-center "
      >
        <ButtonArrow
          disabled={!!!currentData}
          sizeIcon={60}
          nameIcon="musical-notes"
          onPress={handlePlaySound}
          colorIcon={colors.neutral[800]}
          bgColor={colors.notice[400]}
        />
      </BlurView> */}

      <BlurView
        intensity={30}
        tint="dark"
        className="justify-between flex-row p-4 pt-8 items-center ">

        <ButtonArrow
          disabled={!!!currentData}
          sizeIcon={60}
          nameIcon="musical-notes"
          onPress={handlePlaySound}
          colorIcon={colors.neutral[800]}
          bgColor={colors.notice[400]}
        />

        <ButtonArrow
          onPress={handleGenerateMessage}
          bgColor={colors.success[400]}
          colorIcon={colors.success[50]}
          nameIcon="arrow-forward"
          sizeIcon={45}
          disabled={!!!currentData}

        />
      </BlurView>

    </ImageBackground>
  );
}

export { Home };
