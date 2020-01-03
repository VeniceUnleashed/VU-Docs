---
title: EntitySettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| EntitySettings()                                                          | Create a new instance of this container type.                                                                       |
| EntitySettings(EntitySettings other)                                      | Create a reference copy of an instance of the same type.                                                            |
| EntitySettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [EntitySettings](/vext/ref/fb/entitysettings/).                    |
| EntitySettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntitySettings](/vext/ref/fb/entitysettings/). |

## Properties

| Name                             | Type                                   | Description |
| -------------------------------- | -------------------------------------- | ----------- |
| outOfEntityBusNetworkIdThreshold | number                                 |             |
| executionMode                    | [ExecutionModeType](/vext/ref/fb/executionmodetype/) |             |
| spawnSubLevelsFromLogic          | bool                                   |             |
| editorGameViewEnable             | bool                                   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [EntitySettings](/vext/ref/fb/entitysettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntitySettings](/vext/ref/fb/entitysettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
