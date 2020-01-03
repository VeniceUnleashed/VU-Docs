---
title: MixGroup
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                         | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| MixGroup()                                                          | Create a new instance of this container type.                                                           |
| MixGroup(MixGroup other)                                            | Create a reference copy of an instance of the same type.                                                |
| MixGroup([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixGroup](MixGroup). |

## Properties

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| name             | string |             |
| groupIndex       | number |             |
| parentGroupIndex | number |             |

## Methods

| Type                 | Name            | Parameters                                     |
| -------------------- | --------------- | ---------------------------------------------- |
| [MixGroup](MixGroup) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixGroup](MixGroup) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
