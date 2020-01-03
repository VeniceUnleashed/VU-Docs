---
title: DebrisSystemAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| DebrisSystemAsset()                                                          | Create a new instance of this container type.                                                                             |
| DebrisSystemAsset(DebrisSystemAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| DebrisSystemAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [DebrisSystemAsset](/vext/ref/fb/debrissystemasset/).                                      |
| DebrisSystemAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebrisSystemAsset](/vext/ref/fb/debrissystemasset/). |

## Properties

| Name           | Type                                   | Description |
| -------------- | -------------------------------------- | ----------- |
| havokMeshes    | [DebrisHavokInfo](/vext/ref/fb/debrishavokinfo/)\[\] |             |
| havokMeshCount | number                                 |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [DebrisSystemAsset](/vext/ref/fb/debrissystemasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebrisSystemAsset](/vext/ref/fb/debrissystemasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
