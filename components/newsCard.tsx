import { Image, Text } from "@chakra-ui/react";
import React from "react";

interface newsCardProps {
  cardWidth?: string;
  title: string;
  titleSize: string;
  banner?: string;
  width?: string;
  height?: string;
  description?: string;
  desSize?: string;
}

const NewsCard = ({
  cardWidth,
  title,
  titleSize,
  banner,
  width,
  height,
  description,
  desSize,
}: newsCardProps) => {
  return (
    <div style={{ width: cardWidth, margin: "15px 0" }}>
      <Image
        margin={"10px 0"}
        src={banner}
        alt={banner}
        width={width}
        height={height}
      />
      <Text
        overflow={"hidden"}
        maxHeight={"4rem"}
        textOverflow={"ellipsis"}
        color={"var(--color-light)"}
        fontSize={titleSize}
      >
        {title}
      </Text>
      <Text fontSize={desSize}>{description}</Text>
    </div>
  );
};

export default NewsCard;
