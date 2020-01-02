---
title: PresenceGameConfigurationServiceData
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceGameConfigurationServiceData()                                                          | Create a new instance of this container type.                                                                                                                   |
| PresenceGameConfigurationServiceData(PresenceGameConfigurationServiceData other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| PresenceGameConfigurationServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceGameConfigurationServiceData](PresenceGameConfigurationServiceData).          |
| PresenceGameConfigurationServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceGameConfigurationServiceData](PresenceGameConfigurationServiceData).                                      |
| PresenceGameConfigurationServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceGameConfigurationServiceData](PresenceGameConfigurationServiceData). |

## Properties

| Name      | Type                                                       | Description |
| --------- | ---------------------------------------------------------- | ----------- |
| configUrl | [OnlineEnvironmentConsoleUrl](OnlineEnvironmentConsoleUrl) |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceGameConfigurationServiceData](PresenceGameConfigurationServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceGameConfigurationServiceData](PresenceGameConfigurationServiceData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
