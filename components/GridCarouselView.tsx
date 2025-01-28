import { useState } from "react";
import { TouchableHighlight, View } from "react-native";
import GridView from "./GridView";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

type GridCarouselViewProps = {
    numberToCount: Map<number, number>;
    startingPageNumber?: number;
    pressedCardInGrid: (card: number) => void;
};

export default function GridCarouselView(props: GridCarouselViewProps) {
    const [pageNumber, setPageNumber] = useState(props.startingPageNumber ?? 0);

    const numberSet = new Set<number>(props.numberToCount.keys());
    const maxNumber = Math.max(0, ...numberSet);
    const maxPageNumber = Math.floor(maxNumber / 100);

    const minNumber = Math.min(0, ...numberSet);
    const minPageNumber = Math.floor(minNumber / 100);

    const theme = useTheme();

    const leftColor =
        pageNumber === minPageNumber
            ? theme.colors.onSurfaceDisabled
            : theme.colors.onSurface;
    const rightColor =
        pageNumber === maxPageNumber
            ? theme.colors.onSurfaceDisabled
            : theme.colors.onSurface;
    const arrowSize = 36;

    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableHighlight
                onPress={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber === minPageNumber}
            >
                <AntDesign
                    name="left"
                    color={leftColor}
                    size={arrowSize}
                ></AntDesign>
            </TouchableHighlight>
            <GridView
                numberToCount={props.numberToCount}
                startNumber={100 * pageNumber}
                pressedCardInGrid={props.pressedCardInGrid}
            />
            <TouchableHighlight
                onPress={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber === maxPageNumber}
            >
                <AntDesign
                    name="right"
                    color={rightColor}
                    size={arrowSize}
                ></AntDesign>
            </TouchableHighlight>
        </View>
    );
}
