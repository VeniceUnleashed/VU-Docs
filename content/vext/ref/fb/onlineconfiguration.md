---
title: OnlineConfiguration
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| OnlineConfiguration()                                                          | Create a new instance of this container type.                                                                                 |
| OnlineConfiguration(OnlineConfiguration other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| OnlineConfiguration([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [OnlineConfiguration](/vext/ref/fb/onlineconfiguration/).                                      |
| OnlineConfiguration([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OnlineConfiguration](/vext/ref/fb/onlineconfiguration/). |

## Properties

| Name         | Type                                       | Description |
| ------------ | ------------------------------------------ | ----------- |
| backend      | [BackendType](/vext/ref/fb/backendtype/)                 |             |
| provider     | [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset/) |             |
| richPresence | [RichPresenceData](/vext/ref/fb/richpresencedata/)       |             |
| chat         | [ChatSettings](/vext/ref/fb/chatsettings/)               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [OnlineConfiguration](/vext/ref/fb/onlineconfiguration/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OnlineConfiguration](/vext/ref/fb/onlineconfiguration/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
