---
title: OnlineProviderAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| OnlineProviderAsset()                                                          | Create a new instance of this container type.                                                                                 |
| OnlineProviderAsset(OnlineProviderAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| OnlineProviderAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [OnlineProviderAsset](OnlineProviderAsset).                                      |
| OnlineProviderAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OnlineProviderAsset](OnlineProviderAsset). |

## Properties

| Name           | Type                                                           | Description |
| -------------- | -------------------------------------------------------------- | ----------- |
| configurations | [OnlineProviderConfiguration](OnlineProviderConfiguration)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [OnlineProviderAsset](OnlineProviderAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OnlineProviderAsset](OnlineProviderAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
