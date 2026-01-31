// Export both Event and Booking models for easy imports throughout the application
export { default as Event } from './event.model';
export { default as Booking } from './booking.model';

// Export TypeScript interfaces for type safety
export type { IEvent } from './event.model';
export type { IBooking } from './booking.model';
