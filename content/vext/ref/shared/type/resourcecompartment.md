---
title: ResourceCompartment
---

The [ResourceCompartment](/vext/ref/shared/type/resourcecompartment) enum represents the various logical compartments that the game loads game data and assets into, and is used for logical separation and data lookups.

## Values

| Name | Description |
| ---- | ----------- |
| **ResourceCompartment\_First\_** | Value: **0** |
| **ResourceCompartment\_Static** | This compartment contains core game data (eg. shared configuration and level lists) that gets loaded at startup and remains loaded until the game shuts down.<br/>Value: **0** |
| **ResourceCompartment\_Frontend** | This compartment primarily contains UI data and assets.<br/>Value: **1** |
| **ResourceCompartment\_LoadingScreen** | This compartment contains data for the level loading screens.<br/>Value: **2** |
| **ResourceCompartment\_Game** | This compartment contains the main game data for a specific level (usually everything that's in the main level bundle).<br/>Value: **3** |
| **ResourceCompartment\_Dynamic\_Begin\_** | Value: **4** |
| **ResourceCompartment\_Dynamic\_Synchronized\_Begin\_** | This marks the first compartment that is dynamically allocated to host synchronized data (synchronized as in data that is loaded on both the server and the client). Such data is usually data / assets in gamemode-specific bundles.<br/>Value: **4** |
| **ResourceCompartment\_Dynamic\_Synchronized\_End\_** | Value: **104** |
| **ResourceCompartment\_Dynamic\_ClientOnly\_Begin\_** | This marks the first compartment that is dynamically allocated to host client-only data. Such data is usually data / assets in weapon bundles.<br/>Value: **105** |
| **ResourceCompartment\_Dynamic\_ClientOnly\_End\_** | Value: **205** |
| **ResourceCompartment\_Dynamic\_End\_** | Value: **205** |
| **ResourceCompartment\_Count\_** | Value: **205** |
| **ResourceCompartment\_Forbidden** | Value: **205** |

