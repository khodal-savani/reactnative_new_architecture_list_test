/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const getRandomTimeDescription = (): string => {
    const options = ["hours", "yesterday", "date"];
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    const now = new Date();

    const formatDate = (date: Date): string => {
      const day = date.getDate().toString().padStart(2, '0'); // DD
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // MM
      const year = date.getFullYear(); // YYYY
      return `${day}-${month}-${year}`;
    };

    switch (randomChoice) {
      case "hours":
        const randomHoursAgo = Math.floor(Math.random() * 24); // Random number of hours within a day
        return `${randomHoursAgo} hours ago`;

      case "yesterday":
        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);
        return `Yesterday, ${formatDate(yesterday)}`;

      case "date":
        const randomDaysAgo = Math.floor(Math.random() * 30); // Random date within the past month
        const randomDate = new Date(now);
        randomDate.setDate(now.getDate() - randomDaysAgo);
        return formatDate(randomDate);

      default:
        return "Just now";
    }
  };

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.mainCard}>
        <View style={styles.headerBlock}>
          <Image
            style={styles.profileImage}
            source={{ uri: `https://picsum.photos/seed/${item + 1}/100/100` }}
          />
          <View>
            <Text style={styles.name}>Khodal Savani</Text>
            <Text style={styles.time}>{getRandomTimeDescription()}</Text>
          </View>
        </View>

        <Text style={styles.cardTitle}>
          Your Floating Paradise Awaits
        </Text>

        <View style={styles.imageContainer}>
          <Image
            style={styles.postImage}
            source={{ uri: `https://picsum.photos/id/${item + 1}/400/150` }}
          />
        </View>

        <View style={styles.footerBlock}>
          <Text style={styles.footerText}>❤️ {getRandomNumber(1000, 5000)}</Text>
          <Text style={styles.footerText}>💬 {getRandomNumber(100, 900)}</Text>
          <View style={styles.avatars}>
            <Image
              style={styles.avatar}
              source={{ uri: `https://picsum.photos/seed/${item + 5}/100/100` }}
            />
            <Image
              style={styles.avatar}
              source={{
                uri: `https://picsum.photos/seed/${item + 3}/100/100`,
              }}
            />
            <Image
              style={styles.avatar}
              source={{
                uri: `https://picsum.photos/seed/${item + 9}/100/100`,
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <FlatList
        data={Array.from({ length: 500 }, (_, i) => i)}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  headerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    color: '#575757',
    fontSize: 12,
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  imageContainer: {
    marginTop: 10,
    position: 'relative',
  },
  postImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    backgroundColor: '#575757',
  },
  liveBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    color: 'white',
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
  },
  footerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    color: '#575757',
  },
  avatars: {
    flexDirection: 'row',
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: -5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#ccc',
  },
});

export default App;
