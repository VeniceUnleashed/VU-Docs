---
title: SyncedBFSettings
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SyncedBFSettings()                                                          | Create a new instance of this container type.                                                                           |
| SyncedBFSettings(SyncedBFSettings other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SyncedBFSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [SyncedBFSettings](SyncedBFSettings).                    |
| SyncedBFSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SyncedBFSettings](SyncedBFSettings). |

## Properties

| Name                      | Type   | Description |
| ------------------------- | ------ | ----------- |
| gameModeCounterModifier   | number |             |
| unlicensedUnlocksUnlocked | bool   |             |
| noMinimap                 | bool   |             |
| noHud                     | bool   |             |
| noMinimapSpotting         | bool   |             |
| no3dSpotting              | bool   |             |
| noNameTag                 | bool   |             |
| onlySquadLeaderSpawn      | bool   |             |
| teamSwitchingAllowed      | bool   |             |
| memoryDefragUI            | bool   |             |
| memoryGarbageCollectHavok | bool   |             |
| memoryDefragGlobal        | bool   |             |
| allUnlocksUnlocked        | bool   |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SyncedBFSettings](SyncedBFSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SyncedBFSettings](SyncedBFSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
