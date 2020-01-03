---
title: AntEnumeration
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| AntEnumeration()                                                          | Create a new instance of this container type.                                                                       |
| AntEnumeration(AntEnumeration other)                                      | Create a reference copy of an instance of the same type.                                                            |
| AntEnumeration([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntEnumeration](/vext/ref/fb/antenumeration/). |

## Properties

| Name     | Type             | Description |
| -------- | ---------------- | ----------- |
| antAsset | [AntRef](/vext/ref/fb/antref/) |             |
| value    | number           |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [AntEnumeration](/vext/ref/fb/antenumeration/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntEnumeration](/vext/ref/fb/antenumeration/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
