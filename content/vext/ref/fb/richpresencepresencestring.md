---
title: RichPresencePresenceString
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| RichPresencePresenceString()                                                          | Create a new instance of this container type.                                                                                               |
| RichPresencePresenceString(RichPresencePresenceString other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| RichPresencePresenceString([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring/). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| sid          | string |             |
| interpolated | bool   |             |
| index        | number |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
