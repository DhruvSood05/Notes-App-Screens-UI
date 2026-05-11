import React from "react";
import { StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

interface SunProps {
  color: string;
}

const Sun = ({ color }: SunProps) => {
  return <Feather name="sun" color={color} size={16} />;
};

export default Sun;

const styles = StyleSheet.create({});
