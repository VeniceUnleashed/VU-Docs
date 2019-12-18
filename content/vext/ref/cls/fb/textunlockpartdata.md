---
title: TextUnlockPartData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| TextUnlockPartData()                                                          | Create a new instance of this container type.                                                                               |
| TextUnlockPartData(TextUnlockPartData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| TextUnlockPartData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TextUnlockPartData](TextUnlockPartData). |

## Properties

| Name           | Type                               | Description |
| -------------- | ---------------------------------- | ----------- |
| shaderNodeName | string                             |             |
| meshBlueprint  | [ObjectBlueprint](ObjectBlueprint) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [TextUnlockPartData](TextUnlockPartData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TextUnlockPartData](TextUnlockPartData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
