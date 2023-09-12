import {
  HeaderSectionsComponent,
  HeaderSectionsIcon,
  HeaderSectionsText,
  STATUS_COLOR,
} from "./Header-sections.styles";

interface IHeaderSectionsProps {
  icon: React.ReactNode;
  iconColor: keyof typeof STATUS_COLOR;
  title: string;
  subTitle: string;
}

export function HeaderSections(props: IHeaderSectionsProps) {
  return (
    <HeaderSectionsComponent>
      <HeaderSectionsIcon color={props.iconColor}>
        {props.icon}
      </HeaderSectionsIcon>
      <HeaderSectionsText>
        <h4>{props.title}</h4>
        <p>{props.subTitle}</p>
      </HeaderSectionsText>
    </HeaderSectionsComponent>
  );
}
