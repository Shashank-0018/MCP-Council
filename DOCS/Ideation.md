# MCP-Council Ideation Report 

## Problem Statement

Currently, converting a REST API into an MCP server requires:
- Manual coding of tool definitions, handlers, and protocol wrappers
- Setting up infrastructure (Express, MCP protocol, deployment)
- Publishing to NPM and submitting to MCP Registry

This process takes hours/days and requires technical expertise, limiting MCP ecosystem growth.

## Vision

**MCP-Council automates the entire pipeline**: User provides API endpoints → Platform generates MCP server → Auto-deploys and publishes.

Make any REST API accessible to AI assistants in minutes, not days.

## Target Users

- **Phase 1**: Developers with public APIs wanting MCP integration
- **Phase 2-3**: Companies with authenticated APIs, paid tier users
- **Phase 4**: Non-technical users building custom APIs + MCP tools

## Section: Phase Distribution of the Project and scopes

### Phase 1:

We will create a simple MVP of MCP-Council that will take the inputs from the users about the different endpoints and will  store them and create a record of tools and their endpoints.

Each endpoint will have a unique id and will be stored in a database.
The user will be able to add, update, delete and view the endpoints.
Each Tool will be associated with an endpoint.

For MVP Phase 1 we will use a public api endpoint

### Phase 2:

We will add the option for the authenticated endpoints

### Phase 3:

We will start customising our platform by adding concept of 'credits' each credit will be equivalent to 1 MCP Tool created

### Phase 4:

We will add the option for the users to create their own APIs as well as Tools 

## Section: MVP

### Part: Google Login

[] Setup a Cloud Project 
[] Make a setup for Supabase DB
[] Make a setup for Google Login
[] Make a record of users

### Part: API Documentation

[] Keep a record of public API endpoints
[] keep records of params and descriptions that is needed by mcp wrappers
[] Make a template for API Documentation and store it in a database

### Part: MCP Wrappers

[] Make a wrapper for each API endpoint
[] Make a record of MCP Wrappers
[] Make a record of MCP Tools

### Part: Deployement

[] Deploy the application on a server
[] Make a record of the a sub-route for the user's mcp server
[] Make a record of the server

### Part: NPM Package

[] Make a npm package for MCP-Council's MCP's
[] Make a record of the npm package
[] Make a record of the npm package version

### Part: Addition in MCP Registry

[] For each MCP Server created with help of users we will add a record in MCP Registry
[] Store MCP Registry and npm package in db 
[] deployement will be ours 


## Section: Key Features (What Makes This Unique)

1. **Full Automation**: Zero manual coding required
2. **End-to-End Pipeline**: From API input → Deployed + Published server
3. **Based on Production Framework**: Uses proven patterns from Framework.md
4. **Multi-Phase Growth**: Public APIs → Auth APIs → Credits → Custom APIs
