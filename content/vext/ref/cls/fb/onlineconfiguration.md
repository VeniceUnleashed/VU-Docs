---
title: OnlineConfiguration (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| OnlineConfiguration()                                                          | Create a new instance of this container type.                                                                                 |
| OnlineConfiguration(OnlineConfiguration other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| OnlineConfiguration([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [OnlineConfiguration](OnlineConfiguration).                                      |
| OnlineConfiguration([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [OnlineConfiguration](OnlineConfiguration). |

## Properties

| Name         | Type                                       | Description |
| ------------ | ------------------------------------------ | ----------- |
| backend      | [BackendType](BackendType)                 |             |
| provider     | [OnlineProviderAsset](OnlineProviderAsset) |             |
| richPresence | [RichPresenceData](RichPresenceData)       |             |
| chat         | [ChatSettings](ChatSettings)               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [OnlineConfiguration](OnlineConfiguration) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [OnlineConfiguration](OnlineConfiguration) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
