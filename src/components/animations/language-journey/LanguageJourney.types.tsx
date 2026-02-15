import type { LanguageScene } from "./LanguageJourney.styles";

export interface Props {
    pythonIcon: string;
    jsIcon: string;
    htmlIcon: string;
  }

export interface LanguageStep {
    id: string;
    icon: string;
    title: string;
    description: string;
    SceneComponent: typeof LanguageScene;}