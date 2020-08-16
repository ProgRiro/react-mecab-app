import React, { useState } from "react";
import { Heading, Flex, Text, Button, Image, Textarea } from "@chakra-ui/core";
import { DefaultLayout } from "../templates/";
import axios from "axios";
import PieChartLabel from "../home/PieChartLabel.js";
import SimpleBarChart from "../home/SimpleBarChart.js";
import DraggableList from "../home/DraggableList.js";
import logo from "../../Assets/undraw_personal_goals_edgd.svg";

const MECAB_ENDPOINT =
  "https://asia-northeast1-mecab-app.cloudfunctions.net/api/v1/";

type numDataTypes = {
  name: string;
  value: number;
};

type wordDataTypes = {
  word: string;
  pos: number;
};

const Home: React.FC = () => {
  const [loading, setIsLoading] = useState(false);
  const [successFeach, isSuccessFeach] = useState(false);
  const [numData, setNumData] = useState<numDataTypes[]>([]);
  const [wordData, setWordData] = useState<numDataTypes[]>([]);
  const [value, setValue] = useState("");

  const numDataFetch = async () => {
    if (value === "") return;
    await axios
      .post(`${MECAB_ENDPOINT}mecab/num`, { data: value })
      .then((res) => {
        setNumData(res.data);
      })
      .catch(() => {
        alert("error");
      });
  };

  const wordDataFetch = async () => {
    if (value === "") return;
    await axios
      .post(`${MECAB_ENDPOINT}mecab/word`, { data: value })
      .then((res) => {
        setWordData(res.data);
      })
      .then(() => {
        // ここで図形divを表示させる
        isSuccessFeach(true);
        alert("success");
      })
      .catch(() => {
        alert("error");
      });
  };

  const handleClick = async () => {
    setIsLoading(true);
    await numDataFetch();
    await wordDataFetch();
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <DefaultLayout>
      <Flex direction="column" align="center" bg="gray.50" pl={3} pr={3}>
        <Heading mt={10} mb={8}>
          形態素解析ったー
        </Heading>
        <Text
          w="90%"
          mb={3}
          fontSize="xl"
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          What is this?
        </Text>
        <Text
          w="90%"
          mb={1}
          fontSize="sm"
          style={{
            textAlign: "center",
          }}
        >
          mecab-async を用いた形態素解析アプリ
        </Text>
        <Text
          w="90%"
          mb={1}
          fontSize="sm"
          style={{
            textAlign: "center",
          }}
        >
          どんな品詞が、どれくらいの割合で含まれているのかを分析します
        </Text>
        <Text
          w="90%"
          mb={8}
          fontSize="sm"
          style={{
            textAlign: "center",
          }}
        >
          あなたの文章の癖がわかるかも？
        </Text>
        <Flex justify="center">
          <Image w="55%" objectFit="cover" src={logo} alt="undraw" />
        </Flex>
        <Text mt={8} mb={5} fontSize="md">
          分析する文章(日本語)を入力
        </Text>
        <Textarea
          w="80%"
          value={value}
          onChange={handleInputChange}
          placeholder="任意の文字列を入力してください"
        />
        <Button
          mt={5}
          mb={10}
          isLoading={loading}
          variantColor="teal"
          variant="solid"
          onClick={handleClick}
        >
          分析する
        </Button>
        {successFeach && (
          <Flex direction="column" justify="center" align="center" mb={10}>
            <Heading mt={50}>分析結果</Heading>
            <Text mt={3} fontSize="md" style={{ fontWeight: "bold" }}>
              分析した文章
            </Text>
            <Text mt={3} fontSize="md" style={{ textAlign: "center" }}>
              " {value} "
            </Text>
            <Text mt={12} fontSize="sm" style={{ fontWeight: "bold" }}>
              円グラフ
            </Text>
            <PieChartLabel numData={numData} />
            <Text mt={10} fontSize="sm" style={{ fontWeight: "bold" }}>
              棒グラフ
            </Text>
            <SimpleBarChart numData={numData} />
            <Heading mt={80}>単語並び替え遊び</Heading>
            <Text mt={3} mb={8} fontSize="md">
              単語を並び替えて、面白い文章を作ろう
            </Text>
            <DraggableList items={wordData} />
          </Flex>
        )}
      </Flex>
    </DefaultLayout>
  );
};

export default Home;
