declare namespace React {
  interface UIEvent {
    target: {
      scrollLeft: number
      scrollWidth: number
      clientWidth: number
    }
  }

}