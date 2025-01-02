import {Text, Pressable, PressableProps} from 'react-native';
import { s } from './styles';

type Props = PressableProps & {
    iconId: string;
    isSelected: boolean;
    name: string;
}

export function Category({iconId, isSelected = false, name, ...rest}: Props) {
    return(
        <Pressable style={[s.container]} {...rest}>
            <Text style={[s.name]}>{name}</Text>
        </Pressable>
    )
}