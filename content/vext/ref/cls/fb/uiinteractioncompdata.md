---
title: UIInteractionCompData (Frostbite Container)
---
### Base Classes

[UI3dIconCompData](UI3dIconCompData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIInteractionCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UIInteractionCompData(UIInteractionCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIInteractionCompData([UI3dIconCompData](UI3dIconCompData) other)                | Upcast an instance of type [UI3dIconCompData](UI3dIconCompData) to [UIInteractionCompData](UIInteractionCompData).                |
| UIInteractionCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIInteractionCompData](UIInteractionCompData).                  |
| UIInteractionCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIInteractionCompData](UIInteractionCompData).                                      |
| UIInteractionCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIInteractionCompData](UIInteractionCompData). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| repairSnapDistance | number |             |
| repairSnapCircle   | bool   |             |
| pickupShrinkSnap   | bool   |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIInteractionCompData](UIInteractionCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIInteractionCompData](UIInteractionCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
