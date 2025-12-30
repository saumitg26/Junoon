import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { Search, BookOpen, Video, Info, ArrowRight, Sparkles } from 'lucide-react-native';

const COLORS = {
  saffron: '#E97451',
  earth: '#8B4513',
  cream: '#FFF9F5',
  white: '#FFFFFF',
  muted: '#7A7A7A'
};

const EducationScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Education Hub</Text>
        <Text style={styles.subHeader}>Tradition meets modern science.</Text>

        {/* 1. Search Bar - Requirement  */}
        <View style={styles.searchBar}>
          <Search color={COLORS.muted} size={20} />
          <TextInput
            placeholder="Search Ayurveda, fitness myths..."
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>

        {/* 2. Featured Content - Requirement [cite: 108] */}
        <Text style={styles.sectionTitle}>Featured Insights</Text>
        <TouchableOpacity style={styles.featuredCard}>
          <View style={styles.featuredIcon}>
            <Sparkles color="white" size={24} />
          </View>
          <View style={styles.featuredText}>
            <Text style={styles.featuredTitle}>The Power of Pranayama</Text>
            <Text style={styles.featuredDesc}>How ancient breathing techniques boost modern metabolic health.</Text>
          </View>
        </TouchableOpacity>

        {/* 3. Category Sections - Requirement [cite: 108, 171, 172] */}
        <Text style={styles.sectionTitle}>Explore Topics</Text>
        
        <EduCategory 
          icon={<BookOpen color={COLORS.saffron} />} 
          title="Ayurvedic Nutrition" 
          desc="Understanding the 3 Doshas and your diet."
        />
        
        <EduCategory 
          icon={<Info color={COLORS.saffron} />} 
          title="Fitness Myths" 
          desc="Debunking common misconceptions about Indian foods."
        />
        
        <EduCategory 
          icon={<Video color={COLORS.saffron} />} 
          title="Science of Yoga" 
          desc="Short videos on muscle engagement and posture."
        />

      </ScrollView>
    </SafeAreaView>
  );
};

// Sub-component for Category Rows
const EduCategory = ({ icon, title, desc }) => (
  <TouchableOpacity style={styles.categoryCard}>
    <View style={styles.iconCircle}>{icon}</View>
    <View style={styles.textContainer}>
      <Text style={styles.catTitle}>{title}</Text>
      <Text style={styles.catDesc}>{desc}</Text>
    </View>
    <ArrowRight color={COLORS.muted} size={18} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.cream },
  container: { padding: 20 },
  header: { fontSize: 28, fontWeight: 'bold', color: COLORS.earth },
  subHeader: { fontSize: 14, color: COLORS.muted, marginBottom: 20 },
  searchBar: { 
    flexDirection: 'row', backgroundColor: 'white', padding: 12, 
    borderRadius: 12, alignItems: 'center', marginBottom: 25, elevation: 2 
  },
  searchInput: { marginLeft: 10, flex: 1, fontSize: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: COLORS.earth },
  featuredCard: { 
    backgroundColor: COLORS.earth, borderRadius: 20, padding: 20, 
    flexDirection: 'row', alignItems: 'center', marginBottom: 25 
  },
  featuredIcon: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 12, borderRadius: 15 },
  featuredText: { flex: 1, marginLeft: 15 },
  featuredTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  featuredDesc: { color: 'rgba(255,255,255,0.8)', fontSize: 12, marginTop: 4 },
  categoryCard: { 
    flexDirection: 'row', backgroundColor: 'white', padding: 15, 
    borderRadius: 15, alignItems: 'center', marginBottom: 12, elevation: 1 
  },
  iconCircle: { backgroundColor: COLORS.cream, padding: 10, borderRadius: 12 },
  textContainer: { flex: 1, marginLeft: 15 },
  catTitle: { fontWeight: 'bold', fontSize: 16, color: '#2D2D2D' },
  catDesc: { fontSize: 12, color: COLORS.muted, marginTop: 2 }
});

export default EducationScreen;
