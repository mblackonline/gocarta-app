import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BikeStationList } from '@/components/bike-station-list';
import { useBikeStations } from '@/hooks/use-bike-stations';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function BikesScreen() {
  const { stations, loading, error, refresh } = useBikeStations();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <IconSymbol
          size={250}
          color="#808080"
          name="bicycle"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bike Chattanooga</ThemedText>
      </ThemedView>

      <ThemedView style={styles.descriptionContainer}>
        <ThemedText>
          Find available bikes and docking stations throughout downtown Chattanooga.
        </ThemedText>
      </ThemedView>

      <BikeStationList
        stations={stations}
        loading={loading}
        error={error}
        onRefresh={refresh}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  descriptionContainer: {
    marginBottom: 16,
  },
});
