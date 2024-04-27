import moment from "moment";
import { HStack, Heading, Stack, Text, Box } from "native-base";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { RiRefreshFill } from "react-icons/ri";

interface weatherProps {
  weather: any;
  refetech: () => void;
}

function WeatherCard({ weather, refetech }: weatherProps) {
  return (
    <Box alignItems="center">
      <Box
        rounded="lg"
        padding={"10"}
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Stack p="4">
          <Stack space={2}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Heading textAlign={"center"} size="md" ml="-1">
                <FaLocationArrow fontSize={15} /> {weather.name}
              </Heading>
              <div style={{ display: "flex", alignItems: "center" }}>
                <RiRefreshFill
                  className="refresh-button"
                  fontSize={22}
                  onClick={() => refetech()}
                />
              </div>
            </div>

            <Text
              textAlign={"center"}
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              {moment().format("llll")}
            </Text>
          </Stack>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "20px",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                id="wicon"
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt="Weather icon"
              ></img>
            </div>
            <Text textAlign={"center"} fontSize={"5xl"} fontWeight="900">
              {Math.round(weather.main.temp)}
            </Text>
            <div
              style={{
                position: "absolute",
                top: "25%",
                right: "3%",
                fontWeight: "600",
              }}
            >
              &#176;C
            </div>
            {/* <Text fontWeight="400">Humidity: {weather.main.humidity}</Text> */}
            {/* <Text fontWeight="400">
              Sun Raise: {moment(weather.sys.sunrise).format("LTS")}
            </Text>
            <Text fontWeight="400">
              Sun Set: {moment(weather.sys.sunset).format("LTS")}
            </Text> */}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Text display={"block"} fontWeight="400">
                Humidity
              </Text>
              <Text textAlign={"center"} fontWeight="400">
                {weather.main.humidity} %
              </Text>
            </div>
            <div style={{ textAlign: "center" }}>
              <Text display={"block"} fontWeight="400">
                Wind Speed
              </Text>
              <Text textAlign={"center"} fontWeight="400">
                {weather.main.humidity}
              </Text>
            </div>
          </div>
        </Stack>
      </Box>
    </Box>
  );
}

export default WeatherCard;
