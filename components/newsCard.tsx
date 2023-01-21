import { Image, Text } from "@chakra-ui/react";
import React from "react";

interface newsCardProps {
  cardWidth?: string;
  title: string;
  titleSize: string;
  banner?: string;
  imgWidth?: string;
  imgHeight?: string | any;
  description?: string;
  desSize?: string;
  titleMaxHeight?: string;
  titleAlign?: boolean;
}

const NewsCard = ({ cardWidth, title, titleSize, banner, imgWidth, imgHeight, titleMaxHeight, titleAlign, description, desSize }: newsCardProps) => {
  return (
    <div
      style={{
        width: cardWidth,
        margin: "15px 0",
      }}
    >
      <Image margin={"10px auto"} src={banner} alt={banner} width={imgWidth} height={imgHeight} />
      <Text overflow={"hidden"} maxHeight={titleMaxHeight} textOverflow={"ellipsis"} color={"var(--color-light)"} fontSize={titleSize} textAlign={titleAlign ? "center" : "left"}>
        {title}
      </Text>
      <Text fontSize={desSize}>{description}</Text>
    </div>
  );
};

export default NewsCard;
