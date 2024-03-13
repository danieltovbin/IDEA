export const calculateRemainingDays = (limitDate: Date | string): number => {
    const limitDateTime = typeof limitDate === 'string' ? new Date(limitDate) : limitDate;
    const date = new Date(limitDateTime);
    const today = new Date();
    const difference = Math.ceil((date.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return difference;
  };