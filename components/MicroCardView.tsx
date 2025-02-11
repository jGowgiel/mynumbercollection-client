import { getCardColor } from "@/styles/getCardColor";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

type MicroCardViewProps = {
    number: number;
};

export function MicroCardView(props: MicroCardViewProps) {
    const { background, foreground } = getCardColor(props.number);
    const borderColor = props.number < 0 ? "#00000066" : "#ffffff66";
    const textColor = props.number >= 0 ? "#000000" : "#ffffff";
    const backgroundShade = props.number >= 0 ? "#ffffff66" : "#000000";
    return (
        <View
            style={{
                ...styles.microCard,
                backgroundColor: background,
                borderColor,
            }}
        >
            <View
                style={{
                    ...styles.depthWrapper,
                    ...(props.number < 0 ? styles.negativeStyleOverrides : {}),
                }}
            >
                <Text
                    variant="labelSmall"
                    style={{
                        ...styles.microText,
                        color: textColor,
                    }}
                >
                    {props.number}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    microCard: {
        paddingTop: 6,
        height: 51,
        width: 36,
        borderRadius: 6,
        borderWidth: 3,
    },
    depthWrapper: {
        borderColor: "#00000066",
        backgroundColor: "#ffffff66",
        borderTopColor: "#00000033",
        borderTopWidth: 1,
        borderLeftColor: "#00000033",
        borderLeftWidth: 1,
        borderBottomColor: "#ffffff33",
        borderBottomWidth: 2,
        borderRightColor: "#ffffff33",
        borderRightWidth: 2,
    },
    negativeStyleOverrides: {
        backgroundColor: "transparent",
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
    },
    microText: {
        marginTop: 5,
        marginBottom: 5,
        textAlign: "center",
        fontWeight: 500,
    },
});
