export class StoryEvent {
    storyEventId: number;
    description: string;
    probability: number;
    typeOfEvent: string;
    strength: number;

    constructor(storyEventId: number, description: string, probability: number, typeOfEvent: string, strength: number) {
      this.storyEventId = storyEventId;
      this.description = description;
      this.probability = probability;
      this.typeOfEvent = typeOfEvent;
      this.strength = strength;
    }
  }