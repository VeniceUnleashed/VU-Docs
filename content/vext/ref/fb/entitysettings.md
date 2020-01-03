---
title: EntitySettings
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| EntitySettings()                                                          | Create a new instance of this container type.                                                                       |
| EntitySettings(EntitySettings other)                                      | Create a reference copy of an instance of the same type.                                                            |
| EntitySettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [EntitySettings](EntitySettings).                    |
| EntitySettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntitySettings](EntitySettings). |

## Properties

| Name                             | Type                                   | Description |
| -------------------------------- | -------------------------------------- | ----------- |
| outOfEntityBusNetworkIdThreshold | number                                 |             |
| executionMode                    | [ExecutionModeType](ExecutionModeType) |             |
| spawnSubLevelsFromLogic          | bool                                   |             |
| editorGameViewEnable             | bool                                   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [EntitySettings](EntitySettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntitySettings](EntitySettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
