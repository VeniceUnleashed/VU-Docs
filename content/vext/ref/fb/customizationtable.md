---
title: CustomizationTable
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CustomizationTable()                                                          | Create a new instance of this container type.                                                                               |
| CustomizationTable(CustomizationTable other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| CustomizationTable([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomizationTable](CustomizationTable). |

## Properties

| Name        | Type                                                     | Description |
| ----------- | -------------------------------------------------------- | ----------- |
| unlockParts | [CustomizationUnlockParts](CustomizationUnlockParts)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [CustomizationTable](CustomizationTable) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomizationTable](CustomizationTable) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
