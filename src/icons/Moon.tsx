import React from "react";
import { StyleSheet } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";

interface MoonProps {
  color: string;
}

const Moon = ({ color }: MoonProps) => {
  return <Octicons name="moon" size={16} color={color} />;
};

export default Moon;

const styles = StyleSheet.create({});
