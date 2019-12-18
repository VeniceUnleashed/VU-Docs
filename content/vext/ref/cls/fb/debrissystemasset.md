---
title: DebrisSystemAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| DebrisSystemAsset()                                                          | Create a new instance of this container type.                                                                             |
| DebrisSystemAsset(DebrisSystemAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| DebrisSystemAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [DebrisSystemAsset](DebrisSystemAsset).                                      |
| DebrisSystemAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DebrisSystemAsset](DebrisSystemAsset). |

## Properties

| Name           | Type                                   | Description |
| -------------- | -------------------------------------- | ----------- |
| havokMeshes    | [DebrisHavokInfo](DebrisHavokInfo)\[\] |             |
| havokMeshCount | number                                 |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [DebrisSystemAsset](DebrisSystemAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DebrisSystemAsset](DebrisSystemAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
