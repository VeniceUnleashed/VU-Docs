---
title: VersionData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| VersionData()                                                          | Create a new instance of this container type.                                                                 |
| VersionData(VersionData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| VersionData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VersionData](VersionData).                                      |
| VersionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VersionData](VersionData). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| disclaimer | string |             |
| version    | number |             |
| dateTime   | string |             |
| branchId   | string |             |
| gameName   | string |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [VersionData](VersionData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VersionData](VersionData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
