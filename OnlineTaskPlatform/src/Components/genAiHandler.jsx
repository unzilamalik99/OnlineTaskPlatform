const genAiHandler = {
  someProperty: "value",
  someOtherProperty: "anotherValue",

  initialized: false,
  initialize: function (config) {
    this.someProperty = config.someProperty;
    this.someOtherProperty = config.someOtherProperty;
    this.initialized = true;
  },
};

export const initializeGenAiHandler = (config) => {
  if (!genAiHandler.initialized) {
    try {
      genAiHandler.initialize({
        someProperty: config.someProperty,
        someOtherProperty: config.someOtherProperty,
      });
    } catch (error) {
      console.error("Error initializing GenAi handler:", error);
    }
  }
};

export default genAiHandler;
