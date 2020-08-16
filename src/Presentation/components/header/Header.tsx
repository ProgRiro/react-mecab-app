import React from "react";
import { Box, Heading, Flex, Button, Link } from "@chakra-ui/core";

type ShareConfigType = {
  shareTitle: string;
  shareText: string;
  tag: string;
  uri: string;
  // size: number
};

const config: ShareConfigType = {
  shareTitle: "形態素解析ったー",
  shareText:
    "mecab-asyncを用いた形態素解析アプリ%0aどんな品詞が、どれくらいの割合で含まれているのかを分析します%0aあなたの文章の癖がわかるかも？",
  tag: "形態素解析ったー",
  uri: "https://mecab-app.surge.sh",
};

const Header: React.FC = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.2rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          形態素解析ったー
        </Heading>
      </Flex>

      <Box>
        <Button bg="transparent" border="1px" fontSize={14}>
          <Link
            href={`http://twitter.com/share?text=${config.shareTitle}%0a%0a${config.shareText}%0a%0a%23${config.tag}%0a${config.uri}`}
            style={{ textDecoration: "none" }}
            isExternal
          >
            Twitterにシェア
          </Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
