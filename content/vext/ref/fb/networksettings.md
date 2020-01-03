---
title: NetworkSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| NetworkSettings()                                                          | Create a new instance of this container type.                                                                         |
| NetworkSettings(NetworkSettings other)                                     | Create a reference copy of an instance of the same type.                                                              |
| NetworkSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [NetworkSettings](NetworkSettings). |

## Properties

| Name                            | Type   | Description |
| ------------------------------- | ------ | ----------- |
| protocolVersion                 | number |             |
| titleId                         | string |             |
| clientPort                      | number |             |
| serverPort                      | number |             |
| maxGhostCount                   | number |             |
| maxClientCount                  | number |             |
| maxClientFrameSize              | number |             |
| maxServerFrameSize              | number |             |
| xlspAddress                     | string |             |
| serverAddress                   | string |             |
| clientConnectionDebugFilePrefix | string |             |
| serverConnectionDebugFilePrefix | string |             |
| timeNudgeGhostFrequencyFactor   | number |             |
| timeNudgeBias                   | number |             |
| connectTimeout                  | number |             |
| useFrameManager                 | bool   |             |
| timeSyncEnabled                 | bool   |             |
| incrementServerPortOnFail       | bool   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [NetworkSettings](NetworkSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [NetworkSettings](NetworkSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
