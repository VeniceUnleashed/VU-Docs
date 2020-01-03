---
title: OnlineProviderAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| OnlineProviderAsset()                                                          | Create a new instance of this container type.                                                                                 |
| OnlineProviderAsset(OnlineProviderAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| OnlineProviderAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset/).                                      |
| OnlineProviderAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset/). |

## Properties

| Name           | Type                                                           | Description |
| -------------- | -------------------------------------------------------------- | ----------- |
| configurations | [OnlineProviderConfiguration](/vext/ref/fb/onlineproviderconfiguration/)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
