import React from "react";
import { Pressable, View, Text } from "react-native";
import { Theme } from "../../styles";
import styles from "./styles";
import useAppSelector from "src/hooks/useAppSelector";

type OptionProps = {
    titleIcon: React.ReactElement;
    title: string;
    subTitle: string;
    actionIcon: React.ReactElement;
    onPress: () => void;
};

export default function Option({
    titleIcon,
    title,
    subTitle,
    actionIcon,
    onPress,
}: OptionProps): React.ReactElement {
    const theme = useAppSelector((state) => state.theme);

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.infoWrapper}>
                {titleIcon}
                <View style={styles.titleWrapper}>
                    <Text style={[styles.titleText, { color: Theme[theme].text_primary }]}>
                        {title}
                    </Text>
                    <Text style={[styles.subTitleText, { color: Theme[theme].text_secondary }]}>
                        {subTitle}
                    </Text>
                </View>
            </View>
            {actionIcon}
        </Pressable>
    );
}
