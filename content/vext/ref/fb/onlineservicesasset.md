---
title: OnlineServicesAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| OnlineServicesAsset()                                                          | Create a new instance of this container type.                                                                                 |
| OnlineServicesAsset(OnlineServicesAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| OnlineServicesAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [OnlineServicesAsset](OnlineServicesAsset).                                      |
| OnlineServicesAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OnlineServicesAsset](OnlineServicesAsset). |

## Properties

| Name           | Type                                           | Description |
| -------------- | ---------------------------------------------- | ----------- |
| onlineServices | [PresenceServiceData](PresenceServiceData)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [OnlineServicesAsset](OnlineServicesAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OnlineServicesAsset](OnlineServicesAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
