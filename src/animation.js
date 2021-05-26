export const pageAnimation = {
  animate: (staggerChildern = 0.9 , duration = 1)=>({
    hidden: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        when: "beforeChildern",
        staggerChildern,
      },
    },
    exit: {
      opacity: 0,
      y: 300,
      transition: {
        duration: 1,
      },
    },
  })
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
