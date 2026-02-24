import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TextInput, Button } from "react-native";
import axios from "axios";

const API_KEY = "ZUPUGWW21P6OBFP6";

export default function App(){
  const [symbol, setSymbol] = useState("AAPL");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStockData = async () => {
    if (!symbol) return;
    setLoading(true);

    try {
      const response = await axios.get(
        `http://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`
      );

      const timeSeries = response.data["Time Series (5min)"];
      if (timeSeries){
        const formattedData = Object.keys(timeSeries).map((time) => ({
          time,
          open: timeSeries[time]["1. open"],
          high: timeSeries[time]["2. high"],
          low: timeSeries[time]["3. low"],
          close: timeSeries[time]["4. close"],
        }));
        setData(formattedData.slice(0, 10)); // Pega os 10 últimos registros
      } else {
        setData([]);
      }
    }catch (error){
      console.error("Erro ao buscar dados da ação:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bolsa de Valores</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o código da ação (ex: AAPL)"
        value={symbol}
        onChangeText={setSymbol}
        />
        <Button title="Buscar" onPress={fetchStockData} />

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
          data={data}
          keyExtractor={(item) => item.time}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.time}>{item.time}</Text>
              <Text>📈 Aberto: ${item.open}</Text>
              <Text>📊 Alto: ${item.high}</Text>
              <Text>📉 Baixo: ${item.low}</Text>
              <Text>💰 Fechado: ${item.close}</Text>
            </View>
          )}
          />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  title:{
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },

  time: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
