---
title: PresenceGameConfigurationServiceData
---
### Base Classes

[PresenceServiceData](/vext/ref/fb/presenceservicedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceGameConfigurationServiceData()                                                          | Create a new instance of this container type.                                                                                                                   |
| PresenceGameConfigurationServiceData(PresenceGameConfigurationServiceData other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| PresenceGameConfigurationServiceData([PresenceServiceData](/vext/ref/fb/presenceservicedata/) other)          | Upcast an instance of type [PresenceServiceData](/vext/ref/fb/presenceservicedata/) to [PresenceGameConfigurationServiceData](/vext/ref/fb/presencegameconfigurationservicedata/).          |
| PresenceGameConfigurationServiceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PresenceGameConfigurationServiceData](/vext/ref/fb/presencegameconfigurationservicedata/).                                      |
| PresenceGameConfigurationServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceGameConfigurationServiceData](/vext/ref/fb/presencegameconfigurationservicedata/). |

## Properties

| Name      | Type                                                       | Description |
| --------- | ---------------------------------------------------------- | ----------- |
| configUrl | [OnlineEnvironmentConsoleUrl](/vext/ref/fb/onlineenvironmentconsoleurl/) |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceGameConfigurationServiceData](/vext/ref/fb/presencegameconfigurationservicedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceGameConfigurationServiceData](/vext/ref/fb/presencegameconfigurationservicedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
