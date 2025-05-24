import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function layout() {
  return (
    <Tabs>
      <Tabs.Screen
      name="Home"/>
    </Tabs>
  )
}

const styles = StyleSheet.create({})