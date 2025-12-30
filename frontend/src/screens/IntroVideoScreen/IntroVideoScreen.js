import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { PlayCircle, SkipForward } from 'lucide-react-native';

const COLORS = {
  saffron: '#E97451',
  earth: '#8B4513',
  cream: '#FFF9F5',
  dark: '#000000',
};

const IntroVideoScreen = ({ onFinish }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Video Content Area */}
      <View style={styles.videoArea}>
        <PlayCircle color="white" size={80} strokeWidth={1} />
        <View style={styles.videoOverlay}>
          <Text style={styles.videoTitle}>The Junoon Journey</Text>
          <Text style={styles.videoSubtitle}>Wellness, Rooted in Tradition</Text>
        </View>
      </View>

      {/* Description Text  */}
      <View style={styles.contentBox}>
        <Text style={styles.descText}>
          A brief look at how we blend South Asian wellness practices with 
          modern AI to personalize your path.
        </Text>
      </View>

      {/* CTA Button  */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.enterBtn} onPress={onFinish}>
          <Text style={styles.enterBtnText}>Enter Main App</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.skipLink} onPress={onFinish}>
          <Text style={styles.skipText}>Skip Video</Text>
          <SkipForward color="#7A7A7A" size={16} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.cream },
  videoArea: { 
    height: '65%', 
    backgroundColor: COLORS.dark, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  videoOverlay: { position: 'absolute', bottom: 30, left: 20 },
  videoTitle: { color: 'white', fontSize: 26, fontWeight: 'bold' },
  videoSubtitle: { color: 'rgba(255,255,255,0.7)', fontSize: 14 },
  contentBox: { padding: 25 },
  descText: { color: COLORS.earth, fontSize: 15, lineHeight: 22, textAlign: 'center' },
  footer: { padding: 25, marginTop: 'auto' },
  enterBtn: { 
    backgroundColor: COLORS.saffron, 
    padding: 20, 
    borderRadius: 15, 
    alignItems: 'center',
    shadowOpacity: 0.2,
    elevation: 3
  },
  enterBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  skipLink: { flexDirection: 'row', justifyContent: 'center', marginTop: 15, alignItems: 'center', gap: 5 },
  skipText: { color: '#7A7A7A' }
});

export default IntroVideoScreen;
