import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const { height: heightScreen } = Dimensions.get("screen");

export default function FeedItem({ data, currentVisibleItem }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (currentVisibleItem?.id === data?.id) {
      video.current?.playAsync();
    } else {
      video.current?.pauseAsync();
    }
  }, [currentVisibleItem]);

  function handlePlayer() {
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync();
  }

  return (
    <View>
      <Pressable onPress={handlePlayer}>
        <View style={[styles.info, { bottom: 100 }]}>
          <Text style={styles.name}>{data?.name}</Text>
          <Text numberOfLines={2} style={styles.description}>
            {data?.description}
          </Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="heart" size={32} color="#FFF" />
            <Text style={styles.actionText}>30.3K</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-ellipses" size={32} color="#FFF" />
            <Text style={styles.actionText}>23</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="bookmark" size={32} color="#FFF" />
          </TouchableOpacity>
        </View>

        <Video
          ref={video}
          style={{ width: "100%", height: heightScreen }}
          source={{ uri: data?.video }}
          shouldPlay={false}
          isMuted={false}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    position: "absolute",
    zIndex: 99,
    left: 8,
    padding: 8,
  },
  name: {
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 4,
    textShadowColor: "rgba(0,0,0, 0.60)",
    shadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  description: {
    color: "#FFF",
    marginRight: 24,
    textShadowColor: "rgba(0,0,0, 0.20)",
    shadowOffset: { width: -1, height: 1.5 },
  },
  actions: {
    position: "absolute",
    zIndex: 99,
    right: 8,
    bottom: Platform.OS === "android" ? 120 : 170,
    gap: 8,
  },
  actionText: {
    textAlign: "center",
    color: "#FFF",
    textShadowColor: "rgba(0,0,0, 0.60)",
    shadowOffset: { width: -1, height: 1.5 },
  },
});
