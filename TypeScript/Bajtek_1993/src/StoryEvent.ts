export class StoryEvent {
    storyEventId: number;
    description: string;
    probability: number;
    typeOfEvent: string

    constructor(storyEventId: number, description: string, probability: number, typeOfEvent: string) {
      this.storyEventId = storyEventId;
      this.description = description;
      this.probability = probability;
      this.typeOfEvent = typeOfEvent;
    }
  }