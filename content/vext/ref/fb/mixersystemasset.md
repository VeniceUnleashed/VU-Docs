---
title: MixerSystemAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| MixerSystemAsset()                                                          | Create a new instance of this container type.                                                                           |
| MixerSystemAsset(MixerSystemAsset other)                                    | Create a reference copy of an instance of the same type.                                                                |
| MixerSystemAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [MixerSystemAsset](MixerSystemAsset).                                      |
| MixerSystemAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerSystemAsset](MixerSystemAsset). |

## Properties

| Name   | Type                     | Description |
| ------ | ------------------------ | ----------- |
| groups | [MixGroup](MixGroup)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [MixerSystemAsset](MixerSystemAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerSystemAsset](MixerSystemAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
