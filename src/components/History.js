import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes } from '../utils/size';
import { spacing } from '../utils/size';

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    padding: spacing.md,
    fontWeight: 'bold',
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
  },
  container: {
    padding: spacing.md,
    paddingTop: spacing.sm,
    flex: 1,
  },
});

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.title}>We havent focused on anything</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus history</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};
