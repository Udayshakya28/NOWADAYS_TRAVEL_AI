# Nowadays Travel AI - Universal Group Travel Platform

## Overview

Nowadays Travel AI is a comprehensive web application designed to streamline group travel planning through AI-powered automation. Built as a proposal for expanding Nowadays AI's venue coordination expertise into complete travel management, the platform serves both corporate teams and friend groups with the tagline "From idea to itinerary."

The platform transforms the traditional 20+ hour manual travel planning process into a 5-minute automated experience, providing intelligent itinerary generation, real-time budget tracking and splitting, and centralized travel management for any group size or purpose.

The application serves as a modern alternative to fragmented travel planning workflows by offering unified destination research, flight and hotel comparisons, budget optimization, and collaborative trip coordination - whether for business meetings, team retreats, or social adventures with friends.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system including primary/secondary color schemes
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for consistent type safety across the stack
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Development Server**: Custom Vite integration for hot module replacement in development
- **Error Handling**: Centralized error middleware with structured error responses

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Development Storage**: In-memory storage implementation for rapid prototyping
- **Database Provider**: Neon serverless PostgreSQL for production deployment

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Schema**: Basic user model with username and ID-based identification
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations

### External Dependencies
- **Database**: Neon serverless PostgreSQL for scalable data persistence
- **UI Framework**: Radix UI primitives for accessible component foundations
- **Validation**: Zod for runtime type validation and schema definition
- **Form Management**: React Hook Form with resolvers for form state management
- **Date Handling**: date-fns for date manipulation and formatting
- **Development Tools**: ESBuild for production builds and tsx for development execution

The architecture follows a modern full-stack pattern with clear separation between client and server concerns, enabling scalable development and deployment while maintaining type safety throughout the application stack.