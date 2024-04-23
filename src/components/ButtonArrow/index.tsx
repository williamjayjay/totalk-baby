
import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

interface ButtonProps {
  nameIcon: React.ComponentProps<typeof Ionicons>['name'];
  sizeIcon: number;
  colorIcon: string;
  bgColor?: string;
  onPress: () => void;
  disabled?: boolean;
}

export const ButtonArrow = (data: ButtonProps) => {
  const { bgColor = 'transparent', colorIcon, nameIcon, onPress, sizeIcon, disabled } = data;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={{ backgroundColor: bgColor, opacity: disabled ? 0.3 : 1 }}
      onPress={onPress}
      className={` items-center justify-center w-20 h-20  rounded-lg `}
    >
      <Ionicons name={nameIcon} size={sizeIcon} color={colorIcon} />
    </TouchableOpacity>
  );
};

