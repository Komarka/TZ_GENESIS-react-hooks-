import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";


export default Container = ({ children }) =>  {
    return (
      <KeyboardAvoidingView style={{ flex: 1, padding:'6%' }} keyboardVerticalOffset={-500} >
        <ScrollView>
          { children }
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

