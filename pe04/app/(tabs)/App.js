import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';

const userImage = require('../../assets/images/user.png');

const userProfileDetails = {
  name: 'Thao Bui',
  occupation: 'React Developer',
  description: 'Thao is a React Native learner. She likes learning about React Native and developing mobile applications.',
};

const numberOfCards = 6;
const data = Array(numberOfCards).fill(null).map((_, index) => ({
  image: userImage,
  ...userProfileDetails,
  showThumbnail: true,
}));

const ProfileCard = ({ image, name, occupation, description, onPress, showThumbnail }) => {
  const cardContainerStyles = [styles.cardContainer];
  if (showThumbnail) {
    cardContainerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight
      style={cardContainerStyles}
      onPress={onPress}
      underlayColor="rgba(0,0,0,0.05)"
    >
      <View style={styles.cardContentWrapper}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View style={styles.textContentContainer}>
          <Text style={[styles.cardName, showThumbnail && styles.thumbnailCardName]}>{name}</Text>
          <View style={styles.cardOccupationContainer}>
            <Text style={[styles.cardOccupation, showThumbnail && styles.thumbnailCardOccupation]}>
              {occupation}
            </Text>
          </View>
          <Text
            style={[styles.cardDescription, showThumbnail && styles.thumbnailCardDescription]}
            ellipsizeMode={showThumbnail ? 'tail' : undefined}
          >
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
  }

  handleProfileCardPress = (selectedIndex) => {
    const { data } = this.state;
    const currentlySelectedIsThumbnail = data[selectedIndex].showThumbnail;
    const newData = data.map((item, index) => {
      if (index === selectedIndex) {
        return update(item, { showThumbnail: { $set: !item.showThumbnail } });
      } else if (currentlySelectedIsThumbnail) {
        return update(item, { showThumbnail: { $set: true } });
      } else {
        return item;
      }
    });
    this.setState({ data: newData });
  };

  render() {
    const { data } = this.state;
    const list = data.map((item, index) => (
      <ProfileCard key={`card-${index}`} {...item} onPress={() => this.handleProfileCardPress(index)} />
    ));

    return (
      <View style={styles.appContainer}>
        <View style={styles.galleryContainer}>{list}</View>
      </View>
    );
  }
}