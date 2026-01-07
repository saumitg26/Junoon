import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Users, ChevronRight, Search, X, Flower } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const COLORS = {
  junoonDark: '#2D2926',
  saffron: '#E97451',
  gold: '#B5A642',
  cream: '#FFF9F5',
  white: '#FFFFFF',
};

export default function ClassesScreen() {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [selectedDay, setSelectedDay] = useState('TUE');
  const [filterQuery, setFilterQuery] = useState('');

  return (
    <LinearGradient colors={['#FFF9F5', '#FDEEE0', '#F9E4D4']} style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* BRANDED HEADER */}
        <View style={styles.headerContainer}>
           <Text style={styles.header}>Classes</Text>
           <Text style={styles.subHeader}>LIVE SESSIONS • ON-DEMAND</Text>
        </View>

        {/* 1. TYPEABLE FILTER CAPSULE */}
        <View style={styles.filterSection}>
          <View style={styles.typeableFilter}>
            <Search color={COLORS.gold} size={18} style={styles.searchIcon} />
            <TextInput 
              style={styles.filterInput}
              placeholder="Filter by Yoga, Meditation, or Master..."
              placeholderTextColor="rgba(45, 41, 38, 0.4)"
              value={filterQuery}
              onChangeText={(text) => setFilterQuery(text)}
            />
            {filterQuery.length > 0 && (
              <TouchableOpacity onPress={() => setFilterQuery('')}>
                <X color={COLORS.junoonDark} size={18} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* 2. CLEAN SEPTEMBER SCHEDULE HEADER */}
        <View style={styles.scheduleHeaderRow}>
          <View style={styles.goldLine} />
          <Text style={styles.premiumHeaderText}>September Schedule</Text>
          <View style={styles.goldLine} />
        </View>

        {/* 3. CALENDAR ROW */}
        <View style={styles.calendarRow}>
          {days.map((day) => (
            <TouchableOpacity 
              key={day} 
              onPress={() => setSelectedDay(day)}
              style={[styles.dayCard, selectedDay === day && styles.activeDayCard]}
            >
              <Text style={[styles.dayText, selectedDay === day && styles.activeDayText]}>{day}</Text>
              {selectedDay === day && <View style={styles.dayDot} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* 4. STRUCTURED TIMELINE SCHEDULE */}
        <View style={styles.timelineWrapper}>
          <View style={styles.verticalTimelineLine} />
          
          <ScheduleCard 
            time="8:00 AM" 
            duration="45 min" 
            title="Surya Namaskar Ritual" 
            instructor="Christopher Z." 
            joined="12 Joined" 
            accent={COLORS.saffron}
          />

          <ScheduleCard 
            time="5:30 PM" 
            duration="30 min" 
            title="Pranayama Basics" 
            instructor="Ananya R." 
            joined="12 Joined" 
            accent={COLORS.gold}
          />

          <ScheduleCard 
            time="7:00 PM" 
            duration="60 min" 
            title="Deep Dhyana Flow" 
            instructor="Michael S." 
            joined="12 Joined" 
            accent={COLORS.junoonDark}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const ScheduleCard = ({ time, duration, title, instructor, joined, accent }) => (
  <View style={styles.timelineRow}>
    <View style={styles.timeContainer}>
      <Text style={styles.timeMain}>{time}</Text>
      <Text style={styles.timeSub}>{duration}</Text>
    </View>

    <TouchableOpacity style={styles.cardContainer}>
      <LinearGradient colors={['#FFFFFF', '#FFF9F5']} style={styles.scheduleCard}>
        <View style={[styles.statusAccent, { backgroundColor: accent }]} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={[styles.instructorText, { color: accent }]}>{instructor}</Text>
          <View style={styles.metaRow}>
            <Users size={12} color="#8E8E93" />
            <Text style={styles.metaText}>{joined}</Text>
          </View>
        </View>
        <ChevronRight size={18} color={COLORS.gold} strokeWidth={2.5} />
      </LinearGradient>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 15 },
  headerContainer: { marginTop: 60, marginBottom: 10, alignItems: 'center' },
  header: { fontSize: 38, fontWeight: '300', color: COLORS.junoonDark, fontFamily: 'serif' },
  subHeader: { fontSize: 8, color: COLORS.gold, fontWeight: 'bold', letterSpacing: 2, fontFamily: 'monospace' },

  filterSection: { marginVertical: 20, paddingHorizontal: 5 },
  typeableFilter: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    borderRadius: 30, 
    paddingHorizontal: 20, 
    height: 55,
    borderWidth: 1,
    borderColor: 'rgba(181, 166, 66, 0.15)',
    elevation: 5,
    shadowColor: COLORS.gold,
    shadowOpacity: 0.1,
  },
  searchIcon: { marginRight: 12 },
  filterInput: { flex: 1, color: COLORS.junoonDark, fontSize: 13, fontFamily: 'monospace', letterSpacing: 0.5 },

  scheduleHeaderRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 25 },
  goldLine: { flex: 1, height: 1, backgroundColor: 'rgba(181, 166, 66, 0.2)' },
  premiumHeaderText: { fontSize: 9, fontWeight: '700', color: COLORS.gold, letterSpacing: 3, textTransform: 'uppercase', paddingHorizontal: 15, fontFamily: 'serif' },

  calendarRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  dayCard: { alignItems: 'center', width: 45, paddingVertical: 10 },
  activeDayCard: { backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12 },
  dayText: { fontSize: 10, fontWeight: '700', color: '#8E8E93', letterSpacing: 1 },
  activeDayText: { color: COLORS.junoonDark },
  dayDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: COLORS.saffron, marginTop: 4 },

  timelineWrapper: { paddingLeft: 5, paddingBottom: 120 },
  verticalTimelineLine: { position: 'absolute', left: 78, top: 0, bottom: 0, width: 1, backgroundColor: 'rgba(181, 166, 66, 0.2)', zIndex: -1 },
  timelineRow: { flexDirection: 'row', marginBottom: 25, alignItems: 'center' },
  timeContainer: { width: 75 },
  timeMain: { fontSize: 14, fontWeight: '700', color: COLORS.junoonDark, fontFamily: 'serif' },
  timeSub: { fontSize: 9, color: '#8E8E93', fontWeight: 'bold' },
  cardContainer: { flex: 1, elevation: 3, shadowColor: COLORS.gold, shadowOpacity: 0.05 },
  scheduleCard: { flexDirection: 'row', alignItems: 'center', borderRadius: 24, padding: 18 },
  statusAccent: { width: 4, height: 35, borderRadius: 10, marginRight: 15 },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: '400', color: COLORS.junoonDark, fontFamily: 'serif' },
  instructorText: { fontSize: 10, fontWeight: '700', marginTop: 4, fontFamily: 'monospace', textTransform: 'uppercase' },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  metaText: { fontSize: 10, color: '#8E8E93', fontWeight: 'bold', marginLeft: 6 },
});
