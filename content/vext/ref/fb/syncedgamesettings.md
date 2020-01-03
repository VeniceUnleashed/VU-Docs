---
title: SyncedGameSettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SyncedGameSettings()                                                          | Create a new instance of this container type.                                                                               |
| SyncedGameSettings(SyncedGameSettings other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SyncedGameSettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [SyncedGameSettings](/vext/ref/fb/syncedgamesettings/).                    |
| SyncedGameSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SyncedGameSettings](/vext/ref/fb/syncedgamesettings/). |

## Properties

| Name                             | Type   | Description |
| -------------------------------- | ------ | ----------- |
| maxAllowedLatency                | number |             |
| manDownTimeModifier              | number |             |
| bulletDamageModifier             | number |             |
| difficultyIndex                  | number |             |
| disableRegenerateHealth          | bool   |             |
| enableFriendlyFire               | bool   |             |
| allowClientSideDamageArbitration | bool   |             |
| disableToggleEntryCamera         | bool   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SyncedGameSettings](/vext/ref/fb/syncedgamesettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SyncedGameSettings](/vext/ref/fb/syncedgamesettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
