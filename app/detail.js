import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Detail() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Halaman Detail</Text>
      <Button title="Kembali" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffde7' },
  title: { fontSize: 24, marginBottom: 20 }
});